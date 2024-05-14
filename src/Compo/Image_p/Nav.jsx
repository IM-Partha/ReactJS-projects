import React, { useState } from 'react';
import Food from './Food';
import FoodData from './Data/FoodData';

const Nav = () => {
    const [allItems, setAllItems] = useState(FoodData);
    const [filteredItems, setFilteredItems] = useState([]);

    const filterData = (category) => {
       if(category=='All'){
        setFilteredItems(allItems)
       }
    else{ const filtered = allItems.filter((food) => food.category === category);
            setFilteredItems(filtered); }

    };

    return (
        <div>
            <h1 className='text-5xl text-center'>Order Dish</h1>
            <div className='flex flex-row gap-5 ml-5 justify-center my-6 cursor-pointer'>
                <button className='bg-[#f1c40f] text-white p-2 w-[100px] rounded hover:bg-[#f39c12]' onClick={() => filterData('All')} >All</button>
                <button className='bg-[#f1c40f] text-white p-2 w-[100px] rounded hover:bg-[#f39c12]' onClick={() => filterData('Lunch')}>Lunch</button>
                <button className='bg-[#f1c40f] text-white p-2 w-[100px] rounded hover:bg-[#f39c12]' onClick={() => filterData('Breakfast')}>Breakfast</button>
                <button className='bg-[#f1c40f] text-white p-2 w-[100px] rounded hover:bg-[#f39c12]' onClick={() => filterData('Dinner')}>Dinner</button>
            </div>
            <div>
                
                {filteredItems.map((item) => (
                    <Food key={item.id} image={item.img} name={item.name} price={item.price} />
                ))}
            </div>
        </div>
    );
};

export default Nav;
