# Class 3

Javascript

## Javascript

스크립트 언어. 이미 존재하는 소프트웨어(웹 브라우저)를 제어하기 위한 언어

컴파일 언어와의 차이점: 한줄 한줄 읽고 실행 (인터프리트 방식)

웹 브라우저에서 사용하기 위해 만들어진 언어

* 웹 프론트엔드 (VanilaJS, ReactJS, VueJS, AngularJS)
* 백엔드 (Node JS, Express)
* 모바일 어플리케이션 (React Native)
* 데스크탑 어플리케이션 (Electron)

## 변수와 상수

값을 넣는 상자.

* <strong>변수</strong> : 바뀔 수 있는 값. `let`
* <strong>상수</strong> : 한번 선언하면 바꿀 수 없는 값. `const`
* `var` : 더 이상 사용하지 않는 변수. 몰라도 상관 없지만, 이런게 있고 어떤 상황이 발생하는가(호이스팅)에 대해서는 알면 좋다

## 자료형(Type)
이 자료(데이터)가 어떤 종류인지 나태내는 것

자바스크립트는 동적타입언어라 하나의 변수의 자료형이 다른걸로 바뀌어도 된다.

```c
	// C언어
	int a = 10;
	a = "b"; // Error
```

```js
	// 자바스크립트
	const a = 10;
	a = 'b';
```

타입을 알고 싶을 때는 `typeof`를 사용하면 된다
```js
	const a = 10;
	typeof a // number
	const b = 'text';
	typeof b // string
```

### 숫자 (number)

숫자 (정수, 실수 다 포함)

```js
	const integer = 7;
	const real_number = 2.3;
```

### 문자열 (string)

텍스트. `'작은 따옴표'`, `"큰 따옴표"`, `` `백틱` ``으로 감싸서 사용

```js
	const text = '한';
	const text2 = "글자 만 되는게 아니라 이런 문장도";
	const text3 = `가능하고 백틱의 경우에는 이렇게
		한줄 띄우고도 사용이 가능합니다.`;
```

* `` `백틱` `` : 템플릿 리터럴 사용 가능. ES6 이상

	텍스트 안에 데이터도 포함을 시키고 싶을때 사용
```js
	const person = '김수한무거북이와두루미';
	const age = 14;

	const template = `이 사람의 이름은${person}이고, 나이는 ${age}살이다.`;
	console.log(template); // 이 사람의 이름은 김수한무거북이와두루미이고, 나이는 14살이다.
```

** 문자열의 길이
```js
	const text = 'abcd';
	text.length // 4
```

### Boolean (boolean)

참(`true`) 또는 거짓(`false`)

```js
	const is_true = true;
	const is_false = false;
```

### 없음

<img src="https://user-images.githubusercontent.com/35324795/110571491-edd46b00-819a-11eb-8816-0f4231253408.png" width="400" alt="없어요 그냥 없어요" >

* null : 존재는 하지만 값이 없음. 자연적으로는 발생하지 않음 (프로그래머의 의도)
* undefined : 아직 값이 설정되지 않음.

```js
	let data;
	console.log(data); // undefined
	data = null;
	console.log(data); // null
```

### 객체

자료형의 꽃

2줄 짜리 표로 생각하자

| 종류 | 값 |
|:----|:--|
| 이름 | 김수한무거북이와두루미 |
| 나이 | 24 |
| 성별 | 여 |
| 거주지 | 백두산 |

위의 예시를 표현을 하려면 어떻게 해야할까?

```js
	// 이제까지 배운걸로 표현
	const person_name = '김수한무거북이와두루미'
	const person_age = 24;
	const person_gender = 'female';
	const person_residence = '백두산';
```

문제점 : 사람이 여러명이면 어떻게 그 사람의 이름과 나이, 성별, 거주지를 연관을 시킬까?

```js
	// 객체로 표현
	const person = {
  	name: '김수한무거북이와두루미',
		age: 24,
		gender: 'female',
		residence: '백두산',
	}
```

사용은 어떻게 하나?

```js
	// 이름과 나이를 뽑아내고 싶을 때
	const name_age_template = `이름 : ${person.name} 나이 : ${person.age}`;
	console.log(name_age_template); // 이름 : 김수한무거북이와두루미 나이 : 24
```

```js
	// 안의 값을 변경하고 싶을 때 예) 해가 바뀌어서 나이를 먹었다
	person.age = 25;
	// 또는
	person.age++;

	console.log(person.age); // 25;
```

잠깐만요, 저 `person` 객체는 `const`인데 왜 값이 바뀌죠?

