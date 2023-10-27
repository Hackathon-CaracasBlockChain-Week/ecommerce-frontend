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
                    <div className="grid grid-cols-4 gap-2 h-screen">
                        {productList.map(element => (
                            <div className="py-1 px-1">
                                <div className="flex flex-col py-3 px-8 w-full max-w-sm bg-gray-200 border border-gray-200 rounded-lg shadow-md cursor-pointer" >
                                    <img className="py-3 h-[200px] object-contain" src="https://firebasestorage.googleapis.com/v0/b/ecommerce-ccs-blockchain.appspot.com/o/product-review.png?alt=media&token=e97ba839-fcbe-4b82-8d99-9ef441adff4a" />
                                    <span className="flex justify-center text-gray-900 font-bold text-sm py-3">{element.name}</span>
                                    <span className="flex justify-center text-gray-900 font-bold text-xs py-3">{element.description}</span>
                                    <span className="flex justify-center text-gray-900 font-bold text-xs py-3">{element.price} USDT</span>
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