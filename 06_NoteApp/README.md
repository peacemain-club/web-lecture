# Class 6

NoteApp

## Web Storage API

키 / 값 구조의 데이터를 '쿠키' 보다 직관적으로 저장하기 위한 저장소

실제로 데이터베이스 같이 사용되지는 않는다. 간단한 유저의 현재 사용중에 필요한 상태를 저장하기 위해서 사용

하지만, 우리는 여기서 이 Web Storage를 데이터베이스 처럼 사용해서 메모를 저장해본다

### 종류

* `localStorage` : 영구적으로 저장된다.

  - 장바구니

  - 계속 로그인 정보

* `sessionStorage` : 세션에만 사용되는 값을 저장하는 저장소. 세션이 존재하는 동안만 저장된다. 즉, 탭을 끄면 데이터는 다 날아간다

  - 계속 로그인 안했을 때 로그인 정보

  - 비회원 로그인

  - 비회원 장바구니

### 사용방법

```js
  const storage = window.localStorage;

  const data_key = '이름';
  const data_value = '김수한무거북이와두루미';

  // 데이터 저장 및 수정
  storage.setItem(data_key, data_value);

  // 데이터 읽어오기
  storage.getItem(data_key); // 김수한무거북이와두루미

  // 데이터 삭제
  storage.removeIten(data_key);

  // 스토리지 비우기
  storage.clear();
```

## Query String

주소(url)에서 구분을 위해 사용되는 것 중 하나. 다른 것은 Path가 있다

### Query vs Path

```js
  // query
  'https://www.naver.com?id=12323&order=asc';
  // path
  'https://www.naver.com/mail';
```

* Query : 정렬하거나 필터해서 보여줘야할 경우

* Path : 어떤 데이터의 위치를 특정해야 할 경우


그렇지만 우리는 노트앱에서 각 메모의 id에 접근하기 위해서 Path를 사용할 수 없어서 Query로 접근한다

```html
  <a href="./edit.html?id=10">
    <!-- ... -->
  </a>
```

### Query를 가져오는 방법

`window.location` 객체 사용

```js
  const query = window.location.search;
  query // ?id=0;

  // 가공
  /*
    ?id= 는 항상 그대로일 테니, 0번째(?)에서 3번째(=)까지는 항상 같을 것이다.
    그 이후에 나오는 숫자들이 메모의 id이니 4번째 부터 꺼내서 사용하면 된다.
  */
  query.slice(4); // (?id=)0
```

위의 가공방법은 쿼리가 하나밖에 없을 때. 만약 쿼리의 항목이 여러개라면 다른 방법으로 가공해서 찾을 수 있다.
