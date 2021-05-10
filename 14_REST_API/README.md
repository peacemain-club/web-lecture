# Class 14

* RESTful API
* 필요한 API 정의하기
* ExpressJS로 REST API 개발

## API

Application Programming Interface.

외부에서 기능을 사용할 수 있도록 만들어놓은 인터페이스.

예를 들어, 안드로이드로 스마트폰 카메라 필터 앱을 만든다고 생각해보자. 이때, 스마트폰의 카메라 기능을 사용해서 조작을 해야 한다. 안드로이드 개발자가 카메라 기능을 사용하기 위해 스마트폰 AP칩에 접근해서 C언어로 카메라를 제어하는 코드를 직접 넣어야 한다면, 자바나 코틀린을 배운 이 안드로이드 개발자는 개발하지 못할 것이다. 그래서 스마트폰 제조사에서는 카메라를 제어할 수 있는 코드를 직접 C언어로 만들어서 자바나 코틀린으로 사용할 수 있도록 개발자에게 제공할 수 있다.

API는 다른 프레임워크나 라이브러리와 다르게 API 내부의 동작이 어떻게 되는지 알 필요가 없다. 그냥 어떤걸 넣어주면 어떤 결과가 나오는가에 대해서만 이해하고 있으면 된다.

## 지금부터 사용할 개발 방법

### 이전까지 사용했던 방법

**데이터베이스 - 웹 어플리케이션 서버 - 브라우저**

웹서버에서 데이터를 받아서 HTML, CSS 파일에 데이터를 넣고(ejs 사용) 브라우저에 보내면, 브라우저에는 결과물이 출력된다.

이렇게 하면 프론트엔드 개발자와 백엔드 개발자 사이에 좀 더 긴밀하게 협력하면서 개발해야 한다.

### 이제 사용할 방법

**데이터베이스 - API 서버 - 클라이언트 - 브라우저**

데이터는 API 서버에서 받아서 마음대로 가공하고 클라이언트에는 요청받은 데이터만 보내주면 된다. 그럼 클라이언트는 그 데이터를 받아서 브라우저에 결과물을 출력하면 된다.

이렇게 하면 백엔드 따로 프론트엔드 따로 개발할 수 있고, 서로간에는 API 명세. 즉, 어떤걸 넣어주면 어떤 결과가 나오는지만 공유하면 나머지는 자기 멋대로 개발할 수 있다.

## RESTful API

### REST

Representational State Transfer

데이터(문자열, 사진, 동영상, 파일 등)을 **이름**으로 구분해서 **자원의 상태(정보)** 를 주고 받는 것이다. 어떤 표준이 아니라 프로그래머들 사이의 하나의 설계 원칙이다.

웹에 최적화가 되어있다고 하는데, 그 이유는 REST는 웹의 기존의 기술과 HTTP 프로토콜을 그대로 사용하는 방법이기 때문이다.

### RESTful API

REST 기반의 규칙을 지켜서 설계된 API

### 설계 기본 규칙

1. URI는 자원을 표현한다.

```bash
GET /memo/ # 모든 메모 가져오기
GET /memo/A1jfsi24na3A8faj38f # 메모 하나 가져오기
```

2. 자원을 어떻게 할지는 HTTP Method로 표현한다.

```bash
GET /memo/A1jfsi24na3A8faj38f # 메모 하나 가져오기
POST /memo/ # 메모 추가하기
PUT /memo/A1jfsi24na3A8faj38f # 메모 수정하기
DELETE /memo/A1jfsi24na3A8faj38f # 메모 삭제하기
```

### HTTP Request METHOD

* **GET**

    데이터를 가져오는 타입. 데이터의 표시 요청

* **POST**

    데이터를 추가하는 타입. 데이터를 제출

* **PUT**

    데이터를 업데이트하는 타입

* **DELTE**

    데이터를 삭제하는 타입

뭐를 사용해서 보내든 다 작동하지만 개발자들 간의 규칙으로 따라야 한다.

## Express RESTful API

Express js는 웹 서버 뿐만 아니라 API 서버를 만드는데에도 사용된다.

VanillaJS를 사용해서 개발할 때는 Google Cloud Platform을 사용했지만, 이번에는 Firebase를 사용한다. Firebase에는 Google Cloud Platform과 공유되는 기능이 대부분인데, 우리가 사용할 것은 데이터베이스 `Cloud Firestore`, API 배포를 위한 `Cloud Functions`이다.

### `App Engine` vs `Cloud Functions`

VanillaJS를 사용해서 배포를 할 때는 `App Engine`을 사용했다. `App Engine`과 `Cloud Functions` 모두 서버리스(서버 관리가 따로 필요없이 배포할 수 있는 모델)이다.

당연히 차이가 있는데, `App Engine`은 관리가 필요없는 가상 컴퓨터라고 보면 되고, `Cloud Functions`는 관리가 필요없는 가상 함수라고 보면 된다.

