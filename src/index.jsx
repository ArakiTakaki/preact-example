import { h, render,Component } from 'preact';
import {Observer} from 'mobx-preact';
import {observable} from 'mobx';

class App extends Component {
  render() {
     return (
         <div>
            {this.props.person.name}
            <Observer>
                {() => <div>{this.props.person.name}</div>}
            </Observer>
        </div>
     )
  }
}

const person = observable({ name: "John" })

render(<App person={person} />, document.body)
person.name = "Mike" // will cause the Observer region to re-render