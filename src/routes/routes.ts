// Different Layout

import NotFound from '~/layouts/NotFound';
import Login from '~/pages/Login';
import Register from '~/pages/Register';

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
