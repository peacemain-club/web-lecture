# Class 2

HTML, CSS 기본

## DOM

Document Object Model. 웹페이지에 대한 인터페이스. HTML, XML 등의 웹 프로그래밍의 결과물이 빌드되어 만들어지는 것.
HTML, CSS, JS 읽어서 변환

* 웹페이지는 하나의 문서
* HTML or XML 등 -> DOM
* 구조는 트리형태, 각 노드는 부모-자식 관계

> 크롬의 개발자 도구, element 탭 열어서 확인하기

## HTML

HyperText Markup Language. -> 프로그래밍 언어가 아니다.

문서가 화면에 표시되는 형식이나 그런 것을 표현하기 위한 언어.

요소들로 이루어져 있다.

DOM으로 변환되는 만큼, 구조도 트리형태. 감싸는 형태. 안쪽이 자식(Child), 바깥이 부모. (React 할 때도 알아야 되는 내용)

#### 태그

![HTML_tag](https://mdn.mozillademos.org/files/9347/grumpy-cat-small.png)

1. 여는 태그
2. 닫는 태그
3. 내용

* 태그들

- div
- a
- img
- p
- h1 ~ h6
- br
- input
- form
- strong
- button

div 하나로만 해도 거의 대부분의 것을 표현이 가능한데, 왜 이렇게 많은 태그들이 있는가? 

=> 웹을 이해하기 쉽게 하기 위해서, 표준.

#### 클래스와 id

둘 다 어떤 요소를 식별하기 위한 것. 클래스는 한 개 문서에서 여러번 사용이 가능하지만 id는 문서 당 한 번만 사용.

클래스 - 재사용

id - 하나를 특정

> HTML 파일 만들고 여러가지 태그 확인해보기

## CSS

스타일 언어. 각 요소들에 스타일을 부여하기 위한 것.

#### 스타일

* color
* width / height
* margin / padding
* border

* font size
* font weight
* text align

> HTML과 CSS 파일을 연결하고 클래스와 id로 스타일 넣어보기

> example.html 따라 만들어보기

> 과제 : 좋아하는 웹페이지 메인화면 마크업 클론코딩
