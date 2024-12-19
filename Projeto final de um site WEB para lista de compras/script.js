// Seleciona os elementos do DOM
const itemInput = document.getElementById('itemInput');
const addButton = document.getElementById('addbutton');
const listaCompras = document.getElementById('Lista-compras');

// Função para adicionar um item à lista
function adicionarItem() {
    const itemText = itemInput.value.trim(); // Remove espaços extras

    if (itemText) {
        // Criar um novo item de lista (li)
        const li = document.createElement('li');
        li.textContent = itemText;

        // Criar o botão de remover
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.classList.add('remove-btn'); // Adiciona a classe de estilo

        // Adiciona o evento para remover o item ao clicar no botão
        removeButton.addEventListener('click', () => {
            li.remove(); // Remove o item da lista
        });

        // Adiciona o botão de remover ao item da lista
        li.appendChild(removeButton);

        // Adiciona o item à lista
        listaCompras.appendChild(li);

        // Limpar o campo de entrada após adicionar
        itemInput.value = '';
    }
}

// Adiciona o item ao clicar no botão
addButton.addEventListener('click', adicionarItem);

// Adiciona o item ao pressionar Enter no campo de input
itemInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); // Previne o comportamento padrão (como envio de formulário)
        adicionarItem(); // Chama a função para adicionar o item
    }
});
