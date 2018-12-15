import { Record, Map } from 'immutable';

// fs
import GetWindowSize from '../../../../../asset/fn/GetWindowSize';
import GetWindowSizeDevice from '../../../../../asset/fn/GetWindowSizeDevice';

// 初回windowサイズ取得
const size = GetWindowSize();

export interface IWindow {
  windowSize: Map<string, number>;
  screenType: string;
  test: string;
}

const initialState: Record.Factory<IWindow> = Record({
  windowSize: Map(size),
  screenType: GetWindowSizeDevice(size.w),
  test: 'hoge'
});

class WindowModel extends initialState implements IWindow {
  // ウィンドウサイズとスクリーンタイプを登録
  public setSiteState(payload: { w: number; h: number; type?: string }) {
    const { w, h } = payload;
    const type = payload.type;
    if (!!type) {
      return this.withMutations(self => {
        return self.set('windowSize', Map({ w, h })).set('screenType', type);
      });
    }
    return this.set('windowSize', Map({ w, h }));
  }
  public testAction(payload: string) {
    return this.set('test', payload);
  }
}

export default WindowModel;
