# Class 5

Vanlla JS

## Vanilla JS

용량이 아주 작은 자바스크립트 프레임워크. Facebook, Google, Youtube와 같은 서비스가 Vanilla JS를 사용해서 만들어짐. 용량이 너무나 작아서 압축한 파일의 용량이 오히려 더 크다

### Window 객체

브라우저 전체에 대한 객체. 브라우저가 제공하는 함수나 변수들이 존재. BOM(Browser Object Model)에 접근

** BOM : 웹 브라우저와 관련된 객체의 집합. 자바스크립트가 아닌 웹 브라우저가 제공하는 기능

#### 객체

* `window.document` : 현재 창이 포함하는 문서

* `window.location` : 현재 주소(url)에 대한 정보와 메소드가 포함된 객체

* `window.localstorage` : 로컬 스토리지

* `window.sessionStorage` : 세션 스토리지

* `window.history` : 뒤로가기, 앞으로가기 등 브라우저의 사용기록에 대한 정보와 메소드가 포함된 객체

* `window.navigator` : 현재 사용중인 브라우저와 운영체제에 대한 정보

* `window.screen` : 현재 스크린에 대한 정보와 메소드가 포함된 객체

#### 메소드

* `window.alert(text)` : 경고 대화상자를 표시

```js
  window.alert('경고!!');
```

<img width="444" alt="무제" src="https://user-images.githubusercontent.com/35324795/111022517-80cd0980-8416-11eb-80a8-526834ecb3ec.png">

* `window.close()` : 현재 창 닫기

* `window.confirm(text)` : 사용자의 확인을 원하는 대화상자 표시

```js
  const res = window.confirm('정말 삭제하시겠습니까?');
  /* 확인을 눌렀을 때 */
  res // true
  /* 취소를 눌렀을 때 */
  res // false
```

<img width="441" alt="무제" src="https://user-images.githubusercontent.com/35324795/111022591-ec16db80-8416-11eb-85fd-4f200dc2f0aa.png">

* `window.open(url)` : 새로운 창을 열기

```js
  window.open(url) // url 새 탭에서 열기
  window.open(url, '_self') // url 새 탭에서 열기
  window.open(url, '', 'width=200, height=200') // url 200x200인 새 창에서 열기
```

* `window.prompt()` : 사용자의 입력을 받는 대화상자 표시

* `window.scrollTo()` : 스크롤 이동하기

```js
  // 상황 : x축 스크롤 0으로, y축 스크롤 1200으로 이동시키고 싶을 때
  window.scrollTo(0, 1200);
```

### Document 객체

window 객체 하위의 객체로 웹페이지를 담당하는 변수나 함수, 정보들이 존재. DOM(Document Object Model)에 접근

** DOM : 현재 문서와 관련된 객체의 집합

#### 사용하는 이유

문서에는 여러가지 요소가 있는데, 그 요소들에 프로그래밍 언어를 통해 접근해서 그 요소를 변경시키는 과정이 꼭 필요하기 때문에 사용한다.

예) 인스타그램 좋아요를 눌렀을 때 테두리만 있던 빈 하트가 빨간색 하트로 채워지는 것

#### DOM API

<strong>HTML 예시</strong>
```html
  <body>
    <div class="title">제목</div>
    <main class="content-wrapper">
      <div class="content" id="1">1번 내용</div>
    </main>
  </body>
```

* `document.getElementById(id)` : 아이디를 가지고 요소를 찾기 위한 API

```js
  document.getElementById('1'); // <div class="content" id="1">1번 내용</div>
```

* `document.getElementsByClassName(name)`: 클래스를 가지고 요소를 찾기 위한 API

```js
  const mains = document.getElementsByClassName('title'); // HTMLCollections [ <div class="title">제목</div> ]
``` 

* `document.getElementsByTagName(name)`: 태그 이름(div, p 등)을 가지고 요소를 찾기 위한 API

```js
  const mains = document.getElementByTagName('main'); // HTMLCollections [ <main class="content-wrapper">...</main> ]
```

* `document.createElement(name)`: 태그 이름으로 요소를 하나 만들기 위한 API

```js
  const new_element = document.createElement('div');
  new_element // <div></div>
```

* `element.setAttribute`: 어떤 요소의 속성을 수정하기 위한 API

```js
  new_element.setAttribute('class', 'content');
  new_element.setAttribute('id', '2');

  // 다른 방법
  new_element.className = 'content';
  new_element.id = '2';

  new_element // <div class="content" id="2"></div>
```

* `element.innerHTML`: 어떤 요소 내부의 HTML에 접근하기 위한 API

```js
  new_element.innerHTML = '2번 내용';
  // 내부의 글자만 바꿀 경우
  new_element.innerText = '2번 내용';

  new_element // <div class="content">2번 내용</div>
```

* `parentNode.appendChild(node)`: 해당 노드 아래에 요소를 넣기 위한 API

```js
  mains[0].appendChild(new_element);
  /*
    <main class="content-wrapper">
      <div class="content" id="1">1번 내용</div>
      <div class="content" id="2">2번 내용</div>
    </main>
  */
```

* `element.getAttribute`: 어떤 요소의 속성을 가져오기 위한 API

```js
  new_element.getAttributes('class'); // content
```

* `element.addEventListener`: 어떤 요소에 이벤트를 설정하기 위한 API

```js
  // 클릭 이벤트 설정
  new_element.addEventListener('click', () => {
  	console.log('click!');
  });

  // 클릭 이벤트 삭제
  new_element.removeEventListener('click', () => {
  	console.log('click!');
  });
```

### HTML에서 Javascript 코드를 사용하기 위한 방법

#### `<script>` 태그 사옹

`<script>` 태그는 반드시 `<body>` 태그의 가장 최하단에 위치해야 한다. 그래야 위에 있는 HTML 요소들이 모두 로드되고 나서 Javascript 코드를 로드한다.

```html
  <body>
    <!-- ...html 요소 -->

    <!-- 바로 Javascript 코드 작성 -->
    <script>
      const data = [1, 2, 3, 4];

      for (let i = 0; i < data.length; i++) {
        const new_element = document.createElement('div');
        new_element.innerText = data[i];
        // ...
      }
    </script>

    <!-- 외부의 javascript 코스 사용 -->
    <script src="./script.js"></script>
  </body>
```

> HTML, javascript로 자판기 만들어보기
