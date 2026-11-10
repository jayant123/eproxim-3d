var Za="160";var Ka=0,Po=1,Ja=2;var pr=1,$a=2,fi=3,Kt=0,gt=1,Lt=2;var ri=0,wi=1,Do=2,Uo=3,Io=4,Qa=5,Ri=100,es=101,ts=102,No=103,Fo=104,is=200,ns=201,rs=202,os=203,$n=204,Qn=205,as=206,ss=207,ls=208,cs=209,us=210,fs=211,hs=212,ds=213,ps=214,ms=0,gs=1,_s=2,fn=3,xs=4,vs=5,Ms=6,Ss=7,mr=0,Es=1,ys=2,oi=0,Ts=1,bs=2,As=3,ws=4,Rs=5,Cs=6;var Oo=300,hi=301,Si=302,er=303,tr=304,Bi=306,ir=1e3,Wt=1001,nr=1002,Mt=1003,Bo=1004;var gr=1005;var Et=1006,Ls=1007;var di=1008;var Jt=1009,Ps=1010,Ds=1011,hn=1012,_r=1013,$t=1014,Qt=1015,Ci=1016,xr=1017,vr=1018,ai=1020,Us=1021,Ft=1023,Is=1024,Ns=1025,pi=1026,Ei=1027,Fs=1028,Mr=1029,Os=1030,Sr=1031,Er=1033,yr=33776,Tr=33777,br=33778,Ar=33779,Go=35840,zo=35841,Ho=35842,Vo=35843,wr=36196,ko=37492,Wo=37496,Xo=37808,qo=37809,Yo=37810,jo=37811,Zo=37812,Ko=37813,Jo=37814,$o=37815,Qo=37816,ea=37817,ta=37818,ia=37819,na=37820,ra=37821,Rr=36492,oa=36494,aa=36495,Bs=36283,sa=36284,la=36285,ca=36286;var Cr=3e3,mi=3001,Gs=3200,zs=3201,Hs=0,Vs=1,Pt="",mt="srgb",Ot="srgb-linear",dn="display-p3",$i="display-p3-linear",pn="linear",at="srgb",mn="rec709",gn="p3";var Qi=7680;var ua=519,ks=512,Ws=513,Xs=514,Lr=515,qs=516,Ys=517,js=518,Zs=519,fa=35044;var ha="300 es",rr=1035,qt=2e3,en=2001;var Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Pr=Math.PI/180,or=180/Math.PI;function yi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function yt(i,e,t){return Math.max(e,Math.min(t,i))}function Ks(i,e){return(i%e+e)%e}function Dr(i,e,t){return(1-t)*i+t*e}function da(i){return(i&i-1)===0&&i!==0}function ar(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _n(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ge=class i{constructor(e,t,n,r,o,s,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c)}set(e,t,n,r,o,s,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=o,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],p=n[2],m=n[5],g=n[8],M=r[0],d=r[3],f=r[6],b=r[1],x=r[4],A=r[7],D=r[2],L=r[5],R=r[8];return o[0]=s*M+a*b+l*D,o[3]=s*d+a*x+l*L,o[6]=s*f+a*A+l*R,o[1]=c*M+u*b+h*D,o[4]=c*d+u*x+h*L,o[7]=c*f+u*A+h*R,o[2]=p*M+m*b+g*D,o[5]=p*d+m*x+g*L,o[8]=p*f+m*A+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*a*c-n*o*u+n*a*l+r*o*c-r*s*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*s-a*c,p=a*l-u*o,m=c*o-s*l,g=t*h+n*p+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return e[0]=h*M,e[1]=(r*c-u*n)*M,e[2]=(a*n-r*s)*M,e[3]=p*M,e[4]=(u*t-r*l)*M,e[5]=(r*o-a*t)*M,e[6]=m*M,e[7]=(n*l-c*t)*M,e[8]=(s*t-n*o)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,s,a){let l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(pa.makeScale(e,t)),this}rotate(e){return this.premultiply(pa.makeRotation(-e)),this}translate(e,t){return this.premultiply(pa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},pa=new Ge;var Js=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$s=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ur={[Ot]:{transfer:pn,primaries:mn,toReference:i=>i,fromReference:i=>i},[mt]:{transfer:at,primaries:mn,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[$i]:{transfer:pn,primaries:gn,toReference:i=>i.applyMatrix3($s),fromReference:i=>i.applyMatrix3(Js)},[dn]:{transfer:at,primaries:gn,toReference:i=>i.convertSRGBToLinear().applyMatrix3($s),fromReference:i=>i.applyMatrix3(Js).convertLinearToSRGB()}},ah=new Set([Ot,$i]),Qe={enabled:!0,_workingColorSpace:Ot,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!ah.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Ur[e].toReference,r=Ur[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ur[i].primaries},getTransfer:function(i){return i===Pt?pn:Ur[i].transfer}};function Gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ir(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Qs={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},Nr={h:0,s:0,l:0};function ma(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Qe.workingColorSpace){if(e=Ks(e,1),t=yt(t,0,1),n=yt(n,0,1),t===0)this.r=this.g=this.b=n;else{let o=n<=.5?n*(1+t):n+t-n*t,s=2*n-o;this.r=ma(s,o,e+1/3),this.g=ma(s,o,e),this.b=ma(s,o,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,t=mt){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o,s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mt){let n=Qs[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mt){return Qe.fromWorkingColorSpace(Vt.copy(this),e),Math.round(yt(Vt.r*255,0,255))*65536+Math.round(yt(Vt.g*255,0,255))*256+Math.round(yt(Vt.b*255,0,255))}getHexString(e=mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Vt.copy(this),t);let n=Vt.r,r=Vt.g,o=Vt.b,s=Math.max(n,r,o),a=Math.min(n,r,o),l,c,u=(a+s)/2;if(a===s)l=0,c=0;else{let h=s-a;switch(c=u<=.5?h/(s+a):h/(2-s-a),s){case n:l=(r-o)/h+(r<o?6:0);break;case r:l=(o-n)/h+2;break;case o:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=mt){Qe.fromWorkingColorSpace(Vt.copy(this),e);let t=Vt.r,n=Vt.g,r=Vt.b;return e!==mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(Nr);let n=Dr(zi.h,Nr.h,t),r=Dr(zi.s,Nr.s,t),o=Dr(zi.l,Nr.l,t);return this.setHSL(n,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*r,this.g=o[1]*t+o[4]*n+o[7]*r,this.b=o[2]*t+o[5]*n+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vt=new Ze;Ze.NAMES=Qs;var bi=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,s,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],p=o[s+0],m=o[s+1],g=o[s+2],M=o[s+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=p,e[t+1]=m,e[t+2]=g,e[t+3]=M;return}if(h!==M||l!==p||c!==m||u!==g){let d=1-a,f=l*p+c*m+u*g+h*M,b=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){let D=Math.sqrt(x),L=Math.atan2(D,f*b);d=Math.sin(d*L)/D,a=Math.sin(a*L)/D}let A=a*b;if(l=l*d+p*A,c=c*d+m*A,u=u*d+g*A,h=h*d+M*A,d===1-a){let D=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=D,c*=D,u*=D,h*=D}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,o,s){let a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=o[s],p=o[s+1],m=o[s+2],g=o[s+3];return e[t]=a*g+u*h+l*m-c*p,e[t+1]=l*g+u*p+c*h-a*m,e[t+2]=c*g+u*m+a*p-l*h,e[t+3]=u*g-a*h-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(o/2),p=l(n/2),m=l(r/2),g=l(o/2);switch(s){case"XYZ":this._x=p*u*h+c*m*g,this._y=c*m*h-p*u*g,this._z=c*u*g+p*m*h,this._w=c*u*h-p*m*g;break;case"YXZ":this._x=p*u*h+c*m*g,this._y=c*m*h-p*u*g,this._z=c*u*g-p*m*h,this._w=c*u*h+p*m*g;break;case"ZXY":this._x=p*u*h-c*m*g,this._y=c*m*h+p*u*g,this._z=c*u*g+p*m*h,this._w=c*u*h-p*m*g;break;case"ZYX":this._x=p*u*h-c*m*g,this._y=c*m*h+p*u*g,this._z=c*u*g-p*m*h,this._w=c*u*h+p*m*g;break;case"YZX":this._x=p*u*h+c*m*g,this._y=c*m*h+p*u*g,this._z=c*u*g-p*m*h,this._w=c*u*h-p*m*g;break;case"XZY":this._x=p*u*h-c*m*g,this._y=c*m*h-p*u*g,this._z=c*u*g+p*m*h,this._w=c*u*h+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],o=t[8],s=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],p=n+a+h;if(p>0){let m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(u-l)*m,this._y=(o-c)*m,this._z=(s-r)*m}else if(n>a&&n>h){let m=2*Math.sqrt(1+n-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(o+c)/m}else if(a>h){let m=2*Math.sqrt(1+a-n-h);this._w=(o-c)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+u)/m}else{let m=2*Math.sqrt(1+h-n-a);this._w=(s-r)/m,this._x=(o+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,o=e._z,s=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*a+r*c-o*l,this._y=r*u+s*l+o*a-n*c,this._z=o*u+s*c+n*l-r*a,this._w=s*u-n*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,o=this._z,s=this._w,a=s*e._w+n*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=n,this._y=r,this._z=o,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-t;return this._w=m*s+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*o+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=s*h+this._w*p,this._x=n*h+this._x*p,this._y=r*h+this._y*p,this._z=o*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(o),n*Math.cos(o),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};var N=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(el.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(el.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*s,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*r-a*n),u=2*(a*t-o*r),h=2*(o*n-s*t);return this.x=t+l*c+s*h-a*u,this.y=n+l*u+a*c-o*h,this.z=r+l*h+o*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,o=e.z,s=t.x,a=t.y,l=t.z;return this.x=r*l-o*a,this.y=o*s-n*l,this.z=n*a-r*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ga.copy(this).projectOnVector(e),this.sub(ga)}reflect(e){return this.sub(ga.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ga=new N,el=new bi;var Pi=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,gi):gi.fromBufferAttribute(o,s),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fr.copy(n.boundingBox)),Fr.applyMatrix4(e.matrixWorld),this.union(Fr)}let r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sr),Or.subVectors(this.max,sr),xn.subVectors(e.a,sr),vn.subVectors(e.b,sr),Mn.subVectors(e.c,sr),Hi.subVectors(vn,xn),Vi.subVectors(Mn,vn),tn.subVectors(xn,Mn);let t=[0,-Hi.z,Hi.y,0,-Vi.z,Vi.y,0,-tn.z,tn.y,Hi.z,0,-Hi.x,Vi.z,0,-Vi.x,tn.z,0,-tn.x,-Hi.y,Hi.x,0,-Vi.y,Vi.x,0,-tn.y,tn.x,0];return!_a(t,xn,vn,Mn,Or)||(t=[1,0,0,0,1,0,0,0,1],!_a(t,xn,vn,Mn,Or))?!1:(Br.crossVectors(Hi,Vi),t=[Br.x,Br.y,Br.z],_a(t,xn,vn,Mn,Or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Li=[new N,new N,new N,new N,new N,new N,new N,new N],gi=new N,Fr=new Pi,xn=new N,vn=new N,Mn=new N,Hi=new N,Vi=new N,tn=new N,sr=new N,Or=new N,Br=new N,nn=new N;function _a(i,e,t,n,r){for(let o=0,s=i.length-3;o<=s;o+=3){nn.fromArray(i,o);let a=r.x*Math.abs(nn.x)+r.y*Math.abs(nn.y)+r.z*Math.abs(nn.z),l=e.dot(nn),c=t.dot(nn),u=n.dot(nn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var sh=new Pi,lr=new N,xa=new N,Ai=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):sh.setFromPoints(e).getCenter(n);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lr.subVectors(e,this.center);let t=lr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(lr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lr.copy(e.center).add(xa)),this.expandByPoint(lr.copy(e.center).sub(xa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};var va=new N,lh=new N,ch=new Ge,_i=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=va.subVectors(n,t).cross(lh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(va),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ch.getNormalMatrix(e),r=this.coplanarPoint(va).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};var rn=new Ai,Gr=new N,Sn=class{constructor(e=new _i,t=new _i,n=new _i,r=new _i,o=new _i,s=new _i){this.planes=[e,t,n,r,o,s]}set(e,t,n,r,o,s){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qt){let n=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],p=r[7],m=r[8],g=r[9],M=r[10],d=r[11],f=r[12],b=r[13],x=r[14],A=r[15];if(n[0].setComponents(l-o,p-c,d-m,A-f).normalize(),n[1].setComponents(l+o,p+c,d+m,A+f).normalize(),n[2].setComponents(l+s,p+u,d+g,A+b).normalize(),n[3].setComponents(l-s,p-u,d-g,A-b).normalize(),n[4].setComponents(l-a,p-h,d-M,A-x).normalize(),t===qt)n[5].setComponents(l+a,p+h,d+M,A+x).normalize();else if(t===en)n[5].setComponents(a,h,M,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rn)}intersectsSprite(e){return rn.center.set(0,0,0),rn.radius=.7071067811865476,rn.applyMatrix4(e.matrixWorld),this.intersectsSphere(rn)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Gr.x=r.normal.x>0?e.max.x:e.min.x,Gr.y=r.normal.y>0?e.max.y:e.min.y,Gr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Gr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ht=class i{constructor(e,t,n,r,o,s,a,l,c,u,h,p,m,g,M,d){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c,u,h,p,m,g,M,d)}set(e,t,n,r,o,s,a,l,c,u,h,p,m,g,M,d){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=o,f[5]=s,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=p,f[3]=m,f[7]=g,f[11]=M,f[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/En.setFromMatrixColumn(e,0).length(),o=1/En.setFromMatrixColumn(e,1).length(),s=1/En.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,o=e.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(o),h=Math.sin(o);if(e.order==="XYZ"){let p=s*u,m=s*h,g=a*u,M=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=p-M*c,t[9]=-a*l,t[2]=M-p*c,t[6]=g+m*c,t[10]=s*l}else if(e.order==="YXZ"){let p=l*u,m=l*h,g=c*u,M=c*h;t[0]=p+M*a,t[4]=g*a-m,t[8]=s*c,t[1]=s*h,t[5]=s*u,t[9]=-a,t[2]=m*a-g,t[6]=M+p*a,t[10]=s*l}else if(e.order==="ZXY"){let p=l*u,m=l*h,g=c*u,M=c*h;t[0]=p-M*a,t[4]=-s*h,t[8]=g+m*a,t[1]=m+g*a,t[5]=s*u,t[9]=M-p*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){let p=s*u,m=s*h,g=a*u,M=a*h;t[0]=l*u,t[4]=g*c-m,t[8]=p*c+M,t[1]=l*h,t[5]=M*c+p,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){let p=s*l,m=s*c,g=a*l,M=a*c;t[0]=l*u,t[4]=M-p*h,t[8]=g*h+m,t[1]=h,t[5]=s*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+g,t[10]=p-M*h}else if(e.order==="XZY"){let p=s*l,m=s*c,g=a*l,M=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=p*h+M,t[5]=s*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=a*u,t[10]=M*h+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uh,e,fh)}lookAt(e,t,n){let r=this.elements;return ei.subVectors(e,t),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),ki.crossVectors(n,ei),ki.lengthSq()===0&&(Math.abs(n.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),ki.crossVectors(n,ei)),ki.normalize(),zr.crossVectors(ei,ki),r[0]=ki.x,r[4]=zr.x,r[8]=ei.x,r[1]=ki.y,r[5]=zr.y,r[9]=ei.y,r[2]=ki.z,r[6]=zr.z,r[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],p=n[9],m=n[13],g=n[2],M=n[6],d=n[10],f=n[14],b=n[3],x=n[7],A=n[11],D=n[15],L=r[0],R=r[4],F=r[8],S=r[12],T=r[1],O=r[5],K=r[9],W=r[13],P=r[2],G=r[6],X=r[10],J=r[14],Y=r[3],q=r[7],j=r[11],ee=r[15];return o[0]=s*L+a*T+l*P+c*Y,o[4]=s*R+a*O+l*G+c*q,o[8]=s*F+a*K+l*X+c*j,o[12]=s*S+a*W+l*J+c*ee,o[1]=u*L+h*T+p*P+m*Y,o[5]=u*R+h*O+p*G+m*q,o[9]=u*F+h*K+p*X+m*j,o[13]=u*S+h*W+p*J+m*ee,o[2]=g*L+M*T+d*P+f*Y,o[6]=g*R+M*O+d*G+f*q,o[10]=g*F+M*K+d*X+f*j,o[14]=g*S+M*W+d*J+f*ee,o[3]=b*L+x*T+A*P+D*Y,o[7]=b*R+x*O+A*G+D*q,o[11]=b*F+x*K+A*X+D*j,o[15]=b*S+x*W+A*J+D*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],p=e[10],m=e[14],g=e[3],M=e[7],d=e[11],f=e[15];return g*(+o*l*h-r*c*h-o*a*p+n*c*p+r*a*m-n*l*m)+M*(+t*l*m-t*c*p+o*s*p-r*s*m+r*c*u-o*l*u)+d*(+t*c*h-t*a*m-o*s*h+n*s*m+o*a*u-n*c*u)+f*(-r*a*u-t*l*h+t*a*p+r*s*h-n*s*p+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],p=e[10],m=e[11],g=e[12],M=e[13],d=e[14],f=e[15],b=h*d*c-M*p*c+M*l*m-a*d*m-h*l*f+a*p*f,x=g*p*c-u*d*c-g*l*m+s*d*m+u*l*f-s*p*f,A=u*M*c-g*h*c+g*a*m-s*M*m-u*a*f+s*h*f,D=g*h*l-u*M*l-g*a*p+s*M*p+u*a*d-s*h*d,L=t*b+n*x+r*A+o*D;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/L;return e[0]=b*R,e[1]=(M*p*o-h*d*o-M*r*m+n*d*m+h*r*f-n*p*f)*R,e[2]=(a*d*o-M*l*o+M*r*c-n*d*c-a*r*f+n*l*f)*R,e[3]=(h*l*o-a*p*o-h*r*c+n*p*c+a*r*m-n*l*m)*R,e[4]=x*R,e[5]=(u*d*o-g*p*o+g*r*m-t*d*m-u*r*f+t*p*f)*R,e[6]=(g*l*o-s*d*o-g*r*c+t*d*c+s*r*f-t*l*f)*R,e[7]=(s*p*o-u*l*o+u*r*c-t*p*c-s*r*m+t*l*m)*R,e[8]=A*R,e[9]=(g*h*o-u*M*o-g*n*m+t*M*m+u*n*f-t*h*f)*R,e[10]=(s*M*o-g*a*o+g*n*c-t*M*c-s*n*f+t*a*f)*R,e[11]=(u*a*o-s*h*o-u*n*c+t*h*c+s*n*m-t*a*m)*R,e[12]=D*R,e[13]=(u*M*r-g*h*r+g*n*p-t*M*p-u*n*d+t*h*d)*R,e[14]=(g*a*r-s*M*r-g*n*l+t*M*l+s*n*d-t*a*d)*R,e[15]=(s*h*r-u*a*r+u*n*l-t*h*l-s*n*p+t*a*p)*R,this}scale(e){let t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),o=1-n,s=e.x,a=e.y,l=e.z,c=o*s,u=o*a;return this.set(c*s+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*s,0,c*l-r*a,u*l+r*s,o*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,s){return this.set(1,n,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,o=t._x,s=t._y,a=t._z,l=t._w,c=o+o,u=s+s,h=a+a,p=o*c,m=o*u,g=o*h,M=s*u,d=s*h,f=a*h,b=l*c,x=l*u,A=l*h,D=n.x,L=n.y,R=n.z;return r[0]=(1-(M+f))*D,r[1]=(m+A)*D,r[2]=(g-x)*D,r[3]=0,r[4]=(m-A)*L,r[5]=(1-(p+f))*L,r[6]=(d+b)*L,r[7]=0,r[8]=(g+x)*R,r[9]=(d-b)*R,r[10]=(1-(p+M))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,o=En.set(r[0],r[1],r[2]).length(),s=En.set(r[4],r[5],r[6]).length(),a=En.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],xi.copy(this);let c=1/o,u=1/s,h=1/a;return xi.elements[0]*=c,xi.elements[1]*=c,xi.elements[2]*=c,xi.elements[4]*=u,xi.elements[5]*=u,xi.elements[6]*=u,xi.elements[8]*=h,xi.elements[9]*=h,xi.elements[10]*=h,t.setFromRotationMatrix(xi),n.x=o,n.y=s,n.z=a,this}makePerspective(e,t,n,r,o,s,a=qt){let l=this.elements,c=2*o/(t-e),u=2*o/(n-r),h=(t+e)/(t-e),p=(n+r)/(n-r),m,g;if(a===qt)m=-(s+o)/(s-o),g=-2*s*o/(s-o);else if(a===en)m=-s/(s-o),g=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,o,s,a=qt){let l=this.elements,c=1/(t-e),u=1/(n-r),h=1/(s-o),p=(t+e)*c,m=(n+r)*u,g,M;if(a===qt)g=(s+o)*h,M=-2*h;else if(a===en)g=o*h,M=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=M,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},En=new N,xi=new ht,uh=new N(0,0,0),fh=new N(1,1,1),ki=new N,zr=new N,ei=new N;var Ve=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*n-s*r+e.x,this.y=o*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};var tt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o,l=e.elements,c=l[0],u=l[4],h=l[8],p=l[1],m=l[5],g=l[9],M=l[2],d=l[6],f=l[10];if(Math.abs(u-p)<.01&&Math.abs(h-M)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+p)<.1&&Math.abs(h+M)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,A=(m+1)/2,D=(f+1)/2,L=(u+p)/4,R=(h+M)/4,F=(g+d)/4;return x>A&&x>D?x<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(x),r=L/n,o=R/n):A>D?A<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(A),n=L/r,o=F/r):D<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(D),n=R/o,r=F/o),this.set(n,r,o,t),this}let b=Math.sqrt((d-g)*(d-g)+(h-M)*(h-M)+(p-u)*(p-u));return Math.abs(b)<.001&&(b=1),this.x=(d-g)/b,this.y=(h-M)/b,this.z=(p-u)/b,this.w=Math.acos((c+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};function Hr(){let i=null,e=!1,t=null,n=null;function r(o,s){t(o,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function tl(i,e){let t=e.isWebGL2,n=new WeakMap;function r(c,u){let h=c.array,p=c.usage,m=h.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,h,p),c.onUploadCallback();let M;if(h instanceof Float32Array)M=i.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)M=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=i.SHORT;else if(h instanceof Uint32Array)M=i.UNSIGNED_INT;else if(h instanceof Int32Array)M=i.INT;else if(h instanceof Int8Array)M=i.BYTE;else if(h instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function o(c,u,h){let p=u.array,m=u._updateRange,g=u.updateRanges;if(i.bindBuffer(h,c),m.count===-1&&g.length===0&&i.bufferSubData(h,0,p),g.length!==0){for(let M=0,d=g.length;M<d;M++){let f=g[M];t?i.bufferSubData(h,f.start*p.BYTES_PER_ELEMENT,p,f.start,f.count):i.bufferSubData(h,f.start*p.BYTES_PER_ELEMENT,p.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(h,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):i.bufferSubData(h,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){let p=n.get(c);(!p||p.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);if(h===void 0)n.set(c,r(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(h.buffer,c,u),h.version=c.version}}return{get:s,remove:a,update:l}}var Yt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}};var St=new N,Vr=new Ve,dt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Qt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Vr.fromBufferAttribute(this,t),Vr.applyMatrix3(e),this.setXY(t,Vr.x,Vr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_n(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_n(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_n(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_n(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),r=Xt(r,this.array),o=Xt(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fa&&(e.usage=this.usage),e}};var yn=class extends dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Tn=class extends dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var si=class extends dt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var il=new ht,nl=new bi,cr=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],p=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(yt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-yt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return il.makeRotationFromQuaternion(e),this.setFromRotationMatrix(il,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nl.setFromEuler(this),this.setFromQuaternion(nl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cr.DEFAULT_ORDER="XYZ";var bn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};var hh=0,rl=new N,An=new bi,Di=new ht,kr=new N,ur=new N,dh=new N,ph=new bi,ol=new N(1,0,0),al=new N(0,1,0),sl=new N(0,0,1),mh={type:"added"},gh={type:"removed"},Tt=class i extends Yt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new N,t=new cr,n=new bi,r=new N(1,1,1);function o(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ge}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return An.setFromAxisAngle(e,t),this.quaternion.multiply(An),this}rotateOnWorldAxis(e,t){return An.setFromAxisAngle(e,t),this.quaternion.premultiply(An),this}rotateX(e){return this.rotateOnAxis(ol,e)}rotateY(e){return this.rotateOnAxis(al,e)}rotateZ(e){return this.rotateOnAxis(sl,e)}translateOnAxis(e,t){return rl.copy(e).applyQuaternion(this.quaternion),this.position.add(rl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ol,e)}translateY(e){return this.translateOnAxis(al,e)}translateZ(e){return this.translateOnAxis(sl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?kr.copy(e):kr.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(ur,kr,this.up):Di.lookAt(kr,ur,this.up),this.quaternion.setFromRotationMatrix(Di),r&&(Di.extractRotation(r.matrixWorld),An.setFromRotationMatrix(Di),this.quaternion.premultiply(An.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(mh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gh)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,e,dh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,ph,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++){let o=t[n];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let r=this.children;for(let o=0,s=r.length;o<s;o++){let a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];o(e.shapes,h)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(o(e.animations,l))}}if(t){let a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),h=s(e.shapes),p=s(e.skeletons),m=s(e.animations),g=s(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function s(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};Tt.DEFAULT_UP=new N(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;function Wr(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Wi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cl(){let i=Wi("canvas");return i.style.display="block",i}var ll={};function Xi(i){i in ll||(ll[i]=!0,console.warn(i))}var _h=0,li=new ht,Ma=new Tt,wn=new N,ti=new Pi,fr=new Pi,Dt=new N,Ut=class i extends Yt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wr(e)?Tn:yn)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let o=new Ge().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,n){return li.makeTranslation(e,t,n),this.applyMatrix4(li),this}scale(e,t,n){return li.makeScale(e,t,n),this.applyMatrix4(li),this}lookAt(e){return Ma.lookAt(e),Ma.updateMatrix(),this.applyMatrix4(Ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wn).negate(),this.translate(wn.x,wn.y,wn.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let o=e[n];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new si(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let o=t[n];ti.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){let a=t[o];fr.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(ti.min,fr.min),ti.expandByPoint(Dt),Dt.addVectors(ti.max,fr.max),ti.expandByPoint(Dt)):(ti.expandByPoint(fr.min),ti.expandByPoint(fr.max))}ti.getCenter(n);let r=0;for(let o=0,s=e.count;o<s;o++)Dt.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared(Dt));if(t)for(let o=0,s=t.length;o<s;o++){let a=t[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Dt.fromBufferAttribute(a,c),l&&(wn.fromBufferAttribute(e,c),Dt.add(wn)),r=Math.max(r,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,r=t.position.array,o=t.normal.array,s=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dt(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<a;T++)c[T]=new N,u[T]=new N;let h=new N,p=new N,m=new N,g=new Ve,M=new Ve,d=new Ve,f=new N,b=new N;function x(T,O,K){h.fromArray(r,T*3),p.fromArray(r,O*3),m.fromArray(r,K*3),g.fromArray(s,T*2),M.fromArray(s,O*2),d.fromArray(s,K*2),p.sub(h),m.sub(h),M.sub(g),d.sub(g);let W=1/(M.x*d.y-d.x*M.y);isFinite(W)&&(f.copy(p).multiplyScalar(d.y).addScaledVector(m,-M.y).multiplyScalar(W),b.copy(m).multiplyScalar(M.x).addScaledVector(p,-d.x).multiplyScalar(W),c[T].add(f),c[O].add(f),c[K].add(f),u[T].add(b),u[O].add(b),u[K].add(b))}let A=this.groups;A.length===0&&(A=[{start:0,count:n.length}]);for(let T=0,O=A.length;T<O;++T){let K=A[T],W=K.start,P=K.count;for(let G=W,X=W+P;G<X;G+=3)x(n[G+0],n[G+1],n[G+2])}let D=new N,L=new N,R=new N,F=new N;function S(T){R.fromArray(o,T*3),F.copy(R);let O=c[T];D.copy(O),D.sub(R.multiplyScalar(R.dot(O))).normalize(),L.crossVectors(F,O);let W=L.dot(u[T])<0?-1:1;l[T*4]=D.x,l[T*4+1]=D.y,l[T*4+2]=D.z,l[T*4+3]=W}for(let T=0,O=A.length;T<O;++T){let K=A[T],W=K.start,P=K.count;for(let G=W,X=W+P;G<X;G+=3)S(n[G+0]),S(n[G+1]),S(n[G+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);let r=new N,o=new N,s=new N,a=new N,l=new N,c=new N,u=new N,h=new N;if(e)for(let p=0,m=e.count;p<m;p+=3){let g=e.getX(p+0),M=e.getX(p+1),d=e.getX(p+2);r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,M),s.fromBufferAttribute(t,d),u.subVectors(s,o),h.subVectors(r,o),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,d),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3)r.fromBufferAttribute(t,p+0),o.fromBufferAttribute(t,p+1),s.fromBufferAttribute(t,p+2),u.subVectors(s,o),h.subVectors(r,o),u.cross(h),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,p=new c.constructor(l.length*u),m=0,g=0;for(let M=0,d=l.length;M<d;M++){a.isInterleavedBufferAttribute?m=l[M]*a.data.stride+a.offset:m=l[M]*u;for(let f=0;f<u;f++)p[g++]=c[m++]}return new dt(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let o=this.morphAttributes;for(let a in o){let l=[],c=o[a];for(let u=0,h=c.length;u<h;u++){let p=c[u],m=e(p,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let a=0,l=s.length;a<l;a++){let c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},o=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,p=c.length;h<p;h++){let m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let o=e.morphAttributes;for(let c in o){let u=[],h=o[c];for(let p=0,m=h.length;p<m;p++)u.push(h[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let c=0,u=s.length;c<u;c++){let h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var qi=class i extends Ut{constructor(e=1,t=1,n=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:s};let a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);let l=[],c=[],u=[],h=[],p=0,m=0;g("z","y","x",-1,-1,n,t,e,s,o,0),g("z","y","x",1,-1,n,t,-e,s,o,1),g("x","z","y",1,1,e,n,t,r,s,2),g("x","z","y",1,-1,e,n,-t,r,s,3),g("x","y","z",1,-1,e,t,n,r,o,4),g("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(l),this.setAttribute("position",new si(c,3)),this.setAttribute("normal",new si(u,3)),this.setAttribute("uv",new si(h,2));function g(M,d,f,b,x,A,D,L,R,F,S){let T=A/R,O=D/F,K=A/2,W=D/2,P=L/2,G=R+1,X=F+1,J=0,Y=0,q=new N;for(let j=0;j<X;j++){let ee=j*O-W;for(let _e=0;_e<G;_e++){let k=_e*T-K;q[M]=k*b,q[d]=ee*x,q[f]=P,c.push(q.x,q.y,q.z),q[M]=0,q[d]=0,q[f]=L>0?1:-1,u.push(q.x,q.y,q.z),h.push(_e/R),h.push(1-j/F),J+=1}}for(let j=0;j<F;j++)for(let ee=0;ee<R;ee++){let _e=p+ee+G*j,k=p+ee+G*(j+1),Z=p+(ee+1)+G*(j+1),se=p+(ee+1)+G*j;l.push(_e,k,se),l.push(k,Z,se),Y+=6}a.addGroup(m,Y,S),m+=Y,p+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Xr=class i extends Ut{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let o=e/2,s=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,p=t/l,m=[],g=[],M=[],d=[];for(let f=0;f<u;f++){let b=f*p-s;for(let x=0;x<c;x++){let A=x*h-o;g.push(A,-b,0),M.push(0,0,1),d.push(x/a),d.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<a;b++){let x=b+c*f,A=b+c*(f+1),D=b+1+c*(f+1),L=b+1+c*f;m.push(x,A,L),m.push(A,D,L)}this.setIndex(m),this.setAttribute("position",new si(g,3)),this.setAttribute("normal",new si(M,3)),this.setAttribute("uv",new si(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var xh=0,ci=class extends Yt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xh++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=wi,this.side=Kt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$n,this.blendDst=Qn,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=fn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ua,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wi&&(n.blending=this.blending),this.side!==Kt&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$n&&(n.blendSrc=this.blendSrc),this.blendDst!==Qn&&(n.blendDst=this.blendDst),this.blendEquation!==Ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fn&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ua&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){let s=[];for(let a in o){let l=o[a];delete l.metadata,s.push(l)}return s}if(t){let o=r(e.textures),s=r(e.images);o.length>0&&(n.textures=o),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};function Ui(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function kt(i){let e={};for(let t=0;t<i.length;t++){let n=Ui(i[t]);for(let r in n)e[r]=n[r]}return e}function ul(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function qr(i){return i.getRenderTarget()===null?i.outputColorSpace:Qe.workingColorSpace}var fl={clone:Ui,merge:kt};var hl=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;var dl=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;var bt=class extends ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hl,this.fragmentShader=dl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ui(e.uniforms),this.uniformsGroups=ul(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}};var Ii=new N,Sa=new N,Yr=new N,Yi=new N,Ea=new N,jr=new N,ya=new N,Rn=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,t),Ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Sa.copy(e).add(t).multiplyScalar(.5),Yr.copy(t).sub(e).normalize(),Yi.copy(this.origin).sub(Sa);let o=e.distanceTo(t)*.5,s=-this.direction.dot(Yr),a=Yi.dot(this.direction),l=-Yi.dot(Yr),c=Yi.lengthSq(),u=Math.abs(1-s*s),h,p,m,g;if(u>0)if(h=s*l-a,p=s*a-l,g=o*u,h>=0)if(p>=-g)if(p<=g){let M=1/u;h*=M,p*=M,m=h*(h+s*p+2*a)+p*(s*h+p+2*l)+c}else p=o,h=Math.max(0,-(s*p+a)),m=-h*h+p*(p+2*l)+c;else p=-o,h=Math.max(0,-(s*p+a)),m=-h*h+p*(p+2*l)+c;else p<=-g?(h=Math.max(0,-(-s*o+a)),p=h>0?-o:Math.min(Math.max(-o,-l),o),m=-h*h+p*(p+2*l)+c):p<=g?(h=0,p=Math.min(Math.max(-o,-l),o),m=p*(p+2*l)+c):(h=Math.max(0,-(s*o+a)),p=h>0?o:Math.min(Math.max(-o,-l),o),m=-h*h+p*(p+2*l)+c);else p=s>0?-o:o,h=Math.max(0,-(s*p+a)),m=-h*h+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Sa).addScaledVector(Yr,p),m}intersectSphere(e,t){Ii.subVectors(e.center,this.origin);let n=Ii.dot(this.direction),r=Ii.dot(Ii)-n*n,o=e.radius*e.radius;if(r>o)return null;let s=Math.sqrt(o-r),a=n-s,l=n+s;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,s,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),u>=0?(o=(e.min.y-p.y)*u,s=(e.max.y-p.y)*u):(o=(e.max.y-p.y)*u,s=(e.min.y-p.y)*u),n>s||o>r||((o>n||isNaN(n))&&(n=o),(s<r||isNaN(r))&&(r=s),h>=0?(a=(e.min.z-p.z)*h,l=(e.max.z-p.z)*h):(a=(e.max.z-p.z)*h,l=(e.min.z-p.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,t,n,r,o){Ea.subVectors(t,e),jr.subVectors(n,e),ya.crossVectors(Ea,jr);let s=this.direction.dot(ya),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Yi.subVectors(this.origin,e);let l=a*this.direction.dot(jr.crossVectors(Yi,jr));if(l<0)return null;let c=a*this.direction.dot(Ea.cross(Yi));if(c<0||l+c>s)return null;let u=-a*Yi.dot(ya);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};var vi=new N,Ni=new N,Ta=new N,Fi=new N,Cn=new N,Ln=new N,pl=new N,ba=new N,Aa=new N,wa=new N,Zr=!1,on=class i{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),vi.subVectors(e,t),r.cross(vi);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){vi.subVectors(r,t),Ni.subVectors(n,t),Ta.subVectors(e,t);let s=vi.dot(vi),a=vi.dot(Ni),l=vi.dot(Ta),c=Ni.dot(Ni),u=Ni.dot(Ta),h=s*c-a*a;if(h===0)return o.set(0,0,0),null;let p=1/h,m=(c*l-a*u)*p,g=(s*u-a*l)*p;return o.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getUV(e,t,n,r,o,s,a,l){return Zr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zr=!0),this.getInterpolation(e,t,n,r,o,s,a,l)}static getInterpolation(e,t,n,r,o,s,a,l){return this.getBarycoord(e,t,n,r,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Fi.x),l.addScaledVector(s,Fi.y),l.addScaledVector(a,Fi.z),l)}static isFrontFacing(e,t,n,r){return vi.subVectors(n,t),Ni.subVectors(e,t),vi.cross(Ni).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),vi.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,o){return Zr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zr=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}getInterpolation(e,t,n,r,o){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,o=this.c,s,a;Cn.subVectors(r,n),Ln.subVectors(o,n),ba.subVectors(e,n);let l=Cn.dot(ba),c=Ln.dot(ba);if(l<=0&&c<=0)return t.copy(n);Aa.subVectors(e,r);let u=Cn.dot(Aa),h=Ln.dot(Aa);if(u>=0&&h<=u)return t.copy(r);let p=l*h-u*c;if(p<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(Cn,s);wa.subVectors(e,o);let m=Cn.dot(wa),g=Ln.dot(wa);if(g>=0&&m<=g)return t.copy(o);let M=m*c-l*g;if(M<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ln,a);let d=u*g-m*h;if(d<=0&&h-u>=0&&m-g>=0)return pl.subVectors(o,r),a=(h-u)/(h-u+(m-g)),t.copy(r).addScaledVector(pl,a);let f=1/(d+M+p);return s=M*f,a=p*f,t.copy(n).addScaledVector(Cn,s).addScaledVector(Ln,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};var Pn=class extends ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=mr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var ml=new ht,an=new Rn,Kr=new Ai,gl=new N,Dn=new N,Un=new N,In=new N,Ra=new N,Jr=new N,$r=new Ve,Qr=new Ve,eo=new Ve,_l=new N,xl=new N,vl=new N,to=new N,io=new N,At=class extends Tt{constructor(e=new Ut,t=new Pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(o&&a){Jr.set(0,0,0);for(let l=0,c=o.length;l<c;l++){let u=a[l],h=o[l];u!==0&&(Ra.fromBufferAttribute(h,e),s?Jr.addScaledVector(Ra,u):Jr.addScaledVector(Ra.sub(t),u))}t.add(Jr)}return t}raycast(e,t){let n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(o),an.copy(e.ray).recast(e.near),!(Kr.containsPoint(an.origin)===!1&&(an.intersectSphere(Kr,gl)===null||an.origin.distanceToSquared(gl)>(e.far-e.near)**2))&&(ml.copy(o).invert(),an.copy(e.ray).applyMatrix4(ml),!(n.boundingBox!==null&&an.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,an)))}_computeIntersections(e,t,n){let r,o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,h=o.attributes.normal,p=o.groups,m=o.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,M=p.length;g<M;g++){let d=p[g],f=s[d.materialIndex],b=Math.max(d.start,m.start),x=Math.min(a.count,Math.min(d.start+d.count,m.start+m.count));for(let A=b,D=x;A<D;A+=3){let L=a.getX(A),R=a.getX(A+1),F=a.getX(A+2);r=no(this,f,e,n,c,u,h,L,R,F),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{let g=Math.max(0,m.start),M=Math.min(a.count,m.start+m.count);for(let d=g,f=M;d<f;d+=3){let b=a.getX(d),x=a.getX(d+1),A=a.getX(d+2);r=no(this,s,e,n,c,u,h,b,x,A),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,M=p.length;g<M;g++){let d=p[g],f=s[d.materialIndex],b=Math.max(d.start,m.start),x=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let A=b,D=x;A<D;A+=3){let L=A,R=A+1,F=A+2;r=no(this,f,e,n,c,u,h,L,R,F),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{let g=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let d=g,f=M;d<f;d+=3){let b=d,x=d+1,A=d+2;r=no(this,s,e,n,c,u,h,b,x,A),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}};function vh(i,e,t,n,r,o,s,a){let l;if(e.side===gt?l=n.intersectTriangle(s,o,r,!0,a):l=n.intersectTriangle(r,o,s,e.side===Kt,a),l===null)return null;io.copy(a),io.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(io);return c<t.near||c>t.far?null:{distance:c,point:io.clone(),object:i}}function no(i,e,t,n,r,o,s,a,l,c){i.getVertexPosition(a,Dn),i.getVertexPosition(l,Un),i.getVertexPosition(c,In);let u=vh(i,e,t,n,Dn,Un,In,to);if(u){r&&($r.fromBufferAttribute(r,a),Qr.fromBufferAttribute(r,l),eo.fromBufferAttribute(r,c),u.uv=on.getInterpolation(to,Dn,Un,In,$r,Qr,eo,new Ve)),o&&($r.fromBufferAttribute(o,a),Qr.fromBufferAttribute(o,l),eo.fromBufferAttribute(o,c),u.uv1=on.getInterpolation(to,Dn,Un,In,$r,Qr,eo,new Ve),u.uv2=u.uv1),s&&(_l.fromBufferAttribute(s,a),xl.fromBufferAttribute(s,l),vl.fromBufferAttribute(s,c),u.normal=on.getInterpolation(to,Dn,Un,In,_l,xl,vl,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new N,materialIndex:0};on.getNormal(Dn,Un,In,h.normal),u.face=h}return u}var Ml=`
#ifdef USE_ALPHAHASH

	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;

#endif
`;var Sl=`
#ifdef USE_ALPHAHASH

	/**
	 * See: https://casual-effects.com/research/Wyman2017Hashed/index.html
	 */

	const float ALPHA_HASH_SCALE = 0.05; // Derived from trials only, and may be changed.

	float hash2D( vec2 value ) {

		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );

	}

	float hash3D( vec3 value ) {

		return hash2D( vec2( hash2D( value.xy ), value.z ) );

	}

	float getAlphaHashThreshold( vec3 position ) {

		// Find the discretized derivatives of our coordinates
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );

		// Find two nearest log-discretized noise scales
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);

		// Compute alpha thresholds at our two noise scales
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);

		// Factor to interpolate lerp with
		float lerpFactor = fract( log2( pixScale ) );

		// Interpolate alpha threshold from noise at two scales
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;

		// Pass into CDF to compute uniformly distrib threshold
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);

		// Find our final, uniformly distributed alpha threshold (\u03B1\u03C4)
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;

		// Avoids \u03B1\u03C4 == 0. Could also do \u03B1\u03C4 =1-\u03B1\u03C4
		return clamp( threshold , 1.0e-6, 1.0 );

	}

#endif
`;var El=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

#endif
`;var yl=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`;var Tl=`
#ifdef USE_ALPHATEST

	if ( diffuseColor.a < alphaTest ) discard;

#endif
`;var bl=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`;var Al=`
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;

	reflectedLight.indirectDiffuse *= ambientOcclusion;

	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif

	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif

	#if defined( USE_ENVMAP ) && defined( STANDARD )

		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );

		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );

	#endif

#endif
`;var wl=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`;var Rl=`
#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {

		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );

	}
#endif
`;var Cl=`
#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif
`;var Ll=`
vec3 transformed = vec3( position );

#ifdef USE_ALPHAHASH

	vPosition = vec3( position );

#endif
`;var Pl=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`;var Dl=`

float G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {

	// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)
	return 0.25;

}

float D_BlinnPhong( const in float shininess, const in float dotNH ) {

	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );

}

vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( specularColor, 1.0, dotVH );

	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );

	float D = D_BlinnPhong( shininess, dotNH );

	return F * ( G * D );

} // validated

`;var Ul=`

#ifdef USE_IRIDESCENCE

	// XYZ to linear-sRGB color space
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);

	// Assume air interface for top
	// Note: We don't handle the case fresnel0 == 1
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {

		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );

	}

	// Conversion FO/IOR
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );

	}

	// ior is a value between 1.0 and 3.0. 1.0 is air interface
	float IorToFresnel0( float transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));

	}

	// Fresnel equations for dielectric/dielectric interfaces.
	// Ref: https://belcour.github.io/blog/research/2017/05/01/brdf-thin-film.html
	// Evaluation XYZ sensitivity curves in Fourier space
	vec3 evalSensitivity( float OPD, vec3 shift ) {

		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );

		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;

		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;

	}

	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {

		vec3 I;

		// Force iridescenceIOR -> outsideIOR when thinFilmThickness -> 0.0
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		// Evaluate the cosTheta on the base layer (Snell law)
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );

		// Handle TIR:
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {

			return vec3( 1.0 );

		}

		float cosTheta2 = sqrt( cosTheta2Sq );

		// First interface
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;

		// Second interface
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) ); // guard against 1.0
		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;

		// Phase shift
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;

		// Compound terms
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );

		// Reflectance term for m = 0 (DC term amplitude)
		vec3 C0 = R12 + Rs;
		I = C0;

		// Reflectance term for m > 0 (pairs of diracs)
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {

			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;

		}

		// Since out of gamut colors might be produced, negative color values are clamped to 0.
		return max( I, vec3( 0.0 ) );

	}

#endif

`;var Il=`
#ifdef USE_BUMPMAP

	uniform sampler2D bumpMap;
	uniform float bumpScale;

	// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen
	// https://mmikk.github.io/papers3d/mm_sfgrad_bump.pdf

	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)

	vec2 dHdxy_fwd() {

		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );

		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;

		return vec2( dBx, dBy );

	}

	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {

		// normalize is done to ensure that the bump map looks the same regardless of the texture's scale
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm; // normalized

		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );

		float fDet = dot( vSigmaX, R1 ) * faceDirection;

		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );

	}

#endif
`;var Nl=`
#if NUM_CLIPPING_PLANES > 0

	vec4 plane;

	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {

		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;

	}
	#pragma unroll_loop_end

	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES

		bool clipped = true;

		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {

			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;

		}
		#pragma unroll_loop_end

		if ( clipped ) discard;

	#endif

#endif
`;var Fl=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`;var Ol=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`;var Bl=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`;var Gl=`
#if defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#elif defined( USE_COLOR )

	diffuseColor.rgb *= vColor;

#endif
`;var zl=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR )

	varying vec3 vColor;

#endif
`;var Hl=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	varying vec3 vColor;

#endif
`;var Vl=`
#if defined( USE_COLOR_ALPHA )

	vColor = vec4( 1.0 );

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	vColor = vec3( 1.0 );

#endif

#ifdef USE_COLOR

	vColor *= color;

#endif

#ifdef USE_INSTANCING_COLOR

	vColor.xyz *= instanceColor.xyz;

#endif
`;var kl=`
#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6

#ifndef saturate
// <tonemapping_pars_fragment> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )

float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }

// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.
// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand( const in vec2 uv ) {

	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );

	return fract( sin( sn ) * c );

}

#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif

struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};

struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};

#ifdef USE_ALPHAHASH

	varying vec3 vPosition;

#endif

vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

}

vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {

	// dir can be either a direction vector or a normal vector
	// upper-left 3x3 of matrix is assumed to be orthogonal

	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );

}

mat3 transposeMat3( const in mat3 m ) {

	mat3 tmp;

	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );

	return tmp;

}

float luminance( const in vec3 rgb ) {

	// assumes rgb is in linear color space with sRGB primaries and D65 white point

	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );

	return dot( weights, rgb );

}

bool isPerspectiveMatrix( mat4 m ) {

	return m[ 2 ][ 3 ] == - 1.0;

}

vec2 equirectUv( in vec3 dir ) {

	// dir is assumed to be unit length

	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;

	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;

	return vec2( u, v );

}

vec3 BRDF_Lambert( const in vec3 diffuseColor ) {

	return RECIPROCAL_PI * diffuseColor;

} // validated

vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated

float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated
`;var Wl=`
#ifdef ENVMAP_TYPE_CUBE_UV

	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0

	// These shader functions convert between the UV coordinates of a single face of
	// a cubemap, the 0-5 integer index of a cube face, and the direction vector for
	// sampling a textureCube (not generally normalized ).

	float getFace( vec3 direction ) {

		vec3 absDirection = abs( direction );

		float face = - 1.0;

		if ( absDirection.x > absDirection.z ) {

			if ( absDirection.x > absDirection.y )

				face = direction.x > 0.0 ? 0.0 : 3.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		} else {

			if ( absDirection.z > absDirection.y )

				face = direction.z > 0.0 ? 2.0 : 5.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		}

		return face;

	}

	// RH coordinate system; PMREM face-indexing convention
	vec2 getUV( vec3 direction, float face ) {

		vec2 uv;

		if ( face == 0.0 ) {

			uv = vec2( direction.z, direction.y ) / abs( direction.x ); // pos x

		} else if ( face == 1.0 ) {

			uv = vec2( - direction.x, - direction.z ) / abs( direction.y ); // pos y

		} else if ( face == 2.0 ) {

			uv = vec2( - direction.x, direction.y ) / abs( direction.z ); // pos z

		} else if ( face == 3.0 ) {

			uv = vec2( - direction.z, direction.y ) / abs( direction.x ); // neg x

		} else if ( face == 4.0 ) {

			uv = vec2( - direction.x, direction.z ) / abs( direction.y ); // neg y

		} else {

			uv = vec2( direction.x, direction.y ) / abs( direction.z ); // neg z

		}

		return 0.5 * ( uv + 1.0 );

	}

	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {

		float face = getFace( direction );

		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );

		mipInt = max( mipInt, cubeUV_minMipLevel );

		float faceSize = exp2( mipInt );

		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0; // #25071

		if ( face > 2.0 ) {

			uv.y += faceSize;

			face -= 3.0;

		}

		uv.x += face * faceSize;

		uv.x += filterInt * 3.0 * cubeUV_minTileSize;

		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );

		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;

		#ifdef texture2DGradEXT

			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb; // disable anisotropic filtering

		#else

			return texture2D( envMap, uv ).rgb;

		#endif

	}

	// These defines must match with PMREMGenerator

	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0

	float roughnessToMip( float roughness ) {

		float mip = 0.0;

		if ( roughness >= cubeUV_r1 ) {

			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;

		} else if ( roughness >= cubeUV_r4 ) {

			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;

		} else if ( roughness >= cubeUV_r5 ) {

			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;

		} else if ( roughness >= cubeUV_r6 ) {

			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;

		} else {

			mip = - 2.0 * log2( 1.16 * roughness ); // 1.16 = 1.79^0.25
		}

		return mip;

	}

	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {

		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );

		float mipF = fract( mip );

		float mipInt = floor( mip );

		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );

		if ( mipF == 0.0 ) {

			return vec4( color0, 1.0 );

		} else {

			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );

			return vec4( mix( color0, color1, mipF ), 1.0 );

		}

	}

#endif
`;var Xl=`

vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT

	vec3 transformedTangent = objectTangent;

#endif

#ifdef USE_BATCHING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;

	#ifdef USE_TANGENT

		transformedTangent = bm * transformedTangent;

	#endif

#endif

#ifdef USE_INSTANCING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;

	#ifdef USE_TANGENT

		transformedTangent = im * transformedTangent;

	#endif

#endif

transformedNormal = normalMatrix * transformedNormal;

#ifdef FLIP_SIDED

	transformedNormal = - transformedNormal;

#endif

#ifdef USE_TANGENT

	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;

	#ifdef FLIP_SIDED

		transformedTangent = - transformedTangent;

	#endif

#endif
`;var ql=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`;var Yl=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );

#endif
`;var jl=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`;var Zl=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`;var Kl=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`;var Jl=`

// http://www.russellcottrell.com/photo/matrixCalculator.htm

// Linear sRGB => XYZ => Linear Display P3
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);

// Linear Display P3 => XYZ => Linear sRGB
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);

vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}

vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}

vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}

vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

// @deprecated, r156
vec4 LinearToLinear( in vec4 value ) {
	return value;
}

// @deprecated, r156
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}
`;var $l=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vec3 cameraToFrag;

		if ( isOrthographic ) {

			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToFrag = normalize( vWorldPosition - cameraPosition );

		}

		// Transforming Normal Vectors with the Inverse Transformation
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vec3 reflectVec = reflect( cameraToFrag, worldNormal );

		#else

			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );

		#endif

	#else

		vec3 reflectVec = vReflect;

	#endif

	#ifdef ENVMAP_TYPE_CUBE

		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );

	#else

		vec4 envColor = vec4( 0.0 );

	#endif

	#ifdef ENVMAP_BLENDING_MULTIPLY

		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_MIX )

		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_ADD )

		outgoingLight += envColor.xyz * specularStrength * reflectivity;

	#endif

#endif
`;var Ql=`
#ifdef USE_ENVMAP

	uniform float envMapIntensity;
	uniform float flipEnvMap;

	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif
`;var ec=`
#ifdef USE_ENVMAP

	uniform float reflectivity;

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif

#endif
`;var tc=`
#ifdef USE_ENVMAP

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;

	#else

		varying vec3 vReflect;
		uniform float refractionRatio;

	#endif

#endif
`;var ic=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vWorldPosition = worldPosition.xyz;

	#else

		vec3 cameraToVertex;

		if ( isOrthographic ) {

			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );

		}

		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vReflect = reflect( cameraToVertex, worldNormal );

		#else

			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );

		#endif

	#endif

#endif
`;var nc=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`;var rc=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`;var oc=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`;var ac=`
#ifdef USE_FOG

	uniform vec3 fogColor;
	varying float vFogDepth;

	#ifdef FOG_EXP2

		uniform float fogDensity;

	#else

		uniform float fogNear;
		uniform float fogFar;

	#endif

#endif
`;var sc=`

#ifdef USE_GRADIENTMAP

	uniform sampler2D gradientMap;

#endif

vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {

	// dotNL will be from -1.0 to 1.0
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );

	#ifdef USE_GRADIENTMAP

		return vec3( texture2D( gradientMap, coord ).r );

	#else

		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );

	#endif

}
`;var lc=`
#ifdef USE_LIGHTMAP

	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

	reflectedLight.indirectDiffuse += lightMapIrradiance;

#endif
`;var cc=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`;var uc=`
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`;var fc=`
varying vec3 vViewPosition;

struct LambertMaterial {

	vec3 diffuseColor;
	float specularStrength;

};

void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
`;var hc=`
uniform bool receiveShadow;
uniform vec3 ambientLightColor;

#if defined( USE_LIGHT_PROBES )

	uniform vec3 lightProbe[ 9 ];

#endif

// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere
// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {

	// normal is assumed to have unit length

	float x = normal.x, y = normal.y, z = normal.z;

	// band 0
	vec3 result = shCoefficients[ 0 ] * 0.886227;

	// band 1
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;

	// band 2
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );

	return result;

}

vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {

	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );

	return irradiance;

}

vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {

	vec3 irradiance = ambientLightColor;

	return irradiance;

}

float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

	#if defined ( LEGACY_LIGHTS )

		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {

			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );

		}

		return 1.0;

	#else

		// based upon Frostbite 3 Moving to Physically-based Rendering
		// page 32, equation 26: E[window1]
		// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );

		if ( cutoffDistance > 0.0 ) {

			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

		}

		return distanceFalloff;

	#endif

}

float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {

	return smoothstep( coneCosine, penumbraCosine, angleCosine );

}

#if NUM_DIR_LIGHTS > 0

	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};

	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];

	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {

		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;

	}

#endif


#if NUM_POINT_LIGHTS > 0

	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};

	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {

		vec3 lVector = pointLight.position - geometryPosition;

		light.direction = normalize( lVector );

		float lightDistance = length( lVector );

		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );

	}

#endif


#if NUM_SPOT_LIGHTS > 0

	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};

	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {

		vec3 lVector = spotLight.position - geometryPosition;

		light.direction = normalize( lVector );

		float angleCos = dot( light.direction, spotLight.direction );

		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );

		if ( spotAttenuation > 0.0 ) {

			float lightDistance = length( lVector );

			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );

		} else {

			light.color = vec3( 0.0 );
			light.visible = false;

		}

	}

#endif


#if NUM_RECT_AREA_LIGHTS > 0

	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};

	// Pre-computed values of LinearTransformedCosine approximation of BRDF
	// BRDF approximation Texture is 64x64
	uniform sampler2D ltc_1; // RGBA Float
	uniform sampler2D ltc_2; // RGBA Float

	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];

#endif


#if NUM_HEMI_LIGHTS > 0

	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};

	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];

	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {

		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;

		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );

		return irradiance;

	}

#endif
`;var dc=`
#ifdef USE_ENVMAP

	vec3 getIBLIrradiance( const in vec3 normal ) {

		#ifdef ENVMAP_TYPE_CUBE_UV

			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );

			return PI * envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {

		#ifdef ENVMAP_TYPE_CUBE_UV

			vec3 reflectVec = reflect( - viewDir, normal );

			// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );

			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );

			return envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	#ifdef USE_ANISOTROPY

		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {

			#ifdef ENVMAP_TYPE_CUBE_UV

			  // https://google.github.io/filament/Filament.md.html#lighting/imagebasedlights/anisotropy
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );

				return getIBLRadiance( viewDir, bentNormal, roughness );

			#else

				return vec3( 0.0 );

			#endif

		}

	#endif

#endif
`;var pc=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`;var mc=`
varying vec3 vViewPosition;

struct ToonMaterial {

	vec3 diffuseColor;

};

void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
`;var gc=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`;var _c=`
varying vec3 vViewPosition;

struct BlinnPhongMaterial {

	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;

};

void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;

}

void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
`;var xc=`
PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );

vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );

material.roughness = max( roughnessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );

#ifdef IOR

	material.ior = ior;

	#ifdef USE_SPECULAR

		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;

		#ifdef USE_SPECULAR_COLORMAP

			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;

		#endif

		#ifdef USE_SPECULAR_INTENSITYMAP

			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;

		#endif

		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );

	#else

		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;

	#endif

	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );

#else

	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;

#endif

#ifdef USE_CLEARCOAT

	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;

	#ifdef USE_CLEARCOATMAP

		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;

	#endif

	#ifdef USE_CLEARCOAT_ROUGHNESSMAP

		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;

	#endif

	material.clearcoat = saturate( material.clearcoat ); // Burley clearcoat model
	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );

#endif

#ifdef USE_IRIDESCENCE

	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;

	#ifdef USE_IRIDESCENCEMAP

		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;

	#endif

	#ifdef USE_IRIDESCENCE_THICKNESSMAP

		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;

	#else

		material.iridescenceThickness = iridescenceThicknessMaximum;

	#endif

#endif

#ifdef USE_SHEEN

	material.sheenColor = sheenColor;

	#ifdef USE_SHEEN_COLORMAP

		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;

	#endif

	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );

	#ifdef USE_SHEEN_ROUGHNESSMAP

		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;

	#endif

#endif

#ifdef USE_ANISOTROPY

	#ifdef USE_ANISOTROPYMAP

		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;

	#else

		vec2 anisotropyV = anisotropyVector;

	#endif

	material.anisotropy = length( anisotropyV );

	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}

	// Roughness along the anisotropy bitangent is the material roughness, while the tangent roughness increases with anisotropy.
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );

	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;

#endif
`;var vc=`

struct PhysicalMaterial {

	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;

	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif

	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif

	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif

	#ifdef IOR
		float ior;
	#endif

	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif

	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif

};

// temporary
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );

vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );

    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}

// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2
// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {

	float a2 = pow2( alpha );

	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );

	return 0.5 / max( gv + gl, EPSILON );

}

// Microfacet Models for Refraction through Rough Surfaces - equation (33)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney\u2019s reparameterization
float D_GGX( const in float alpha, const in float dotNH ) {

	float a2 = pow2( alpha );

	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1

	return RECIPROCAL_PI * a2 / pow2( denom );

}

// https://google.github.io/filament/Filament.md.html#materialsystem/anisotropicmodel/anisotropicspecularbrdf
#ifdef USE_ANISOTROPY

	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {

		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );

		return saturate(v);

	}

	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {

		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;

		return RECIPROCAL_PI * a2 * pow2 ( w2 );

	}

#endif

#ifdef USE_CLEARCOAT

	// GGX Distribution, Schlick Fresnel, GGX_SmithCorrelated Visibility
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {

		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;

		float alpha = pow2( roughness ); // UE4's roughness

		vec3 halfDir = normalize( lightDir + viewDir );

		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );

		vec3 F = F_Schlick( f0, f90, dotVH );

		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

		float D = D_GGX( alpha, dotNH );

		return F * ( V * D );

	}

#endif

vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {

	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;

	float alpha = pow2( roughness ); // UE4's roughness

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( f0, f90, dotVH );

	#ifdef USE_IRIDESCENCE

		F = mix( F, material.iridescenceFresnel, material.iridescence );

	#endif

	#ifdef USE_ANISOTROPY

		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );

		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );

		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );

	#else

		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

		float D = D_GGX( alpha, dotNH );

	#endif

	return F * ( V * D );

}

// Rect Area Light

// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines
// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt
// code: https://github.com/selfshadow/ltc_code/

vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	float dotNV = saturate( dot( N, V ) );

	// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );

	uv = uv * LUT_SCALE + LUT_BIAS;

	return uv;

}

float LTC_ClippedSphereFormFactor( const in vec3 f ) {

	// Real-Time Area Lighting: a Journey from Research to Production (p.102)
	// An approximation of the form factor of a horizon-clipped rectangle.

	float l = length( f );

	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );

}

vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {

	float x = dot( v1, v2 );

	float y = abs( x );

	// rational polynomial approximation to theta / sin( theta ) / 2PI
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;

	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;

	return cross( v1, v2 ) * theta_sintheta;

}

vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {

	// bail if point is on back side of plane of light
	// assumes ccw winding order of light vertices
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );

	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );

	// construct orthonormal basis around N
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system

	// compute transform
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );

	// transform rect
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );

	// project rect onto sphere
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );

	// calculate vector form factor
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );

	// adjust for horizon clipping
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );

/*
	// alternate method of adjusting for horizon clipping (see referece)
	// refactoring required
	float len = length( vectorFormFactor );
	float z = vectorFormFactor.z / len;

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	// tabulated horizon-clipped sphere, apparently...
	vec2 uv = vec2( z * 0.5 + 0.5, len );
	uv = uv * LUT_SCALE + LUT_BIAS;

	float scale = texture2D( ltc_2, uv ).w;

	float result = len * scale;
*/

	return vec3( result );

}

// End Rect Area Light

#if defined( USE_SHEEN )

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float D_Charlie( float roughness, float dotNH ) {

	float alpha = pow2( roughness );

	// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF"
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 ); // 2^(-14/2), so sin2h^2 > 0 in fp16

	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );

}

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float V_Neubelt( float dotNV, float dotNL ) {

	// Neubelt and Pettineo 2013, "Crafting a Next-gen Material Pipeline for The Order: 1886"
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );

}

vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );

	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );

	return sheenColor * ( D * V );

}

#endif

// This is a curve-fit approxmation to the "Charlie sheen" BRDF integrated over the hemisphere from 
// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF". The analysis can be found
// in the Sheen section of https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	float r2 = roughness * roughness;

	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;

	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;

	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );

	return saturate( DG * RECIPROCAL_PI );

}

// Analytical approximation of the DFG LUT, one half of the
// split-sum approximation used in indirect specular lighting.
// via 'environmentBRDF' from "Physically Based Shading on Mobile"
// https://www.unrealengine.com/blog/physically-based-shading-on-mobile
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );

	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );

	vec4 r = roughness * c0 + c1;

	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;

	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;

	return fab;

}

vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	return specularColor * fab.x + specularF90 * fab.y;

}

// Fdez-Ag\xFCera's "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"
// Approximates multiscattering in order to preserve energy.
// http://www.jcgt.org/published/0008/01/03/
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	#ifdef USE_IRIDESCENCE

		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );

	#else

		vec3 Fr = specularColor;

	#endif

	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;

	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;

	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619; // 1/21
	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );

	singleScatter += FssEss;
	multiScatter += Fms * Ems;

}

#if NUM_RECT_AREA_LIGHTS > 0

	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;

		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight; // counterclockwise; light shines in local neg z direction
		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;

		vec2 uv = LTC_Uv( normal, viewDir, roughness );

		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );

		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);

		// LTC Fresnel Approximation by Stephen Hill
		// http://blog.selfshadow.com/publications/s2016-advances/s2016_ltc_fresnel.pdf
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );

		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );

		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );

	}

#endif

void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );

	vec3 irradiance = dotNL * directLight.color;

	#ifdef USE_CLEARCOAT

		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );

		vec3 ccIrradiance = dotNLcc * directLight.color;

		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );

	#endif

	#ifdef USE_SHEEN

		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );

	#endif

	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}

void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {

	#ifdef USE_CLEARCOAT

		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );

	#endif

	#ifdef USE_SHEEN

		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );

	#endif

	// Both indirect specular and indirect diffuse light accumulate here

	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;

	#ifdef USE_IRIDESCENCE

		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );

	#else

		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );

	#endif

	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );

	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;

	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;

}

#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical

// ref: https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {

	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );

}
`;var Mc=`
/**
 * This is a template that can be used to light a material, it uses pluggable
 * RenderEquations (RE)for specific lighting scenarios.
 *
 * Instructions for use:
 * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined
 * - Create a material parameter that is to be passed as the third parameter to your lighting functions.
 *
 * TODO:
 * - Add area light support.
 * - Add sphere light support.
 * - Add diffuse light probe (irradiance cubemap) support.
 */

vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

vec3 geometryClearcoatNormal = vec3( 0.0 );

#ifdef USE_CLEARCOAT

	geometryClearcoatNormal = clearcoatNormal;

#endif

#ifdef USE_IRIDESCENCE

	float dotNVi = saturate( dot( normal, geometryViewDir ) );

	if ( material.iridescenceThickness == 0.0 ) {

		material.iridescence = 0.0;

	} else {

		material.iridescence = saturate( material.iridescence );

	}

	if ( material.iridescence > 0.0 ) {

		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );

		// Iridescence F0 approximation
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );

	}

#endif

IncidentLight directLight;

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointLightInfo( pointLight, geometryPosition, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;

	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

		getSpotLightInfo( spotLight, geometryPosition, directLight );

		// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif

		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif

		#undef SPOT_LIGHT_MAP_INDEX

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalLightInfo( directionalLight, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	#if defined( USE_LIGHT_PROBES )

		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );

	#endif

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );

		}
		#pragma unroll_loop_end

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`;var Sc=`
#if defined( RE_IndirectDiffuse )

	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

		irradiance += lightMapIrradiance;

	#endif

	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )

		iblIrradiance += getIBLIrradiance( geometryNormal );

	#endif

#endif

#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )

	#ifdef USE_ANISOTROPY

		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );

	#else

		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );

	#endif

	#ifdef USE_CLEARCOAT

		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );

	#endif

#endif
`;var Ec=`
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif
`;var yc=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`;var Tc=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;var bc=`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		varying float vFragDepth;
		varying float vIsPerspective;

	#else

		uniform float logDepthBufFC;

	#endif

#endif
`;var Ac=`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

	#else

		if ( isPerspectiveMatrix( projectionMatrix ) ) {

			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;

			gl_Position.z *= gl_Position.w;

		}

	#endif

#endif
`;var wc=`
#ifdef USE_MAP

	vec4 sampledDiffuseColor = texture2D( map, vMapUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_APLHA8 with video textures

		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`;var Rc=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`;var Cc=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	#if defined( USE_POINTS_UV )

		vec2 uv = vUv;

	#else

		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;

	#endif

#endif

#ifdef USE_MAP

	diffuseColor *= texture2D( map, uv );

#endif

#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, uv ).g;

#endif
`;var Lc=`
#if defined( USE_POINTS_UV )

	varying vec2 vUv;

#else

	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

		uniform mat3 uvTransform;

	#endif

#endif

#ifdef USE_MAP

	uniform sampler2D map;

#endif

#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`;var Pc=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`;var Dc=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`;var Uc=`
#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	vColor *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		#if defined( USE_COLOR_ALPHA )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];

		#elif defined( USE_COLOR )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];

		#endif

	}

#endif
`;var Ic=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;

	#ifdef MORPHTARGETS_TEXTURE

		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];

		}

	#else

		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];

	#endif

#endif
`;var Nc=`
#ifdef USE_MORPHTARGETS

	uniform float morphTargetBaseInfluence;

	#ifdef MORPHTARGETS_TEXTURE

		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;

		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {

			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;

			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );

		}

	#else

		#ifndef USE_MORPHNORMALS

			uniform float morphTargetInfluences[ 8 ];

		#else

			uniform float morphTargetInfluences[ 4 ];

		#endif

	#endif

#endif
`;var Fc=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;

	#ifdef MORPHTARGETS_TEXTURE

		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];

		}

	#else

		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];

		#ifndef USE_MORPHNORMALS

			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];

		#endif

	#endif

