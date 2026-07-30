

function Highlights() {
    return (
        <section className="relative bg-black py-20 px-6 overflow-hidden" id="design">

            <div className="absolute top-20 left-10 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">

                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4">Design revolucionário</h2>
                    <p className="text-xl text-gray-300">Cada detalhe foi pensado para criar a melhor experiência.</p>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-16">

                    <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-4 border border-white/10 shadow-2xl hover:bg-white/10 transition-colors duration-300">
                        <img className="w-full rounded-2xl mb-4" src="/img/iphoneTitanio.jpg" alt="iphone-titanio" />
                        <h3 className="font-bold mb-2 text-3xl">Titânio Premium</h3>
                        <p className="text-gray-300">Estrutura em titânio de grau aeroespacial.<br />O smartphone mais forte e leve.</p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-4 border border-white/10 shadow-2xl hover:bg-white/10 transition-colors duration-300">
                        <img className="w-full rounded-2xl mb-4" src="/img/iphoneDesign.jpg" alt="iphone-design" />
                        <h3 className="font-bold mb-2 text-3xl">iOS 26</h3>
                        <p className="text-gray-300">O sistema operacional mais avançado do mundo com IA integrada.</p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-4 border border-white/10 shadow-2xl hover:bg-white/10 transition-colors duration-300">
                        <img className="w-full rounded-2xl mb-4" src="/img/iphoneIA.jpg" alt="iphone-ia" />
                        <h3 className="font-bold mb-2 text-3xl bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 bg-clip-text text-transparent">
                            Apple Intelligence
                        </h3>
                        <p className="text-gray-300">Recursos simples e úteis, da criação de imagens à Tradução ao Vivo.</p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-4 border border-white/10 shadow-2xl hover:bg-white/10 transition-colors duration-300">
                        <img className="w-full rounded-2xl mb-4" src="/img/iphoneChip.jpg" alt="iphone-chip" />
                        <h3 className="font-bold mb-2 text-3xl">A19 Pro</h3>
                        <p className="text-gray-300">Resfriamento por evaporação para alto desempenho. Duração de bateria avançada.</p>
                    </div>

                </div>

                <div className="text-center" id="cameras" >
                    <h3 className="text-5xl font-bold mb-10">Sistema de câmera<br />Pro Avançado</h3>

                    <div className="grid grid-cols-3 gap-6">
                        <div className="bg-gray-900 rounded-2xl p-8 hover:bg-gray-800 transition-all duration-300 cursor-pointer">
                            <div className="text-4xl font-bold text-blue-600 mb-2">48MP</div>
                            <h4 className="text-xl font-semibold mb-2">Principal</h4>
                            <p className="text-gray-400">Sensor quad-pixel com foco automático</p>
                        </div>

                        <div className="bg-gray-900 rounded-2xl p-8 hover:bg-gray-800 transition-all duration-300 cursor-pointer">
                            <div className="text-4xl font-bold text-orange-600 mb-2">12MP</div>
                            <h4 className="text-xl font-semibold mb-2">Ultra Wide</h4>
                            <p className="text-gray-400">Campo de visão de 120º com modo noturno</p>
                        </div>

                        <div className="bg-gray-900 rounded-2xl p-8 hover:bg-gray-800 transition-all duration-300 cursor-pointer">
                            <div className="text-4xl font-bold text-blue-600 mb-2">12MP</div>
                            <h4 className="text-xl font-semibold mb-2">Telefoto 5x</h4>
                            <p className="text-gray-400">Zoom óptico de 5x com estabilização</p>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Highlights;