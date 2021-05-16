export const handleDragStart = ev => {
  console.log('@@drag start@@@')
  ev.dataTransfer.setData('text/plain', ev.target.id)
  ev.dataTransfer.effectAllowed = 'move'
  ev.target.classList.add('dragging')
}
export const handleDragEnd = ev => {
  console.log('@@drag end@@@')
  ev.target.classList.remove('dragging')
}

export const handleDragEnter = ev => {
  console.log('@@drag enter@@@')
  ev.target.classList.add('enter')
}
export const handleDragLeave = ev => {
  console.log('@@drag leave@@@')
  ev.target.classList.remove('enter')
}
export const handleDragOver = ev => {
  ev.preventDefault()
  console.log('@@drag over@@@')
  ev.dataTransfer.dropEffect = 'move'
}
export const handleDrop = ev => {
  ev.preventDefault()
  console.log('@@drop@@@')
  const draggedId = ev.dataTransfer.getData('text/plain')
  const draggedElm = document.getElementById(draggedId)
  ev.dataTransfer.clearData()
  ev.target.append(draggedElm)
}
