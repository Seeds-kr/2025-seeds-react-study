import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>게시판에 오신 것을 환영합니다!</h1>
      <p>최근 게시글:</p>
      {/* 최근 게시글 5개 정도 표시 */}
      <Link to="/posts">게시판 바로가기</Link>
    </div>
  );
};

export default Home;
