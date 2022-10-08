# 원티드 프리온보딩 챌린지

## week1. 자신만의 react-router 구현하기

#### 라우팅 기능을 어떻게 구현할 것인가?

`window.location`, `window.onpopstate`, `History.API`
사용

> 정규표현식 + replace를 사용, Link Component의 to의 인자로 '/' 를 생략가능하도록 구현

Router Component가 동적으로 렌더링할 Component를 결정할 수 있는가?

- `useContext`, `useState`, `Children.forEach`를 사용
- `routerContext`의 `path` 를 통해 그려줘야할 Component의 기준을 입력받음
- Router Component에서 `Children.forEach`를 통해 children component의 `props.to`와 `routerContext.path`를 비교, 일치하는 children component를 렌더링

앞으로가기 뒤로가기 버튼 클릭시 리렌더링 할 수 있는가?

- `'onpopstate'` event handler에 상태를 변경하는 콜백함수를 할당하여 리렌더링 되도록 구현

버튼 클릭 시 url이 변경되는가?

- `history.pushState` 기능을 가진 `useRouter Hooks` 구현
- `Link Component` 내부에서 `useRouter`를 사용하여 URL을 직접 변경할 수 있도록 구현

잘못된 링크로 접속 시 적절한 화면을 보여주는가?

- 라우팅표에 등록되지 않은 주소로 접속 시 root page로 리다이렉트 가능한 `Error Page`를 보여주도록 구현
