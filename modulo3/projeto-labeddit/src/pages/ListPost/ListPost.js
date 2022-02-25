import React from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constant/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import {ConteinerNovoCard} from "../../components/NovoCard";
import * as F from "./styled";
import setaCima from "../../assets/setaCima.png"
import setaBaixo from "../../assets/setaBaixo.png"
import Button from "@material-ui/core/Button";
import { nextFeed } from "../../routers/coordinator";
import { useNavigate } from "react-router-dom";

const ListPost = () => {
  useProtectedPage();

  const navigate = useNavigate()

  const params = useParams();

  const posts = useRequestData({}, `${BASE_URL}/posts`);
  let novoPosts;
  //console.log(posts)
  if (posts !== {} && posts.length) {
    novoPosts = posts
      ?.filter((item) => {
        return item.id === params.id;
      })
      .map((item) => {
        return (
          <ConteinerNovoCard key={item.id}>
            <F.Nome><strong>{item.username}</strong></F.Nome>
            <F.Texto>{item.body}</F.Texto>
            <F.Numero>
              <F.Numero>
             <F.SetaImg src={setaCima}/> 
             <F.TextoN> {item.userVote}</F.TextoN>
             <F.SetaImg src={setaBaixo}/>
             </F.Numero>
             <F.TextoN> {item.voteSum} :Comentário</F.TextoN>
            </F.Numero>
          </ConteinerNovoCard>
        );
      });
  }

  //console.log(novoPosts)
  return (
    <F.ScreenContainer>       
      <F.BotaoContainer>
      <Button
              onClick={()=>nextFeed(navigate)}
              type={'submit'}
              fullWidth
              variant={"contained"}
              color="primary"                          
            >
              Voltar!
            </Button>
            </F.BotaoContainer>     
       {novoPosts}
    </F.ScreenContainer>
  );
};

export default ListPost;
