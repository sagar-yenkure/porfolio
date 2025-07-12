const how_to_use_graphql_with_nodejs = `

#  Getting Started with GraphQL in Node.js & Express

GraphQL is a powerful query language for your API that allows clients to request exactly the data they need. In this guide, you'll learn how to build a GraphQL API using **Node.js**, **Express**, and **Apollo Server**, with **Prisma** for database access and **Apollo Client** for frontend integration.

---

##  Tech Stack Overview

- **Express** – Web server framework
- **Apollo Server** – GraphQL server integration for Node.js
- **GraphQL** – Query language for APIs
- **Prisma** – ORM for database access
- **TypeScript** – Optional, improves DX with type safety
- **Apollo Client** – React client for GraphQL APIs

---

##  Step 1: Initialize the Backend Project

Set up your backend project with necessary packages:

\`\`\`bash
mkdir graphql-api && cd graphql-api
npm init -y

# Install server packages
npm install express @apollo/server graphql body-parser cors

# Install TypeScript and types
npm install -D typescript ts-node @types/node @types/express
\`\`\`

Create a basic tsconfig.json for TypeScript:

\`\`\`json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  }
}
\`\`\`

---

##  Step 2: Create the Apollo GraphQL Server

###  Define Your Schema and Resolvers

\`\`\`ts
// src/lib/apolloServer.ts
import { ApolloServer } from '@apollo/server';
import prisma from './prisma'; // Ensure Prisma is properly configured

const typeDefs = \`
  type User {
    id: ID!
    name: String!
    email: String!
    image: String
    address: String
  }

  type Query {
    hello: String
    users: [User]
  }

  type Mutation {
    createUser(name: String!, email: String!): User
  }
\`;

const resolvers = {
  Query: {
    hello: () => 'Hello from GraphQL!',
    users: async () => await prisma.user.findMany(),
  },
  Mutation: {
    createUser: async (_: any, args: { name: string; email: string }) => {
      return await prisma.user.create({
        data: {
          name: args.name,
          email: args.email,
        },
      });
    },
  },
};

export const server = new ApolloServer({ typeDefs, resolvers });
\`\`\`

---

##  Step 3: Set Up Express Server

\`\`\`ts
// src/server.ts
import express from 'express';
import { expressMiddleware } from '@apollo/server/express4';
import bodyParser from 'body-parser';
import cors from 'cors';
import { server } from './lib/apolloServer';

const startServer = async () => {
  const app = express();

  await server.start();

  app.use(bodyParser.json());
  app.use(cors());
  app.use('/graphql', expressMiddleware(server));

  app.listen(8081, () => {
    console.log('🚀 Server is running at http://localhost:8081/graphql');
  });
};

startServer();
\`\`\`

---

##  Step 4: Setup Apollo Client in the Frontend

Install dependencies:

\`\`\`bash
npm install @apollo/client graphql
\`\`\`

Create the Apollo client instance

\`\`\`ts
// lib/apolloClient.ts
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8081/graphql',
  cache: new InMemoryCache(),
});

export default client;
\`\`\`

Wrap your application with ApolloProvider

\`\`\`tsx
// src/app/layout.tsx
import { ApolloProvider } from '@apollo/client';
import client from '../lib/apolloClient';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <ApolloProvider client={client}>
          <body>{children}</body>
        </ApolloProvider>
     </html>
  );
}
\`\`\`

---

##  Step 5: Query GraphQL Data in Your Page


\`\`\`tsx
// src/app/page.tsx
import { useQuery, gql } from '@apollo/client';

const GET_USERS = gql\`
  query {
    users {
      id
      name
      email
    }
  }
\`;

const Home = () => {
  const { data, loading, error } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {data.users.map((user) => (
          <li key={user.id}>
            {user.name} – {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
\`\`\`

## We can also add authentication in graphql api


\`\`\`ts

// src/lib/auth.ts
export const getLoggedInUser = async (req: any) => {

  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) return null;

  const token = authHeader.split(" ")[1];

  // Simulate token verification and user fetch
  if (token === "mock-token") {
    return { id: "user_123", name: "Demo User", email: "demo@example.com" };
  }

  return null;
};
\`\`\`


\`\`\`ts
// src/server.ts
import express from 'express';
import { expressMiddleware } from '@apollo/server/express4';
import bodyParser from 'body-parser';
import cors from 'cors';
import { server } from './lib/apolloServer';
import prisma from './lib/prisma';
import { getLoggedInUser } from './lib/auth';

const startServer = async () => {
  const app = express();

  await server.start();

  app.use(
    '/graphql',
    cors(),
    bodyParser.json(),
    expressMiddleware(server, {
      context: async ({ req }) => {
        const user = await getLoggedInUser(req);
        return { user };
      },
    })
  );

  app.listen(8081, () => {
    console.log('Server is running at http://localhost:8081/graphql');
  });
};

startServer();
\`\`\`


\`\`\`ts

const resolvers = {
  Query: {
    hello: () => 'Hello from GraphQL!',
    users: async (_: any, __: any, context: any) => {
      return await context.prisma.user.findMany();
    },
  },
  Mutation: {
    createUser: async (_: any, args: { name: string; email: string }, context: any) => {
      if (!context.user) {
        throw new Error("Unauthorized: User not logged in.");
      }

      return await context.prisma.user.create({
        data: {
          name: args.name,
          email: args.email,
        },
      });
    },
  },
};
\`\`\`



---

##  Benefits of Using GraphQL

- Fetch only the data you need
- Use a **single endpoint** for all queries & mutations
- Strongly typed schema & auto-generated docs
- Great developer experience with tools like GraphiQL
- Scales well with growing frontend needs

---

##  Final Thoughts

GraphQL is an excellent choice for modern APIs. Combined with Node.js, Express, and Prisma, it gives you a clean and powerful stack that’s easy to scale and integrate with frontend frameworks like React or Next.js.

You can enhance this base with:

-  **Auth** (JWT, OAuth, Sessions)
-  **Type generation** using GraphQL Code Generator
-  **Real-time** features with subscriptions
-  Deploy on **Vercel**, **Render**, or **Railway**

Start small. Evolve your API as your app grows. Happy coding! 👨‍💻🚀

`;

export default how_to_use_graphql_with_nodejs;
