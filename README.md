# PROJETO CIFRA DE CÉSAR – API

Este projeto foi desenvolvido como atividade da disciplina **Segurança na Web**, da **Fatec Taquaritinga**, com o objetivo de demonstrar o funcionamento da **Cifra de César**. Além da implementação prática de uma API para criptografar e descriptografar textos, foi realizado um estudo teórico sobre a cifra, sua história, funcionamento e vulnerabilidades.

---

## PARTE 1: PESQUISA TEÓRICA

### O QUE É A CIFRA DE CÉSAR?

A **Cifra de César** é uma das primeiras técnicas de criptografia da história, utilizada na Roma antiga pelo imperador **Júlio César**. Trata-se de uma cifra de substituição simples, na qual cada letra do texto é substituída por outra, deslocada um número fixo de posições no alfabeto.

Por exemplo, com um deslocamento de 1 posição:
- **A → B**
- **B → C**
- e assim por diante.

---

### QUAL É O "SEGREDO" DA CIFRA DE CÉSAR?

O segredo da Cifra de César está na **chave**, que corresponde ao número de posições pelo qual as letras são deslocadas. A mesma chave é utilizada tanto para **criptografar** quanto para **descriptografar** o texto.

---

### VULNERABILIDADES

Nos dias atuais, a Cifra de César é considerada **insegura**, pois a chave pode ser descoberta facilmente por meio de técnicas como:

- **Análise de frequência de letras**: observando as letras mais comuns no idioma do texto.  
- **Ataque de força bruta**: testando todas as possíveis chaves até encontrar a correta.

---

### USO HISTÓRICO

Historicamente, a Cifra de César foi utilizada por **Júlio César** para proteger mensagens militares. Cada letra era substituída por outra deslocada no alfabeto, de modo que, caso as mensagens fossem interceptadas, não pudessem ser compreendidas facilmente.

---

## DESCRIÇÃO DO PROJETO

Para rodar este projeto da API da Cifra de César é necessário ter o **Node.js** instalado na sua máquina. Caso ainda não tenha, acesse o site oficial do Node.js ([https://nodejs.org/](https://nodejs.org/)) e faça a instalação conforme seu sistema operacional.

---

### PASSOS PARA RODAR O PROJETO

1. Abra o terminal e navegue até a pasta do projeto.  
2. Instale as dependências necessárias com o comando:

```bash
npm install
```

Este comando vai ler o arquivo package.json do projeto e instalar todas as bibliotecas necessárias para rodar a API.

Para iniciar o servidor da API, use o comando:

```bash
node index.js
```

Se tudo estiver correto, o terminal exibirá a mensagem: 

```json
servidor rodando na porta: 3000
```
Isso significa que a API está ativa e pronta para receber requisições. 

GET: teste a rota de teste da API com:

http://localhost:3000/


POST: teste os endpoints de criptografia e descriptografia usando JSON no corpo da requisição. Por exemplo:

Endpoint de Criptografia:
URL: http://localhost:3000/api/criptografar
Método: POST
Body (JSON):

```json
{
  "texto": "Seu texto aqui",
  "chave": 3
}
```

Endpoint de Descriptografia:
URL: http://localhost:3000/api/descriptografar
Método: POST
Body (JSON):

```json
{
  "texto": "Texto criptografado aqui",
  "chave": 3
}
```

No Thunder Client ou Postman, lembre-se de selecionar o tipo de body como JSON, conforme indicado no PDF do professor, e inserir a URL correta com o método adequado (GET ou POST).

Seguindo estes passos, você conseguirá instalar as bibliotecas, rodar a API e testar todos os endpoints da Cifra de César corretamente.

