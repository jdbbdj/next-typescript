import Footer from "../Footer";
import Header from "../Header";

type Props = {
    children:any;
}

const HomeCont: React.FC<Props> = ({children}) =>{
    return (
        <div className="layout">
            <Header/>
            <Footer/>
        </div>
    )
}

export default HomeCont;