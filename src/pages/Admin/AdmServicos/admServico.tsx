import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { api } from '../../../api/api';

import { Service } from "../../../types/Service";
import { TableServicos } from '../../../components/Services/TableServicos/tableServicos';
import { InputService } from '../../../components/Services/InputServico/inputServico';

import * as  ST from './styles';

export const AdmServico = () => {
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

    const  handleAddItem = async (newpost: Service) => {
        let body = {
            nome: newpost.name,
            descricao: newpost.description
        }  
        await api.createService(body)
        .then(() => { alert('Serviço Inserido com sucesso')
        loadServiceList(); })
        .catch((error) => { alert(`${error}`)})
      }
    const handleVoltar = async () => {
        navigate(-1);
    };
    return (
        <ST.Container>
            <ST.Header>
                <ST.HeaderText>
                    Administração Serviço
                </ST.HeaderText>
            </ST.Header>  
            <ST.Body>
               <InputService onAdd={handleAddItem}/>
            </ST.Body>
            <ST.Body>
                {loading && <> <br/>Carregando...</>}
                <TableServicos list={list} admin={true} loadServiceList={loadServiceList}/> 
            </ST.Body>
            <ST.BodyButtom>
                <ST.Button onClick={handleVoltar}>Voltar</ST.Button>
            </ST.BodyButtom>
        </ST.Container>   
    );
}