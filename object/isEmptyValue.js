export default function(obj) {
  return Object.values(obj).every(x => (x === null || x === ''));
}
