import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

const FeedPost = () => {
  useProtectedPage()

  return (
    <div>
        <h1>FeedPost</h1>
    </div>
  );
}

export default FeedPost;