console.log("Hello, World!")

const grandiose = require('grandiose');

grandiose.find({showLocalSources: true})
	.then(console.log)
	.catch(console.error);