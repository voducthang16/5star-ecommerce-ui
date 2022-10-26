import { useEffect, useState } from 'react';
import Countdown from 'react-countdown';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { EffectFade, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import images from '~/assets/images';
import { Vector } from '~/components/Icons';
import Image from '~/components/Image';
import Product from '~/layouts/components/Product';
import './Home.scss';
function Home() {
    const day = '2023-09-19T12:00:00';
    const configSlide = [
        {
            logo: `${images.hero1}`,
            title: 'important of coffee',
        },
        {
            logo: `${images.hero2}`,
            title: 'the home of coffee',
        },
        {
            logo: `${images.hero3}`,
            title: 'Ưu đãi lớn',
        },
    ];
    const productFakeData = [
        {
            id: 'product_1',
            color: ['#a78bfa', '#facc15', '#2c3b54'],
            images: [
                'https://cartzilla.createx.studio/img/shop/catalog/01.jpg',
                'https://cartzilla.createx.studio/img/shop/catalog/02.jpg',
                'https://cartzilla.createx.studio/img/shop/catalog/03.jpg',
            ],
        },
        {
            id: 'product_2',
            color: ['#fb923c', '#38bdf8', '#4ade80'],
            images: [
                'https://cartzilla.createx.studio/img/shop/catalog/01.jpg',
                'https://cartzilla.createx.studio/img/shop/catalog/02.jpg',
                'https://cartzilla.createx.studio/img/shop/catalog/03.jpg',
            ],
        },
        {
            id: 'product_3',
            color: ['#fb923c', '#38bdf8', '#4ade80'],
            images: [
                'https://cartzilla.createx.studio/img/shop/catalog/01.jpg',
                'https://cartzilla.createx.studio/img/shop/catalog/02.jpg',
                'https://cartzilla.createx.studio/img/shop/catalog/03.jpg',
            ],
        },
        {
            id: 'product_4',
            color: ['#fb923c', '#38bdf8', '#4ade80'],
            images: [
                'https://cartzilla.createx.studio/img/shop/catalog/01.jpg',
                'https://cartzilla.createx.studio/img/shop/catalog/02.jpg',
                'https://cartzilla.createx.studio/img/shop/catalog/03.jpg',
            ],
        },
        {
            id: 'product_5',
            color: ['#fb923c', '#38bdf8', '#4ade80'],
            images: [
                'https://cartzilla.createx.studio/img/shop/catalog/01.jpg',
                'https://cartzilla.createx.studio/img/shop/catalog/02.jpg',
                'https://cartzilla.createx.studio/img/shop/catalog/03.jpg',
            ],
        },
        {
            id: 'product_5',
            color: ['#fb923c', '#38bdf8', '#4ade80'],
            images: [
                'https://cartzilla.createx.studio/img/shop/catalog/01.jpg',
                'https://cartzilla.createx.studio/img/shop/catalog/02.jpg',
                'https://cartzilla.createx.studio/img/shop/catalog/03.jpg',
            ],
        },
        {
            id: 'product_5',
            color: ['#fb923c', '#38bdf8', '#4ade80'],
            images: [
                'https://cartzilla.createx.studio/img/shop/catalog/01.jpg',
                'https://cartzilla.createx.studio/img/shop/catalog/02.jpg',
                'https://cartzilla.createx.studio/img/shop/catalog/03.jpg',
            ],
        },
        {
            id: 'product_5',
            color: ['#fb923c', '#38bdf8', '#4ade80'],
            images: [
                'https://cartzilla.createx.studio/img/shop/catalog/01.jpg',
                'https://cartzilla.createx.studio/img/shop/catalog/02.jpg',
                'https://cartzilla.createx.studio/img/shop/catalog/03.jpg',
            ],
        },
    ];
    const CompleteCountdown = () => <span>You are good to go!</span>;
    const [slidesPerView, setSlidesPerView] = useState(3);
    useEffect(() => {
        const windowWidth = window.innerWidth;
        if (windowWidth < 1024) {
            setSlidesPerView(1);
        } else {
            setSlidesPerView(3);
        }
    }, []);
    return (
        <div className="home">
            {/* Big Slide */}
            <section className="bg-[#e3ffe6]">
                <div className="container">
                    <div className="grid grid-cols-4 lg:gap-x-12">
                        <div className="hidden lg:block lg:col-span-1">
                            <div className="py-8 flex flex-col h-full justify-around">
                                {[1, 2, 3].map((index) => (
                                    <div key={index} className="flex items-center bg-[#ffcca2] px-4 pt-4 rounded-lg">
                                        <Image className="w-2/5" src={images.banner_sm01} alt={'Small Banner'} />
                                        <div>
                                            <h4 className="text-lg">Với nhiều sản phẩm hấp dẫn</h4>
                                            <a className="inline-flex items-center text-base text-pink-400" href="/">
                                                Xem thêm <AiOutlineArrowRight className="ml-2" />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-span-4 lg:col-span-3">
                            <Swiper
                                spaceBetween={30}
                                effect={'fade'}
                                autoplay={{
                                    delay: 6000,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    dynamicBullets: true,
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[EffectFade, Navigation, Pagination]}
                            >
                                {configSlide.map((slide, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="relative pt-12 lg:py-44">
                                            <div className="pb-8 lg:pb-0">
                                                <span className="desc-active block text-base md:text-xl text-slate-700 font-medium">
                                                    Trong mùa hè này, chúng tôi đang có 🔥
                                                </span>
                                                <h2 className="title-active mt-6 font-semibold text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl !leading-[114%] text-slate-900">
                                                    {slide.title}
                                                </h2>
                                                <a
                                                    className="relative h-auto inline-flex items-center justify-center 
                                                            rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-6 
                                                            sm:py-5 sm:px-9 disabled:bg-opacity-90 bg-slate-900 hover:bg-slate-800 
                                                            text-slate-50 dark:text-slate-800 shadow-xl focus:outline-none focus:ring-2 
                                                            focus:ring-offset-2 focus:ring-primary-6000 mt-10 link-active"
                                                    rel="noopener noreferrer"
                                                    href="/"
                                                >
                                                    <span>Mua ngay</span>
                                                    <span>
                                                        <svg className="w-5 h-5 ml-2.5" viewBox="0 0 24 24" fill="none">
                                                            <path
                                                                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                                                                stroke="currentColor"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            ></path>
                                                            <path
                                                                d="M22 22L20 20"
                                                                stroke="currentColor"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            ></path>
                                                        </svg>
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="lg:absolute lg:top-0 lg:bottom-0  lg:-right-36 lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
                                                <Image
                                                    className="w-full h-full object-contain object-right-top img-active"
                                                    src={slide.logo}
                                                    alt="Slide"
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
            {/* 3 Slide  */}
            <section className="container my-10 lg:my-20">
                <div className="bg-white h-60">
                    <Swiper
                        slidesPerView={slidesPerView}
                        spaceBetween={30}
                        navigation={true}
                        modules={[Navigation]}
                        className="h-60"
                    >
                        {[1, 2, 3, 4, 5, 6].map((index) => (
                            <SwiperSlide key={index}>
                                <div className="relative h-full box-border overflow-hidden rounded-2xl group">
                                    <div className="absolute inset-0 opacity-0 bg-black/10 group-hover:opacity-40 cursor-pointer transition-opacity"></div>
                                    <div className="h-full p-6 flex justify-between bg-[#fefce8]">
                                        <div>
                                            <span className="block mb-2 text-sm text-slate-700">
                                                Khám phá những sản phẩm mới
                                            </span>
                                            <h2 className="text-xl md:text-2xl text-slate-900 font-semibold">
                                                Mua sắm từ các thương hiệu hàng đầu
                                            </h2>
                                            <button className="relative z-20 px-6 py-3 mt-4 bg-white text-sm font-medium rounded-full shadow-lg hover:bg-gray-100">
                                                Xem tất cả
                                            </button>
                                        </div>
                                        <div className="min-w-[45%] flex items-center justify-center">
                                            <Image
                                                className="w-full object-contain md:w-1/2"
                                                src={
                                                    'https://chisnghiax.com/ciseco/static/media/1.a586787f3de7735e65d3.png'
                                                }
                                                alt="Product"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
            {/* List Product */}
            <section className="container">
                <div className="py-10 lg:py-20 border-t border-slate-200/">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
                        {productFakeData.map((item, index) => (
                            <div key={index} className="col-span-1">
                                <Product idProduct={`${item.id}`} color={item.color} images={item.images} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Sale */}
            <section className="container">
                <div className="py-10 lg:py-20 border-t border-slate-200/">
                    <div className="p-8 bg-[#eff8ff] rounded-2xl">
                        <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-8">
                            <div className="col-span-1">
                                <div className="h-full flex flex-col justify-center">
                                    <div>
                                        <h6 className="inline-block text-sm px-2 py-1 bg-[#f34770] text-white rounded-md">
                                            Ưu đãi giới hạn
                                        </h6>
                                    </div>
                                    <h4 className="text-2xl mt-2 font-medium">Tất cả</h4>
                                    <h3 className="text-3xl mt-2 font-semibold">sản phẩm mới nhất</h3>
                                    <p className="text-xl mt-1 mb-3 font-light">đang giảm giá. Nhanh tay nào!</p>
                                    <Countdown date={day} />
                                    <div className="mt-6">
                                        <a href="/" className="py-3 px-6 bg-[#4e54c8] text-white text-lg rounded-lg">
                                            View Offer
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1 flex items-center justify-center">
                                <Image
                                    className="object-contain w-full"
                                    src={'https://cartzilla.createx.studio/img/home/banners/offer.jpg'}
                                    alt={'Sale Product'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* 4 Step */}
            <section className="container">
                <div className="py-10 lg:py-24 border-t border-b border-slate-200">
                    <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 xl:gap-20">
                        <div className="hidden md:block absolute inset-x-0 top-5">
                            <Vector className="w-full" />
                        </div>
                        <div className="relative flex flex-col items-center max-w-xs mx-auto">
                            <div className="mb-4 sm:mb-6 max-w-[140px] mx-auto">
                                <Image src={images.step1} alt="Step 1" />
                            </div>
                            <div className="text-center mt-auto space-y-5">
                                <span className="inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100">
                                    Bước 1
                                </span>
                                <h3 className="text-base font-semibold">Lọc &amp; Khám phá</h3>
                                <span className="block text-slate-600 dark:text-slate-400 text-sm leading-6">
                                    Tính năng lọc và đề xuất thông minh giúp bạn dễ dàng tìm thấy
                                </span>
                            </div>
                        </div>
                        <div className="relative flex flex-col items-center max-w-xs mx-auto">
                            <div className="mb-4 sm:mb-6 max-w-[140px] mx-auto">
                                <Image src={images.step2} alt="Step 2" />
                            </div>
                            <div className="text-center mt-auto space-y-5">
                                <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-indigo-800 bg-indigo-100">
                                    Bước 2
                                </span>
                                <h3 className="text-base font-semibold">Thêm vào giỏ hàng</h3>
                                <span className="block text-slate-600 dark:text-slate-400 text-sm leading-6">
                                    Dễ dàng chọn đúng mặt hàng và thêm chúng vào giỏ hàng
                                </span>
                            </div>
                        </div>
                        <div className="relative flex flex-col items-center max-w-xs mx-auto">
                            <div className="mb-4 sm:mb-6 max-w-[140px] mx-auto">
                                <Image src={images.step3} alt="Step 3" />
                            </div>
                            <div>
                                <div className="text-center mt-auto space-y-5">
                                    <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs text-yellow-800 bg-yellow-100  relative">
                                        Bước 3
                                    </span>
                                    <h3 className="text-base font-semibold">Chuyển phát nhanh</h3>
                                    <span className="block text-slate-600 dark:text-slate-400 text-sm leading-6">
                                        Bên vận chuyển sẽ xác nhận và giao hàng nhanh chóng cho bạn
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex flex-col items-center max-w-xs mx-auto">
                            <div className="mb-4 sm:mb-6 max-w-[140px] mx-auto">
                                <Image src={images.step4} alt="Step 4" />
                            </div>
                            <div>
                                <div className="text-center mt-auto space-y-5">
                                    <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs text-purple-800 bg-purple-100  relative">
                                        Bước 4
                                    </span>
                                    <h3 className="text-base font-semibold">Tận hưởng sản phẩm</h3>
                                    <span className="block text-slate-600 dark:text-slate-400 text-sm leading-6">
                                        Chúc các bạn vui vẻ và tận hưởng những sản phẩm chất lượng 5 sao
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Best Accessories */}
            <section className="container py-10 lg:py-24">
                <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 md:gap-x-6">
                    <div className="col-span-1">
                        <h3 className="mb-4 text-base font-medium">Bán chạy nhất</h3>
                        <div className="space-y-2">
                            {[1, 2, 3, 4].map((item, index) => (
                                <div key={index} className="pb-2 flex items-center space-x-4 border-b border-slate-200">
                                    <div className="min-w-[64px] h-16">
                                        <Image
                                            src={'https://cartzilla.createx.studio/img/shop/cart/widget/01.jpg'}
                                            alt={'Product'}
                                            className={'w-full h-full object-contain'}
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center space-y-2">
                                        <h5 className="text-sm font-semibold text-gray-700">Giày Nike</h5>
                                        <span className="text-xs font-medium text-blue-700/90">1000.000VND</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <span className="block text-lg text-gray-800">...</span>
                        <a className="inline-flex items-center text-base text-pink-400" href="/">
                            Xem thêm <AiOutlineArrowRight className="ml-2" />
                        </a>
                    </div>
                    <div className="col-span-1">
                        <h3 className="mb-4 text-base font-medium">Hàng mới</h3>
                        <div className="space-y-2">
                            {[1, 2, 3, 4].map((item, index) => (
                                <div key={index} className="pb-2 flex items-center space-x-4 border-b border-slate-200">
                                    <div className="min-w-[64px] h-16">
                                        <Image
                                            src={'https://cartzilla.createx.studio/img/shop/cart/widget/01.jpg'}
                                            alt={'Product'}
                                            className={'w-full h-full object-contain'}
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center space-y-2">
                                        <h5 className="text-sm font-semibold text-gray-700">Giày Adidas</h5>
                                        <span className="text-xs font-medium text-blue-700/90">1000.000VND</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <span className="block text-lg text-gray-800">...</span>
                        <a className="inline-flex items-center text-base text-pink-400" href="/">
                            Xem thêm <AiOutlineArrowRight className="ml-2" />
                        </a>
                    </div>
                    <div className="hidden lg:block lg:col-span-1">
                        <Image className="w-full object-contain" src={images.b_banner} alt={'Best Accessories'} />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
