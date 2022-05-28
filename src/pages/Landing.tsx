import { Link } from 'react-router-dom';

const Landing = () => {
  return (
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
