

function Hero() {
    return (
        <section className="relative h-screen overflow-hidden bg-black">

            <div className="absolute top-16 bottom-0 right-0 left-0 z-0">
                <img className="w-full h-full object-cover opacity-90" src="/img/heroImage.jpg" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80"></div>
            </div>

            <div className="absolute bottom-8 left-1/2 z-10 animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                </svg>

            </div>

        </section>
    )
}

export default Hero;