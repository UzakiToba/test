import actionCreatorFactory from 'typescript-fsa';
const actionCreator = actionCreatorFactory();

export const catchToken = actionCreator<boolean>('CATCH_TOKEN');
