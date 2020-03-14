const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');



const server = new ApolloServer({typeDefs});

server.listen().then(({ url})=>{
	console.log(`Highlights server ready at ${url}`);
})

let highlights = [
	{
		id: "1",
		content: "One day I will find the right words, and they will be simple.",
		title: "Mobi Dick",
		author: "John Doe"
	},
	{
		id: "2",
		content:
			"In the limits of a situation there is humor, there is grace, and everything else.",
		title: "Americana",
		author: "Chimamanda Adechie"
	}
];



