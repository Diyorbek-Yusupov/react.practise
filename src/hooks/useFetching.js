import React, { useState } from 'react'

export default function useFetching(callback) {
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');
    
    const fetching = async () => { 
        try {
            setIsLoading(true)
            await callback()
        }catch(e){
            setErr(e.message)
        }finally{
            setIsLoading(false)
        }
    }
    return [fetching, isLoading, err]
}
