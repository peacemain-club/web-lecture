# Class 11

* React
* SPA
* 노트앱 React로 리팩토링 (마크업)
* React Router

## React

프론트엔드 라이브러리

<strong>** 라이브러리 vs 프레임워크 vs API vs SDK</strong>

* 라이브러리(Library) : 도구 자체. 어떻게 구성, 어떻게 구현이 되어있는가 까지 다 포함된 프로그램
* 프레임워크(Framework) : DIY 키트. 누군가 이렇게만들어라 가이드라인까지 제공되는 프로그램 (어떻게 구성, 어떻게 구현이 되어있는가 까지 포함)
* API(Application Programming Interface) : 도구 빌려쓰기. 구현이 어떻게 되는지는 모른다.
* SDK(Software Development Kit) : 개발 도구 집합. 개발 도구, 디버깅 도구, 설명서, API 포함

### 우리가 Vanilla JS를 하면서 느꼈던 점

#### DOM 요소를 조작하기가 조금 불편하다

<strong>Vanilla JS</strong>

```html
<input id='input'></input>
```
```js
// 값 읽어오기
const input = document.getElementById('input');
const input_value = input.value;

// 값 넣기
const data = '???'
input.value = data;
```

<strong>React</strong>

```js
// ...
const [input, setInput] = useState('');

// ...

return (
  <input value={input} onChange={(e) => setInput(e.target.value)} />
)

// ...
```

#### 화면에 겹치는 부분을 계속 구현하기가 불편하다

<strong>VanillaJS</strong>

```html
<!-- 페이지1 -->
<body>
  <div>
    <button>버튼1</button>
  </div>
  <div>
    <button>버튼2</button>
  </div>
  <div>
    <button>버튼2</button>
  </div>
</body>

<!-- 페이지2 -->
<body>
  <div>
    <button>버튼4</button>
  </div>
  <div>
    <button>버튼5</button>
  </div>
  <div>
    <button>버튼6</button>
  </div>
</body>
```

<strong>React</strong>

```jsx
const Button = (name) => {
  return (
    <button>{name}</button>
  )
}

// 페이지 1

const Page1 = () => {
  return (
    <Button name='버튼1' />
    <Button name='버튼2' />
    <Button name='버튼3' />
  )
}

// 페이지 2
const Page2 = () => {
  return (
    <Button name='버튼4' />
    <Button name='버튼5' />
    <Button name='버튼6' />
  )
}
```

#### HTML에서 자바스크립트를 사용하기가 불편하다

예를 들어, 똑같은 버튼을 3개 구현해야 한다고 할 때를 생각해보자

<strong>VanillaJS</strong>

```html
<body>
  <div id='buttons'>
  </div>
  <script>
    const button_names = ['로그인', '회원가입', '비밀번호 변경'];
    const button_container = document.getElementById('buttons');
    
    for (let i = 0; i < 3; i++) {
      const button = document.createElement('button');
      button.innerText = button_names[i];
      button_container.appendChild(button);
    }
  </script>
</body>
```

<strong>React</strong>

```jsx
const Page = () => {
  const button_names = ['로그인', '회원가입', '비밀번호 변경'];

  return (
    <div id='buttons'>
      {
        button_names.map((button_name) => {
          <button>{button_name}</button>
        });
      }
    </div>
  )
}
```

### React가 나온 이유

* 컴포넌트 단위
* JSX

```jsx
const Page = () => {
  const button_names = ['로그인', '회원가입', '비밀번호 변경'];

  return (
    <div id='buttons'>
      {
        button_names.map((button_name) => {
          <button>{button_name}</button>
        });
      }
    </div>
  )
}
```

* Virtual DOM

브라우저의 작동원리에 대해서 알고나서 자세히 알아보도록 하자

연산을 최적화하는 하나의 방법이다. 연산을 최적화하면 성능이 좋아진다. 그렇지만 직접 VanillaJS로 할 수 있다면 그게 더 성능이 좋아진다.

그러면 왜 React를 사용할까? 위에 두가지 이유는 유지보수가 좋다. 그리고 Virtual DOM 때문에 성능도 '어느정도', '꽤', '괜찮게' 나오기 때문에 사용하면 좋다.

## SPA

싱글 페이지 어플리케이션

매끄럽게 넘어가는 웹. 어플리케이션처럼 동작하는 웹.

### 장점

* UX가 좋다. 사용자 친화적이다.
* 서버 요청이 비교적 적다.
* 개발이 비교적 간단하다. (서버를 통해서 렌더링할 필요가 없다)
* <strong>프론트엔드와 백엔드를 분리해서 개발할 수 있다.</strong>

### 단점

* 초기 구동속도가 느리다.
* <strong>검색엔진 최적화가 잘 안된다.</strong>
* 옛날 브라우저들은 지원 안되는게 많다.

## React 시작하기

React 프로젝트를 사용하려면 세팅을 해줘야 한다. 직접 세팅을 해줄 수도 있지만 시간도 오래걸리고 복잡하니, 이미 만들어져있는 걸로 해보자.

