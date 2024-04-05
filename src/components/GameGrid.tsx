import React from 'react'
import {Text, SimpleGrid} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {

    const {games, error} = useGames();

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={[ 1,2,3,4 ]} padding='10px;' spacing={10}>
                {games.map((game) => (<GameCard key={game.id} game={game} />))}
            </SimpleGrid>
        </>
    )
}

export default GameGrid