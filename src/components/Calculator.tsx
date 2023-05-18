import React from "react";
import {Button} from "./Button";
import {useCalculator} from "../hooks/useCalculator";

export const Calculator = () => {
  const calc = useCalculator();
  return (
    <main className="calculator">
      <section className="display">
        <div className="input">
          <span>{calc.input}</span>
        </div>
        <div className="result">{calc.result}</div>
      </section>
      <section className="buttons-container">
        <div className="row-top">
          <Button onClick={calc.operadores} type="operator-top" label="^" />
          <Button onClick={calc.operadores} type="operator-top" label="√" />
          <Button onClick={calc.operadores} type="operator-top" label="(" />
          <Button onClick={calc.operadores} type="operator-top" label=")" />
          <Button onClick={calc.operadores} type="operator-top" label="%" />
          <Button onClick={calc.operadores} type="operator-top" label="!" />
        </div>
        <div className="row">
          <Button onClick={calc.agregarDato} label="7" />
          <Button onClick={calc.agregarDato} label="8" />
          <Button onClick={calc.agregarDato} label="9" />
          <Button
            onClick={calc.borrarDato}
            type="operator-del"
            label="deleteOne"
          />
          <Button onClick={calc.borrarDato} type="operator-del" label="AC" />
        </div>
        <div className="row">
          <Button onClick={calc.agregarDato} label="4" />
          <Button onClick={calc.agregarDato} label="5" />
          <Button onClick={calc.agregarDato} label="6" />
          <Button
            onClick={calc.operadores}
            type="operator"
            date="*"
            label="×"
          />
          <Button onClick={calc.operadores} type="operator" label="/" />
        </div>
        <div className="row">
          <Button onClick={calc.agregarDato} label="1" />
          <Button onClick={calc.agregarDato} label="2" />
          <Button onClick={calc.agregarDato} label="3" />
          <Button onClick={calc.operadores} type="operator" label="+" />
          <Button onClick={calc.operadores} type="operator" label="-" />
        </div>
        <div className="row">
          <Button onClick={calc.agregarDato} label="0" />
          <Button onClick={calc.agregarDato} label="." />
          <Button
            onClick={calc.operadores}
            type="operator-special"
            label="EXP"
          />
          <Button
            onClick={calc.operadores}
            type="operator-special"
            label="Ans"
          />
          <Button onClick={calc.calcularRes} type="operator" label="=" />
        </div>
      </section>
    </main>
  );
};
