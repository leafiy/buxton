const isIos = () => navigator.platform.match(/(iPhone|iPod|iPad)/i) ? true : false

export default isIos