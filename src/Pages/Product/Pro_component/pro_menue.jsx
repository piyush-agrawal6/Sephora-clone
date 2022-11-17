import { Menu, MenuButton, MenuList, Select } from "@chakra-ui/react";
import { Accordion, AccordionItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import "../AllProduct.css";
export default function PorMenue(props) {
  const { setPrice, setSort, setOrderBy } = props;
  return (
    <div className="Prod_menu" Style="margin:0.7rem">
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Filter
        </MenuButton>
        <MenuList>
          <Accordion allowToggle>
            <AccordionItem>
              <Select
                placeholder="Price ₹"
                onChange={({ target }) => {
                  let array = target.value.split(":").map(Number);
                  for (let i = 0; i < array.length; i++) {
                    array[i] = array[i] / 81;
                  }
                  console.log("array", array);
                  setPrice(array);
                }}
                textAlign="center"
              >
                <option value="0:500">Below 500</option>
                <option value="500:1000">500 - 1000</option>
                <option value="1000:1500">1000 - 1500</option>
                <option value="1500:2000">1500 - 2000</option>
                <option value="2000:2500">2000 - 2500</option>
                <option value="2500:10000000">Above 2500</option>
              </Select>
            </AccordionItem>
            <AccordionItem>
              <Select
                placeholder="Reviews"
                textAlign="center"
                onChange={({ target }) => {
                  if (target.value === "increasing") {
                    setSort("numReviews");
                    setOrderBy("asc");
                  } else {
                    setSort("numReviews");
                    setOrderBy("desc");
                  }
                }}
              >
                <option value="increasing">Low to High</option>
                <option value="decreasing">High to Low</option>
              </Select>
            </AccordionItem>
          </Accordion>
        </MenuList>
      </Menu>
    </div>
  );
}
