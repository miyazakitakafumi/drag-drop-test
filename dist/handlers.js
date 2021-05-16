var addEnterClass = function (ev) { return ev.target.classList.add('enter'); };
var removeEnterClass = function (ev) { return ev.target.classList.remove('enter'); };
export var handleDragStart = function (ev) {
    if (!ev.dataTransfer)
        return;
    ev.dataTransfer.setData('text/plain', ev.currentTarget.id);
    ev.dataTransfer.effectAllowed = 'move';
    ev.target.classList.add('dragging');
};
export var handleDragEnd = function (ev) {
    ev.target.classList.remove('dragging');
};
export var handleDragEnter = function (ev) { };
export var handleDragOver = function (ev) {
    ev.preventDefault();
    if (!ev.dataTransfer)
        return;
    ev.dataTransfer.dropEffect = 'move';
    addEnterClass(ev);
};
export var handleDragLeave = function (ev) {
    removeEnterClass(ev);
};
export var handleDrop = function (ev) {
    ev.preventDefault();
    if (!ev.dataTransfer)
        return;
    var draggedId = ev.dataTransfer.getData('text/plain');
    var draggedElm = document.getElementById(draggedId);
    if (!draggedElm)
        return;
    ev.target.append(draggedElm);
    ev.dataTransfer.clearData();
    removeEnterClass(ev);
};
