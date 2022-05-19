import Logo from './logo.svg?component';
import { Button } from '@/components/base';

function App() {
  const onClick = () => console.log('hi');

  return (
    <div className="App">
      <header>
        <Logo />
        <p> size === 'medium', variant === 'default' </p>
        <Button onClick={onClick}>인증번호로 보내기</Button>
        <p> props === 'boxShadow' </p>
        <Button boxShadow>인증번호로 보내기</Button>
        <p> size === 'large' </p>
        <Button size="large">인증번호로 보내기</Button>
        <p> size === 'large' variant === 'gray' </p>
        <Button size="large" variant="gray">
          응답 수정하기
        </Button>
        <p> size === 'large' fontWeight = 700 </p>
        <Button size="large" fontWeight={700}>
          다음
        </Button>
        <p> size === 'large' variant === 'grayBlack' </p>
        <Button size="large" variant="grayBlack">
          다음
        </Button>
        <p> size === 'large' variant === 'grayBlack' width === 100 </p>
        <Button size="large" variant="grayBlack" width={100}>
          다음
        </Button>
      </header>
    </div>
  );
}

export default App;
