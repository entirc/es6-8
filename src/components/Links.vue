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
                                <h1 class="title is-4">Links</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="content">
                        <ul>
                            <li><a href="http://exploringjs.com/es6/" target="_blank">Exploring ES6</a></li>
                            <li><a href="https://davidwalsh.name/es6-generators" target="_blank">The Basics Of ES6 Generators</a></li>
                            <li><a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Iteratores_e_geradores" target="_blank">MDN - Iteradores e geradores</a></li>
                            <li><a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/function*" target="_blank">Generators</a></li>
                            <li><a href="https://tableless.com.br/fluxo-de-execucao-assincrono-em-javascript-generators-e-async-functions" target="_blank">GENERATORS E ASYNC FUNCTIONS</a></li>
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
        name: 'IteratorProtocol',
        components: {
            Sidebar
        }
    }
</script>
