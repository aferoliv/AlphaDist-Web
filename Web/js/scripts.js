// Scripts Especificos para Funcionalidade da Aplicação
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