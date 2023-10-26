import Header from "../components/Header";
import Footer from "../components/Footer";
import AreaChartsCard from "../components/AreaChartsCard";
import PieChartsCard from "../components/PieChartsCard";

export default function Dashboard() {

    const newClientsList = [
        {
            name: 'A'
        },
        {
            name: 'B'
        },
        {
            name: 'C'
        },
        {
            name: 'D'
        },
        {
            name: 'E'
        }
    ];


    return (
        <>
            <Header />
            <main>
                <div className="md:container mx-auto">
                    <div className="flex overflow-y-auto overflow-x-hidden justify-center items-center w-full md:inset-0 h-modal md:h-full">
                        <div className="relative p-8 w-full h-full">
                            <h1 className="text-gray-900 me-2 font-bold text-lg"> eCommerce Dashboard </h1>
                            <nav className="flex" aria-label="Breadcrumb">
                                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                    <li className="inline-flex items-center">
                                        <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                            <svg className="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                            </svg>
                                            Inicio
                                        </a>
                                    </li>
                                    <li>
                                        <div className="flex items-center">
                                            <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                            </svg>
                                            <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Dashboard</a>
                                        </div>
                                    </li>
                                </ol>
                            </nav>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="bg-gray-50 border border-gray-100 rounded-lg mt-5 p-4">
                                    <h1 className="text-lg text-gray-700 font-bold">Clientes visitados</h1>
                                    <AreaChartsCard />
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-lg mt-5 p-4">
                                    <h1 className="text-lg text-gray-700 font-bold">Productos vendidos</h1>
                                    <PieChartsCard />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="bg-gray-50 border border-gray-100 rounded-lg mt-5 p-4">
                                    <h1 className="text-lg text-gray-700 font-bold">
                                        1.836
                                    </h1>
                                    <span className="text-sm text-gray-500 font-bold">
                                        Pedidos hecho este mes
                                    </span>

                                    <div className="mt-5">
                                        <div className="flex flex-row justify-between">
                                            <span className="text-sm text-gray-400 font-bold">
                                                1048 para la Meta
                                            </span>
                                            <span className="text-sm text-gray-400 font-bold">55% Restante</span>
                                        </div>

                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div className="bg-blue-600 h-2.5 rounded-full w-[45%]" ></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-lg mt-5 p-4">
                                    <h1 className="text-lg text-gray-700 font-bold">
                                        6.300
                                    </h1>
                                    <span className="text-sm text-gray-400 font-bold">
                                        Nuevos clientes este mes
                                    </span>

                                    <div className="mt-5">
                                        <div className="flex flex-col">
                                            <span className="text-lg text-gray-700 font-bold">
                                                Sus últimos clientes
                                            </span>
                                            <div className="symbol-group flex-nowrap">
                                                {newClientsList.map(element => (
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <span className="symbol-label bg-warning text-inverse-warning fw-bold">
                                                            {element.name}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 border border-gray-100 rounded-lg mt-5 p-4">
                                <h1 className="text-lg text-gray-700 font-bold"> Productos recien pedidos </h1>
                                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                    <table className="w-full text-sm text-left text-gray-500 mt-5">
                                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                                            <tr>
                                                <th scope="col" className="p-4">
                                                    <div className="flex items-center">
                                                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                                    </div>
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Nombre
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Descripción
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Categoría
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Disponibilidad
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Precio
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bg-white border-b">
                                                <td className="w-4 p-4">
                                                    <div className="flex items-center">
                                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2" />
                                                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                                    </div>
                                                </td>
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                    Producto #1
                                                </th>
                                                <td className="px-6 py-4">
                                                    Descripción #1
                                                </td>
                                                <td className="px-6 py-4">
                                                    Categoría #1
                                                </td>
                                                <td className="px-6 py-4">
                                                    Disponibilidad #1
                                                </td>
                                                <td className="px-6 py-4">
                                                    Precio #1
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}