import ProductPage from "./ProductPage"
import Sidebar from "./Sidebar"
import "./MainProduct.css"
let MainProduct=()=>{

    return (
        <div id="container">
            <div className="sidebar">
            <Sidebar/>
            </div>
            <div className="product">
            <ProductPage/>
            </div>
        </div>
    )

}
export default MainProduct