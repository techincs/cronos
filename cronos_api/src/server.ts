import express, { Request, Response} from 'express';
import path  from 'path';
import dotenv from 'dotenv';
import cors from 'cors';

import routePost from './routes/routePost';
import routeService from './routes/routeService';
import routeTeamMember from './routes/routeTeamMember';

dotenv.config();

const server = express();

server.use(cors());

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended:true}));

server.use('/post', routePost);
server.use('/servico', routeService);
server.use('/intgequipe', routeTeamMember);

server.use((req: Request, res:Response) => {
    res.status(404);
    res.json({error: 'Endpoint não encontrado.'})
})

server.listen(process.env.PORT);