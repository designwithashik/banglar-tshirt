import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <h3>The shirts variety is: {data.length}</h3>
        </div>
    );
};

export default Home;