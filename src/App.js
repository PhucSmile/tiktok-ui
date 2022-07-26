import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { plublicRouter } from '~/routers';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {plublicRouter.map((route, index) => {
                        const Page = route.component;
                        return <Route key={index} path={route.path} element={<Page />} />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
