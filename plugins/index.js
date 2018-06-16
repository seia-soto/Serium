// NOTE: seriumium
module.exports.exec = require('./seriumium/exec')
module.exports.notificate = require('./seriumium/notificate')
module.exports.script = require('./seriumium/script')
// NOTE: moderations
module.exports.purge = require('./moderations/delete')
module.exports.sayd = require('./moderations/sayd')
// NOTE: gladsome
module.exports.choose = require('./gladsome/choose')
module.exports.note = require('./gladsome/note')
module.exports.probability = require('./gladsome/probability')
module.exports.ready = require('./gladsome/ready')
module.exports.rps = require('./gladsome/rps')
module.exports.say = require('./gladsome/say')
// NOTE: images
module.exports.avatar = require('./images/avatar')
module.exports.cat = require('./images/cat')
module.exports.dog = require('./images/dog')
module.exports.neko = require('./images/neko')
module.exports.shy = require('./images/shy')
// NOTE: about
module.exports.help = require('./about/help')
module.exports.ping = require('./about/ping')
module.exports.serverinfo = require('./about/serverinfo')
module.exports.userinfo = require('./about/userinfo')
module.exports.invite = require('./about/invite')
// NOTE: wiki
module.exports.library = require('./wiki/library')
module.exports.namuwiki = require('./wiki/namuwiki')
// NOTE: functions
module.exports.colored = require('./functions/colored')
module.exports.search = require('./functions/search')
module.exports.hash = require('./functions/hash')

module.exports.answerList = {
  __comment__ap: 'Administrations levels: it does not contains any translations, alias or options.',
  exec: { worker: exec, language: 'en' },
  notificate: { worker: notificate, language: 'en' },
  script: { worker: script, language: 'en' },
  __comment__dp: 'Do not initialize say and sayd prompt twice.',
  avatar: { worker: avatar, language: 'en' },
  cat: { worker: cat, language: 'en' },
  choose: { worker: choose, language: 'en' },
  purge: { worker: purge, language: 'en' },
  dog: { worker: dog, language: 'en' },
  help: { worker: help, language: 'en' },
  library: { worker: library, language: 'en' },
  namuwiki: { worker: namuwiki, language: 'en' },
  neko: { worker: neko, language: 'en' },
  ping: { worker: ping, language: 'en' },
  probability: { worker: probability, language: 'en' },
  ready: { worker: ready, language: 'en' },
  rps: { worker: rps, language: 'en' },
  say: { worker: say, language: 'en' },
  sayd: { worker: sayd, language: 'en' },
  search: { worker: search, language: 'en' },
  shy: { worker: shy, language: 'en' },
  serverinfo: { worker: serverinfo, language: 'en' },
  userinfo: { worker: userinfo, language: 'en' },
  note: { worker: note, language: 'en' },
  hash: { worker: hash, language: 'en' },
  colored: { worker: colored, language: 'en' },
  invite: { worker: invite, language: 'en' },
  __comment__lpkk: 'Korean Language Pack; remove all these aliases if you do not want to use.',
  '아바타': { worker: avatar, language: 'ko' },
  '고양이': { worker: cat, language: 'ko' },
  '선택': { worker: choose, language: 'ko' },
  '삭제': { worker: purge, language: 'ko' },
  '강아지': { worker: dog, language: 'ko' },
  '도움말': { worker: help, language: 'ko' },
  '라이브러리': { worker: library, language: 'ko' },
  '나무위키': { worker: namuwiki, language: 'ko' },
  '네코': { worker: neko, language: 'ko' },
  '질의': { worker: ping, language: 'ko' },
  '확률': { worker: probability, language: 'ko' },
  '준비': { worker: ready, language: 'ko' },
  '가위바위보': { worker: rps, language: 'ko' },
  '검색': { worker: search, language: 'ko' },
  '부끄러워': { worker: shy, language: 'ko' },
  '서버정보': { worker: serverinfo, language: 'ko' },
  '사용자정보': { worker: userinfo, language: 'ko' },
  '노트': { worker: note, language: 'ko' },
  '해시': { worker: hash, language: 'ko' },
  '색': { worker: colored, language: 'ko' },
  '초대': { worker: invite, language: 'ko' }
}
