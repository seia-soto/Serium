[Serium#2403](https://discordapp.com/api/oauth2/authorize?client_id=429913480708096000&permissions=8&scope=bot)
====


[![Meet us at Discord](https://discordapp.com/api/guilds/383944425648422912/embed.png?style=banner2)](https://discord.gg/YzBZNQq)

* This README.md didn't modifyed! (WARN)
* Supports multi-languages by aliases for you. `;도움말`


Notifications
----
Now the neko prompt will work with channel's status like it is NSFW channel and now bot has the time


Feedback
----
**[Check it out!](https://goo.gl/forms/xRF686tSyanEZSBy1)**


General Informations
----
* Prefix `;`
* [Invite to your server](https://discordapp.com/api/oauth2/authorize?client_id=429913480708096000&permissions=8&scope=bot)


Reporting issues
----
Serium is watting for error reports.
Write logs of console and why in [issues tab](https://github.com/Soto-Seia/Serium/issues).


Preparing the enviroment (Ubuntu)
----
```bash
sudo apt update
sudo apt dist-upgrade
sudo shutdown -r now
```

Upgrade all packages installed on your server and restart it.

```bash
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt install -y nodejs
```

Install the latest version of NodeJS to your server via package manager.

```bash
cd /to/workspace
nano index.js
```

When the NodeJS installed, upload Seriumium or clone with git to workspace and edit `./index.js` file.

```JavaScript
const endpoints = {
  prefix: ';', // NOTE: new RegExp('^<@!?Client ID>')
  Discord: '' // NOTE: process.env.Discord
}
```

You can change values of endpoints to customize to your own.
Insert tokens to `stores/index.configurations`.

```bash
npm install --save
node .
```

Then install the dependencies to execute application and start the application with `node .`.


Upgrading from previous versions
----
Seriumium isn't using additional disk-spaces.
Just do installation again.


Considering previous versions to use
----
We are recommending you to use previous version of Serium if you want to more stable version of Serium and currently the latest previous one is I might 1.3.x and 1.2.14 or upper but errors were not identified.


License
----
Serium is licensed under  [Artistic License 2.0 ](https://github.com/Seia-Soto/Serium/blob/nightly/LICENSE)
