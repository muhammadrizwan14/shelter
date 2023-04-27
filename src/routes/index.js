import { Routes, Route } from "react-router-dom";
import { privateRoutes } from "./routesData";
import Header from "../component/navbar/Header";
import Footer from "../component/footer/Footer";
import ScrollToTop from "./Use";


const Routing = () => {
    
    return (
        <div >
            {/* ================routing===================  */}
            <ScrollToTop>
            <Header/>
                <Routes>
                    {
                        privateRoutes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                element={route.element}>
                            </Route>
                        ))
                    }
            </Routes>
                <Footer />
            </ScrollToTop>
   
        </div>
    );
};

export default Routing;