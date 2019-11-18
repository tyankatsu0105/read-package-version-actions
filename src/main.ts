import * as core from '@actions/core';
import { getPackageVersion } from './getPackageVersion';

async function run() {
  try {
    const path = core.getInput('path');

    core.debug(`Load package.json at ${path}`);

    const result = getPackageVersion(path);
    core.setOutput('version', result);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

// import * as core from '@actions/core';

// async function run() {
//   try {
//     const ms = core.getInput('milliseconds');
//     console.log(`Waiting ${ms} milliseconds ...`);

//     core.debug(new Date().toTimeString());
//     await wait(parseInt(ms, 10));
//     core.debug(new Date().toTimeString());

//     core.setOutput('time', new Date().toTimeString());
//   } catch (error) {
//     core.setFailed(error.message);
//   }
// }

// run();
