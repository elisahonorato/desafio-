let labels0 = ["Horas", "Animo", "Rendimiento", "Clima", "Deporte", "Sueño"];

let labels1 = ["10/04", "12/04", "16/04", "21/04", "26/04", "28/04", "06/05", "10/05", "14/05", "20/05", "24/05", "28/05", "04/06", "10/06", "19/06", "23/06"];
let labels2 = ["10/04 imput", "10/04 output", "12/04 imput", "12/04 output", "16/04 imput", "16/04 output", "21/04 imput", "21/04 output", "26/04 imput", "26/04 output", "28/04 imput", "28/04 output", "06/05 imput", "06/05 output", "10/05 imput", "10/05 output", "14/05 imput", "14/05 output", "20/05 imput", "20/05 output", "24/05 imput", "24/05 output", "28/05 imput", "28/05 output", "04/06 imput", "04/06 output", "10/06 imput", "10/06 output", "19/06 imput", "19/06 output", "23/06 imput", "23/06 output"];

let horas1 = [10, 2, 10, 4, 4, 10, 6, 8, 5, 10, 4, 10, 3, 10, 4, 1];
let horas2 = [10, 10, 6, 6, 2, 2, 5, 10, 2, 2, 10, 10, 6, 6, 2, 2, 5, 10, 2, 2, 2, 2, 10, 10, 6, 6, 2, 2, 5, 10, 2, 2];

let animos1 = [2, 6, 3, 2, 8, 1, 2, 6, 7, 6, 6, 2, 6, 3, 5, 9];
let animos2 = [8, 4, 7, 2, 5, 0, 10, 4, 7, 9, 8, 4, 7, 2, 5, 0, 10, 4, 7, 9, 7, 9, 8, 4, 7, 2, 5, 0, 10, 4, 7, 9];

let rendimientos1 = [2, 4, 1, 3, 9, 6, 10, 1, 5, 9, 9, 7, 10, 9, 10, 10];
let rendimientos2 = [0, 6, 7, 3, 0, 0, 2, 6, 7, 2, 0, 6, 7, 3, 0, 0, 2, 6, 7, 2, 7, 2, 0, 6, 7, 3, 3, 6, 2, 8, 7, 2]

let climas1 = [7, 6, 4, 3, 6, 5, 3, 4, 3, 2, 1, 3, 1, 1, 2, 1];
let climas2 = [7, 7, 5, 5, 4, 4, 4, 0, 4, 4, 7, 7, 5, 5, 4, 4, 4, 0, 4, 4, 4, 4, 7, 7, 5, 5, 4, 4, 4, 0, 4, 4];

let deportes1 = [0, 6, 0, 7, 8, 0, 2, 6, 7, 7, 7, 0, 7, 5, 7, 8];
let deportes2 = [0, 0, 4, 4, 0, 0, 9, 5, 10, 6, 0, 0, 4, 4, 0, 0, 9, 5, 10, 6, 10, 6, 0, 0, 4, 4, 0, 0, 9, 5, 10, 6];

let suenos1 = [8, 7, 5, 5, 6, 8, 7, 5, 5, 6, 6, 8, 7, 5, 5, 6];
let suenos2 = [8, 8, 8, 8, 5, 5, 3, 7, 6, 6, 8, 8, 8, 8, 5, 5, 3, 7, 6, 6, 7, 6, 6, 8, 8, 8, 8, 5, 5, 3, 7, 6, 6];

let colors1 = ['#ffdc5e', '#ffbf81', '#ffa3a5', '#ff86c8', '#ff69eb', '#da1884', '#c22a8f', '#aa3b9b', '#825aaf', '#6170bd', '#16ebe4', '#52ffb8', '#007f5f', '#2b9348', '#80b918', '#aacc00'];

var colorneutro = ['#000000'];
var colorneutro2 = ['#606060'];

let myDoughnutChart = document.getElementById("myChart").getContext('2d');

let chart1 = new Chart(myDoughnutChart, {
    type: 'doughnut',
    data: {
        labels: labels1,
        datasets: [{
            data: horas1,
            backgroundColor: colors1,
            lineTension: 0.4,
            pointRadius: 1,
            borderWidth: 0,
            lineTension: 0.4,
        }]
    },
    options: {
        title: {
            text: "Horas destinadas",
            display: true
        }
    }
});


let myChart2 = document.getElementById("myChart2").getContext('2d');

