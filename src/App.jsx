//link complementar sobre o ternario: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_operator

//* O que é useeffect?
// O useEffect é um dos hooks fornecidos pelo React que
// atua no ciclo de vida da sua página, nos ajudando a
// gerenciar ações em componentes de função.
// Ele entra em ação quando algo muda(atualiza) na sua
// página, como quando ela é carregada pela primeira
// vez, quando o usuário clica para fechar a sua página
// ou quando um usuário clica em um botão. Seja para
// mudar a cor de fundo, fazer um cálculo ou qualquer
// outra tarefa que utilize lógica de programação, o
// useEffect() estará vigiando cada mudança que houver
// na página e ele irá reagir a essas mudanças.

import React, { useEffect, useState } from "react";

export default function App() {
  //Explicação de como useEffect funciona
  const [count, setCount] = useState(0);

  //useEffect com o seu array de dependecia ele observa apenas o count
  useEffect(() => {
    console.log("bom dia");
  }, [count]);

  //useEffect observando Count e mudando as cores da body
  useEffect(() => {
    if (count === 1) {
      document.body.style.backgroundColor = "red";
    }
    if (count === 2) {
      document.body.style.backgroundColor = "green";
    }
    if (count === 3) {
      document.body.style.backgroundColor = "pink";
    }
  }, [count]);

  //Criando um dark mode
  // Mudança de estados do dark mode
  const [mode, setMode] = useState("White");

  //Dark ou White
  function dark() {
    setMode("Dark");
  }

  function white() {
    setMode("white");
  }

  //useEffect verifica a mudança do mode e muda as cores
  useEffect(() => {
    if (mode === "Dark") {
      document.body.style.backgroundColor = "#333";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#333";
    }
  }, [mode]);
  //observe mode

  return (
    <div>
      <h1>UseEffect</h1>

      <h2>{count}</h2>
      <button onClick={() => setCount((count) => count + 1)}>+</button>

      <h2>{mode}</h2>
      <button
        onClick={() => {
          if (mode == "Dark") {
            white();
          } else {
            dark();
          }
          // Operador ternario
          // mode === "Dark" ? white() : dark();
        }}>
        mode
      </button>
    </div>
  );
}