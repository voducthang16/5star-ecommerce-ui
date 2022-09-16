import { LogoIcon } from '~/components/Icons';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { AiOutlineSearch, AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai';
function Header() {
    return (
        <header>
            <div className="header">
                <div className="bg-slate-200">
                    <div className="max-w-screen-2xl 2xl:m-auto xl:max-w-screen-xl xl:m-auto grid grid-cols-8 gap-4 h-20">
                        <div className="col-span-2 flex items-center">
                            <LogoIcon />
                        </div>
                        <div className="col-span-4 flex items-center">
                            <div className="relative flex-1">
                                <input className="input input-form" type="text" placeholder="Type to search" />
                                <div className="absolute top-1/2 right-4 -translate-y-1/2 p-1 hover:bg-white hover:transition-all hover:rounded-full hover:cursor-pointer">
                                    <AiOutlineSearch className="text-2xl" />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 flex items-center">
                            <ul className="flex-1 flex justify-end space-x-8">
                                <li className="relative p-2 hover:bg-white hover:transition-all hover:rounded-full hover:cursor-pointer">
                                    <IoMdNotificationsOutline className="text-2xl" />
                                    <span
                                        style={{ fontSize: '10px' }}
                                        className="absolute -top-1 -right-1 bg-cyan-500 text-white h-4 w-4 block text-center rounded-full"
                                    >
                                        3
                                    </span>
                                </li>
                                <li className="p-2 hover:bg-white hover:transition-all hover:rounded-full hover:cursor-pointer">
                                    <AiOutlineUser className="text-2xl" />
                                </li>
                                <li className="relative p-2 hover:bg-white hover:transition-all hover:rounded-full hover:cursor-pointer">
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
            </div>
        </header>
    );
}

export default Header;
