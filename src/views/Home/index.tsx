import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

type Props = {
    children:any;
}

const HomeCont: React.FC<Props> = ({children}) =>{
    return (
        <div className="layout">
            <Header/>
            <Navbar/>
            <Footer/>
        </div>
    )
}

export default HomeCont;