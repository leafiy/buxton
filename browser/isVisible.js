const isVisible = el => !!el && !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length)

export default isVisible