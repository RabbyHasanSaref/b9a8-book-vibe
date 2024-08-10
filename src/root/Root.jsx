import { Outlet } from "react-router-dom";
import Footer from "../component/Footer/Footer";
import NavBar from "../component/NavBar/NavBar";

const Root = () => {
    return (
        <div>
            {/* header area  */}
            <NavBar></NavBar>

            {/* all content pack */}
            <Outlet></Outlet>

            {/* footer area  */}
            <Footer></Footer>
        </div>
    );
};

export default Root;