오래 쓸 수 있는것, 한번 실행되고 짧은 시간안에 끝나는 것의 차이 정도로 일단 생각하고 있으면 될 것 같다.

Express를 사용하는 방법은 VanillaJS로 개발할 때와 같다.

### 필요한 API 정의하기

필요한 API를 먼저 생각해보면,

**Main화면**

* 메모를 전부 가져오는 기능
* 메모를 작성하는 기능

**Edit화면**

* 메모 하나를 읽어오는 기능
* 메모를 수정하는 기능
* 메모를 삭제하는 기능

이렇게 다섯가지가 필요할 것 같다.

그럼 우리가 해야할 것은 어떤 요청을 받으면 어떤 데이터를 줘야하는지 정의해서 공유하는게 필요하다.

---
# API 명세서

## `GET` `/memo`

해당 유저의 모든 메모를 읽어오기

### Headers
|헤더|타입|설명|
|:----:|:----:|----|
|token|`string`|유저 구분을 위한 Firebase ID 토큰|

### Response
```json
// success: status 200
{
  "memo_list": [
    {
      "id": "Aienf98aw3jg8ASDfi3w9awnfg",
      "content": "예시 데이터1"
    },
    {
      "id": "sewahE9EKFS8E9s8fSsfe8sdvj",
      "content": "예시 데이터2"
    }
  ]
}

// fail: status 500
{}
```

## `POST` `/memo`

메모를 작성하기

### Headers
|헤더|타입|설명|
|:----:|:----:|----|
|token|`string`|유저 구분을 위한 Firebase ID 토큰|

### Body
|바디|타입|설명|
|:----:|:----:|----|
|content|`string`|작성한 메모의 내용|

### Response
```json
// success: status 201
{}

// fail: status 500
{}
```

## `GET` `/memo/:id`

메모 하나 가져오기

### Headers
|헤더|타입|설명|
|:----:|:----:|----|
|token|`string`|유저 구분을 위한 Firebase ID 토큰|

### Params
|파라미터|타입|설명|
|:------:|:----:|----|
|id|`string`|해당 메모의 id|

### Response
```json
// success: status 200
{
  "content": "예시 메모"
}

// fail: status 500
{}
```

## `PUT` `/memo/:id`

메모 수정하기

### Headers
|헤더|타입|설명|
|:----:|:----:|----|
|token|`string`|유저 구분을 위한 Firebase ID 토큰|

### Params
|파라미터|타입|설명|
|:------:|:----:|----|
|id|`string`|해당 메모의 id|

### Body
|바디|타입|설명|
|:----:|:----:|----|
|content|`string`|수정한 메모의 내용|

### Response
```json
// success: status 200
{}

// fail: status 500
{}
```

## `DELETE` `/memo/:id`

메모 삭제하기

### Headers
|헤더|타입|설명|
|:----:|:----:|----|
|token|`string`|유저 구분을 위한 Firebase ID 토큰|

### Params
|파라미터|타입|설명|
|:------:|:----:|----|
|id|`string`|해당 메모의 id|

### Response
```json
// success: status 200
{}

// fail: status 500
{}
```

---

### 토큰 검증방법

헤더로 토큰을 넘겨주고 그걸 받아와서 검증하면 된다.

```js
const firebase = require('firebase-admin');

app.get('/', async (req, res) => {
  try {
    const token = req.headers.token;
    await firebase.auth().verifyIdToken(token);
    // 원하는 동작
    res.status(200);
  } catch (err) {
    res.status(500);
  }
});
```

### 미들웨어

클라이언트로 부터 받은 요청을 응답하기 전(중간)에 목적에 맞게 따로 처리를 하는 함수

지금과 같이 토큰이 올바른지 검증할 수 있는 함수도 미들웨어로 넣을 수 있다. 이렇게 미들웨어로 넣어주면 어차피 모든 요청은 토큰으로 부터 유저의 정보를 꺼내오는데, 그걸 매번 적어주는게 아니라 미들웨어로 넣어줘서 코드의 양을 줄일 수 있다.

위에 토큰 검증을 위한 함수를 미들웨어로 바꿔주면,

```js
const firebase = require('firebase-admin');

async function middleware(req, res, next) {
  try {
    const {token} = req.headers;
    await firebase.auth().verifyIdToken(token);
    return next();
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: '인증되지 않은 사용자입니다.'
    })
  }
}

module.exports = middleware;
```

이렇게 바꿀 수 있다.

미들웨어를 적용해보면,

```js
const firebase = require('firebase-admin');
const verifyToken = require('./middleware');

app.get('/', verifyToken, async (req, res) => {
  try {
    // 원하는 동작
    res.status(200);
  } catch (err) {
    res.status(500);
  }
});
```

이렇게 코드를 줄일 수 있다.
