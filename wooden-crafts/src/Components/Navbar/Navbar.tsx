import { Tabs, TabList, TabPanels, Tab, TabPanel, Heading, Center, Container, Button } from '@chakra-ui/react'
import { Link, NavLink, Navigate, useNavigate, useSearchParams } from 'react-router-dom'
import './Navbar.css';
import logo2 from './logo/logo2.png'
import { BiUserCircle} from 'react-icons/bi';
import { AiOutlineHeart} from 'react-icons/ai';
import { BiCartAlt} from 'react-icons/bi';
import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';


export const Navbar = () => {
  const navigate=useNavigate()

  const [searchvalue,setSearchvalue]=useState("")
  const handleSearch=(e:any):void=>{
     setSearchvalue(e.target.value)
  }
  const handleClick=()=>{
    if(searchvalue){
      navigate('/product')
      setSearchvalue('')
    }
    else{
      setSearchvalue('Input cannot be empty !!')
    } 
    
  }
  return (
  <>
  
  <header className="header" >
      {/* <!-- <Link style="margin-left: 30px;cursor:pointer;" to="../HTML/home.html" className="logo"><img src="../images/logo.png" alt=""></Link> --> */}
    <nav>
      <div className='uppernav'>
        <Link to='/'><img id='logo' src={logo2}></img></Link>
        <input className="search-div" type="text" value={searchvalue}
        onChange={handleSearch} placeholder="Search for Products and more"/>
        <button style={{backgroundColor:'#f9a92c',color:'white',height:'34px',width:'100px',marginTop:'30px',marginLeft:'-50px'}} onClick={handleClick}>Search</button>
        <div className='react-icons'>
        <Link to='/login'><BiUserCircle  className='icon' size={"25px"} color='#fba720' opacity={0.8}/></Link>
        <Link to='/login'><p>Profile</p></Link>
        <Link to='/cart'><AiOutlineHeart  className='icon' size={"25px"} color='#fba720'/></Link>
        <Link to='/cart'><p>Wishlist</p></Link>
        <Link to='cart'><BiCartAlt className='icon'  size={"25px"} color='#fba720'/></Link>
        <Link to='/cart'><p>Cart</p></Link>
        
        </div>
      </div>
      <ul className="menu-items">
        <li>
          <Link to="../HTML/product.html" className="menu-item-1">Sofas</Link>
          <div className="mega-menu">
            <div className="content">
              <div className="col">
                <section>
                  <h2 className="item-1-heading">SOFA SETS</h2>
                  <ul className="mega-links">
                    <li><Link to="/product">Fabric Sofas</Link></li>
                    <li><Link to="/product">Sofa cum Bed</Link></li>
                    <li><Link to="/product">Wooden Sofa</Link></li>
                    <li><Link to="/product">5 Seater Sofas</Link></li>
                    <li><Link to="/product">3 Seater Sofas</Link></li>
                    <li><Link to="/product">2 Seater Sofas</Link></li>
                    <li><Link to="/product">Single Seater Sofas</Link></li>
                    <li><Link to="/product">L Shaped Sofas</Link></li>
                    <li><Link to="/product">Leather Sofas</Link></li>
                    <li><Link to="/product">Office Sofas</Link></li>
                    <li><Link to="/product">Outdoor Sofas</Link></li>
                  </ul>
                </section>
              </div>
              <div className="col">
                <section>
                  <h2 className="item-1-heading">SEATING</h2>
                  <ul className="mega-links">
                    <li><Link to="/product">Wingback Chairs</Link></li>
                    <li><Link to="/product">Loungue Chairs</Link></li>
                    <li><Link to="/product">Love Seats</Link></li>
                    <li><Link to="/product">Ottoman</Link></li>
                    <li><Link to="/product">Accent Chairs</Link></li>
                    <li><Link to="/product">Arm Chairs</Link></li>
                    <li><Link to="/product">Message Chairs</Link></li>
                    <li><Link to="/product">Bean Bags</Link></li>
                    <li><Link to="/product">Stool</Link></li>
                    <li><Link to="/product">Benches</Link></li>
                  </ul>
                </section>
              </div>
              <div className="col">
                <section>
                  <h2 className="item-1-heading">SOFA CUM BED</h2>
                  <ul className="mega-links">
                    <li><Link to="/product">Wooden Sofa cum Bed</Link></li>
                    <li><Link to="/product">Fabric Sofa cum Bed</Link></li>
                    <li><Link to="/product">Sofa cum Bed</Link></li>
                  </ul>
                  <h2 className="item-1-heading">RECLINERS</h2>
                  <ul className="mega-links">
                    <li><Link to="/product">1 Seater Recliners</Link></li>
                    <li><Link to="/product">2 Seater Recliners</Link></li>
                    <li><Link to="/product">3 Seater Recliners</Link></li>
                    <li><Link to="/product">L Shaped Recliners</Link></li>
                  </ul>
                </section>
              </div>
              <div className="col">
                <section >
                   <img className='navimage' src='https://hometown.gumlet.io/media/product/97/2073/47584/1.jpg?mode=fill&h=360&w=360&dpr=1.5'></img>
                   </section>
              </div>
            </div>
          </div>
        </li>

        <li>
          <Link to="../HTML/product.html" className="menu-item-2">Living</Link>
          <div className="mega-menu">
            <div className="content">
              <div className="col">
                <section>
                  <h2 className="item-1-heading">LIVING STORAGE</h2>
                  <ul className="mega-links">
                    <li><Link to="../HTML/product.html">TV Units</Link></li>
                    <li><Link to="/product">Bookshelves</Link></li>
                    <li><Link to="/product">Display Unit</Link></li>
                    <li><Link to="/product">Magazine Racks</Link></li>
                    <li><Link to="/product">Shoe Racks</Link></li>
                    <li><Link to="/product">Wall Shelves</Link></li>
                    <li><Link to="/product">Trunk & Blanket Box</Link></li>
                    <li><Link to="/product">Cabinet & Sideboard</Link></li>
                    <li><Link to="/product">Chest Drawers</Link></li>

                  </ul>
                </section>
              </div>
              <div className="col">
              <section>
                  <h2 className="item-1-heading">SOFA SETS</h2>
                  <ul className="mega-links">
                    <li><Link to="../HTML/product.html">Fabric Sofas</Link></li>
                    <li><Link to="/product">Sofa cum Bed</Link></li>
                    <li><Link to="/product">Wooden Sofa</Link></li>
                    <li><Link to="/product">5 Seater Sofas</Link></li>
                    <li><Link to="/product">3 Seater Sofas</Link></li>
                    <li><Link to="/product">2 Seater Sofas</Link></li>
                    <li><Link to="/product">Single Seater Sofas</Link></li>
                    <li><Link to="/product">L Shaped Sofas</Link></li>
                    <li><Link to="/product">Leather Sofas</Link></li>
                    <li><Link to="/product">Office Sofas</Link></li>
                    <li><Link to="/product">Outdoor Sofas</Link></li>
                  </ul>
                </section>
              </div>
              <div className="col">
              <section>
                  <h2 className="item-1-heading">SEATING & CHAIRS</h2>
                  <ul className="mega-links">
                    <li><Link to="/product">Wingback Chairs</Link></li>
                    <li><Link to="/product">Loungue Chairs</Link></li>
                    <li><Link to="/product">Swing Chairs</Link></li>
                    <li><Link to="/product">Rocking Chairs</Link></li>
                    <li><Link to="/product">Metal Chairs</Link></li>
                    <li><Link to="/product">Love Seats</Link></li>
                    <li><Link to="/product">Ottoman</Link></li>
                    <li><Link to="/product">Accent Chairs</Link></li>
                    <li><Link to="/product">Arm Chairs</Link></li>
                    <li><Link to="/product">Message Chairs</Link></li>
                    <li><Link to="/product">Bean Bags</Link></li>
                    <li><Link to="/product">Stool</Link></li>
                    <li><Link to="/product">Benches</Link></li>
                  </ul>
                </section>
              </div>
              <div className="col">
                <section>
                  <h2 className="item-1-heading">TABLES</h2>
                  <ul className="mega-links">
                    <li><Link to="/product">Coffee Tables</Link></li>
                    <li><Link to="/product">Coffee Table Sets</Link></li>
                    <li><Link to="/product">Laptop Tables</Link></li>
                    <li><Link to="/product">Console Tables</Link></li>
                    <li><Link to="/product">Side Tables</Link></li>
                  </ul>
                  <h2 className="item-1-heading">LAMPS & LIGHTING</h2>
                  <ul className="mega-links">
                    <li><Link to="/product">Table Lamps</Link></li>
                    <li><Link to="/product">Floor Lamps</Link></li>
                    <li><Link to="/product">Hanging Lamps</Link></li>
                    <li><Link to="/product">Wall Lights</Link></li>
                    <li><Link to="/product">Spot Lights</Link></li>
                  </ul>
                </section>
              </div>
              <div className="col">
                <section >
                   <img className='navimage' src='https://img.buzzfeed.com/buzzfeed-static/static/2020-12/2/23/asset/84cac33dd28b/sub-buzz-12698-1606950145-13.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto'></img>
                   </section>
              </div>
            </div>
          </div>
        </li>

        <li>
          <Link to="../HTML/product.html" className="menu-item-3">Bedroom</Link>
          <div className="mega-menu">
            <div className="content">
              <div className="col">
                <section>
                  <h2 className="item-1-heading">BEDS</h2>
                  <ul className="mega-links">
                    <li><Link to="../HTML/product.html">King Size Beds</Link></li>
                    <li><Link to="/product">Queen Size Beds</Link></li>
                    <li><Link to="/product">Single Beds</Link></li>
                    <li><Link to="/product">Sofa cum Beds</Link></li>
                    <li><Link to="/product">Bunk Beds</Link></li>
                    <li><Link to="/product"></Link>Double Beds</li>
                    <li><Link to="/product">Hydraulic Storage Beds</Link></li>
                    <li><Link to="/product">Modular Beds</Link></li>
                    <li><Link to="/product">Metal Beds</Link></li>
                    <li><Link to="/product">Poster Beds</Link></li>
                    <li><Link to="/product">Platform Beds</Link></li>
                    <li><Link to="/product">Futons</Link></li>
                  </ul>
                </section>
              </div>
              <div className="col">
              <section>
                  <h2 className="item-1-heading">MATTRESS & BEDDING</h2>
                  <ul className="mega-links">
                    <li><Link to="/product">Mattress</Link></li>
                    <li><Link to="/product">Single Bed Mattress</Link></li>
                    <li><Link to="/product">Double Bed Mattress</Link></li>
                    <li><Link to="/product">King Size Mattress</Link></li>
                    <li><Link to="/product">Queen Size Mattress</Link></li>
                    <li><Link to="/product">Mattress Protectors</Link></li>
                  </ul>
                  <h2 className="item-1-heading">STORAGE</h2>
                  <ul className="mega-links">
                    <li><Link to="/product">Wardrobes</Link></li>
                    <li><Link to="/product">Cupboards</Link></li>
                    <li><Link to="/product">Trunks</Link></li>
                    <li><Link to="/product">Wooden Drawers</Link></li>
                    <li><Link to="/product">Blanket Boxes</Link></li>
                  </ul>
                </section>
              </div>
              <div className="col">
              <section>
                  <h2 className="item-1-heading">TABLES</h2>
                  <ul className="mega-links">
                    <li><Link to="/product">BedSide Tables</Link></li>
                    <li><Link to="/product">Dressing Tables</Link></li>
                    <li><Link to="/product">BreakFast Tables</Link></li>
                  </ul>
                  <h2 className="item-1-heading">DECOR</h2>
                  <ul className="mega-links">
                    <li><Link to="/product">Photo Frames</Link></li>
                    <li><Link to="/product">Wall Shelves</Link></li>
                    <li><Link to="/product">Wall Clocks</Link></li>
                    <li><Link to="/product">Wall Arts</Link></li>
                    <li><Link to="/product">Wall Mirrors</Link></li>
                    <li><Link to="/product">Room Divider</Link></li>
                  </ul>
                </section>
              </div>
              <div className="col">
                <section>
                  <h2 className="item-1-heading">HOME FURNISH</h2>
                  <ul className="mega-links">
                    <li><Link to="/product">Bed Sheets</Link></li>
                    <li><Link to="/product">Bed Covers</Link></li>
                    <li><Link to="/product">Cusion Covers</Link></li>
                    <li><Link to="/product">Quilts</Link></li>
                    <li><Link to="/product">Door Mats</Link></li>
                    <li><Link to="/product">Floor Runners</Link></li>
                  </ul>
                  <h2 className="item-1-heading">LAMPS & LIGHTING</h2>
                  <ul className="mega-links">
                    <li><Link to="/product">Table Lamps</Link></li>
                    <li><Link to="/product">Floor Lamps</Link></li>
                    <li><Link to="/product">Hanging Lamps</Link></li>
                    <li><Link to="/product">Wall Lights</Link></li>
                    <li><Link to="/product">Spot Lights</Link></li>
                  </ul>
                </section>
              </div>
              <div className="col">
                <section >
                   <img className='navimage' src='https://m.economictimes.com/thumb/msid-99768075,width-1500,height-1300,resizemode-4,imgsize-123788/1.jpg'></img>
                   </section>
              </div>
            </div>
          </div>
        </li>

        <li>
          <Link to="../HTML/Home&Living.html" className="menu-item-4">Dining & Kitchen</Link>
          <div className="mega-menu">
            <div className="content">
              <div className="col">
                <section>
                  <h2 className="item-1-heading">DINING FURNITURE</h2>
                  <ul className="mega-links">
                    <li><Link to="../HTML/product.html">Dining Table Sets</Link></li>
                    <li><Link to="/product">2 Seater Dining Sets</Link></li>
                    <li><Link to="/product">4 Seater Dining Sets</Link></li>
                    <li><Link to="/product">6 Seater Dining Sets</Link></li>
                    <li><Link to="/product">8 Seater Dining Sets</Link></li>
                    <li><Link to="/product"></Link>Extendable Dining Sets</li>
                    <li><Link to="/product">Dining Tables</Link></li>
                    <li><Link to="/product">Dining Chairs</Link></li>
                    <li><Link to="/product">Iconic Chairs</Link></li>
                    <li><Link to="/product">Benches</Link></li>
                  </ul>
                </section>
              </div>
              <div className="col">
              <section>
                  <h2 className="item-1-heading">KITCHEN FURNITURE</h2>
                  <ul className="mega-links">
                    <li><Link to="/product">Kitchen Cupboard</Link></li>
                    <li><Link to="/product">Kitchen Sideboards</Link></li>
                    <li><Link to="/product">Kitchen Cabinets</Link></li>
                    <li><Link to="/product">Kitchen Trolly</Link></li>
                    <li><Link to="/product">Kitchen Racks</Link></li>
                    <li><Link to="/product">Kitchen Shelves</Link></li>
                    <li><Link to="/product"></Link>Crockery Units</li>
                  </ul>
                  <h2 className="item-1-heading">MODULAR KITCHEN</h2>
                  <ul className="mega-links">
                    <li><Link to="/product">L-Shaped Modular Kitchen</Link></li>
                    <li><Link to="/product">U-Shaped Modular Kitchen</Link></li>
                    <li><Link to="/product">Parallel Shaped Modular Kitchen</Link></li>
                    <li><Link to="/product">Straight Shaped Modular Kitchen</Link></li>
                  </ul>
                </section>
              </div>
              <div className="col">
              <section>
                  <h2 className="item-1-heading">SERVEWARE</h2>
                  <ul className="mega-links">
                    <li><Link to="/product">Dinner sets</Link></li>
                    <li><Link to="/product">Plates</Link></li>
                    <li><Link to="/product">Bowls</Link></li>
                    <li><Link to="/product">Platters</Link></li>
                    <li><Link to="/product">Teapots</Link></li>
                  </ul>
                  <h2 className="item-1-heading">KITCHENWARE</h2>
                  <ul className="mega-links">
                    <li><Link to="/product">Kitchen Organisers</Link></li>
                    <li><Link to="/product">Kitchen Containers</Link></li>
                    <li><Link to="/product">Chopping Boards</Link></li>
                    <li><Link to="/product">Jars</Link></li>
                    <li><Link to="/product">Spice Boxes</Link></li>
                    <li><Link to="/product">Bakeware</Link></li>
                  </ul>
                </section>
              </div>
              <div className="col">
                <section >
                   <img className='navimage' src='https://images.woodenstreet.de/image/cache/data%2Fdining-set%2F2-seater%2Fpaul-2-seater-dining-set%2Fhoney%2Fupdated%2F1-810x702.jpg'></img>
                   </section>
              </div>
            </div>
          </div>
        </li>
        <li>
          <Link to="/product" className="menu-item-5">Kids Room</Link>
          <div className="mega-menu">
            <div className="content">
              <div className="col">
                <section>
                  <h2 className="item-1-heading">KIDS BEDROOM</h2>
                  <ul className="mega-links">
                    <li><Link to="../HTML/product.html">Kids Bed</Link></li>
                    <li><Link to="/product">Bunk Bed</Link></li>
                    <li><Link to="/product">Truddle Bed</Link></li>
                    <li><Link to="/product">Single Bed</Link></li>
                    <li><Link to="/product">Cribs</Link></li>
                    <li><Link to="/product"></Link>Kids Sofa</li>
                    <li><Link to="/product">Kids Bean Bag</Link></li>
                    <li><Link to="/product">Stroller</Link></li>
                    <li><Link to="/product">Kids Bedside Table</Link></li>
                    <li><Link to="/product">Blanket Box</Link></li>
                  </ul>
                </section>
              </div>
              <div className="col">
              <section>
                  <h2 className="item-1-heading">STUDY</h2>
                  <ul className="mega-links">
                    <li><Link to="/product">Kids Study Table</Link></li>
                    <li><Link to="/product">Kids Chairs</Link></li>
                    <li><Link to="/product">Kids Highchairs</Link></li>
                    <li><Link to="/product">Kids Boards</Link></li>
                    <li><Link to="/product">Kids BookShelves</Link></li>
                    <li><Link to="/product">Kids Computer Table</Link></li>
                    <li><Link to="/product"></Link>Kids Writing Table</li>
                    <li><Link to="/product"></Link>Kids Laptop Table</li>
                    <li><Link to="/product"></Link>Kids Activity Table</li>
                  </ul>
                </section>
              </div>
              <div className="col">
              <section>
                  <h2 className="item-1-heading">KIDS FURNISHING</h2>
                  <ul className="mega-links">
                    <li><Link to="/product">Kids Bedsheets</Link></li>
                    <li><Link to="/product">Kids Cushion Covers</Link></li>
                    <li><Link to="/product">Kids Room Curtains</Link></li>
                    <li><Link to="/product">Kids Carpets</Link></li>
                    <li><Link to="/product">Kids Blankets</Link></li>
                    <li><Link to="/product">Kids Pillow</Link></li>
                    <li><Link to="/product">Kids Mattress</Link></li>
                    <li><Link to="/product">Kids Comforters</Link></li>
                    <li><Link to="/product">Kids Mats</Link></li>
                  </ul>
                </section>
              </div>
              <div className="col">
                <section >
                   <img className='navimage' src='https://images.woodenstreet.de/image/cache/data%2Fbunk-beds%2Fblossom-bunk-bed%2Fupdated%2Fhoney%2F1-750x650.jpg'></img>
                   </section>
              </div>
            </div>
          </div>
        </li>
        <li>
          <Link to="/product" className="menu-item-6">Study & Office</Link>
          <div className="mega-menu">
            <div className="content">
              <div className="col">
                <section>
                  <h2 className="item-1-heading">TABLES</h2>
                  <ul className="mega-links">
                    <li><Link to="../HTML/product.html">Study Table</Link></li>
                    <li><Link to="/product">Computer Table</Link></li>
                    <li><Link to="/product">Office Table</Link></li>
                    <li><Link to="/product">Laptop Table</Link></li>
                    <li><Link to="/product">Adjustable Table</Link></li>
                    <li><Link to="/product"></Link>Corner Table</li>
                    <li><Link to="/product">Folding Table</Link></li>
                    <li><Link to="/product">Portable Table</Link></li>
                    <li><Link to="/product">Gaming Desk</Link></li>
                  </ul>
                </section>
              </div>
              <div className="col">
              <section>
                  <h2 className="item-1-heading">SEATING</h2>
                  <ul className="mega-links">
                    <li><Link to="/product">Office Chairs</Link></li>
                    <li><Link to="/product">Study Chairs</Link></li>
                    <li><Link to="/product">Revolving Chairs</Link></li>
                    <li><Link to="/product">Ergonomic Chairs</Link></li>
                    <li><Link to="/product">Study Chairs</Link></li>
                    <li><Link to="/product">Visiting Chairs</Link></li>
                  </ul>
                </section>
              </div>
              <div className="col">
              <section>
                  <h2 className="item-1-heading">OFFICE FURNITURE</h2>
                  <ul className="mega-links">
                    <li><Link to="/product">Office Chairs</Link></li>
                    <li><Link to="/product">Study Chairs</Link></li>
                    <li><Link to="/product">Revolving Chairs</Link></li>
                    <li><Link to="/product">Ergonomic Chairs</Link></li>
                    <li><Link to="/product">Study Chairs</Link></li>
                    <li><Link to="/product">Visiting Chairs</Link></li>
                  </ul>
                </section>
              </div>
              <div className="col">
                <section >
                   <img className='navimage' src='https://images.woodenstreet.de/image/cache/data%2Foffice-table%2Fclifton-wood-and-metal-workstation-table%2Fupdated%2Fupdated%2F13-810x702.jpg'></img>
                   </section>
              </div>
            </div>
          </div>
        </li>
        <li>
          <Link to="/product" className="menu-item-8">Lamp & Lighting</Link>
          <div className="mega-menu">
            <div className="content4">
              <div className="col">
                <section>
                  <h2 className="item-5-heading">Makeup</h2>
                  <ul className="mega-links">
                    <li><Link to="/product">Lipstick</Link></li>
                    <li><Link to="/product">Lip Gloss</Link></li>
                    <li><Link to="/product">Lip Liner</Link></li>
                    <li><Link to="/product">Mascara</Link></li>
                    <li><Link to="/product">Eyeliner</Link></li>
                    <li><Link to="/product">Kajal</Link></li>
                    <li><Link to="/product">Eyeshadow</Link></li>
                    <li><Link to="/product">Foundation</Link></li>
                    <li><Link to="/product">Primer</Link></li>
                    <li><Link to="/product">Concealer</Link></li>
                    <li><Link to="/product">Compact</Link></li>
                    <li><Link to="/product">Nail Polish</Link></li>
                  </ul>
                </section>
              </div>
              <div className="col">
                <section>
                  <h2 className="item-5-heading">Skincare, Bath & Body</h2>
                  <ul className="mega-links">
                    <li><Link to="/product">Face Moisturiser</Link></li>
                    <li><Link to="/product">Cleanser</Link></li>
                    <li><Link to="/product">Masks & Peel</Link></li>
                    <li><Link to="/product">Sunscreen</Link></li>
                    <li><Link to="/product">Serum</Link></li>
                    <li><Link to="/product">Face Wash</Link></li>
                    <li><Link to="/product">Lip Balm</Link></li>
                    <li><Link to="/product">Body Lotion</Link></li>
                    <li><Link to="/product">Body Wash</Link></li>
                    <li><Link to="/product">Body Scrub</Link></li>
                    <li><Link to="/product">Hand Cream</Link></li>
                  </ul>
                  <h2 className="item-5-heading">Baby Care</h2>
                  <h2 className="item-5-heading">Masks</h2>
                </section>
              </div>
              <div className="col">
                <section>
                  <h2 className="item-5-heading">Hair Carer</h2>
                  <ul className="mega-links">
                    <li><Link to="/product">Shampoo</Link></li>
                    <li><Link to="/product">Conditoner</Link></li>
                    <li><Link to="/product">Hair Cream</Link></li>
                    <li><Link to="/product">Hair Oil</Link></li>
                    <li><Link to="/product">Hair Gel</Link></li>
                    <li><Link to="/product">Hair Color</Link></li>
                    <li><Link to="/product">Hair Serum</Link></li>
                    <li><Link to="/product">Hair Accessory</Link></li>
                  </ul>
                  <h2 className="item-5-heading">Fragrances</h2>
                  {/* <ul className="mega-links">
                      <li><Link to="/product">Perfume</Link></li>
                      <li><Link to="/product">Deodrant</Link></li>
                      <li><Link to="/product">Body Mist</Link></li>
                </section>
              </div>
              <div className="col">
                <section>
                  <h2 className="item-5-heading">Appliances</h2>
                  <ul className="mega-links">
                    <li><Link to="/product">Hair Straightner</Link></li>
                    <li><Link to="/product">Hair Dryer</Link></li>
                    <li><Link to="/product">Epilator</Link></li>
                  </ul>
                  <h2 className="item-5-heading">Men's Grooming</h2>
                  <ul className="mega-links">
                    <li><Link to="/product">Trimmers</Link></li>
                    <li><Link to="/product">Beard Oil</Link></li>
                    <li><Link to="/product">Hair Wax</Link></li>
                  </ul>
                  <h2 className="item-5-heading">Beauty Gift & Makeup Set</h2>
                  <ul className="mega-links">
                    <li><Link to="/product">Beauty Gift</Link></li>
                    <li><Link to="/product">Makeup Kit</Link></li>
                  </ul> */}
                  <h2 className="item-5-heading">Premium Beauty</h2>
                  <h2 className="item-5-heading">Wellness & Hygiene</h2>
                </section>
              </div>

              <div className="col">
                <section>
                  <h2 className="item-5-heading">Top Brands</h2>
                  <ul className="mega-links">
                    <li><Link to="/product">Lakme</Link></li>
                    <li><Link to="/product">Maybelline</Link></li>
                    <li><Link to="/product">LOreal</Link></li>
                    <li><Link to="/product">Philips</Link></li>
                    <li><Link to="/product">Bath & Body Works</Link></li>
                    <li><Link to="/product">THE BODY SHOP</Link></li>
                    <li><Link to="/product">Biotique</Link></li>
                    <li><Link to="/product">Mamaearth</Link></li>
                    <li><Link to="/product">MCaffeine</Link></li>
                    <li><Link to="/product">Nivea</Link></li>
                    <li><Link to="/product">Lotus Herbals</Link></li>
                    <li><Link to="/product">LOreal Professionnel</Link></li>
                    <li><Link to="/product">KAMA AYURVEDA</Link></li>
                    <li><Link to="/product">M.A.C</Link></li>
                    <li><Link to="/product">Forest Essentials</Link></li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </li>
        <li>
          <Link to="/product" className="menu-item-9">Furnishing</Link>
          <div className="mega-menu">
            <div className="content4">
              <div className="col">
                <section>
                  <h2 className="item-5-heading">Makeup</h2>
                  <ul className="mega-links">
                    <li><Link to="/product">Lipstick</Link></li>
                    <li><Link to="/product">Lip Gloss</Link></li>
                    <li><Link to="/product">Lip Liner</Link></li>
                    <li><Link to="/product">Mascara</Link></li>
                    <li><Link to="/product">Eyeliner</Link></li>
                    <li><Link to="/product">Kajal</Link></li>
                    <li><Link to="/product">Eyeshadow</Link></li>
                    <li><Link to="/product">Foundation</Link></li>
                    <li><Link to="/product">Primer</Link></li>
                    <li><Link to="/product">Concealer</Link></li>
                    <li><Link to="/product">Compact</Link></li>
                    <li><Link to="/product">Nail Polish</Link></li>
                  </ul>
                </section>
              </div>
              <div className="col">
                <section>
                  <h2 className="item-5-heading">Skincare, Bath & Body</h2>
                  <ul className="mega-links">
                    <li><Link to="/product">Face Moisturiser</Link></li>
                    <li><Link to="/product">Cleanser</Link></li>
                    <li><Link to="/product">Masks & Peel</Link></li>
                    <li><Link to="/product">Sunscreen</Link></li>
                    <li><Link to="/product">Serum</Link></li>
                    <li><Link to="/product">Face Wash</Link></li>
                    <li><Link to="/product">Lip Balm</Link></li>
                    <li><Link to="/product">Body Lotion</Link></li>
                    <li><Link to="/product">Body Wash</Link></li>
                    <li><Link to="/product">Body Scrub</Link></li>
                    <li><Link to="/product">Hand Cream</Link></li>
                  </ul>
                  <h2 className="item-5-heading">Baby Care</h2>
                  <h2 className="item-5-heading">Masks</h2>
                </section>
              </div>
              <div className="col">
                <section>
                  <h2 className="item-5-heading">Hair Carer</h2>
                  <ul className="mega-links">
                    <li><Link to="/product">Shampoo</Link></li>
                    <li><Link to="/product">Conditoner</Link></li>
                    <li><Link to="/product">Hair Cream</Link></li>
                    <li><Link to="/product">Hair Oil</Link></li>
                    <li><Link to="/product">Hair Gel</Link></li>
                    <li><Link to="/product">Hair Color</Link></li>
                    <li><Link to="/product">Hair Serum</Link></li>
                    <li><Link to="/product">Hair Accessory</Link></li>
                  </ul>
                  <h2 className="item-5-heading">Fragrances</h2>
                  {/* <ul className="mega-links">
                      <li><Link to="/product">Perfume</Link></li>
                      <li><Link to="/product">Deodrant</Link></li>
                      <li><Link to="/product">Body Mist</Link></li>
                </section>
              </div>
              <div className="col">
                <section>
                  <h2 className="item-5-heading">Appliances</h2>
                  <ul className="mega-links">
                    <li><Link to="/product">Hair Straightner</Link></li>
                    <li><Link to="/product">Hair Dryer</Link></li>
                    <li><Link to="/product">Epilator</Link></li>
                  </ul>
                  <h2 className="item-5-heading">Men's Grooming</h2>
                  <ul className="mega-links">
                    <li><Link to="/product">Trimmers</Link></li>
                    <li><Link to="/product">Beard Oil</Link></li>
                    <li><Link to="/product">Hair Wax</Link></li>
                  </ul>
                  <h2 className="item-5-heading">Beauty Gift & Makeup Set</h2>
                  <ul className="mega-links">
                    <li><Link to="/product">Beauty Gift</Link></li>
                    <li><Link to="/product">Makeup Kit</Link></li>
                  </ul> */}
                  <h2 className="item-5-heading">Premium Beauty</h2>
                  <h2 className="item-5-heading">Wellness & Hygiene</h2>
                </section>
              </div>

              <div className="col">
                <section>
                  <h2 className="item-5-heading">Top Brands</h2>
                  <ul className="mega-links">
                    <li><Link to="/product">Lakme</Link></li>
                    <li><Link to="/product">Maybelline</Link></li>
                    <li><Link to="/product">LOreal</Link></li>
                    <li><Link to="/product">Philips</Link></li>
                    <li><Link to="/product">Bath & Body Works</Link></li>
                    <li><Link to="/product">THE BODY SHOP</Link></li>
                    <li><Link to="/product">Biotique</Link></li>
                    <li><Link to="/product">Mamaearth</Link></li>
                    <li><Link to="/product">MCaffeine</Link></li>
                    <li><Link to="/product">Nivea</Link></li>
                    <li><Link to="/product">Lotus Herbals</Link></li>
                    <li><Link to="/product">LOreal Professionnel</Link></li>
                    <li><Link to="/product">KAMA AYURVEDA</Link></li>
                    <li><Link to="/product">M.A.C</Link></li>
                    <li><Link to="/product">Forest Essentials</Link></li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </nav>  
    </header>
  
    
  </>
  )








}
