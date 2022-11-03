import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { useState } from 'react';
import { BiUser } from 'react-icons/bi';
import { BsHandbag, BsHeart } from 'react-icons/bs';
import { MdLogout } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import Breadcrumb from '~/components/Breadcrumb';
import './MyAccount.scss';
const MyAccount = () => {
    const location: any = useLocation();
    const [tabIndex, setTabIndex] = useState(() => {
        const pathLink = location.pathname.split('/')[2];
        switch (pathLink) {
            case 'wish-list':
                return 2;
            case 'info':
                return 0;
            case 'order':
                return 1;
            default:
                return 0;
        }
    });

    return (
        <div className="my-account-component">
            <Breadcrumb share={false} />
            <div className="container pb-[50px]">
                <Tabs isManual variant="soft-rounded" colorScheme="green" defaultIndex={tabIndex}>
                    <div className="grid grid-cols-12">
                        <div className="left col-span-12 md:col-span-3 h-full w-full mr-2 p-3">
                            <TabList className="!flex-col !border-none">
                                <Link to="/my-account/info">
                                    <Tab className="tab-col-item">
                                        <span className="text-xl mr-2">
                                            <BiUser />
                                        </span>
                                        Thông tin cá nhân
                                    </Tab>
                                </Link>
                                <Link to="/my-account/order">
                                    <Tab className="tab-col-item">
                                        <span className="text-xl mr-2">
                                            <BsHandbag />
                                        </span>
                                        Danh sách đơn hàng
                                    </Tab>
                                </Link>
                                <Link to="/my-account/wish-list">
                                    <Tab className="tab-col-item">
                                        <span className="text-xl mr-2">
                                            <BsHeart />
                                        </span>
                                        Sản phẩm yêu thích
                                    </Tab>
                                </Link>

                                <Link to="">
                                    <Tab className="tab-col-item">
                                        <span className="text-xl mr-2">
                                            <MdLogout />
                                        </span>
                                        Đăng xuất
                                    </Tab>
                                </Link>
                            </TabList>
                        </div>

                        <div className="right col-span-12 md:col-span-8 w-full h-full">
                            <div className="tab-content pl-[50px]">
                                <TabPanels>
                                    <TabPanel>
                                        <p>one!</p>
                                    </TabPanel>
                                    <TabPanel>
                                        <p>two!</p>
                                    </TabPanel>
                                    <TabPanel>
                                        <p>three!</p>
                                    </TabPanel>
                                </TabPanels>
                            </div>
                        </div>
                    </div>
                </Tabs>
            </div>
        </div>
    );
};

export default MyAccount;
