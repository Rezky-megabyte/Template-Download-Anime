if (localStorage.getItem("theme") == "dark") {
    setDarkmode(true)
}

function setDarkmode(isDark){
  let Contain = document.getElementById("contain-dark")
    if (isDark) {
      localStorage.setItem("theme", "dark")
      document.body.setAttribute("id", "DarkMode")
      Contain.className = "container bg-dark"
    }else{
      localStorage.removeItem("theme")
      document.body.setAttribute("id", "")
      Contain.className = "container"
    }
}