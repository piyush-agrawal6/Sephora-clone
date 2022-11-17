import "./Navbar.css";
import Logo from "./Logo.jpg";
import logo2 from "./logo2.png";
import { Link, useNavigate } from "react-router-dom";
import { BsSearch,  BsBag } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Portal,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCart } from "../../Redux/cart/actions";
import { AUTH_LOGOUT } from "../../Redux/auth/actionTypes";
const Navbar = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const toast = useToast();
  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);
  return (
    <div>
      <nav className="nav1">
        <Link to="/signup">
          <p className="navDis">
            Get FREE shipping on all orders when you join Beauty Insider.
            Exclusions/terms apply.<b>† LEARN MORE</b>▸
          </p>
        </Link>
      </nav>
      <nav className="nav2">
        <div>
          <div className="navLogo">
            <Link to="/">
              <img src={Logo} alt="logo" className="navLogo1" />
              <img src={logo2} alt="logo" className="navLogo2" />
            </Link>
          </div>
          <div>
            <div className="navSearch">
              <BsSearch />
              <input type="search" placeholder="search" />
            </div>
          </div>
          <div className="navIcons">
            <div>
              <RiAdminFill
                fontSize="20px"
                onClick={() => Navigate("/admin/dashboard")}
              />
            </div>
            |
            <div>
              <BsBag fontSize="20px" onClick={() => Navigate("/cart")} />
            </div>
            |
            <div>
              <p>
                <Link to="/signup">
                  <AiOutlineUser fontSize="20px" />
                </Link>
                {auth.data.isAuthenticated ? (
                  <Button
                    h="30px"
                    w="60px"
                    className="navLogout"
                    onClick={() => {
                      dispatch({ type: AUTH_LOGOUT });
                      toast({
                        title: "Logged out successfully",
                        status: "success",
                        duration: 3000,
                        isClosable: true,
                        position: "top",
                      });
                    }}
                  >
                    Logout
                  </Button>
                ) : (
                  <span className="navLogin">
                    <Popover>
                      <PopoverTrigger>
                        <Button>Get Started</Button>
                      </PopoverTrigger>
                      <Portal className="xxx">
                        <PopoverContent>
                          <PopoverArrow />
                          <PopoverCloseButton />
                          <PopoverBody>
                            <Link to="/login" className="xxx">
                              <Button colorScheme="blue">Login</Button>
                            </Link>
                            <br></br>
                            <br></br>
                            <Link to="/signup">
                              <Button colorScheme="blue">Sign Up</Button>
                            </Link>
                          </PopoverBody>
                        </PopoverContent>
                      </Portal>
                    </Popover>
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      </nav>
      <nav className="nav3">
        <div className="navWrapper">
          <input type="radio" name="slide" id="menuBtn" />
          <input type="radio" name="slide" id="cancelBtn" />

          <ul className="navLink">
            <label htmlFor="cancelBtn" className="btn navCancel">
              <MdOutlineCancel />
            </label>
            <li>
              <Link to={`/products?category=`} className="desktopItem">
                New
              </Link>
              <input type="checkbox" id="showMega" />
              <Link to={`/products?category=`}>
                <label htmlFor="showMega" className="mobileItem">
                  New
                </label>
              </Link>
              <div className="megaBox">
                <div className="contentBox">
                  <div className="rowBox">
                    <header className="navHeader">All New</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="">Just Dropped</Link>
                      </li>
                      <li>
                        <Link to="">New Makeup</Link>
                      </li>
                      <li>
                        <Link to="">New Skincare</Link>
                      </li>
                      <li>
                        <Link to="">New Haircare</Link>
                      </li>
                      <li>
                        <Link to="">New Fragrance</Link>
                      </li>
                      <li>
                        <Link to="">New Bath & Body New</Link>
                      </li>
                      <li>
                        <Link to="">Tools & Brushes</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <header className="navHeader">All Products</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="">The Next Big Thing</Link>
                      </li>
                      <li>
                        <Link to="">Bestsellers</Link>
                      </li>
                      <li>
                        <Link to="">Quizzes & Buying Guides</Link>
                      </li>
                      <li>
                        <Link to="">Clean Beauty Guide</Link>
                      </li>
                      <li>
                        <Link to="">Clean+ Planet</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <img
                      src="https://www.sephora.com/contentimages/2022-holiday-launch-general-site-desktop-global-navigation-button-holiday-hub-us-can-release.jpg?imwidth=590"
                      alt=""
                    />
                  </div>
                  <div className="rowBox">
                    <img
                      src="https://www.sephora.com/contentimages/meganav/large/2022-6-9-haus-lady-gaga-bundle-b-site-desktop-global-navigation-button-en-us-can.jpg?imwidth=294"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to={`/products?category=makeup`} className="desktopItem">
                Make Up
              </Link>
              <div className="megaBox">
                <div className="contentBox">
                  <div className="rowBox">
                    <header className="navHeader">All Makeup</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="">Face Foundation</Link>
                      </li>
                      <li>
                        <Link to="">BB & CC Creams</Link>
                      </li>
                      <li>
                        <Link to="">Tinted Moisturizer</Link>
                      </li>
                      <li>
                        <Link to="">Concealer</Link>
                      </li>
                      <li>
                        <Link to="">Face Primer</Link>
                      </li>
                      <li>
                        <Link to="">Contour Color</Link>
                      </li>
                      <li>
                        <Link to="">Correct Face Sets</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <header className="navHeader">Eye</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="">Eye Palettes</Link>
                      </li>
                      <li>
                        <Link to="">Mascara</Link>
                      </li>
                      <li>
                        <Link to="">Eyeliner</Link>
                      </li>
                      <li>
                        <Link to="">Eyebrow</Link>
                      </li>
                      <li>
                        <Link to="">Eyelash Serums</Link>
                      </li>
                      <li>
                        <Link to="">Eye Primer</Link>
                      </li>
                      <li>
                        <Link to="">Eye Sets</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <header className="navHeader">Lip</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="">Lipstick</Link>
                      </li>
                      <li>
                        <Link to="">Lip Gloss</Link>
                      </li>
                      <li>
                        <Link to="">Lip Balm & Treatment</Link>
                      </li>
                      <li>
                        <Link to="">Liquid Lipstick</Link>
                      </li>
                      <li>
                        <Link to="">Lip Stain</Link>
                      </li>
                      <li>
                        <Link to="">Lip Liner</Link>
                      </li>
                      <li>
                        <Link to="">Lip Plumper</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <header className="navHeader">Cheek</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="">Blush</Link>
                      </li>
                      <li>
                        <Link to="">Bronzer</Link>
                      </li>
                      <li>
                        <Link to="">Highlighter</Link>
                      </li>
                      <li>
                        <Link to="">Contour</Link>
                      </li>
                      <li>
                        <Link to="">Accessories</Link>
                      </li>
                      <li>
                        <Link to="">Makeup Palettes</Link>
                      </li>
                      <li>
                        <Link to="">Cheek Palettes</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <header className="navHeader">New</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="">Bestsellers</Link>
                      </li>
                      <li>
                        <Link to="">Clean Makeup</Link>
                      </li>
                      <li>
                        <Link to="">Vegan Makeup</Link>
                      </li>
                      <li>
                        <Link to="">Mini Size</Link>
                      </li>
                      <li>
                        <Link to="">Value Size</Link>
                      </li>
                      <li>
                        <Link to=""> Sephora Collection</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to={`/products?category=skincare`} className="desktopItem">
                Skincare
              </Link>
              <div className="megaBox">
                <div className="contentBox">
                  <div className="rowBox">
                    <header className="navHeader">All Skincare</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="">Moisturizers</Link>
                      </li>
                      <li>
                        <Link to="">Night Creams</Link>
                      </li>
                      <li>
                        <Link to="">Face Oils</Link>
                      </li>
                      <li>
                        <Link to="">Mists & Essences</Link>
                      </li>
                      <li>
                        <Link to="">BB & CC</Link>
                      </li>
                      <li>
                        <Link to="">Creams Cleansers</Link>
                      </li>
                      <li>
                        <Link to="">Exfoliators Makeup</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <header className="navHeader">Treatments</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="">Face Serums</Link>
                      </li>
                      <li>
                        <Link to="">Blemish & Acne</Link>
                      </li>
                      <li>
                        <Link to="">Facial Peels</Link>
                      </li>
                      <li>
                        <Link to="">Face Masks</Link>
                      </li>
                      <li>
                        <Link to="">Sheet Masks</Link>
                      </li>
                      <li>
                        <Link to="">Masks</Link>
                      </li>
                      <li>
                        <Link to="">Eye Masks</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <header className="navHeader">Eye Care</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="">Eye Creams</Link>
                      </li>
                      <li>
                        <Link to="">Eye Masks</Link>
                      </li>
                      <li>
                        <Link to="">Sunscreen</Link>
                      </li>
                      <li>
                        <Link to="">Lip Balms</Link>
                      </li>
                      <li>
                        <Link to="">Wellness</Link>
                      </li>
                      <li>
                        <Link to="">High Tech Tools</Link>
                      </li>
                      <li>
                        <Link to="">Body Sunscreen</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <header className="navHeader">Shop by Concern</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="">Acne & Blemishes</Link>
                      </li>
                      <li>
                        <Link to="">Anti-Aging</Link>
                      </li>
                      <li>
                        <Link to="">Dark Spots</Link>
                      </li>
                      <li>
                        <Link to="">Pores</Link>
                      </li>
                      <li>
                        <Link to="">Dryness</Link>
                      </li>
                      <li>
                        <Link to="">Fine Lines & Wrinkles</Link>
                      </li>
                      <li>
                        <Link to="">Dullness</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <img
                      src="https://www.sephora.com/contentimages/meganav/large/2020-12-23-site-dt-botnav-seph-coll-US.jpg?imwidth=294"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/products?category=hair">Hair</Link>
              <div className="megaBox">
                <div className="contentBox">
                  <div className="rowBox">
                    <header className="navHeader">All Hair</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="">Shampoo </Link>
                      </li>
                      <li>
                        <Link to="">Conditioner</Link>
                      </li>
                      <li>
                        <Link to="">Scalp Scrub</Link>
                      </li>
                      <li>
                        <Link to="">Hair oil</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <header className="navHeader">Treatments</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="">Hair Masks</Link>
                      </li>
                      <li>
                        <Link to="">Leave-in Conditioners</Link>
                      </li>
                      <li>
                        <Link to="">Hair Oil</Link>
                      </li>
                      <li>
                        <Link to="">Hair Serums</Link>
                      </li>
                      <li>
                        <Link to="">Scalp Treatments</Link>
                      </li>
                      <li>
                        <Link to="">Hair Supplements</Link>
                      </li>
                      <li>
                        <Link to="">Thinning & Hair Loss</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <header className="navHeader">All Hair</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="">Shampoo </Link>
                      </li>
                      <li>
                        <Link to="">Conditioner</Link>
                      </li>
                      <li>
                        <Link to="">Scalp Scrub</Link>
                      </li>
                      <li>
                        <Link to="">Hair oil</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <img
                      src="https://www.sephora.com/productimages/sku/s2266765-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=230"
                      alt=""
                    />
                  </div>
                  <div className="rowBox">
                    <img
                      src="https://www.sephora.com/contentimages/meganav/large/slotting-sale-generic-site-desktop-global-navigation-button_copy-only.jpg?imwidth=294"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/products?category=fragrance">Fragrance</Link>
              <div className="megaBox">
                <div className="contentBox">
                  <div className="rowBox">
                    <header className="navHeader">All Fragrances</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="">Just Dropped</Link>
                      </li>
                      <li>
                        <Link to="">New Makeup</Link>
                      </li>
                      <li>
                        <Link to="">New Skincare</Link>
                      </li>
                      <li>
                        <Link to="">New Haircare</Link>
                      </li>
                      <li>
                        <Link to="">New Fragrance</Link>
                      </li>
                      <li>
                        <Link to="">New Bath & Body New</Link>
                      </li>
                      <li>
                        <Link to="">Tools & Brushes</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <header className="navHeader">Fragrance</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="">The Next Big Thing</Link>
                      </li>
                      <li>
                        <Link to="">Bestsellers</Link>
                      </li>
                      <li>
                        <Link to="">Quizzes & Buying Guides</Link>
                      </li>
                      <li>
                        <Link to="">Clean Beauty Guide</Link>
                      </li>
                      <li>
                        <Link to="">Clean+ Planet</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <img
                      src="https://www.sephora.com/productimages/sku/s1377159-main-zoom.jpg?imwidth=230"
                      alt=""
                    />
                  </div>
                  <div className="rowBox">
                    <img
                      src="https://www.sephora.com/productimages/sku/s513168-main-zoom.jpg?imwidth=230"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/products?category=tools">Tools & Brushes</Link>
              <div className="megaBox">
                <div className="contentBox">
                  <div className="rowBox">
                    <header className="navHeader">All New</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="">Just Dropped</Link>
                      </li>
                      <li>
                        <Link to="">New Makeup</Link>
                      </li>
                      <li>
                        <Link to="">New Skincare</Link>
                      </li>
                      <li>
                        <Link to="">New Haircare</Link>
                      </li>
                      <li>
                        <Link to="">New Fragrance</Link>
                      </li>
                      <li>
                        <Link to="">New Bath & Body New</Link>
                      </li>
                      <li>
                        <Link to="">Tools & Brushes</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <header className="navHeader">All Products</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="">The Next Big Thing</Link>
                      </li>
                      <li>
                        <Link to="">Bestsellers</Link>
                      </li>
                      <li>
                        <Link to="">Quizzes & Buying Guides</Link>
                      </li>
                      <li>
                        <Link to="">Clean Beauty Guide</Link>
                      </li>
                      <li>
                        <Link to="">Clean+ Planet</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <img
                      src="https://www.sephora.com/contentimages/2022-holiday-launch-general-site-desktop-global-navigation-button-holiday-hub-us-can-release.jpg?imwidth=590"
                      alt=""
                    />
                  </div>
                  <div className="rowBox">
                    <img
                      src="https://www.sephora.com/contentimages/meganav/large/2022-6-9-haus-lady-gaga-bundle-b-site-desktop-global-navigation-button-en-us-can.jpg?imwidth=294"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/products?category=bath">Bath & Body</Link>
              <div className="megaBox">
                <div className="contentBox">
                  <div className="rowBox">
                    <header className="navHeader">All New</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="">Just Dropped</Link>
                      </li>
                      <li>
                        <Link to="">New Makeup</Link>
                      </li>
                      <li>
                        <Link to="">New Skincare</Link>
                      </li>
                      <li>
                        <Link to="">New Haircare</Link>
                      </li>
                      <li>
                        <Link to="">New Fragrance</Link>
                      </li>
                      <li>
                        <Link to="">New Bath & Body New</Link>
                      </li>
                      <li>
                        <Link to="">Tools & Brushes</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <header className="navHeader">All Products</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="">The Next Big Thing</Link>
                      </li>
                      <li>
                        <Link to="">Bestsellers</Link>
                      </li>
                      <li>
                        <Link to="">Quizzes & Buying Guides</Link>
                      </li>
                      <li>
                        <Link to="">Clean Beauty Guide</Link>
                      </li>
                      <li>
                        <Link to="">Clean+ Planet</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <img
                      src="https://www.sephora.com/contentimages/2022-holiday-launch-general-site-desktop-global-navigation-button-holiday-hub-us-can-release.jpg?imwidth=590"
                      alt=""
                    />
                  </div>
                  <div className="rowBox">
                    <img
                      src="https://www.sephora.com/contentimages/meganav/large/2022-6-9-haus-lady-gaga-bundle-b-site-desktop-global-navigation-button-en-us-can.jpg?imwidth=294"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/products?category=skincare">Beauty Under $20</Link>
              <div className="megaBox">
                <div className="contentBox">
                  <div className="rowBox">
                    <header className="navHeader">All New</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="">Just Dropped</Link>
                      </li>
                      <li>
                        <Link to="">New Makeup</Link>
                      </li>
                      <li>
                        <Link to="">New Skincare</Link>
                      </li>
                      <li>
                        <Link to="">New Haircare</Link>
                      </li>
                      <li>
                        <Link to="">New Fragrance</Link>
                      </li>
                      <li>
                        <Link to="">New Bath & Body New</Link>
                      </li>
                      <li>
                        <Link to="">Tools & Brushes</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <header className="navHeader">All Products</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="">The Next Big Thing</Link>
                      </li>
                      <li>
                        <Link to="">Bestsellers</Link>
                      </li>
                      <li>
                        <Link to="">Quizzes & Buying Guides</Link>
                      </li>
                      <li>
                        <Link to="">Clean Beauty Guide</Link>
                      </li>
                      <li>
                        <Link to="">Clean+ Planet</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <img
                      src="https://www.sephora.com/contentimages/2022-holiday-launch-general-site-desktop-global-navigation-button-holiday-hub-us-can-release.jpg?imwidth=590"
                      alt=""
                    />
                  </div>
                  <div className="rowBox">
                    <img
                      src="https://www.sephora.com/contentimages/meganav/large/2022-6-9-haus-lady-gaga-bundle-b-site-desktop-global-navigation-button-en-us-can.jpg?imwidth=294"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <label htmlFor="menuBtn" className="btn navMenu">
            <FaBars />
          </label>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
