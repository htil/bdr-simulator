window.onload = () => {
	let fb = firebase.firestore();
	let container = document.getElementById("high-scores");
	let avg_container = document.getElementById("qualifiers-avgs");

	let coll = fb.collection("participants").orderBy("high_score").limit(5);
	let coll_avg = fb.collection("participants").orderBy("round_average", "asc").limit(5);

	coll.onSnapshot((querySnapshot) => {
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
			mark.innerHTML = `${doc.data().name} ${doc.data().lastname}`;
			small.innerHTML = `${doc.data().high_score}`;
			board_player_template.append(mark);
			board_player_template.append(small);
			container.appendChild(board_player_template);
		});
	});

	coll_avg.onSnapshot((querySnapshot) => {
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
			mark_avg.innerHTML = `${doc.data().name} ${doc.data().lastname}`;
			small_avg.innerHTML = `${doc.data().round_average}`;
			avg_player.append(mark_avg);
			avg_player.append(small_avg);
			avg_container.appendChild(avg_player);
		});
	});
};