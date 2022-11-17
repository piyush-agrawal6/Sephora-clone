import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  Heading,
  HStack,
  Image,
  Input,
  Link,
  Stack,
  Text,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const formData = {
  firstname: "",
  lastname: "",
  phone: "",
  address: "",
  zip: "",
};

function Checkout() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [form, setForm] = useState(formData);
  const [boolean, setBoolean] = useState(false);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const [showOtp, setShoeOtp] = useState(false);
  const totalPrice = localStorage.getItem("totalPrice");
  console.log(totalPrice);
  const handleOtp = () => {
    if (otp !== "1234") {
      toast({
        title: "Wrong OTP",
        description: "Please fill 1234 as otp",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } else {
      toast({
        title: "Your order is placed",
        description: "Thank you for your order",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      navigate("/");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      form.firstname === "" ||
      form.lastname === "" ||
      form.phone === "" ||
      form.address === "" ||
      form.zip === ""
    ) {
      toast({
        title: "Missing Details",
        description: "Please fill all the details",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } else {
      setBoolean(true);
      onOpen();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <>
      <Flex
        w="100%"
        h="80px"
        borderBottom={"2px solid grey"}
        justify={"center"}
        align="center"
      >
        <Heading>Shopaholic</Heading>
      </Flex>
      {/* <Image src="https://media.istockphoto.com/id/516457688/photo/thank-you-hanging-fabric-word.jpg?b=1&s=170667a&w=0&k=20&c=VzqoErt31c84Z1MaaGtxsLjpDzJJAiKZDjaWojkV8uU=" /> */}
      <Flex
        flexDirection={{ lg: "row", md: "column", base: "column" }}
        w="80%"
        m="auto"
        justify={"space-between"}
        align="flex-start"
        mt="20px"
      >
        {/* left side */}
        <Box w={{ lg: "55%", md: "100%", base: "100%" }}>
          <Box pb="30px" borderBottom="2px solid black">
            <Heading>Checkout</Heading>
          </Box>
          <Heading mt="10px" fontSize={"28px"}>
            Shipping Address
          </Heading>
          <FormControl mt="20px">
            <Stack spacing={6}>
              <Flex justify={"space-between"}>
                <Input
                  name="firstname"
                  value={form.firstname}
                  type={"text"}
                  w="48%"
                  placeholder="First name"
                  onChange={handleChange}
                />
                <Input
                  name="lastname"
                  value={form.lastname}
                  type={"text"}
                  w="48%"
                  placeholder="Last name"
                  onChange={handleChange}
                />
              </Flex>
              <Input
                name="phone"
                value={form.phone}
                type={"number"}
                placeholder="Phone"
                onChange={handleChange}
              />
              <Input
                name="address"
                value={form.address}
                type={"text"}
                placeholder="Street Address"
                onChange={handleChange}
              />
              <Input
                name="zip"
                value={form.zip}
                w="50%"
                type={"number"}
                placeholder="ZIP/POSTAL CODE"
                onChange={handleChange}
              />
            </Stack>
            <Input
              type="submit"
              w="250px"
              h="50px"
              borderRadius={"40px"}
              mt="50px"
              background={"black"}
              color="white"
              _hover={{ color: "black", background: "white" }}
              value="Save & Continue"
              onClick={handleSubmit}
            />
          </FormControl>
        </Box>

        {/* right side */}

        <Stack
          w={{ lg: "35%", md: "100%", base: "100%" }}
          border="1px solid grey"
          borderRadius={"5px"}
          h="100%"
          p="20px 20px"
          mt={{ md: "20px", base: "20px" }}
          mb="20px"
        >
          <Flex w="100%" justify={"space-between"}>
            <Text>Merchandise Subtotal</Text>
            <Text fontWeight={"bold"}>₹ {totalPrice*81}</Text>
          </Flex>
          <Flex w="100%" justify={"space-between"}>
            <Text>Shipping & Handling</Text>
            <Text fontWeight={"bold"}>TBD</Text>
          </Flex>
          <Flex w="100%" justify={"space-between"}>
            <Text>Estimated Tax & Other Fees</Text>
            <Text fontWeight={"bold"}>TBD</Text>
          </Flex>
          <Divider />
          <Flex w="100%" justify={"space-between"}>
            <Text>Estimated Total</Text>
            <Text fontWeight={"bold"}>₹ {totalPrice*81}</Text>
          </Flex>
          <Box w="70%">
            <Text>
              or 4 payments of ₹ {(totalPrice*81)/4} with <strong>SBI</strong> or{" "}
              <strong>afterpay</strong>
            </Text>
          </Box>
          <Text fontSize={"12px"} color="grey">
            Shipping & taxes calculated during checkout
          </Text>

          {/* credit card program */}

          <Box
            w={{ lg: "100%", md: "100%", base: "100%" }}
            border="1px solid grey"
            borderRadius="5px"
            h={{ lg: "auto", md: "auto", base: "auto" }}
            p="20px"
            mb="20px"
          >
            <Text fontWeight={"bold"} fontSize={{ lg: "", md: "", base: "" }}>
              The Sephora Credit Card Program
            </Text>
            <HStack
              alignItems="center"
              ml="10px"
              mt="10px"
              spacing={{ lg: 16, md: 6, sm: 5 }}
            >
              <Box w={{ lg: "50px", md: "70px", base: "100px" }}>
                {" "}
                <Image src="https://www.sephora.com/contentimages/creditcard/cardicon/CreditCard.svg" />
              </Box>
              <Box w={{ lg: "450px", md: "450px", sm: "550px" }}>
                <Text>
                  Save 25% on this order when you open and use either Sephora
                  Credit Card today*
                </Text>
              </Box>
            </HStack>
            <Text ml="10px" fontSize="14px" color="grey">
              *Subject to credit approval. Exclusions apply.
            </Text>
            <Link href="https://www.sephora.com/creditcard?icid2=ccBannerMessageNewStatusApp:See_Details">
              <Button
                display={"block"}
                m="auto"
                mt="10px"
                border="2px solid black"
                background="none"
                borderRadius="20px"
                _hover={{ background: "none", textDecoration: "none" }}
              >
                See Details
              </Button>
            </Link>
            <Divider mt="10px" />
            {/* <Button
              w="80%"
              display={"block"}
              m="auto"
              mt="10px"
              borderRadius={"20px"}
            >
              Place Order
            </Button> */}
          </Box>
        </Stack>
      </Flex>
      {boolean ? (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Payment</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Image
                src="data:image/jpeg;base64,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"
                m="auto"
              />
              <Input
                placeholder="Enter card number"
                mt="10px"
                type="number"
                min={12}
                max={12}
                isRequired
              />
              <Button
                mt="15px"
                onClick={() => {
                  toast({
                    title: "Your OTP is 1234",
                    status: "info",
                    duration: 3000,
                    isClosable: true,
                    position: "top",
                  });
                  setShoeOtp(true);
                }}
              >
                Submit Card Details
              </Button>
              {showOtp ? (
                <Box mt="10px">
                  <Heading fontSize={"25px"} mb="10px">
                    Enter OTP
                  </Heading>
                  <Input
                    fontSize={"16px"}
                    type="number"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </Box>
              ) : null}
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" onClick={handleOtp}>
                Submit
              </Button>
              <Button variant="ghost" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      ) : null}
    </>
  );
}

export default Checkout;
