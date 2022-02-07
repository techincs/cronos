import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { api } from '../../../api/api';

import { Post } from "../../../types/Post";
import { TablePosts } from '../../../components/Posts/TablePosts/tablePosts';
import { InputPost } from '../../../components/Posts/InputPost/inputPost';

import * as  ST from './styles';

export const AdmPost = () => {
    const navigate = useNavigate();
    const [loading, setloading] = useState(false);
    const [update, setUpdate] = useState(false);
    const [list, setList] = useState<Post[]>([]);

    useEffect(() => {
        loadPostList();
    },[])
    
    const loadPostList = async () => {
        setloading(true);
        await api.getPostList().then(data => {
            setList(data);
            setloading(false);
        })
    }
    const  handleAddItem = async (newpost: Post) => {
      let body = {
          post: newpost.post,
          descricao: newpost.description
      }  
      await api.createPost(body)
      .then(() => { alert('Post Inserido com sucesso')
                    loadPostList(); })
      .catch((error) => { alert(`${error}`)})
    }
    const handleVoltar = async () => {
        navigate(-1);
    };
    return (
        <ST.Container>
            <ST.Header>
                <ST.HeaderText>
                    Administração Post
                </ST.HeaderText>
            </ST.Header>   
            <ST.Body>
               <InputPost onAdd={handleAddItem} />
            </ST.Body>
            <ST.Body>
                {loading && <> <br/>Carregando...</>}
                <TablePosts list={list} admin={true} loadPostList={loadPostList}/> 
            </ST.Body>
            <ST.BodyButtom>
                <ST.Button onClick={handleVoltar}>Voltar</ST.Button>
            </ST.BodyButtom>
        </ST.Container>   
    );
}