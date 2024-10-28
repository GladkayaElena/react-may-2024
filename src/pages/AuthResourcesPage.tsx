import React, {useEffect, useState} from 'react';
import {loadAuthProducts, refresh} from "../services/api.service";
import {IProduct} from "../models/IProduct";


const AuthResourcesPage = () => {

    const [products, setProducts] = useState<IProduct[]>([])
    useEffect(() => {
        loadAuthProducts()
            .then(products => {
                if (products) {
                    setProducts(prevState => products) // или setProducts(products)
                }
            })
            .catch(reason => {
                refresh()
                    .then()
            })
        return () => {
            console.log('useEffect done his work');
        }
    }, []);
    return (
        <div>
            {
                JSON.stringify(products)
            }
        </div>
    );
};

export default AuthResourcesPage;