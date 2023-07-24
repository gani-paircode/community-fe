export const getLoadingState = () => ({ isFetching: true, errMsg: '', data: null });
export const getErrorState = (errMsg = 'Something went wrong') => ({ isFetching: false, errMsg: errMsg + '', data: null });
export const getSuccessState = (data) => ({ isFetching: false, errMsg: '', data });