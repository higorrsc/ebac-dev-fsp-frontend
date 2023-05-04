<script setup>
import { reactive } from 'vue';

const estado = reactive({
    tarefas: [
        { titulo: 'Estudar ES6', finalizada: false },
        { titulo: 'Estudar SASS', finalizada: false },
        { titulo: 'Ir para a academia', finalizada: true }
    ],
    filtro: 'todas',
    tarefaTemp: '',
})

const getTarefasPendentes = () => {
    return estado.tarefas.filter(tarefa => !tarefa.finalizada);
}

const getTarefasFinalizadas = () => {
    return estado.tarefas.filter(tarefa => tarefa.finalizada);
}

const getTarefasFiltradas = () => {
    const { filtro } = estado;
    switch (filtro) {
        case 'pendentes':
            return getTarefasPendentes();
        case 'finalizadas':
            return getTarefasFinalizadas();
        default:
            return estado.tarefas
    }
}

const cadastraTarefa = () => {
    const tarefaNova = {
        titulo: estado.tarefaTemp,
        finalizada: false,
    }
    estado.tarefas.push(tarefaNova);
    estado.tarefaTemp = '';
}

</script>

<template>
    <div class="container">
        <header class="p-5 mb-4 mt-4 bg-light rounded-3">
            <h1>Minhas Tarefas</h1>
            <p>Você possui {{ getTarefasPendentes().length }} tarefas pendentes</p>
        </header>
        <form @submit.prevent="cadastraTarefa">
            <div class="row">
                <div class="col">
                    <input @change="evento => estado.tarefaTemp = evento.target.value" :value="estado.tarefaTemp"
                        type="text" name="" id="" placeholder="Digite aqui a descrição da tarefa" class="form-control"
                        required>
                </div>
                <div class="col-md-2">
                    <button class="btn btn-primary" type="submit">Cadastrar</button>
                </div>
                <div class="col-md-2">
                    <select class="form-control" @change="evento => estado.filtro = evento.target.value">
                        <option value="todas">Todas tarefas</option>
                        <option value="pendentes">Pendentes</option>
                        <option value="finalizadas">Finalizadas</option>
                    </select>
                </div>
            </div>
        </form>
        <ul class="list-group mt-4">
            <li class="list-group-item" v-for="tarefa in getTarefasFiltradas()">
                <input @change="evento => tarefa.finalizada = evento.target.checked" :checked="tarefa.finalizada"
                    :id="tarefa.titulo" type="checkbox">
                <label class="ms-3" :class="{ done: tarefa.finalizada }" :for="tarefa.titulo">
                    {{ tarefa.titulo }}
                </label>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.done {
    text-decoration: line-through;
}
</style>
