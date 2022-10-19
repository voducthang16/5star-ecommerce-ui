import { BsChevronRight, BsClock, BsEnvelope, BsGeoAlt, BsTelephone } from 'react-icons/bs';

function Contact() {
    return (
        <div className="mb-[20px]">
            <section className="px-[15px] pt-[30px]">
                <div className="w-full md:flex md:mx-[-6px]">
                    <div className="p-[20px] md:w-[calc(100%/2)] mb-[30px] text-center border-solid border-[1px] border-[rgba(0,0,0,.085)] md:mx-[6px]">
                        <BsGeoAlt className="mx-auto mb-[24px] text-[#FE6963]" />
                        <h2 className="mb-[8px] text-[17px] font-medium">Địa chỉ cửa hàng chính</h2>
                        <p className="mb-[16px] text-[14px] text-[#7d879c]">123 Phạm Văn Đồng, Thủ Đức, Hồ Chí Minh</p>
                        <div className="flex justify-center items-center">
                            <p className="text-[14px] text-[#fe696a]">Bấm để xem bản đồ</p>
                            <BsChevronRight className="ml-[6px] w-[18px] h-[18px] text-[#FE6963]" />
                            <i></i>
                        </div>
                    </div>

                    <div className="p-[20px] md:w-[calc(100%/2)] mb-[30px] text-center border-solid border-[1px] border-[rgba(0,0,0,.085)] md:mx-[6px]">
                        <BsClock className="mx-auto mb-[24px] text-[#FE6963]" />
                        <h2 className="mb-[8px] text-[17px] font-medium">Giờ làm việc</h2>
                        <ul>
                            <li className="mb-[6px] text-[14px] text-[#7d879c]">Thứ hai - Thứ 6: 10AM - 10PM</li>
                            <li className="mb-[6px] text-[14px] text-[#7d879c]">Thứ 7: 11AM - 5PM</li>
                        </ul>
                    </div>

                    <div className="p-[20px] md:w-[calc(100%/2)] mb-[30px] text-center border-solid border-[1px] border-[rgba(0,0,0,.085)] md:mx-[6px]">
                        <BsTelephone className="mx-auto mb-[24px] text-[#FE6963]" />
                        <h2 className="mb-[8px] text-[17px] font-medium">Số điện thoại</h2>
                        <ul>
                            <li className="mb-[6px] text-[14px] text-[#7d879c]">Hỗ trợ: 098964553135</li>
                            <li className="mb-[6px] text-[14px] text-[#7d879c]">Kỹ thuật: 09616256486</li>
                        </ul>
                    </div>

                    <div className="p-[20px] md:w-[calc(100%/2)] mb-[30px] text-center border-solid border-[1px] border-[rgba(0,0,0,.085)] md:mx-[6px]">
                        <BsEnvelope className="mx-auto mb-[24px] text-[#FE6963]" />
                        <h2 className="mb-[8px] text-[17px] font-medium">Địa chỉ email</h2>
                        <ul>
                            <li className="mb-[6px] text-[14px] text-[#7d879c]">Hỗ trợ: customer@example.com</li>
                            <li className="mb-[6px] text-[14px] text-[#7d879c]">Kỹ thuật: support@example.com</li>
                        </ul>
                    </div>
                </div>

                <div className="md:mx-[-15px] py-[15px] pt-[24px] md:mt-[24px] md:mb-[48px]">
                    <h2 className="mb-[16px] text-[24px] md:text-[28px] font-medium text-center">
                        Cửa hàng đại lý đối tác
                    </h2>
                    <div className="md:flex">
                        <div className="pt-[24px] md:px-[15px]">
                            <img
                                className="rounded-[6px]"
                                src="https://cartzilla.createx.studio/img/contacts/orlando.jpg"
                                alt=""
                            />
                            <div className="p-[20px] pb-[0] shadow-slate-800">
                                <h6 className="mb-[12px] text-[18px] font-medium">Phú Nhuận, Hồ Chí Minh</h6>
                                <ul>
                                    <li className="mb-[12px] pb-[16px] flex text-[14px] border-b border-solid border-[#e3e9ef]">
                                        <BsGeoAlt className="text-[#FE6963] text-[20px]" />
                                        <div className="pl-[16px]">
                                            <span>Tìm chúng tôi ở</span>
                                            <p>312 Nguyễn Kiệm</p>
                                        </div>
                                    </li>
                                    <li className="mb-[12px] pb-[16px] flex text-[14px] border-b border-solid border-[#e3e9ef]">
                                        <BsTelephone className="text-[#FE6963] text-[20px]" />
                                        <div className="pl-[16px]">
                                            <span>Số điện thoại</span>
                                            <p>0998153153</p>
                                        </div>
                                    </li>
                                    <li className="mb-[12px] pb-[16px] flex text-[14px] border-b border-solid border-[#e3e9ef ]">
                                        <BsTelephone className="text-[#FE6963] text-[20px]" />
                                        <div className="pl-[16px]">
                                            <span>Liên hệ</span>
                                            <p>orlando@example.com</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="pt-[24px] md:px-[15px]">
                            <img
                                className="rounded-[6px]"
                                src="https://cartzilla.createx.studio/img/contacts/orlando.jpg"
                                alt=""
                            />
                            <div className="p-[20px] pb-[0] shadow-slate-800">
                                <h6 className="mb-[12px] text-[18px] font-medium">Phú Nhuận, Hồ Chí Minh</h6>
                                <ul>
                                    <li className="mb-[12px] pb-[16px] flex text-[14px] border-b border-solid border-[#e3e9ef]">
                                        <BsGeoAlt className="text-[#FE6963] text-[20px]" />
                                        <div className="pl-[16px]">
                                            <span>Tìm chúng tôi ở</span>
                                            <p>312 Nguyễn Kiệm</p>
                                        </div>
                                    </li>
                                    <li className="mb-[12px] pb-[16px] flex text-[14px] border-b border-solid border-[#e3e9ef]">
                                        <BsTelephone className="text-[#FE6963] text-[20px]" />
                                        <div className="pl-[16px]">
                                            <span>Số điện thoại</span>
                                            <p>0998153153</p>
                                        </div>
                                    </li>
                                    <li className="mb-[12px] pb-[16px] flex text-[14px] border-b border-solid border-[#e3e9ef ]">
                                        <BsTelephone className="text-[#FE6963] text-[20px]" />
                                        <div className="pl-[16px]">
                                            <span>Liên hệ</span>
                                            <p>orlando@example.com</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="pt-[24px] md:px-[15px]">
                            <img
                                className="rounded-[6px]"
                                src="https://cartzilla.createx.studio/img/contacts/orlando.jpg"
                                alt=""
                            />
                            <div className="p-[20px]  shadow-slate-800">
                                <h6 className="mb-[12px] text-[18px] font-medium">Phú Nhuận, Hồ Chí Minh</h6>
                                <ul>
                                    <li className="mb-[12px] pb-[16px] flex text-[14px] border-b border-solid border-[#e3e9ef]">
                                        <BsGeoAlt className="text-[#FE6963] text-[20px]" />
                                        <div className="pl-[16px]">
                                            <span>Tìm chúng tôi ở</span>
                                            <p>312 Nguyễn Kiệm</p>
                                        </div>
                                    </li>
                                    <li className="mb-[12px] pb-[16px] flex text-[14px] border-b border-solid border-[#e3e9ef]">
                                        <BsTelephone className="text-[#FE6963] text-[20px]" />
                                        <div className="pl-[16px]">
                                            <span>Số điện thoại</span>
                                            <p>0998153153</p>
                                        </div>
                                    </li>
                                    <li className="mb-[12px] pb-[16px] flex text-[14px] border-b border-solid border-[#e3e9ef ]">
                                        <BsTelephone className="text-[#FE6963] text-[20px]" />
                                        <div className="pl-[16px]">
                                            <span>Liên hệ</span>
                                            <p>orlando@example.com</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="lg:flex justify-between">
                <section className="lg:w-[50%]">
                    <div className="w-full h-full">
                        <iframe
                            className="h-[400px] md:h-[288px] lg:h-full"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4435923675846!2d106.6256397144684!3d10.85382636072901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bee0b0ef9e5%3A0x5b4da59e47aa97a8!2zQ8O0bmcgVmnDqm4gUGjhuqduIE3hu4FtIFF1YW5nIFRydW5n!5e0!3m2!1svi!2s!4v1665586658015!5m2!1svi!2s"
                            width="100%"
                            allowFullScreen
                            style={{ border: 0 }}
                            loading="lazy"
                        ></iframe>
                    </div>
                </section>

                <section className="px-[15px] pt-[48px] lg:pt-[15px] lg:w-[50%] lg:px-[24px] lg:py-[48px] lg:border-solid lg:border-[1px] lg:border-[rgba(0,0,0,.085)]">
                    <h2 className="mb-[24px] text-[24px] font-medium">Đóng góp ý kiến</h2>
                    <div>
                        <div className="md:flex justify-between">
                            <div className="md:w-[50%]">
                                <div className="mb-[16px]">
                                    <label
                                        className="font-medium block mb-[14px] md:text-[18px] text-[14px] text-[#07142e]"
                                        htmlFor=""
                                    >
                                        Họ và tên <span className="text-[#f34770]">*</span>
                                    </label>
                                    <input
                                        className="relative md:text-[18px] text-[14px] text-[#85888a] w-full md:py-[15px] py-[14px] px-[16px] border-solid border-[1px] border-[rgba(0,0,0,.085)] bg-[#f8f9fa] outline-none focus:text-[#07142e] focus-visible:border-[#e59700]"
                                        type="text"
                                        placeholder="Nguyễn Văn A"
                                    />
                                </div>
                                <div className="mb-[16px]">
                                    <label
                                        className="font-medium block mb-[14px] md:text-[18px] text-[14px] text-[#07142e]"
                                        htmlFor=""
                                    >
                                        Dịa chỉ email <span className="text-[#f34770]">*</span>
                                    </label>
                                    <input
                                        className="relative md:text-[18px] text-[14px] text-[#85888a] w-full md:py-[15px] py-[14px] px-[16px] border-solid border-[1px] border-[rgba(0,0,0,.085)] bg-[#f8f9fa] outline-none focus:text-[#07142e] focus-visible:border-[#e59700]"
                                        type="email"
                                        placeholder="contact@gmail.com"
                                    />
                                </div>
                                <div className="mb-[16px]">
                                    <label
                                        className="font-medium block mb-[14px] md:text-[18px] text-[14px] text-[#07142e]"
                                        htmlFor=""
                                    >
                                        Số điện thoại <span className="text-[#f34770]">*</span>
                                    </label>
                                    <input
                                        className="relative md:text-[18px] text-[14px] text-[#85888a] w-full md:py-[15px] py-[14px] px-[16px] border-solid border-[1px] border-[rgba(0,0,0,.085)] bg-[#f8f9fa] outline-none focus:text-[#07142e] focus-visible:border-[#e59700]"
                                        type="text"
                                        placeholder="+1 (212) 00 000 000"
                                    />
                                </div>
                            </div>
                            <div className="md:w-[50%] md:ml-[20px]">
                                <div className="mb-[16px]">
                                    <label
                                        className="font-medium block mb-[14px] md:text-[18px] text-[14px] text-[#07142e]"
                                        htmlFor=""
                                    >
                                        Tin nhắn
                                    </label>
                                    <textarea
                                        className="w-full h-[158px] md:h-[300px] border-solid border-[1px] border-[rgba(0,0,0,.085)] text-[14px] p-[16px] bg-[#f8f9fa]"
                                        id="cf-message"
                                        placeholder="Nội dung tin nhắn"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <button className="w-[148px] mx-0 md:py-[16px] py-[14px] px-[28px] md:text-[16px] text-[12px] uppercase text-white font-medium bg-[#fe696a] border-none rounded-[6px] cursor-pointer hover:bg-[#2a5aa6]">
                            Gửi
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Contact;
