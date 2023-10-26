import Footer from "../components/Footer";
import Header from "../components/Header";



export default function Marketplace() {

    const productList = [
        {
            name: 'Producto #1',
            description: 'Product Example',
            price: 3.23,
        },
        {
            name: 'Producto #2',
            description: 'Product Example 2',
            price: 3.23,
        },
        {
            name: 'Producto #3',
            description: 'Product Example 3',
            price: 3.23,
        }
    ];

    return (
        <>
            <Header />
            <main className="w-full h-full">
                <div className="py-5 px-5 max-w-full mx-auto bg-white min-w-0">
                    <div className="overflow-y-auto grid grid-cols-4 gap-2 h-custom">
                        {productList.map(element => (
                            <div className="py-1 px-1">
                                <div className="flex flex-col h-52 py-3 px-8 w-full max-w-sm bg-gray-200 border border-gray-200 rounded-lg shadow-md cursor-pointer" >
                                    <img className="py-3 h-[140px] object-contain" />
                                    <span className="flex justify-center text-gray-900 font-bold text-sm py-3">{element.name}</span>
                                    <span className="flex justify-center text-gray-900 font-bold text-xs py-3">{element.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}