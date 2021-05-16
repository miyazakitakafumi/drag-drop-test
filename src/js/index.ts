import {addDraggableHandler, addDroppableHandler} from './registHandler.js'

addDraggableHandler(document.querySelectorAll<HTMLElement>('.draggable'))
addDroppableHandler(document.querySelectorAll<HTMLElement>('.droppable'))
