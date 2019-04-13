# Serium

The way how to get improved creativity and multi-purpose in Discord. (This application is only for one server)

[![Discord에서 만나보세요](https://discordapp.com/api/guilds/563994944604340254/embed.png?style=banner2)](https://discord.gg/NjAjJqB)

----

## Table of Contents

Only upper than [Notice](#notice) section is written with English.

- [Notice](#notice)
  - [Legal](#legal)
- [Handbook](#handbook)
  - [Installation guide](#installation-guide)
  - [Preference configuration](#preference-configuration)
- [Structures](#structures)
  - [CaptchaIndicator](#captchaindicator)

----

## Notice

As I(A.K.A 'Seia-Soto') published new major version 3.0, older versions which major version identified as 2 or 1 is deprecated. There won't any support for previous deprecated versions.

### Legal

This repository(A.K.A 'application') is under Artistic 2.0 license. All third party software(A.K.A 'dependencies') will inherit their original license.

- [bufferutil](https://www.npmjs.com/package/bufferutil) with MIT License
- [cheerio](https://www.npmjs.com/package/cheerio) with MIT License
- [discord.js](https://www.npmjs.com/package/discord.js) with Apache 2.0 License
- [google-translate-query](https://www.npmjs.com/package/google-translate-query) with MIT License
- [js-yaml](https://www.npmjs.com/package/js-yaml) with MIT License
- [mysql](https://www.npmjs.com/package/mysql) with MIT License
- [querystring](https://www.npmjs.com/package/querystring) without license
- [request](https://www.npmjs.com/package/request) with Apache 2.0 License
- [sharp](https://www.npmjs.com/package/sharp) with Apache 2.0 License
- [svg-captcha](https://www.npmjs.com/package/svg-captcha) with MIT License

----

## Handbook

### Installation guide

이 애플리케이션을 사용하려면 [Node.JS](https://nodejs.org) JavaScript 런타임을 사용하여 제 3자 소프트웨어 등을 직접 설치하셔야 합니다. 먼저 서버 또는 데스크톱 환경에 Node.JS를 설치하여, 기본 환경을 구성합니다.

**주의;** Node.JS의 v11 버전에는 빌드에 필요한 [node-pre-gyp](https://github.com/addaleax/lzma-native/issues/67) 모듈에 문제가 있어 대부분의 시스템에서 웹소켓 연결에 도움을 주는 [bufferutil](https://www.npmjs.com/package/bufferutil)이 제대로 설치되지 않을 수 있으므로 v10 버전을 설치해주시는 것을 권장합니다.

설치가 완료되면, 빈 폴더를 새로 만들어 해당 폴더 안에서 Git을 사용해 이 프로젝트를 클론합니다.

```sh
git clone -b nightly https://github.com/Seia-Soto/Serium.git
```

다음으로는 애플리케이션을 위한 제 3자 소프트웨어를 설치합니다. 제 3자 소프트웨어들의 라이선스는 [Legal](#legal)에서 확인하실 수 있습니다.

```sh
cd Serium
npm i -s
```

이로써 모든 준비가 끝났습니다!

### Preference configuration

기본적인 구성 설정은 아래와 같습니다. 자세한 설명은 아래를 참고해주세요.

- **Fine;** 애플리케이션이 머무를 서버의 정보를 지정합니다.
  - **id;** 서버의 ID입니다, [Discord에서 개발자 도구를 켜고 서버 아이콘을 우클릭하여 ID를 복사](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)할 수 있습니다.
- **App;** 애플리케이션의 기본적인 설정 구성입니다.
  - **Token;** Discord에서 발급받은 API 키를 여기에 붙여넣어주세요.
  - **Prefix;** 모든 명령어의 접두사입니다.
  - **Permissions;** 특정 권한이 필요한 명령어를 사용할 때, 사용할 역할의 ID입니다.
    - **Administrations;** 서버의 관리자 역할 ID를 지정합니다.
  - **WebClient;** Request를 통해 외부로 HTTP 요청을 전송할 때 사용할 User-Agent 값입니다.
  - **Captcha;** 새로 입장하는 사람에게 전송되는 캡챠의 옵션입니다. 자세한 사항은 [svg-captcha](https://www.npmjs.com/package/svg-captcha)를 참고해주세요.
  - **Externals;** YAML 환경에서 일종의 include, require 등의 구문을 대체하기 위해 외부 YAML 구성을 지정하는 곳입니다. 모듈로 연결 시에 *App/Externals* 에 연결됩니다.
    - **root;** 모듈이 포함된 폴더를 지정합니다.
    - **extension;** 읽을 YAML 형식의 파일의 확장자를 지정합니다.
    - **for;** 포함할 YAML 파일의 이름을 지정합니다, 이 이름으로 *App/Externals* 에 포함됩니다.
- **Discord;** Discord 클라이언트에 대한 옵션을 지정합니다.
  - **Client;** 새 클라이언트 객체에 대한 옵션을 지정합니다. 자세한 사항은 [Discord.JS (Client)](https://discord.js.org/#/docs/main/stable/class/Client)를 참조해주세요.
  - **EventOptions;** 클라이언트가 이벤트를 받은 이후에 처리할 로직에 필요한 변수입니다.
    - **guildMemberAdd;** 새 멤버가 추가되었을 때, 사용됩니다.
      - **StartingRole;** 새 멤버가 추가되면, 자동으로 추가할 역할의 이름을 지정합니다.

```yaml
Fine:
  id: 563994944604340254

App:
  Token: ''
  Prefix: 'se '
  # Permissions as role id on Discord.
  Permissions:
    # MochiMochi Fine; Staffs
    Administrations: 0
  WebClient: 'Mozilla/5.0 (Node.JS; v8js; rv:null) Request/^2.88.0 Serium/3.0.2'
  Captcha:
    size: 6
    ignoreChars: '0o1i'
    noise: 4
    color: true
  # Include things outside of this preference.
  Externals:
    root: preferences
    extension: yaml
    for:
      - NekosLifeAPIRoutes
      - PresenceLines
Discord:
  Client:
    autoReconnect: true
    disableEveryone: true
    disabledEvents:
      - TYPING_START
  EventOptions:
    guildMemberAdd:
      StartingRole:
        - Plug-Ins
        - Pending verification
```

----

## Structures

현재 존재하는 로직과 향후 추가 그리고 고려되는 것들을 서술합니다.

### CaptchaIndicator

새 캡챠를 만들고 지정된 폴더에 저장하는 모듈입니다.

```js
// NOTE: Line 17 at structures/CaptchaIndicator.js
const imageBuffer = Buffer.from(captcha.data)

sharp(imageBuffer)
  .flatten({ background: '#ffffff' })
  .png()
  .toFile(`${InPath}${internalURI}.png`, error => {
    resolve({
      uri: `${InPath}${internalURI}.png`,
      solution: captcha.text
    })
  })
```

- svg-captcha 모듈에서도 바로 배경색을 흰색으로 지정할 수 있었으나, Discord에서는 SVG의 미리보기를 지원하지 않아 PNG 포맷을 바꾸는 과정이 필수적이었고, CPU의 LX 캐시를 사용하여 빠른 속도를 얻을 수 있는 sharp 이미지 프로세싱 라이브러리를 통해 배경색을 흰색으로 설정합니다.

### MessageParser

Discord 클라이언트가 메세지를 받았을 때, 필요한 정보를 라이브러리에서 전달받은 객체에 확장해주는 로직입니다.

```js
// NOTE: Line 4 at structures/MessageParser.js
message._se = {
  // NOTE: Prototype construction.
}

message._se.filter = message.content.replace(PreferenceIndicator.App.Prefix, '').split(' ')
message._se.data = message._se.filter.slice(1)

message._se.prompt = message._se.filter[0]

return message
```

- [Serium].data 변수에 대해 [Serium].filter와 중복되는 경향이 많아 따로 예외 사항을 발견하지 못한다면 추후에 제거될 예정입니다.

### NekosLifeAPIParser

nekos-dot-life로의 API 콜링을 통해 이미지를 전달받아 내부에 다시 URL 형태로 전달해주는 로직입니다.

```js
// NOTE: Line 16 at structures/NekosLifeAPIParser.js
// NOTE: This function will go to one of dedicated function of structures at future.
const RequestHandler = uri => {
  return new Promise((resolve, reject) => {
    let options = {
      url: uri,
      headers: {
        'User-Agent': webclient,
        'Upgrade-Insecure-Requests': 1 // NOTE: Add request to upgrade insecure connections.
      }
    }
    request(options, (error, response, body) => {
      if (error) {
        reject(error)
      }

      resolve(body)
    })
  })
}
```

- RequestHandler 함수는 다른 명령어에서도 범용적으로 HTTP API 콜링을 위해 독립적인 모듈로 분리될 수 있습니다.

### PermissionParser

메세지를 보낸 사람의 역할 등을 확인하여 비트플래그로 권한을 지정해줍니다.

### PreferenceIndicator

구성 설정과 외부 구성을 읽어 제공하는 로직입니다.

```js
// NOTE: Line9 at structures/PreferenceIndicator.js
PreferenceIndicator.App.Externals.for.forEach(External => {
  rawdata = fs.readFileSync(path.join(__dirname, `../${PreferenceIndicator.App.Externals.root}/${External}.${PreferenceIndicator.App.Externals.extension}`))

  // NOTE: Load `root` key from external YAML preference file.
  PreferenceIndicator.App.Externals[External] = YAML.safeLoad(rawdata).root
})
```

- 향후 [Ext].root를 읽어드리는 대신에 더 단순하게 사용할 수 있는 다른 방안도 찾아보는 중입니다.

### PresenceHandler

지속적으로 클라이언트의 플레이 중인 게임을 업데이트해주는 로직입니다.

### ReportException

오류를 기록해주는 로직입니다, 단, 지금은 사용되지 않습니다.
