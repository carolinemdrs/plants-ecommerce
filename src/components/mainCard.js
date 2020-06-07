import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardStyled = styled(Card) `
   margin-bottom: 10%;
`
const CardActionsStyled = styled(CardActions) `
  display:flex;
  justify-content: center;
`
const ButtonStyled = styled(Button) `
  background-color: blue;
`
const useStyles = makeStyles({
  root: {
    maxWidth: 250,
  },
});

export default function MainCard(props) {
  const classes = useStyles();


 function onClickBuy () {
	console.log("OIssdsd")
	}
  
  return (
    
    <CardStyled className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.cardName}
          height="140"
          image={props.cardImage}
          title={props.cardName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.cardName}
          </Typography>
          <Typography variant="body2" color="blue" component="p">
            {props.cardText}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionsStyled>
        <ButtonStyled size="small" color="primary" onClick={() =>{onClickBuy()}} >
          Comprar
        </ButtonStyled>
      </CardActionsStyled>
    </CardStyled>
  );
}

MainCard.propTypes = {
  cardName: PropTypes.object.isRequired,
  cardImage: PropTypes.object.isRequired,
  cardText: PropTypes.object.isRequired,
};
