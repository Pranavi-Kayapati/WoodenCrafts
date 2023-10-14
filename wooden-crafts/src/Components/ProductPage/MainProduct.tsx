import ProductPage from "./ProductPage"
import Sidebar from "./Sidebar"
import "./MainProduct.css"
import Drawer from "./Drawer"
let MainProduct=()=>{

    return (
        <div id="container">
            <div id="filter"><Drawer /></div>
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