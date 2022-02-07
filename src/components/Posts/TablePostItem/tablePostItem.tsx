import { api } from '../../../api/api';
import { Post } from  '../../../types/Post';
import * as ST from './styles';

type Props = {
    item: Post,
    admin : boolean,
    loadPostList: Function
}

export const TablePostItem = ({ item, admin, loadPostList }: Props) => {

    const deletPost = async () => {
        await api.deletePost(item.id).then(data => {
           alert('Post excluido com sucesso');
           loadPostList();
        }).catch(error => {
           alert('Erro: excluindo Post!');
        });
    }

    const updatePost = async () => {

    }

    return(
        <ST.TableLine> 
            {admin && <>
            <ST.TablesColumn>{item.id}</ST.TablesColumn> 
            </>}
            <ST.TablesColumn>{item.post}</ST.TablesColumn>
            <ST.TablesColumn>{item.description}</ST.TablesColumn>
            {admin && <>
               <ST.TablesColumn><ST.Btn onClick={updatePost} background={'darkblue'}>Altera</ST.Btn></ST.TablesColumn>
               <ST.TablesColumn><ST.Btn onClick={deletPost} background={'darkred'}>Excluir</ST.Btn></ST.TablesColumn>
            </>}
        </ST.TableLine>
    );
}