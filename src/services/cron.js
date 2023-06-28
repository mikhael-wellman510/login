'use strict'

const CronJob = require("cron").CronJob;

const logError = (job, error) => {
  return console.error(`[${new Date().toISOString()}|${job}] ${error}`);
};

// Schedule tasks to be run on the server

// every day at 00:00
const jobService = new CronJob("0 0 * * *", async () => {
  try {
    console.log("jobService");
  } catch (error) {
    logError("jobUpdateContentStatus", error);
  }
});

module.exports = () => {
  jobService.start();
};

// Docs - https://github.com/kelektiv/node-cron
// Cron pattern - https://crontab.guru/