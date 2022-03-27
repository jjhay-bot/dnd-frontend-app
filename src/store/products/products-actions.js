// import { productsUrl } from '../httpRequest/httpUrl';
import { getRequestOptions } from '../httpRequest/httpOptions';
import { getProductList } from './products-slice';
import axios from 'axios';

const url = 'https://dndjews-v2.herokuapp.com/products';
const getProductData = () => {
  return async (dispatch) => {
    await axios
      .get(url, { mode: 'no-cors' })
      .then((response) => dispatch(getProductList(response.data)));
  };
};

export default getProductData;


// useEffect(() => {
//   fetch('/products')
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// }, []);