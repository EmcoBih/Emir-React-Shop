// import React from 'react'
// import { useGlobalContext } from './context'
// const CartItem = ({ id, img, title, price, amount }) => {
//   const { remove, increase, decrease, toggleAmount } = useGlobalContext()
//   return (
//     <article className='cart-item'>
//       <img src={img} alt={title} />
//       <div>
//         <h4>{title}</h4>
//         <h4 className='item-price'>${price}</h4>
//         {/* remove button */}
//         <button className='remove-btn' onClick={() => remove(id)}>
//           remove
//         </button>
//       </div>
//       <div>
//         {/* increase amount */}
//         <button className='amount-btn' onClick={() => toggleAmount(id, 'inc')}>
//           <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
//             <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
//           </svg>
//         </button>
//         {/* amount */}
//         <p className='amount'>{amount}</p>
//         {/* decrease amount */}
//         <button className='amount-btn' onClick={() => toggleAmount(id, 'dec')}>
//           <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
//             <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
//           </svg>
//         </button>
//       </div>
//     </article>
//   )
// }

// export default CartItem
import React from 'react';
import { useGlobalContext } from './context';

const CartItem = ({ id, img, title, price, amount, size }) => {
  const { remove, increase, decrease, toggleAmount } = useGlobalContext();
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div className='emir'>
        <div className='together'>
          <h4>{title}</h4>
          <p className='item-price'>Size: {size}</p>
          <h4 className='item-price'>${price}</h4>
        </div>
        <button className='remove-btn' onClick={() => remove(id)}>
          <svg
            stroke='currentColor'
            fill='currentColor'
            stroke-width='0'
            viewBox='0 0 256 256'
            height='1em'
            width='1em'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M216,50H174V40a22,22,0,0,0-22-22H104A22,22,0,0,0,82,40V50H40a6,6,0,0,0,0,12H50V208a14,14,0,0,0,14,14H192a14,14,0,0,0,14-14V62h10a6,6,0,0,0,0-12ZM94,40a10,10,0,0,1,10-10h48a10,10,0,0,1,10,10V50H94ZM194,208a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V62H194ZM110,104v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Zm48,0v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Z'></path>
          </svg>
        </button>
      </div>
      <div>
        <button className='amount-btn' onClick={() => toggleAmount(id, 'inc')}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
          </svg>
        </button>
        <p className='amount'>{amount}</p>
        <button className='amount-btn' onClick={() => toggleAmount(id, 'dec')}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
          </svg>
        </button>
      </div>
    </article>
  );
};

export default CartItem;
