

function Accessories() {
    const itens = [
        { image: '/img/case_techwoven.jpg', title: 'Capa TechWoven', text: 'Produzida utilizando um tecido técnico exclusivo em fios coloridos e com laterais revestidas e texturizadas para um melhor manuseio. Disponível em cinco cores.' },
        { image: '/img/strap.jpg', title: 'Alça Transversal', text: 'Leve seu iPhone para todo lugar e deixe suas mãos livres. Ímãs flexíveis embutidos com mecanismos deslizantes de aço inoxidável facilitam o ajuste na medida certa.' },
        { image: '/img/case_silicone.jpg', title: 'Capa de silicone', text: 'Vem em seis cores vibrantes para você escolher. E, agora, tem dois pontos para prender com segurança a nova Alça Transversal.' }
    ];

    return (
        <section className="bg-black py-20 px-6" id="acessorios">
            <div className="max-w-7xl mx-auto relative z-10">

                <div className="max-w-5xl mx-auto text-center mb-16 mt-10">
                    <h2 className="text-5xl md:text-6xl text-white font-bold mb-4">Até no estilo é profissional</h2>
                    <a href="https://www.apple.com/br/shop/iphone/accessories" target="_blank" rel="noopener noreferrer" className="text-xl text-blue-700 hover:text-blue-900 hover:underline cursor-pointer">
                        Comprar acessórios para iPhone
                    </a>
                </div>

                <div className="grid grid-cols-3 gap-8 mb-16">
                    {itens.map((item, index) => (
                        <div key={index}
                            className="gap-8 mb-8"
                        >
                            <img className="w-full rounded-2xl mb-4" src={item.image}></img>
                            <h3 className="font-bold mb-2 text-2xl">{item.title}</h3>
                            <p className="text-gray-300">{item.text}</p>
                        </ div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Accessories;