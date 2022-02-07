import { api } from '../../../api/api';
import { Service } from  '../../../types/Service';
import { useNavigate } from 'react-router';
import * as ST from './styles';

type Props = {
    item: Service,
    admin : boolean,
    loadServiceList: Function
}

export const TableServiceItem = ({ item, admin, loadServiceList }: Props) => {
    const navigate = useNavigate();

    const deletService = async () => {
        await api.deleteService(item.id).then(data => {
           alert('Serviço excluido com sucesso');
           loadServiceList();
        }).catch(error => {
           alert('Erro: excluindo Serviço!');
        });
    }

    const updateService = async () => {
        navigate(`/servico/update/${item.id}`);
    }

    return(
        <ST.TableLine> 
            {admin && <ST.TablesColumn>{item.id}</ST.TablesColumn>}
            <ST.TablesColumn>{item.name}</ST.TablesColumn>
            <ST.TablesColumn>{item.description}</ST.TablesColumn>
            {admin &&<>
                       <ST.TablesColumn><ST.Btn onClick={updateService} background={'darkblue'}>Altera</ST.Btn></ST.TablesColumn>
                       <ST.TablesColumn><ST.Btn onClick={deletService} background={'darkred'}>Excluir</ST.Btn></ST.TablesColumn>
                     </>}  
        </ST.TableLine>
    );
}