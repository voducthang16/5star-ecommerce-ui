import { BsChevronRight, BsClock, BsEnvelope, BsGeoAlt, BsTelephone } from 'react-icons/bs';

function Contact() {
    return (
        <div className="mb-[20px]">
            <section className="px-[15px] pt-[30px]">
                <div className="w-full md:flex md:mx-[-6px]">
                    <div className="p-[20px] md:w-[calc(100%/2)] mb-[30px] text-center border-solid border-[1px] border-[rgba(0,0,0,.085)] md:mx-[6px]">
                        <BsGeoAlt className="mx-auto mb-[24px] text-[#FE6963]" />
                        <h2 className="mb-[8px] text-[17px] font-medium">Main store address</h2>
                        <p className="mb-[16px] text-[14px] text-[#7d879c]">
                            396 Lillian Blvd, Holbrook, NY 11741, USA
                        </p>
                        <div className="flex justify-center items-center">
                            <p className="text-[14px] text-[#fe696a]">Click to see map</p>
                            <BsChevronRight className="ml-[6px] w-[18px] h-[18px] text-[#FE6963]" />
                            <i></i>
                        </div>
                    </div>

                    <div className="p-[20px] md:w-[calc(100%/2)] mb-[30px] text-center border-solid border-[1px] border-[rgba(0,0,0,.085)] md:mx-[6px]">
                        <BsClock className="mx-auto mb-[24px] text-[#FE6963]" />
                        <h2 className="mb-[8px] text-[17px] font-medium">Working hours</h2>
                        <ul>
                            <li className="mb-[6px] text-[14px] text-[#7d879c]">Mon - Fri: 10AM - 7PM</li>
                            <li className="mb-[6px] text-[14px] text-[#7d879c]">Sta: 11AM - 5PM</li>
                        </ul>
                    </div>

                    <div className="p-[20px] md:w-[calc(100%/2)] mb-[30px] text-center border-solid border-[1px] border-[rgba(0,0,0,.085)] md:mx-[6px]">
                        <BsTelephone className="mx-auto mb-[24px] text-[#FE6963]" />
                        <h2 className="mb-[8px] text-[17px] font-medium">Phone numbers</h2>
                        <ul>
                            <li className="mb-[6px] text-[14px] text-[#7d879c]">For customers: +1 (080) 44 357 260</li>
                            <li className="mb-[6px] text-[14px] text-[#7d879c]">Tech support: +1 00 33 169 7720</li>
                        </ul>
                    </div>

                    <div className="p-[20px] md:w-[calc(100%/2)] mb-[30px] text-center border-solid border-[1px] border-[rgba(0,0,0,.085)] md:mx-[6px]">
                        <BsEnvelope className="mx-auto mb-[24px] text-[#FE6963]" />
                        <h2 className="mb-[8px] text-[17px] font-medium">Email addresses</h2>
                        <ul>
                            <li className="mb-[6px] text-[14px] text-[#7d879c]">For customers: customer@example.com</li>
                            <li className="mb-[6px] text-[14px] text-[#7d879c]">Tech support: support@example.com</li>
                        </ul>
                    </div>
                </div>

                <div className="md:mx-[-15px] py-[15px] pt-[24px] md:mt-[24px] md:mb-[48px]">
                    <h2 className="mb-[16px] text-[24px] md:text-[28px] font-medium text-center">
                        Partner outlet stores
                    </h2>
                    <div className="md:flex justify-center">
                        <div className="pt-[24px] md:px-[15px]">
                            <img
                                className="rounded-[6px]"
                                src="https://cartzilla.createx.studio/img/contacts/orlando.jpg"
                                alt=""
                            />
                            <div className="p-[20px] pb-[0] shadow-slate-800">
                                <h6 className="mb-[12px] text-[18px] font-medium">Orlando, USA</h6>
                                <ul>
                                    <li className="mb-[12px] pb-[16px] flex text-[14px] border-b border-solid border-[#e3e9ef]">
                                        <BsGeoAlt className="text-[#FE6963] text-[20px]" />
                                        <div className="pl-[16px]">
                                            <span>Find us</span>
                                            <p>514 S. Magnolia St. Orlando, FL 32806, USA</p>
                                        </div>
                                    </li>
                                    <li className="mb-[12px] pb-[16px] flex text-[14px] border-b border-solid border-[#e3e9ef]">
                                        <BsTelephone className="text-[#FE6963] text-[20px]" />
                                        <div className="pl-[16px]">
                                            <span>Call us</span>
                                            <p>+1 (786) 322 560 40</p>
                                        </div>
                                    </li>
                                    <li className="mb-[12px] pb-[16px] flex text-[14px] border-b border-solid border-[#e3e9ef ]">
                                        <BsTelephone className="text-[#FE6963] text-[20px]" />
                                        <div className="pl-[16px]">
                                            <span>Write us</span>
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
                                <h6 className="mb-[12px] text-[18px] font-medium">Orlando, USA</h6>
                                <ul>
                                    <li className="mb-[12px] pb-[16px] flex text-[14px] border-b border-solid border-[#e3e9ef]">
                                        <BsGeoAlt className="text-[#FE6963] text-[20px]" />
                                        <div className="pl-[16px]">
                                            <span>Find us</span>
                                            <p>514 S. Magnolia St. Orlando, FL 32806, USA</p>
                                        </div>
                                    </li>
                                    <li className="mb-[12px] pb-[16px] flex text-[14px] border-b border-solid border-[#e3e9ef]">
                                        <BsTelephone className="text-[#FE6963] text-[20px]" />
                                        <div className="pl-[16px]">
                                            <span>Call us</span>
                                            <p>+1 (786) 322 560 40</p>
                                        </div>
                                    </li>
                                    <li className="mb-[12px] pb-[16px] flex text-[14px] border-b border-solid border-[#e3e9ef ]">
                                        <BsTelephone className="text-[#FE6963] text-[20px]" />
                                        <div className="pl-[16px]">
                                            <span>Write us</span>
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
                                <h6 className="mb-[12px] text-[18px] font-medium">Orlando, USA</h6>
                                <ul>
                                    <li className="mb-[12px] pb-[16px] flex text-[14px] border-b border-solid border-[#e3e9ef]">
                                        <BsGeoAlt className="text-[#FE6963] text-[20px]" />
                                        <div className="pl-[16px]">
                                            <span>Find us</span>
                                            <p>514 S. Magnolia St. Orlando, FL 32806, USA</p>
                                        </div>
                                    </li>
                                    <li className="mb-[12px] pb-[16px] flex text-[14px] border-b border-solid border-[#e3e9ef]">
                                        <BsTelephone className="text-[#FE6963] text-[20px]" />
                                        <div className="pl-[16px]">
                                            <span>Call us</span>
                                            <p>+1 (786) 322 560 40</p>
                                        </div>
                                    </li>
                                    <li className="mb-[12px] pb-[16px] flex text-[14px] border-b border-solid border-[#e3e9ef ]">
                                        <BsTelephone className="text-[#FE6963] text-[20px]" />
                                        <div className="pl-[16px]">
                                            <span>Write us</span>
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
                    <h2 className="mb-[24px] text-[24px] font-medium">Drop us a line</h2>
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
