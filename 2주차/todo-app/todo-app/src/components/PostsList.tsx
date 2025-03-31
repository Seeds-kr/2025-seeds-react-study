import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

interface PostsListProps {
  posts: Post[]; // posts를 props로 받음
}

const PostsList: React.FC<PostsListProps> = ({ posts }) => { // posts를 props로 받아옴
  return (
    <div>
      <h1>게시글 목록</h1>
      <Link to="/posts/new">글쓰기</Link>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
            <p>{post.createdAt}</p>
          </div>
        ))
      ) : (
        <p>작성된 게시글이 없습니다.</p>
      )}
    </div>
  );
};

export default PostsList;
