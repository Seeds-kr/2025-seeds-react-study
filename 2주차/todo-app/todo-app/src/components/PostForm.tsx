import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useHistory -> useNavigate

interface PostFormProps {
  onAddPost: (post: { title: string; content: string; }) => void;
}

const PostForm: React.FC<PostFormProps> = ({ onAddPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();  // useHistory -> useNavigate

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && content) {
      const newPost = { title, content, createdAt: new Date().toISOString() };
      onAddPost(newPost); // 게시글 추가
      navigate('/posts'); // 글 추가 후 게시글 목록으로 이동
    }
  };

  return (
    <div>
      <h1>새 게시글 작성</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>제목</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>내용</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <button type="submit">작성하기</button>
      </form>
    </div>
  );
};

export default PostForm;
