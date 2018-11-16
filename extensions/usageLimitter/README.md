# Serium-Extension-usageLimitter

----

To limmit usage of plugins.

# Installation

## Cloning into yours

```
cd ./path/to/your/project/.../extensions
git clone https://github.com/Seia-Deployments/Serium-Extension-usageLimitter.git

...

Cloning into Serium-Extension-usageLimitter...

...

mv Serium-Extension-usageLimitter usageLimitter
```

## Registering extension

```js
// NOTE: file: ./extensions/index.js
const extensions = Object.values({
  usageLimitter: require('./usageLimitter')
})

module.exports.fetch = (client, message, options) => {
  extensions.forEach(extension => extension(client, message, options))
}
```

## Configuring properties

In this configuration, you can specific limmit time of usage.

```js
// NOTE: file: ./scopes/properties.js
module.exports = {
  ...
  thirdparties: {
    usageLimitter: {
      timeout: 2000
    }
  }
}
```
