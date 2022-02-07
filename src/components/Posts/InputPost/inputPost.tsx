import { useState } from 'react';
import * as ST from './styles';
import { Post } from '../../../types/Post';

type Props = {
    onAdd: (post: Post) => void,  
}

export const InputPost = ({ onAdd }: Props) => {
    const [post, setPost] = useState('');
    const [description, setDescription] = useState('');

    const handleAddEvent = () => {
        let errors: string[] = [];

        if (post === ''){
            errors.push('Post não informado.')
        }
        if (description === ''){
            errors.push('Descrição não informado.')
        }

        if (errors.length > 0){
            alert(errors.join("\n"));
        } else {
            onAdd({
                   id:0,
                   post:post,
                   description: description
            });
            clearFields();
        }
    }

    const clearFields = () => {
        setPost('');
        setDescription('');
    }

    return (
      <ST.Container>
          <ST.InputLabel>
                <ST.InputTitle>Titulo</ST.InputTitle>
                <ST.Input type="text" value={post} onChange={e => setPost(e.target.value)} />
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