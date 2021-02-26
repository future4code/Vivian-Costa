import React from 'react'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { FeedCardContainer, FeedCardContent } from './styled'

export function FeedCard(props) {
    return(
        <FeedCardContainer onClick={props.onClick}>
            {console.log(props)}
            <CardActionArea>
                <CardMedia
                component={'text'}
                alt={props.title}
                height={'350px'}
                right={'350px'}
                title={props.title}
                />

            <FeedCardContent>
                <Typography align={'center'}>
                    {props.title}    
                </Typography>    
            </FeedCardContent>    
            </CardActionArea>
        </FeedCardContainer>
    )
}