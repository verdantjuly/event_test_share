function UserGreeting() {
  return <h1>어서오세요. 반갑습니다.</h1>;
}
function GuestGreeting() {
  return <h1>회원가입을 해 주세요.</h1>;
}

export default function Greeting(props) {
  const isLoggined = props.isLoggedIn;
  if (isLoggined) {
    return <UserGreeting />;
  } else {
    return <GuestGreeting />;
  }
}
