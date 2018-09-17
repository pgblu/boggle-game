// @flow

import {observable, action, computed} from 'mobx';

class AppState {
  @observable foundWords: Array<string> = [];
  @observable gridWidth: number = 6;

  @action setGridWidth(value) {
    this.gridWidth = value;
  };

  @computed
  get score(): number {
    if (this.foundWords.length === 0) {
      return 0;
    }
    let result = this.foundWords.map(word => word.length ** 2).reduce((acc, curr) => {
      return acc + curr;
    });
    return result;
  }
}

const singleton = new AppState();
export default singleton;