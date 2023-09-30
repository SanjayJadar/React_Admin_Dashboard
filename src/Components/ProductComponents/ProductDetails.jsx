import React from "react";
import { useLocation} from "react-router-dom";

const ProductDetails = () => {

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const dataString = params.get('data');
    const data = JSON.parse(decodeURIComponent(dataString));

    // console.log(data);

    if(data===null){
        return <></>
    }

    return <div>
        <h1>Product Details</h1>
        <h3>Product Name : {data.name}</h3>
        <p>Product Description : {data.description}</p>
        <h4>Product Category : {data.category}</h4>
    </div>
}

export default ProductDetails;