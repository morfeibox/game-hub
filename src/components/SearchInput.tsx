import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/all";
import {useRef} from "react";
import useGameQueryStore from "../store";


const searchInput = () => {

    const ref = useRef<HTMLInputElement>(null);
    const setSearchText = useGameQueryStore(selector => selector.setSearchText);

    return (
        <form  onSubmit={(event) => {
            event.preventDefault();
            if(ref.current) setSearchText(ref.current.value)
        }}>
        <InputGroup>
            <InputLeftElement >{<BsSearch/>}</InputLeftElement>
        <Input ref={ref} borderRadius={20} placeholder='Search games...' variant='fill'></Input>
        </InputGroup>
        </form>
    )
}

export default searchInput