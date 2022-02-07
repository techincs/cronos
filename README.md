Para rodar Back-end 

Na Pasta \cronos\cronos_api\DB\
Possui um Dump do banco de dados 
cronos.sql

Para Instalar a API
\cronos\cronos_api\.env

Porta que vai rodar o pedido
PORT=4000

Configurações para o banco de dados
MYSQL_DB=cronos
MYSQL_USER=root
MYSQL_PASSWORD=
MYSQL_PORT=3306

Para Rodar a Server 
npm install
npm run start-dev

Métodos da API

///Post
 
 Para Listar os Post
 Método : GET
 URL : http://localhost:4000/post/lista
 
 Para Inserir um Post
 URL : http://localhost:4000/post
 Método : POST
 Header : Content-Type application/x-www-form-urlencoded
 body : {post:'Nome', descricao:'descricao'}

 Para Atualizar um Post
 Método : PUT
 URL : http://localhost:4000/post/id
 Header : Content-Type application/x-www-form-urlencoded
 body : {post:'Nome', descricao:'descricao'}
 obs: /id = ao número id do post
 
 Para Deletar um Post
 Método : DELETE
 Post : http://localhost:4000/post/id
 obs: /id = ao número id do post
 
 
 ///Serviço
 

 Para Listar os Serviços
 Método : GET
 URL : http://localhost:4000/servico/lista
 
 Para Inserir um Serviço
 URL : http://localhost:4000/servico
 Método : POST
 Header : Content-Type application/x-www-form-urlencoded
 body : {nome:'Nome', descricao:'descricao'}

 Para Atualizar um Serviço
 Método : PUT
 URL : http://localhost:4000/servico/id
 Header : Content-Type application/x-www-form-urlencoded
 body : {nome:'Nome', descricao:'descricao'}
 obs: /id = ao número id do serviço
 
 Para Deletar um Serviço
 Método : DELETE
 Post : http://localhost:4000/servico/id
 obs: /id = ao número id do serviço
 
 
  ///Integrantes da Equipe
 

 Para Listar os Integrantes da Equipe
 Método : GET
 URL : http://localhost:4000/intgequipe/lista
 
 Para Inserir um Integrantes da Equipe
 URL : http://localhost:4000/intgequipe
 Método : POST
 Header : Content-Type application/x-www-form-urlencoded
 body : {nome:'Nome', equipe:'equipe'}

 Para Atualizar um Integrantes da Equipe
 Método : PUT
 URL : http://localhost:4000/intgequipe/id
 Header : Content-Type application/x-www-form-urlencoded
 body : {nome:'Nome', equipe:'equipe'}
 obs: /id = ao número id do Integrantes da Equipe
 
 Para Deletar um Integrantes da Equipe
 Método : DELETE
 Post : http://localhost:4000/intgequipe/id
 obs: /id = ao número id do Integrantes da Equipe


Para rodar Front-End 

Altera a URL da API
\cronos\src\api\api.tsx

const request = axios.create({
  baseURL:'http://192.168.100.15:4000'
});

Para Rodar o Site
npm install
npm start


