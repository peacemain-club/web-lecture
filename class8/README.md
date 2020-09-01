# Class 6

간단한 웹서버

* Node JS
* Express
* RESTful API
* HTTP 상태코드

## Node JS

자바스크립트 런타임

### Express

[Express](https://expressjs.com/ko/)

웹 프레임워크. 웹 개발, API 개발 가능

### REST API

HTTP 기반으로 필요한 서버에 접근하는 방법

#### HTTP 메소드

- POST : 새로운 데이터를 입력할 때
- GET : 데이터를 가져올 때
- PUT : 데이터를 수정할 때
- DELETE : 데이터를 삭제할 때

### Request, Response

크게 요청(Request)와 응답(Response)의 개념.

#### Request

- header: 요청에 관한 정보(요청하는 데이터 타입, 액세스 토큰 등)
- body: 요청시 함께 넘기는 데이터
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

> 간단한 웹서버 만들기

* 서버에서 비밀번호('enter-password')를 받아서 그에 따라 페이지를 내보내주는 웹서버 만들기
* HTTP 상태코드 200, 401, 403를 상황에 맞게 응답하는 코드가 있어야 함(필수)
