# Vue_Ts_Demo
## vue2与vue3生命周期
### 组件创建时运行
beforeCreate => setup
created => setup
### 挂载在DOM时运行
beforeMount => onBeforeMount:在挂载之前被调用，渲染函数render首次被调用
mounted => onMounted：组件挂载时调用
### 响应数据修改时运行
beforeUpdate => onBeforeUpdate:：数据更新时调用，发生在虚拟DOM打补丁之前。
updated => onUpdated：因数据更改导致的虚拟DOM重新渲染和打补丁时调用
### 元素销毁前执行
beforeDestroy => onBeforeUnmount：在卸载组件实例之前调用，此阶段的实例依旧是正常的
destroyed => onUnmount
### 管理Keep-Alive组件
activated => onActivated：被keep-alive缓存的组件激活时调用
deactivated => onDeactivated：被keep-alive缓存的组件停用时调用
### 错误时被调用
errorCaptured => onErrorCaptured：当捕获一个来自子孙组件的错误时被调用，有三个参数：错误对象、发生错误的组件实例、一个包含错误来源信息的字符串；此钩子会返回false来阻止改错误继续向上传播。
### vue3 Debug Hooks
onRenderTriggered
onRenderTracked