## Array utils

### chunk

`chunk([1,2,3,4,5],2)` => `[[1,2],[3,4],[5]]`

### pluck

`pluck([{name:"a"},{name:"b"}],"name")` => `["a", "b"]`

### range

`Array.range(5) --> [0,1,2,3,4]`

### uniqueArray

`uniqueArray([{name:"a"},{name:"b",age:'23'},{name:'a'}],'name')`=>`[{name: "a"}, {name: "b", age: "23"}]`

### flatten

`[1,[123,1,[123]],3]`=>`[1,123,1,123,3]`