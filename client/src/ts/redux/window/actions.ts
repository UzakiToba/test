import actionCreatorFactory from 'typescript-fsa';
const actionCreator = actionCreatorFactory();

/* actionCreator()で型指定しながらActionをつくる。 string型のpayload (データ) を伴ってこのActionが発行されるよう定義する。 */
export const testAction = actionCreator<string>('TEST_ACTION');
export const setSiteState = actionCreator<{
  w: number;
  h: number;
  type?: string;
}>('SET_SITE_STATE');
