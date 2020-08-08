// Search for the button

// onclick button => - duplicate the field - clean inputs- show on page

const addFieldBtn = document.querySelector('#add-time')

function cloneFieldHandler() {
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
  const fields = newFieldContainer.querySelectorAll('input')
  const fieldContainer = document.querySelector('#schedule-items')

  fieldContainer.appendChild(newFieldContainer)

  fields.forEach(function (currentField) {
    currentField.value = ""
  })
}
addFieldBtn.addEventListener('click',cloneFieldHandler)