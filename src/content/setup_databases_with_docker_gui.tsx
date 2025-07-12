const setup_databases_with_docker_gui = `

# 🐳 Run PostgreSQL & MongoDB Locally with Docker (Plus GUI Access)

Setting up databases locally can be a real pain. You deal with installation headaches, port conflicts, config issues… you name it. But with **Docker**, it's as easy as running a few commands. In this post, we’ll set up **PostgreSQL** and **MongoDB** in your development environment using Docker — and the best part? You’ll get full GUI access through **pgAdmin** and **Mongo Express**.

---

##  What You’ll Need

- [Docker Desktop](https://www.docker.com/products/docker-desktop) installed and running
- Basic command line knowledge
- 5 minutes of your time 😎

---

##  Project Setup

Let’s keep both PostgreSQL and MongoDB in one Docker Compose file so you can manage them together.

\`\`\`bash
mkdir docker-databases && cd docker-databases
touch docker-compose.yml
\`\`\`

---

## 🔸 Part 1: PostgreSQL + pgAdmin

PostgreSQL is a robust relational database, and **pgAdmin** is the most popular GUI for managing it.

###  docker-compose.yml (PostgreSQL section)

\`\`\`yaml
services:
  postgres:
    image: postgres:15
    container_name: postgres_container
    environment:
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: admin123
      POSTGRES_DB: mydb
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  pgadmin:
    image: dpage/pgadmin4
    container_name: pgadmin_container
    environment:
      PGADMIN_DEFAULT_EMAIL: admin@local.com
      PGADMIN_DEFAULT_PASSWORD: admin123
    ports:
      - "5050:80"
    depends_on:
      - postgres
\`\`\`

###  Access pgAdmin GUI

1. Open browser → [http://localhost:5050](http://localhost:5050)
2. Login:
   - Email: \`admin@local.com\`
   - Password: \`admin123\`
3. Add new server:
   - Name: \`Local PostgreSQL\`
   - Host: \`postgres\`
   - Port: \`5432\`
   - Username: \`admin\`
   - Password: \`admin123\`

###  Connect via Prisma (example)

\`\`\`prisma
datasource db {
  provider = "postgresql"
  url      = "postgresql://admin:admin123@localhost:5432/mydb"
}
\`\`\`

---

## 🔸 Part 2: MongoDB + Mongo Express

MongoDB is a flexible NoSQL document database, and **Mongo Express** gives us a simple web UI to inspect it.

###  docker-compose.yml (MongoDB section)

\`\`\`yaml
  mongodb:
    image: mongo:6
    container_name: mongodb_container
    ports:
      - "27017:27017"
    volumes:
      - mongodb_data:/data/db

  mongo-express:
    image: mongo-express
    container_name: mongo_express_container
    ports:
      - "8081:8081"
    environment:
      ME_CONFIG_MONGODB_SERVER: mongodb
      ME_CONFIG_MONGODB_ADMINUSERNAME: root
      ME_CONFIG_MONGODB_ADMINPASSWORD: example
    depends_on:
      - mongodb
\`\`\`

###  Access Mongo Express GUI

- Open browser → [http://localhost:8081](http://localhost:8081)
- Collections and databases are auto-listed. No login setup required by default.

###  Connect via Mongoose (example)

\`\`\`ts
mongoose.connect('mongodb://root:example@localhost:27017/')
\`\`\`

---

##  Enable Persistent Data

We’ve included volumes in our Docker Compose to make sure your data doesn’t vanish when containers are restarted:

\`\`\`yaml
volumes:
  postgres_data:
  mongodb_data:
\`\`\`

To wipe all data (like a fresh install):

\`\`\`bash
docker-compose down -v
\`\`\`

---

##  Run Everything

Start all containers together:

\`\`\`bash
docker-compose up -d
\`\`\`

Stop everything:

\`\`\`bash
docker-compose down
\`\`\`

---

##  Final Thoughts

That’s it! You now have **PostgreSQL + pgAdmin** and **MongoDB + Mongo Express** running locally with zero system pollution. Whether you're building APIs, prototyping fullstack apps, or just exploring, this setup is fast, visual, and easy to manage.

### Bonus Ideas:
- Add Redis or MySQL to the stack
- Use .env files for secrets
- Mount custom SQL or JS seed scripts
- Dockerize your backend and connect to these databases

Happy coding & containerizing! 🐳💻

`;

export default setup_databases_with_docker_gui;
