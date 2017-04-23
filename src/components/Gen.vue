<template>
    <div>
        <div class="columns">
            <div class="column is-4">
                <sidebar></sidebar>
            </div>
            <div class="column">
                <div class="column">
                    <div class="hero is-primary">
                        <div class="hero-body">
                            <div class="container">
                                <h1 class="title is-4">Generator</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <p class="content">
                        <h1 class="title is-4">O que é?</h1>
                        <p class="content">
                            Generators são processos (pedaços de código) que você pode pausar e retomar até completar uma determinada tarefa.
                        </p>
                        <p>
                            Podemos considerá-lo como uma função especial que cria automaticamente um iterator quando chamado.
                        </p>
                    </p>
                    <p class="content">
                        <h1 class="title is-4">Como declará-lo?</h1>
                        <p>Um generator function é indicado por um caracter asterisco (*) após a
                        palavra-chave function:</p>
                        <pre>
        function *
                        </pre>
                    </p>

                    <p class="content">
                        <h1 class="title is-4">Em que ele difere da função tradicional?</h1>
                    </p>
                        <p class="content">Em 2 aspectos:</p>

                        <p>
                            Primeiro, a declaração de uma generator function
                            leva um asterísco a sua frente:
                        </p>
                        <pre>
        function * nomeFuncao () { }
                        </pre>
                    </p>

                    <p class="content">
                        <p>Segundo, ele possui uma palavra reservada chamada yield, para pausar a si mesmo:</p>
                        <pre>
         function * minhaFunção () {
             yield
         }
                        </pre>
                    </p>

                    <p class="content">
                        <h1 class="title is-4">Tipos de generators</h1>
                    </p>

                    <p class="content">Existem 4 tipos de generators:</p>

                    <div class="content">
                        <ul>
                            <li>Generator Function</li>
                            <li>Generator Function Expression</li>
                            <li>Generator Method Definition - Objects</li>
                            <li>Generator Method Definition - Class</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Sidebar from './shared-comps/Sidebar.vue'
    export default {
        name: 'Generator',
        components: {
            Sidebar
        }
    }
</script>
