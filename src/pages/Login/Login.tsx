import { useState } from 'react';
import { FaLock, FaUserPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const initDataForm = {
    username: '',
    password: '',
};

const Login = () => {
    const Navigate = useNavigate();
    const dispatch = useDispatch();

    const [formValue, setFormValue] = useState(initDataForm);

    const onInputChange = (e: Event | any) => {
        let { value, name } = e.target;
        let FormValueNew = { ...formValue, [name]: value };
        setFormValue(FormValueNew);
    };

    const submitForm = (e: Event | any) => {
        e.preventDefault();
    };

    return (
        <div className="flex justify-center font-plusJakartaSans">
            <div className="hidden w-full max-h-screen bg-[#0e366d] md:flex justify-center items-center">
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
                    <div className="md:px-[32px] px-[14px] py-[14px] bg-[#fff] rounded-[8px] my-[16px]">
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
                                    Tên tài khoản hoặc email
                                </label>
                                <i className="absolute py-[6px] px-[16px] mt-[10px] z-10 md:text-[18px] text-[14px] text-[#85888a]">
                                    <FaUserPlus />
                                </i>
                                <input
                                    className="relative md:text-[18px] text-[14px] text-[#85888a] w-full md:py-[15px] py-[14px] px-[44px] border-solid bg-[#f8f9fa] outline-none focus:text-[#07142e]"
                                    type="text"
                                    defaultValue="marvin"
                                    placeholder="Tên tài khoản"
                                />
                            </div>
                            <div className="mb-[16px]">
                                <label
                                    className="font-medium block mb-[14px] md:text-[18px] text-[14px] text-[#07142e]"
                                    htmlFor=""
                                >
                                    Mật khẩu của bạn
                                </label>
                                <i className="absolute py-[6px] px-[16px] mt-[10px] md:text-[18px] text-[14px] text-[#85888a] z-10">
                                    <FaLock />
                                </i>
                                <input
                                    className="relative md:text-[18px] text-[14px] text-[#85888a] w-full md:py-[15px] py-[14px] px-[44px] border-solid bg-[#f8f9fa] outline-none focus:text-[#07142e]"
                                    type="password"
                                    defaultValue="000000"
                                    placeholder="Password"
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
                                Đăng nhập
                            </button>
                        </form>

                        <div className="flex justify-center">
                            <p className="md:text-[16px] text-[14px]">Bạn chưa có tài khoản?</p>
                            <a
                                className="ml-[8px] md:text-[16px] text-[14px] text-[#2f65b9] decoration-none hover:text-[#1d4a94]"
                                href=""
                            >
                                Đăng ký ngay
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
