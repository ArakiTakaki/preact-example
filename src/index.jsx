import { h, render, Component } from 'preact';
import { observer } from 'mobx-preact';
import store from './store/state';
import * as Actions from './store/action';

@observer
class App extends Component {
  render() {
    return (
      <div>
        <p>
          {this.props.store.number}
        </p>
        <button onClick={Actions.increment}>+</button>
        <button onClick={Actions.decrement}>-</button>
      </div>
    )
  }
}

render(<App store={store} />, document.getElementById('mount'));
store.name = "Mike" // will cause the Observer region to re-render