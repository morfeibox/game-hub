import useGenres, {Genre} from "../hooks/useGenres";
import {HStack, Image, List, ListItem, Spinner, Button} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void,
    slectedGenre: Genre|null
}

const GenreList = ({onSelectGenre, slectedGenre}:Props) => {

    const {data, isLoading, error} = useGenres()

    if(error) return null;
    if(isLoading) return <Spinner/>

    return (
        <List>
            {data.map(genre =>
                <ListItem key={genre.id} paddingY='5px'>
                <HStack>
                    <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
                    <Button fontWeight={genre.id === slectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
                </HStack>
            </ListItem>)}
        </List>
    )
}

export default GenreList