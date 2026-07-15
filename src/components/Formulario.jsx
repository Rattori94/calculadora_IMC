function Formulario({ altura, setAltura, peso, setPeso }) {
    return (
        <>
        <label>
            Altura
            <input
                type="number"
                name="altura"
                step="0.01"
                min="0"
                placeholder="(Ex: 1.75)"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
            />
        </label>

        <label>
            Peso
            <input
                type="number"
                name="peso"
                step="0.1"
                min="0"
                placeholder="(Ex: 70)"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
            />
            </label>
        </>
    );
}

export default Formulario;