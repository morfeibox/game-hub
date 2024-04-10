import useGenres, {Genre} from "../hooks/useGenres";
import {HStack, Image, List, ListItem, Spinner, Button, Heading} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    slectedGenreId?: number;
}

const GenreList = ({onSelectGenre, slectedGenreId}: Props) => {

    const {data, isLoading, error} = useGenres()

    // if (error) return null;
    // if (isLoading) return <Spinner/>

    return (
        <>
            <Heading fontSize='2xl' marginBottom={1}>Genres</Heading>
            <List>
                {data?.results.map(genre =>
                    <ListItem key={genre.id} paddingY='5px'>
                        <HStack>
                            <Image objectFit='cover' boxSize='32px' borderRadius={8}
                                   src={getCroppedImageUrl(genre.image_background)}/>
                            <Button textAlign='left' whiteSpace='normal'
                                    fontWeight={genre.id === slectedGenreId ? 'bold' : 'normal'}
                                    onClick={() => onSelectGenre(genre)} fontSize='lg'
                                    variant='link'>{genre.name}</Button>
                        </HStack>
                    </ListItem>)}
            </List>
        </>
    )
}

export default GenreList