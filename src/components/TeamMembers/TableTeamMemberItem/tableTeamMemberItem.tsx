import { api } from '../../../api/api';
import { TeamMember } from  '../../../types/TeamMember';
import { useNavigate } from 'react-router';
import * as ST from './styles';

type Props = {
    item: TeamMember,
    admin: boolean,
    loadTeamMemberList: Function
}

export const TableTeamMemberItem = ({ item, admin, loadTeamMemberList }: Props) => {
    const navigate = useNavigate();

    const deletloadTeamMemberList = async () => {
        await api.deleteTeamMember(item.id).then(data => {
           alert('Integrante da equipe excluido com sucesso');
           loadTeamMemberList();
        }).catch(error => {
           alert('Erro: excluindo Integrante da equipe.');
        });
    }

    const updateTeamMember = async () => {
        navigate(`/servico/update/${item.id}`);
    }

    return(
        <ST.TableLine> 
            {admin && <ST.TablesColumn>{item.id}</ST.TablesColumn>}
            <ST.TablesColumn>{item.name}</ST.TablesColumn>
            <ST.TablesColumn>{item.team}</ST.TablesColumn>
            {admin && <>
                        <ST.TablesColumn><ST.Btn onClick={updateTeamMember} background={'darkblue'}>Altera</ST.Btn></ST.TablesColumn>
                        <ST.TablesColumn><ST.Btn onClick={deletloadTeamMemberList} background={'darkred'}>Excluir</ST.Btn></ST.TablesColumn>
                      </>}   
        </ST.TableLine>
    );
}