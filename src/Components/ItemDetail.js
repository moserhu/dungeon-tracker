import React, { useState, useEffect } from 'react';
import '../App.css';
import { useParams } from 'react-router-dom';

function ItemDetail() {
    useEffect(() => { 
        fetchItem();
    });

    const [item, setItem] = useState({});

    const id = useParams();
    console.log(id);

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://www.dnd5eapi.co/api/magic-items/${id.id}`);
        const item = await fetchItem.json();
        setItem(item);

        console.log(item);
    };


    return (
        <div>
            <h1 className='title'>
                {item.name}
            </h1>
            <div className='text'>
               {item.desc}
            </div>
        </div>
    );
}




export default ItemDetail;