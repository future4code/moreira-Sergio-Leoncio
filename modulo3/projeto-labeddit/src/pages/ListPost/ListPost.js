import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

const ListPost = () => {
  useProtectedPage() 

  return (
    <div>
        <h1>ListPost</h1>
    </div>
  );
}

export default ListPost;