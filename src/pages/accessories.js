import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import ItemContainer from '../components/card/container';

export default function MultiActionAreaCard() {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="space-around"
      direction="row"
      p={2}
    >
      <Grid item xs={12} md={4}>
        <ItemContainer
          name="Accessories"
          price="$0000"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          image="https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-6/242932970_162720899370119_9138658203041125418_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFfV3s-wPY3y6pxJSs579mmUPG4jqYjv1VQ8biOpiO_VYakBFZlcuavsDnK5jXxw6MV6-3ffsB6w-hCcRisIa_F&_nc_ohc=jsbqWelu87MAX_VJfHd&_nc_ht=scontent.fmnl17-4.fna&oh=00_AT_mbPuCZKI5NAiHVGSfqMfPzLRoB6Bxttpv2TwRkg7WDw&oe=623CC914"
        />
      </Grid>

      <Grid item xs={6} md={4}>
        <ItemContainer
          name="Sample"
          price="$0000"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          image="https://scontent.fmnl17-1.fna.fbcdn.net/v/t39.30808-6/273485050_249258820716326_7429069957742617783_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeHk5xK2tKz-vA3VkIzwuMlV61lqMvF92DPrWWoy8X3YM1cJ1igVy7JkP3f_U-W9TV1kZwTjqW6XWMtSY8nMw39r&_nc_ohc=5cB9WpRy0vAAX8E8Sbj&_nc_ht=scontent.fmnl17-1.fna&oh=00_AT-pBLbZDGrsYnq7AyFWz_rYk-Qx9CmjwMPqBmg_Gv7pUg&oe=623B3EEA"
        />
      </Grid>
      <Grid item xs={6} md={4}>
        <ItemContainer
          name="Sample"
          price="$0000"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          image="https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/273436260_249256634049878_2123603441085627949_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeHq-dHvnhDo4x0TEZt71C4COsP0i5MwiLo6w_SLkzCIuoU2agBGDzTJsiS7mmIGRuLe6bULzN4lx6GZJOA1JL-h&_nc_ohc=O58NLmuVrCoAX8IBd8c&_nc_ht=scontent.fmnl17-2.fna&oh=00_AT_4e9z3rZ1oCkryBTfLAk9uNSNvYVIdqEXXRSsHEC5WTw&oe=623BF771"
        />
      </Grid>
    </Grid>
  );
}
