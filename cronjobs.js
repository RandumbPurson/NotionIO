const CronJob = require("node-cron").CronJob;

var gmail_watch = new CronJob("0 0 0 * * ?", () => {
	
})

gmail_watch.start();