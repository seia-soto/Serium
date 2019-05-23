const structures = require('@structures')

const {
    NekosLifeAPIParser
} = structures

const Plan = (message, client) => {
    if (!message.channel.nsfw) {
        message.reply('실은 ' + message.guild.name + '는 이런 일은 처리하지 않는다냥?')
    } else {
        NekosLifeAPIParser('hentai').then(imageURI => {
            message.channel.send({
                embed: {
                    title: '으엥...  ' + message.guild.name + '는 이런거 몰라도 되는거 아니야?',
                    image: {
                        url: imageURI
                    }
                }
            })
        }).catch(error => {
            message.reply('미안, 지금 너랑 놀기가 싫다고... 한 번 더 불러봐!')
        })
    }
}
const Properties = {
    name: 'hentai',
    requiredPermission: 'public'
}

module.exports = Plan
module.exports.properties = Properties