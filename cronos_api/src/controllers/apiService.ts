import  { Request, Response } from 'express';
import { Service } from '../models/Service';

export const  createService =  async (req:Request, res: Response) => {
    let name = req.body.nome;
    let description =  req.body.descricao;
    
    if ((name === undefined) || (name.length < 1)){
        res.status(404);
        res.json({ error : 'Nome não informado.' })
    } else if ((description === undefined) || (description.length  < 1)){
        res.status(404);
        res.json({ error : 'Descricção não informado' })
    } else {    
       await Service.create({ name, description })
       .then(async (data) => {res.status(201).json(data) })
       .catch((err: Error) => res.status(500).json(err));
    }
}
export const  updateService = async (req:Request, res: Response) => {
    let { id } = req.params;
    let name = req.body.nome;
    let description =  req.body.descricao;  

    if (id === undefined){
        res.status(404);
        res.json({ error : 'ID não informado.' })
    } else if ((name === undefined) || (name.length < 1)){
        res.status(404);
        res.json({ error : 'Nome não informado.' })
    } else if ((description === undefined) || (description.length  < 1)){
        res.status(404);
        res.json({ error : 'Descricção não informado' })
    } else {    

      let servico = await Service.findByPk(id);
    
      if ( servico ) {
          servico.name = name,
          servico.description = description,
          await servico.save()
          .then(() => { res.status(202).json(servico)})
          .catch((err: Error) => res.status(500).json(err));
      } else {
          res.status(401);
          res.json({ error : 'Serviço não encontrado' })
      }
    }
}

export const  deleteService = async (req:Request, res: Response) => {
    let { id } = req.params;

    if (id === undefined){
        res.status(404);
        res.json({ error : 'ID não informado.' })
    } else {
        await Service.destroy({ where: { id } })
        .then(() => {res.status(200).json({ delete : 'Serviço excluido.'  })})
        .catch((err: Error) => res.status(500).json(err));
    }    
}

export const  listService = async (req:Request, res: Response) => {
     await Service.findAll()
    .then(async (list) => {res.status(200).json(list) })
    .catch((err: Error) => res.status(500).json(err));
}