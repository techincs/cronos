import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { api } from '../../api/api';

import { Post } from "../../types/Post";
import { TablePosts } from '../../components/Posts/TablePosts/tablePosts';

import * as  ST from './styles';

export const Blog = () => {
    const navigate = useNavigate();
    const [loading, setloading] = useState(false);
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
    const handleVoltar = async () => {
        navigate(-1);
    };

    return (
        <ST.Container>
            <ST.Header>
                <ST.HeaderText>
                    Blog
                </ST.HeaderText>
            </ST.Header>   
            <ST.Body>
                {loading && <> <br/>Carregando...</>}
                <TablePosts list={list} admin={false} loadPostList={loadPostList}/> 
            </ST.Body>
            <ST.BodyButtom>
                <ST.Button onClick={handleVoltar}>Voltar</ST.Button>
            </ST.BodyButtom>
        </ST.Container>   
    );
}