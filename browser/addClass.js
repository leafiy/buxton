 import toArray from '../array/toArray.js'
 const addClass = (el, classes) => {
     const newClasses = toArray(classes)
     let classList = toArray(el.className)
     newClasses.forEach((newClass) => {
         if (classList.indexOf(newClass) === -1) {
             classList.push(newClass)
         }
     })
     if (el instanceof SVGElement) {
         el.setAttribute('class', classList.join(' '))
     } else {
         el.className = classList.join(' ')
     }
 }

 export default addClass