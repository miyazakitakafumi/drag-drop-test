import {addDraggableHandler, addDroppableHandler} from './registHandler'

addDraggableHandler(document.querySelectorAll<HTMLElement>('.draggable'))
addDroppableHandler(document.querySelectorAll<HTMLElement>('.droppable'))