> 객체 위에까지 (숫자, 문자열, boolean)은 원시타입. 불변성(immutability). 즉, 값을 바뀌면 완전히 새로운 (메모리 상에서) 값으로 바뀌게 된다.
>
> 하지만 객체는 참조타입으로 불변성이 없다(mutable). 객체가 가리키는 메모리 주소는 그대로인 상태에서 안의 값만 바뀌는 경우가 된다.

```js
	const a = {age: 15};
	const b = a;

	console.log(a.age); // 15
	console.log(b.age); // 15

	a.age = 20;

	console.log(a.age); // 20
	console.log(b.age); // 20
```

## 연산자

### 산술 연산자

* `+` : 더하기
* `-` : 빼기
* `*` : 곱하기
* `/` : 나누기
* `%` : 나머지
* `a++` / `++a` : 1 더하기

```js
	const a = 10;
	const b = 7;

	a + b // 17
	a - b // -3
	a * b // 70
	a / b // 1.4285714285714286
	a % b // 3
	a++ // Error

	let c = 10;

	c++ // 10 (일단 c 먼저 출력하고 더한다)
	c // 11
	++c // 12 (일단 더하고 c를 출력한다)
```

### 대입 연산자

* `=` : 값 넣기
* `+=` / `-=` : 해당하는 값 만큼 더하거나 빼기

```js
	let a = 10;

	a = 11;
	a // 11
	a += 7;
	a // 18 (11 + 7)
	a -= 5
	a // 13 (18 - 5)
```

### 논리 연산자

* `!` : not. 반대
* `&&` : and. 둘다 모두 참, 앞쪽이 참이면 뒷쪽도 쓴다
* `||` : or. 둘 중 하나라도 참, 앞쪽이 거짓일때 뒷쪽을 쓴다

```js
	const is_true = false;
	!is_true // false (true의 반대)
	const a = 0;
	!a // true (0은 false랑 같은 의미)
	const b = '';
	!b // true (빈 문자열은 false랑 같은 의미)

	true && true // true
	true && false // false (뒷쪽이 false)

	true || false // true
	true || true // true
	false || false // false

	let c = 10;

	true && (c = 11)
	c // 11
	false && (c = 12)
	c // 11 (false에서 끝나기 때문)

	true || (c = 13)
	c // 11
	false || (c = 14)
	c // 14 (앞쪽이 아니니까 뒷쪽을 쓴다)
```

not, and, or 순서

### 비교 연산자

* `==` / `===` : 서로 같은지
* `!=` / `!==` : 서로 다른지
* `<`, `>`, `>=`, `<=` : 크기 비교

```js
	const a = 10;
	const b = 11;

	a == b // false
	
	const c = '10';
	const d = 10;
	
	a == b // true (값만 비교)
	a === b // false (값 + 자료형까지 비교)

	a != b // false (값만 비교)
	a !== b // true (값 + 자료형까지 비교)
```

<img src="https://user-images.githubusercontent.com/35324795/110575796-da2d0280-81a2-11eb-9b47-32bc691fc7f3.jpg" width="500">

```js
	a > b // false (10 > 11)

	// 객체 비교
	const obejct_1 = {a: 11};
	const object_2 = {a: 11};

	object_1 === object_2 // false
	object_1 == object_2 // false
	// 객체가 가리키는 메모리 주소가 달라서 false가 나온다

	// 그럼 비교는?
	JSON.stringify(object_1) === JSON.stringify(object_2) // true
	/*
		객체를 문자(JSON)로 바꿔서 비교
		JSON.stringify(object_1) => "{"a":11}"
		JSON.stringify(object_2) => "{"a":11}"

		"{"a":11}" === "{"a":11}" // true		
	*/
```

** <strong>JSON (JavaScript Object Notation)</strong>

구조화된 데이터(객체)를 표현하기 위한 문자(string)기반의 표준. 문자열 형태라 네트워크를 통해서 전송할 때 편하다. 그래서 JSON을 사용해서 통신하는 경우가 많다

## 함수

### 기본적인 형태

```js
	function a(parameter) {
		// 코드
		// parameter를 사용할 수 있음
	}
```

### 화살표 함수

```js
	const a = (parameter) => {
		// 코드
		// parameter를 사용할 수 있음
	}
```

### 차이점

`this` 스코프가 다르고 선언문과 표현식의 차이

## 조건문

이게 맞으면 실행하자

### If

```js
	if (condition) {
		// 코드
	}
```

* `if` ~
* `if` ~ `else` ~
* `if` ~ `else if` ~ `else`

### Switch

이 중에서 조건이 맞는게 있으면 그걸 실행하자

