PARA RODAR ESTE PROJETO
- No diretório root rodar:
  docker-compose up -d
  para subir o banco de dados e o pgAdmin via docker

- Feito isso, rodar os seguintes comandos para subir o projeto:
  npm install
  npm run dev

- Serviços:
  Postgres inicia na porta 5432 (http://localhost:5432)
  pgAdmin (interface gráfica) inicia na porta 8080 (http://localhost:8080)
  API inicia na porta 3000 (http://localhost:3000/api-docs/)
