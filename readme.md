<h1>Desafio de projeto do Felipão: Mario Kart.JS</h1>

<table>
    <tr>
        <td>
            <img src="./docs/header.gif" alt="Mario Kart" width="200">
        </td>
        <td>
            <b>Objetivo:</b>
            <p>Mario Kart é uma série de jogos de corrida desenvolvida e publicada pela Nintendo. Nosso desafio será criar uma lógica de um jogo de vídeo game para simular corridas de Mario Kart, levando em consideração as regras e mecânicas abaixo.</p>
        </td>
    </tr>
</table>

<h2>Players</h2>
<table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
    <tr>
        <td style="border: 1px solid black; text-align: center; width: 130px; background-color: #f9f9f9;">
            <p><b>Mario</b></p>
            <img src="./docs/mario.gif" alt="Mario" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: left; padding-left: 15px;">
            <p>⚡ <b>Velocidade:</b> 4</p>
            <p>🎯 <b>Manobrabilidade:</b> 3</p>
            <p>🥊 <b>Poder:</b> 3</p>
        </td>
        <td style="border: 1px solid black; text-align: center; width: 130px; background-color: #f9f9f9;">
            <p><b>Peach</b></p>
            <img src="./docs/peach.gif" alt="Peach" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: left; padding-left: 15px;">
            <p>⚡ <b>Velocidade:</b> 3</p>
            <p>🎯 <b>Manobrabilidade:</b> 4</p>
            <p>🥊 <b>Poder:</b> 2</p>
        </td>
        <td style="border: 1px solid black; text-align: center; width: 130px; background-color: #f9f9f9;">
            <p><b>Yoshi</b></p>
            <img src="./docs/yoshi.gif" alt="Yoshi" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: left; padding-left: 15px;">
            <p>⚡ <b>Velocidade:</b> 2</p>
            <p>🎯 <b>Manobrabilidade:</b> 4</p>
            <p>🥊 <b>Poder:</b> 3</p>
        </td>
    </tr>
    <tr>
        <td style="border: 1px solid black; text-align: center; width: 130px; background-color: #f9f9f9;">
            <p><b>Bowser</b></p>
            <img src="./docs/bowser.gif" alt="Bowser" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: left; padding-left: 15px;">
            <p>⚡ <b>Velocidade:</b> 5</p>
            <p>🎯 <b>Manobrabilidade:</b> 2</p>
            <p>🥊 <b>Poder:</b> 5</p>
        </td>
        <td style="border: 1px solid black; text-align: center; width: 130px; background-color: #f9f9f9;">
            <p><b>Luigi</b></p>
            <img src="./docs/luigi.gif" alt="Luigi" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: left; padding-left: 15px;">
            <p>⚡ <b>Velocidade:</b> 3</p>
            <p>🎯 <b>Manobrabilidade:</b> 4</p>
            <p>🥊 <b>Poder:</b> 4</p>
        </td>
        <td style="border: 1px solid black; text-align: center; width: 130px; background-color: #f9f9f9;">
            <p><b>Donkey Kong</b></p>
            <img src="./docs/dk.gif" alt="Donkey Kong" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: left; padding-left: 15px;">
            <p>⚡ <b>Velocidade:</b> 2</p>
            <p>🎯 <b>Manobrabilidade:</b> 2</p>
            <p>🥊 <b>Poder:</b> 5</p>
        </td>
    </tr>
</table>

<br>

<h3>🕹️ Regras & mecânicas concluídas:</h3>

<b>Jogadores:</b>

- [x] O Computador deve receber dois personagens para disputar a corrida em um objeto cada.

<b>Pistas:</b>

- [x] Os personagens irão correr em uma pista aleatória de 5 rodadas.
- [x] A cada rodada, será sorteado um bloco da pista que pode ser uma reta, curva ou confronto.
  - [x] Caso o bloco da pista seja uma **RETA**, o jogador deve jogar um dado de 6 lados e somar o atributo VELOCIDADE, quem vencer ganha um ponto.
  - [x] Caso o bloco da pista seja uma **CURVA**, o jogador deve jogar um dado de 6 lados e somar o atributo MANOBRABILIDADE, quem vencer ganha um ponto.
  - [x] Caso o bloco da pista seja um **CONFRONTO**, o jogador deve jogar um dado de 6 lados e somar o atributo PODER, quem perder, perde um ponto.
  - [x] Nenhum jogador pode ter pontuação negativa (valores abaixo de 0).

<b>Condição de vitória:</b>

- [x] Ao final, vence quem acumulou mais pontos.

---

### 🚀 Como executar o projeto localmente:

1. Certifique-se de ter o **Node.js** instalado na sua máquina.
2. Abra o terminal na raiz do projeto e execute:
```bash
node src/index.js
```
