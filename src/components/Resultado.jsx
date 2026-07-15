function Resultado({ imc, classificacao }) {
    if (!imc) {
        return null;
    }

    return (
        <div className="resultado">
            <h2>Seu IMC é:</h2>

            <span>{imc}</span>

            <p>{classificacao}</p>
        </div>
    );
}

export default Resultado;