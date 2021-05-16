const addEnterClass = (ev: Event) => (ev.target as Element).classList.add('enter')
const removeEnterClass = (ev: Event) => (ev.target as Element).classList.remove('enter')

export const handleDragStart = (ev: DragEvent) => {
  if(!ev.dataTransfer) return;
  ev.dataTransfer.setData('text/plain', (ev.currentTarget as Element).id);
  ev.dataTransfer.effectAllowed = 'move';
  (ev.target as Element).classList.add('dragging');
}
export const handleDragEnd = (ev: DragEvent) => {
  (ev.target as Element).classList.remove('dragging')
}

export const handleDragEnter = (ev: DragEvent) => {}
export const handleDragOver = (ev: DragEvent) => {
  ev.preventDefault()
  if(!ev.dataTransfer) return;
  ev.dataTransfer.dropEffect = 'move';
  addEnterClass(ev)
}
export const handleDragLeave = (ev: DragEvent) => {
  removeEnterClass(ev)
}
export const handleDrop = (ev: DragEvent) => {
  ev.preventDefault();
  if(!ev.dataTransfer) return;
  const draggedId = ev.dataTransfer.getData('text/plain');
  const draggedElm = document.getElementById(draggedId);
  if(!draggedElm)return
  (ev.target as Element).append(draggedElm);
  ev.dataTransfer.clearData();
  removeEnterClass(ev);
}
