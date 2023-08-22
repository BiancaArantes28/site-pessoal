export const fetchProducts = async () => {
    const res = await fetch("https://60281e21dd4afd001754afbf.mockapi.io/api/products/list");

    return res.json();
};