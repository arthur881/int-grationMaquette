let graph = document.getElementById('graph').getContext('2d');

let newGraph = new Chart(graph, {
    type: 'line',
    data: {
        labels: ['5Nov', '6Nov', '7Nov', '8Nov', '9Nov', '10Nov', '11Nov', '12Nov', '13Nov', '14Nov', '15Nov'],
        datasets: [
            {
                label: 'ETH',
                data: [100, 400, 600, 700, 500, 400, 300, 200, 150, 200, 300],
                borderColor: 'rgba(89, 39, 149, 1)',
                backgroundColor: 'transparent',
            },
            {
                label: 'BTC',
                data: [null, null, 700, 650, 500, 550, 300, 500, 650, 300, 325],
                borderColor: 'rgba(25, 112, 214, 1)',
                backgroundColor: 'transparent',
            },
            {
                label: 'BNB',
                data: [700, 650, 500, 550, 300, 120, 500, 200, 300, 400, 325],
                borderColor: 'rgba(77, 145, 165, 1)',
                backgroundColor: 'transparent',
            }
        ]
    },
    options: {
        legend: {
            display: false,
        },
        scales: {
            yAxes: [{
                ticks: {
                    callback: function(value, index, values) {
                        return '$ ' + value;
                    }
                }
            }]
        }
    }
});