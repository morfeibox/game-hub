import React from 'react'
import {Text, SimpleGrid, Button, Box} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSceleton";
import GameCardContainer from "./GameCardContainer";
import {Genre} from "../hooks/useGenres";
import {GameQuery} from "../App";

interface Props {
    gameQuery: GameQuery
}

const GameGrid = ({gameQuery}: Props) => {

    const {data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage} = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6];

    if (error) return <Text>{error.message}</Text>

    return (
        <Box padding='10px;'>
        <SimpleGrid columns={[1, 2, 3, 4]}  spacing={6}>
            {isLoading && skeletons.map(skeleton => <GameCardContainer
                key={skeleton}><GameCardSkeleton/></GameCardContainer>)}
            {data?.pages.map((page, idx) => <React.Fragment key={idx}>
                {page.results.map(game => <GameCardContainer key={game.id}><GameCard game={game}/></GameCardContainer>)}
            </React.Fragment>)}
        </SimpleGrid>
            { hasNextPage   && <Button marginY={5} onClick={() => fetchNextPage()}>{isFetchingNextPage ? 'Loading...' : 'Load More'}</Button>}
        </Box>

    )
}

export default GameGrid