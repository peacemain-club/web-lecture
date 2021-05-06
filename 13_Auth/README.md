# Class 13

* Firebase
* Firebase 인증
* 노트앱 React 리팩토링

## Firebase

Google Cloud Platform의 제품으로 BaaS(Backend as a Service)이다.

데이터베이스, 푸시알림, 스토리지, 인증, 분석 등 앱(웹, 모바일)을 제작하는데 필요한 백엔드 기능을 제공해준다.

[Google Firebase 콘솔](https://console.firebase.google.com/)

### 클라이언트에 Firebase 적용하기

1. Firebase 설치

```bash
$ npm install firebase
```

```js
// index.js
import firebase from 'firebase/app';
// ...

const firebase_config = {
  apiKey: "AIxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  authDomain: "peacemain-club.firebaseapp.com",
  projectId: "peacemain-club",
  storageBucket: "peacemain-club.appspot.com",
  messagingSenderId: "150000000000",
  appId: "1:150000000000:web:xxxxxxxxxxxxxxxxxxxxxx",
  measurementId: "G-xxxxxxxxxx"
}

firebase.initializeApp(firebase_config);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

Firebase와 연결해주기 위해 필요한 정보들은 `firebase_config` 객체에 넣어서 관리한다. 

** 민감한 정보이기 때문에 Git에는 올리지 않는게 좋은데, `.env` 파일 사용하는 방법을 알아보자.

`firebase_config`에 들어갈 정보는 Firebase 프로젝트에 들어가서 `프로젝트 설정 - 일반 - 내 앱 - SDK 설정 및 구성 - 구성`에 있는 스크립트를 그대로 복사하면 된다.

이번에 사용할 기능은 Firebase의 인증(Auth) 기능이다.

Firebase 프로젝트에서 `Authentication` 탭으로 들어가서 시작하기를 눌러준다. 그리고 `Sign-in-method` 탭에서 원하는 인증 방법을 사용 설정 해주면 되는데, 이번에는 이메일/비밀번호를 사용하도록 하자.

## Firebase 인증

이전까지 Express로 했던 인증인 세션기반 인증이었다. 서버에서 이 사람이 로그인 했는지 안했는지 계속 기억하는 방식이었다.

이번에 사용할 방식은 토큰 기반 인증 방식이다.

Firebase에서는 토큰 기반 인증 방식인데, 토큰은 아래의 사진과 같이 생겼다.

![image](https://user-images.githubusercontent.com/35324795/117226672-1ce02380-ae50-11eb-9e0e-e039270c229d.png)

암호화가 되는게 아니라 16진수로 변경만 하기 때문에 딱 보기에는 무슨 말인지 알 수 없지만 다시 원래 데이터로 바꾸기는 방법만 알면 간단하다. 그렇지만 마지막의 Verify signature(하늘색 글자) 부분은 사용자가 넣은 암호화 키로 암호화가 되기 때문에 원래 데이터로 바꿀 수는 없다. 이걸 사용해서 아무나 조작 못하게 하는 것이다.

이런 과정들을 Firebase가 알아서 해주기 때문에, 우리는 Firebase가 제공하는 코드만 몇줄 적으면 토큰 기반의 인증 방식을 사용할 수 있다.

**가장 먼저,** 로그인 여부를 확인할 수 있는 코드를 보자.

```js
// App.js
// ...
import firebase from 'firebase/app'; // Firebase 코어 불러오기
import 'firebase/auth'; // Firebase의 기능 중 인증(Auth) 기능 불러오기

// ...

const App = () => {
  const [is_logged_in, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  // ...
}

// ...
```

`useEffect`라는 새로운 함수가 나왔다. 앞에 use가 붙으면 Hook이라고 했는데, 이 Hook은 컴포넌트가 새로 만들어질 때, 컴포넌트의 State가 바뀔 때 호출되는 함수다.

어떤 컴포넌트가 화면에 올라올 때, `useEffect` 안에 적은 함수가 실행된다. 그리고 state나 props 값이 바뀔 때 `useEffect` 안에 적은 함수가 실행된다.

`useEffect`의 첫번째 파라미터로 함수를 넘겨주고, 두번째 파라미터는 배열을 넘겨주는데, 이 배열이 빈 배열이면 가장 처음에 한번만 실행하는 것이고 배열에 state나 props를 넣어주면 가장 처음 + state나 props가 바뀔 때 마다 실행시키겠다는 의미가 된다.

`firebase.auth().onAuthStateChanged` 함수는 인증 정보가 바뀌는 것을 지켜보고 있는다. 인증이 풀리면 `user`가 `null`이 되고, 로그인을 해서 인증되면 `user`가 사용자 정보가 된다.

그래서 인증 되었으면 `is_logged_in`이라는 state를 `true`로 해주고, 반대의 경우는 `false`로 해주면 된다.

**두번째로** 회원가입을 위한 코드를 보자.

```js
// register.js
import firebase from 'firebase/app';
import 'firebase/auth';

async function register(email, password, callback) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    callback(true);
  } catch (err) {
    switch (err.code) {
      case 'auth/email-already-in-use':
        alert('이미 등록된 이메일입니다.');
        break;
      case 'auth/invalid-email':
        alert('이메일을 다시 확인해주세요.');
        break;
      default:
        alert('오류가 발생했습니다.');
    }
    callback(false);
  }
}

