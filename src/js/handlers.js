const addEnterClass = ev => ev.target.classList.add('enter')
const removeEnterClass = ev => ev.target.classList.remove('enter')

export const handleDragStart = ev => {
  ev.dataTransfer.setData('text/plain', ev.target.id)
  ev.dataTransfer.effectAllowed = 'move'
  ev.target.classList.add('dragging')
}
export const handleDragEnd = ev => {
  ev.target.classList.remove('dragging')
}

export const handleDragEnter = ev => {}
export const handleDragOver = ev => {
  ev.preventDefault()
  ev.dataTransfer.dropEffect = 'move'
  addEnterClass(ev)
}
export const handleDragLeave = ev => {
  removeEnterClass(ev)
}
export const handleDrop = ev => {
  ev.preventDefault()
  const draggedId = ev.dataTransfer.getData('text/plain')
  const draggedElm = document.getElementById(draggedId)
  ev.target.append(draggedElm)
  ev.dataTransfer.clearData()
  removeEnterClass(ev)
}