#endif
`;var Oc=`
float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;

#ifdef FLAT_SHADED

	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );

#else

	vec3 normal = normalize( vNormal );

	#ifdef DOUBLE_SIDED

		normal *= faceDirection;

	#endif

#endif

#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )

	#ifdef USE_TANGENT

		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

	#else

		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);

	#endif

	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;

	#endif

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	#ifdef USE_TANGENT

		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

	#else

		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );

	#endif

	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;

	#endif

#endif

// non perturbed normal for clearcoat among others

vec3 nonPerturbedNormal = normal;

`;var Bc=`

#ifdef USE_NORMALMAP_OBJECTSPACE

	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

	#ifdef FLIP_SIDED

		normal = - normal;

	#endif

	#ifdef DOUBLE_SIDED

		normal = normal * faceDirection;

	#endif

	normal = normalize( normalMatrix * normal );

#elif defined( USE_NORMALMAP_TANGENTSPACE )

	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;

	normal = normalize( tbn * mapN );

#elif defined( USE_BUMPMAP )

	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );

#endif
`;var Gc=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;var zc=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;var Hc=`
#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif
`;var Vc=`
#ifdef USE_NORMALMAP

	uniform sampler2D normalMap;
	uniform vec2 normalScale;

#endif

#ifdef USE_NORMALMAP_OBJECTSPACE

	uniform mat3 normalMatrix;

