import * as ST from './styles';
import { TablePostItem } from '../TablePostItem/tablePostItem';
import  { Post } from  '../../../types/Post';

type Props = {
    list: Post[],
    admin : boolean;
    loadPostList: Function 
}

export const TablePosts = ({ list, admin, loadPostList }: Props) => {
    return(
        <ST.Table>
            <thead>
                 <tr>
                     {admin &&<ST.TableHeadColumn>ID</ST.TableHeadColumn> }
                     <ST.TableHeadColumn>Título</ST.TableHeadColumn> 
                     <ST.TableHeadColumn>Descrição</ST.TableHeadColumn> 
                     {admin && <ST.TableHeadColumn ></ST.TableHeadColumn> }
                 </tr>
            </thead>
            <tbody>
                {list.map((item, index) =>(
                   <TablePostItem key={index} item={item} admin={admin} loadPostList={loadPostList} />
                ))}
            </tbody>
        </ST.Table>      
    );
}