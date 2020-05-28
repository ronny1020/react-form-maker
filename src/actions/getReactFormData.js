export const getReactFormData = (formItems) => {
  const data = {}
  formItems.forEach((item) => {
    switch (item.type) {
      case 'radio':
        data[item.name] = document.querySelector(
          `input[name="${item.name}"]:checked`
        ).value
        break

      case ('button', 'submit'):
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
