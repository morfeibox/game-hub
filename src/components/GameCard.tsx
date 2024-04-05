import React from 'react'
import { Game } from '../hooks/useGames'
import {Card, Heading, Image} from "@chakra-ui/react";

interface Props {
    game:Game
}
const GameCard = ({ game }: Props) => {

    return (
       <Card borderRadius={10} overflow='hidden'>
        <Image src={game.background_image}/>
           <Heading fontSize='2xl'>{game.name}</Heading>
       </Card>
    )
}

export default GameCard