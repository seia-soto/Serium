module.exports = {
  categories: {
    common: '일반'
  },
  commands: {
    ping: {
      _properties: {
        description: 'Discord 서버와의 지연 시간을 확인합니다.',
        usage: 'ping'
      },
      loading: '로드 중',
      result: '퐁! {latency}ms가 소요되었습니다.'
    }
  },
  events: {
    message: {
      unsupportedChannel: '{type} 채널은 지원하지 않습니다.',
      leakedPermission: '{channel}에 메세지를 보낼 권한이 없습니다. 서버의 관리자에게 문의해주세요.',
      scarcePermission: '{command} 명령어를 사용할 권한이 없습니다.',
      coolingDown: '잠시만 기다려주세요. 명령어는 {seconds}초마다 사용할 수 있습니다.'
    }
  },
  common: {
    category: '카테고리'
  }
}
