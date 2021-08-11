// Built-In
const readline = require('readline');
const { spawn } = require('child_process');

// 3rd-party
const {PubSub} = require('@google-cloud/pubsub');
const prompt = require('prompt-sync')();

// Set credentials
// process.env.GOOGLE_APPLICATION_CREDENTIALS = 'C:/Users/emmet/Projects/Credentials/clientlibs-27d248009fce.json';

class PubSubEmulator{

	// Init topic and subscription
	async initPubSub() {
		let projectName = prompt('Project Name:');
		let topicName = prompt('Topic Name:');
		let subName = prompt('Subscription Name:');
		
		this.emulator = new PubSub({ projectName });
		console.log(this.emulator);
		if (this.emulator.isEmulator == false) {
			throw new Error('Not running in local emulator!');
		}
		[this.topic] = await this.emulator.createTopic(topicName);
		//console.log(this.topic);
		this.subscription = await this.topic.createSubscription(subName);

		console.log('Finished Initializing');
	}

	
}

var emulator = new PubSubEmulator();
emulator.initPubSub();