import * as hapi from 'hapi';
import { graphqlHapi, graphiqlHapi } from 'graphql-server-hapi';
import executableSchema from './schema';

const server: hapi.Server = new hapi.Server();

const HOST = 'localhost';
const PORT = 8765;

server.connection({
    host: HOST,
    port: PORT,
});

server.route({
    method: 'GET',
    path: '/',
    handler: (request: hapi.Request, reply: hapi.IReply) => {
        reply('Hello World');
    },
});

server.register({
    register: graphqlHapi,
    options: {
      path: '/graphql',
      graphqlOptions: {
        schema: executableSchema,
      },
      route: {
        cors: true,
      },
    },
});

server.register({
    register: graphiqlHapi,
    options: {
        path: '/graphiql',
        graphiqlOptions: {
            endpointURL: '/graphql',
        },
    },
});

server.start((err: any) => {
    if (err) {
        throw err;
    }
    // console.log(`Server running at: ${server.info.uri}`);
});
