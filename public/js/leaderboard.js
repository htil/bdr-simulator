import { collection, getDocs, query, orderBy, limit, onSnapshot } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js";

window.onload = async () => {
	let fb = document.firestore;
	let db = "bdr-simulator";
	let container = document.getElementById("high-scores");
	let avg_container = document.getElementById("qualifiers-avgs");

	let q = query(collection(fb, "simulator-players"), orderBy("high_score", "desc"), limit(12));
	let q_avg = query(collection(fb, "simulator-players"), orderBy("round_average", "asc"), limit(12));
	// let coll = await getDocs(q);
	// let coll_avg = fb.collection("simulator-players").orderBy("round_average", "asc").limit(12);

	onSnapshot(q, (querySnapshot) => {
		if (container.children.length != 0) {
			document.getElementById("leaderboard").children[1].remove();
			container = document.createElement("ol");
			container.id ="high-scores";
			document.getElementById("leaderboard").append(container);
		}
		querySnapshot.forEach((doc) => {
			let board_player_template = document.createElement("li");
			let mark = document.createElement("mark");
			let small = document.createElement("small");
			mark.innerHTML = `${doc.data().name}`;
			small.innerHTML = `${doc.data().high_score.toFixed(2)} s`;
			board_player_template.append(mark);
			board_player_template.append(small);
			container.appendChild(board_player_template);
		});
	});

	onSnapshot(q_avg, (querySnapshot) => {
		if (avg_container.children.length != 0) {
			document.getElementById("qualifiers").children[1].remove();
			avg_container = document.createElement("ol");
			avg_container.id ="qualifiers-avgs";
			document.getElementById("qualifiers").append(avg_container);
		}
		querySnapshot.forEach((doc) => {
			let avg_player = document.createElement("li");
			let mark_avg = document.createElement("mark");
			let small_avg = document.createElement("small");
			mark_avg.innerHTML = `${doc.data().name}`;
			small_avg.innerHTML = `${doc.data().round_average.toFixed(2)} s`;
			avg_player.append(mark_avg);
			avg_player.append(small_avg);
			avg_container.appendChild(avg_player);
		});
	});
};