import { useEffect, useState } from "react"

export default function GetData(props:any) {

    const [data,setData] = useState<any>([])
    const [err,setErr] = useState('')

    const [loading,setLoading] = useState(true)
    

    useEffect(()=>{

        const getProduct = async()=>{
            try{
                const res = await fetch(props)
                const result = await res.json()

                if(result) {
                    setData(result)
                    setLoading(false)
                }

            }catch(err:any) {
                console.error(err)
                setErr(err)
            }
           
        }
        getProduct()
    },[props])
    
    return {
        err,
        loading,
        data
    }
}
