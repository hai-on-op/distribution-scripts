const csv = require('csv-parser');
const fs = require('fs-extra');
const fsPromises = require('fs').promises;
const { finished } = require('stream/promises');

const getSubDirs = async dir => {
  const dirFiles = fs.readdirSync(dir);
  return dirFiles.filter(entry => {
    const entryPath = `${dir}/${entry}`;
    return fs.statSync(entryPath).isDirectory();
  });
};

const parseAndFormatFloat = float => parseFloat(parseFloat(float).toFixed(9));

const aggregateResults = async () => {
  const results = {};
  const distroNumber = process.argv[2] || 1;
  const distroDir = `./distributions/distribution-${distroNumber}`;
  const dataDir = `${distroDir}/raw-results`;
  const tokens = await getSubDirs(dataDir);
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    results[token] = {
      all: {}
    };
    const tokenDir = `${dataDir}/${token}`;
    const campaignTypes = await getSubDirs(tokenDir);
    for (let j = 0; j < campaignTypes.length; j++) {
      const campaignType = campaignTypes[j];
      results[token][campaignType] = {};
      // Iterate over campaign type csv files for token
      const arr = [];
      const files = fs.readdirSync(`${tokenDir}/${campaignType}`);
      for (let k = 0; k < files.length; k++) {
        const file = files[k];
        const filePath = `${tokenDir}/${campaignType}/${file}`;
        const stream = fs
          .createReadStream(filePath)
          .pipe(csv(['address', 'total']));
        stream.on('data', data => {
          const address = data.address.trim();
          const total = parseAndFormatFloat(data.total);
          // Add to all list
          if (!results[token].all[address]) {
            results[token].all[address] = total;
          } else {
            results[token].all[address] += total;
          }
          // Add to campaign list
          if (!results[token][campaignType][address]) {
            results[token][campaignType][address] = total;
          } else {
            results[token][campaignType][address] += total;
          }
        });
        await finished(stream);
      }
    }
  }
  return { results, distroDir };
};

const convertToCSV = data => {
  const entries = Object.entries(data);
  entries.sort((a, b) => b[1] - a[1]);
  let csvContent = '';
  entries.forEach(([key, value]) => {
    csvContent += `${key},${parseAndFormatFloat(value)}\n`;
  });
  return csvContent;
};

const saveResults = async (results, path) => {
  const csvContent = convertToCSV(results);
  try {
    fs.writeFileSync(path, csvContent);
  } catch (err) {
    console.error('Error writing to CSV file', err);
  }
};

aggregateResults()
  .then(async ({ results, distroDir }) => {
    const tokens = Object.keys(results);
    for (token of tokens) {
      const outputPath = `${distroDir}/final-results/${token}`;
      await fsPromises.mkdir(outputPath, { recursive: true });
      const tokenResults = results[token];
      const campaignTypes = Object.keys(tokenResults).filter(
        key => key !== 'all'
      );
      console.log('Saving results for token:', token);
      // Save all results
      console.log('....category -> all');
      await saveResults(tokenResults.all, `${outputPath}/all.csv`);
      // Save campaign results
      for (campaignType of campaignTypes) {
        console.log('....category ->', campaignType);
        await saveResults(
          tokenResults[campaignType],
          `${outputPath}/${campaignType}.csv`
        );
      }
    }
  })
  .catch(console.error);
