// Scripts Especificos para Funcionalidade da Aplicação


// Global para Guardar dados dos Sistemas
array_Systems = [];


// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
//Obtem Lista de Sistemas dinamicamente
function getList_Systems() {
    //Aqui deve ser adicionado o codigo para obter a lista de sistemas dinamicamente
    return [
        { id: 'Sis_A', systemName: 'Sistema A', systemDescription: 'Esta é a Descrição do Sistema A.' },
        { id: 'Sis_B', systemName: 'Sistema B', systemDescription: 'Esta é a Descrição do Sistema B.' },
        { id: 'Sis_C', systemName: 'Sistema C', systemDescription: 'Esta é a Descrição do Sistema C.' },
        { id: 'Sis_D', systemName: 'Sistema D', systemDescription: 'Esta é a Descrição do Sistema D.' },
        { id: 'Sis_E', systemName: 'Sistema E', systemDescription: 'Esta é a Descrição do Sistema E.' },
        { id: 'Sis_F', systemName: 'Sistema F', systemDescription: 'Esta é a Descrição do Sistema F.' },
    ];
}


// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// Esta função atualiza/preenche o Elemento dropdown_Sistemas com os valores existentes em array_Sistemas
// Esta funcao também adiciona um Evento para chamar a funcão changeDropdown_Sistemas()
// toda vez que um elemento for clicado.
function updateDropdown_Systems() {
    dropdownMenu = document.getElementById('dropdown_SystemsMenu');
    dropdownMenu.innerHTML = ''; //Limpa Lista de Opcoes Atuais

    //Este Loop Itera sobre cada elemento na variavel array_Systems
    array_Systems.forEach(({ id, systemName }) => {
        listItem = document.createElement('li');
        listItem.classList.add('dropdown-item');
        listItem.id = id;
        listItem.textContent = systemName;
        listItem.addEventListener('click', changeDropdown_Systems);
        dropdownMenu.appendChild(listItem);
    });
}


// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// Esta função chama getList_Sistemas para obter a lista the Sistemas (id, nome, descricao)
function changeDropdown_Systems(event) {
    selectedSystem = array_Systems.find((element) => element.id === event.target.id);
    console.log("Selected System: ", selectedSystem);
    document.getElementById('dropdown_Systems').textContent = selectedSystem.systemName;
    document.getElementById('text_SystemDescription').textContent = selectedSystem.systemDescription;
    document.getElementById('text_SystemParameters').textContent=selectedSystem.systemName;
    //Inclua aqui outros elementos/parametros que precisam ser alterados quando um novo sistema for selecionado.
};


// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
//Executa ações assim que a página for completamente carregada.
window.addEventListener('DOMContentLoaded', event => {
    console.log("Pagina Carregada!");
    array_Systems = getList_Systems();
    updateDropdown_Systems();
});