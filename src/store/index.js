import Vuex from 'vuex';
import Vue from 'vue';
import todos from './modules/todos'

// Load Vuex
Vue.use(Vuex)

// Create store
export default Vuex.Store({
    modules: {
        todos
    }
})