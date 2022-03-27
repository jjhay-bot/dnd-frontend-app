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
          name="Earrings"
          price="$0000"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          image="https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-6/274100927_254221526886722_7201530629510702866_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGJoKmXmalydSRGKv1-AizHshSzsDPDurKyFLOwM8O6sp-RKVkHREUhcUctIaTGFI3sD0v3jmB1gcCyfS7jS9uH&_nc_ohc=GznDuk4GIgMAX8d9Bk0&_nc_ht=scontent.fmnl17-4.fna&oh=00_AT-86z-cVYWfOeVdqQC6amPjnpXKEGa9QPBodH3Jq9WxhA&oe=623C8DCD"
        />
      </Grid>

      <Grid item xs={6} md={4}>
        <ItemContainer
          name="Sample"
          price="$0000"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          image="https://scontent.fcrk1-2.fna.fbcdn.net/v/t39.30808-6/274154926_254221516886723_8862475574899868380_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeF100bFiyARjYDaW3qVF69IttXaqQHIOji21dqpAcg6OCmRd8VG1z4RvktjLl5HNELDktjc0Drl_MnBzJlcKloQ&_nc_ohc=tKXDZ3ak_LsAX8-B0yT&_nc_ht=scontent.fcrk1-2.fna&oh=00_AT9rtRsRS84vE9Ez-OsdOieE3hTQLXZZ81iUZ9I3OMjdZw&oe=623B66F4"
        />
      </Grid>
      <Grid item xs={6} md={4}>
        <ItemContainer
          name="Sample"
          price="$0000"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          image="https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/275998056_272032745105600_5318532487007871914_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGCU9CjNCdzXY-xIQBw34BlpOQ_ZYD3Ov2k5D9lgPc6_feCUQ6dhAntnRCJSCbaQYJYxVWQkYtBQLb3QZ_YuRD_&_nc_ohc=OLz_aLdD0b0AX_djCxz&_nc_ht=scontent.fmnl17-2.fna&oh=00_AT_fxMr4S1IDpfGmRbEH9x4q7v1PxvqxJSCKq_S_CY2X3g&oe=623BA503"
        />
      </Grid>


    </Grid>
  );
}
