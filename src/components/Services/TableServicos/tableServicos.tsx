import * as ST from './styles';
import { TableServiceItem } from '../TableServicoItem/tableServicoItem';
import  { Service } from  '../../../types/Service';

type Props = {
    list: Service[],
    admin : boolean,
    loadServiceList: Function 
}

export const TableServicos = ({ list, admin, loadServiceList }: Props) => {
    return(
        <ST.Table>
            <thead>
                 <tr>
                     {admin && <ST.TableHeadColumn>ID</ST.TableHeadColumn>} 
                     <ST.TableHeadColumn >Nome</ST.TableHeadColumn> 
                     <ST.TableHeadColumn >Descrição</ST.TableHeadColumn> 
                     {admin && <> <ST.TableHeadColumn ></ST.TableHeadColumn> </>}
                 </tr>
            </thead>
            <tbody>
                {list.map((item, index) =>(
                   <TableServiceItem key={index} item={item} admin={admin} loadServiceList={loadServiceList} />
                ))}
            </tbody>
        </ST.Table>      
    );
}