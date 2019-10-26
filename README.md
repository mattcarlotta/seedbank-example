# Seedbank
Infrastructure for the 3E Process Seedbank.

Node/Express in back, React in front.
Both apps are stored here for now, although we'll probably want to split these out into separate repos eventually.

## Installation
`cd anarchive` and run `npm install`. Then do the same from the client directory. You'll also need to install knex globally, like `npm i -g knex`. Then copy `.env.example` as `.env` and fill out the values.

## Usage

### Development
To start a dev environment, `cd anarchive` and `npm run dev`. This starts both the server and client concurrently (view the client at `localhost:3000`).

### React Development
To require authentication to view a given resource, just wrap the route declaration with the `withAuth` helper. E.g., in `/client/App.js`:

```
<Route exact path='/events' component={withAuth(EventsPage)} />
```

## To do
1. Host as actual backend for http://3e-pr0cess-s33dbank.com
2. Testing (at least for auth)
3. More sophisticated handling for JWT invalidation/timeouts (logout currently just clears localStorage)
4. Refactor `/auth` endpoints (split out operations into `/services/auth-helpers`)
5. Password reset
