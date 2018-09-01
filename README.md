# rec-labs-server

This is a simple express server written to host the recursions-laboratory react client.
It provides simple routes to all hosted files, and handles the POST /contact route for sending email from web users.

## Usage

- Install Server
```
git clone https://github.com/recursion/git-labs-server
cd git-labs-server
npm install
```

-- Install Client
from server root:
```
git clone https://github.com/recursion/recursions-laboratory client
cd client
npm install
npm build
```

Server Dev:
```
npm run start:dev
```

Production
```
npm run start
```

## License

MIT License 2018 Michael Symmes
