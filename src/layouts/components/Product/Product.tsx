import { AiOutlineShoppingCart } from 'react-icons/ai';
import { StartIcon, StarHalfIcon, StartEmptyIcon, HeartIcon, HeartEmptyIcon, ViewIcon } from '~/components/Icons';
import Image from '~/components/Image';
import './Product.scss';
import { Link } from 'react-router-dom';
import Rate from '../Rate';
interface ProductProps {
    idProduct?: string;
    color?: any;
    images?: any;
}

function Product({ idProduct, color, images }: ProductProps) {
    const handleChangeImage = (id: string, color: string, index: any) => {
        const indexImage = index;
        const element = document.querySelector(`#${id}`);
        const images = element?.querySelectorAll('.images');
        images?.forEach((item, index) => {
            if (item.classList.contains('z-20')) {
                item.classList.remove('z-20');
            }
            if (index === indexImage) {
                item.classList.add('z-20');
            }
        });
    };
    return (
        <div id={idProduct} className="group">
            <div
                className="p-4 relative group-hover:shadow-xl transition-shadow 
                group-hover:rounded-t-2xl group-hover:rounded-b-none rounded-2xl
                border border-slate-200 group-hover:border-b-0"
            >
                <div className="relative">
                    <div className="absolute z-[21] p-2 top-2 right-2 bg-[#e7eaee] rounded-full">
                        <HeartEmptyIcon width={16} height={16} />
                    </div>
                    <div className="relative mx-auto w-[200px] max-w-[200px] h-[200px] max-h-[200px] rounded-3xl">
                        {images.map((item: any, index: any) => (
                            <Image
                                key={index}
                                className="images absolute inset-0 w-full object-contain"
                                src={item}
                                alt="Product"
                            />
                        ))}
                    </div>
                    <div className="mt-4">
                        <span className="block mb-2 text-sm font-medium text-[#7d879c]">Thể thao</span>
                        <Link className="block text-base font-semibold text-[#373f50]" to="/product/details">
                            Quần Short
                        </Link>
                        <div className="mt-4 flex justify-between items-center">
                            <span className="text-sm">1000.000VND</span>
                            <Rate className="flex space-x-1" average={3.7} />
                        </div>
                    </div>
                </div>
                <div
                    className="hidden absolute p-4 top-full -left-[1px] -right-[1px]
                    group-hover:shadow-xl group-hover:block transition-shadow rounded-b-2xl
                    bg-white border border-t-0 border-slate-200 space-y-2 z-30"
                >
                    {/* size */}
                    <div className="flex justify-around items-center text-sm">
                        <div>
                            <input className="size w-px h-px appearance-none" type="radio" name="size" id="36" />
                            <label
                                className="w-10 h-10 text-center leading-10 inline-block size-label border border-slate-200 rounded-lg"
                                htmlFor="36"
                            >
                                36
                            </label>
                        </div>
                        <div>
                            <input className="size w-px h-px appearance-none" type="radio" name="size" id="37" />
                            <label
                                className="w-10 h-10 text-center leading-10 inline-block size-label border border-slate-200 rounded-lg"
                                htmlFor="37"
                            >
                                37
                            </label>
                        </div>
                        <div>
                            <input className="size w-px h-px appearance-none" type="radio" name="size" id="38" />
                            <label
                                className="size-label inline-block w-10 h-10 text-center leading-10 border border-slate-200 rounded-lg"
                                htmlFor="38"
                            >
                                38
                            </label>
                        </div>
                    </div>
                    {/* color */}
                    <div className="flex justify-around items-center text-sm">
                        {color.map((item: any, index: any) => (
                            <div key={item}>
                                <input
                                    className="color w-px h-px appearance-none"
                                    type="radio"
                                    name="color"
                                    id={`${idProduct}_${item}`}
                                />
                                <label
                                    onClick={() => handleChangeImage(idProduct!, item, index)}
                                    className="color-label relative inline-block w-10 h-10 border border-slate-200 rounded-full"
                                    htmlFor={`${idProduct}_${item}`}
                                >
                                    <span
                                        style={{ backgroundColor: `${item}` }}
                                        className="absolute inset-1 rounded-full"
                                    ></span>
                                </label>
                            </div>
                        ))}
                    </div>
                    {/* add to cart */}
                    <div className="flex justify-around items-center text-sm py-3 text-white bg-[#fe696a] rounded-lg">
                        <button className="flex justify-around items-center">
                            <AiOutlineShoppingCart className="mr-2" />
                            Them vao gio hang
                        </button>
                    </div>
                    {/* view product */}
                    <div className="flex justify-around items-center text-sm py-3 text-black">
                        <button className="flex justify-around items-center">
                            <ViewIcon width={16} height={16} className="mr-2" />
                            Quick view
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
