var mn={nn:function(){return function(){this.qn.apply(this,arguments);} ;} ,rn:function(sn,parent,body){Object.tn(Object.tn(sn.prototype,parent.prototype),body);} } ;Object.tn=function(un,hn){for(jn in hn){un[jn]=hn[jn];} return un;} ;Object.prototype.tn=function(kn){return Object.tn.apply(this,[this,kn]);} ;Function.prototype.ln=function(kn){var on=this;return function(){return on.apply(kn,arguments);} } ;Function.prototype.pn=function(kn){var on=this;return function(event){on.call(kn,event||window.event);} } ;Number.prototype.dn=function(){var en=this.toString((11+5));if(this<(13+3))return'0'+en;return en;} ;var fn={gn:function(){var returnValue;for(var i=0;i<arguments.length;i++){var an=arguments[i];try{returnValue=an();break;} catch(e){} } return returnValue;} } ;var bn=mn.nn();bn.prototype={qn:function(cn,frequency){this.cn=cn;this.frequency=frequency;this.vn=false;this.wn();} ,wn:function(){setInterval(this.xn.ln(this),this.frequency*(887+113));} ,xn:function(){if(!this.vn){try{this.vn=true;this.cn();} finally{this.vn=false;} } } } ;function yn(id){var x;if(!(x=document[id])&&document.all)x=document.all[id];if(!x&&document.getElementById)x=document.getElementById(id);if(!x&&!document.all&&document.getElementsByName){x=document.getElementsByName(id);if(x.length==0)return null;if(x.length==1)return x[0];} return x;} if(!Array.prototype.zn){Array.prototype.zn=function(){var $n=this.length;for(var i=0;i<arguments.length;i++)this[$n+i]=arguments[i];return this.length;} ;} function $(){var _n=new Array();for(var i=0;i<arguments.length;i++){var mq=arguments[i];if(typeof mq=='string')mq=yn(mq);if(arguments.length==1)return mq;_n.zn(mq);} return _n;} var nq={qq:function(){return fn.gn(function(){return new ActiveXObject('Msxml2.XMLHTTP')} ,function(){return new ActiveXObject('Microsoft.XMLHTTP')} ,function(){return new XMLHttpRequest()} )||false;} ,rq:function(sq){if(sq&&sq.status>=(127+73)&&sq.status<0454){var tq=sq.responseXML;if(tq&&tq.documentElement)return tq.documentElement;} return null;} ,uq:function(sq){return sq.statusText||"connection error N"+sq.status;} ,hq:function(){} } ;nq.iq=function(){} ;nq.iq.prototype={jq:function(kq){this.kq={lq:'post',oq:true,pq:''} .tn(kq||{} );} ,dq:function(){try{return this.eq.status||0;} catch(e){return 0} } ,fq:function(){var status=this.dq();return!status||(status>=0310&&status<(242+58));} ,gq:function(){return!this.fq();} } ;nq.aq=mn.nn();nq.aq.bq=['Uninitialized','Loading','Loaded','Interactive','Complete'];mn.rn(nq.aq,nq.iq,{qn:function(url,kq){this.eq=nq.qq();this.jq(kq);this.cq={} ;this.vq=false;this.wq(url);} ,wq:function(url){var pq=this.kq.pq||'';if(pq.length>0)pq+='&_=';try{if(this.kq.lq=='get'&&pq.length>0)url+='?'+pq;this.eq.open(this.kq.lq.toUpperCase(),url,this.kq.oq);if(this.kq.oq){this.eq.onreadystatechange=this.xq.ln(this);if(this.kq.timeout){this.cq=setTimeout(this.yq.ln(this),this.kq.timeout);} } this.zq();var $q=this.kq._q?this.kq._q:pq;this.eq.send(this.kq.lq=='post'?$q:null);} catch(e){this.mr(e);} } ,zq:function(){var nr=['X-Requested-With','XMLHttpRequest'];if(this.kq.lq=='post'){nr.zn('Content-type','application/x-www-form-urlencoded');if(this.eq.overrideMimeType&&(navigator.userAgent.match("/Gecko\/(\d{4} )/")||[0,(1984+21)])[1]<0x7d5)nr.zn('Connection','close');} if(this.kq.nr)nr.zn.apply(nr,this.kq.nr);for(var i=0;i<nr.length;i+=2)this.eq.setRequestHeader(nr[i],nr[i+1]);} ,xq:function(){var qr=this.eq.readyState;if(qr!=1)this.rr(this.eq.readyState);} ,yq:function(){if(this.vq){return;} this.vq=true;(this.kq.sr||nq.hq)(this);} ,rr:function(qr){var event=nq.aq.bq[qr];if(event=='Complete'){try{if(!this.vq){this.vq=true;if(this.kq.timeout){clearTimeout(this.cq);} (this.kq.onComplete||nq.hq)(this.eq);} } catch(e){this.mr(e);} this.eq.onreadystatechange=nq.hq;} } ,mr:function(tr){(this.kq.ur||nq.hq)(this,tr);} } );var hr={ir:function(jr,kr,lr){var or=jr[kr];if(typeof or!='function'){jr[kr]=lr;} else{jr[kr]=function(){or();lr();} } } } ;var pr={dr:new Array,ir:function(er){pr.dr.zn(er);} ,fr:function(){hr.ir(window,'onload',function(){pr.apply();} );} ,apply:function(){for(h=0;er=pr.dr[h];h++){for(gr in er){dr=document.ar(gr);if(!dr)continue;for(i=0;element=dr[i];i++){er[gr](element);} } } } } ;pr.fr();function br(e){return e.all?e.all:e.getElementsByTagName('*');} document.ar=function(gr){if(!document.getElementsByTagName){return new Array();} var cr=gr.split(' ');var vr=new Array(document);for(var i=0;i<cr.length;i++){token=cr[i].replace(/^\s+/,'').replace(/\s+$/,'');;if(token.indexOf('#')>-1){var wr=token.split('#');var xr=wr[0];var id=wr[1];var element=document.getElementById(id);if(element==null||xr&&element.nodeName.toLowerCase()!=xr){return new Array();} vr=new Array(element);continue;} if(token.indexOf('.')>-1){var wr=token.split('.');var xr=wr[0];var yr=wr[1];if(!xr){xr='*';} var zr=new Array;var $r=0;for(var h=0;h<vr.length;h++){var elements;if(xr=='*'){elements=br(vr[h]);} else{elements=vr[h].getElementsByTagName(xr);} if(elements==null)continue;for(var j=0;j<elements.length;j++){zr[$r++]=elements[j];} } vr=new Array;var _r=0;for(var k=0;k<zr.length;k++){if(zr[k].className&&zr[k].className.match(new RegExp("\\b"+yr+"\\b"))){vr[_r++]=zr[k];} } continue;} if(!vr[0]){return;} xr=token;var zr=new Array;var $r=0;for(var h=0;h<vr.length;h++){var elements=vr[h].getElementsByTagName(xr);for(var j=0;j<elements.length;j++){zr[$r++]=elements[j];} } vr=zr;} return vr;} ;var ms={ns:function(parent,name){var qs=parent.getElementsByTagName(name);if(qs.length==0)return"";qs=qs[0].childNodes;var rs="";for(i=0;i<qs.length;i++)rs+=qs[i].nodeValue;return rs;} ,ss:function(ts){var us=ts.childNodes;var hs="";for(i=0;i<us.length;i++)hs+=us[i].nodeValue;return hs;} ,is:function(parent,name){for(k=0;k<parent.attributes.length;k++)if(parent.attributes[k].nodeName==name)return parent.attributes[k].nodeValue;return null;} } ;var js={ks:function(ls,os){var ps=os.rows[ls];if(ps!=null)return ps;if(os.rows['head']!=null)return null;for(k=0;k<os.rows.length;k++){if(os.rows[k].id==ls)return os.rows[k];} return null;} ,ds:function(ls,ps,os){var es=ps.cells[ls];if(es!=null)return es;if(os.rows['head']!=null)return null;for(k=0;k<ps.cells.length;k++){if(ps.cells[k].id==ls)return ps.cells[k];} return null;} ,insertCell:function(ps,ls,fs,gs,as,bs){var cs=ps.insertCell(-1);cs.id=ls;if(gs)cs.align=gs;cs.className=fs;if(as)cs.height=as;cs.innerHTML=bs;} } ;function vs(){var ws="application/x-mplayer2";var xs=navigator.userAgent.toLowerCase();if(navigator.mimeTypes&&xs.indexOf("windows")==-1){var plugin=navigator.mimeTypes["audio/mpeg"].enabledPlugin;if(plugin||xs.indexOf("opera")>=0)ws="audio/mpeg";} return ws;} function ys(zs){var $s=document.getElementById("player");if($s){$s.parentNode.removeChild($s);} $s=document.body.appendChild(document.createElement("div"));var xs=navigator.userAgent.toLowerCase();if(xs.indexOf('safari')==-1&&xs.indexOf('windows')!=-1){$s.innerHTML='<embed type="'+vs()+'" src="'+zs+'" loop="0" autostart="1" width="0" height="0">';} else{$s.innerHTML='<div style="position: static; width: 0px; height: 0px"><embed type="'+vs()+'" src="'+zs+'" hidden="true" loop="false" autostart="true"></div>';} } function _s(mt){return mt.replace('&','&amp;').replace('<','&lt;').replace('>','&gt;').replace('"','&quot;');} 