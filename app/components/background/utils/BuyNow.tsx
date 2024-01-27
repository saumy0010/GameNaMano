'use client'

import { useRouter } from 'next/navigation'

import '../Background.css'


const BuyNow = (props:any)=>{

    const router = useRouter()

    const handleClick = ()=>{
        router.push(`/product/${props.id}`)
    }
    
    return (
        <div className="buy-now dfc" onClick={handleClick}>
            Buy Now
        </div>
    )
}

export default BuyNow;