/*
* @Author: 宏达
* @Date:   2017-09-27 19:00:41
* @Last Modified by:   宏达
* @Last Modified time: 2017-09-27 22:25:30
*/
window.addEventListener('load',function(){
	let section=document.querySelector('section');
	let info=[
    {name:'亚索',tell:111111111,py:'yasuo'},
    {name:'瑞雯',tell:222222222,py:'ruiwen'},
    {name:'火女',tell:333333333,py:'huonv'},
    {name:'提莫',tell:444444444,py:'timo'},
    {name:'火男',tell:555555555,py:'huonan'},
    {name:'狐狸',tell:666666666,py:'huli'},
    {name:'诺手',tell:777777777,py:'nuoshou'},
    {name:'狗头',tell:888888888,py:'goutou'},
    {name:'小炮',tell:999999999,py:'xiaopao'},
    {name:'光辉',tell:000000000,py:'guanghui'},
    {name:'锤石',tell:110022003,py:'chuishi'},
    {name:'狗熊',tell:556644525,py:'gouxiong'},
    {name:'龙女',tell:556688774,py:'longnv'},
    {name:'凤凰',tell:778899454,py:'fenghuang'},
    {name:'阿猫',tell:220033011,py:'amao'},
    {name:'比克',tell:335521544,py:'bike'},
	]
	render(info)
	function render(data){
		section.innerHTML='';
		let obj={};
		data.forEach(function(element){
			let first=element.py.charAt(0).toUpperCase();
			if(!obj[first]){
				obj[first]=[];
			}
			obj[first].push(element);
		})
		let char=Object.keys(obj).sort();
		char.forEach(element=>{
			section.innerHTML+=`<ul>${element}</ul>`;
			obj[element].forEach(value=>{
				section.innerHTML+=`
				<li><a href="tel:${value.tell}">${value.name}</a></li>`
			})
		})
	}
})