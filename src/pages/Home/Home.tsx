import { Swiper, SwiperSlide } from 'swiper/react';
import Countdown from 'react-countdown';
import { Pagination, Navigation, EffectFade } from 'swiper';
import { GiaSoc, DealFlashIcon, HomNay } from '~/components/Icons';
import images from '~/assets/images';
import Image from '~/components/Image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './Home.scss';
function Home() {
    const day = '2022-09-19T12:00:00';
    const CompleteCountdown = () => <span>You are good to go!</span>;
    return (
        <div className="home mt-4">
            <div className="max-w-screen-2xl 2xl:m-auto xl:max-w-screen-xl xl:m-auto grid grid-rows-3 grid-cols-12 gap-4">
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
        </div>
    );
}

export default Home;
