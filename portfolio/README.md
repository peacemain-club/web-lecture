# Web Portfolio

웹으로 포트폴리오 만들어보기

## 개념

세계 최대의 코드 저장소 Github에서 무료로 제공해주는 github.io를 이용해서 개발자스러운 웹 포트폴리오를 만들기.

## 필요한 것들

React를 배웠으니 React를 이용해서 Web을 개발.

* Create React App

  Facebook에서 추천하는 React 툴체인. 우리가 지금까지 사용해왔던 것들.

  #### 다른 옵션

  * Gatsby

  정적 웹사이트 생성기. github.io는 정적 웹사이트 호스팅 서비스이기 때문.

* gh-pages

빌드된 파일을 github 저장소의 gh-pages 브랜치에 자동으로 밀어넣어주는 모듈
  ```
    $ npm install --save gh-pages
  ```

  package.json 파일에 아래 lines 추가

  ```json
    {
      // ...
      "scripts": {
        // ...
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
      }
    }
  ```

* react-router-dom

리액트에서 navigation을 사용할 수 있게 해주는 모듈
  ```
    $ npm install --save react-router-dom
  ```

## 방법

1. 웹 포트폴리오 기획 및 디자인
2. 포트폴리오 웹사이트를 Create React App으로 제작
3. 배포
  ```
    $ npm run deploy
  ```
  배포를 하면 gh-pages 브랜치가 생성. gh-pages 브랜치에 들어가는 파일들은 CRA에서 최적화하고 난독화해서 빌드한 파일들

4. Github 설정

  * 자신의 <username>.github.io 레포지토리 접속

  * Settings 클릭

  * GitHub Pages 문단으로 이동

  Source를 gh-pages 브랜치로 변경. Source 브랜치의 파일을 이용해서 GitHub Pages에서 알아서 호스팅


5. <username>.github.io 접속