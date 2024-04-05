import React from 'react'
import {Text, SimpleGrid} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSceleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {

    const {games, error, isLoading} = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6];

    return (
        <>
            {error && <Text>{error}</Text>}

            <SimpleGrid columns={[1, 2, 3, 4]} padding='10px;' spacing={10}>
                {isLoading && skeletons.map(skeleton =><GameCardContainer><GameCardSkeleton/></GameCardContainer>)}
                {games.map((game) => (<GameCard key={game.id} game={game}/>))}
            </SimpleGrid>
        </>
    )
}

export default GameGrid