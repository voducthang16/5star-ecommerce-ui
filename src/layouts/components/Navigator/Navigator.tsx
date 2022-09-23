import { AiOutlineUser, AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';

function Navigator() {
    return (
        <div className="lg:hidden fixed z-10 left-0 right-0 bottom-0 bg-white border-t border-slate-200 shadow">
            <div className="container">
                <div className="h-20 flex items-center justify-around">
                    <div className="flex flex-col items-center justify-around">
                        <div className="icon-header-wrapper">
                            <AiOutlineHeart className="text-2xl" />
                            <span
                                className="absolute -top-1 -right-1 bg-cyan-500 text-white h-4 w-4 
                            block text-center rounded-full text-[10px]"
                            >
                                5
                            </span>
                        </div>
                        <h6 className="text-sm font-normal text-gray-500">Wishlist</h6>
                    </div>
                    <div className="h-20 w-px bg-slate-300"></div>
                    <div className="flex flex-col items-center justify-around">
                        <div className="icon-header-wrapper">
                            <AiOutlineShoppingCart className="text-2xl" />
                            <span
                                className="absolute -top-1 -right-1 bg-cyan-500 text-white h-4 w-4 
                            block text-center rounded-full text-[10px]"
                            >
                                5
                            </span>
                        </div>
                        <h6 className="text-sm font-normal text-gray-500">250.000.000</h6>
                    </div>
                    <div className="h-20 w-px bg-slate-300"></div>
                    <div className="flex flex-col items-center justify-around">
                        <div className="icon-header-wrapper">
                            <AiOutlineUser className="text-2xl" />
                        </div>
                        <h6 className="text-sm font-normal text-gray-500">User</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navigator;
