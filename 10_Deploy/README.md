# Class 10

* 서버에서 작동되는 노트앱 완성
* 서버리스 플랫폼
* Google App Engine으로 첫번째 서비스 배포하기
* Git
* GitHub

## 서버리스 플랫폼

개발자가 서버를 관리할 필요가 없는 클라우드 방식

### 인프라(IaaS) vs 플랫폼(PaaS)

인프라

  서버만 주고, 거기에 운영체제, 프로그램 등은 알아서 깔고 코드도 알아서 돌려라

플랫폼

  우리가 서버, 운영체제, 프로그램 다 돌려줄게, 니들은 코드만 내놔라

### 선점 vs 비선점

![선점형](https://user-images.githubusercontent.com/35324795/112264671-8d721d00-8cb4-11eb-84d9-8e9eea88f55d.png)
![비선점형](https://user-images.githubusercontent.com/35324795/112264674-8f3be080-8cb4-11eb-8a6a-817c9e27170f.png)

인프라와 선점 방식의 경우에는, 계속 잡고 있다. 그래서,

* 사용하는 사람이 없어도 비용은 나간다
* 요청을 바로바로 처리가 가능하다
* 메모리를 사용할 수 있다

비선점 서버리스 플랫폼의 경우에는,

* 사용할 필요가 있을 때만 실행이 가능해서 실행 시간에 따라 비용이 청구된다
* 최초에 자원을 잡기위해서 시간이 필요하다
* 계속해서 해제를 해서 오래 지속되는 데이터를 메모리에 저장할 수 없다

## Google App Engine

구글 클라우드 플랫폼의 PaaS

* Google Cloud Compute Engine : IaaS

* Google Cloud Functions : PaaS

*** 다른 서비스의 제품

* AWS lambda
* Azure Service
* Azure Function
* Naver Cloud Functions

[GCP 콘솔](https://console.cloud.google.com)

### 배포 방법

```yaml
# app.yaml

runtime: nodejs12
# 다른 설정 가능
# 예를 들면,
# - 컴퓨터 종류 (성능, 메모리 용량 등)
# - 선점형인지 비선점형인지
# - 런타임 환경 등등
```

```bash
# 배포
$ gcloud app deploy
```

하지만, 우리는 이걸 계속 입력하기 싫어서 npm 스크립트로 만들자

```json
{
  "scripts": {
    "deploy": "gcloud app deploy"
  }
}
```

이제 아래 명령어를 입력하면

```bash
$ npm run deploy # gcloud app deploy
```

자동으로 배포가 된다.

## Git

분산 버전 관리 시스템

* 분산 : 여러 사람이 나눠서
* 버전 관리 : 코드의 과거 기록까지 알고 있다
* 시스템 : 어떤 프로그램

### 버전 관리는 왜 하는가?

* 코딩하다가 뭔가 잘못됐을 경우 복구하기 위해
* 변경사항을 추적하기 위해
* 협업할 때 누가 그 코드를 작성했는지 알기 위해서
* 코드를 잘 합치기 위해서

### 기본 개념

* 저장소

  Local과 Remote 저장소.

* 브랜치(Branch)

  하나의 갈래. 하나의 역할을 하는 분기

  예)
  ```
  main 브랜치 : 가장 큰 줄기. 시작 줄기. 최종 버전 줄기
  |- develop : 개발을 하기 위한 줄기. 여기서 개발을 관리.
  |- test : 테스트하기 위한 줄기.
  |- bugfix : 버그를 고치기 위한 줄기.
  ```

* commit

  git에다가 코드를 올리는 것

* stage

  git에 올리기 전. 즉, 커밋 하기 전에 어떤 파일들을 커밋할지 고르는 작업

* push

  현재 저장소에서 다른 저장소로 옮기는 작업

* pull

  현재 저장소에 다른 저장소로 부터 가져오는 작업

* clone

  그대로 복사해오는 작업

* merge

  두개의 브랜치를 하나로 합치는 작업
  

![Git 저장소](https://user-images.githubusercontent.com/35324795/112268029-afba6980-8cb9-11eb-86f8-0ae4e69274db.png)

![Git Branch](https://user-images.githubusercontent.com/35324795/112268024-adf0a600-8cb9-11eb-9a09-5b159857aad8.png)

## GitHub

Git 호스팅 서비스. Git이라는 시스템을 인터넷에 올려놓은 것. 누가? GitHub 회사가

로컬 저장소에 저장한 코드를 인터넷상에 박제 시키는 것

이외에도,

* Bitbucket
* GitLab
* Azure DevOps

이런 저장소가 있다. 물론 자체 Git 서버도 만들 수 있다
