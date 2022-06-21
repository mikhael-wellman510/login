'use strict';

module.exports.render = function(result) {
  if(result.error){
    return {
      'status'       : 'error',
      'error_message': result.error,
      'message'      : null,
      'data'         : null,
    }
  } else {
    return {
      'status'       : 'success',
      'error_message': null,
      'message'      : !result.message ? null : result.message,
      'data'         : !result.data ? null : result.data,
    }
  }
}