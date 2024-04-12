import React from 'react'
import {Text, SimpleGrid, Button, Box, Spinner} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSceleton";
import GameCardContainer from "./GameCardContainer";
import InfiniteScroll from "react-infinite-scroll-component";
import useGameQueryStore from "../store";

const GameGrid = () => {

    const {data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage} = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6];

    if (error) return <Text>{error.message}</Text>

    const fectedGamesCont = data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;

    return (

        <InfiniteScroll next={() => fetchNextPage()} hasMore={!!hasNextPage} loader={<Spinner/>}
                        dataLength={fectedGamesCont}>
            <SimpleGrid columns={[1, 2, 3, 4]} padding='10px' spacing={6}>
                {isLoading && skeletons.map(skeleton => <GameCardContainer
                    key={skeleton}><GameCardSkeleton/></GameCardContainer>)}
                {data?.pages.map((page, idx) => <React.Fragment key={idx}>
                    {page.results.map(game => <GameCardContainer key={game.id}><GameCard
                        game={game}/></GameCardContainer>)}
                </React.Fragment>)}
            </SimpleGrid>
        </InfiniteScroll>


    )
}

export default GameGrid