import React, { useEffect, useState } from 'react'

const Example = () => {

    //init city;
    const [city, setCity] = useState("mumbai");

    //to store init data;
    const [data, setData] = useState();


    useEffect(() => {

        const handleSubmit = async () => {
            const res = await fetch(
                `api.openweathermap.org/data/2.5/forecast?q=mumbai&appid=e56737bbaae7d9f1c9b6c4f919396a89`,
                {
                    method: "GET",
                  
                }
            );

            const respo = await res.json();
            setData(respo);
            console.log(data)
        };

        handleSubmit();

    }, []);




    return (
        <div>Example</div>
    )
}

export default Example