import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/all";
import {useRef} from "react";

interface Props {
    onSearch: (searchText: string) => void;
}

const searchInput = ({onSearch}: Props) => {

    const ref = useRef<HTMLInputElement>(null);

    return (
        <form  onSubmit={(event) => {
            event.preventDefault();
            if(ref.current) onSearch(ref.current.value)
        }}>
        <InputGroup>
            <InputLeftElement >{<BsSearch/>}</InputLeftElement>
        <Input ref={ref} borderRadius={20} placeholder='Search games...' variant='fill'></Input>
        </InputGroup>
        </form>
    )
}

export default searchInput