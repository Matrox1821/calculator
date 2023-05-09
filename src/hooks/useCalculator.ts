import {useState} from "react";
import {complex, evaluate, isComplex} from "mathjs";

function verificarParentesis(cadena: string) {
  const pila = [];
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === "(") {
      pila.push("(");
    } else if (cadena[i] === ")") {
      if (pila.length === 0) {
        return false;
      }
      pila.pop();
    }
  }
  return pila.length === 0;
}
function agregarParentesis(cadena: string) {
  const pila = [];
  let nuevaCadena = "";
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === "(") {
      pila.push("(");
    } else if (cadena[i] === ")") {
      if (pila.length === 0) {
        nuevaCadena += "(";
      }
      pila.pop();
    }
    nuevaCadena += cadena[i];
  }
  while (pila.length > 0) {
    nuevaCadena += ")";
    pila.pop();
  }
  return nuevaCadena;
}

export const useCalculator = () => {
  const [input, setInput] = useState("0");
  const [calculation, setCalculation] = useState("");
  const [result, setResult] = useState("");
  const [newCalc, setNewCalc] = useState(false);
  const [ans, setAns] = useState("");

  const agregarDato = (value: string) => {
    if (newCalc) {
      setNewCalc(false), setInput(""), setResult(""), setCalculation("");
      setInput(value), setCalculation(value);
    } else {
      if (value === ".") {
        setInput(input + value);
        setCalculation(calculation + input + value);
        setResult("");
      } else {
        setInput(input === "0" ? value : input + value);
        setCalculation(calculation + value);
        setResult("");
      }
    }
  };

  const borrarDato = (value: string) => {
    if (value === "AC") {
      setInput("0");
      setCalculation("");
      setResult("");
      if (newCalc) setNewCalc(false);
    } else {
      setInput(input === "0" ? input : input.slice(0, -1));
      setCalculation(calculation.slice(0, -1));
    }
  };
  const operadores = (value: string) => {
    if (newCalc) {
      setNewCalc(false);
      setInput(value === "Ans" ? ans : "");
      setResult("");
      setCalculation(value === "Ans" ? `${ans}` : "");
      if (value === "√") {
        setInput(value + "(");
        setCalculation("sqrt(");
      }
    } else {
      switch (value) {
        case "*":
          setInput(input === "0" ? "x" : input + "x");
          setCalculation(calculation + value);
          break;

        case "Ans":
          setInput(input + ans);
          setCalculation(calculation + ans);
          break;

        case "EXP":
          setInput(input + "E");
          setCalculation(input + "*10^");
          break;

        case "√":
          setInput(input === "0" ? value + "(" : input + value + "(");
          setCalculation(calculation + "sqrt(");
          break;

        default:
          setInput(input === "0" ? value : input + value);
          setCalculation(calculation + value);
          break;
      }
    }
  };
  const calcularRes = () => {
    let a = 1;
    try {
      if (
        verificarParentesis(calculation) &&
        !isComplex(evaluate(calculation))
      ) {
        setResult(evaluate(calculation));
        setAns(`${evaluate(calculation)}`);
        setNewCalc(true);
      } else {
        setResult(evaluate(agregarParentesis(calculation)));
        setAns(`${evaluate(agregarParentesis(calculation))}`);
        setNewCalc(true);
      }
    } catch (error) {
      if (isComplex(evaluate(calculation))) {
        setResult("ERROR: Numero complejo");
      } else {
        setResult("Syntax ERROR");
      }
    }
  };
  return {
    input,
    calculation,
    result,
    agregarDato,
    borrarDato,
    operadores,
    calcularRes,
  };
};