let chart2 = new Chart(myChart2, {
    type: 'bar',
    data: {

        labels: labels1,
        datasets: [{
            data: animos1,
            backgroundColor: colors1
        }]

    },
    options: {
        title: {
            text: "Estado de Animo (escala del 1 al 10)",
            display: true
        },
        legend: {
            display: false
        }
    }
});
let myChart3 = document.getElementById("myChart3").getContext('2d');

let chart3 = new Chart(myChart3, {
    type: 'bar',
    data: {
        labels: labels1,
        datasets: [{
            data: rendimientos1,
            backgroundColor: colors1,
        }]
    },
    options: {
        title: {
            text: "Rendimiento(escala del 1 al 10)",
            display: true
        },
        legend: {
            display: false
        }
    }
});
let myChart4 = document.getElementById("myChart4").getContext('2d');

let chart4 = new Chart(myChart4, {
    type: 'line',
    data: {
        labels: labels2,
        datasets: [{
            label: labels0[2],
            fill: false,
            data: rendimientos2,
            backgroundColor: colorneutro,
            borderColor: colors1[5],
            pointRadius: 1,
            borderWidth: 4,
            lineTension: 0.4,

        }, ]
    },
    options: {
        title: {
            text: "Rendimiento antes y después de una fecha",
            display: true
        }
    }

});

let myChart5 = document.getElementById("myChart5").getContext('2d');

let chart5 = new Chart(myChart5, {
    type: 'bar',
    data: {
        labels: labels1,
        datasets: [{
                label: labels0[2],
                fill: true,
                data: rendimientos1,
                backgroundColor: colors1[5],
                pointRadius: 1,
                borderWidth: 4,
                lineTension: 0.4,
            },
            {
                label: labels0[1],
                fill: false,
                data: animos1,
                backgroundColor: colors1[2],
                pointRadius: 1,
                borderWidth: 4,
                lineTension: 0.4,
            },
            {
                label: labels0[5],
                fill: false,
                data: suenos1,
                backgroundColor: colors1[8],

                pointRadius: 1,
                borderWidth: 4,
                lineTension: 0.4,
            }
        ]
    },
    options: {
        title: {
            text: "Rendimiento, animo y sueño",
            display: true
        }
    }

});


let myChart6 = document.getElementById("myChart6").getContext('2d');

let chart6 = new Chart(myChart6, {
    type: 'line',
    data: {
        labels: labels1,
        datasets: [{
                label: labels0[2],
                fill: false,
                data: rendimientos1,
                backgroundColor: colorneutro,
                borderColor: colors1[5],
                pointRadius: 1,
                borderWidth: 4,
                lineTension: 0.4,


            },
            {
                label: labels0[3],
                fill: false,
                data: climas1,
                backgroundColor: colorneutro,
                borderColor: colors1[11],
                pointRadius: 1,
                borderWidth: 4,
                lineTension: 0.4,
            }
        ]
    },
    options: {
        title: {
            text: "Rendimiento y Clima",
            display: true
        }
    }

});
let myChart10 = document.getElementById("myChart10").getContext('2d');

let chart10 = new Chart(myChart10, {
    type: 'line',
    data: {
        labels: labels1,
        datasets: [{
                label: labels0[2],
                fill: false,
                data: rendimientos1,
                backgroundColor: colorneutro,
                borderColor: colors1[5],
                pointRadius: 1,
                borderWidth: 4,
                lineTension: 0.4,

            },
            {
                label: labels0[3],
                fill: false,
                data: climas1,
                backgroundColor: colorneutro,
                borderColor: colors1[11],
                pointRadius: 1,
                borderWidth: 4,
                lineTension: 0.4,
            },
            {
                label: labels0[1],
                fill: false,
                data: animos1,
                backgroundColor: colorneutro,
                borderColor: colors1[2],
                pointRadius: 1,
                borderWidth: 4,
                lineTension: 0.4,
            },
            {
                label: labels0[0],
                fill: false,
                data: horas1,
                backgroundColor: colorneutro,
                borderColor: colors1[9],
                pointRadius: 1,
                borderWidth: 4,
                lineTension: 0.4,

            },
            {
                label: labels0[4],
                fill: false,
                data: deportes1,
                backgroundColor: colorneutro,
                borderColor: colors1[14],
                pointRadius: 1,
                borderWidth: 4,
                lineTension: 0.4,
            },
            {
                label: labels0[5],
                fill: false,
                data: suenos1,
                backgroundColor: colorneutro,
                borderColor: colors1[8],
                pointRadius: 1,
                borderWidth: 4,
                lineTension: 0.4,
            },



        ]
    },
    options: {
        title: {
            text: "Todo",
            display: true

        }

    }

});