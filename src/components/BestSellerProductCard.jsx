export default function BestSellerProductCard({ productItem }) {
    const discountBadge = productItem.discount > 0 ? (
        <div className="absolute inset-x-0 top-0 flex h-72 items-start justify-start overflow-hidden rounded-lg p-4">
            <span className="inline-flex items-center rounded-full bg-yellow-200 px-2 py-1 text-lg font-bold text-gray-900">
                {productItem.discount}% OFF
            </span>
        </div>
    ) : null;
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
            {discountBadge}
        </div>
    );
}