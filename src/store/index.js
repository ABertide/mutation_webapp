import { createStore } from 'vuex';
import mutations from '@/store/modules/mutations';

export default createStore({
    modules: { mutations }
});
