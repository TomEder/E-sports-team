import {React, useState} from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer'
import Divider from '../../components/Divider/Divider'
import Hoodie from '../../images/Hoodie.png'

let hoodieImg = Hoodie

let initialProducts = [
    {
        name: 'T-shirt',
        price: 20,
        count: 0,
        id: 1
},
    {
        name: 'Hoodie',
        price: 20,
        image: hoodieImg,
        count: 0,
        id: 2
},
    {
        name: 'Mug',
        price: 20,
        count: 0,
        id: 3
},
    {
        name: 'Coaster',
        price: 20,
        count: 0,
        id: 4
},
    {
        name: 'Mousepad',
        price: 20,
        count: 0,
        id: 5
},
    {
        name: 'Pizza',
        price: 20,
        count: 0,
        id: 6
},
    {
        name: 'Toilet seat',
        price: 20,
        count: 0,
        id: 7
},
    {
        name: 'Towel',
        price: 20,
        count: 0,
        id: 8
}
]

const Merch = () => {
    const [
        products,
        setProducts
      ] = useState(initialProducts)

      const increment = (productId) => {
        setProducts(products.map(product => {
            if (product.id === productId) {
              return {
                ...product,
                count: product.count + 1
              };
            } else {
              return product;
            }
          }))
      }

      const decrement = (productId) => {
        setProducts(products.map(product => {
            if (product.id === productId) {
              return {
                ...product,
                count: product.count - 1
              };
            } else {
              return product;
            }
          }))
      }
    
    return ( 
        <>
        <Header/>
        <Divider/>
        <div className='flex grid grid-cols-5 max-w-5xl m-auto'>
        {products.map(product => (
        <div>
          <div className='text-center shadow bg-slate-300 rounded m-2' key={product.id}>
            <div>
                <h1 className='text-2xl'>{product.name}</h1>
            </div>
            <div>
                <span>image</span>
            </div>
            <div>
            <button onClick={() => {
                decrement(product.id);
            }}>
            -</button>
                <b>{product.count}</b>
                <button onClick={() => {
                increment(product.id);
            }}>
              +
            </button>
            </div>
          </div>
          </div>
        ))}
        </div>
      <Divider/>
      <Footer/>
      </>
        );
}
 
export default Merch;