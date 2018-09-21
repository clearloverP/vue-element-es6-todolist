# 简单介绍
此案例主要用于练习vuex在开发中的应用，并且关于vuex的知识点并未做详细介绍，此处涉及到的技术栈主要有：<br>
```
vue-cli(vue)
vue-router
axios
webpack
vuex
es6
element-ui
```
<br>
具体实现的功能如下：<br>

## 展示todolist
以列表的形式展示todolist,默认展示所有的todo,即完成的和未完成的均展示，可以通过页面底部的按钮组```all```、```active```、```completed```，来实现todolist列表展示的内容，all为默认状态，展示所有数据，active为到目前为止还未完成的todo，completed为到目前为止已经完成的todo。<br>

## 新增todo
在顶部输入框中输入内容后，再按回车键，即可将输入的内容作为一条新的todo加入到todolist中，新加入的todo会在末尾展示
注意：
一、新增的todo不能为空字符串并且会对输入的内容做重复性检查，只有未添加的todo才可以完成添加，而不会受todo的状态是否完成干扰<br>
二、获取更多按钮，是测试vuex的actions的功能而增加的，取得是知乎日报的API：http://news-at.zhihu.com/api/4/news/latest，<br>
此处的功能也是将接口返回的数据的title字段作为todo的text字段，并加入todolist，但是没有和原有的数据做重复性检查，特此说明<br>

## 删除单个todo
每一条todo的后面都有一个```删除```按钮，点击该按钮会实现删除该条todo的功能

## 切换单个todo的状态
每一条todo的前面都有一个复选框，当选中该复选框时，表示该todo已经完成，未选中的表示该todo仍然未完成。已经完成的todo字体颜色变淡，并且文字中间会出现中划线

## 切换所有的todo的状态
新增todo的输入框前面有一个复选框，当选中它时，此时todolist列表中的所有todo的状态改为已经完成，当在此基础上再次反选时，所有的todo的状态又改为未完成。由于复选框都用的时原声的checkbox没有使用element中的对应组件，因此对于全选和全不选的中间状态无法表示，此处当只有部分选择时表示选择所有的那个复选框也处于未选中状态

## 删除所有已完成的todo
点击页面右下角的```Clear Completed```按钮，即可删除所有已完成的todo，切换到```completed```页面查看时，该页面为空白页。<br>
说明：只有在有已经完成的todo时```Clear Completed```按钮才显示，否则它是不会显示的

## 编辑单个todo
双击todo的名称，然后todo的名称会在一个输入框中，修改输入框中的内容即为编辑todo。当编辑完成后可以按下回车键或者使得输入框失去焦点即可编辑完成。当编辑后的todo为空字符串时，表示删除该todo

## 附加说明：
element-ui中使用的组件涉及：
```
Layout布局
Button
Input
Card
Radio
Scroll
```
<br>
浏览器兼容性（目前已测）：兼容Firefox、Chrome、IE，具体IE兼容到哪个版本目前未作测试，Safari目前兼容性未作测试

## 本地化步骤
```
# 一、克隆到本地
git clone https://github.com/clearloverP/vue-vue-router-axios-webpack-vuex-es6-element-todolist.git

# 二、切换到项目目录
cd vue-vue-router-axios-webpack-vuex-es6-element-todolist
cd demo

# 三、安装依赖
npm install

# 四、npm run dev

# 五、打开浏览器,在地址栏输入：localhost:8100
```






