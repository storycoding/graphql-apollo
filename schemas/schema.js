import Book from './book.js'

const RootQuery = `
	type RootQuery {
		book(title: Sring) : Book
	}
`

const SchemaDefinition = `
	schema {
		query: RootQuery
	}
`;

export default makeExecutableSchema({
	typeDefs: [
		SchemaDefinition,
		RootQuery,
		...Book
	],
	resolvers: {}
});