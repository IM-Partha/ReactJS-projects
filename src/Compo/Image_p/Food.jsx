import React from 'react';

const Food = ({ image, name, price }) => {
  
  return (
    <div className='flex flex-wrap mx-[50px] my-10'>
      <div className='p-1 mx-1 shadow-lg'>
        <img className='h-[200px] w-[200px]' src={image} alt="" />
        <div>
          <h2>{name}</h2>
          <p>{price}</p>
          <div>
            <button className='rounded w-[200px] text-white p-1 bg-[#8e44ad]'>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Food;
