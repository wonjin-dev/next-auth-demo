# NEXT AUTH

## 구현 목표

- [x] 깃허브 로그인

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

<hr><br>

처음 프로젝트 생성의 이유였던 restricted의 용도는 session에 대하여 serverside에서 처리할지 clientside에서 처리할지의 차이였을 뿐이었다<br>

getServerSession || useSession에 따라 page레벨에서 서버사이드로 처리하던가 useSession을 통한 클라이언트 사이드에서 처리하면 된다
