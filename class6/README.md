# Class 6

javascript 심화

 - 자바스크립트의 표준
 - Babel, Webpack
 - 비동기식 프로그래밍

## ECMA

ecma 재단에서 설정한 스크립트 언어의 표준. 자바스크립트가 이 표준을 따르고 있다.

한국어(서울말, 경상도말, 제주도말 등) → javascript

국립국어원 표준 → ECMA Script

큰 변화가 격년으로 있었음. ES6(ECMA2015), ES8(ECMA2017)

### CommonJS vs ECMA

CommonJS : javascript를 웹 브라우저 뿐만이 아니라 서버, 데스크탑 앱에서도 사용하기 위해 모듈화 작업을 하는 그룹.(Node JS가 따르고 있음)

ECMA: 스크립트 언어 표준. 자바스크립트 언어가 

## Babel, Webpack

- Babel : 자바스크립트 컴파일러. 과거의 표준에 맞게(ES5)로 변환.

  Why? 옛날 브라우저들은 ES6이상을 지원하지 않기 때문

  [https://babeljs.io/repl](https://babeljs.io/repl)

- Webpack: 모듈 번들러. 여러개로 나누어진 파일들을 하나로 합쳐줌.

## 비동기식 프로그래밍

### Promise

자바스크립트는 비동기적인 언어.

비동기 : 연산이 끝날 때 까지 코드 실행이 멈추지 않고 다음 코드를 실행하는 것

```js

// 1st 출력 후 3초 뒤 2nd, 3rd 순으로 출력

function delay() {
	setTimeout(() => {
		console.log('2nd');
	}, 3000);
}

console.log('1st');

delay();

console.log('3rd');

// 1st
// 3rd
// 2nd

```

주로 비동기적으로 처리되는 상황

- API 요청 : 서버에서 데이터를 받아와야 할 때
- 파일 읽기 : 파일을 읽어야 하는 상황
- 작업 예약 : 몇초 후 실행

### Callback 함수

함수 내부에서 어떤 시점에 실행되는 함수.

```js

function delay(callback) {
	console.log('start');
	console.log('execute');

	setTimeout(() => {
		callback();
	}, 3000);
}

delay(() => console.log('done'))

```

Callback 사용해서 1st 출력 후 3초 뒤 2nd, 3rd 순으로 출력하게 만들어보기

```js

function delay(callback) {
	setTimeout(() => {
		console.log('2nd');
		callback();
	}, 3000);
}

console.log('1st');

delay(() => {
	console.log('3rd');
})

```

### Callback Hell

콜백이 너무 많은 단계로 들어가는 경우.

예) 데이터를 여러곳에서 여러개 받아와야 하는 경우

```js

function getData(from, key, callback) {
	const data = get(from, key);
	callback(data);
};

getData('A', 'key', (result) => {
	getData('B', result, (result) => {
		getData('C', result, (result) => {
			getData('D', result, (result) => {
				getData('E', result, (result) => {});
			});
		});
	});
});

```

보기도 어렵고, 나중에 수정하기도 어려운 현상.

### Promise

ES6부터 사용가능한 기능.

```js

const promise = new Promise((resolve, reject) => {
	// code
});

```

Promise를 사용해서 1st 출력 후 3초 뒤 2nd, 3rd 순으로 출력하게 만들어보기

```js

function delay() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('2nd');
			resolve();
		}, 3000);
	});
}

console.log('1st');

delay().then(() => {
	console.log('3rd');
});

```

위의 콜백함수를 Promise로 해결

```js

function getData(from, key) {
	return new Promise((resolve, reject) => {
		const data = get(from, key);
		resolve(data);
	})
};

getData('A', 'key')
	.then((result) => {
		getData('B', result);
	}
	.then((result) => {
		getData('C', result);
	}
	.then((result) => {
		getData('D', result);
	}
	.then((result) => {
		getData('E', result);
  }

```

### async ~ await

ES8부터 도입된 문법. Promise를 더욱 쉽게 사용할 수 있게 도와줌.

```js

const delay = async() => {
	await promise();
}

```

Promise와 async ~ await를 사용해서 1st 출력 후 3초 뒤 2nd, 3rd 순으로 출력하게 만들어보기

```js

function delay() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('2nd');
			resolve();
		}, 3000);
	});
}

// async

console.log('1st');

await delay();

console.log('3rd');

```

#### 주의할 점

동기식으로 바꾼다고 모두 앞에 await를 붙이면 안된다

```js

console.log('1st');

await setTimeout(() => {
	console.log('2nd');
}, 3000);

console.log('3rd');

```

## 예외처리

예외처리를 해줘야 에러 컨트롤이 쉽다.

### try / catch

```js

try {
	// code
} catch (err) {
	console.log(err);
}

```

async ~ await와 잘 사용된다.

Promise에서 사용하지 않을 경우 어떤 에러인지 알기 어려움.

```js

const executeDelay = async () => {
	try {
		const data = await getData();
		return data;
	} catch (err) {
		console.log(err);
	}
}

```

throw를 사용해서 예외처리 가능

```js

const errorFunction = () => {
	try {
		throw {code: 'fail'}
		throw {code: 'delay'}
	} catch (err) {
		switch (err.code) {
		case 'fail':
			console.log('실패');
			break;
		case 'delay':
			console.log('지연');
			break;
		default: 
			console.log(err);
		}
	}
}

```

> 주소에서 데이터를 받아와서 문제를 알아내고 답을 찾아내기 (두개를 동시에 돌려야 답이 나옴)

* url
```

// 문제 url
https://asia-northeast1-testlab-112182.cloudfunctions.net/studyApi/api/question

// 답 url
https://asia-northeast1-testlab-112182.cloudfunctions.net/studyApi/api/answer?key=<key>

```

* reuqest module 설치방법
```

$ npm install --save request request-promise

```

* request 사용법
```js

const request = require('request-promise');


const res = await request('url');
const data = JSON.parse(res); // JSON 형식의 데이터를 JS 객체로 변환시켜주는 함수

```