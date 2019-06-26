# Change note

- Now application is within shard support to update without re-starting application for serving non-stop updates. [See `/src/index.js`](/src/index.js)
- Difference prefix per server, this works as default and currently not supports preferences based configuration. [See `/src/structures/getPreferences.js`](/src/structures/getPreferences.js)
- Cool down term accepted, you can switch this feature using preferences file. See [`/src/preferences/client.js`](/src/preferences/client.js) and [`/src/handles/message.js`](/src/handles/message.js).
- Database prefix and table naming configuration supported based on preferences files. [See `/src/preferences/database.js`](/src/preferences/database.js)

Fixes and updates from version 3.

I started every version from scratch. However, there is improvements in version 4 that previous version didn't.

- Now code is with `async` and `await` syntax.
- Now command and handles can be implemented more simple than previous.
- Moved database driver `MySQL` to `MySQL2` package.
