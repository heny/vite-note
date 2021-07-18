# JS设计模式

## Object.defineProperty实现深度监听 （观察者模式）

```js
function update(){
    console.log("更新视图")
}
let obj={
    name:{n:200}
}
let oldProto=Array.prototype
//获取原有的数组方法
let proto = Objeact.create(oldProto) //proto继承原生方法 防止篡改原生方法
//重写数组里的变异方法
["push","shift"].forEach(()=>{
    proto[item]=function(){
        update() //加了自己的逻辑
        oldProto[item].apply(this,arguments) //调用了原来的逻辑
    }
})
function observer(value){ //观察者 观察obj 使obj重写defineProperty的形式
    //变异方法 push pop shift unshift reverse sort splice
    if(Array.isArray(value)){
        return value.__proto__=proto //value的原型链指向自己定义好的proto
    }
    if( typeof value!=="object"){return value} //不是对象就返回
    //循环obj 把属性和对象重新定义
    for(let key in value){
        defineReactive(value ,key ,value[key]) //定义响应式
    }
}
function defineReactive(obj ,key ,value){
    // obj要定义属性的对象。
    //  prop  要定义或修改的属性的名称或 Symbol 。 
    // descriptor   要定义或修改的属性描述符。

    //如果是对象，继续增加 setter和getter 递归
    observer(value)
    Object.defineProperty(obj,key,{
        get(){
            return value
        }, 
        set(newValue){
            
            if (value !== newValue){
                observer(newValue) //深度监控
                value=newValue
                update()
            }
            
        }
    })
}
observer(obj)
//obj.name.n=500 //数据变了需要更新视图
obj.name={n:200} //数据变了需要更新视图 因为这个对象没有getter和setter
obj.name.n=100
```



## 简易的观察者模式

```js
class Subject {
  observers = []

  addObserver(observer) {
    this.observers.push(observer)
  }
  removeObserver(observer) {
    let index = this.observers.indexOf(observer)
    if(index > -1){
      this.observers.splice(index, 1)
    }
  }
  notify() {
    this.observers.forEach(observer => {
      observer.update()
    })
  }
}


class Observer{
  update() {}
  subscribeTo(subject) {
    subject.addObserver(this)
  }
} 
let subject = new Subject()
let observer = new Observer()
observer.update = function() {
  console.log('observer update')
}
observer.subscribeTo(subject)  //观察者订阅主题

subject.notify()
```



## 发布订阅模式

```js
function Even(){
  // 声明一个空对象，用于存储值;
  this.eventBus = {}
}
// on用来监听一个事件，并传入两个参数，一个是事件名，一个是回调函数;
Even.prototype.on = function(eventname,callback){
  // 判断该函数里的事件名是否存在
  if(this.eventBus[eventname]){
    // 如果存在则新增一个方法;
    this.eventBus[eventname].push(callback)
  } else {
    // 如果不存在则使用数组方式存入一个事件;
    this.eventBus[eventname] = [callback]
  }
}
// emit用来触发一个事件,一个是触发的事件名,第二个是传入的参数;
Even.prototype.emit = function(eventname,...args){
  // emit用来监听一个事件的触发
  if(this.eventBus[eventname]){
    // 如果有该事件，则循环该事件并执行该事件
    this.eventBus[eventname].map(item=>item(...args))
  }
}
```

