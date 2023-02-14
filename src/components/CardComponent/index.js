import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CardComponent = ({users}) => {
  return (
    <Card sx={{ maxWidth : 300 }}>
      <CardMedia
        sx={{ height: 300 , width:300 }}
        image={users.avatar_url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {users.login}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Aqui va a estar la descripcion del objeto
        </Typography>
      </CardContent>
    </Card>
  );
}
export default CardComponent;
