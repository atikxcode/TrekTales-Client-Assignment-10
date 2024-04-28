
export default function toggleTheme () {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const switchToTheme = currentTheme ===  "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", switchToTheme)
}