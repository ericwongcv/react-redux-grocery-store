import { useState, useEffect } from 'react';
import { removeFromCart, increaseCount, decreaseCount, setCountValue } from '../../store/cart';
import { useDispatch } from 'react-redux';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);

  const dispatch = useDispatch();

  useEffect(() => {
    setCount(item.count);
    if (item.count <= 0) dispatch(removeFromCart(item.id));
  }, [dispatch, item.id, item.count]);

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
          onChange={(e) => dispatch(setCountValue(item.id, e.target.value))}
        />
        <button
          className="cart-item-button"
          onClick={() => dispatch(increaseCount(item.id))}
        >
          +
        </button>
        <button
          className="cart-item-button"
          onClick={() => dispatch(decreaseCount(item.id))}
        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
