//variaveis
var nomeHeroi;
var nivel;

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitar o nome do herói
rl.question("Digite o nome do herói: ", function(nomeInput) {
    nomeHeroi = nomeInput;

    // Solicitar a quantidade de experiência (XP)
    rl.question("Digite a quantidade de experiência (XP) do herói: ", function(xpInput) {
        const xpHeroi = parseInt(xpInput);
        
      //estrutura de decisão
        switch (true) {
            case xpHeroi <= 1000:
                nivel = "Ferro";
                break;
            case xpHeroi >= 1001 && xpHeroi <= 2000:
                nivel = "Bronze";
                break;
            case xpHeroi >= 2001 && xpHeroi <= 5000:
                nivel = "Prata";
                break;
            case xpHeroi >= 5001 && xpHeroi <= 7000:
                nivel = "Ouro";
                break;
            case xpHeroi >= 7001 && xpHeroi <= 8000:
                nivel = "Platina";
                break;
            case xpHeroi >= 8001 && xpHeroi <= 9000:
                nivel = "Ascendente";
                break;
            case xpHeroi >= 9001 && xpHeroi <= 10000:
                nivel = "Imortal";
                break;
            case xpHeroi >= 10001:
                nivel = "Radiante";
                break;
            default:
                nivel = "Desconhecido";
                break;
        }

    
        console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel +".");

        rl.close();
    });
});