export default register;
```

`firebase.auth().createUserWithEmailAndPassword` 함수는 서버와 통신을 해야해서 앞에 `await`를 붙여준다.

만약 에러가 발생하면 Firebase에서 제공하는 에러 코드가 뜨게 되는데, 따로 처리해주고 싶은 것은 위와 같이 해주면 된다. 에러코드들은 Firebase 문서에 들어가서 찾아보면 위에 적은거 말고도 여러가지로 많이 있다.

여기서 `callback`이라는 것을 사용하는데, 컴포넌트의 코드와 함께 보면서 확인해보자.

```js
// Register.js
// ...
register(email, password, (success) => {
  if (success) {
    alert('회원가입 되었습니다.');
    enter();
  }
  setButtonLoading(false);
});
// ...
```

React 컴포넌트에서는 `await`를 바로 사용할 수 없다. 그래서 `firebase.auth().createUserWithEmailAndPassword` 함수가 끝나고 나서 뭔가를 처리해주고자 할 때 `callback` 함수를 통해 원하는 동작을 보내주면 `firebase.auth().createUserWithEmailAndPassword` 함수가 실행되고나서 `callback` 함수가 실행되면서 원하는 동작이 처리된다.

순서를 보면

1. `register` 함수가 실행되며 `email`, `password`, `(success) => { ... }`(callback) 파라미터가 넘어감

2. `register` 함수 내부의 `await firebase.auth().createUserWithEmailAndPassword(email, password);` 가 실행됨

3. `await`로 서버와의 통신이 끝날 때 까지 기다린다.

4. 성공했을 경우, `callback(true)`가 실행되어 `register` 함수의 `if (success)` 안쪽 부분이 실행된다.

5. 실패했을 경우, `register` 함수 내부의 `catch` 부분이 실행되며 `callback(false)`가 실행된다.

6. 보내준 `callback` 함수의 `setButtonLoading(false)`가 실행된다.


**세번째로** 로그인 코드를 살펴보자.

```js
// login.js
import firebase from 'firebase/app';
import 'firebase/auth';

async function login(email, password, callback) {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    callback(true);
  } catch (err) {
    switch (err.code) {
      case 'auth/user-not-found':
        alert('없는 유저입니다.');
        break;
      case 'auth/wrong-password':
        alert('비밀번호가 틀립니다.');
        break;
      case 'auth/invalid-email':
        alert('이메일 형식이 아닙니다.');
        break;
      default:
        alert('오류가 발생했습니다.');
    }

    callback(false);
  }
}

export default login;
```

`firebase.auth().signInWithEmailAndPassword` 라는 새로운 함수를 쓰는것 말고는 회원가입과 거의 비슷하다.

**네번째로** 로그아웃 코드를 살펴보자

```js
// logout.js
import firebase from 'firebase/app';
import 'firebase/auth';

async function logout(callback) {
  try {
    await firebase.auth().signOut();
    callback(true);
  } catch (err) {
    console.log(err);
    callback(false);
  }
}

export default logout;
```

`firebase.auth().signOut` 함수가 바뀐것 말고는 로그인, 회원가입과 비슷하다.
