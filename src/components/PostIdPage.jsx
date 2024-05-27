import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "./UI/loader/Loader";
const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getPostById(id);
    setPost(response.data);
  });

  const [fetchCommentsByPosts, isCommLoading, commError] = useFetching(
    async (id) => {
      const response = await PostService.getCommentsByPost(id);
      setComments(response.data);
    }
  );

  useEffect(() => {
    fetchCommentsByPosts(params.id);
    fetchPostById(params.id);
  }, []);
  return (
    <div>
      <Link to="/posts">Вернуться на главную страницу</Link>
      <h1>Вы открылы страницу поста {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <h1>
            {params.id}. {post.title}
          </h1>
          <p> {post.body} </p>
        </div>
      )}
      <h1 style={{ marginTop: "30px" }}>Комментарии</h1>
      {isCommLoading ? (
        <Loader />
      ) : (
        comments.map((com, index) => (
          <div style={{marginTop: '25px'}} key={com.id}>
            <h1>
              {index + 1}. {com.name}{" "}
            </h1>
            <h3> {com.email} </h3>
            <p> {com.body} </p>
          </div>
        ))
      )}
    </div>
  );
};

export default PostIdPage;
