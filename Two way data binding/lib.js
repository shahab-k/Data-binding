
const binding = () => {
	const bindings = document.querySelectorAll('[data-bind]');

	bindings.forEach(item => {
		const [model, attr, input] = item.dataset.bind.split('.');
		// alert(item);
		const value = models[model][attr];

		if(input !== undefined) {
			item.value = value;
			return;
		}
		item.innerHTML = value;
	});

	const json = document.querySelector('.json');
	json.innerHTML = JSON.stringify(models, null, 2);
}

const main = () => {
	const modelsWrapper = document.querySelectorAll('[data-key]');
	modelsWrapper.forEach(model => {

		const keys = model.dataset.key;
		const [objName, key] = model.dataset.key.split('.');
		const objModel = models[objName];
		
		const modelName = models[model.dataset.model];
		
		const handler = (e) => {
			e.preventDefault();
			objModel[key] = e.target.value; 
			binding();
		};

		const input = document.querySelectorAll(`[data-key="${keys}"]`)[0];
		input.value  = objModel[key];
		input.addEventListener('keyup', handler);
		input.addEventListener('change', handler);
		
	})
	binding();	
}	

// main();