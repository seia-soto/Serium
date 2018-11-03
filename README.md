# Serium
[![license]](/LICENSE)

----

The way how to get improved creativity and multi-purpose in Discord.

## Table of Contents

- [Terms](#terms)
  - [Terms of Service](#terms-of-service)
  - [License](#license)
- [Installation](#installation)
  - [Requirements](#requirements)
  - [Cloning into yours](#cloning-into-yours)
  - [Installing dependencies](#installing-dependencies)
  - [Setting up](#setting-up)
    - [Modifying properties](#modifying-properties)
    - [Definition of administrator](#definition-of-administrator)
  - [Starting process](#starting-process)
- [Plugins(commands)](#plugins)

## Terms

### Terms of service

[Korean](https://b2.seia.io/terms)

### License

Copyright 2018 Seia-Soto, All rights reserved.

with [Artistic 2.0](/LICENSE)

## Installation

### Requirements

You need below softwares before launching Serium.
* [NodeJS](https://nodejs.org)
* NPM (this will installed when NodeJS installation)

### Cloning-into-yours

First at all, please clone this project to your server.
```
git clone https://github.com/Seia-Soto/Serium.git
cd ./Serium
```

### Installing-dependencies

Then install the dependencies into project.
```
npm i -s
```

### Setting-up

#### Definition-of-administrator

The way how to define administrator of the application.
```
cd ./structures/construct
vi permissions.js
```

Change the array named special(this.special) below to yours.
```js
// NOTE: ./structures/construct/permissions.js

const properties = require('../../scopes/properties')

module.exports = message => {
  const special = [
    //'324541397988409355' // NOTE: Seia#0002
    'YOUR ID HERE',
    'DEFINE OTHER',
    ...
  ]
  let permission = properties.application.permissions.common

  if (message.member.permissions.has('MANAGE_GUILD')) permission = (permission | properties.application.permissions.moderate)
  if (message.author.id in special) permission = (permission | properties.application.permissions.administrate)

  return permission
}
```

#### Modifying-properties

**Serium has [ToS](https://b2.seia.io/terms) in Korean, please do not remove link of ToS.**

Next is link of invite.
```
cd ./scopes
vi properties.js
```

Change the String in variables(this.client.invite, this.client.application.prefix).
```js
// NOTE: ./scopes/properties.js

module.exports = {
  application: {
    prefix: ';',
    permissions: {
      administrate: 0b001,
      moderate: 0b010,
      common: 0b100
    }
  },
  client: {
    options: {
      autoReconnect: true,
      disableEveryone: true
    },
    token: 'N',
    invite: 'https://discordapp.com/oauth2/authorize?client_id=429913480708096000&permissions=8&scope=bot'
  },
  embed: {
    color: 16761035
  }
}
```

### Starting process

Just launch! If you want to launch it 24/7, use package manager for uptime.

```
node .
```

## Plugins

This won't descripted! Please see the help documentation in the bot or website.
