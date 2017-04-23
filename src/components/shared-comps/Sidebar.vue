<template>
    <div>
        <div class="column is-12">
            <div class="hero">
                <h1 class="title is-2">
                    <b>ENTIRC</b>
                </h1>
                <h1 class="subtitle is-4">
                    ES6 - Generator
                </h1>
            </div>
            <hr/>
            <aside class="menu aside">
                <ul class="menu-list">
                    <li>
                        <router-link to="/" class="nav-item" exact>Generator</router-link>
                    </li>
                    <li>
                        <h1 class="title is-6">
                            <a><b>Types of Generators</b></a>
                        </h1>
                    </li>
                    <li>
                        <ul>
                            <li>
                                <router-link to="/gen-functions" class="nav-item">Generator Function</router-link>
                            </li>
                            <li>
                                <router-link to="/gen-functions-exp" class="nav-item">Generator Function Expression</router-link>
                            </li>
                            <li>
                                <router-link to="/gen-method-def-obj" class="nav-item">Generator Method Definition - Objects</router-link>
                            </li>
                            <li>
                                <router-link to="/gen-method-def-class" class="nav-item">Generator Method Definition - Class</router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="/iteration-protocol" class="nav-item">Iteration Protocol</router-link>
                    </li>
                    <li>
                        <router-link to="/iterator" class="nav-item">Iterator</router-link>
                    </li>
                    <li>
                        <router-link to="/iterable" class="nav-item">Iterable</router-link>
                    </li>
                    <li>
                        <router-link to="/links" class="nav-item">Links</router-link>
                    </li>
                </ul>
            </aside>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Sidebar',
        data () {
            return {

            }
        }
    }
</script>

<style>
    .is-active {
        background-color: rgb(255, 221, 87)!important;
    }
</style>
