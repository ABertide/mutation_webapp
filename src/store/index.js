import { createStore } from 'vuex';
import mutations from '@/store/modules/mutations';
import sources from '@/store/modules/sources';

export default createStore({
    modules: { mutations, sources }
});
