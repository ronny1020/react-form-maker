export const getReactFormData = (formItems) => {
  const data = {}
  formItems.forEach((item) => {
    switch (item.type) {
      case ('button', 'submit', 'div'):
        break

      case 'radio':
        data[item.name] = document.querySelector(
          `input[name="${item.name}"]:checked`
        ).value
        break

      case 'checkbox':
        if (item.name) {
          data[item.name] = document.getElementsByName(item.name).checked
        } else if (item.id) {
          data[item.id] = document.getElementById(item.id).checked
        }
        break

      default:
        if (item.name) {
          data[item.name] = document.getElementsByName(item.name).value
        } else if (item.id) {
          data[item.id] = document.getElementById(item.id).value
        }
    }
  })
  return data
}
