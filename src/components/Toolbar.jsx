export default function Toolbar(props) {
  const { isLoggedIn } = props;
  return (
    <div>
      {
        // 단축평가
        isLoggedIn && <span>환영합니다.</span>
      }
    </div>
  );
}
