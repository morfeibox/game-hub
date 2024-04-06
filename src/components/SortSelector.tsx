import usePlatforms from "../hooks/usePlatforms";
import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/all";

const SortSelector = () => {
    const {data, error} = usePlatforms()

    if(error) return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
               Order by: Relevance
            </MenuButton>
            <MenuList>
                <MenuItem>Relevance</MenuItem>
                <MenuItem>Date added</MenuItem>
                <MenuItem>Name</MenuItem>
                <MenuItem>Release date</MenuItem>
                <MenuItem>Popularity</MenuItem>
                <MenuItem>Average Rating</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default SortSelector