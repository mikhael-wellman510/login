'use strict';

module.exports = function(result) {
  if(result.error){
    return {
      'status'     : 'error',
      'message'    : result.error,
      'data'       : null,
    }
  } else {
    return {
      'status'     : 'success',
      'message'    : !result.message ? null : result.message,
      'data'       : !result.data ? null : result.data,
    }
  }
}
