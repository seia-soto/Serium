[Seriumium#2403](https://seriumium.tk/)
==================================================

[![Meet us at Discord](https://discordapp.com/api/guilds/383944425648422912/embed.png?style=banner2)](https://discord.gg/YzBZNQq)

* Fast and which has many functions for your server. Ready for production!
* Supports multi-languages by aliases for you. `;도움말`

Feedback
----------------------------
**[Check it out!](https://goo.gl/forms/xRF686tSyanEZSBy1)**

General Informations
----------------------------
* Prefix `;`
* [Invite](https://seriumium.tk/invite)

Prompts (Commands)
----------------------------
### 1. Seriumium; available when you launch yourself

* exec

* script

### 2. Moderations; requires your GUILD_MANAGE permission to launch

* delete

* sayd

### 3. Gladsome

* probability

* choose

* rps

* ready

* note

* say

### 4. Images

* avatar

* neko

* cat

* dog

* shy

### 5. About

* help

* ping

* serverinfo

* userinfo

### 6. Wiki

* library

* namuwiki

### 7. Functions

* search

Setting up server to execute
----------------------------
Connect via SSH to your server and install the latest version of NodeJS; (Currently developed in v10)

And open the test editor and open the file called index.js on root directory.

```JavaScript
const endpoints = {
  prefix: ';', // NOTE: new RegExp('^<@!?Client ID>')
  Discord: process.env.Discord // NOTE: 'Client Token'
}
```

Edit the values of various endpoints.
You can use mention as prefix by using RegExp.

License
----------------------------
Seriumium is licensed under  [Artistic License 2.0 ](https://github.com/Seriumium/seriumium/blob/nightly/LICENSE)
