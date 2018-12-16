// コンテンツのサイズ
interface IObj {
  w: number;
  h: number;
}
export default (): IObj => {
  const el_root = document.documentElement;
  const el_body = document.body;
  const size: IObj = { w: 0, h: 0 };
  let getWindow: IObj = { w: 0, h: 0 };
  let getDocument: IObj = { w: 0, h: 0 };
  if (!!el_root) {
    // スクロールバーを除いたブラウザ内の有効表示領域
    getWindow = { w: el_root.clientWidth, h: el_root.clientHeight };
    // スクロール非表示部分を含む長さ
    getDocument = { w: el_root.scrollWidth, h: el_root.scrollHeight };
  }
  size.w = getWindow.w === getDocument.w ? el_body.offsetWidth : getDocument.w;
  size.h = getWindow.h === getDocument.h ? el_body.offsetHeight : getDocument.h;
  return { w: size.w, h: size.h };
};
