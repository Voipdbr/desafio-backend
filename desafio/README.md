<img src="./images/voip.gif" width="500px"/>

---

# Projeto owInteractive

O projeto em questão em questão é um desafio que participei, foi dado a possibilidade de usar umas dessas linguagens [PHP ou NodeJS].

E os diferencias do projeto é que você deveria utilizar uma framework especifica para cada linguagem [Laravel (PHP) ou Adonois/JS (Node)].

Eu optei por desenvolver em Adonis/JS, pois tenho afinidade com a tecnologia em questão.

---

# Como rodar?

### Para rodar a aplicação você precisa seguir os passos seguintes

#### OBS: Para executar os comando você irá necessitar baixar o <a href="https://nodejs.org/en/">NPM (Node Package Manager)</a>

- 1 - Instalar os pacotes

```
npm install
```

Com o comando acima os pacotes da aplicação será baixado automaticamente, assim você poderá fazer a execução.

Caso houver algum erro execute este outro comando

```
npm install @adonisjs/cli
```

ou se prefirir o comando de instalação global

```
npm install -g @adonisjs/cli
```

- 2 - Agora executando

```
npm start
```

Com o comando acima o servidor irá ser executado na porta padrão 3333.

Ou se você tiver instalado a instância global do adonis você pode executar com o comando.

```
adonis serve --dev
```

---

# Endpoint's

Os endpoint's da aplicação estão a seguir.

```

Usuário: http://localhost:3333/user // método(GET)

Usuário Descrescente: http://localhost:3333/userDec // método(GET)

Usuário por id: http://localhost:3333/user/{id} // método(GET)

Criar usuário: http://localhost:3333/createUser // método(POST)

Atualizar usuário: http://localhost:3333/updateUser/{id} // método(PUT)

Criar saldo do usuário: http://localhost:3333/createSaldo // método(POST)

Saldo do usuário: http://localhost:3333/saldoUser // método(GET)

Criar movimentação do usuário: http://localhost:3333/criarDebitos // método(POST)

Movimentação do usuário: http://localhost:3333/debitos // método(GET)

Movimentação por id do usuário: http://localhost:3333/debitos/{id} // método(GET)

Atualizar movimentação do usuário: http://localhost:3333/updateDebitos/{id} // método(PUT)

Soma da movimentação e saldo do usuário: http://localhost:3333/somaDebitos // método(GET)

Deletar usuário: http://localhost:3333/deleteUser/{id} // método(DELETE)

Deletar movimentação do usuário: http://localhost:3333/deleteDebitos/{id} // método(DELETE)

Exportar dados do usuário para arquivo CSV: http://localhost:3333/csv // método(GET)

```

Alguns dos metódos necessitam de um corpo JSON para serem executados, no caso os métodos que são necessários o JSON é (POST e PUT).

Seguindo isso você terá que ter estes parâmetros especificos para executar.

```

Criar usuário:
(POST)
{
	"name": "TESTE",
	"email": "teste@gmail.com",
	"idade": 18
}

Atualizar usuário:
(PUT)
{
	"name": "TESTE",
	"email": "teste@gmail.com"
}

Criar saldo do usuário:
(POST)
{
	"id_users": {ID DO USUÁRIO},
	"saldoinicial": 0
}


Criar movimentação do usuário:
(POST)
{
	"id_user": {ID DO USUÁRIO},
	"debito": 0,
	"credito": 0,
	"estorno": 0
}

Atualizar movimentação do usuário:
(PUT)
{
	"debito": 0,
	"credito": 0,
	"estorno": 0
}

```

---

# Endpoint's problematicos

```
Exportar dados do usuário para arquivo CSV: http://localhost:3333/csv
```

Ao executar o endpoint o server crasha erro (ERR_HTTP_HEADERS_SENT).

Para reiniciar o server, pegue qualquer controller de um CTRL + S ou desligue o server e execute o comando (npm start) novamente.

# Questões solucionadas

- Etapa 1

✔ Criar um endpoint onde é cadastrado um usuário.

✔ Criar um endpoint para listagem desses usuários, ordernados por ordem de cadastro decrescente (mais novo para mais antigo);

✔ Criar um endpoint para listar um único usuário através do seu id;

✔ Criar um endpoint para excluir um usuário através do seu id.

- Etapa 2

✔ Criar um endpoint ou endpoint`s onde é possível associar uma operação de débito, crédito ou estorno para o usuário;
 
✔ Criar um endpoint onde seja possível visualizar toda a movimentação (páginada) do usuários mais as suas informações pessoais;

✔ Criar um endpoint onde seja possível excluir uma movimentação relacionada a um usuário;

[+-]✔ Criar um endpoint onde é retornado um arquivo no formato (csv) com 3 tipos de filtros para as movimentações;

- Etapa 3

✔ Adicionar dentro do usuário um campo para saldo inicial, e criar um endpoint para alterar esse valor;

✔ Criar um endpoint com a soma de todas as movimentações (débito, crédito e estorno) mais o saldo inicial do usuário;

✔ No endpoint que exclui um usuário, adicionar a funcionalidade que agora não será mais possível excluir um usuário que tenha qualquer tipo de movimentação ou saldo;

✔ No endpoint que cadastra usuário, adicionar a funcionalidade que apenas maiores de 18 anos podem criar uma conta;

❌ No endpoint que exporta o arquivo CSV criar um cabeçalho com os dados do cliente e o seu saldo atual;

- Etapa 4

✔ Criar validações com base na Request;

??? Utilizar cache para otimizar as consultas e buscas;

??? Criar Seeders ou Inicializadores de dados para o usuários e suas movimentações;

❌ Criar os métodos baseados em algum método de autênticação.

✔ Documentação dos endpoint`s;