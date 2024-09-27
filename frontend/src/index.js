async function getCombination(element1, element2) {
	const formData = new FormData();
	formData.append("element1", element1);
	formData.append("element2", element2);

	const result = await fetch("./backend/src/combination.php", {
		method: "POST",
		body: formData,
	}).then((res) => res.text());

	return result;
}

console.log(await getCombination(1, 2));
