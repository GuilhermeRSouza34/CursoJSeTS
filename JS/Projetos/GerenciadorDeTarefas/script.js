// Seleciona os elementos necessários
const taskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const tasksList = document.getElementById('tasks');

// Função para adicionar uma nova tarefa
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Por favor, digite uma tarefa.');
        return;
    }

    // Cria um novo item de lista
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    // Cria o botão de remover
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.addEventListener('click', () => {
        tasksList.removeChild(taskItem);
    });

    // Adiciona o botão ao item e o item à lista
    taskItem.appendChild(removeButton);
    tasksList.appendChild(taskItem);

    // Limpa o campo de entrada
    taskInput.value = '';
}

// Adiciona o evento de clique ao botão de adicionar
addTaskButton.addEventListener('click', addTask);

// Permite adicionar tarefas pressionando "Enter"
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
