const h1 = document.getElementsByTagName("h1")[0];

const params = new URLSearchParams(window.location.search);
const name = params.get("name");

h1.innerHTML = name;

