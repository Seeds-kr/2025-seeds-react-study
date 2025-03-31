import React from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // useHistory -> useNavigate

interface Post {
    id: number;
    title: string;
    content: string;
    createdAt: string;
  }
  
interface PostDetailProps {
  posts: { id: number; title: string; content: string; createdAt: string }[];
  onDeletePost: (id: number) => void;
}

const PostDetail: React.FC<PostDetailProps> = ({ posts, onDeletePost }) => {
  const { id } = useParams();
  const navigate = useNavigate(); // useHistory -> useNavigate
  const post = posts.find((p) => p.id === Number(id));

  const handleDelete = () => {
    if (post) {
      onDeletePost(post.id); // 게시글 삭제
      navigate('/posts'); // 삭제 후 게시글 목록으로 이동
    }
  };

  if (!post) {
    return <div>존재하지 않는 게시글입니다.</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>{post.createdAt}</p>
      <button onClick={handleDelete}>삭제하기</button>
      <button onClick={() => navigate('/posts')}>목록으로</button>
    </div>
  );
};

export default PostDetail;
