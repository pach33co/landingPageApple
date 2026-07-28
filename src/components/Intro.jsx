

function Intro() {

    const specs = [
        { valeu: '6.3"', label: 'Display Super Retina XDR', color: 'text-blue-600' },
        { valeu: 'A18 Pro', label: 'Chip mais rápido', color: 'text-orange-500' },
        { valeu: '48MP', label: 'Sistema de câmera', color: 'text-blue-600' },
        { valeu: '29h', label: 'Bateria', color: 'text-orange-500' }
    ];

    return (
        <section className="bg-black py-20 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-6xl md:text-8xl font-bold mb-4">iPhone 17 Pro</h1>
                <p className="text-2xl md:text-4xl mb-4 text-gradient font-semibold">Titânio. Tão forte. Tão leve. Tão Pro.</p>
                <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">O design mais refinado que já criamos. Titânio de grau aeroespacial.<br />Chip A18 Pro. Sistema de câmera Pro revolucionário.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
                <button className="bg-blue-600 hover:bg-blue-900 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 shadow-lg cursor-pointer">Compre agora</button>
                <button className="border-2 border-white rounded-full hover:bg-white hover:text-black text-white px-8 py-3 text-lg font-medium transition-all duration-300 cursor-pointer">Saiba mais</button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mx-auto max-w-5xl">
                {specs.map( (spec, index) => (
                    <div key={index} className="bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-all duration-300 cursor-pointer">
                        <p className={`text-3xl font-bold ${spec.color}`}>{spec.valeu}</p>
                        <p>{spec.label}</p>
                    </div>
                ))}
            </div>
        
        </section>
    )
}

export default Intro;