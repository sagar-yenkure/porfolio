const http_query_method = `

Have you ever needed to send a **complex search request** to your API and wondered:

> "Why am I forced to use POST for something that only reads data?"

For years, developers have been using **POST** as a workaround because **GET** wasn't designed for large or complex queries.

That finally changes.

In **June 2026**, HTTP introduced its first new standard request method in **16 years**: **QUERY**.

It combines the best parts of **GET** and **POST** into a single request method designed specifically for **read-only requests with a request body**.

---

## Why Was QUERY Introduced?

Imagine you're building an API to search users.

A simple GET request works fine at first.

\`\`\`http
GET /users?role=developer&country=India&limit=10
\`\`\`

But requirements grow.

You now need:

- Multiple filters
- Nested conditions
- JSON queries
- SQL-like expressions
- Large request payloads

Your URL quickly becomes difficult to read and maintain.

\`\`\`http
GET /users?select=name,email,skills&limit=10&role=developer&country=India&experience=5&skills=react,nextjs,typescript&sort=experience
\`\`\`

### Problems with GET

- URLs have practical size limits.
- Query parameters appear in browser history and server logs.
- Difficult to send structured JSON.
- Complex encoding becomes painful.
- Not ideal for advanced search APIs.

---

## Why Not Just Use POST?

Most developers eventually switch to POST.

\`\`\`http
POST /users/search
Content-Type: application/json

{
  "select": [
    "name",
    "email",
    "skills"
  ],
  "role": "developer",
  "country": "India",
  "experience": {
    "gte": 5
  },
  "skills": [
    "React",
    "Next.js",
    "TypeScript"
  ],
  "limit": 10,
  "sort": "experience"
}
\`\`\`

While this solves the payload problem, it introduces another one.

POST was designed for **creating or modifying resources**, not searching.

That means:

- Not inherently idempotent.
- Harder to cache.
- Proxies don't know whether replaying the request is safe.
- Every framework invents its own "safe POST" convention.

---

## Meet QUERY

QUERY is a new HTTP request method specifically designed for **read-only operations that require a request body**.

Example:

\`\`\`http
QUERY /users
Content-Type: application/json
Accept: application/json

{
  "select": [
    "name",
    "email",
    "skills"
  ],
  "role": "developer",
  "country": "India",
  "experience": {
    "gte": 5
  },
  "skills": [
    "React",
    "Next.js",
    "TypeScript"
  ],
  "limit": 10,
  "sort": "experience"
}
\`\`\`

Think of it as:

> **A GET-like request that supports a request body.**

---

## Key Benefits

### ✅ Request Body Support

Unlike GET, QUERY allows sending large and structured payloads.

Perfect for:

- JSON filters
- SQL-like queries
- Graph searches
- Elasticsearch queries
- JSONPath expressions

---

### ✅ Safe

QUERY never changes server state.

It is intended only for retrieving data.

---

### ✅ Idempotent

Running the same QUERY request multiple times has the same effect as running it once.

Example:

\`\`\`http
QUERY /users

{
  "role": "developer",
  "country": "India"
}
\`\`\`

Calling it once or ten times simply retrieves matching users.

Unlike:

\`\`\`http
POST /users
\`\`\`

which may create multiple users if repeated.

---

### ✅ Cacheable

Since QUERY is safe and idempotent, proxies, CDNs, and browsers can cache responses much like GET.

This makes complex search endpoints much more efficient.

---

### ✅ Easier API Design

Instead of creating multiple endpoints:

\`\`\`text
GET /users/developers
GET /users/designers
GET /users/managers
GET /users/remote
\`\`\`

You can expose a single endpoint:

\`\`\`http
QUERY /users
\`\`\`

with all filters inside the request body.

For example:

\`\`\`json
{
  "role": "developer",
  "country": "India",
  "remote": true
}
\`\`\`

This keeps APIs:

- Cleaner
- Easier to maintain
- Easier to document
- More flexible

---

## Example Use Cases

QUERY is especially useful for:

- Advanced search APIs
- Analytics dashboards
- Reporting systems
- Elasticsearch queries
- GraphQL-style filtering
- SQL or JSON-based search APIs
- Data exploration tools

---

## Current Adoption

Although QUERY is now an official HTTP method, support is still limited.

**Status**

- ✅ Standardized (RFC 10008 – June 2026)
- ⏳ Limited support in servers and frameworks
- ⏳ Limited support in HTTP clients and API tools
- 🚀 Wider adoption is expected over the next few years

For now, it's more important to understand the concept than to start using it in production.

---

## Final Thoughts

For years, developers had to choose between:

- **GET**, which struggles with large or complex queries.
- **POST**, which works technically but isn't semantically correct for read-only operations.

The new **QUERY** method fills that gap by providing a standardized way to send **complex, read-only requests with a request body** while retaining the safety, idempotency, and cacheability of GET.

That said, **QUERY is still very new**. Although it was standardized in **June 2026 (RFC 10008)**, support across servers, frameworks, browsers, proxies, and API tools is still limited. It will likely take some time before it becomes widely adopted.

Until then, you probably won't be using QUERY in production just yet—but it's definitely worth understanding. As the HTTP ecosystem evolves, understanding standards like QUERY will help you design cleaner, more expressive APIs as support continues to grow.

`;

export default http_query_method;