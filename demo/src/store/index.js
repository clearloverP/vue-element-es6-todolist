// 引入vue和vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 引入相应的getters、mutations、actions，其中actions不是必须的，当涉及到异步操作时才会需要
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

// 定义state：它表示应用的状态，所有的状态（数据）都放在state中
const state = {
    todos: [
        {text: '学习Angular', done: true, show: true},
        {text: '开发网站', done: false, show: true},
        {text: '研究React', done: false, show: true},
        {text: '使用vue', done: true, show: true}
    ]
}

// 实例化一个store对象并导出
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})