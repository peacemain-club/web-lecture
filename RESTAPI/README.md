# Backend

웹 개발에 필요한 백엔드

## API

Application Programming Interface.

외부에서 기능을 사용할 수 있도록 만들어놓은 인터페이스.

예를들어, 안드로이드로 스마트폰 카메라 필터 앱을 만든다고 생각해보자. 스마트폰의 카메라 기능을 사용해야 한다. 카메라 기능을 사용하기 위해 스마트폰 AP칩에 접근해서 C언어로 카메라를 제어하는 코드를 넣고 그렇게 하면 코틀린을 배운 이 안드로이드 개발자는 개발하지 못할 것이다. 그래서 스마트폰 제조사에서는 운영체제를 탑재해서 카메라를 제어할 수 있는 방법을 개발자에게 제공한다. 이 방법이 API이다.

## RESTful API

### REST

Representational State Transfer

자원을 URI로 표시하고 자원의 상태를 주고 받는 것을 의미.

HTTP에 접근해서 정보를 주고 받는 것.

여러가지 규칙이 있음

### RESTful API

REST 기반의 규칙을 지켜서 설계된 API.

사용하는 이유?

웹서버에서 데이터를 가공하고 렌더링까지 해서 보내주는 방식에서 프론트엔드 따로, 백엔드 따로 개발, 관리하는 방식으로 점점 변화 중.

즉, 프론트엔드는 클라이언트 사이드에서 개발을 하고, 백엔드는 데이터만 주고 받을 수 있는 API를 개발해서 프론트엔드에서 사용하는 것.

### HTTP Request METHOD

* **GET**

    데이터를 가져오는 타입. 데이터의 표시 요청

* **POST**

    데이터를 추가하는 타입. 데이터를 제출

* **PUT**

    데이터를 업데이트하는 타입

* **DELTE**

    데이터를 삭제하는 타입

뭐를 사용해서 보내든 다 작동함. 하지만, 개발자들 간의 규칙으로 따라야 함.

### 사용방법

사용을 위한 여러가지 모듈이 있음. React에서는 fetch 모듈을 제공해줌.

fetch, axios, request, httpRequest 등 여러가지 대안이 있음.

여기서는 React에서 제공해주는 Fetch API를 사용.

```jsx
const response = await fetch(URL, {
	method: 'POST' | 'GET' | 'PUT' | 'DELETE',
	mode: 'cors' | 'no-cors',
	cache: 'no-cache' | 'reload',
	headers: {
		'Content-Type': 'application/json',
		'Accepts': 'application/json',
		// 기타 필요한 요소
	},
	body: data,
});

const res = await response.json();
console.log(res);
// { // data }
```

## Firebase

구글에서 제공하는 클라우드 플랫폼(Google Cloud Platform) 기반의 웹, 앱 개발 플랫폼. (Backend As A Service)

제공해주는 서비스로는,

* Cloud Firestore : NoSQL 데이터베이스 (Document형)
* Firebase ML : 머신러닝
* Cloud Functions :  서버리스 플랫폼
* Auth : 사용자 관리 및 인증
* Hosting : 호스팅 서버
* Cloud Storage : 객체 저장소(파일, 이미지, 영상 저장)
* Realtime Database : NoSQL 데이터베이스(Key-Value형)
* Google Analytics : 앱 분석
* Crashlytics : 앱 오류 분석
* Cloud Messaging : 앱 푸시 알림
* In-app Messaging : 인앱 메세징

등 웹, 앱 개발에 유용한 백엔드 기능을 제공함.

웹개발에서 여기서 주로 사용할 기능은

Cloud Firestore, Cloud Functions, Auth, Hosting, Cloud Storage

자세한 내용은 [https://firebase.google.com/docs](https://firebase.google.com/docs) 참조.

### Database (NoSQL)

Not Only SQL. 데이터베이스 관리 시스템의 한 종류.

#### 특징

* 스키마가 필요 없다.

  관계형 데이터베이스의 경우에는 스키마에 따라 데이터를 넣을 수 있지만, NoSQL은 스키마에 상관없이 아무 종류의 데이터를 자유롭게 넣을 수 있다.

* 확장성을 중시한다.

  수평적으로 확장이 가능하다. 여러 서버에 분산이 가능하다. SQL은 수직적으로 확장이 된다.(CPU를 업그레이드 하는 등)

* 데이터의 중복을 허용한다.

  SQL은 하나의 데이터는 오직 한 곳에만 존재하고 관계에 따라 JOIN 등을 사용해서 가져와서 보여줘야 하지만, NoSQL은 필요한 데이터를 필요한 곳에 넣고 바로 가져옴. 속도가 빠르지만 중복된 데이터를 업데이트 할 때 반영이 안될 수도 있다.

#### 종류

* Document 형

  Key-Document 형으로 하나의 키에 하나의 객체를 맵핑해서 저장하는 방식. MongoDB, GCP Firestore 등

* Key-Value 형

  단순한 형태. 하나의 Key에 하나의 값을 맵핑해서 저장하는 방식. AWS DynamoDB, Redis 등

* Column-Family 형
* 그래프 형

### Firestore

NoSQL 데이터베이스. Document 형태.

#### 알아둬야할 개념

* 컬렉션
* Document

하나의 컬렉션 아래에 여러개의 도큐먼트, 하나의 도큐먼트 아래에 여러개의 컬렉션, 그 아래에 여러개의 도큐먼트의 구조를 이루고 있음.

#### 기능

* 실시간 업데이트

  실시간으로 읽기가 가능. 값이 바뀌면 바로 업데이트를 할 수 있음.

* 오프라인 지원

  인터넷이 끊겨도 캐싱된 데이터를 읽을 수 있고, 로컬에 쓴 데이터를 저장해뒀다가 인터넷이 연결되면 동기화하는 방식으로 지원.

#### 단점

* 쿼리가 약함

  강력한 쿼리라고는 하지만, 불편한 점이 많은 쿼리.

* 1초에 한 번 업데이트만 가능

  1초에 한 번만 업데이트해서 병목현상이 발생할 수 있음.

* 한 필드의 최대 크기는 1MB
