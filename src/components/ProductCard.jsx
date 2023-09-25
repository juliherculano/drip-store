import DiscountBadge from "./DiscountBadge";

export default function ProductCard({ productItem }) {
    return (
        <div className="relative">
            <div className="relative h-72 w-full overflow-hidden rounded-lg">
                <img
                    src={productItem.image}
                    className="h-full w-full object-cover object-center"
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <a href="#">
                            <span aria-hidden="true" className="absolute inset-0" />
                            {productItem.name}
                        </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{productItem.color}</p>
                </div>
                <p className="text-3xl font-medium text-gray-900">$ {productItem.price}</p>
            </div>
            <DiscountBadge discount={productItem.discount} />
        </div>
    );
}