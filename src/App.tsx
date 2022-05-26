import Logo from './logo.svg?component';
import { Button } from '@/components/base';
import GlobalStyles from './lib/styles/globalStyles';
import ProgressBar from '@/components/base/ProgressBar';
import { ThemeProvider } from 'styled-components';
import { palette } from '@/lib/styles/palette';
import MultiRangeSlider from '@/components/base/MultiRangeSlider';
import 'sweetalert2/dist/sweetalert2.css';
import Swal from 'sweetalert2';
import { swalConfig } from '@/lib/styles/swalStyles';
import ModalTemplate from './components/base/Modal';
import useToggle from './hooks/common/useToggle';

function App() {
  const [isToggle, onChangeToggle] = useToggle();
  const onClick = async () => {
    const { isConfirmed, isDismissed } = await swalConfirm();
    if (isConfirmed) console.log('isConfirmed: ', isConfirmed);
    if (isDismissed) console.log('isDismessed: ', isDismissed);
  };

  return (
    <ThemeProvider theme={{ palette }}>
      <div className="App">
        <GlobalStyles />
        <Button onClick={onChangeToggle}>모달</Button>
        {isToggle && (
          <ModalTemplate
            width={512}
            height={172}
            onToggleModal={onChangeToggle}
            bottonName="다음"
            onClick={() => {
              console.log('확인');
            }}
            title="탈퇴하면 저장한 모든 설문정보가 사라집니다."
            text="🥺 정말 탈퇴하시겠어요?"
          />
        )}
        <GlobalStyles />
        <header>
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
          <p>프로그래스바</p>
          <ProgressBar currStep={3} totalStep={10} />
          <p>양방향 range input</p>
          <div></div>
          <MultiRangeSlider
            min={130}
            max={210}
            defaultMin={160}
            defaultMax={180}
            onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
          />
        </header>
      </div>
    </ThemeProvider>
  );
}

const swalConfirm = () =>
  Swal.fire({
    title: '탈퇴하면 저장한 모든 설문정보가 사라집니다.',
    // title: '국내 위치 설문 후 국내매칭을 이용하실 수 있습니다.',
    // title: '다시 매칭하시겠습니까?',
    text: '🥺 정말 탈퇴하시겠어요?',
    // text: '지금 설문하시겠습니까?',
    // text: '예전 설문 내용을 토대로 다시 매칭해드립니다.',
    ...swalConfig,
  });

export default App;
