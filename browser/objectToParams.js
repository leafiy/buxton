const objectToParams = function(params = {}, encode = true) {
  if (encode) {
    return Object.keys(params).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
    }).join('&');

  } else {
    return Object.keys(params).map(key => key + '=' + params[key]).join('&');
  }
}

export default objectToParams
