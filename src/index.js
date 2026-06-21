// Atributos estruturados dos competidores da corrida
const player1 = {
  NOME: "Mario",
  VELOCIDADE: 4,
  MANOBRABILIDADE: 3,
  PODER: 3,
  PONTOS: 0,
};

const player2 = {
  NOME: "Luigi",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 4,
  PONTOS: 0,
};

/**
 * Simula a rolagem de um dado de 6 faces (valores de 1 a 6).
 */
async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

/**
 * Sorteia de forma aleatória e equiprovável o obstáculo/bloco da rodada atual.
 */
async function getRandomBlock() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "RETA";
      break;
    case random < 0.66:
      result = "CURVA";
      break;
    default:
      result = "CONFRONTO";
  }
  return result;
}

/**
 * Função utilitária para padronizar e imprimir os cálculos de rolagens no console.
 */
async function logRollResult(characterName, block, diceResult, atribute) {
  console.log(
    `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${atribute} = ${
      diceResult + atribute
    }`
  );
}

/**
 * Motor principal que gerencia os turnos, confrontos e pontuações da corrida.
 */
async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`\n🏁 Rodada ${round}`);

    // Sorteio do Bloco Corrente
    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    // Rolagem individual dos dados
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    // Inicialização das variáveis de teste de habilidade por turno
    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    // Cenário de Teste: RETA (Foco em Velocidade)
    if (block === "RETA") {
      totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
      totalTestSkill2 = diceResult2 + character2.VELOCIDADE;

      await logRollResult(
        character1.NOME,
        "velocidade",
        diceResult1,
        character1.VELOCIDADE
      );

      await logRollResult(
        character2.NOME,
        "velocidade",
        diceResult2,
        character2.VELOCIDADE
      );
    }

    // Cenário de Teste: CURVA (Foco em Manobrabilidade)
    if (block === "CURVA") {
      totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
      totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;

      await logRollResult(
        character1.NOME,
        "manobrabilidade",
        diceResult1,
        character1.MANOBRABILIDADE
      );

      await logRollResult(
        character2.NOME,
        "manobrabilidade",
        diceResult2,
        character2.MANOBRABILIDADE
      );
    }

    // Cenário de Teste: CONFRONTO (Foco em Poder / Ataques de Casco)
    if (block === "CONFRONTO") {
      let powerResult1 = diceResult1 + character1.PODER;
      let powerResult2 = diceResult2 + character2.PODER;

      console.log(`${character1.NOME} confrontou com ${character2.NOME}! 🥊`);

      await logRollResult(
        character1.NOME,
        "poder",
        diceResult1,
        character1.PODER
      );

      await logRollResult(
        character2.NOME,
        "poder",
        diceResult2,
        character2.PODER
      );

      // Regra de Confronto: O perdedor perde 1 ponto se tiver saldo disponível
      if (powerResult1 > powerResult2) {
        console.log(`${character1.NOME} venceu o confronto! 🐢`);
        if (character2.PONTOS > 0) {
          console.log(`${character2.NOME} perdeu um ponto!`);
          character2.PONTOS--;
        } else {
          console.log(`${character2.NOME} já estava com 0 pontos e não perdeu nada.`);
        }
      }

      if (powerResult2 > powerResult1) {
        console.log(`${character2.NOME} venceu o confronto! 🐢`);
        if (character1.PONTOS > 0) {
          console.log(`${character1.NOME} perdeu um ponto!`);
          character1.PONTOS--;
        } else {
          console.log(`${character1.NOME} já estava com 0 pontos e não perdeu nada.`);
        }
      }

      if (powerResult2 === powerResult1) {
        console.log("Confronto empatado! Nenhum ponto foi perdido!");
      }
    }

    // Verificação e atribuição de pontos por vitória de bloco (Apenas para RETA e CURVA)
    if (block === "RETA" || block === "CURVA") {
      if (totalTestSkill1 > totalTestSkill2) {
        console.log(`${character1.NOME} marcou um ponto!`);
        character1.PONTOS++;
      } else if (totalTestSkill2 > totalTestSkill1) {
        console.log(`${character2.NOME} marcou um ponto!`);
        character2.PONTOS++;
      } else {
        // CORREÇÃO: Tratamento estético explicitando o empate de habilidades na rodada
        console.log("Rodada empatada! Nenhum competidor pontuou.");
      }
    }

    console.log("----------------------------------");
  }
}

/**
 * Compara os placares finais acumulados e declara o campeão oficial.
 */
async function declareWinner(character1, character2) {
  console.log("\nResultado final: ");
  console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`);
  console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`);

  if (character1.PONTOS > character2.PONTOS) {
    console.log(`\n🏆 ${character1.NOME} venceu a corrida! Parabéns! 🎉`);
  } else if (character2.PONTOS > character1.PONTOS) {
    console.log(`\n🏆 ${character2.NOME} venceu a corrida! Parabéns! 🎉`);
  } else {
    console.log("\nA corrida terminou em empate na contagem de pontos! 🤝");
  }
}

/**
 * Função auto-executável responsável por startar o ciclo de vida da aplicação.
 */
(async function main() {
  console.log(
    `🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando... \n`
  );

  // Garante o reset das propriedades de pontuação em caso de múltiplas execuções locais
  player1.PONTOS = 0;
  player2.PONTOS = 0;

  await playRaceEngine(player1, player2);
  await declareWinner(player1, player2);
})();
