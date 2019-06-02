/*
[!] This is not official API from MyAnimeList, just a module inside Serium.
*/

const RequestHandler = require('./RequestHandler')

const search = (keyword, type) => {
  return new Promise((resolve, reject) => {
    RequestHandler(`https://myanimelist.net/search/prefix.json?type=all&keyword=${keyword}&v=1`)
      .then(data => {
        const result = JSON.parse(data)

        if (result.categories) {
          const selection = result.categories.find(category => category.type === type)

          if (selection) {
            resolve(selection.items)
          } else {
            reject('NO_RESULT')
          }
        } else {
          reject('NO_RESULT')
        }
      })
      .catch(error => reject(error))
  })
}

module.exports.search = search
