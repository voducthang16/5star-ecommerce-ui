import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

function About() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
        ],
    };

    return (
        <div>
            <div className="w-full py-[32px] px-[20px] md:px-[54px] md:py-[40px] lg:px-[108px]">
                <div className="mb-[32px] xl:flex justify-between">
                    <div className="flex justify-evenly items-center lg:px-[24px]">
                        <div className="mt-[-20px] mr-[12px] w-full h-[258px] md:h-[384px] lg:w-[422px] lg:h-[626px] xl:h-[384px] xl:w-[258px] bg-[url('https://themes.pixelstrap.com/fastkart/assets/images/inner-page/about-us/1.jpg')] bg-cover bg-center rounded-tr-[50px] rounded-bl-[50px]"></div>
                        <div className="mt-[40px] ml-[12px] w-full h-[254px] md:h-[384px] lg:w-[422px] lg:h-[626px] xl:h-[384px] xl:w-[258px] bg-[url('https://themes.pixelstrap.com/fastkart/assets/images/inner-page/about-us/2.jpg')] bg-cover bg-center rounded-tl-[50px] rounded-br-[50px]"></div>
                    </div>
                    <div className="mt-[16px] lg:px-[24px]">
                        <div>
                            <h4 className="mb-[8px] text-[16px] capitalize text-[#222]">Về chúng tôi</h4>
                            <h2 className="mb-[12px] text-[28px] capitalize font-semibold text-[#222222]]">
                                Chúng tôi tạo ra những sản phẩm độc đáo
                            </h2>
                        </div>
                        <div>
                            <p className="text-[14px] text-justify leading-6 text-[#4a5568]">
                                5star là lựa chọn hàng đầu dành cho các tín đồ thời trang Streetwear sành điệu. Sứ mệnh
                                của 5star là trao quyền cho thế hệ trẻ toàn thế giới tự do thể hiện phong cách thông qua
                                thời trang, thương hiệu vượt qua ranh giới của thời trang streetwear bằng cách không
                                ngừng sáng tạo các trang phục với các bộ sưu tập độc đáo.
                            </p>
                            {/* <ul className="mt-[32px]">
                                <li className="mb-[16px]">
                                    <div className="flex">
                                        <div className="">
                                            <img
                                                className="w-[30px] mr-[12px]"
                                                src="https://themes.pixelstrap.com/fastkart/assets/svg/3/delivery.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="">
                                            <h5 className="text-[15px] text-[#222222]">Free delivery for all orders</h5>
                                        </div>
                                    </div>
                                </li>

                                <li className="mb-[16px]">
                                    <div className="flex">
                                        <div className="">
                                            <img
                                                className="w-[30px] mr-[12px]"
                                                src="https://themes.pixelstrap.com/fastkart/assets/svg/3/leaf.svg"
                                                alt=""
                                            />
                                        </div>

                                        <div className="">
                                            <h5 className="text-[15px] text-[#222222]">Only fresh foods</h5>
                                        </div>
                                    </div>
                                </li>

                                <li className="mb-[16px]">
                                    <div className="flex">
                                        <div className="">
                                            <img
                                                className="w-[30px] mr-[12px]"
                                                src="https://themes.pixelstrap.com/fastkart/assets/svg/3/delivery.svg"
                                                alt=""
                                            />
                                        </div>

                                        <div className="">
                                            <h5 className="text-[15px] text-[#222222]">Free delivery for all orders</h5>
                                        </div>
                                    </div>
                                </li>

                                <li className="mb-[16px]">
                                    <div className="flex">
                                        <div className="">
                                            <img
                                                className="w-[30px] mr-[12px]"
                                                src="https://themes.pixelstrap.com/fastkart/assets/svg/3/leaf.svg"
                                                alt=""
                                            />
                                        </div>

                                        <div className="">
                                            <h5 className="text-[15px] text-[#222222]">Only fresh foods</h5>
                                        </div>
                                    </div>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-[32px] px-[28px] bg-[#f8f8f8]">
                <div className="text-center">
                    <h4 className="mb-[8px] text-[16px] text-[#0da487]">Chúng tôi làm gì</h4>
                    <h2 className="mb-[28px] text-[23px]">Chúng tôi được khách hàng tin cậy</h2>
                </div>
                <div className="px-[14px] mb-[30px]">
                    <Slider className="" {...settings}>
                        <div className="">
                            <div className="p-[28px] min-h-[300px] rounded-[22px] bg-[#fff] mr-[12px]">
                                <img
                                    className="w-[44px] h-[60px] my-[14px]"
                                    src="https://themes.pixelstrap.com/fastkart/assets/svg/3/user.svg"
                                    alt=""
                                />
                                <h4 className="text-[22px]">Khách hàng hạnh phúc</h4>
                                <p className="text-[14px] leading-[1.7]">
                                    Mục tiêu của chúng tôi là mang đến trải nghiệm tốt nhất cho người tiêu dùng và làm
                                    họ hạnh phúc
                                </p>
                            </div>
                        </div>
                        <div className="">
                            <div className="p-[28px] min-h-[300px] rounded-[22px] bg-[#fff] mr-[12px]">
                                <img
                                    className="w-[44px] h-[60px] my-[14px]"
                                    src="https://themes.pixelstrap.com/fastkart/assets/svg/3/buy.svg"
                                    alt=""
                                />
                                <h4 className="text-[22px]">Biểu tượng thời trang thời đại mới</h4>
                                <p className="text-[14px] leading-[1.7]">
                                    Tại 5star, mỗi sản phẩm đều mang theo sự cá tính và sành điệu, đại diện cho hình ảnh
                                    giới trẻ hiện đại - biểu tượng cho sự dẫn đầu phong cách thời đại mới.
                                </p>
                            </div>
                        </div>
                        <div className="">
                            <div className="p-[28px] min-h-[300px] rounded-[22px] bg-[#fff] mr-[12px]">
                                <img
                                    className="w-[44px] h-[60px] my-[14px]"
                                    src="https://themes.pixelstrap.com/fastkart/assets/svg/3/work.svg"
                                    alt=""
                                />
                                <h4 className="text-[22px]">Chất lượng trải nghiệm vượt trội</h4>
                                <p className="text-[14px] leading-[1.7]">
                                    Chúng tôi không ngừng nỗ lực, tập trung vào chất lượng sản phẩm và trải nghiệm mua
                                    sắm vượt trội nhất chưa từng có trước đây, các cửa hàng vật lý của chúng tôi, tối ưu
                                    hóa trải nghiệm, giúp người dùng mua sắm một sản phẩm cao cấp thật sự.
                                </p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>

            <div className="py-[16px] px-[16px] lg:my-[40px] lg:pt-10">
                <div className="relative flex flex-col lg:flex-row rounded-2xl sm:rounded-[40px] p-4 pb-0 sm:p-5 sm:pb-0 lg:p-24">
                    <div className="absolute inset-0">
                        <img
                            className="absolute w-full h-full object-contain object-bottom dark:opacity-5"
                            src="https://chisnghiax.com/ciseco/static/media/BackgroundLine.2aa0910fef98274b2f4855249cd61c4c.svg"
                            alt=""
                        />
                    </div>
                    <div className="lg:w-[50%] max-w-lg relative">
                        <h2 className="font-semibold text-4xl md:text-5xl">Đừng bỏ lỡ những ưu đãi đặc biệt</h2>
                        <span className="text-[16px] block mt-5 text-neutral-500 dark:text-neutral-400">
                            Đăng ký nhận tin mới nhất, combo tiết kiệm, mã giảm giá ...
                        </span>
                        <ul className="space-y-4 mt-10">
                            <li className="flex items-center space-x-4">
                                <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-purple-800 bg-purple-100">
                                    01
                                </span>
                                <span className="text-[16px] font-medium text-neutral-700 dark:text-neutral-300">
                                    Combo tiết kiệm
                                </span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-blue-800 bg-blue-100">
                                    02
                                </span>
                                <span className="text-[16px] font-medium text-neutral-700 dark:text-neutral-300">
                                    Freeship
                                </span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100">
                                    03
                                </span>
                                <span className="text-[16px] font-medium text-neutral-700 dark:text-neutral-300">
                                    Tạp chí cao cấp
                                </span>
                            </li>
                        </ul>
                        <form className="mt-10 relative max-w-sm">
                            <input
                                type="email"
                                className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-full text-sm font-normal h-11 px-4 py-3 bg-[#f8f8f8] "
                                aria-required="true"
                                placeholder="Nhập email"
                            />
                            <button
                                className="flex items-center justify-center rounded-full !leading-none          disabled:bg-opacity-70 bg-slate-900 hover:bg-slate-800 
                                text-slate-50 absolute transform top-1/2 -translate-y-1/2 right-1  w-9 h-9  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                                type="submit"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="w-6 h-6"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                        </form>
                    </div>
                    <div
                        className="nc-NcImage relative block lg:absolute lg:right-0 lg:bottom-0 mt-10 lg:mt-0 max-w-lg lg:max-w-[calc(50%-40px)]"
                        data-nc-id="NcImage"
                    >
                        <img
                            src="https://chisnghiax.com/ciseco/static/media/promo3.9002024e8eda57df7e8e.png"
                            className="object-cover w-full h-full"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
