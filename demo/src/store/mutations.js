export default {
    // 添加单个todo
    addTodo(state, {val}) {
        state.todos.push({
            text: val,
            done: false,
            show: true
        });
    },

    // 删除单个todo
    deleteTodo(state, index) {
        state.todos.splice(index, 1);
    },

    // 切换todo的状态
    toggleTodo(state, index) {
        state.todos[index].done = !state.todos[index].done;
    },

    // 切换所有的todo的状态，参数done就是一个布尔值，原值为true，此处则为false，循环对每一个todo的状态都进行修改
    toggleAll(state, done) {
        state.todos.forEach( todo => todo.done = done);
    },

    // 删除所有已完成
    clearCompleted(state) {
        state.todos = state.todos.filter( todo => !todo.done );
    },

    // 更新todo
    updateTodo(state, {text, index}) {
        state.todos[index].text = text;
        state.todos[index].show = true;
    },

    // 显示编辑框
    editTodo(state, index) {
        state.todos[index].show = false;
    },

    // 取消编辑
    cancelEdit(state, index) {
        state.todos[index].show = true;
    },

    // 获取数据
    getLatestNews(state, news) {
        let arr = [];
        news.forEach(item => {
            arr.push({
                text: item.title,
                show: true,
                done: false
            });
        })
        state.todos = state.todos.concat(arr);

        
    }
}