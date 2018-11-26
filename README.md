# `css3动画`

### `直接热身，来一个图形形状的变化`

```
<div className='mybox'</div>
```

```
.mybox {
  width: 300px;
  height: 300px;
  border: 1px solid black;
  border-radius: 50%;
  animation: myanimation 5s;
}

@keyframes myanimation {
  from {
    background: #61dafb;
  }
  to {
    border-radius: 0%;
    background: red;
  }
}
```
可以看到图形从圆形变成了正方形。


### `CSS3动画是什么？`

动画是使元素从一种样式逐渐变化为另一种样式的效果。

您可以改变任意多的样式任意多的次数。

请用百分比来规定变化发生的时间，或用关键词 "from" 和 "to"，等同于 0% 和 100%。

0% 是动画的开始，100% 是动画的完成。

为了得到最佳的浏览器支持，您应该始终定义 0% 和 100% 选择器。

为了兼容性，必须熟练掌握一下浏览器的样式。

```
@-moz-*	Firefox
@-webkit-*	Safari and Chrome
@-o-*		Opera
@-ms-*		IE9
```

##### `改变元素的样式和位置`

```
div
{
	width:100px;
	height:100px;
	background:red;
	position:relative;
	animation:myfirst 5s;
	-webkit-animation:myfirst 5s; /* Safari and Chrome */
}

@keyframes myfirst
{
	0%   {background:red; left:0px; top:0px;}
	25%  {background:yellow; left:200px; top:0px;}
	50%  {background:blue; left:200px; top:200px;}
	75%  {background:green; left:0px; top:200px;}
	100% {background:red; left:0px; top:0px;}
}
```
##### `动画属性`

```
@keyframes	规定动画
animation		所有动画属性的简写属性，除了 animation-play-state 属性
animation-name	规定 @keyframes 动画的名称 
animation-duration	规定动画完成一个周期所花费的秒或毫秒,默认是0
animation-timing-function	规定动画的速度曲线。默认是 "ease"  //linear
animation-fill-mode	规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式
animation-delay	规定动画何时开始。默认是0
animation-iteration-count	规定动画被播放的次数。默认是1  //infinite
animation-direction		规定动画是否在下一周期逆向地播放。默认是 "normal" //alternate
animation-play-state	规定动画是否正在运行或暂停。默认是 "running"
```

例:

```
animation: anim 2s ease-in 0s infinite alternate; 
```
# `css3过渡效果`

### `demo`

```
#box2 {
  height: 100px;
  width: 100px;
  border: 1px solid red;
  transition: width 2s;   //表示对宽度进行过渡
}

#box2:hover {
  width: 300px;
}
```

##### `多项改变`

```
div{
	transition: width 2s, height 2s, transform 2s;
}	
```

### `过渡属性`

```
transition	简写属性，用于在一个属性中设置四个过渡属性。
transition-property		规定应用过渡的 CSS 属性的名称。
transition-duration		定义过渡效果花费的时间。默认是 0。
transition-timing-function		规定过渡效果的时间曲线。默认是 "ease"。 //transition-timing-function: linear|ease|ease-in|ease-out|ease-in-out|cubic-bezier(n,n,n,n);
transition-delay		规定过渡效果何时开始。默认是 0。
```

为了兼容性，必须熟练掌握一下浏览器的样式。

```
@-moz-*	Firefox
@-webkit-*	Safari and Chrome
@-o-*		Opera
@-ms-*		IE9
```

# `css3 2D和3D`

### `demo`

```
div
{
	width:200px;
	height:100px;
	background-color:yellow;
	transform:rotate(30deg);
}
```

图片会旋转30度。

### `支持方法`

```
rotate() 	旋转 	//例: scale(30deg)
translate()	x,y的偏移	//例: scale(100px,200px)
scale()	扩大，高度和宽度的扩张 //例: scale(2,3)
skew()		x,y的倾斜角度		//例:skew(30deg,20deg)
rotateX()		x轴旋转
rotateY()		y轴旋转
```



# `三合一`

```
.box {
  height: 100px;
  width: 100px;
  border: 1px solid red;
  background: red;

  transition: animation 2s, background-color 2s;  
  transition-timing-function: ease-in-out; 
  
}

.box:hover {
  background-color:yellow;
  /* width: 500px; */

  animation: anim 2s ease-in 0s infinite alternate; 
}

@keyframes anim {
  from {
    border-radius: 0%;
    transform: rotate(0deg);
  }
  to {
    border-radius: 50%;
    transform: rotate(360deg)
  }
}
```
	
 
# `map和reduce`

```
let classes = ['box', 'box-

// '', box, 0
// box, box-long, 1
let result = classes.reduce((temp, current, index) => { 
            
     return temp + current + '' + index
}, 'start')
console.log(result)
//result : startbox0box-long1

classes = classes.map(e => e + e)
console.log(classes)
//result :  ["boxbox", "box-longbox-long"] 
```
        


	
