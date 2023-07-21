import { useSearchParams } from "react-router-dom"
import "./Sidebar.css"
import {useState,useEffect} from "react"



const Sidebar=()=>{
    const [search,setSearch]=useSearchParams([])
    let initOrder=search.get("order")
    let [order,setOrder]=useState(""||initOrder)
    let initPrice=search.getAll("price")
    let [price,setPrice]=useState<string[]>([]||initPrice)


    const HandleChange=(e:any)=>{
        setOrder(e.target.value)
    }

    // const HandlePrice=(e:React.ChangeEvent<HTMLInputElement>)=>{
    //     let {value}=e.target
    //     let newPrice=[...price];
    //     if(newPrice.includes(value)){
    //             newPrice=newPrice.filter((ele)=>ele!==value)
    //     }
    //     else {
    //         newPrice.push(value)
    //     }
    //     setPrice(newPrice)
    // }
    
  

    useEffect(()=>{
        let params:any={
            price: price.map((p) => p.replace(",", "")),
        }

        order && (params.order=order)
        setSearch(params)
    },[order,price])

   
      
    return (
        <div className="Product_container">
            <h3>Sort by</h3>
            <hr />
            

            <div onChange={HandleChange}>
                <input type="radio" value={"asc"} name="order" defaultChecked={initOrder=="asc"}/>
                <label htmlFor="">Price (Low to High)</label>
                
                <br />
                <input type="radio" value={"desc"} name="order" defaultChecked={initOrder=="desc"}/>
                <label >Price (High to Low)</label>
            </div>
            <br />
            
            <hr />
            <h3>Filter</h3>
            <hr />
            <br />
            <h2>PRICE RANGE</h2>
            <br />
            <div>
                <input type="checkbox" /> 
                <label >Under ₹ 19,999</label>
            </div>
            <div>
                <input type="checkbox" /> 
                <label >₹ 20,000 - ₹ 29,999</label>
            </div>
            <div>
                <input type="checkbox" /> 
                <label >₹ 30,000 - ₹ 39,999</label>
            </div>
            <div>
                <input type="checkbox" /> 
                <label >₹ 40,000 - ₹ 49,999</label>
            </div>
            <div>
                <input type="checkbox" /> 
                <label >Over ₹ 50,000</label>
            </div>
            <br />
            <hr />
            <br />
            <h3>MATERIAL</h3>
            <br />
            <div>
                <input type="checkbox"/> 
                <label >Velvet</label>
            </div>
            <div>
                <input type="checkbox"/> 
                <label >Cotton</label>
            </div>
            <div>
                <input type="checkbox"/> 
                <label >Leather</label>
            </div>
            <br />
            <hr />
            <br />
            <h3>COLOR</h3>
            <br />
            <div>
                <input type="checkbox"/> 
                <label >Cream</label>
            </div>
            <div>
                <input type="checkbox"/> 
                <label >Grey</label>
            </div>
            <div>
                <input type="checkbox"/> 
                <label >Blue</label>
            </div>
            <br />
            <hr />
            <br />
            <h3>BRAND</h3>
            <br />
            <div>
                <input type="checkbox"/> 
                <label >Wooden Street</label>
            </div>
            <div>
                <input type="checkbox"/> 
                <label >Urban Living</label>
            </div>
            <div>
                <input type="checkbox"/> 
                <label >Arra</label>
            </div>
            <div>
                <input type="checkbox"/> 
                <label >Spacewood</label>
            </div>
        </div>
    )

}

export default Sidebar