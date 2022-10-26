import { AiOutlineMail } from 'react-icons/ai';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { ImFacebook } from 'react-icons/im';
import images from '~/assets/images';
import { CallCenterIcon, CreditCardIcon, RefundIcon, RocketIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Logo from '~/components/Logo';
function Footer() {
    return (
        <footer className="footer-wrapper pb-20 lg:pb-0">
            <div className="border-t border-b border-slate-200 py-10 lg:py-20">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="col-span-1">
                            <h4 className="text-lg font-bold mb-8">Loại</h4>
                            <ul className="text-base font-normal space-y-4">
                                <li>
                                    <a href="/">Giày thể thao</a>
                                </li>
                                <li>
                                    <a href="/">Trang phục thể thao</a>
                                </li>
                                <li>
                                    <a href="/">Sandals</a>
                                </li>
                                <li>
                                    <a href="/">Quần jean</a>
                                </li>
                                <li>
                                    <a href="/">Quần short</a>
                                </li>
                                <li>
                                    <a href="/">Áo phông</a>
                                </li>
                                <li>
                                    <a href="/">Đồ bơi</a>
                                </li>
                                <li>
                                    <a href="/">Phụ kiện</a>
                                </li>
                                <li>
                                    <a href="/">Đồng hồ</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-1 space-y-8">
                            <div>
                                <h4 className="text-lg font-bold mb-8">Khám phá</h4>
                                <ul className="text-base font-normal space-y-4">
                                    <li>
                                        <a href="/">Hệ thống thiết kế</a>
                                    </li>
                                    <li>
                                        <a href="/">Bảng giá</a>
                                    </li>
                                    <li>
                                        <a href="/">Bảo mật</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold mb-8">Về chúng tôi</h4>
                                <ul className="text-base font-normal space-y-4">
                                    <li>
                                        <a href="/">Giới thiệu công ty</a>
                                    </li>
                                    <li>
                                        <a href="/">Đội ngũ</a>
                                    </li>
                                    <li>
                                        <a href="/">Nghề nghiệp</a>
                                    </li>
                                    <li>
                                        <a href="/">Tin tức</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <h4 className="text-lg font-bold mb-8">Giữ liên lạc</h4>
                            <div className="relative flex md:flex-col md:items-start lg:items-center lg:flex-row">
                                <div
                                    className="absolute top-1/2 -translate-y-1/2 left-4  p-1 md:top-6 md:left-4
                                hover:bg-slate-100 hover:transition-all hover:rounded-full hover:cursor-pointer "
                                >
                                    <AiOutlineMail className="text-xl" />
                                </div>
                                <input
                                    className="!pl-14 input input-search rounded-l-lg md:rounded-lg"
                                    type="text"
                                    placeholder="Nhập email của bạn"
                                />
                                <h6 className="text-base py-3 px-4 rounded-r-lg md:rounded-lg md:mt-4 lg:mt-0 bg-slate-200">
                                    OK
                                </h6>
                            </div>
                            <p className="text-slate-600 text-xs mt-4">
                                Đăng ký nhận bản tin của chúng tôi để nhận các ưu đãi giảm giá sớm, cập nhật và các sản
                                phẩm mới thông tin.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="py-10 lg:py-20 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-x-4 md:gap-y-10 lg:gap-y-20">
                    <div className="col-span-1">
                        <div className="flex lg:items-center justify-between md:items-start space-x-2">
                            <div className="flex-1 flex justify-center">
                                <RocketIcon width={40} height={40} className={'fill-pink-700'} />
                            </div>
                            <div className="space-y-2">
                                <h5 className="text-base font-semibold">Giao hàng nhanh chóng và miễn phí</h5>
                                <h6 className="text-xs font-normal">
                                    Giao hàng miễn phí cho tất cả các đơn đặt hàng trên 200.000VND
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex lg:items-center justify-between md:items-start space-x-2">
                            <div className="flex-1 flex justify-center">
                                <RefundIcon width={40} height={40} className={'fill-pink-700'} />
                            </div>
                            <div className="space-y-2">
                                <h5 className="text-base font-semibold">Đảm bảo hoàn tiền</h5>
                                <h6 className="text-xs font-normal">Chúng tôi hoàn trả lại tiền trong vòng 30 ngày</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex lg:items-center justify-between md:items-start space-x-2">
                            <div className="flex-1 flex justify-center">
                                <CallCenterIcon width={40} height={40} className={'fill-pink-700'} />
                            </div>
                            <div className="space-y-2">
                                <h5 className="text-base font-semibold">Hỗ trợ khách hàng 24/7</h5>
                                <h6 className="text-xs font-normal">Hỗ trợ khách hàng 24/7 thân thiện</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex lg:items-center justify-between md:items-start space-x-2">
                            <div className="flex-1 flex justify-center">
                                <CreditCardIcon width={40} height={40} className={'fill-pink-700'} />
                            </div>
                            <div className="space-y-2">
                                <h5 className="text-base font-semibold">Thanh toán trực tuyến an toàn</h5>
                                <h6 className="text-xs font-normal">Chúng tôi có chứng chỉ SSL / Secure</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 md:col-span-4 border-t border-slate-200 pt-10 lg:pt-20">
                        <div className="flex flex-col md:flex-row justify-between space-y-4">
                            <div className="w-full">
                                <div className="logo w-[40%]">
                                    <Logo />
                                </div>
                                <ul className="flex flex-wrap justify-center md:justify-start mt-6 text-sm text-gray-600 space-x-4 leading-6">
                                    <li>Cửa hàng</li>
                                    <li>Tiếp thị liên kết</li>
                                    <li>Hỗ trợ</li>
                                    <li>Bảo mật</li>
                                    <li>Điều khoản sử dụng</li>
                                </ul>
                                <p className="mt-8 text-center md:text-start text-xs text-gray-600">
                                    © Đã đăng ký Bản quyền. Thực hiện bởi 5Star Team
                                </p>
                            </div>
                            <div className="flex flex-col md:items-end items-center space-y-4">
                                <div className="flex space-x-4">
                                    <div className="p-2 rounded-lg bg-slate-400 hover:bg-slate-700 transition-all cursor-pointer">
                                        <ImFacebook className="fill-white text-xl" />
                                    </div>
                                    <div className="p-2 rounded-lg bg-slate-400 hover:bg-slate-700 transition-all cursor-pointer">
                                        <BsInstagram className="fill-white text-xl" />
                                    </div>
                                    <div className="p-2 rounded-lg bg-slate-400 hover:bg-slate-700 transition-all cursor-pointer">
                                        <BsTwitter className="fill-white text-xl" />
                                    </div>
                                </div>
                                <div className="w-3/5">
                                    <Image src={images.cards} alt="cards" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
