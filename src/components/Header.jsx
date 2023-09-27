import { Link } from "react-router-dom"; 
import {
    MagnifyingGlassIcon,
    UserIcon,
    ShoppingBagIcon,
} from '@heroicons/react/24/outline'
import logo from '../assets/images/logo.png'
import Menu from "./Menu";

export default function Header() {
    return (
        <header className="relative z-10 mx-auto max-w-7xl">
            <nav aria-label="Top">
                <div className="bg-white bg-opacity-10 backdrop-blur-md backdrop-filter">
                    {/* Top navigation */}
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div>
                            <div className="flex h-28 items-center justify-between">
                                {/* Logo (lg+) */}
                                <div className="hidden md:flex md:flex-1 md:items-center">
                                    <Link to="/" className='flex flex-row space-x-3'>
                                        <img className="h-10 w-auto" src={logo} alt="" />
                                        <span className="text-4xl font-semibold text-pink-700">Drip Store</span>
                                    </Link>
                                </div>
                                <div className="flex flex-1 items-center justify-center px-2 sm:inset-0">
                                    <div className="w-full sm:max-w-xs">
                                        <label htmlFor="search" className="sr-only">Search</label>
                                        <div className="relative">
                                            <input id="search" name="search" className="block w-full rounded-md border border-gray-200 drop-shadow bg-gray-200 py-1.5 pl-10 pr-3 text-gray-300 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 focus:placeholder:text-gray-500 sm:text-sm sm:leading-6" placeholder="Search" type="search" />
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <MagnifyingGlassIcon className="h-5 w-5 text-pink-700" aria-hidden="true" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-1 items-center justify-end">
                                    <a href="#" className="hidden text-md font-normal text-pink-700 lg:block">Sign in</a>

                                    <div className="flex items-center lg:ml-8">
                                        <a href="#" className="p-2 text-pink-700 lg:hidden">
                                            <span className="sr-only">Sign in</span>
                                            <UserIcon className="h-6 w-6 text-pink-700" aria-hidden="true" />
                                        </a>
                                        <a href="#" className="hidden text-md font-normal text-pink-700 lg:block">Create an account</a>

                                        {/* Cart */}
                                        <div className="ml-4 flow-root lg:ml-8">
                                            <a href="#" className="group -m-2 flex items-center p-2">
                                                <ShoppingBagIcon className="h-6 w-6 flex-shrink-0 text-pink-700" aria-hidden="true" />
                                                <span className="ml-2 text-md font-medium text-pink-700">0</span>
                                                <span className="sr-only">items in cart, view bag</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Menu />
                </div>
            </nav>
        </header>
    );
}