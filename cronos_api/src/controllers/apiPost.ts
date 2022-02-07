import  { Request, Response } from 'express';
import { Post } from '../models/Post';

export const  createPost =  async (req:Request, res: Response) => {
    let post = req.body.post;
    let description =  req.body.descricao;
    console.log('post',post);
    console.log('body',req.body);
    console.log('description',description);

    if ((post === undefined) || (post.length < 1)){
        res.status(404);
        res.json({ error : 'Post não informado.' })
    } else if ((description === undefined) || (description.length  < 1)){
        res.status(404);
        res.json({ error : 'Descricção não informado' })
    } else {
        await Post.create({ post, description })
        .then(async (data) => {res.status(201).json(data) })
        .catch((err: Error) => res.status(500).json(err));
   }
}

export const  updatePost = async (req:Request, res: Response) => {
    let { id } = req.params;
    let post = req.body.post;
    let description =  req.body.descricao;

    if (id === undefined){
        res.status(404);
        res.json({ error : 'ID não informado.' })
    } else if ((post === undefined) || (post.length < 1)){
        res.status(404);
        res.json({ error : 'Post não informado.' })
    } else if ((description === undefined) || (description.length  < 1)){
        res.status(404);
        res.json({ error : 'Descricção não informado' })
    } else {

      let ipost = await Post.findByPk(id);
    
      if ( ipost ) {
          ipost.post = post,
          ipost.description = description,
          await ipost.save()
          .then(() => { res.status(202).json(ipost)})
          .catch((err: Error) => res.status(500).json(err));
      } else {
          res.status(401);
          res.json({ error : 'Post não encontrado' })
      }
    }
}

export const  deletePost = async (req:Request, res: Response) => {
    let { id } = req.params;

    if (id === undefined){
        res.status(404);
        res.json({ error : 'ID não informado.' })
    } else {
       await Post.destroy({ where: { id } })
       .then(() => {res.status(200).json({ delete : 'Post excluido.'  })})
       .catch((err: Error) => res.status(500).json(err));
    }   
}

export const  listPost = async (req:Request, res: Response) => {
    let list = await Post.findAll()
    .then(async (list) => {res.status(200).json(list) })
    .catch((err: Error) => res.status(500).json(err));
}