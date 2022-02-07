import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { api } from '../../../api/api';

import { TeamMember } from "../../../types/TeamMember";
import { TableTeamMember } from '../../../components/TeamMembers/TableTeamMembers/tableTeamMembers';
import { InputTeamMember } from '../../../components/TeamMembers/InputTeamMember/inputTeamMember';

import * as  ST from './styles';

export const AdmIntegEquipe = () => {
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
    const  handleAddItem = async (newTeamMember: TeamMember) => {
        let body = {
            nome: newTeamMember.name,
            equipe: newTeamMember.team
        }  
        await api.createTeamMember(body)
        .then(() => { alert('Integrante da equipe Inserido com sucesso')
        loadTeamMemberList(); })
        .catch((error) => { alert(`${error}`)})
      }
  
      const handleVoltar = async () => {
        navigate(-1);
      };

      return (
          <ST.Container>
             <ST.Header>
                <ST.HeaderText>
                    Administração Integrantes da Equipe
                </ST.HeaderText>
             </ST.Header>   
              <ST.Body>
                 <InputTeamMember onAdd={handleAddItem}/>
              </ST.Body>
            <ST.Body>
                {loading && <> <br/>Carregando...</>}
                <TableTeamMember list={list} admin={true} loadTeamMemberList={loadTeamMemberList}/> 
            </ST.Body>
            <ST.BodyButtom>
                <ST.Button onClick={handleVoltar}>Voltar</ST.Button>
            </ST.BodyButtom>
        </ST.Container>   
    );
}