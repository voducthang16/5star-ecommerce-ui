// Different Layout
import NotFound from '~/layouts/NotFound';
import About from '~/pages/About';
import Blog from '~/pages/Blog';
import BlogDetail from '~/pages/BlogDetail';
import Contact from '~/pages/Contact';
import Home from '~/pages/Home';
import Login from '~/pages/Login';

<<<<<<< HEAD
=======
import Cart from '~/pages/Cart';
>>>>>>> 2007cebc891e476b24f2f1c8b9dd81994c22468c
import Category from '~/pages/Category';
import MyAccount from '~/pages/MyAccount';
import ProductDetail from '~/pages/ProductDetail';
import Register from '~/pages/Register';
<<<<<<< HEAD

=======
>>>>>>> 2007cebc891e476b24f2f1c8b9dd81994c22468c
interface Routes {
    path: string;
    Component: React.ComponentType | any;
    layout?: null | any;
}

const privateRoutes: Routes[] = [];

const publicRoutes: Routes[] = [
    {
        path: '/',
        Component: Home,
    },
    {
        path: '/category/',
        Component: Category,
    },
    {
        path: '/category/:slug',
        Component: Category,
    },
    {
        path: '/product/:slug',
        Component: ProductDetail,
    },

    // MY ACCOUNT
    {
        path: '/my-account',
        Component: MyAccount,
    },
    {
        path: '/my-account/info',
        Component: MyAccount,
    },
    {
        path: '/my-account/order',
        Component: MyAccount,
    },
    {
        path: '/my-account/wish-list',
        Component: MyAccount,
    },
    //
    {
        path: '/about',
        Component: About,
    },
    {
        path: '/blog',
        Component: Blog,
    },
    {
        path: '/blog-detail',
        Component: BlogDetail,
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
    },
    {
        path: '/cart',
        Component: Cart,
    },
    {
        path: '*',
        Component: NotFound,
        layout: null,
    },
];

export { publicRoutes, privateRoutes };
