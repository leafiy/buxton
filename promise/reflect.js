// continuous handle promise chain even rejected

const reflect = p =>
    p.then(
        v => ({ v, status: "fulfilled" }),
        e => ({ e, status: "rejected" })
    );
Promise.all(promises.map(reflect)).then(v => {
    let results = [];
    if (results.length) {
        reject(results);
    } else {
        resolve();
    }
});