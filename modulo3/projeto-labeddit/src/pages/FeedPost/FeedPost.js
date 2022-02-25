import React from "react";
import { BASE_URL } from "../../constant/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { ConteinerCard } from "../../components/Header/CardPosts";
import { nextComments, nextList } from "../../routers/coordinator";
import { useNavigate } from "react-router-dom";
import FeedForm from "./FeedForm";
import * as F from "./styled";
import setaCima from "../../assets/setaCima.png"
import setaBaixo from "../../assets/setaBaixo.png"


const FeedPost = () => {
  useProtectedPage();

  const navigate = useNavigate()

 const onClickCard = (id) => {
   nextList(navigate, id)
 }  

 const onClickComments = (id) => {
   nextComments(navigate, id)
 }

  const posts = useRequestData([], `${BASE_URL}/posts`);
  //console.log(posts);
  
  const postsCard = posts.map((item) => {    
      return (
          <F.ContainerSetas>
          <ConteinerCard onClick={() => onClickCard(item.id)} key={item.id}>
            <F.Nome><strong>{item.username}</strong></F.Nome>
            <F.Texto>{item.body}</F.Texto>
            </ConteinerCard>
              <F.Numero>
              <F.Numero>              
              <F.SetaIcone>
             <F.SetaImg src={setaCima}/> 
             </F.SetaIcone>           
             <F.Voto>
             <F.TextoN>N {item.userVote}</F.TextoN>
             </F.Voto>
             <F.SetaIcone>
             <F.SetaImg src={setaBaixo}/>
             </F.SetaIcone>
             </F.Numero>
             <F.SetaIcone onClick={() => onClickComments(item.id)}>             
             <F.TextoN> {item.voteSum} :Comentário</F.TextoN>
             </F.SetaIcone>
            </F.Numero> 
          </F.ContainerSetas>
      )
  })

  return (    
    <F.ScreenContainer>      
      <FeedForm/> 
       <F.CardContainer>
       {postsCard}
     </F.CardContainer>            
    </F.ScreenContainer>   

  );
};

export default FeedPost;
