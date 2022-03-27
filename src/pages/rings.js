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
          name="Rings"
          price="$0000"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          image="https://scontent.fcrk1-2.fna.fbcdn.net/v/t39.30808-6/276112711_274298588212349_7696393771235826072_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeE8DXhC0gyCBZRVGin8erOQ_MuWi_Wva1j8y5aL9a9rWLoEBhnwrfm8yVYEL2ySzlzoQj7dNc3QzfAkRuHHVJTU&_nc_ohc=y1DKr-GYncYAX8xVvri&_nc_ht=scontent.fcrk1-2.fna&oh=00_AT9Tb4eBZYruQZi-Zf32Sp6ff_FVd_70lRJmMta0DLmmug&oe=623B83D8"
        />
      </Grid>

      <Grid item xs={6} md={4}>
        <ItemContainer
          name="Sample"
          price="$0000"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          image="https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/273494805_249273300714878_3799955406649895643_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeHgLIypcKQb78UQS6A9AtrLF1UuWGRNfqMXVS5YZE1-owoIN_Rg5MaFvaeVjmz9aWKSSiYapSccpX3AW5OY7tWD&_nc_ohc=UqGAuyUplj8AX_WM9yC&_nc_ht=scontent.fmnl17-3.fna&oh=00_AT_yUBgFzxBv3QeCNbKodW06koiqMNW9n_OJ_e6NgJw3cQ&oe=623BCC7C"
        />
      </Grid>
      <Grid item xs={6} md={4}>
        <ItemContainer
          name="Sample"
          price="$0000"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          image="https://scontent.fcrk1-2.fna.fbcdn.net/v/t39.30808-6/273565254_249273717381503_1879315981893716831_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeE0qDQr0Oyy3sx3nd5jgjF1grr4Ivja9yOCuvgi-Nr3IxEHrDJWgON2jHLioFyDlSkC25HZ_ezm-lh9H3w2y92n&_nc_ohc=50y5UzNXacAAX-IP_Im&_nc_ht=scontent.fcrk1-2.fna&oh=00_AT-LWtYy5kDQI2UuL5xN33aN7EKQ0TV0S7PfaCrAqWMdGA&oe=623BB658"
        />
      </Grid>

    </Grid>
  );
}
