import MenuItem from "./ManuItem";

const menus = [
    { name: "Home", link: "/" },
    { name: "Products", link: "/products" },
    { name: "Categories", link: "/categories" },
    { name: "Orders", link: "/orders" },
];

export default function Menu() {
    return (
        <div className="py-4 space-x-4">
            {menus.map((menu, index) => (
                <MenuItem key={index} name={menu.name} link={menu.link} />
            ))}
        </div>
    );
}
