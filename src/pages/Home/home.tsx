import { useEffect, useState } from "react";
import { api } from '../../api/api';

import { Service } from "../../types/Service";
import { Post } from "../../types/Post";
import { TablePosts } from '../../components/Posts/TablePosts/tablePosts';
import { TableServicos }  from '../../components/Services/TableServicos/tableServicos';
import { useNavigate } from "react-router";

import * as  ST from './styles';

export const Home = () => {
    const navigate = useNavigate();
    const [loadingService, setLoadingService] = useState(false);
    const [loadingPost, setLoadingPost] = useState(false);
    const [listService, setListService] = useState<Service[]>([]);
    const [listPost, setListPost] = useState<Post[]>([]);
    
    useEffect(() => {
        loadServiceList();
        loadPostList();
    },[])

    const loadServiceList = async () => {
        setLoadingService(true);
        await api.getServiceList().then(data => {
            setListService(data.slice(0, 3));
            setLoadingService(false);
        })
    }
    
    const loadPostList = async () => {
        setLoadingPost(true);
        await api.getPostList().then(data => {
            setListPost(data.slice(0, 3));
            setLoadingPost(false);
        })
    }

    const handleServices = () => {
        navigate('/servico');
    }

    const handleBlog = () => {
        navigate('/blog');
    }

    const handleQuemSomos = () => {
        navigate('/quemsomos');
    }

    const handleAdmServicos = () => {
        navigate('/admin/servico');
    }
    const handleAdmBlog = () => {
        navigate('/admin/posts');
    }
    const handleAdmQuemSomos = () => {
        navigate('/admin/integequipe');
    }
    return (
        <ST.Container>
            <ST.Bunner />
            <ST.BodyButtom>
            <ST.Button onClick={handleServices}>Serviços</ST.Button>
            <ST.Button onClick={handleBlog}>Blog</ST.Button>
            <ST.Button onClick={handleQuemSomos}>Quem Somos</ST.Button>
            <ST.Button onClick={handleAdmServicos}>Adm. Seviços</ST.Button>
            <ST.Button onClick={handleAdmBlog}>Adm. Blog</ST.Button>
            <ST.Button onClick={handleAdmQuemSomos}>Adm. Quem Somos</ST.Button>
            </ST.BodyButtom>
            <ST.Titulo>
                 <ST.TituloText>Serviços</ST.TituloText>
            </ST.Titulo>
            <ST.Body>
                {loadingService && <> <br/>Carregando...</>}
                <TableServicos list={listService} admin={false} loadServiceList={loadServiceList}/> 
            </ST.Body>
            <ST.Titulo>
                 <ST.TituloText>Posts</ST.TituloText>
            </ST.Titulo>
            <ST.Body>
                {loadingPost && <> <br/>Carregando...</>}
                <TablePosts list={listPost} admin={false} loadPostList={loadPostList}/> 
            </ST.Body>

        </ST.Container>   
    );
}