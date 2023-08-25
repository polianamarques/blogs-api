# :computer: Projeto Blogs-Api

Projeto Back-end que consiste em  uma API e um banco de dados para a produção de conteúdo de um blog.
Foi utilizado os conceitos de Migrations, Models e Seeders para configurar o banco de dados, alem da 
implementação de  relacionamentos 1:N (um para muitos) e N:N (muitos para muitos) para estabelecer as associações entre as tabelas do banco de dados.
A aplicação também conta com autenticação por meio de JWT (JSON Web Tokens), permitindo o acesso seguro às rotas que exigem autenticação.
##

# :sparkles:Principais stacks desenvolvidas::sparkles:
:pushpin: Node.js

:pushpin: Express

:pushpin: Javascript

:pushpin: Docker

:pushpin: JWT (JSON Web Tokens)

## Rodando localmente

1.Clone o projeto

```bash
  git clone git@github.com:polianamarques/blogs-api.git
```

2.Entre no diretório do projeto

3.Instale as dependências

```bash
npm install
```

## Configurações do projeto

Para iniciar o projeto utilizando o Docker, siga as orientações abaixo:

1.Execute o comando para iniciar os serviços node e db utilizando o Docker Compose:
```bash
 docker-compose up -d
```
2.Para acessar o terminal interativo do container blogs-api, execute o comando:
```bash
 docker exec -it blogs_api bash
```

### Contato: 
<div align=""> <br> <a href = "mailto:contatopolianamarques@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
  <a href="https://www.linkedin.com/in/poliana-marques-56b8b118b/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
</div> 
