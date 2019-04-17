const isIOS = () => navigator.platform.match(/(iPhone|iPod|iPad)/i) ? true : false

export default isIOS