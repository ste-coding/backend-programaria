const mongoose = require("mongoose"); //importa o mongoose para interagir com o MongoDB
require("dotenv").config(); //configura .env para armazenar informações sensíveis de forma segura

async function conectaBancoDeDados(){ //informa sobre andamento da conexão com o banco de dados
    try {
        console.log("Conexão com o banco de dados iniciou");

        await mongoose.connect(process.env.MONGO_URL);

        console.log("Conexão com o banco de dados feita com sucesso!");

    } catch(erro){
        console.log(erro);
    }

}

module.exports = conectaBancoDeDados; //exporta a função para que possa ser usada em outros arquivos