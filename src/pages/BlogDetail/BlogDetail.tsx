import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    ChakraProvider,
} from '@chakra-ui/react';
import { BsCalendar4, BsChatLeft, BsFillReplyFill, BsHandThumbsUp, BsPerson, BsSearch } from 'react-icons/bs';

function BlogDetail() {
    return (
        <section className="px-[20px] py-[32px] md:px-[54px] lg:px-[78px] xl:px-[108px] xl:py-[44px] 2xl:px-[124px]">
            <div className="lg:grid lg:grid-cols-7 lg:gap-6 xl:grid-cols-3 2xl:grid-cols-4">
                <div className="hidden lg:block lg:col-span-3 xl:col-span-1 2xl:col-span-1">
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
                                <BsSearch className="w-[14px] h-[20px] absolute right-[20px] top-[25%] text-[#000]" />
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

                {/* blog content */}
                <div className="lg:col-span-4 xl:col-span-2 2xl:col-span-3">
                    <div className="relative mb-[24px] py-[8px] w-full h-[390px] bg-[url('https://themes.pixelstrap.com/fastkart/assets/images/inner-page/blog/1.jpg')] bg-cover bg-center bg-no-repeat transition-filter duration-[400ms] ease-in rounded-[5px] object-cover">
                        <div className="w-full absolute bottom-0 px-[15px] pt-[55px] pb-[40px] bg-gradient-to-r from-[#fff0] to-[#ffffff]">
                            {/* <ul className="text-[14px] flex justify-center capitalize">
                                <li className="relative">backpack</li>
                                <li className="relative before:content-[''] before:absolute before:w-[15px] before:h-[1px] before:top-[50%] before:translate-y-[-50%] before:bg-[#222] before:left-[-24px]">
                                    life style
                                </li>
                                <li className="relative before:content-[''] before:absolute before:w-[15px] before:h-[1px] before:top-[50%] before:translate-y-[-50%] before:bg-[#222] before:left-[-24px]">
                                    organic
                                </li>
                            </ul> */}
                            <h2 className="my-[10px] text-[22px] text-[#222222] text-center font-[700]">
                                Agriculture Conference Harvest 2022 in Paris
                            </h2>
                            <ul className="text-[14px] flex gap-4 justify-center">
                                <li>
                                    <div className="flex items-center">
                                        <BsPerson className="w-[16px] h-[16px] mr-[3px]" />
                                        <span>Caroline</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <BsCalendar4 className="w-[16px] h-[16px] mr-[3px]" />
                                        <span>April 19, 2022</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <BsChatLeft className="w-[16px] h-[16px] mr-[3px]" />
                                        <span>82 Comment</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* blog detail contain */}
                    <div>
                        <p className="text-[15px] mb-[12px] text-justify">
                            <span className="w-[38px] h-[38px] mt-[8px] mr-[8px] flex items-center justify-center text-[56px] float-left">
                                S
                            </span>
                            hotgun approach message the initiative so can I just chime in on that one. Make sure to
                            include in your wheelhouse bells and whistles, and touch base slow-walk our commitment nor
                            what's the status on the deliverables for eow?. Create spaces to explore whatâ€™s next
                            commitment to the cause , or UI, for get buy-in but draw a line in the sand, and pig in a
                            python we've got kpis for that. Message the initiative value prop, please use "solutionise"
                            instead of solution ideas! :) i am dead inside. Quick sync 4-blocker. Driving the initiative
                            forward flesh that out.
                        </p>
                        <p className="text-[15px] mb-[12px] text-justify">
                            Let's unpack that later everyone thinks the soup tastes better before theyâ€™ve pissed in it
                            pivot, re-inventing the wheel, and it's not hard guys. Market-facing pushback back of the
                            net, for pro-sumer software let's see if we can dovetail these two projects but turn the
                            crank for they have downloaded gmail and seems to be working for now. This is not the hill i
                            want to die on you better eat a reality sandwich before you walk back in that boardroom land
                            the plane yet exposing new ways to evolve our design language design thinking nor poop, so
                            can you put it into a banner that is not alarming, but eye catching and not too giant. That
                            is a good problem to have dog and pony show we're ahead of the curve on that one.
                        </p>
                        <p className="text-[15px] mb-[12px] text-justify">
                            Waste of resources can you run this by clearance? hot johnny coming through driving the
                            initiative forward our competitors are jumping the shark. Unlock meaningful moments of
                            relaxation. Copy and paste from stack overflow a tentative event rundown is attached for
                            your reference, including other happenings on the day you are most welcome to join us
                            beforehand for a light lunch we would also like to invite you to other activities on the
                            day, including the interim and closing panel discussions on the intersection of businesses
                            and social innovation, and on building a stronger social innovation eco-system respectively
                            what are the expectations, on-brand but completeley fresh we can't hear you.
                        </p>
                    </div>

                    {/* comments */}
                    <div>
                        <div className="mt-[40px] mb-[10px]">
                            <h3 className="text-[22px] font-[700]">Comments</h3>
                        </div>
                        <div className="mt-[24px]">
                            <ul className="">
                                <li>
                                    <div className="flex justify-between">
                                        <div className="flex">
                                            <div className="h-[60px] w-[60px] mr-[20px]">
                                                <img
                                                    className="w-full h-full rounded-[50%]"
                                                    src="https://themes.pixelstrap.com/fastkart/assets/images/inner-page/user/1.jpg"
                                                    alt=""
                                                />
                                            </div>

                                            <div>
                                                <h6 className="mb-[6px] text-[13px]">30 Jan, 2022</h6>
                                                <h5 className="text-[15px] text-[#4a5568] font-[600]">Glenn Greer</h5>
                                            </div>
                                        </div>

                                        <div className="flex">
                                            <BsFillReplyFill className="mr-[10px] w-[18px] h-[18px] text-[#777]" />
                                            <span className="text-[14px] text-[#0da487]">Reply</span>
                                        </div>
                                    </div>

                                    <div className="mt-[14px] mb-[35px]">
                                        <p className="text-[13px]">
                                            "This proposal is a win-win situation which will cause a stellar paradigm
                                            shift, and produce a multi-fold increase in deliverables a better
                                            understanding"
                                        </p>
                                    </div>
                                </li>

                                <li>
                                    <div className="flex justify-between">
                                        <div className="flex">
                                            <div className="h-[60px] w-[60px] mr-[20px]">
                                                <img
                                                    className="w-full h-full rounded-[50%]"
                                                    src="https://themes.pixelstrap.com/fastkart/assets/images/inner-page/user/2.jpg"
                                                    alt=""
                                                />
                                            </div>

                                            <div>
                                                <h6 className="mb-[6px] text-[13px]">30 Jan, 2022</h6>
                                                <h5 className="text-[15px] text-[#4a5568] font-[600]">Glenn Greer</h5>
                                            </div>
                                        </div>

                                        <div className="flex">
                                            <BsFillReplyFill className="mr-[10px] w-[18px] h-[18px] text-[#777]" />
                                            <span className="text-[14px] text-[#0da487]">Reply</span>
                                        </div>
                                    </div>

                                    <div className="mt-[14px] mb-[35px]">
                                        <p className="text-[13px]">
                                            "This proposal is a win-win situation which will cause a stellar paradigm
                                            shift, and produce a multi-fold increase in deliverables a better
                                            understanding"
                                        </p>
                                    </div>
                                </li>

                                {/* rep comment */}
                                <li className="ml-[32px]">
                                    <div className="flex justify-between">
                                        <div className="flex">
                                            <div className="h-[60px] w-[60px] mr-[20px]">
                                                <img
                                                    className="w-full h-full rounded-[50%]"
                                                    src="https://themes.pixelstrap.com/fastkart/assets/images/inner-page/user/3.jpg"
                                                    alt=""
                                                />
                                            </div>

                                            <div>
                                                <h6 className="mb-[6px] text-[13px]">30 Jan, 2022</h6>
                                                <h5 className="text-[15px] text-[#4a5568] font-[600]">Glenn Greer</h5>
                                            </div>
                                        </div>

                                        <div className="flex">
                                            <BsFillReplyFill className="mr-[10px] w-[18px] h-[18px] text-[#777]" />
                                            <span className="text-[14px] text-[#0da487]">Reply</span>
                                        </div>
                                    </div>

                                    <div className="mt-[14px] mb-[35px]">
                                        <p className="text-[13px]">
                                            "This proposal is a win-win situation which will cause a stellar paradigm
                                            shift, and produce a multi-fold increase in deliverables a better
                                            understanding"
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* leave comment */}
                    <div className="p-[18px] bg-[#f8f8f8]">
                        <div className="mb-[10px]">
                            <h3 className="text-[22px] text-[#4a5568] font-[700] capitalize">leave comment</h3>
                        </div>
                        <div>
                            <div className="mb-[24px]">
                                <p className="text-[14px] ">
                                    Your email address will not be published. Required fields are marked
                                </p>
                            </div>
                            <div>
                                <div className="mt-4">
                                    <input
                                        className="w-full text-[14px] text-[#212529] px-[12px] py-[9px] outline-none"
                                        type="email"
                                        placeholder="Email của bạn"
                                    />
                                </div>
                                <div className="mt-4">
                                    <input
                                        className="w-full text-[14px] text-[#212529] px-[12px] py-[9px] outline-none"
                                        type="text"
                                        placeholder="Dịa chỉ URL"
                                    />
                                </div>
                                <div className="mt-4">
                                    <textarea
                                        className="w-full text-[14px] text-[#212529] px-[12px] py-[9px] outline-none"
                                        rows={4}
                                        placeholder="Bình luận của bạn"
                                    ></textarea>
                                </div>
                                <div className="mt-6 mb-[2px] flex">
                                    <input className="mr-4 p-8 w-[26[x] h-[26px]" type="checkbox" />
                                    <label htmlFor="">
                                        <span className="text-[14px] block">
                                            Save my name, email, and website in this browser for the next time I
                                            comment.
                                        </span>
                                    </label>
                                </div>
                                <div className="mt-[16px] ">
                                    <button className="px-[32px] py-[8px] text-[14px] text-center text-[#fff] bg-[#ff5858] rounded-[3px]">
                                        Gửi
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogDetail;
