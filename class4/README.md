# Class 3

Javascript 기본

## Javascript

스크립트 언어. 이미 존재하는 소프트웨어(웹 브라우저)를 제어하기 위한 언어.

컴파일 언어와의 차이점: 한줄 한줄 읽고 실행 (인터프리트 방식)

웹 브라우저에서 사용하기 위해 만들어진 언어.

* 웹 프론트엔드 (Vanila JS, React JS, Vue JS, Angular JS)
* 백엔드 (Node JS Express)
* 모바일 어플리케이션 (React Native)
* 데스크탑 어플리케이션 (Electron)

## 변수와 상수

값을 넣는 용기.

* 변수 : 바뀔 수 있는 값. let
* 상수 : 한번 선언하면 바꿀 수 없는 값. const
* var : 더 이상 사용하지 않는 변수. 몰라도 상관 없음

## 자료형
### 숫자 (number)

텍스트. ', ", ` 로 감싸서 사용.

* ` : 템플릿 리터럴. ES6

### Boolean (boolean)

참 또는 거짓

### 없음

* null : 존재는 하지만 값이 없음. 자연적으로는 발생하지 않음 (프로그래머의 의도)
* undefined : 아직 값이 설정되지 않음

### 객체

```

const object = {
  // key: value,
  key: 'value',
}

```

## 연산자

### 산술 연산자

* \+
* \-
* \*
* /
* %
* a++ / ++a

### 대입 연산자

* =
* += / -=

### 논리 연산자

* ! : not
* && : and
* || : or

not, and, or 순서

### 비교 연산자

* == / ===
* != / !==
* <, >, >=, <=

## 함수

### 기본적인 형태

```

function a() {
	// 코드
}

```

### 화살표 함수

```
const a = () => {
	// 코드
}
```

### 차이점

this 스코프가 다름.


## 조건문

### If

```

if (condition) {
	// 코드
}

```

* if ~
* if ~ else ~
* if ~ else if ~ else

### Switch

```

switch (condition) {
	case a:
		// 코드
		break;
	case b:
		// 코드
		break;
	default:
		// 코드
}

```

### 삼항연산자

```

condition ? action_true : action_false

```

React를 할 경우 자주 쓰게 됨

## 반복문

### for

```

for (let i = 0; i < 10 ; i++) {
	// 코드
}

```

가장 기본적인 반복문. 하지만 실제로 쓸일은 그렇게 많지 않다.

### for ~ of

배열에 관한 반목문. 거의 안 쓰임.

### for ~ in

객체를 위한 반복문

### while

```

while (condition) {
	// 코드
}

```

### break, continue

* break : 반복문 끝내기
* continue : 다음 반복문 실행

## 함수2

### 함수 객체 파라미터

```
const person = {
	name: '김수한무거북이와두루미',
	age: 17,
	gender: 'male',
}

// 객체에 접근해서 출력
function getName(person) {
	return person.name;
}

// 파라미터에서 비구조화 할당으로 출력
function getName({name}) {
	return name;
}

// 비구조화 할당으로 출력
function getName(person) {
	const {name, age, gender} = person;
	return name;
}
```

### 함수 파라미터

```
function print(func) {
	const data = func();
	console.log(data);
}

print(() => {
	return 7 + 5;
});

```

> JS 자판기 만들어보기.

# 배열

### 배열 만들기

```
const array_1 = [1, 2, 3, 4, 5];
const array_2 = new Array(5);
```

배열 값 안에는 어떤 값이든 넣을 수 있음. (객체와 함수 모두 가능)

### 배열 내장 함수

* forEach : 비동기식으로 작동. 리턴값 없음
* map : 순서가 있음. 결과 값을 배열로 리턴함, index가 존재
* indexOf : 순서 찾아주는 함수
* findIndex : 순서 찾아주는 함수
* find : 조건에 맞는 요소 값 리턴
* filter : 조건에 맞는 요소만 포함해서 배열로 리턴
* splice : 배열에서 특정항목 제거
* shift : 첫번째 원소 추출
* pop : 마지막 원소 추출
* push : 마지막에 넣기
* unshift : 첫번째에 넣기
* concat : 여러 배열을 하나로 합쳐주는 함수
* join : 배열 값을 문자열로 합쳐주는 함수
* reduce : 배열의 각 요소에 대해 reducer 함수 실행

### 문자열 함수

* concat : 두 문자열을 합치는 함수
* includes : 문자열에 포함이 되어있는지 확인하는 함수
* slice : 일부를 추출하는 함수
* split : 값을 기준으로 문자열을 나누는 함수
* substring : 시작부터 종료까지 추출하는 함수
* toUpperCase : 모두 대문자로
* toLowerCase : 모두 소문자로
* trim : 양 끝의 공백 제거
* replace : 다른 문자열로 바꾸기

> new Date().toLocaleDateString()를 받아서 2020. 8. 17 (월) 형식으로 만들어서 출력하는 함수 만들기
