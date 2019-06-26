# Updating code

Mainly, most of code didn't get compatibility to version 4.
However updating without service initialization is important for production as well.

## Commands

Defautly, structures of command is same. Below is sample code of [`ping` command](/src/commands/common/ping) on version 4.

```javascript
const command = (client, message, preferences, translations) => {
  message.channel.send(translations.loading).then(loadingMessage => {
    loadingMessage.edit(translations.result.bind({latency: new Date() - loadingMessage.createdTimestamp}))
  })
}
const properties = {
  name: 'ping',
  aliases: ['pong'],

  permission: 'everyone'
}

module.exports.execute = command
module.exports.properties = properties
```

First thing you can see is `usage` key in `properties` moved to `translations` sector.
Because it needs translations. You can edit usage on `translations`.

- Delete `usage` from Command/properties
- Add `usage` to `translations`

Second is `aliases`, and its name moved `alias` to `aliases`.

- Edit `alias` to `aliases`

## Database

Database structures changed a bit.

- `serium_users` without changes, but `preference` to `preferences`
- Delete `serium_servers` table
- Add `serium_guilds` table

```sql
-- User table
CREATE TABLE `database_name`.`serium_users` ( `idx` INT(9) NOT NULL AUTO_INCREMENT , `identify` TEXT(16) NOT NULL , `preferences` VARCHAR(2048) NOT NULL , PRIMARY KEY (`idx`) ) ENGINE = InnoDB;

-- Guild table
CREATE TABLE `database_name`.`serium_guilds` ( `idx` INT(9) NOT NULL AUTO_INCREMENT , `identify` TEXT(16) NOT NULL , `preferences` VARCHAR(2048) NOT NULL , PRIMARY KEY (`idx`) ) ENGINE = InnoDB;
```

## EndPreferenceIndicator

After implement of database on version 3.
Everything got some un-beautified code because of it.

On version 4, it changed all.

- All in one object.

[See `/src/structures/getPreferences.js`](/src/structures/getPreferences.js)
