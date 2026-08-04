import { useState } from "react";


function NavBar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const linksNavBar = [
        { href: '#design', label: 'Design' },
        { href: '#cameras', label: 'Câmeras' },
        { href: '#cores', label: 'Cores' },
        { href: '#acessorios', label: 'Acessórios' },
    ];

    return (
        <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
            <div className="flex items-center justify-between px-6 py-4 w-full max-w-7xl mx-auto">

                <div className="-m-1.5 p-1.5">
                    <img className="h-8 w-auto" src="../src/assets/LogoAppleNavBar.svg" />
                </div>

                <div className="hidden md:flex flex-1 itens-center justify-center gap-8">
                    {linksNavBar.map(link => (
                        <a key={link.href} href={link.href} className="hover:text-gray-300 transition-colors duration-200">
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="hidden md:block">
                    <button className="bg-blue-700 hover:bg-blue-900 px-6 py-1.5 rounded-full cursor-pointer">Comprar</button>
                </div>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden p-2 cursor-pointer"
                    aria-label="Abrir menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                        {menuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
                        )}
                    </svg>
                </button>

            </div>

            {menuOpen && (
                <div className="md:hidden flex flex-col items-center gap-6 px-6 py-8">
                    {linksNavBar.map(link => (
                        <a key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="hover:text-gray-300 transition-colors duration-200">
                            {link.label}
                        </ a>
                    ))}
                    <button className="bg-blue-700 hover:bg-blue-900 px-6 py-1.5 rounded-full cursor-pointer w-full transition-colors duration-200">
                        Comprar
                    </button>
                </div>
            )}

        </nav>
    )
}

export default NavBar;