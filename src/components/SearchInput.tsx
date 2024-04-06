import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/all";

const searchInput = () => {

    return (
        <InputGroup>
            <InputLeftElement >{<BsSearch/>}</InputLeftElement>
        <Input borderRadius={20} placeholder='Search games...' variant='fill'></Input>
        </InputGroup>
    )
}

export default searchInput