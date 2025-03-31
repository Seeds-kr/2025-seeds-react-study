import React, { useState } from 'react';
import '@testing-library/jest-dom';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import PostsList from './components/PostsList';
import PostForm from './components/PostForm';
import PostDetail from './components/PostDetail';

interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  // 새 게시글을 추가하는 함수
  const addPost = (post: { title: string; content: string }) => {
    const newPost = {
      id: posts.length + 1,  // 단순한 id 생성 로직 (새로운 게시글이 추가될 때마다 id 증가)
      title: post.title,
      content: post.content,
      createdAt: new Date().toLocaleString(),
    };
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  // 게시글을 삭제하는 함수
  const deletePost = (id: number) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostsList posts={posts} />} />
        <Route path="/posts/new" element={<PostForm onAddPost={addPost} />} />
        <Route path="/posts/:id" element={<PostDetail posts={posts} onDeletePost={deletePost} />} />
      </Routes>
    </Router>
  );
};

export default App;
