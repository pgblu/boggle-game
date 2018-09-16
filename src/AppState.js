// @flow

import {observable, action, computed} from 'mobx';

class AppState {
  @observable found_words: Array<string> = [];
  @observable grid_width: number = 6;

  @computed
  get score(): number {
    if (this.found_words.length === 0) {
      return 0;
    }
    let result = this.found_words.map(word => word.length ** 2).reduce((acc, curr) => {
      return acc + curr;
    });
    return result;
  }
}

const singleton = new AppState();
export default singleton;