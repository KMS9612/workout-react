# Workout - React
---
## 개요
---
Electron과 Typescript, Next, Firebase로 제작했던 프로젝트를 React, Js, Express, MongoDb로 다시 제작해보는 프로젝트 입니다.
이전에는 루틴에 대한  CRUD만 제작했다면 이번엔 루틴관리, 루틴기반 타이머, 루틴을 공유할 수 있는 커뮤니티까지 클라리언트사이드, 서버사이드까지 직접 제작해 보려고 합니다.

10.06기준 로그인 100% / 운동관리페이지 90% 완료되었습니다. 

## 페이지 설명
---
1. 로그인
JWT를 사용하여 로그인여부를 판단합니다. axios의 intercept메소드를 사용해 모든 요청시 토큰 만료 에러가 난다면  refreshToken을 사용해 토큰을 재발급 받고 실패한 요청을 다시 시도하도록 했습니다.

2. 운동관리
상태관리 라이브러리인 recoil을 적극적으로 사용해 다른 컴포넌트간 변동점이 생겨도 즉각적인 렌더링이 일어나도록 했습니다.
운동과 루틴을 생성하고 생성한 운동을 루틴에 추가하는 방식입니다.

3. 타이머 (준비중)
생성한 루틴을 토대로 타이머를 사용할 수 있습니다. 운동사이에 휴식시간을 추가하면 운동을 끝내고 휴식시간일때 자동으로 타이머가 돌아가도록 제작할 예정입니다.

4. 커뮤니티 (준비중)
생성한 루틴을 다른사람과 공유할 수 있는 커뮤니티 페이지 입니다. react Lazyloading을 사용해 첫 로딩시엔 로딩되지 않고 nav에서 커뮤니티를 클릭했을때 로딩되도록 제작해 처음 로딩시간을 줄였습니다.
