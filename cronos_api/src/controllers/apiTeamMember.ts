import  { Request, Response } from 'express';
import { TeamMember } from '../models/TeamMember';

export const  createTeamMember =  async (req:Request, res: Response) => {
    let name = req.body.nome;
    let team =  req.body.equipe;

    if ((name === undefined) || (name.length < 1)){
        res.status(404);
        res.json({ error : 'Nome não informado.' })
    } else if ((team === undefined) || (team.length  < 1)){
        res.status(404);
        res.json({ error : 'Equipe não informado' })
    } else { 
       await TeamMember.create({ name, team })
       .then(async (data) => {res.status(201).json(data)})
       .catch((err: Error) => res.status(500).json(err));
    }
}

export const  updateTeamMember = async (req:Request, res: Response) => {
    let { id } = req.params;
    let name = req.body.nome;
    let team =  req.body.equipe;

    if (id === undefined){
        res.status(404);
        res.json({ error : 'ID não informado.' })
    } else if ((name === undefined) || (name.length < 1)){
        res.status(404);
        res.json({ error : 'Nome não informado.' })
    } else if ((team === undefined) || (team.length  < 1)){
        res.status(404);
        res.json({ error : 'Equipe não informado' })
    } else {
    
      let teamMember = await TeamMember.findByPk(id);
    
      if ( teamMember ) {
          teamMember.name = name,
          teamMember.team = team,
          await teamMember.save()
          .then(() => { res.status(202).json(teamMember)})
          .catch((err: Error) => res.status(500).json(err));
      } else {
          res.status(401);
          res.json({ error : 'Integrante da equipe não encontrado' })
      }
    }   
}

export const  deleteTeamMember = async (req:Request, res: Response) => {
    let { id } = req.params;

    if (id === undefined){
        res.status(404);
        res.json({ error : 'ID não informado.' })
    } else  {
        await TeamMember.destroy({ where: { id } })
        .then(() => {res.status(200).json({ delete : 'Integrante da equipe excluido.'  })})
        .catch((err: Error) => res.status(500).json(err));
    }  
}

export const  listTeamMembers = async (req:Request, res: Response) => {
    let list = await TeamMember.findAll()
    .then(async (list) => {res.status(200).json(list) })
    .catch((err: Error) => res.status(500).json(err));
}