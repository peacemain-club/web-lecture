# Class 6

Vanlla JS

* Window 객체
* Document 객체

## Vanilla JS

용량이 아주 작은 자바스크립트 프레임워크. Facebook, Google, Youtube와 같은 서비스가 Vanilla JS를 사용해서 만들어짐. 용량이 너무나 작아서 압축한 파일의 용량이 오히려 더 큼.

### DOM

Document Object Model

### Window 객체 // BOM(Browser Object Model)

브라우저 전체에 대한 객체. 브라우저가 제공하는 함수나 변수들이 존재. BOM에 접근

```js
window.close() // 현재 창 종료

window.open(url) // url 새 탭에서 열기
window.open(url, '_self') // url 새 탭에서 열기
window.open(url, '', 'width=200, height=200') // url 200x200인 새 창에서 열기

window.alert('경고창 표시') // 경고 대화상자 표시

window.confirm('정말 하시겠습니까?') // yes or no를 선택하는 대화상자 표시

window.scrollTo(0, 1200) // x축 스크롤 0으로, y축 스크롤 1200으로 이동

window.screen // 현재 스크린에 대한 정보와 메소드

window.location // 현재 주소(url)에 대한 정보와 메소드

window.navigator // 현재 브라우저나 운영체제에 대한 정보

window.history // 뒤로가기, 앞으로가기 등 브라우저의 역사에 대한 정보와 메소드

window.docuemnt
```

### Document 객체 // DOM

window 객체 하위의 객체로 웹페이지를 담당하는 변수나 함수, 정보들이 존재. DOM에 접근

```js
document.body.children  // 자식 노드들 배열

docuemnt.body.firstChild // 첫번째 자식 선택

document.body.parentNode // 부모 노드 찾기

document.body.innerHTML // 내부의 내용물

const tag = document.getElementById('id') // 주어진 id를 만족하는 모든 요소 반환

document.getElementByClassName('className') // 주어진 클래스를 만족하는 모든 요소 반환

document.querySelector('#id') // 주어진 선택자를 만족하는 첫번째 요소 반환

document.querySelectorAll('.class') // 주어진 선택자를 만족하는 모든 요소 반환

tag[0].attributes // 해당 요소의 속성 가져오기

const element = document.createElement('div'); // 새로운 요소 생성

element.setAttribute('id', 'id_div');
element.innerHTML = 'context';

tag.appendChild(element); // 요소를 자식으로 추가

tag.removeChild(document.getElementById('id_div'); // 해당 요소 삭제

tag.addEventListener('click', () => {
	console.log('click!');
}); // 해당 태그(노드)에 이벤트 설정

tag.removeEventListener('click', () => {
	console.log('click!');
}); // 해당 태그(노드)에서 이벤트 삭제
```

> 모달 만들어보기

* 버튼을 눌렀을 때 모달 등장

    UI 구성 참고 : display: none, position: fixed, background-color: rgba(0, 0, 0, 0.4), z-index: 2

* 모달 안에는 모달을 닫을 수 있는 버튼이 있어야함
* 새 탭에서 우리 github를 열 수 있는 버튼이 있어야함
