function Formulario({ altura, setAltura, peso, setPeso }) {
    return (
        <>
            <input
                type="number"
                placeholder="Altura (Ex: 1.75)"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
            />

            <input
                type="number"
                placeholder="Peso (Ex: 70)"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
            />
        </>
    );
}

export default Formulario;