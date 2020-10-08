# React

프론트엔드 프레임워크 React

## React란?

프론트엔드 프레임워크

### Facebook이 ReactJS를 만들게 된 이유

새로운 디자인 패턴

기존의 MVC(모델 - 뷰 - 컨트롤러)패턴

![MVC](https://blog.kakaocdn.net/dn/ALrHe/btqBTMSuHfN/ZlW9i9ET34e90APgCRChk1/img.png)

Model과 View 사이에 양방향으로 바인딩 되어 있음.

Model의 값이 변하면 View에 보여지는 값도 바뀌어야 하고, View에서 값이 바뀌면 Model에도 업데이트를 해줘야 함.

거대한 시스템을 만들경우 서로 어떠한 방식으로 뷰를 업데이트 시켜줄지 로직을 정해줘야 하고 서로 엉켜서 업데이트가 안되는 경우도 있고 어쨌든 많이 복잡.

그래서 Facebook에서 새로운 디자인 패턴을 생각해냄.

Flux : 데이터 방향이 단방향인 디자인 패턴

![Flux](https://velopert.com/wp-content/uploads/2016/04/flux-simple-f8-diagram-with-client-action-1300w.png)

View에서 바로 Model(Store)의 값을 변형하지 못하고 Dispatcher를 통해서만 변경이 가능

⇒ 나중에 Redux라는 모듈로 만들어짐. 이외에도 MobX 등이 있음

### Virtual DOM

변화가 복잡하다. (문제점)

그래서 어떻게 업데이트를 해줘야 하는가에 대한 고민없이 그냥 바뀔때 마다 다 날려버리고 새로운 DOM을 만들어서 보여주자는 생각.

브라우저의 작동방식

![브라우저](https://d2.naver.com/content/images/2015/06/helloworld-59361-3.png)

* HTML을 받아옴
* 브라우저의 엔진이 파싱
* DOM의 Node로 이루어진 트리 생성
* Style(CSS)을 붙임
* RenderTree를 생성 (여기서 스타일을 다른 요소를 참조하는 등의 과정을 포함해서 컴퓨팅을 함)
* 레이아웃 과정을 거치면서 각 노드들이 화면의 어느 위치에 나타나야 하는지 위치를 받음
* 페인팅 과정을 거치며 색을 입히며 원하는 정보가 나타남

DOM에 변화가 생기면 RenderTree가 재생성 되면서 다시 컴퓨팅을 하고 레이아웃을 만들고 페인팅을 함.

DOM이 많이 바뀔경우 컴퓨팅을 많이하게됨 (연산량 증가) → 비효율적

30개의 노드가 변할 경우, 30번의 레이아웃 계산이 필요함.

DOM을 매번 새로 만들면 속도가 굉장히 느릴것.

그래서 새로운 방식을 생각함.

Virtual DOM을 만들어서 가상 렌더링을 해보고 그 연산이 끝나고 나서 변화된 부분만 실제 DOM에 전달. 모든 변화를 하나로 묶어서 한번만 렌더링.(컴퓨팅이 훨씬 줄어드는 장점)

[React and the Virtual DOM](https://www.youtube.com/watch?v=BYbgopx44vo)

최적화를 수동적으로 '잘' 해주면 React를 사용하는 것보다 빠르지만 복잡함.

React는 개발이 편리하고, 최적화도 어느정도 잘 되어있기 때문에 장점이 있음.

### React의 장점

1. 생태계가 크다

  웹 개발에 있어서 React 사용자가 70%를 찍은 적이 있을 정도로 많은 사람이 사용함.

  그만큼 사용할 수 있는 모듈도 많음

2. 사용하는 곳이 많다.

  우리나라에서도 카카오, 네이버, 라인, 쿠팡, 배달의 민족, 토스 등 많은 IT회사에서 사용함. 해외의 경우에도 페이스북, 인스타그램, 에어비엔비, 트위치 등 수많은 서비스에 사용되고 있음.

## JSX

JavaScript XML

UI를 구성할 때, React 엘레먼트를 생성하기 위한 것.

## Component

UI를 구성하는 단위. 여러개의 컴포넌트가 모여서 화면을 구성. 

* UI를 재사용 가능한 개별적인 조각으로 나눌 수 있음.
* 개별적으로 UI 작동이 가능

### Component의 종류

#### 함수형 컴포넌트

```js
function Component() {
  return (
    <div>Component</div>
  )
}
```

함수의 형태로 컴포넌트를 생성하는 방법. 따로 내장된 메소드가 없어서 보다 가벼움. 기본적으로 state가 없음.

최근엔 대체적으로 함수형 컴포넌트를 사용.

#### 클래스형 컴포넌트

```js
class Component extends React.Component {
  render(
    return (
      <div>Component</div>
    )
  )
}
```

React 모듈에 포함된 컴포넌트 클래스를 상속하여 컴포넌트를 생성하는 방법. 여러가지 메소드가 내장되어 있음. state와 라이프사이클이 존재.

최근엔 쓰이지 않는 추세.


## State와 Props

### State

현재 컴포넌트의 상태.

변화하는 방법

* setState 메소드 사용 (클래스형 컴포넌트)
* hook의 2번째 요소 함수 사용 (함수형 컴포넌트)

왜 컴포넌트에서 그냥 변수를 사용하지 않고, state를 사용할까?

최적화를 하는 알고리즘. Facebook에서 React에 적용한 최적화 알고리즘이 상태의 변화를 State가 변할 때(setState 함수가 호출될 때)만 인지를 하기 때문.

state는 immutable(불변성, 값을 바꿀 수 없음)한 속성. 그래서 바꾸려면 setState 함수를 호출해서 그 자체를 다른 객체로 교체를 해야함.

왜 이렇게 하는가?

* 변수가 수정이 가능하면 side Effect가 발생할 수 있음. (예상치 못한 값의 변화가 생길 수 있는 등 부작용)
* setState함수가 호출되고, state를 비교해야함. 비교를 할 때 객체는 고유의 id를 가지고 있기 때문에 === 으로 비교했을 때 객체가 교체되었을 경우 false를 반환하기에 비교가 더 쉬움

### Props

부모 컴포넌트로부터 받아온 값.

React 컴포넌트 데이터는 방향성이 위→아래만 가능

![Props and state](https://blog.kakaocdn.net/dn/rH4LA/btqF16Gn9C4/yUtBnxdij7DpdL7ySN6IQ0/img.png)

위로는 데이터가 이동할 수 없기 때문에 형제나 부모에게 직접 데이터를 전달 할 수 없음.

형제나 부모에게 데이터를 전달할 수 있는 방법은

* 부모에게 있는 state를 바꿀 수 있는 setState함수를 props로 넘겨주는 방법
* Redux나 MobX와 같은 글로벌 상태관리를 사용하는 방법
