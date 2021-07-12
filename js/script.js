let labels0 = ["Horas", "Animo", "Rendimiento", "Clima", "Deporte", "Sueño"];

let labels1 = ["10/04", "12/04", "16/04", "30/04", "10/05"];
let labels2 = ["10/04 imput", "10/04 output", "12/04 imput", "12/04 output", "16/04 imput", "16/04 output", "27/04 imput", "06/05 output", "10/05 imput", "10/05 output"];

let horas1 = [10, 6, 2, 16, 4];
let horas2 = [10, 10, 6, 6, 2, 2, 5, 10, 2, 2];

let animos1 = [6, 3.5, 2.5, 5, 8];
let animos2 = [8, 4, 7, 2, 5, 0, 10, 4, 7, 9];

let rendimientos1 = [6, 10, 1, 4, 9];
let rendimientos2 = [0, 6, 7, 3, 0, 0, 2, 6, 7, 2]

let climas1 = [7, 5, 4, 3, 4];
let climas2 = [7, 7, 5, 5, 4, 4, 4, 0, 4, 4];

let deportes1 = [0, 4, 0, 7, 8];
let deportes2 = [0, 0, 4, 4, 0, 0, 9, 5, 10, 6];

let suenos1 = [8, 7, 5, 5, 6];
let suenos2 = [8, 8, 8, 8, 5, 5, 3, 7, 6, 6];

let colors1 = ['#441448', '#BA65B4', '#3754A4', '#61b8e6', '#87e52c'];
let colors2 = ['#441448', '#5A2160', '#A5539F', '#BA65B4', '#3754A4', '#273997', '#61b8e6', '#1ef492', '#7fdb28', '#87e52c'];
var colorneutro = ['#000000'];
var colorneutro2 = ['#606060'];

let myDoughnutChart = document.getElementById("myChart").getContext('2d');

let chart1 = new Chart(myDoughnutChart, {
    type: 'doughnut',
    data: {
        labels: labels1,
        datasets: [{
            data: horas1,
            backgroundColor: colors1
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
            data: rendimientos2,
            fill: false,
            backgroundColor: colors2,
            borderColor: colors1[0],
            pointRadius: 1,
            borderWidth: 4,
            lineTension: 0.4,
        }]
    },
    options: {
        title: {
            text: "Rendimiento al inicio y al final (escala del 1 al 10)",
            display: true
        },
        legend: {
            display: false
        }
    }
});
let myChart5 = document.getElementById("myChart5").getContext('2d');

let chart5 = new Chart(myChart5, {
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

let myChart6 = document.getElementById("myChart6").getContext('2d');

let chart6 = new Chart(myChart6, {
    type: 'line',
    data: {
        labels: labels1,
        datasets: [{
                label: labels0[2],
                fill: false,
                data: rendimientos1,
                backgroundColor: colors2,
                borderColor: colors1[0],
                pointRadius: 1,
                borderWidth: 4,
                lineTension: 0.4,


            },
            {
                label: labels0[3],
                fill: false,
                data: climas1,
                backgroundColor: colors2,
                borderColor: colors1[1],
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
                backgroundColor: colors2,
                borderColor: colors1[0],
                pointRadius: 1,
                borderWidth: 4,
                lineTension: 0.4,

            },
            {
                label: labels0[3],
                fill: false,
                data: climas1,
                backgroundColor: colors2,
                borderColor: colors1[1],
                pointRadius: 1,
                borderWidth: 4,
                lineTension: 0.4,
            },
            {
                label: labels0[0],
                fill: false,
                data: horas1,
                backgroundColor: colors2,
                borderColor: colors1[2],
                pointRadius: 1,
                borderWidth: 4,
                lineTension: 0.4,

            },
            {
                label: labels0[4],
                fill: false,
                data: deportes1,
                backgroundColor: colors2,
                borderColor: colors1[3],
                pointRadius: 1,
                borderWidth: 4,
                lineTension: 0.4,
            },
            {
                label: labels0[5],
                fill: false,
                data: suenos1,
                backgroundColor: colors2,
                borderColor: colors1[4],
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