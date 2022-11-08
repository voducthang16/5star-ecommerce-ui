import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    ChakraProvider,
} from '@chakra-ui/react';
import {
    BsArrowRight,
    BsChevronDoubleLeft,
    BsChevronDoubleRight,
    BsClock,
    BsHandThumbsUp,
    BsPerson,
    BsSearch,
} from 'react-icons/bs';

function Blog() {
    return (
        <section className="py-[32px] md:py-[36px] lg:py-[38px] xl:py-[44px]">
            <div className="px-[20px] md:px-[54px] lg:px-[78px] xl:px-[108px] 2xl:px-[124px]">
                <div className="lg:grid lg:gap-6 lg:grid-cols-5 xl:grid-cols-9 2xl:grid-cols-4">
                    {/* blog item */}
                    <div className="lg:order-1 lg:col-span-3 xl:col-span-6 2xl:col-span-3">
                        {/* post item */}
                        <div className="md:grid md:grid-cols-2 2xl:grid-cols-3 md:gap-6">
                            <div className="mt-[24px] px-[12px] md:mt-0">
                                <div className="mx-[-12px] border-[1px] border-solid border-[#ececec] rounded-[10px]">
                                    <div className="mb-[15px]">
                                        <a href="#">
                                            <img
                                                className="rounded-t-[10px]"
                                                src="https://themes.pixelstrap.com/fastkart/assets/images/inner-page/blog/1.jpg"
                                                alt="img-blog"
                                            />
                                        </a>
                                    </div>
                                    <div className="px-[20px] pb-[20px]">
                                        <div className="flex align-center gap-[15px] text-[13px] uppercase">
                                            <span className="flex items-center">
                                                <BsClock className="mr-1 inline w-4 h-4" />
                                                <span>25 Feg, 2022</span>
                                            </span>
                                            <span className="flex items-center">
                                                <BsPerson className="mr-1 inline w-4 h-4" />
                                                <span>James M.Martin</span>
                                            </span>
                                        </div>
                                        <a href="#">
                                            <h3 className="mt-[10px] mb-[6px] text-[16px] font-[600] leading-6">
                                                How to freeze fresh vegetables while preserving their best qualities.
                                            </h3>
                                        </a>
                                        <button className="mt-[8px] px-[22px] py-[10px] rounded-[5px] text-[14px] bg-[#e6f6f3] text-[#0da487] hover:bg-[#0DA487] hover:text-[#fff]">
                                            Read more
                                            <BsArrowRight className="inline ml-2" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-[24px] px-[12px] md:mt-0">
                                <div className="mx-[-12px] border-[1px] border-solid border-[#ececec] rounded-[10px]">
                                    <div className="mb-[15px]">
                                        <a href="">
                                            <img
                                                className="rounded-t-[10px]"
                                                src="https://themes.pixelstrap.com/fastkart/assets/images/inner-page/blog/2.jpg"
                                                alt="img-blog"
                                            />
                                        </a>
                                    </div>
                                    <div className="px-[20px] pb-[20px]">
                                        <div className="flex align-center gap-[15px] text-[13px] uppercase">
                                            <span className="flex items-center">
                                                <BsClock className="mr-1 inline w-4 h-4" />
                                                <span>25 Feg, 2022</span>
                                            </span>
                                            <span className="flex items-center">
                                                <BsPerson className="mr-1 inline w-4 h-4" />
                                                <span>James M.Martin</span>
                                            </span>
                                        </div>
                                        <a href="#">
                                            <h3 className="mt-[10px] mb-[6px] text-[16px] font-[600] leading-6">
                                                How to freeze fresh vegetables while preserving their best qualities.
                                            </h3>
                                        </a>
                                        <button className="mt-[8px] px-[22px] py-[10px] rounded-[5px] text-[14px] bg-[#e6f6f3] text-[#0da487] hover:bg-[#0DA487] hover:text-[#fff]">
                                            Read more
                                            <BsArrowRight className="inline ml-2" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-[24px] px-[12px] md:mt-0">
                                <div className="mx-[-12px] border-[1px] border-solid border-[#ececec] rounded-[10px]">
                                    <div className="mb-[15px]">
                                        <a href="">
                                            <img
                                                className="rounded-t-[10px]"
                                                src="https://themes.pixelstrap.com/fastkart/assets/images/inner-page/blog/3.jpg"
                                                alt="img-blog"
                                            />
                                        </a>
                                    </div>
                                    <div className="px-[20px] pb-[20px]">
                                        <div className="flex align-center gap-[15px] text-[13px] uppercase">
                                            <span className="flex items-center">
                                                <BsClock className="mr-1 inline w-4 h-4" />
                                                <span>25 Feg, 2022</span>
                                            </span>
                                            <span className="flex items-center">
                                                <BsPerson className="mr-1 inline w-4 h-4" />
                                                <span>James M.Martin</span>
                                            </span>
                                        </div>
                                        <a href="#">
                                            <h3 className="mt-[10px] mb-[6px] text-[16px] font-[600] leading-6">
                                                How to freeze fresh vegetables while preserving their best qualities.
                                            </h3>
                                        </a>
                                        <button className="mt-[8px] px-[22px] py-[10px] rounded-[5px] text-[14px] bg-[#e6f6f3] text-[#0da487] hover:bg-[#0DA487] hover:text-[#fff]">
                                            Read more
                                            <BsArrowRight className="inline ml-2" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-[24px] px-[12px] md:mt-0">
                                <div className="mx-[-12px] border-[1px] border-solid border-[#ececec] rounded-[10px]">
                                    <div className="mb-[15px]">
                                        <a href="">
                                            <img
                                                className="rounded-t-[10px]"
                                                src="https://themes.pixelstrap.com/fastkart/assets/images/inner-page/blog/4.jpg"
                                                alt="img-blog"
                                            />
                                        </a>
                                    </div>
                                    <div className="px-[20px] pb-[20px]">
                                        <div className="flex align-center gap-[15px] text-[13px] uppercase">
                                            <span className="flex items-center">
                                                <BsClock className="mr-1 inline w-4 h-4" />
                                                <span>25 Feg, 2022</span>
                                            </span>
                                            <span className="flex items-center">
                                                <BsPerson className="mr-1 inline w-4 h-4" />
                                                <span>James M.Martin</span>
                                            </span>
                                        </div>
                                        <a href="#">
                                            <h3 className="mt-[10px] mb-[6px] text-[16px] font-[600] leading-6">
                                                How to freeze fresh vegetables while preserving their best qualities.
                                            </h3>
                                        </a>
                                        <button className="mt-[8px] px-[22px] py-[10px] rounded-[5px] text-[14px] bg-[#e6f6f3] text-[#0da487] hover:bg-[#0DA487] hover:text-[#fff]">
                                            Read more
                                            <BsArrowRight className="inline ml-2" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-[24px] px-[12px] md:mt-0">
                                <div className="mx-[-12px] border-[1px] border-solid border-[#ececec] rounded-[10px]">
                                    <div className="mb-[15px]">
                                        <a href="">
                                            <img
                                                className="rounded-t-[10px]"
                                                src="https://themes.pixelstrap.com/fastkart/assets/images/inner-page/blog/1.jpg"
                                                alt="img-blog"
                                            />
                                        </a>
                                    </div>
                                    <div className="px-[20px] pb-[20px]">
                                        <div className="flex align-center gap-[15px] text-[13px] uppercase">
                                            <span className="flex items-center">
                                                <BsClock className="mr-1 inline w-4 h-4" />
                                                <span>25 Feg, 2022</span>
                                            </span>
                                            <span className="flex items-center">
                                                <BsPerson className="mr-1 inline w-4 h-4" />
                                                <span>James M.Martin</span>
                                            </span>
                                        </div>
                                        <a href="#">
                                            <h3 className="mt-[10px] mb-[6px] text-[16px] font-[600] leading-6">
                                                How to freeze fresh vegetables while preserving their best qualities.
                                            </h3>
                                        </a>
                                        <button className="mt-[8px] px-[22px] py-[10px] rounded-[5px] text-[14px] bg-[#e6f6f3] text-[#0da487] hover:bg-[#0DA487] hover:text-[#fff]">
                                            Read more
                                            <BsArrowRight className="inline ml-2" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-[24px] px-[12px] md:mt-0">
                                <div className="mx-[-12px] border-[1px] border-solid border-[#ececec] rounded-[10px]">
                                    <div className="mb-[15px]">
                                        <a href="">
                                            <img
                                                className="rounded-t-[10px]"
                                                src="https://themes.pixelstrap.com/fastkart/assets/images/inner-page/blog/2.jpg"
                                                alt="img-blog"
                                            />
                                        </a>
                                    </div>
                                    <div className="px-[20px] pb-[20px]">
                                        <div className="flex align-center gap-[15px] text-[13px] uppercase">
                                            <span className="flex items-center">
                                                <BsClock className="mr-1 inline w-4 h-4" />
                                                <span>25 Feg, 2022</span>
                                            </span>
                                            <span className="flex items-center">
                                                <BsPerson className="mr-1 inline w-4 h-4" />
                                                <span>James M.Martin</span>
                                            </span>
                                        </div>
                                        <a href="#">
                                            <h3 className="mt-[10px] mb-[6px] text-[16px] font-[600] leading-6">
                                                How to freeze fresh vegetables while preserving their best qualities.
                                            </h3>
                                        </a>
                                        <button className="mt-[8px] px-[22px] py-[10px] rounded-[5px] text-[14px] bg-[#e6f6f3] text-[#0da487] hover:bg-[#0DA487] hover:text-[#fff]">
                                            Read more
                                            <BsArrowRight className="inline ml-2" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-[24px] px-[12px] md:mt-0">
                                <div className="mx-[-12px] border-[1px] border-solid border-[#ececec] rounded-[10px]">
                                    <div className="mb-[15px]">
                                        <a href="">
                                            <img
                                                className="rounded-t-[10px]"
                                                src="https://themes.pixelstrap.com/fastkart/assets/images/inner-page/blog/3.jpg"
                                                alt="img-blog"
                                            />
                                        </a>
                                    </div>
                                    <div className="px-[20px] pb-[20px]">
                                        <div className="flex align-center gap-[15px] text-[13px] uppercase">
                                            <span className="flex items-center">
                                                <BsClock className="mr-1 inline w-4 h-4" />
                                                <span>25 Feg, 2022</span>
                                            </span>
                                            <span className="flex items-center">
                                                <BsPerson className="mr-1 inline w-4 h-4" />
                                                <span>James M.Martin</span>
                                            </span>
                                        </div>
                                        <a href="#">
                                            <h3 className="mt-[10px] mb-[6px] text-[16px] font-[600] leading-6">
                                                How to freeze fresh vegetables while preserving their best qualities.
                                            </h3>
                                        </a>
                                        <button className="mt-[8px] px-[22px] py-[10px] rounded-[5px] text-[14px] bg-[#e6f6f3] text-[#0da487] hover:bg-[#0DA487] hover:text-[#fff]">
                                            Read more
                                            <BsArrowRight className="inline ml-2" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-[24px] px-[12px] md:mt-0">
                                <div className="mx-[-12px] border-[1px] border-solid border-[#ececec] rounded-[10px]">
                                    <div className="mb-[15px]">
                                        <a href="">
                                            <img
                                                className="rounded-t-[10px]"
                                                src="https://themes.pixelstrap.com/fastkart/assets/images/inner-page/blog/4.jpg"
                                                alt="img-blog"
                                            />
                                        </a>
                                    </div>
                                    <div className="px-[20px] pb-[20px]">
                                        <div className="flex align-center gap-[15px] text-[13px] uppercase">
                                            <span className="flex items-center">
                                                <BsClock className="mr-1 inline w-4 h-4" />
                                                <span>25 Feg, 2022</span>
                                            </span>
                                            <span className="flex items-center">
                                                <BsPerson className="mr-1 inline w-4 h-4" />
                                                <span>James M.Martin</span>
                                            </span>
                                        </div>
                                        <a href="#">
                                            <h3 className="mt-[10px] mb-[6px] text-[16px] font-[600] leading-6">
                                                How to freeze fresh vegetables while preserving their best qualities.
                                            </h3>
                                        </a>
                                        <button className="mt-[8px] px-[22px] py-[10px] rounded-[5px] text-[14px] bg-[#e6f6f3] text-[#0da487] hover:bg-[#0DA487] hover:text-[#fff]">
                                            Read more
                                            <BsArrowRight className="inline ml-2" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-[24px] px-[12px] md:mt-0">
                                <div className="mx-[-12px] border-[1px] border-solid border-[#ececec] rounded-[10px]">
                                    <div className="mb-[15px]">
                                        <a href="">
                                            <img
                                                className="rounded-t-[10px]"
                                                src="https://themes.pixelstrap.com/fastkart/assets/images/inner-page/blog/1.jpg"
                                                alt="img-blog"
                                            />
                                        </a>
                                    </div>
                                    <div className="px-[20px] pb-[20px]">
                                        <div className="flex align-center gap-[15px] text-[13px] uppercase">
                                            <span className="flex items-center">
                                                <BsClock className="mr-1 inline w-4 h-4" />
                                                <span>25 Feg, 2022</span>
                                            </span>
                                            <span className="flex items-center">
                                                <BsPerson className="mr-1 inline w-4 h-4" />
                                                <span>James M.Martin</span>
                                            </span>
                                        </div>
                                        <a href="#">
                                            <h3 className="mt-[10px] mb-[6px] text-[16px] font-[600] leading-6">
                                                How to freeze fresh vegetables while preserving their best qualities.
                                            </h3>
                                        </a>
                                        <button className="mt-[8px] px-[22px] py-[10px] rounded-[5px] text-[14px] bg-[#e6f6f3] text-[#0da487] hover:bg-[#0DA487] hover:text-[#fff]">
                                            Read more
                                            <BsArrowRight className="inline ml-2" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-[24px] px-[12px] md:mt-0">
                                <div className="mx-[-12px] border-[1px] border-solid border-[#ececec] rounded-[10px]">
                                    <div className="mb-[15px]">
                                        <a href="">
                                            <img
                                                className="rounded-t-[10px]"
                                                src="https://themes.pixelstrap.com/fastkart/assets/images/inner-page/blog/2.jpg"
                                                alt="img-blog"
                                            />
                                        </a>
                                    </div>
                                    <div className="px-[20px] pb-[20px]">
                                        <div className="flex align-center gap-[15px] text-[13px] uppercase">
                                            <span className="flex items-center">
                                                <BsClock className="mr-1 inline w-4 h-4" />
                                                <span>25 Feg, 2022</span>
                                            </span>
                                            <span className="flex items-center">
                                                <BsPerson className="mr-1 inline w-4 h-4" />
                                                <span>James M.Martin</span>
                                            </span>
                                        </div>
                                        <a href="#">
                                            <h3 className="mt-[10px] mb-[6px] text-[16px] font-[600] leading-6">
                                                How to freeze fresh vegetables while preserving their best qualities.
                                            </h3>
                                        </a>
                                        <button className="mt-[8px] px-[22px] py-[10px] rounded-[5px] text-[14px] bg-[#e6f6f3] text-[#0da487] hover:bg-[#0DA487] hover:text-[#fff]">
                                            Read more
                                            <BsArrowRight className="inline ml-2" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-[24px] px-[12px] md:mt-0">
                                <div className="mx-[-12px] border-[1px] border-solid border-[#ececec] rounded-[10px]">
                                    <div className="mb-[15px]">
                                        <a href="">
                                            <img
                                                className="rounded-t-[10px]"
                                                src="https://themes.pixelstrap.com/fastkart/assets/images/inner-page/blog/3.jpg"
                                                alt="img-blog"
                                            />
                                        </a>
                                    </div>
                                    <div className="px-[20px] pb-[20px]">
                                        <div className="flex align-center gap-[15px] text-[13px] uppercase">
                                            <span className="flex items-center">
                                                <BsClock className="mr-1 inline w-4 h-4" />
                                                <span>25 Feg, 2022</span>
                                            </span>
                                            <span className="flex items-center">
                                                <BsPerson className="mr-1 inline w-4 h-4" />
                                                <span>James M.Martin</span>
                                            </span>
                                        </div>
                                        <a href="#">
                                            <h3 className="mt-[10px] mb-[6px] text-[16px] font-[600] leading-6">
                                                How to freeze fresh vegetables while preserving their best qualities.
                                            </h3>
                                        </a>
                                        <button className="mt-[8px] px-[22px] py-[10px] rounded-[5px] text-[14px] bg-[#e6f6f3] text-[#0da487] hover:bg-[#0DA487] hover:text-[#fff]">
                                            Read more
                                            <BsArrowRight className="inline ml-2" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-[24px] px-[12px] md:mt-0">
                                <div className="mx-[-12px] border-[1px] border-solid border-[#ececec] rounded-[10px]">
                                    <div className="mb-[15px]">
                                        <a href="">
                                            <img
                                                className="rounded-t-[10px]"
                                                src="https://themes.pixelstrap.com/fastkart/assets/images/inner-page/blog/4.jpg"
                                                alt="img-blog"
                                            />
                                        </a>
                                    </div>
                                    <div className="px-[20px] pb-[20px]">
                                        <div className="flex align-center gap-[15px] text-[13px] uppercase">
                                            <span className="flex items-center">
                                                <BsClock className="mr-1 inline w-4 h-4" />
                                                <span>25 Feg, 2022</span>
                                            </span>
                                            <span className="flex items-center">
                                                <BsPerson className="mr-1 inline w-4 h-4" />
                                                <span>James M.Martin</span>
                                            </span>
                                        </div>
                                        <a href="#">
                                            <h3 className="mt-[10px] mb-[6px] text-[16px] font-[600] leading-6">
                                                How to freeze fresh vegetables while preserving their best qualities.
                                            </h3>
                                        </a>
                                        <button className="mt-[8px] px-[22px] py-[10px] rounded-[5px] text-[14px] bg-[#e6f6f3] text-[#0da487] hover:bg-[#0DA487] hover:text-[#fff]">
                                            Read more
                                            <BsArrowRight className="inline ml-2" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* pagination */}
                        <nav className="mt-[22px]">
                            <ul className="flex justify-center items-center text-[14px]">
                                <li className="mr-2">
                                    <a href="#" className="px-[12px] py-[6px] rounded-[5px]">
                                        <BsChevronDoubleLeft className="w-4 h-4 mr-4" />
                                    </a>
                                </li>
                                <li className="mr-2">
                                    <a href="#" className="px-[12px] py-[6px] rounded-[5px] bg-[#0DA487] text-[#fff]">
                                        1
                                    </a>
                                </li>
                                <li className="mr-2">
                                    <a href="#" className="px-[12px] py-[6px] rounded-[5px]">
                                        2
                                    </a>
                                </li>
                                <li className="mr-2">
                                    <a href="#" className="px-[12px] py-[6px] rounded-[5px]">
                                        3
                                    </a>
                                </li>
                                <li className="mr-2">
                                    <a href="#" className="px-[12px] py-[6px] rounded-[5px]">
                                        <BsChevronDoubleRight className="w-4 h-4 ml-4" />
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {/* search and options */}
                    <div className="lg:col-span-2 xl:col-span-3 2xl:col-span-1">
                        {/* search and accordion */}
                        <div className="mt-[24px] lg:mt-0">
                            <div>
                                {/* search */}
                                <div className="py-[5px] w-full relative bg-[#f8f8f8] rounded-[5px]">
                                    <input
                                        className="w-full pl-[20px] pr-[68px] py-[8px] outline-none text-[14px] font-[600] bg-[#f8f8f8]"
                                        type="text"
                                        placeholder="Search..."
                                    />
                                    <div className="w-[2px] h-[20px] bg-[#ccc] absolute right-[54px] top-[25%]"></div>
                                    <BsSearch className="w-[14px] h-[20px] absolute right-[20px] top-[25%] text-[#000] hover:cursor-pointer" />
                                </div>
                            </div>
                        </div>

                        {/* Recent post */}
                        <ChakraProvider>
                            <div className="mt-[20px] bg-[#f8f8f8]">
                                <Accordion allowToggle>
                                    <AccordionItem className="p-[6px] md:p-[8px] lg:p-[9px] xl:p-[10px]">
                                        <h2 className="text-[16px] font-[700]">
                                            <AccordionButton className="hover:!bg-[transparent]">
                                                <Box flex="1" textAlign="left">
                                                    Recent post
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel>
                                            <div>
                                                <div className="min-h-[74px] pt-[16px] flex items-center">
                                                    <div className="w-[110px]">
                                                        <a className="w-full h-full" href="#">
                                                            <img
                                                                className="w-full h-full"
                                                                src="https://themes.pixelstrap.com/fastkart/assets/images/inner-page/blog/1.jpg"
                                                                alt=""
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="pl-[15px] w-full">
                                                        <a href="#">
                                                            <h5 className="text-[16px] font-[600]">
                                                                Green onion knife and salad placed
                                                            </h5>
                                                        </a>
                                                        <h6 className="mt-[8px] text-[13px] flex justify-between">
                                                            <span>25 Jan, 2022</span>
                                                            <BsHandThumbsUp className="w-[18px] h-[18px]" />
                                                        </h6>
                                                    </div>
                                                </div>

                                                <div className="min-h-[74px] pt-[16px] flex items-center">
                                                    <div className="w-[110px]">
                                                        <a className="w-full h-full" href="#">
                                                            <img
                                                                className="w-full h-full"
                                                                src="https://themes.pixelstrap.com/fastkart/assets/images/inner-page/blog/1.jpg"
                                                                alt=""
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="pl-[15px] w-full">
                                                        <a href="#">
                                                            <h5 className="text-[16px] font-[600]">
                                                                Green onion knife and salad placed
                                                            </h5>
                                                        </a>
                                                        <h6 className="mt-[8px] text-[13px] flex justify-between">
                                                            <span>25 Jan, 2022</span>
                                                            <BsHandThumbsUp className="w-[18px] h-[18px]" />
                                                        </h6>
                                                    </div>
                                                </div>

                                                <div className="min-h-[74px] pt-[16px] flex items-center">
                                                    <div className="w-[110px]">
                                                        <a className="w-full h-full" href="#">
                                                            <img
                                                                className="w-full h-full"
                                                                src="https://themes.pixelstrap.com/fastkart/assets/images/inner-page/blog/1.jpg"
                                                                alt=""
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="pl-[15px] w-full">
                                                        <a href="#">
                                                            <h5 className="text-[16px] font-[600]">
                                                                Green onion knife and salad placed
                                                            </h5>
                                                        </a>
                                                        <h6 className="mt-[8px] text-[13px] flex justify-between">
                                                            <span>25 Jan, 2022</span>
                                                            <BsHandThumbsUp className="w-[18px] h-[18px]" />
                                                        </h6>
                                                    </div>
                                                </div>

                                                <div className="min-h-[74px] pt-[16px] flex items-center">
                                                    <div className="w-[110px]">
                                                        <a className="w-full h-full" href="#">
                                                            <img
                                                                className="w-full h-full"
                                                                src="https://themes.pixelstrap.com/fastkart/assets/images/inner-page/blog/1.jpg"
                                                                alt=""
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="pl-[15px] w-full">
                                                        <a href="#">
                                                            <h5 className="text-[16px] font-[600]">
                                                                Green onion knife and salad placed
                                                            </h5>
                                                        </a>
                                                        <h6 className="mt-[8px] text-[13px] flex justify-between">
                                                            <span>25 Jan, 2022</span>
                                                            <BsHandThumbsUp className="w-[18px] h-[18px]" />
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </ChakraProvider>

                        {/* Category */}
                        <ChakraProvider>
                            <div className="mt-[20px] bg-[#f8f8f8]">
                                <Accordion allowToggle>
                                    <AccordionItem className="p-[6px] md:p-[8px] lg:p-[9px] xl:p-[10px]">
                                        <h2 className="text-[16px] font-[700]">
                                            <AccordionButton className="hover:!bg-[transparent]">
                                                <Box flex="1" textAlign="left">
                                                    Category
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel>
                                            <ul>
                                                <li className="my-4">
                                                    <a href="#">
                                                        <div className="flex justify-between">
                                                            <h5 className="text-[15px] text-[#4a5568] font-[600]">
                                                                Latest Recipes
                                                            </h5>
                                                            <span className="w-[24px] h-[24px] text-[#fff] text-[13px] text-center bg-[#0da487] leading-[24px] rounded-[50%]">
                                                                10
                                                            </span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="my-4">
                                                    <a href="#">
                                                        <div className="flex justify-between">
                                                            <h5 className="text-[15px] text-[#4a5568] font-[600]">
                                                                Latest Recipes
                                                            </h5>
                                                            <span className="w-[24px] h-[24px] text-[#fff] text-[13px] text-center bg-[#0da487] leading-[24px] rounded-[50%]">
                                                                10
                                                            </span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="my-4">
                                                    <a href="#">
                                                        <div className="flex justify-between">
                                                            <h5 className="text-[15px] text-[#4a5568] font-[600]">
                                                                Latest Recipes
                                                            </h5>
                                                            <span className="w-[24px] h-[24px] text-[#fff] text-[13px] text-center bg-[#0da487] leading-[24px] rounded-[50%]">
                                                                10
                                                            </span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="my-4">
                                                    <a href="#">
                                                        <div className="flex justify-between">
                                                            <h5 className="text-[15px] text-[#4a5568] font-[600]">
                                                                Latest Recipes
                                                            </h5>
                                                            <span className="w-[24px] h-[24px] text-[#fff] text-[13px] text-center bg-[#0da487] leading-[24px] rounded-[50%]">
                                                                12
                                                            </span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="my-4">
                                                    <a href="#">
                                                        <div className="flex justify-between">
                                                            <h5 className="text-[15px] text-[#4a5568] font-[600]">
                                                                Latest Recipes
                                                            </h5>
                                                            <span className="w-[24px] h-[24px] text-[#fff] text-[13px] text-center bg-[#0da487] leading-[24px] rounded-[50%]">
                                                                8
                                                            </span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="my-4">
                                                    <a href="#">
                                                        <div className="flex justify-between">
                                                            <h5 className="text-[15px] text-[#4a5568] font-[600]">
                                                                Latest Recipes
                                                            </h5>
                                                            <span className="w-[24px] h-[24px] text-[#fff] text-[13px] text-center bg-[#0da487] leading-[24px] rounded-[50%]">
                                                                6
                                                            </span>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </ChakraProvider>

                        {/* Product tags */}
                        <ChakraProvider>
                            <div className="mt-[20px] bg-[#f8f8f8]">
                                <Accordion allowToggle>
                                    <AccordionItem className="p-[6px] md:p-[8px] lg:p-[9px] xl:p-[10px]">
                                        <h2 className="text-[16px] font-[700]">
                                            <AccordionButton className="hover:!bg-[transparent]">
                                                <Box flex="1" textAlign="left">
                                                    Product tags
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel>
                                            <ul className="mt-2 flex flex-wrap gap-[10px]">
                                                <li className="px-[9px] py-[4px] inline-block bg-[#fff] rounded-[3px]">
                                                    <a href="#" className="text-[13px] text-[#4a5568] block">
                                                        Fruit Cutting
                                                    </a>
                                                </li>
                                                <li className="px-[9px] py-[4px] inline-block bg-[#fff] rounded-[3px]">
                                                    <a href="#" className="text-[13px] text-[#4a5568] block">
                                                        Meat
                                                    </a>
                                                </li>
                                                <li className="px-[9px] py-[4px] inline-block bg-[#fff] rounded-[3px]">
                                                    <a href="#" className="text-[13px] text-[#4a5568] block">
                                                        Orange
                                                    </a>
                                                </li>
                                                <li className="px-[9px] py-[4px] inline-block bg-[#fff] rounded-[3px]">
                                                    <a href="#" className="text-[13px] text-[#4a5568] block">
                                                        Cake
                                                    </a>
                                                </li>
                                                <li className="px-[9px] py-[4px] inline-block bg-[#fff] rounded-[3px]">
                                                    <a href="#" className="text-[13px] text-[#4a5568] block">
                                                        Pick Fruit
                                                    </a>
                                                </li>
                                                <li className="px-[9px] py-[4px] inline-block bg-[#fff] rounded-[3px]">
                                                    <a href="#" className="text-[13px] text-[#4a5568] block">
                                                        Bakery
                                                    </a>
                                                </li>
                                                <li className="px-[9px] py-[4px] inline-block bg-[#fff] rounded-[3px]">
                                                    <a href="#" className="text-[13px] text-[#4a5568] block">
                                                        Organix Food
                                                    </a>
                                                </li>
                                                <li className="px-[9px] py-[4px] inline-block bg-[#fff] rounded-[3px]">
                                                    <a href="#" className="text-[13px] text-[#4a5568] block">
                                                        Most Expensive Fruit
                                                    </a>
                                                </li>
                                            </ul>
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </ChakraProvider>

                        {/* Trending products */}
                        <ChakraProvider>
                            <div className="mt-[20px] bg-[#f8f8f8]">
                                <Accordion allowToggle>
                                    <AccordionItem className="p-[6px] md:p-[8px] lg:p-[9px] xl:p-[10px]">
                                        <h2 className="text-[16px] font-[700]">
                                            <AccordionButton className="hover:!bg-[transparent]">
                                                <Box flex="1" textAlign="left">
                                                    Rending products
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel>
                                            <div>
                                                <div className="py-4 min-h-[74px] pt-[16px] flex items-center">
                                                    <div className="w-[84px]">
                                                        <a className="w-full h-full" href="#">
                                                            <img
                                                                className="w-[70px] h-[70px]"
                                                                src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/23.png"
                                                                alt=""
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="pl-[15px] w-full">
                                                        <a href="#">
                                                            <h6 className="text-[13px] font-[600]">
                                                                Meatigo Premium Goat Curry
                                                            </h6>
                                                            <span className="block text-[14px]">450 G</span>
                                                            <h6 className="mt-[6px] text-[13px] text-[#0da487] font-[600]">
                                                                $ 70.00
                                                            </h6>
                                                        </a>
                                                    </div>
                                                </div>

                                                <div className="py-4 min-h-[74px] pt-[16px] flex items-center">
                                                    <div className="w-[84px]">
                                                        <a className="w-full h-full" href="#">
                                                            <img
                                                                className="w-[70px] h-[70px]"
                                                                src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/23.png"
                                                                alt=""
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="pl-[15px]">
                                                        <a href="#">
                                                            <h6 className="text-[13px] font-[600]">
                                                                Meatigo Premium Goat Curry
                                                            </h6>
                                                            <span className="block text-[14px]">450 G</span>
                                                            <h6 className="mt-[6px] text-[13px] text-[#0da487] font-[600]">
                                                                $ 70.00
                                                            </h6>
                                                        </a>
                                                    </div>
                                                </div>

                                                <div className="py-4 min-h-[74px] pt-[16px] flex items-center">
                                                    <div className="w-[84px]">
                                                        <a className="w-full h-full" href="#">
                                                            <img
                                                                className="w-[70px] h-[70px]"
                                                                src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/23.png"
                                                                alt=""
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="pl-[15px]">
                                                        <a href="#">
                                                            <h6 className="text-[13px] font-[600]">
                                                                Meatigo Premium Goat Curry
                                                            </h6>
                                                            <span className="block text-[14px]">450 G</span>
                                                            <h6 className="mt-[6px] text-[13px] text-[#0da487] font-[600]">
                                                                $ 70.00
                                                            </h6>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </ChakraProvider>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blog;
