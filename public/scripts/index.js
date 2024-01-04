const header = document.getElementsByTagName("header")[0];
const nav = document.getElementsByTagName("nav")[0];
// const cardsBox = document.getElementById("cards-box");

var x = window.matchMedia("(max-width: 500px)");

createCards();

if(x.matches === true) {
	addHamburguerOption();
	addUserProfile();
} else {
	addNavOptions();
	addUserProfile();
}

x.addEventListener("change", function() {       
	console.log(x.matches);
	if(x.matches == false) {
		let menuBar = document.getElementById("menu-bar");
		console.log(menuBar);
		if(menuBar) removeElement(menuBar);
		
		addNavOptions();
		return addUserProfile();
	} 
	addHamburguerOption();
	addUserProfile();
});

export function addNavOptions() {
	let hamburguer = document.getElementById("hamburguer-icon");
	if(hamburguer) hamburguer.remove();      
	nav.innerHTML += `
        <ul id="nav-itens">
            <li class="nav-item">home</li>
            <li class="nav-item">options</li>
            <li class="nav-item">chat</li>
        </ul>
    `;
}

export function addHamburguerOption() {
	let navOptions = document.getElementById("nav-itens");
	if (navOptions) navOptions.remove();

	let hamburguer = document.createElement("img");
	hamburguer.className = "small-icon";
	hamburguer.src = "images/hamburguer.png";
	hamburguer.alt = "hamburguer";
	hamburguer.id = "hamburguer-icon";

	hamburguer.addEventListener("click", () => {
		let menuBar = document.getElementById("menu-bar");
		if(menuBar) {
			menuBar.classList.add("slide-out");
			setTimeout(() => {
				removeElement(menuBar);
			}, 90);
			return;
		}
		createMenuBar();
	});
	nav.appendChild(hamburguer);
}

export function addUserProfile() {
	let userIcon = document.getElementById("user-icon");

	let createUserIcon = document.createElement("img");
	createUserIcon.className = "medium-icon";
	createUserIcon.src = "images/userIcon.png";
	createUserIcon.alt = "userprofile";
	createUserIcon.id = "user-icon";

	createUserIcon.addEventListener("click", () => {
		console.log("user");
	});

	if(userIcon) {
		removeElement(userIcon);
	}
	if (x.matches == false) {
		nav.appendChild(createUserIcon);
		return;
	}
	if(x.matches == true) {
		nav.insertBefore(createUserIcon, nav.firstChild);
	}
}
export function removeElement(el) {
	el.remove();
}

export function createCards() {
	fetch("https://api.thecatapi.com/v1/images/search?limit=5")
		.then(reponse => reponse.json())
		.then(data => {
			console.log(data);
		});
}
export function createMenuBar() {
	let menuBar = document.createElement("ul");
	menuBar.id = "menu-bar";

	for (let i = 0; i < 5; i++){
		let li = document.createElement("li");
		li.textContent = `teste${i}`;
		menuBar.appendChild(li);
	}

	menuBar.classList.add("slide-in");

	header.appendChild(menuBar);
}	