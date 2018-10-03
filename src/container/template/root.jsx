import { h, Component } from 'preact';
import { observer, inject } from 'mobx-preact';

//storesから使用するstoreを選択する
@inject('movie')
@observer
export default class Root extends Component {

  componentDidMount() {
    this.props.movie.awaitFetch();
  }

  render() {
    const { movie } = this.props;
    let list = [];

    for (let item of movie.items) {
      list.push(
        <div key={item.id}>
          <h1>{item.name}</h1>
          <p>{item.director}</p>
          <p>{item.rating}</p>
        </div>
      )
    }

    return (
      <div>
        {list}
      </div>
    )

  }

}
