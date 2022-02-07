import { useState } from 'react';
import * as ST from './styles';
import { TeamMember } from '../../../types/TeamMember';

type Props = {
    onAdd: (teamMember: TeamMember) => void,  
}

export const InputTeamMember = ({ onAdd }: Props) => {
    const [name, setName] = useState('');
    const [team, setTeam] = useState('');

    const handleAddEvent = () => {
        let errors: string[] = [];

        if (name === ''){
            errors.push('Nome não informado.')
        }
        if (team === ''){
            errors.push('Equipe não informado.')
        }

        if (errors.length > 0){
            alert(errors.join("\n"));
        } else {
            onAdd({
                   id:0,
                   name:name,
                   team: team
            });
            clearFields();
        }
    }

    const clearFields = () => {
        setName('');
        setTeam('');
    }

    return (
      <ST.Container>
          <ST.InputLabel>
                <ST.InputTitle>Nome</ST.InputTitle>
                <ST.Input type="text" value={name} onChange={e => setName(e.target.value)} />
          </ST.InputLabel>
          <ST.InputLabel>
                <ST.InputTitle>Equipe</ST.InputTitle>
                <ST.Input type="text" value={team} onChange={e => setTeam(e.target.value)} />
          </ST.InputLabel>
          <ST.InputLabel>
                <ST.InputTitle>&nbsp;</ST.InputTitle>
                  <ST.Button onClick={handleAddEvent}>Adicionar</ST.Button>
          </ST.InputLabel>
      </ST.Container>
    );
}