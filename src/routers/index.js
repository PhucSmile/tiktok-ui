import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';

// plublic router
const plublicRouter = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
];
const privateRouter = [];
export { plublicRouter, privateRouter };
