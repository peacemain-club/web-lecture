# Class 8

웹 어플리케이션 서버

* NoSQL 데이터베이스
* GCP 프로젝트 만들기
* 서버에 데이터베이스 연결하기
* ejs

## NoSQL 데이터베이스

### 데이터베이스의 종류

* 계층형 데이터베이스
* 네트워크형 데이터베이스
* 관계형 테이터베이스
* <strong style="color: skyblue">NoSQL 데이터베이스</strong>

### 사용가능한 서비스

* MongoDB
* DynamoDB (AWS)
* <strong style="color: skyblue">Firestore (GCP)</strong>
* 등등 여러가지...

#### 왜 클라우드 데이터베이스를 사용해야 하는가?

오픈소스로 열려있는 데이터베이스가 많다. MongoDB, MySQL, SQLite, MSSQL 등 많지만, 사용하기 위해서는 따로 데이터베이스를 돌릴 컴퓨터가 필요하다. 거기에 따로 관리도 해줘야 하고, 주기적으로 검진도 해줘야하고, 에러가 발생하면 고쳐야되고, 데이터도 주기적으로 백업도 해줘야 되고 할일이 너무 많아진다. 하지만 클라우드 데이터베이스를 사용하면 구글, 아마존, 마이크로소프트와 같이 엄청난 대기업의 천재 개발자, 엔지니어들이 알아서 관리를 해주기 때문에 관리라는 비용을 없앨 수 있다.

### Firestore 데이터베이스의 구조

Document(문서)형 데이터베이스

컬렉션 - 문서 - 컬렉션 - 문서 - 컬렉션 - 문서... 의 순서로 이루어져 있다

예를들어, 노트앱을 사용하는 사용자가 있고, 그 사용자 아래에는 사용자 정보, 그리고 그 사용자가 적은 노트(메모)가 있다고 했을 때, `<유저 컬렉션>` - `<각 유저의 문서>` - `<각 유저의 메모 컬렉션>` - `<각 유저의 각 메모>` 이렇게 존재한다

![Group 20](https://user-images.githubusercontent.com/35324795/111906244-f712e100-8a92-11eb-9d7d-10454db85bc0.png)

그렇다면, 이제 데이터베이스를 사용해서 노트앱에 붙여보자

## GCP 프로젝트 만들기

### 클라우드 플랫폼

서버를 올리는 컴퓨터를 가상으로 온라인에서 사용할 수 있도록 해주는 서비스

반대의 의미는 온 프레미즈(On-Premise)가 있다

서버를 돌릴 수 있도록 컴퓨터를 제공하는 것을 넘어서 데이터베이스, 메세지 자동 전송, 푸시 알림, 인증, 머신러닝, 데이터 분석 등 여러가지 기능까지 제공을 해주고 있다

* Amazon Web Service (AWS)
* Microsoft Azure
* <strong style="color: skyblue">Google Cloud Platform (GCP)</strong>
* Naver Cloud Platform (NCP)
* 등등...

### Google Firebase

웹, 앱 서비스 제작을 위해서 GCP에서 제공하는 BaaS(Backend as a Service)

GCP의 일부분

#### BaaS란?

백엔드 기능(데이터베이스, 파일 스토리지, 푸시 알림 등)을 서비스 형태로 제공해주는 것

[Google Firebase 콘솔](https://console.firebase.google.com/)

1. 프로젝트 추가

2. 이름 설정

3. 다 넘기기

4. 프로젝트 만들기

## 서버에 데이터베이스 연결하기

### 구글 클라우드 SDK 설치하기

[구글 클라우드 SDK 설치 방법 문서](https://cloud.google.com/sdk/docs/quickstart?hl=ko#windows)

```bash
# 설치 체크하기
$ gcloud --version
```

### Google Firestore 설치하기

[Google Firestore 설치 방법 문서](https://cloud.google.com/firestore/docs/quickstart-servers?hl=ko)

```bash
$ npm install --save @google-cloud/firestore
```

```js
const Firestore = require('@google-cloud/firestore');

const db = new Firestore({
  projectId: 'project-id', // 프로젝트 아이디,
  keyFilename: './serviceAccountKey.json',
  // 위의 설치 방법에 따라 다운로드 받은 서비스계정키의 경로
})
```

## EJS

Embedded JavaScript.

HTML 파일에서 Javascript를 사용할 수 있도록 해주는 템플릿 언어

### 설치방법

```bash
$ npm install --save ejs
```

### 프로젝트에 추가

```js
// ...express 설정
const app = express();

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
// ...
```
### 사용방법

```js
// ...
app.get('/', (req, res) => {
  const data = db.get();

  res.render('page.html', {data});
});

app.listen(3000);
```

```html
<!-- page.html -->
<html>
  <head></head>
  <body>
    <!-- javascript 사용하기 -->
    <% if (condition === true) %>
    <% { %>
      <div>조건이 true 일때만 보이는 div</div>
      <!-- 서버에서 넘겨준 데이터 사용하기 -->
      <div>데이터는 <%=data%></div>
    <% } %>
  </body>
</html>
```
