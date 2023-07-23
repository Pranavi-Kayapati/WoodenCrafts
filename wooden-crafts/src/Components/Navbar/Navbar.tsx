import { Tabs, TabList, TabPanels, Tab, TabPanel, Heading, Center, Container } from '@chakra-ui/react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css';
import logo2 from './logo/logo2.png'
import { BiUserCircle} from 'react-icons/bi';
import { AiOutlineHeart} from 'react-icons/ai';
import { BiCartAlt} from 'react-icons/bi';

export const Navbar = () => {
  return (
  <>
  
  <header className="header">
      {/* <!-- <a style="margin-left: 30px;cursor:pointer;" href="../HTML/home.html" className="logo"><img src="../images/logo.png" alt=""></a> --> */}
    <nav>
      <div className='uppernav'>
        <img id='logo' src={logo2}></img>
        <input className="search-div" type="text" placeholder="Search for Products and more"/>
        <div className='react-icons'>
        <BiUserCircle  className='icon' size={"25px"} color='#fba720' opacity={0.8}/>
        
        <p>Profile</p>
        <AiOutlineHeart  className='icon' size={"25px"} color='#fba720'/>
        <p>Wishlist</p>
        <BiCartAlt className='icon'  size={"25px"} color='#fba720'/>
        <Link to="/cart"><p>Cart</p></Link>
        
        </div>
      </div>
      <ul className="menu-items">
        <li>
          <a href="../HTML/product.html" className="menu-item-1">Sofas</a>
          <div className="mega-menu">
            <div className="content">
              <div className="col">
                <section>
                  <h2 className="item-1-heading">SOFA SETS</h2>
                  <ul className="mega-links">
                    <li><a href="../HTML/product.html">Fabric Sofas</a></li>
                    <li><a href="#">Sofa cum Bed</a></li>
                    <li><a href="#">Wooden Sofa</a></li>
                    <li><a href="#">5 Seater Sofas</a></li>
                    <li><a href="#">3 Seater Sofas</a></li>
                    <li><a href="#">2 Seater Sofas</a></li>
                    <li><a href="#">Single Seater Sofas</a></li>
                    <li><a href="#">L Shaped Sofas</a></li>
                    <li><a href="#">Leather Sofas</a></li>
                    <li><a href="#">Office Sofas</a></li>
                    <li><a href="#">Outdoor Sofas</a></li>
                  </ul>
                </section>
              </div>
              <div className="col">
                <section>
                  <h2 className="item-1-heading">SEATING</h2>
                  <ul className="mega-links">
                    <li><a href="#">Wingback Chairs</a></li>
                    <li><a href="#">Loungue Chairs</a></li>
                    <li><a href="#">Love Seats</a></li>
                    <li><a href="#">Ottoman</a></li>
                    <li><a href="#">Accent Chairs</a></li>
                    <li><a href="#">Arm Chairs</a></li>
                    <li><a href="#">Message Chairs</a></li>
                    <li><a href="#">Bean Bags</a></li>
                    <li><a href="#">Stool</a></li>
                    <li><a href="#">Benches</a></li>
                  </ul>
                </section>
              </div>
              <div className="col">
                <section>
                  <h2 className="item-1-heading">SOFA CUM BED</h2>
                  <ul className="mega-links">
                    <li><a href="#">Wooden Sofa cum Bed</a></li>
                    <li><a href="#">Fabric Sofa cum Bed</a></li>
                    <li><a href="#">Sofa cum Bed</a></li>
                  </ul>
                  <h2 className="item-1-heading">RECLINERS</h2>
                  <ul className="mega-links">
                    <li><a href="#">1 Seater Recliners</a></li>
                    <li><a href="#">2 Seater Recliners</a></li>
                    <li><a href="#">3 Seater Recliners</a></li>
                    <li><a href="#">L Shaped Recliners</a></li>
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
          <a href="../HTML/product.html" className="menu-item-2">Living</a>
          <div className="mega-menu">
            <div className="content">
              <div className="col">
                <section>
                  <h2 className="item-1-heading">LIVING STORAGE</h2>
                  <ul className="mega-links">
                    <li><a href="../HTML/product.html">TV Units</a></li>
                    <li><a href="#">Bookshelves</a></li>
                    <li><a href="#">Display Unit</a></li>
                    <li><a href="#">Magazine Racks</a></li>
                    <li><a href="#">Shoe Racks</a></li>
                    <li><a href="#">Wall Shelves</a></li>
                    <li><a href="#">Trunk & Blanket Box</a></li>
                    <li><a href="#">Cabinet & Sideboard</a></li>
                    <li><a href="#">Chest Drawers</a></li>

                  </ul>
                </section>
              </div>
              <div className="col">
              <section>
                  <h2 className="item-1-heading">SOFA SETS</h2>
                  <ul className="mega-links">
                    <li><a href="../HTML/product.html">Fabric Sofas</a></li>
                    <li><a href="#">Sofa cum Bed</a></li>
                    <li><a href="#">Wooden Sofa</a></li>
                    <li><a href="#">5 Seater Sofas</a></li>
                    <li><a href="#">3 Seater Sofas</a></li>
                    <li><a href="#">2 Seater Sofas</a></li>
                    <li><a href="#">Single Seater Sofas</a></li>
                    <li><a href="#">L Shaped Sofas</a></li>
                    <li><a href="#">Leather Sofas</a></li>
                    <li><a href="#">Office Sofas</a></li>
                    <li><a href="#">Outdoor Sofas</a></li>
                  </ul>
                </section>
              </div>
              <div className="col">
              <section>
                  <h2 className="item-1-heading">SEATING & CHAIRS</h2>
                  <ul className="mega-links">
                    <li><a href="#">Wingback Chairs</a></li>
                    <li><a href="#">Loungue Chairs</a></li>
                    <li><a href="#">Swing Chairs</a></li>
                    <li><a href="#">Rocking Chairs</a></li>
                    <li><a href="#">Metal Chairs</a></li>
                    <li><a href="#">Love Seats</a></li>
                    <li><a href="#">Ottoman</a></li>
                    <li><a href="#">Accent Chairs</a></li>
                    <li><a href="#">Arm Chairs</a></li>
                    <li><a href="#">Message Chairs</a></li>
                    <li><a href="#">Bean Bags</a></li>
                    <li><a href="#">Stool</a></li>
                    <li><a href="#">Benches</a></li>
                  </ul>
                </section>
              </div>
              <div className="col">
                <section>
                  <h2 className="item-1-heading">TABLES</h2>
                  <ul className="mega-links">
                    <li><a href="#">Coffee Tables</a></li>
                    <li><a href="#">Coffee Table Sets</a></li>
                    <li><a href="#">Laptop Tables</a></li>
                    <li><a href="#">Console Tables</a></li>
                    <li><a href="#">Side Tables</a></li>
                  </ul>
                  <h2 className="item-1-heading">LAMPS & LIGHTING</h2>
                  <ul className="mega-links">
                    <li><a href="#">Table Lamps</a></li>
                    <li><a href="#">Floor Lamps</a></li>
                    <li><a href="#">Hanging Lamps</a></li>
                    <li><a href="#">Wall Lights</a></li>
                    <li><a href="#">Spot Lights</a></li>
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
          <a href="../HTML/product.html" className="menu-item-3">Bedroom</a>
          <div className="mega-menu">
            <div className="content">
              <div className="col">
                <section>
                  <h2 className="item-1-heading">BEDS</h2>
                  <ul className="mega-links">
                    <li><a href="../HTML/product.html">King Size Beds</a></li>
                    <li><a href="#">Queen Size Beds</a></li>
                    <li><a href="#">Single Beds</a></li>
                    <li><a href="#">Sofa cum Beds</a></li>
                    <li><a href="#">Bunk Beds</a></li>
                    <li><a href="#"></a>Double Beds</li>
                    <li><a href="#">Hydraulic Storage Beds</a></li>
                    <li><a href="#">Modular Beds</a></li>
                    <li><a href="#">Metal Beds</a></li>
                    <li><a href="#">Poster Beds</a></li>
                    <li><a href="#">Platform Beds</a></li>
                    <li><a href="#">Futons</a></li>
                  </ul>
                </section>
              </div>
              <div className="col">
              <section>
                  <h2 className="item-1-heading">MATTRESS & BEDDING</h2>
                  <ul className="mega-links">
                    <li><a href="#">Mattress</a></li>
                    <li><a href="#">Single Bed Mattress</a></li>
                    <li><a href="#">Double Bed Mattress</a></li>
                    <li><a href="#">King Size Mattress</a></li>
                    <li><a href="#">Queen Size Mattress</a></li>
                    <li><a href="#">Mattress Protectors</a></li>
                  </ul>
                  <h2 className="item-1-heading">STORAGE</h2>
                  <ul className="mega-links">
                    <li><a href="#">Wardrobes</a></li>
                    <li><a href="#">Cupboards</a></li>
                    <li><a href="#">Trunks</a></li>
                    <li><a href="#">Wooden Drawers</a></li>
                    <li><a href="#">Blanket Boxes</a></li>
                  </ul>
                </section>
              </div>
              <div className="col">
              <section>
                  <h2 className="item-1-heading">TABLES</h2>
                  <ul className="mega-links">
                    <li><a href="#">BedSide Tables</a></li>
                    <li><a href="#">Dressing Tables</a></li>
                    <li><a href="#">BreakFast Tables</a></li>
                  </ul>
                  <h2 className="item-1-heading">DECOR</h2>
                  <ul className="mega-links">
                    <li><a href="#">Photo Frames</a></li>
                    <li><a href="#">Wall Shelves</a></li>
                    <li><a href="#">Wall Clocks</a></li>
                    <li><a href="#">Wall Arts</a></li>
                    <li><a href="#">Wall Mirrors</a></li>
                    <li><a href="#">Room Divider</a></li>
                  </ul>
                </section>
              </div>
              <div className="col">
                <section>
                  <h2 className="item-1-heading">HOME FURNISH</h2>
                  <ul className="mega-links">
                    <li><a href="#">Bed Sheets</a></li>
                    <li><a href="#">Bed Covers</a></li>
                    <li><a href="#">Cusion Covers</a></li>
                    <li><a href="#">Quilts</a></li>
                    <li><a href="#">Door Mats</a></li>
                    <li><a href="#">Floor Runners</a></li>
                  </ul>
                  <h2 className="item-1-heading">LAMPS & LIGHTING</h2>
                  <ul className="mega-links">
                    <li><a href="#">Table Lamps</a></li>
                    <li><a href="#">Floor Lamps</a></li>
                    <li><a href="#">Hanging Lamps</a></li>
                    <li><a href="#">Wall Lights</a></li>
                    <li><a href="#">Spot Lights</a></li>
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
          <a href="../HTML/Home&Living.html" className="menu-item-4">Dining & Kitchen</a>
          <div className="mega-menu">
            <div className="content">
              <div className="col">
                <section>
                  <h2 className="item-1-heading">DINING FURNITURE</h2>
                  <ul className="mega-links">
                    <li><a href="../HTML/product.html">Dining Table Sets</a></li>
                    <li><a href="#">2 Seater Dining Sets</a></li>
                    <li><a href="#">4 Seater Dining Sets</a></li>
                    <li><a href="#">6 Seater Dining Sets</a></li>
                    <li><a href="#">8 Seater Dining Sets</a></li>
                    <li><a href="#"></a>Extendable Dining Sets</li>
                    <li><a href="#">Dining Tables</a></li>
                    <li><a href="#">Dining Chairs</a></li>
                    <li><a href="#">Iconic Chairs</a></li>
                    <li><a href="#">Benches</a></li>
                  </ul>
                </section>
              </div>
              <div className="col">
              <section>
                  <h2 className="item-1-heading">KITCHEN FURNITURE</h2>
                  <ul className="mega-links">
                    <li><a href="#">Kitchen Cupboard</a></li>
                    <li><a href="#">Kitchen Sideboards</a></li>
                    <li><a href="#">Kitchen Cabinets</a></li>
                    <li><a href="#">Kitchen Trolly</a></li>
                    <li><a href="#">Kitchen Racks</a></li>
                    <li><a href="#">Kitchen Shelves</a></li>
                    <li><a href="#"></a>Crockery Units</li>
                  </ul>
                  <h2 className="item-1-heading">MODULAR KITCHEN</h2>
                  <ul className="mega-links">
                    <li><a href="#">L-Shaped Modular Kitchen</a></li>
                    <li><a href="#">U-Shaped Modular Kitchen</a></li>
                    <li><a href="#">Parallel Shaped Modular Kitchen</a></li>
                    <li><a href="#">Straight Shaped Modular Kitchen</a></li>
                  </ul>
                </section>
              </div>
              <div className="col">
              <section>
                  <h2 className="item-1-heading">SERVEWARE</h2>
                  <ul className="mega-links">
                    <li><a href="#">Dinner sets</a></li>
                    <li><a href="#">Plates</a></li>
                    <li><a href="#">Bowls</a></li>
                    <li><a href="#">Platters</a></li>
                    <li><a href="#">Teapots</a></li>
                  </ul>
                  <h2 className="item-1-heading">KITCHENWARE</h2>
                  <ul className="mega-links">
                    <li><a href="#">Kitchen Organisers</a></li>
                    <li><a href="#">Kitchen Containers</a></li>
                    <li><a href="#">Chopping Boards</a></li>
                    <li><a href="#">Jars</a></li>
                    <li><a href="#">Spice Boxes</a></li>
                    <li><a href="#">Bakeware</a></li>
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
          <a href="#" className="menu-item-5">Kids Room</a>
          <div className="mega-menu">
            <div className="content">
              <div className="col">
                <section>
                  <h2 className="item-1-heading">KIDS BEDROOM</h2>
                  <ul className="mega-links">
                    <li><a href="../HTML/product.html">Kids Bed</a></li>
                    <li><a href="#">Bunk Bed</a></li>
                    <li><a href="#">Truddle Bed</a></li>
                    <li><a href="#">Single Bed</a></li>
                    <li><a href="#">Cribs</a></li>
                    <li><a href="#"></a>Kids Sofa</li>
                    <li><a href="#">Kids Bean Bag</a></li>
                    <li><a href="#">Stroller</a></li>
                    <li><a href="#">Kids Bedside Table</a></li>
                    <li><a href="#">Blanket Box</a></li>
                  </ul>
                </section>
              </div>
              <div className="col">
              <section>
                  <h2 className="item-1-heading">STUDY</h2>
                  <ul className="mega-links">
                    <li><a href="#">Kids Study Table</a></li>
                    <li><a href="#">Kids Chairs</a></li>
                    <li><a href="#">Kids Highchairs</a></li>
                    <li><a href="#">Kids Boards</a></li>
                    <li><a href="#">Kids BookShelves</a></li>
                    <li><a href="#">Kids Computer Table</a></li>
                    <li><a href="#"></a>Kids Writing Table</li>
                    <li><a href="#"></a>Kids Laptop Table</li>
                    <li><a href="#"></a>Kids Activity Table</li>
                  </ul>
                </section>
              </div>
              <div className="col">
              <section>
                  <h2 className="item-1-heading">KIDS FURNISHING</h2>
                  <ul className="mega-links">
                    <li><a href="#">Kids Bedsheets</a></li>
                    <li><a href="#">Kids Cushion Covers</a></li>
                    <li><a href="#">Kids Room Curtains</a></li>
                    <li><a href="#">Kids Carpets</a></li>
                    <li><a href="#">Kids Blankets</a></li>
                    <li><a href="#">Kids Pillow</a></li>
                    <li><a href="#">Kids Mattress</a></li>
                    <li><a href="#">Kids Comforters</a></li>
                    <li><a href="#">Kids Mats</a></li>
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
          <a href="#" className="menu-item-6">Study & Office</a>
          <div className="mega-menu">
            <div className="content">
              <div className="col">
                <section>
                  <h2 className="item-1-heading">TABLES</h2>
                  <ul className="mega-links">
                    <li><a href="../HTML/product.html">Study Table</a></li>
                    <li><a href="#">Computer Table</a></li>
                    <li><a href="#">Office Table</a></li>
                    <li><a href="#">Laptop Table</a></li>
                    <li><a href="#">Adjustable Table</a></li>
                    <li><a href="#"></a>Corner Table</li>
                    <li><a href="#">Folding Table</a></li>
                    <li><a href="#">Portable Table</a></li>
                    <li><a href="#">Gaming Desk</a></li>
                  </ul>
                </section>
              </div>
              <div className="col">
              <section>
                  <h2 className="item-1-heading">SEATING</h2>
                  <ul className="mega-links">
                    <li><a href="#">Office Chairs</a></li>
                    <li><a href="#">Study Chairs</a></li>
                    <li><a href="#">Revolving Chairs</a></li>
                    <li><a href="#">Ergonomic Chairs</a></li>
                    <li><a href="#">Study Chairs</a></li>
                    <li><a href="#">Visiting Chairs</a></li>
                  </ul>
                </section>
              </div>
              <div className="col">
              <section>
                  <h2 className="item-1-heading">OFFICE FURNITURE</h2>
                  <ul className="mega-links">
                    <li><a href="#">Office Chairs</a></li>
                    <li><a href="#">Study Chairs</a></li>
                    <li><a href="#">Revolving Chairs</a></li>
                    <li><a href="#">Ergonomic Chairs</a></li>
                    <li><a href="#">Study Chairs</a></li>
                    <li><a href="#">Visiting Chairs</a></li>
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
          <a href="#" className="menu-item-8">Lamp & Lighting</a>
          <div className="mega-menu">
            <div className="content4">
              <div className="col">
                <section>
                  <h2 className="item-5-heading">Makeup</h2>
                  <ul className="mega-links">
                    <li><a href="#">Lipstick</a></li>
                    <li><a href="#">Lip Gloss</a></li>
                    <li><a href="#">Lip Liner</a></li>
                    <li><a href="#">Mascara</a></li>
                    <li><a href="#">Eyeliner</a></li>
                    <li><a href="#">Kajal</a></li>
                    <li><a href="#">Eyeshadow</a></li>
                    <li><a href="#">Foundation</a></li>
                    <li><a href="#">Primer</a></li>
                    <li><a href="#">Concealer</a></li>
                    <li><a href="#">Compact</a></li>
                    <li><a href="#">Nail Polish</a></li>
                  </ul>
                </section>
              </div>
              <div className="col">
                <section>
                  <h2 className="item-5-heading">Skincare, Bath & Body</h2>
                  <ul className="mega-links">
                    <li><a href="#">Face Moisturiser</a></li>
                    <li><a href="#">Cleanser</a></li>
                    <li><a href="#">Masks & Peel</a></li>
                    <li><a href="#">Sunscreen</a></li>
                    <li><a href="#">Serum</a></li>
                    <li><a href="#">Face Wash</a></li>
                    <li><a href="#">Lip Balm</a></li>
                    <li><a href="#">Body Lotion</a></li>
                    <li><a href="#">Body Wash</a></li>
                    <li><a href="#">Body Scrub</a></li>
                    <li><a href="#">Hand Cream</a></li>
                  </ul>
                  <h2 className="item-5-heading">Baby Care</h2>
                  <h2 className="item-5-heading">Masks</h2>
                </section>
              </div>
              <div className="col">
                <section>
                  <h2 className="item-5-heading">Hair Carer</h2>
                  <ul className="mega-links">
                    <li><a href="#">Shampoo</a></li>
                    <li><a href="#">Conditoner</a></li>
                    <li><a href="#">Hair Cream</a></li>
                    <li><a href="#">Hair Oil</a></li>
                    <li><a href="#">Hair Gel</a></li>
                    <li><a href="#">Hair Color</a></li>
                    <li><a href="#">Hair Serum</a></li>
                    <li><a href="#">Hair Accessory</a></li>
                  </ul>
                  <h2 className="item-5-heading">Fragrances</h2>
                  {/* <ul className="mega-links">
                      <li><a href="#">Perfume</a></li>
                      <li><a href="#">Deodrant</a></li>
                      <li><a href="#">Body Mist</a></li>
                </section>
              </div>
              <div className="col">
                <section>
                  <h2 className="item-5-heading">Appliances</h2>
                  <ul className="mega-links">
                    <li><a href="#">Hair Straightner</a></li>
                    <li><a href="#">Hair Dryer</a></li>
                    <li><a href="#">Epilator</a></li>
                  </ul>
                  <h2 className="item-5-heading">Men's Grooming</h2>
                  <ul className="mega-links">
                    <li><a href="#">Trimmers</a></li>
                    <li><a href="#">Beard Oil</a></li>
                    <li><a href="#">Hair Wax</a></li>
                  </ul>
                  <h2 className="item-5-heading">Beauty Gift & Makeup Set</h2>
                  <ul className="mega-links">
                    <li><a href="#">Beauty Gift</a></li>
                    <li><a href="#">Makeup Kit</a></li>
                  </ul> */}
                  <h2 className="item-5-heading">Premium Beauty</h2>
                  <h2 className="item-5-heading">Wellness & Hygiene</h2>
                </section>
              </div>

              <div className="col">
                <section>
                  <h2 className="item-5-heading">Top Brands</h2>
                  <ul className="mega-links">
                    <li><a href="#">Lakme</a></li>
                    <li><a href="#">Maybelline</a></li>
                    <li><a href="#">LOreal</a></li>
                    <li><a href="#">Philips</a></li>
                    <li><a href="#">Bath & Body Works</a></li>
                    <li><a href="#">THE BODY SHOP</a></li>
                    <li><a href="#">Biotique</a></li>
                    <li><a href="#">Mamaearth</a></li>
                    <li><a href="#">MCaffeine</a></li>
                    <li><a href="#">Nivea</a></li>
                    <li><a href="#">Lotus Herbals</a></li>
                    <li><a href="#">LOreal Professionnel</a></li>
                    <li><a href="#">KAMA AYURVEDA</a></li>
                    <li><a href="#">M.A.C</a></li>
                    <li><a href="#">Forest Essentials</a></li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </li>
        <li>
          <a href="#" className="menu-item-9">Furnishing</a>
          <div className="mega-menu">
            <div className="content4">
              <div className="col">
                <section>
                  <h2 className="item-5-heading">Makeup</h2>
                  <ul className="mega-links">
                    <li><a href="#">Lipstick</a></li>
                    <li><a href="#">Lip Gloss</a></li>
                    <li><a href="#">Lip Liner</a></li>
                    <li><a href="#">Mascara</a></li>
                    <li><a href="#">Eyeliner</a></li>
                    <li><a href="#">Kajal</a></li>
                    <li><a href="#">Eyeshadow</a></li>
                    <li><a href="#">Foundation</a></li>
                    <li><a href="#">Primer</a></li>
                    <li><a href="#">Concealer</a></li>
                    <li><a href="#">Compact</a></li>
                    <li><a href="#">Nail Polish</a></li>
                  </ul>
                </section>
              </div>
              <div className="col">
                <section>
                  <h2 className="item-5-heading">Skincare, Bath & Body</h2>
                  <ul className="mega-links">
                    <li><a href="#">Face Moisturiser</a></li>
                    <li><a href="#">Cleanser</a></li>
                    <li><a href="#">Masks & Peel</a></li>
                    <li><a href="#">Sunscreen</a></li>
                    <li><a href="#">Serum</a></li>
                    <li><a href="#">Face Wash</a></li>
                    <li><a href="#">Lip Balm</a></li>
                    <li><a href="#">Body Lotion</a></li>
                    <li><a href="#">Body Wash</a></li>
                    <li><a href="#">Body Scrub</a></li>
                    <li><a href="#">Hand Cream</a></li>
                  </ul>
                  <h2 className="item-5-heading">Baby Care</h2>
                  <h2 className="item-5-heading">Masks</h2>
                </section>
              </div>
              <div className="col">
                <section>
                  <h2 className="item-5-heading">Hair Carer</h2>
                  <ul className="mega-links">
                    <li><a href="#">Shampoo</a></li>
                    <li><a href="#">Conditoner</a></li>
                    <li><a href="#">Hair Cream</a></li>
                    <li><a href="#">Hair Oil</a></li>
                    <li><a href="#">Hair Gel</a></li>
                    <li><a href="#">Hair Color</a></li>
                    <li><a href="#">Hair Serum</a></li>
                    <li><a href="#">Hair Accessory</a></li>
                  </ul>
                  <h2 className="item-5-heading">Fragrances</h2>
                  {/* <ul className="mega-links">
                      <li><a href="#">Perfume</a></li>
                      <li><a href="#">Deodrant</a></li>
                      <li><a href="#">Body Mist</a></li>
                </section>
              </div>
              <div className="col">
                <section>
                  <h2 className="item-5-heading">Appliances</h2>
                  <ul className="mega-links">
                    <li><a href="#">Hair Straightner</a></li>
                    <li><a href="#">Hair Dryer</a></li>
                    <li><a href="#">Epilator</a></li>
                  </ul>
                  <h2 className="item-5-heading">Men's Grooming</h2>
                  <ul className="mega-links">
                    <li><a href="#">Trimmers</a></li>
                    <li><a href="#">Beard Oil</a></li>
                    <li><a href="#">Hair Wax</a></li>
                  </ul>
                  <h2 className="item-5-heading">Beauty Gift & Makeup Set</h2>
                  <ul className="mega-links">
                    <li><a href="#">Beauty Gift</a></li>
                    <li><a href="#">Makeup Kit</a></li>
                  </ul> */}
                  <h2 className="item-5-heading">Premium Beauty</h2>
                  <h2 className="item-5-heading">Wellness & Hygiene</h2>
                </section>
              </div>

              <div className="col">
                <section>
                  <h2 className="item-5-heading">Top Brands</h2>
                  <ul className="mega-links">
                    <li><a href="#">Lakme</a></li>
                    <li><a href="#">Maybelline</a></li>
                    <li><a href="#">LOreal</a></li>
                    <li><a href="#">Philips</a></li>
                    <li><a href="#">Bath & Body Works</a></li>
                    <li><a href="#">THE BODY SHOP</a></li>
                    <li><a href="#">Biotique</a></li>
                    <li><a href="#">Mamaearth</a></li>
                    <li><a href="#">MCaffeine</a></li>
                    <li><a href="#">Nivea</a></li>
                    <li><a href="#">Lotus Herbals</a></li>
                    <li><a href="#">LOreal Professionnel</a></li>
                    <li><a href="#">KAMA AYURVEDA</a></li>
                    <li><a href="#">M.A.C</a></li>
                    <li><a href="#">Forest Essentials</a></li>
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
