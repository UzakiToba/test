// 表示可能領域サイズからブレイクポイント基準でのdeviceわけ
const projectCfg = require('../../config/projectCfg');

export default (
  w: number,
  pc: number = projectCfg.breakPoint.pc,
  tab: number = projectCfg.breakPoint.tab
): string => {
  let nowDevice = 'pc';
  if (w >= pc) {
    nowDevice = 'pc';
  } else if (w < pc && w >= tab) {
    nowDevice = 'tab';
  } else {
    nowDevice = 'sp';
  }
  return nowDevice;
};
