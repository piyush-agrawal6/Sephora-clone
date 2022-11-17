import "./SingleProduct.css";
import { useState, useEffect } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AiOutlineStar } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  useToast,
  Select,
  Box,
  SkeletonCircle,
  SkeletonText,
  Skeleton,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getSingleProduct } from "../../Redux/products/actions";
import { addProductToCart } from "../../Redux/cart/actions";
const responsive1 = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 9,
    slidesToSlide: 9,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 2,
  },
};
function SingleProduct() {
  const [value, setValue] = useState(1);
  let {
    Product: { loading },
    singleData: data,
    AllProducts: { loading: prodLoad },
    data: products,
  } = useSelector((store) => store.products);
  let auth = useSelector((store) => store.auth);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleProduct(id));
    dispatch(getAllProducts({ category: data.category }));
  }, [dispatch, id, data.category]);
  const { stars, numReviews } = data;
  const handleChange = (value) => setValue(value);
  // console.log(auth);
  const toast = useToast();
  const productAdded = () => {
    toast({
      title: "Product Added",
      description: "We have added your product to Basket",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  };
  // console.log(loading);
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar />
        ) : stars >= number ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });
  if (loading) {
    return (
      <div className="skeleton">
        <div>
          <Skeleton h="full">
            <div>contents wrapped</div>
            <div>won't be visible</div>
          </Skeleton>
        </div>
        <div>
          <Box padding="6" boxShadow="lg" bg="white">
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
          </Box>
          <Box padding="6" boxShadow="lg" bg="white">
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
          </Box>
          <Box padding="6" boxShadow="lg" bg="white">
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
          </Box>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="singleProduct">
        <div className="singleImage">
          <img src={data.imageUrl} alt="productImage" />
        </div>
        <div>
          <div className="proNames">
            <h1>{data.brand}</h1>
            <p>{data.name}</p>
          </div>
          <div className="proRatings">
            {ratingStar}
            {stars}
          </div>
          <span className="proreviews">( {numReviews} Costumer reviews )</span>
          <div className="proPrices">
            <p>
              Old Price :{" "}
              <span className="proOld">
                ₹ {(data.price + data.price / 10) * 81}
              </span>
            </p>
            <p>
              New Price : <span>₹ {data.price * 81} ( 10% off)</span>
            </p>
          </div>
          <div className="proDetails">
            <h1>About The Product :</h1>
            <ul>
              <li>
                <span className="proTick">
                  <TiTick />
                </span>
                Color : <span>All colors available</span>
              </li>
              <li>
                <span className="proTick">
                  <TiTick />
                </span>
                Available : <span>In Stock</span>
              </li>
              <li>
                <span className="proTick">
                  <TiTick />
                </span>
                Category : <span>{data.category}</span>
              </li>
              <li>
                <span className="proTick">
                  <TiTick />
                </span>
                Shipping Area : <span>All over the world</span>
              </li>
              <li>
                <span className="proTick">
                  <TiTick />
                </span>
                Shipping fee : <span>Free shipping</span>
              </li>
            </ul>
          </div>
          <div className="proQuantity">
            <p>Quantity :</p>
            <Flex className="proSlider">
              <NumberInput
                maxW="100px"
                mr="2rem"
                value={value}
                onChange={handleChange}
                zIndex="0"
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Slider
                flex="1"
                focusThumbOnChange={true}
                value={value}
                onChange={handleChange}
                zIndex="0"
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb fontSize="sm" boxSize="32px" children={value} />
              </Slider>
            </Flex>
            <div className="selector">
              <Select placeholder="Select Size" width="xs" zIndex="0">
                <option value="option1">Small</option>
                <option value="option2">Medium</option>
                <option value="option3">Large</option>
              </Select>
            </div>
          </div>
          <div className="proAdd">
            {auth.data.isAuthenticated ? (
              <button
                onClick={() => {
                  dispatch(addProductToCart(data._id, value));
                  productAdded();
                }}
              >
                Add to Basket
              </button>
            ) : (
              <Link to="/signup">
                <button>SignUp to add to Basket</button>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="proContainer">
        <h1 className="homeHead">You may also like</h1>
        <div className="hc1">
          {prodLoad ? (
            "Loading Similar Products"
          ) : (
            <Carousel
              responsive={responsive1}
              customTransition="1s"
              transitionDuration={1000}
            >
              {prodLoad
                ? ""
                : products.map((elem, index) => {
                    return (
                      <div key={index} className="proCon">
                        <Link to={`/products/${elem._id}`}>
                          <div>
                            <img src={elem.imageUrl} alt="proImg" />
                            <span className="homeLook">Quiclook</span>
                          </div>
                          <div>
                            <h1>{elem.brand}</h1>
                            <p>{elem.name}</p>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
            </Carousel>
          )}
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
