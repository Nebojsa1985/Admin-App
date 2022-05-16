//dodavanje +1 na klik na pitanje

const incrementButton = document.getElementById('container-questions').getElementsByTagName('button');

for(var i = 0; i < incrementButton.length; i++){
    var button = incrementButton[i];

    button.addEventListener("click", function(e){
        var buttonClicked = e.target;
        var x = buttonClicked.parentElement.children[1];
        var input = x.children[0];
        var inputValue = input.value;
        var newValue = parseInt(inputValue) + 1;
        input.value = newValue; 
    });
}

//Konstruktor za picechart-ove i barchart-ove

class Button {
  constructor(value1, comment1 ,value2 ,comment2 ,value3 ,comment3 , tag) {
    this.value1 = Number(document.getElementById(value1).value);
    this.comment1 = comment1;
    this.value2 = Number(document.getElementById(value2).value);
    this.comment2 = comment2;
    this.value3 = Number(document.getElementById(value3).value);
    this.comment3 = comment3;
    this.tag = tag;
}

drawChart = () => {

  const data = google.visualization.arrayToDataTable([
  ['x', 'y'],
  [this.comment1, this.value1],
  [this.comment2, this.value2],
  [this.comment3, this.value3]
  ]);

  const options = { 'width':520, 'height':270, 'colors':['purple','green','orange'],'is3D':true};
  const chart = new google.visualization.PieChart(document.getElementById(this.tag));
  chart.draw(data, options);
  }

drawBarChart = () => {

  const data = google.visualization.arrayToDataTable([
  ['', ''],
  [this.comment1, this.value1],
  [this.comment2, this.value2],
  [this.comment3, this.value3]
]);

  const options = {isStacked:true, 'width':500, 'height':270};  
  const chart = new google.visualization.ColumnChart(document.getElementById(this.tag));
  chart.draw(data, options);
}
 
}

//Prikazivanje piechart-ova i barchart-ova na klik

function drawChart1() {
  let button = new Button('demo1', 'Финансијска сигурност','demo2', 'Здравље','demo3', 'Школовање деце', 'piechart1');
  button.drawChart();
}

function drawChart2() {
  let button = new Button('demo4', 'Живот без брига','demo5', 'Сигурност за моју породицу','demo6', 'Могућност стварања још више новца', 'piechart2');
  button.drawChart();
}

function drawChart3() {
  let button = new Button('demo13', 'Избор препуштам стручњацима','demo14', 'Пресудна је највиша добит','demo15', 'Сигурност на првом месту', 'piechart3');
  button.drawChart();
}

function drawChart4() {
  let button = new Button('demo28', '200 евра','demo29', '500 евра','demo30', 'Више од 500 евра', 'piechart4');
  button.drawChart();
}

function drawChart5() {
  let button = new Button('demo33', '250 евра','demo34', '500 евра','demo35', 'Више од 500 евра', 'piechart5');
  button.drawChart();
}

function drawChart6() {
  
  let button = new Button('demo31', '250 евра','demo32', '500 евра','demo0', '', 'piechart6');
  button.drawChart();
}

function drawBarChart1() {
  let button = new Button('demo16', 'Да, имам полису','demo17', 'Да, али немам полису','demo18', 'Не знам', 'drawchart1');
  button.drawBarChart();
  }

function drawBarChart2() {
  let button = new Button('demo19', 'Дуга традиција у осигурању живота','demo20', 'Већи број некретнина','demo21', 'Ефикасно извршавање обавеза', 'drawchart2');
  button.drawBarChart();
  }

function drawBarChart3() {
  let button = new Button('demo22', 'Не, нисам никада чуо','demo23','Чуо сам али не знам о чему се ради','demo24', 'Чуо сам и упознат сам са програмом', 'drawchart3');
  button.drawBarChart();
  }

//Prebacivanje u PDF
 window.onload = function (){
    document.getElementById("download")
        .addEventListener("click", () => {
            const stampa = this.document.getElementById("anketa-stampa");
            var opt = {
                margin: 1,
                filename: 'Ankete.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(stampa).set(opt).save();
        })
}