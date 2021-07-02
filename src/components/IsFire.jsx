import React, { useMemo } from "react";

let renderCount=0


const IsFive = React.memo(({value}) => {
    console.warn(`isFive render : ${++renderCount}`)

    const getResult=useMemo(()=>{
        let i =0;
        while(i < 600000000) i++
        return value ===5 ? 'This is five!!!': 'This is not five :('
    }, [value])
    
    return (
        <h3>
            {getResult}
        </h3>
    );
},
(prevProps, nextProps)=>{
    if (nextProps.value ===5 || nextProps.value ===6 ){
        return false
    } else{
        return true
    }

})

export default IsFive;
