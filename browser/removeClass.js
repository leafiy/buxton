import toArray from '../array/toArray.js'
import getClass from './getClass.js'
import setClass from './setClass.js'
const removeClass = (el, classes) => {
    const newClasses = toArray(classes)
    let classList = toArray(getClass(el))
    newClasses.forEach((newClass) => {
        const index = classList.includes(newClass)
        if (index !== -1) {
            classList.splice(index, 1)
        }
    })
    setClass(el, classList)
}

export default removeClass