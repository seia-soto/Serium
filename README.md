[Seriumium#2403](https://seriumium.tk/)
==================================================

[![Meet us at Discord](https://discordapp.com/api/guilds/383944425648422912/embed.png?style=banner2)](https://discord.gg/YzBZNQq)

* Fast and which has many functions for your server. Ready for production!
* Supports multi-languages by aliases for you. `;도움말`

Feedback
----------------------------
**[Check it out!](https://goo.gl/forms/xRF686tSyanEZSBy1)**

Prompts (Commands)
----------------------------
### 1. Seriumium; available when you launch yourself

* exec
`;exec Shell`

* script
`;script JavaScript`

* se
`;se blacklist USER-ID`

### 2. Moderations; requires your GUILD_MANAGE permission to launch

* delete
`;delete amount-UPTO-45`

* sayd
`;sayd something`

### 3. Gladsome

* probability
`;probaility ABOUT`

* choose
`;choose A B C D`

* rps
`;rps R/P/S`

* ready
`;ready`

* note
`;note`

* say
`;say something`

### 4. Images

* avatar
`;avatar <@MENTION>`

* neko
`;neko`

* cat
`;cat`

* dog
`;dog`

* shy
`;shy`

### 5. About

* help
`;help`

* library
`;library WIKIPEDIA-DOCUMENT`

* ping
`;ping`

* search
`;search ON-GOOGLE`

* serverinfo
`;serverinfo`

* userinfo
`;userinfo <@MENTION>`

* namuwiki
`;namuwiki NAMUWIKI-DOCUMENT`

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
