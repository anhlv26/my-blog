import Home from '~/pages/Home';
import Blog from '~/pages/Blog';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/blog',
        component: Blog,
    },
];

const privateRoutes = {};

export { publicRoutes, privateRoutes };
