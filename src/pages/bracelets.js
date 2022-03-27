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
          // height="250"
          name="Bracelets"
          price="$0000"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          image="https://scontent.fmnl17-1.fna.fbcdn.net/v/t39.30808-6/275679809_270706648571543_4838922260047189311_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeFobwt9E7hqgNpTAcX5e3DFo_0EHw0MA_yj_QQfDQwD_Hs1N-RaOErpDE0lvIEbyH2DQV0drFaGx1ISFvyL62_d&_nc_ohc=zECQhR23PFkAX96B7qS&_nc_ht=scontent.fmnl17-1.fna&oh=00_AT-ZJWYdpoDXiaIUAc_sTL0p0L1F7fK-t3uzU5j6FS_4ig&oe=623CECBC"
        />
      </Grid>
      <Grid item xs={6} md={4}>
        <ItemContainer
          name="Sample"
          price="$0000"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          image="https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/273527338_249278180714390_5436838518659812963_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeGLD_HW-eSskv6_BVoZD3AiY83pRL_4QoljzelEv_hCiXRj6DPxMLs6Ch2tRdF5f6aYqWQ8h8uxUi7t7bb8sufP&_nc_ohc=Cd2HgqgbNQYAX_U-oYR&_nc_ht=scontent.fcrk1-3.fna&oh=00_AT_PKOULwG_Vo3IK9NLwLfOdh-8kVTNKHV4cqVKJLFg9hg&oe=623B9AC7"
        />
      </Grid>
      <Grid item xs={6} md={4}>
        <ItemContainer
          name="Sample"
          price="$0000"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          image="https://scontent.fcrk1-2.fna.fbcdn.net/v/t39.30808-6/273524993_249278034047738_8673671854211836169_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeGGcSUgDzntkDtwv3pjfnpA9ayzSfjJbdz1rLNJ-Mlt3FGmy0Dvlr4M2NHrn_85qCX3632Qtx-fC7xvDC2Ys0ha&_nc_ohc=iNBUfLK57ikAX-j3W0m&_nc_ht=scontent.fcrk1-2.fna&oh=00_AT9Z0Ghqr1l0u9KrTXSEm6HISIIZnRd9sMO1wYO2MibB6Q&oe=623C2C4F"
        />
      </Grid>

    </Grid>
  );
}
