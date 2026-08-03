

function NavBar() {
    return (
        <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
            <div className="flex items-center justify-between px-6 py-4 w-full max-w-7xl mx-auto">

                <div className="-m-1.5 p-1.5">
                    <img className="h-8 w-auto" src="../src/assets/LogoAppleNavBar.svg" />
                </div>

                <div className="flex-1 flex items-center justify-center gap-8">
                    <a href="#design" className="hover:text-gray-300">Design</a>
                    <a href="#cameras" className="hover:text-gray-300">Câmeras</a>
                    <a href="#cores" className="hover:text-gray-300">Cores</a>
                    <a href="#acessorios" className="hover:text-gray-300">Acessórios</a>
                </div>

                <div>
                    <button className="bg-blue-700 hover:bg-blue-900 px-6 py-1.5 rounded-full cursor-pointer">Comprar</button>
                </div>

            </div>
        </nav>
    )
}

export default NavBar;