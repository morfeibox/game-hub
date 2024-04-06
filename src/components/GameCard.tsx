import React from 'react'
import {Game} from '../hooks/useGames'
import {Card, CardBody, Heading, HStack, Image, Text} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import GameCardContainer from "./GameCardContainer";
import Emoji from "./Emoji";

interface Props {
    game: Game
}

const GameCard = ({game}: Props) => {

    return (
        <GameCardContainer>
            <Card>
                <Image src={getCroppedImageUrl(game.background_image)}/>
                <CardBody>
                    <HStack justifyContent='space-between'>
                        <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
                        <CriticScore score={game.metacritic}/>
                    </HStack>
                    <Heading fontSize='2xl' marginBottom={3}>{game.name}</Heading>
                    <Emoji  rating={game.rating_top} />
                </CardBody>
            </Card>
        </GameCardContainer>
    )
}

export default GameCard