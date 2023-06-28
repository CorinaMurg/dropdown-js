
const dropdown = document.querySelector('.dropdown')
const activator = dropdown.querySelector('.dropdown-activator')
const itemList = dropdown.querySelector('.dropdown-itemlist')
const firstItem = itemList.querySelector('li a');
  
let activated = false

function setActivated(state) {
  activated = state
  
  itemList.classList.toggle('activated')
  activator.setAttribute('aria-expanded', activated)
  
  if (activated === true) {
    firstItem.focus()
  }
}

activator.addEventListener('click', (event) => {
  setActivated(!activated)
})

dropdown.addEventListener('keydown', (event) => {
  if (event.keyCode === 27 && activated) {
      setActivated(false)
      activator.focus()
  }
})