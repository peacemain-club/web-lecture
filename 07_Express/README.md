# Class 7

Express JS

## NodeJS

자바스크립트 런타임.

브라우저 (크롬, 사파리, 엣지 등)에서는 자바스크립트를 해석하기 위한 자바스크립트 엔진이 들어가 있다. 브라우저 역시 자바스크립트의 런타임이다.

서버에서도 자바스크립트가 쓰이는데, 꽤 괜찮은 성능에 프론트엔드에서 반드시 사용되어야 하는 언어라는 점에서 프론트엔드와 깊게 연관되어 있는 자바스크립트를 사용 하는 것은 장점이기 떄문이다.

서버사이드에서 자바스크립트를 실행하기 위해서는 브라우저 처럼 자바스크립트 런타임이 있어야 하는데, 그 런타임이 바로 NodeJS이다.

Node JS는 구글 크롬 브라우저가 사용하는 V8 엔진을 사용하고 있다.

## NPM

Node Package Manager

Node.js의 패키지를 관리할 수 있도록 하는 도구.

[NPM](https://www.npmjs.com/) : npm을 사용해서 패키지를 공유하는 온라인 패키지 저장소

npm은 Nodejs를 설치하면 기본적으로 함께 설치된다.

### Npm을 프로젝트에 적용하는 방법

프로젝트의 최상위 폴더(root 폴더)에서 아래의 명령어를 실행한다.

```bash
$ npm init
# 이후에 여러가지 선택이 나오지만 모두 yes(엔터)를 하면 된다.
```

npm이 프로젝트에 적용되면 최상위 폴더에 `package.json` 파일이 생성된다.

```json
{
  "name": "web-lecture", // 프로젝트 이름
  "version": "1.0.0", // 프로젝트 버전
  "description": "웹 개발 스터디", // 프로젝트 설명
  "main": "index.js", // 프로젝트의 시작점이 되는 JS 파일
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }, // 프로젝트에 적용할 npm 스크립트
  "repository": {
    "type": "git",
    "url": "git+https://github.com/peacemain-club/web-lecture.git"
  }, // 프로젝트의 저장소
  "author": "edegil", // 프로젝트의 작성자
  "license": "ISC", // 프로젝트의 라이센스
  "bugs": {
    "url": "https://github.com/peacemain-club/web-lecture/issues"
  }, // 프로젝트의 버그나 이슈를 제보할 곳 
  "homepage": "https://github.com/peacemain-club/web-lecture#readme"
  // 프로젝트의 홈페이지
}
```

#### npm 스크립트

자동화 하기 위해 적어놓는 명령어의 집합

```json
{
  "scripts": {
    "start": "node main.js",
    "deploy": "cd public && gcloud deploy"
  }
}
```

```bash
# start 스크립트를 실행하고 싶은 경우. (start는 기본이라 run이 필요없음)
$ npm start
$ node main.js # 자동 실행

# deploy 스크립트를 실행하고 싶은 경우
$ npm run deploy
$ cd public && gcloud deploy # 자동 실행
```

### 패키지 설치 방법

아래의 Express JS를 설치할 경우

```bash
$ npm install --save express
```

설치 후 `package.json` 파일에 들어가보면,

```json
{
  "dependencies": {
    "express": "^4.17.1",
  }
}
```

## ExpressJS

웹 개발을 위한 프레임워크. 웹 어플리케이션 서버를 개발 하거나 API 서버를 개발 할 수 있다

```js
// Hello World 예제
const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.send('Hello World');
}); // '/' 위치에서 GET 요청이 들어올 경우 'Hello World'를 응답으로 보낸다

const port = 3000; // 포트번호
app.listen(port, () => {
  console.log('server open');
}); // 해당 포트에서 서버를 연다
```

```bash
$ node main
```

브라우저로 `http://localhost:3000`에 접속하면 'Hello World'가 보인다

> 다른 사람의 컴퓨터에도 한번 접속해보기

### HTTP 메소드

#### HTTP란?

하이퍼텍스트전송 통신규약. 웹 브라우저와 서버 간의 통신을 위해 디자인되었다

통신의 목적을 밝히기 위해 메소드라는 개념이 존재한다

* GET
* POST
* PUT
* DELETE
* 등등등...

여기서는 일단 GET과 POST에 대해서만 짚고 넘어가자

<strong>GET</strong>

리소스(서버에 있는 파일이나 데이터)를 가져오기 위한 요청

예) 웹사이트 파일을 불러오기, 웹사이트의 문서를 불러오기 등..

<strong>POST</strong>

서버에 데이터를 전송하기 위한 요청. 서버에 변경사항을 만든다

예) 사람이 새로 태어나서 주민등록번호를 추가, 사람이 죽어서 주민등록말소를 위한 데이터베이스 수정 등

### Request, Response

요청(Request)과 응답(Response)의 개념.

#### Request

- header: 요청에 관한 정보(요청하는 데이터 타입, 액세스 토큰 등)
- body: 요청시 함께 넘기는 데이터 (POST나 PUT에 사용)
- query : 정렬을 위한 정보
- METHOD : 요청 방식(POST, GET, PUT, DELETE)

#### Response

- status : 응답 상태
- data : 데이터

### HTTP 상태 코드

[HTTP 상태코드](https://developer.mozilla.org/ko/docs/Web/HTTP/Status)

- 200 : 성공
- 400 : 잘못된 문법
- 401 : 인증되어 있지 않음
- 403 : 인증은 되어있지만 권한이 없음
- 404 : 없는 페이지
- 500 : 예상하지 못한 실패

### 주소 (URL)

![URL](https://user-images.githubusercontent.com/35324795/111897074-214bab00-8a61-11eb-96bd-09100e6211dc.png)

* 통신규약 : HTTP, HTTPS(보안)

* 서브도메인 : 다른 도메인의 일부

  예) 네이버(https://naver.com)의 일부인 네이버 메일(https://mail.naver.com/)

* 도메인 : 네트워크 상에서 컴퓨터를 식별하는 이름

  컴퓨터를 식별하기 때문에 컴퓨터의 주소인 IP가 있다. 하지만, 아이피를 기억하기는 어려우니까 의미에 맞게 도메인 네임 서버(DNS)를 사용해서 의미에 맞는 인간의 언어로 바꿔서 사용

* 경로 : 해당 도메인의 페이지 구분 또는 자원의 경로를 나타내기 위한 것

  예) 블로그 구분. 유저1의 블로그(blog.naver.com/user1) 유저2의 블로그(blog.naver.com/user2)

* 쿼리 : 필터링을 위한 것

  예) 최신순, 정확도 순으로 구분 `?order=recent` 또는 `?order=acc`

* 앵커 : 하나의 페이지 내의 한 지점

  예) 회사 소개 페이지에서의 소개 부분, 연락처 부분 구분

같은 주소일지라도 메소드가 다르면(GET, POST ...) 다른 응담을 줄 수 있다

## ESlint

자바스크립트의 문법을 분석해주는 정적 코드 분석 도구

### 사용법

```bash
$ npm install eslint --save-dev

$ npx eslint --init
```

```js
module.exports = {
    "env": {
        "commonjs": true,
        "es2021": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
      // 여기에 규칙을 넣는다
      // 예시
      "no-console": true, // console.log() 를 사용하면 오류를 내뿜는 규칙
    }
};
```

[ESLINT 규칙 적용방법](https://eslint.org/docs/rules/)