널리 쓰이는 React 프로젝트의 시작방법은 몇가지가 있는데,

* [Create React App](https://create-react-app.dev/docs/getting-started/) : React를 배우거나 SPA 프로젝트를 할 때 사용한다.
* NextJS : 서버사이드 렌더링이 필요한 프로젝트를 만들 때 주로 사용한다.
* Gatsby : 블로그를 만들거나 정적 사이트를 만들 때 주로 사용한다.

우리는 리액트를 배우는 단계이니 Create React App을 사용해서 React 프로젝트를 만들어보자.

### 시작하기

```bash
$ npx create-react-app react-note-app
```

npm에서 따로 다운로드 받지 않고 설치하는 방법이다. 가장 뒤에는 프로젝트의 이름을 적으면 된다. (지금은 `react-note-app`)

## React 용어

### 1. Component

UI를 구성하는 단위. 여러개의 컴포넌트가 모여서 화면을 구성할 수 있다.

* UI를 재사용 가능한 개별적인 조각으로 나눌 수 있다.
* 개별적으로, 컴포넌트별로 UI 작동이 가능하다.

<strong>** 컴포넌트의 종류</strong>

* 함수형 컴포넌트

```js
function Component() {
  return (
    <div>Component</div>
  )
}

const Component = () => {
  return (
    <div>Component</div>
  )
}
```

함수의 형태로 컴포넌트를 생성하는 방법으로, 따로 내장된 메소드가 없어서 보다 가볍다. 기본적으로 state가 없다.

** 최근엔 대체적으로 함수형 컴포넌트를 사용

* 클래스형 컴포넌트

```jsx
class Component extends React.Component {
  render(
    return (
      <div>Component</div>
    )
  )
}
```

React 모듈에 포함된 컴포넌트 클래스를 상속하여 컴포넌트를 생성하는 방법으로, 컴포넌트에 필요한 여러가지 메소드가 내장되어 있다. state와 라이프사이클이 존재한다.

** 최근엔 쓰이지 않는 추세

### 2. State와 Props

* State : 현재 컴포넌트의 상태
* Props : 부모 컴포넌트로부터 받아온 값

### 3. Hook

클래스 없이 state를 사용할 수 있는 React의 새로운 기능

## React Router

SPA는 어플리케이션처럼 작동한다. 그래서 화면 이동도 매끄럽게보인다. url 주소가 바뀌지않고도 화면이 바뀌는게 가능하다. 그렇지만 그렇게 하면 어느 페이지에 있는지 알기 힘들고, 링크 공유도 할 수 없다.

그래서 이동 자체는 매끄럽게 가고 주소도 바뀌게 해주는 기능이 있다.

리액트 자체에 내장된 기능은 없어서 써드파티(제 3자) 모듈을 사용해야 하는데, 가장 많이 쓰이는 모듈이 `react-router-dom`

### 기본 설정

```jsx
// ...
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact> <!-- 기본 페이지에 접속할 경우 -->
          <Main /> <!-- 기본 페이지에 접속할 경우에 보여주는 컴포넌트(화면) -->
        </Route>
        <Route path='/edit/:id' exact> <!-- edit 페이지에 접속할 경우 -->
          <Edit /> <!-- edit 페이지에 접속할 경우에 보여주는 컴포넌트(화면) -->
        </Route>
        <Route path='/login' exact>
          <Login />
        </Route>
        <Route path='/register' exact>
          <Register />
        </Route>
        <Route>
          <div>404</div> <!-- 위의 어떤 경우에도 해당하지 않는 경우에 보여주는 컴포넌트 -->
        </Route>
      </Switch>
    </Router>
  );
}
// ...
```

### Link

```js
import {Link} from 'react-router-dom';

// ...
<Link to='/edit'> // edit 화면으로 이동
  <div className='main__note-content'>노트 컨텐츠</div>
</Link>
// ...
```

## ** `import` vs `require`

둘 다 모듈 키워드로, 외부 파일이나 라이브러리를 불러올때 사용한다.

그 표준이 되는 집단들에서 각자 따로 만들어서 구조적으로 차이가 있다.

```js
// require
const mod = require('module');
// import
import mod from 'module';
```

### `import`

ECMA2015 부터 사용된 키워드로, 스크립트 언어의 표준을 정하는 집단(ECMA)에서 만들었다.

ES6(ECMA2015)이상 부터 지원되기 때문에 기본적으로 브라우저에서 지원하지 않는다. 현재는 Nodejs에서도 베타로 지원하고 있다.
하지만 국제 표준을 만드는 집단에서 만들어서 곧 `import`로 바뀌지 않을까?

`Create React App`으로 만든 프로젝트는 Webpack과 Babel이 포함되어 있어서 `import`를 사용할 수 있다.

### `require`

자바스크립트의 표준을 만들기 위한 프로젝트(Common JS)에서 선택한 방법이다.

최근에는 ECMA로 간다고 한다. 이때만든 표준을 따르던게 Nodejs이다. 그래서 아직 NodeJS는 `require` 방법을 사용한다.
