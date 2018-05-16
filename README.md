[Seriumium#2403](https://seriumium.tk/)
==================================================

[![Meet us at Discord](https://discordapp.com/api/guilds/383944425648422912/embed.png?style=banner2)](https://discord.gg/YzBZNQq)

* Use public version of Seriumium if you don't have any programing experiences.
* Seriumium is using Artistic License 2.0.

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

Be always online
----------------------------
There is some unhandledRejection events and unknown errors on Seriumium.
Use forever to be always online
```bash
sudo npm i -g forever
forever start index.js
```
Open the command prompt or powershell as administrator
```cmd
npm i -g forever
forever start index.js
```

License
----------------------------
Seriumium is licensed under  [Artistic License 2.0 ](https://github.com/Seriumium/seriumium/blob/nightly/LICENSE)
