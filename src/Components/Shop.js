import React, {useState, useEffect} from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Shop() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            'https://www.dnd5eapi.co/api/magic-items'
        );
        
        const items = await data.json();
        //console.log(items.results);
        setItems(items.results);
    };


    return (
        <div>
            <h1 className='title'>Gilmore's Shop</h1>
            <div className='itemsContainer'>
                {items.map(item => (
                    <h1 className='items' key={item.url}>
                        <Link className='text' to={`/shop${item.url}`}>{item.name}</Link>
                    </h1>
                ))}
            </div>
        </div>
    );
}




export default Shop;