```js
	switch (condition) {
		case a:
			// condition === a 일때
			break;
		case b:
			// condition === b 일때
			break;
		default:
			// condition이 a도 아니고 b도 아닐 때
	}
```

### 삼항연산자

맞으면 왼쪽을 실행하고 아니면 오른쪽을 실행하자

조건에 대한 실행 코드가 간단할 경우 사용을 하면 좀더 깔끔하게 코드를 작성할 수 있다

```js
	// 일반적인 조건문
	// 상황 : 주민번호 뒷자리를 분석해서 이사람이 남자인지 여자인지 알고싶다.
	const personal_number = '1948282';
	let gender = '';

	if (personal_number[0] === '1') {
		gender = '남자';
	} else {
		gender = '여자';
	}

	// 삼항연산자를 사용할 경우
	personal_number[0] === '1' ? gender = '남자' : gender = '여자';
```

React를 할 때 자주 쓰게 됨

## 반복문

손수 하나하나 못하니까 컴퓨터한테 시키자 계속 반복하게

### for

```js
	for (let i = 0; i < 10 ; i++) {
	// (사용할 변수, 조건, 매번 실행하는 것)
		// 여기 있는 코드가 총 10번 실행된다. (단, i를 이 안에서 바꾸지 않는 이상)
		// i = 0 부터 i = 9 까지 (10번)
	}
```

가장 기본적인 반복문. 코딩테스트에서는 잘 쓰인다. 실제 개발에서는 잘 쓰이지 않는 것 같다

### for ~ of

배열에 관한 반목문. 거의 안 쓰임.

### for ~ in

객체를 위한 반복문

### while

```js
	while (condition) {
		// condition이 true인 동안
	}
```

### break, continue

* `break` : 반복문 끝내기
* `continue` : 다음 반복문 실행

```js
	/*
		상황 : 문자열에서 숫자 찾기
		조건 : 문자열에는 숫자가 딱 하나만 있다
	*/
	const text = 'as6beiD';

	for (let i = 0; i < text.length; i++) {
		if (typeof text[i] === 'number') {
			break;
		}
		continue; // 있으나 마나 하지만, 이렇게 사용한다
	}

	/*
		i = 0 | a
		i = 1 | s
		i = 2 | 6 (찾음)
		(break를 사용하지 않을 경우)
		i = 3 | b
		i = 4 | e
		i = 5 | i
		i = 6 | D
	*/
	// 만약 문자열의 길이가 1억이고 숫자는 2번째에 있을 경우에는 불필요한 1억번의 연산이 소모되기 때문에 적절할 때 break을 써주면 좋다
```

## 함수2

### 객체 파라미터

함수의 파라미터로 객체를 넘겨줄 수 있다

```js
	/*
		상황 : 사람의 정보가 있다. 사람의 정보에서 이름만 빼는 함수를 만들고 싶다
	*/
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

함수의 파라미터로 함수도 넘겨줄 수 있다

```js
	function print(func) {
		const data = func();
		console.log(data);
	}

	// 조금 복잡한 예시
	/*
		상황 : 공항에서 프로그램을 도입했다. 새로 들어온 비행기는 바로 이륙시키지만, 다른 비행기는 검사를 하고 이륙시켜야 한다.
	*/
	function takeOff(flight) {
		// 대충 이륙 시킨다는 코드
	}

	function check(flight, action) {
		// 대충 체크한다는 코드
		// ...
		action(); // 이 액션은 뭘까?
	}

	if (filght.is_new) {
		takeOff(flight);
	} else {
		check(flight, takeOff);
	}
```

# 배열

같은 종류의 데이터의 집합

### 배열 만들기

```js
	const array_1 = [1, 2, 3, 4, 5];
	const array_2 = new Array(5);
```

배열 값 안에는 어떤 값이든 넣을 수 있다 (객체와 함수 모두 가능)

여러 종류의 값을 넣어도 된다

```js
	const data = [1, 'name', {type: 'object'}, () => {}];
```

### 배열 내장 함수(메소드)
```js
	// 기본 배열
	const array = [1, 2, 3];
```
* `forEach` : 비동기식으로 작동. 리턴값 없음. 순수한 반복
```js
	array.forEach((data, i) => {
		console.log(data, i);
	});
	// 1 0
	// 2 1
	// 3 2
```
* `map` : 순서가 있음. 결과 값을 배열로 리턴함, index가 존재. 배열의 값을 가지고 새로운 배열을 만들 때
```js
	const new_array = array.map((v, i) => {
		return v * 2;
	});
	
	new_array // [2, 4, 6]
