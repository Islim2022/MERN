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

    const createProduct = product => {
        axios.post('http://localhost:8000/api/product', product)
            .then(response => {
                setProducts([...products, response.data])
            })
    }
    return (
        <div>
            <ProductForm 
            onSubmitProp={createProduct} 
            initialTitle=""
            initialDescription=""
            initialPrice="" />
            <hr />
            <ProductList product={products} removeFromDom={removeFromDom} />
        </div>
    )
}
