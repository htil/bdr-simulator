
class RaceDataManager {
	constructor(time = 1, rounds = {}, roundNumber = 1, running = false) {
		this.time = time;
		this.timer = null;
		this.rounds = rounds;
		this.roundNumber = roundNumber;
		this.roundAverage = 0;
		this.highest = 0;
		this.running = running;
	}

	init = () => {

	}

	/**
	 * Starts a timer in JavaScript.
	 */
	startTimer = (interval) => {
		this.timer = setInterval(() => {
			if (window.ended) {
				this.newRound();
				this.stopTimer();
			} else if (window.started) {
				this.time++;
			}
		}, interval || 1000);
	}

	/**
	 * 
	 */
	stopTimer = () => {
		clearInterval(this.timer);
	}

	/**
	 * 
	 */
	writeUserData = (fb, name, lastname, email) => {
		let roundNum = 0;
		Object.values(this.rounds).map((o, i) => {
			if (i == 0) this.highest = o;
			if (o < this.highest) this.highest = o;
			return roundNum += Number(o);
		});
		this.roundAverage = roundNum / (this.roundNumber - 1);
		fb.collection("participants").add({
			name: name,
			lastname: lastname,
			email : email,
			rounds: this.rounds,
			round_average: this.roundAverage.toFixed(2),
			high_score: this.highest
		}).then(() => {
			this.reset();
		});
	}

	/**
	 * 
	 */
	newRound = () => {
		console.log("new round?")
		this.rounds[this.roundNumber] = this.time;
		this.time = 1;
		this.roundNumber++;
		this.running = false;
	}

	/**
	 * 
	 */
	reset() {
		this.time = 1;
		this.timer = null;
		this.rounds = {};
		this.roundNumber = 1;
		this.running = false;
	}
}

window.onload = () => {
	var fb = firebase.firestore();
	const SECONDS = 0.25;
	const BUFFER_SIZE = SECONDS * 256;
	const WEIGHT = 0.95;

	let dataManager = new RaceDataManager();

	let buffer = new Array();
	let weighted = {
		alpha: -1,
		beta: -1,
		theta: -1,
		engagement: -1
	};

	window.Device = new Bluetooth.BCIDevice((sample) => {
		if (Bluetooth.BCIDevice.electrodeIndex("AF7") !== sample.electrode) return;

		sample.data.forEach(el => {
			if (buffer.length > BUFFER_SIZE) buffer.shift();
			buffer.push(el);
		});

		if (buffer.length < BUFFER_SIZE) return;

		let psd = window.bci.signal.getPSD(BUFFER_SIZE, buffer);

		let alpha = window.bci.signal.getBandPower(BUFFER_SIZE, psd, 256, "alpha");
		let beta = window.bci.signal.getBandPower(BUFFER_SIZE, psd, 256, "beta");
		let theta = window.bci.signal.getBandPower(BUFFER_SIZE, psd, 256, "theta");
		let engagement = beta / (alpha + theta);
		let sum = alpha + beta + theta;

		let w_alpha = alpha / sum;
		let w_beta = beta / sum;
		let w_theta = theta / sum;

		if (weighted.alpha < 0) {
			weighted.alpha = w_alpha || 0;
			weighted.beta = w_beta || 0;
			weighted.theta = w_theta || 0;
			weighted.engagement = engagement || 0;
		} else {
			weighted.alpha = weighted.alpha * WEIGHT + (w_alpha || 0) * (1 - WEIGHT);
			weighted.beta = weighted.beta * WEIGHT + (w_beta || 0) * (1 - WEIGHT);
			weighted.theta = weighted.theta * WEIGHT + (w_theta || 0) * (1 - WEIGHT);
			weighted.engagement = weighted.engagement * WEIGHT + (engagement || 0) * (1 - WEIGHT);
		}

		if (window.gameInstance.__ready == true) {
			window.gameInstance.SendMessage("Drone", "SetSpeed", weighted.engagement);
		}
	});

	let connect = async() => {
		try {
			// await window.Device.connect();
			window.gameInstance = UnityLoader.instantiate("gameContainer", "Build/bdr-simulator.json", {onProgress: UnityProgress, Module: {
				onRuntimeInitialized: function () {
					UnityProgress(gameInstance, "complete");
					window.gameInstance.__ready = true;
				},
			}});
		} catch (e) {
			console.log("connect/load error. retrying...");
			connect();
		}
	}

	window.addEventListener("keydown", (e) => {
		console.log("Clicked");
		setTimeout(() => {
			if (window.started && !dataManager.running) {
				console.log("yes, inside.")
				dataManager.running = true;
				dataManager.startTimer();
			}
		}, 1000);
	});

	$("#connect").on("click", () => {
		connect();
	});

	$("#submit").on("click", () => {
		console.log(dataManager.rounds);
		dataManager.writeUserData(fb, localStorage.getItem("name"), localStorage.getItem("lastname"), localStorage.getItem("email"));
	});
}