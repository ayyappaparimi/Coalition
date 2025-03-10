function updateChart(bpHistory) {
    const ctx = document.getElementById("bp-chart").getContext("2d");
    new Chart(ctx, {
        type: "line",
        data: {
            labels: bpHistory.map(entry => entry.year),
            datasets: [{
                label: "Systolic Pressure",
                data: bpHistory.map(entry => entry.systolic),
                borderColor: "red",
                fill: false
            }, {
                label: "Diastolic Pressure",
                data: bpHistory.map(entry => entry.diastolic),
                borderColor: "blue",
                fill: false
            }]
        },
        options: {
            responsive: true
        }
    });
}