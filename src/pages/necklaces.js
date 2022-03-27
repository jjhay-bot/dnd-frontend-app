import * as React from 'react';
import { Grid } from '@mui/material';
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
          name="Necklaces"
          price="$0000"
          // height="250"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          image="https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-6/275140629_264400262535515_419277330425473255_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGEwiYams_FD5gQR00qCwi_1zDAUwqyiTTXMMBTCrKJNEhGxp6d2iNy2dDv5hx7dj-3pyu6vBaCGvYO-zZReLbQ&_nc_ohc=ajUe-W5nbGQAX-IZGQY&_nc_ht=scontent.fmnl17-4.fna&oh=00_AT_D6apjeBkoBf09dCZ83PqZTUvf1zAHUzgxiZDA2emfkg&oe=623BC7FB"
        />
      </Grid>

      <Grid item xs={6} md={4}>
        <ItemContainer
          name="Sample"
          price="$0000"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          image="https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/273430767_249268844048657_7087764913281145897_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeGRO14a2JTqI9ZpT_WvwYExBVVnTA47hLwFVWdMDjuEvEQubEW-NJdFgnAKjp5i4afbTn7Hl3B0rOEPNUqcXwKd&_nc_ohc=Jf0ccApgGMQAX9I6fhZ&_nc_ht=scontent.fcrk1-3.fna&oh=00_AT9VoB_PdqT_AWlmpS6nZgVlNEbUKgj1YpmwQnC3cEnehQ&oe=623C95E8"
        />
      </Grid>

      <Grid item xs={6} md={4}>
        <ItemContainer
          name="Sample"
          price="$0000"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          image="https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/273547257_249268440715364_5509901141015147239_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeGa-8GM4G3DpaskVI7BdJ5XVOGin45PpTxU4aKfjk-lPEggMQEtg-9rCPTSsgfhDkT0PFWcRs-2QNmh9U5BtHyR&_nc_ohc=7WSoMn3yLjgAX_8ZBQm&tn=b5iU470C2so7UiF9&_nc_ht=scontent.fmnl17-2.fna&oh=00_AT85fwREwFsg53yfoM15CVx3pNXW0LQ_SjenVtyEV4mNIg&oe=623D0E3E"
        />
      </Grid>
    </Grid>
  );
}
