# Serium

The way how to get improved creativity and multi-purpose in Discord.

## Table of Contents

- [Concept](#Concept)
- [Copyright](#Copyright)
- [Development](#Development)

----

# Concept

The project Serium is a framework based on Discord.JS.
You can easily do complex( and duplicated) parts of bot development such as parsing the message and calculating the user's permission.

# Copyright

[Seia-Soto](https://github.com/Seia-Soto) is holding the copyright of this project.

## Contributors

[![](https://sourcerer.io/fame/Seia-Soto/Seia-Soto/Serium/images/0)](https://sourcerer.io/fame/Seia-Soto/Seia-Soto/Serium/links/0)[![](https://sourcerer.io/fame/Seia-Soto/Seia-Soto/Serium/images/1)](https://sourcerer.io/fame/Seia-Soto/Seia-Soto/Serium/links/1)[![](https://sourcerer.io/fame/Seia-Soto/Seia-Soto/Serium/images/2)](https://sourcerer.io/fame/Seia-Soto/Seia-Soto/Serium/links/2)[![](https://sourcerer.io/fame/Seia-Soto/Seia-Soto/Serium/images/3)](https://sourcerer.io/fame/Seia-Soto/Seia-Soto/Serium/links/3)[![](https://sourcerer.io/fame/Seia-Soto/Seia-Soto/Serium/images/4)](https://sourcerer.io/fame/Seia-Soto/Seia-Soto/Serium/links/4)[![](https://sourcerer.io/fame/Seia-Soto/Seia-Soto/Serium/images/5)](https://sourcerer.io/fame/Seia-Soto/Seia-Soto/Serium/links/5)[![](https://sourcerer.io/fame/Seia-Soto/Seia-Soto/Serium/images/6)](https://sourcerer.io/fame/Seia-Soto/Seia-Soto/Serium/links/6)[![](https://sourcerer.io/fame/Seia-Soto/Seia-Soto/Serium/images/7)](https://sourcerer.io/fame/Seia-Soto/Seia-Soto/Serium/links/7)

### Sponsors

- [DetegiCE](https://github.com/DetegiCE)
- [ttakkku](https://github.com/ttakkku)

### Translators

- [Choux_a_la_Creme](https://discord.gg/9XYvKeT)

### Others

- [Danuel](https://github.com/Danue1)
- [Ranol](https://github.com/RanolP)
- 네모
- [starterDroid](https://github.com/Bananamilk452)

# Development

## Installation

You need to install the software below before we start over.

- [Node.JS](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)
- Build tools such as [Build essential](http://linux-command.org/ko/build-essential.html) or [Visual Studio Build Tools](https://go.microsoft.com/fwlink/?LinkId=691126) to build fresh packages
- [Yarn](https://yarnpkg.com/lang/en/)
- [Git](https://git-scm.com/)

1. Copy the repository address(in HTTPS) using a green button(Clone or download) under the programming language indicator of GitHub and clone the repository using it.

```sh
git clone https://github.com/serium-departments/Serium.git
```

2. Go to the directory which you cloned the project and install dependencies using Yarn(package manager)

```sh
yarn
```

3. Initialize the required tables in your database for your bot.

- [View SQL to create YOUR_DATABASE.users table](/etc/sql/create-users.table.sql)
- [View SQL to create YOUR_DATABASE.guilds table](/etc/sql/create-guilds.table.sql)

4. Copy the example file of configuration and edit it for your bot.

```sh
cp config.example.js config.js
vi config.js
```

### Configuration

```js
module.exports = {
  app: {
    token: '', // NOTE: The Discord bot's token
    ux: {
      basicPermissions: [
        // NOTE: The permissions required basically to use bot.
        'SEND_MESSAGES'
      ]
    },
    client: {
      // NOTE: Check the clientOptions(https://discord.js.org/#/docs/main/stable/typedef/ClientOptions) in Discord.JS documentation.
      ...
    },
    fork: {
      // NOTE: The options for sharding the bot.
      // WARNING: No support for sharding application yet.
      ...
    }
  },
  database: {
    options: {
      // NOTE: Options for knex.
      client: 'mysql2', // WARNING: No support for other DBMS engines.
      connection: {
        host: 'localhost',
        user: '',
        password: '',
        database: ''
      },
      pool: {
        min: 1,
        max: 8
      }
    },
    tables: {
      // NOTE: Name of tables created.
      user: 'user',
      guild: 'guild'
    }
  },
  permissions: [
    // NOTE: You can add or remove permissions here.
    {
      name: 'common', // NOTE: Name of permission
      flag: 0x00, // NOTE: Flag of permission(bit)
      required: {
        // NOTE: Required condition to grant this permission.
        identify: [
          // NOTE: Discord ID.
        ],
        roles: [
          // NOTE: Name of required roles.
        ],
        permissions: [
          // NOTE: Check the permissionFlags(https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS) in Discord.JS documentation.
        ]
      }
    },
    ...
  ],
  defaults: {
    // NOTE: Default values of configuration for each user( or guild, ...).
    settings: {
      // NOTE: Default settings(in database) of user and guild.
      user: {
        index: 0,
        identify: 0,
        language: 'ko'
      },
      guild: {
        index: 0,
        identify: 0,
        prefix: 'se'
      }
    }
  }
}
```
