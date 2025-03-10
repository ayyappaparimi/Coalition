document.addEventListener("DOMContentLoaded", () => {
    fetch("https://fedskillstest.coalitiontechnologies.workers.dev")
    .then(response => response.json())
    .then(data => {
        document.getElementById("age").textContent = data.age;
        document.getElementById("blood-pressure").textContent = `${data.bp.systolic}/${data.bp.diastolic}`;
        updateChart(data.bp.history);
    })
    .catch(error => console.error("Error fetching patient data:", error));
});