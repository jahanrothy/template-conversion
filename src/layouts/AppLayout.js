import { Outlet } from "react-router-dom";
import FooterComponent from "../component/shared/footer/Footer.component";
import HeaderComponent from "../component/shared/header/Header.component";


export default function AppLayout(){
    return (
        <> 
            <HeaderComponent  /> 
            <Outlet></Outlet>
            <FooterComponent />
        </>
    )
}