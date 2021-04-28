# Class 12

* State와 Props
* Form
* Router
* 노트앱 React 리팩토링

## State와 Props

React에서는 기본적으로 값을 부모에서 자식으로 넘겨줄 수만 있지, 자식에서 부모로 값을 넘겨줄 수는 없다. 즉, 위에서 아래의 단방향의 데이터 흐름이다.

![image](https://user-images.githubusercontent.com/35324795/116401694-7f408f00-a866-11eb-92f0-44135210a96b.png)

### Props

부모로부터 넘겨받은 값이다. 부모로부터 값을 넘겨받아온다면 그 부모와 자식간에 연결이 생긴다고 볼 수 있다.

예를 들어 보자.

개발자 A는 `Button`이라는 컴포넌트를 하나 만들었다. 디자인을 살펴보니 어차피 프로젝트에서 사용하는 버튼의 모양이 모두 같았고, 그 버튼의 이름만 바꿔주면 되기 때문이었다.

`Main`화면에 들어가는 `Button`은 `작성하기`와 `지우기`라는 총 2개의 버튼이 있었다. `Button` 컴포넌트가 사용이 될 때, 그 버튼의 위치에 맞게 버튼의 이름을 넣어주기만 하면 되는 것이다.

```js
// Button 컴포넌트로 버튼에 사용될 icon과 버튼의 text를 넘겨줘서 커스터마이징
import React from 'react';
import Button from '../components/Button';

// ...

const Main = () => {
  return (
    <Button icon={pen_icon} text='작성하기' />
    <Button icon={eraser_icon} text='지우기' />
  )
}

// ...

const Button = ({icon, text}) => {
  // props는 함수의 기본 파라미터로 넘어온다.
  // const Button = (props) => { // ... }
  // const Button = (a) => { // ... }
  // const Button = (parameter) => { // ... }

  /**
   * 비구조화 할당
   * ({text})와
   * (props) => { const text = props.text },
   * (props) => { const {text} = props },
   * 위의 3가지는 모두 같은 역할
   */

  /**
   * icon: 버튼 아이콘 (선택, optional)
   * text: 버튼 텍스트 (필수, required)
   */
  return (
    <button className='Button__normal-button'>
      {
        icon && (
          <img className='Button__icon' src={icon} alt='작성하기 아이콘'/>
        )
      }      
      <div className='Button__text'>{text}</div>
    </button>
  );
}
```

이렇게 위와 같이 하면 `Button`의 틀만 만들어 놓으면 버튼의 모양만 비슷하다면 100개든 10000개든, 사용할 때 버튼의 이름만 바꿔서 넣어주면 모두 쉽고 빠르게 사용할 수 있다.

**`defaultProps`

props를 지정하지 않았을 때 기본적으로 사용할 값을 정하는 방법이다. props를 직접받아오기 전에 테스트를 해보거나, 기본값을 설정해줘야 할 때 사용할 수 있다.

```js
import React from 'react';

const App = () => {
  <Component />
  // ...
}

const Component = (props) => {
  console.log(props); // { data: '데이터1' }
  // ...
}

Component.defaultProps = {
  data: '데이터1',
}

export default App;
```

### State

컴포넌트의 상태로, 해당 컴포넌트 내에서 해당 컴포넌트의 상태를 조절하고 그에 따라 다르게 동작할 수 있게 할 수 있다.

지금까지는 값이 변화하는 동적인 부분이 없었지만, 이 `state`를 사용하면 값의 변화를 구현할 수 있게 된다. 값을 변화할 수 있다면, 그에 따라서 화면의 모양이 달라지게, 버튼의 색이 달라지게, 데이터가 달라지게 만들 수 있다.

`state`의 기본적인 사용법을 확인해보면서 예시를 살펴보자.

```js
import React, {useState} from 'react';

const App = () => {
  const [value, setValue] = useState('');

  return (
    <div>{value}</div>
  )
}

// ...
```

`useState`는 React Hook이다. 저번시간에 Hook이란 용어는 함수형 컴포넌트에서도 State를 사용할 수 있도록 해주는 React의 새로운 기능이라고 했다. 하나의 함수처럼 사용하면 된다. Hook은 관습적으로 형태가 항상 use~~로 되어있다. 예를 들어 `useHistory`, `useEffect`와 같이 앞에 use가 붙는 함수는 모두 React Hook이라고는 못하지만 React Hook은 항상 저런 이름이라고 보면 된다.

`useState`함수를 사용하는 곳을 보면 아래와 같이 구성되어 있다.

```js
const [value, setValue] = useState('');
```

배열의 비구조화 할당의 형태로 이루어져 있는데, 배열의 첫번째는 `state`의 값이다. 두번째는 이 `state`를 변경하기 위한 함수이다. 그리고 `useState()`함수의 내부에 있는 값은 이 `state`의 기본값이 된다.

그러니 이 `state`를 해석해보면, `value`라는 이름의 `state`를 만드는데, 기본값은 `''`(빈 문자열)이고, 이 `value` state를 변경하기 위해서는 `setValue`라는 함수를 사용해야 한다는 것이다. state를 변경하기 위한 함수도 일반적으로는 set~~과 같은 형식을 사용한다.

그러면 왜 `state`를 사용할까?

왜 아래와 같이 하면 안되는 걸까?

```js
import React from 'react';

const App = () => {
  let value = '';

  return (
    <div>{value}</div>
  )
}

// ...
```

그냥 변수를 사용하게 되면 변수를 바꿔준다해도 업데이트가 안된다. 왜냐하면 React는 VanillaJS와 렌더링 되는 방식이 조금 다르다. `setState`를 사용할 때 React는 리렌더링을 시켜준다. 즉, 바뀐 값이 화면에 적용되는 것이다. 이렇게 해서 기술적으로, 성능적으로 효율성을 준 것이다.

또 한가지 이유가 더 있다.

만약 `value`의 값을 비교할 때, `state`라는 객체로 이루어져있으면 객체가 바뀌게되면 객체가 가리키는 id가 다르기 때문에 값이 같더라도 변화로 인식해서 변화를 감지할 수 있다. `===`만으로도 교체를 감지할 수 있다.

```js
{ data: '1' } === { data: '1' } // false
```

### State와 Props의 차이점

* 부모 요소가 바꿀 수 있다 / 없다 : `Props`는 애초에 부모 요소로 부터 넘어오기 때문에 당연히 바꿀 수 있다. 하지만 `State`는 자식에서 부모로 데이터를 넘겨줄 수 없다는 React의 특성상 자식의 `State`는 부모 요소에서 절대로 바꿀 수 없다.
* 컴포넌트에서 바꿀 수 있다 / 없다 : `State`는 바꾸라고 있는 값이기 때문에 당연히 바꿀 수 있다. 하지만 `Props`는 위에서 넘겨주는 하나의 값이니까 바꿀 수 없다. 단, 부모의 `State`를 `Props`로 넘겨주고 그 `State`를 변경해주는 함수도 넘겨주면 바꿀 수 있다.

  ```js
  // ...
  const Parent = () => {
    const [data, setData] = useState(1);

    return (
      <Child value={data} setState={setData} />
    )
  }

  const Child = ({value, setState}) => {
    return (
      <div>{value}</div>
      <button onClick={() => setState(2)}>값 바꾸기</button> // 버튼을 누르면 값이 2로 바뀐다
    )
  }
  // ...
  ```

## Form

노트앱에서 `State`를 사용하는 곳은 입력창(input, form)이다.

```js
// ...
const App = () => {
  const [email, setEmail] = useState('');

  function handleChange(e) {
    setEmail(e.target.value);
  }

  return (
    <Input placeholder='이메일' value={email} onChange={handleChange} />
  )
}

const Input = ({placeholder, value, onChange}) => {
  /**
   * placeholder: <input> 태그의 placeholder (기본 속성)
   * value: <input> 태그의 값
   * onChange: <input> 태그의 값이 변화할 때 실행되는 함수
   */

  return (
    <div className="Input__box">
      <input
        className="Input__input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
// ...
```

위의 예시를 보면, 값(`value`)이 변할 때 마다 `Input` 컴포넌트의 `onChange`. 즉, `App` 컴포넌트의 `handleChange` 함수가 실행된다. 이렇게 되면 `App` 컴포넌트의 `email` state가 바뀌게 되어 나중에 이 값을 사용할 때는 `email` state를 사용하면 된다.

## React Router

이전에 VanillaJS를 사용해서 할 때는 서버에서 `app.get('/edit', (req, res) => { ... })`와 같은 방법으로 라우팅을 해줄 수 있었다.

다시 한번 라우팅이 뭔지 기억해보자면, 네트워크에서 주소를 이용해서 해당 목적지까지 이동하기 위한 경로선택 과정이다. 간단하게 말하면, 다른 주소에 따라 다른 뷰(화면)를 보여주는 것이다.

SPA는 어플리케이션처럼 작동한다. 그래서 화면 이동도 매끄럽게보인다. url 주소가 바뀌지않고도 화면이 바뀌는게 가능하다. 그렇지만 그렇게 하면 어느 페이지에 있는지 알기 힘들고, 링크 공유도 할 수 없다.

React는 어떻게 할 수 있을까? 따로 서버도 없는데 말이다.

리액트 자체에 내장된 기능은 없어서 써드파티(제 3자) 모듈을 사용해야 하는데, 가장 많이 쓰이는 모듈이 `react-router-dom`이다.

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
        <Route path='/' component={Main} exact /> <!-- 기본 페이지에 접속할 경우 -->
        <Route path='/edit' component={Edit} exact /> <!-- edit 페이지에 접속할 경우 -->
        <Route path='/login' component={Login} exact />
        <Route path='/register' component={Register} exact />
        <Route>
          <div>404</div> <!-- 위의 어떤 경우에도 해당하지 않는 경우에 보여주는 컴포넌트 -->
        </Route>
      </Switch>
    </Router>
  );
}
// ...
```

여기서 `path`는 경로, `component`는 그 경로에서 보여줄 컴포넌트(페이지), `exact`는 정확히 그 `path`일 때만 보여줄지 아닌지를 결정해준다.

`exact`의 의미는, `path='/edit`와 같이 되어있다면 `/edit`나 `/edit?id=adf`인 경우에만 저 컴포넌트(페이지)를 보여주겠다는 것이다. 만약 `/edit/name/123`이라면 보여주지 않는다. 이렇게 Path로 설정을 해주려면 `edit/:type/:id`와 같이 `path`에 적어줘야 한다.

가장 마지막에 빈 `<Route>`가 있는데, path가 위에 것들 중 어느 것에도 해당되지 않을 때 간다. 즉 보여줄 페이지가 아무것도 없다를 뜻하는 `404`페이지를 여기에 보여주면 된다.

** 여기서 `path`, `component`, `exact` 모두 `props`인데 `exact`만 넘겨주는 값이 없다. 이럴 때는 `exact={true}`와 같은 의미가 된다.

### Link

```js
import {Link} from 'react-router-dom';

// ...
<Link to='/edit'> // edit 화면으로 이동
  <div className='main__note-content'>노트 컨텐츠</div>
</Link>
// ...
```
