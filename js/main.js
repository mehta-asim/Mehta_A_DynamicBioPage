(() =>{

		console.log("fired");

		let bio1 = document.querySelector('.asimMehta'),
			bio2 = document.querySelector('.darianHill'),
			theImg = document.querySelector("img"),
			name = document.querySelector('.bioName'),
			city = document.querySelector('.bioCity'),
			age = document.querySelector('.bioAge'),
			hobbies = document.querySelector('.hobbies'),
			div = document.querySelector('#container');

		const bio1Info = ['asim','Asim Mehta','Mumbai','24','play games, edit videos, watch movies-tv shows-anime'],
			  bio2Info = ['darian','Darian Hill','Albuquerque','23','music lover, organizer, cards, writing'];
			  
		function loadBio(event){
			if (event.target.className.includes('asimMehta')){
				div.classList.remove('dcontainer');
				theImg.src = `images/${bio1Info[0]}.jpg`;
				theImg.style.display = `block`;
				name.textContent = `Name: ${bio1Info[1]}`;
				city.textContent = `City: ${bio1Info[2]}`;
				age.textContent = `Age: ${bio1Info[3]}`;
				hobbies.textContent = `Hobbies: ${bio1Info[4]}`;

				name.classList.add('asim');

				city.classList.add('asim');

				age.classList.add('asim');

				hobbies.classList.add('asim');

				div.classList.add('acontainer');

			}

			else if (event.target.className.includes('darianHill')){
				div.classList.remove('acontainer');
				theImg.src = `images/${bio2Info[0]}.jpg`;
				theImg.style.display = `block`;
				name.textContent = `Name: ${bio2Info[1]}`;
				city.textContent = `City: ${bio2Info[2]}`;
				age.textContent = `Age: ${bio2Info[3]}`;
				hobbies.textContent = `Hobbies: ${bio2Info[4]}`;

				name.classList.add('darian');
				city.classList.add('darian');

				age.classList.add('darian');

				hobbies.classList.add('darian');
				
				div.classList.add('dcontainer');

			}
		}


		bio1.addEventListener('click', loadBio);
		bio2.addEventListener('click', loadBio);
})();