// Scripts Especificos para Funcionalidade da Aplicação


// Global para Guardar dados dos Sistemas
array_Sistemas = [];


// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
//Obtem Lista de Sistemas dinamicamente
function getList_Sitemas() {
    //Aqui deve ser adicionado o codigo para obter a lista de sistemas dinamicamente
    return [
        { id: 'Sis_A', nome: 'Sistema A', descricao: 'Esta é a Descrição do Sistema A.' },
        { id: 'Sis_B', nome: 'Sistema B', descricao: 'Esta é a Descrição do Sistema B.' },
        { id: 'Sis_C', nome: 'Sistema C', descricao: 'Esta é a Descrição do Sistema C.' },
        { id: 'Sis_D', nome: 'Sistema D', descricao: 'Esta é a Descrição do Sistema D.' },
        { id: 'Sis_E', nome: 'Sistema E', descricao: 'Esta é a Descrição do Sistema E.' },
        { id: 'Sis_F', nome: 'Sistema F', descricao: 'Esta é a Descrição do Sistema F.' },
    ];
}


// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// Esta função atualiza/preenche o Elemento dropdown_Sistemas com os valores existentes em array_Sistemas
// Esta funcao também adiciona um Evento para chamar a funcão changeDropdown_Sistemas()
// toda vez que um elemento for clicado.
function updateDropdown_Sistemas() {
    const dropdownMenu = document.getElementById('dropdown_SistemasMenu');
    const dropdownButton = document.getElementById('dropdown_Sistemas');
    dropdownMenu.innerHTML = ''; //Limpa Lista de Opcoes Atuais

    //Este Loop Itera sobre cada elemento na variavel array_Sistemas
    array_Sistemas.forEach(({ id, nome }) => {
        const listItem = document.createElement('li');
        listItem.classList.add('dropdown-item');
        listItem.id = id;
        listItem.textContent = nome;        
        listItem.addEventListener('click', changeDropdown_Sistemas);        
        dropdownMenu.appendChild(listItem);
    });
}


// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// Esta função chama getList_Sitemas para obter a lista the Sistemas (id, nome, descricao)
function changeDropdown_Sistemas(event) {
    const selectedSistema = array_Sistemas.find((element) => element.id === event.target.id);
    console.log("Sistema Selecionado: ", selectedSistema);    
    document.getElementById('dropdown_Sistemas').textContent = selectedSistema.nome;
    document.getElementById('text_SistemaDescricao').textContent = selectedSistema.descricao;
    //Inclua aqui outros elementos/parametros que precisam ser alterados quando um novo
    //sistema for selecionado.
};


// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
//Executa ações assim que a página for completamente carregada.
window.addEventListener('DOMContentLoaded', event => {
    console.log("Pagina Carregada!");
    array_Sistemas = getList_Sitemas();
    updateDropdown_Sistemas();
});