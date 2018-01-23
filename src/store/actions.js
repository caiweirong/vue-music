// 多次去改变mutations，就会使用actions
import * as types from './mutation-types.js';
import {playMode} from 'common/js/config';
import {shuffle} from 'common/js/util';

// 顺序列表歌曲的id需要对应到随机列表歌曲的id
function findIndex(list, song) {
  // list.findIndex es6语法
  return list.findIndex((item) => {
    return item.id === song.id;
  });
}

// 选择播放
export const selectPlay = function({commit, state}, {list, index}) {
  commit(types.SET_SEQUENCE_LIST, list);
  if (state.mode === playMode.random) {
    let randomlist = shuffle(list);
    commit(types.SET_PLAYLIST, randomlist);
    index = findIndex(randomlist, list[index]);
  } else {
    commit(types.SET_PLAYLIST, list);
  }
  commit(types.SET_CURRENT_INDEX, index);
  commit(types.SET_FULL_SCREEN, true);
  commit(types.SET_PLAYING_STATE, true);
};

// 随机播放
export const randomPlay = function({commit}, {list}) {
  commit(types.SET_PLAY_MODE, playMode.random);
  commit(types.SET_SEQUENCE_LIST, list);
  let randomlist = shuffle(list);
  commit(types.SET_PLAYLIST, randomlist);
  commit(types.SET_CURRENT_INDEX, 0);
  commit(types.SET_FULL_SCREEN, true);
  commit(types.SET_PLAYING_STATE, true);
};
