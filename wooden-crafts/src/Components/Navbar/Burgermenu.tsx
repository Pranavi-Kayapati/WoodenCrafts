import React, { useRef } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Box,Accordion,AccordionItem,AccordionButton,AccordionIcon,AccordionPanel,useDisclosure, Flex
  } from '@chakra-ui/react'
  import { Link } from 'react-router-dom'
  import { HamburgerIcon } from '@chakra-ui/icons'
  import logo2 from "./logo/logo2.png";
  import { BiUserCircle } from "react-icons/bi";

const Burgermenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
  return (
    <div className="burgermenu">
    <Box cursor={"pointer"}  p={4} width={'50px'} onClick={onOpen}>
      <HamburgerIcon w={'30px'} height={'30px'} />
    </Box>
  
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <Flex justifyContent={'space-around'} marginTop={'10px'}>
        <Link to="/">
          <img id="Burgerlogo" src={logo2}></img>
        </Link>
        <Link to="/login">
                <BiUserCircle
                  className="icon"
                  style={{ margin: "20px" }}
                  size={"25px"}
                  color="#fba720"
                  opacity={0.8}
                />
              </Link>
        </Flex>
       
        <DrawerBody>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Sofas
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <ul className="mega-links">
                  <h2 className="item-1-heading">SOFA SETS</h2>
                  <li>
                    <Link to="/product">Fabric Sofas</Link>
                  </li>
                  <li>
                    <Link to="/product">Sofa cum Bed</Link>
                  </li>
                  <li>
                    <Link to="/product">Wooden Sofa</Link>
                  </li>
                  <li>
                    <Link to="/product">5 Seater Sofas</Link>
                  </li>
                  <li>
                    <Link to="/product">3 Seater Sofas</Link>
                  </li>
                  <li>
                    <Link to="/product">2 Seater Sofas</Link>
                  </li>
                  <li>
                    <Link to="/product">Single Seater Sofas</Link>
                  </li>
                  <li>
                    <Link to="/product">L Shaped Sofas</Link>
                  </li>
                  <li>
                    <Link to="/product">Leather Sofas</Link>
                  </li>
                  <li>
                    <Link to="/product">Office Sofas</Link>
                  </li>
                  <li>
                    <Link to="/product">Outdoor Sofas</Link>
                  </li>
                </ul>
                <h2 className="item-1-heading">SEATING</h2>
                <ul className="mega-links">
                  <li>
                    <Link to="/product">Wingback Chairs</Link>
                  </li>
                  <li>
                    <Link to="/product">Loungue Chairs</Link>
                  </li>
                  <li>
                    <Link to="/product">Love Seats</Link>
                  </li>
                  <li>
                    <Link to="/product">Ottoman</Link>
                  </li>
                  <li>
                    <Link to="/product">Accent Chairs</Link>
                  </li>
                  <li>
                    <Link to="/product">Arm Chairs</Link>
                  </li>
                  <li>
                    <Link to="/product">Message Chairs</Link>
                  </li>
                  <li>
                    <Link to="/product">Bean Bags</Link>
                  </li>
                  <li>
                    <Link to="/product">Stool</Link>
                  </li>
                  <li>
                    <Link to="/product">Benches</Link>
                  </li>
                </ul>

                <h2 className="item-1-heading">SOFA CUM BED</h2>
                <ul className="mega-links">
                  <li>
                    <Link to="/product">Wooden Sofa cum Bed</Link>
                  </li>
                  <li>
                    <Link to="/product">Fabric Sofa cum Bed</Link>
                  </li>
                  <li>
                    <Link to="/product">Sofa cum Bed</Link>
                  </li>
                </ul>
                <h2 className="item-1-heading">RECLINERS</h2>
                <ul className="mega-links">
                  <li>
                    <Link to="/product">1 Seater Recliners</Link>
                  </li>
                  <li>
                    <Link to="/product">2 Seater Recliners</Link>
                  </li>
                  <li>
                    <Link to="/product">3 Seater Recliners</Link>
                  </li>
                  <li>
                    <Link to="/product">L Shaped Recliners</Link>
                  </li>
                </ul>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Living
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <h2 className="item-1-heading">LIVING STORAGE</h2>
                <ul className="mega-links">
                  <li>
                    <Link to="../HTML/product.html">TV Units</Link>
                  </li>
                  <li>
                    <Link to="/product">Bookshelves</Link>
                  </li>
                  <li>
                    <Link to="/product">Display Unit</Link>
                  </li>
                  <li>
                    <Link to="/product">Magazine Racks</Link>
                  </li>
                  <li>
                    <Link to="/product">Shoe Racks</Link>
                  </li>
                  <li>
                    <Link to="/product">Wall Shelves</Link>
                  </li>
                  <li>
                    <Link to="/product">Trunk & Blanket Box</Link>
                  </li>
                  <li>
                    <Link to="/product">Cabinet & Sideboard</Link>
                  </li>
                  <li>
                    <Link to="/product">Chest Drawers</Link>
                  </li>
                </ul>
                <h2 className="item-1-heading">SOFA SETS</h2>
                <ul className="mega-links">
                  <li>
                    <Link to="../HTML/product.html">
                      Fabric Sofas
                    </Link>
                  </li>
                  <li>
                    <Link to="/product">Sofa cum Bed</Link>
                  </li>
                  <li>
                    <Link to="/product">Wooden Sofa</Link>
                  </li>
                  <li>
                    <Link to="/product">5 Seater Sofas</Link>
                  </li>
                  <li>
                    <Link to="/product">3 Seater Sofas</Link>
                  </li>
                  <li>
                    <Link to="/product">2 Seater Sofas</Link>
                  </li>
                  <li>
                    <Link to="/product">Single Seater Sofas</Link>
                  </li>
                  <li>
                    <Link to="/product">L Shaped Sofas</Link>
                  </li>
                  <li>
                    <Link to="/product">Leather Sofas</Link>
                  </li>
                  <li>
                    <Link to="/product">Office Sofas</Link>
                  </li>
                  <li>
                    <Link to="/product">Outdoor Sofas</Link>
                  </li>
                </ul>
                <h2 className="item-1-heading">SEATING & CHAIRS</h2>
                <ul className="mega-links">
                  <li>
                    <Link to="/product">Wingback Chairs</Link>
                  </li>
                  <li>
                    <Link to="/product">Loungue Chairs</Link>
                  </li>
                  <li>
                    <Link to="/product">Swing Chairs</Link>
                  </li>
                  <li>
                    <Link to="/product">Rocking Chairs</Link>
                  </li>
                  <li>
                    <Link to="/product">Metal Chairs</Link>
                  </li>
                  <li>
                    <Link to="/product">Love Seats</Link>
                  </li>
                  <li>
                    <Link to="/product">Ottoman</Link>
                  </li>
                  <li>
                    <Link to="/product">Accent Chairs</Link>
                  </li>
                  <li>
                    <Link to="/product">Arm Chairs</Link>
                  </li>
                  <li>
                    <Link to="/product">Message Chairs</Link>
                  </li>
                  <li>
                    <Link to="/product">Bean Bags</Link>
                  </li>
                  <li>
                    <Link to="/product">Stool</Link>
                  </li>
                  <li>
                    <Link to="/product">Benches</Link>
                  </li>
                </ul>
                <h2 className="item-1-heading">TABLES</h2>
                <ul className="mega-links">
                  <li>
                    <Link to="/product">Coffee Tables</Link>
                  </li>
                  <li>
                    <Link to="/product">Coffee Table Sets</Link>
                  </li>
                  <li>
                    <Link to="/product">Laptop Tables</Link>
                  </li>
                  <li>
                    <Link to="/product">Console Tables</Link>
                  </li>
                  <li>
                    <Link to="/product">Side Tables</Link>
                  </li>
                </ul>
                <h2 className="item-1-heading">LAMPS & LIGHTING</h2>
                <ul className="mega-links">
                  <li>
                    <Link to="/product">Table Lamps</Link>
                  </li>
                  <li>
                    <Link to="/product">Floor Lamps</Link>
                  </li>
                  <li>
                    <Link to="/product">Hanging Lamps</Link>
                  </li>
                  <li>
                    <Link to="/product">Wall Lights</Link>
                  </li>
                  <li>
                    <Link to="/product">Spot Lights</Link>
                  </li>
                </ul>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Bedroom
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <section>
                  <h2 className="item-1-heading">BEDS</h2>
                  <ul className="mega-links">
                    <li>
                      <Link to="../HTML/product.html">
                        King Size Beds
                      </Link>
                    </li>
                    <li>
                      <Link to="/product">Queen Size Beds</Link>
                    </li>
                    <li>
                      <Link to="/product">Single Beds</Link>
                    </li>
                    <li>
                      <Link to="/product">Sofa cum Beds</Link>
                    </li>
                    <li>
                      <Link to="/product">Bunk Beds</Link>
                    </li>
                    <li>
                      <Link to="/product"></Link>Double Beds
                    </li>
                    <li>
                      <Link to="/product">
                        Hydraulic Storage Beds
                      </Link>
                    </li>
                    <li>
                      <Link to="/product">Modular Beds</Link>
                    </li>
                    <li>
                      <Link to="/product">Metal Beds</Link>
                    </li>
                    <li>
                      <Link to="/product">Poster Beds</Link>
                    </li>
                    <li>
                      <Link to="/product">Platform Beds</Link>
                    </li>
                    <li>
                      <Link to="/product">Futons</Link>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="item-1-heading">
                    MATTRESS & BEDDING
                  </h2>
                  <ul className="mega-links">
                    <li>
                      <Link to="/product">Mattress</Link>
                    </li>
                    <li>
                      <Link to="/product">Single Bed Mattress</Link>
                    </li>
                    <li>
                      <Link to="/product">Double Bed Mattress</Link>
                    </li>
                    <li>
                      <Link to="/product">King Size Mattress</Link>
                    </li>
                    <li>
                      <Link to="/product">Queen Size Mattress</Link>
                    </li>
                    <li>
                      <Link to="/product">Mattress Protectors</Link>
                    </li>
                  </ul>
                  <h2 className="item-1-heading">STORAGE</h2>
                  <ul className="mega-links">
                    <li>
                      <Link to="/product">Wardrobes</Link>
                    </li>
                    <li>
                      <Link to="/product">Cupboards</Link>
                    </li>
                    <li>
                      <Link to="/product">Trunks</Link>
                    </li>
                    <li>
                      <Link to="/product">Wooden Drawers</Link>
                    </li>
                    <li>
                      <Link to="/product">Blanket Boxes</Link>
                    </li>
                  </ul>
                </section>
                <section>
                  <h2 className="item-1-heading">TABLES</h2>
                  <ul className="mega-links">
                    <li>
                      <Link to="/product">BedSide Tables</Link>
                    </li>
                    <li>
                      <Link to="/product">Dressing Tables</Link>
                    </li>
                    <li>
                      <Link to="/product">BreakFast Tables</Link>
                    </li>
                  </ul>
                  <h2 className="item-1-heading">DECOR</h2>
                  <ul className="mega-links">
                    <li>
                      <Link to="/product">Photo Frames</Link>
                    </li>
                    <li>
                      <Link to="/product">Wall Shelves</Link>
                    </li>
                    <li>
                      <Link to="/product">Wall Clocks</Link>
                    </li>
                    <li>
                      <Link to="/product">Wall Arts</Link>
                    </li>
                    <li>
                      <Link to="/product">Wall Mirrors</Link>
                    </li>
                    <li>
                      <Link to="/product">Room Divider</Link>
                    </li>
                  </ul>
                </section>
                <section>
                  <h2 className="item-1-heading">HOME FURNISH</h2>
                  <ul className="mega-links">
                    <li>
                      <Link to="/product">Bed Sheets</Link>
                    </li>
                    <li>
                      <Link to="/product">Bed Covers</Link>
                    </li>
                    <li>
                      <Link to="/product">Cusion Covers</Link>
                    </li>
                    <li>
                      <Link to="/product">Quilts</Link>
                    </li>
                    <li>
                      <Link to="/product">Door Mats</Link>
                    </li>
                    <li>
                      <Link to="/product">Floor Runners</Link>
                    </li>
                  </ul>
                  <h2 className="item-1-heading">LAMPS & LIGHTING</h2>
                  <ul className="mega-links">
                    <li>
                      <Link to="/product">Table Lamps</Link>
                    </li>
                    <li>
                      <Link to="/product">Floor Lamps</Link>
                    </li>
                    <li>
                      <Link to="/product">Hanging Lamps</Link>
                    </li>
                    <li>
                      <Link to="/product">Wall Lights</Link>
                    </li>
                    <li>
                      <Link to="/product">Spot Lights</Link>
                    </li>
                  </ul>
                </section>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Dining & Kitchen
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <section>
                  <h2 className="item-1-heading">DINING FURNITURE</h2>
                  <ul className="mega-links">
                    <li>
                      <Link to="../HTML/product.html">
                        Dining Table Sets
                      </Link>
                    </li>
                    <li>
                      <Link to="/product">2 Seater Dining Sets</Link>
                    </li>
                    <li>
                      <Link to="/product">4 Seater Dining Sets</Link>
                    </li>
                    <li>
                      <Link to="/product">6 Seater Dining Sets</Link>
                    </li>
                    <li>
                      <Link to="/product">8 Seater Dining Sets</Link>
                    </li>
                    <li>
                      <Link to="/product"></Link>Extendable Dining
                      Sets
                    </li>
                    <li>
                      <Link to="/product">Dining Tables</Link>
                    </li>
                    <li>
                      <Link to="/product">Dining Chairs</Link>
                    </li>
                    <li>
                      <Link to="/product">Iconic Chairs</Link>
                    </li>
                    <li>
                      <Link to="/product">Benches</Link>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="item-1-heading">
                    KITCHEN FURNITURE
                  </h2>
                  <ul className="mega-links">
                    <li>
                      <Link to="/product">Kitchen Cupboard</Link>
                    </li>
                    <li>
                      <Link to="/product">Kitchen Sideboards</Link>
                    </li>
                    <li>
                      <Link to="/product">Kitchen Cabinets</Link>
                    </li>
                    <li>
                      <Link to="/product">Kitchen Trolly</Link>
                    </li>
                    <li>
                      <Link to="/product">Kitchen Racks</Link>
                    </li>
                    <li>
                      <Link to="/product">Kitchen Shelves</Link>
                    </li>
                    <li>
                      <Link to="/product"></Link>Crockery Units
                    </li>
                  </ul>
                  <h2 className="item-1-heading">MODULAR KITCHEN</h2>
                  <ul className="mega-links">
                    <li>
                      <Link to="/product">
                        L-Shaped Modular Kitchen
                      </Link>
                    </li>
                    <li>
                      <Link to="/product">
                        U-Shaped Modular Kitchen
                      </Link>
                    </li>
                    <li>
                      <Link to="/product">
                        Parallel Shaped Modular Kitchen
                      </Link>
                    </li>
                    <li>
                      <Link to="/product">
                        Straight Shaped Modular Kitchen
                      </Link>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="item-1-heading">SERVEWARE</h2>
                  <ul className="mega-links">
                    <li>
                      <Link to="/product">Dinner sets</Link>
                    </li>
                    <li>
                      <Link to="/product">Plates</Link>
                    </li>
                    <li>
                      <Link to="/product">Bowls</Link>
                    </li>
                    <li>
                      <Link to="/product">Platters</Link>
                    </li>
                    <li>
                      <Link to="/product">Teapots</Link>
                    </li>
                  </ul>
                  <h2 className="item-1-heading">KITCHENWARE</h2>
                  <ul className="mega-links">
                    <li>
                      <Link to="/product">Kitchen Organisers</Link>
                    </li>
                    <li>
                      <Link to="/product">Kitchen Containers</Link>
                    </li>
                    <li>
                      <Link to="/product">Chopping Boards</Link>
                    </li>
                    <li>
                      <Link to="/product">Jars</Link>
                    </li>
                    <li>
                      <Link to="/product">Spice Boxes</Link>
                    </li>
                    <li>
                      <Link to="/product">Bakeware</Link>
                    </li>
                  </ul>
                </section>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Kids Room
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <section>
                  <h2 className="item-1-heading">KIDS BEDROOM</h2>
                  <ul className="mega-links">
                    <li>
                      <Link to="../HTML/product.html">Kids Bed</Link>
                    </li>
                    <li>
                      <Link to="/product">Bunk Bed</Link>
                    </li>
                    <li>
                      <Link to="/product">Truddle Bed</Link>
                    </li>
                    <li>
                      <Link to="/product">Single Bed</Link>
                    </li>
                    <li>
                      <Link to="/product">Cribs</Link>
                    </li>
                    <li>
                      <Link to="/product"></Link>Kids Sofa
                    </li>
                    <li>
                      <Link to="/product">Kids Bean Bag</Link>
                    </li>
                    <li>
                      <Link to="/product">Stroller</Link>
                    </li>
                    <li>
                      <Link to="/product">Kids Bedside Table</Link>
                    </li>
                    <li>
                      <Link to="/product">Blanket Box</Link>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="item-1-heading">STUDY</h2>
                  <ul className="mega-links">
                    <li>
                      <Link to="/product">Kids Study Table</Link>
                    </li>
                    <li>
                      <Link to="/product">Kids Chairs</Link>
                    </li>
                    <li>
                      <Link to="/product">Kids Highchairs</Link>
                    </li>
                    <li>
                      <Link to="/product">Kids Boards</Link>
                    </li>
                    <li>
                      <Link to="/product">Kids BookShelves</Link>
                    </li>
                    <li>
                      <Link to="/product">Kids Computer Table</Link>
                    </li>
                    <li>
                      <Link to="/product"></Link>Kids Writing Table
                    </li>
                    <li>
                      <Link to="/product"></Link>Kids Laptop Table
                    </li>
                    <li>
                      <Link to="/product"></Link>Kids Activity Table
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="item-1-heading">KIDS FURNISHING</h2>
                  <ul className="mega-links">
                    <li>
                      <Link to="/product">Kids Bedsheets</Link>
                    </li>
                    <li>
                      <Link to="/product">Kids Cushion Covers</Link>
                    </li>
                    <li>
                      <Link to="/product">Kids Room Curtains</Link>
                    </li>
                    <li>
                      <Link to="/product">Kids Carpets</Link>
                    </li>
                    <li>
                      <Link to="/product">Kids Blankets</Link>
                    </li>
                    <li>
                      <Link to="/product">Kids Pillow</Link>
                    </li>
                    <li>
                      <Link to="/product">Kids Mattress</Link>
                    </li>
                    <li>
                      <Link to="/product">Kids Comforters</Link>
                    </li>
                    <li>
                      <Link to="/product">Kids Mats</Link>
                    </li>
                  </ul>
                </section>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Study & Kitchen
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <section>
                  <h2 className="item-1-heading">TABLES</h2>
                  <ul className="mega-links">
                    <li>
                      <Link to="../HTML/product.html">
                        Study Table
                      </Link>
                    </li>
                    <li>
                      <Link to="/product">Computer Table</Link>
                    </li>
                    <li>
                      <Link to="/product">Office Table</Link>
                    </li>
                    <li>
                      <Link to="/product">Laptop Table</Link>
                    </li>
                    <li>
                      <Link to="/product">Adjustable Table</Link>
                    </li>
                    <li>
                      <Link to="/product"></Link>Corner Table
                    </li>
                    <li>
                      <Link to="/product">Folding Table</Link>
                    </li>
                    <li>
                      <Link to="/product">Portable Table</Link>
                    </li>
                    <li>
                      <Link to="/product">Gaming Desk</Link>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="item-1-heading">SEATING</h2>
                  <ul className="mega-links">
                    <li>
                      <Link to="/product">Office Chairs</Link>
                    </li>
                    <li>
                      <Link to="/product">Study Chairs</Link>
                    </li>
                    <li>
                      <Link to="/product">Revolving Chairs</Link>
                    </li>
                    <li>
                      <Link to="/product">Ergonomic Chairs</Link>
                    </li>
                    <li>
                      <Link to="/product">Study Chairs</Link>
                    </li>
                    <li>
                      <Link to="/product">Visiting Chairs</Link>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="item-1-heading">OFFICE FURNITURE</h2>
                  <ul className="mega-links">
                    <li>
                      <Link to="/product">Office Chairs</Link>
                    </li>
                    <li>
                      <Link to="/product">Study Chairs</Link>
                    </li>
                    <li>
                      <Link to="/product">Revolving Chairs</Link>
                    </li>
                    <li>
                      <Link to="/product">Ergonomic Chairs</Link>
                    </li>
                    <li>
                      <Link to="/product">Study Chairs</Link>
                    </li>
                    <li>
                      <Link to="/product">Visiting Chairs</Link>
                    </li>
                  </ul>
                </section>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Lamp & Lighting
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <section>
                  <h2 className="item-1-heading">LAMPS</h2>
                  <ul className="mega-links">
                    <li>
                      <Link to="/product">Table Lamps</Link>
                    </li>
                    <li>
                      <Link to="/product">Study Lamps</Link>
                    </li>
                    <li>
                      <Link to="/product">Floor Lamps</Link>
                    </li>
                    <li>
                      <Link to="/product">Tripod Lamps</Link>
                    </li>
                    <li>
                      <Link to="/product">Lamp Shades</Link>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="item-1-heading">SEATING</h2>
                  <ul className="mega-links">
                    <li>
                      <Link to="/product">Wingback Chairs</Link>
                    </li>
                    <li>
                      <Link to="/product">Loungue Chairs</Link>
                    </li>
                    <li>
                      <Link to="/product">Love Seats</Link>
                    </li>
                    <li>
                      <Link to="/product">Ottoman</Link>
                    </li>
                    <li>
                      <Link to="/product">Accent Chairs</Link>
                    </li>
                    <li>
                      <Link to="/product">Arm Chairs</Link>
                    </li>
                    <li>
                      <Link to="/product">Message Chairs</Link>
                    </li>
                    <li>
                      <Link to="/product">Bean Bags</Link>
                    </li>
                    <li>
                      <Link to="/product">Stool</Link>
                    </li>
                    <li>
                      <Link to="/product">Benches</Link>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="item-1-heading">SOFA CUM BED</h2>
                  <ul className="mega-links">
                    <li>
                      <Link to="/product">Wooden Sofa cum Bed</Link>
                    </li>
                    <li>
                      <Link to="/product">Fabric Sofa cum Bed</Link>
                    </li>
                    <li>
                      <Link to="/product">Sofa cum Bed</Link>
                    </li>
                  </ul>
                  <h2 className="item-1-heading">RECLINERS</h2>
                  <ul className="mega-links">
                    <li>
                      <Link to="/product">1 Seater Recliners</Link>
                    </li>
                    <li>
                      <Link to="/product">2 Seater Recliners</Link>
                    </li>
                    <li>
                      <Link to="/product">3 Seater Recliners</Link>
                    </li>
                    <li>
                      <Link to="/product">L Shaped Recliners</Link>
                    </li>
                  </ul>
                </section>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Furnishing
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <section>
                  <h2 className="item-1-heading">SOFA SETS</h2>
                  <ul className="mega-links">
                    <li>
                      <Link to="/product">Fabric Sofas</Link>
                    </li>
                    <li>
                      <Link to="/product">Sofa cum Bed</Link>
                    </li>
                    <li>
                      <Link to="/product">Wooden Sofa</Link>
                    </li>
                    <li>
                      <Link to="/product">5 Seater Sofas</Link>
                    </li>
                    <li>
                      <Link to="/product">3 Seater Sofas</Link>
                    </li>
                    <li>
                      <Link to="/product">2 Seater Sofas</Link>
                    </li>
                    <li>
                      <Link to="/product">Single Seater Sofas</Link>
                    </li>
                    <li>
                      <Link to="/product">L Shaped Sofas</Link>
                    </li>
                    <li>
                      <Link to="/product">Leather Sofas</Link>
                    </li>
                    <li>
                      <Link to="/product">Office Sofas</Link>
                    </li>
                    <li>
                      <Link to="/product">Outdoor Sofas</Link>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="item-1-heading">SEATING</h2>
                  <ul className="mega-links">
                    <li>
                      <Link to="/product">Wingback Chairs</Link>
                    </li>
                    <li>
                      <Link to="/product">Loungue Chairs</Link>
                    </li>
                    <li>
                      <Link to="/product">Love Seats</Link>
                    </li>
                    <li>
                      <Link to="/product">Ottoman</Link>
                    </li>
                    <li>
                      <Link to="/product">Accent Chairs</Link>
                    </li>
                    <li>
                      <Link to="/product">Arm Chairs</Link>
                    </li>
                    <li>
                      <Link to="/product">Message Chairs</Link>
                    </li>
                    <li>
                      <Link to="/product">Bean Bags</Link>
                    </li>
                    <li>
                      <Link to="/product">Stool</Link>
                    </li>
                    <li>
                      <Link to="/product">Benches</Link>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="item-1-heading">SOFA CUM BED</h2>
                  <ul className="mega-links">
                    <li>
                      <Link to="/product">Wooden Sofa cum Bed</Link>
                    </li>
                    <li>
                      <Link to="/product">Fabric Sofa cum Bed</Link>
                    </li>
                    <li>
                      <Link to="/product">Sofa cum Bed</Link>
                    </li>
                  </ul>
                  <h2 className="item-1-heading">RECLINERS</h2>
                  <ul className="mega-links">
                    <li>
                      <Link to="/product">1 Seater Recliners</Link>
                    </li>
                    <li>
                      <Link to="/product">2 Seater Recliners</Link>
                    </li>
                    <li>
                      <Link to="/product">3 Seater Recliners</Link>
                    </li>
                    <li>
                      <Link to="/product">L Shaped Recliners</Link>
                    </li>
                  </ul>
                </section>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  </div>
  )
}

export default Burgermenu