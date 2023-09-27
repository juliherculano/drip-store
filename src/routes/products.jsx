import { products } from "../api/db";
import ProductCard from "../components/ProductCard";


export default function Products() {
    const productsListItems = products.map(item => <ProductCard key={item.id} productItem={item} />);
    return (
        <>
            <main className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="border-b border-gray-200 pb-10">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>
                    <p className="mt-4 text-base text-gray-500">
                        Checkout out the latest release of products!
                    </p>
                </div>

                <div className="pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-3">
                    <aside>
                        <h2 className="sr-only">Filters</h2>
                        <div className="hidden lg:block">
                            <form className="space-y-10 divide-y divide-gray-200">
                                <div className='pt-10'>
                                    <fieldset>
                                        <legend className="block text-sm font-medium text-gray-900">Color</legend>
                                        <div className="space-y-3 pt-6">
                                            <div className="flex items-center">
                                                <input
                                                    id='color-white'
                                                    onChange={() => {}}
                                                    value='white'
                                                    type="checkbox"
                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                />
                                                <label htmlFor='color-white' className="ml-3 text-sm text-gray-600">
                                                    White
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                            </form>
                        </div>
                    </aside>

                    {/* Product grid */}
                    <div className="col-span-2 mt-16">
                        <div className="grid grid-cols-3 gap-8">
                            {productsListItems}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}