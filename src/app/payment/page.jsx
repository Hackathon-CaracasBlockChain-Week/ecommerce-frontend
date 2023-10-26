import Header from "../components/Header"

export default function PaymentLandingPage() {
    return (
        <>
            <Header />
            <main className="h-screen w-full bg-gray-lighter p-5">
                <div className="flex items-start justify-around">
                    <div className="w-full h-1/2 max-w-sm p-4 bg-[#f6f7f9]">
                        <h3 className="mb-3 text-base font-semibold text-gray-900 md:text-xl">
                            ¿Cómo quieres pagar?
                        </h3>
                        <ul className="my-3 space-y-3">
                            <li className="">
                                <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                    Metamask
                                </a>
                            </li>
                        </ul>
                        <div className="flex flex-wrap">
                            <p>Total a pagar:</p>
                            <p>55$</p>
                        </div>
                    </div>
                    <aside className="max-w-md w-96 bg-[#f6f7f9] p-14">
                        <div className="container justify-center items-center">
                            <img className="h-36" src="https://firebasestorage.googleapis.com/v0/b/ecommerce-ccs-blockchain.appspot.com/o/product-review.png?alt=media&token=e97ba839-fcbe-4b82-8d99-9ef441adff4a" alt="" />
                            <h1>Título de Producto</h1>
                            <p>Pedrito, el vendedor</p>
                        </div>
                        <div>
                            <div className="mb-16"></div>
                            <p classNAme="flex py-16 border-t border-b border-solid font-link border-gray-main items-center" data-testid="product-total-resume">
                                <span>Total</span>
                                <span class="flex ml-auto">
                                    <span class="text-base-main">S/ 44,99</span>
                                    <span class="ml-4 line-through text-gray-dark">S/ 56</span>
                                </span>
                            </p>
                        </div>
                    </aside>
                </div>
            </main>
        </>
    )
}