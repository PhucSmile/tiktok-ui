import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { plublicRouter } from '~/routers';
import { DefaulLayout } from '~/components/Layout';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {plublicRouter.map((route, index) => {
                        // check if route.layout
                        let Layout = DefaulLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
