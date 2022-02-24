import React from "react";
import { BASE_URL } from "../../constant/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { ConteinerCard } from "../../components/Header/CardPosts";
import { nextList } from "../../routers/coordinator";
import { useNavigate } from "react-router-dom";
import FeedForm from "./FeedForm";
import * as F from "./styled";

const FeedPost = () => {
  useProtectedPage();

  const navigate = useNavigate()

  const posts = useRequestData([], `${BASE_URL}/posts`);
  //console.log(posts);

  const postsCard = posts.map((item) => {    
      return (
          <ConteinerCard onclick={()=>nextList(navigate)} key={item.id}>
           <p>Usuario: {item.username}</p>    
           <p>Comentário: {item.body}</p>
           <p>N° de Votos: {item.userVote}</p>
           <p>N° de Comentário: {item.voteSum}</p>
          </ConteinerCard>             
      )
  })

  return (    
    <F.ScreenContainer>
      <h1>FeedPost</h1>
      <FeedForm/> 
       <F.CardContainer>
       {postsCard}
     </F.CardContainer>            
    </F.ScreenContainer>   

  );
};

export default FeedPost;
