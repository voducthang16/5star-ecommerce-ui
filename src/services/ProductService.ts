import Config from '~/config';
import AxiosInstance from '~/utils/AxiosInstance';

let url: string = 'product';

const getAllProduct = async () => {
    let dataAllProduct = await AxiosInstance.get(Config.apiUrl + url).then((resAllProduct: any) => {
        if (resAllProduct.statusCode === 200) {
            resAllProduct.data.forEach((res: any) => {
                let hash: any = {};
                let hash2: any = {};
                res.stocks.forEach((stock: any) => {
                    if (!hash[stock?.classify_1?.attribute]) {
                        hash[stock?.classify_1?.attribute] = true;
                    }
                    if (!hash2[stock?.classify_2?.attribute]) {
                        hash2[stock?.classify_2?.attribute] = true;
                    }
                });
                res.classify_1 = hash;
                res.classify_2 = hash2;
            });

            return resAllProduct;
        }
    });
    return dataAllProduct;
};

const ProductService = {
    getAllProduct,
};

export default ProductService;
