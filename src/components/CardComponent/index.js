import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const CardComponent = ({clothes}) => {


  return (
    <Card>
      <CardMedia
        sx={{objectFit: "contain", height:"200px"}}
        image={clothes.img}
        component='img'
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div" fontSize="20px" >
          {clothes.titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        </Typography>
      </CardContent>
    </Card>
  );
}
export default CardComponent;