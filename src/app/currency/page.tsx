import Header from "../components/Header";
import Footer from "../components/Footer";



export default function Currency() {
    return (
        <>
            <Header />
            <main className="w-full">
                <div className="md:container mx-auto">
                    <div className="flex overflow-y-auto overflow-x-hidden justify-center items-center w-full md:inset-0 h-modal md:h-full">
                        <div className="relative p-8 w-full h-full">
                            <h1 className="text-lg font-bold text-gray-700">Currency Cryptos</h1>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}