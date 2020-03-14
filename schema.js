const { gql } = require("apollo-server");

const typeDefs = gql`
	type Highlight {
		id: ID!
		title: String!
		content: String
		author: String
	}

	type Query {
		getHighlights: [Highlight]!
		getHighlight(id: ID!): Highlight
	}

	type Mutation {
		addHighlight(title: String!, content:String , author:String): Highlight!
		updateHighlight(id:ID!,  content:String!): Highlight!
		deleteHightlight(id:ID!): Highlight
	}
`;

module.exports = typeDefs;
