import { RiVipCrown2Line } from 'react-icons/ri';
import './Wishlist.scss';
const Wishlist = () => {
    return (
        <div className="tab-wishlist bg-[#f8f8f8] p-4 rounded-md shadow-sm">
            <div className="title inline-block">
                <h3 className="font-semibold">Sản phẩm yêu thích</h3>
                <span
                    className="line w-full text-center relative  mt-[-10px] 
                before:absolute before:top-1/2 before:-translate-y-1/2 before:w-full before:h-[1px] before:left-0 before:bg-primary"
                >
                    <RiVipCrown2Line className="text-primary text-2xl bg-[#f8f8f8] w-[50px] z-[1] relative left-1/2 -translate-x-1/2" />
                </span>
            </div>
        </div>
    );
};

export default Wishlist;
