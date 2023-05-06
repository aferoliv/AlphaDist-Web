/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {
    console.log("Pagina Carregada!");
    }
);


//Modifica comportamento do Botão do Bootstrap para Exibir o Sistema selecionado após desfocar.
document.querySelectorAll('.dropdown-menu a').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const dropdownButton = document.getElementById('dropdownMenuButton');
        dropdownButton.innerHTML = e.target.innerHTML;
    });
});