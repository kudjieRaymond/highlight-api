const highlights = require('./data');

module.exports  = {
	Query: {
		getHighlights: () => highlights,
		getHighlight: (parent, args) => {
			return highlights.find(highlight => highlight.id === args.id);
		}
	},

	Mutation: {
		addHighlight: (parent, args)=>{
			const highlight ={
				id:String(highlights.length + 1),
				title: args.title,
				content: args.content || '',
				author: args.author || ''
			}

			highlights.push(highlight);
			return highlight;
		},
		
		updateHighlight:(parent,args)=>{
			const index = highlights.findIndex(highlight=> highlight.id === args.id);
			const highlight ={
				id: args.id,
				title: highlights[index].title,
				content: args.content,
				author: highlights[index].author
			};
			highlights[index] = highlight;

			return  highlight;

		},

		deleteHighlight:(parent, args)=>{
			const deletedHighlight = highlights.find(highlight=>highlight.id === args.id);
			highlights.filter(highlight=> highlight.id !== args.id);

			return deletedHighlight;
		}


	}
};