#endif

#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )

	// Normal Mapping Without Precomputed Tangents
	// http://www.thetenthplanet.de/archives/1180

	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {

		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );

		vec3 N = surf_norm; // normalized

		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );

		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;

		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );

		return mat3( T * scale, B * scale, N );

	}

#endif
`;var kc=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = nonPerturbedNormal;

#endif
`;var Wc=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	clearcoatNormal = normalize( tbn2 * clearcoatMapN );

#endif
`;var Xc=`

#ifdef USE_CLEARCOATMAP

	uniform sampler2D clearcoatMap;

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;

#endif

#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform sampler2D clearcoatRoughnessMap;

#endif
`;var qc=`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`;var Yc=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`;var jc=`
vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}

vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}

const float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)
const float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)

const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );

const float ShiftRight8 = 1. / 256.;

vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8; // tidy overflow
	return r * PackUpscale;
}

float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}

vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}

float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}

vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}

vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}

// NOTE: viewZ, the z-coordinate in camera space, is negative for points in front of the camera

float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	// -near maps to 0; -far maps to 1
	return ( viewZ + near ) / ( near - far );
}

float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	// maps orthographic depth in [ 0, 1 ] to viewZ
	return depth * ( near - far ) - near;
}

// NOTE: https://twitter.com/gonnavis/status/1377183786949959682

float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	// -near maps to 0; -far maps to 1
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}

float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	// maps perspective depth in [ 0, 1 ] to viewZ
	return ( near * far ) / ( ( far - near ) * depth - far );
}
`;var Zc=`
#ifdef PREMULTIPLIED_ALPHA

	// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.
	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`;var Kc=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_BATCHING

	mvPosition = batchingMatrix * mvPosition;

#endif

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`;var Jc=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`;var $c=`
#ifdef DITHERING

	// based on https://www.shadertoy.com/view/MslGR8
	vec3 dithering( vec3 color ) {
		//Calculate grid position
		float grid_position = rand( gl_FragCoord.xy );

		//Shift the individual colors differently, thus making it even harder to see the dithering pattern
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );

		//modify shift according to grid position.
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );

		//shift the color by dither_shift
		return color + dither_shift_RGB;
	}

#endif
`;var Qc=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`;var eu=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`;var tu=`
#if NUM_SPOT_LIGHT_COORDS > 0

	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];

#endif

#if NUM_SPOT_LIGHT_MAPS > 0

	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];

#endif

#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];

		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): create uniforms for area light shadows

	#endif
	*/

	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {

		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );

	}

	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {

		return unpackRGBATo2Half( texture2D( shadow, uv ) );

	}

	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){

		float occlusion = 1.0;

		vec2 distribution = texture2DDistribution( shadow, uv );

		float hard_shadow = step( compare , distribution.x ); // Hard Shadow

		if (hard_shadow != 1.0 ) {

			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality
			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed
			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );

		}
		return occlusion;

	}

	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

		float shadow = 1.0;

		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;

		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;

		if ( frustumTest ) {

		#if defined( SHADOWMAP_TYPE_PCF )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;

			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;

			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );

		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;

			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;

			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );

		#elif defined( SHADOWMAP_TYPE_VSM )

			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );

		#else // no percentage-closer filtering:

			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );

		#endif

		}

		return shadow;

	}

	// cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D
	// vector suitable for 2D texture mapping. This code uses the following layout for the
	// 2D texture:
	//
	// xzXZ
	//  y Y
	//
	// Y - Positive y direction
	// y - Negative y direction
	// X - Positive x direction
	// x - Negative x direction
	// Z - Positive z direction
	// z - Negative z direction
	//
	// Source and test bed:
	// https://gist.github.com/tschw/da10c43c467ce8afd0c4

	vec2 cubeToUV( vec3 v, float texelSizeY ) {

		// Number of texels to avoid at the edge of each square

		vec3 absV = abs( v );

		// Intersect unit cube

		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;

		// Apply scale to avoid seams

		// two texels less per square (one texel will do for NEAREST)
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );

		// Unwrap

		// space: -1 ... 1 range for each square
		//
		// #X##		dim    := ( 4 , 2 )
		//  # #		center := ( 1 , 1 )

		vec2 planar = v.xy;

		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;

		if ( absV.z >= almostOne ) {

			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;

		} else if ( absV.x >= almostOne ) {

			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;

		} else if ( absV.y >= almostOne ) {

			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;

		}

		// Transform to UV space

		// scale := 0.5 / dim
		// translate := ( center + 0.5 ) / dim
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );

	}

	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );

		// for point lights, the uniform @vShadowCoord is re-purposed to hold
		// the vector from the light to the world-space position of the fragment.
		vec3 lightToPosition = shadowCoord.xyz;

		// dp = normalized distance from light to fragment position
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear ); // need to clamp?
		dp += shadowBias;

		// bd3D = base direction 3D
		vec3 bd3D = normalize( lightToPosition );

		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )

			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;

			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );

		#else // no percentage-closer filtering

			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );

		#endif

	}

#endif
`;var iu=`

#if NUM_SPOT_LIGHT_COORDS > 0

	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];

#endif

#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): uniforms for area light shadows

	#endif
	*/

#endif
`;var nu=`

#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )

	// Offsetting the position used for querying occlusion along the world normal can be used to reduce shadow acne.
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;

#endif

#if defined( USE_SHADOWMAP )

	#if NUM_DIR_LIGHT_SHADOWS > 0

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;

		}
		#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;

		}
		#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update vAreaShadowCoord with area light info

	#endif
	*/

#endif

// spot lights can be evaluated without active shadow mapping (when SpotLight.map is used)

#if NUM_SPOT_LIGHT_COORDS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {

		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

#endif


`;var ru=`
float getShadowMask() {

	float shadow = 1.0;

	#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

	DirectionalLightShadow directionalLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

	SpotLightShadow spotLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {

		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

	PointLightShadow pointLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update shadow for Area light

	#endif
	*/

	#endif

	return shadow;

}
`;var ou=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`;var au=`
#ifdef USE_SKINNING

	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;

	uniform highp sampler2D boneTexture;

	mat4 getBoneMatrix( const in float i ) {

		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );

		return mat4( v1, v2, v3, v4 );

	}

#endif
`;var su=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`;var lu=`
#ifdef USE_SKINNING

	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;

	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;

	#ifdef USE_TANGENT

		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;

	#endif

#endif
`;var cu=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`;var uu=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`;var fu=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`;var hu=`
#ifndef saturate
// <common> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif

uniform float toneMappingExposure;

// exposure only
vec3 LinearToneMapping( vec3 color ) {

	return saturate( toneMappingExposure * color );

}

// source: https://www.cs.utah.edu/docs/techreports/2002/pdf/UUCS-02-001.pdf
vec3 ReinhardToneMapping( vec3 color ) {

	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );

}

// source: http://filmicworlds.com/blog/filmic-tonemapping-operators/
vec3 OptimizedCineonToneMapping( vec3 color ) {

	// optimized filmic operator by Jim Hejl and Richard Burgess-Dawson
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );

}

// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs
vec3 RRTAndODTFit( vec3 v ) {

	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;

}

// this implementation of ACES is modified to accommodate a brighter viewing environment.
// the scale factor of 1/0.6 is subjective. see discussion in #19621.

vec3 ACESFilmicToneMapping( vec3 color ) {

	// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ), // transposed from source
		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);

	// ODT_SAT => XYZ => D60_2_D65 => sRGB
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ), // transposed from source
		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);

	color *= toneMappingExposure / 0.6;

	color = ACESInputMat * color;

	// Apply RRT and ODT
	color = RRTAndODTFit( color );

	color = ACESOutputMat * color;

	// Clamp to [0, 1]
	return saturate( color );

}

// Matrices for rec 2020 <> rec 709 color space conversion
// matrix provided in row-major order so it has been transposed
// https://www.itu.int/pub/R-REP-BT.2407-2017
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);

const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);

// https://iolite-engine.com/blog_posts/minimal_agx_implementation
// Mean error^2: 3.6705141e-06
vec3 agxDefaultContrastApprox( vec3 x ) {

	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;

	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;

}

// Input and output encoded as Linear-sRGB.
vec3 AgXToneMapping( vec3 color ) {

	// AgX constants
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);

	// explicit AgXOutsetMatrix generated from Filaments AgXOutsetMatrixInv
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);

	const float AgxMinEv = - 12.47393;  // log2(pow(2, LOG2_MIN) * MIDDLE_GRAY)
	const float AgxMaxEv = 4.026069;    // log2(pow(2, LOG2_MAX) * MIDDLE_GRAY)

	// AGX Tone Mapping implementation based on Filament, which is in turn based
	// on Blender's implementation for rec 2020 colors:
	// https://github.com/google/filament/pull/7236
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;

	color = AgXInsetMatrix * color;

	// Log2 encoding
	color = max( color, 1e-10 ); // avoid 0 or negative numbers for log2
	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );

	color = clamp( color, 0.0, 1.0 );

	// Apply sigmoid
	color = agxDefaultContrastApprox( color );

	// Apply AgX look
	// v = agxLook(v, look);

	color = AgXOutsetMatrix * color;

	// Linearize
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );

	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;

	return color;

}

vec3 CustomToneMapping( vec3 color ) { return color; }
`;var du=`
#ifdef USE_TRANSMISSION

	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;

	#ifdef USE_TRANSMISSIONMAP

		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;

	#endif

	#ifdef USE_THICKNESSMAP

		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;

	#endif

	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );

	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );

	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );

	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );

#endif
`;var pu=`
#ifdef USE_TRANSMISSION

	// Transmission code is based on glTF-Sampler-Viewer
	// https://github.com/KhronosGroup/glTF-Sample-Viewer

	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;

	#ifdef USE_TRANSMISSIONMAP

		uniform sampler2D transmissionMap;

	#endif

	#ifdef USE_THICKNESSMAP

		uniform sampler2D thicknessMap;

	#endif

	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;

	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;

	varying vec3 vWorldPosition;

	// Mipped Bicubic Texture Filtering by N8
	// https://www.shadertoy.com/view/Dl2SDW

	float w0( float a ) {

		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );

	}

	float w1( float a ) {

		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );

	}

	float w2( float a ){

		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );

	}

	float w3( float a ) {

		return ( 1.0 / 6.0 ) * ( a * a * a );

	}

	// g0 and g1 are the two amplitude functions
	float g0( float a ) {

		return w0( a ) + w1( a );

	}

	float g1( float a ) {

		return w2( a ) + w3( a );

	}

	// h0 and h1 are the two offset functions
	float h0( float a ) {

		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );

	}

	float h1( float a ) {

		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );

	}

	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {

		uv = uv * texelSize.zw + 0.5;

		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );

		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );

		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;

		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );

	}

	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {

		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );

	}

	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {

		// Direction of refracted light.
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );

		// Compute rotation-independant scaling of the model matrix.
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );

		// The thickness is specified in local space.
		return normalize( refractionVector ) * thickness * modelScale;

	}

	float applyIorToRoughness( const in float roughness, const in float ior ) {

		// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
		// an IOR of 1.5 results in the default amount of microfacet refraction.
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );

	}

	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {

		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );

	}

	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {

		if ( isinf( attenuationDistance ) ) {

			// Attenuation distance is +\u221E, i.e. the transmitted color is not attenuated at all.
			return vec3( 1.0 );

		} else {

			// Compute light attenuation using Beer's law.
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
			return transmittance;

		}

	}

	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {

		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;

		// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;

		// Sample framebuffer to get pixel the refracted ray hits.
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );

		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;

		// Get the specular component.
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );

		// As less light is transmitted, the opacity should be increased. This simple approximation does a decent job 
		// of modulating a CSS background, and has no effect when the buffer is opaque, due to a solid object or clear color.
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;

		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );

	}
#endif
`;var mu=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	varying vec2 vUv;

#endif
#ifdef USE_MAP

	varying vec2 vMapUv;

#endif
#ifdef USE_ALPHAMAP

	varying vec2 vAlphaMapUv;

#endif
#ifdef USE_LIGHTMAP

	varying vec2 vLightMapUv;

#endif
#ifdef USE_AOMAP

	varying vec2 vAoMapUv;

#endif
#ifdef USE_BUMPMAP

	varying vec2 vBumpMapUv;

#endif
#ifdef USE_NORMALMAP

	varying vec2 vNormalMapUv;

#endif
#ifdef USE_EMISSIVEMAP

	varying vec2 vEmissiveMapUv;

#endif
#ifdef USE_METALNESSMAP

	varying vec2 vMetalnessMapUv;

#endif
#ifdef USE_ROUGHNESSMAP

	varying vec2 vRoughnessMapUv;

#endif
#ifdef USE_ANISOTROPYMAP

	varying vec2 vAnisotropyMapUv;

#endif
#ifdef USE_CLEARCOATMAP

	varying vec2 vClearcoatMapUv;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	varying vec2 vClearcoatNormalMapUv;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	varying vec2 vClearcoatRoughnessMapUv;

#endif
#ifdef USE_IRIDESCENCEMAP

	varying vec2 vIridescenceMapUv;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	varying vec2 vIridescenceThicknessMapUv;

#endif
#ifdef USE_SHEEN_COLORMAP

	varying vec2 vSheenColorMapUv;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	varying vec2 vSheenRoughnessMapUv;

#endif
#ifdef USE_SPECULARMAP

	varying vec2 vSpecularMapUv;

#endif
#ifdef USE_SPECULAR_COLORMAP

	varying vec2 vSpecularColorMapUv;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	varying vec2 vSpecularIntensityMapUv;

#endif
#ifdef USE_TRANSMISSIONMAP

	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;

#endif
#ifdef USE_THICKNESSMAP

	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;

#endif
`;var gu=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	varying vec2 vUv;

#endif
#ifdef USE_MAP

	uniform mat3 mapTransform;
	varying vec2 vMapUv;

#endif
#ifdef USE_ALPHAMAP

	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;

#endif
#ifdef USE_LIGHTMAP

	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;

#endif
#ifdef USE_AOMAP

	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;

#endif
#ifdef USE_BUMPMAP

	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;

#endif
#ifdef USE_NORMALMAP

	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;

#endif
#ifdef USE_DISPLACEMENTMAP

	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;

#endif
#ifdef USE_EMISSIVEMAP

	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;

#endif
#ifdef USE_METALNESSMAP

	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;

#endif
#ifdef USE_ROUGHNESSMAP

	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;

#endif
#ifdef USE_ANISOTROPYMAP

	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;

#endif
#ifdef USE_CLEARCOATMAP

	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;

#endif
#ifdef USE_SHEEN_COLORMAP

	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;

#endif
#ifdef USE_IRIDESCENCEMAP

	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;

#endif
#ifdef USE_SPECULARMAP

	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;

#endif
#ifdef USE_SPECULAR_COLORMAP

	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;

#endif
#ifdef USE_TRANSMISSIONMAP

	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;

#endif
#ifdef USE_THICKNESSMAP

	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;

#endif
`;var _u=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	vUv = vec3( uv, 1 ).xy;

#endif
#ifdef USE_MAP

	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ALPHAMAP

	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_LIGHTMAP

	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_AOMAP

	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_BUMPMAP

	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_NORMALMAP

	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_DISPLACEMENTMAP

	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_EMISSIVEMAP

	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_METALNESSMAP

	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ROUGHNESSMAP

	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ANISOTROPYMAP

	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOATMAP

	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_IRIDESCENCEMAP

	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SHEEN_COLORMAP

	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULARMAP

	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULAR_COLORMAP

	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_TRANSMISSIONMAP

	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_THICKNESSMAP

	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;

#endif
`;var xu=`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_BATCHING

		worldPosition = batchingMatrix * worldPosition;

	#endif

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

#endif
`;var vu=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,Mu=`
uniform sampler2D t2D;
uniform float backgroundIntensity;

varying vec2 vUv;

void main() {

	vec4 texColor = texture2D( t2D, vUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_APLHA8 with video textures

		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );

	#endif

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`;var Su=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,Eu=`

#ifdef ENVMAP_TYPE_CUBE

	uniform samplerCube envMap;

#elif defined( ENVMAP_TYPE_CUBE_UV )

	uniform sampler2D envMap;

#endif

uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;

varying vec3 vWorldDirection;

#include <cube_uv_reflection_fragment>

void main() {

	#ifdef ENVMAP_TYPE_CUBE

		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );

	#elif defined( ENVMAP_TYPE_CUBE_UV )

		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );

	#else

		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );

	#endif

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`;var yu=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,Tu=`
uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;

varying vec3 vWorldDirection;

void main() {

	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );

	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`;var bu=`
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

// This is used for computing an equivalent of gl_FragCoord.z that is as high precision as possible.
// Some platforms compute gl_FragCoord at a lower precision which makes the manually computed value better for
// depth-based postprocessing effects. Reproduced on iPad with A10 processor / iPadOS 13.3.1.
varying vec2 vHighPrecisionZW;

void main() {

	#include <uv_vertex>

	#include <batching_vertex>
	#include <skinbase_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vHighPrecisionZW = gl_Position.zw;

}
`,Au=`
#if DEPTH_PACKING == 3200

	uniform float opacity;

#endif

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

varying vec2 vHighPrecisionZW;

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( 1.0 );

	#if DEPTH_PACKING == 3200

		diffuseColor.a = opacity;

	#endif

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	#include <logdepthbuf_fragment>

	// Higher precision equivalent of gl_FragCoord.z. This assumes depthRange has been left to its default values.
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;

	#if DEPTH_PACKING == 3200

		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );

	#elif DEPTH_PACKING == 3201

		gl_FragColor = packDepthToRGBA( fragCoordZ );

	#endif

}
`;var wu=`
#define DISTANCE

varying vec3 vWorldPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <batching_vertex>
	#include <skinbase_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>

	vWorldPosition = worldPosition.xyz;

}
`,Ru=`
#define DISTANCE

uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>

void main () {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( 1.0 );

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist ); // clamp to [ 0, 1 ]

	gl_FragColor = packDepthToRGBA( dist );

}
`;var Cu=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,Lu=`
uniform sampler2D tEquirect;

varying vec3 vWorldDirection;

#include <common>

void main() {

	vec3 direction = normalize( vWorldDirection );

	vec2 sampleUV = equirectUv( direction );

	gl_FragColor = texture2D( tEquirect, sampleUV );

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`;var Pu=`
uniform float scale;
attribute float lineDistance;

varying float vLineDistance;

#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	vLineDistance = scale * lineDistance;

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,Du=`
uniform vec3 diffuse;
uniform float opacity;

uniform float dashSize;
uniform float totalSize;

varying float vLineDistance;

#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	if ( mod( vLineDistance, totalSize ) > dashSize ) {

		discard;

	}

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>

	outgoingLight = diffuseColor.rgb; // simple shader

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`;var Uu=`
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>

}
`,Iu=`
uniform vec3 diffuse;
uniform float opacity;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );

	// accumulation (baked indirect lighting only)
	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;

	#else

		reflectedLight.indirectDiffuse += vec3( 1.0 );

	#endif

	// modulation
	#include <aomap_fragment>

	reflectedLight.indirectDiffuse *= diffuseColor.rgb;

	vec3 outgoingLight = reflectedLight.indirectDiffuse;

	#include <envmap_fragment>

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;var Nu=`
#define LAMBERT

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,Fu=`
#define LAMBERT

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;var Ou=`
#define MATCAP

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>

#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

	vViewPosition = - mvPosition.xyz;

}
`,Bu=`
#define MATCAP

uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;

varying vec3 vViewPosition;

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks

	#ifdef USE_MATCAP

		vec4 matcapColor = texture2D( matcap, uv );

	#else

		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 ); // default if matcap is missing

	#endif

	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;var Gu=`
#define NORMAL

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	varying vec3 vViewPosition;

#endif

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	vViewPosition = - mvPosition.xyz;

#endif

}
`,zu=`
#define NORMAL

uniform float opacity;

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	varying vec3 vViewPosition;

#endif

#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );

	#ifdef OPAQUE

		gl_FragColor.a = 1.0;

	#endif

}
`;var Hu=`
#define PHONG

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,Vu=`
#define PHONG

uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;var ku=`
#define STANDARD

varying vec3 vViewPosition;

#ifdef USE_TRANSMISSION

	varying vec3 vWorldPosition;

#endif

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

#ifdef USE_TRANSMISSION

	vWorldPosition = worldPosition.xyz;

#endif
}
`,Wu=`
#define STANDARD

#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef IOR
	uniform float ior;
#endif

#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;

	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif

	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif

#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif

#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif

#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;

	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif

	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif

#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;

	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif

varying vec3 vViewPosition;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;

	#include <transmission_fragment>

	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;

	#ifdef USE_SHEEN

		// Sheen energy compensation approximation calculation can be found at the end of
		// https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );

		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;

	#endif

	#ifdef USE_CLEARCOAT

		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );

		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );

		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;

	#endif

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;var Xu=`
#define TOON

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,qu=`
#define TOON

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;var Yu=`
uniform float size;
uniform float scale;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#ifdef USE_POINTS_UV

	varying vec2 vUv;
	uniform mat3 uvTransform;

#endif

void main() {

	#ifdef USE_POINTS_UV

		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	#endif

	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>

	gl_PointSize = size;

	#ifdef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );

	#endif

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>

}
`,ju=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`;var Zu=`
#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>

