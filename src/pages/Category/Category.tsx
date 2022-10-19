import { useParams } from 'react-router-dom';
import Breadcrumb from '~/components/Breadcrumb';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box } from '@chakra-ui/react';
import { AccessoriesIcon, BagIcon, ClothingIcon, ShoesIcon, SunglassesIcon, WatchIcon } from '~/components/Icons';
import './Category.scss';
import Product from '~/layouts/components/Product';
function Category() {
    const { slug } = useParams();
    const productFakeData = [
        {
            id: 'product_1',
            color: ['#a78bfa', '#facc15', '#2c3b54'],
            images: [
                'https://cartzilla.createx.studio/img/shop/catalog/01.jpg',
                'https://cartzilla.createx.studio/img/shop/catalog/02.jpg',
                'https://cartzilla.createx.studio/img/shop/catalog/03.jpg',
            ],
        },
        {
            id: 'product_2',
            color: ['#fb923c', '#38bdf8', '#4ade80'],
            images: [
                'https://cartzilla.createx.studio/img/shop/catalog/01.jpg',
                'https://cartzilla.createx.studio/img/shop/catalog/02.jpg',
                'https://cartzilla.createx.studio/img/shop/catalog/03.jpg',
            ],
        },
        {
            id: 'product_3',
            color: ['#fb923c', '#38bdf8', '#4ade80'],
            images: [
                'https://cartzilla.createx.studio/img/shop/catalog/01.jpg',
                'https://cartzilla.createx.studio/img/shop/catalog/02.jpg',
                'https://cartzilla.createx.studio/img/shop/catalog/03.jpg',
            ],
        },
        {
            id: 'product_4',
            color: ['#fb923c', '#38bdf8', '#4ade80'],
            images: [
                'https://cartzilla.createx.studio/img/shop/catalog/01.jpg',
                'https://cartzilla.createx.studio/img/shop/catalog/02.jpg',
                'https://cartzilla.createx.studio/img/shop/catalog/03.jpg',
            ],
        },
    ];
    return (
        <div className="category-page">
            <Breadcrumb name={slug ? `${slug}` : 'Tất cả'} share={false} />
            <div className="container pb-20">
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-3">
                        <div className="bg-white shadow-lg space-y-4">
                            <div className="pb-4 border-b border-slate-200">
                                <h6 className="text-lg font-semibold">Danh mục</h6>
                                <Accordion allowToggle>
                                    <AccordionItem borderTop={0}>
                                        <AccordionButton
                                            _hover={{
                                                background: 'white',
                                                color: 'teal.500',
                                            }}
                                            px={0}
                                            py={1}
                                        >
                                            <ShoesIcon className="mr-2" width={48} height={48} />
                                            <Box display={'flex'} justifyContent={'space-between'} width={'100%'}>
                                                Giày
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>

                                        <AccordionPanel fontSize={14} py={2} pl={'44px'}>
                                            <p className="flex justify-between text-gray-400">
                                                <span>View All</span>
                                                <span>1234</span>
                                            </p>
                                        </AccordionPanel>
                                        <AccordionPanel fontSize={14} py={2} pl={'44px'}>
                                            Pumps & High Heels
                                        </AccordionPanel>
                                        <AccordionPanel fontSize={14} py={2} pl={'44px'}>
                                            Sandals
                                        </AccordionPanel>
                                        <AccordionPanel fontSize={14} py={2} pl={'44px'}>
                                            Sneakers
                                        </AccordionPanel>
                                        <AccordionPanel fontSize={14} py={2} pl={'44px'}>
                                            Boots
                                        </AccordionPanel>
                                        <AccordionPanel fontSize={14} py={2} pl={'44px'}>
                                            Smart Shoes
                                        </AccordionPanel>
                                        <AccordionPanel fontSize={14} py={2} pl={'44px'}>
                                            Athletic Shoes
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={0}>
                                        <AccordionButton
                                            _hover={{
                                                background: 'white',
                                                color: 'teal.500',
                                            }}
                                            px={0}
                                            py={1}
                                        >
                                            <ClothingIcon className="mr-2" width={48} height={48} />
                                            <Box display={'flex'} justifyContent={'space-between'} width={'100%'}>
                                                Quần áo
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>

                                        <AccordionPanel fontSize={14} py={2} pl={'44px'}>
                                            <p className="flex justify-between text-gray-400">
                                                <span>View All</span>
                                                <span>1234</span>
                                            </p>
                                        </AccordionPanel>
                                        <AccordionPanel fontSize={14} py={2} pl={'44px'}>
                                            Pumps & High Heels
                                        </AccordionPanel>
                                        <AccordionPanel fontSize={14} py={2} pl={'44px'}>
                                            Sandals
                                        </AccordionPanel>
                                        <AccordionPanel fontSize={14} py={2} pl={'44px'}>
                                            Sneakers
                                        </AccordionPanel>
                                        <AccordionPanel fontSize={14} py={2} pl={'44px'}>
                                            Boots
                                        </AccordionPanel>
                                        <AccordionPanel fontSize={14} py={2} pl={'44px'}>
                                            Smart Shoes
                                        </AccordionPanel>
                                        <AccordionPanel fontSize={14} py={2} pl={'44px'}>
                                            Athletic Shoes
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={0}>
                                        <AccordionButton
                                            _hover={{
                                                background: 'white',
                                                color: 'teal.500',
                                            }}
                                            px={0}
                                            py={1}
                                        >
                                            <BagIcon className="mr-2" width={48} height={48} />
                                            <Box display={'flex'} justifyContent={'space-between'} width={'100%'}>
                                                Túi xách
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>

                                        <AccordionPanel fontSize={14} py={2} pl={'44px'}>
                                            <p className="flex justify-between text-gray-400">
                                                <span>View All</span>
                                                <span>1234</span>
                                            </p>
                                        </AccordionPanel>
                                        <AccordionPanel fontSize={14} py={2} pl={'44px'}>
                                            Pumps & High Heels
                                        </AccordionPanel>
                                        <AccordionPanel fontSize={14} py={2} pl={'44px'}>
                                            Sandals
                                        </AccordionPanel>
                                        <AccordionPanel fontSize={14} py={2} pl={'44px'}>
                                            Sneakers
                                        </AccordionPanel>
                                        <AccordionPanel fontSize={14} py={2} pl={'44px'}>
                                            Boots
                                        </AccordionPanel>
                                        <AccordionPanel fontSize={14} py={2} pl={'44px'}>
                                            Smart Shoes
                                        </AccordionPanel>
                                        <AccordionPanel fontSize={14} py={2} pl={'44px'}>
                                            Athletic Shoes
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={0}>
                                        <AccordionButton
                                            _hover={{
                                                background: 'white',
                                                color: 'teal.500',
                                            }}
                                            px={0}
                                            py={1}
                                        >
                                            <SunglassesIcon className="mr-2" width={48} height={48} />
                                            <Box display={'flex'} justifyContent={'space-between'} width={'100%'}>
                                                Kính mát
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>

                                        <AccordionPanel fontSize={14} py={2} pl={'44px'}>
                                            <p className="flex justify-between text-gray-400">
                                                <span>View All</span>
                                                <span>1234</span>
                                            </p>
                                        </AccordionPanel>
                                        <AccordionPanel fontSize={14} py={2} pl={'44px'}>
                                            Pumps & High Heels
                                        </AccordionPanel>
                                        <AccordionPanel fontSize={14} py={2} pl={'44px'}>
                                            Sandals
                                        </AccordionPanel>
                                        <AccordionPanel fontSize={14} py={2} pl={'44px'}>
                                            Sneakers
                                        </AccordionPanel>
                                        <AccordionPanel fontSize={14} py={2} pl={'44px'}>
                                            Boots
                                        </AccordionPanel>
                                        <AccordionPanel fontSize={14} py={2} pl={'44px'}>
                                            Smart Shoes
                                        </AccordionPanel>
                                        <AccordionPanel fontSize={14} py={2} pl={'44px'}>
                                            Athletic Shoes
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={0}>
                                        <AccordionButton
                                            _hover={{
                                                background: 'white',
                                                color: 'teal.500',
                                            }}
                                            px={0}
                                            py={1}
                                        >
                                            <WatchIcon className="mr-2" width={48} height={48} />
                                            <Box display={'flex'} justifyContent={'space-between'} width={'100%'}>
                                                Đồng hồ
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>

                                        <AccordionPanel fontSize={14} py={2} pl={'44px'}>
                                            <p className="flex justify-between text-gray-400">
                                                <span>View All</span>
                                                <span>1234</span>
                                            </p>
                                        </AccordionPanel>
                                        <AccordionPanel fontSize={14} py={2} pl={'44px'}>
                                            Pumps & High Heels
                                        </AccordionPanel>
                                        <AccordionPanel fontSize={14} py={2} pl={'44px'}>
                                            Sandals
                                        </AccordionPanel>
                                        <AccordionPanel fontSize={14} py={2} pl={'44px'}>
                                            Sneakers
                                        </AccordionPanel>
                                        <AccordionPanel fontSize={14} py={2} pl={'44px'}>
                                            Boots
                                        </AccordionPanel>
                                        <AccordionPanel fontSize={14} py={2} pl={'44px'}>
                                            Smart Shoes
                                        </AccordionPanel>
                                        <AccordionPanel fontSize={14} py={2} pl={'44px'}>
                                            Athletic Shoes
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={0} borderBottom={0}>
                                        <AccordionButton
                                            _hover={{
                                                background: 'white',
                                                color: 'teal.500',
                                            }}
                                            px={0}
                                            py={1}
                                        >
                                            <AccessoriesIcon className="mr-2" width={48} height={48} />
                                            <Box display={'flex'} justifyContent={'space-between'} width={'100%'}>
                                                Phụ kiện
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>

                                        <AccordionPanel fontSize={14} py={2} pl={'44px'}>
                                            <p className="flex justify-between text-gray-400">
                                                <span>View All</span>
                                                <span>1234</span>
                                            </p>
                                        </AccordionPanel>
                                        <AccordionPanel fontSize={14} py={2} pl={'44px'}>
                                            Pumps & High Heels
                                        </AccordionPanel>
                                        <AccordionPanel fontSize={14} py={2} pl={'44px'}>
                                            Sandals
                                        </AccordionPanel>
                                        <AccordionPanel fontSize={14} py={2} pl={'44px'}>
                                            Sneakers
                                        </AccordionPanel>
                                        <AccordionPanel fontSize={14} py={2} pl={'44px'}>
                                            Boots
                                        </AccordionPanel>
                                        <AccordionPanel fontSize={14} py={2} pl={'44px'}>
                                            Smart Shoes
                                        </AccordionPanel>
                                        <AccordionPanel fontSize={14} py={2} pl={'44px'}>
                                            Athletic Shoes
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                            <div className="pb-4 border-b border-slate-200">
                                <h6 className="text-lg font-semibold">Giá</h6>
                                <div className="flex">
                                    <input type="text" className="input flex-1" placeholder="Từ" />
                                    <input type="text" className="input flex-1" placeholder="Đến" />
                                </div>
                                <button className="bg-pink-300 text-center text-base w-full py-3 text-white rounded-lg">
                                    Áp dụng
                                </button>
                            </div>
                            <div className="pb-4 border-b border-slate-200">
                                <h6 className="text-lg font-semibold">Thương hiệu</h6>
                                <div className="space-y-2 max-h-[64px] overflow-y-auto px-2">
                                    <div className="w-full flex items-center space-x-2 text-base">
                                        <input type="checkbox" name="adidas" id="adidas" />
                                        <label htmlFor="adidas">Adidas</label>
                                        <span className="block !ml-auto">123</span>
                                    </div>
                                    <div className="w-full flex items-center space-x-2 text-base">
                                        <input type="checkbox" name="nike" id="nike" />
                                        <label htmlFor="nike">nike</label>
                                        <span className="block !ml-auto">123</span>
                                    </div>
                                    <div className="w-full flex items-center space-x-2 text-base">
                                        <input type="checkbox" name="Puma" id="Puma" />
                                        <label htmlFor="Puma">Puma</label>
                                        <span className="block !ml-auto">123</span>
                                    </div>
                                    <div className="w-full flex items-center space-x-2 text-base">
                                        <input type="checkbox" name="Ann Taylor" id="Ann Taylor" />
                                        <label htmlFor="Ann Taylor">Ann Taylor</label>
                                        <span className="block !ml-auto">123</span>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-4 border-b border-slate-200">
                                <h6 className="text-lg font-semibold">Size</h6>
                                <div className="space-y-2 max-h-[64px] overflow-y-auto px-2">
                                    <div className="w-full flex items-center space-x-2 text-base">
                                        <input type="checkbox" name="xs" id="xs" />
                                        <label htmlFor="xs">xs</label>
                                        <span className="block !ml-auto">123</span>
                                    </div>
                                    <div className="w-full flex items-center space-x-2 text-base">
                                        <input type="checkbox" name="S" id="S" />
                                        <label htmlFor="S">S</label>
                                        <span className="block !ml-auto">123</span>
                                    </div>
                                    <div className="w-full flex items-center space-x-2 text-base">
                                        <input type="checkbox" name="M" id="M" />
                                        <label htmlFor="M">M</label>
                                        <span className="block !ml-auto">123</span>
                                    </div>
                                    <div className="w-full flex items-center space-x-2 text-base">
                                        <input type="checkbox" name="L" id="L" />
                                        <label htmlFor="L">L</label>
                                        <span className="block !ml-auto">123</span>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-4">
                                <h6 className="text-lg font-semibold">Màu</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-9">
                        {/* top right */}
                        <div className="text-base mb-4">
                            <span>Sắp xếp theo: </span>
                            <select name="" id="">
                                <option value="1">Giá</option>
                                <option value="1">abc</option>
                                <option value="1">abc</option>
                            </select>
                        </div>
                        <div>
                            <div className="grid grid-cols-12 gap-4">
                                {productFakeData.map((item, index) => (
                                    <div key={index} className="col-span-4">
                                        <Product idProduct={`${item.id}`} color={item.color} images={item.images} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;
