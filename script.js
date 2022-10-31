const form = document.getElementById("form")
const imageInput = document.querySelector("form img")
const textInput = document.querySelector("form small")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const lastname = form["lastname"].value
  const email = form["email"].value
  const password = form["password"].value
  const firstname = form["Firstname"].value

  if (firstname === "") {
    addErrorTo("Firstname")
  } else {
    removeError("Firstname")
  }
  if (lastname === "") {
    addErrorTo("lastname")
  } else {
    removeError("lastname")
  }
  if (email === "") {
    addErrorTo("email")
  } else if (!validateEmail(email)) {
    replacetext("email")
  } else {
    removeError("email")
  }

  if (password === "") {
    addErrorTo("password")
  } else {
    removeError("password")
  }
})
function addErrorTo(field) {
  const img = form[field].parentNode.querySelector("img")
  img.classList.remove("hideError")
  const text = form[field].parentNode.querySelector("small")
  text.classList.remove("hideError")
  const border = form[field].parentNode.querySelector("input")
  border.classList.add("redborder")
}
function replacetext(field) {
  const img = form[field].parentNode.querySelector("img")
  img.classList.remove("hideError")
  const text = form[field].parentNode.querySelector("small")
  text.classList.remove("hideError")
  text.textContent = "Invalid Email"
}
function removeError(field) {
  const img = form[field].parentNode.querySelector("img")
  img.classList.add("hideError")
  const text = form[field].parentNode.querySelector("small")
  text.classList.add("hideError")
  const border = form[field].parentNode.querySelector("input")
  border.classList.remove("redborder")
}
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}
