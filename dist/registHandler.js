import { handleDragEnd, handleDragEnter, handleDragLeave, handleDragOver, handleDragStart, handleDrop } from "./handlers.js";
export var addDraggableHandler = function (elms) {
    elms.forEach(function (elm) {
        elm.addEventListener('dragstart', handleDragStart);
        elm.addEventListener('dragend', handleDragEnd);
    });
};
export var addDroppableHandler = function (elms) {
    elms.forEach(function (elm) {
        elm.addEventListener('dragenter', handleDragEnter);
        elm.addEventListener('dragleave', handleDragLeave);
        elm.addEventListener('dragover', handleDragOver);
        elm.addEventListener('drop', handleDrop);
    });
};
