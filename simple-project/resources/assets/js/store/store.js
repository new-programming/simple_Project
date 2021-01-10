import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {

    },
});

store.helper = {
    // 配列のキーを変更する
    renameKey: function (in_obj, oldkey, newkey) {
        in_obj[newkey] = in_obj[oldkey];
        delete in_obj[oldkey];
    }
}