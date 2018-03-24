const stuId = document.querySelector('#stuId');
const sBtn = document.querySelector('#sBtn');
const sInput = document.querySelector('#sInput');
const stuFilterd = document.querySelector('.stuFilterd');
let bodyID = "";

if(sInput){
	sBtn.addEventListener('click', (e)=>{
		e.preventDefault();
		if(models.person.idCardNo == sInput.value){
			bodyID = "";
			bodyID += `<img data-bind="person.image" src="${models.person.image}" style="text-align: center; width:200px; height:200px; border-radius:200px;> ${models.person.image} </h3>`; 
			bodyID += `<h1 data-bind="person.name"> Name:  ${models.person.name} </h1>`; 
			bodyID += `<h3 data-bind="person.idCardNo"> idCardNo:   ${models.person.idCardNo} </h3>`; 
			bodyID += `<h3 data-bind="person.age"> Age: ${models.person.age} </h3>`; 
			bodyID += `<h3 data-bind="person.country"> country: ${models.person.country} </h3>`; 
			bodyID += `<input data-bind="person.id">`
			stuFilterd.innerHTML=bodyID;

			main();
		}
	})

}

let finput = document.querySelector('input[type=file]')

finput.addEventListener('change', () => {
	alert("jhfgkj")
})