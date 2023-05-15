import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';
import swiatekImage from '../../images/Swiatek.webp';

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
  return (
    <section>
        <p>{count}</p>
        <div>
            <button onClick={() => dispatch(increment())} >+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
        <img src={swiatekImage} alt="Iga Swiatek" />
    </section>
  )
}

export default Counter