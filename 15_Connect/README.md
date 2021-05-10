# Class 15

* ExpressJS로 REST API 개발
* 클라이언트와 API 서버 연결하기
* React Hook

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

이렇게 하고 클라이언트에서 로그인하면 개발자도구(F11) - console 에 수백자 되는 토큰이 출력된다. 이걸 사용하도록 하자.

