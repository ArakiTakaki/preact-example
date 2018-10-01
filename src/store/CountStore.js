import { observable, computed, action } from 'mobx';

//非同期用のmock
const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));

export default class CountStore {
  //fieldがパラメータとなる。
  @observable num = 0;

  //アクション
  @action.bound onIncrement() {
    this.num = this.num + 1;
  }

  //アクション
  @action.bound onDecrement() {
    this.num = this.num - 1;
  }

  //非同期処理もasyncを追記するだけで利用できる
  @action.bound async onAsyncIecrement() {
    await sleep(1000);
    this.onIncrement();
  }

  //アクションが発行された後に実行される
  @computed get getDoubleCount() {
    return this.num * 2;
  }
}