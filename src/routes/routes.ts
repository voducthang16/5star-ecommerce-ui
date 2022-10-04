// Different Layout
import NotFound from '~/layouts/NotFound';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Register from '~/pages/Register';

import ProductDetail from '~/pages/ProductDetail';
interface Routes {
    path: string;
    Component: React.ComponentType;
    layout?: null | any;
}

const privateRoutes: Routes[] = [
    {
        path: '/',
        Component: Register,
        layout: null,
    },
];

const publicRoutes: Routes[] = [
    {
        path: '/',
        Component: Home,
    },
    {
        path: '/product/:slug',
        Component: ProductDetail,
    },
    {
        path: '/login',
        Component: Login,
        layout: null,
    },
    {
        path: '/register',
        Component: Register,
        layout: null,
    },
    {
        path: '*',
        Component: NotFound,
        layout: null,
    },
];

export { publicRoutes, privateRoutes };
