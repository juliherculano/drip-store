import { NavLink } from "react-router-dom";

export default function MenuItem({ name, link }) {
    function active(isActive) {
        if (isActive) {
            return 'inline-flex items-center border-b-2 border-pink-700 px-1 pt-1 text-xl font-normal text-gray-900';
        }
        return 'inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-xl font-normal text-gray-500 hover:border-gray-300 hover:text-gray-700';
    }
    return (
        <NavLink to={link} className={({ isActive }) => active(isActive) }>{name}</NavLink>
    );
}