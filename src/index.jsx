import { h, render, Component } from 'preact';
import { observer } from 'mobx-preact';
import { observable } from 'mobx';


@observer
class App extends Component {
  render() {
    console.log(this.props.person)
    console.log(this.props.person.name)
    return (
      <div>
        <div>{this.props.person.name}</div>
      </div>
    )
  }
}

const person = observable({ name: "John" });
render(<App person={person} />, document.getElementById('mount'));
person.name = "Mike" // will cause the Observer region to re-render