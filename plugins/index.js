// NOTE: seriumium
const exec = require('./serium/exec')
const notificate = require('./serium/notificate')
const script = require('./serium/script')
// NOTE: moderations
const purge = require('./moderations/delete')
const sayd = require('./moderations/sayd')
// NOTE: gladsome
const choose = require('./gladsome/choose')
const note = require('./gladsome/note')
const probability = require('./gladsome/probability')
const ready = require('./gladsome/ready')
const rps = require('./gladsome/rps')
const say = require('./gladsome/say')
const osu = require('./gladsome/osu')
// NOTE: images
const avatar = require('./images/avatar')
const cat = require('./images/cat')
const dog = require('./images/dog')
const neko = require('./images/neko')
// NOTE: about
const help = require('./about/help')
const ping = require('./about/ping')
const serverinfo = require('./about/serverinfo')
const userinfo = require('./about/userinfo')
// NOTE: wiki
const library = require('./wiki/library')
const librewiki = require('./wiki/librewiki')
const namuwiki = require('./wiki/namuwiki')
// NOTE: functions
const colored = require('./functions/colored')
const search = require('./functions/search')
const hash = require('./functions/hash')
const itunes = require('./functions/itunes')

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
  serverinfo: { worker: serverinfo, language: 'en' },
  userinfo: { worker: userinfo, language: 'en' },
  note: { worker: note, language: 'en' },
  hash: { worker: hash, language: 'en' },
  colored: { worker: colored, language: 'en' },
  itunes: { worker: itunes, language: 'en' },
  librewiki: { worker: librewiki, language: 'en' },
  //osu: { worker: osu, language: 'en' },
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
  '서버정보': { worker: serverinfo, language: 'ko' },
  '사용자정보': { worker: userinfo, language: 'ko' },
  '노트': { worker: note, language: 'ko' },
  '해시': { worker: hash, language: 'ko' },
  '색': { worker: colored, language: 'ko' },
  '아이튠즈': { worker: itunes, language: 'ko' },
  '리브레위키': { worker: librewiki, language: 'ko' }
}
