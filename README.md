# NEXT AUTH

## 구현 목표

- [x] 소셜 로그인
- [x] 서버사이드 세션 처리
- [x] vercel 배포 환경 변수 등록

<hr><br>

```
NEXTAUTH_URL: my web domain address (requiered)
SOCIAL_CLIEND_ID
SOCIAL_CLIEND_SECRET
```

구현하고자 하는 social의 클라이언트 ID와 시크릿 해시 값이 필요<br>
NEXTAUTH_URL는 무조건 필수 값. vercel 배포시 해당 도메인을 이용하여 배포하게 됨

<hr><br>
[...nextauth].ts의 pages에서 다양한 케이스에 대응하는 페이지 렌더링 가능

```
pages: {
  signIn: '/auth/signin',
  signOut: '/auth/signout',
  error: '/auth/error', // Error code passed in query string as ?error=
  verifyRequest: '/auth/verify-request', // (used for check email message)
  newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
}
```

<hr>

- [x] client side에서 session 처리시 새로고침하면 깜빡이는 현상 해결
  > getServerSideProps와 getSession을 이용하여 서버사이드 렌더링 단계에서 세션 정보 주입
