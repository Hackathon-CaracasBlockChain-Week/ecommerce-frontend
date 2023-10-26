import Header from "../components/Header";
import Footer from "../components/Footer";



export default function Currency() {

    const listCurrency = [
        {
            name: 'Bolivares',
            short: 'VES',
            price: 32,
            country: 'VENEZUELA',
            img: 'https://firebasestorage.googleapis.com/v0/b/ecommerce-ccs-blockchain.appspot.com/o/Venezuela_FLAG.png?alt=media&token=bc669147-2bae-4325-9232-9a06e6052a14'
        },
        {
            name: 'Pesos Colombianos',
            short: 'COP',
            price: 0.25,
            country: 'COLOMBIA',
            img: 'https://firebasestorage.googleapis.com/v0/b/ecommerce-ccs-blockchain.appspot.com/o/Flag_of_Colombia.svg?alt=media&token=3d44476b-765a-4438-8f15-86830f5d6c20'
        },
        {
            name: 'Pesos Argentinos',
            short: 'ARS',
            price: 1.25,
            country: 'ARGENTINA',
            img: 'https://firebasestorage.googleapis.com/v0/b/ecommerce-ccs-blockchain.appspot.com/o/Argentina_FLAG.png?alt=media&token=44b9d603-6808-4ed7-b672-0b82489e1e03'
        }
    ]

    return (
        <>
            <Header />
            <main className="w-full">
                <div className="md:container mx-auto">
                    <div className="flex overflow-y-auto overflow-x-hidden justify-center items-center w-full md:inset-0 h-modal md:h-full">
                        <div className="relative p-8 w-full h-full">
                            <h1 className="text-lg font-bold text-gray-700">Currency Cryptos</h1>
                            <div className="grid grid-cols-3 gap-3">
                                {listCurrency.map(element => (
                                    <div className="py-1 px-1">
                                        <div className="flex flex-col py-3 px-8 w-full max-w-sm bg-gray-200 border border-gray-200 rounded-lg shadow-md cursor-pointer">
                                            <div className="flex flex-row">
                                                <img src={element.img} alt={element.name} className="w-24 rounded-lg mr-3" />
                                                <div className="flex flex-col">
                                                    <span className="flex justify-center text-gray-700 font-bold text-sm">{element.name}</span>
                                                    <span className="flex justify-center text-gray-700 font-bold text-sm">{element.price} {element.short}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-5 flex justify-center">
                                <form className="w-1/2 py-3 px-8 bg-gray-300 border border-gray-300 rounded-lg shadow-md">
                                    <div className="mb-6">
                                        <div className="bg-gray-100 border-gray-100 rounded-lg">
                                            <div className="p-4">
                                                <input type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="0.0" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <div className="bg-gray-100 border-gray-100 rounded-lg">
                                            <div className="p-4">
                                                <input type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="0.0" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}