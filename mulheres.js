const express = require("express"); //iniciando o express
const router = express.Router(); // configurando a 1° rota

const { v4: uuidv4 } = require('uuid'); //configurando o uuid
const app = express(); // iniciando o app
app.use(express.json()); //estamos usando json para todos os requests e responses

const porta = 3333; // criando a porta

const mulheres = [ // lista inicial de mulheres
    {
        id :"1",
        nome :"Simara Conceição",
        imagem :"https://github.com/simaraconceicao.png",
        minibio :"Desenvolvedora e Instrutora"
    },

    {
        id:"2",
        nome :"Iana Chan",
        imagem : "https://bit.ly/3JCXBqP",
        minibio : "CEO & Founder da PrograMaria",
     
      },
     
      {
        id :"3",
        nome : "Luana Pimentel",
        imagem : "https://bit.ly/3FKpFaz",
        minibio : "Senior Staff Software Engineer",
     
      }
     
];

//GET
function mostraMulheres(request, response){
    response.json(mulheres);
}

//POST
function criaMulher(request, response){
    const novaMulher = {
        id:uuidv4(),
        nome : request.body.nome,
        imagem : request.body.imagem,
        minibio : request.body.minibio

    };
    mulheres.push(novaMulher);
    response.json(mulheres);
}

//PATCH
function corrigeMulher(request, response){
    function encontraMulher(mulher){
        if(mulher.id === request.params.id){
            return mulher
        }
    };
    const mulherEncontrada = mulheres.find(encontraMulher)

    if (request.body.nome){
        mulherEncontrada.nome = request.body.nome
    }

    if (request.body.minibio){
        mulherEncontrada.minibio = request.body.minibio
    }

    if (request.body.imagem){
        mulherEncontrada.imagem = request.body.imagem
    }

    response.json(mulheres)
}

//DELETE
function deletaMulher(request, response){
    function todasMenosEla(mulher){
        if(mulher.id !== request.params.id){
            return mulher
        }
    }

    const mulheresQueFicam = mulheres.filter(todasMenosEla)

    response.json(mulheresQueFicam)
}

app.use(router.get("/mulheres", mostraMulheres)); //configura a rota GET/mulheres
app.use(router.post("/mulheres", criaMulher)); //configura a rota POST/mulheres
app.use(router.patch("/mulheres/:id", corrigeMulher)); //configura a rota /PATCH/mulheres/id
app.use(router.delete("/mulheres/:id", deletaMulher)); // configurei a rota /DELETE/mulheres

//MOSTRANDO QUE A PORTA FUNCIONA NO CONSOLE
function mostraPorta(){
    console.log("Servidor criado e rodando na porta ", porta);
}

app.listen(porta, mostraPorta); //servidor ouvindo a porta