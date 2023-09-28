document.addEventListener("DOMContentLoaded", function () {
    // Sample data for the pie chart and bar graph
    const agricultureData = {
        labels: ["Wheat", "Corn", "Rice", "Soybeans", "Other"],
        datasets: [
            {
                label: "Agriculture Usage",
                data: [30, 25, 20, 15, 10],
                backgroundColor: [
                    "#ff5733",
                    "#ffcc33",
                    "#33ff57",
                    "#3377ff",
                    "#ff33f2",
                ],
            },
        ],
    };

    // Create a pie chart
    const pieCtx = document.getElementById("pieChart").getContext("2d");
    new Chart(pieCtx, {
        type: "pie",
        data: agricultureData,
    });

    // Create a bar graph
    const barCtx = document.getElementById("barGraph").getContext("2d");
    new Chart(barCtx, {
        type: "bar",
        data: agricultureData,
    });
});
