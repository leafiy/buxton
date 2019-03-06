const arrayDiff = (...arrays) => {
    return [].concat(...arrays.map((arr, i) => {
        const others = arrays.slice(0);
        others.splice(i, 1);
        const unique = [...new Set([].concat(...others))];
        return arr.filter(x => unique.indexOf(x) === -1);
    }));
}

export default arrayDiff