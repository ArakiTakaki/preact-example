import { observable, action, runInAction, flow } from 'mobx';

export default class MovieStore {
  @observable items = [];

  async awaitFetch(){
    try{
      const res = await fetch('http://localhost:3001/movies');
      this.items = await res.json();
    }catch(e){
      console.error("movie_store awaitFetch");
    }
  }

}