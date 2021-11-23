import { createStore } from 'vuex';
import  journal  from '../modules/diario/store/journal/index';

const store = createStore({
    modules: {
        journal
    }
});

export default store;