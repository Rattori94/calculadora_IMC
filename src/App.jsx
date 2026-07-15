import { useState } from "react";
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";
import "./App.css";

const calcularIMC = (altura, peso) => {
  if (!altura || !peso) return "";
  return (peso / (altura * altura)).toFixed(2);
};

const classificarIMC = (imc) => {
  if (!imc) return "";
  if (imc < 18.5) return "Abaixo do peso";
  if (imc < 25) return "Peso normal";
  if (imc < 30) return "Sobrepeso";
  if (imc < 35) return "Obesidade Grau I";
  if (imc < 40) return "Obesidade Grau II";
  return "Obesidade Grau III";
};

function App() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");

  const imc = calcularIMC(Number(altura), Number(peso));

  return (
    <div className="container">
      <h1>Calculadora de IMC</h1>

      <Formulario
        altura={altura}
        setAltura={setAltura}
        peso={peso}
        setPeso={setPeso}
      />

      <Resultado
        imc={imc}
        classificacao={classificarIMC(Number(imc))}
      />
    </div>
  );
}

export default App;