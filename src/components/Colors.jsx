import { useState } from "react";


function Colors() {
    const colors = [
        { id: 'deepblue', name: 'Azul Intenso', image: '/img/iphone-17-deepblue.webp', colorClass: 'bg-blue-950' },
        { id: 'silver', name: 'Prateado', image: '/img/iphone-17-silver.webp', colorClass: 'bg-gray-300' },
        { id: 'cosmicorange', name: 'Laranja Cósmico', image: '/img/iphone-17-cosmicorange.webp', colorClass: 'bg-orange-500' },
    ];

    const models = [
        { name: 'iPhone 17 Pro', screen: '6.3 polegadas', storage: '128GB, 256GB ou 512GB', battery: '29h de vídeo', weight: '199g', price: '11.499' },
        { name: 'iPhone 17 Pro Max', screen: '6.9 polegadas', storage: '256GB, 512GB ou 1TB', battery: '33h de vídeo', weight: '221g', price: '12.499' }
    ];

    const [selectedColor, setSelectedColor] = useState('silver')

    const selected = colors.find(color => color.id === selectedColor);

    return (
        <section className="bg-white py-24 px-8" id="cores">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl text-black font-bold mb-4">Escolha a sua cor</h2>
                    <p className="text-xl text-gray-600">Três acabamentos em titânio</p>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-10">
                    <div className="relative w-full lg:w-3/5 rounded-3xl">
                        <img src={selected.image} className="max-w-full max-h-[400px] object-contain transition-opacity duration-300"></img>
                    </div>

                    <div className="flex flex-col">
                        <p className="text-sm font-medium text-gray-500 uppercase mb-3">Escolha a sua cor favorita. <span className="items-center text-sm font-black text-black">{selected.name}</span></p>
                        <div className="flex items-center gap-3">
                            {colors.map(color => (
                                <button
                                    key={color.id}
                                    onClick={() => setSelectedColor(color.id)}
                                    aria-label={color.name}
                                    className="group relative p-1 cursor-pointer mb-3"
                                >
                                    <div
                                        className={`w-6 h-6 rounded-full border-1 shadow-sm transition-all duration-300 group-hover:scale-110
                                        ${color.colorClass}
                                        ${selectedColor === color.id ? 'border-black ring-2 ring-black' : 'border-gray-300'}`}
                                    >

                                    </div>
                                </button>
                            ))}
                        </div>

                        <div>
                            <p className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-3">
                                Escolha o modelo ideal
                            </p>

                            <div className="flex flex-col gap-3">
                                {models.map((model, index) => (
                                    <button
                                        key={index}
                                        className="flex flex-col gap-3 bg-gray-50 rounded-2xl px-5 py-4 border border-gray-200 hover:border-gray-400 hover:shadow-md transition-all duration-300 text-left cursor-pointer"
                                    >
                                        <div className="flex items-center gap-8 justify-between">
                                            <span className="text-black font-semibold">{model.name}</span>
                                            <span className="text-gray-600 text-sm">
                                                A partir de <span className="text-black font-medium">R$ {model.price.toLocaleString('pt-BR')}</span>
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm border-t border-gray-200 pt-3">
                                            <div className="flex flex-col justify-between">
                                                <span className="text-gray-500">Tela</span>
                                                <span className="font-medium text-black">{model.screen}</span>
                                            </div>

                                            <div className="flex flex-col justify-between">
                                                <span className="text-gray-500">Armazenamento</span>
                                                <span className="font-medium text-black">{model.storage}</span>
                                            </div>

                                            <div className="flex flex-col justify-between">
                                                <span className="text-gray-500">Bateria</span>
                                                <span className="font-medium text-black">{model.battery}</span>
                                            </div>

                                            <div className="flex flex-col justify-between">
                                                <span className="text-gray-500">Peso</span>
                                                <span className="font-medium text-black">{model.weight}</span>
                                            </div>

                                        </div>

                                    </button>
                                ))}
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Colors;