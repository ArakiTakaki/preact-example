import { h, render } from 'preact';
import CountStore from './store/count_store';
import { Provider } from 'mobx-preact';
import MovieStore from './store/movie_store';
import Root from './container/template/root'
import Opti from './image/opti.svg'


//この中にstoreを増やしていく。
const stores = {
  count: new CountStore(),
  movie: new MovieStore(),
};

render(
  <Provider {...stores}>
    <Opti/>
    <Root/>
  </Provider>
, document.getElementById('mount'));