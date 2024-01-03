const header = document.getElementsByTagName("header")[0];

var x = window.matchMedia("(max-width: 500px)");

if(x.matches === true) {
	addHamburguerOption();
	addUserProfile();
} else {
	addHeaderOptions();
	addUserProfile();
}

x.addEventListener("change", function() {
	if(x.matches == false) {
		addHeaderOptions();
		return addUserProfile();
	} 
	addHamburguerOption();
	addUserProfile();
});

export function addHeaderOptions() {
	let hamburguer = document.getElementById("hamburguer-icon");
	if(hamburguer) hamburguer.remove();      
	header.innerHTML += `
        <ul id="header-itens">
            <li class="header-item">home</li>
            <li class="header-item">options</li>
            <li class="header-item">chat</li>
        </ul>
    `;
}

export function addHamburguerOption() {
	let headerOptions = document.getElementById("header-itens");
	if (headerOptions) headerOptions.remove();

	let hamburguer = document.createElement("img");
	hamburguer.className = "small-icon";
	hamburguer.src = "images/hamburguer.png";
	hamburguer.alt = "hamburguer";
	hamburguer.id = "hamburguer-icon";

	hamburguer.addEventListener("click", () => {
		console.log("hamburguer");
	});
	header.appendChild(hamburguer);
}

export function addUserProfile() {
	let userIcon = document.getElementById("user-icon");
	let createUserIcon = document.createElement("img");
	createUserIcon.className = "medium-icon";
	createUserIcon.src = "images/userIcon.png";
	createUserIcon.alt = "userprofile";
	createUserIcon.id = "user-icon";

	createUserIcon.addEventListener("click", );

	if(userIcon) {
		removeElement(userIcon);
	}
	if (x.matches == false) {
		header.innerHTML += "<img src=\"images/usericon.png\" alt=\"userprofile\" class=\"medium-icon\" id=\"user-icon\">";
		return;
	}
	if(x.matches == true) {
		header.insertBefore(createUserIcon, header.firstChild);
	}
}
export function removeElement(el) {
	el.remove();
}