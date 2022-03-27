import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function ItemContainer({ name, description, price, image, height='200' }) {
  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CardActionArea>
        <CardMedia component="img" height={height} image={image} />
        <CardContent style={{ paddingBottom: '0px' }}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            style={{ marginBottom: '2.5px' }}
          >
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ justifyContent: 'flex-end' }}>
        <Button size="small" color="primary">
          {price}
        </Button>
      </CardActions>
    </Card>
  );
}
