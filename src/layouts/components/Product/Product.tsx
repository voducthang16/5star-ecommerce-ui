import { Link } from 'react-router-dom';
import { useAppDispatch } from '~/app/hooks';
import { HeartEmptyIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Rate from '../Rate';
import { insertSize, insertColor, product_parent } from '~/features/cart/cartSlice';
import './Product.scss';
interface ProductProps {
    idProduct: number;
    name?: string;
    slug?: string;
    color?: any;
    size?: any;
    images?: any;
}

function Product({ idProduct, name, slug, color, size, images }: ProductProps) {
    const dispatch = useAppDispatch();

    const colorArray: any = color ? Object?.entries(color) : '';
    const sizeArray: any = size ? Object?.entries(size) : '';
    const handleChangeImage = (id: number, index: any) => {
        const indexImage = index;
        const element = document.querySelector(`#product_${id}`);
        const images = element?.querySelectorAll(`.images_${id}`);
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
        <div id={`product_${idProduct}`} className="group product-hover">
            <div className="relative">
                <div className="absolute z-[21] p-2 top-2 right-2 cursor-pointer bg-[#ffffff] rounded-full">
                    <HeartEmptyIcon width={16} height={16} />
                </div>
                <div className="relative">
                    <div className="relative w-full p-[50%] rounded-3xl">
                        {images.map((item: any, index: any) => (
                            <Image
                                key={index}
                                className={`images_${idProduct} absolute inset-0 w-full rounded-3xl object-contain bg-[#f1f1f1]`}
                                src={item}
                                alt="Product"
                            />
                        ))}
                        <div
                            style={{ top: 'calc(100% - 50px)' }}
                            className="product-size-hover absolute px-4 -left-[1px] -right-[1px] transition-all z-30"
                        >
                            {/* size */}
                            <div className="flex justify-around items-center text-sm mb-[10px]">
                                {sizeArray?.map(([key, value]: any, index: any) => (
                                    <div key={index}>
                                        <input
                                            className="size w-px h-px appearance-none"
                                            type="radio"
                                            name="size"
                                            id={`${idProduct}_${value}`}
                                        />
                                        <label
                                            onClick={() => {
                                                dispatch(insertSize({ value, idProduct }));
                                                dispatch(product_parent(idProduct));
                                            }}
                                            className="size-label bg-white w-10 h-10 text-center 
                                            leading-10 inline-block border border-slate-200 rounded-lg"
                                            htmlFor={`${idProduct}_${value}`}
                                        >
                                            {key}
                                        </label>
                                    </div>
                                ))}
                            </div>
                            {/* add to cart */}
                            {/* <div className="flex justify-around items-center text-sm py-3 text-white bg-[#fe696a] rounded-lg">
                                <button className="flex justify-around items-center">
                                    <AiOutlineShoppingCart className="mr-2" />
                                    Them vao gio hang
                                </button>
                            </div> */}
                        </div>
                    </div>
                    {/* color */}
                    <div className="flex space-x-4 items-center text-sm h-10 mt-4">
                        {colorArray?.map(([key, value]: any, index: any) => (
                            <div key={index}>
                                <input
                                    className="color w-px h-px appearance-none"
                                    type="radio"
                                    name="color"
                                    id={`${idProduct}_${value}`}
                                />
                                <label
                                    onClick={() => {
                                        handleChangeImage(idProduct, index);
                                        dispatch(insertColor({ value, idProduct }));
                                        dispatch(product_parent(+idProduct));
                                    }}
                                    className="color-label bg-white relative inline-block w-10 h-10 border border-slate-200 rounded-full"
                                    htmlFor={`${idProduct}_${value}`}
                                >
                                    <span
                                        style={{ backgroundColor: `${key}` }}
                                        className={`absolute inset-1 rounded-full`}
                                    ></span>
                                </label>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4">
                        <span className="block mb-2 text-sm font-medium text-[#7d879c]">Thể thao</span>
                        <Link className="block text-base font-semibold text-[#373f50]" to={`/product/${slug}`}>
                            {name}
                        </Link>
                        <div className="mt-4 flex justify-between items-center">
                            <span className="text-sm">200.000 VND</span>
                            <Rate className="flex space-x-1" average={3.7} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
