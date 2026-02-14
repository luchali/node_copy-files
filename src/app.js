/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function main() {
  const params = process.argv.slice(2);
  const sourceTerminal = params[0];
  const destTerminal = params[1];

  if (!sourceTerminal || !destTerminal) {
    console.error('Please enter source and destination');

    return;
  }

  if (sourceTerminal === destTerminal) {
    return;
  }

  fs.copyFile(sourceTerminal, destTerminal, (err) => {
    if (err) {
      console.error('Error copying file:', err.message);
    }
  });
}

main();
