
		const cbseOption = document.getElementById('cbse');
		const icseOption = document.getElementById('icse');
		const stateOption = document.getElementById('state');
		const basicOption = document.getElementById('basic');
		const jeeOption = document.getElementById('jee');
		const neetOption = document.getElementById('neet');
		const ncretOption = document.getElementById('ncret');

		// Get all the lists
		const cbseList = document.getElementById('cbse-list');
		const icseList = document.getElementById('icse-list');
		const stateList = document.getElementById('state-list');
		const basicList = document.getElementById('basic-list');
		const jeeList = document.getElementById('jee-list');
		const neetList = document.getElementById('neet-list');
		const ncretList = document.getElementById('ncret-list');


		// Hide all the lists by default
		cbseList.classList.remove('show');
		icseList.classList.remove('show');
		stateList.classList.remove('show');
		basicList.classList.remove('show');
		jeeList.classList.remove('show');
		neetList.classList.remove('show');
		ncretList.classList.remove('show');

		// Add click event listeners to the options
		cbseOption.addEventListener('click', () => {
			// Show only the CBSE list
			cbseList.classList.add('show');
			icseList.classList.remove('show');
			stateList.classList.remove('show');
			basicList.classList.remove('show');
			jeeList.classList.remove('show');
			neetList.classList.remove('show');
			ncretList.classList.remove('show');
		});

		icseOption.addEventListener('click', () => {
			// Show only the ICSE list
			cbseList.classList.remove('show');
			icseList.classList.add('show');
			stateList.classList.remove('show');
			basicList.classList.remove('show');
			jeeList.classList.remove('show');
			neetList.classList.remove('show');
			ncretList.classList.remove('show');
		});

		stateOption.addEventListener('click', () => {
			// Show only the State Board list
			cbseList.classList.remove('show');
			icseList.classList.remove('show');
			stateList.classList.add('show');
			basicList.classList.remove('show');
			jeeList.classList.remove('show');
			neetList.classList.remove('show');
			ncretList.classList.remove('show');
		});

		basicOption.addEventListener('click', () => {
			// Show only the Basic Education list
			cbseList.classList.remove('show');
			icseList.classList.remove('show');
			stateList.classList.remove('show');
			basicList.classList.add('show');
			jeeList.classList.remove('show');
			neetList.classList.remove('show');
			ncretList.classList.remove('show');
		});

		jeeOption.addEventListener('click', () => {
			// Show only the JEE list
			cbseList.classList.remove('show');
			icseList.classList.remove('show');
			stateList.classList.remove('show');
			basicList.classList.remove('show');
			jeeList.classList.add('show');
			neetList.classList.remove('show');
			ncretList.classList.remove('show');
		});

		neetOption.addEventListener('click', () => {
			// Show only the NEET list
			cbseList.classList.remove('show');
			icseList.classList.remove('show');
			stateList.classList.remove('show');
			basicList.classList.remove('show');
			jeeList.classList.remove('show');
			neetList.classList.add('show');
			ncretList.classList.remove('show');
		});
		ncretOption.addEventListener('click', () => {
			// Show only the NEET list
			cbseList.classList.remove('show');
			icseList.classList.remove('show');
			stateList.classList.remove('show');
			basicList.classList.remove('show');
			jeeList.classList.remove('show');
			neetList.classList.remove('show');
			ncretList.classList.add('show');
		});