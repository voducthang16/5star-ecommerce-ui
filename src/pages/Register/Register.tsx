import { FaEnvelope, FaLock, FaUserPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const initForm = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
};

function Register() {
    const Navigate = useNavigate();

    return (
        <div className="flex justify-center font-plusJakartaSans">
            <div className="hidden md:inline-block w-full max-h-screen bg-[#0e366d] md:flex justify-center items-center">
                <div className="md:px-[32px]">
                    <img
                        className="w-[448px] rounded-[5px] md:w-full"
                        src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/2022/06/image-2-scaled.jpg"
                        alt=""
                    />
                </div>
            </div>
            <div className="bg-[#2f65b9] md:bg-transparent md:w-full md:h-full h-screen">
                <div className="md:py-[32px] md:px-[16px] px-[14px] py-[28px] h-screen flex items-center">
                    <div className="md:px-[32px] px-[14px] bg-[#fff] rounded-[8px] my-[16px]  py-[14px]">
                        <div className="lg:mb-[36px] md:mb-[32px] mb-[28px]">
                            <div className="py-[6px] mb-[16px] flex justify-center items-center">
                                <img
                                    className="md:h-[38px] h-[30px]"
                                    src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/themes/socialv-theme/assets/images/logo-mini.svg"
                                    alt=""
                                />
                                <h4 className="ml-[8.6px] md:text-[30px] text-[21px] font-medium">SocialV</h4>
                            </div>
                            <p className="lg:text-[18px] md:text-[16px] text-[14px] text-center text-[#6f7f92] font-medium">
                                Welcome to socialV, a platform to connect with the social world
                            </p>
                        </div>

                        <form action="">
                            <div className="mb-[16px]">
                                <label
                                    className="font-medium block mb-[14px] md:text-[18px] text-[14px] text-[#07142e]"
                                    htmlFor=""
                                >
                                    Tên tài khoản
                                </label>
                                <i className="absolute py-[6px] px-[16px] mt-[10px] z-10 md:text-[18px] text-[14px] text-[#85888a]">
                                    <FaUserPlus />
                                </i>
                                <input
                                    className="relative md:text-[18px] text-[14px] text-[#85888a] w-full md:py-[15px] py-[14px] px-[44px] border-solid bg-[#f8f9fa] outline-none focus:text-[#07142e]"
                                    type="text"
                                    placeholder="Tên tài khoản"
                                />
                            </div>
                            <div className="mb-[16px]">
                                <label
                                    className="font-medium block mb-[14px] md:text-[18px] text-[14px] text-[#07142e]"
                                    htmlFor=""
                                >
                                    Email*
                                </label>
                                <i className="absolute py-[6px] px-[16px] mt-[10px] md:text-[18px] text-[14px] text-[#85888a] z-10">
                                    <FaEnvelope />
                                </i>
                                <input
                                    className="relative md:text-[18px] text-[14px] text-[#85888a] w-full md:py-[15px] py-[14px] px-[44px] border-solid bg-[#f8f9fa] outline-none focus:text-[#07142e]"
                                    type="email"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="mb-[16px]">
                                <label
                                    className="font-medium block mb-[14px] md:text-[18px] text-[14px] text-[#07142e]"
                                    htmlFor=""
                                >
                                    Mật khẩu*
                                </label>
                                <i className="absolute py-[6px] px-[16px] mt-[10px] md:text-[18px] text-[14px] text-[#85888a] z-10">
                                    <FaLock />
                                </i>
                                <input
                                    className="relative md:text-[18px] text-[14px] text-[#85888a] w-full md:py-[15px] py-[14px] px-[44px] border-solid bg-[#f8f9fa] outline-none focus:text-[#07142e]"
                                    type="pasword"
                                    placeholder="Mật khẩu"
                                />
                            </div>
                            <div className="mb-[16px]">
                                <label
                                    className="font-medium block mb-[14px] md:text-[18px] text-[14px] text-[#07142e]"
                                    htmlFor=""
                                >
                                    Xác nhận mật khẩu*
                                </label>
                                <i className="absolute py-[6px] px-[16px] mt-[10px] md:text-[18px] text-[14px] text-[#85888a] z-10">
                                    <FaLock />
                                </i>
                                <input
                                    className="relative md:text-[18px] text-[14px] text-[#85888a] w-full md:py-[15px] py-[14px] px-[44px] border-solid bg-[#f8f9fa] outline-none focus:text-[#07142e]"
                                    type="pasword"
                                    placeholder="Xác nhận mật khẩu"
                                />
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="">
                                    <label className="text-[16px]" htmlFor="">
                                        <input
                                            className="mr-[10px] md:h-[18px] md:w-[18px] w-[14px] h-[14px] cursor-pointer"
                                            type="checkbox"
                                        />
                                        Nhớ mật khẩu
                                    </label>
                                </div>
                                <a
                                    className="text-[#2f65b9] md:text-[16px] text-[13px] italic hover:text-[#1d4a94]"
                                    href=""
                                >
                                    Quên mật khẩu?
                                </a>
                            </div>
                            <button className="w-full my-[24px] mx-0 md:py-[16px] py-[14px] px-[28px] md:text-[16px] text-[12px] uppercase text-white font-medium bg-[#2f65b9] border-none rounded-[6px] cursor-pointer hover:bg-[#2a5aa6]">
                                Đăng ký
                            </button>
                        </form>

                        <div className="flex md:justify-between justify-center">
                            <p className="lg:text-[14px] text-[14px]">Bạn đã có có tài khoản?</p>
                            <a
                                className="ml-[8px] lg:text-[16px] text-[14px] text-[#2f65b9] decoration-none hover:text-[#1d4a94]"
                                href=""
                            >
                                Đăng nhập ngay
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
