<template>
    <div class="todo">
		<el-row>
            <el-col :span='24'>
                <el-card class="box-card" style="margin: 0 auto;">
                    <div slot="header" class="clearfix">
                        <el-row :gutter='10'>
                            <el-col :span='1'>
                                <!-- <el-checkbox :checked="allChecked" :indeterminate='isIndeterminate' style="position: relative; top: 10px;" @change="toggleAll(!allChecked)"></el-checkbox> -->
                                <input type="checkbox" :checked="allChecked" @change="toggleAll(!allChecked)" style="position: relative; top: 10px; border: 1px solid #dcdfe6;">
                            </el-col>
                            
                            <el-col :span='18'>
                                <el-input v-model="input" @keyup.enter.native="addTodo" placeholder="what need to be done?"></el-input>
                            </el-col>
                            <el-col :span='3' style="position: relative; top: 6px;">
                                <el-button size="mini" type="primary" @click="getNews">获取更多</el-button>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="cardBody" style="position: relative;">
                        <ul class="listWrapper bodyWrapper">
                            <el-scrollbar class="pageScroll">
                                <li class="list" v-for="(todo, index) in filteredTodos" :key="index">
                                    <el-row :gutter='10' v-show="todo.show">
                                        <el-col :span='1'>
                                            <!-- <el-checkbox v-model="todo.done" style="position: relative; top: 2px;" @change="toggleTodo(index)"></el-checkbox> -->
                                            <input type="checkbox" :checked="todo.done" @change="toggleTodo(index)" style="position: relative; top: 2px;">
                                        </el-col>
                                        <el-col :span='20' v-if="todo.done" class="itemColor"><del @dblclick="editTodo(index)"> {{todo.text}} </del></el-col>
                                        <el-col :span='20' v-else><label @dblclick="editTodo(index)"> {{todo.text}} </label></el-col>
                                        <el-col :span='2'>
                                            <el-button size="mini" type="info" plain @click="deleteTodo(index)">删除</el-button>
                                        </el-col>
                                    </el-row>
                                    <el-input :value="todo.text" v-show="!todo.show" @keyup.enter.native="doneEdit($event, index)" @blur="doneEdit($event, index)" @keyup.esc.native="cancelEdit(index)"></el-input>
                                </li>
                            </el-scrollbar>
                        </ul>
                        <div style="position: absolute; bottom: 0; width: 100%; border-top: 1px solid #ccc; padding: 10px 0;">
                            <el-row style="width: 100%;">
                                <el-col :span="6" style="position: relative; top: 8px; color: #aaa;"><strong>{{remaining}}</strong> items left</el-col>
                                <el-col :span="12">
                                    <el-radio-group v-model="curStatus" size="mini" @change="changeCurStatus">
                                        <el-radio-button label="all"></el-radio-button>
                                        <el-radio-button label="active"></el-radio-button>
                                        <el-radio-button label="completed"></el-radio-button>
                                    </el-radio-group>
                                </el-col>
                                <el-col :span="6">
                                    <el-button type="info" size="mini" @click="clearCompleted" plain v-show="this.$store.state.todos.length > remaining">Clear Completed</el-button>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

    // 定义独立的filters，提供一些接口
    const filters = {
        all: todos => todos,                                    // 获取所有的todos
        active: todos => todos.filter(todo => !todo.done),      // 获取未完成的todos
        completed: todos => todos.filter(todo => todo.done)     // 获取已完成的todos
    }

    export default {
    	data(){
    		return {
                input: '',
                curStatus: 'all',    // 表示当前是哪一个条件，默认是all
            }
    	},
    	created(){

        },
    	computed: {
           ...mapState(['todos']),
           ...mapGetters(['allChecked', 'remaining', 'isIndeterminate']),
            // 根据条件来获取todos列表
           filteredTodos() {
                // 调用filters接口
                return filters[this.curStatus](this.todos);
           }
        },
		methods: {
            addTodo() {
                let val = this.input.trim();

                if (val == '') {
                    this.$message({
                        type: 'warning',
                        message: 'todo不能为空！'
                    });

                    return false;
                } else if (val.length > 25) {
                    this.$message({
                        type: 'warning',
                        message: 'todo长度不能超过25！'
                    });

                    return false;
                } else {
                    let count = 0;

                    this.todos.forEach(todo => {
                        if (todo.text == val) {
                            count++;
                        }
                    });

                    if (count != 0) {
                        this.$message({
                            type: 'warning',
                            message: 'todo已经存在！'
                        });
                    } else {
                        this.$store.commit('addTodo', { val });

                        // 置空
                        this.input = '';
                    }
                }
            },
            ...mapMutations(['deleteTodo', 'toggleTodo', 'toggleAll', 'clearCompleted', 'updateTodo', 'editTodo', 'cancelEdit']),
            changeCurStatus(e) {
                this.curStatus = e;
            },
            doneEdit(e, index) {

                // 获取文本框的值
                let text = e.target.value.trim();

                // 判断text是否有值
                if (text) {

                    // 更新操作
                    this.updateTodo({text, index});
                } else {

                    // 删除操作
                    this.deleteTodo(index);
                }
            },
            ...mapActions(['getNews'])
		}
    }
</script>

<style scoped>
    .listWrapper {
        list-style: none;
        text-align: left;
        margin-left: 20px;
        padding-left: 0;
        max-height: 170px;
    }

    li.list {
        padding: 10px 5px;
    }
    .cardBody {
        height: 250px;
        overflow-y: auto;
        overflow-x: hidden;
    }
    .clearfix {
        clear: both;
    }
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 600px;
    }

    .itemColor {
        color: #ccc;
    }

    .bodyWrapper {
        height: 100%;
        overflow-y: hidden;
        position: relative;
        top: 10px;
    }

    .pageScroll {
        height: 100%;
    }

    .pageScroll .el-scrollbar__wrap{
        overflow: auto;
        overflow-x: hidden;
    }
</style>
