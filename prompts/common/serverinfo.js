const DateFormer = require('@structures/DateFormer')

const filters = {
  explicitContentFilter: [
    '할머니 댁에서 과자를 먹으며 놀던 그 느낌으로 **메세지를 스캔하지 않습니다.**',
    '확인된 사용자를 위한 역할이 구비된 서버를 위해 **역할이 없는 사용자의 메세지를 스캔합니다.**',
    '아주 깨끗한 채팅 환경을 원할 시에는 **모든 멤버의 메세지를 스캔합니다.**'
  ],
  verificationLevel: [
    '**없음**, 제한 없음',
    '**낮음**, 자신의 Discord 계정이 이메일 인증을 받은 적이 있어야 합니다.',
    '**중간**, 추가로 Discord에 가입한지 5분이 지나야 합니다.',
    '**(╯°□°）╯︵ ┻━┻**, 추가로 이 서버의 멤버가 된 지 10분이 지나야 합니다.',
    '**┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻**, 전화 인증이 완료된 Discord 계정이어야 합니다.'
  ],
  mfaLevel: [
    '서버 2단계 인증이 비활성화되어 있습니다.',
    '서버 2단계 인증이 활성화되어 있습니다.'
  ]
}
const regionMap = {
  brazil: ':flag_br: 브라질',
  'eu-central': ':flag_eu: 중유럽',
  hongkong: ':flag_hk: 홍콩',
  india: ':flag_in: 인도',
  japan: ':flag_jp: 일본',
  russia: ':flag_ru: 러시아',
  singapore: ':flag_sg: 싱가포르',
  southafrica: ':flag_za: 남아프리카',
  sydney: ':flag_au: 시드니',
  'us-central': ':flag_us: 미국 중부',
  'us-east': ':flag_us: 미국 동부',
  'us-south': ':flag_us: 미국 남부',
  'us-west': ':flag_us: 미국 서부',
  'eu-west': ':flag_eu: 서유럽'
}

const Prompt = (message, client) => {
  message.channel.send({
    embed: {
      title: message.guild.name,
      description:
        // NOTE: Channels
        `**채널 ${message.guild.channels.size}개**` +
          `(텍스트 채널 ${message.guild.channels.filter(channel => channel.type === 'text').size}개, ` +
          `음성 채널 ${message.guild.channels.filter(channel => channel.type === 'voice').size}개)\n` +
        // NOTE: Emojis
        `**이모지 ${message.guild.emojis.size}개**` +
          `(움직이는 이모지 ${message.guild.emojis.filter(emoji => emoji.animated).size}개)\n` +
        // NOTE: Members
        `**멤버 ${message.guild.memberCount}명**` +
          `(봇 ${message.guild.members.filter(member => member.user.bot).size}개, ` +
          `온라인 ${message.guild.members.filter(member => member.presence.status !== 'offline').size}명, ` +
          `게임 플레이 중 ${message.guild.members.filter(member => member.presence.game).size}명, ` +
          `웹 클라이언트 사용 중 ${message.guild.members.filter(member => (member.presence.clientStatus) ? member.presence.clientStatus.web : false).size}명, ` +
          `모바일 사용 중 ${message.guild.members.filter(member => (member.presence.clientStatus) ? member.presence.clientStatus.mobile : false).size}명, ` +
          `데스크톱 사용 중 ${message.guild.members.filter(member => (member.presence.clientStatus) ? member.presence.clientStatus.desktop : false).size}명)\n` +
        // NOTE: Roles
        `**역할 ${message.guild.roles.size}개**`,
      fields: [
        {
          name: '잠수 채널',
          value: (message.guild.afkChannel) ? `:loud_sound: ${message.guild.afkChannel.name}` : '채널 없음',
          inline: true
        },
        {
          name: '잠수 제한시간',
          value: `${message.guild.afkTimeout}초`,
          inline: true
        },
        {
          name: '서버 가용성',
          value: (message.guild.available) ? ':sparkling_heart: 사용가능' : ':broken_heart: 사용할 수 없음',
          inline: true
        },
        {
          name: '소유자',
          value: `<@${message.guild.ownerID}>`,
          inline: true
        },
        {
          name: 'ID',
          value: message.guild.id,
          inline: true
        },
        {
          name: '지역',
          value: regionMap[message.guild.region],
          inline: true
        },
        {
          name: '서버 생성일',
          value: DateFormer(message.guild.createdTimestamp),
          inline: true
        },
        {
          name: '기본 알림 설정',
          value: (message.guild.defaultMessageNotifications === 'ALL') ? '모든 메세지' : '@mentions만',
          inline: true
        },
        {
          name: '유해 콘텐츠 필터',
          value: filters.explicitContentFilter[message.guild.explicitContentFilter],
          inline: true
        },
        {
          name: '보안 수준',
          value: filters.verificationLevel[message.guild.verificationLevel],
          inline: true
        },
        {
          name: '서버 2단계 인증',
          value: filters.mfaLevel[message.guild.mfaLevel],
          inline: true
        }
      ],
      thumbnail: {
        url: message.guild.iconURL
      }
    }
  })
}
const Properties = {
  name: 'serverinfo',
  description: 'Get current serverinfo.',
  usage: 'serverinfo',

  requiredPermission: 'public'
}

module.exports = Prompt
module.exports.properties = Properties
