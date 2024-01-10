//variaveis
var nomeHeroi;
var mensagem;

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

        // Seu código com a lógica do switch vai aqui
        switch (true) {
            case xpHeroi <= 1000:
                mensagem = "Ferro";
                break;
            case xpHeroi >= 1001 && xpHeroi <= 2000:
                mensagem = "Bronze";
                break;
            case xpHeroi >= 2001 && xpHeroi <= 5000:
                mensagem = "Prata";
                break;
            case xpHeroi >= 5001 && xpHeroi <= 7000:
                mensagem = "Ouro";
                break;
            case xpHeroi >= 7001 && xpHeroi <= 8000:
                mensagem = "Platina";
                break;
            case xpHeroi >= 8001 && xpHeroi <= 9000:
                mensagem = "Ascendente";
                break;
            case xpHeroi >= 9001 && xpHeroi <= 10000:
                mensagem = "Imortal";
                break;
            case xpHeroi >= 10001:
                mensagem = "Radiante";
                break;
            default:
                mensagem = "Desconhecido";
                break;
        }

        // Exibir a mensagem final
        console.log("Nome do heroi " + nomeHeroi + " está no nivel " + mensagem + ".");

        rl.close();
    });
});


