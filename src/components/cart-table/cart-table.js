import React from 'react';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import './cart-table.scss';

const CartTable = ({ cartItems, onDelete }) => {
  if (cartItems.length === 0) {
    return <div className='cart__title'> Ваша корзина пуста :( </div>;
  }
  return (
    <>
      <div className='cart__title'>Ваш заказ:</div>
      <div className='cart__list'>
        {cartItems.map((item) => {
          const { title, price, url, id } = item;
          return (
            <div key={id} className='cart__item'>
              <img src={url} className='cart__item-img' alt={title}></img>
              <div className='cart__item-title'>{title}</div>
              <div className='cart__item-price'>${price}</div>
              <div onClick={() => onDelete(id)} className='cart__close'>
                &times;
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     cartItems: state.cartItems,
//   };
// };

const mapStateToProps = ({ cartItems }) => {
  return {
    cartItems,
  };
};

const mapDispatchToProps = () => {
  return {
    onDelete: (id) => {
      console.log(`delete from cart item # ${id}`);
    },
  };
};

export default WithRestoService()(
  connect(mapStateToProps, mapDispatchToProps)(CartTable)
);
