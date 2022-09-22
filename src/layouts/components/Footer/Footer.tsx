import { AiOutlineMail } from 'react-icons/ai';
import { ImFacebook } from 'react-icons/im';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { CallCenterIcon, CreditCardIcon, RefundIcon, RocketIcon, LogoIcon } from '~/components/Icons';
import images from '~/assets/images';
import Image from '~/components/Image';
function Footer() {
    return (
        <footer className="footer-wrapper">
            <div className="border-t border-b border-slate-200 py-10">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="col-span-1">
                            <h4 className="text-lg font-bold mb-8">Shop Departments</h4>
                            <ul className="text-base font-normal space-y-4">
                                <li>
                                    <a href="/">Sneakers & Athletic</a>
                                </li>
                                <li>
                                    <a href="/">Athletic Apparel</a>
                                </li>
                                <li>
                                    <a href="/">Sandals</a>
                                </li>
                                <li>
                                    <a href="/">Jeans</a>
                                </li>
                                <li>
                                    <a href="/">Shorts</a>
                                </li>
                                <li>
                                    <a href="/">T-Shirts</a>
                                </li>
                                <li>
                                    <a href="/">Swimwear</a>
                                </li>
                                <li>
                                    <a href="/">Accessories</a>
                                </li>
                                <li>
                                    <a href="/">Watches</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-1 space-y-8">
                            <div>
                                <h4 className="text-lg font-bold mb-8">Explore</h4>
                                <ul className="text-base font-normal space-y-4">
                                    <li>
                                        <a href="/">Design systems</a>
                                    </li>
                                    <li>
                                        <a href="/">Pricing</a>
                                    </li>
                                    <li>
                                        <a href="/">Security</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold mb-8">About us</h4>
                                <ul className="text-base font-normal space-y-4">
                                    <li>
                                        <a href="/">About company</a>
                                    </li>
                                    <li>
                                        <a href="/">Our team</a>
                                    </li>
                                    <li>
                                        <a href="/">Careers</a>
                                    </li>
                                    <li>
                                        <a href="/">News</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <h4 className="text-lg font-bold mb-8">Stay in touch</h4>
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
                                    placeholder="Enter your email"
                                />
                                <h6 className="text-base py-3 px-4 rounded-r-lg md:rounded-lg md:mt-4 lg:mt-0 bg-slate-200">
                                    Subscribe
                                </h6>
                            </div>
                            <p className="text-slate-600 text-xs mt-4">
                                Subscribe to our newsletter to receive early discount offers, updates and new products
                                info.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-10">
                <div className="container">
                    <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-4">
                        <div className="col-span-1">
                            <div className="flex lg:items-center justify-between md:items-start space-x-2">
                                <div className="flex-1 flex justify-center">
                                    <RocketIcon width={40} height={40} className={'fill-pink-700'} />
                                </div>
                                <div className="space-y-2">
                                    <h5 className="text-base font-semibold">Fast and free delivery</h5>
                                    <h6 className="text-xs font-normal">Free delivery for all orders over $200</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="flex lg:items-center justify-between md:items-start space-x-2">
                                <div className="flex-1 flex justify-center">
                                    <RefundIcon width={40} height={40} className={'fill-pink-700'} />
                                </div>
                                <div className="space-y-2">
                                    <h5 className="text-base font-semibold">Money back guarantee</h5>
                                    <h6 className="text-xs font-normal">We return money within 30 days</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="flex lg:items-center justify-between md:items-start space-x-2">
                                <div className="flex-1 flex justify-center">
                                    <CallCenterIcon width={40} height={40} className={'fill-pink-700'} />
                                </div>
                                <div className="space-y-2">
                                    <h5 className="text-base font-semibold">24/7 customer support</h5>
                                    <h6 className="text-xs font-normal">Friendly 24/7 customer support</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="flex lg:items-center justify-between md:items-start space-x-2">
                                <div className="flex-1 flex justify-center">
                                    <CreditCardIcon width={40} height={40} className={'fill-pink-700'} />
                                </div>
                                <div className="space-y-2">
                                    <h5 className="text-base font-semibold">Secure online payment</h5>
                                    <h6 className="text-xs font-normal">We possess SSL / Secure certificate</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 md:col-span-4 border-t border-slate-200 pt-6">
                            <div className="flex flex-col md:flex-row justify-between space-y-4">
                                <div className="w-full">
                                    <LogoIcon className="mx-auto md:m-0" />
                                    <ul className="flex flex-wrap justify-center md:justify-start mt-6 text-sm text-gray-600 space-x-4 leading-6">
                                        <li>Outlets</li>
                                        <li>Affiliates</li>
                                        <li>Support</li>
                                        <li>Privacy</li>
                                        <li>Terms of use</li>
                                    </ul>
                                    <p className="mt-8 text-center md:text-start text-xs text-gray-600">
                                        © All rights reserved. Made by 5Star Team
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
            </div>
        </footer>
    );
}

export default Footer;
