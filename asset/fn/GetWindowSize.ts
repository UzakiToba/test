// 表示可能領域サイズ
export default (): { w: number; h: number } => {
  const tmpSize = { w: 0, h: 0 };
  if (window.innerWidth !== undefined) {
    // IE9以上
    tmpSize.w = window.innerWidth;
    tmpSize.h = window.innerHeight;
  }
  if (
    !!document.documentElement &&
    document.documentElement.offsetWidth !== undefined
  ) {
    // IE8以下（スクロールバーは含まない）
    tmpSize.w = document.documentElement.offsetWidth;
    tmpSize.h = document.documentElement.offsetHeight;
  }
  return tmpSize;
};
