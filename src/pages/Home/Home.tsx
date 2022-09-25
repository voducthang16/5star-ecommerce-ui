import Countdown from 'react-countdown';
import { EffectFade, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import images from '~/assets/images';
import { DealFlashIcon, GiaSoc, HomNay, Vector } from '~/components/Icons';
import Image from '~/components/Image';
import './Home.scss';
function Home() {
    const day = '2022-09-19T12:00:00';
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
            title: 'brewed to perfection',
        },
    ];
    const CompleteCountdown = () => <span>You are good to go!</span>;
    return (
        <div className="home">
            <div className="mb-20 bg-[#e3ffe6]">
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
                    className="container"
                >
                    {configSlide.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div>
                                <div className="relative pt-12 lg:py-44">
                                    <div className="pb-8 lg:pb-0">
                                        <span className="desc-active block text-base md:text-xl text-slate-700 font-medium">
                                            In this season, find the best 🔥
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
                                            <span>Explore now</span>
                                            <span>
                                                <svg className="w-5 h-5 ml-2.5" viewBox="0 0 24 24" fill="none">
                                                    <path
                                                        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                                                        stroke="currentColor"
                                                        stroke-width="1.5"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    ></path>
                                                    <path
                                                        d="M22 22L20 20"
                                                        stroke="currentColor"
                                                        stroke-width="1.5"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    ></path>
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="lg:absolute lg:top-0 lg:bottom-0 lg:right-0 lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
                                        <Image
                                            className="w-full h-full object-contain object-right-bottom img-active"
                                            src={slide.logo}
                                            alt="Slide"
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="container">
                <div className="grid grid-rows-3 grid-cols-12 gap-4">
                    <div className="col-span-9 bg-white h-64">
                        <div>
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
                                modules={[Navigation, Pagination, EffectFade]}
                                className="h-64"
                            >
                                <SwiperSlide>
                                    <Image src={images.banner_1} alt={'Banner'} className="h-full w-full" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={images.banner_2} alt={'Banner'} className="h-full w-full" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={images.banner_3} alt={'Banner'} className="h-full w-full" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className="col-span-3 bg-white h-64">
                        <Image src={images.banner_4} alt={'Banner'} className="h-full w-full" />
                    </div>
                    <div className="col-span-8 bg-white h-64">
                        <div className="flex justify-between h-16 items-center">
                            <div className="flex">
                                <div className="flex items-center">
                                    <GiaSoc />
                                    <DealFlashIcon />
                                    <HomNay />
                                </div>
                                <div>
                                    <Countdown date={day}>
                                        <CompleteCountdown />
                                    </Countdown>
                                </div>
                            </div>
                            <div>
                                <h6 className="text-lg text-blue-600 font-medium">Xem thêm</h6>
                            </div>
                        </div>
                        <div className="h-48">
                            <Swiper
                                slidesPerView={5}
                                spaceBetween={30}
                                navigation={true}
                                modules={[Navigation]}
                                className="h-48"
                            >
                                <SwiperSlide>
                                    <Image src={'./assets/images/product_b_1.jpg'} alt="Product" />
                                    <p className="mt-2 text-sm font-semibold text-red-600">
                                        200.000VND <span className="text-xs font-normal">-23%</span>
                                    </p>
                                </SwiperSlide>
                                <SwiperSlide>Slide 2</SwiperSlide>
                                <SwiperSlide>Slide 3</SwiperSlide>
                                <SwiperSlide>Slide 4</SwiperSlide>
                                <SwiperSlide>Slide 5</SwiperSlide>
                                <SwiperSlide>Slide 6</SwiperSlide>
                                <SwiperSlide>Slide 7</SwiperSlide>
                                <SwiperSlide>Slide 8</SwiperSlide>
                                <SwiperSlide>Slide 9</SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className="col-span-4 bg-white h-36">
                        <Swiper pagination={true} modules={[Pagination]} className="h-64">
                            <SwiperSlide>
                                <Image src={images.banner_5} alt={'Banner'} className="h-full w-full" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={images.banner_6} alt={'Banner'} className="h-full w-full" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="col-span-12 bg-white h-36">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            navigation={true}
                            modules={[Navigation]}
                            className="h-36"
                        >
                            <SwiperSlide>
                                <Image src={'./assets/images/product_b_1.jpg'} alt="Product" />
                                <p className="mt-2 text-sm font-semibold text-red-600">
                                    200.000VND <span className="text-xs font-normal">-23%</span>
                                </p>
                            </SwiperSlide>
                            <SwiperSlide>Slide 2</SwiperSlide>
                            <SwiperSlide>Slide 3</SwiperSlide>
                            <SwiperSlide>Slide 4</SwiperSlide>
                            <SwiperSlide>Slide 5</SwiperSlide>
                            <SwiperSlide>Slide 6</SwiperSlide>
                            <SwiperSlide>Slide 7</SwiperSlide>
                            <SwiperSlide>Slide 8</SwiperSlide>
                            <SwiperSlide>Slide 9</SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="py-24 mb-24 border-t border-b border-slate-200">
                    <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-16 xl:gap-20">
                        <div className="absolute inset-x-0 top-5">
                            <Vector className="w-full" />
                        </div>
                        <div className="relative flex flex-col items-center max-w-xs mx-auto">
                            <div className="mb-4 sm:mb-10 max-w-[140px] mx-auto">
                                <Image src={images.step1} alt="Step 1" />
                            </div>
                            <div className="text-center mt-auto space-y-5">
                                <span className="inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100">
                                    Step 1
                                </span>
                                <h3 className="text-base font-semibold">Filter &amp; Discover</h3>
                                <span className="block text-slate-600 dark:text-slate-400 text-sm leading-6">
                                    Smart filtering and suggestions make it easy to find
                                </span>
                            </div>
                        </div>
                        <div className="relative flex flex-col items-center max-w-xs mx-auto">
                            <div className="mb-4 sm:mb-10 max-w-[140px] mx-auto">
                                <Image src={images.step2} alt="Step 2" />
                            </div>
                            <div className="text-center mt-auto space-y-5">
                                <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-indigo-800 bg-indigo-100">
                                    Step 2
                                </span>
                                <h3 className="text-base font-semibold">Add to bag</h3>
                                <span className="block text-slate-600 dark:text-slate-400 text-sm leading-6">
                                    Easily select the correct items and add them to the cart
                                </span>
                            </div>
                        </div>
                        <div className="relative flex flex-col items-center max-w-xs mx-auto">
                            <div className="mb-4 sm:mb-10 max-w-[140px] mx-auto">
                                <Image src={images.step3} alt="Step 3" />
                            </div>
                            <div>
                                <div className="text-center mt-auto space-y-5">
                                    <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs text-yellow-800 bg-yellow-100  relative">
                                        Step 3
                                    </span>
                                    <h3 className="text-base font-semibold">Fast shipping</h3>
                                    <span className="block text-slate-600 dark:text-slate-400 text-sm leading-6">
                                        The carrier will confirm and ship quickly to you
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex flex-col items-center max-w-xs mx-auto">
                            <div className="mb-4 sm:mb-10 max-w-[140px] mx-auto">
                                <Image src={images.step4} alt="Step 4" />
                            </div>
                            <div>
                                <div className="text-center mt-auto space-y-5">
                                    <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs text-purple-800 bg-purple-100  relative">
                                        Step 4
                                    </span>
                                    <h3 className="text-base font-semibold">Enjoy the product</h3>
                                    <span className="block text-slate-600 dark:text-slate-400 text-sm leading-6">
                                        Have fun and enjoy your 5-star quality products
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
