import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Accessories from './accessories';
import Bracelets from './bracelets';
import Earrings from './earrings';
import Necklaces from './necklaces';
import Rings from './rings';
import Home from './home';
import { Redirect } from 'react-router-dom';
import { pageState, setPageValue } from '../store/ui/page-slice';
import { useSelector, useDispatch } from 'react-redux';

export default function Switch() {
  const { pageValue } = useSelector(pageState);

  return (
    <>
      {pageValue == 'accessories' ? (
        <Accessories />
      ) : pageValue == 'bracelets' ? (
        <Bracelets />
      ) : pageValue == 'earrings' ? (
        <Earrings />
      ) : pageValue == 'necklaces' ? (
        <Necklaces />
      ) : pageValue == 'rings' ? (
        <Rings />
      ) : (
        <Home />
      )}
    </>
  );
}