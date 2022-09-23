import React from 'react';
import { TbChevronsRight } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Breadcrumb = () => {
    return (
        <div className="breadcrumb">
            <div className="breadcrumb-container container flex">
                <div className="title-page text-lg font-medium">Trang chủ</div>
                <div className="title ml-auto mr-[20px]">
                    <div className="breadcrumb-item">
                        <ul className="flex text-base">
                            <li className="text-primary font-medium">Trang chủ</li>
                            <li className="flex items-center">
                                <span className="text-gray-400 mx-1">
                                    <TbChevronsRight />
                                </span>
                                <Link to="">Sản phẩm</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;
