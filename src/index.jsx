import { h, render, Component } from 'preact';
import { observer,Provider,inject } from 'mobx-preact';
import store from './store/state';
import CountStore from './store/CountStore';

//この中にstoreを増やしていく。
const stores = {
  count: new CountStore(),
};

//storesから使用するstoreを選択する
@inject('count')
@observer
class App extends Component {
  render() {
    const { count } = this.props;
    return (
      <div>
        Count: {count.num} <br />
        Double count: {count.getDoubleCount} <br />
        <button onClick={count.onIncrement}>+1</button>
        <button onClick={count.onDecrement}>-1</button>
        <button onClick={count.onAsyncIecrement}>After 1000ms +1</button>
      </div>
    )
  }
}

render(
  <Provider {...stores}>
    <App/>
  </Provider>
, document.getElementById('mount'));
store.name = "Mike" // will cause the Observer region to re-render