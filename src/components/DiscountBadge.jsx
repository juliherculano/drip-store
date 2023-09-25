export default function DiscountBadge({discount}){
    if (discount === 0) {
        return null;
    }
    return (
        <div className="absolute inset-x-0 top-0 flex h-72 items-start justify-start overflow-hidden rounded-lg p-4">
            <span className="inline-flex items-center rounded-full bg-yellow-200 px-2 py-1 text-lg font-bold text-gray-900">
                {discount}% OFF
            </span>
        </div>
    );
}