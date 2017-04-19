import { merge } from 'lodash';
import { makeExecutableSchema } from 'graphql-tools';

const rootSchema = [`
type Query {
	hello: String!
}
`]

const rootResolvers = {
	Query: {
		hello(root, { }) {
			return `Hello`;
		}
	}
}
const schema = [...rootSchema];
const resolvers = merge(rootResolvers);

const executableSchema = makeExecutableSchema({
	typeDefs: schema,
	resolvers,
});

export default executableSchema;