```
* `indexOf` : 위치 찾아주는 함수
```js
	array.indexOf(2); // 1 (두번째. 즉, 0, "1")
```
* `findIndex` : 해당 조건을 만족하는 요소의 위치를 찾아주는 함수
```js
	array.findIndex((element) => {
		return element === 2
	}); // 1
```
* `filter` : 조건에 맞는 요소만 포함해서 배열로 리턴
```js
	const filtered_array = array.filter((element) => {
		return element > 2;
	});
	filtered_array // [3]
```
* `splice` : 배열에서 특정항목 제거
```js
	array.splice(2, 1);
	array // [1, 2] (index 2 즉, 3번째부터 하나를 자르겠다)

	// 배열의 원본이 수정된다
	// ** 여기서 부터는 매번 배열이 [1, 2, 3]으로 초기화 된다고 생각하자 (배열 원본이 수정되었기 때문에)
```
* `shift` : 첫번째 원소 추출
```js
	array.shift(); // 1
	array // [2, 3]
	// 배열의 원본이 수정된다
```
* `pop` : 마지막 원소 추출
```js
	array.pop(); // 3
	array // [1, 2]
	// 배열의 원본이 수정된다
```
* `push` : 마지막에 넣기
```js
	array.push(4);
	array // [1, 2, 3, 4]
	// 배열의 원본이 수정된다
```
* `unshift` : 첫번째에 넣기
```js
	array.unshift(0);
	array // [0, 1, 2, 3]
	// 배열의 원본이 수정된다
```
* `concat` : 여러 배열을 하나로 합쳐주는 함수
```js
	const another_array = [4, 5, 6];
	const mixed_array = array.concat(another_array);
	mixed_array // [1, 2, 3, 4, 5, 6]
```
* `join` : 배열 값을 문자열로 합쳐주는 함수
```js
	array.join(); // "1,2,3"
	array.join(''); // "123"
```
* `reduce` : 배열의 각 요소에 대해 reducer 함수 실행. 계산을 하고 그 값을 기억해서 다음 값으로 계산할 때 사용
```js
	/*
		상황 : 배열의 모든 값을 더해야 할 때
	*/
	// 첫번째 방법 : 반복문 사용
	let answer = 0;
	array.forEach((v) => {
		answer += v;
	});
	answer // 6

	// 두번째 방법 : reduce 메소드 사용
	let answer = array.reduce((accumulator, current) => {
		return accumulator + current;
	});

	answer // 6
```

### 문자열 함수
```js
	// 기본 문자열
	const text = 'abc';
```

* `concat` : 두 문자열을 합치는 함수
```js
	const mixed_text = text.concat('def');
	mixed_text // 'abcdef' 
```
* `includes` : 문자열에 포함이 되어있는지 확인하는 함수
```js
	text.includes('b'); // true
```
* `slice` : 일부를 추출하는 함수
```js
	text.slice(1, 2); // 'b' (index 1(두번째) 부터 index 2(세번째) 직전까지)
```
* `split` : 값을 기준으로 문자열을 배열로 나누는 함수
```js
	text.split('b'); // ['a', 'b']
```
* `substring` : 시작부터 종료까지 추출하는 함수
```js
	text.substring(1, 2); // 'b'
	// slice와의 차이
	text.slice(2, 1); // ''
	text.substring(2, 1); // 'b' (작은건 앞으로 큰건 뒤로 바꿔서 적용)
```
* `toUpperCase` : 모두 대문자로
```js
	text.toUpperCase(); // 'ABC'
```
* `toLowerCase` : 모두 소문자로
```js
	const uppercase_text = 'ABC';
	uppercase_text.toLowerCase(); // 'abc'
```
* `trim` : 양 끝의 공백 제거
```js
	const trash_string = '         sasdf      ';
	trash_string.trim(); // 'sasdf'
```
* `replace` : 다른 문자열로 바꾸기
```js
	text.replace('b', 'x'); // 'axc'
```
* `repeat` : 문자열 반복
```js
	text.repeat(3); // 'abcabcabc'
```

> `new Date().toLocaleDateString()`를 받아서 2020. 8. 17 (월) 형식으로 만들어서 출력하는 함수 만들기

## 참고자료

[Javascript 참고자료](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference)

[Javascript 튜토리얼](https://ko.javascript.info/)

[배열 내장 함수](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#)

## 과제

자바스크립트를 사용해서 쉬운 코딩테스트 문제 풀어보기

[가운데 글자 가져오기](https://programmers.co.kr/learn/courses/30/lessons/12903?language=javascript)

[문자열 내 p와 y의 개수](https://programmers.co.kr/learn/courses/30/lessons/12916?language=javascript)
