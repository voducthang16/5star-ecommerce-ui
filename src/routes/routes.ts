// Different Layout
import NotFound from '~/layouts/NotFound';
import About from '~/pages/About';
import Contact from '~/pages/Contact';
import Home from '~/pages/Home';
import Login from '~/pages/Login';

import ProductDetail from '~/pages/ProductDetail';
import Register from '~/pages/Register';
interface Routes {
    path: string;
    Component: React.ComponentType;
    layout?: null | any;
}

const privateRoutes: Routes[] = [];

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
        path: '/about',
        Component: About,
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
        path: '/contact',
        Component: Contact,
        layout: null,
    },
    {
        path: '*',
        Component: NotFound,
        layout: null,
    },
];

export { publicRoutes, privateRoutes };
