// HOW TO FETCH DATA ACROSS THE WEB
const url = 'https://data.cityofnewyork.us/resource/vfnx-vebw.json?$limit=50000';
// noise data link = https://data.cityofnewyork.us/resource/be8n-q3nj.json?$limit=50000

fetch(url)
  .then(response => response.json())
	// pass the data to the function!
	.then(data => playWithData(data))


// QUERY, MANIPULATE, VISUALIZE THE DATASET
const playWithData = data => {

	console.log(data);
	// how many instances were QUAA-ING?
	const quaas = data.filter(item => item.quaas == true).length;
	const kuks = data.filter(item => item.kuks == true).length;
	const moans = data.filter(item => item.moans == true).length;
	const running = data.filter(item => item.running == true).length;
	const eating = data.filter(item => item.eating == true).length;
	const foraging = data.filter(item => item.foraging == true).length;
	const chasing = data.filter(item => item.chasing == true).length;
	const climbing = data.filter(item => item.climbing == true).length;

	const dataLabels = ['quaas', 'kuks', 'moans', 'running', 'eating', 'foraging', 'chasing', 'climbing'];
	const dataValues = [quaas, kuks, moans, running, eating, foraging, chasing, climbing];


	const ctx = document.getElementById('myChart');

	new Chart(ctx, {
	  type: 'line',
	  data: {
		labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
		datasets: [
			{
				label: '# of Noise Complaints',
				data: [quaas, kuks, moans, running, eating, foraging, chasing, climbing],
				borderColor: '#000000',
				backgroundColor: ['rgb(255, 255, 255)'],
				borderWidth: 3
			}
		]
	  },
	  options: {
		scales: {
		  y: {
			beginAtZero: true
		  }
		}
	  }
	});

}