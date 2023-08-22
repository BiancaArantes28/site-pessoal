import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { fetchProducts } from './getAPI.utils';

export const Teste = () => {
    /* const { data, status } = useQuery("products", fetchProducts); */
    const [data, setData] = useState([]);

    async function teste() {
        const response = await fetch("https://60281e21dd4afd001754afbf.mockapi.io/api/products/list");
        const values = await response.json();
        setData(values);
    }

    useEffect(() => {
        /* fetch("https://60281e21dd4afd001754afbf.mockapi.io/api/products/list")
            .then((res) => res.json())
            .then((response) => setData(response)); */
            // setData(teste())
            teste();
        // console.log("aqui = ", teste);
    }, [])
    return (
        <>
            {/* {status === "success" && (
                <>
                    {data.map((product) => (
                        <p style={{ color: 'white' }} key={product.id}>{product.name}</p>
                    ))}
                </>
            )} */}
            <>
                    {data.map((product) => (
                        <p style={{ color: 'white' }} key={product.id}>{product.name}</p>
                    ))}
                </>
            <h1>Teste</h1>
        </>
    );
};