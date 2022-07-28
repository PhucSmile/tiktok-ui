// HeaderOnly
import { HeaderOnly } from '~/components/Layout';
// pages
import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';
import Seach from '~/Pages/Seach';
// plublic router
const plublicRouter = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/seach', component: Seach, layout: null },
];
const privateRouter = [];
export { plublicRouter, privateRouter };
