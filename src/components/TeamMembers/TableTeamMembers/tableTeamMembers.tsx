import * as ST from './styles';
import { TableTeamMemberItem } from '../TableTeamMemberItem/tableTeamMemberItem';
import  { TeamMember } from  '../../../types/TeamMember';

type Props = {
    list: TeamMember[],
    admin :boolean
    loadTeamMemberList: Function 
}

export const TableTeamMember = ({ list, admin, loadTeamMemberList }: Props) => {
    return(
        <ST.Table>
            <thead>
                 <tr>
                     {admin && <ST.TableHeadColumn width={30}>ID</ST.TableHeadColumn>} 
                     <ST.TableHeadColumn width={120}>Nome</ST.TableHeadColumn> 
                     <ST.TableHeadColumn >Equipe</ST.TableHeadColumn> 
                     {admin && <ST.TableHeadColumn ></ST.TableHeadColumn>} 
                 </tr>
            </thead>
            <tbody>
                {list.map((item, index) =>(
                   <TableTeamMemberItem key={index} item={item} admin={admin} loadTeamMemberList={loadTeamMemberList} />
                ))}
            </tbody>
        </ST.Table>      
    );
}