/*
	Utils.js
	Copyright (c) 2026 YttriumLab
	
	Released under the MIT License.
	https://opensource.org/licenses/MIT
*/

var Utils={};

/*=======================================================================================
	DOM MANIPULATION
=======================================================================================*/

Utils.l=function(what){return document.getElementById(what);}

Utils.AddEvent=function(el,ev,func)
{
	if(el.addEventListener) {el.addEventListener(ev,func,false);return [el,ev,func];}
	else if(el.attachEvent) {var func2=function(){func.call(el);};el.attachEvent('on'+ev,func2);return [el,ev,func2];}
	return false;
}
Utils.RemoveEvent=function(evObj)
{
	if (!evObj) return false;
	if (evObj[0].removeEventListener) evObj[0].removeEventListener(evObj[1],evObj[2],false);
	else if (evObj[0].detachEvent) evObj[0].detachEvent('on'+evObj[1],evObj[2]);
	return true;
}

/*=======================================================================================
	TEXT EDITING
=======================================================================================*/

Utils.EscapeRegExp=function(str){return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");}
Utils.ReplaceAll=function(find,replace,str){return str.replace(new RegExp(Utils.EscapeRegExp(find),'g'),replace);}

Utils.Lig=function(str)
{
	var result=str;
	
	result=Utils.ReplaceAll('ffi','&#xFB03;',result);
	result=Utils.ReplaceAll('ffl','&#xFB04;',result);
	result=Utils.ReplaceAll('fi','&#xFB01;',result);
	result=Utils.ReplaceAll('fl','&#xFB02;',result);
	result=Utils.ReplaceAll('ff','&#xFB00;',result);
	
	return result;
}

Utils.utf8_to_b64=function(str)
{
	try
	{
		return btoa(encodeURIComponent(str).replace(
			/%([0-9A-F]{2})/g,function(match, p1)
			{
				return String.fromCharCode(parseInt(p1,16))
			})
		);
	}
	catch(err)
	{return '';}
}

Utils.b64_to_utf8=function(str)
{
	try
	{
		return decodeURIComponent(Array.prototype.map.call(
			atob(str),function(c)
			{
				return '%'+('00'+c.charCodeAt(0).toString(16)).slice(-2)
			}).join('')
		);
	}
	catch(err)
	{return '';}
}

/*=======================================================================================
	USEFUL TOOLS
=======================================================================================*/

Utils.choose=function(arr){return arr[Math.floor(Math.random()*arr.length)];}

Utils.Romanize=function(num)
{
	if (isNaN(num))
		return NaN;
	var digits=String(+num).split(''),
		key=
		[
			'','C','CC','CCC','CD','D','DC','DCC','DCCC','CM',
			'','X','XX','XXX','XL','L','LX','LXX','LXXX','XC',
			'','I','II','III','IV','V','VI','VII','VIII','IX',
		],
		roman='',
		i=3;
		while(i--)
			roman=(key[+digits.pop()+(i*10)]||'')+roman;
			return Array(+digits.join('')+1).join('M')+roman;
}
