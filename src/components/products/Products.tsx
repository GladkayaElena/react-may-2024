import React, {FC} from 'react';
import {IProductModel} from "../models/IProductModel";
import {apiProductObject} from "../../data";
import Product from "../product/Product";


const Products: FC = () => {
    const products: IProductModel[] = apiProductObject.products;
    return (
        <div>
            {
            products.map((product: IProductModel) => (<Product item = {product}/>))
            }
        </div>
    );
};

export default Products;