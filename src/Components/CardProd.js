import React from "react";
import {Card,CardMedia,CardContent,Typography} from "@material-iu/core"

function CardProd(props){
  return(
    <Card>
      <CardMedia/>
      <CardContent>
        <Typography>
         Nombre product
         </Typography>
      </CardContent>   
    </Card>
  );
}

export default CardProd;