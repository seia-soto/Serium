// NOTE: seriumium
const exec = require('./serium/exec')
const notificate = require('./serium/notificate')
const script = require('./serium/script')
// NOTE: moderations
const purge = require('./moderations/purge')
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
const translate = require('./functions/translate')

module.exports.answerList = {
  __comment__ap: 'Administrations levels: it does not contains any translations, alias or options.',
  exec: { worker: exec, language: 'en', permissions: 3 },
  notificate: { worker: notificate, language: 'en', permissions: 3 },
  script: { worker: script, language: 'en', permissions: 3 },
  __comment__dp: 'Do not initialize say and sayd prompt twice.',
  avatar: { worker: avatar, language: 'en', permissions: 0 },
  cat: { worker: cat, language: 'en', permissions: 0 },
  choose: { worker: choose, language: 'en', permissions: 0 },
  purge: { worker: purge, language: 'en', permissions: 1 },
  dog: { worker: dog, language: 'en', permissions: 0 },
  help: { worker: help, language: 'en', permissions: 0 },
  library: { worker: library, language: 'en', permissions: 0 },
  namuwiki: { worker: namuwiki, language: 'en', permissions: 0 },
  neko: { worker: neko, language: 'en', permissions: 0 },
  ping: { worker: ping, language: 'en', permissions: 0 },
  probability: { worker: probability, language: 'en', permissions: 0 },
  ready: { worker: ready, language: 'en', permissions: 0 },
  rps: { worker: rps, language: 'en', permissions: 0 },
  say: { worker: say, language: 'en', permissions: 0 },
  sayd: { worker: sayd, language: 'en', permissions: 1 },
  search: { worker: search, language: 'en', permissions: 0 },
  serverinfo: { worker: serverinfo, language: 'en', permissions: 0 },
  userinfo: { worker: userinfo, language: 'en', permissions: 0 },
  note: { worker: note, language: 'en', permissions: 0 },
  hash: { worker: hash, language: 'en', permissions: 0 },
  colored: { worker: colored, language: 'en', permissions: 0 },
  itunes: { worker: itunes, language: 'en', permissions: 0 },
  librewiki: { worker: librewiki, language: 'en', permissions: 0 },
  translate: { worker: translate, language: 'en', permissions: 0 },
  __comment__lpeu_ev: 'Do not initialize say and sayd prompt twice.',
  pfp: { worker: avatar, language: 'en', permissions: 0 },
  meow: { worker: cat, language: 'en', permissions: 0 },
  pick: { worker: choose, language: 'en', permissions: 0 },
  nuke: { worker: purge, language: 'en', permissions: 1 },
  dok: { worker: dog, language: 'en', permissions: 0 },
  h: { worker: help, language: 'en', permissions: 0 },
  wikipedia: { worker: library, language: 'en', permissions: 0 },
  namu: { worker: namuwiki, language: 'en', permissions: 0 },
  nyan: { worker: neko, language: 'en', permissions: 0 },
  pong: { worker: ping, language: 'en', permissions: 0 },
  if: { worker: probability, language: 'en', permissions: 0 },
  now: { worker: ready, language: 'en', permissions: 0 },
  r: { worker: rps, language: 'en', permissions: 0 },
  s: { worker: say, language: 'en', permissions: 0 },
  sd: { worker: sayd, language: 'en', permissions: 1 },
  google: { worker: search, language: 'en', permissions: 0 },
  si: { worker: serverinfo, language: 'en', permissions: 0 },
  ui: { worker: userinfo, language: 'en', permissions: 0 },
  memo: { worker: note, language: 'en', permissions: 0 },
  md5: { worker: hash, language: 'en', permissions: 0 },
  color: { worker: colored, language: 'en', permissions: 0 },
  appstore: { worker: itunes, language: 'en', permissions: 0 },
  libre: { worker: librewiki, language: 'en', permissions: 0 },
  tr: { worker: translate, language: 'en', permissions: 0 },
  __comment__lpkk: 'Korean Language Pack; remove all these aliases if you do not want to use.',
  '아바타': { worker: avatar, language: 'ko', permissions: 0 },
  '고양이': { worker: cat, language: 'ko', permissions: 0 },
  '선택': { worker: choose, language: 'ko', permissions: 0 },
  '삭제': { worker: purge, language: 'ko', permissions: 1 },
  '강아지': { worker: dog, language: 'ko', permissions: 0 },
  '도움말': { worker: help, language: 'ko', permissions: 0 },
  '라이브러리': { worker: library, language: 'ko', permissions: 0 },
  '나무위키': { worker: namuwiki, language: 'ko', permissions: 0 },
  '네코': { worker: neko, language: 'ko', permissions: 0 },
  '질의': { worker: ping, language: 'ko', permissions: 0 },
  '확률': { worker: probability, language: 'ko', permissions: 0 },
  '준비': { worker: ready, language: 'ko', permissions: 0 },
  '가위바위보': { worker: rps, language: 'ko', permissions: 0 },
  '검색': { worker: search, language: 'ko', permissions: 0 },
  '서버정보': { worker: serverinfo, language: 'ko', permissions: 0 },
  '사용자정보': { worker: userinfo, language: 'ko', permissions: 0 },
  '노트': { worker: note, language: 'ko', permissions: 0 },
  '해시': { worker: hash, language: 'ko', permissions: 0 },
  '색': { worker: colored, language: 'ko', permissions: 0 },
  '아이튠즈': { worker: itunes, language: 'ko', permissions: 0 },
  '리브레위키': { worker: librewiki, language: 'ko', permissions: 0 },
  '번역': { worker: translate, language: 'ko', permissions: 0 },
  __comment__lpkk_ev: 'The extra version of Korean Language Pack;',
  '프사': { worker: avatar, language: 'ko', permissions: 0 },
  '냥이': { worker: cat, language: 'ko', permissions: 0 },
  '골라': { worker: choose, language: 'ko', permissions: 0 },
  '지워': { worker: purge, language: 'ko', permissions: 1 },
  '멍이': { worker: dog, language: 'ko', permissions: 0 },
  '도움': { worker: help, language: 'ko', permissions: 0 },
  '위키백과': { worker: library, language: 'ko', permissions: 0 },
  '나뮈': { worker: namuwiki, language: 'ko', permissions: 0 },
  '냥': { worker: neko, language: 'ko', permissions: 0 },
  '핑': { worker: ping, language: 'ko', permissions: 0 },
  '과연': { worker: probability, language: 'ko', permissions: 0 },
  '레디': { worker: ready, language: 'ko', permissions: 0 },
  '가바보': { worker: rps, language: 'ko', permissions: 0 },
  '찾아': { worker: search, language: 'ko', permissions: 0 },
  '섭정': { worker: serverinfo, language: 'ko', permissions: 0 },
  '유저정보': { worker: userinfo, language: 'ko', permissions: 0 },
  '메모': { worker: note, language: 'ko', permissions: 0 },
  '해싱': { worker: hash, language: 'ko', permissions: 0 },
  '색얻기': { worker: colored, language: 'ko', permissions: 0 },
  '앱스토어': { worker: itunes, language: 'ko', permissions: 0 },
  '리브레': { worker: librewiki, language: 'ko', permissions: 0 }
  //'번역': { worker: translate, language: 'ko', permissions: 0 },
}
