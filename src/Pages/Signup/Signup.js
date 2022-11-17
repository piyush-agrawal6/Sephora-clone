import {
  useToast,
  Input,
  Box,
  Grid,
  Img,
  Heading,
  Stack,
  Button,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authRegister } from "../../Redux/auth/actions";
import { useNavigate } from "react-router-dom";
import { AUTH_REGISTER_RESET } from "../../Redux/auth/actionTypes";

const initialState = {
  name: "",
  email: "",
  password: "",
};
function Signup() {
  const toast = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState(initialState);
  const authState = useSelector((state) => state.auth.userRegister);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (authState.message === "User already exists") {
      toast({
        title: authState.message,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      dispatch({ type: AUTH_REGISTER_RESET });
    }
    if (authState.message === "User Registered Successfully") {
      toast({
        title: authState.message,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });

      dispatch({ type: AUTH_REGISTER_RESET });

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  }, [dispatch, navigate, authState.error, authState.message, toast]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    dispatch(authRegister(formData));
  };
  return (
    <Grid
      w={{ base: "70%", md: "90%" }}
      m="30px auto"
      gap={8}
      templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
    >
      <Box shadow={{ base: "md", md: "none" }} borderRadius="20px" p={4}>
        <Heading textAlign={"center"}>Register to be one of us</Heading>
        <Stack py={8} gap={4} w={{ base: "85%", md: "70%" }} m="auto">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<FontAwesomeIcon icon={faUser} />}
            />
            <Input
              type={"text"}
              onChange={handleChange}
              name="name"
              placeholder="Username"
              value={formData.name}
            />
          </InputGroup>
          <InputGroup>
            {" "}
            <InputLeftElement
              pointerEvents="none"
              children={<EmailIcon color="gray.600" />}
            />
            <Input
              type="email"
              onChange={handleChange}
              name="email"
              placeholder="Email"
              value={formData.email}
              required={true}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<LockIcon color="gray.600" />}
            />
            <Input
              type={"password"}
              onChange={handleChange}
              name="password"
              placeholder="Password"
              value={formData.password}
            />
          </InputGroup>

          <Button
            bg={"rgb(88, 88, 88)"}
            onClick={handleSubmit}
            _hover={{ bg: "black" }}
            color={"white"}
            fontSize="18px"
            w={"100%"}
          >
            {authState.loading ? "Registering..." : "Register"}
          </Button>
          <Button onClick={() => navigate("/login")}>
            Already a User ? Login
          </Button>
        </Stack>
      </Box>
      <Box display={{ base: "none", md: "inherit" }}>
        <Img
          w={"100%"}
          h={"100%"}
          objectFit="contain"
          src="https://www.bms.co.in/wp-content/uploads/2015/05/Shopaholic.jpg"
        />
      </Box>
    </Grid>
  );
}

export default Signup;
