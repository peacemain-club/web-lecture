# Class 15

* ExpressJS로 REST API 개발 및 테스트하기
* 클라이언트와 API 서버 연결하기

## API 테스트하기

### 토큰 확인하기

개발을 할 때 토큰을 사용해야하는데, 토큰은 클라이언트에서 로그인할 때 사용할 수 있다.

```js
// App.js
// ...
function App() {
  // ...
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        user.getIdToken().then((token) => console.log(token)); // 이 부분 잠시 추가
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);
  // ...
}
// ...
```

이렇게 하고 클라이언트에서 로그인하면 개발자도구(F11) - console 에 100자 정도 되는 토큰이 출력된다. 이걸 사용하도록 하자.

### Postman 사용하기

![image](https://user-images.githubusercontent.com/35324795/118077223-a498d580-b3ee-11eb-8bf9-7b17014a967b.png)

POSTMAN을 열면 API를 테스트하기 위한 클라이언트를 확인할 수 있다.

* Params - Query 설정 (~~~?id=qwerty&password=12345)
* Headers - 헤더(요청에 대한 부가적인 정보) 설정
* Body - 요청에 담아 보낼 데이터

위의 3개만 사용해도 대부분의 요청을 커버할 수 있다.

API 명세서에 적힌 대로 테스트해보자. 예외상황도 생각해서 적용해보고, 머릿속에 떠오르는 아무 거나 해보자. 그렇게 통과했을 경우에는 이제 클라이언트와 서버를 연결해보자.

## 클라이언트에 연결

클라이언트에 연결할 때는 크게 두가지 종류가 있다.

1. 페이지가 처음 시작되었을 때 서버에 요청하는 경우
2. 특정 이벤트(버튼 클릭, input 클릭 등)가 발생 했을 때 서버에 요청하는 경우

두가지를 다 알아보자

### 페이지가 처음 시작되었을 때 서버에 요청

이전에 `useEffect`라는 React Hook에 대해서 배웠다. 아무런 내장기능이 없는 함수형 컴포넌트에서 특정 기능을 사용하기 위해 만들어진 Hook 중에서도 페이지가 마운트 되었을 때, 특정 State나 Props가 바뀌었을 때 실행할 수 있도록 하기 위한 Hook 이었다.

그럼 페이지가 마운트 되었을 때(페이지가 처음 시작되었을 때), 서버 요청을 보내보자.

```js
// Main.js
// ...
function Main() {
  const [input, setInput] = useState([]);
  // ...
  useEffect(() => {
    getMemoList((success, data) => {
      if (success) {
        setList(data);
      } else {
        alert('서버에 오류가 발생해서 가져올 수 없습니다.');
      }
    })
  }, []);
}
```

`useEffect` 안에 async await를 바로 사용할 수는 없다. 그래서 callback을 사용해서 외부에서 서버 요청을 하고 그 결과를 바탕으로 callback 함수를 실행하도록 하는 방법을 사용한다.

```js
// getMemoList.js
import firebase from 'firebase/app';
import 'firebase/auth';

async function getMemoList(callback) {
  try {
    // 토큰 가져오기
    const token = await firebase.auth().currentUser.getIdToken();

    // 요청을 보낼 서버주소
    const URL = 'http://localhost:4000/memo';
    const res = await fetch(URL, {
      method: 'GET', // 요청 메소드
      headers: {  // 요청 헤더
        Authorization: `Bearer ${token}`, // 인증을 위한 헤더
      },
    });

    // status가 200번대가 아닐 경우 ok가 false가 된다.
    if (!res.ok) {
      throw res.status;
    }

    // 받은 응답의 json을 객체로 변형
    const {memo_list} = await res.json();

    callback(true, memo_list);
  } catch (err) {
    console.log(err);
    callback(false);
  }
}

export default getMemoList;
```

서버에 요청을 보내기 위한 함수는 `fetch`함수를 사용한다. `axios`나 다른방법도 있지만 기본으로 웹에서 제공해주는 api인 `fetch`를 여기서는 사용하도록 하자.

요청을 보내면 `res`로 받을 수 있는데, 이 `res`가 성공하지 않더라도 오류로 감지되지 않는다. 그래서 실패 감지를 위한 `res.ok`를 사용해서 `res.ok`가 `false`로 나온다면 `throw`를 사용해서 직접 에러를 만들어주면 된다.
