<p align="center">
  <a href="#" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" width="200" alt="WhatsApp Logo" /></a>
</p>

# Whats'Up Wallet
![Static Badge](https://img.shields.io/badge/Nes.js-red?logo=Nest.js&logoColor=white)
![Static Badge](https://img.shields.io/badge/Node.js-darkgreen?logo=Node.js&logoColor=white)
![Static Badge](https://img.shields.io/badge/Javascript-yellow)

A revolutionary way to manage and transact money through WhatsApp by creating digital wallets and facilitating a seamless transaction system via messages.

## Description
This was a project buil for the EthOnline 2023 hackathon. It wond a price by Scroll <br/>
https://ethglobal.com/showcase/wasup-wallet-kyzze<br/>
I colaborate in the smart contrac building and inplementacion with the nest.js backend<br/>

## the proyect

Embrace the ease of managing and transacting money right through your WhatsApp with Whats'Up Wallet! Our app is designed to revolutionize the way you handle your finances by integrating seamless wallet creation and transaction management via WhatsApp. With Whats'Up Wallet, you get your own secure wallet to store, send, and receive money effortlessly. Engage in transactions with just a simple message. Whether you're splitting bills, sharing costs, or just need a friendly and straightforward way to manage your finances, Whats'Up Wallet simplifies it all. Our robust transaction system ensures your money is handled safely while offering you a convenient and intuitive platform. Get on board with Whats'Up Wallet, where your finances are just a message away!

## Configuration

To configure the database connection, you will need to create a file named `orm.config.json` at the root of the project with the following structure:

```json
{
    "type": "your database type",
    "host": "your database host",
    "port": "your database port",
    "username": "your database username",
    "password": "your database password",
    "database": "your database name",
    "entities": ["src/**/*.entity.ts"],
    "migrations": ["src/database/migrations/*.ts"],
    "cli": {
        "migrationsDir": "src/database/migrations"
    }
}
```

For development and production, it's recommended to use separate environment files. Create a file named .env.development for development and a file named .env.production for production. These files should be located at the root of the project.

# .env.development or .env.production
```js
# Application environment variables.
NODE_ENV=your_environment
PORT=0000

# Database environment variables.
DB_PORT=0000
DB_HOST=https://example.com
DB_NAME=example
DB_USER=username
DB_PASSWORD=password
```

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
