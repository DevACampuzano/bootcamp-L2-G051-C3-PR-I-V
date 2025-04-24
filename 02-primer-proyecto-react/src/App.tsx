/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import InpuntNumber from "./compontentes/InpuntNumber";
import "./App.css";

/**
 * formulario de registro de usuario
 * login
 * formulario de agendar citas
 * formulario de registro de mascotas
 *
 *
 * lista de citas pendiente
 * vista historial de citas
 * vista de mascotas
 * vista de mascotas por dueño
 *
 */
const App = () => {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [op, setOp] = useState("+");
  const [message, setMessage] = useState("");

  const onSumit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const resultado = Operaciones(op, numero1, numero2);
      setMessage("El resultado de la operacion es: " + resultado);
    } catch (error: any) {
      alert(error.message);
    } finally {
      setNumero1(0);
      setNumero2(0);
      setOp("+");
    }
  };

  const Operaciones = (op = "+", numero1: number, numero2: number) => {
    switch (op) {
      case "+":
        return numero1 + numero2;
      case "-":
        return numero1 - numero2;
      case "*":
        return numero1 * numero2;
      case "/":
        if (numero2 === 0) {
          throw new Error("El numero 2 no puede ser un 0");
        }
        return numero1 / numero2;
    }
  };

  const onChangeNumero1 = (value: number) => setNumero1(value);
  const onChangeNumero2 = (value: number) => setNumero2(value);

  return (
    <div>
      <form className="d-flex gap-4" onSubmit={onSumit}>
        <InpuntNumber
          id="numero-1"
          label="Numero 1"
          value={numero1}
          onChange={onChangeNumero1}
        />
        <div className="mb-3 d-flex gap-2 flex-column ustify-content-center align-items-center">
          <label htmlFor="operacion" className="form-label">
            Operacion
          </label>
          <select
            name="operacion"
            id="operacion"
            className="form-select"
            value={op}
            onChange={(e) => {
              setOp(e.target.value);
            }}
          >
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
        </div>
        <InpuntNumber
          id="numero-2"
          label="Numero 2"
          value={numero2}
          onChange={onChangeNumero2}
        />
        <button className="btn btn-primary " type="submit">
          Calcular
        </button>
      </form>
      <p
        style={{
          fontSize: "2vw",
          fontWeight: 700,
        }}
      >
        {message}
      </p>
    </div>
  );
};

export default App;
