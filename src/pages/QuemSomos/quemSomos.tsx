import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { api } from '../../api/api';

import { TeamMember } from "../../types/TeamMember";
import { TableTeamMember } from '../../components/TeamMembers/TableTeamMembers/tableTeamMembers';

import * as  ST from './styles';

export const QuemSomos = () => {
    const navigate = useNavigate();
    const [loading, setloading] = useState(false);
    const [list, setList] = useState<TeamMember[]>([]);

    useEffect(() => {
        loadTeamMemberList();
    },[])
    
    const loadTeamMemberList = async () => {
        setloading(true);
        await api.getTeamMemberList().then(data => {
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
                     Quem Somos?
                </ST.HeaderText>
             </ST.Header>   
            <ST.Body>
                {loading && <> <br/>Carregando...</>}
                <TableTeamMember list={list} admin={false} loadTeamMemberList={loadTeamMemberList}/> 
            </ST.Body>
            <ST.BodyButtom>
                <ST.Button onClick={handleVoltar}>Voltar</ST.Button>
            </ST.BodyButtom>
        </ST.Container>   
    );
}