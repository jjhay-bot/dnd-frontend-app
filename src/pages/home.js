import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import ItemContainer from "../components/card/container";
import { useSelector, useDispatch } from "react-redux";
import { productState, getProductList, getProductValue, setProductShow } from "../store/products/products-slice";
import getProductsData from "../store/products/products-actions";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import {Image, Video, Transformation} from 'cloudinary-react';
// import CldCustUploadLgRestApi from './../components/cloudinary/index';


export default function MultiActionAreaCard() {
  const dispatch = useDispatch();
  const { productList } = useSelector(productState);

  useEffect(async () => {
    await dispatch(getProductsData());
  }, []);


  return (
    <div style={{ maxWidth: "1800px", margin: "auto" }}>
      {/* <CldCustUploadLgRestApi /> */}

      <Grid container spacing={2} justifyContent="space-around" direction="row" p={2}>
        {productList.map((item) => (
          <Grid item xs={12} md={4} key={item.id}>
            <ItemContainer
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.url}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
