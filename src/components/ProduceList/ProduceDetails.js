import { addToCart } from '../../store/cart';
import { useDispatch } from 'react-redux';
import { like } from '../../store/produce';

function ProduceDetails({ produce }) {
  const cartItem = {};

  const dispatch = useDispatch();

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
          onClick={(e) => dispatch(like(produce.id))}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={() => dispatch(addToCart(produce.id))}
        >
        <i className="fas fa-plus" />
      </button>
    </span>
    </li >
  );
}

export default ProduceDetails;
