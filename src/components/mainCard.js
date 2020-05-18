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

export default function MainCard() {
  const classes = useStyles();
  return (
    <CardStyled className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Camélia"
          height="140"
          image="https://static3.tcdn.com.br/img/img_prod/450860/muda_da_flor_camelia_rosa_1396_1_20190611093649.jpg"
          title="Camélia"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
             Camélia
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionsStyled>
        <ButtonStyled size="small" color="primary">
          Comprar
        </ButtonStyled>
      </CardActionsStyled>
    </CardStyled>
  );
}

