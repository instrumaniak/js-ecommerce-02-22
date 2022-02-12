# js-ecommerce-02-22


Overall Requirements:
- Node.js
- Mongodb

Development environment used:
- Ubuntu 20.04
- Node.js: v16.14.0
- NPM: 8.3.1
- MongoDB: 3.6.8 Community (Ubuntu repo)
- Postman: Version 8.12.5 (Ubuntu snap)


## Backend


First time installation, enter the `api` directory. Then copy `.env.sample` to `.env`. Adjust environment variables if needed.

In terminal then run:
```
npm install
npm run seed
```

To start development server:

```
npm run dev
```

Backend dev server runs on port: 5000

### API docs
API documentation for the backend can be found in the `docs` folder. Open the file `jsEcommerce022022.postman_collection.json` with `postman` application.


## Frontend

Enter the `client` directory, from terminal run:

```
npm install
npm start
```

Frontend dev server runs on port: 3000

Currently this is how it looks:

![Ecommerce ScreenShot](./docs/ecommerce-screenshot.jpg)