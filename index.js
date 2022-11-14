//let datum = new Date().toLocaleDateString('de-DE');
//document.getElementById("inputPocetakUgovora").value = datum;
//document.getElementById("inputStampaUgovora").value = datum;

const pocetnaNav = document.querySelector('#pocetnaNav')
const ugovoriNav = document.querySelector('#ugovoriNav')
const obrasciNav = document.querySelector('#obrasciNav')
const screenExpandNav = document.querySelector('#screenExpandNav')
const screenCompressNav = document.querySelector('#screenCompressNav')

const imageMenu = document.querySelector('.image')
const ugovoriMenu = document.querySelector('.stampanje-ugovora')
const obrasciMenu = document.querySelector('.stampanje-obrazaca')


//funkcija dugmica navbara
pocetnaNav.addEventListener('click', displayPocetna)
ugovoriNav.addEventListener('click', displayUgovori)
obrasciNav.addEventListener('click', displayObrasci)

function displayPocetna() {
    imageMenu.style.display = "block"
    ugovoriMenu.style.display = "none"
    obrasciMenu.style.display = "none"
}

function displayUgovori() {
    imageMenu.style.display = "none"
    ugovoriMenu.style.display = "flex"
    obrasciMenu.style.display = "none"
}

function displayObrasci() {
    imageMenu.style.display = "none"
    ugovoriMenu.style.display = "none"
    obrasciMenu.style.display = "grid"
}

//WORD
function Export2Word(element, filename = ''){
  
    //podesavanje imena i prezimena, adrese, datuma pocetka ugovora i datuma stampanja ugovora
    document.querySelectorAll('.imePrezime').forEach(element => {element.innerHTML = document.getElementById("inputImePrezime").value});
    document.querySelectorAll('.adress').forEach(element => {element.innerHTML = document.getElementById("inputAdresa").value});
    document.querySelectorAll('.datumPocetkaUgovora').forEach(element => {element.innerHTML = document.getElementById("inputPocetakUgovora").value});
    document.querySelectorAll('.datumStampanjaUgovora').forEach(element => {element.innerHTML = document.getElementById("inputStampaUgovora").value});
    document.querySelectorAll('.brojAneksa').forEach(element => {element.innerHTML = document.getElementById("inputBrojAneksa").value});
    document.querySelectorAll('.BrojUgovoraNaKojiSeOdnosiRaskid').forEach(element => {element.innerHTML = document.getElementById("inputBrojUgovoraNaKojiSeOdnosiRaskid").value});

    //...prebacivanje u word
    var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
    var postHtml = "</body></html>";
    var html = preHtml+document.getElementById(element).innerHTML+postHtml;

    var blob = new Blob(['\ufeff', html], {type: 'application/msword'});    
    var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);    
    filename = filename?filename+'.doc':'document.doc';    
    var downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob ){
        navigator.msSaveOrOpenBlob(blob, filename);
    }else{
        downloadLink.href = url;        
        downloadLink.download = filename;        
        downloadLink.click();
    }
    
    document.body.removeChild(downloadLink);
    }
    //dugme za prebacivanje u word
    document.querySelector('#dugmeZaWord').addEventListener('click', function() {
       let x = document.getElementById('padajuciMeni').value
        Export2Word(x, filename = x)
    })


//FULL SCREEN
screenExpandNav.addEventListener('click', openFullscreen)
screenCompressNav.addEventListener('click', closeFullscreen)

var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }

  document.querySelector('.close').style.display = 'block'
  document.querySelector('.open').style.display = 'none'
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }

  document.querySelector('.close').style.display = 'none'
  document.querySelector('.open').style.display = 'block'
}


//ANIMACIJA
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.pocenta-slika').classList.add('animacija')
  
  function navShow() {
    document.querySelector('.navbar').classList.add('navbar-show')
  }
  setTimeout(navShow,1500)
  
});