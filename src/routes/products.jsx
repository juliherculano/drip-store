import { products } from "../api/db";
import ProductCard from "../components/ProductCard";

export default function Products() {
    const productsList = products.map(item => <ProductCard key={item.id} productItem={item} />);
    return (
        <div className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8">
            <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                { productsList }
            </div>
        </div>
    );
}