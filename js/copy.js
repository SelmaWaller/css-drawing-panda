let copyHTML = document.getElementById('copyHTML');
function HTML() {
    copyHTML.select();
    copyHTML.setSelectionRange(0, 99999)
    document.execCommand('copy');
    let HTMLcont = document.getElementById('HTMLcont')
    let notiHTML = document.createElement('p');
    notiHTML.setAttribute('id', 'notiHTML');
    notiHTML.textContent = ('html copied to clipboard!');
    HTMLcont.appendChild(notiHTML);
}

let copyCSS = document.getElementById('copyCSS');
function CSS() {
    copyCSS.select();
    copyCSS.setSelectionRange(0, 99999)
    document.execCommand('copy');
    let CSScont = document.getElementById('CSScont')
    let notiCSS = document.createElement('p');
    notiCSS.textContent = ('css copied to clipboard!');
    notiCSS.setAttribute('id', 'notiCSS');
    CSScont.appendChild(notiCSS);
}