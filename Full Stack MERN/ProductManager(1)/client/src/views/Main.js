import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
export default () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(response => {
                setProducts(response.data);
            })
            .catch(err => console.error(err));
    }, [products]);

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }

    return (
        <div>
            <ProductForm />
            <hr />
            <ProductList product={products} removeFromDom={removeFromDom} />
        </div>
    )
}
