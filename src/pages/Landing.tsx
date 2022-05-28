import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    /* 실제 랜딩페이지 작업 시에는 아래 내용 삭제해 주세요! */
    <div>
      Landing
      <ul>
        <li>
          <Link to="/component">- 예시 컴포넌트</Link>
        </li>
        <li>
          <Link to="/auth-mail">- auth-mail</Link>
        </li>
        <li>
          <Link to="/survey/1">- Survey</Link>
        </li>
      </ul>
    </div>
  );
};

export default Landing;
