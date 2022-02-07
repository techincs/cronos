import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { api } from '../../api/api';

import { Service } from "../../types/Service";
import { TableServicos } from '../../components/Services/TableServicos/tableServicos';

import * as  ST from './styles';

export const Servico = () => {
    const navigate = useNavigate();
    const [loading, setloading] = useState(false);
    const [list, setList] = useState<Service[]>([]);

    useEffect(() => {
        loadServiceList();
    },[])
    
    const loadServiceList = async () => {
        setloading(true);
        await api.getServiceList().then(data => {
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
                   Serviços
                </ST.HeaderText>
            </ST.Header>  
            <ST.Body>
                {loading && <> <br/>Carregando...</>}
                <TableServicos list={list} admin={false} loadServiceList={loadServiceList}/> 
            </ST.Body>
            <ST.BodyButtom>
            <ST.Button onClick={handleVoltar}>Voltar</ST.Button>
            </ST.BodyButtom>
        </ST.Container>   
    );
}