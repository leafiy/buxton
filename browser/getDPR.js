const getDPR = (scale = 1) => window ? (window.devicePixelRatio || scale) : scale


export default getDPR