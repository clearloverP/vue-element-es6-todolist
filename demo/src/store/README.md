# 在不考虑 modules 的情况下，使用 vuex， 对应的strore，可以规划如下：


## 具体规划如下：
``` 
index.js：定义状态应用的state，实例化store对象并导出

getters.js：定义state的计算属性

mutations.js：定义mutation

actions.js：定义action
```

## 在项目中使用：
```
一、定义store

二、在main.js中，引入store，并注入到vue实例中。这样，就可以确保在任何组件中，使用this.$store去进行相应的操作。主要是针对commit或者dispatch。

三、根据具体功能完善对应的文件
```