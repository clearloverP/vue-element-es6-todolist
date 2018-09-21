export default {
    // 获取checkbox的状态
    allChecked(state) {
        if (state.todos.length != 0) {
            return state.todos.every( todo => todo.done );
        } else {
            return false;
        } 
    },

    // 选择了todo但是没有全部选中这一中间状态
    isIndeterminate(state) {
        if (state.todos.length == 0 || state.todos.every( todo => todo.done ) || state.todos.every( todo => !todo.done )) {
            return false; 
        } else {
            return true;
        }
    },

    // 统计未完成的任务
    remaining(state) {
        return state.todos.filter( todo => !todo.done).length;
    } 
}