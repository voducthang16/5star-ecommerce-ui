import { useState, useEffect } from 'react';
import { LogoIcon } from '~/components/Icons';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { IoReorderThreeSharp } from 'react-icons/io5';
import { AiOutlineSearch, AiOutlineUser, AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
function Header() {
    const [statusNavbar, setStatusNavbar] = useState(true);
    const handleScroll = () => {
        document.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            header!.classList.toggle('sticky', window.scrollY > 200);

            if (document.querySelector('.home')) {
                const home = document.querySelector('.home');
                home!.classList.toggle('sticky-mt', window.scrollY > 200);
            }
        });
    };
    useEffect(() => {
        handleScroll();
    }, []);

    const handleShowNavbar = () => {
        const navbar = document.querySelector('.navbar');
        navbar!.classList.toggle('show-navbar');
    };
    return (
        <header>
            <div className="header-wrapper">
                <div className="header bg-white border-b border-slate-200 shadow max-h-36">
                    <div className="max-w-screen-2xl 2xl:m-auto xl:max-w-screen-xl xl:m-auto h-20">
                        <div className="grid grid-cols-8 gap-4 h-20">
                            <div className="col-span-2 flex items-center">
                                <LogoIcon />
                            </div>
                            <div className="col-span-4 flex items-center">
                                <div className="relative flex-1">
                                    <input
                                        className="input-search input-form"
                                        type="text"
                                        placeholder="Type to search"
                                    />
                                    <div className="absolute top-1/2 right-4 -translate-y-1/2 p-1 hover:bg-slate-100 hover:transition-all hover:rounded-full hover:cursor-pointer">
                                        <AiOutlineSearch className="text-2xl" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-2 flex items-center">
                                <ul className="flex-1 flex justify-end space-x-6">
                                    <li
                                        onClick={handleShowNavbar}
                                        className="p-2 hover:bg-slate-100 hover:transition-all hover:rounded-full hover:cursor-pointer"
                                    >
                                        <IoReorderThreeSharp className="text-2xl" />
                                    </li>
                                    <li className="relative p-2 hover:bg-slate-100 hover:transition-all hover:rounded-full hover:cursor-pointer">
                                        <AiOutlineHeart className="text-2xl" />
                                        <span
                                            className="absolute -top-1 -right-1 bg-cyan-500 text-white h-4 w-4 
                                        block text-center rounded-full text-[10px]"
                                        >
                                            5
                                        </span>
                                    </li>
                                    <li className="relative p-2 hover:bg-slate-100 hover:transition-all hover:rounded-full hover:cursor-pointer">
                                        <IoMdNotificationsOutline className="text-2xl" />
                                        <span
                                            className="absolute top-0 right-0 bg-cyan-500 text-white h-4 w-4 
                                        block text-center rounded-full text-[10px]"
                                        >
                                            3
                                        </span>
                                    </li>
                                    <li className="p-2 hover:bg-slate-100 hover:transition-all hover:rounded-full hover:cursor-pointer">
                                        <AiOutlineUser className="text-2xl" />
                                    </li>
                                    <li className="relative p-2 hover:bg-slate-100 hover:transition-all hover:rounded-full hover:cursor-pointer">
                                        <AiOutlineShoppingCart className="text-2xl" />
                                        <span
                                            style={{ fontSize: '10px' }}
                                            className="absolute -top-1 -right-1 bg-cyan-500 text-white h-4 w-4 block text-center rounded-full"
                                        >
                                            5
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="navbar show-navbar max-w-screen-2xl 2xl:m-auto xl:max-w-screen-xl xl:m-auto h-16">
                        <div className="grid grid-cols-8 gap-4 h-16">
                            <div className="col-span-2 flex items-center">
                                <h4 className="text-xs">Departments</h4>
                            </div>
                            <div className="col-span-4 flex items-center">
                                <ul className="flex text-base space-x-8">
                                    <li>
                                        <a className="hover:text-pink-800 transition-all" href="/">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a className="hover:text-pink-800 transition-all" href="/">
                                            About
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
