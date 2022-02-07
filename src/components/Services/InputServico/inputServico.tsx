import { useState } from 'react';
import * as ST from './styles';
import { Service } from '../../../types/Service';

type Props = {
    onAdd: (service: Service) => void,  
}

export const InputService = ({ onAdd }: Props) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleAddEvent = () => {
        let errors: string[] = [];

        if (name === ''){
            errors.push('Nome do serviço não informado.')
        }
        if (description === ''){
            errors.push('Descrição não informado.')
        }

        if (errors.length > 0){
            alert(errors.join("\n"));
        } else {
            onAdd({
                   id:0,
                   name:name,
                   description: description
            });
            clearFields();
        }
    }

    const clearFields = () => {
        setName('');
        setDescription('');
    }

    return (
      <ST.Container>
          <ST.InputLabel>
                <ST.InputTitle>Serviço</ST.InputTitle>
                <ST.Input type="text" value={name} onChange={e => setName(e.target.value)} />
          </ST.InputLabel>
          <ST.InputLabel>
                <ST.InputTitle>Descrição</ST.InputTitle>
                <ST.Input type="text" value={description} onChange={e => setDescription(e.target.value)} />
          </ST.InputLabel>
          <ST.InputLabel>
                <ST.InputTitle>&nbsp;</ST.InputTitle>
                  <ST.Button onClick={handleAddEvent}>Adicionar</ST.Button>
          </ST.InputLabel>
      </ST.Container>
    );
}