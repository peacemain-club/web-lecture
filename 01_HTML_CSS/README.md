# Class 1

### HTML, CSS
### Instagrm 헤더와 컨텐츠

## 참고자료
[W3School](https://www.w3schools.com/html/default.asp)

[HTML 태그 참고, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element)

## DOM

Document Object Model. 웹페이지에 대한 인터페이스. HTML, XML 등의 웹 프로그래밍의 결과물이 빌드되어 만들어지는 것.
HTML, CSS, JS 읽어서 변환

* 웹페이지는 하나의 문서
* HTML or XML 등 -> DOM
* 구조는 트리형태, 각 노드는 부모-자식 관계

> 크롬의 개발자 도구, element 탭 열어서 확인하기

## HTML

HyperText Markup Language. -> 프로그래밍 언어가 아니다.

문서가 화면에 표시되는 형식을 표현하기 위한 언어.

요소들로 이루어져 있다.

DOM으로 변환되는 만큼, 구조도 트리형태. 감싸는 형태. 안쪽이 자식(Child), 바깥이 부모. (React 할 때도 알아야 되는 내용)

### 태그

![HTML_tag](https://mdn.mozillademos.org/files/9347/grumpy-cat-small.png)

1. 여는 태그
2. 닫는 태그
3. 내용

* 태그들

- `div`
- `img`
- `p`
- `h1` ~ `h6`
- `input`
- `button`
- `a`
- `span` : div 태그 처럼 특별한 기능없이 CSS와 쓰임. display 속성이 기본 `inline`이다.

div 하나로만 해도 거의 대부분의 것을 표현이 가능한데, 왜 이렇게 많은 태그들이 있는가? 

* 표준을 맞추기 위해
* 접근성을 향상하기 위해
* 사람이 알아보기 쉽게하기 위해
* 기계가 알아보기 쉽게하기 위해 => SEO 향상

### 선택자

둘 다 어떤 요소를 식별하기 위한 것. 클래스는 한 개 문서에서 여러번 사용이 가능하지만 id는 문서 당 한 번만 사용.

클래스 - 재사용

id - 하나를 특정

* `:not()`
* `:last-child`
* `::after`

## CSS

스타일 언어. 각 요소들에 스타일을 부여하기 위한 것.

### 스타일

* 요소의 크기 : `width` / `height`
* 요소의 여백 : `margin` / `padding`
* 요소의 테두리 : `border` / `border-radius`
* 색 : `color` - hex(ex. `#3fa422`) / RGB(ex. `rgb(124, 122, 24)`)
* 글자 크기 : `font-size`
* 글자 굵기 : `font-weight`

<bold>CSS Flex</bold>

* `display: flex`
* `justify-content`
* `align-items`

<bold>CSS Grid</bold>

* `display: grid`
* `gap`

## 과제

HTML Flex Grid를 마스터하기 위해 게임 클리어해오기

[Flex 개구리 게임](https://flexboxfroggy.com/#ko)

[Grid 당근 게임](https://cssgridgarden.com/#ko)