void main() {

	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,Ku=`
uniform vec3 color;
uniform float opacity;

#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>

void main() {

	#include <logdepthbuf_fragment>

	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );

	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>

}
`;var Ju=`
uniform float rotation;
uniform vec2 center;

#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );

	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

	#ifndef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) scale *= - mvPosition.z;

	#endif

	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;

	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;

	mvPosition.xy += rotatedPosition;

	gl_Position = projectionMatrix * mvPosition;

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,$u=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>

}
`;var Ye={alphahash_fragment:Ml,alphahash_pars_fragment:Sl,alphamap_fragment:El,alphamap_pars_fragment:yl,alphatest_fragment:Tl,alphatest_pars_fragment:bl,aomap_fragment:Al,aomap_pars_fragment:wl,batching_pars_vertex:Rl,batching_vertex:Cl,begin_vertex:Ll,beginnormal_vertex:Pl,bsdfs:Dl,iridescence_fragment:Ul,bumpmap_pars_fragment:Il,clipping_planes_fragment:Nl,clipping_planes_pars_fragment:Fl,clipping_planes_pars_vertex:Ol,clipping_planes_vertex:Bl,color_fragment:Gl,color_pars_fragment:zl,color_pars_vertex:Hl,color_vertex:Vl,common:kl,cube_uv_reflection_fragment:Wl,defaultnormal_vertex:Xl,displacementmap_pars_vertex:ql,displacementmap_vertex:Yl,emissivemap_fragment:jl,emissivemap_pars_fragment:Zl,colorspace_fragment:Kl,colorspace_pars_fragment:Jl,envmap_fragment:$l,envmap_common_pars_fragment:Ql,envmap_pars_fragment:ec,envmap_pars_vertex:tc,envmap_physical_pars_fragment:dc,envmap_vertex:ic,fog_vertex:nc,fog_pars_vertex:rc,fog_fragment:oc,fog_pars_fragment:ac,gradientmap_pars_fragment:sc,lightmap_fragment:lc,lightmap_pars_fragment:cc,lights_lambert_fragment:uc,lights_lambert_pars_fragment:fc,lights_pars_begin:hc,lights_toon_fragment:pc,lights_toon_pars_fragment:mc,lights_phong_fragment:gc,lights_phong_pars_fragment:_c,lights_physical_fragment:xc,lights_physical_pars_fragment:vc,lights_fragment_begin:Mc,lights_fragment_maps:Sc,lights_fragment_end:Ec,logdepthbuf_fragment:yc,logdepthbuf_pars_fragment:Tc,logdepthbuf_pars_vertex:bc,logdepthbuf_vertex:Ac,map_fragment:wc,map_pars_fragment:Rc,map_particle_fragment:Cc,map_particle_pars_fragment:Lc,metalnessmap_fragment:Pc,metalnessmap_pars_fragment:Dc,morphcolor_vertex:Uc,morphnormal_vertex:Ic,morphtarget_pars_vertex:Nc,morphtarget_vertex:Fc,normal_fragment_begin:Oc,normal_fragment_maps:Bc,normal_pars_fragment:Gc,normal_pars_vertex:zc,normal_vertex:Hc,normalmap_pars_fragment:Vc,clearcoat_normal_fragment_begin:kc,clearcoat_normal_fragment_maps:Wc,clearcoat_pars_fragment:Xc,iridescence_pars_fragment:qc,opaque_fragment:Yc,packing:jc,premultiplied_alpha_fragment:Zc,project_vertex:Kc,dithering_fragment:Jc,dithering_pars_fragment:$c,roughnessmap_fragment:Qc,roughnessmap_pars_fragment:eu,shadowmap_pars_fragment:tu,shadowmap_pars_vertex:iu,shadowmap_vertex:nu,shadowmask_pars_fragment:ru,skinbase_vertex:ou,skinning_pars_vertex:au,skinning_vertex:su,skinnormal_vertex:lu,specularmap_fragment:cu,specularmap_pars_fragment:uu,tonemapping_fragment:fu,tonemapping_pars_fragment:hu,transmission_fragment:du,transmission_pars_fragment:pu,uv_pars_fragment:mu,uv_pars_vertex:gu,uv_vertex:_u,worldpos_vertex:xu,background_vert:vu,background_frag:Mu,backgroundCube_vert:Su,backgroundCube_frag:Eu,cube_vert:yu,cube_frag:Tu,depth_vert:bu,depth_frag:Au,distanceRGBA_vert:wu,distanceRGBA_frag:Ru,equirect_vert:Cu,equirect_frag:Lu,linedashed_vert:Pu,linedashed_frag:Du,meshbasic_vert:Uu,meshbasic_frag:Iu,meshlambert_vert:Nu,meshlambert_frag:Fu,meshmatcap_vert:Ou,meshmatcap_frag:Bu,meshnormal_vert:Gu,meshnormal_frag:zu,meshphong_vert:Hu,meshphong_frag:Vu,meshphysical_vert:ku,meshphysical_frag:Wu,meshtoon_vert:Xu,meshtoon_frag:qu,points_vert:Yu,points_frag:ju,shadow_vert:Zu,shadow_frag:Ku,sprite_vert:Ju,sprite_frag:$u};var fe={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}};var ui={basic:{uniforms:kt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:kt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:kt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:kt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:kt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:kt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:kt([fe.points,fe.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:kt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:kt([fe.common,fe.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:kt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:kt([fe.sprite,fe.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:kt([fe.common,fe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:kt([fe.lights,fe.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};ui.physical={uniforms:kt([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};var ro={r:0,b:0,g:0};function Qu(i,e,t,n,r,o,s){let a=new Ze(0),l=o===!0?0:1,c,u,h=null,p=0,m=null;function g(d,f){let b=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?t:e).get(x)),x===null?M(a,l):x&&x.isColor&&(M(x,1),b=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Bi)?(u===void 0&&(u=new At(new qi(1,1,1),new bt({name:"BackgroundCubeMaterial",uniforms:Ui(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:gt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,L,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=Qe.getTransfer(x.colorSpace)!==at,(h!==x||p!==x.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,p=x.version,m=i.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new At(new Xr(2,2),new bt({name:"BackgroundMaterial",uniforms:Ui(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(x.colorSpace)!==at,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||p!==x.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,p=x.version,m=i.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function M(d,f){d.getRGB(ro,qr(i)),n.buffers.color.setClear(ro.r,ro.g,ro.b,f,s)}return{getClearColor:function(){return a},setClearColor:function(d,f=1){a.set(d),l=f,M(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,M(a,l)},render:g}}function ef(i,e,t,n){let r=i.getParameter(i.MAX_VERTEX_ATTRIBS),o=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||o!==null,a={},l=d(null),c=l,u=!1;function h(P,G,X,J,Y){let q=!1;if(s){let j=M(J,X,G);c!==j&&(c=j,m(c.object)),q=f(P,J,X,Y),q&&b(P,J,X,Y)}else{let j=G.wireframe===!0;(c.geometry!==J.id||c.program!==X.id||c.wireframe!==j)&&(c.geometry=J.id,c.program=X.id,c.wireframe=j,q=!0)}Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(q||u)&&(u=!1,F(P,G,X,J),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function p(){return n.isWebGL2?i.createVertexArray():o.createVertexArrayOES()}function m(P){return n.isWebGL2?i.bindVertexArray(P):o.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?i.deleteVertexArray(P):o.deleteVertexArrayOES(P)}function M(P,G,X){let J=X.wireframe===!0,Y=a[P.id];Y===void 0&&(Y={},a[P.id]=Y);let q=Y[G.id];q===void 0&&(q={},Y[G.id]=q);let j=q[J];return j===void 0&&(j=d(p()),q[J]=j),j}function d(P){let G=[],X=[],J=[];for(let Y=0;Y<r;Y++)G[Y]=0,X[Y]=0,J[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:X,attributeDivisors:J,object:P,attributes:{},index:null}}function f(P,G,X,J){let Y=c.attributes,q=G.attributes,j=0,ee=X.getAttributes();for(let _e in ee)if(ee[_e].location>=0){let Z=Y[_e],se=q[_e];if(se===void 0&&(_e==="instanceMatrix"&&P.instanceMatrix&&(se=P.instanceMatrix),_e==="instanceColor"&&P.instanceColor&&(se=P.instanceColor)),Z===void 0||Z.attribute!==se||se&&Z.data!==se.data)return!0;j++}return c.attributesNum!==j||c.index!==J}function b(P,G,X,J){let Y={},q=G.attributes,j=0,ee=X.getAttributes();for(let _e in ee)if(ee[_e].location>=0){let Z=q[_e];Z===void 0&&(_e==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),_e==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor));let se={};se.attribute=Z,Z&&Z.data&&(se.data=Z.data),Y[_e]=se,j++}c.attributes=Y,c.attributesNum=j,c.index=J}function x(){let P=c.newAttributes;for(let G=0,X=P.length;G<X;G++)P[G]=0}function A(P){D(P,0)}function D(P,G){let X=c.newAttributes,J=c.enabledAttributes,Y=c.attributeDivisors;X[P]=1,J[P]===0&&(i.enableVertexAttribArray(P),J[P]=1),Y[P]!==G&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,G),Y[P]=G)}function L(){let P=c.newAttributes,G=c.enabledAttributes;for(let X=0,J=G.length;X<J;X++)G[X]!==P[X]&&(i.disableVertexAttribArray(X),G[X]=0)}function R(P,G,X,J,Y,q,j){j===!0?i.vertexAttribIPointer(P,G,X,Y,q):i.vertexAttribPointer(P,G,X,J,Y,q)}function F(P,G,X,J){if(n.isWebGL2===!1&&(P.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let Y=J.attributes,q=X.getAttributes(),j=G.defaultAttributeValues;for(let ee in q){let _e=q[ee];if(_e.location>=0){let k=Y[ee];if(k===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(k=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(k=P.instanceColor)),k!==void 0){let Z=k.normalized,se=k.itemSize,Q=t.get(k);if(Q===void 0)continue;let Se=Q.buffer,ze=Q.type,Ie=Q.bytesPerElement,Le=n.isWebGL2===!0&&(ze===i.INT||ze===i.UNSIGNED_INT||k.gpuType===_r);if(k.isInterleavedBufferAttribute){let Ke=k.data,B=Ke.stride,vt=k.offset;if(Ke.isInstancedInterleavedBuffer){for(let Re=0;Re<_e.locationSize;Re++)D(_e.location+Re,Ke.meshPerAttribute);P.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Ke.meshPerAttribute*Ke.count)}else for(let Re=0;Re<_e.locationSize;Re++)A(_e.location+Re);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let Re=0;Re<_e.locationSize;Re++)R(_e.location+Re,se/_e.locationSize,ze,Z,B*Ie,(vt+se/_e.locationSize*Re)*Ie,Le)}else{if(k.isInstancedBufferAttribute){for(let Ke=0;Ke<_e.locationSize;Ke++)D(_e.location+Ke,k.meshPerAttribute);P.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let Ke=0;Ke<_e.locationSize;Ke++)A(_e.location+Ke);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let Ke=0;Ke<_e.locationSize;Ke++)R(_e.location+Ke,se/_e.locationSize,ze,Z,se*Ie,se/_e.locationSize*Ke*Ie,Le)}}else if(j!==void 0){let Z=j[ee];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(_e.location,Z);break;case 3:i.vertexAttrib3fv(_e.location,Z);break;case 4:i.vertexAttrib4fv(_e.location,Z);break;default:i.vertexAttrib1fv(_e.location,Z)}}}}L()}function S(){K();for(let P in a){let G=a[P];for(let X in G){let J=G[X];for(let Y in J)g(J[Y].object),delete J[Y];delete G[X]}delete a[P]}}function T(P){if(a[P.id]===void 0)return;let G=a[P.id];for(let X in G){let J=G[X];for(let Y in J)g(J[Y].object),delete J[Y];delete G[X]}delete a[P.id]}function O(P){for(let G in a){let X=a[G];if(X[P.id]===void 0)continue;let J=X[P.id];for(let Y in J)g(J[Y].object),delete J[Y];delete X[P.id]}}function K(){W(),u=!0,c!==l&&(c=l,m(c.object))}function W(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:K,resetDefaultState:W,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:O,initAttributes:x,enableAttribute:A,disableUnusedAttributes:L}}function tf(i,e,t,n){let r=n.isWebGL2,o;function s(u){o=u}function a(u,h){i.drawArrays(o,u,h),t.update(h,o,1)}function l(u,h,p){if(p===0)return;let m,g;if(r)m=i,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](o,u,h,p),t.update(h,o,p)}function c(u,h,p){if(p===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<p;g++)this.render(u[g],h[g]);else{m.multiDrawArraysWEBGL(o,u,0,h,0,p);let g=0;for(let M=0;M<p;M++)g+=h[M];t.update(g,o,1)}}this.setMode=s,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function nf(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=o(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=s||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),M=i.getParameter(i.MAX_VERTEX_ATTRIBS),d=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=p>0,A=s||e.has("OES_texture_float"),D=x&&A,L=s?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:g,maxAttributes:M,maxVertexUniforms:d,maxVaryings:f,maxFragmentUniforms:b,vertexTextures:x,floatFragmentTextures:A,floatVertexTextures:D,maxSamples:L}}function rf(i){let e=this,t=null,n=0,r=!1,o=!1,s=new _i,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){let m=h.length!==0||p||n!==0||r;return r=p,n=h.length,m},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,p){t=u(h,p,0)},this.setState=function(h,p,m){let g=h.clippingPlanes,M=h.clipIntersection,d=h.clipShadows,f=i.get(h);if(!r||g===null||g.length===0||o&&!d)o?u(null):c();else{let b=o?0:n,x=b*4,A=f.clippingState||null;l.value=A,A=u(g,p,x,m);for(let D=0;D!==x;++D)A[D]=t[D];f.clippingState=A,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,p,m,g){let M=h!==null?h.length:0,d=null;if(M!==0){if(d=l.value,g!==!0||d===null){let f=m+M*4,b=p.matrixWorldInverse;a.getNormalMatrix(b),(d===null||d.length<f)&&(d=new Float32Array(f));for(let x=0,A=m;x!==M;++x,A+=4)s.copy(h[x]).applyMatrix4(b,a),s.normal.toArray(d,A),d[A+3]=s.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,d}}var Nn,Fn=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Nn===void 0&&(Nn=Wi("canvas")),Nn.width=e.width,Nn.height=e.height;let n=Nn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Nn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Wi("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Gi(o[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gi(t[n]/255)*255):t[n]=Gi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}};var Oh=0,On=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=yi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Ca(r[s].image)):o.push(Ca(r[s]))}else o=Ca(r);n.url=o}return t||(e.images[this.uuid]=n),n}};function Ca(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fn.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Bh=0,wt=class i extends Yt{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Wt,r=Wt,o=Et,s=di,a=Ft,l=Jt,c=i.DEFAULT_ANISOTROPY,u=Pt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=yi(),this.name="",this.source=new On(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Xi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===mi?mt:Pt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Oo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ir:e.x=e.x-Math.floor(e.x);break;case Wt:e.x=e.x<0?0:1;break;case nr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ir:e.y=e.y-Math.floor(e.y);break;case Wt:e.y=e.y<0?0:1;break;case nr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Xi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===mt?mi:Cr}set encoding(e){Xi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===mi?mt:Pt}};wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=Oo;wt.DEFAULT_ANISOTROPY=1;var oo=class extends Yt{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);let r={width:e,height:t,depth:1};n.encoding!==void 0&&(Xi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===mi?mt:Pt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Et,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new wt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new On(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}};var jt=class extends oo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}};var Bn=class extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=qt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};var Bt=class extends Bn{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=or*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return or*2*Math.atan(Math.tan(Pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Pr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,t-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}let a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Gn=-90,zn=1,ao=class extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Bt(Gn,zn,e,t);r.layers=this.layers,this.add(r);let o=new Bt(Gn,zn,e,t);o.layers=this.layers,this.add(o);let s=new Bt(Gn,zn,e,t);s.layers=this.layers,this.add(s);let a=new Bt(Gn,zn,e,t);a.layers=this.layers,this.add(a);let l=new Bt(Gn,zn,e,t);l.layers=this.layers,this.add(l);let c=new Bt(Gn,zn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,o,s,a,l]=t;for(let c of t)this.remove(c);if(e===qt)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===en)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[o,s,a,l,c,u]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,o),e.setRenderTarget(n,1,r),e.render(t,s),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,p,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}};var Hn=class extends wt{constructor(e,t,n,r,o,s,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:hi,super(e,t,n,r,o,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var so=class extends jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Xi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===mi?mt:Pt),this.texture=new Hn(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Et}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new qi(5,5,5),o=new bt({name:"CubemapFromEquirect",uniforms:Ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gt,blending:ri});o.uniforms.tEquirect.value=t;let s=new At(r,o),a=t.minFilter;return t.minFilter===di&&(t.minFilter=Et),new ao(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,r){let o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(o)}};function of(i){let e=new WeakMap;function t(s,a){return a===er?s.mapping=hi:a===tr&&(s.mapping=Si),s}function n(s){if(s&&s.isTexture){let a=s.mapping;if(a===er||a===tr)if(e.has(s)){let l=e.get(s).texture;return t(l,s.mapping)}else{let l=s.image;if(l&&l.height>0){let c=new so(l.height/2);return c.fromEquirectangularTexture(i,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){let a=s.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}var Vn=class extends Bn{constructor(e=-1,t=1,n=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=n-e,s=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Wn=4,af=[.125,.215,.35,.446,.526,.582],ln=20,La=new Vn,sf=new Ze,Pa=null,Da=0,Ua=0,sn=(1+Math.sqrt(5))/2,kn=1/sn,lf=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,sn,kn),new N(0,sn,-kn),new N(kn,0,sn),new N(-kn,0,sn),new N(sn,kn,0),new N(-sn,kn,0)],hr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Pa=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),this._setSize(256);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ff(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pa,Da,Ua),e.scissorTest=!1,lo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hi||e.mapping===Si?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pa=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:Ci,format:Ft,colorSpace:Ot,depthBuffer:!1},r=cf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cf(e,t,n);let{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gh(o)),this._blurMaterial=zh(o,e,t)}return r}_compileMaterial(e){let t=new At(this._lodPlanes[0],e);this._renderer.compile(t,La)}_sceneToCubeUV(e,t,n,r){let a=new Bt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,p=u.toneMapping;u.getClearColor(sf),u.toneMapping=oi,u.autoClear=!1;let m=new Pn({name:"PMREM.Background",side:gt,depthWrite:!1,depthTest:!1}),g=new At(new qi,m),M=!1,d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,M=!0):(m.color.copy(sf),M=!0);for(let f=0;f<6;f++){let b=f%3;b===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):b===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let x=this._cubeSize;lo(r,b*x,f>2?x:0,x,x),u.setRenderTarget(r),M&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=p,u.autoClear=h,e.background=d}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===hi||e.mapping===Si;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ff()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uf());let o=r?this._cubemapMaterial:this._equirectMaterial,s=new At(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;let l=this._cubeSize;lo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,La)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=lf[(r-1)%lf.length];this._blur(e,r-1,r,o,s)}t.autoClear=n}_blur(e,t,n,r,o){let s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",o),this._halfBlur(s,e,n,n,r,"longitudinal",o)}_halfBlur(e,t,n,r,o,s,a){let l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new At(this._lodPlanes[r],c),p=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*ln-1),M=o/g,d=isFinite(o)?1+Math.floor(u*M):ln;d>ln&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${ln}`);let f=[],b=0;for(let R=0;R<ln;++R){let F=R/M,S=Math.exp(-F*F/2);f.push(S),R===0?b+=S:R<d&&(b+=2*S)}for(let R=0;R<f.length;R++)f[R]=f[R]/b;p.envMap.value=e.texture,p.samples.value=d,p.weights.value=f,p.latitudinal.value=s==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:x}=this;p.dTheta.value=g,p.mipInt.value=x-n;let A=this._sizeLods[r],D=3*A*(r>x-Wn?r-x+Wn:0),L=4*(this._cubeSize-A);lo(t,D,L,3*A,2*A),l.setRenderTarget(t),l.render(h,La)}};function Gh(i){let e=[],t=[],n=[],r=i,o=i-Wn+1+af.length;for(let s=0;s<o;s++){let a=Math.pow(2,r);t.push(a);let l=1/a;s>i-Wn?l=af[s-i+Wn-1]:s===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,p=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,M=3,d=2,f=1,b=new Float32Array(M*g*m),x=new Float32Array(d*g*m),A=new Float32Array(f*g*m);for(let L=0;L<m;L++){let R=L%3*2/3-1,F=L>2?0:-1,S=[R,F,0,R+2/3,F,0,R+2/3,F+1,0,R,F,0,R+2/3,F+1,0,R,F+1,0];b.set(S,M*g*L),x.set(p,d*g*L);let T=[L,L,L,L,L,L];A.set(T,f*g*L)}let D=new Ut;D.setAttribute("position",new dt(b,M)),D.setAttribute("uv",new dt(x,d)),D.setAttribute("faceIndex",new dt(A,f)),e.push(D),r>Wn&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function cf(i,e,t){let n=new jt(i,e,t);return n.texture.mapping=Bi,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lo(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function zh(i,e,t){let n=new Float32Array(ln),r=new N(0,1,0);return new bt({name:"SphericalGaussianBlur",defines:{n:ln,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function uf(){return new bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function ff(){return new bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Ia(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hf(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===er||l===tr,u=l===hi||l===Si;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new hr(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{let h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new hr(i));let p=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",o),p.texture}else return null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function o(a){let l=a.target;l.removeEventListener("dispose",o);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function df(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function pf(i,e,t,n){let r={},o=new WeakMap;function s(h){let p=h.target;p.index!==null&&e.remove(p.index);for(let g in p.attributes)e.remove(p.attributes[g]);for(let g in p.morphAttributes){let M=p.morphAttributes[g];for(let d=0,f=M.length;d<f;d++)e.remove(M[d])}p.removeEventListener("dispose",s),delete r[p.id];let m=o.get(p);m&&(e.remove(m),o.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(h,p){return r[p.id]===!0||(p.addEventListener("dispose",s),r[p.id]=!0,t.memory.geometries++),p}function l(h){let p=h.attributes;for(let g in p)e.update(p[g],i.ARRAY_BUFFER);let m=h.morphAttributes;for(let g in m){let M=m[g];for(let d=0,f=M.length;d<f;d++)e.update(M[d],i.ARRAY_BUFFER)}}function c(h){let p=[],m=h.index,g=h.attributes.position,M=0;if(m!==null){let b=m.array;M=m.version;for(let x=0,A=b.length;x<A;x+=3){let D=b[x+0],L=b[x+1],R=b[x+2];p.push(D,L,L,R,R,D)}}else if(g!==void 0){let b=g.array;M=g.version;for(let x=0,A=b.length/3-1;x<A;x+=3){let D=x+0,L=x+1,R=x+2;p.push(D,L,L,R,R,D)}}else return;let d=new(Wr(p)?Tn:yn)(p,1);d.version=M;let f=o.get(h);f&&e.remove(f),o.set(h,d)}function u(h){let p=o.get(h);if(p){let m=h.index;m!==null&&p.version<m.version&&c(h)}else c(h);return o.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function mf(i,e,t,n){let r=n.isWebGL2,o;function s(m){o=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function u(m,g){i.drawElements(o,g,a,m*l),t.update(g,o,1)}function h(m,g,M){if(M===0)return;let d,f;if(r)d=i,f="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](o,g,a,m*l,M),t.update(g,o,M)}function p(m,g,M){if(M===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<M;f++)this.render(m[f]/l,g[f]);else{d.multiDrawElementsWEBGL(o,g,0,a,m,0,M);let f=0;for(let b=0;b<M;b++)f+=g[b];t.update(f,o,1)}}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=p}function gf(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,s,a){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=a*(o/3);break;case i.LINES:t.lines+=a*(o/2);break;case i.LINE_STRIP:t.lines+=a*(o-1);break;case i.LINE_LOOP:t.lines+=a*o;break;case i.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}var Xn=class extends wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};function Hh(i,e){return i[0]-e[0]}function Vh(i,e){return Math.abs(e[1])-Math.abs(i[1])}function _f(i,e,t){let n={},r=new Float32Array(8),o=new WeakMap,s=new tt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){let p=c.morphTargetInfluences;if(e.isWebGL2===!0){let m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0,M=o.get(u);if(M===void 0||M.count!==g){let P=function(){K.dispose(),o.delete(u),u.removeEventListener("dispose",P)};M!==void 0&&M.texture.dispose();let b=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,D=u.morphAttributes.position||[],L=u.morphAttributes.normal||[],R=u.morphAttributes.color||[],F=0;b===!0&&(F=1),x===!0&&(F=2),A===!0&&(F=3);let S=u.attributes.position.count*F,T=1;S>e.maxTextureSize&&(T=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let O=new Float32Array(S*T*4*g),K=new Xn(O,S,T,g);K.type=Qt,K.needsUpdate=!0;let W=F*4;for(let G=0;G<g;G++){let X=D[G],J=L[G],Y=R[G],q=S*T*4*G;for(let j=0;j<X.count;j++){let ee=j*W;b===!0&&(s.fromBufferAttribute(X,j),O[q+ee+0]=s.x,O[q+ee+1]=s.y,O[q+ee+2]=s.z,O[q+ee+3]=0),x===!0&&(s.fromBufferAttribute(J,j),O[q+ee+4]=s.x,O[q+ee+5]=s.y,O[q+ee+6]=s.z,O[q+ee+7]=0),A===!0&&(s.fromBufferAttribute(Y,j),O[q+ee+8]=s.x,O[q+ee+9]=s.y,O[q+ee+10]=s.z,O[q+ee+11]=Y.itemSize===4?s.w:1)}}M={count:g,texture:K,size:new Ve(S,T)},o.set(u,M),u.addEventListener("dispose",P)}let d=0;for(let b=0;b<p.length;b++)d+=p[b];let f=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(i,"morphTargetBaseInfluence",f),h.getUniforms().setValue(i,"morphTargetInfluences",p),h.getUniforms().setValue(i,"morphTargetsTexture",M.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",M.size)}else{let m=p===void 0?0:p.length,g=n[u.id];if(g===void 0||g.length!==m){g=[];for(let x=0;x<m;x++)g[x]=[x,0];n[u.id]=g}for(let x=0;x<m;x++){let A=g[x];A[0]=x,A[1]=p[x]}g.sort(Vh);for(let x=0;x<8;x++)x<m&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Hh);let M=u.morphAttributes.position,d=u.morphAttributes.normal,f=0;for(let x=0;x<8;x++){let A=a[x],D=A[0],L=A[1];D!==Number.MAX_SAFE_INTEGER&&L?(M&&u.getAttribute("morphTarget"+x)!==M[D]&&u.setAttribute("morphTarget"+x,M[D]),d&&u.getAttribute("morphNormal"+x)!==d[D]&&u.setAttribute("morphNormal"+x,d[D]),r[x]=L,f+=L):(M&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),d&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),r[x]=0)}let b=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(i,"morphTargetBaseInfluence",b),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function xf(i,e,t,n){let r=new WeakMap;function o(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return h}function s(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:s}}var co=class extends wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qn=class extends wt{constructor(e,t,n,r,o,s,a,l,c,u){if(u=u!==void 0?u:pi,u!==pi&&u!==Ei)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===pi&&(n=$t),n===void 0&&u===Ei&&(n=ai),super(null,r,o,s,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Mt,this.minFilter=l!==void 0?l:Mt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var bf=new wt,Af=new qn(1,1);Af.compareFunction=Lr;var wf=new Xn,Rf=new co,Cf=new Hn,vf=[],Mf=[],Sf=new Float32Array(16),Ef=new Float32Array(9),yf=new Float32Array(4);function Yn(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,o=vf[r];if(o===void 0&&(o=new Float32Array(r),vf[r]=o),e!==0){n.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,i[s].toArray(o,a)}return o}function Rt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function uo(i,e){let t=Mf[e];t===void 0&&(t=new Int32Array(e),Mf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function kh(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Wh(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2fv(this.addr,e),Ct(t,e)}}function Xh(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;i.uniform3fv(this.addr,e),Ct(t,e)}}function qh(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4fv(this.addr,e),Ct(t,e)}}function Yh(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;yf.set(n),i.uniformMatrix2fv(this.addr,!1,yf),Ct(t,n)}}function jh(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;Ef.set(n),i.uniformMatrix3fv(this.addr,!1,Ef),Ct(t,n)}}function Zh(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;Sf.set(n),i.uniformMatrix4fv(this.addr,!1,Sf),Ct(t,n)}}function Kh(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Jh(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2iv(this.addr,e),Ct(t,e)}}function $h(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3iv(this.addr,e),Ct(t,e)}}function Qh(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4iv(this.addr,e),Ct(t,e)}}function ed(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function td(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2uiv(this.addr,e),Ct(t,e)}}function id(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3uiv(this.addr,e),Ct(t,e)}}function nd(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4uiv(this.addr,e),Ct(t,e)}}function rd(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o=this.type===i.SAMPLER_2D_SHADOW?Af:bf;t.setTexture2D(e||o,r)}function od(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Rf,r)}function ad(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Cf,r)}function sd(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||wf,r)}function ld(i){switch(i){case 5126:return kh;case 35664:return Wh;case 35665:return Xh;case 35666:return qh;case 35674:return Yh;case 35675:return jh;case 35676:return Zh;case 5124:case 35670:return Kh;case 35667:case 35671:return Jh;case 35668:case 35672:return $h;case 35669:case 35673:return Qh;case 5125:return ed;case 36294:return td;case 36295:return id;case 36296:return nd;case 35678:case 36198:case 36298:case 36306:case 35682:return rd;case 35679:case 36299:case 36307:return od;case 35680:case 36300:case 36308:case 36293:return ad;case 36289:case 36303:case 36311:case 36292:return sd}}function cd(i,e){i.uniform1fv(this.addr,e)}function ud(i,e){let t=Yn(e,this.size,2);i.uniform2fv(this.addr,t)}function fd(i,e){let t=Yn(e,this.size,3);i.uniform3fv(this.addr,t)}function hd(i,e){let t=Yn(e,this.size,4);i.uniform4fv(this.addr,t)}function dd(i,e){let t=Yn(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function pd(i,e){let t=Yn(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function md(i,e){let t=Yn(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function gd(i,e){i.uniform1iv(this.addr,e)}function _d(i,e){i.uniform2iv(this.addr,e)}function xd(i,e){i.uniform3iv(this.addr,e)}function vd(i,e){i.uniform4iv(this.addr,e)}function Md(i,e){i.uniform1uiv(this.addr,e)}function Sd(i,e){i.uniform2uiv(this.addr,e)}function Ed(i,e){i.uniform3uiv(this.addr,e)}function yd(i,e){i.uniform4uiv(this.addr,e)}function Td(i,e,t){let n=this.cache,r=e.length,o=uo(t,r);Rt(n,o)||(i.uniform1iv(this.addr,o),Ct(n,o));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||bf,o[s])}function bd(i,e,t){let n=this.cache,r=e.length,o=uo(t,r);Rt(n,o)||(i.uniform1iv(this.addr,o),Ct(n,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Rf,o[s])}function Ad(i,e,t){let n=this.cache,r=e.length,o=uo(t,r);Rt(n,o)||(i.uniform1iv(this.addr,o),Ct(n,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Cf,o[s])}function wd(i,e,t){let n=this.cache,r=e.length,o=uo(t,r);Rt(n,o)||(i.uniform1iv(this.addr,o),Ct(n,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||wf,o[s])}function Rd(i){switch(i){case 5126:return cd;case 35664:return ud;case 35665:return fd;case 35666:return hd;case 35674:return dd;case 35675:return pd;case 35676:return md;case 5124:case 35670:return gd;case 35667:case 35671:return _d;case 35668:case 35672:return xd;case 35669:case 35673:return vd;case 5125:return Md;case 36294:return Sd;case 36295:return Ed;case 36296:return yd;case 35678:case 36198:case 36298:case 36306:case 35682:return Td;case 35679:case 36299:case 36307:return bd;case 35680:case 36300:case 36308:case 36293:return Ad;case 36289:case 36303:case 36311:case 36292:return wd}}var Fa=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ld(t.type)}},Oa=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Rd(t.type)}},Ba=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let o=0,s=r.length;o!==s;++o){let a=r[o];a.setValue(e,t[a.id],n)}}},Na=/(\w+)(\])?(\[|\.)?/g;function Tf(i,e){i.seq.push(e),i.map[e.id]=e}function Cd(i,e,t){let n=i.name,r=n.length;for(Na.lastIndex=0;;){let o=Na.exec(n),s=Na.lastIndex,a=o[1],l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){Tf(t,c===void 0?new Fa(a,i,e):new Oa(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Ba(a),Tf(t,h)),t=h}}}var ji=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let o=e.getActiveUniform(t,r),s=e.getUniformLocation(t,o.name);Cd(o,s,this)}}setValue(e,t,n,r){let o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,s=t.length;o!==s;++o){let a=t[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,o=e.length;r!==o;++r){let s=e[r];s.id in t&&n.push(s)}return n}};function Ga(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Ld=37297,Pd=0;function Dd(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){let a=s+1;n.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return n.join(`
`)}function Ud(i){let e=Qe.getPrimaries(Qe.workingColorSpace),t=Qe.getPrimaries(i),n;switch(e===t?n="":e===gn&&t===mn?n="LinearDisplayP3ToLinearSRGB":e===mn&&t===gn&&(n="LinearSRGBToLinearDisplayP3"),i){case Ot:case $i:return[n,"LinearTransferOETF"];case mt:case dn:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Lf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let s=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Dd(i.getShaderSource(e),s)}else return r}function Id(i,e){let t=Ud(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Nd(i,e){let t;switch(e){case Ts:t="Linear";break;case bs:t="Reinhard";break;case As:t="OptimizedCineon";break;case ws:t="ACESFilmic";break;case Cs:t="AgX";break;case Rs:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Fd(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(jn).join(`
`)}function Od(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(jn).join(`
`)}function Bd(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Gd(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let o=i.getActiveAttrib(e,r),s=o.name,a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:i.getAttribLocation(e,s),locationSize:a}}return t}function jn(i){return i!==""}function Pf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Df(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var zd=/^[ \t]*#include +<([\w\d./]+)>/gm;function za(i){return i.replace(zd,Vd)}var Hd=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Vd(i,e){let t=Ye[e];if(t===void 0){let n=Hd.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return za(t)}var kd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uf(i){return i.replace(kd,Wd)}function Wd(i,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function If(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Xd(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===pr?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===$a?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===fi&&(e="SHADOWMAP_TYPE_VSM"),e}function qd(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case hi:case Si:e="ENVMAP_TYPE_CUBE";break;case Bi:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yd(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Si:e="ENVMAP_MODE_REFRACTION";break}return e}function jd(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case mr:e="ENVMAP_BLENDING_MULTIPLY";break;case Es:e="ENVMAP_BLENDING_MIX";break;case ys:e="ENVMAP_BLENDING_ADD";break}return e}function Zd(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Nf(i,e,t,n){let r=i.getContext(),o=t.defines,s=t.vertexShader,a=t.fragmentShader,l=Xd(t),c=qd(t),u=Yd(t),h=jd(t),p=Zd(t),m=t.isWebGL2?"":Fd(t),g=Od(t),M=Bd(o),d=r.createProgram(),f,b,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(jn).join(`
`),f.length>0&&(f+=`
`),b=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(jn).join(`
`),b.length>0&&(b+=`
`)):(f=[If(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jn).join(`
`),b=[m,If(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==oi?"#define TONE_MAPPING":"",t.toneMapping!==oi?Ye.tonemapping_pars_fragment:"",t.toneMapping!==oi?Nd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Id("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(jn).join(`
`)),s=za(s),s=Pf(s,t),s=Df(s,t),a=za(a),a=Pf(a,t),a=Df(a,t),s=Uf(s),a=Uf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ha?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ha?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);let A=x+f+s,D=x+b+a,L=Ga(r,r.VERTEX_SHADER,A),R=Ga(r,r.FRAGMENT_SHADER,D);r.attachShader(d,L),r.attachShader(d,R),t.index0AttributeName!==void 0?r.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(d,0,"position"),r.linkProgram(d);function F(K){if(i.debug.checkShaderErrors){let W=r.getProgramInfoLog(d).trim(),P=r.getShaderInfoLog(L).trim(),G=r.getShaderInfoLog(R).trim(),X=!0,J=!0;if(r.getProgramParameter(d,r.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,d,L,R);else{let Y=Lf(r,L,"vertex"),q=Lf(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(d,r.VALIDATE_STATUS)+`

Program Info Log: `+W+`
`+Y+`
`+q)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(P===""||G==="")&&(J=!1);J&&(K.diagnostics={runnable:X,programLog:W,vertexShader:{log:P,prefix:f},fragmentShader:{log:G,prefix:b}})}r.deleteShader(L),r.deleteShader(R),S=new ji(r,d),T=Gd(r,d)}let S;this.getUniforms=function(){return S===void 0&&F(this),S};let T;this.getAttributes=function(){return T===void 0&&F(this),T};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=r.getProgramParameter(d,Ld)),O},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(d),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Pd++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=L,this.fragmentShader=R,this}var Kd=0,fo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ha(e),t.set(e,n)),n}},Ha=class{constructor(e){this.id=Kd++,this.code=e,this.usedTimes=0}};function Ff(i,e,t,n,r,o,s){let a=new bn,l=new fo,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,p=r.vertexTextures,m=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(S){return S===0?"uv":`uv${S}`}function d(S,T,O,K,W){let P=K.fog,G=W.geometry,X=S.isMeshStandardMaterial?K.environment:null,J=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),Y=J&&J.mapping===Bi?J.image.height:null,q=g[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));let j=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ee=j!==void 0?j.length:0,_e=0;G.morphAttributes.position!==void 0&&(_e=1),G.morphAttributes.normal!==void 0&&(_e=2),G.morphAttributes.color!==void 0&&(_e=3);let k,Z,se,Q;if(q){let Xe=ui[q];k=Xe.vertexShader,Z=Xe.fragmentShader}else k=S.vertexShader,Z=S.fragmentShader,l.update(S),se=l.getVertexShaderID(S),Q=l.getFragmentShaderID(S);let Se=i.getRenderTarget(),ze=W.isInstancedMesh===!0,Ie=W.isBatchedMesh===!0,Le=!!S.map,Ke=!!S.matcap,B=!!J,vt=!!S.aoMap,Re=!!S.lightMap,He=!!S.bumpMap,Me=!!S.normalMap,ut=!!S.displacementMap,qe=!!S.emissiveMap,E=!!S.metalnessMap,_=!!S.roughnessMap,z=S.anisotropy>0,ne=S.clearcoat>0,ie=S.iridescence>0,V=S.sheen>0,Ee=S.transmission>0,le=z&&!!S.anisotropyMap,xe=ne&&!!S.clearcoatMap,Pe=ne&&!!S.clearcoatNormalMap,ke=ne&&!!S.clearcoatRoughnessMap,te=ie&&!!S.iridescenceMap,it=ie&&!!S.iridescenceThicknessMap,Je=V&&!!S.sheenColorMap,Be=V&&!!S.sheenRoughnessMap,Ae=!!S.specularMap,ve=!!S.specularColorMap,We=!!S.specularIntensityMap,et=Ee&&!!S.transmissionMap,st=Ee&&!!S.thicknessMap,je=!!S.gradientMap,ce=!!S.alphaMap,C=S.alphaTest>0,pe=!!S.alphaHash,me=!!S.extensions,H=!!G.attributes.uv1,$=!!G.attributes.uv2,ae=!!G.attributes.uv3,de=oi;return S.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(de=i.toneMapping),{isWebGL2:u,shaderID:q,shaderType:S.type,shaderName:S.name,vertexShader:k,fragmentShader:Z,defines:S.defines,customVertexShaderID:se,customFragmentShaderID:Q,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Ie,instancing:ze,instancingColor:ze&&W.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:Se===null?i.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Ot,map:Le,matcap:Ke,envMap:B,envMapMode:B&&J.mapping,envMapCubeUVHeight:Y,aoMap:vt,lightMap:Re,bumpMap:He,normalMap:Me,displacementMap:p&&ut,emissiveMap:qe,normalMapObjectSpace:Me&&S.normalMapType===Vs,normalMapTangentSpace:Me&&S.normalMapType===Hs,metalnessMap:E,roughnessMap:_,anisotropy:z,anisotropyMap:le,clearcoat:ne,clearcoatMap:xe,clearcoatNormalMap:Pe,clearcoatRoughnessMap:ke,iridescence:ie,iridescenceMap:te,iridescenceThicknessMap:it,sheen:V,sheenColorMap:Je,sheenRoughnessMap:Be,specularMap:Ae,specularColorMap:ve,specularIntensityMap:We,transmission:Ee,transmissionMap:et,thicknessMap:st,gradientMap:je,opaque:S.transparent===!1&&S.blending===wi,alphaMap:ce,alphaTest:C,alphaHash:pe,combine:S.combine,mapUv:Le&&M(S.map.channel),aoMapUv:vt&&M(S.aoMap.channel),lightMapUv:Re&&M(S.lightMap.channel),bumpMapUv:He&&M(S.bumpMap.channel),normalMapUv:Me&&M(S.normalMap.channel),displacementMapUv:ut&&M(S.displacementMap.channel),emissiveMapUv:qe&&M(S.emissiveMap.channel),metalnessMapUv:E&&M(S.metalnessMap.channel),roughnessMapUv:_&&M(S.roughnessMap.channel),anisotropyMapUv:le&&M(S.anisotropyMap.channel),clearcoatMapUv:xe&&M(S.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&M(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&M(S.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&M(S.iridescenceMap.channel),iridescenceThicknessMapUv:it&&M(S.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&M(S.sheenColorMap.channel),sheenRoughnessMapUv:Be&&M(S.sheenRoughnessMap.channel),specularMapUv:Ae&&M(S.specularMap.channel),specularColorMapUv:ve&&M(S.specularColorMap.channel),specularIntensityMapUv:We&&M(S.specularIntensityMap.channel),transmissionMapUv:et&&M(S.transmissionMap.channel),thicknessMapUv:st&&M(S.thicknessMap.channel),alphaMapUv:ce&&M(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Me||z),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:H,vertexUv2s:$,vertexUv3s:ae,pointsUvs:W.isPoints===!0&&!!G.attributes.uv&&(Le||ce),fog:!!P,useFog:S.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:W.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:_e,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:de,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Le&&S.map.isVideoTexture===!0&&Qe.getTransfer(S.map.colorSpace)===at,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Lt,flipSided:S.side===gt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:me&&S.extensions.derivatives===!0,extensionFragDepth:me&&S.extensions.fragDepth===!0,extensionDrawBuffers:me&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:me&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){let T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(let O in S.defines)T.push(O),T.push(S.defines[O]);return S.isRawShaderMaterial===!1&&(b(T,S),x(T,S),T.push(i.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function b(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function x(S,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),S.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function A(S){let T=g[S.type],O;if(T){let K=ui[T];O=fl.clone(K.uniforms)}else O=S.uniforms;return O}function D(S,T){let O;for(let K=0,W=c.length;K<W;K++){let P=c[K];if(P.cacheKey===T){O=P,++O.usedTimes;break}}return O===void 0&&(O=new Nf(i,T,S,o),c.push(O)),O}function L(S){if(--S.usedTimes===0){let T=c.indexOf(S);c[T]=c[c.length-1],c.pop(),S.destroy()}}function R(S){l.remove(S)}function F(){l.dispose()}return{getParameters:d,getProgramCacheKey:f,getUniforms:A,acquireProgram:D,releaseProgram:L,releaseShaderCache:R,programs:c,dispose:F}}function Of(){let i=new WeakMap;function e(o){let s=i.get(o);return s===void 0&&(s={},i.set(o,s)),s}function t(o){i.delete(o)}function n(o,s,a){i.get(o)[s]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Jd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Bf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Gf(){let i=[],e=0,t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function s(h,p,m,g,M,d){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:p,material:m,groupOrder:g,renderOrder:h.renderOrder,z:M,group:d},i[e]=f):(f.id=h.id,f.object=h,f.geometry=p,f.material=m,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=M,f.group=d),e++,f}function a(h,p,m,g,M,d){let f=s(h,p,m,g,M,d);m.transmission>0?n.push(f):m.transparent===!0?r.push(f):t.push(f)}function l(h,p,m,g,M,d){let f=s(h,p,m,g,M,d);m.transmission>0?n.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function c(h,p){t.length>1&&t.sort(h||Jd),n.length>1&&n.sort(p||Bf),r.length>1&&r.sort(p||Bf)}function u(){for(let h=e,p=i.length;h<p;h++){let m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:a,unshift:l,finish:u,sort:c}}function zf(){let i=new WeakMap;function e(n,r){let o=i.get(n),s;return o===void 0?(s=new Gf,i.set(n,[s])):r>=o.length?(s=new Gf,o.push(s)):s=o[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function $d(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ze};break;case"SpotLight":t={position:new N,direction:new N,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function Qd(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var ep=0;function tp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Hf(i,e){let t=new $d,n=Qd(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new N);let o=new N,s=new ht,a=new ht;function l(u,h){let p=0,m=0,g=0;for(let K=0;K<9;K++)r.probe[K].set(0,0,0);let M=0,d=0,f=0,b=0,x=0,A=0,D=0,L=0,R=0,F=0,S=0;u.sort(tp);let T=h===!0?Math.PI:1;for(let K=0,W=u.length;K<W;K++){let P=u[K],G=P.color,X=P.intensity,J=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)p+=G.r*X*T,m+=G.g*X*T,g+=G.b*X*T;else if(P.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector(P.sh.coefficients[q],X);S++}else if(P.isDirectionalLight){let q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity*T),P.castShadow){let j=P.shadow,ee=n.get(P);ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize=j.mapSize,r.directionalShadow[M]=ee,r.directionalShadowMap[M]=Y,r.directionalShadowMatrix[M]=P.shadow.matrix,A++}r.directional[M]=q,M++}else if(P.isSpotLight){let q=t.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(G).multiplyScalar(X*T),q.distance=J,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,r.spot[f]=q;let j=P.shadow;if(P.map&&(r.spotLightMap[R]=P.map,R++,j.updateMatrices(P),P.castShadow&&F++),r.spotLightMatrix[f]=j.matrix,P.castShadow){let ee=n.get(P);ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize=j.mapSize,r.spotShadow[f]=ee,r.spotShadowMap[f]=Y,L++}f++}else if(P.isRectAreaLight){let q=t.get(P);q.color.copy(G).multiplyScalar(X),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),r.rectArea[b]=q,b++}else if(P.isPointLight){let q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity*T),q.distance=P.distance,q.decay=P.decay,P.castShadow){let j=P.shadow,ee=n.get(P);ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize=j.mapSize,ee.shadowCameraNear=j.camera.near,ee.shadowCameraFar=j.camera.far,r.pointShadow[d]=ee,r.pointShadowMap[d]=Y,r.pointShadowMatrix[d]=P.shadow.matrix,D++}r.point[d]=q,d++}else if(P.isHemisphereLight){let q=t.get(P);q.skyColor.copy(P.color).multiplyScalar(X*T),q.groundColor.copy(P.groundColor).multiplyScalar(X*T),r.hemi[x]=q,x++}}b>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_FLOAT_1,r.rectAreaLTC2=fe.LTC_FLOAT_2):(r.rectAreaLTC1=fe.LTC_HALF_1,r.rectAreaLTC2=fe.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_FLOAT_1,r.rectAreaLTC2=fe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_HALF_1,r.rectAreaLTC2=fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=m,r.ambient[2]=g;let O=r.hash;(O.directionalLength!==M||O.pointLength!==d||O.spotLength!==f||O.rectAreaLength!==b||O.hemiLength!==x||O.numDirectionalShadows!==A||O.numPointShadows!==D||O.numSpotShadows!==L||O.numSpotMaps!==R||O.numLightProbes!==S)&&(r.directional.length=M,r.spot.length=f,r.rectArea.length=b,r.point.length=d,r.hemi.length=x,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=A,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=L+R-F,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=S,O.directionalLength=M,O.pointLength=d,O.spotLength=f,O.rectAreaLength=b,O.hemiLength=x,O.numDirectionalShadows=A,O.numPointShadows=D,O.numSpotShadows=L,O.numSpotMaps=R,O.numLightProbes=S,r.version=ep++)}function c(u,h){let p=0,m=0,g=0,M=0,d=0,f=h.matrixWorldInverse;for(let b=0,x=u.length;b<x;b++){let A=u[b];if(A.isDirectionalLight){let D=r.directional[p];D.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(f),p++}else if(A.isSpotLight){let D=r.spot[g];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(f),D.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(f),g++}else if(A.isRectAreaLight){let D=r.rectArea[M];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(f),a.identity(),s.copy(A.matrixWorld),s.premultiply(f),a.extractRotation(s),D.halfWidth.set(A.width*.5,0,0),D.halfHeight.set(0,A.height*.5,0),D.halfWidth.applyMatrix4(a),D.halfHeight.applyMatrix4(a),M++}else if(A.isPointLight){let D=r.point[m];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(f),m++}else if(A.isHemisphereLight){let D=r.hemi[d];D.direction.setFromMatrixPosition(A.matrixWorld),D.direction.transformDirection(f),d++}}}return{setup:l,setupView:c,state:r}}function Vf(i,e){let t=new Hf(i,e),n=[],r=[];function o(){n.length=0,r.length=0}function s(h){n.push(h)}function a(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:o,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:a}}function kf(i,e){let t=new WeakMap;function n(o,s=0){let a=t.get(o),l;return a===void 0?(l=new Vf(i,e),t.set(o,[l])):s>=a.length?(l=new Vf(i,e),a.push(l)):l=a[s],l}function r(){t=new WeakMap}return{get:n,dispose:r}}var ho=class extends ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gs,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};var po=class extends ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var Wf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,Xf=`
uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;

#include <packing>

void main() {

	const float samples = float( VSM_SAMPLES );

	float mean = 0.0;
	float squared_mean = 0.0;

	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {

		float uvOffset = uvStart + i * uvStride;

		#ifdef HORIZONTAL_PASS

			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;

		#else

			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;

		#endif

	}

	mean = mean / samples;
	squared_mean = squared_mean / samples;

	float std_dev = sqrt( squared_mean - mean * mean );

	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );

}
`;function qf(i,e,t){let n=new Sn,r=new Ve,o=new Ve,s=new tt,a=new ho({depthPacking:zs}),l=new po,c={},u=t.maxTextureSize,h={[Kt]:gt,[gt]:Kt,[Lt]:Lt},p=new bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:Wf,fragmentShader:Xf}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let g=new Ut;g.setAttribute("position",new dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new At(g,p),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pr;let f=this.type;this.render=function(L,R,F){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||L.length===0)return;let S=i.getRenderTarget(),T=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),K=i.state;K.setBlending(ri),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);let W=f!==fi&&this.type===fi,P=f===fi&&this.type!==fi;for(let G=0,X=L.length;G<X;G++){let J=L[G],Y=J.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);let q=Y.getFrameExtents();if(r.multiply(q),o.copy(Y.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/q.x),r.x=o.x*q.x,Y.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/q.y),r.y=o.y*q.y,Y.mapSize.y=o.y)),Y.map===null||W===!0||P===!0){let ee=this.type!==fi?{minFilter:Mt,magFilter:Mt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new jt(r.x,r.y,ee),Y.map.texture.name=J.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();let j=Y.getViewportCount();for(let ee=0;ee<j;ee++){let _e=Y.getViewport(ee);s.set(o.x*_e.x,o.y*_e.y,o.x*_e.z,o.y*_e.w),K.viewport(s),Y.updateMatrices(J,ee),n=Y.getFrustum(),A(R,F,Y.camera,J,this.type)}Y.isPointLightShadow!==!0&&this.type===fi&&b(Y,F),Y.needsUpdate=!1}f=this.type,d.needsUpdate=!1,i.setRenderTarget(S,T,O)};function b(L,R){let F=e.update(M);p.defines.VSM_SAMPLES!==L.blurSamples&&(p.defines.VSM_SAMPLES=L.blurSamples,m.defines.VSM_SAMPLES=L.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new jt(r.x,r.y)),p.uniforms.shadow_pass.value=L.map.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(R,null,F,p,M,null),m.uniforms.shadow_pass.value=L.mapPass.texture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(R,null,F,m,M,null)}function x(L,R,F,S){let T=null,O=F.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(O!==void 0)T=O;else if(T=F.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let K=T.uuid,W=R.uuid,P=c[K];P===void 0&&(P={},c[K]=P);let G=P[W];G===void 0&&(G=T.clone(),P[W]=G,R.addEventListener("dispose",D)),T=G}if(T.visible=R.visible,T.wireframe=R.wireframe,S===fi?T.side=R.shadowSide!==null?R.shadowSide:R.side:T.side=R.shadowSide!==null?R.shadowSide:h[R.side],T.alphaMap=R.alphaMap,T.alphaTest=R.alphaTest,T.map=R.map,T.clipShadows=R.clipShadows,T.clippingPlanes=R.clippingPlanes,T.clipIntersection=R.clipIntersection,T.displacementMap=R.displacementMap,T.displacementScale=R.displacementScale,T.displacementBias=R.displacementBias,T.wireframeLinewidth=R.wireframeLinewidth,T.linewidth=R.linewidth,F.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let K=i.properties.get(T);K.light=F}return T}function A(L,R,F,S,T){if(L.visible===!1)return;if(L.layers.test(R.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&T===fi)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,L.matrixWorld);let W=e.update(L),P=L.material;if(Array.isArray(P)){let G=W.groups;for(let X=0,J=G.length;X<J;X++){let Y=G[X],q=P[Y.materialIndex];if(q&&q.visible){let j=x(L,q,S,T);L.onBeforeShadow(i,L,R,F,W,j,Y),i.renderBufferDirect(F,null,W,j,L,Y),L.onAfterShadow(i,L,R,F,W,j,Y)}}}else if(P.visible){let G=x(L,P,S,T);L.onBeforeShadow(i,L,R,F,W,G,null),i.renderBufferDirect(F,null,W,G,L,null),L.onAfterShadow(i,L,R,F,W,G,null)}}let K=L.children;for(let W=0,P=K.length;W<P;W++)A(K[W],R,F,S,T)}function D(L){L.target.removeEventListener("dispose",D);for(let F in c){let S=c[F],T=L.target.uuid;T in S&&(S[T].dispose(),delete S[T])}}}function Yf(i,e,t){let n=t.isWebGL2;function r(){let C=!1,pe=new tt,me=null,H=new tt(0,0,0,0);return{setMask:function($){me!==$&&!C&&(i.colorMask($,$,$,$),me=$)},setLocked:function($){C=$},setClear:function($,ae,de,ye,Xe){Xe===!0&&($*=ye,ae*=ye,de*=ye),pe.set($,ae,de,ye),H.equals(pe)===!1&&(i.clearColor($,ae,de,ye),H.copy(pe))},reset:function(){C=!1,me=null,H.set(-1,0,0,0)}}}function o(){let C=!1,pe=null,me=null,H=null;return{setTest:function($){$?Ie(i.DEPTH_TEST):Le(i.DEPTH_TEST)},setMask:function($){pe!==$&&!C&&(i.depthMask($),pe=$)},setFunc:function($){if(me!==$){switch($){case ms:i.depthFunc(i.NEVER);break;case gs:i.depthFunc(i.ALWAYS);break;case _s:i.depthFunc(i.LESS);break;case fn:i.depthFunc(i.LEQUAL);break;case xs:i.depthFunc(i.EQUAL);break;case vs:i.depthFunc(i.GEQUAL);break;case Ms:i.depthFunc(i.GREATER);break;case Ss:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=$}},setLocked:function($){C=$},setClear:function($){H!==$&&(i.clearDepth($),H=$)},reset:function(){C=!1,pe=null,me=null,H=null}}}function s(){let C=!1,pe=null,me=null,H=null,$=null,ae=null,de=null,ye=null,Xe=null;return{setTest:function(De){C||(De?Ie(i.STENCIL_TEST):Le(i.STENCIL_TEST))},setMask:function(De){pe!==De&&!C&&(i.stencilMask(De),pe=De)},setFunc:function(De,ue,be){(me!==De||H!==ue||$!==be)&&(i.stencilFunc(De,ue,be),me=De,H=ue,$=be)},setOp:function(De,ue,be){(ae!==De||de!==ue||ye!==be)&&(i.stencilOp(De,ue,be),ae=De,de=ue,ye=be)},setLocked:function(De){C=De},setClear:function(De){Xe!==De&&(i.clearStencil(De),Xe=De)},reset:function(){C=!1,pe=null,me=null,H=null,$=null,ae=null,de=null,ye=null,Xe=null}}}let a=new r,l=new o,c=new s,u=new WeakMap,h=new WeakMap,p={},m={},g=new WeakMap,M=[],d=null,f=!1,b=null,x=null,A=null,D=null,L=null,R=null,F=null,S=new Ze(0,0,0),T=0,O=!1,K=null,W=null,P=null,G=null,X=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,q=0,j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(j)[1]),Y=q>=1):j.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Y=q>=2);let ee=null,_e={},k=i.getParameter(i.SCISSOR_BOX),Z=i.getParameter(i.VIEWPORT),se=new tt().fromArray(k),Q=new tt().fromArray(Z);function Se(C,pe,me,H){let $=new Uint8Array(4),ae=i.createTexture();i.bindTexture(C,ae),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let de=0;de<me;de++)n&&(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)?i.texImage3D(pe,0,i.RGBA,1,1,H,0,i.RGBA,i.UNSIGNED_BYTE,$):i.texImage2D(pe+de,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,$);return ae}let ze={};ze[i.TEXTURE_2D]=Se(i.TEXTURE_2D,i.TEXTURE_2D,1),ze[i.TEXTURE_CUBE_MAP]=Se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ze[i.TEXTURE_2D_ARRAY]=Se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ze[i.TEXTURE_3D]=Se(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ie(i.DEPTH_TEST),l.setFunc(fn),qe(!1),E(Po),Ie(i.CULL_FACE),Me(ri);function Ie(C){p[C]!==!0&&(i.enable(C),p[C]=!0)}function Le(C){p[C]!==!1&&(i.disable(C),p[C]=!1)}function Ke(C,pe){return m[C]!==pe?(i.bindFramebuffer(C,pe),m[C]=pe,n&&(C===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=pe),C===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=pe)),!0):!1}function B(C,pe){let me=M,H=!1;if(C)if(me=g.get(pe),me===void 0&&(me=[],g.set(pe,me)),C.isWebGLMultipleRenderTargets){let $=C.texture;if(me.length!==$.length||me[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,de=$.length;ae<de;ae++)me[ae]=i.COLOR_ATTACHMENT0+ae;me.length=$.length,H=!0}}else me[0]!==i.COLOR_ATTACHMENT0&&(me[0]=i.COLOR_ATTACHMENT0,H=!0);else me[0]!==i.BACK&&(me[0]=i.BACK,H=!0);H&&(t.isWebGL2?i.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function vt(C){return d!==C?(i.useProgram(C),d=C,!0):!1}let Re={[Ri]:i.FUNC_ADD,[es]:i.FUNC_SUBTRACT,[ts]:i.FUNC_REVERSE_SUBTRACT};if(n)Re[No]=i.MIN,Re[Fo]=i.MAX;else{let C=e.get("EXT_blend_minmax");C!==null&&(Re[No]=C.MIN_EXT,Re[Fo]=C.MAX_EXT)}let He={[is]:i.ZERO,[ns]:i.ONE,[rs]:i.SRC_COLOR,[$n]:i.SRC_ALPHA,[us]:i.SRC_ALPHA_SATURATE,[ls]:i.DST_COLOR,[as]:i.DST_ALPHA,[os]:i.ONE_MINUS_SRC_COLOR,[Qn]:i.ONE_MINUS_SRC_ALPHA,[cs]:i.ONE_MINUS_DST_COLOR,[ss]:i.ONE_MINUS_DST_ALPHA,[fs]:i.CONSTANT_COLOR,[hs]:i.ONE_MINUS_CONSTANT_COLOR,[ds]:i.CONSTANT_ALPHA,[ps]:i.ONE_MINUS_CONSTANT_ALPHA};function Me(C,pe,me,H,$,ae,de,ye,Xe,De){if(C===ri){f===!0&&(Le(i.BLEND),f=!1);return}if(f===!1&&(Ie(i.BLEND),f=!0),C!==Qa){if(C!==b||De!==O){if((x!==Ri||L!==Ri)&&(i.blendEquation(i.FUNC_ADD),x=Ri,L=Ri),De)switch(C){case wi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Do:i.blendFunc(i.ONE,i.ONE);break;case Uo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Io:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Do:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Uo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Io:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}A=null,D=null,R=null,F=null,S.set(0,0,0),T=0,b=C,O=De}return}$=$||pe,ae=ae||me,de=de||H,(pe!==x||$!==L)&&(i.blendEquationSeparate(Re[pe],Re[$]),x=pe,L=$),(me!==A||H!==D||ae!==R||de!==F)&&(i.blendFuncSeparate(He[me],He[H],He[ae],He[de]),A=me,D=H,R=ae,F=de),(ye.equals(S)===!1||Xe!==T)&&(i.blendColor(ye.r,ye.g,ye.b,Xe),S.copy(ye),T=Xe),b=C,O=!1}function ut(C,pe){C.side===Lt?Le(i.CULL_FACE):Ie(i.CULL_FACE);let me=C.side===gt;pe&&(me=!me),qe(me),C.blending===wi&&C.transparent===!1?Me(ri):Me(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),a.setMask(C.colorWrite);let H=C.stencilWrite;c.setTest(H),H&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),z(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Ie(i.SAMPLE_ALPHA_TO_COVERAGE):Le(i.SAMPLE_ALPHA_TO_COVERAGE)}function qe(C){K!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),K=C)}function E(C){C!==Ka?(Ie(i.CULL_FACE),C!==W&&(C===Po?i.cullFace(i.BACK):C===Ja?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Le(i.CULL_FACE),W=C}function _(C){C!==P&&(Y&&i.lineWidth(C),P=C)}function z(C,pe,me){C?(Ie(i.POLYGON_OFFSET_FILL),(G!==pe||X!==me)&&(i.polygonOffset(pe,me),G=pe,X=me)):Le(i.POLYGON_OFFSET_FILL)}function ne(C){C?Ie(i.SCISSOR_TEST):Le(i.SCISSOR_TEST)}function ie(C){C===void 0&&(C=i.TEXTURE0+J-1),ee!==C&&(i.activeTexture(C),ee=C)}function V(C,pe,me){me===void 0&&(ee===null?me=i.TEXTURE0+J-1:me=ee);let H=_e[me];H===void 0&&(H={type:void 0,texture:void 0},_e[me]=H),(H.type!==C||H.texture!==pe)&&(ee!==me&&(i.activeTexture(me),ee=me),i.bindTexture(C,pe||ze[C]),H.type=C,H.texture=pe)}function Ee(){let C=_e[ee];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function le(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Pe(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ke(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function te(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function it(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Je(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Be(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ae(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ve(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function We(C){se.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),se.copy(C))}function et(C){Q.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),Q.copy(C))}function st(C,pe){let me=h.get(pe);me===void 0&&(me=new WeakMap,h.set(pe,me));let H=me.get(C);H===void 0&&(H=i.getUniformBlockIndex(pe,C.name),me.set(C,H))}function je(C,pe){let H=h.get(pe).get(C);u.get(pe)!==H&&(i.uniformBlockBinding(pe,H,C.__bindingPointIndex),u.set(pe,H))}function ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},ee=null,_e={},m={},g=new WeakMap,M=[],d=null,f=!1,b=null,x=null,A=null,D=null,L=null,R=null,F=null,S=new Ze(0,0,0),T=0,O=!1,K=null,W=null,P=null,G=null,X=null,se.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ie,disable:Le,bindFramebuffer:Ke,drawBuffers:B,useProgram:vt,setBlending:Me,setMaterial:ut,setFlipSided:qe,setCullFace:E,setLineWidth:_,setPolygonOffset:z,setScissorTest:ne,activeTexture:ie,bindTexture:V,unbindTexture:Ee,compressedTexImage2D:le,compressedTexImage3D:xe,texImage2D:Ae,texImage3D:ve,updateUBOMapping:st,uniformBlockBinding:je,texStorage2D:Je,texStorage3D:Be,texSubImage2D:Pe,texSubImage3D:ke,compressedTexSubImage2D:te,compressedTexSubImage3D:it,scissor:We,viewport:et,reset:ce}}function jf(i,e,t,n,r,o,s){let a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,h,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return m?new OffscreenCanvas(E,_):Wi("canvas")}function M(E,_,z,ne){let ie=1;if((E.width>ne||E.height>ne)&&(ie=ne/Math.max(E.width,E.height)),ie<1||_===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){let V=_?ar:Math.floor,Ee=V(ie*E.width),le=V(ie*E.height);h===void 0&&(h=g(Ee,le));let xe=z?g(Ee,le):h;return xe.width=Ee,xe.height=le,xe.getContext("2d").drawImage(E,0,0,Ee,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+Ee+"x"+le+")."),xe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function d(E){return da(E.width)&&da(E.height)}function f(E){return a?!1:E.wrapS!==Wt||E.wrapT!==Wt||E.minFilter!==Mt&&E.minFilter!==Et}function b(E,_){return E.generateMipmaps&&_&&E.minFilter!==Mt&&E.minFilter!==Et}function x(E){i.generateMipmap(E)}function A(E,_,z,ne,ie=!1){if(a===!1)return _;if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let V=_;if(_===i.RED&&(z===i.FLOAT&&(V=i.R32F),z===i.HALF_FLOAT&&(V=i.R16F),z===i.UNSIGNED_BYTE&&(V=i.R8)),_===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(V=i.R8UI),z===i.UNSIGNED_SHORT&&(V=i.R16UI),z===i.UNSIGNED_INT&&(V=i.R32UI),z===i.BYTE&&(V=i.R8I),z===i.SHORT&&(V=i.R16I),z===i.INT&&(V=i.R32I)),_===i.RG&&(z===i.FLOAT&&(V=i.RG32F),z===i.HALF_FLOAT&&(V=i.RG16F),z===i.UNSIGNED_BYTE&&(V=i.RG8)),_===i.RGBA){let Ee=ie?pn:Qe.getTransfer(ne);z===i.FLOAT&&(V=i.RGBA32F),z===i.HALF_FLOAT&&(V=i.RGBA16F),z===i.UNSIGNED_BYTE&&(V=Ee===at?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function D(E,_,z){return b(E,z)===!0||E.isFramebufferTexture&&E.minFilter!==Mt&&E.minFilter!==Et?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function L(E){return E===Mt||E===Bo||E===gr?i.NEAREST:i.LINEAR}function R(E){let _=E.target;_.removeEventListener("dispose",R),S(_),_.isVideoTexture&&u.delete(_)}function F(E){let _=E.target;_.removeEventListener("dispose",F),O(_)}function S(E){let _=n.get(E);if(_.__webglInit===void 0)return;let z=E.source,ne=p.get(z);if(ne){let ie=ne[_.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&T(E),Object.keys(ne).length===0&&p.delete(z)}n.remove(E)}function T(E){let _=n.get(E);i.deleteTexture(_.__webglTexture);let z=E.source,ne=p.get(z);delete ne[_.__cacheKey],s.memory.textures--}function O(E){let _=E.texture,z=n.get(E),ne=n.get(_);if(ne.__webglTexture!==void 0&&(i.deleteTexture(ne.__webglTexture),s.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(z.__webglFramebuffer[ie]))for(let V=0;V<z.__webglFramebuffer[ie].length;V++)i.deleteFramebuffer(z.__webglFramebuffer[ie][V]);else i.deleteFramebuffer(z.__webglFramebuffer[ie]);z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer[ie])}else{if(Array.isArray(z.__webglFramebuffer))for(let ie=0;ie<z.__webglFramebuffer.length;ie++)i.deleteFramebuffer(z.__webglFramebuffer[ie]);else i.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&i.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let ie=0;ie<z.__webglColorRenderbuffer.length;ie++)z.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(z.__webglColorRenderbuffer[ie]);z.__webglDepthRenderbuffer&&i.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let ie=0,V=_.length;ie<V;ie++){let Ee=n.get(_[ie]);Ee.__webglTexture&&(i.deleteTexture(Ee.__webglTexture),s.memory.textures--),n.remove(_[ie])}n.remove(_),n.remove(E)}let K=0;function W(){K=0}function P(){let E=K;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),K+=1,E}function G(E){let _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function X(E,_){let z=n.get(E);if(E.isVideoTexture&&ut(E),E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){let ne=E.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(z,E,_);return}}t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+_)}function J(E,_){let z=n.get(E);if(E.version>0&&z.__version!==E.version){se(z,E,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+_)}function Y(E,_){let z=n.get(E);if(E.version>0&&z.__version!==E.version){se(z,E,_);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+_)}function q(E,_){let z=n.get(E);if(E.version>0&&z.__version!==E.version){Q(z,E,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+_)}let j={[ir]:i.REPEAT,[Wt]:i.CLAMP_TO_EDGE,[nr]:i.MIRRORED_REPEAT},ee={[Mt]:i.NEAREST,[Bo]:i.NEAREST_MIPMAP_NEAREST,[gr]:i.NEAREST_MIPMAP_LINEAR,[Et]:i.LINEAR,[Ls]:i.LINEAR_MIPMAP_NEAREST,[di]:i.LINEAR_MIPMAP_LINEAR},_e={[ks]:i.NEVER,[Zs]:i.ALWAYS,[Ws]:i.LESS,[Lr]:i.LEQUAL,[Xs]:i.EQUAL,[js]:i.GEQUAL,[qs]:i.GREATER,[Ys]:i.NOTEQUAL};function k(E,_,z){if(z?(i.texParameteri(E,i.TEXTURE_WRAP_S,j[_.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,j[_.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,j[_.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ee[_.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ee[_.minFilter])):(i.texParameteri(E,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(E,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(_.wrapS!==Wt||_.wrapT!==Wt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(E,i.TEXTURE_MAG_FILTER,L(_.magFilter)),i.texParameteri(E,i.TEXTURE_MIN_FILTER,L(_.minFilter)),_.minFilter!==Mt&&_.minFilter!==Et&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,_e[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ne=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===Mt||_.minFilter!==gr&&_.minFilter!==di||_.type===Qt&&e.has("OES_texture_float_linear")===!1||a===!1&&_.type===Ci&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||n.get(_).__currentAnisotropy)&&(i.texParameterf(E,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy)}}function Z(E,_){let z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",R));let ne=_.source,ie=p.get(ne);ie===void 0&&(ie={},p.set(ne,ie));let V=G(_);if(V!==E.__cacheKey){ie[V]===void 0&&(ie[V]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,z=!0),ie[V].usedTimes++;let Ee=ie[E.__cacheKey];Ee!==void 0&&(ie[E.__cacheKey].usedTimes--,Ee.usedTimes===0&&T(_)),E.__cacheKey=V,E.__webglTexture=ie[V].texture}return z}function se(E,_,z){let ne=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(ne=i.TEXTURE_3D);let ie=Z(E,_),V=_.source;t.bindTexture(ne,E.__webglTexture,i.TEXTURE0+z);let Ee=n.get(V);if(V.version!==Ee.__version||ie===!0){t.activeTexture(i.TEXTURE0+z);let le=Qe.getPrimaries(Qe.workingColorSpace),xe=_.colorSpace===Pt?null:Qe.getPrimaries(_.colorSpace),Pe=_.colorSpace===Pt||le===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let ke=f(_)&&d(_.image)===!1,te=M(_.image,ke,!1,r.maxTextureSize);te=qe(_,te);let it=d(te)||a,Je=o.convert(_.format,_.colorSpace),Be=o.convert(_.type),Ae=A(_.internalFormat,Je,Be,_.colorSpace,_.isVideoTexture);k(ne,_,it);let ve,We=_.mipmaps,et=a&&_.isVideoTexture!==!0&&Ae!==wr,st=Ee.__version===void 0||ie===!0,je=D(_,te,it);if(_.isDepthTexture)Ae=i.DEPTH_COMPONENT,a?_.type===Qt?Ae=i.DEPTH_COMPONENT32F:_.type===$t?Ae=i.DEPTH_COMPONENT24:_.type===ai?Ae=i.DEPTH24_STENCIL8:Ae=i.DEPTH_COMPONENT16:_.type===Qt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===pi&&Ae===i.DEPTH_COMPONENT&&_.type!==hn&&_.type!==$t&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=$t,Be=o.convert(_.type)),_.format===Ei&&Ae===i.DEPTH_COMPONENT&&(Ae=i.DEPTH_STENCIL,_.type!==ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=ai,Be=o.convert(_.type))),st&&(et?t.texStorage2D(i.TEXTURE_2D,1,Ae,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,Ae,te.width,te.height,0,Je,Be,null));else if(_.isDataTexture)if(We.length>0&&it){et&&st&&t.texStorage2D(i.TEXTURE_2D,je,Ae,We[0].width,We[0].height);for(let ce=0,C=We.length;ce<C;ce++)ve=We[ce],et?t.texSubImage2D(i.TEXTURE_2D,ce,0,0,ve.width,ve.height,Je,Be,ve.data):t.texImage2D(i.TEXTURE_2D,ce,Ae,ve.width,ve.height,0,Je,Be,ve.data);_.generateMipmaps=!1}else et?(st&&t.texStorage2D(i.TEXTURE_2D,je,Ae,te.width,te.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,te.width,te.height,Je,Be,te.data)):t.texImage2D(i.TEXTURE_2D,0,Ae,te.width,te.height,0,Je,Be,te.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){et&&st&&t.texStorage3D(i.TEXTURE_2D_ARRAY,je,Ae,We[0].width,We[0].height,te.depth);for(let ce=0,C=We.length;ce<C;ce++)ve=We[ce],_.format!==Ft?Je!==null?et?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,ve.width,ve.height,te.depth,Je,ve.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ce,Ae,ve.width,ve.height,te.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,ve.width,ve.height,te.depth,Je,Be,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ce,Ae,ve.width,ve.height,te.depth,0,Je,Be,ve.data)}else{et&&st&&t.texStorage2D(i.TEXTURE_2D,je,Ae,We[0].width,We[0].height);for(let ce=0,C=We.length;ce<C;ce++)ve=We[ce],_.format!==Ft?Je!==null?et?t.compressedTexSubImage2D(i.TEXTURE_2D,ce,0,0,ve.width,ve.height,Je,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,ce,Ae,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?t.texSubImage2D(i.TEXTURE_2D,ce,0,0,ve.width,ve.height,Je,Be,ve.data):t.texImage2D(i.TEXTURE_2D,ce,Ae,ve.width,ve.height,0,Je,Be,ve.data)}else if(_.isDataArrayTexture)et?(st&&t.texStorage3D(i.TEXTURE_2D_ARRAY,je,Ae,te.width,te.height,te.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,Je,Be,te.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,te.width,te.height,te.depth,0,Je,Be,te.data);else if(_.isData3DTexture)et?(st&&t.texStorage3D(i.TEXTURE_3D,je,Ae,te.width,te.height,te.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,Je,Be,te.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,te.width,te.height,te.depth,0,Je,Be,te.data);else if(_.isFramebufferTexture){if(st)if(et)t.texStorage2D(i.TEXTURE_2D,je,Ae,te.width,te.height);else{let ce=te.width,C=te.height;for(let pe=0;pe<je;pe++)t.texImage2D(i.TEXTURE_2D,pe,Ae,ce,C,0,Je,Be,null),ce>>=1,C>>=1}}else if(We.length>0&&it){et&&st&&t.texStorage2D(i.TEXTURE_2D,je,Ae,We[0].width,We[0].height);for(let ce=0,C=We.length;ce<C;ce++)ve=We[ce],et?t.texSubImage2D(i.TEXTURE_2D,ce,0,0,Je,Be,ve):t.texImage2D(i.TEXTURE_2D,ce,Ae,Je,Be,ve);_.generateMipmaps=!1}else et?(st&&t.texStorage2D(i.TEXTURE_2D,je,Ae,te.width,te.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Je,Be,te)):t.texImage2D(i.TEXTURE_2D,0,Ae,Je,Be,te);b(_,it)&&x(ne),Ee.__version=V.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Q(E,_,z){if(_.image.length!==6)return;let ne=Z(E,_),ie=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+z);let V=n.get(ie);if(ie.version!==V.__version||ne===!0){t.activeTexture(i.TEXTURE0+z);let Ee=Qe.getPrimaries(Qe.workingColorSpace),le=_.colorSpace===Pt?null:Qe.getPrimaries(_.colorSpace),xe=_.colorSpace===Pt||Ee===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let Pe=_.isCompressedTexture||_.image[0].isCompressedTexture,ke=_.image[0]&&_.image[0].isDataTexture,te=[];for(let ce=0;ce<6;ce++)!Pe&&!ke?te[ce]=M(_.image[ce],!1,!0,r.maxCubemapSize):te[ce]=ke?_.image[ce].image:_.image[ce],te[ce]=qe(_,te[ce]);let it=te[0],Je=d(it)||a,Be=o.convert(_.format,_.colorSpace),Ae=o.convert(_.type),ve=A(_.internalFormat,Be,Ae,_.colorSpace),We=a&&_.isVideoTexture!==!0,et=V.__version===void 0||ne===!0,st=D(_,it,Je);k(i.TEXTURE_CUBE_MAP,_,Je);let je;if(Pe){We&&et&&t.texStorage2D(i.TEXTURE_CUBE_MAP,st,ve,it.width,it.height);for(let ce=0;ce<6;ce++){je=te[ce].mipmaps;for(let C=0;C<je.length;C++){let pe=je[C];_.format!==Ft?Be!==null?We?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,C,0,0,pe.width,pe.height,Be,pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,C,ve,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,C,0,0,pe.width,pe.height,Be,Ae,pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,C,ve,pe.width,pe.height,0,Be,Ae,pe.data)}}}else{je=_.mipmaps,We&&et&&(je.length>0&&st++,t.texStorage2D(i.TEXTURE_CUBE_MAP,st,ve,te[0].width,te[0].height));for(let ce=0;ce<6;ce++)if(ke){We?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,te[ce].width,te[ce].height,Be,Ae,te[ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ve,te[ce].width,te[ce].height,0,Be,Ae,te[ce].data);for(let C=0;C<je.length;C++){let me=je[C].image[ce].image;We?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,C+1,0,0,me.width,me.height,Be,Ae,me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,C+1,ve,me.width,me.height,0,Be,Ae,me.data)}}else{We?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Be,Ae,te[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ve,Be,Ae,te[ce]);for(let C=0;C<je.length;C++){let pe=je[C];We?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,C+1,0,0,Be,Ae,pe.image[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,C+1,ve,Be,Ae,pe.image[ce])}}}b(_,Je)&&x(i.TEXTURE_CUBE_MAP),V.__version=ie.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Se(E,_,z,ne,ie,V){let Ee=o.convert(z.format,z.colorSpace),le=o.convert(z.type),xe=A(z.internalFormat,Ee,le,z.colorSpace);if(!n.get(_).__hasExternalTextures){let ke=Math.max(1,_.width>>V),te=Math.max(1,_.height>>V);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,V,xe,ke,te,_.depth,0,Ee,le,null):t.texImage2D(ie,V,xe,ke,te,0,Ee,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),Me(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,ie,n.get(z).__webglTexture,0,He(_)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,ie,n.get(z).__webglTexture,V),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(E,_,z){if(i.bindRenderbuffer(i.RENDERBUFFER,E),_.depthBuffer&&!_.stencilBuffer){let ne=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(z||Me(_)){let ie=_.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Qt?ne=i.DEPTH_COMPONENT32F:ie.type===$t&&(ne=i.DEPTH_COMPONENT24));let V=He(_);Me(_)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,V,ne,_.width,_.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,V,ne,_.width,_.height)}else i.renderbufferStorage(i.RENDERBUFFER,ne,_.width,_.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,E)}else if(_.depthBuffer&&_.stencilBuffer){let ne=He(_);z&&Me(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,i.DEPTH24_STENCIL8,_.width,_.height):Me(_)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,i.DEPTH24_STENCIL8,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,E)}else{let ne=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let ie=0;ie<ne.length;ie++){let V=ne[ie],Ee=o.convert(V.format,V.colorSpace),le=o.convert(V.type),xe=A(V.internalFormat,Ee,le,V.colorSpace),Pe=He(_);z&&Me(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,xe,_.width,_.height):Me(_)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe,xe,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,xe,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ie(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X(_.depthTexture,0);let ne=n.get(_.depthTexture).__webglTexture,ie=He(_);if(_.depthTexture.format===pi)Me(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(_.depthTexture.format===Ei)Me(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Le(E){let _=n.get(E),z=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ie(_.__webglFramebuffer,E)}else if(z){_.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[ne]),_.__webglDepthbuffer[ne]=i.createRenderbuffer(),ze(_.__webglDepthbuffer[ne],E,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=i.createRenderbuffer(),ze(_.__webglDepthbuffer,E,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ke(E,_,z){let ne=n.get(E);_!==void 0&&Se(ne.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Le(E)}function B(E){let _=E.texture,z=n.get(E),ne=n.get(_);E.addEventListener("dispose",F),E.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=_.version,s.memory.textures++);let ie=E.isWebGLCubeRenderTarget===!0,V=E.isWebGLMultipleRenderTargets===!0,Ee=d(E)||a;if(ie){z.__webglFramebuffer=[];for(let le=0;le<6;le++)if(a&&_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[le]=[];for(let xe=0;xe<_.mipmaps.length;xe++)z.__webglFramebuffer[le][xe]=i.createFramebuffer()}else z.__webglFramebuffer[le]=i.createFramebuffer()}else{if(a&&_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let le=0;le<_.mipmaps.length;le++)z.__webglFramebuffer[le]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(V)if(r.drawBuffers){let le=E.texture;for(let xe=0,Pe=le.length;xe<Pe;xe++){let ke=n.get(le[xe]);ke.__webglTexture===void 0&&(ke.__webglTexture=i.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&Me(E)===!1){let le=V?_:[_];z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let xe=0;xe<le.length;xe++){let Pe=le[xe];z.__webglColorRenderbuffer[xe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[xe]);let ke=o.convert(Pe.format,Pe.colorSpace),te=o.convert(Pe.type),it=A(Pe.internalFormat,ke,te,Pe.colorSpace,E.isXRRenderTarget===!0),Je=He(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Je,it,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,z.__webglColorRenderbuffer[xe])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),ze(z.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),k(i.TEXTURE_CUBE_MAP,_,Ee);for(let le=0;le<6;le++)if(a&&_.mipmaps&&_.mipmaps.length>0)for(let xe=0;xe<_.mipmaps.length;xe++)Se(z.__webglFramebuffer[le][xe],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,xe);else Se(z.__webglFramebuffer[le],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);b(_,Ee)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(V){let le=E.texture;for(let xe=0,Pe=le.length;xe<Pe;xe++){let ke=le[xe],te=n.get(ke);t.bindTexture(i.TEXTURE_2D,te.__webglTexture),k(i.TEXTURE_2D,ke,Ee),Se(z.__webglFramebuffer,E,ke,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,0),b(ke,Ee)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?le=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,ne.__webglTexture),k(le,_,Ee),a&&_.mipmaps&&_.mipmaps.length>0)for(let xe=0;xe<_.mipmaps.length;xe++)Se(z.__webglFramebuffer[xe],E,_,i.COLOR_ATTACHMENT0,le,xe);else Se(z.__webglFramebuffer,E,_,i.COLOR_ATTACHMENT0,le,0);b(_,Ee)&&x(le),t.unbindTexture()}E.depthBuffer&&Le(E)}function vt(E){let _=d(E)||a,z=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ne=0,ie=z.length;ne<ie;ne++){let V=z[ne];if(b(V,_)){let Ee=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,le=n.get(V).__webglTexture;t.bindTexture(Ee,le),x(Ee),t.unbindTexture()}}}function Re(E){if(a&&E.samples>0&&Me(E)===!1){let _=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],z=E.width,ne=E.height,ie=i.COLOR_BUFFER_BIT,V=[],Ee=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=n.get(E),xe=E.isWebGLMultipleRenderTargets===!0;if(xe)for(let Pe=0;Pe<_.length;Pe++)t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let Pe=0;Pe<_.length;Pe++){V.push(i.COLOR_ATTACHMENT0+Pe),E.depthBuffer&&V.push(Ee);let ke=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(ke===!1&&(E.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),xe&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,le.__webglColorRenderbuffer[Pe]),ke===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ee]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ee])),xe){let te=n.get(_[Pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,z,ne,0,0,z,ne,ie,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,V)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xe)for(let Pe=0;Pe<_.length;Pe++){t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,le.__webglColorRenderbuffer[Pe]);let ke=n.get(_[Pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,ke,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function He(E){return Math.min(r.maxSamples,E.samples)}function Me(E){let _=n.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ut(E){let _=s.render.frame;u.get(E)!==_&&(u.set(E,_),E.update())}function qe(E,_){let z=E.colorSpace,ne=E.format,ie=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===rr||z!==Ot&&z!==Pt&&(Qe.getTransfer(z)===at?a===!1?e.has("EXT_sRGB")===!0&&ne===Ft?(E.format=rr,E.minFilter=Et,E.generateMipmaps=!1):_=Fn.sRGBToLinear(_):(ne!==Ft||ie!==Jt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),_}this.allocateTextureUnit=P,this.resetTextureUnits=W,this.setTexture2D=X,this.setTexture2DArray=J,this.setTexture3D=Y,this.setTextureCube=q,this.rebindTextures=Ke,this.setupRenderTarget=B,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Me}function Zf(i,e,t){let n=t.isWebGL2;function r(o,s=Pt){let a,l=Qe.getTransfer(s);if(o===Jt)return i.UNSIGNED_BYTE;if(o===xr)return i.UNSIGNED_SHORT_4_4_4_4;if(o===vr)return i.UNSIGNED_SHORT_5_5_5_1;if(o===Ps)return i.BYTE;if(o===Ds)return i.SHORT;if(o===hn)return i.UNSIGNED_SHORT;if(o===_r)return i.INT;if(o===$t)return i.UNSIGNED_INT;if(o===Qt)return i.FLOAT;if(o===Ci)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===Us)return i.ALPHA;if(o===Ft)return i.RGBA;if(o===Is)return i.LUMINANCE;if(o===Ns)return i.LUMINANCE_ALPHA;if(o===pi)return i.DEPTH_COMPONENT;if(o===Ei)return i.DEPTH_STENCIL;if(o===rr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===Fs)return i.RED;if(o===Mr)return i.RED_INTEGER;if(o===Os)return i.RG;if(o===Sr)return i.RG_INTEGER;if(o===Er)return i.RGBA_INTEGER;if(o===yr||o===Tr||o===br||o===Ar)if(l===at)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===yr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Tr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===br)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Ar)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===yr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Tr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===br)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Ar)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Go||o===zo||o===Ho||o===Vo)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===Go)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===zo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Ho)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Vo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===wr)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===ko||o===Wo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===ko)return l===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===Wo)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Xo||o===qo||o===Yo||o===jo||o===Zo||o===Ko||o===Jo||o===$o||o===Qo||o===ea||o===ta||o===ia||o===na||o===ra)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===Xo)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===qo)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Yo)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===jo)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Zo)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Ko)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Jo)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===$o)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Qo)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===ea)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===ta)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===ia)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===na)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===ra)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Rr||o===oa||o===aa)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===Rr)return l===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===oa)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===aa)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===Bs||o===sa||o===la||o===ca)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===Rr)return a.COMPRESSED_RED_RGTC1_EXT;if(o===sa)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===la)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===ca)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===ai?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[o]!==void 0?i[o]:null}return{convert:r}}var mo=class extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}};var cn=class extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}};var np={type:"move"},Zn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,s=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(let M of e.hand.values()){let d=t.getJointPose(M,n),f=this._getHandJoint(c,M);d!==null&&(f.matrix.fromArray(d.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=d.radius),f.visible=d!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&p>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(np)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new cn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var go=class extends Yt{constructor(e,t){super();let n=this,r=null,o=1,s=null,a="local-floor",l=1,c=null,u=null,h=null,p=null,m=null,g=null,M=t.getContextAttributes(),d=null,f=null,b=[],x=[],A=new Ve,D=null,L=new Bt;L.layers.enable(1),L.viewport=new tt;let R=new Bt;R.layers.enable(2),R.viewport=new tt;let F=[L,R],S=new mo;S.layers.enable(1),S.layers.enable(2);let T=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let Z=b[k];return Z===void 0&&(Z=new Zn,b[k]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(k){let Z=b[k];return Z===void 0&&(Z=new Zn,b[k]=Z),Z.getGripSpace()},this.getHand=function(k){let Z=b[k];return Z===void 0&&(Z=new Zn,b[k]=Z),Z.getHandSpace()};function K(k){let Z=x.indexOf(k.inputSource);if(Z===-1)return;let se=b[Z];se!==void 0&&(se.update(k.inputSource,k.frame,c||s),se.dispatchEvent({type:k.type,data:k.inputSource}))}function W(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",P);for(let k=0;k<b.length;k++){let Z=x[k];Z!==null&&(x[k]=null,b[k].disconnect(Z))}T=null,O=null,e.setRenderTarget(d),m=null,p=null,h=null,r=null,f=null,_e.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){o=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",W),r.addEventListener("inputsourceschange",P),M.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Z={antialias:r.renderState.layers===void 0?M.antialias:!0,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,t,Z),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new jt(m.framebufferWidth,m.framebufferHeight,{format:Ft,type:Jt,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil})}else{let Z=null,se=null,Q=null;M.depth&&(Q=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=M.stencil?Ei:pi,se=M.stencil?ai:$t);let Se={colorFormat:t.RGBA8,depthFormat:Q,scaleFactor:o};h=new XRWebGLBinding(r,t),p=h.createProjectionLayer(Se),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),f=new jt(p.textureWidth,p.textureHeight,{format:Ft,type:Jt,depthTexture:new qn(p.textureWidth,p.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0});let ze=e.properties.get(f);ze.__ignoreDepthValues=p.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),_e.setContext(r),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function P(k){for(let Z=0;Z<k.removed.length;Z++){let se=k.removed[Z],Q=x.indexOf(se);Q>=0&&(x[Q]=null,b[Q].disconnect(se))}for(let Z=0;Z<k.added.length;Z++){let se=k.added[Z],Q=x.indexOf(se);if(Q===-1){for(let ze=0;ze<b.length;ze++)if(ze>=x.length){x.push(se),Q=ze;break}else if(x[ze]===null){x[ze]=se,Q=ze;break}if(Q===-1)break}let Se=b[Q];Se&&Se.connect(se)}}let G=new N,X=new N;function J(k,Z,se){G.setFromMatrixPosition(Z.matrixWorld),X.setFromMatrixPosition(se.matrixWorld);let Q=G.distanceTo(X),Se=Z.projectionMatrix.elements,ze=se.projectionMatrix.elements,Ie=Se[14]/(Se[10]-1),Le=Se[14]/(Se[10]+1),Ke=(Se[9]+1)/Se[5],B=(Se[9]-1)/Se[5],vt=(Se[8]-1)/Se[0],Re=(ze[8]+1)/ze[0],He=Ie*vt,Me=Ie*Re,ut=Q/(-vt+Re),qe=ut*-vt;Z.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(qe),k.translateZ(ut),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();let E=Ie+ut,_=Le+ut,z=He-qe,ne=Me+(Q-qe),ie=Ke*Le/_*E,V=B*Le/_*E;k.projectionMatrix.makePerspective(z,ne,ie,V,E,_),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function Y(k,Z){Z===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(Z.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;S.near=R.near=L.near=k.near,S.far=R.far=L.far=k.far,(T!==S.near||O!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),T=S.near,O=S.far);let Z=k.parent,se=S.cameras;Y(S,Z);for(let Q=0;Q<se.length;Q++)Y(se[Q],Z);se.length===2?J(S,L,R):S.projectionMatrix.copy(L.projectionMatrix),q(k,S,Z)};function q(k,Z,se){se===null?k.matrix.copy(Z.matrixWorld):(k.matrix.copy(se.matrixWorld),k.matrix.invert(),k.matrix.multiply(Z.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(Z.projectionMatrix),k.projectionMatrixInverse.copy(Z.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=or*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(k){l=k,p!==null&&(p.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)};let j=null;function ee(k,Z){if(u=Z.getViewerPose(c||s),g=Z,u!==null){let se=u.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let Q=!1;se.length!==S.cameras.length&&(S.cameras.length=0,Q=!0);for(let Se=0;Se<se.length;Se++){let ze=se[Se],Ie=null;if(m!==null)Ie=m.getViewport(ze);else{let Ke=h.getViewSubImage(p,ze);Ie=Ke.viewport,Se===0&&(e.setRenderTargetTextures(f,Ke.colorTexture,p.ignoreDepthValues?void 0:Ke.depthStencilTexture),e.setRenderTarget(f))}let Le=F[Se];Le===void 0&&(Le=new Bt,Le.layers.enable(Se),Le.viewport=new tt,F[Se]=Le),Le.matrix.fromArray(ze.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(ze.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),Se===0&&(S.matrix.copy(Le.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Q===!0&&S.cameras.push(Le)}}for(let se=0;se<b.length;se++){let Q=x[se],Se=b[se];Q!==null&&Se!==void 0&&Se.update(Q,Z,c||s)}j&&j(k,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}let _e=new Hr;_e.setAnimationLoop(ee),this.setAnimationLoop=function(k){j=k},this.dispose=function(){}}};function Kf(i,e){function t(d,f){d.matrixAutoUpdate===!0&&d.updateMatrix(),f.value.copy(d.matrix)}function n(d,f){f.color.getRGB(d.fogColor.value,qr(i)),f.isFog?(d.fogNear.value=f.near,d.fogFar.value=f.far):f.isFogExp2&&(d.fogDensity.value=f.density)}function r(d,f,b,x,A){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(d,f):f.isMeshToonMaterial?(o(d,f),h(d,f)):f.isMeshPhongMaterial?(o(d,f),u(d,f)):f.isMeshStandardMaterial?(o(d,f),p(d,f),f.isMeshPhysicalMaterial&&m(d,f,A)):f.isMeshMatcapMaterial?(o(d,f),g(d,f)):f.isMeshDepthMaterial?o(d,f):f.isMeshDistanceMaterial?(o(d,f),M(d,f)):f.isMeshNormalMaterial?o(d,f):f.isLineBasicMaterial?(s(d,f),f.isLineDashedMaterial&&a(d,f)):f.isPointsMaterial?l(d,f,b,x):f.isSpriteMaterial?c(d,f):f.isShadowMaterial?(d.color.value.copy(f.color),d.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(d,f){d.opacity.value=f.opacity,f.color&&d.diffuse.value.copy(f.color),f.emissive&&d.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(d.map.value=f.map,t(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,t(f.alphaMap,d.alphaMapTransform)),f.bumpMap&&(d.bumpMap.value=f.bumpMap,t(f.bumpMap,d.bumpMapTransform),d.bumpScale.value=f.bumpScale,f.side===gt&&(d.bumpScale.value*=-1)),f.normalMap&&(d.normalMap.value=f.normalMap,t(f.normalMap,d.normalMapTransform),d.normalScale.value.copy(f.normalScale),f.side===gt&&d.normalScale.value.negate()),f.displacementMap&&(d.displacementMap.value=f.displacementMap,t(f.displacementMap,d.displacementMapTransform),d.displacementScale.value=f.displacementScale,d.displacementBias.value=f.displacementBias),f.emissiveMap&&(d.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,d.emissiveMapTransform)),f.specularMap&&(d.specularMap.value=f.specularMap,t(f.specularMap,d.specularMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest);let b=e.get(f).envMap;if(b&&(d.envMap.value=b,d.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=f.reflectivity,d.ior.value=f.ior,d.refractionRatio.value=f.refractionRatio),f.lightMap){d.lightMap.value=f.lightMap;let x=i._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=f.lightMapIntensity*x,t(f.lightMap,d.lightMapTransform)}f.aoMap&&(d.aoMap.value=f.aoMap,d.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,d.aoMapTransform))}function s(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,f.map&&(d.map.value=f.map,t(f.map,d.mapTransform))}function a(d,f){d.dashSize.value=f.dashSize,d.totalSize.value=f.dashSize+f.gapSize,d.scale.value=f.scale}function l(d,f,b,x){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.size.value=f.size*b,d.scale.value=x*.5,f.map&&(d.map.value=f.map,t(f.map,d.uvTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,t(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function c(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.rotation.value=f.rotation,f.map&&(d.map.value=f.map,t(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,t(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function u(d,f){d.specular.value.copy(f.specular),d.shininess.value=Math.max(f.shininess,1e-4)}function h(d,f){f.gradientMap&&(d.gradientMap.value=f.gradientMap)}function p(d,f){d.metalness.value=f.metalness,f.metalnessMap&&(d.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,d.metalnessMapTransform)),d.roughness.value=f.roughness,f.roughnessMap&&(d.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,d.roughnessMapTransform)),e.get(f).envMap&&(d.envMapIntensity.value=f.envMapIntensity)}function m(d,f,b){d.ior.value=f.ior,f.sheen>0&&(d.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),d.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(d.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,d.sheenColorMapTransform)),f.sheenRoughnessMap&&(d.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,d.sheenRoughnessMapTransform))),f.clearcoat>0&&(d.clearcoat.value=f.clearcoat,d.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(d.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,d.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(d.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===gt&&d.clearcoatNormalScale.value.negate())),f.iridescence>0&&(d.iridescence.value=f.iridescence,d.iridescenceIOR.value=f.iridescenceIOR,d.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(d.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,d.iridescenceMapTransform)),f.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),f.transmission>0&&(d.transmission.value=f.transmission,d.transmissionSamplerMap.value=b.texture,d.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(d.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,d.transmissionMapTransform)),d.thickness.value=f.thickness,f.thicknessMap&&(d.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=f.attenuationDistance,d.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(d.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(d.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=f.specularIntensity,d.specularColor.value.copy(f.specularColor),f.specularColorMap&&(d.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,d.specularColorMapTransform)),f.specularIntensityMap&&(d.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,f){f.matcap&&(d.matcap.value=f.matcap)}function M(d,f){let b=e.get(f).light;d.referencePosition.value.setFromMatrixPosition(b.matrixWorld),d.nearDistance.value=b.shadow.camera.near,d.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Jf(i,e,t,n){let r={},o={},s=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,x){let A=x.program;n.uniformBlockBinding(b,A)}function c(b,x){let A=r[b.id];A===void 0&&(g(b),A=u(b),r[b.id]=A,b.addEventListener("dispose",d));let D=x.program;n.updateUBOMapping(b,D);let L=e.render.frame;o[b.id]!==L&&(p(b),o[b.id]=L)}function u(b){let x=h();b.__bindingPointIndex=x;let A=i.createBuffer(),D=b.__size,L=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,D,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,A),A}function h(){for(let b=0;b<a;b++)if(s.indexOf(b)===-1)return s.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(b){let x=r[b.id],A=b.uniforms,D=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let L=0,R=A.length;L<R;L++){let F=Array.isArray(A[L])?A[L]:[A[L]];for(let S=0,T=F.length;S<T;S++){let O=F[S];if(m(O,L,S,D)===!0){let K=O.__offset,W=Array.isArray(O.value)?O.value:[O.value],P=0;for(let G=0;G<W.length;G++){let X=W[G],J=M(X);typeof X=="number"||typeof X=="boolean"?(O.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,K+P,O.__data)):X.isMatrix3?(O.__data[0]=X.elements[0],O.__data[1]=X.elements[1],O.__data[2]=X.elements[2],O.__data[3]=0,O.__data[4]=X.elements[3],O.__data[5]=X.elements[4],O.__data[6]=X.elements[5],O.__data[7]=0,O.__data[8]=X.elements[6],O.__data[9]=X.elements[7],O.__data[10]=X.elements[8],O.__data[11]=0):(X.toArray(O.__data,P),P+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,K,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,x,A,D){let L=b.value,R=x+"_"+A;if(D[R]===void 0)return typeof L=="number"||typeof L=="boolean"?D[R]=L:D[R]=L.clone(),!0;{let F=D[R];if(typeof L=="number"||typeof L=="boolean"){if(F!==L)return D[R]=L,!0}else if(F.equals(L)===!1)return F.copy(L),!0}return!1}function g(b){let x=b.uniforms,A=0,D=16;for(let R=0,F=x.length;R<F;R++){let S=Array.isArray(x[R])?x[R]:[x[R]];for(let T=0,O=S.length;T<O;T++){let K=S[T],W=Array.isArray(K.value)?K.value:[K.value];for(let P=0,G=W.length;P<G;P++){let X=W[P],J=M(X),Y=A%D;Y!==0&&D-Y<J.boundary&&(A+=D-Y),K.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=A,A+=J.storage}}}let L=A%D;return L>0&&(A+=D-L),b.__size=A,b.__cache={},this}function M(b){let x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function d(b){let x=b.target;x.removeEventListener("dispose",d);let A=s.indexOf(x.__bindingPointIndex);s.splice(A,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete o[x.id]}function f(){for(let b in r)i.deleteBuffer(r[b]);s=[],r={},o={}}return{bind:l,update:c,dispose:f}}var _o=class{constructor(e={}){let{canvas:t=cl(),context:n=null,depth:r=!0,stencil:o=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=s;let m=new Uint32Array(4),g=new Int32Array(4),M=null,d=null,f=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mt,this._useLegacyLights=!1,this.toneMapping=oi,this.toneMappingExposure=1;let x=this,A=!1,D=0,L=0,R=null,F=-1,S=null,T=new tt,O=new tt,K=null,W=new Ze(0),P=0,G=t.width,X=t.height,J=1,Y=null,q=null,j=new tt(0,0,G,X),ee=new tt(0,0,G,X),_e=!1,k=new Sn,Z=!1,se=!1,Q=null,Se=new ht,ze=new Ve,Ie=new N,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ke(){return R===null?J:1}let B=n;function vt(v,y){for(let I=0;I<v.length;I++){let w=v[I],U=t.getContext(w,y);if(U!==null)return U}return null}try{let v={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Za}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",C,!1),t.addEventListener("webglcontextcreationerror",pe,!1),B===null){let y=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&y.shift(),B=vt(y,v),B===null)throw vt(y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Re,He,Me,ut,qe,E,_,z,ne,ie,V,Ee,le,xe,Pe,ke,te,it,Je,Be,Ae,ve,We,et;function st(){Re=new df(B),He=new nf(B,Re,e),Re.init(He),ve=new Zf(B,Re,He),Me=new Yf(B,Re,He),ut=new gf(B),qe=new Of,E=new jf(B,Re,Me,qe,He,ve,ut),_=new of(x),z=new hf(x),ne=new tl(B,He),We=new ef(B,Re,ne,He),ie=new pf(B,ne,ut,We),V=new xf(B,ie,ne,ut),Je=new _f(B,He,E),ke=new rf(qe),Ee=new Ff(x,_,z,Re,He,We,ke),le=new Kf(x,qe),xe=new zf,Pe=new kf(Re,He),it=new Qu(x,_,z,Me,V,p,l),te=new qf(x,V,He),et=new Jf(B,ut,He,Me),Be=new tf(B,Re,ut,He),Ae=new mf(B,Re,ut,He),ut.programs=Ee.programs,x.capabilities=He,x.extensions=Re,x.properties=qe,x.renderLists=xe,x.shadowMap=te,x.state=Me,x.info=ut}st();let je=new go(x,B);this.xr=je,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let v=Re.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Re.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(v){v!==void 0&&(J=v,this.setSize(G,X,!1))},this.getSize=function(v){return v.set(G,X)},this.setSize=function(v,y,I=!0){if(je.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=v,X=y,t.width=Math.floor(v*J),t.height=Math.floor(y*J),I===!0&&(t.style.width=v+"px",t.style.height=y+"px"),this.setViewport(0,0,v,y)},this.getDrawingBufferSize=function(v){return v.set(G*J,X*J).floor()},this.setDrawingBufferSize=function(v,y,I){G=v,X=y,J=I,t.width=Math.floor(v*I),t.height=Math.floor(y*I),this.setViewport(0,0,v,y)},this.getCurrentViewport=function(v){return v.copy(T)},this.getViewport=function(v){return v.copy(j)},this.setViewport=function(v,y,I,w){v.isVector4?j.set(v.x,v.y,v.z,v.w):j.set(v,y,I,w),Me.viewport(T.copy(j).multiplyScalar(J).floor())},this.getScissor=function(v){return v.copy(ee)},this.setScissor=function(v,y,I,w){v.isVector4?ee.set(v.x,v.y,v.z,v.w):ee.set(v,y,I,w),Me.scissor(O.copy(ee).multiplyScalar(J).floor())},this.getScissorTest=function(){return _e},this.setScissorTest=function(v){Me.setScissorTest(_e=v)},this.setOpaqueSort=function(v){Y=v},this.setTransparentSort=function(v){q=v},this.getClearColor=function(v){return v.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor.apply(it,arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha.apply(it,arguments)},this.clear=function(v=!0,y=!0,I=!0){let w=0;if(v){let U=!1;if(R!==null){let re=R.texture.format;U=re===Er||re===Sr||re===Mr}if(U){let re=R.texture.type,oe=re===Jt||re===$t||re===hn||re===ai||re===xr||re===vr,ge=it.getClearColor(),he=it.getClearAlpha(),Te=ge.r,Fe=ge.g,Oe=ge.b;oe?(m[0]=Te,m[1]=Fe,m[2]=Oe,m[3]=he,B.clearBufferuiv(B.COLOR,0,m)):(g[0]=Te,g[1]=Fe,g[2]=Oe,g[3]=he,B.clearBufferiv(B.COLOR,0,g))}else w|=B.COLOR_BUFFER_BIT}y&&(w|=B.DEPTH_BUFFER_BIT),I&&(w|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(w)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",C,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),xe.dispose(),Pe.dispose(),qe.dispose(),_.dispose(),z.dispose(),V.dispose(),We.dispose(),et.dispose(),Ee.dispose(),je.dispose(),je.removeEventListener("sessionstart",Xe),je.removeEventListener("sessionend",De),Q&&(Q.dispose(),Q=null),ue.stop()};function ce(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let v=ut.autoReset,y=te.enabled,I=te.autoUpdate,w=te.needsUpdate,U=te.type;st(),ut.autoReset=v,te.enabled=y,te.autoUpdate=I,te.needsUpdate=w,te.type=U}function pe(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function me(v){let y=v.target;y.removeEventListener("dispose",me),H(y)}function H(v){$(v),qe.remove(v)}function $(v){let y=qe.get(v).programs;y!==void 0&&(y.forEach(function(I){Ee.releaseProgram(I)}),v.isShaderMaterial&&Ee.releaseShaderCache(v))}this.renderBufferDirect=function(v,y,I,w,U,re){y===null&&(y=Le);let oe=U.isMesh&&U.matrixWorld.determinant()<0,ge=ot(v,y,I,w,U);Me.setMaterial(w,oe);let he=I.index,Te=1;if(w.wireframe===!0){if(he=ie.getWireframeAttribute(I),he===void 0)return;Te=2}let Fe=I.drawRange,Oe=I.attributes.position,ct=Fe.start*Te,Gt=(Fe.start+Fe.count)*Te;re!==null&&(ct=Math.max(ct,re.start*Te),Gt=Math.min(Gt,(re.start+re.count)*Te)),he!==null?(ct=Math.max(ct,0),Gt=Math.min(Gt,he.count)):Oe!=null&&(ct=Math.max(ct,0),Gt=Math.min(Gt,Oe.count));let xt=Gt-ct;if(xt<0||xt===1/0)return;We.setup(U,w,ge,I,he);let ii,pt=Be;if(he!==null&&(ii=ne.get(he),pt=Ae,pt.setIndex(ii)),U.isMesh)w.wireframe===!0?(Me.setLineWidth(w.wireframeLinewidth*Ke()),pt.setMode(B.LINES)):pt.setMode(B.TRIANGLES);else if(U.isLine){let we=w.linewidth;we===void 0&&(we=1),Me.setLineWidth(we*Ke()),U.isLineSegments?pt.setMode(B.LINES):U.isLineLoop?pt.setMode(B.LINE_LOOP):pt.setMode(B.LINE_STRIP)}else U.isPoints?pt.setMode(B.POINTS):U.isSprite&&pt.setMode(B.TRIANGLES);if(U.isBatchedMesh)pt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else if(U.isInstancedMesh)pt.renderInstances(ct,xt,U.count);else if(I.isInstancedBufferGeometry){let we=I._maxInstanceCount!==void 0?I._maxInstanceCount:1/0,Mi=Math.min(I.instanceCount,we);pt.renderInstances(ct,xt,Mi)}else pt.render(ct,xt)};function ae(v,y,I){v.transparent===!0&&v.side===Lt&&v.forceSinglePass===!1?(v.side=gt,v.needsUpdate=!0,$e(v,y,I),v.side=Kt,v.needsUpdate=!0,$e(v,y,I),v.side=Lt):$e(v,y,I)}this.compile=function(v,y,I=null){I===null&&(I=v),d=Pe.get(I),d.init(),b.push(d),I.traverseVisible(function(U){U.isLight&&U.layers.test(y.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),v!==I&&v.traverseVisible(function(U){U.isLight&&U.layers.test(y.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights(x._useLegacyLights);let w=new Set;return v.traverse(function(U){let re=U.material;if(re)if(Array.isArray(re))for(let oe=0;oe<re.length;oe++){let ge=re[oe];ae(ge,I,U),w.add(ge)}else ae(re,I,U),w.add(re)}),b.pop(),d=null,w},this.compileAsync=function(v,y,I=null){let w=this.compile(v,y,I);return new Promise(U=>{function re(){if(w.forEach(function(oe){qe.get(oe).currentProgram.isReady()&&w.delete(oe)}),w.size===0){U(v);return}setTimeout(re,10)}Re.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let de=null;function ye(v){de&&de(v)}function Xe(){ue.stop()}function De(){ue.start()}let ue=new Hr;ue.setAnimationLoop(ye),typeof self<"u"&&ue.setContext(self),this.setAnimationLoop=function(v){de=v,je.setAnimationLoop(v),v===null?ue.stop():ue.start()},je.addEventListener("sessionstart",Xe),je.addEventListener("sessionend",De),this.render=function(v,y){if(y!==void 0&&y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),y.parent===null&&y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(je.cameraAutoUpdate===!0&&je.updateCamera(y),y=je.getCamera()),v.isScene===!0&&v.onBeforeRender(x,v,y,R),d=Pe.get(v,b.length),d.init(),b.push(d),Se.multiplyMatrices(y.projectionMatrix,y.matrixWorldInverse),k.setFromProjectionMatrix(Se),se=this.localClippingEnabled,Z=ke.init(this.clippingPlanes,se),M=xe.get(v,f.length),M.init(),f.push(M),be(v,y,0,x.sortObjects),M.finish(),x.sortObjects===!0&&M.sort(Y,q),this.info.render.frame++,Z===!0&&ke.beginShadows();let I=d.state.shadowsArray;if(te.render(I,v,y),Z===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),it.render(M,v),d.setupLights(x._useLegacyLights),y.isArrayCamera){let w=y.cameras;for(let U=0,re=w.length;U<re;U++){let oe=w[U];Ue(M,v,oe,oe.viewport)}}else Ue(M,v,y);R!==null&&(E.updateMultisampleRenderTarget(R),E.updateRenderTargetMipmap(R)),v.isScene===!0&&v.onAfterRender(x,v,y),We.resetDefaultState(),F=-1,S=null,b.pop(),b.length>0?d=b[b.length-1]:d=null,f.pop(),f.length>0?M=f[f.length-1]:M=null};function be(v,y,I,w){if(v.visible===!1)return;if(v.layers.test(y.layers)){if(v.isGroup)I=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(y);else if(v.isLight)d.pushLight(v),v.castShadow&&d.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||k.intersectsSprite(v)){w&&Ie.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Se);let oe=V.update(v),ge=v.material;ge.visible&&M.push(v,oe,ge,I,Ie.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||k.intersectsObject(v))){let oe=V.update(v),ge=v.material;if(w&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ie.copy(v.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),Ie.copy(oe.boundingSphere.center)),Ie.applyMatrix4(v.matrixWorld).applyMatrix4(Se)),Array.isArray(ge)){let he=oe.groups;for(let Te=0,Fe=he.length;Te<Fe;Te++){let Oe=he[Te],ct=ge[Oe.materialIndex];ct&&ct.visible&&M.push(v,oe,ct,I,Ie.z,Oe)}}else ge.visible&&M.push(v,oe,ge,I,Ie.z,null)}}let re=v.children;for(let oe=0,ge=re.length;oe<ge;oe++)be(re[oe],y,I,w)}function Ue(v,y,I,w){let U=v.opaque,re=v.transmissive,oe=v.transparent;d.setupLightsView(I),Z===!0&&ke.setGlobalState(x.clippingPlanes,I),re.length>0&&Ne(U,re,y,I),w&&Me.viewport(T.copy(w)),U.length>0&&nt(U,y,I),re.length>0&&nt(re,y,I),oe.length>0&&nt(oe,y,I),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Ne(v,y,I,w){if((I.isScene===!0?I.overrideMaterial:null)!==null)return;let re=He.isWebGL2;Q===null&&(Q=new jt(1,1,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")?Ci:Jt,minFilter:di,samples:re?4:0})),x.getDrawingBufferSize(ze),re?Q.setSize(ze.x,ze.y):Q.setSize(ar(ze.x),ar(ze.y));let oe=x.getRenderTarget();x.setRenderTarget(Q),x.getClearColor(W),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();let ge=x.toneMapping;x.toneMapping=oi,nt(v,I,w),E.updateMultisampleRenderTarget(Q),E.updateRenderTargetMipmap(Q);let he=!1;for(let Te=0,Fe=y.length;Te<Fe;Te++){let Oe=y[Te],ct=Oe.object,Gt=Oe.geometry,xt=Oe.material,ii=Oe.group;if(xt.side===Lt&&ct.layers.test(w.layers)){let pt=xt.side;xt.side=gt,xt.needsUpdate=!0,rt(ct,I,w,Gt,xt,ii),xt.side=pt,xt.needsUpdate=!0,he=!0}}he===!0&&(E.updateMultisampleRenderTarget(Q),E.updateRenderTargetMipmap(Q)),x.setRenderTarget(oe),x.setClearColor(W,P),x.toneMapping=ge}function nt(v,y,I){let w=y.isScene===!0?y.overrideMaterial:null;for(let U=0,re=v.length;U<re;U++){let oe=v[U],ge=oe.object,he=oe.geometry,Te=w===null?oe.material:w,Fe=oe.group;ge.layers.test(I.layers)&&rt(ge,y,I,he,Te,Fe)}}function rt(v,y,I,w,U,re){v.onBeforeRender(x,y,I,w,U,re),v.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),U.onBeforeRender(x,y,I,w,v,re),U.transparent===!0&&U.side===Lt&&U.forceSinglePass===!1?(U.side=gt,U.needsUpdate=!0,x.renderBufferDirect(I,y,w,U,v,re),U.side=Kt,U.needsUpdate=!0,x.renderBufferDirect(I,y,w,U,v,re),U.side=Lt):x.renderBufferDirect(I,y,w,U,v,re),v.onAfterRender(x,y,I,w,U,re)}function $e(v,y,I){y.isScene!==!0&&(y=Le);let w=qe.get(v),U=d.state.lights,re=d.state.shadowsArray,oe=U.state.version,ge=Ee.getParameters(v,U.state,re,y,I),he=Ee.getProgramCacheKey(ge),Te=w.programs;w.environment=v.isMeshStandardMaterial?y.environment:null,w.fog=y.fog,w.envMap=(v.isMeshStandardMaterial?z:_).get(v.envMap||w.environment),Te===void 0&&(v.addEventListener("dispose",me),Te=new Map,w.programs=Te);let Fe=Te.get(he);if(Fe!==void 0){if(w.currentProgram===Fe&&w.lightsStateVersion===oe)return lt(v,ge),Fe}else ge.uniforms=Ee.getUniforms(v),v.onBuild(I,ge,x),v.onBeforeCompile(ge,x),Fe=Ee.acquireProgram(ge,he),Te.set(he,Fe),w.uniforms=ge.uniforms;let Oe=w.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Oe.clippingPlanes=ke.uniform),lt(v,ge),w.needsLights=Nt(v),w.lightsStateVersion=oe,w.needsLights&&(Oe.ambientLightColor.value=U.state.ambient,Oe.lightProbe.value=U.state.probe,Oe.directionalLights.value=U.state.directional,Oe.directionalLightShadows.value=U.state.directionalShadow,Oe.spotLights.value=U.state.spot,Oe.spotLightShadows.value=U.state.spotShadow,Oe.rectAreaLights.value=U.state.rectArea,Oe.ltc_1.value=U.state.rectAreaLTC1,Oe.ltc_2.value=U.state.rectAreaLTC2,Oe.pointLights.value=U.state.point,Oe.pointLightShadows.value=U.state.pointShadow,Oe.hemisphereLights.value=U.state.hemi,Oe.directionalShadowMap.value=U.state.directionalShadowMap,Oe.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Oe.spotShadowMap.value=U.state.spotShadowMap,Oe.spotLightMatrix.value=U.state.spotLightMatrix,Oe.spotLightMap.value=U.state.spotLightMap,Oe.pointShadowMap.value=U.state.pointShadowMap,Oe.pointShadowMatrix.value=U.state.pointShadowMatrix),w.currentProgram=Fe,w.uniformsList=null,Fe}function Ce(v){if(v.uniformsList===null){let y=v.currentProgram.getUniforms();v.uniformsList=ji.seqWithValue(y.seq,v.uniforms)}return v.uniformsList}function lt(v,y){let I=qe.get(v);I.outputColorSpace=y.outputColorSpace,I.batching=y.batching,I.instancing=y.instancing,I.instancingColor=y.instancingColor,I.skinning=y.skinning,I.morphTargets=y.morphTargets,I.morphNormals=y.morphNormals,I.morphColors=y.morphColors,I.morphTargetsCount=y.morphTargetsCount,I.numClippingPlanes=y.numClippingPlanes,I.numIntersection=y.numClipIntersection,I.vertexAlphas=y.vertexAlphas,I.vertexTangents=y.vertexTangents,I.toneMapping=y.toneMapping}function ot(v,y,I,w,U){y.isScene!==!0&&(y=Le),E.resetTextureUnits();let re=y.fog,oe=w.isMeshStandardMaterial?y.environment:null,ge=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ot,he=(w.isMeshStandardMaterial?z:_).get(w.envMap||oe),Te=w.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,Fe=!!I.attributes.tangent&&(!!w.normalMap||w.anisotropy>0),Oe=!!I.morphAttributes.position,ct=!!I.morphAttributes.normal,Gt=!!I.morphAttributes.color,xt=oi;w.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(xt=x.toneMapping);let ii=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,pt=ii!==void 0?ii.length:0,we=qe.get(w),Mi=d.state.lights;if(Z===!0&&(se===!0||v!==S)){let ni=v===S&&w.id===F;ke.setState(w,v,ni)}let ft=!1;w.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Mi.state.version||we.outputColorSpace!==ge||U.isBatchedMesh&&we.batching===!1||!U.isBatchedMesh&&we.batching===!0||U.isInstancedMesh&&we.instancing===!1||!U.isInstancedMesh&&we.instancing===!0||U.isSkinnedMesh&&we.skinning===!1||!U.isSkinnedMesh&&we.skinning===!0||U.isInstancedMesh&&we.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&we.instancingColor===!1&&U.instanceColor!==null||we.envMap!==he||w.fog===!0&&we.fog!==re||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==ke.numPlanes||we.numIntersection!==ke.numIntersection)||we.vertexAlphas!==Te||we.vertexTangents!==Fe||we.morphTargets!==Oe||we.morphNormals!==ct||we.morphColors!==Gt||we.toneMapping!==xt||He.isWebGL2===!0&&we.morphTargetsCount!==pt)&&(ft=!0):(ft=!0,we.__version=w.version);let Ki=we.currentProgram;ft===!0&&(Ki=$e(w,y,U));let Ya=!1,Jn=!1,Ro=!1,zt=Ki.getUniforms(),Ji=we.uniforms;if(Me.useProgram(Ki.program)&&(Ya=!0,Jn=!0,Ro=!0),w.id!==F&&(F=w.id,Jn=!0),Ya||S!==v){zt.setValue(B,"projectionMatrix",v.projectionMatrix),zt.setValue(B,"viewMatrix",v.matrixWorldInverse);let ni=zt.map.cameraPosition;ni!==void 0&&ni.setValue(B,Ie.setFromMatrixPosition(v.matrixWorld)),He.logarithmicDepthBuffer&&zt.setValue(B,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(w.isMeshPhongMaterial||w.isMeshToonMaterial||w.isMeshLambertMaterial||w.isMeshBasicMaterial||w.isMeshStandardMaterial||w.isShaderMaterial)&&zt.setValue(B,"isOrthographic",v.isOrthographicCamera===!0),S!==v&&(S=v,Jn=!0,Ro=!0)}if(U.isSkinnedMesh){zt.setOptional(B,U,"bindMatrix"),zt.setOptional(B,U,"bindMatrixInverse");let ni=U.skeleton;ni&&(He.floatVertexTextures?(ni.boneTexture===null&&ni.computeBoneTexture(),zt.setValue(B,"boneTexture",ni.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}U.isBatchedMesh&&(zt.setOptional(B,U,"batchingTexture"),zt.setValue(B,"batchingTexture",U._matricesTexture,E));let Co=I.morphAttributes;if((Co.position!==void 0||Co.normal!==void 0||Co.color!==void 0&&He.isWebGL2===!0)&&Je.update(U,I,Ki),(Jn||we.receiveShadow!==U.receiveShadow)&&(we.receiveShadow=U.receiveShadow,zt.setValue(B,"receiveShadow",U.receiveShadow)),w.isMeshGouraudMaterial&&w.envMap!==null&&(Ji.envMap.value=he,Ji.flipEnvMap.value=he.isCubeTexture&&he.isRenderTargetTexture===!1?-1:1),Jn&&(zt.setValue(B,"toneMappingExposure",x.toneMappingExposure),we.needsLights&&_t(Ji,Ro),re&&w.fog===!0&&le.refreshFogUniforms(Ji,re),le.refreshMaterialUniforms(Ji,w,J,X,Q),ji.upload(B,Ce(we),Ji,E)),w.isShaderMaterial&&w.uniformsNeedUpdate===!0&&(ji.upload(B,Ce(we),Ji,E),w.uniformsNeedUpdate=!1),w.isSpriteMaterial&&zt.setValue(B,"center",U.center),zt.setValue(B,"modelViewMatrix",U.modelViewMatrix),zt.setValue(B,"normalMatrix",U.normalMatrix),zt.setValue(B,"modelMatrix",U.matrixWorld),w.isShaderMaterial||w.isRawShaderMaterial){let ni=w.uniformsGroups;for(let Lo=0,oh=ni.length;Lo<oh;Lo++)if(He.isWebGL2){let ja=ni[Lo];et.update(ja,Ki),et.bind(ja,Ki)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ki}function _t(v,y){v.ambientLightColor.needsUpdate=y,v.lightProbe.needsUpdate=y,v.directionalLights.needsUpdate=y,v.directionalLightShadows.needsUpdate=y,v.pointLights.needsUpdate=y,v.pointLightShadows.needsUpdate=y,v.spotLights.needsUpdate=y,v.spotLightShadows.needsUpdate=y,v.rectAreaLights.needsUpdate=y,v.hemisphereLights.needsUpdate=y}function Nt(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(v,y,I){qe.get(v.texture).__webglTexture=y,qe.get(v.depthTexture).__webglTexture=I;let w=qe.get(v);w.__hasExternalTextures=!0,w.__hasExternalTextures&&(w.__autoAllocateDepthBuffer=I===void 0,w.__autoAllocateDepthBuffer||Re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),w.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(v,y){let I=qe.get(v);I.__webglFramebuffer=y,I.__useDefaultFramebuffer=y===void 0},this.setRenderTarget=function(v,y=0,I=0){R=v,D=y,L=I;let w=!0,U=null,re=!1,oe=!1;if(v){let he=qe.get(v);he.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(B.FRAMEBUFFER,null),w=!1):he.__webglFramebuffer===void 0?E.setupRenderTarget(v):he.__hasExternalTextures&&E.rebindTextures(v,qe.get(v.texture).__webglTexture,qe.get(v.depthTexture).__webglTexture);let Te=v.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(oe=!0);let Fe=qe.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Fe[y])?U=Fe[y][I]:U=Fe[y],re=!0):He.isWebGL2&&v.samples>0&&E.useMultisampledRTT(v)===!1?U=qe.get(v).__webglMultisampledFramebuffer:Array.isArray(Fe)?U=Fe[I]:U=Fe,T.copy(v.viewport),O.copy(v.scissor),K=v.scissorTest}else T.copy(j).multiplyScalar(J).floor(),O.copy(ee).multiplyScalar(J).floor(),K=_e;if(Me.bindFramebuffer(B.FRAMEBUFFER,U)&&He.drawBuffers&&w&&Me.drawBuffers(v,U),Me.viewport(T),Me.scissor(O),Me.setScissorTest(K),re){let he=qe.get(v.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+y,he.__webglTexture,I)}else if(oe){let he=qe.get(v.texture),Te=y||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,he.__webglTexture,I||0,Te)}F=-1},this.readRenderTargetPixels=function(v,y,I,w,U,re,oe){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=qe.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&oe!==void 0&&(ge=ge[oe]),ge){Me.bindFramebuffer(B.FRAMEBUFFER,ge);try{let he=v.texture,Te=he.format,Fe=he.type;if(Te!==Ft&&ve.convert(Te)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Oe=Fe===Ci&&(Re.has("EXT_color_buffer_half_float")||He.isWebGL2&&Re.has("EXT_color_buffer_float"));if(Fe!==Jt&&ve.convert(Fe)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===Qt&&(He.isWebGL2||Re.has("OES_texture_float")||Re.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}y>=0&&y<=v.width-w&&I>=0&&I<=v.height-U&&B.readPixels(y,I,w,U,ve.convert(Te),ve.convert(Fe),re)}finally{let he=R!==null?qe.get(R).__webglFramebuffer:null;Me.bindFramebuffer(B.FRAMEBUFFER,he)}}},this.copyFramebufferToTexture=function(v,y,I=0){let w=Math.pow(2,-I),U=Math.floor(y.image.width*w),re=Math.floor(y.image.height*w);E.setTexture2D(y,0),B.copyTexSubImage2D(B.TEXTURE_2D,I,0,0,v.x,v.y,U,re),Me.unbindTexture()},this.copyTextureToTexture=function(v,y,I,w=0){let U=y.image.width,re=y.image.height,oe=ve.convert(I.format),ge=ve.convert(I.type);E.setTexture2D(I,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,I.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,I.unpackAlignment),y.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,w,v.x,v.y,U,re,oe,ge,y.image.data):y.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,w,v.x,v.y,y.mipmaps[0].width,y.mipmaps[0].height,oe,y.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,w,v.x,v.y,oe,ge,y.image),w===0&&I.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(v,y,I,w,U=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let re=v.max.x-v.min.x+1,oe=v.max.y-v.min.y+1,ge=v.max.z-v.min.z+1,he=ve.convert(w.format),Te=ve.convert(w.type),Fe;if(w.isData3DTexture)E.setTexture3D(w,0),Fe=B.TEXTURE_3D;else if(w.isDataArrayTexture||w.isCompressedArrayTexture)E.setTexture2DArray(w,0),Fe=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,w.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,w.unpackAlignment);let Oe=B.getParameter(B.UNPACK_ROW_LENGTH),ct=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Gt=B.getParameter(B.UNPACK_SKIP_PIXELS),xt=B.getParameter(B.UNPACK_SKIP_ROWS),ii=B.getParameter(B.UNPACK_SKIP_IMAGES),pt=I.isCompressedTexture?I.mipmaps[U]:I.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,pt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,pt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,v.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,v.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,v.min.z),I.isDataTexture||I.isData3DTexture?B.texSubImage3D(Fe,U,y.x,y.y,y.z,re,oe,ge,he,Te,pt.data):I.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Fe,U,y.x,y.y,y.z,re,oe,ge,he,pt.data)):B.texSubImage3D(Fe,U,y.x,y.y,y.z,re,oe,ge,he,Te,pt),B.pixelStorei(B.UNPACK_ROW_LENGTH,Oe),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ct),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Gt),B.pixelStorei(B.UNPACK_SKIP_ROWS,xt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ii),U===0&&w.generateMipmaps&&B.generateMipmap(Fe),Me.unbindTexture()},this.initTexture=function(v){v.isCubeTexture?E.setTextureCube(v,0):v.isData3DTexture?E.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?E.setTexture2DArray(v,0):E.setTexture2D(v,0),Me.unbindTexture()},this.resetState=function(){D=0,L=0,R=null,Me.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===dn?"display-p3":"srgb",t.unpackColorSpace=Qe.workingColorSpace===$i?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===mt?mi:Cr}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===mi?mt:Ot}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}};var xo=class extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var vo=class extends ci{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};var $f=new ht,Va=new Rn,Mo=new Ai,So=new N,Eo=class extends Tt{constructor(e=new Ut,t=new vo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(r),Mo.radius+=o,e.ray.intersectsSphere(Mo)===!1)return;$f.copy(r).invert(),Va.copy(e.ray).applyMatrix4($f);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let p=Math.max(0,s.start),m=Math.min(c.count,s.start+s.count);for(let g=p,M=m;g<M;g++){let d=c.getX(g);So.fromBufferAttribute(h,d),Qf(So,d,l,r,e,t,this)}}else{let p=Math.max(0,s.start),m=Math.min(h.count,s.start+s.count);for(let g=p,M=m;g<M;g++)So.fromBufferAttribute(h,g),Qf(So,g,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function Qf(i,e,t,n,r,o,s){let a=Va.distanceSqToPoint(i);if(a<t){let l=new N;Va.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:s})}}var ka={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};var Wa=class{constructor(e,t,n){let r=this,o=!1,s=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,o===!1&&r.onStart!==void 0&&r.onStart(u,s,a),o=!0},this.itemEnd=function(u){s++,r.onProgress!==void 0&&r.onProgress(u,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,p=c.length;h<p;h+=2){let m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}},eh=new Wa;var un=class{constructor(e){this.manager=e!==void 0?e:eh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,o){n.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};un.DEFAULT_MATERIAL_NAME="__DEFAULT";var yo=class extends un{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let o=this,s=ka.get(e);if(s!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0),s;let a=Wi("img");function l(){u(),ka.add(e,this),t&&t(this),o.manager.itemEnd(e)}function c(h){u(),r&&r(h),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}};var To=class extends un{constructor(e){super(e)}load(e,t,n,r){let o=new wt,s=new yo(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,t!==void 0&&t(o)},n,r),o}};Qe.enabled=!1;var Ao={morse:{img:"morse",name:"Samuel Morse",short:"Morse",face:[.47,.34],head:[.17,.17],eyes:[[.414,.318],[.531,.318]],hw:.022,crop:[.47,.42,.86]},vail:{img:"vail",name:"Alfred Vail",short:"Vail",face:[.54,.33],head:[.15,.13],eyes:[[.48,.31],[.594,.31]],hw:.025,crop:[.53,.38,.72]},lovelace:{img:"lovelace",name:"Ada Lovelace",short:"Lovelace",face:[.52,.27],head:[.11,.09],eyes:[[.473,.2415],[.5625,.2415]],hw:.016,crop:[.5,.3,.55]},babbage:{img:"babbage",name:"Charles Babbage",short:"Babbage",face:[.52,.3],head:[.15,.12],eyes:[[.458,.26],[.575,.26]],hw:.02,crop:[.5,.34,.7]},bell:{img:"bell",name:"Alexander Graham Bell",short:"Bell",face:[.47,.42],head:[.22,.2],eyes:[[.39,.37],[.547,.37]],hw:.03,crop:[.48,.45,.86]},watson:{img:"watson",name:"Thomas Watson",short:"Watson",face:[.48,.32],head:[.18,.15],eyes:[[.4,.29],[.5625,.29]],hw:.03,crop:[.48,.4,.8]},wilbur:{img:"wilbur",name:"Wilbur Wright",short:"Wilbur",face:[.47,.36],head:[.17,.15],eyes:[[.4,.325],[.544,.325]],hw:.022,crop:[.47,.42,.75]},orville:{img:"orville",name:"Orville Wright",short:"Orville",face:[.567,.38],head:[.18,.15],eyes:[[.497,.33],[.637,.33]],hw:.028,crop:[.56,.45,.8]},pierre:{img:"pierre",name:"Pierre Curie",short:"Pierre",face:[.62,.33],head:[.2,.15],crop:[.58,.42,.9]},marie:{img:"marie",name:"Marie Curie",short:"Marie",face:[.62,.36],head:[.17,.15],crop:[.55,.42,.9]}},wo=[{a:"morse",b:"vail",scene:"s_morse",cap:"Samuel Morse and Alfred Vail",capShort:"Morse and Vail",what:"The electric telegraph, 1844"},{a:"lovelace",b:"babbage",scene:"s_engine",cap:"Ada Lovelace and Charles Babbage",capShort:"Lovelace and Babbage",what:"The first computer program, 1843"},{a:"bell",b:"watson",scene:"s_bell",cap:"Alexander Graham Bell and Thomas Watson",capShort:"Bell and Watson",what:"The first telephone call, 1876"},{a:"wilbur",b:"orville",scene:"s_flight",cap:"Wilbur and Orville Wright",capShort:"The Wright brothers",what:"The first powered flight, 1903"},{a:"pierre",b:"marie",scene:"s_curie",cap:"Pierre and Marie Curie",capShort:"Pierre and Marie Curie",what:"The discovery of radium, 1898"}],rp={beats:["Every breakthrough here came from a partnership: two people with different strengths, connected well enough to do what neither could do alone.","Since 1997, eProxim has been that kind of partner on integration work."]},op={morse:["Samuel Morse, c. 1850, by Mathew Brady","Mathew_B._Brady_-_Photo_of_Samuel_F.B._Morse_(c.1850).jpg"],vail:["Alfred Vail, 1853","Alfred_Vail.jpg"],lovelace:["Ada Lovelace, c. 1840, by Alfred Edward Chalon","Ada_Lovelace_portrait.jpg"],babbage:["Charles Babbage, 1860","Charles_Babbage_-_1860.jpg"],bell:["Alexander Graham Bell, 1904","Alexander_Graham_Bell.jpeg"],watson:["Thomas A. Watson, 1902, Library of Congress","Thomas_Augustus_Watson,_head-and-shoulders_portrait,_facing_front_LCCN90708043.jpg"],wilbur:["Wilbur Wright, 1905","Wilbur_Wright-crop.jpg"],orville:["Orville Wright, 1905","Orville_Wright_1905-crop.jpg"],pierre:["Pierre Curie, 1903, Nobel Foundation","PierreCurie.jpg"],marie:["Marie Curie, 1903, Nobel Foundation","Marie_Curie_1903.jpg"],s_morse:["Samuel Morse with his telegraph register, 1857, by Mathew Brady","Samuel_Morse_with_his_Recorder_by_Brady,_1857.png"],s_engine:["Babbage's Difference Engine, drawing by Benjamin Herschel Babbage, 1864","Babbage_difference_engine_drawing.gif"],s_bell:["Bell opening the New York to Chicago line, 1892, Library of Congress","Alexander_Graham_Bell_at_the_opening_of_the_long-distance_line_from_New_York_to_Chicago.jpg"],s_flight:["First flight, December 17, 1903, by John T. Daniels","First_flight2.jpg"],s_curie:["Pierre and Marie Curie in their laboratory, c. 1904","Pierre_and_Marie_Curie.jpg"]},ap=[244/255,251/255,250/255],Zi=(i,e,t)=>i<e?e:i>t?t:i,It=(i,e,t)=>{let n=Zi((t-i)/(e-i),0,1);return n*n*(3-2*n)},Oi=(i,e,t)=>i+(e-i)*t,Zt=i=>{let e=Math.sin(i*127.1+311.7)*43758.5453;return e-Math.floor(e)},dr=`
uniform vec4 uRects[32]; uniform int uNR;
bool inCopy(vec2 p) { for (int i = 0; i < 32; i++) { if (i >= uNR) break; vec4 r = uRects[i]; if (p.x > r.x && p.x < r.z && p.y > r.y && p.y < r.w) return true; } return false; }
`,Xa=`
uniform vec4 uRect; uniform float uMargin; varying vec2 vPx;
void main() { vPx = uRect.xy - uMargin + position.xy * (uRect.zw + 2.0 * uMargin); gl_Position = projectionMatrix * modelViewMatrix * vec4(vPx, 0.0, 1.0); }
`,sp=`
uniform vec2 uSize; uniform float uEnv; uniform float uTime; varying vec2 vPx;
${dr}
void main() {
  vec3 c = vec3(${ap.join(",")});
  vec2 p = vPx / uSize;
  float r = length((vPx - uSize * vec2(0.5, 0.6)) / max(uSize.x, uSize.y));
  float g = uEnv * smoothstep(0.75, 0.0, r) * smoothstep(0.0, 0.12, 1.0 - p.y) * smoothstep(0.0, 0.05, p.y);
  c = mix(c, vec3(1.0, 0.925, 0.80), g * 0.55);
  gl_FragColor = vec4(c, 1.0);
}`,lp=`
uniform sampler2D uImg; uniform sampler2D uScene;
uniform vec4 uRect; uniform float uMargin;
uniform vec4 uCrop; uniform vec4 uSCrop; uniform vec2 uImgPx;
uniform vec2 uFace; uniform vec2 uHead; uniform vec4 uEyes; uniform float uHw; uniform float uHasEyes;
uniform float uTurn; uniform float uBlink; uniform float uBreath; uniform float uFill; uniform float uSceneMix;
uniform float uGlass; uniform float uDis; uniform float uGlow; uniform float uAlpha; uniform float uZoom;
uniform float uFeather; uniform float uLightX; uniform float uShadow; uniform float uGlassA;
varying vec2 vPx;
${dr}
float n2(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  float a = fract(sin(dot(i, vec2(127.1, 311.7))) * 43758.5), b = fract(sin(dot(i + vec2(1, 0), vec2(127.1, 311.7))) * 43758.5);
  float c = fract(sin(dot(i + vec2(0, 1), vec2(127.1, 311.7))) * 43758.5), d = fract(sin(dot(i + vec2(1, 1), vec2(127.1, 311.7))) * 43758.5);
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y); }
vec3 tone(vec3 c) { float l = dot(c, vec3(0.299, 0.587, 0.114)); return mix(c, vec3(l * 1.06, l * 0.985, l * 0.88), 0.62); }
vec4 over(vec4 top, vec4 bot) { float a = top.a + bot.a * (1.0 - top.a); return a < 1e-4 ? vec4(0.0) : vec4((top.rgb * top.a + bot.rgb * bot.a * (1.0 - top.a)) / a, a); }
void main() {
  vec2 p = (vPx - uRect.xy) / uRect.zw;
  vec2 dpx = max(-vPx + uRect.xy, vPx - uRect.xy - uRect.zw);           // > 0 outside
  float outside = max(dpx.x, dpx.y);
  if (inCopy(vPx)) discard;
  vec4 col = vec4(0.0);
  // drop shadow and wires live outside the rect
  if (outside > 0.0) {
    vec2 q = vPx - vec2(0.0, 0.2 * uMargin);
    vec2 d2 = max(max(-q + uRect.xy, q - uRect.xy - uRect.zw), 0.0);
    float sk = 0.26 * uMargin;
    float sh = exp(-dot(d2, d2) / (sk * sk)) * 0.15 * uShadow;
    gl_FragColor = vec4(0.07, 0.24, 0.31, sh);
    if (sh < 0.003) discard;
    return;
  }
  // glass: what is left after dissolving
  float gn = n2(p * vec2(9.0, 11.0) + 3.1) * 0.7 + n2(p * 31.0) * 0.3;
  float glass = uGlass * uGlassA * smoothstep(uDis * 1.12 - 0.08, uDis * 1.12 + 0.02, gn);
  col = vec4(1.0, 1.0, 1.0, 0.42 * glass);
  // portrait
  vec2 q = (p - vec2(0.5, 1.0)) / (1.0 + uBreath) + vec2(0.5, 1.0);
  vec2 uv = uCrop.xy + q * uCrop.zw;
  vec2 d = (uv - uFace) / uHead; float r2 = dot(d, d); float k = exp(-r2 * 1.1);
  uv.x -= uTurn * uHead.x * 0.2 * k;
  d = (uv - uFace) / uHead; r2 = dot(d, d); k = exp(-r2 * 1.1);
  float bias = (1.0 - uFill) * 5.0;
  vec3 pc = texture2D(uImg, uv, bias).rgb;
  if (uHasEyes > 0.5 && uBlink > 0.01) {
    float asp = uImgPx.x / uImgPx.y;
    for (int e = 0; e < 2; e++) {
      vec2 ec = e == 0 ? uEyes.xy : uEyes.zw;
      float ry = uHw * 0.62 * asp;
      vec2 l = vec2((uv.x - ec.x) / (uHw * 1.15), (uv.y - ec.y) / ry);
      float em = 1.0 - smoothstep(0.82, 1.0, length(l));
      if (em > 0.0) {
        vec3 skin = texture2D(uImg, vec2(ec.x, ec.y - ry * 1.9)).rgb;
        float edge = -1.0 + 2.2 * uBlink;
        float cover = smoothstep(edge + 0.12, edge - 0.12, l.y);
        float lash = exp(-pow((l.y - edge) * 7.0, 2.0)) * smoothstep(0.05, 0.3, uBlink);
        pc = mix(pc, skin * 0.97, cover * em);
        pc *= 1.0 - 0.45 * lash * em;
      }
    }
  }
  vec3 nrm = normalize(vec3(d.x, d.y * 0.9, sqrt(max(0.08, 1.0 - r2))));
  float lam = dot(nrm, normalize(vec3(uLightX, -0.35, 0.85)));
  pc *= mix(1.0, 0.8 + 0.32 * lam, k * 0.85);
  pc = tone(pc);
  // scene half
  vec2 sp = (p - 0.5) / uZoom + 0.5;
  vec3 sc = tone(texture2D(uScene, uSCrop.xy + sp * uSCrop.zw).rgb);
  vec3 cc = mix(pc, sc, uSceneMix);
  // warm light that answers a connection
  float lg = exp(-pow(length((p - vec2(0.5 + uLightX * 0.22, 0.32)) * vec2(1.0, 1.3)) / 0.55, 2.0));
  cc = mix(cc, cc * vec3(1.12, 1.04, 0.9) + vec3(0.07, 0.04, 0.0), lg * (0.25 + uGlow * 0.55));
  float fe = uFeather > 0.0 ? smoothstep(0.0, uFeather, min(min(p.x, 1.0 - p.x), min(p.y, 1.0 - p.y))) : 1.0;
  col = over(vec4(cc, uFill * uAlpha * fe), col);
  // glass sheen and bevel
  float di = min(min(p.x, 1.0 - p.x) * uRect.z, min(p.y, 1.0 - p.y) * uRect.w);
  float sheen = smoothstep(0.42, 0.0, abs(p.x + p.y * 0.8 - 0.25)) * 0.35 + smoothstep(0.06, 0.0, abs(p.x + p.y * 0.8 - 1.18)) * 0.28;
  col = over(vec4(1.0, 1.0, 1.0, sheen * glass), col);
  float bevel = smoothstep(3.2, 1.6, di);
  col = over(vec4(0.47, 0.67, 0.71, 0.92 * bevel * glass), col);
  float hi = exp(-pow((di - 4.6) * 1.1, 2.0));
  col = over(vec4(1.0, 1.0, 1.0, 0.85 * hi * glass), col);
  if (col.a < 0.003) discard;
  gl_FragColor = col;
}`,cp=`
uniform vec4 uRect; uniform float uA; varying vec2 vPx;
${dr}
void main() {
  if (inCopy(vPx)) discard;
  float x = (vPx.x - uRect.x) / uRect.z;
  float w = 0.6 / uRect.z;
  float a = max(smoothstep(w * 2.0, 0.0, abs(x - 0.2)), smoothstep(w * 2.0, 0.0, abs(x - 0.8)));
  float fade = smoothstep(0.0, 0.25, (vPx.y - uRect.y) / uRect.w);
  if (a * uA < 0.01) discard;
  gl_FragColor = vec4(0.07, 0.24, 0.31, 0.3 * a * uA * fade);
}`,up=`
attribute float aT; attribute float aS; varying float vT; varying float vS; varying vec2 vPx;
void main() { vT = aT; vS = aS; vPx = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`,fp=`
uniform float uProg; uniform float uA; uniform float uLen; uniform float uHalf; uniform vec4 uPulse; uniform float uTime; uniform float uSeed;
varying float vT; varying float vS; varying vec2 vPx;
${dr}
void main() {
  if (vT > uProg || inCopy(vPx)) discard;
  float x = abs(vS) * uHalf;
  float core = exp(-x * x / 1.2), mid = exp(-x * x / 9.0), glow = exp(-x * x / 60.0);
  float along = vT * uLen, tip = uProg * uLen;
  float tipG = uProg < 0.999 ? exp(-pow((along - tip) / 9.0, 2.0)) : 0.0;
  float idle = exp(-pow((fract(uTime * 0.05 + uSeed) - vT) * uLen / 16.0, 2.0)) * step(0.999, uProg);
  float pl = 0.0;
  for (int i = 0; i < 4; i++) { float pp = uPulse[i]; if (pp >= 0.0) pl += exp(-pow((pp - vT) * uLen / 14.0, 2.0)); }
  float hot = clamp(tipG + idle * 0.7 + pl, 0.0, 1.5);
  vec4 c = vec4(1.0, 0.75, 0.42, glow * (0.16 + hot * 0.3));
  vec3 mc = vec3(1.0, 0.70, 0.33); float ma = mid * (0.42 + hot * 0.4);
  c = vec4(mix(c.rgb, mc, ma / max(1e-3, ma + c.a * (1.0 - ma))), ma + c.a * (1.0 - ma));
  float ca = core * (0.9 + hot);
  c = vec4(mix(c.rgb, vec3(1.0, 0.97, 0.88), clamp(ca, 0.0, 1.0)), clamp(ca + c.a * (1.0 - ca), 0.0, 1.0));
  c.a *= uA;
  if (c.a < 0.004) discard;
  gl_FragColor = c;
}`,hp=`
attribute vec2 aPos; attribute vec2 aVel; attribute vec3 aT; attribute float aSize;
uniform float uTime; uniform float uEnv; uniform float uDpr; uniform vec2 uSize;
varying float vA; varying vec2 vPx; varying float vWarm; varying float vSz;
void main() {
  float kind = aT.z, a = 0.0; vec2 p;
  if (kind < 0.5) { float age = uTime - aT.x; float k = clamp(age / aT.y, 0.0, 1.0);
    p = aPos + aVel * (1.0 - pow(1.0 - k, 2.0)) * aT.y; a = step(0.0, age) * (1.0 - k) * 0.9; }
  else { float y = mod(aPos.y - uTime * aVel.y, uSize.y + 40.0) - 20.0; p = vec2(aPos.x + sin(uTime * 0.3 + aPos.y) * 12.0, y); a = uEnv * aVel.x; }
  vA = a; vPx = p; vWarm = kind; vSz = aSize;
  gl_PointSize = aSize * uDpr; gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 0.0, 1.0);
}`,dp=`
varying float vA; varying vec2 vPx; varying float vWarm; varying float vSz;
${dr}
void main() {
  if (vA < 0.01 || inCopy(vPx + (gl_PointCoord - 0.5) * vSz)) discard;
  float r = length(gl_PointCoord - 0.5) * 2.0; float a = smoothstep(1.0, 0.0, r);
  vec3 c = vWarm > 0.5 ? vec3(1.0, 0.8, 0.5) : (fract(vPx.x * 0.37) > 0.6 ? vec3(1.0, 0.84, 0.56) : vec3(0.66, 0.84, 0.86));
  gl_FragColor = vec4(c, a * vA);
}`;function pp(i){let e=[],t=document.createTreeWalker(i,NodeFilter.SHOW_TEXT);for(let n=t.nextNode();n;n=t.nextNode()){if(!n.textContent.trim())continue;let r=n.parentElement;if(!r||r.closest("script,style,noscript,template,.epx-pt"))continue;let o=null;for(let l=r;l&&l!==i.parentElement;l=l.parentElement)if(getComputedStyle(l).overflow!=="visible"){o=l;break}let s=document.createRange();s.selectNodeContents(n);let a=o&&o!==i?o.getBoundingClientRect():null;a&&e.push(a);for(let l of s.getClientRects()){if(l.width<1||l.height<1)continue;if(!a){e.push(l);continue}let c=Math.max(l.left,a.left),u=Math.min(l.right,a.right),h=Math.max(l.top,a.top),p=Math.min(l.bottom,a.bottom);u-c>1&&p-h>1&&e.push({left:c,right:u,top:h,bottom:p,width:u-c,height:p-h})}}return e}function mp(i){let e=i.map(r=>({...r})),t=(r,o)=>({x0:Math.min(r.x0,o.x0),y0:Math.min(r.y0,o.y0),x1:Math.max(r.x1,o.x1),y1:Math.max(r.y1,o.y1)}),n=(r,o,s)=>r.x0<o.x1+s&&o.x0<r.x1+s&&r.y0<o.y1+2&&o.y0<r.y1+2&&Math.min(r.y1,o.y1)-Math.max(r.y0,o.y0)>-2;for(let r=!0;r;){r=!1;e:for(let o=0;o<e.length;o++)for(let s=o+1;s<e.length;s++)if(n(e[o],e[s],14)){e[o]=t(e[o],e[s]),e.splice(s,1),r=!0;break e}}for(;e.length>32;){let r=0,o=1,s=1e18;for(let a=0;a<e.length;a++)for(let l=a+1;l<e.length;l++){let c=t(e[a],e[l]),u=(c.x1-c.x0)*(c.y1-c.y0)-(e[a].x1-e[a].x0)*(e[a].y1-e[a].y0)-(e[l].x1-e[l].x0)*(e[l].y1-e[l].y0);u<s&&(s=u,r=a,o=l)}e[r]=t(e[r],e[o]),e.splice(o,1)}return e}function Kn(i,e,t){i.classList.add("epx-pt-measuring");let n=i.getBoundingClientRect(),r=[],o=s=>{if(!(s.width>1&&s.height>1))return;let a=Math.max(0,s.left-n.left),l=Math.max(0,s.top-n.top),c=Math.min(n.width,s.right-n.left),u=Math.min(n.height,s.bottom-n.top);c-a>1&&u-l>1&&r.push({x0:a,y0:l,x1:c,y1:u})};for(let s of e)for(let a of i.querySelectorAll(s)){if(/^(H\d|P|SPAN|DIV)$/.test(a.tagName)&&a.textContent.trim()&&!a.querySelector("a,svg,img"))for(let l of pp(a))o(l);else o(a.getBoundingClientRect());a.querySelectorAll("u,svg,img,a").forEach(l=>o(l.getBoundingClientRect()))}for(let s of t)s&&o(s.getBoundingClientRect());return i.classList.remove("epx-pt-measuring"),{W:n.width,H:n.height,rects:mp(r)}}function gp(i,e,t,n){let r=i<600,o=r?10:Math.max(20,i*.014),s=t.map(F=>({x0:F.x0-o,y0:F.y0-o,x1:F.x1+o,y1:F.y1+o})),a=r?6:14,l=4,c=Math.ceil(i/l),u=Math.ceil(e/l),h=new Uint8Array(c*u),p=(F,S)=>{for(let T=Math.max(0,Math.floor((F.y0-S)/l));T<Math.min(u,Math.ceil((F.y1+S)/l));T++)for(let O=Math.max(0,Math.floor((F.x0-S)/l));O<Math.min(c,Math.ceil((F.x1+S)/l));O++)h[T*c+O]=1},m=()=>{let F=new Uint32Array((c+1)*(u+1));for(let S=0;S<u;S++){let T=0;for(let O=0;O<c;O++)T+=h[S*c+O],F[(S+1)*(c+1)+O+1]=F[S*(c+1)+O+1]+T}return F},g=(F,S,T,O,K)=>{if(S<a||T<a||O>i-a||K>e-a)return!1;let W=Math.floor(S/l),P=Math.floor(T/l),G=Math.ceil(O/l),X=Math.ceil(K/l);return F[X*(c+1)+G]-F[P*(c+1)+G]-F[X*(c+1)+W]+F[P*(c+1)+W]===0},M=F=>F>=78?Math.round(Zi(F*.09,11.5,15))+9:0,d=(F,S)=>{h.fill(0);for(let X of s)p(X,0);let T=Math.round(F*1.28),O=Math.round(F*.42),K=F*2+O,W=T+M(F),P=Math.max(10,F*.22),G=[];for(let X=0;X<S;X++){let J=m(),Y=null,q=-1e9;for(let j=a;j+W<=e-a;j+=l)for(let ee=a;ee+K<=i-a;ee+=l){if(!g(J,ee,j,ee+K,j+W))continue;let _e=ee+K/2,k=j+W/2,Z=G.length?1e9:Math.hypot(_e-i/2,(k-e/2)*1.6);for(let se of G)Z=Math.min(Z,Math.hypot(_e-se.cx,(k-se.cy)*1.3));Z>q&&(q=Z,Y={x:ee,y:j,cx:_e,cy:k})}if(!Y)return null;G.push({...Y,w:K,h:W,fw:F,fh:T,gap:O,lab:M(F)}),p({x0:Y.x,y0:Y.y,x1:Y.x+K,y1:Y.y+W},P)}return G},f=Math.min(220,Math.max(60,e*.2)),b=r?46:64,x=null;for(let F=wo.length;F>=1&&!x;F--){if(!d(b,F))continue;let S=b,T=f;for(;T-S>2;){let O=(S+T)/2;d(Math.floor(O),F)?S=O:T=O}x=d(Math.floor(S),F)}if(!x)return null;x.sort((F,S)=>F.cy-S.cy||F.cx-S.cx);let A=[],D=[];h.fill(0);for(let F of s)p(F,0);let L=[];x.forEach((F,S)=>{let T=wo[S],O=F.y,K={x:F.x,y:O,w:F.fw,h:F.fh},W={x:F.x+F.fw+F.gap,y:O,w:F.fw,h:F.fh};A.push({pair:S,side:0,person:Ao[T.a],rect:K,lab:F.lab},{pair:S,side:1,person:Ao[T.b],rect:W,lab:F.lab}),D.push({pair:S,couple:F})});let R=r?0:Math.round(Zi(x[0].fw*.1,12,15))*2+10;return{W:i,H:e,obst:s,frames:A,groups:D,capH:R,phone:r,m:a,pad:o,block:p,integral:m,freeIn:g,grid:h}}function _p(i,e){let{grid:t,block:n,integral:r,freeIn:o,obst:s,groups:a,capH:l}=i;t.fill(0);for(let h of s)n(h,0);let c=[],u=a.map((h,p)=>p);for(let h of u){let p=a[h],m=p.couple,g=e[h],M=r(),d=m.w*m.fh*1.25,f=null;for(let b=1;b>=.35&&!f;b-=.05){let x=Math.sqrt(d*g)*b,A=Math.sqrt(d/g)*b;for(let D=0;D<=m.h&&!f;D+=6)for(let L of[1,-1]){if(f)break;for(let R=0;R<=m.w*.6&&!f;R+=6)for(let F of[1,-1]){let S=m.cx-x/2+R*F,T=m.y+(m.fh-A)/2+D*L;if(o(M,S,T,S+x,T+A+l)){f={x:S,y:T,w:x,h:A};break}}}}f||(f={x:m.x,y:m.y,w:m.w,h:m.fh}),c[h]=f,n({x0:f.x,y0:f.y,x1:f.x+f.w,y1:f.y+f.h+l},10)}return c}function bo(i,e,t,n,r,o){let s=(i[0]+e[0])/2,a=(i[1]+e[1])/2,l=e[0]-i[0],c=e[1]-i[1],u=Math.hypot(l,c)||1,h=-c/u,p=l/u,m=[.12,-.12,.25,-.25,.4,-.4,.6,-.6,.85,-.85,1.15,-1.15,1.5,-1.5];for(let g of m){let M=[s+h*g*u,a+p*g*u+Math.abs(g)*u*.15],d=!0;for(let f=1;f<30&&d;f++){let b=f/30,x=(1-b)*(1-b)*i[0]+2*(1-b)*b*M[0]+b*b*e[0],A=(1-b)*(1-b)*i[1]+2*(1-b)*b*M[1]+b*b*e[1];(x<4||A<4||x>o-4||A>r-4)&&(d=!1);for(let D of t)x>D.x0-6&&x<D.x1+6&&A>D.y0-6&&A<D.y1+6&&(d=!1);for(let D of n)x>D.x+3&&x<D.x+D.w-3&&A>D.y+3&&A<D.y+D.h-3&&(d=!1);for(let D of bo.soft||[])b>.08&&b<.92&&x>D.x&&x<D.x+D.w&&A>D.y&&A<D.y+D.h&&(d=!1)}if(d)return[i,M,e]}return null}var th=(i,e)=>{let t=i.x+i.w/2,n=i.y+i.h/2,r=e[0]-t,o=e[1]-n,s=l=>[l>0?i.x+i.w:i.x,Zi(n+o*.15,i.y+i.h*.25,i.y+i.h*.75)],a=[Zi(t+r*.3,i.x+i.w*.2,i.x+i.w*.8),i.y];return o<0&&-o>Math.abs(r)*1.2?[a,s(r),s(-r)]:[s(r),a,s(-r)]};function ih(i,e,t,n,r,o,s){let a=[i.x+i.w/2,i.y+i.h/2],l=[e.x+e.w/2,e.y+e.h/2];bo.soft=r;try{for(let c of th(i,l))for(let u of th(e,a)){let h=bo(c,u,t,n,o,s);if(h)return h}}finally{bo.soft=null}return null}function nh(i){let e=i.length,t=i.map(o=>[o.x+o.w/2,o.y+o.h/2]),n=[0],r=[];for(;n.length<e;){let o=null,s=1e12;for(let a of n)for(let l=0;l<e;l++)if(!n.includes(l)){let c=Math.hypot(t[a][0]-t[l][0],t[a][1]-t[l][1]);c<s&&(s=c,o=[a,l])}r.push(o),n.push(o[1])}return r}function xp(){let i=new Ut;return i.setAttribute("position",new dt(new Float32Array([0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0]),3)),i}function vp(i,e){let t=matchMedia("(prefers-reduced-motion: reduce)").matches,n=e.base||new URL("./img/",import.meta.url).href,r=document.createElement("div");r.className="epx-pt",r.setAttribute("aria-hidden","true");let o=document.createElement("div");o.className="epx-pt-labels";let s=new _o({antialias:!0,alpha:!1,powerPreference:"high-performance"});s.outputColorSpace=Ot,s.setClearColor(16055290,1),r.appendChild(s.domElement),r.appendChild(o),i.prepend(r);let a=document.createElement("details");a.className="epx-pt-credits",a.innerHTML="<summary>Image credits</summary><div><p>Public domain images via Wikimedia Commons.</p><ul>"+Object.entries(op).map(([,[H,$]])=>`<li><a href="https://commons.wikimedia.org/wiki/File:${encodeURIComponent($).replace(/%2C/g,",")}" target="_blank" rel="noopener">${H}</a></li>`).join("")+"</ul></div>",i.appendChild(a);let l=document.createElement("p");l.className="epx-pt-story";let c=e.story||{},u=H=>String(H).replace(/[&<>]/g,$=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[$]),h=(c.beats||rp.beats).slice(0,3);l.innerHTML=h.map((H,$)=>`<span class="b${$+1}">${u(H)}</span>`).join(""),i.appendChild(l);let p=[...l.children],m=!1;try{m=sessionStorage.getItem("epx-pt-intro")==="1"}catch{}let g=t||m||e.intro===!1?-1e9:null;i.classList.add("epx-pt-live");let M=()=>{g===null&&Ke&&(g=Q,Ie||le())},d=["pointerdown","keydown","wheel","touchstart"];d.forEach(H=>addEventListener(H,M,{passive:!0}));let f=()=>{scrollY>40&&M()};addEventListener("scroll",f,{passive:!0});let b=H=>{if(!H.length)return;let $=1e9,ae=1e9,de=-1e9,ye=-1e9;for(let ue of H)$=Math.min($,ue.x0),ae=Math.min(ae,ue.y0),de=Math.max(de,ue.x1),ye=Math.max(ye,ue.y1);let Xe=i.getBoundingClientRect().width,De=Math.min(Xe-32,Math.max(de-$,Math.min(Xe-32,320)),900);l.style.width=De+"px",l.style.left=($+de)/2-De/2+"px",l.style.top=(ae+ye)/2-l.offsetHeight/2+"px"},x=new xo,A=new Vn(0,1,0,1,-10,10),D=xp(),L=Array.from({length:32},()=>new tt(-9,-9,-9,-9)),R={uRects:{value:L},uNR:{value:0}},F={uRect:{value:new tt},uMargin:{value:0},uSize:{value:new Ve},uEnv:{value:0},uTime:{value:0},...R},S=new At(D,new bt({uniforms:F,vertexShader:Xa,fragmentShader:sp,depthTest:!1,depthWrite:!1,side:Lt}));S.renderOrder=0,S.frustumCulled=!1,x.add(S);let T=new To;T.setCrossOrigin("anonymous");let O={},K=H=>O[H]||(O[H]=new Promise($=>T.load(n+H+".webp",ae=>{ae.flipY=!1,ae.minFilter=di,ae.magFilter=Et,ae.generateMipmaps=!0,ae.anisotropy=4,ae.needsUpdate=!0,$(ae)},void 0,()=>$(null)))),W=null,P=[],G=[],X=[],J=[],Y=[],q=[],j=null,ee=[],_e=[],k=!1,Z=0,se=0,Q=0,Se=0,ze=0,Ie=!1,Le=!0,Ke=!1,B=18,vt=[],Re=!1,He=0,Me=new Map,ut=()=>{for(let H of[...G,...X,...J,...Y,...q])x.remove(H.mesh),H.mesh.material.dispose(),H.own&&H.mesh.geometry.dispose();j&&(x.remove(j),j.geometry.dispose(),j.material.dispose(),j=null),G=[],X=[],J=[],Y=[],q=[],o.textContent="",ee=[],_e=[]},qe=(H,$)=>{let de=[];for(let Ce=0;Ce<=72;Ce++){let lt=Ce/72;de.push([(1-lt)*(1-lt)*H[0][0]+2*(1-lt)*lt*H[1][0]+lt*lt*H[2][0],(1-lt)*(1-lt)*H[0][1]+2*(1-lt)*lt*H[1][1]+lt*lt*H[2][1]])}let ye=[0];for(let Ce=1;Ce<=72;Ce++)ye.push(ye[Ce-1]+Math.hypot(de[Ce][0]-de[Ce-1][0],de[Ce][1]-de[Ce-1][1]));let Xe=ye[72],De=12,ue=new Float32Array(73*2*3),be=new Float32Array(73*2),Ue=new Float32Array(73*2),Ne=[];for(let Ce=0;Ce<=72;Ce++){let lt=de[Math.max(0,Ce-1)],ot=de[Math.min(72,Ce+1)],_t=ot[0]-lt[0],Nt=ot[1]-lt[1],v=Math.hypot(_t,Nt)||1,y=-Nt/v,I=_t/v;for(let w=0;w<2;w++){let U=w?1:-1,re=Ce*2+w;ue[re*3]=de[Ce][0]+y*De*U,ue[re*3+1]=de[Ce][1]+I*De*U,be[re]=ye[Ce]/Xe,Ue[re]=U}Ce<72&&Ne.push(Ce*2,Ce*2+1,Ce*2+2,Ce*2+1,Ce*2+3,Ce*2+2)}let nt=new Ut;nt.setAttribute("position",new dt(ue,3)),nt.setAttribute("aT",new dt(be,1)),nt.setAttribute("aS",new dt(Ue,1)),nt.setIndex(Ne);let rt={uProg:{value:0},uA:{value:1},uLen:{value:Xe},uHalf:{value:De},uPulse:{value:new tt(-1,-1,-1,-1)},uTime:{value:0},uSeed:{value:$},...R},$e=new At(nt,new bt({uniforms:rt,vertexShader:up,fragmentShader:fp,transparent:!0,depthTest:!1,depthWrite:!1,side:Lt}));return $e.frustumCulled=!1,$e.renderOrder=1,x.add($e),{mesh:$e,u:rt,own:!0,len:Xe}},E=H=>{let $={uImg:{value:null},uScene:{value:null},uRect:{value:new tt},uMargin:{value:44},uCrop:{value:new tt(0,0,1,1)},uSCrop:{value:new tt(0,0,1,1)},uImgPx:{value:new Ve(1,1)},uFace:{value:new Ve(.5,.4)},uHead:{value:new Ve(.2,.2)},uEyes:{value:new tt},uHw:{value:.02},uHasEyes:{value:0},uTurn:{value:0},uBlink:{value:0},uBreath:{value:0},uFill:{value:0},uSceneMix:{value:0},uGlass:{value:0},uDis:{value:0},uGlow:{value:0},uAlpha:{value:1},uZoom:{value:1},uFeather:{value:0},uLightX:{value:-.4},uShadow:{value:1},uGlassA:{value:1},...R},ae=new At(D,new bt({uniforms:$,vertexShader:Xa,fragmentShader:lp,transparent:!0,depthTest:!1,depthWrite:!1,side:Lt}));return ae.frustumCulled=!1,ae.renderOrder=H,x.add(ae),{mesh:ae,u:$}},_=(H,$,ae,de,ye)=>{let Xe=H.image.width,De=H.image.height,ue=Xe*de,be=ue/ye;be>De&&(be=De,ue=be*ye);let Ue=Zi(Xe*$-ue/2,0,Xe-ue),Ne=Zi(De*ae-be/2,0,De-be);return new tt(Ue/Xe,Ne/De,ue/Xe,be/De)},z=(H,$)=>{let ae=document.createElement("div");return ae.className=H,ae.innerHTML=$,o.appendChild(ae),ae},ne=(H,$,ae,de)=>{let ye=ne.c||(ne.c=document.createElement("canvas").getContext("2d"));return ye.font=`${de?"italic ":""}500 ${$}px "Cormorant Garamond", Georgia, serif`,ye.measureText(H).width<=ae};async function ie(){b(Kn(i,e.copy,[]).rects);let H=Kn(i,e.copy,[a,l]);Z=H.W,se=H.H,s.setPixelRatio(Math.min(devicePixelRatio||1,Z<600?1.75:2)),s.setSize(Z,se,!1),A.left=0,A.right=Z,A.top=0,A.bottom=se,A.updateProjectionMatrix(),F.uRect.value.set(0,0,Z,se),F.uSize.value.set(Z,se);let $=gp(Z,se,H.rects);if(ut(),L.forEach(y=>y.set(-9,-9,-9,-9)),H.rects.slice(0,32).forEach((y,I)=>L[I].set(y.x0-3,y.y0-3,y.x1+3,y.y1+3)),R.uNR.value=Math.min(32,H.rects.length),W=$,!W){Ke=!0,le();return}let ae=wo.slice(0,W.groups.length),de=new Set;ae.forEach(y=>{de.add(Ao[y.a].img),de.add(Ao[y.b].img),de.add(y.scene)});let ye={};if(await Promise.all([...de].map(async y=>{ye[y]=await K(y)})),!W||$!==W)return;P=_p(W,ae.map(y=>ye[y.scene]?ye[y.scene].image.width/ye[y.scene].image.height:1)),W.frames.forEach((y,I)=>{let w=y.person,U=ye[w.img],re=ye[wo[y.pair].scene],oe=E(10+I),ge=oe.u;ge.uMargin.value=Zi(y.rect.w*.3,18,44),ge.uImg.value=U,ge.uScene.value=re,ge.uImgPx.value.set(U.image.width,U.image.height),ge.uCrop.value=_(U,w.crop[0],w.crop[1],w.crop[2]*Math.min(1,y.rect.w/y.rect.h/(U.image.width/U.image.height)*1+0),y.rect.w/y.rect.h),ge.uFace.value.set(w.face[0],w.face[1]),ge.uHead.value.set(w.head[0],w.head[1]),w.eyes&&(ge.uEyes.value.set(w.eyes[0][0],w.eyes[0][1],w.eyes[1][0],w.eyes[1][1]),ge.uHw.value=w.hw,ge.uHasEyes.value=1);let he=P[y.pair],Te={x:he.x+(y.side?he.w/2:0),y:he.y,w:he.w/2,h:he.h},Fe=y.rect.w/y.rect.h,Oe=Te.w/Te.h,ct=.5*Math.min(1,Fe/Oe),Gt=Math.min(1,Oe/Fe);y.sceneCrop0=new tt(y.side?.5+(.5-ct)/2:(.5-ct)/2,(1-Gt)/2,ct,Gt),y.sceneCrop1=new tt(y.side?.5:0,0,.5,1),y.half=Te,y.pm=oe,G.push(oe);let xt=y.rect.x+y.rect.w*.2,ii=y.rect.x+y.rect.w*.8;if(!W.obst.some(we=>we.y1<y.rect.y&&we.x1>xt-2&&we.x0<ii+2)&&!W.frames.some(we=>we!==y&&we.rect.y+we.rect.h<y.rect.y&&we.rect.x<ii&&we.rect.x+we.rect.w>xt)){let we={uRect:{value:new tt(y.rect.x,0,y.rect.w,y.rect.y)},uMargin:{value:0},uA:{value:0},...R},Mi=new At(D,new bt({uniforms:we,vertexShader:Xa,fragmentShader:cp,transparent:!0,depthTest:!1,depthWrite:!1,side:Lt}));Mi.frustumCulled=!1,Mi.renderOrder=2,x.add(Mi),J.push({mesh:Mi,u:we,f:I})}if(y.lab){let we=y.lab-9,Mi=ne(w.name,we,y.rect.w+8,!0)?w.name:w.short,ft=z("epx-pt-lab",Mi);ft.style.cssText=`left:${y.rect.x}px;top:${y.rect.y+y.rect.h+5}px;width:${y.rect.w}px;font-size:${we}px`,ee.push(ft)}else ee.push(null)}),W.groups.forEach((y,I)=>{let w=ae[I],U=P[I],re=E(30+I),oe=re.u,ge=ye[w.scene];if(oe.uImg.value=ge,oe.uScene.value=ge,oe.uSceneMix.value=1,oe.uFill.value=1,oe.uFeather.value=.1,oe.uShadow.value=0,oe.uMargin.value=0,oe.uSCrop.value.set(0,0,1,1),oe.uRect.value.set(U.x,U.y,U.w,U.h),X.push({...re,T:U}),W.capH){let he=(W.capH-10)/2,Te=Math.max(U.w,120)+30,Fe=ne(w.cap,he,Te,!0)?w.cap:w.capShort,Oe=ne(w.what,he-1,Te,!1)?w.what:"",ct=z("epx-pt-cap",`<i>${Fe}</i>${Oe?`<span>${Oe}</span>`:""}`);ct.style.cssText=`left:${U.x+U.w/2-Te/2}px;top:${U.y+U.h+4}px;width:${Te}px;font-size:${he}px`,_e.push(ct)}});let Xe=W.frames.map(y=>y.rect),De=W.groups.map((y,I)=>{let w=W.frames[I*2].rect,U=W.frames[I*2+1].rect,re=[w.x+w.w,w.y+w.h*.42],oe=[U.x,U.y+U.h*.42],ge=[(re[0]+oe[0])/2,re[1]+w.h*.12];return{curve:[re,ge,oe],kind:"pair",g:I}}),ue=[];for(let[y,I]of nh(W.groups.map(w=>({x:w.couple.x,y:w.couple.y,w:w.couple.w,h:w.couple.fh})))){let w=[W.groups[I].couple.cx,W.groups[I].couple.cy],U=[W.groups[y].couple.cx,W.groups[y].couple.cy],re=[Xe[y*2],Xe[y*2+1]].sort((he,Te)=>Math.hypot(he.x+he.w/2-w[0],he.y+he.h/2-w[1])-Math.hypot(Te.x+Te.w/2-w[0],Te.y+Te.h/2-w[1]))[0],oe=[Xe[I*2],Xe[I*2+1]].sort((he,Te)=>Math.hypot(he.x+he.w/2-U[0],he.y+he.h/2-U[1])-Math.hypot(Te.x+Te.w/2-U[0],Te.y+Te.h/2-U[1]))[0],ge=ih(re,oe,W.obst,Xe.filter(he=>he!==re&&he!==oe),[re,oe].map(he=>({x:he.x,y:he.y,w:he.w,h:he.h+W.frames[0].lab})),se,Z);ge&&ue.push({curve:ge,kind:"cross",ends:[y*2+Xe.indexOf(re)%2*0+(re===Xe[y*2+1]?1:0),I*2+(oe===Xe[I*2+1]?1:0)]})}[...De,...ue].forEach((y,I)=>{let w=qe(y.curve,Zt(I+3));Object.assign(w,y,{idx:I}),Y.push(w)});let be=P.map(y=>({x:y.x,y:y.y,w:y.w,h:y.h+W.capH}));for(let[y,I]of nh(be)){let w=be[y],U=be[I],re=ih(P[y],P[I],W.obst,be.filter((oe,ge)=>ge!==y&&ge!==I),[w,U],se,Z);if(re){let oe=qe(re,Zt(y*7+I));oe.kind="final",q.push(oe)}}let Ue=W.frames.length*26,Ne=W.phone?24:60,nt=Ue+Ne,rt=new Float32Array(nt*2),$e=new Float32Array(nt*2),Ce=new Float32Array(nt*3),lt=new Float32Array(nt),ot=0;W.frames.forEach((y,I)=>{let w=y.rect,U=12.9+I*.05;for(let re=0;re<26;re++,ot++){let oe=Zt(ot*3.1)*(2*(w.w+w.h)),ge,he;oe<w.w?(ge=w.x+oe,he=w.y):oe<w.w+w.h?(ge=w.x+w.w,he=w.y+oe-w.w):oe<2*w.w+w.h?(ge=w.x+oe-w.w-w.h,he=w.y+w.h):(ge=w.x,he=w.y+oe-2*w.w-w.h),rt.set([ge,he],ot*2),$e.set([(Zt(ot+9)-.5)*50,-20-Zt(ot+4)*70],ot*2),Ce.set([U+Zt(ot+2)*.6,1.2+Zt(ot+5)*1.2,0],ot*3),lt[ot]=2+Zt(ot+7)*3}});for(let y=0;y<Ne;y++,ot++)rt.set([Zt(y+50)*Z,Zt(y+80)*se],ot*2),$e.set([.25+Zt(y+20)*.45,6+Zt(y+30)*12],ot*2),Ce.set([0,0,1],ot*3),lt[ot]=2.5+Zt(y+40)*3.5;let _t=new Ut;_t.setAttribute("position",new dt(new Float32Array(nt*3),3)),_t.setAttribute("aPos",new dt(rt,2)),_t.setAttribute("aVel",new dt($e,2)),_t.setAttribute("aT",new dt(Ce,3)),_t.setAttribute("aSize",new dt(lt,1)),j=new Eo(_t,new bt({uniforms:{uTime:{value:0},uEnv:{value:0},uDpr:{value:s.getPixelRatio()},uSize:{value:new Ve(Z,se)},...R},vertexShader:hp,fragmentShader:dp,transparent:!0,depthTest:!1,depthWrite:!1})),j.frustumCulled=!1,j.renderOrder=50,x.add(j);let Nt=W.frames.length,v=W.groups.length;V.fill=y=>.9+y*(Nt>6?.4:.55),V.pairThread=y=>V.fill(Nt-1)+.7+y*.42,V.cross=y=>V.pairThread(v-1)+1.1+y*.35,V.scene=y=>V.cross(Math.max(0,ue.length-1))+1.3+y*.3,V.dis=V.scene(v-1)+1.6,V.merge=y=>V.dis+.4+y*.15,V.final=y=>V.merge(v-1)+1.8+y*.3,B=V.final(Math.max(0,q.length-1))+1.6;for(let y=0;y<Ue;y++)Ce[y*3]+=V.dis-12.9;_t.attributes.aT.needsUpdate=!0,t&&(Q=B+30),Ke=!0,le()}let V={};function Ee(H,$){let ae=$.pair,de=H,ye=It(de*.08,de*.08+1,Q),Xe=It(V.fill(de),V.fill(de)+1.1,Q),De=It(V.pairThread(ae)+.7,V.pairThread(ae)+1.5,Q),ue=$.side?-1:1,be=Math.sin(Q*.45+de*2.1)*.45+Math.sin(Q*.23+de)*.2,Ue=Oi(be,ue*(.85+.15*Math.sin(Q*.7+de)),De),Ne=Math.max(0,1-Math.abs(Q-(V.pairThread(ae)+1.2))*1.4),nt=Me.get(H);if(nt!=null){let v=Q-nt;v>0&&v<2.2&&(Ne=Math.max(Ne,Math.sin(Math.min(1,v/2.2)*Math.PI)),Ue+=ue*.3*Math.sin(Math.min(1,v/2.2)*Math.PI))}let rt=(Q*.23+Zt(de+1))%1,$e=rt<.045?Math.sin(rt/.045*Math.PI):0,Ce=Q-(V.pairThread(ae)+1.25),lt=Ce>0&&Ce<.22?Math.sin(Ce/.22*Math.PI):0,ot=It(V.scene(ae),V.scene(ae)+1.7,Q),_t=It(V.dis+de*.05,V.dis+de*.05+1.4,Q),Nt=It(V.merge(ae),V.merge(ae)+2.1,Q);return{appear:ye,fill:Xe,turn:Ue,glow:Ne,blink:Math.max($e,lt)*(1-ot),scene:ot,dis:_t,merge:Nt}}function le(){if(!Ke)return;if(F.uTime.value=Q,!W){s.render(x,A);return}let H=It(V.dis,V.dis+2.6,Q);F.uEnv.value=Re?0:H,W.frames.forEach((ue,be)=>{let Ue=Ee(be,ue),Ne=ue.pm.u,nt=ue.rect,rt=(1-Ue.appear)*24,$e=ue.half,Ce=Ue.merge,lt=Oi(nt.x,$e.x,Ce),ot=Oi(nt.y-rt,$e.y,Ce)-Math.sin(Ce*Math.PI)*14,_t=Oi(nt.w,$e.w,Ce),Nt=Oi(nt.h,$e.h,Ce);Ne.uRect.value.set(lt,ot,_t,Nt),Ne.uAlpha.value=Ue.appear*(1-It(.72,1,Ce)),Ne.uFill.value=Ue.scene>0?1:Ue.fill,Ne.uTurn.value=Ue.turn,Ne.uBlink.value=Ue.blink,Ne.uBreath.value=Math.sin(Q*1.25+be*1.7)*.007,Ne.uGlow.value=Ue.glow,Ne.uLightX.value=-.35+Ue.turn*.45,Ne.uSceneMix.value=Ue.scene,Ne.uZoom.value=1+(1-Ue.scene)*.22;let v=ue.sceneCrop0,y=ue.sceneCrop1;Ne.uSCrop.value.set(Oi(v.x,y.x,Ce),Oi(v.y,y.y,Ce),Oi(v.z,y.z,Ce),Oi(v.w,y.w,Ce)),Ne.uGlass.value=Ue.appear,Ne.uGlassA.value=1-It(.5,.9,Ce),Ne.uDis.value=Ue.dis,Ne.uShadow.value=Ue.appear*(1-Ue.dis);let I=ee[be];I&&(I.style.opacity=(Ue.fill*(1-Ue.dis)).toFixed(3))}),J.forEach(ue=>{let be=Ee(ue.f,W.frames[ue.f]);ue.u.uA.value=be.appear*(1-be.dis)}),X.forEach((ue,be)=>{let Ue=It(.55,1,It(V.merge(be),V.merge(be)+2.1,Q));ue.u.uAlpha.value=Ue,ue.u.uFill.value=1;let Ne=ue.T,nt=1+.035*(.5-.5*Math.cos((Q-V.merge(be))*.12));ue.u.uZoom.value=nt,ue.u.uRect.value.set(Ne.x,Ne.y,Ne.w,Ne.h),_e[be]&&(_e[be].style.opacity=It(V.merge(be)+1.6,V.merge(be)+2.6,Q).toFixed(3)),ue.mesh.visible=Ue>.001});let $=[[.4,4.9],[5.3,8.6]],ae=g===null?9:Math.min(9,g);p.forEach((ue,be)=>{let[Ue,Ne]=$[Math.min(be,$.length-1)],nt=g!==null&&g<Ue?0:It(Ue,Ue+.8,Q)*(1-It(Math.min(Ne,ae),Math.min(Ne,ae)+.5,Q));ue.style.opacity=nt.toFixed(3)});let de=g===-1e9?1:It(ae+.3,ae+1.2,Q);if(i.style.setProperty("--epx-copy-a",de.toFixed(3)),i.classList.toggle("epx-pt-intro",de<.05),de>=1&&!k){k=!0;try{sessionStorage.setItem("epx-pt-intro","1")}catch{}}let ye=1-It(V.dis-.2,V.dis+1,Q);Y.forEach(ue=>{let be=ue.kind==="pair"?V.pairThread(ue.g):V.cross(ue.idx-W.groups.length);ue.u.uProg.value=It(be,be+1.2,Q),ue.u.uA.value=ye,ue.u.uTime.value=Q,ue.mesh.visible=ye>.001&&ue.u.uProg.value>0}),q.forEach((ue,be)=>{let Ue=V.final(be);ue.u.uProg.value=It(Ue,Ue+1.3,Q),ue.u.uTime.value=Q,ue.mesh.visible=ue.u.uProg.value>0});let Xe=Q>V.dis?q:Y;for(let ue of[...Y,...q])ue.u.uPulse.value.set(-1,-1,-1,-1);let De=0;for(let ue=vt.length-1;ue>=0;ue--){let be=vt[ue],Ue=(Q-be.t0)/1.6;if(Ue>1){vt.splice(ue,1);continue}let Ne=be.th;Xe.includes(Ne)&&Ne.u.uPulse.value.setComponent(Math.min(3,De++%4),be.rev?1-Ue:Ue)}j&&(j.material.uniforms.uTime.value=Q,j.material.uniforms.uEnv.value=H),s.render(x,A)}function xe(){if(!W||!Ke)return;let H=Q>V.dis?q:Y.filter(ae=>ae.u.uProg.value>=1);if(!H.length)return;let $=H[Math.floor(Math.random()*H.length)];vt.push({th:$,t0:Q,rev:Math.random()<.5}),He++,$.kind==="pair"?(Me.set($.g*2,Q+.6),Me.set($.g*2+1,Q+.6)):$.ends&&$.ends.forEach(ae=>Me.set(ae,Q+.6)),Ie||le()}let Pe=H=>{ze=requestAnimationFrame(Pe);let $=Math.min(.05,(H-Se)/1e3);Se=H,Q+=$,le(),Q>B+600&&(Q=B+60)},ke=()=>{Ie||t||!Le||(Ie=!0,Se=performance.now(),ze=requestAnimationFrame(Pe))},te=()=>{Ie=!1,cancelAnimationFrame(ze)},it=new IntersectionObserver(H=>{Le=H[0].isIntersecting,Le?ke():te()});it.observe(i);let Je=()=>{document.hidden?te():ke()};document.addEventListener("visibilitychange",Je);let Be=0,Ae=0,ve=0,We=new ResizeObserver(()=>{let H=i.getBoundingClientRect();Math.abs(H.width-Ae)<2&&Math.abs(H.height-ve)<2||(Ae=H.width,ve=H.height,clearTimeout(Be),Be=setTimeout(()=>{ie().then(()=>{Q>B&&(Q=Math.max(Q,B+1))})},180))}),et=()=>{if(!Ke||!W)return;let H=Kn(i,e.copy,[]),$=de=>de.map(ye=>[ye.x0,ye.y0,ye.x1,ye.y1].map(Math.round).join()).join("|");if($(H.rects)===et.last)return;if(et.last=$(H.rects),!et.first){et.first=!0;return}if(Q<1.2){ie();return}b(H.rects);let ae=Kn(i,e.copy,[a,l]);L.forEach(de=>de.set(-9,-9,-9,-9)),ae.rects.slice(0,32).forEach((de,ye)=>L[ye].set(de.x0-3,de.y0-3,de.x1+3,de.y1+3)),R.uNR.value=Math.min(32,ae.rects.length),Ie||le()};document.fonts&&document.fonts.addEventListener("loadingdone",()=>setTimeout(et,50)),[400,1200,3e3].forEach(H=>setTimeout(et,H));let st=null,je=0,ce=0,C=()=>{let H=i.querySelector(".epx-reel");return H?(st=new MutationObserver(()=>{if(H.style.transition==="none")return;let $=performance.now();$-ce<900||(ce=$,xe())}),st.observe(H,{attributes:!0,attributeFilter:["style"]}),!0):!1};if(!C()){let H=0,$=setInterval(()=>{(C()||++H>20)&&(clearInterval($),!st&&!t&&(je=setInterval(xe,2200)))},250)}let pe={get t(){return Q},get end(){return B},get pulses(){return He},setTime(H){Q=H,le()},pause(){te()},play(){ke()},tick(){xe()},rects(){return{mask:L.slice(0,R.uNR.value).map(H=>[H.x,H.y,H.z,H.w].map(Math.round)),now:Kn(i,e.copy,[a,l]).rects.map(H=>[H.x0,H.y0,H.x1,H.y1].map(Math.round))}},layout(){return W&&{frames:W.frames.map(H=>H.rect),targets:P,threads:Y.length,finalThreads:q.length,pairs:W.groups.length,capH:W.capH}},probe(H,$){let ae={},de=s.getContext(),ye=s.getPixelRatio(),Xe=s.domElement.height,De={},ue=Q,be=Kn(i,e.copy,[a,l]);for(let Ue of H){if(Q=Ue,Re=!0,$&&$.hide){let rt={dust:j?[j]:[],plates:G.map($e=>$e.mesh),merged:X.map($e=>$e.mesh),threads:Y.map($e=>$e.mesh),final:q.map($e=>$e.mesh),wires:J.map($e=>$e.mesh),bg:[S]}[$.hide]||[];le(),ae.saved=rt.map($e=>[$e,$e.visible]),rt.forEach($e=>{$e.visible=!1}),s.render(x,A)}else le();Re=!1;let Ne=0,nt=[];for(let rt of be.rects){let $e=Ne,Ce=Math.floor(rt.x0*ye),lt=Math.floor(rt.y0*ye),ot=Math.ceil((rt.x1-rt.x0)*ye),_t=Math.ceil((rt.y1-rt.y0)*ye);if(ot<1||_t<1)continue;let Nt=new Uint8Array(ot*_t*4);de.readPixels(Ce,Xe-lt-_t,ot,_t,de.RGBA,de.UNSIGNED_BYTE,Nt);for(let v=0;v<Nt.length;v+=4)(Math.abs(Nt[v]-244)>2||Math.abs(Nt[v+1]-251)>2||Math.abs(Nt[v+2]-250)>2)&&Ne++;Ne>$e&&nt.push([Math.round(rt.x0),Math.round(rt.y0),Math.round(rt.x1),Math.round(rt.y1),Ne-$e])}ae.saved&&(ae.saved.forEach(([rt,$e])=>{rt.visible=$e}),ae.saved=null),De[Ue]=$?{bad:Ne,per:nt,n:be.rects.length}:Ne}return Q=ue,le(),De},destroy(){st&&st.disconnect(),clearInterval(je),te(),it.disconnect(),We.disconnect(),document.removeEventListener("visibilitychange",Je),ut(),s.dispose(),r.remove(),a.remove(),l.remove(),d.forEach(H=>removeEventListener(H,M)),removeEventListener("scroll",f),i.classList.remove("epx-pt-live","epx-pt-intro"),i.style.removeProperty("--epx-copy-a")}},me=i.getBoundingClientRect();return Ae=me.width,ve=me.height,We.observe(i),pe.ready=ie().then(()=>(ke(),pe)),pe}function qa(){let i=document.querySelector(".elementor-location-header")||document.querySelector("header");i&&document.documentElement.style.setProperty("--epx-head",Math.round(i.getBoundingClientRect().height)+"px")}function rh(){let i=window.epxPortraitsConfig;if(!i||document.body.classList.contains("elementor-editor-active"))return;qa(),addEventListener("resize",qa,{passive:!0});let e=document.querySelector(i.host);if(!e)return;let t=()=>{if(qa(),!e.querySelector(".epx-pt"))try{let r=document.createElement("canvas");if(!(r.getContext("webgl2")||r.getContext("webgl")))throw new Error("no webgl");window.epxPortraits=vp(e,i)}catch(r){e.classList.add("epx-pt-fallback"),console.warn("[epx-portraits]",r)}};(document.fonts&&document.fonts.ready?Promise.race([document.fonts.ready,new Promise(r=>setTimeout(r,1500))]):Promise.resolve()).then(()=>requestAnimationFrame(t))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",rh):rh();
