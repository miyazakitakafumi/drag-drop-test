export const handleDragStart = ev => {
  ev.dataTransfer.setData('text/plain', ev.target.id)
  ev.dataTransfer.effectAllowed = 'move'
  ev.target.classList.add('dragging')
}
export const handleDragEnd = ev => {
  ev.target.classList.remove('dragging')
}

export const handleDragEnter = ev => {
  ev.target.classList.add('enter')
}
export const handleDragLeave = ev => {
  ev.target.classList.remove('enter')
}
export const handleDragOver = ev => {
  ev.preventDefault()
  ev.dataTransfer.dropEffect = 'move'
}
export const handleDrop = ev => {
  ev.preventDefault()
  const draggedId = ev.dataTransfer.getData('text/plain')
  const draggedElm = document.getElementById(draggedId)
  ev.dataTransfer.clearData()
  ev.target.append(draggedElm)
}
