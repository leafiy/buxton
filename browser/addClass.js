 import toArray from '../array/toArray.js'
 import getClass from './getClass.js'
 import setClass from './setClass.js'
 const addClass = (el, classes) => {
     const newClasses = toArray(classes)
     let classList = toArray(getClass(el))
     newClasses.forEach((newClass) => {
         if (!classList.includes(newClass)) {
             classList.push(newClass)
         }
     })
     setClass(el, classList)
 }

 export default addClass