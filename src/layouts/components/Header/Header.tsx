import { useEffect } from 'react';
import { FourSquaresIcon } from '~/components/Icons';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { IoReorderThreeSharp } from 'react-icons/io5';
import { AiOutlineUser, AiOutlineShoppingCart, AiOutlineHeart, AiOutlineDelete } from 'react-icons/ai';
import Search from '../Search';
import './Header.scss';
import { Link, NavLink } from 'react-router-dom';
import Logo from '~/components/Logo';
import Image from '~/components//Image';
import images from '~/assets/images';
function Header() {
    let activeStyle = {
        color: '#0097a7',
    };
    const handleScroll = () => {
        const windowWidth = window.innerWidth;
        document.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            header!.classList.toggle('sticky', window.scrollY > 200);

            // Home
            if (document.querySelector('.home')) {
                const home = document.querySelector('.home');
                if (windowWidth < 1024) {
                    home!.classList.toggle('sticky-mt-20', window.scrollY > 200);
                } else {
                    home!.classList.toggle('sticky-mt-36', window.scrollY > 200);
                }
            }

            // Product Detail
            if (document.querySelector('.product-detail')) {
                const productDetail = document.querySelector('.product-detail');
                if (windowWidth < 1024) {
                    productDetail!.classList.toggle('sticky-mt-20', window.scrollY > 200);
                } else {
                    productDetail!.classList.toggle('sticky-mt-36', window.scrollY > 200);
                }
            }

            // Category
            if (document.querySelector('.category-page')) {
                const category = document.querySelector('.category-page');
                if (windowWidth < 1024) {
                    category!.classList.toggle('sticky-mt-20', window.scrollY > 200);
                } else {
                    category!.classList.toggle('sticky-mt-36', window.scrollY > 200);
                }
            }

            // Cart
            if (document.querySelector('.cart-page')) {
                const cart = document.querySelector('.cart-page');
                if (windowWidth < 1024) {
                    cart!.classList.toggle('sticky-mt-20', window.scrollY > 200);
                } else {
                    cart!.classList.toggle('sticky-mt-36', window.scrollY > 200);
                }
            }
        });
    };
    useEffect(() => {
        handleScroll();
    }, []);

    const handleShowNavbar = () => {
        const navbar = document.querySelector('.navbar');
        navbar!.classList.toggle('!block');
    };
    const handleShowNavbarMobile = () => {
        const navbarMobile = document.querySelector('.navbar-mobile');
        navbarMobile!.classList.toggle('!block');
    };
    return (
        <header>
            <div className="header-wrapper overflow-hidden relative z-[9999]">
                <div className="header bg-white border-b border-slate-200 shadow max-h-36">
                    <div className="container h-20">
                        <div className="grid grid-cols-2 lg:grid-cols-8 gap-4 h-20">
                            <div className="col-span-1 lg:col-span-2 flex items-center">
                                <Link to={'/'}>
                                    <Logo />
                                </Link>
                            </div>
                            <div className="hidden lg:col-span-4 lg:flex lg:items-center">
                                <Search />
                            </div>
                            <div className="col-span-1 lg:col-span-2 flex items-center">
                                <ul className="flex-1 flex justify-end lg:space-x-2 xl:space-x-6">
                                    <li onClick={handleShowNavbarMobile} className="icon-header-wrapper lg:hidden">
                                        <IoReorderThreeSharp className="text-2xl" />
                                    </li>
                                    <li onClick={handleShowNavbar} className="hidden icon-header-wrapper three-sharp">
                                        <IoReorderThreeSharp className="text-2xl" />
                                    </li>
                                    <li className="hidden lg:block icon-header-wrapper">
                                        <AiOutlineHeart className="text-2xl" />
                                        <span
                                            className="absolute -top-1 -right-1 bg-cyan-500 text-white h-4 w-4 
                                        block text-center rounded-full text-[10px]"
                                        >
                                            5
                                        </span>
                                    </li>
                                    <li className="icon-header-wrapper">
                                        <IoMdNotificationsOutline className="text-2xl" />
                                        <span
                                            className="absolute top-0 right-0 bg-cyan-500 text-white h-4 w-4 
                                        block text-center rounded-full text-[10px]"
                                        >
                                            3
                                        </span>
                                    </li>
                                    <li className="hidden lg:block icon-header-wrapper">
                                        <Link to={'/my-account'}>
                                            <AiOutlineUser className="text-2xl" />
                                        </Link>
                                    </li>
                                    <li className="hidden lg:block icon-header-wrapper relative">
                                        <Link to={'/cart'}>
                                            <AiOutlineShoppingCart className="text-2xl" />
                                            <span
                                                style={{ fontSize: '10px' }}
                                                className="absolute -top-1 -right-1 bg-cyan-500 text-white h-4 w-4 block text-center rounded-full"
                                            >
                                                5
                                            </span>
                                        </Link>
                                        <div className="cart-hover absolute top-full pt-4 right-0 w-[400px]">
                                            <div className="bg-white rounded-xl p-4 cart-hover-wrapper cursor-default">
                                                <div className="flex justify-between text-sm mb-2">
                                                    <span className="cursor-text">2 sản phẩm</span>
                                                    <Link className="text-[#2f5acf]" to={'/cart'}>
                                                        Xem tất cả
                                                    </Link>
                                                </div>
                                                {/* list product in cart */}
                                                <div className="max-h-[250px] overflow-y-auto">
                                                    <div className="flex space-x-2 py-4 mr-2 border-b border-slate-200">
                                                        <Link to={'/'} className="w-[30%]">
                                                            <Image
                                                                className="w-full object-contain"
                                                                src={
                                                                    'https://cartzilla.createx.studio/img/shop/cart/widget/02.jpg'
                                                                }
                                                            />
                                                        </Link>
                                                        <Link
                                                            to={'/'}
                                                            className="flex-1 text-base flex flex-col justify-around"
                                                        >
                                                            <h6>
                                                                Áo Polo nam thể thao thoáng khí, nhuộm sạch Cleandye
                                                            </h6>
                                                            <span className="text-xs">Xanh Aqua/2XL</span>
                                                            <p className="flex items-center space-x-2">
                                                                <span className="text-[#2f5acf]">300.000 VND</span>
                                                                <span>x</span>
                                                                <span>2</span>
                                                            </p>
                                                        </Link>
                                                        <div className="flex items-center justify-center hover:text-red-600 cursor-pointer">
                                                            <AiOutlineDelete />
                                                        </div>
                                                    </div>
                                                    <div className="flex space-x-2 py-4 mr-2 border-b border-slate-200">
                                                        <Link to={'/'} className="w-[30%]">
                                                            <Image
                                                                className="w-full object-contain"
                                                                src={
                                                                    'https://cartzilla.createx.studio/img/shop/cart/widget/02.jpg'
                                                                }
                                                            />
                                                        </Link>
                                                        <Link
                                                            to={'/'}
                                                            className="flex-1 text-base flex flex-col justify-around"
                                                        >
                                                            <h6>
                                                                Áo Polo nam thể thao thoáng khí, nhuộm sạch Cleandye
                                                            </h6>
                                                            <span className="text-xs">Xanh Aqua/2XL</span>
                                                            <p className="flex items-center space-x-2">
                                                                <span className="text-[#2f5acf]">300.000 VND</span>
                                                                <span>x</span>
                                                                <span>2</span>
                                                            </p>
                                                        </Link>
                                                        <div className="flex items-center justify-center hover:text-red-600 cursor-pointer">
                                                            <AiOutlineDelete />
                                                        </div>
                                                    </div>
                                                    <div className="flex space-x-2 py-4 mr-2 border-b border-slate-200">
                                                        <Link to={'/'} className="w-[30%]">
                                                            <Image
                                                                className="w-full object-contain"
                                                                src={
                                                                    'https://cartzilla.createx.studio/img/shop/cart/widget/02.jpg'
                                                                }
                                                            />
                                                        </Link>
                                                        <Link
                                                            to={'/'}
                                                            className="flex-1 text-base flex flex-col justify-around"
                                                        >
                                                            <h6>
                                                                Áo Polo nam thể thao thoáng khí, nhuộm sạch Cleandye
                                                            </h6>
                                                            <span className="text-xs">Xanh Aqua/2XL</span>
                                                            <p className="flex items-center space-x-2">
                                                                <span className="text-[#2f5acf]">300.000 VND</span>
                                                                <span>x</span>
                                                                <span>2</span>
                                                            </p>
                                                        </Link>
                                                        <div className="flex items-center justify-center hover:text-red-600 cursor-pointer">
                                                            <AiOutlineDelete />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block navbar container h-16">
                        <div className="grid grid-cols-8 gap-4 h-16">
                            <div className="col-span-2 flex items-center space-x-4">
                                <FourSquaresIcon width={16} height={16} />
                                <h4 className="text-base">Loại</h4>
                            </div>
                            <div className="col-span-4 flex items-center">
                                <ul className="flex text-base space-x-8">
                                    <li>
                                        <Link className="hover:text-[#009ef7] transition-all" to="/">
                                            Trang chủ
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link className="hover:text-[#fe696a] transition-all" to="/product/detail">
                                            Product Detail
                                        </Link>
                                    </li> */}
                                    <li>
                                        <NavLink
                                            className="hover:text-[#0097a7] transition-all"
                                            to="/category"
                                            style={({ isActive }) => (isActive ? activeStyle : undefined)}
                                        >
                                            Danh mục
                                        </NavLink>
                                    </li>
                                    <li>
                                        <Link className="hover:text-[#0097a7] transition-all" to="/about">
                                            Giới thiệu
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="hover:text-[#0097a7] transition-all" to="/contact">
                                            Liên lạc
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Navbar On Mobile */}
                    <div className="navbar-mobile hidden md:hidden absolute left-0 right-0 z-10 bg-white border-b border-slate-200">
                        <div className="container">
                            <div className="py-6">
                                <Search />
                                <ul className="flex flex-col text-base space-y-2 mt-2">
                                    <li className="py-2 px-4 bg-slate-50 rounded-md">
                                        <a className="transition-all" href="/">
                                            Departments
                                        </a>
                                    </li>
                                    <li className="py-2 px-4 bg-slate-50 rounded-md">
                                        <a className="transition-all" href="/">
                                            Home
                                        </a>
                                    </li>
                                    <li className="py-2 px-4 bg-slate-50 rounded-md">
                                        <a className="transition-all" href="/">
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
