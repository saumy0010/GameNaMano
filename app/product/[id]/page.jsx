'use client'
import getData from '@/app/components/api/getData';
import ProductDeatail from '@/app/components/product/ProductDetail';

import styles from '../../components/navigation/Navigation.module.css';


export default function Page({params}) {
    const {error, data, loading} = getData(`https://dummyjson.com/products/${params?.id || 1}`);

    return(
        <div className={styles.productContainer}>
            {
                !error && loading && <p>Loading....</p>
            }
            {
                !error && !loading && <ProductDeatail {...data} />
            }
        </div>
    )
}