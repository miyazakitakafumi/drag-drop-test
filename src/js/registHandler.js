import {handleDragEnd, handleDragEnter, handleDragLeave, handleDragOver, handleDragStart, handleDrop} from "./handlers.js"


export const addDraggableHandler = elms => {
  elms.forEach(elm => {
    elm.addEventListener('dragstart', handleDragStart)
    elm.addEventListener('dragend', handleDragEnd)
  })
}
export const addDroppableHandler = elms => {
  elms.forEach(elm => {
    elm.addEventListener('dragenter', handleDragEnter)
    elm.addEventListener('dragleave', handleDragLeave)
    elm.addEventListener('dragover', handleDragOver)
    elm.addEventListener('drop', handleDrop)
  })
}