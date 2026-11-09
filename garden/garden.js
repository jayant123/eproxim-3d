var ka="160";var Wa=0,Eo=1,Xa=2;var or=1,qa=2,Qt=3,Bt=0,it=1,vt=2;var Xt=0,gi=1,To=2,bo=3,Ao=4,Ya=5,_i=100,Za=101,Ka=102,wo=103,Ro=104,ja=200,Ja=201,Qa=202,$a=203,Hn=204,Vn=205,es=206,ts=207,is=208,ns=209,rs=210,os=211,as=212,ss=213,ls=214,cs=0,us=1,fs=2,Qi=3,hs=4,ds=5,ps=6,ms=7,ar=0,gs=1,_s=2,qt=0,xs=1,vs=2,Ms=3,Ss=4,ys=5,Es=6;var Co=300,$t=301,li=302,kn=303,Wn=304,wi=306,Xn=1e3,Ut=1001,qn=1002,st=1003,Lo=1004;var sr=1005;var Mt=1006,Ts=1007;var xi=1008;var Gt=1009,bs=1010,As=1011,$i=1012,lr=1013,zt=1014,Ht=1015,vi=1016,cr=1017,ur=1018,Yt=1020,ws=1021,St=1023,Rs=1024,Cs=1025,ei=1026,ci=1027,Ls=1028,fr=1029,Ps=1030,hr=1031,dr=1033,pr=33776,mr=33777,gr=33778,_r=33779,Po=35840,Do=35841,Uo=35842,Io=35843,xr=36196,No=37492,Fo=37496,Oo=37808,Bo=37809,Go=37810,zo=37811,Ho=37812,Vo=37813,ko=37814,Wo=37815,Xo=37816,qo=37817,Yo=37818,Zo=37819,Ko=37820,jo=37821,vr=36492,Jo=36494,Qo=36495,Ds=36283,$o=36284,ea=36285,ta=36286;var Mr=3e3,ti=3001,Us=3200,Is=3201,Ns=0,Fs=1,_t="",et="srgb",yt="srgb-linear",en="display-p3",Gi="display-p3-linear",tn="linear",qe="srgb",nn="rec709",rn="p3";var zi=7680;var ia=519,Os=512,Bs=513,Gs=514,Sr=515,zs=516,Hs=517,Vs=518,ks=519,na=35044;var ra="300 es",Yn=1035,Nt=2e3,Hi=2001;var Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var yr=Math.PI/180,Zn=180/Math.PI;function ui(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]).toLowerCase()}function ft(i,e,t){return Math.max(e,Math.min(t,i))}function Ws(i,e){return(i%e+e)%e}function Er(i,e,t){return(1-t)*i+t*e}function oa(i){return(i&i-1)===0&&i!==0}function Kn(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function on(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function It(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Re=class i{constructor(e,t,n,r,o,s,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c)}set(e,t,n,r,o,s,a,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=o,h[5]=l,h[6]=n,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],m=n[2],g=n[5],p=n[8],_=r[0],f=r[3],u=r[6],T=r[1],v=r[4],C=r[7],U=r[2],R=r[5],b=r[8];return o[0]=s*_+a*T+l*U,o[3]=s*f+a*v+l*R,o[6]=s*u+a*C+l*b,o[1]=c*_+h*T+d*U,o[4]=c*f+h*v+d*R,o[7]=c*u+h*C+d*b,o[2]=m*_+g*T+p*U,o[5]=m*f+g*v+p*R,o[8]=m*u+g*C+p*b,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*s*h-t*a*c-n*o*h+n*a*l+r*o*c-r*s*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*s-a*c,m=a*l-h*o,g=c*o-s*l,p=t*d+n*m+r*g;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=d*_,e[1]=(r*c-h*n)*_,e[2]=(a*n-r*s)*_,e[3]=m*_,e[4]=(h*t-r*l)*_,e[5]=(r*o-a*t)*_,e[6]=g*_,e[7]=(n*l-c*t)*_,e[8]=(s*t-n*o)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,s,a){let l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(aa.makeScale(e,t)),this}rotate(e){return this.premultiply(aa.makeRotation(-e)),this}translate(e,t){return this.premultiply(aa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},aa=new Re;var Xs=new Re().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),qs=new Re().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Tr={[yt]:{transfer:tn,primaries:nn,toReference:i=>i,fromReference:i=>i},[et]:{transfer:qe,primaries:nn,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Gi]:{transfer:tn,primaries:rn,toReference:i=>i.applyMatrix3(qs),fromReference:i=>i.applyMatrix3(Xs)},[en]:{transfer:qe,primaries:rn,toReference:i=>i.convertSRGBToLinear().applyMatrix3(qs),fromReference:i=>i.applyMatrix3(Xs).convertLinearToSRGB()}},lh=new Set([yt,Gi]),ke={enabled:!0,_workingColorSpace:yt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!lh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Tr[e].toReference,r=Tr[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Tr[i].primaries},getTransfer:function(i){return i===_t?tn:Tr[i].transfer}};function Ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function br(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ys={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},Ar={h:0,s:0,l:0};function sa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ne=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,ke.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ke.workingColorSpace){if(e=Ws(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{let o=n<=.5?n*(1+t):n+t-n*t,s=2*n-o;this.r=sa(s,o,e+1/3),this.g=sa(s,o,e),this.b=sa(s,o,e-1/3)}return ke.toWorkingColorSpace(this,r),this}setStyle(e,t=et){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o,s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=et){let n=Ys[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=br(e.r),this.g=br(e.g),this.b=br(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=et){return ke.fromWorkingColorSpace(Ct.copy(this),e),Math.round(ft(Ct.r*255,0,255))*65536+Math.round(ft(Ct.g*255,0,255))*256+Math.round(ft(Ct.b*255,0,255))}getHexString(e=et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ke.workingColorSpace){ke.fromWorkingColorSpace(Ct.copy(this),t);let n=Ct.r,r=Ct.g,o=Ct.b,s=Math.max(n,r,o),a=Math.min(n,r,o),l,c,h=(a+s)/2;if(a===s)l=0,c=0;else{let d=s-a;switch(c=h<=.5?d/(s+a):d/(2-s-a),s){case n:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-n)/d+2;break;case o:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ke.workingColorSpace){return ke.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=et){ke.fromWorkingColorSpace(Ct.copy(this),e);let t=Ct.r,n=Ct.g,r=Ct.b;return e!==et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+t,Ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ci),e.getHSL(Ar);let n=Er(Ci.h,Ar.h,t),r=Er(Ci.s,Ar.s,t),o=Er(Ci.l,Ar.l,t);return this.setHSL(n,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*r,this.g=o[1]*t+o[4]*n+o[7]*r,this.b=o[2]*t+o[5]*n+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ct=new Ne;Ne.NAMES=Ys;var hi=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,s,a){let l=n[r+0],c=n[r+1],h=n[r+2],d=n[r+3],m=o[s+0],g=o[s+1],p=o[s+2],_=o[s+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=m,e[t+1]=g,e[t+2]=p,e[t+3]=_;return}if(d!==_||l!==m||c!==g||h!==p){let f=1-a,u=l*m+c*g+h*p+d*_,T=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){let U=Math.sqrt(v),R=Math.atan2(U,u*T);f=Math.sin(f*R)/U,a=Math.sin(a*R)/U}let C=a*T;if(l=l*f+m*C,c=c*f+g*C,h=h*f+p*C,d=d*f+_*C,f===1-a){let U=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=U,c*=U,h*=U,d*=U}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,o,s){let a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],d=o[s],m=o[s+1],g=o[s+2],p=o[s+3];return e[t]=a*p+h*d+l*g-c*m,e[t+1]=l*p+h*m+c*d-a*g,e[t+2]=c*p+h*g+a*m-l*d,e[t+3]=h*p-a*d-l*m-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),d=a(o/2),m=l(n/2),g=l(r/2),p=l(o/2);switch(s){case"XYZ":this._x=m*h*d+c*g*p,this._y=c*g*d-m*h*p,this._z=c*h*p+m*g*d,this._w=c*h*d-m*g*p;break;case"YXZ":this._x=m*h*d+c*g*p,this._y=c*g*d-m*h*p,this._z=c*h*p-m*g*d,this._w=c*h*d+m*g*p;break;case"ZXY":this._x=m*h*d-c*g*p,this._y=c*g*d+m*h*p,this._z=c*h*p+m*g*d,this._w=c*h*d-m*g*p;break;case"ZYX":this._x=m*h*d-c*g*p,this._y=c*g*d+m*h*p,this._z=c*h*p-m*g*d,this._w=c*h*d+m*g*p;break;case"YZX":this._x=m*h*d+c*g*p,this._y=c*g*d+m*h*p,this._z=c*h*p-m*g*d,this._w=c*h*d-m*g*p;break;case"XZY":this._x=m*h*d-c*g*p,this._y=c*g*d-m*h*p,this._z=c*h*p+m*g*d,this._w=c*h*d+m*g*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],o=t[8],s=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],m=n+a+d;if(m>0){let g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(h-l)*g,this._y=(o-c)*g,this._z=(s-r)*g}else if(n>a&&n>d){let g=2*Math.sqrt(1+n-a-d);this._w=(h-l)/g,this._x=.25*g,this._y=(r+s)/g,this._z=(o+c)/g}else if(a>d){let g=2*Math.sqrt(1+a-n-d);this._w=(o-c)/g,this._x=(r+s)/g,this._y=.25*g,this._z=(l+h)/g}else{let g=2*Math.sqrt(1+d-n-a);this._w=(s-r)/g,this._x=(o+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,o=e._z,s=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+s*a+r*c-o*l,this._y=r*h+s*l+o*a-n*c,this._z=o*h+s*c+n*l-r*a,this._w=s*h-n*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,o=this._z,s=this._w,a=s*e._w+n*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=n,this._y=r,this._z=o,this;let l=1-a*a;if(l<=Number.EPSILON){let g=1-t;return this._w=g*s+t*this._w,this._x=g*n+t*this._x,this._y=g*r+t*this._y,this._z=g*o+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,m=Math.sin(t*h)/c;return this._w=s*d+this._w*m,this._x=n*d+this._x*m,this._y=r*d+this._y*m,this._z=o*d+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(o),n*Math.cos(o),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};var H=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zs.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zs.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*s,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*r-a*n),h=2*(a*t-o*r),d=2*(o*n-s*t);return this.x=t+l*c+s*d-a*h,this.y=n+l*h+a*c-o*d,this.z=r+l*d+o*h-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,o=e.z,s=t.x,a=t.y,l=t.z;return this.x=r*l-o*a,this.y=o*s-n*l,this.z=n*a-r*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return la.copy(this).projectOnVector(e),this.sub(la)}reflect(e){return this.sub(la.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},la=new H,Zs=new hi;var Si=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,ii):ii.fromBufferAttribute(o,s),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wr.copy(n.boundingBox)),wr.applyMatrix4(e.matrixWorld),this.union(wr)}let r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jn),Rr.subVectors(this.max,jn),an.subVectors(e.a,jn),sn.subVectors(e.b,jn),ln.subVectors(e.c,jn),Li.subVectors(sn,an),Pi.subVectors(ln,sn),Vi.subVectors(an,ln);let t=[0,-Li.z,Li.y,0,-Pi.z,Pi.y,0,-Vi.z,Vi.y,Li.z,0,-Li.x,Pi.z,0,-Pi.x,Vi.z,0,-Vi.x,-Li.y,Li.x,0,-Pi.y,Pi.x,0,-Vi.y,Vi.x,0];return!ca(t,an,sn,ln,Rr)||(t=[1,0,0,0,1,0,0,0,1],!ca(t,an,sn,ln,Rr))?!1:(Cr.crossVectors(Li,Pi),t=[Cr.x,Cr.y,Cr.z],ca(t,an,sn,ln,Rr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Mi=[new H,new H,new H,new H,new H,new H,new H,new H],ii=new H,wr=new Si,an=new H,sn=new H,ln=new H,Li=new H,Pi=new H,Vi=new H,jn=new H,Rr=new H,Cr=new H,ki=new H;function ca(i,e,t,n,r){for(let o=0,s=i.length-3;o<=s;o+=3){ki.fromArray(i,o);let a=r.x*Math.abs(ki.x)+r.y*Math.abs(ki.y)+r.z*Math.abs(ki.z),l=e.dot(ki),c=t.dot(ki),h=n.dot(ki);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var ch=new Si,Jn=new H,ua=new H,di=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ch.setFromPoints(e).getCenter(n);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jn.subVectors(e,this.center);let t=Jn.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Jn,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ua.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jn.copy(e.center).add(ua)),this.expandByPoint(Jn.copy(e.center).sub(ua))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};var fa=new H,uh=new H,fh=new Re,ni=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=fa.subVectors(n,t).cross(uh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(fa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||fh.getNormalMatrix(e),r=this.coplanarPoint(fa).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};var Wi=new di,Lr=new H,cn=class{constructor(e=new ni,t=new ni,n=new ni,r=new ni,o=new ni,s=new ni){this.planes=[e,t,n,r,o,s]}set(e,t,n,r,o,s){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Nt){let n=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],c=r[4],h=r[5],d=r[6],m=r[7],g=r[8],p=r[9],_=r[10],f=r[11],u=r[12],T=r[13],v=r[14],C=r[15];if(n[0].setComponents(l-o,m-c,f-g,C-u).normalize(),n[1].setComponents(l+o,m+c,f+g,C+u).normalize(),n[2].setComponents(l+s,m+h,f+p,C+T).normalize(),n[3].setComponents(l-s,m-h,f-p,C-T).normalize(),n[4].setComponents(l-a,m-d,f-_,C-v).normalize(),t===Nt)n[5].setComponents(l+a,m+d,f+_,C+v).normalize();else if(t===Hi)n[5].setComponents(a,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(e){return Wi.center.set(0,0,0),Wi.radius=.7071067811865476,Wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Lr.x=r.normal.x>0?e.max.x:e.min.x,Lr.y=r.normal.y>0?e.max.y:e.min.y,Lr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Lr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var $e=class i{constructor(e,t,n,r,o,s,a,l,c,h,d,m,g,p,_,f){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c,h,d,m,g,p,_,f)}set(e,t,n,r,o,s,a,l,c,h,d,m,g,p,_,f){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=o,u[5]=s,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=m,u[3]=g,u[7]=p,u[11]=_,u[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/un.setFromMatrixColumn(e,0).length(),o=1/un.setFromMatrixColumn(e,1).length(),s=1/un.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,o=e.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){let m=s*h,g=s*d,p=a*h,_=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=g+p*c,t[5]=m-_*c,t[9]=-a*l,t[2]=_-m*c,t[6]=p+g*c,t[10]=s*l}else if(e.order==="YXZ"){let m=l*h,g=l*d,p=c*h,_=c*d;t[0]=m+_*a,t[4]=p*a-g,t[8]=s*c,t[1]=s*d,t[5]=s*h,t[9]=-a,t[2]=g*a-p,t[6]=_+m*a,t[10]=s*l}else if(e.order==="ZXY"){let m=l*h,g=l*d,p=c*h,_=c*d;t[0]=m-_*a,t[4]=-s*d,t[8]=p+g*a,t[1]=g+p*a,t[5]=s*h,t[9]=_-m*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){let m=s*h,g=s*d,p=a*h,_=a*d;t[0]=l*h,t[4]=p*c-g,t[8]=m*c+_,t[1]=l*d,t[5]=_*c+m,t[9]=g*c-p,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){let m=s*l,g=s*c,p=a*l,_=a*c;t[0]=l*h,t[4]=_-m*d,t[8]=p*d+g,t[1]=d,t[5]=s*h,t[9]=-a*h,t[2]=-c*h,t[6]=g*d+p,t[10]=m-_*d}else if(e.order==="XZY"){let m=s*l,g=s*c,p=a*l,_=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=m*d+_,t[5]=s*h,t[9]=g*d-p,t[2]=p*d-g,t[6]=a*h,t[10]=_*d+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hh,e,dh)}lookAt(e,t,n){let r=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),Di.crossVectors(n,Vt),Di.lengthSq()===0&&(Math.abs(n.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),Di.crossVectors(n,Vt)),Di.normalize(),Pr.crossVectors(Vt,Di),r[0]=Di.x,r[4]=Pr.x,r[8]=Vt.x,r[1]=Di.y,r[5]=Pr.y,r[9]=Vt.y,r[2]=Di.z,r[6]=Pr.z,r[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],m=n[9],g=n[13],p=n[2],_=n[6],f=n[10],u=n[14],T=n[3],v=n[7],C=n[11],U=n[15],R=r[0],b=r[4],j=r[8],M=r[12],y=r[1],D=r[5],G=r[9],Y=r[13],w=r[2],N=r[6],V=r[10],A=r[14],k=r[3],K=r[7],$=r[11],O=r[15];return o[0]=s*R+a*y+l*w+c*k,o[4]=s*b+a*D+l*N+c*K,o[8]=s*j+a*G+l*V+c*$,o[12]=s*M+a*Y+l*A+c*O,o[1]=h*R+d*y+m*w+g*k,o[5]=h*b+d*D+m*N+g*K,o[9]=h*j+d*G+m*V+g*$,o[13]=h*M+d*Y+m*A+g*O,o[2]=p*R+_*y+f*w+u*k,o[6]=p*b+_*D+f*N+u*K,o[10]=p*j+_*G+f*V+u*$,o[14]=p*M+_*Y+f*A+u*O,o[3]=T*R+v*y+C*w+U*k,o[7]=T*b+v*D+C*N+U*K,o[11]=T*j+v*G+C*V+U*$,o[15]=T*M+v*Y+C*A+U*O,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],m=e[10],g=e[14],p=e[3],_=e[7],f=e[11],u=e[15];return p*(+o*l*d-r*c*d-o*a*m+n*c*m+r*a*g-n*l*g)+_*(+t*l*g-t*c*m+o*s*m-r*s*g+r*c*h-o*l*h)+f*(+t*c*d-t*a*g-o*s*d+n*s*g+o*a*h-n*c*h)+u*(-r*a*h-t*l*d+t*a*m+r*s*d-n*s*m+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],m=e[10],g=e[11],p=e[12],_=e[13],f=e[14],u=e[15],T=d*f*c-_*m*c+_*l*g-a*f*g-d*l*u+a*m*u,v=p*m*c-h*f*c-p*l*g+s*f*g+h*l*u-s*m*u,C=h*_*c-p*d*c+p*a*g-s*_*g-h*a*u+s*d*u,U=p*d*l-h*_*l-p*a*m+s*_*m+h*a*f-s*d*f,R=t*T+n*v+r*C+o*U;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/R;return e[0]=T*b,e[1]=(_*m*o-d*f*o-_*r*g+n*f*g+d*r*u-n*m*u)*b,e[2]=(a*f*o-_*l*o+_*r*c-n*f*c-a*r*u+n*l*u)*b,e[3]=(d*l*o-a*m*o-d*r*c+n*m*c+a*r*g-n*l*g)*b,e[4]=v*b,e[5]=(h*f*o-p*m*o+p*r*g-t*f*g-h*r*u+t*m*u)*b,e[6]=(p*l*o-s*f*o-p*r*c+t*f*c+s*r*u-t*l*u)*b,e[7]=(s*m*o-h*l*o+h*r*c-t*m*c-s*r*g+t*l*g)*b,e[8]=C*b,e[9]=(p*d*o-h*_*o-p*n*g+t*_*g+h*n*u-t*d*u)*b,e[10]=(s*_*o-p*a*o+p*n*c-t*_*c-s*n*u+t*a*u)*b,e[11]=(h*a*o-s*d*o-h*n*c+t*d*c+s*n*g-t*a*g)*b,e[12]=U*b,e[13]=(h*_*r-p*d*r+p*n*m-t*_*m-h*n*f+t*d*f)*b,e[14]=(p*a*r-s*_*r-p*n*l+t*_*l+s*n*f-t*a*f)*b,e[15]=(s*d*r-h*a*r+h*n*l-t*d*l-s*n*m+t*a*m)*b,this}scale(e){let t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),o=1-n,s=e.x,a=e.y,l=e.z,c=o*s,h=o*a;return this.set(c*s+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*s,0,c*l-r*a,h*l+r*s,o*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,s){return this.set(1,n,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,o=t._x,s=t._y,a=t._z,l=t._w,c=o+o,h=s+s,d=a+a,m=o*c,g=o*h,p=o*d,_=s*h,f=s*d,u=a*d,T=l*c,v=l*h,C=l*d,U=n.x,R=n.y,b=n.z;return r[0]=(1-(_+u))*U,r[1]=(g+C)*U,r[2]=(p-v)*U,r[3]=0,r[4]=(g-C)*R,r[5]=(1-(m+u))*R,r[6]=(f+T)*R,r[7]=0,r[8]=(p+v)*b,r[9]=(f-T)*b,r[10]=(1-(m+_))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,o=un.set(r[0],r[1],r[2]).length(),s=un.set(r[4],r[5],r[6]).length(),a=un.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],ri.copy(this);let c=1/o,h=1/s,d=1/a;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=h,ri.elements[5]*=h,ri.elements[6]*=h,ri.elements[8]*=d,ri.elements[9]*=d,ri.elements[10]*=d,t.setFromRotationMatrix(ri),n.x=o,n.y=s,n.z=a,this}makePerspective(e,t,n,r,o,s,a=Nt){let l=this.elements,c=2*o/(t-e),h=2*o/(n-r),d=(t+e)/(t-e),m=(n+r)/(n-r),g,p;if(a===Nt)g=-(s+o)/(s-o),p=-2*s*o/(s-o);else if(a===Hi)g=-s/(s-o),p=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,o,s,a=Nt){let l=this.elements,c=1/(t-e),h=1/(n-r),d=1/(s-o),m=(t+e)*c,g=(n+r)*h,p,_;if(a===Nt)p=(s+o)*d,_=-2*d;else if(a===Hi)p=o*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=_,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},un=new H,ri=new $e,hh=new H(0,0,0),dh=new H(1,1,1),Di=new H,Pr=new H,Vt=new H;var Ge=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*n-s*r+e.x,this.y=o*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};var nt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o,l=e.elements,c=l[0],h=l[4],d=l[8],m=l[1],g=l[5],p=l[9],_=l[2],f=l[6],u=l[10];if(Math.abs(h-m)<.01&&Math.abs(d-_)<.01&&Math.abs(p-f)<.01){if(Math.abs(h+m)<.1&&Math.abs(d+_)<.1&&Math.abs(p+f)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,C=(g+1)/2,U=(u+1)/2,R=(h+m)/4,b=(d+_)/4,j=(p+f)/4;return v>C&&v>U?v<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(v),r=R/n,o=b/n):C>U?C<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(C),n=R/r,o=j/r):U<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(U),n=b/o,r=j/o),this.set(n,r,o,t),this}let T=Math.sqrt((f-p)*(f-p)+(d-_)*(d-_)+(m-h)*(m-h));return Math.abs(T)<.001&&(T=1),this.x=(f-p)/T,this.y=(d-_)/T,this.z=(m-h)/T,this.w=Math.acos((c+g+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};function Dr(){let i=null,e=!1,t=null,n=null;function r(o,s){t(o,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function Ks(i,e){let t=e.isWebGL2,n=new WeakMap;function r(c,h){let d=c.array,m=c.usage,g=d.byteLength,p=i.createBuffer();i.bindBuffer(h,p),i.bufferData(h,d,m),c.onUploadCallback();let _;if(d instanceof Float32Array)_=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=i.SHORT;else if(d instanceof Uint32Array)_=i.UNSIGNED_INT;else if(d instanceof Int32Array)_=i.INT;else if(d instanceof Int8Array)_=i.BYTE;else if(d instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:g}}function o(c,h,d){let m=h.array,g=h._updateRange,p=h.updateRanges;if(i.bindBuffer(d,c),g.count===-1&&p.length===0&&i.bufferSubData(d,0,m),p.length!==0){for(let _=0,f=p.length;_<f;_++){let u=p[_];t?i.bufferSubData(d,u.start*m.BYTES_PER_ELEMENT,m,u.start,u.count):i.bufferSubData(d,u.start*m.BYTES_PER_ELEMENT,m.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}g.count!==-1&&(t?i.bufferSubData(d,g.offset*m.BYTES_PER_ELEMENT,m,g.offset,g.count):i.bufferSubData(d,g.offset*m.BYTES_PER_ELEMENT,m.subarray(g.offset,g.offset+g.count)),g.count=-1),h.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let m=n.get(c);(!m||m.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=n.get(c);if(d===void 0)n.set(c,r(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(d.buffer,c,h),d.version=c.version}}return{get:s,remove:a,update:l}}var Ft=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}};var lt=new H,Ur=new Ge,ze=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=na,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ht,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ur.fromBufferAttribute(this,t),Ur.applyMatrix3(e),this.setXY(t,Ur.x,Ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=on(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=on(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=on(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=on(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=on(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),r=It(r,this.array),o=It(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==na&&(e.usage=this.usage),e}};var fn=class extends ze{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var hn=class extends ze{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Zt=class extends ze{constructor(e,t,n){super(new Float32Array(e),t,n)}};var js=new $e,Js=new hi,Qn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],h=r[9],d=r[2],m=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(ft(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-ft(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-ft(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return js.makeRotationFromQuaternion(e),this.setFromRotationMatrix(js,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Js.setFromEuler(this),this.setFromQuaternion(Js,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qn.DEFAULT_ORDER="XYZ";var dn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};var ph=0,Qs=new H,pn=new hi,yi=new $e,Ir=new H,$n=new H,mh=new H,gh=new hi,$s=new H(1,0,0),el=new H(0,1,0),tl=new H(0,0,1),_h={type:"added"},xh={type:"removed"},ht=class i extends Ft{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new H,t=new Qn,n=new hi,r=new H(1,1,1);function o(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new $e},normalMatrix:{value:new Re}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pn.setFromAxisAngle(e,t),this.quaternion.multiply(pn),this}rotateOnWorldAxis(e,t){return pn.setFromAxisAngle(e,t),this.quaternion.premultiply(pn),this}rotateX(e){return this.rotateOnAxis($s,e)}rotateY(e){return this.rotateOnAxis(el,e)}rotateZ(e){return this.rotateOnAxis(tl,e)}translateOnAxis(e,t){return Qs.copy(e).applyQuaternion(this.quaternion),this.position.add(Qs.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($s,e)}translateY(e){return this.translateOnAxis(el,e)}translateZ(e){return this.translateOnAxis(tl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ir.copy(e):Ir.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),$n.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt($n,Ir,this.up):yi.lookAt(Ir,$n,this.up),this.quaternion.setFromRotationMatrix(yi),r&&(yi.extractRotation(r.matrixWorld),pn.setFromRotationMatrix(yi),this.quaternion.premultiply(pn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(_h)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xh)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($n,e,mh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($n,gh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++){let o=t[n];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let r=this.children;for(let o=0,s=r.length;o<s;o++){let a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(o(e.animations,l))}}if(t){let a=s(e.geometries),l=s(e.materials),c=s(e.textures),h=s(e.images),d=s(e.shapes),m=s(e.skeletons),g=s(e.animations),p=s(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),m.length>0&&(n.skeletons=m),g.length>0&&(n.animations=g),p.length>0&&(n.nodes=p)}return n.object=r,n;function s(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};ht.DEFAULT_UP=new H(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;function Nr(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function mn(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nl(){let i=mn("canvas");return i.style.display="block",i}var il={};function Ui(i){i in il||(il[i]=!0,console.warn(i))}var vh=0,Kt=new $e,ha=new ht,gn=new H,kt=new Si,er=new Si,xt=new H,ct=class i extends Ft{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nr(e)?hn:fn)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let o=new Re().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,n){return Kt.makeTranslation(e,t,n),this.applyMatrix4(Kt),this}scale(e,t,n){return Kt.makeScale(e,t,n),this.applyMatrix4(Kt),this}lookAt(e){return ha.lookAt(e),ha.updateMatrix(),this.applyMatrix4(ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gn).negate(),this.translate(gn.x,gn.y,gn.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let o=e[n];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Zt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let o=t[n];kt.setFromBufferAttribute(o),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new di);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){let n=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){let a=t[o];er.setFromBufferAttribute(a),this.morphTargetsRelative?(xt.addVectors(kt.min,er.min),kt.expandByPoint(xt),xt.addVectors(kt.max,er.max),kt.expandByPoint(xt)):(kt.expandByPoint(er.min),kt.expandByPoint(er.max))}kt.getCenter(n);let r=0;for(let o=0,s=e.count;o<s;o++)xt.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared(xt));if(t)for(let o=0,s=t.length;o<s;o++){let a=t[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)xt.fromBufferAttribute(a,c),l&&(gn.fromBufferAttribute(e,c),xt.add(gn)),r=Math.max(r,n.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,r=t.position.array,o=t.normal.array,s=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ze(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let y=0;y<a;y++)c[y]=new H,h[y]=new H;let d=new H,m=new H,g=new H,p=new Ge,_=new Ge,f=new Ge,u=new H,T=new H;function v(y,D,G){d.fromArray(r,y*3),m.fromArray(r,D*3),g.fromArray(r,G*3),p.fromArray(s,y*2),_.fromArray(s,D*2),f.fromArray(s,G*2),m.sub(d),g.sub(d),_.sub(p),f.sub(p);let Y=1/(_.x*f.y-f.x*_.y);isFinite(Y)&&(u.copy(m).multiplyScalar(f.y).addScaledVector(g,-_.y).multiplyScalar(Y),T.copy(g).multiplyScalar(_.x).addScaledVector(m,-f.x).multiplyScalar(Y),c[y].add(u),c[D].add(u),c[G].add(u),h[y].add(T),h[D].add(T),h[G].add(T))}let C=this.groups;C.length===0&&(C=[{start:0,count:n.length}]);for(let y=0,D=C.length;y<D;++y){let G=C[y],Y=G.start,w=G.count;for(let N=Y,V=Y+w;N<V;N+=3)v(n[N+0],n[N+1],n[N+2])}let U=new H,R=new H,b=new H,j=new H;function M(y){b.fromArray(o,y*3),j.copy(b);let D=c[y];U.copy(D),U.sub(b.multiplyScalar(b.dot(D))).normalize(),R.crossVectors(j,D);let Y=R.dot(h[y])<0?-1:1;l[y*4]=U.x,l[y*4+1]=U.y,l[y*4+2]=U.z,l[y*4+3]=Y}for(let y=0,D=C.length;y<D;++y){let G=C[y],Y=G.start,w=G.count;for(let N=Y,V=Y+w;N<V;N+=3)M(n[N+0]),M(n[N+1]),M(n[N+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ze(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,g=n.count;m<g;m++)n.setXYZ(m,0,0,0);let r=new H,o=new H,s=new H,a=new H,l=new H,c=new H,h=new H,d=new H;if(e)for(let m=0,g=e.count;m<g;m+=3){let p=e.getX(m+0),_=e.getX(m+1),f=e.getX(m+2);r.fromBufferAttribute(t,p),o.fromBufferAttribute(t,_),s.fromBufferAttribute(t,f),h.subVectors(s,o),d.subVectors(r,o),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,f),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let m=0,g=t.count;m<g;m+=3)r.fromBufferAttribute(t,m+0),o.fromBufferAttribute(t,m+1),s.fromBufferAttribute(t,m+2),h.subVectors(s,o),d.subVectors(r,o),h.cross(d),n.setXYZ(m+0,h.x,h.y,h.z),n.setXYZ(m+1,h.x,h.y,h.z),n.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,m=new c.constructor(l.length*h),g=0,p=0;for(let _=0,f=l.length;_<f;_++){a.isInterleavedBufferAttribute?g=l[_]*a.data.stride+a.offset:g=l[_]*h;for(let u=0;u<h;u++)m[p++]=c[g++]}return new ze(m,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let o=this.morphAttributes;for(let a in o){let l=[],c=o[a];for(let h=0,d=c.length;h<d;h++){let m=c[h],g=e(m,n);l.push(g)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let a=0,l=s.length;a<l;a++){let c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},o=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,m=c.length;d<m;d++){let g=c[d];h.push(g.toJSON(e.data))}h.length>0&&(r[l]=h,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let o=e.morphAttributes;for(let c in o){let h=[],d=o[c];for(let m=0,g=d.length;m<g;m++)h.push(d[m].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let c=0,h=s.length;c<h;c++){let d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ii=class i extends ct{constructor(e=1,t=1,n=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:s};let a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);let l=[],c=[],h=[],d=[],m=0,g=0;p("z","y","x",-1,-1,n,t,e,s,o,0),p("z","y","x",1,-1,n,t,-e,s,o,1),p("x","z","y",1,1,e,n,t,r,s,2),p("x","z","y",1,-1,e,n,-t,r,s,3),p("x","y","z",1,-1,e,t,n,r,o,4),p("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(d,2));function p(_,f,u,T,v,C,U,R,b,j,M){let y=C/b,D=U/j,G=C/2,Y=U/2,w=R/2,N=b+1,V=j+1,A=0,k=0,K=new H;for(let $=0;$<V;$++){let O=$*D-Y;for(let Q=0;Q<N;Q++){let F=Q*y-G;K[_]=F*T,K[f]=O*v,K[u]=w,c.push(K.x,K.y,K.z),K[_]=0,K[f]=0,K[u]=R>0?1:-1,h.push(K.x,K.y,K.z),d.push(Q/b),d.push(1-$/j),A+=1}}for(let $=0;$<j;$++)for(let O=0;O<b;O++){let Q=m+O+N*$,F=m+O+N*($+1),z=m+(O+1)+N*($+1),J=m+(O+1)+N*$;l.push(Q,F,J),l.push(F,z,J),k+=6}a.addGroup(g,k,M),g+=k,m+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Fr=class i extends ct{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let o=e/2,s=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,d=e/a,m=t/l,g=[],p=[],_=[],f=[];for(let u=0;u<h;u++){let T=u*m-s;for(let v=0;v<c;v++){let C=v*d-o;p.push(C,-T,0),_.push(0,0,1),f.push(v/a),f.push(1-u/l)}}for(let u=0;u<l;u++)for(let T=0;T<a;T++){let v=T+c*u,C=T+c*(u+1),U=T+1+c*(u+1),R=T+1+c*u;g.push(v,C,R),g.push(C,U,R)}this.setIndex(g),this.setAttribute("position",new Zt(p,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Mh=0,jt=class extends Ft{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=ui(),this.name="",this.type="Material",this.blending=gi,this.side=Bt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hn,this.blendDst=Vn,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ia,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gi&&(n.blending=this.blending),this.side!==Bt&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Hn&&(n.blendSrc=this.blendSrc),this.blendDst!==Vn&&(n.blendDst=this.blendDst),this.blendEquation!==_i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ia&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){let s=[];for(let a in o){let l=o[a];delete l.metadata,s.push(l)}return s}if(t){let o=r(e.textures),s=r(e.images);o.length>0&&(n.textures=o),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};function Ei(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Lt(i){let e={};for(let t=0;t<i.length;t++){let n=Ei(i[t]);for(let r in n)e[r]=n[r]}return e}function rl(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Or(i){return i.getRenderTarget()===null?i.outputColorSpace:ke.workingColorSpace}var ol={clone:Ei,merge:Lt};var al=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;var sl=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;var ut=class extends jt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=al,this.fragmentShader=sl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ei(e.uniforms),this.uniformsGroups=rl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}};var Ti=new H,da=new H,Br=new H,Ni=new H,pa=new H,Gr=new H,ma=new H,_n=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){da.copy(e).add(t).multiplyScalar(.5),Br.copy(t).sub(e).normalize(),Ni.copy(this.origin).sub(da);let o=e.distanceTo(t)*.5,s=-this.direction.dot(Br),a=Ni.dot(this.direction),l=-Ni.dot(Br),c=Ni.lengthSq(),h=Math.abs(1-s*s),d,m,g,p;if(h>0)if(d=s*l-a,m=s*a-l,p=o*h,d>=0)if(m>=-p)if(m<=p){let _=1/h;d*=_,m*=_,g=d*(d+s*m+2*a)+m*(s*d+m+2*l)+c}else m=o,d=Math.max(0,-(s*m+a)),g=-d*d+m*(m+2*l)+c;else m=-o,d=Math.max(0,-(s*m+a)),g=-d*d+m*(m+2*l)+c;else m<=-p?(d=Math.max(0,-(-s*o+a)),m=d>0?-o:Math.min(Math.max(-o,-l),o),g=-d*d+m*(m+2*l)+c):m<=p?(d=0,m=Math.min(Math.max(-o,-l),o),g=m*(m+2*l)+c):(d=Math.max(0,-(s*o+a)),m=d>0?o:Math.min(Math.max(-o,-l),o),g=-d*d+m*(m+2*l)+c);else m=s>0?-o:o,d=Math.max(0,-(s*m+a)),g=-d*d+m*(m+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(da).addScaledVector(Br,m),g}intersectSphere(e,t){Ti.subVectors(e.center,this.origin);let n=Ti.dot(this.direction),r=Ti.dot(Ti)-n*n,o=e.radius*e.radius;if(r>o)return null;let s=Math.sqrt(o-r),a=n-s,l=n+s;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,s,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,m=this.origin;return c>=0?(n=(e.min.x-m.x)*c,r=(e.max.x-m.x)*c):(n=(e.max.x-m.x)*c,r=(e.min.x-m.x)*c),h>=0?(o=(e.min.y-m.y)*h,s=(e.max.y-m.y)*h):(o=(e.max.y-m.y)*h,s=(e.min.y-m.y)*h),n>s||o>r||((o>n||isNaN(n))&&(n=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-m.z)*d,l=(e.max.z-m.z)*d):(a=(e.max.z-m.z)*d,l=(e.min.z-m.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,n,r,o){pa.subVectors(t,e),Gr.subVectors(n,e),ma.crossVectors(pa,Gr);let s=this.direction.dot(ma),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Ni.subVectors(this.origin,e);let l=a*this.direction.dot(Gr.crossVectors(Ni,Gr));if(l<0)return null;let c=a*this.direction.dot(pa.cross(Ni));if(c<0||l+c>s)return null;let h=-a*Ni.dot(ma);return h<0?null:this.at(h/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};var oi=new H,bi=new H,ga=new H,Ai=new H,xn=new H,vn=new H,ll=new H,_a=new H,xa=new H,va=new H,zr=!1,Xi=class i{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),oi.subVectors(e,t),r.cross(oi);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){oi.subVectors(r,t),bi.subVectors(n,t),ga.subVectors(e,t);let s=oi.dot(oi),a=oi.dot(bi),l=oi.dot(ga),c=bi.dot(bi),h=bi.dot(ga),d=s*c-a*a;if(d===0)return o.set(0,0,0),null;let m=1/d,g=(c*l-a*h)*m,p=(s*h-a*l)*m;return o.set(1-g-p,p,g)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getUV(e,t,n,r,o,s,a,l){return zr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zr=!0),this.getInterpolation(e,t,n,r,o,s,a,l)}static getInterpolation(e,t,n,r,o,s,a,l){return this.getBarycoord(e,t,n,r,Ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Ai.x),l.addScaledVector(s,Ai.y),l.addScaledVector(a,Ai.z),l)}static isFrontFacing(e,t,n,r){return oi.subVectors(n,t),bi.subVectors(e,t),oi.cross(bi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),oi.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,o){return zr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zr=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}getInterpolation(e,t,n,r,o){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,o=this.c,s,a;xn.subVectors(r,n),vn.subVectors(o,n),_a.subVectors(e,n);let l=xn.dot(_a),c=vn.dot(_a);if(l<=0&&c<=0)return t.copy(n);xa.subVectors(e,r);let h=xn.dot(xa),d=vn.dot(xa);if(h>=0&&d<=h)return t.copy(r);let m=l*d-h*c;if(m<=0&&l>=0&&h<=0)return s=l/(l-h),t.copy(n).addScaledVector(xn,s);va.subVectors(e,o);let g=xn.dot(va),p=vn.dot(va);if(p>=0&&g<=p)return t.copy(o);let _=g*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(vn,a);let f=h*p-g*d;if(f<=0&&d-h>=0&&g-p>=0)return ll.subVectors(o,r),a=(d-h)/(d-h+(g-p)),t.copy(r).addScaledVector(ll,a);let u=1/(f+_+m);return s=_*u,a=m*u,t.copy(n).addScaledVector(xn,s).addScaledVector(vn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};var Mn=class extends jt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ar,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var cl=new $e,qi=new _n,Hr=new di,ul=new H,Sn=new H,yn=new H,En=new H,Ma=new H,Vr=new H,kr=new Ge,Wr=new Ge,Xr=new Ge,fl=new H,hl=new H,dl=new H,qr=new H,Yr=new H,Et=class extends ht{constructor(e=new ct,t=new Mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(o&&a){Vr.set(0,0,0);for(let l=0,c=o.length;l<c;l++){let h=a[l],d=o[l];h!==0&&(Ma.fromBufferAttribute(d,e),s?Vr.addScaledVector(Ma,h):Vr.addScaledVector(Ma.sub(t),h))}t.add(Vr)}return t}raycast(e,t){let n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(o),qi.copy(e.ray).recast(e.near),!(Hr.containsPoint(qi.origin)===!1&&(qi.intersectSphere(Hr,ul)===null||qi.origin.distanceToSquared(ul)>(e.far-e.near)**2))&&(cl.copy(o).invert(),qi.copy(e.ray).applyMatrix4(cl),!(n.boundingBox!==null&&qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qi)))}_computeIntersections(e,t,n){let r,o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,d=o.attributes.normal,m=o.groups,g=o.drawRange;if(a!==null)if(Array.isArray(s))for(let p=0,_=m.length;p<_;p++){let f=m[p],u=s[f.materialIndex],T=Math.max(f.start,g.start),v=Math.min(a.count,Math.min(f.start+f.count,g.start+g.count));for(let C=T,U=v;C<U;C+=3){let R=a.getX(C),b=a.getX(C+1),j=a.getX(C+2);r=Zr(this,u,e,n,c,h,d,R,b,j),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{let p=Math.max(0,g.start),_=Math.min(a.count,g.start+g.count);for(let f=p,u=_;f<u;f+=3){let T=a.getX(f),v=a.getX(f+1),C=a.getX(f+2);r=Zr(this,s,e,n,c,h,d,T,v,C),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let p=0,_=m.length;p<_;p++){let f=m[p],u=s[f.materialIndex],T=Math.max(f.start,g.start),v=Math.min(l.count,Math.min(f.start+f.count,g.start+g.count));for(let C=T,U=v;C<U;C+=3){let R=C,b=C+1,j=C+2;r=Zr(this,u,e,n,c,h,d,R,b,j),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{let p=Math.max(0,g.start),_=Math.min(l.count,g.start+g.count);for(let f=p,u=_;f<u;f+=3){let T=f,v=f+1,C=f+2;r=Zr(this,s,e,n,c,h,d,T,v,C),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}}};function Sh(i,e,t,n,r,o,s,a){let l;if(e.side===it?l=n.intersectTriangle(s,o,r,!0,a):l=n.intersectTriangle(r,o,s,e.side===Bt,a),l===null)return null;Yr.copy(a),Yr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Yr);return c<t.near||c>t.far?null:{distance:c,point:Yr.clone(),object:i}}function Zr(i,e,t,n,r,o,s,a,l,c){i.getVertexPosition(a,Sn),i.getVertexPosition(l,yn),i.getVertexPosition(c,En);let h=Sh(i,e,t,n,Sn,yn,En,qr);if(h){r&&(kr.fromBufferAttribute(r,a),Wr.fromBufferAttribute(r,l),Xr.fromBufferAttribute(r,c),h.uv=Xi.getInterpolation(qr,Sn,yn,En,kr,Wr,Xr,new Ge)),o&&(kr.fromBufferAttribute(o,a),Wr.fromBufferAttribute(o,l),Xr.fromBufferAttribute(o,c),h.uv1=Xi.getInterpolation(qr,Sn,yn,En,kr,Wr,Xr,new Ge),h.uv2=h.uv1),s&&(fl.fromBufferAttribute(s,a),hl.fromBufferAttribute(s,l),dl.fromBufferAttribute(s,c),h.normal=Xi.getInterpolation(qr,Sn,yn,En,fl,hl,dl,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new H,materialIndex:0};Xi.getNormal(Sn,yn,En,d.normal),h.face=d}return h}var pl=`
#ifdef USE_ALPHAHASH

	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;

#endif
`;var ml=`
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
`;var gl=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

#endif
`;var _l=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`;var xl=`
#ifdef USE_ALPHATEST

	if ( diffuseColor.a < alphaTest ) discard;

#endif
`;var vl=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`;var Ml=`
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
`;var Sl=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`;var yl=`
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
`;var El=`
#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif
`;var Tl=`
vec3 transformed = vec3( position );

#ifdef USE_ALPHAHASH

	vPosition = vec3( position );

#endif
`;var bl=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`;var Al=`

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

`;var wl=`

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

`;var Rl=`
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
`;var Cl=`
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
`;var Ll=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`;var Pl=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`;var Dl=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`;var Ul=`
#if defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#elif defined( USE_COLOR )

	diffuseColor.rgb *= vColor;

#endif
`;var Il=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR )

	varying vec3 vColor;

#endif
`;var Nl=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	varying vec3 vColor;

#endif
`;var Fl=`
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
`;var Ol=`
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
`;var Bl=`
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
`;var Gl=`

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
`;var zl=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`;var Hl=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );

#endif
`;var Vl=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`;var kl=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`;var Wl=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`;var Xl=`

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
`;var ql=`
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
`;var Yl=`
#ifdef USE_ENVMAP

	uniform float envMapIntensity;
	uniform float flipEnvMap;

	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif
`;var Zl=`
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
`;var Kl=`
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
`;var jl=`
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
`;var Jl=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`;var Ql=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`;var $l=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`;var ec=`
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
`;var tc=`

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
`;var ic=`
#ifdef USE_LIGHTMAP

	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

	reflectedLight.indirectDiffuse += lightMapIrradiance;

#endif
`;var nc=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`;var rc=`
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`;var oc=`
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
`;var ac=`
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
`;var sc=`
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
`;var lc=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`;var cc=`
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
`;var uc=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`;var fc=`
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
`;var hc=`
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
`;var dc=`

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
`;var pc=`
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
`;var mc=`
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
`;var gc=`
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif
`;var _c=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`;var xc=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;var vc=`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		varying float vFragDepth;
		varying float vIsPerspective;

	#else

		uniform float logDepthBufFC;

	#endif

#endif
`;var Mc=`
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
`;var Sc=`
#ifdef USE_MAP

	vec4 sampledDiffuseColor = texture2D( map, vMapUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_APLHA8 with video textures

		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`;var yc=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`;var Ec=`
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
`;var Tc=`
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
`;var bc=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`;var Ac=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`;var wc=`
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
`;var Rc=`
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
`;var Cc=`
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
`;var Lc=`
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
`;var Pc=`
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

`;var Dc=`

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
`;var Uc=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;var Ic=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;var Nc=`
#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif
`;var Fc=`
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
`;var Oc=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = nonPerturbedNormal;

#endif
`;var Bc=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	clearcoatNormal = normalize( tbn2 * clearcoatMapN );

#endif
`;var Gc=`

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
`;var zc=`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`;var Hc=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`;var Vc=`
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
`;var kc=`
#ifdef PREMULTIPLIED_ALPHA

	// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.
	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`;var Wc=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_BATCHING

	mvPosition = batchingMatrix * mvPosition;

#endif

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`;var Xc=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`;var qc=`
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
`;var Yc=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`;var Zc=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`;var Kc=`
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
`;var jc=`

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
`;var Jc=`

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


`;var Qc=`
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
`;var $c=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`;var eu=`
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
`;var tu=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`;var iu=`
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
`;var nu=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`;var ru=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`;var ou=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`;var au=`
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
`;var su=`
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
`;var lu=`
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
`;var cu=`
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
`;var uu=`
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
`;var fu=`
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
`;var hu=`
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
`;var du=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,pu=`
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
`;var mu=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,gu=`

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
`;var _u=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,xu=`
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
`;var vu=`
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
`,Mu=`
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
`;var Su=`
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
`,yu=`
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
`;var Eu=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,Tu=`
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
`;var bu=`
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
`,Au=`
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
`;var wu=`
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
`,Ru=`
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
`;var Cu=`
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
`,Lu=`
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
`;var Pu=`
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
`,Du=`
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
`;var Uu=`
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
`,Iu=`
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
`;var Nu=`
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
`,Fu=`
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
`;var Ou=`
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
`,Bu=`
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
`;var Gu=`
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
`,zu=`
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
`;var Hu=`
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
`,Vu=`
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
`;var ku=`
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
`,Wu=`
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
`;var Xu=`
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
`,qu=`
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
`;var Ue={alphahash_fragment:pl,alphahash_pars_fragment:ml,alphamap_fragment:gl,alphamap_pars_fragment:_l,alphatest_fragment:xl,alphatest_pars_fragment:vl,aomap_fragment:Ml,aomap_pars_fragment:Sl,batching_pars_vertex:yl,batching_vertex:El,begin_vertex:Tl,beginnormal_vertex:bl,bsdfs:Al,iridescence_fragment:wl,bumpmap_pars_fragment:Rl,clipping_planes_fragment:Cl,clipping_planes_pars_fragment:Ll,clipping_planes_pars_vertex:Pl,clipping_planes_vertex:Dl,color_fragment:Ul,color_pars_fragment:Il,color_pars_vertex:Nl,color_vertex:Fl,common:Ol,cube_uv_reflection_fragment:Bl,defaultnormal_vertex:Gl,displacementmap_pars_vertex:zl,displacementmap_vertex:Hl,emissivemap_fragment:Vl,emissivemap_pars_fragment:kl,colorspace_fragment:Wl,colorspace_pars_fragment:Xl,envmap_fragment:ql,envmap_common_pars_fragment:Yl,envmap_pars_fragment:Zl,envmap_pars_vertex:Kl,envmap_physical_pars_fragment:sc,envmap_vertex:jl,fog_vertex:Jl,fog_pars_vertex:Ql,fog_fragment:$l,fog_pars_fragment:ec,gradientmap_pars_fragment:tc,lightmap_fragment:ic,lightmap_pars_fragment:nc,lights_lambert_fragment:rc,lights_lambert_pars_fragment:oc,lights_pars_begin:ac,lights_toon_fragment:lc,lights_toon_pars_fragment:cc,lights_phong_fragment:uc,lights_phong_pars_fragment:fc,lights_physical_fragment:hc,lights_physical_pars_fragment:dc,lights_fragment_begin:pc,lights_fragment_maps:mc,lights_fragment_end:gc,logdepthbuf_fragment:_c,logdepthbuf_pars_fragment:xc,logdepthbuf_pars_vertex:vc,logdepthbuf_vertex:Mc,map_fragment:Sc,map_pars_fragment:yc,map_particle_fragment:Ec,map_particle_pars_fragment:Tc,metalnessmap_fragment:bc,metalnessmap_pars_fragment:Ac,morphcolor_vertex:wc,morphnormal_vertex:Rc,morphtarget_pars_vertex:Cc,morphtarget_vertex:Lc,normal_fragment_begin:Pc,normal_fragment_maps:Dc,normal_pars_fragment:Uc,normal_pars_vertex:Ic,normal_vertex:Nc,normalmap_pars_fragment:Fc,clearcoat_normal_fragment_begin:Oc,clearcoat_normal_fragment_maps:Bc,clearcoat_pars_fragment:Gc,iridescence_pars_fragment:zc,opaque_fragment:Hc,packing:Vc,premultiplied_alpha_fragment:kc,project_vertex:Wc,dithering_fragment:Xc,dithering_pars_fragment:qc,roughnessmap_fragment:Yc,roughnessmap_pars_fragment:Zc,shadowmap_pars_fragment:Kc,shadowmap_pars_vertex:jc,shadowmap_vertex:Jc,shadowmask_pars_fragment:Qc,skinbase_vertex:$c,skinning_pars_vertex:eu,skinning_vertex:tu,skinnormal_vertex:iu,specularmap_fragment:nu,specularmap_pars_fragment:ru,tonemapping_fragment:ou,tonemapping_pars_fragment:au,transmission_fragment:su,transmission_pars_fragment:lu,uv_pars_fragment:cu,uv_pars_vertex:uu,uv_vertex:fu,worldpos_vertex:hu,background_vert:du,background_frag:pu,backgroundCube_vert:mu,backgroundCube_frag:gu,cube_vert:_u,cube_frag:xu,depth_vert:vu,depth_frag:Mu,distanceRGBA_vert:Su,distanceRGBA_frag:yu,equirect_vert:Eu,equirect_frag:Tu,linedashed_vert:bu,linedashed_frag:Au,meshbasic_vert:wu,meshbasic_frag:Ru,meshlambert_vert:Cu,meshlambert_frag:Lu,meshmatcap_vert:Pu,meshmatcap_frag:Du,meshnormal_vert:Uu,meshnormal_frag:Iu,meshphong_vert:Nu,meshphong_frag:Fu,meshphysical_vert:Ou,meshphysical_frag:Bu,meshtoon_vert:Gu,meshtoon_frag:zu,points_vert:Hu,points_frag:Vu,shadow_vert:ku,shadow_frag:Wu,sprite_vert:Xu,sprite_frag:qu};var se={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Re}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Re},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0},uvTransform:{value:new Re}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}}};var Jt={basic:{uniforms:Lt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Lt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Lt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Lt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Lt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Lt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Lt([se.points,se.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Lt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Lt([se.common,se.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Lt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Lt([se.sprite,se.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Lt([se.common,se.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Lt([se.lights,se.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Jt.physical={uniforms:Lt([Jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Re},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Re},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Re},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Re},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Re},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Re},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Re}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};var Kr={r:0,b:0,g:0};function Yu(i,e,t,n,r,o,s){let a=new Ne(0),l=o===!0?0:1,c,h,d=null,m=0,g=null;function p(f,u){let T=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),T=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||T)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===wi)?(h===void 0&&(h=new Et(new Ii(1,1,1),new ut({name:"BackgroundCubeMaterial",uniforms:Ei(Jt.backgroundCube.uniforms),vertexShader:Jt.backgroundCube.vertexShader,fragmentShader:Jt.backgroundCube.fragmentShader,side:it,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,R,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=ke.getTransfer(v.colorSpace)!==qe,(d!==v||m!==v.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,d=v,m=v.version,g=i.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Et(new Fr(2,2),new ut({name:"BackgroundMaterial",uniforms:Ei(Jt.background.uniforms),vertexShader:Jt.background.vertexShader,fragmentShader:Jt.background.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=ke.getTransfer(v.colorSpace)!==qe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||m!==v.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,m=v.version,g=i.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function _(f,u){f.getRGB(Kr,Or(i)),n.buffers.color.setClear(Kr.r,Kr.g,Kr.b,u,s)}return{getClearColor:function(){return a},setClearColor:function(f,u=1){a.set(f),l=u,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,_(a,l)},render:p}}function Zu(i,e,t,n){let r=i.getParameter(i.MAX_VERTEX_ATTRIBS),o=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||o!==null,a={},l=f(null),c=l,h=!1;function d(w,N,V,A,k){let K=!1;if(s){let $=_(A,V,N);c!==$&&(c=$,g(c.object)),K=u(w,A,V,k),K&&T(w,A,V,k)}else{let $=N.wireframe===!0;(c.geometry!==A.id||c.program!==V.id||c.wireframe!==$)&&(c.geometry=A.id,c.program=V.id,c.wireframe=$,K=!0)}k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(K||h)&&(h=!1,j(w,N,V,A),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function m(){return n.isWebGL2?i.createVertexArray():o.createVertexArrayOES()}function g(w){return n.isWebGL2?i.bindVertexArray(w):o.bindVertexArrayOES(w)}function p(w){return n.isWebGL2?i.deleteVertexArray(w):o.deleteVertexArrayOES(w)}function _(w,N,V){let A=V.wireframe===!0,k=a[w.id];k===void 0&&(k={},a[w.id]=k);let K=k[N.id];K===void 0&&(K={},k[N.id]=K);let $=K[A];return $===void 0&&($=f(m()),K[A]=$),$}function f(w){let N=[],V=[],A=[];for(let k=0;k<r;k++)N[k]=0,V[k]=0,A[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:V,attributeDivisors:A,object:w,attributes:{},index:null}}function u(w,N,V,A){let k=c.attributes,K=N.attributes,$=0,O=V.getAttributes();for(let Q in O)if(O[Q].location>=0){let z=k[Q],J=K[Q];if(J===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(J=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(J=w.instanceColor)),z===void 0||z.attribute!==J||J&&z.data!==J.data)return!0;$++}return c.attributesNum!==$||c.index!==A}function T(w,N,V,A){let k={},K=N.attributes,$=0,O=V.getAttributes();for(let Q in O)if(O[Q].location>=0){let z=K[Q];z===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(z=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(z=w.instanceColor));let J={};J.attribute=z,z&&z.data&&(J.data=z.data),k[Q]=J,$++}c.attributes=k,c.attributesNum=$,c.index=A}function v(){let w=c.newAttributes;for(let N=0,V=w.length;N<V;N++)w[N]=0}function C(w){U(w,0)}function U(w,N){let V=c.newAttributes,A=c.enabledAttributes,k=c.attributeDivisors;V[w]=1,A[w]===0&&(i.enableVertexAttribArray(w),A[w]=1),k[w]!==N&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](w,N),k[w]=N)}function R(){let w=c.newAttributes,N=c.enabledAttributes;for(let V=0,A=N.length;V<A;V++)N[V]!==w[V]&&(i.disableVertexAttribArray(V),N[V]=0)}function b(w,N,V,A,k,K,$){$===!0?i.vertexAttribIPointer(w,N,V,k,K):i.vertexAttribPointer(w,N,V,A,k,K)}function j(w,N,V,A){if(n.isWebGL2===!1&&(w.isInstancedMesh||A.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let k=A.attributes,K=V.getAttributes(),$=N.defaultAttributeValues;for(let O in K){let Q=K[O];if(Q.location>=0){let F=k[O];if(F===void 0&&(O==="instanceMatrix"&&w.instanceMatrix&&(F=w.instanceMatrix),O==="instanceColor"&&w.instanceColor&&(F=w.instanceColor)),F!==void 0){let z=F.normalized,J=F.itemSize,ee=t.get(F);if(ee===void 0)continue;let ae=ee.buffer,de=ee.type,ye=ee.bytesPerElement,I=n.isWebGL2===!0&&(de===i.INT||de===i.UNSIGNED_INT||F.gpuType===lr);if(F.isInterleavedBufferAttribute){let te=F.data,L=te.stride,ge=F.offset;if(te.isInstancedInterleavedBuffer){for(let he=0;he<Q.locationSize;he++)U(Q.location+he,te.meshPerAttribute);w.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let he=0;he<Q.locationSize;he++)C(Q.location+he);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let he=0;he<Q.locationSize;he++)b(Q.location+he,J/Q.locationSize,de,z,L*ye,(ge+J/Q.locationSize*he)*ye,I)}else{if(F.isInstancedBufferAttribute){for(let te=0;te<Q.locationSize;te++)U(Q.location+te,F.meshPerAttribute);w.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let te=0;te<Q.locationSize;te++)C(Q.location+te);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let te=0;te<Q.locationSize;te++)b(Q.location+te,J/Q.locationSize,de,z,J*ye,J/Q.locationSize*te*ye,I)}}else if($!==void 0){let z=$[O];if(z!==void 0)switch(z.length){case 2:i.vertexAttrib2fv(Q.location,z);break;case 3:i.vertexAttrib3fv(Q.location,z);break;case 4:i.vertexAttrib4fv(Q.location,z);break;default:i.vertexAttrib1fv(Q.location,z)}}}}R()}function M(){G();for(let w in a){let N=a[w];for(let V in N){let A=N[V];for(let k in A)p(A[k].object),delete A[k];delete N[V]}delete a[w]}}function y(w){if(a[w.id]===void 0)return;let N=a[w.id];for(let V in N){let A=N[V];for(let k in A)p(A[k].object),delete A[k];delete N[V]}delete a[w.id]}function D(w){for(let N in a){let V=a[N];if(V[w.id]===void 0)continue;let A=V[w.id];for(let k in A)p(A[k].object),delete A[k];delete V[w.id]}}function G(){Y(),h=!0,c!==l&&(c=l,g(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:G,resetDefaultState:Y,dispose:M,releaseStatesOfGeometry:y,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:C,disableUnusedAttributes:R}}function Ku(i,e,t,n){let r=n.isWebGL2,o;function s(h){o=h}function a(h,d){i.drawArrays(o,h,d),t.update(d,o,1)}function l(h,d,m){if(m===0)return;let g,p;if(r)g=i,p="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](o,h,d,m),t.update(d,o,m)}function c(h,d,m){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<m;p++)this.render(h[p],d[p]);else{g.multiDrawArraysWEBGL(o,h,0,d,0,m);let p=0;for(let _=0;_<m;_++)p+=d[_];t.update(p,o,1)}}this.setMode=s,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function ju(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=o(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=s||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),u=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=m>0,C=s||e.has("OES_texture_float"),U=v&&C,R=s?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:p,maxAttributes:_,maxVertexUniforms:f,maxVaryings:u,maxFragmentUniforms:T,vertexTextures:v,floatFragmentTextures:C,floatVertexTextures:U,maxSamples:R}}function Ju(i){let e=this,t=null,n=0,r=!1,o=!1,s=new ni,a=new Re,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,m){let g=d.length!==0||m||n!==0||r;return r=m,n=d.length,g},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,m){t=h(d,m,0)},this.setState=function(d,m,g){let p=d.clippingPlanes,_=d.clipIntersection,f=d.clipShadows,u=i.get(d);if(!r||p===null||p.length===0||o&&!f)o?h(null):c();else{let T=o?0:n,v=T*4,C=u.clippingState||null;l.value=C,C=h(p,m,v,g);for(let U=0;U!==v;++U)C[U]=t[U];u.clippingState=C,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,m,g,p){let _=d!==null?d.length:0,f=null;if(_!==0){if(f=l.value,p!==!0||f===null){let u=g+_*4,T=m.matrixWorldInverse;a.getNormalMatrix(T),(f===null||f.length<u)&&(f=new Float32Array(u));for(let v=0,C=g;v!==_;++v,C+=4)s.copy(d[v]).applyMatrix4(T,a),s.normal.toArray(f,C),f[C+3]=s.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,f}}var Tn,bn=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Tn===void 0&&(Tn=mn("canvas")),Tn.width=e.width,Tn.height=e.height;let n=Tn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Tn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=mn("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Ri(o[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ri(t[n]/255)*255):t[n]=Ri(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}};var Gh=0,An=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=ui(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Sa(r[s].image)):o.push(Sa(r[s]))}else o=Sa(r);n.url=o}return t||(e.images[this.uuid]=n),n}};function Sa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bn.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var zh=0,Tt=class i extends Ft{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ut,r=Ut,o=Mt,s=xi,a=St,l=Gt,c=i.DEFAULT_ANISOTROPY,h=_t){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=ui(),this.name="",this.source=new An(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ui("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ti?et:_t),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Co)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xn:e.x=e.x-Math.floor(e.x);break;case Ut:e.x=e.x<0?0:1;break;case qn:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xn:e.y=e.y-Math.floor(e.y);break;case Ut:e.y=e.y<0?0:1;break;case qn:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ui("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===et?ti:Mr}set encoding(e){Ui("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ti?et:_t}};Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=Co;Tt.DEFAULT_ANISOTROPY=1;var jr=class extends Ft{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);let r={width:e,height:t,depth:1};n.encoding!==void 0&&(Ui("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ti?et:_t),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Tt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new An(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}};var bt=class extends jr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}};var wn=class extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Nt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};var At=class extends wn{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Zn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zn*2*Math.atan(Math.tan(yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(yr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,t-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}let a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Rn=-90,Cn=1,Jr=class extends ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new At(Rn,Cn,e,t);r.layers=this.layers,this.add(r);let o=new At(Rn,Cn,e,t);o.layers=this.layers,this.add(o);let s=new At(Rn,Cn,e,t);s.layers=this.layers,this.add(s);let a=new At(Rn,Cn,e,t);a.layers=this.layers,this.add(a);let l=new At(Rn,Cn,e,t);l.layers=this.layers,this.add(l);let c=new At(Rn,Cn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,o,s,a,l]=t;for(let c of t)this.remove(c);if(e===Nt)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Hi)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[o,s,a,l,c,h]=this.children,d=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,o),e.setRenderTarget(n,1,r),e.render(t,s),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(d,m,g),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}};var Ln=class extends Tt{constructor(e,t,n,r,o,s,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:$t,super(e,t,n,r,o,s,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Qr=class extends bt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Ui("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ti?et:_t),this.texture=new Ln(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ii(5,5,5),o=new ut({name:"CubemapFromEquirect",uniforms:Ei(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:it,blending:Xt});o.uniforms.tEquirect.value=t;let s=new Et(r,o),a=t.minFilter;return t.minFilter===xi&&(t.minFilter=Mt),new Jr(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,r){let o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(o)}};function Qu(i){let e=new WeakMap;function t(s,a){return a===kn?s.mapping=$t:a===Wn&&(s.mapping=li),s}function n(s){if(s&&s.isTexture){let a=s.mapping;if(a===kn||a===Wn)if(e.has(s)){let l=e.get(s).texture;return t(l,s.mapping)}else{let l=s.image;if(l&&l.height>0){let c=new Qr(l.height/2);return c.fromEquirectangularTexture(i,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){let a=s.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}var Yi=class extends wn{constructor(e=-1,t=1,n=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=n-e,s=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Dn=4,$u=[.125,.215,.35,.446,.526,.582],Ki=20,ya=new Yi,ef=new Ne,Ea=null,Ta=0,ba=0,Zi=(1+Math.sqrt(5))/2,Pn=1/Zi,tf=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,Zi,Pn),new H(0,Zi,-Pn),new H(Pn,0,Zi),new H(-Pn,0,Zi),new H(Zi,Pn,0),new H(-Zi,Pn,0)],tr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ea=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel(),this._setSize(256);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=of(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ea,Ta,ba),e.scissorTest=!1,$r(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$t||e.mapping===li?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ea=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Mt,minFilter:Mt,generateMipmaps:!1,type:vi,format:St,colorSpace:yt,depthBuffer:!1},r=nf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nf(e,t,n);let{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hh(o)),this._blurMaterial=Vh(o,e,t)}return r}_compileMaterial(e){let t=new Et(this._lodPlanes[0],e);this._renderer.compile(t,ya)}_sceneToCubeUV(e,t,n,r){let a=new At(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,m=h.toneMapping;h.getClearColor(ef),h.toneMapping=qt,h.autoClear=!1;let g=new Mn({name:"PMREM.Background",side:it,depthWrite:!1,depthTest:!1}),p=new Et(new Ii,g),_=!1,f=e.background;f?f.isColor&&(g.color.copy(f),e.background=null,_=!0):(g.color.copy(ef),_=!0);for(let u=0;u<6;u++){let T=u%3;T===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):T===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));let v=this._cubeSize;$r(r,T*v,u>2?v:0,v,v),h.setRenderTarget(r),_&&h.render(p,a),h.render(e,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=m,h.autoClear=d,e.background=f}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===$t||e.mapping===li;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=of()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rf());let o=r?this._cubemapMaterial:this._equirectMaterial,s=new Et(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;let l=this._cubeSize;$r(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,ya)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=tf[(r-1)%tf.length];this._blur(e,r-1,r,o,s)}t.autoClear=n}_blur(e,t,n,r,o){let s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",o),this._halfBlur(s,e,n,n,r,"longitudinal",o)}_halfBlur(e,t,n,r,o,s,a){let l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Et(this._lodPlanes[r],c),m=c.uniforms,g=this._sizeLods[n]-1,p=isFinite(o)?Math.PI/(2*g):2*Math.PI/(2*Ki-1),_=o/p,f=isFinite(o)?1+Math.floor(h*_):Ki;f>Ki&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Ki}`);let u=[],T=0;for(let b=0;b<Ki;++b){let j=b/_,M=Math.exp(-j*j/2);u.push(M),b===0?T+=M:b<f&&(T+=2*M)}for(let b=0;b<u.length;b++)u[b]=u[b]/T;m.envMap.value=e.texture,m.samples.value=f,m.weights.value=u,m.latitudinal.value=s==="latitudinal",a&&(m.poleAxis.value=a);let{_lodMax:v}=this;m.dTheta.value=p,m.mipInt.value=v-n;let C=this._sizeLods[r],U=3*C*(r>v-Dn?r-v+Dn:0),R=4*(this._cubeSize-C);$r(t,U,R,3*C,2*C),l.setRenderTarget(t),l.render(d,ya)}};function Hh(i){let e=[],t=[],n=[],r=i,o=i-Dn+1+$u.length;for(let s=0;s<o;s++){let a=Math.pow(2,r);t.push(a);let l=1/a;s>i-Dn?l=$u[s-i+Dn-1]:s===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,m=[h,h,d,h,d,d,h,h,d,d,h,d],g=6,p=6,_=3,f=2,u=1,T=new Float32Array(_*p*g),v=new Float32Array(f*p*g),C=new Float32Array(u*p*g);for(let R=0;R<g;R++){let b=R%3*2/3-1,j=R>2?0:-1,M=[b,j,0,b+2/3,j,0,b+2/3,j+1,0,b,j,0,b+2/3,j+1,0,b,j+1,0];T.set(M,_*p*R),v.set(m,f*p*R);let y=[R,R,R,R,R,R];C.set(y,u*p*R)}let U=new ct;U.setAttribute("position",new ze(T,_)),U.setAttribute("uv",new ze(v,f)),U.setAttribute("faceIndex",new ze(C,u)),e.push(U),r>Dn&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function nf(i,e,t){let n=new bt(i,e,t);return n.texture.mapping=wi,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $r(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Vh(i,e,t){let n=new Float32Array(Ki),r=new H(0,1,0);return new ut({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:Xt,depthTest:!1,depthWrite:!1})}function rf(){return new ut({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:Xt,depthTest:!1,depthWrite:!1})}function of(){return new ut({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xt,depthTest:!1,depthWrite:!1})}function Aa(){return`

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
	`}function af(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===kn||l===Wn,h=l===$t||l===li;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new tr(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{let d=a.image;if(c&&d&&d.height>0||h&&d&&r(d)){t===null&&(t=new tr(i));let m=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,m),a.addEventListener("dispose",o),m.texture}else return null}}}return a}function r(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function o(a){let l=a.target;l.removeEventListener("dispose",o);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function sf(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function lf(i,e,t,n){let r={},o=new WeakMap;function s(d){let m=d.target;m.index!==null&&e.remove(m.index);for(let p in m.attributes)e.remove(m.attributes[p]);for(let p in m.morphAttributes){let _=m.morphAttributes[p];for(let f=0,u=_.length;f<u;f++)e.remove(_[f])}m.removeEventListener("dispose",s),delete r[m.id];let g=o.get(m);g&&(e.remove(g),o.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function a(d,m){return r[m.id]===!0||(m.addEventListener("dispose",s),r[m.id]=!0,t.memory.geometries++),m}function l(d){let m=d.attributes;for(let p in m)e.update(m[p],i.ARRAY_BUFFER);let g=d.morphAttributes;for(let p in g){let _=g[p];for(let f=0,u=_.length;f<u;f++)e.update(_[f],i.ARRAY_BUFFER)}}function c(d){let m=[],g=d.index,p=d.attributes.position,_=0;if(g!==null){let T=g.array;_=g.version;for(let v=0,C=T.length;v<C;v+=3){let U=T[v+0],R=T[v+1],b=T[v+2];m.push(U,R,R,b,b,U)}}else if(p!==void 0){let T=p.array;_=p.version;for(let v=0,C=T.length/3-1;v<C;v+=3){let U=v+0,R=v+1,b=v+2;m.push(U,R,R,b,b,U)}}else return;let f=new(Nr(m)?hn:fn)(m,1);f.version=_;let u=o.get(d);u&&e.remove(u),o.set(d,f)}function h(d){let m=o.get(d);if(m){let g=d.index;g!==null&&m.version<g.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function cf(i,e,t,n){let r=n.isWebGL2,o;function s(g){o=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function h(g,p){i.drawElements(o,p,a,g*l),t.update(p,o,1)}function d(g,p,_){if(_===0)return;let f,u;if(r)f=i,u="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[u](o,p,a,g*l,_),t.update(p,o,_)}function m(g,p,_){if(_===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let u=0;u<_;u++)this.render(g[u]/l,p[u]);else{f.multiDrawElementsWEBGL(o,p,0,a,g,0,_);let u=0;for(let T=0;T<_;T++)u+=p[T];t.update(u,o,1)}}this.setMode=s,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=m}function uf(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,s,a){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=a*(o/3);break;case i.LINES:t.lines+=a*(o/2);break;case i.LINE_STRIP:t.lines+=a*(o-1);break;case i.LINE_LOOP:t.lines+=a*o;break;case i.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}var Un=class extends Tt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=st,this.minFilter=st,this.wrapR=Ut,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};function kh(i,e){return i[0]-e[0]}function Wh(i,e){return Math.abs(e[1])-Math.abs(i[1])}function ff(i,e,t){let n={},r=new Float32Array(8),o=new WeakMap,s=new nt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){let m=c.morphTargetInfluences;if(e.isWebGL2===!0){let g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=g!==void 0?g.length:0,_=o.get(h);if(_===void 0||_.count!==p){let w=function(){G.dispose(),o.delete(h),h.removeEventListener("dispose",w)};_!==void 0&&_.texture.dispose();let T=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,U=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],b=h.morphAttributes.color||[],j=0;T===!0&&(j=1),v===!0&&(j=2),C===!0&&(j=3);let M=h.attributes.position.count*j,y=1;M>e.maxTextureSize&&(y=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let D=new Float32Array(M*y*4*p),G=new Un(D,M,y,p);G.type=Ht,G.needsUpdate=!0;let Y=j*4;for(let N=0;N<p;N++){let V=U[N],A=R[N],k=b[N],K=M*y*4*N;for(let $=0;$<V.count;$++){let O=$*Y;T===!0&&(s.fromBufferAttribute(V,$),D[K+O+0]=s.x,D[K+O+1]=s.y,D[K+O+2]=s.z,D[K+O+3]=0),v===!0&&(s.fromBufferAttribute(A,$),D[K+O+4]=s.x,D[K+O+5]=s.y,D[K+O+6]=s.z,D[K+O+7]=0),C===!0&&(s.fromBufferAttribute(k,$),D[K+O+8]=s.x,D[K+O+9]=s.y,D[K+O+10]=s.z,D[K+O+11]=k.itemSize===4?s.w:1)}}_={count:p,texture:G,size:new Ge(M,y)},o.set(h,_),h.addEventListener("dispose",w)}let f=0;for(let T=0;T<m.length;T++)f+=m[T];let u=h.morphTargetsRelative?1:1-f;d.getUniforms().setValue(i,"morphTargetBaseInfluence",u),d.getUniforms().setValue(i,"morphTargetInfluences",m),d.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{let g=m===void 0?0:m.length,p=n[h.id];if(p===void 0||p.length!==g){p=[];for(let v=0;v<g;v++)p[v]=[v,0];n[h.id]=p}for(let v=0;v<g;v++){let C=p[v];C[0]=v,C[1]=m[v]}p.sort(Wh);for(let v=0;v<8;v++)v<g&&p[v][1]?(a[v][0]=p[v][0],a[v][1]=p[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(kh);let _=h.morphAttributes.position,f=h.morphAttributes.normal,u=0;for(let v=0;v<8;v++){let C=a[v],U=C[0],R=C[1];U!==Number.MAX_SAFE_INTEGER&&R?(_&&h.getAttribute("morphTarget"+v)!==_[U]&&h.setAttribute("morphTarget"+v,_[U]),f&&h.getAttribute("morphNormal"+v)!==f[U]&&h.setAttribute("morphNormal"+v,f[U]),r[v]=R,u+=R):(_&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),f&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),r[v]=0)}let T=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(i,"morphTargetBaseInfluence",T),d.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function hf(i,e,t,n){let r=new WeakMap;function o(l){let c=n.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let m=l.skeleton;r.get(m)!==c&&(m.update(),r.set(m,c))}return d}function s(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:s}}var eo=class extends Tt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=st,this.minFilter=st,this.wrapR=Ut,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var In=class extends Tt{constructor(e,t,n,r,o,s,a,l,c,h){if(h=h!==void 0?h:ei,h!==ei&&h!==ci)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ei&&(n=zt),n===void 0&&h===ci&&(n=Yt),super(null,r,o,s,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:st,this.minFilter=l!==void 0?l:st,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var vf=new Tt,Mf=new In(1,1);Mf.compareFunction=Sr;var Sf=new Un,yf=new eo,Ef=new Ln,df=[],pf=[],mf=new Float32Array(16),gf=new Float32Array(9),_f=new Float32Array(4);function Nn(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,o=df[r];if(o===void 0&&(o=new Float32Array(r),df[r]=o),e!==0){n.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,i[s].toArray(o,a)}return o}function dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function to(i,e){let t=pf[e];t===void 0&&(t=new Int32Array(e),pf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Xh(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function qh(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2fv(this.addr,e),pt(t,e)}}function Yh(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;i.uniform3fv(this.addr,e),pt(t,e)}}function Zh(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4fv(this.addr,e),pt(t,e)}}function Kh(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;_f.set(n),i.uniformMatrix2fv(this.addr,!1,_f),pt(t,n)}}function jh(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;gf.set(n),i.uniformMatrix3fv(this.addr,!1,gf),pt(t,n)}}function Jh(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;mf.set(n),i.uniformMatrix4fv(this.addr,!1,mf),pt(t,n)}}function Qh(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $h(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2iv(this.addr,e),pt(t,e)}}function ed(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3iv(this.addr,e),pt(t,e)}}function td(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4iv(this.addr,e),pt(t,e)}}function id(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function nd(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2uiv(this.addr,e),pt(t,e)}}function rd(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3uiv(this.addr,e),pt(t,e)}}function od(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4uiv(this.addr,e),pt(t,e)}}function ad(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o=this.type===i.SAMPLER_2D_SHADOW?Mf:vf;t.setTexture2D(e||o,r)}function sd(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||yf,r)}function ld(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Ef,r)}function cd(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Sf,r)}function ud(i){switch(i){case 5126:return Xh;case 35664:return qh;case 35665:return Yh;case 35666:return Zh;case 35674:return Kh;case 35675:return jh;case 35676:return Jh;case 5124:case 35670:return Qh;case 35667:case 35671:return $h;case 35668:case 35672:return ed;case 35669:case 35673:return td;case 5125:return id;case 36294:return nd;case 36295:return rd;case 36296:return od;case 35678:case 36198:case 36298:case 36306:case 35682:return ad;case 35679:case 36299:case 36307:return sd;case 35680:case 36300:case 36308:case 36293:return ld;case 36289:case 36303:case 36311:case 36292:return cd}}function fd(i,e){i.uniform1fv(this.addr,e)}function hd(i,e){let t=Nn(e,this.size,2);i.uniform2fv(this.addr,t)}function dd(i,e){let t=Nn(e,this.size,3);i.uniform3fv(this.addr,t)}function pd(i,e){let t=Nn(e,this.size,4);i.uniform4fv(this.addr,t)}function md(i,e){let t=Nn(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function gd(i,e){let t=Nn(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function _d(i,e){let t=Nn(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function xd(i,e){i.uniform1iv(this.addr,e)}function vd(i,e){i.uniform2iv(this.addr,e)}function Md(i,e){i.uniform3iv(this.addr,e)}function Sd(i,e){i.uniform4iv(this.addr,e)}function yd(i,e){i.uniform1uiv(this.addr,e)}function Ed(i,e){i.uniform2uiv(this.addr,e)}function Td(i,e){i.uniform3uiv(this.addr,e)}function bd(i,e){i.uniform4uiv(this.addr,e)}function Ad(i,e,t){let n=this.cache,r=e.length,o=to(t,r);dt(n,o)||(i.uniform1iv(this.addr,o),pt(n,o));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||vf,o[s])}function wd(i,e,t){let n=this.cache,r=e.length,o=to(t,r);dt(n,o)||(i.uniform1iv(this.addr,o),pt(n,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||yf,o[s])}function Rd(i,e,t){let n=this.cache,r=e.length,o=to(t,r);dt(n,o)||(i.uniform1iv(this.addr,o),pt(n,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Ef,o[s])}function Cd(i,e,t){let n=this.cache,r=e.length,o=to(t,r);dt(n,o)||(i.uniform1iv(this.addr,o),pt(n,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Sf,o[s])}function Ld(i){switch(i){case 5126:return fd;case 35664:return hd;case 35665:return dd;case 35666:return pd;case 35674:return md;case 35675:return gd;case 35676:return _d;case 5124:case 35670:return xd;case 35667:case 35671:return vd;case 35668:case 35672:return Md;case 35669:case 35673:return Sd;case 5125:return yd;case 36294:return Ed;case 36295:return Td;case 36296:return bd;case 35678:case 36198:case 36298:case 36306:case 35682:return Ad;case 35679:case 36299:case 36307:return wd;case 35680:case 36300:case 36308:case 36293:return Rd;case 36289:case 36303:case 36311:case 36292:return Cd}}var Ra=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ud(t.type)}},Ca=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ld(t.type)}},La=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let o=0,s=r.length;o!==s;++o){let a=r[o];a.setValue(e,t[a.id],n)}}},wa=/(\w+)(\])?(\[|\.)?/g;function xf(i,e){i.seq.push(e),i.map[e.id]=e}function Pd(i,e,t){let n=i.name,r=n.length;for(wa.lastIndex=0;;){let o=wa.exec(n),s=wa.lastIndex,a=o[1],l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){xf(t,c===void 0?new Ra(a,i,e):new Ca(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new La(a),xf(t,d)),t=d}}}var Fi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let o=e.getActiveUniform(t,r),s=e.getUniformLocation(t,o.name);Pd(o,s,this)}}setValue(e,t,n,r){let o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,s=t.length;o!==s;++o){let a=t[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,o=e.length;r!==o;++r){let s=e[r];s.id in t&&n.push(s)}return n}};function Pa(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Dd=37297,Ud=0;function Id(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){let a=s+1;n.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return n.join(`
`)}function Nd(i){let e=ke.getPrimaries(ke.workingColorSpace),t=ke.getPrimaries(i),n;switch(e===t?n="":e===rn&&t===nn?n="LinearDisplayP3ToLinearSRGB":e===nn&&t===rn&&(n="LinearSRGBToLinearDisplayP3"),i){case yt:case Gi:return[n,"LinearTransferOETF"];case et:case en:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Tf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let s=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Id(i.getShaderSource(e),s)}else return r}function Fd(i,e){let t=Nd(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Od(i,e){let t;switch(e){case xs:t="Linear";break;case vs:t="Reinhard";break;case Ms:t="OptimizedCineon";break;case Ss:t="ACESFilmic";break;case Es:t="AgX";break;case ys:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Bd(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Fn).join(`
`)}function Gd(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Fn).join(`
`)}function zd(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Hd(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let o=i.getActiveAttrib(e,r),s=o.name,a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:i.getAttribLocation(e,s),locationSize:a}}return t}function Fn(i){return i!==""}function bf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Af(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Vd=/^[ \t]*#include +<([\w\d./]+)>/gm;function Da(i){return i.replace(Vd,Wd)}var kd=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Wd(i,e){let t=Ue[e];if(t===void 0){let n=kd.get(e);if(n!==void 0)t=Ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Da(t)}var Xd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wf(i){return i.replace(Xd,qd)}function qd(i,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Rf(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Yd(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===or?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===qa?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Qt&&(e="SHADOWMAP_TYPE_VSM"),e}function Zd(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case $t:case li:e="ENVMAP_TYPE_CUBE";break;case wi:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Kd(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case li:e="ENVMAP_MODE_REFRACTION";break}return e}function jd(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ar:e="ENVMAP_BLENDING_MULTIPLY";break;case gs:e="ENVMAP_BLENDING_MIX";break;case _s:e="ENVMAP_BLENDING_ADD";break}return e}function Jd(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Cf(i,e,t,n){let r=i.getContext(),o=t.defines,s=t.vertexShader,a=t.fragmentShader,l=Yd(t),c=Zd(t),h=Kd(t),d=jd(t),m=Jd(t),g=t.isWebGL2?"":Bd(t),p=Gd(t),_=zd(o),f=r.createProgram(),u,T,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Fn).join(`
`),u.length>0&&(u+=`
`),T=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Fn).join(`
`),T.length>0&&(T+=`
`)):(u=[Rf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fn).join(`
`),T=[g,Rf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qt?"#define TONE_MAPPING":"",t.toneMapping!==qt?Ue.tonemapping_pars_fragment:"",t.toneMapping!==qt?Od("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,Fd("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fn).join(`
`)),s=Da(s),s=bf(s,t),s=Af(s,t),a=Da(a),a=bf(a,t),a=Af(a,t),s=wf(s),a=wf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[p,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,T=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ra?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ra?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+T);let C=v+u+s,U=v+T+a,R=Pa(r,r.VERTEX_SHADER,C),b=Pa(r,r.FRAGMENT_SHADER,U);r.attachShader(f,R),r.attachShader(f,b),t.index0AttributeName!==void 0?r.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(f,0,"position"),r.linkProgram(f);function j(G){if(i.debug.checkShaderErrors){let Y=r.getProgramInfoLog(f).trim(),w=r.getShaderInfoLog(R).trim(),N=r.getShaderInfoLog(b).trim(),V=!0,A=!0;if(r.getProgramParameter(f,r.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,f,R,b);else{let k=Tf(r,R,"vertex"),K=Tf(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(f,r.VALIDATE_STATUS)+`

Program Info Log: `+Y+`
`+k+`
`+K)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(w===""||N==="")&&(A=!1);A&&(G.diagnostics={runnable:V,programLog:Y,vertexShader:{log:w,prefix:u},fragmentShader:{log:N,prefix:T}})}r.deleteShader(R),r.deleteShader(b),M=new Fi(r,f),y=Hd(r,f)}let M;this.getUniforms=function(){return M===void 0&&j(this),M};let y;this.getAttributes=function(){return y===void 0&&j(this),y};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(f,Dd)),D},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ud++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=R,this.fragmentShader=b,this}var Qd=0,io=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ua(e),t.set(e,n)),n}},Ua=class{constructor(e){this.id=Qd++,this.code=e,this.usedTimes=0}};function Lf(i,e,t,n,r,o,s){let a=new dn,l=new io,c=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,m=r.vertexTextures,g=r.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function f(M,y,D,G,Y){let w=G.fog,N=Y.geometry,V=M.isMeshStandardMaterial?G.environment:null,A=(M.isMeshStandardMaterial?t:e).get(M.envMap||V),k=A&&A.mapping===wi?A.image.height:null,K=p[M.type];M.precision!==null&&(g=r.getMaxPrecision(M.precision),g!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));let $=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,O=$!==void 0?$.length:0,Q=0;N.morphAttributes.position!==void 0&&(Q=1),N.morphAttributes.normal!==void 0&&(Q=2),N.morphAttributes.color!==void 0&&(Q=3);let F,z,J,ee;if(K){let Pt=Jt[K];F=Pt.vertexShader,z=Pt.fragmentShader}else F=M.vertexShader,z=M.fragmentShader,l.update(M),J=l.getVertexShaderID(M),ee=l.getFragmentShaderID(M);let ae=i.getRenderTarget(),de=Y.isInstancedMesh===!0,ye=Y.isBatchedMesh===!0,I=!!M.map,te=!!M.matcap,L=!!A,ge=!!M.aoMap,he=!!M.lightMap,_e=!!M.bumpMap,le=!!M.normalMap,We=!!M.displacementMap,Le=!!M.emissiveMap,E=!!M.metalnessMap,x=!!M.roughnessMap,W=M.anisotropy>0,ne=M.clearcoat>0,ie=M.iridescence>0,oe=M.sheen>0,Me=M.transmission>0,pe=W&&!!M.anisotropyMap,xe=ne&&!!M.clearcoatMap,Ae=ne&&!!M.clearcoatNormalMap,Oe=ne&&!!M.clearcoatRoughnessMap,re=ie&&!!M.iridescenceMap,Ze=ie&&!!M.iridescenceThicknessMap,Xe=oe&&!!M.sheenColorMap,Pe=oe&&!!M.sheenRoughnessMap,Ee=!!M.specularMap,ve=!!M.specularColorMap,Fe=!!M.specularIntensityMap,Ye=Me&&!!M.transmissionMap,rt=Me&&!!M.thicknessMap,He=!!M.gradientMap,ce=!!M.alphaMap,P=M.alphaTest>0,ue=!!M.alphaHash,fe=!!M.extensions,we=!!N.attributes.uv1,Te=!!N.attributes.uv2,je=!!N.attributes.uv3,Je=qt;return M.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Je=i.toneMapping),{isWebGL2:h,shaderID:K,shaderType:M.type,shaderName:M.name,vertexShader:F,fragmentShader:z,defines:M.defines,customVertexShaderID:J,customFragmentShaderID:ee,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,batching:ye,instancing:de,instancingColor:de&&Y.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:yt,map:I,matcap:te,envMap:L,envMapMode:L&&A.mapping,envMapCubeUVHeight:k,aoMap:ge,lightMap:he,bumpMap:_e,normalMap:le,displacementMap:m&&We,emissiveMap:Le,normalMapObjectSpace:le&&M.normalMapType===Fs,normalMapTangentSpace:le&&M.normalMapType===Ns,metalnessMap:E,roughnessMap:x,anisotropy:W,anisotropyMap:pe,clearcoat:ne,clearcoatMap:xe,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Oe,iridescence:ie,iridescenceMap:re,iridescenceThicknessMap:Ze,sheen:oe,sheenColorMap:Xe,sheenRoughnessMap:Pe,specularMap:Ee,specularColorMap:ve,specularIntensityMap:Fe,transmission:Me,transmissionMap:Ye,thicknessMap:rt,gradientMap:He,opaque:M.transparent===!1&&M.blending===gi,alphaMap:ce,alphaTest:P,alphaHash:ue,combine:M.combine,mapUv:I&&_(M.map.channel),aoMapUv:ge&&_(M.aoMap.channel),lightMapUv:he&&_(M.lightMap.channel),bumpMapUv:_e&&_(M.bumpMap.channel),normalMapUv:le&&_(M.normalMap.channel),displacementMapUv:We&&_(M.displacementMap.channel),emissiveMapUv:Le&&_(M.emissiveMap.channel),metalnessMapUv:E&&_(M.metalnessMap.channel),roughnessMapUv:x&&_(M.roughnessMap.channel),anisotropyMapUv:pe&&_(M.anisotropyMap.channel),clearcoatMapUv:xe&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&_(M.sheenRoughnessMap.channel),specularMapUv:Ee&&_(M.specularMap.channel),specularColorMapUv:ve&&_(M.specularColorMap.channel),specularIntensityMapUv:Fe&&_(M.specularIntensityMap.channel),transmissionMapUv:Ye&&_(M.transmissionMap.channel),thicknessMapUv:rt&&_(M.thicknessMap.channel),alphaMapUv:ce&&_(M.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(le||W),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:we,vertexUv2s:Te,vertexUv3s:je,pointsUvs:Y.isPoints===!0&&!!N.attributes.uv&&(I||ce),fog:!!w,useFog:M.fog===!0,fogExp2:w&&w.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:Y.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:Q,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Je,useLegacyLights:i._useLegacyLights,decodeVideoTexture:I&&M.map.isVideoTexture===!0&&ke.getTransfer(M.map.colorSpace)===qe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===vt,flipSided:M.side===it,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:fe&&M.extensions.derivatives===!0,extensionFragDepth:fe&&M.extensions.fragDepth===!0,extensionDrawBuffers:fe&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:fe&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:fe&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){let y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(let D in M.defines)y.push(D),y.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(T(y,M),v(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function T(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function v(M,y){a.disableAll(),y.isWebGL2&&a.enable(0),y.supportsVertexTextures&&a.enable(1),y.instancing&&a.enable(2),y.instancingColor&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.useLegacyLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function C(M){let y=p[M.type],D;if(y){let G=Jt[y];D=ol.clone(G.uniforms)}else D=M.uniforms;return D}function U(M,y){let D;for(let G=0,Y=c.length;G<Y;G++){let w=c[G];if(w.cacheKey===y){D=w,++D.usedTimes;break}}return D===void 0&&(D=new Cf(i,y,M,o),c.push(D)),D}function R(M){if(--M.usedTimes===0){let y=c.indexOf(M);c[y]=c[c.length-1],c.pop(),M.destroy()}}function b(M){l.remove(M)}function j(){l.dispose()}return{getParameters:f,getProgramCacheKey:u,getUniforms:C,acquireProgram:U,releaseProgram:R,releaseShaderCache:b,programs:c,dispose:j}}function Pf(){let i=new WeakMap;function e(o){let s=i.get(o);return s===void 0&&(s={},i.set(o,s)),s}function t(o){i.delete(o)}function n(o,s,a){i.get(o)[s]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function $d(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Df(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Uf(){let i=[],e=0,t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function s(d,m,g,p,_,f){let u=i[e];return u===void 0?(u={id:d.id,object:d,geometry:m,material:g,groupOrder:p,renderOrder:d.renderOrder,z:_,group:f},i[e]=u):(u.id=d.id,u.object=d,u.geometry=m,u.material=g,u.groupOrder=p,u.renderOrder=d.renderOrder,u.z=_,u.group=f),e++,u}function a(d,m,g,p,_,f){let u=s(d,m,g,p,_,f);g.transmission>0?n.push(u):g.transparent===!0?r.push(u):t.push(u)}function l(d,m,g,p,_,f){let u=s(d,m,g,p,_,f);g.transmission>0?n.unshift(u):g.transparent===!0?r.unshift(u):t.unshift(u)}function c(d,m){t.length>1&&t.sort(d||$d),n.length>1&&n.sort(m||Df),r.length>1&&r.sort(m||Df)}function h(){for(let d=e,m=i.length;d<m;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:a,unshift:l,finish:h,sort:c}}function If(){let i=new WeakMap;function e(n,r){let o=i.get(n),s;return o===void 0?(s=new Uf,i.set(n,[s])):r>=o.length?(s=new Uf,o.push(s)):s=o[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function ep(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Ne};break;case"SpotLight":t={position:new H,direction:new H,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function tp(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var ip=0;function np(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Nf(i,e){let t=new ep,n=tp(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new H);let o=new H,s=new $e,a=new $e;function l(h,d){let m=0,g=0,p=0;for(let G=0;G<9;G++)r.probe[G].set(0,0,0);let _=0,f=0,u=0,T=0,v=0,C=0,U=0,R=0,b=0,j=0,M=0;h.sort(np);let y=d===!0?Math.PI:1;for(let G=0,Y=h.length;G<Y;G++){let w=h[G],N=w.color,V=w.intensity,A=w.distance,k=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)m+=N.r*V*y,g+=N.g*V*y,p+=N.b*V*y;else if(w.isLightProbe){for(let K=0;K<9;K++)r.probe[K].addScaledVector(w.sh.coefficients[K],V);M++}else if(w.isDirectionalLight){let K=t.get(w);if(K.color.copy(w.color).multiplyScalar(w.intensity*y),w.castShadow){let $=w.shadow,O=n.get(w);O.shadowBias=$.bias,O.shadowNormalBias=$.normalBias,O.shadowRadius=$.radius,O.shadowMapSize=$.mapSize,r.directionalShadow[_]=O,r.directionalShadowMap[_]=k,r.directionalShadowMatrix[_]=w.shadow.matrix,C++}r.directional[_]=K,_++}else if(w.isSpotLight){let K=t.get(w);K.position.setFromMatrixPosition(w.matrixWorld),K.color.copy(N).multiplyScalar(V*y),K.distance=A,K.coneCos=Math.cos(w.angle),K.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),K.decay=w.decay,r.spot[u]=K;let $=w.shadow;if(w.map&&(r.spotLightMap[b]=w.map,b++,$.updateMatrices(w),w.castShadow&&j++),r.spotLightMatrix[u]=$.matrix,w.castShadow){let O=n.get(w);O.shadowBias=$.bias,O.shadowNormalBias=$.normalBias,O.shadowRadius=$.radius,O.shadowMapSize=$.mapSize,r.spotShadow[u]=O,r.spotShadowMap[u]=k,R++}u++}else if(w.isRectAreaLight){let K=t.get(w);K.color.copy(N).multiplyScalar(V),K.halfWidth.set(w.width*.5,0,0),K.halfHeight.set(0,w.height*.5,0),r.rectArea[T]=K,T++}else if(w.isPointLight){let K=t.get(w);if(K.color.copy(w.color).multiplyScalar(w.intensity*y),K.distance=w.distance,K.decay=w.decay,w.castShadow){let $=w.shadow,O=n.get(w);O.shadowBias=$.bias,O.shadowNormalBias=$.normalBias,O.shadowRadius=$.radius,O.shadowMapSize=$.mapSize,O.shadowCameraNear=$.camera.near,O.shadowCameraFar=$.camera.far,r.pointShadow[f]=O,r.pointShadowMap[f]=k,r.pointShadowMatrix[f]=w.shadow.matrix,U++}r.point[f]=K,f++}else if(w.isHemisphereLight){let K=t.get(w);K.skyColor.copy(w.color).multiplyScalar(V*y),K.groundColor.copy(w.groundColor).multiplyScalar(V*y),r.hemi[v]=K,v++}}T>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=m,r.ambient[1]=g,r.ambient[2]=p;let D=r.hash;(D.directionalLength!==_||D.pointLength!==f||D.spotLength!==u||D.rectAreaLength!==T||D.hemiLength!==v||D.numDirectionalShadows!==C||D.numPointShadows!==U||D.numSpotShadows!==R||D.numSpotMaps!==b||D.numLightProbes!==M)&&(r.directional.length=_,r.spot.length=u,r.rectArea.length=T,r.point.length=f,r.hemi.length=v,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=R+b-j,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=j,r.numLightProbes=M,D.directionalLength=_,D.pointLength=f,D.spotLength=u,D.rectAreaLength=T,D.hemiLength=v,D.numDirectionalShadows=C,D.numPointShadows=U,D.numSpotShadows=R,D.numSpotMaps=b,D.numLightProbes=M,r.version=ip++)}function c(h,d){let m=0,g=0,p=0,_=0,f=0,u=d.matrixWorldInverse;for(let T=0,v=h.length;T<v;T++){let C=h[T];if(C.isDirectionalLight){let U=r.directional[m];U.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(u),m++}else if(C.isSpotLight){let U=r.spot[p];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(u),U.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(u),p++}else if(C.isRectAreaLight){let U=r.rectArea[_];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(u),a.identity(),s.copy(C.matrixWorld),s.premultiply(u),a.extractRotation(s),U.halfWidth.set(C.width*.5,0,0),U.halfHeight.set(0,C.height*.5,0),U.halfWidth.applyMatrix4(a),U.halfHeight.applyMatrix4(a),_++}else if(C.isPointLight){let U=r.point[g];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(u),g++}else if(C.isHemisphereLight){let U=r.hemi[f];U.direction.setFromMatrixPosition(C.matrixWorld),U.direction.transformDirection(u),f++}}}return{setup:l,setupView:c,state:r}}function Ff(i,e){let t=new Nf(i,e),n=[],r=[];function o(){n.length=0,r.length=0}function s(d){n.push(d)}function a(d){r.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:o,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:a}}function Of(i,e){let t=new WeakMap;function n(o,s=0){let a=t.get(o),l;return a===void 0?(l=new Ff(i,e),t.set(o,[l])):s>=a.length?(l=new Ff(i,e),a.push(l)):l=a[s],l}function r(){t=new WeakMap}return{get:n,dispose:r}}var no=class extends jt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Us,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};var ro=class extends jt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var Bf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,Gf=`
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
`;function zf(i,e,t){let n=new cn,r=new Ge,o=new Ge,s=new nt,a=new no({depthPacking:Is}),l=new ro,c={},h=t.maxTextureSize,d={[Bt]:it,[it]:Bt,[vt]:vt},m=new ut({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:Bf,fragmentShader:Gf}),g=m.clone();g.defines.HORIZONTAL_PASS=1;let p=new ct;p.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Et(p,m),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=or;let u=this.type;this.render=function(R,b,j){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||R.length===0)return;let M=i.getRenderTarget(),y=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Xt),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let Y=u!==Qt&&this.type===Qt,w=u===Qt&&this.type!==Qt;for(let N=0,V=R.length;N<V;N++){let A=R[N],k=A.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",A,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);let K=k.getFrameExtents();if(r.multiply(K),o.copy(k.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(o.x=Math.floor(h/K.x),r.x=o.x*K.x,k.mapSize.x=o.x),r.y>h&&(o.y=Math.floor(h/K.y),r.y=o.y*K.y,k.mapSize.y=o.y)),k.map===null||Y===!0||w===!0){let O=this.type!==Qt?{minFilter:st,magFilter:st}:{};k.map!==null&&k.map.dispose(),k.map=new bt(r.x,r.y,O),k.map.texture.name=A.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();let $=k.getViewportCount();for(let O=0;O<$;O++){let Q=k.getViewport(O);s.set(o.x*Q.x,o.y*Q.y,o.x*Q.z,o.y*Q.w),G.viewport(s),k.updateMatrices(A,O),n=k.getFrustum(),C(b,j,k.camera,A,this.type)}k.isPointLightShadow!==!0&&this.type===Qt&&T(k,j),k.needsUpdate=!1}u=this.type,f.needsUpdate=!1,i.setRenderTarget(M,y,D)};function T(R,b){let j=e.update(_);m.defines.VSM_SAMPLES!==R.blurSamples&&(m.defines.VSM_SAMPLES=R.blurSamples,g.defines.VSM_SAMPLES=R.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new bt(r.x,r.y)),m.uniforms.shadow_pass.value=R.map.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(b,null,j,m,_,null),g.uniforms.shadow_pass.value=R.mapPass.texture,g.uniforms.resolution.value=R.mapSize,g.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(b,null,j,g,_,null)}function v(R,b,j,M){let y=null,D=j.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)y=D;else if(y=j.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let G=y.uuid,Y=b.uuid,w=c[G];w===void 0&&(w={},c[G]=w);let N=w[Y];N===void 0&&(N=y.clone(),w[Y]=N,b.addEventListener("dispose",U)),y=N}if(y.visible=b.visible,y.wireframe=b.wireframe,M===Qt?y.side=b.shadowSide!==null?b.shadowSide:b.side:y.side=b.shadowSide!==null?b.shadowSide:d[b.side],y.alphaMap=b.alphaMap,y.alphaTest=b.alphaTest,y.map=b.map,y.clipShadows=b.clipShadows,y.clippingPlanes=b.clippingPlanes,y.clipIntersection=b.clipIntersection,y.displacementMap=b.displacementMap,y.displacementScale=b.displacementScale,y.displacementBias=b.displacementBias,y.wireframeLinewidth=b.wireframeLinewidth,y.linewidth=b.linewidth,j.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let G=i.properties.get(y);G.light=j}return y}function C(R,b,j,M,y){if(R.visible===!1)return;if(R.layers.test(b.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===Qt)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,R.matrixWorld);let Y=e.update(R),w=R.material;if(Array.isArray(w)){let N=Y.groups;for(let V=0,A=N.length;V<A;V++){let k=N[V],K=w[k.materialIndex];if(K&&K.visible){let $=v(R,K,M,y);R.onBeforeShadow(i,R,b,j,Y,$,k),i.renderBufferDirect(j,null,Y,$,R,k),R.onAfterShadow(i,R,b,j,Y,$,k)}}}else if(w.visible){let N=v(R,w,M,y);R.onBeforeShadow(i,R,b,j,Y,N,null),i.renderBufferDirect(j,null,Y,N,R,null),R.onAfterShadow(i,R,b,j,Y,N,null)}}let G=R.children;for(let Y=0,w=G.length;Y<w;Y++)C(G[Y],b,j,M,y)}function U(R){R.target.removeEventListener("dispose",U);for(let j in c){let M=c[j],y=R.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}function Hf(i,e,t){let n=t.isWebGL2;function r(){let P=!1,ue=new nt,fe=null,we=new nt(0,0,0,0);return{setMask:function(Te){fe!==Te&&!P&&(i.colorMask(Te,Te,Te,Te),fe=Te)},setLocked:function(Te){P=Te},setClear:function(Te,je,Je,mt,Pt){Pt===!0&&(Te*=mt,je*=mt,Je*=mt),ue.set(Te,je,Je,mt),we.equals(ue)===!1&&(i.clearColor(Te,je,Je,mt),we.copy(ue))},reset:function(){P=!1,fe=null,we.set(-1,0,0,0)}}}function o(){let P=!1,ue=null,fe=null,we=null;return{setTest:function(Te){Te?ye(i.DEPTH_TEST):I(i.DEPTH_TEST)},setMask:function(Te){ue!==Te&&!P&&(i.depthMask(Te),ue=Te)},setFunc:function(Te){if(fe!==Te){switch(Te){case cs:i.depthFunc(i.NEVER);break;case us:i.depthFunc(i.ALWAYS);break;case fs:i.depthFunc(i.LESS);break;case Qi:i.depthFunc(i.LEQUAL);break;case hs:i.depthFunc(i.EQUAL);break;case ds:i.depthFunc(i.GEQUAL);break;case ps:i.depthFunc(i.GREATER);break;case ms:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=Te}},setLocked:function(Te){P=Te},setClear:function(Te){we!==Te&&(i.clearDepth(Te),we=Te)},reset:function(){P=!1,ue=null,fe=null,we=null}}}function s(){let P=!1,ue=null,fe=null,we=null,Te=null,je=null,Je=null,mt=null,Pt=null;return{setTest:function(Qe){P||(Qe?ye(i.STENCIL_TEST):I(i.STENCIL_TEST))},setMask:function(Qe){ue!==Qe&&!P&&(i.stencilMask(Qe),ue=Qe)},setFunc:function(Qe,Dt,si){(fe!==Qe||we!==Dt||Te!==si)&&(i.stencilFunc(Qe,Dt,si),fe=Qe,we=Dt,Te=si)},setOp:function(Qe,Dt,si){(je!==Qe||Je!==Dt||mt!==si)&&(i.stencilOp(Qe,Dt,si),je=Qe,Je=Dt,mt=si)},setLocked:function(Qe){P=Qe},setClear:function(Qe){Pt!==Qe&&(i.clearStencil(Qe),Pt=Qe)},reset:function(){P=!1,ue=null,fe=null,we=null,Te=null,je=null,Je=null,mt=null,Pt=null}}}let a=new r,l=new o,c=new s,h=new WeakMap,d=new WeakMap,m={},g={},p=new WeakMap,_=[],f=null,u=!1,T=null,v=null,C=null,U=null,R=null,b=null,j=null,M=new Ne(0,0,0),y=0,D=!1,G=null,Y=null,w=null,N=null,V=null,A=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,K=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec($)[1]),k=K>=1):$.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),k=K>=2);let O=null,Q={},F=i.getParameter(i.SCISSOR_BOX),z=i.getParameter(i.VIEWPORT),J=new nt().fromArray(F),ee=new nt().fromArray(z);function ae(P,ue,fe,we){let Te=new Uint8Array(4),je=i.createTexture();i.bindTexture(P,je),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Je=0;Je<fe;Je++)n&&(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)?i.texImage3D(ue,0,i.RGBA,1,1,we,0,i.RGBA,i.UNSIGNED_BYTE,Te):i.texImage2D(ue+Je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Te);return je}let de={};de[i.TEXTURE_2D]=ae(i.TEXTURE_2D,i.TEXTURE_2D,1),de[i.TEXTURE_CUBE_MAP]=ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(de[i.TEXTURE_2D_ARRAY]=ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),de[i.TEXTURE_3D]=ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ye(i.DEPTH_TEST),l.setFunc(Qi),Le(!1),E(Eo),ye(i.CULL_FACE),le(Xt);function ye(P){m[P]!==!0&&(i.enable(P),m[P]=!0)}function I(P){m[P]!==!1&&(i.disable(P),m[P]=!1)}function te(P,ue){return g[P]!==ue?(i.bindFramebuffer(P,ue),g[P]=ue,n&&(P===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=ue),P===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=ue)),!0):!1}function L(P,ue){let fe=_,we=!1;if(P)if(fe=p.get(ue),fe===void 0&&(fe=[],p.set(ue,fe)),P.isWebGLMultipleRenderTargets){let Te=P.texture;if(fe.length!==Te.length||fe[0]!==i.COLOR_ATTACHMENT0){for(let je=0,Je=Te.length;je<Je;je++)fe[je]=i.COLOR_ATTACHMENT0+je;fe.length=Te.length,we=!0}}else fe[0]!==i.COLOR_ATTACHMENT0&&(fe[0]=i.COLOR_ATTACHMENT0,we=!0);else fe[0]!==i.BACK&&(fe[0]=i.BACK,we=!0);we&&(t.isWebGL2?i.drawBuffers(fe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(fe))}function ge(P){return f!==P?(i.useProgram(P),f=P,!0):!1}let he={[_i]:i.FUNC_ADD,[Za]:i.FUNC_SUBTRACT,[Ka]:i.FUNC_REVERSE_SUBTRACT};if(n)he[wo]=i.MIN,he[Ro]=i.MAX;else{let P=e.get("EXT_blend_minmax");P!==null&&(he[wo]=P.MIN_EXT,he[Ro]=P.MAX_EXT)}let _e={[ja]:i.ZERO,[Ja]:i.ONE,[Qa]:i.SRC_COLOR,[Hn]:i.SRC_ALPHA,[rs]:i.SRC_ALPHA_SATURATE,[is]:i.DST_COLOR,[es]:i.DST_ALPHA,[$a]:i.ONE_MINUS_SRC_COLOR,[Vn]:i.ONE_MINUS_SRC_ALPHA,[ns]:i.ONE_MINUS_DST_COLOR,[ts]:i.ONE_MINUS_DST_ALPHA,[os]:i.CONSTANT_COLOR,[as]:i.ONE_MINUS_CONSTANT_COLOR,[ss]:i.CONSTANT_ALPHA,[ls]:i.ONE_MINUS_CONSTANT_ALPHA};function le(P,ue,fe,we,Te,je,Je,mt,Pt,Qe){if(P===Xt){u===!0&&(I(i.BLEND),u=!1);return}if(u===!1&&(ye(i.BLEND),u=!0),P!==Ya){if(P!==T||Qe!==D){if((v!==_i||R!==_i)&&(i.blendEquation(i.FUNC_ADD),v=_i,R=_i),Qe)switch(P){case gi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case To:i.blendFunc(i.ONE,i.ONE);break;case bo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ao:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case gi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case To:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case bo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ao:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}C=null,U=null,b=null,j=null,M.set(0,0,0),y=0,T=P,D=Qe}return}Te=Te||ue,je=je||fe,Je=Je||we,(ue!==v||Te!==R)&&(i.blendEquationSeparate(he[ue],he[Te]),v=ue,R=Te),(fe!==C||we!==U||je!==b||Je!==j)&&(i.blendFuncSeparate(_e[fe],_e[we],_e[je],_e[Je]),C=fe,U=we,b=je,j=Je),(mt.equals(M)===!1||Pt!==y)&&(i.blendColor(mt.r,mt.g,mt.b,Pt),M.copy(mt),y=Pt),T=P,D=!1}function We(P,ue){P.side===vt?I(i.CULL_FACE):ye(i.CULL_FACE);let fe=P.side===it;ue&&(fe=!fe),Le(fe),P.blending===gi&&P.transparent===!1?le(Xt):le(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);let we=P.stencilWrite;c.setTest(we),we&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),W(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ye(i.SAMPLE_ALPHA_TO_COVERAGE):I(i.SAMPLE_ALPHA_TO_COVERAGE)}function Le(P){G!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),G=P)}function E(P){P!==Wa?(ye(i.CULL_FACE),P!==Y&&(P===Eo?i.cullFace(i.BACK):P===Xa?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):I(i.CULL_FACE),Y=P}function x(P){P!==w&&(k&&i.lineWidth(P),w=P)}function W(P,ue,fe){P?(ye(i.POLYGON_OFFSET_FILL),(N!==ue||V!==fe)&&(i.polygonOffset(ue,fe),N=ue,V=fe)):I(i.POLYGON_OFFSET_FILL)}function ne(P){P?ye(i.SCISSOR_TEST):I(i.SCISSOR_TEST)}function ie(P){P===void 0&&(P=i.TEXTURE0+A-1),O!==P&&(i.activeTexture(P),O=P)}function oe(P,ue,fe){fe===void 0&&(O===null?fe=i.TEXTURE0+A-1:fe=O);let we=Q[fe];we===void 0&&(we={type:void 0,texture:void 0},Q[fe]=we),(we.type!==P||we.texture!==ue)&&(O!==fe&&(i.activeTexture(fe),O=fe),i.bindTexture(P,ue||de[P]),we.type=P,we.texture=ue)}function Me(){let P=Q[O];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function pe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ae(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Oe(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ze(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Xe(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pe(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Fe(P){J.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),J.copy(P))}function Ye(P){ee.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),ee.copy(P))}function rt(P,ue){let fe=d.get(ue);fe===void 0&&(fe=new WeakMap,d.set(ue,fe));let we=fe.get(P);we===void 0&&(we=i.getUniformBlockIndex(ue,P.name),fe.set(P,we))}function He(P,ue){let we=d.get(ue).get(P);h.get(ue)!==we&&(i.uniformBlockBinding(ue,we,P.__bindingPointIndex),h.set(ue,we))}function ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},O=null,Q={},g={},p=new WeakMap,_=[],f=null,u=!1,T=null,v=null,C=null,U=null,R=null,b=null,j=null,M=new Ne(0,0,0),y=0,D=!1,G=null,Y=null,w=null,N=null,V=null,J.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ye,disable:I,bindFramebuffer:te,drawBuffers:L,useProgram:ge,setBlending:le,setMaterial:We,setFlipSided:Le,setCullFace:E,setLineWidth:x,setPolygonOffset:W,setScissorTest:ne,activeTexture:ie,bindTexture:oe,unbindTexture:Me,compressedTexImage2D:pe,compressedTexImage3D:xe,texImage2D:Ee,texImage3D:ve,updateUBOMapping:rt,uniformBlockBinding:He,texStorage2D:Xe,texStorage3D:Pe,texSubImage2D:Ae,texSubImage3D:Oe,compressedTexSubImage2D:re,compressedTexSubImage3D:Ze,scissor:Fe,viewport:Ye,reset:ce}}function Vf(i,e,t,n,r,o,s){let a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,m=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(E,x){return g?new OffscreenCanvas(E,x):mn("canvas")}function _(E,x,W,ne){let ie=1;if((E.width>ne||E.height>ne)&&(ie=ne/Math.max(E.width,E.height)),ie<1||x===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){let oe=x?Kn:Math.floor,Me=oe(ie*E.width),pe=oe(ie*E.height);d===void 0&&(d=p(Me,pe));let xe=W?p(Me,pe):d;return xe.width=Me,xe.height=pe,xe.getContext("2d").drawImage(E,0,0,Me,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+Me+"x"+pe+")."),xe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function f(E){return oa(E.width)&&oa(E.height)}function u(E){return a?!1:E.wrapS!==Ut||E.wrapT!==Ut||E.minFilter!==st&&E.minFilter!==Mt}function T(E,x){return E.generateMipmaps&&x&&E.minFilter!==st&&E.minFilter!==Mt}function v(E){i.generateMipmap(E)}function C(E,x,W,ne,ie=!1){if(a===!1)return x;if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let oe=x;if(x===i.RED&&(W===i.FLOAT&&(oe=i.R32F),W===i.HALF_FLOAT&&(oe=i.R16F),W===i.UNSIGNED_BYTE&&(oe=i.R8)),x===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(oe=i.R8UI),W===i.UNSIGNED_SHORT&&(oe=i.R16UI),W===i.UNSIGNED_INT&&(oe=i.R32UI),W===i.BYTE&&(oe=i.R8I),W===i.SHORT&&(oe=i.R16I),W===i.INT&&(oe=i.R32I)),x===i.RG&&(W===i.FLOAT&&(oe=i.RG32F),W===i.HALF_FLOAT&&(oe=i.RG16F),W===i.UNSIGNED_BYTE&&(oe=i.RG8)),x===i.RGBA){let Me=ie?tn:ke.getTransfer(ne);W===i.FLOAT&&(oe=i.RGBA32F),W===i.HALF_FLOAT&&(oe=i.RGBA16F),W===i.UNSIGNED_BYTE&&(oe=Me===qe?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(oe=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(oe=i.RGB5_A1)}return(oe===i.R16F||oe===i.R32F||oe===i.RG16F||oe===i.RG32F||oe===i.RGBA16F||oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function U(E,x,W){return T(E,W)===!0||E.isFramebufferTexture&&E.minFilter!==st&&E.minFilter!==Mt?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function R(E){return E===st||E===Lo||E===sr?i.NEAREST:i.LINEAR}function b(E){let x=E.target;x.removeEventListener("dispose",b),M(x),x.isVideoTexture&&h.delete(x)}function j(E){let x=E.target;x.removeEventListener("dispose",j),D(x)}function M(E){let x=n.get(E);if(x.__webglInit===void 0)return;let W=E.source,ne=m.get(W);if(ne){let ie=ne[x.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&y(E),Object.keys(ne).length===0&&m.delete(W)}n.remove(E)}function y(E){let x=n.get(E);i.deleteTexture(x.__webglTexture);let W=E.source,ne=m.get(W);delete ne[x.__cacheKey],s.memory.textures--}function D(E){let x=E.texture,W=n.get(E),ne=n.get(x);if(ne.__webglTexture!==void 0&&(i.deleteTexture(ne.__webglTexture),s.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(W.__webglFramebuffer[ie]))for(let oe=0;oe<W.__webglFramebuffer[ie].length;oe++)i.deleteFramebuffer(W.__webglFramebuffer[ie][oe]);else i.deleteFramebuffer(W.__webglFramebuffer[ie]);W.__webglDepthbuffer&&i.deleteRenderbuffer(W.__webglDepthbuffer[ie])}else{if(Array.isArray(W.__webglFramebuffer))for(let ie=0;ie<W.__webglFramebuffer.length;ie++)i.deleteFramebuffer(W.__webglFramebuffer[ie]);else i.deleteFramebuffer(W.__webglFramebuffer);if(W.__webglDepthbuffer&&i.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&i.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let ie=0;ie<W.__webglColorRenderbuffer.length;ie++)W.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(W.__webglColorRenderbuffer[ie]);W.__webglDepthRenderbuffer&&i.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let ie=0,oe=x.length;ie<oe;ie++){let Me=n.get(x[ie]);Me.__webglTexture&&(i.deleteTexture(Me.__webglTexture),s.memory.textures--),n.remove(x[ie])}n.remove(x),n.remove(E)}let G=0;function Y(){G=0}function w(){let E=G;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),G+=1,E}function N(E){let x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function V(E,x){let W=n.get(E);if(E.isVideoTexture&&We(E),E.isRenderTargetTexture===!1&&E.version>0&&W.__version!==E.version){let ne=E.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(W,E,x);return}}t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+x)}function A(E,x){let W=n.get(E);if(E.version>0&&W.__version!==E.version){J(W,E,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+x)}function k(E,x){let W=n.get(E);if(E.version>0&&W.__version!==E.version){J(W,E,x);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+x)}function K(E,x){let W=n.get(E);if(E.version>0&&W.__version!==E.version){ee(W,E,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+x)}let $={[Xn]:i.REPEAT,[Ut]:i.CLAMP_TO_EDGE,[qn]:i.MIRRORED_REPEAT},O={[st]:i.NEAREST,[Lo]:i.NEAREST_MIPMAP_NEAREST,[sr]:i.NEAREST_MIPMAP_LINEAR,[Mt]:i.LINEAR,[Ts]:i.LINEAR_MIPMAP_NEAREST,[xi]:i.LINEAR_MIPMAP_LINEAR},Q={[Os]:i.NEVER,[ks]:i.ALWAYS,[Bs]:i.LESS,[Sr]:i.LEQUAL,[Gs]:i.EQUAL,[Vs]:i.GEQUAL,[zs]:i.GREATER,[Hs]:i.NOTEQUAL};function F(E,x,W){if(W?(i.texParameteri(E,i.TEXTURE_WRAP_S,$[x.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,$[x.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,$[x.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,O[x.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,O[x.minFilter])):(i.texParameteri(E,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(E,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(x.wrapS!==Ut||x.wrapT!==Ut)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(E,i.TEXTURE_MAG_FILTER,R(x.magFilter)),i.texParameteri(E,i.TEXTURE_MIN_FILTER,R(x.minFilter)),x.minFilter!==st&&x.minFilter!==Mt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Q[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ne=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===st||x.minFilter!==sr&&x.minFilter!==xi||x.type===Ht&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===vi&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(E,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function z(E,x){let W=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",b));let ne=x.source,ie=m.get(ne);ie===void 0&&(ie={},m.set(ne,ie));let oe=N(x);if(oe!==E.__cacheKey){ie[oe]===void 0&&(ie[oe]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,W=!0),ie[oe].usedTimes++;let Me=ie[E.__cacheKey];Me!==void 0&&(ie[E.__cacheKey].usedTimes--,Me.usedTimes===0&&y(x)),E.__cacheKey=oe,E.__webglTexture=ie[oe].texture}return W}function J(E,x,W){let ne=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ne=i.TEXTURE_3D);let ie=z(E,x),oe=x.source;t.bindTexture(ne,E.__webglTexture,i.TEXTURE0+W);let Me=n.get(oe);if(oe.version!==Me.__version||ie===!0){t.activeTexture(i.TEXTURE0+W);let pe=ke.getPrimaries(ke.workingColorSpace),xe=x.colorSpace===_t?null:ke.getPrimaries(x.colorSpace),Ae=x.colorSpace===_t||pe===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let Oe=u(x)&&f(x.image)===!1,re=_(x.image,Oe,!1,r.maxTextureSize);re=Le(x,re);let Ze=f(re)||a,Xe=o.convert(x.format,x.colorSpace),Pe=o.convert(x.type),Ee=C(x.internalFormat,Xe,Pe,x.colorSpace,x.isVideoTexture);F(ne,x,Ze);let ve,Fe=x.mipmaps,Ye=a&&x.isVideoTexture!==!0&&Ee!==xr,rt=Me.__version===void 0||ie===!0,He=U(x,re,Ze);if(x.isDepthTexture)Ee=i.DEPTH_COMPONENT,a?x.type===Ht?Ee=i.DEPTH_COMPONENT32F:x.type===zt?Ee=i.DEPTH_COMPONENT24:x.type===Yt?Ee=i.DEPTH24_STENCIL8:Ee=i.DEPTH_COMPONENT16:x.type===Ht&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===ei&&Ee===i.DEPTH_COMPONENT&&x.type!==$i&&x.type!==zt&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=zt,Pe=o.convert(x.type)),x.format===ci&&Ee===i.DEPTH_COMPONENT&&(Ee=i.DEPTH_STENCIL,x.type!==Yt&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Yt,Pe=o.convert(x.type))),rt&&(Ye?t.texStorage2D(i.TEXTURE_2D,1,Ee,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,Ee,re.width,re.height,0,Xe,Pe,null));else if(x.isDataTexture)if(Fe.length>0&&Ze){Ye&&rt&&t.texStorage2D(i.TEXTURE_2D,He,Ee,Fe[0].width,Fe[0].height);for(let ce=0,P=Fe.length;ce<P;ce++)ve=Fe[ce],Ye?t.texSubImage2D(i.TEXTURE_2D,ce,0,0,ve.width,ve.height,Xe,Pe,ve.data):t.texImage2D(i.TEXTURE_2D,ce,Ee,ve.width,ve.height,0,Xe,Pe,ve.data);x.generateMipmaps=!1}else Ye?(rt&&t.texStorage2D(i.TEXTURE_2D,He,Ee,re.width,re.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,re.width,re.height,Xe,Pe,re.data)):t.texImage2D(i.TEXTURE_2D,0,Ee,re.width,re.height,0,Xe,Pe,re.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ye&&rt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,He,Ee,Fe[0].width,Fe[0].height,re.depth);for(let ce=0,P=Fe.length;ce<P;ce++)ve=Fe[ce],x.format!==St?Xe!==null?Ye?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,ve.width,ve.height,re.depth,Xe,ve.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ce,Ee,ve.width,ve.height,re.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,ve.width,ve.height,re.depth,Xe,Pe,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ce,Ee,ve.width,ve.height,re.depth,0,Xe,Pe,ve.data)}else{Ye&&rt&&t.texStorage2D(i.TEXTURE_2D,He,Ee,Fe[0].width,Fe[0].height);for(let ce=0,P=Fe.length;ce<P;ce++)ve=Fe[ce],x.format!==St?Xe!==null?Ye?t.compressedTexSubImage2D(i.TEXTURE_2D,ce,0,0,ve.width,ve.height,Xe,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,ce,Ee,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage2D(i.TEXTURE_2D,ce,0,0,ve.width,ve.height,Xe,Pe,ve.data):t.texImage2D(i.TEXTURE_2D,ce,Ee,ve.width,ve.height,0,Xe,Pe,ve.data)}else if(x.isDataArrayTexture)Ye?(rt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,He,Ee,re.width,re.height,re.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Xe,Pe,re.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ee,re.width,re.height,re.depth,0,Xe,Pe,re.data);else if(x.isData3DTexture)Ye?(rt&&t.texStorage3D(i.TEXTURE_3D,He,Ee,re.width,re.height,re.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Xe,Pe,re.data)):t.texImage3D(i.TEXTURE_3D,0,Ee,re.width,re.height,re.depth,0,Xe,Pe,re.data);else if(x.isFramebufferTexture){if(rt)if(Ye)t.texStorage2D(i.TEXTURE_2D,He,Ee,re.width,re.height);else{let ce=re.width,P=re.height;for(let ue=0;ue<He;ue++)t.texImage2D(i.TEXTURE_2D,ue,Ee,ce,P,0,Xe,Pe,null),ce>>=1,P>>=1}}else if(Fe.length>0&&Ze){Ye&&rt&&t.texStorage2D(i.TEXTURE_2D,He,Ee,Fe[0].width,Fe[0].height);for(let ce=0,P=Fe.length;ce<P;ce++)ve=Fe[ce],Ye?t.texSubImage2D(i.TEXTURE_2D,ce,0,0,Xe,Pe,ve):t.texImage2D(i.TEXTURE_2D,ce,Ee,Xe,Pe,ve);x.generateMipmaps=!1}else Ye?(rt&&t.texStorage2D(i.TEXTURE_2D,He,Ee,re.width,re.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Xe,Pe,re)):t.texImage2D(i.TEXTURE_2D,0,Ee,Xe,Pe,re);T(x,Ze)&&v(ne),Me.__version=oe.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function ee(E,x,W){if(x.image.length!==6)return;let ne=z(E,x),ie=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+W);let oe=n.get(ie);if(ie.version!==oe.__version||ne===!0){t.activeTexture(i.TEXTURE0+W);let Me=ke.getPrimaries(ke.workingColorSpace),pe=x.colorSpace===_t?null:ke.getPrimaries(x.colorSpace),xe=x.colorSpace===_t||Me===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let Ae=x.isCompressedTexture||x.image[0].isCompressedTexture,Oe=x.image[0]&&x.image[0].isDataTexture,re=[];for(let ce=0;ce<6;ce++)!Ae&&!Oe?re[ce]=_(x.image[ce],!1,!0,r.maxCubemapSize):re[ce]=Oe?x.image[ce].image:x.image[ce],re[ce]=Le(x,re[ce]);let Ze=re[0],Xe=f(Ze)||a,Pe=o.convert(x.format,x.colorSpace),Ee=o.convert(x.type),ve=C(x.internalFormat,Pe,Ee,x.colorSpace),Fe=a&&x.isVideoTexture!==!0,Ye=oe.__version===void 0||ne===!0,rt=U(x,Ze,Xe);F(i.TEXTURE_CUBE_MAP,x,Xe);let He;if(Ae){Fe&&Ye&&t.texStorage2D(i.TEXTURE_CUBE_MAP,rt,ve,Ze.width,Ze.height);for(let ce=0;ce<6;ce++){He=re[ce].mipmaps;for(let P=0;P<He.length;P++){let ue=He[P];x.format!==St?Pe!==null?Fe?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,P,0,0,ue.width,ue.height,Pe,ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,P,ve,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,P,0,0,ue.width,ue.height,Pe,Ee,ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,P,ve,ue.width,ue.height,0,Pe,Ee,ue.data)}}}else{He=x.mipmaps,Fe&&Ye&&(He.length>0&&rt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,rt,ve,re[0].width,re[0].height));for(let ce=0;ce<6;ce++)if(Oe){Fe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,re[ce].width,re[ce].height,Pe,Ee,re[ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ve,re[ce].width,re[ce].height,0,Pe,Ee,re[ce].data);for(let P=0;P<He.length;P++){let fe=He[P].image[ce].image;Fe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,P+1,0,0,fe.width,fe.height,Pe,Ee,fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,P+1,ve,fe.width,fe.height,0,Pe,Ee,fe.data)}}else{Fe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Pe,Ee,re[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ve,Pe,Ee,re[ce]);for(let P=0;P<He.length;P++){let ue=He[P];Fe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,P+1,0,0,Pe,Ee,ue.image[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,P+1,ve,Pe,Ee,ue.image[ce])}}}T(x,Xe)&&v(i.TEXTURE_CUBE_MAP),oe.__version=ie.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function ae(E,x,W,ne,ie,oe){let Me=o.convert(W.format,W.colorSpace),pe=o.convert(W.type),xe=C(W.internalFormat,Me,pe,W.colorSpace);if(!n.get(x).__hasExternalTextures){let Oe=Math.max(1,x.width>>oe),re=Math.max(1,x.height>>oe);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,oe,xe,Oe,re,x.depth,0,Me,pe,null):t.texImage2D(ie,oe,xe,Oe,re,0,Me,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),le(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,ie,n.get(W).__webglTexture,0,_e(x)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,ie,n.get(W).__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function de(E,x,W){if(i.bindRenderbuffer(i.RENDERBUFFER,E),x.depthBuffer&&!x.stencilBuffer){let ne=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(W||le(x)){let ie=x.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Ht?ne=i.DEPTH_COMPONENT32F:ie.type===zt&&(ne=i.DEPTH_COMPONENT24));let oe=_e(x);le(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,ne,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,ne,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,ne,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,E)}else if(x.depthBuffer&&x.stencilBuffer){let ne=_e(x);W&&le(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,i.DEPTH24_STENCIL8,x.width,x.height):le(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,E)}else{let ne=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let ie=0;ie<ne.length;ie++){let oe=ne[ie],Me=o.convert(oe.format,oe.colorSpace),pe=o.convert(oe.type),xe=C(oe.internalFormat,Me,pe,oe.colorSpace),Ae=_e(x);W&&le(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,xe,x.width,x.height):le(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae,xe,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,xe,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ye(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V(x.depthTexture,0);let ne=n.get(x.depthTexture).__webglTexture,ie=_e(x);if(x.depthTexture.format===ei)le(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(x.depthTexture.format===ci)le(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function I(E){let x=n.get(E),W=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");ye(x.__webglFramebuffer,E)}else if(W){x.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[ne]),x.__webglDepthbuffer[ne]=i.createRenderbuffer(),de(x.__webglDepthbuffer[ne],E,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),de(x.__webglDepthbuffer,E,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function te(E,x,W){let ne=n.get(E);x!==void 0&&ae(ne.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&I(E)}function L(E){let x=E.texture,W=n.get(E),ne=n.get(x);E.addEventListener("dispose",j),E.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=x.version,s.memory.textures++);let ie=E.isWebGLCubeRenderTarget===!0,oe=E.isWebGLMultipleRenderTargets===!0,Me=f(E)||a;if(ie){W.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(a&&x.mipmaps&&x.mipmaps.length>0){W.__webglFramebuffer[pe]=[];for(let xe=0;xe<x.mipmaps.length;xe++)W.__webglFramebuffer[pe][xe]=i.createFramebuffer()}else W.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){W.__webglFramebuffer=[];for(let pe=0;pe<x.mipmaps.length;pe++)W.__webglFramebuffer[pe]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(oe)if(r.drawBuffers){let pe=E.texture;for(let xe=0,Ae=pe.length;xe<Ae;xe++){let Oe=n.get(pe[xe]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=i.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&le(E)===!1){let pe=oe?x:[x];W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let xe=0;xe<pe.length;xe++){let Ae=pe[xe];W.__webglColorRenderbuffer[xe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[xe]);let Oe=o.convert(Ae.format,Ae.colorSpace),re=o.convert(Ae.type),Ze=C(Ae.internalFormat,Oe,re,Ae.colorSpace,E.isXRRenderTarget===!0),Xe=_e(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,Ze,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,W.__webglColorRenderbuffer[xe])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),de(W.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),F(i.TEXTURE_CUBE_MAP,x,Me);for(let pe=0;pe<6;pe++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)ae(W.__webglFramebuffer[pe][xe],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe);else ae(W.__webglFramebuffer[pe],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);T(x,Me)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){let pe=E.texture;for(let xe=0,Ae=pe.length;xe<Ae;xe++){let Oe=pe[xe],re=n.get(Oe);t.bindTexture(i.TEXTURE_2D,re.__webglTexture),F(i.TEXTURE_2D,Oe,Me),ae(W.__webglFramebuffer,E,Oe,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,0),T(Oe,Me)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?pe=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(pe,ne.__webglTexture),F(pe,x,Me),a&&x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)ae(W.__webglFramebuffer[xe],E,x,i.COLOR_ATTACHMENT0,pe,xe);else ae(W.__webglFramebuffer,E,x,i.COLOR_ATTACHMENT0,pe,0);T(x,Me)&&v(pe),t.unbindTexture()}E.depthBuffer&&I(E)}function ge(E){let x=f(E)||a,W=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ne=0,ie=W.length;ne<ie;ne++){let oe=W[ne];if(T(oe,x)){let Me=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,pe=n.get(oe).__webglTexture;t.bindTexture(Me,pe),v(Me),t.unbindTexture()}}}function he(E){if(a&&E.samples>0&&le(E)===!1){let x=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],W=E.width,ne=E.height,ie=i.COLOR_BUFFER_BIT,oe=[],Me=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(E),xe=E.isWebGLMultipleRenderTargets===!0;if(xe)for(let Ae=0;Ae<x.length;Ae++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Ae=0;Ae<x.length;Ae++){oe.push(i.COLOR_ATTACHMENT0+Ae),E.depthBuffer&&oe.push(Me);let Oe=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(Oe===!1&&(E.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),xe&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[Ae]),Oe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Me]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Me])),xe){let re=n.get(x[Ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,W,ne,0,0,W,ne,ie,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,oe)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xe)for(let Ae=0;Ae<x.length;Ae++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,pe.__webglColorRenderbuffer[Ae]);let Oe=n.get(x[Ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,Oe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function _e(E){return Math.min(r.maxSamples,E.samples)}function le(E){let x=n.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function We(E){let x=s.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function Le(E,x){let W=E.colorSpace,ne=E.format,ie=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Yn||W!==yt&&W!==_t&&(ke.getTransfer(W)===qe?a===!1?e.has("EXT_sRGB")===!0&&ne===St?(E.format=Yn,E.minFilter=Mt,E.generateMipmaps=!1):x=bn.sRGBToLinear(x):(ne!==St||ie!==Gt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),x}this.allocateTextureUnit=w,this.resetTextureUnits=Y,this.setTexture2D=V,this.setTexture2DArray=A,this.setTexture3D=k,this.setTextureCube=K,this.rebindTextures=te,this.setupRenderTarget=L,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=I,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=le}function kf(i,e,t){let n=t.isWebGL2;function r(o,s=_t){let a,l=ke.getTransfer(s);if(o===Gt)return i.UNSIGNED_BYTE;if(o===cr)return i.UNSIGNED_SHORT_4_4_4_4;if(o===ur)return i.UNSIGNED_SHORT_5_5_5_1;if(o===bs)return i.BYTE;if(o===As)return i.SHORT;if(o===$i)return i.UNSIGNED_SHORT;if(o===lr)return i.INT;if(o===zt)return i.UNSIGNED_INT;if(o===Ht)return i.FLOAT;if(o===vi)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===ws)return i.ALPHA;if(o===St)return i.RGBA;if(o===Rs)return i.LUMINANCE;if(o===Cs)return i.LUMINANCE_ALPHA;if(o===ei)return i.DEPTH_COMPONENT;if(o===ci)return i.DEPTH_STENCIL;if(o===Yn)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===Ls)return i.RED;if(o===fr)return i.RED_INTEGER;if(o===Ps)return i.RG;if(o===hr)return i.RG_INTEGER;if(o===dr)return i.RGBA_INTEGER;if(o===pr||o===mr||o===gr||o===_r)if(l===qe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===pr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===mr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===gr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===_r)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===pr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===mr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===gr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===_r)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Po||o===Do||o===Uo||o===Io)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===Po)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Do)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Uo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Io)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===xr)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===No||o===Fo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===No)return l===qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===Fo)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Oo||o===Bo||o===Go||o===zo||o===Ho||o===Vo||o===ko||o===Wo||o===Xo||o===qo||o===Yo||o===Zo||o===Ko||o===jo)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===Oo)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Bo)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Go)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===zo)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Ho)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Vo)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===ko)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Wo)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Xo)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===qo)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Yo)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Zo)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Ko)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===jo)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===vr||o===Jo||o===Qo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===vr)return l===qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===Jo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===Qo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===Ds||o===$o||o===ea||o===ta)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===vr)return a.COMPRESSED_RED_RGTC1_EXT;if(o===$o)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===ea)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===ta)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Yt?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[o]!==void 0?i[o]:null}return{convert:r}}var oo=class extends At{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}};var ji=class extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}};var op={type:"move"},On=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,s=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(let _ of e.hand.values()){let f=t.getJointPose(_,n),u=this._getHandJoint(c,_);f!==null&&(u.matrix.fromArray(f.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=f.radius),u.visible=f!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],m=h.position.distanceTo(d.position),g=.02,p=.005;c.inputState.pinching&&m>g+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&m<=g-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(op)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ji;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var ao=class extends Ft{constructor(e,t){super();let n=this,r=null,o=1,s=null,a="local-floor",l=1,c=null,h=null,d=null,m=null,g=null,p=null,_=t.getContextAttributes(),f=null,u=null,T=[],v=[],C=new Ge,U=null,R=new At;R.layers.enable(1),R.viewport=new nt;let b=new At;b.layers.enable(2),b.viewport=new nt;let j=[R,b],M=new oo;M.layers.enable(1),M.layers.enable(2);let y=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let z=T[F];return z===void 0&&(z=new On,T[F]=z),z.getTargetRaySpace()},this.getControllerGrip=function(F){let z=T[F];return z===void 0&&(z=new On,T[F]=z),z.getGripSpace()},this.getHand=function(F){let z=T[F];return z===void 0&&(z=new On,T[F]=z),z.getHandSpace()};function G(F){let z=v.indexOf(F.inputSource);if(z===-1)return;let J=T[z];J!==void 0&&(J.update(F.inputSource,F.frame,c||s),J.dispatchEvent({type:F.type,data:F.inputSource}))}function Y(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",w);for(let F=0;F<T.length;F++){let z=v[F];z!==null&&(v[F]=null,T[F].disconnect(z))}y=null,D=null,e.setRenderTarget(f),g=null,m=null,d=null,r=null,u=null,Q.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){o=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return d},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(F){if(r=F,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",w),_.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let z={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:o};g=new XRWebGLLayer(r,t,z),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),u=new bt(g.framebufferWidth,g.framebufferHeight,{format:St,type:Gt,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let z=null,J=null,ee=null;_.depth&&(ee=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,z=_.stencil?ci:ei,J=_.stencil?Yt:zt);let ae={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:o};d=new XRWebGLBinding(r,t),m=d.createProjectionLayer(ae),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),u=new bt(m.textureWidth,m.textureHeight,{format:St,type:Gt,depthTexture:new In(m.textureWidth,m.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let de=e.properties.get(u);de.__ignoreDepthValues=m.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),Q.setContext(r),Q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function w(F){for(let z=0;z<F.removed.length;z++){let J=F.removed[z],ee=v.indexOf(J);ee>=0&&(v[ee]=null,T[ee].disconnect(J))}for(let z=0;z<F.added.length;z++){let J=F.added[z],ee=v.indexOf(J);if(ee===-1){for(let de=0;de<T.length;de++)if(de>=v.length){v.push(J),ee=de;break}else if(v[de]===null){v[de]=J,ee=de;break}if(ee===-1)break}let ae=T[ee];ae&&ae.connect(J)}}let N=new H,V=new H;function A(F,z,J){N.setFromMatrixPosition(z.matrixWorld),V.setFromMatrixPosition(J.matrixWorld);let ee=N.distanceTo(V),ae=z.projectionMatrix.elements,de=J.projectionMatrix.elements,ye=ae[14]/(ae[10]-1),I=ae[14]/(ae[10]+1),te=(ae[9]+1)/ae[5],L=(ae[9]-1)/ae[5],ge=(ae[8]-1)/ae[0],he=(de[8]+1)/de[0],_e=ye*ge,le=ye*he,We=ee/(-ge+he),Le=We*-ge;z.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Le),F.translateZ(We),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();let E=ye+We,x=I+We,W=_e-Le,ne=le+(ee-Le),ie=te*I/x*E,oe=L*I/x*E;F.projectionMatrix.makePerspective(W,ne,ie,oe,E,x),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function k(F,z){z===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(z.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(r===null)return;M.near=b.near=R.near=F.near,M.far=b.far=R.far=F.far,(y!==M.near||D!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),y=M.near,D=M.far);let z=F.parent,J=M.cameras;k(M,z);for(let ee=0;ee<J.length;ee++)k(J[ee],z);J.length===2?A(M,R,b):M.projectionMatrix.copy(R.projectionMatrix),K(F,M,z)};function K(F,z,J){J===null?F.matrix.copy(z.matrixWorld):(F.matrix.copy(J.matrixWorld),F.matrix.invert(),F.matrix.multiply(z.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(z.projectionMatrix),F.projectionMatrixInverse.copy(z.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Zn*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(m===null&&g===null))return l},this.setFoveation=function(F){l=F,m!==null&&(m.fixedFoveation=F),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=F)};let $=null;function O(F,z){if(h=z.getViewerPose(c||s),p=z,h!==null){let J=h.views;g!==null&&(e.setRenderTargetFramebuffer(u,g.framebuffer),e.setRenderTarget(u));let ee=!1;J.length!==M.cameras.length&&(M.cameras.length=0,ee=!0);for(let ae=0;ae<J.length;ae++){let de=J[ae],ye=null;if(g!==null)ye=g.getViewport(de);else{let te=d.getViewSubImage(m,de);ye=te.viewport,ae===0&&(e.setRenderTargetTextures(u,te.colorTexture,m.ignoreDepthValues?void 0:te.depthStencilTexture),e.setRenderTarget(u))}let I=j[ae];I===void 0&&(I=new At,I.layers.enable(ae),I.viewport=new nt,j[ae]=I),I.matrix.fromArray(de.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(de.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(ye.x,ye.y,ye.width,ye.height),ae===0&&(M.matrix.copy(I.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ee===!0&&M.cameras.push(I)}}for(let J=0;J<T.length;J++){let ee=v[J],ae=T[J];ee!==null&&ae!==void 0&&ae.update(ee,z,c||s)}$&&$(F,z),z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:z}),p=null}let Q=new Dr;Q.setAnimationLoop(O),this.setAnimationLoop=function(F){$=F},this.dispose=function(){}}};function Wf(i,e){function t(f,u){f.matrixAutoUpdate===!0&&f.updateMatrix(),u.value.copy(f.matrix)}function n(f,u){u.color.getRGB(f.fogColor.value,Or(i)),u.isFog?(f.fogNear.value=u.near,f.fogFar.value=u.far):u.isFogExp2&&(f.fogDensity.value=u.density)}function r(f,u,T,v,C){u.isMeshBasicMaterial||u.isMeshLambertMaterial?o(f,u):u.isMeshToonMaterial?(o(f,u),d(f,u)):u.isMeshPhongMaterial?(o(f,u),h(f,u)):u.isMeshStandardMaterial?(o(f,u),m(f,u),u.isMeshPhysicalMaterial&&g(f,u,C)):u.isMeshMatcapMaterial?(o(f,u),p(f,u)):u.isMeshDepthMaterial?o(f,u):u.isMeshDistanceMaterial?(o(f,u),_(f,u)):u.isMeshNormalMaterial?o(f,u):u.isLineBasicMaterial?(s(f,u),u.isLineDashedMaterial&&a(f,u)):u.isPointsMaterial?l(f,u,T,v):u.isSpriteMaterial?c(f,u):u.isShadowMaterial?(f.color.value.copy(u.color),f.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function o(f,u){f.opacity.value=u.opacity,u.color&&f.diffuse.value.copy(u.color),u.emissive&&f.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.bumpMap&&(f.bumpMap.value=u.bumpMap,t(u.bumpMap,f.bumpMapTransform),f.bumpScale.value=u.bumpScale,u.side===it&&(f.bumpScale.value*=-1)),u.normalMap&&(f.normalMap.value=u.normalMap,t(u.normalMap,f.normalMapTransform),f.normalScale.value.copy(u.normalScale),u.side===it&&f.normalScale.value.negate()),u.displacementMap&&(f.displacementMap.value=u.displacementMap,t(u.displacementMap,f.displacementMapTransform),f.displacementScale.value=u.displacementScale,f.displacementBias.value=u.displacementBias),u.emissiveMap&&(f.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,f.emissiveMapTransform)),u.specularMap&&(f.specularMap.value=u.specularMap,t(u.specularMap,f.specularMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest);let T=e.get(u).envMap;if(T&&(f.envMap.value=T,f.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=u.reflectivity,f.ior.value=u.ior,f.refractionRatio.value=u.refractionRatio),u.lightMap){f.lightMap.value=u.lightMap;let v=i._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=u.lightMapIntensity*v,t(u.lightMap,f.lightMapTransform)}u.aoMap&&(f.aoMap.value=u.aoMap,f.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,f.aoMapTransform))}function s(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform))}function a(f,u){f.dashSize.value=u.dashSize,f.totalSize.value=u.dashSize+u.gapSize,f.scale.value=u.scale}function l(f,u,T,v){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.size.value=u.size*T,f.scale.value=v*.5,u.map&&(f.map.value=u.map,t(u.map,f.uvTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function c(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.rotation.value=u.rotation,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function h(f,u){f.specular.value.copy(u.specular),f.shininess.value=Math.max(u.shininess,1e-4)}function d(f,u){u.gradientMap&&(f.gradientMap.value=u.gradientMap)}function m(f,u){f.metalness.value=u.metalness,u.metalnessMap&&(f.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,f.metalnessMapTransform)),f.roughness.value=u.roughness,u.roughnessMap&&(f.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,f.roughnessMapTransform)),e.get(u).envMap&&(f.envMapIntensity.value=u.envMapIntensity)}function g(f,u,T){f.ior.value=u.ior,u.sheen>0&&(f.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),f.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(f.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,f.sheenColorMapTransform)),u.sheenRoughnessMap&&(f.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,f.sheenRoughnessMapTransform))),u.clearcoat>0&&(f.clearcoat.value=u.clearcoat,f.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(f.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,f.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(f.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===it&&f.clearcoatNormalScale.value.negate())),u.iridescence>0&&(f.iridescence.value=u.iridescence,f.iridescenceIOR.value=u.iridescenceIOR,f.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(f.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,f.iridescenceMapTransform)),u.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),u.transmission>0&&(f.transmission.value=u.transmission,f.transmissionSamplerMap.value=T.texture,f.transmissionSamplerSize.value.set(T.width,T.height),u.transmissionMap&&(f.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,f.transmissionMapTransform)),f.thickness.value=u.thickness,u.thicknessMap&&(f.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=u.attenuationDistance,f.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(f.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(f.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=u.specularIntensity,f.specularColor.value.copy(u.specularColor),u.specularColorMap&&(f.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,f.specularColorMapTransform)),u.specularIntensityMap&&(f.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,f.specularIntensityMapTransform))}function p(f,u){u.matcap&&(f.matcap.value=u.matcap)}function _(f,u){let T=e.get(u).light;f.referencePosition.value.setFromMatrixPosition(T.matrixWorld),f.nearDistance.value=T.shadow.camera.near,f.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Xf(i,e,t,n){let r={},o={},s=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(T,v){let C=v.program;n.uniformBlockBinding(T,C)}function c(T,v){let C=r[T.id];C===void 0&&(p(T),C=h(T),r[T.id]=C,T.addEventListener("dispose",f));let U=v.program;n.updateUBOMapping(T,U);let R=e.render.frame;o[T.id]!==R&&(m(T),o[T.id]=R)}function h(T){let v=d();T.__bindingPointIndex=v;let C=i.createBuffer(),U=T.__size,R=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,U,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,C),C}function d(){for(let T=0;T<a;T++)if(s.indexOf(T)===-1)return s.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(T){let v=r[T.id],C=T.uniforms,U=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let R=0,b=C.length;R<b;R++){let j=Array.isArray(C[R])?C[R]:[C[R]];for(let M=0,y=j.length;M<y;M++){let D=j[M];if(g(D,R,M,U)===!0){let G=D.__offset,Y=Array.isArray(D.value)?D.value:[D.value],w=0;for(let N=0;N<Y.length;N++){let V=Y[N],A=_(V);typeof V=="number"||typeof V=="boolean"?(D.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,G+w,D.__data)):V.isMatrix3?(D.__data[0]=V.elements[0],D.__data[1]=V.elements[1],D.__data[2]=V.elements[2],D.__data[3]=0,D.__data[4]=V.elements[3],D.__data[5]=V.elements[4],D.__data[6]=V.elements[5],D.__data[7]=0,D.__data[8]=V.elements[6],D.__data[9]=V.elements[7],D.__data[10]=V.elements[8],D.__data[11]=0):(V.toArray(D.__data,w),w+=A.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(T,v,C,U){let R=T.value,b=v+"_"+C;if(U[b]===void 0)return typeof R=="number"||typeof R=="boolean"?U[b]=R:U[b]=R.clone(),!0;{let j=U[b];if(typeof R=="number"||typeof R=="boolean"){if(j!==R)return U[b]=R,!0}else if(j.equals(R)===!1)return j.copy(R),!0}return!1}function p(T){let v=T.uniforms,C=0,U=16;for(let b=0,j=v.length;b<j;b++){let M=Array.isArray(v[b])?v[b]:[v[b]];for(let y=0,D=M.length;y<D;y++){let G=M[y],Y=Array.isArray(G.value)?G.value:[G.value];for(let w=0,N=Y.length;w<N;w++){let V=Y[w],A=_(V),k=C%U;k!==0&&U-k<A.boundary&&(C+=U-k),G.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=C,C+=A.storage}}}let R=C%U;return R>0&&(C+=U-R),T.__size=C,T.__cache={},this}function _(T){let v={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(v.boundary=4,v.storage=4):T.isVector2?(v.boundary=8,v.storage=8):T.isVector3||T.isColor?(v.boundary=16,v.storage=12):T.isVector4?(v.boundary=16,v.storage=16):T.isMatrix3?(v.boundary=48,v.storage=48):T.isMatrix4?(v.boundary=64,v.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),v}function f(T){let v=T.target;v.removeEventListener("dispose",f);let C=s.indexOf(v.__bindingPointIndex);s.splice(C,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete o[v.id]}function u(){for(let T in r)i.deleteBuffer(r[T]);s=[],r={},o={}}return{bind:l,update:c,dispose:u}}var so=class{constructor(e={}){let{canvas:t=nl(),context:n=null,depth:r=!0,stencil:o=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let m;n!==null?m=n.getContextAttributes().alpha:m=s;let g=new Uint32Array(4),p=new Int32Array(4),_=null,f=null,u=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=et,this._useLegacyLights=!1,this.toneMapping=qt,this.toneMappingExposure=1;let v=this,C=!1,U=0,R=0,b=null,j=-1,M=null,y=new nt,D=new nt,G=null,Y=new Ne(0),w=0,N=t.width,V=t.height,A=1,k=null,K=null,$=new nt(0,0,N,V),O=new nt(0,0,N,V),Q=!1,F=new cn,z=!1,J=!1,ee=null,ae=new $e,de=new Ge,ye=new H,I={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function te(){return b===null?A:1}let L=n;function ge(S,B){for(let q=0;q<S.length;q++){let Z=S[q],X=t.getContext(Z,B);if(X!==null)return X}return null}try{let S={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ka}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",ue,!1),L===null){let B=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&B.shift(),L=ge(B,S),L===null)throw ge(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let he,_e,le,We,Le,E,x,W,ne,ie,oe,Me,pe,xe,Ae,Oe,re,Ze,Xe,Pe,Ee,ve,Fe,Ye;function rt(){he=new sf(L),_e=new ju(L,he,e),he.init(_e),ve=new kf(L,he,_e),le=new Hf(L,he,_e),We=new uf(L),Le=new Pf,E=new Vf(L,he,le,Le,_e,ve,We),x=new Qu(v),W=new af(v),ne=new Ks(L,_e),Fe=new Zu(L,he,ne,_e),ie=new lf(L,ne,We,Fe),oe=new hf(L,ie,ne,We),Xe=new ff(L,_e,E),Oe=new Ju(Le),Me=new Lf(v,x,W,he,_e,Fe,Oe),pe=new Wf(v,Le),xe=new If,Ae=new Of(he,_e),Ze=new Yu(v,x,W,le,oe,m,l),re=new zf(v,oe,_e),Ye=new Xf(L,We,_e,le),Pe=new Ku(L,he,We,_e),Ee=new cf(L,he,We,_e),We.programs=Me.programs,v.capabilities=_e,v.extensions=he,v.properties=Le,v.renderLists=xe,v.shadowMap=re,v.state=le,v.info=We}rt();let He=new ao(v,L);this.xr=He,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let S=he.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=he.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return A},this.setPixelRatio=function(S){S!==void 0&&(A=S,this.setSize(N,V,!1))},this.getSize=function(S){return S.set(N,V)},this.setSize=function(S,B,q=!0){if(He.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=S,V=B,t.width=Math.floor(S*A),t.height=Math.floor(B*A),q===!0&&(t.style.width=S+"px",t.style.height=B+"px"),this.setViewport(0,0,S,B)},this.getDrawingBufferSize=function(S){return S.set(N*A,V*A).floor()},this.setDrawingBufferSize=function(S,B,q){N=S,V=B,A=q,t.width=Math.floor(S*q),t.height=Math.floor(B*q),this.setViewport(0,0,S,B)},this.getCurrentViewport=function(S){return S.copy(y)},this.getViewport=function(S){return S.copy($)},this.setViewport=function(S,B,q,Z){S.isVector4?$.set(S.x,S.y,S.z,S.w):$.set(S,B,q,Z),le.viewport(y.copy($).multiplyScalar(A).floor())},this.getScissor=function(S){return S.copy(O)},this.setScissor=function(S,B,q,Z){S.isVector4?O.set(S.x,S.y,S.z,S.w):O.set(S,B,q,Z),le.scissor(D.copy(O).multiplyScalar(A).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(S){le.setScissorTest(Q=S)},this.setOpaqueSort=function(S){k=S},this.setTransparentSort=function(S){K=S},this.getClearColor=function(S){return S.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(S=!0,B=!0,q=!0){let Z=0;if(S){let X=!1;if(b!==null){let me=b.texture.format;X=me===dr||me===hr||me===fr}if(X){let me=b.texture.type,Se=me===Gt||me===zt||me===$i||me===Yt||me===cr||me===ur,be=Ze.getClearColor(),Ce=Ze.getClearAlpha(),Be=be.r,De=be.g,Ie=be.b;Se?(g[0]=Be,g[1]=De,g[2]=Ie,g[3]=Ce,L.clearBufferuiv(L.COLOR,0,g)):(p[0]=Be,p[1]=De,p[2]=Ie,p[3]=Ce,L.clearBufferiv(L.COLOR,0,p))}else Z|=L.COLOR_BUFFER_BIT}B&&(Z|=L.DEPTH_BUFFER_BIT),q&&(Z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),xe.dispose(),Ae.dispose(),Le.dispose(),x.dispose(),W.dispose(),oe.dispose(),Fe.dispose(),Ye.dispose(),Me.dispose(),He.dispose(),He.removeEventListener("sessionstart",Pt),He.removeEventListener("sessionend",Qe),ee&&(ee.dispose(),ee=null),Dt.stop()};function ce(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let S=We.autoReset,B=re.enabled,q=re.autoUpdate,Z=re.needsUpdate,X=re.type;rt(),We.autoReset=S,re.enabled=B,re.autoUpdate=q,re.needsUpdate=Z,re.type=X}function ue(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function fe(S){let B=S.target;B.removeEventListener("dispose",fe),we(B)}function we(S){Te(S),Le.remove(S)}function Te(S){let B=Le.get(S).programs;B!==void 0&&(B.forEach(function(q){Me.releaseProgram(q)}),S.isShaderMaterial&&Me.releaseShaderCache(S))}this.renderBufferDirect=function(S,B,q,Z,X,me){B===null&&(B=I);let Se=X.isMesh&&X.matrixWorld.determinant()<0,be=rh(S,B,q,Z,X);le.setMaterial(Z,Se);let Ce=q.index,Be=1;if(Z.wireframe===!0){if(Ce=ie.getWireframeAttribute(q),Ce===void 0)return;Be=2}let De=q.drawRange,Ie=q.attributes.position,at=De.start*Be,Ot=(De.start+De.count)*Be;me!==null&&(at=Math.max(at,me.start*Be),Ot=Math.min(Ot,(me.start+me.count)*Be)),Ce!==null?(at=Math.max(at,0),Ot=Math.min(Ot,Ce.count)):Ie!=null&&(at=Math.max(at,0),Ot=Math.min(Ot,Ie.count));let gt=Ot-at;if(gt<0||gt===1/0)return;Fe.setup(X,Z,be,q,Ce);let mi,tt=Pe;if(Ce!==null&&(mi=ne.get(Ce),tt=Ee,tt.setIndex(mi)),X.isMesh)Z.wireframe===!0?(le.setLineWidth(Z.wireframeLinewidth*te()),tt.setMode(L.LINES)):tt.setMode(L.TRIANGLES);else if(X.isLine){let Ve=Z.linewidth;Ve===void 0&&(Ve=1),le.setLineWidth(Ve*te()),X.isLineSegments?tt.setMode(L.LINES):X.isLineLoop?tt.setMode(L.LINE_LOOP):tt.setMode(L.LINE_STRIP)}else X.isPoints?tt.setMode(L.POINTS):X.isSprite&&tt.setMode(L.TRIANGLES);if(X.isBatchedMesh)tt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)tt.renderInstances(at,gt,X.count);else if(q.isInstancedBufferGeometry){let Ve=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,vo=Math.min(q.instanceCount,Ve);tt.renderInstances(at,gt,vo)}else tt.render(at,gt)};function je(S,B,q){S.transparent===!0&&S.side===vt&&S.forceSinglePass===!1?(S.side=it,S.needsUpdate=!0,rr(S,B,q),S.side=Bt,S.needsUpdate=!0,rr(S,B,q),S.side=vt):rr(S,B,q)}this.compile=function(S,B,q=null){q===null&&(q=S),f=Ae.get(q),f.init(),T.push(f),q.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(f.pushLight(X),X.castShadow&&f.pushShadow(X))}),S!==q&&S.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(f.pushLight(X),X.castShadow&&f.pushShadow(X))}),f.setupLights(v._useLegacyLights);let Z=new Set;return S.traverse(function(X){let me=X.material;if(me)if(Array.isArray(me))for(let Se=0;Se<me.length;Se++){let be=me[Se];je(be,q,X),Z.add(be)}else je(me,q,X),Z.add(me)}),T.pop(),f=null,Z},this.compileAsync=function(S,B,q=null){let Z=this.compile(S,B,q);return new Promise(X=>{function me(){if(Z.forEach(function(Se){Le.get(Se).currentProgram.isReady()&&Z.delete(Se)}),Z.size===0){X(S);return}setTimeout(me,10)}he.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Je=null;function mt(S){Je&&Je(S)}function Pt(){Dt.stop()}function Qe(){Dt.start()}let Dt=new Dr;Dt.setAnimationLoop(mt),typeof self<"u"&&Dt.setContext(self),this.setAnimationLoop=function(S){Je=S,He.setAnimationLoop(S),S===null?Dt.stop():Dt.start()},He.addEventListener("sessionstart",Pt),He.addEventListener("sessionend",Qe),this.render=function(S,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(He.cameraAutoUpdate===!0&&He.updateCamera(B),B=He.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,B,b),f=Ae.get(S,T.length),f.init(),T.push(f),ae.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),F.setFromProjectionMatrix(ae),J=this.localClippingEnabled,z=Oe.init(this.clippingPlanes,J),_=xe.get(S,u.length),_.init(),u.push(_),si(S,B,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(k,K),this.info.render.frame++,z===!0&&Oe.beginShadows();let q=f.state.shadowsArray;if(re.render(q,S,B),z===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ze.render(_,S),f.setupLights(v._useLegacyLights),B.isArrayCamera){let Z=B.cameras;for(let X=0,me=Z.length;X<me;X++){let Se=Z[X];Oa(_,S,Se,Se.viewport)}}else Oa(_,S,B);b!==null&&(E.updateMultisampleRenderTarget(b),E.updateRenderTargetMipmap(b)),S.isScene===!0&&S.onAfterRender(v,S,B),Fe.resetDefaultState(),j=-1,M=null,T.pop(),T.length>0?f=T[T.length-1]:f=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function si(S,B,q,Z){if(S.visible===!1)return;if(S.layers.test(B.layers)){if(S.isGroup)q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(B);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||F.intersectsSprite(S)){Z&&ye.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ae);let Se=oe.update(S),be=S.material;be.visible&&_.push(S,Se,be,q,ye.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||F.intersectsObject(S))){let Se=oe.update(S),be=S.material;if(Z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ye.copy(S.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),ye.copy(Se.boundingSphere.center)),ye.applyMatrix4(S.matrixWorld).applyMatrix4(ae)),Array.isArray(be)){let Ce=Se.groups;for(let Be=0,De=Ce.length;Be<De;Be++){let Ie=Ce[Be],at=be[Ie.materialIndex];at&&at.visible&&_.push(S,Se,at,q,ye.z,Ie)}}else be.visible&&_.push(S,Se,be,q,ye.z,null)}}let me=S.children;for(let Se=0,be=me.length;Se<be;Se++)si(me[Se],B,q,Z)}function Oa(S,B,q,Z){let X=S.opaque,me=S.transmissive,Se=S.transparent;f.setupLightsView(q),z===!0&&Oe.setGlobalState(v.clippingPlanes,q),me.length>0&&nh(X,me,B,q),Z&&le.viewport(y.copy(Z)),X.length>0&&nr(X,B,q),me.length>0&&nr(me,B,q),Se.length>0&&nr(Se,B,q),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function nh(S,B,q,Z){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;let me=_e.isWebGL2;ee===null&&(ee=new bt(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")?vi:Gt,minFilter:xi,samples:me?4:0})),v.getDrawingBufferSize(de),me?ee.setSize(de.x,de.y):ee.setSize(Kn(de.x),Kn(de.y));let Se=v.getRenderTarget();v.setRenderTarget(ee),v.getClearColor(Y),w=v.getClearAlpha(),w<1&&v.setClearColor(16777215,.5),v.clear();let be=v.toneMapping;v.toneMapping=qt,nr(S,q,Z),E.updateMultisampleRenderTarget(ee),E.updateRenderTargetMipmap(ee);let Ce=!1;for(let Be=0,De=B.length;Be<De;Be++){let Ie=B[Be],at=Ie.object,Ot=Ie.geometry,gt=Ie.material,mi=Ie.group;if(gt.side===vt&&at.layers.test(Z.layers)){let tt=gt.side;gt.side=it,gt.needsUpdate=!0,Ba(at,q,Z,Ot,gt,mi),gt.side=tt,gt.needsUpdate=!0,Ce=!0}}Ce===!0&&(E.updateMultisampleRenderTarget(ee),E.updateRenderTargetMipmap(ee)),v.setRenderTarget(Se),v.setClearColor(Y,w),v.toneMapping=be}function nr(S,B,q){let Z=B.isScene===!0?B.overrideMaterial:null;for(let X=0,me=S.length;X<me;X++){let Se=S[X],be=Se.object,Ce=Se.geometry,Be=Z===null?Se.material:Z,De=Se.group;be.layers.test(q.layers)&&Ba(be,B,q,Ce,Be,De)}}function Ba(S,B,q,Z,X,me){S.onBeforeRender(v,B,q,Z,X,me),S.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),X.onBeforeRender(v,B,q,Z,S,me),X.transparent===!0&&X.side===vt&&X.forceSinglePass===!1?(X.side=it,X.needsUpdate=!0,v.renderBufferDirect(q,B,Z,X,S,me),X.side=Bt,X.needsUpdate=!0,v.renderBufferDirect(q,B,Z,X,S,me),X.side=vt):v.renderBufferDirect(q,B,Z,X,S,me),S.onAfterRender(v,B,q,Z,X,me)}function rr(S,B,q){B.isScene!==!0&&(B=I);let Z=Le.get(S),X=f.state.lights,me=f.state.shadowsArray,Se=X.state.version,be=Me.getParameters(S,X.state,me,B,q),Ce=Me.getProgramCacheKey(be),Be=Z.programs;Z.environment=S.isMeshStandardMaterial?B.environment:null,Z.fog=B.fog,Z.envMap=(S.isMeshStandardMaterial?W:x).get(S.envMap||Z.environment),Be===void 0&&(S.addEventListener("dispose",fe),Be=new Map,Z.programs=Be);let De=Be.get(Ce);if(De!==void 0){if(Z.currentProgram===De&&Z.lightsStateVersion===Se)return za(S,be),De}else be.uniforms=Me.getUniforms(S),S.onBuild(q,be,v),S.onBeforeCompile(be,v),De=Me.acquireProgram(be,Ce),Be.set(Ce,De),Z.uniforms=be.uniforms;let Ie=Z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ie.clippingPlanes=Oe.uniform),za(S,be),Z.needsLights=ah(S),Z.lightsStateVersion=Se,Z.needsLights&&(Ie.ambientLightColor.value=X.state.ambient,Ie.lightProbe.value=X.state.probe,Ie.directionalLights.value=X.state.directional,Ie.directionalLightShadows.value=X.state.directionalShadow,Ie.spotLights.value=X.state.spot,Ie.spotLightShadows.value=X.state.spotShadow,Ie.rectAreaLights.value=X.state.rectArea,Ie.ltc_1.value=X.state.rectAreaLTC1,Ie.ltc_2.value=X.state.rectAreaLTC2,Ie.pointLights.value=X.state.point,Ie.pointLightShadows.value=X.state.pointShadow,Ie.hemisphereLights.value=X.state.hemi,Ie.directionalShadowMap.value=X.state.directionalShadowMap,Ie.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ie.spotShadowMap.value=X.state.spotShadowMap,Ie.spotLightMatrix.value=X.state.spotLightMatrix,Ie.spotLightMap.value=X.state.spotLightMap,Ie.pointShadowMap.value=X.state.pointShadowMap,Ie.pointShadowMatrix.value=X.state.pointShadowMatrix),Z.currentProgram=De,Z.uniformsList=null,De}function Ga(S){if(S.uniformsList===null){let B=S.currentProgram.getUniforms();S.uniformsList=Fi.seqWithValue(B.seq,S.uniforms)}return S.uniformsList}function za(S,B){let q=Le.get(S);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function rh(S,B,q,Z,X){B.isScene!==!0&&(B=I),E.resetTextureUnits();let me=B.fog,Se=Z.isMeshStandardMaterial?B.environment:null,be=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:yt,Ce=(Z.isMeshStandardMaterial?W:x).get(Z.envMap||Se),Be=Z.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,De=!!q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ie=!!q.morphAttributes.position,at=!!q.morphAttributes.normal,Ot=!!q.morphAttributes.color,gt=qt;Z.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(gt=v.toneMapping);let mi=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,tt=mi!==void 0?mi.length:0,Ve=Le.get(Z),vo=f.state.lights;if(z===!0&&(J===!0||S!==M)){let Wt=S===M&&Z.id===j;Oe.setState(Z,S,Wt)}let ot=!1;Z.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==vo.state.version||Ve.outputColorSpace!==be||X.isBatchedMesh&&Ve.batching===!1||!X.isBatchedMesh&&Ve.batching===!0||X.isInstancedMesh&&Ve.instancing===!1||!X.isInstancedMesh&&Ve.instancing===!0||X.isSkinnedMesh&&Ve.skinning===!1||!X.isSkinnedMesh&&Ve.skinning===!0||X.isInstancedMesh&&Ve.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ve.instancingColor===!1&&X.instanceColor!==null||Ve.envMap!==Ce||Z.fog===!0&&Ve.fog!==me||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Oe.numPlanes||Ve.numIntersection!==Oe.numIntersection)||Ve.vertexAlphas!==Be||Ve.vertexTangents!==De||Ve.morphTargets!==Ie||Ve.morphNormals!==at||Ve.morphColors!==Ot||Ve.toneMapping!==gt||_e.isWebGL2===!0&&Ve.morphTargetsCount!==tt)&&(ot=!0):(ot=!0,Ve.__version=Z.version);let Oi=Ve.currentProgram;ot===!0&&(Oi=rr(Z,B,X));let Ha=!1,zn=!1,Mo=!1,wt=Oi.getUniforms(),Bi=Ve.uniforms;if(le.useProgram(Oi.program)&&(Ha=!0,zn=!0,Mo=!0),Z.id!==j&&(j=Z.id,zn=!0),Ha||M!==S){wt.setValue(L,"projectionMatrix",S.projectionMatrix),wt.setValue(L,"viewMatrix",S.matrixWorldInverse);let Wt=wt.map.cameraPosition;Wt!==void 0&&Wt.setValue(L,ye.setFromMatrixPosition(S.matrixWorld)),_e.logarithmicDepthBuffer&&wt.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&wt.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,zn=!0,Mo=!0)}if(X.isSkinnedMesh){wt.setOptional(L,X,"bindMatrix"),wt.setOptional(L,X,"bindMatrixInverse");let Wt=X.skeleton;Wt&&(_e.floatVertexTextures?(Wt.boneTexture===null&&Wt.computeBoneTexture(),wt.setValue(L,"boneTexture",Wt.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(wt.setOptional(L,X,"batchingTexture"),wt.setValue(L,"batchingTexture",X._matricesTexture,E));let So=q.morphAttributes;if((So.position!==void 0||So.normal!==void 0||So.color!==void 0&&_e.isWebGL2===!0)&&Xe.update(X,q,Oi),(zn||Ve.receiveShadow!==X.receiveShadow)&&(Ve.receiveShadow=X.receiveShadow,wt.setValue(L,"receiveShadow",X.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Bi.envMap.value=Ce,Bi.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),zn&&(wt.setValue(L,"toneMappingExposure",v.toneMappingExposure),Ve.needsLights&&oh(Bi,Mo),me&&Z.fog===!0&&pe.refreshFogUniforms(Bi,me),pe.refreshMaterialUniforms(Bi,Z,A,V,ee),Fi.upload(L,Ga(Ve),Bi,E)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Fi.upload(L,Ga(Ve),Bi,E),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&wt.setValue(L,"center",X.center),wt.setValue(L,"modelViewMatrix",X.modelViewMatrix),wt.setValue(L,"normalMatrix",X.normalMatrix),wt.setValue(L,"modelMatrix",X.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let Wt=Z.uniformsGroups;for(let yo=0,sh=Wt.length;yo<sh;yo++)if(_e.isWebGL2){let Va=Wt[yo];Ye.update(Va,Oi),Ye.bind(Va,Oi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Oi}function oh(S,B){S.ambientLightColor.needsUpdate=B,S.lightProbe.needsUpdate=B,S.directionalLights.needsUpdate=B,S.directionalLightShadows.needsUpdate=B,S.pointLights.needsUpdate=B,S.pointLightShadows.needsUpdate=B,S.spotLights.needsUpdate=B,S.spotLightShadows.needsUpdate=B,S.rectAreaLights.needsUpdate=B,S.hemisphereLights.needsUpdate=B}function ah(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(S,B,q){Le.get(S.texture).__webglTexture=B,Le.get(S.depthTexture).__webglTexture=q;let Z=Le.get(S);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=q===void 0,Z.__autoAllocateDepthBuffer||he.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,B){let q=Le.get(S);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(S,B=0,q=0){b=S,U=B,R=q;let Z=!0,X=null,me=!1,Se=!1;if(S){let Ce=Le.get(S);Ce.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(L.FRAMEBUFFER,null),Z=!1):Ce.__webglFramebuffer===void 0?E.setupRenderTarget(S):Ce.__hasExternalTextures&&E.rebindTextures(S,Le.get(S.texture).__webglTexture,Le.get(S.depthTexture).__webglTexture);let Be=S.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Se=!0);let De=Le.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(De[B])?X=De[B][q]:X=De[B],me=!0):_e.isWebGL2&&S.samples>0&&E.useMultisampledRTT(S)===!1?X=Le.get(S).__webglMultisampledFramebuffer:Array.isArray(De)?X=De[q]:X=De,y.copy(S.viewport),D.copy(S.scissor),G=S.scissorTest}else y.copy($).multiplyScalar(A).floor(),D.copy(O).multiplyScalar(A).floor(),G=Q;if(le.bindFramebuffer(L.FRAMEBUFFER,X)&&_e.drawBuffers&&Z&&le.drawBuffers(S,X),le.viewport(y),le.scissor(D),le.setScissorTest(G),me){let Ce=Le.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ce.__webglTexture,q)}else if(Se){let Ce=Le.get(S.texture),Be=B||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ce.__webglTexture,q||0,Be)}j=-1},this.readRenderTargetPixels=function(S,B,q,Z,X,me,Se){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Le.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Se!==void 0&&(be=be[Se]),be){le.bindFramebuffer(L.FRAMEBUFFER,be);try{let Ce=S.texture,Be=Ce.format,De=Ce.type;if(Be!==St&&ve.convert(Be)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ie=De===vi&&(he.has("EXT_color_buffer_half_float")||_e.isWebGL2&&he.has("EXT_color_buffer_float"));if(De!==Gt&&ve.convert(De)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(De===Ht&&(_e.isWebGL2||he.has("OES_texture_float")||he.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=S.width-Z&&q>=0&&q<=S.height-X&&L.readPixels(B,q,Z,X,ve.convert(Be),ve.convert(De),me)}finally{let Ce=b!==null?Le.get(b).__webglFramebuffer:null;le.bindFramebuffer(L.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(S,B,q=0){let Z=Math.pow(2,-q),X=Math.floor(B.image.width*Z),me=Math.floor(B.image.height*Z);E.setTexture2D(B,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,S.x,S.y,X,me),le.unbindTexture()},this.copyTextureToTexture=function(S,B,q,Z=0){let X=B.image.width,me=B.image.height,Se=ve.convert(q.format),be=ve.convert(q.type);E.setTexture2D(q,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,q.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,q.unpackAlignment),B.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Z,S.x,S.y,X,me,Se,be,B.image.data):B.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Z,S.x,S.y,B.mipmaps[0].width,B.mipmaps[0].height,Se,B.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,Z,S.x,S.y,Se,be,B.image),Z===0&&q.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),le.unbindTexture()},this.copyTextureToTexture3D=function(S,B,q,Z,X=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let me=S.max.x-S.min.x+1,Se=S.max.y-S.min.y+1,be=S.max.z-S.min.z+1,Ce=ve.convert(Z.format),Be=ve.convert(Z.type),De;if(Z.isData3DTexture)E.setTexture3D(Z,0),De=L.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)E.setTexture2DArray(Z,0),De=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,Z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,Z.unpackAlignment);let Ie=L.getParameter(L.UNPACK_ROW_LENGTH),at=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ot=L.getParameter(L.UNPACK_SKIP_PIXELS),gt=L.getParameter(L.UNPACK_SKIP_ROWS),mi=L.getParameter(L.UNPACK_SKIP_IMAGES),tt=q.isCompressedTexture?q.mipmaps[X]:q.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,tt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,tt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,S.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,S.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,S.min.z),q.isDataTexture||q.isData3DTexture?L.texSubImage3D(De,X,B.x,B.y,B.z,me,Se,be,Ce,Be,tt.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(De,X,B.x,B.y,B.z,me,Se,be,Ce,tt.data)):L.texSubImage3D(De,X,B.x,B.y,B.z,me,Se,be,Ce,Be,tt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Ie),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,at),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ot),L.pixelStorei(L.UNPACK_SKIP_ROWS,gt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,mi),X===0&&Z.generateMipmaps&&L.generateMipmap(De),le.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?E.setTextureCube(S,0):S.isData3DTexture?E.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?E.setTexture2DArray(S,0):E.setTexture2D(S,0),le.unbindTexture()},this.resetState=function(){U=0,R=0,b=null,le.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===en?"display-p3":"srgb",t.unpackColorSpace=ke.workingColorSpace===Gi?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===et?ti:Mr}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ti?et:yt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}};var ir=class extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Ji=class extends ct{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var lo=class extends ze{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};var co=class extends jt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};var qf=new $e,Ia=new _n,uo=new di,fo=new H,ho=class extends ht{constructor(e=new ct,t=new co){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere),uo.applyMatrix4(r),uo.radius+=o,e.ray.intersectsSphere(uo)===!1)return;qf.copy(r).invert(),Ia.copy(e.ray).applyMatrix4(qf);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let m=Math.max(0,s.start),g=Math.min(c.count,s.start+s.count);for(let p=m,_=g;p<_;p++){let f=c.getX(p);fo.fromBufferAttribute(d,f),Yf(fo,f,l,r,e,t,this)}}else{let m=Math.max(0,s.start),g=Math.min(d.count,s.start+s.count);for(let p=m,_=g;p<_;p++)fo.fromBufferAttribute(d,p),Yf(fo,p,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function Yf(i,e,t,n,r,o,s){let a=Ia.distanceSqToPoint(i);if(a<t){let l=new H;Ia.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:s})}}ke.enabled=!1;var Na="#f4fbfa",ap=["#0b6577","#135b78","#145a5a"],sp=["#0b8a98","#0b7287","#2a8a7c"],lp=["#1fb5b2","#48c5ad","#69bfa3","#7cc49a"],cp=[["#0b6f80","#1fb0aa"],["#0b8f9b","#48c5ad"],["#125a73","#0b98a5"],["#1a9f9a","#69bfa3"],["#2f7d6d","#6fb58f"],["#167a72","#58b79a"]],up=[["#3fae96","#9fd8b0"],["#48c5ad","#b3e3c3"]],Jf=["ovate","cordate","lance","drip"],fp={ovate:0,cordate:1,lance:2,drip:3},hp={ovate:[.42,.52],cordate:[.62,.78],lance:[.17,.24],drip:[.4,.5]},Fa={coral:{main:"#ff748a",light:"#ffd3cf",alt:"#f5aa4b",inner:"#ffe2de",eye:"#c2365a"},pink:{main:"#e982bb",light:"#fbd9ec",alt:"#ba8ee8",inner:"#f7dff4",eye:"#a8407e"},gold:{main:"#f5aa4b",light:"#fde6ae",alt:"#ff748a",inner:"#fff2c9",eye:"#c46a1c"},lav:{main:"#ba8ee8",light:"#e8ddfb",alt:"#80a9f4",inner:"#f1e9fd",eye:"#6b48a8"},peri:{main:"#80a9f4",light:"#d8e5fd",alt:"#ba8ee8",inner:"#e9f0fe",eye:"#3d5fae"}},Ke=i=>[parseInt(i.slice(1,3),16)/255,parseInt(i.slice(3,5),16)/255,parseInt(i.slice(5,7),16)/255],Bn=(i,e,t)=>[i[0]+(e[0]-i[0])*t,i[1]+(e[1]-i[1])*t,i[2]+(e[2]-i[2])*t],ai=(i,e,t)=>i<e?e:i>t?t:i,dp=(i,e,t)=>{let n=ai((t-i)/(e-i),0,1);return n*n*(3-2*n)},go=(i,e)=>{let t=i-e;for(;t>Math.PI;)t-=2*Math.PI;for(;t<-Math.PI;)t+=2*Math.PI;return t};function Qf(i){let e=i>>>0,t=()=>{e+=1831565813;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return{next:t,range:(n,r)=>n+t()*(r-n),int:(n,r)=>Math.floor(n+t()*(r-n+1)),chance:n=>t()<n,pick:n=>n[Math.floor(t()*n.length)],sign:()=>t()<.5?-1:1,shuffle:n=>{let r=n.slice();for(let o=r.length-1;o>0;o--){let s=Math.floor(t()*(o+1));[r[o],r[s]]=[r[s],r[o]]}return r}}}var po=(i,e,t)=>{let n=1+i.range(-t,t);return[ai(e[0]*n,0,1),ai(e[1]*n,0,1),ai(e[2]*n,0,1)]},pi=`
uniform float uT; uniform float uTime; uniform float uGlow; uniform vec2 uPar; uniform vec2 uShadowOff;
vec3 rotZ(vec3 p, float a){ float c=cos(a), s=sin(a); return vec3(c*p.x - s*p.y, s*p.x + c*p.y, p.z); }
vec3 rotX(vec3 p, float a){ float c=cos(a), s=sin(a); return vec3(p.x, c*p.y - s*p.z, s*p.y + c*p.z); }
vec3 rotY(vec3 p, float a){ float c=cos(a), s=sin(a); return vec3(c*p.x + s*p.z, p.y, -s*p.x + c*p.z); }
float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
  return mix(mix(hash(i), hash(i+vec2(1.0,0.0)), f.x), mix(hash(i+vec2(0.0,1.0)), hash(i+vec2(1.0,1.0)), f.x), f.y); }
`,Gn=`
  p.xy += uPar * (p.z + 0.6);
#ifdef SHADOW
  p.xy += uShadowOff * (p.z + 1.0);
#endif
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
`,_o=`
#ifdef SHADOW
  gl_FragColor = vec4(0.0, 0.0, 0.0, alpha);
#else
  gl_FragColor = vec4(c, alpha);
#endif
`,xo=`
const vec3 LDIR = normalize(vec3(-0.45, 0.6, 0.75));
const vec3 HDIR = normalize(vec3(-0.45, 0.6, 1.75));
`,pp=pi+`
attribute vec3 aOff; attribute float aW; attribute float aBirth; attribute float aArc; attribute float aPulse; attribute vec3 aCol; attribute float aSide;
varying vec3 vN; varying vec3 vCol; varying float vArc; varying float vSide; varying float vPulse;
void main(){
  float g = clamp((uT - aBirth) / 0.24, 0.0, 1.0); g = g*g*(3.0-2.0*g);
  vec3 p = position + aOff * aW * g;
  vN = aOff; vCol = aCol; vArc = aArc; vSide = aSide; vPulse = aPulse;
${Gn}
}`,mp=pi+xo+`
varying vec3 vN; varying vec3 vCol; varying float vArc; varying float vSide; varying float vPulse;
void main(){
  vec3 N = normalize(vN);
  float d = dot(N, LDIR)*0.5 + 0.5;
  float sp = pow(max(dot(N, HDIR), 0.0), 30.0);
  // bark: fine longitudinal fibres, a few lenticel flecks, darker ring scars
  float fib = vnoise(vec2(vSide*9.0, vArc*26.0)) * 0.6 + vnoise(vec2(vSide*23.0, vArc*70.0)) * 0.4;
  float fleck = smoothstep(0.82, 0.9, vnoise(vec2(vSide*14.0 + 3.1, vArc*38.0)));
  float ring = smoothstep(0.93, 1.0, fract(vArc*5.0 + vnoise(vec2(vSide*2.0, vArc))*0.3)) * step(0.6, hash(vec2(floor(vArc*5.0), 1.7)));
  vec3 c = vCol * (0.66 + 0.46*d);
  c *= 0.9 + 0.16*fib;
  c = mix(c, c*1.25 + 0.05, fleck*0.35);
  c *= 1.0 - 0.14*ring;
  float rim = 1.0 - abs(N.z);
  c = mix(c, c*0.82, rim*0.35);                                   // rounded, shaded flanks
  c += vec3(0.85, 1.0, 0.98) * sp * 0.30 * (0.6 + 0.4*fib);
  float head = fract(uTime*0.075 + vPulse) * 16.0;
  float band = exp(-pow((vArc - head)*1.9, 2.0));
  c = mix(c, vec3(0.78, 1.0, 0.97), band * 0.35 * uGlow);
  float alpha = 1.0;
${_o}
}`,gp=pi+`
attribute vec3 iPos; attribute float iRot; attribute vec3 iSize; attribute float iBirth; attribute float iDur;
attribute vec3 iColA; attribute vec3 iColB; attribute float iPhase; attribute float iGlowW; attribute float iAsym; attribute float iFade;
attribute vec4 iShape; // type, serration, twist, droop
varying vec2 vUv; varying vec3 vN; varying vec3 vColA; varying vec3 vColB; varying float vGlow; varying float vFade; varying vec4 vShape; varying float vPhase;
float leafW(float v, float t){
  if (t < 0.5) return pow(sin(3.14159265 * pow(v, 0.78)), 1.05);                       // ovate
  if (t < 1.5) return pow(sin(3.14159265 * (0.1 + 0.9 * pow(v, 0.85))), 0.85);         // cordate
  if (t < 2.5) return pow(sin(3.14159265 * pow(v, 0.92)), 1.25);                       // lanceolate
  return pow(sin(3.14159265 * pow(v, 0.68)), 1.0) * (1.0 - 0.62 * smoothstep(0.55, 1.0, v)); // drip tip
}
void main(){
  float g = clamp((uT - iBirth) / iDur, 0.0, 1.0);
  float e = 1.0 - pow(1.0 - g, 3.0);
  float u = uv.x, v = uv.y;
  float side = u < 0.0 ? -1.0 : 1.0;
  float w = leafW(v, iShape.x) * (side > 0.0 ? iAsym : 2.0 - iAsym);
  vec3 p = vec3(u * w, v, 0.0);
  if (iShape.x > 0.5 && iShape.x < 1.5) p.y -= 0.22 * abs(u) * pow(1.0 - v, 3.0);        // heart-shaped base lobes
  float fold = 1.0 - abs(u);
  p.z = fold*fold*0.09*w + abs(u)*w*0.13 - v*v*(0.14 + iShape.w*0.3);                  // midrib ridge, V-fold, arch and droop
  vec3 n = normalize(vec3(-u*0.3 - side*0.14, v*(0.3 + iShape.w*0.5), 1.0));
  p.z += (1.0 - e) * v*v*0.45;                                                          // tip still rolled
  float f = (1.0 - e) * 1.25;
  p = rotY(p, -side*f); n = rotY(n, -side*f);                                           // halves open like a book
  float tw = iShape.z * v;
  p = rotY(p, tw); n = rotY(n, tw);                                                     // twist toward the tip
  p.y *= mix(0.25, 1.0, e);
  p *= vec3(iSize.y, iSize.x, iSize.x * 0.6);
  p *= smoothstep(0.0, 0.18, g);
  float sway = sin(uTime*0.62 + iPhase)*0.035 * e + sin(uTime*1.37 + iPhase*2.0)*0.012 * e;
  p = rotZ(p, iRot + sway); n = rotZ(n, iRot + sway);
  p += iPos;
  vUv = uv; vN = n; vColA = iColA; vColB = iColB; vGlow = iGlowW; vFade = iFade; vShape = iShape; vPhase = iPhase;
${Gn}
}`,_p=pi+xo+`
uniform vec3 uBg;
varying vec2 vUv; varying vec3 vN; varying vec3 vColA; varying vec3 vColB; varying float vGlow; varying float vFade; varying vec4 vShape; varying float vPhase;
void main(){
  float u = vUv.x, v = vUv.y, au = abs(u);
  // serrated margin, cut in the fragment so it stays crisp at any size
  float tooth = abs(fract(v*17.0 + (u > 0.0 ? 0.0 : 0.5)) - 0.5) * 2.0;
  float lim = 1.0 - vShape.y * 0.10 * tooth * smoothstep(0.06, 0.22, v) * smoothstep(1.0, 0.86, v);
  float fw = fwidth(au) * 1.3 + 1e-4;
  float edgeA = 1.0 - smoothstep(lim - fw, lim + fw*0.4, au);
  if (edgeA < 0.02) discard;
  bool back = gl_FrontFacing; // the grid's geometric front faces away from the camera
  vec3 N = normalize(vN); if (back) N = -N;
  float d = dot(N, LDIR)*0.5 + 0.5;
  vec3 base = mix(vColA, vColB, smoothstep(0.0, 1.0, v)*0.8 + au*0.2);
  float mott = vnoise(vec2(u*5.0, v*9.0) + vPhase*7.0)*0.6 + vnoise(vec2(u*14.0, v*24.0) + vPhase*3.0)*0.4;
  base *= 0.92 + 0.14*mott;
  vec3 c = base * (0.56 + 0.46*d);
  // venation: midrib, curving secondaries, a faint tertiary net
  float mid = 1.0 - smoothstep(0.0, 0.03 + 0.035*(1.0 - v), au);
  float t = fract(v*7.0 - au*1.6 + 0.04*sin(au*9.0));
  float ld = min(t, 1.0 - t);
  float lat = (1.0 - smoothstep(0.0, 0.045, ld)) * smoothstep(0.93, 0.5, au) * step(0.06, v) * (1.0 - mid);
  float t2 = fract(v*23.0 + au*3.0 + vnoise(vec2(u, v)*8.0 + vPhase)*0.7);
  float net = (1.0 - smoothstep(0.0, 0.09, min(t2, 1.0 - t2))) * smoothstep(0.95, 0.35, au) * (1.0 - mid);
  float vein = max(mid*0.85, max(lat*0.62, net*0.18));
  c *= 1.0 - 0.07 * (1.0 - smoothstep(0.0, 0.14, ld)) * (1.0 - lat) * step(0.06, v);  // tissue dips beside the veins
  vec3 vc = mix(c*1.1, vec3(0.86, 1.0, 0.95), 0.3 + 0.3*vGlow*uGlow);
  c = mix(c, vc, vein);
  float edge = smoothstep(0.55, 1.0, au);
  c = mix(c, c*1.1 + vec3(0.04, 0.08, 0.05), edge*0.32);                               // light through the thin margin
  c *= 1.0 - 0.2 * smoothstep(0.9, 1.0, au / lim);                                      // fine darker rim
  c *= 0.84 + 0.16 * smoothstep(0.0, 0.2, v);                                           // darker where it meets the stalk
  if (back) c = mix(c, vec3(0.64, 0.8, 0.75), 0.45);                                    // paler matte underside
  float sp = pow(max(dot(N, HDIR), 0.0), 28.0) * (back ? 0.04 : 0.24) * (0.65 + 0.35*mott) * (1.0 - vein*0.5);
  c += vec3(0.9, 1.0, 1.0) * sp;                                                        // waxy cuticle
  c += vec3(0.45, 1.0, 0.92) * vein * vGlow * uGlow * 0.14;
  c = mix(c, uBg, vFade);
  float alpha = (0.97 - 0.09*edge) * edgeA;
${_o}
}`,xp=pi+`
attribute vec3 iPos; attribute float iRot; attribute vec3 iSize; attribute float iBirth; attribute float iOpen; attribute float iDur;
attribute float iTilt; attribute vec3 iColA; attribute vec3 iColB; attribute vec3 iColC; attribute float iShape; attribute float iPhase;
attribute vec4 iStyle; // notch, ruffle, pigment veins, eye
varying vec2 vUv; varying vec3 vN; varying vec3 vColA; varying vec3 vColB; varying vec3 vColC; varying vec4 vStyle; varying float vPhase;
void main(){
  float bud = smoothstep(0.0, 0.9, uT - iBirth);
  float o = clamp((uT - iBirth - iOpen) / iDur, 0.0, 1.0);
  o = o < 0.5 ? 4.0*o*o*o : 1.0 - pow(-2.0*o + 2.0, 3.0)/2.0;
  float u = uv.x, v = uv.y;
  float pointed = pow(sin(3.14159265 * v), 0.9) * (1.0 - 0.3*v);
  float rounded = sqrt(max(0.0, 1.0 - pow(2.0*v - 1.0, 4.0))) * (0.5 + 0.5*smoothstep(0.0, 0.55, v));
  float w = mix(rounded, pointed, iShape);
  vec3 p = vec3(u * w * iSize.y, v * iSize.x * (0.55 + 0.45*o), 0.0);
  p.y -= iStyle.x * iSize.x * 0.16 * pow(1.0 - abs(u), 2.0) * smoothstep(0.72, 1.0, v);     // notched tip
  p.z = u*u*w*iSize.z + v*v*iSize.x*0.10;
  p.z += iStyle.y * iSize.x * 0.05 * sin(u*7.0 + v*6.0 + iPhase*3.0) * smoothstep(0.35, 1.0, v); // ruffled edge
  vec3 n = normalize(vec3(-u*0.9, -v*0.25, 1.0));
  float breathe = sin(uTime*0.5 + iPhase) * 0.035 * o;
  float tilt = mix(1.42, iTilt, o) + breathe;
  p = rotX(p, tilt); n = rotX(n, tilt);
  p *= bud;
  p = rotZ(p, iRot); n = rotZ(n, iRot);
  p += iPos;
  vUv = uv; vN = n; vColA = iColA; vColB = iColB; vColC = iColC; vStyle = iStyle; vPhase = iPhase;
${Gn}
}`,vp=pi+xo+`
varying vec2 vUv; varying vec3 vN; varying vec3 vColA; varying vec3 vColB; varying vec3 vColC; varying vec4 vStyle; varying float vPhase;
void main(){
  float u = vUv.x, v = vUv.y, au = abs(u);
  bool back = gl_FrontFacing; // the grid's geometric front faces away from the camera
  vec3 N = normalize(vN); if (back) N = -N;
  float d = dot(N, LDIR)*0.5 + 0.5;
  vec3 c = mix(vColA, vColB, smoothstep(0.15, 0.95, v));
  c = mix(vColC, c, mix(1.0, smoothstep(0.05, 0.3, v), vStyle.w));                       // contrasting eye at the base
  float pv = (1.0 - smoothstep(0.0, 0.1, abs(fract(u*3.5 + 0.5 + 0.08*sin(v*6.0)) - 0.5))) * (1.0 - v*0.75);
  c = mix(c, c*0.78, pv * vStyle.z * 0.6);                                               // pigment veins
  c *= 0.96 + 0.06*vnoise(vec2(u*9.0, v*14.0) + vPhase*5.0);                             // velvety texture
  c *= 0.8 + 0.32*d;
  c *= 0.86 + 0.14*smoothstep(0.0, 0.25, v);
  c = mix(c, c*1.08 + 0.07, smoothstep(0.6, 1.0, au)*0.5);                               // translucent margin
  if (back) c = mix(c, c*0.9 + 0.08, 0.5);
  c += vec3(1.0, 0.86, 0.55) * pow(1.0 - v, 4.0) * 0.14 * uGlow;
  c += vec3(1.0) * pow(max(dot(N, HDIR), 0.0), 16.0) * 0.12;
  float alpha = 0.96 - 0.12*smoothstep(0.7, 1.0, au);
${_o}
}`,Mp=pi+`
attribute vec3 iPos; attribute float iR; attribute float iBirth; attribute vec3 iColA; attribute vec3 iColB; attribute float iKind;
varying vec3 vN; varying vec2 vUv; varying vec3 vColA; varying vec3 vColB; varying float vKind;
void main(){
  float g = smoothstep(0.0, 1.1, uT - iBirth);
  vec3 p = position * iR * g * vec3(1.0, 1.0, iKind > 1.5 ? 0.8 : 0.5);
  p += iPos;
  vN = normal; vUv = uv; vColA = iColA; vColB = iColB; vKind = iKind;
${Gn}
}`,Sp=pi+xo+`
varying vec3 vN; varying vec2 vUv; varying vec3 vColA; varying vec3 vColB; varying float vKind;
void main(){
  vec3 N = normalize(vN);
  float d = dot(N, LDIR)*0.5 + 0.5;
  float th = vUv.x * 6.2831853, r = vUv.y;
  float pat = 0.0;
  if (vKind < 0.5) { vec2 cell = fract(vUv * vec2(22.0, 7.0)) - 0.5; pat = 1.0 - smoothstep(0.18, 0.32, length(cell)); }
  else if (vKind < 1.5) { pat = smoothstep(0.05, 0.6, sin(th*21.0 + r*46.0) * sin(th*34.0 - r*46.0)); }  // florets in spirals
  vec3 c = mix(vColB, vColA, N.z) * (0.74 + 0.36*d);
  c = mix(c, c*0.68, pat*0.6);
  c += vec3(1.0) * pow(max(dot(N, HDIR), 0.0), 20.0) * 0.18;
  c += vec3(1.0, 0.93, 0.6) * (0.06 + 0.18*uGlow) * N.z;
  float alpha = 1.0;
${_o}
}`,yp=pi+`
attribute vec3 iPos; attribute float iR; attribute vec3 iCol; attribute float iMax; attribute float iBirth; attribute float iPhase;
varying vec2 vQ; varying vec3 vCol; varying float vA;
void main(){
  vec3 p = vec3(position.xy * iR, 0.0) + iPos;
  vQ = position.xy; vCol = iCol;
  vA = iMax * smoothstep(0.0, 2.2, uT - iBirth) * uGlow * (0.86 + 0.14*sin(uTime*0.9 + iPhase));
${Gn}
}`,Ep=`
varying vec2 vQ; varying vec3 vCol; varying float vA;
void main(){
  float r = length(vQ);
  float a = exp(-r*r*3.2) * (1.0 - smoothstep(0.62, 0.8, r));
  vec3 c = mix(vCol, vec3(1.0), exp(-r*r*14.0)*0.55);
  gl_FragColor = vec4(c, a * vA);
}`,Tp=pi+`
uniform float uPx;
attribute float aBirth; attribute vec3 aCol; attribute float aSize; attribute float aPhase;
varying vec3 vCol; varying float vA;
void main(){
  float g = smoothstep(0.0, 1.4, uT - aBirth);
  vec3 p = position;
  p.x += sin(uTime*0.31 + aPhase*3.0) * 0.035;
  p.y += sin(uTime*0.43 + aPhase) * 0.045;
  vCol = aCol; vA = g * (0.7 + 0.3*sin(uTime*1.3 + aPhase*5.0));
  gl_PointSize = aSize * uPx * g;
${Gn}
}`,bp=`
varying vec3 vCol; varying float vA;
void main(){
  float r = length(gl_PointCoord - 0.5) * 2.0;
  float a = 1.0 - smoothstep(0.45, 1.0, r);
  gl_FragColor = vec4(mix(vCol, vec3(1.0), (1.0 - r)*0.45), a * vA * 0.9);
}`,Zf="void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }",Ap=`
uniform sampler2D tex; uniform vec2 dir; uniform vec2 res;
void main(){
  vec2 uv = gl_FragCoord.xy / res;
  float w[5]; w[0]=0.2270270; w[1]=0.1945946; w[2]=0.1216216; w[3]=0.0540541; w[4]=0.0162162;
  float a = texture2D(tex, uv).a * w[0];
  for (int i = 1; i < 5; i++) { vec2 o = dir * float(i) * 1.6 / res; a += (texture2D(tex, uv + o).a + texture2D(tex, uv - o).a) * w[i]; }
  gl_FragColor = vec4(0.0, 0.0, 0.0, a);
}`,wp=`
uniform sampler2D tex; uniform vec2 res; uniform vec3 col; uniform float strength; uniform vec4 rects[32]; uniform int nr; uniform float padPx;
void main(){
  vec2 q = gl_FragCoord.xy;
  float a = texture2D(tex, q / res).a * strength;
  float m = 1.0;
  for (int i = 0; i < 32; i++) {
    if (i >= nr) break;
    vec4 r = rects[i];
    vec2 c = (r.xy + r.zw) * 0.5, h = (r.zw - r.xy) * 0.5;
    vec2 d = abs(q - c) - h;
    float sd = length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
    m = min(m, smoothstep(0.0, padPx, sd));
  }
  gl_FragColor = vec4(col, a * m);
}`;function Kf(i,e){let t=[],n=[],r=[];for(let s=0;s<=e;s++)for(let a=0;a<=i;a++){let l=a/i*2-1,c=s/e;t.push(0,0,0),n.push(l,c)}for(let s=0;s<e;s++)for(let a=0;a<i;a++){let l=s*(i+1)+a,c=l+i+1;r.push(l,c,l+1,c,c+1,l+1)}let o=new Ji;return o.setAttribute("position",new ze(new Float32Array(t),3)),o.setAttribute("uv",new ze(new Float32Array(n),2)),o.setIndex(r),o}function Rp(i,e){let t=[],n=[],r=[],o=[];for(let a=0;a<=i;a++){let l=a/i*Math.PI/2;for(let c=0;c<=e;c++){let h=c/e*Math.PI*2,d=Math.sin(l)*Math.cos(h),m=Math.sin(l)*Math.sin(h),g=Math.cos(l);t.push(d,m,g),n.push(d,m,g),r.push(c/e,a/i)}}for(let a=0;a<i;a++)for(let l=0;l<e;l++){let c=a*(e+1)+l,h=c+e+1;o.push(c,h,c+1,h,h+1,c+1)}let s=new Ji;return s.setAttribute("position",new ze(new Float32Array(t),3)),s.setAttribute("normal",new ze(new Float32Array(n),3)),s.setAttribute("uv",new ze(new Float32Array(r),2)),s.setIndex(o),s}function Cp(){let i=new Ji;return i.setAttribute("position",new ze(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),i.setIndex([0,1,2,0,2,3]),i}function mo(i,e,t){let n=new Ji;for(let r of Object.keys(i.attributes))n.setAttribute(r,i.attributes[r]);n.setIndex(i.index);for(let[r,[o,s]]of Object.entries(t))n.setAttribute(r,new lo(new Float32Array(o),s));return n.instanceCount=e,n}function Lp(i){let t=0,n=0;for(let f of i)t+=f.pts.length*7,n+=(f.pts.length-1)*6*6;let r=new Float32Array(t*3),o=new Float32Array(t*3),s=new Float32Array(t),a=new Float32Array(t),l=new Float32Array(t),c=new Float32Array(t),h=new Float32Array(t*3),d=new Float32Array(t),m=new Uint32Array(n),g=0,p=0;for(let f of i){let u=g,T=Ke(ap[Math.floor(f.tone*3)%3]),v=Ke(sp[Math.floor(f.tone*7)%3]),C=Ke(lp[Math.floor(f.tone*11)%4]),U=f.pts.length;for(let R=0;R<U;R++){let b=f.pts[R],j=R/(U-1),M;if(f.col)M=Bn(f.col[0],f.col[1],j);else{let Y=f.depth===0?j:f.depth===3?.75+j*.25:.35+j*.65;M=Y<.6?Bn(T,v,Y/.6):Bn(v,C,(Y-.6)/.4)}let y=Math.sin(b.a),D=Math.cos(b.a),G=b.z??f.z;for(let Y=0;Y<7;Y++){let w=Y/6*Math.PI;r.set([b.x,-b.y,G],g*3),o.set([Math.cos(w)*y,Math.cos(w)*D,Math.sin(w)],g*3),s[g]=b.w,a[g]=b.t,l[g]=b.arc,c[g]=f.tree*.137%1,h.set(M,g*3),d[g]=Y/6,g++}}for(let R=0;R<U-1;R++)for(let b=0;b<6;b++){let j=u+R*7+b,M=j+7;m.set([j,M,j+1,M,M+1,j+1],p),p+=6}}let _=new ct;return _.setAttribute("position",new ze(r,3)),_.setAttribute("aOff",new ze(o,3)),_.setAttribute("aW",new ze(s,1)),_.setAttribute("aBirth",new ze(a,1)),_.setAttribute("aArc",new ze(l,1)),_.setAttribute("aPulse",new ze(c,1)),_.setAttribute("aCol",new ze(h,3)),_.setAttribute("aSide",new ze(d,1)),_.setIndex(new ze(m,1)),_}function $f(i){return(e,t)=>{let n=1e9;for(let r of i){let o=(r.x0+r.x1)/2,s=(r.y0+r.y1)/2,a=Math.abs(e-o)-(r.x1-r.x0)/2,l=Math.abs(t-s)-(r.y1-r.y0)/2,c=Math.hypot(Math.max(a,0),Math.max(l,0))+Math.min(Math.max(a,l),0);c<n&&(n=c)}return n}}function eh(i,e){let t=[],n=new Set,r=s=>{for(let a=s.parentElement;a&&a!==e;a=a.parentElement){if(a===document.body||a===document.documentElement)return null;if(getComputedStyle(a).overflow!=="visible")return a}return null},o=document.createTreeWalker(i,NodeFilter.SHOW_TEXT);for(let s=o.nextNode();s;s=o.nextNode()){if(!s.textContent.trim())continue;let a=s.parentElement;if(!a||a.closest("script,style,noscript,template,.epx-garden,.epx-sidevine"))continue;let l=document.createRange();l.selectNodeContents(s);let c=r(s),h=c&&c.getBoundingClientRect();for(let d of l.getClientRects()){if(d.width<1||d.height<1)continue;if(!h){t.push(d);continue}(d.left<h.left-1||d.right>h.right+1||d.top<h.top-1||d.bottom>h.bottom+1)&&!n.has(c)&&h.width*h.height<4e6&&c!==e&&(n.add(c),t.push(h));let g=Math.max(d.left,h.left),p=Math.min(d.right,h.right),_=Math.max(d.top,h.top),f=Math.min(d.bottom,h.bottom);p-g>1&&f-_>1&&t.push({left:g,right:p,top:_,bottom:f,width:p-g,height:f-_})}}return t}function th(i,e){let{field:t,pad:n,k:r}=e,o=e.density??1,s=(p,_,f)=>t(p,_)-n-f,a=(p,_)=>{let u=t(p+.02,_)-t(p-.02,_),T=t(p,_+.02)-t(p,_-.02),v=Math.hypot(u,T)||1;return[u/v,T/v]},l={vines:[],leaves:[],flowers:[],petals:[],domes:[],halos:[],dust:[]},c=0;function h(p){let _=[],f=p.x,u=p.y,T=p.a,v=0,C=p.t0,U=.045,R=i.range(.5,1.4),b=i.range(2,4.2),j=i.range(0,6.3),M=i.range(0,6.3),y=i.range(.3,.9)*i.sign()*(p.calm??1),D=i.range(.15,.55)*(p.calm??1),G=i.range(0,6.3),Y=p.len/(p.dur||1),w=p.curl?p.len*i.range(.5,.72):1e9,N=i.sign(),V=.95*r,A=p.tree??c++;for(;v<=p.len;){let Q=v/p.len,F=Math.max(p.w0*Math.pow(1-Q*(p.taper??.86),.9),.007),z=s(f,u,F+p.reach);if(z<0&&(_.length>1||e.inside(f,u,0))&&!(p.main&&f>e.offX))break;p.clock==="scroll"&&(C=Math.max(C,u+(p.lead??0))),_.push({x:f,y:u,t:C,w:F,arc:p.arc0+v,a:T});let J=(y*Math.sin(R*v+j)+D*Math.sin(b*v+M))*U*1.3;if(v>w&&(J+=N*U*(2.2+(v-w)/(p.len-w)*16)),z<V){let ee=a(f,u),ae=-ee[1],de=ee[0];ae*Math.cos(T)+de*Math.sin(T)<0&&(ae=-ae,de=-de);let ye=1-Math.max(z,0)/V,I=Math.atan2(de+ee[1]*ye*.9,ae+ee[0]*ye*.9);J+=go(I,T)*Math.min(1,.06+ye*ye*.8)*.55}if(J+=e.steer(f,u,T,v,p),T+=J,p.clock!=="scroll"){let ee=.42+.58*Math.pow(Math.sin(v*1.25+G)*.5+.5,.6);C+=U/(Y*ee*1.25)}f+=Math.cos(T)*U,u+=Math.sin(T)*U,v+=U}if(_.length<6)return null;let k={pts:_,depth:p.depth,z:p.z,tree:A,len:v,tone:p.tone,curl:!!p.curl};l.vines.push(k);let K=[[.3,.5],[.22,.38],[.14,.24]][Math.min(p.depth,2)],$=i.range(.1,.25)*r,O=i.sign();for(let Q=2;Q<_.length;Q++){let F=_[Q],z=F.arc-p.arc0;if(z<$||($=z+i.range(.2,.38)*r/Math.sqrt(o)*(p.outward?.55:1)*(p.leafGap??1),p.curl&&z>w))continue;let J=z/v>.82;p.outward&&(O=(Math.cos(F.a+.8)*p.outward>0?1:-1)*(i.chance(.15)?-1:1));let ee=i.chance(.22),ae=!1;for(let de of ee?[O,-O]:[O]){let ye=i.range(K[0],K[1])*r*(J?.62:1)*(p.leafScale||1);d(F,F.a+de*i.range(.55,1.05),ye,F.t+i.range(.15,.6),p,J)&&(ae=!0)}ae&&(F.w*=1.16,_[Q-1]&&(_[Q-1].w*=1.06),_[Q+1]&&(_[Q+1].w*=1.06)),O=-O}if(p.depth<2){let Q=p.depth===0?p.branchEvery?Math.floor(v/p.branchEvery):i.int(2,4):i.int(1,2);for(let F=0;F<Q;F++){let z=p.branchEvery?Math.floor(_.length*((F+i.range(.2,.8))/Q)):Math.floor(_.length*i.range(.18,.82)),J=_[z];if(!J)continue;let ee=v-(J.arc-p.arc0);h({x:J.x,y:J.y,a:J.a+i.sign()*i.range(.45,1.15),t0:J.t+i.range(.15,.6),clock:p.clock,lead:p.lead,len:Math.min(Math.max(.5,ee*i.range(.4,.75))*(p.depth===0?1:.8),p.maxChild??99),dur:i.range(1.4,2.6),w0:J.w*i.range(.55,.72),depth:p.depth+1,arc0:J.arc,z:p.z+i.range(-.06,.08),tree:A,reach:K[1]*r*.55,tone:p.tone,curl:p.depth===1&&i.chance(.45),species:p.species,leafScale:p.leafScale,maxChild:p.maxChild})}if(i.chance(p.depth===0?.7:.35)||p.branchEvery&&i.chance(.5)){let F=p.branchEvery?Math.max(1,Math.floor(v/(p.branchEvery*1.7))):1;for(let z=0;z<F;z++){let J=Math.floor(_.length*i.range(.1,.95)),ee=_[J];ee&&h({x:ee.x,y:ee.y,a:ee.a+i.sign()*i.range(.5,1),t0:ee.t+i.range(.4,1),clock:p.clock,lead:p.lead,len:i.range(.35,.7)*r,dur:i.range(1.2,2),w0:ee.w*.35,depth:2,arc0:ee.arc,z:p.z+.02,tree:A,reach:.02,tone:p.tone,curl:!0,species:p.species})}}}return k}function d(p,_,f,u,T,v){let C=T.species||"ovate",U=f*i.range(.12,.22),R=p.x+Math.cos(_)*U,b=p.y+Math.sin(_)*U,j=_+i.range(-.15,.15),M=hp[C],y=f*i.range(M[0],M[1]),D=R+Math.cos(j)*f*.5,G=b+Math.sin(j)*f*.5;if(s(D,G,f*.55+y*.25+.02)<0)return!1;let Y=v&&i.chance(.6)?i.pick(up):i.pick(cp),w=i.range(-.28,.32),N=[];for(let V=0;V<=4;V++){let A=V/4;N.push({x:p.x+(R-p.x)*A,y:p.y+(b-p.y)*A,z:(T.z??0)+(w-(T.z??0))*A-.01,t:u-.12+A*.1,w:Math.max(.006,f*.035*(1-A*.4)),arc:p.arc+A*U,a:_})}return l.vines.push({pts:N,depth:3,z:w,tree:-1,len:U,tone:i.next()}),l.leaves.push({x:R,y:b,z:w,ang:j,len:f,wid:y,birth:u,dur:i.range(.9,1.7),colA:po(i,Ke(Y[0]),.08),colB:po(i,Ke(Y[1]),.06),phase:i.range(0,6.3),glow:i.chance(.08)?1:0,asym:i.range(.86,1.14),fade:w<-.12?.14:0,type:fp[C],serr:C==="ovate"||C==="cordate"?i.chance(.7)?1:0:C==="lance"?.4:0,twist:i.range(-.45,.45)*(i.chance(.35)?1.6:1),droop:i.range(0,.5)}),!0}function m(p){l.flowers.push(p)}function g(){for(let p of l.flowers){let _=p.hero?["lotus","cosmos","clematis","camellia","daisy","anemone"]:["lotus","cosmos","anemone","daisy","clematis"],f=p.kind||i.pick(_),u=Ke(p.cl.main),T=Ke(p.cl.light),v=Ke(p.cl.alt),C=Ke(p.cl.inner),U=Ke(p.cl.eye),R=i.range(0,6.3),b={lotus:{rings:3,n:i.int(8,11),wid:.36,shape:[.6,.95],tilt:[.16,.42,.78],style:[0,.2,.5,.15]},cosmos:{rings:1,n:8,wid:.62,shape:[0,.12],tilt:[.1],style:[1,.6,.9,.55]},clematis:{rings:1,n:6,wid:.46,shape:[.75,.9],tilt:[.08],style:[0,.35,1,.2]},camellia:{rings:4,n:i.int(6,7),wid:.62,shape:[0,.1],tilt:[.12,.42,.75,1.05],style:[0,.5,.25,.1]},daisy:{rings:2,n:i.int(16,22),wid:.16,shape:[.35,.5],tilt:[.06,.2],style:[.4,.1,.3,0]},anemone:{rings:2,n:i.int(5,6),wid:.6,shape:[0,.2],tilt:[.12,.36],style:[0,.3,.4,.9]}}[f];for(let D=0;D<b.rings;D++){let G=f==="lotus"&&D===2?b.n-2:b.n,Y=p.R*[1,.8,.6,.42][D]*(f==="daisy"&&D===1?1.08:1),w=Y*b.wid*Math.sqrt(9/Math.max(b.n,5)),N=b.tilt[D]+(p.bud?.8:0),V=D===0?u:D===1?i.chance(.5)?v:u:Bn(u,[1,1,1],.3),A=D>=2?C:Bn(T,D===1?C:T,.3);for(let k=0;k<G;k++)l.petals.push({x:p.x,y:p.y,z:p.z+D*.014+k*4e-4,rot:R+(k+(D%2?.5:0))*(Math.PI*2/G)+i.range(-.07,.07),len:Y*i.range(.9,1.07),wid:w*i.range(.88,1.1),cup:w*(f==="camellia"?.45:.28),birth:p.birth,open:D*.3+k*(f==="daisy"?.015:.035)+i.range(0,.12),dur:i.range(1.5,2.3),tilt:N,colA:po(i,V,.05),colB:po(i,A,.03),colC:U,shape:i.range(b.shape[0],b.shape[1]),phase:i.range(0,6.3),style:b.style})}let j=p.R*(f==="daisy"?.27:f==="anemone"?.2:f==="camellia"?.12:.15);if(l.domes.push({x:p.x,y:p.y,z:p.z+.06,r:j,birth:p.birth+.7,colA:Ke(f==="daisy"?"#e9b13f":f==="anemone"?"#2f3a4a":"#f5d36d"),colB:Ke(f==="daisy"?"#a8662a":f==="anemone"?"#161d27":"#f5aa4b"),kind:f==="daisy"?1:0}),!p.bud&&f!=="daisy"){let D=p.hero?i.int(12,20):i.int(6,9),G=f==="anemone"?[Ke("#3b4656"),Ke("#1e2633")]:[Ke("#fff4cf"),Ke("#f7e3a1")];for(let Y=0;Y<D;Y++){let w=Y/D*Math.PI*2+i.range(-.15,.15),N=j*i.range(1.5,2.3)*(f==="clematis"?1.3:1),V=[];for(let A=0;A<=4;A++){let k=A/4,K=j*.4+(N-j*.4)*k;V.push({x:p.x+Math.cos(w)*K,y:p.y+Math.sin(w)*K,z:p.z+.07+k*.06,t:p.birth+1.2+k*.4,w:p.R*.012*(1-k*.3),arc:k*N,a:w})}l.vines.push({pts:V,depth:4,z:p.z+.07,tree:-1,len:N,tone:0,col:G}),l.domes.push({x:V[4].x,y:V[4].y,z:p.z+.14,r:p.R*i.range(.03,.045),birth:p.birth+1.6+Y*.03,colA:Ke(f==="anemone"?"#2a2f3a":"#ffd36a"),colB:Ke(f==="anemone"?"#11151c":"#e7a23a"),kind:2})}}let M=i.int(4,5);for(let D=0;D<M;D++){let G=R+D/M*Math.PI*2+i.range(-.2,.2),Y=p.R*(p.bud?.75:.55)*i.range(.85,1.1);s(p.x+Math.cos(G)*Y*.7,p.y+Math.sin(G)*Y*.7,Y*.4)<0||l.leaves.push({x:p.x,y:p.y,z:p.z-.03,ang:G,len:Y,wid:Y*.34,birth:p.birth-.5,dur:1,colA:Ke("#1f8a76"),colB:Ke("#5fb894"),phase:i.range(0,6.3),glow:0,asym:1,fade:0,type:2,serr:0,twist:0,droop:.3})}let y=Math.min(p.R*(p.hero?2:1.6),(t(p.x,p.y)-n)/.8);y>p.R*1.05&&(p.hero||i.chance(.25))&&l.halos.push({x:p.x,y:p.y,z:-.6,r:y,col:Bn(u,[1,1,1],.3),max:p.hero?i.range(.18,.26):.13,birth:p.birth+1.2,phase:i.range(0,6.3)})}for(let p of l.leaves)if(p.glow){let _=p.x+Math.cos(p.ang)*p.len*.5,f=p.y+Math.sin(p.ang)*p.len*.5,u=Math.min(p.len*1.3,(t(_,f)-n)/.8);u>p.len*.6&&l.halos.push({x:_,y:f,z:-.62,r:u,col:Ke("#5be8e2"),max:.15,birth:p.birth+1.5,phase:i.range(0,6.3)})}}return{out:l,grow:h,clear:s,dressFlowers:g,addFlower:m,newTree:()=>c++}}function Pp(i,e){let t=Qf(i),{W:n,H:r}=e,o=n<7,s=!o&&n<11,a=ai(Math.min(n,r*1.25)/12.5,.58,1.1),l=o?.55:s?.78:1,c=o?.12:.24+.022*n+.06,h=$f(e.rects),d=(I,te,L)=>I>L&&I<n-L&&te>L&&te<r-L,m=(I,te,L)=>I<-.2||I>n+.2||te<-.2||te>r+.2?go(Math.atan2(r/2-te,n/2-I),L)*.14:0,g=t.shuffle(Jf).slice(0,2).concat(["ovate"]),p=th(t,{field:h,pad:c,k:a,density:l,inside:d,steer:m}),{out:_,grow:f,clear:u}=p,T=[],v=.4;for(let I=0;I<=n;I+=v)T.push({x:I,y:-.15,nx:0,ny:1}),T.push({x:I,y:r+.15,nx:0,ny:-1});for(let I=v;I<r;I+=v)T.push({x:-.15,y:I,nx:1,ny:0}),T.push({x:n+.15,y:I,nx:-1,ny:0});for(let I of T)I.room=Math.max(0,h(I.x+I.nx*.9,I.y+I.ny*.9)-c);let C=[[-.15,-.15,.6],[n+.15,-.15,Math.PI-.6],[-.15,r+.15,-.6],[n+.15,r+.15,-Math.PI+.6]],U=Math.round(ai(2*(n+r)/4.4,5,11)*(o?.85:l)),R=[];for(let[I,te,L]of t.shuffle(C))h(I+Math.cos(L),te+Math.sin(L))-c>.3&&R.push({x:I,y:te,a:L+t.range(-.35,.35)});let b=T.filter(I=>I.room>.25),j=0;for(;R.length<U&&b.length&&j++<400;){let I=b.reduce((le,We)=>le+Math.pow(We.room,1.3),0),te=t.next()*I,L=b[0];for(let le of b)if(te-=Math.pow(le.room,1.3),te<=0){L=le;break}if(R.some(le=>Math.hypot(le.x-L.x,le.y-L.y)<Math.max(1.2,(n+r)/9))){b.splice(b.indexOf(L),1);continue}let ge=Math.atan2(L.ny,L.nx),he=ge+t.sign()*Math.PI/2,_e=t.range(.25,.75);R.push({x:L.x,y:L.y,a:Math.atan2(Math.sin(ge)*(1-_e)+Math.sin(he)*_e,Math.cos(ge)*(1-_e)+Math.cos(he)*_e)})}let M=Math.min(n,r);for(let I of R)f({x:I.x,y:I.y,a:I.a,t0:t.range(.1,1.3),len:t.range(.5,.85)*M*(o?.85:1)+t.range(.6,1.4),dur:t.range(2.6,3.6),w0:t.range(.034,.05)*a,depth:0,arc0:0,z:t.range(-.08,.12),reach:.24*a,tone:t.next(),species:t.pick(g)});if(o)for(let I of[0,1]){let te=Math.max(2,Math.round(r/3.2));for(let L=0;L<te;L++){let ge=L%2===0,he=ge?r*L/te-t.range(0,.3):r*(L+1)/te+t.range(0,.3);f({x:I?n-t.range(.03,.09):t.range(.03,.09),y:ai(he,-.2,r+.2),a:(ge?Math.PI/2:-Math.PI/2)+(I?1:-1)*(ge?-1:1)*t.range(.04,.14),t0:t.range(.2,2.2),len:r/te*t.range(1.1,1.5),dur:t.range(3,4.4),w0:t.range(.024,.032)*a,depth:1,arc0:0,z:t.range(-.05,.1),reach:.05,tone:t.next(),leafScale:.8,outward:I?1:-1,species:t.pick(g)})}}let y=t.shuffle([t.pick(["coral","gold"]),t.pick(["pink","coral","gold"]),t.pick(["lav","peri","pink"])].filter((I,te,L)=>L.indexOf(I)===te).concat(["lav"]).slice(0,3)),D=t.range(0,6.3),G=(I,te)=>Fa[y[Math.floor((Math.atan2(te-r/2,I-n/2)+Math.PI+D)/(2*Math.PI)*3)%3]],Y=[];for(let I of _.vines)if(I.depth<3)for(let te=4;te<I.pts.length;te+=3)Y.push({p:I.pts[te],end:te>I.pts.length-5,v:I});let w=[],N=I=>{let te=null,L=1e9;for(let ge of w){if(!ge.hero)continue;let he=Math.hypot(ge.x-I.x,ge.y-I.y);he<L&&(L=he,te=ge.cl)}return te||G(I.x,I.y)},V=(I,te,L)=>{let ge=I.p;if(!d(ge.x,ge.y,te*.55)||u(ge.x,ge.y,te*1.08)<0||w.some(le=>Math.hypot(le.x-ge.x,le.y-ge.y)<(le.R+te)*1.15))return!1;let he=L?G(ge.x,ge.y):w.length&&t.chance(.85)?N(ge):G(ge.x,ge.y),_e={x:ge.x,y:ge.y,z:t.range(.36,.62),R:te,hero:L,cl:he,birth:ai(ge.t+t.range(1,3),L?4.6:4,L?8.6:9.8),bud:!L&&t.chance(.28)};return w.push(_e),p.addFlower(_e),!0},A=o?3:s?4:t.int(5,6),k=[[0,0],[n,0],[0,r],[n,r]],K=(I,te)=>h(I.p.x,I.p.y)*.6-Math.hypot(I.p.x-te[0],I.p.y-te[1])*.35+(I.end?.3:0)+t.range(0,.4),$=()=>_.flowers.filter(I=>I.hero).length;for(let I of t.shuffle(k)){if($()>=A)break;let te=t.range(.68,1)*a*(o?.72:1),L=Y.slice().sort((ge,he)=>K(he,I)-K(ge,I));for(let ge of L.slice(0,60))if(V(ge,te,!0))break}for(let I=0;I<40&&$()<A;I++){let te=t.pick(Y);te&&V(te,t.range(.55,.8)*a*(o?.72:1),!0)}let O=Math.round(t.int(12,18)*l);for(let I=0,te=0;I<O&&te<300;te++){let L=t.pick(Y);if(!L)break;V(L,t.range(.2,.36)*a,!1)&&I++}p.dressFlowers();let Q=Math.round((o?30:s?50:70)*(l>.6?1:.8)),F=y.map(I=>Ke(Fa[I].main)).concat([Ke("#5be8e2"),Ke("#f5d36d")]);for(let I=0,te=0;I<Q&&te<Q*8;te++){let L,ge;if(_.flowers.length&&t.chance(.5)){let _e=t.pick(_.flowers),le=t.range(0,6.3),We=_e.R*t.range(1,2.4);L=_e.x+Math.cos(le)*We,ge=_e.y+Math.sin(le)*We}else{let _e=t.pick(_.vines),le=_e.pts[Math.floor(t.next()*_e.pts.length)];L=le.x+t.range(-.3,.3),ge=le.y+t.range(-.3,.3)}let he=t.range(2.2,6);!d(L,ge,.05)||u(L,ge,he/200+.06)<0||(_.dust.push({x:L,y:ge,z:t.range(.1,.8),birth:t.range(7,11.5),col:t.pick(F),size:he,phase:t.range(0,6.3)}),I++)}let z={left:I=>I.x<n*.2,right:I=>I.x>n*.8,top:I=>I.y<r*.2,bottom:I=>I.y>r*.8},J={};for(let[I,te]of Object.entries(z))J[I]=_.vines.reduce((L,ge)=>L+ge.pts.filter(te).length,0)*.045;let ee=Object.entries(z).filter(([I])=>T.some(te=>te.room>.6&&z[I](te))),ae=ee.reduce((I,[te])=>I+J[te],0)/Math.max(1,ee.length),de=ee.filter(([I])=>J[I]<ae*.25).map(([I])=>I),ye=de.length===0&&$()>=Math.min(A,o?2:3);return{..._,ok:ye,weak:de,heroes:$(),pad:c,field:h,k:a}}function Dp(i,e){let t=Qf(i),{W:n,strip:r,phone:o}=e,s=n-r,a=o?.5:ai(n/14.4,.72,1)*.92,l=o?.07:.2,c=e.rects.filter(O=>O.x1>s-1),h=c.concat([{x0:-1e3,y0:-1e3,x1:s,y1:1e5},{x0:-1e3,y0:-1e3,x1:1e3,y1:e.top},{x0:-1e3,y0:e.bottom,x1:1e3,y1:1e5}]),d=$f(h),m=.2,g=[];for(let O=s+.05;O<=n+.5;O+=.08)g.push(O);let p=[];for(let O=e.top;O<=e.bottom;O+=m)p.push(g.map(Q=>Math.min(d(Q,O),(n-Q)*1.1+.04)));let _=4,f=p.map((O,Q)=>{let F=n+.45,z=-1;for(let ee=0;ee<g.length&&!(g[ee]>n-.02);ee++){let ae=1e9;for(let de=0;de<=_&&Q+de<p.length;de++)ae=Math.min(ae,p[Q+de][ee]);ae>z&&(z=ae,F=g[ee])}let J=z-l;return{x:J>.12*a+.06?F:n+.45,room:J}}),u=O=>f[ai(Math.round((O-e.top)/m),0,f.length-1)],T=t.range(0,6.3),U=th(t,{field:d,pad:l,k:a,density:o?.7:1,inside:(O,Q,F)=>O>s+F&&O<n-F,steer:(O,Q,F,z,J)=>{if(J.main){let ee=u(Q+.35),ae=ee.x>n?0:Math.sin(Q*.8+T)*Math.min(Math.max(ee.room-.1,0)*.5,.7),de=ee.x+ae;return go(Math.atan2(1,(de-O)*1.7),F)*.16}return O>n+.25?go(Math.PI,F)*.1:0},offX:n+.08}),{out:R,grow:b,clear:j}=U,M=t.pick(Jf),y=t.chance(.5)?M:"ovate",D=e.top+.05,G=0,Y=U.newTree();for(;D<e.bottom-.6&&G++<30;){let O=G===1?Math.min(u(D).x,n-.1):n+.3,Q=b({x:O,y:D,a:Math.PI/2+t.range(-.2,.2),t0:D,clock:"scroll",lead:0,len:(e.bottom-D)*1.35+1,w0:(o?.03:.05)*a,taper:.55,depth:0,arc0:0,z:.02,tree:Y,reach:o?.04:.12*a,tone:t.next(),species:y,main:!0,branchEvery:o?2.6:1.5,maxChild:o?.8:1.8,leafScale:o?.7:.95,calm:.6,outward:o?1:0}),F=Q?Q.pts[Q.pts.length-1].y:D;for(D=Math.max(F,D)+.3;D<e.bottom&&d(n+.3,D)-l-.2<0;)D+=.1}let w=t.shuffle(["coral","gold","pink","lav","peri"]),N=[];for(let O of R.vines)if(O.depth<3)for(let Q=3;Q<O.pts.length;Q+=3)N.push(O.pts[Q]);N.sort((O,Q)=>O.y-Q.y);let V=[],A=o?4:3.2,k=o?1.6:.9,K=e.top-1,$=e.top-1;for(let O of N){let Q=d(O.x,O.y)-l;if(O.x>n-.04)continue;let F=Fa[w[Math.floor((O.y-e.top)/6)%w.length]],z=J=>V.some(ee=>Math.hypot(ee.x-O.x,ee.y-O.y)<(ee.R+J)*1.2);if(O.y-K>A&&Q>.5*a){let J=Math.min(t.range(.5,.75)*a,Q*.88);if(!z(J)&&j(O.x,O.y,J*1.08)>=0&&O.x+J*.4<n){let ee={x:O.x,y:O.y,z:t.range(.36,.6),R:J,hero:!0,cl:F,birth:O.t+t.range(.5,1.2),bud:!1};V.push(ee),U.addFlower(ee),K=O.y;continue}}if(O.y-$>k*t.range(.7,1.4)&&Q>.17*a){let J=Math.min(t.range(.18,.32)*a,Q*.88);if(!z(J)&&j(O.x,O.y,J*1.08)>=0){let ee={x:O.x,y:O.y,z:t.range(.36,.6),R:J,hero:!1,cl:F,birth:O.t+t.range(.4,1),bud:t.chance(.25)};V.push(ee),U.addFlower(ee),$=O.y}}}U.dressFlowers();for(let O of R.flowers)if(O.hero)for(let Q=0;Q<6;Q++){let F=t.range(0,6.3),z=O.R*t.range(1.1,2.2),J=O.x+Math.cos(F)*z,ee=O.y+Math.sin(F)*z,ae=t.range(2,5);J<n-.03&&j(J,ee,ae/200+.06)>=0&&R.dust.push({x:J,y:ee,z:.5,birth:O.birth+1,col:Ke(O.cl.main),size:ae,phase:t.range(0,6.3)})}return{...R,pad:l,field:d,k:a,obstacles:c,xMin:s}}function ih({alpha:i}){let e=new so({antialias:!0,alpha:i,premultipliedAlpha:!0,powerPreference:"high-performance"});e.outputColorSpace=yt,i?e.setClearColor(0,0):e.setClearColor(Na,1),e.autoClear=!1;let t=new ir,n=new Yi(0,1,0,-1,-10,10);n.position.z=5;let r={uT:{value:0},uTime:{value:0},uGlow:{value:1},uPar:{value:[0,0]},uBg:{value:Ke(Na)},uPx:{value:100},uShadowOff:{value:[.05,-.075]}},o=(y,D,G={})=>({main:new ut({uniforms:r,vertexShader:y,fragmentShader:D,...G}),shadow:new ut({uniforms:r,vertexShader:y,fragmentShader:D,defines:{SHADOW:""},...G,transparent:!0})}),s={stem:o(pp,mp,{side:vt}),leaf:o(gp,_p,{transparent:!0,side:vt,depthWrite:!0}),petal:o(xp,vp,{transparent:!0,side:vt,depthWrite:!0}),dome:o(Mp,Sp),halo:{main:new ut({uniforms:r,vertexShader:yp,fragmentShader:Ep,transparent:!0,depthWrite:!1,depthTest:!1})},dust:{main:new ut({uniforms:r,vertexShader:Tp,fragmentShader:bp,transparent:!0,depthWrite:!1})}},a={leaf:Kf(8,26),petal:Kf(8,14),dome:Rp(7,20),quad:Cp()},l=new bt(4,4),c=new bt(4,4),h=new ct;h.setAttribute("position",new ze(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3));let d=new Yi(-1,1,1,-1,0,1),m={tex:{value:null},dir:{value:[1,0]},res:{value:[4,4]}},g={tex:{value:null},res:{value:[4,4]},col:{value:Ke("#0d3b47")},strength:{value:.24},rects:{value:new Float32Array(128)},nr:{value:0},padPx:{value:16}},p=new ut({uniforms:m,vertexShader:Zf,fragmentShader:Ap,depthTest:!1,depthWrite:!1}),_=new ut({uniforms:g,vertexShader:Zf,fragmentShader:wp,transparent:!0,depthTest:!1,depthWrite:!1}),f=new Et(h,p);f.frustumCulled=!1;let u=new ir;u.add(f);let T=[];function v(y){for(let A of T)t.remove(A),A.geometry.dispose();T=[];let D=(A,k,K,$)=>{let O=new($||Et)(A,k.main);O.userData.shadow=k.shadow||null,O.frustumCulled=!1,O.renderOrder=K,t.add(O),T.push(O)},G=y.halos;G.length&&D(mo(a.quad,G.length,{iPos:[G.flatMap(A=>[A.x,-A.y,A.z]),3],iR:[G.map(A=>A.r),1],iCol:[G.flatMap(A=>A.col),3],iMax:[G.map(A=>A.max),1],iBirth:[G.map(A=>A.birth),1],iPhase:[G.map(A=>A.phase),1]}),s.halo,0),y.vines.length&&D(Lp(y.vines),s.stem,1);let Y=y.leaves.slice().sort((A,k)=>A.z-k.z);Y.length&&D(mo(a.leaf,Y.length,{iPos:[Y.flatMap(A=>[A.x,-A.y,A.z]),3],iRot:[Y.map(A=>-A.ang-Math.PI/2),1],iSize:[Y.flatMap(A=>[A.len,A.wid/2,A.len]),3],iBirth:[Y.map(A=>A.birth),1],iDur:[Y.map(A=>A.dur),1],iColA:[Y.flatMap(A=>A.colA),3],iColB:[Y.flatMap(A=>A.colB),3],iPhase:[Y.map(A=>A.phase),1],iGlowW:[Y.map(A=>A.glow),1],iAsym:[Y.map(A=>A.asym),1],iFade:[Y.map(A=>A.fade),1],iShape:[Y.flatMap(A=>[A.type??0,A.serr??0,A.twist??0,A.droop??0]),4]}),s.leaf,2);let w=y.petals.slice().sort((A,k)=>A.z-k.z);w.length&&D(mo(a.petal,w.length,{iPos:[w.flatMap(A=>[A.x,-A.y,A.z]),3],iRot:[w.map(A=>-A.rot-Math.PI/2),1],iSize:[w.flatMap(A=>[A.len,A.wid/2,A.cup]),3],iBirth:[w.map(A=>A.birth),1],iOpen:[w.map(A=>A.open),1],iDur:[w.map(A=>A.dur),1],iTilt:[w.map(A=>A.tilt),1],iColA:[w.flatMap(A=>A.colA),3],iColB:[w.flatMap(A=>A.colB),3],iColC:[w.flatMap(A=>A.colC),3],iShape:[w.map(A=>A.shape),1],iPhase:[w.map(A=>A.phase),1],iStyle:[w.flatMap(A=>A.style),4]}),s.petal,3);let N=y.domes;N.length&&D(mo(a.dome,N.length,{iPos:[N.flatMap(A=>[A.x,-A.y,A.z]),3],iR:[N.map(A=>A.r),1],iBirth:[N.map(A=>A.birth),1],iColA:[N.flatMap(A=>A.colA),3],iColB:[N.flatMap(A=>A.colB),3],iKind:[N.map(A=>A.kind??0),1]}),s.dome,4);let V=y.dust;if(V.length){let A=new ct;A.setAttribute("position",new ze(new Float32Array(V.flatMap(k=>[k.x,-k.y,k.z])),3)),A.setAttribute("aBirth",new ze(new Float32Array(V.map(k=>k.birth)),1)),A.setAttribute("aCol",new ze(new Float32Array(V.flatMap(k=>k.col)),3)),A.setAttribute("aSize",new ze(new Float32Array(V.map(k=>k.size/100)),1)),A.setAttribute("aPhase",new ze(new Float32Array(V.map(k=>k.phase)),1)),D(A,s.dust,5,ho)}}function C(y,D,G){e.setPixelRatio(G),e.setSize(Math.round(y),Math.round(D),!1);let Y=e.domElement.width,w=e.domElement.height,N=Math.max(4,Math.round(Y/2)),V=Math.max(4,Math.round(w/2));l.setSize(N,V),c.setSize(N,V),r.uPx.value=100*G,g.res.value=[Y,w],g.padPx.value=14*G}function U(y){for(let G of T)G.userData.shadow?G.material=G.userData.shadow:G.visible=!1;e.setRenderTarget(l),e.setClearColor(0,0),e.clear(),e.render(t,n);for(let G of T)G.material=G.userData.shadow?R.get(G):G.material,G.visible=!0;f.material=p,m.res.value=[l.width,l.height],m.tex.value=l.texture,m.dir.value=[1,0],e.setRenderTarget(c),e.clear(),e.render(u,d),m.tex.value=c.texture,m.dir.value=[0,1],e.setRenderTarget(l),e.clear(),e.render(u,d),e.setRenderTarget(null),i?e.setClearColor(0,0):e.setClearColor(Na,1),e.clear();let D=Math.min(32,y.length);for(let G=0;G<D;G++)g.rects.value.set(y[G],G*4);g.nr.value=D,g.tex.value=l.texture,f.material=_,e.render(u,d),e.render(t,n)}let R={get:y=>y.userData.mainMat},b=v;function j(y){b(y);for(let D of T)D.userData.mainMat=D.material}function M(){for(let y of T)t.remove(y),y.geometry.dispose();for(let y of Object.values(a))y.dispose();for(let y of Object.values(s))for(let D of Object.values(y))D.dispose();l.dispose(),c.dispose(),h.dispose(),p.dispose(),_.dispose(),e.dispose()}return{renderer:e,scene:t,camera:n,U:r,setComposition:j,setSize:C,render:U,dispose:M,info:()=>({...e.info.memory})}}function Up(i,e){i.classList.add("epx-garden-measuring");let t=i.getBoundingClientRect(),n=[],r=o=>{o.width>1&&o.height>1&&n.push({x0:(o.left-t.left)/100,y0:(o.top-t.top)/100,x1:(o.right-t.left)/100,y1:(o.bottom-t.top)/100})};for(let o of e)if(o){if(/^(H\d|P|SPAN)$/.test(o.tagName)&&o.textContent.trim()){let s=[];for(let a of eh(o,o)){if(a.width<1||a.height<1)continue;let l=s.find(c=>Math.abs(c.top-a.top)<6||a.top<c.bottom-4&&a.bottom>c.top+4);l?(l.left=Math.min(l.left,a.left),l.right=Math.max(l.right,a.right),l.top=Math.min(l.top,a.top),l.bottom=Math.max(l.bottom,a.bottom)):s.push({left:a.left,right:a.right,top:a.top,bottom:a.bottom})}if(s.length){for(let a of s)r({left:a.left,right:a.right,top:a.top,bottom:a.bottom,width:a.right-a.left,height:a.bottom-a.top});continue}}r(o.getBoundingClientRect())}return i.classList.remove("epx-garden-measuring"),{W:t.width/100,H:t.height/100,rects:n}}function Ip(i,e={}){let t=(e.copy||[]).map(I=>typeof I=="string"?i.querySelector(I):I).filter(Boolean),n=new URLSearchParams(location.search),r=matchMedia("(prefers-reduced-motion: reduce)").matches,o=n.has("gt")?parseFloat(n.get("gt")):null,s=n.has("garden")?parseInt(n.get("garden"),10)>>>0:e.seed??Math.random()*2**31>>>0,a=document.createElement("div");a.className="epx-garden",a.setAttribute("aria-hidden","true"),i.prepend(a);let l;try{l=ih({alpha:!1})}catch{return i.classList.add("epx-garden-fallback"),a.remove(),{seed:s,failed:!0}}let{renderer:c,camera:h,U:d}=l;a.appendChild(c.domElement);let g=(navigator.hardwareConcurrency||8)<=4||(navigator.deviceMemory||8)<=4?1.5:2,p=null,_=null,f=s;function u(){p=Up(i,t);let{W:I,H:te}=p,L=0;f=s;do{if(_=Pp(f,p),_.ok)break;f=f+2654435761>>>0}while(++L<6);h.left=0,h.right=I,h.top=0,h.bottom=-te,h.updateProjectionMatrix(),l.setComposition(_),T()}function T(){l.setSize(p.W*100,p.H*100,Math.min(window.devicePixelRatio||1,g)),c.domElement.style.width="100%",c.domElement.style.height="100%"}function v(){let I=c.getPixelRatio(),te=c.domElement.height;return p.rects.map(L=>[L.x0*100*I,te-L.y1*100*I,L.x1*100*I,te-L.y0*100*I])}let C=13.5,U=o??(r?C+2:0),R=0,b=0,j=0,M=0,y=!0,D=!1,G=[0,0],Y=[0,0],w=0,N=0;function V(){d.uT.value=Math.max(U,0),d.uTime.value=R,d.uGlow.value=dp(6.5,11.5,Math.max(U,0)),d.uPar.value=G,l.render(v())}function A(I){b=requestAnimationFrame(A);let te=Math.min((I-(j||I))/1e3,.05);j=I;let L=U>C;if(L&&I-M<32)return;let ge=L?(I-(M||I))/1e3:te;M=I,o==null&&(U+=Math.min(ge,.05)),R+=Math.min(ge,.05),G=[G[0]+(Y[0]-G[0])*.05,G[1]+(Y[1]-G[1])*.05],V(),!L&&U>.5&&N<120&&(N++,te>.034&&w++,N===120&&w>60&&g>1&&(g=1,T()))}function k(){D||r||o!=null||(D=!0,j=0,M=0,b=requestAnimationFrame(A))}function K(){D=!1,cancelAnimationFrame(b)}let $=new IntersectionObserver(I=>{y=I[0].isIntersecting,y&&!document.hidden?k():K()},{rootMargin:"100px"});$.observe(i);let O=()=>{document.hidden?K():y&&k()};document.addEventListener("visibilitychange",O);let Q=matchMedia("(pointer: fine)").matches,F=I=>{let te=i.getBoundingClientRect();Y=[((I.clientX-te.left)/te.width-.5)*-.05,((I.clientY-te.top)/te.height-.5)*.05]};Q&&!r&&i.addEventListener("pointermove",F,{passive:!0});let z=0,J=0,ee=0,ae=new ResizeObserver(()=>{let I=i.getBoundingClientRect();Math.abs(I.width-z)<2&&Math.abs(I.height-J)<2||(clearTimeout(ee),ee=setTimeout(()=>{z=I.width,J=I.height,u(),V()},z?160:0))}),de={get seed(){return f},regrow(I){return s=I!=null?I>>>0:Math.random()*2**31>>>0,u(),U=r?C+2:0,V(),k(),f},setTime(I){U=I,V()},probe(I){let te=c.getContext(),L=c.getPixelRatio(),ge=c.domElement.height,he={};for(let _e of I){U=_e,V();let le=0;for(let We of p.rects){let Le=Math.floor(We.x0*100*L),E=Math.floor(We.y0*100*L),x=Math.ceil((We.x1-We.x0)*100*L),W=Math.ceil((We.y1-We.y0)*100*L),ne=new Uint8Array(x*W*4);te.readPixels(Le,ge-E-W,x,W,te.RGBA,te.UNSIGNED_BYTE,ne);for(let ie=0;ie<ne.length;ie+=4)(Math.abs(ne[ie]-244)>2||Math.abs(ne[ie+1]-251)>2||Math.abs(ne[ie+2]-250)>2)&&le++}he[_e]=le}return he},info(){return{seed:f,vines:_.vines.length,leaves:_.leaves.length,flowers:_.flowers.length,heroBlooms:_.heroes,petals:_.petals.length,halos:_.halos.length,motes:_.dust.length,ok:_.ok,weak:_.weak,gpu:l.info(),size:[p.W*100,p.H*100],pad:Math.round(_.pad*100)}},destroy(){K(),$.disconnect(),ae.disconnect(),document.removeEventListener("visibilitychange",O),i.removeEventListener("pointermove",F),l.dispose(),a.remove()}};u();let ye=i.getBoundingClientRect();return z=ye.width,J=ye.height,ae.observe(i),V(),k(),n.has("garden")&&console.info("[epx-garden] seed",f,de.info()),de}function Np(i,e){let t=document.documentElement;t.classList.add("epx-garden-measuring");let n=t.clientWidth,r=scrollX,o=scrollY,s=[],a=d=>{d.width>.5&&d.height>.5&&d.right>n*.35&&s.push({x0:(d.left+r)/100,y0:(d.top+o)/100,x1:(d.right+r)/100,y1:(d.bottom+o)/100})};for(let d of eh(document.body,null))a(d);document.querySelectorAll('img,svg,video,canvas,iframe,button,input,select,textarea,.e-button,[class*="e-button"]').forEach(d=>{d.closest(".epx-sidevine,.epx-garden")||a(d.getBoundingClientRect())}),(i?i.parentElement:document.body).querySelectorAll("*").forEach(d=>{if(d.closest(".epx-sidevine,.epx-garden"))return;let m=d.getBoundingClientRect();if(m.width<2||m.height<1||m.width>n*.9||m.right<n*.35)return;let g=getComputedStyle(d),p=g.backgroundColor!=="rgba(0, 0, 0, 0)"&&g.backgroundColor!=="transparent",_=["Top","Right","Bottom","Left"].some(f=>parseFloat(g["border"+f+"Width"])>0&&g["border"+f+"Style"]!=="none");(p||_)&&a(m)});let c=i?(i.getBoundingClientRect().bottom+o)/100:0,h=e?(e.getBoundingClientRect().top+o)/100:t.scrollHeight/100;return t.classList.remove("epx-garden-measuring"),{W:n/100,rects:s,top:c,bottom:h,docH:t.scrollHeight/100}}function Fp(i={}){let e=new URLSearchParams(location.search),t=matchMedia("(prefers-reduced-motion: reduce)").matches,n=e.has("vine")?parseInt(e.get("vine"),10)>>>0:Math.random()*2**31>>>0,r=i.after?document.querySelector(i.after):null,o=i.before?document.querySelector(i.before):document.querySelector(".elementor-location-footer, footer"),s=document.createElement("div");s.className="epx-sidevine",s.setAttribute("aria-hidden","true"),document.body.appendChild(s);let a;try{a=ih({alpha:!0})}catch{return s.remove(),{failed:!0}}let{renderer:l,camera:c,U:h}=a;s.appendChild(l.domElement);let d=(navigator.hardwareConcurrency||8)<=4?1.5:2,m=null,g=null,p=0,_=0,f=0,u=0,T=0,v=0;function C(){m=Np(r,o);let z=m.W*100;m.phone=z<700,p=m.phone?64:Math.round(ai(z*.3,160,460)),m.strip=p/100,g=Dp(n,m),a.setComposition(g),f=Math.round(innerHeight*2),s.style.width=p+"px",s.style.height=f+"px",a.setSize(p,f,Math.min(window.devicePixelRatio||1,d)),l.domElement.style.width="100%",l.domElement.style.height="100%",U(!0)}function U(z){let J=innerHeight;return z||scrollY<_+1||scrollY+J>_+f-1?(_=Math.max(0,Math.round(scrollY-J*.5)),s.style.top=_+"px",!0):!1}function R(){let z=l.getPixelRatio(),J=l.domElement.height,ee=m.W-m.strip,ae=[];for(let de of g.obstacles)de.y1*100<_-40||de.y0*100>_+f+40||ae.push([(de.x0-ee)*100*z,J-(de.y1*100-_)*z,(de.x1-ee)*100*z,J-(de.y0*100-_)*z]);return ae}function b(){c.left=m.W-m.strip,c.right=m.W,c.top=-_/100,c.bottom=-(_+f)/100,c.updateProjectionMatrix(),h.uT.value=u,h.uTime.value=v,h.uGlow.value=1,a.render(R())}let j=()=>(scrollY+innerHeight*.82)/100,M=0,y=0,D=0,G=!1;function Y(z){M=requestAnimationFrame(Y);let J=Math.min((z-(y||z))/1e3,.05);y=z;let ee=U(!1);T=Math.max(T,j());let ae=u<T-.01;!ae&&!ee&&z-D<40||(ae&&(u+=Math.min(T-u,Math.max(.02,(T-u)*Math.min(1,J*2.2)))),v+=Math.min((z-(D||z))/1e3,.05),D=z,b())}function w(){G||(G=!0,y=0,M=requestAnimationFrame(Y))}function N(){G=!1,cancelAnimationFrame(M)}let V=()=>{document.hidden?N():t||w()};document.addEventListener("visibilitychange",V);let A=()=>{U(!1)&&b()},k=0,K=innerWidth,$=document.documentElement.scrollHeight,O=()=>{clearTimeout(k),k=setTimeout(()=>{C(),b()},300)},Q=new ResizeObserver(()=>{let z=document.documentElement.scrollHeight;(Math.abs(innerWidth-K)>1||Math.abs(z-$)>4)&&(K=innerWidth,$=z,O())}),F={get seed(){return n},regrow(z){return n=z!=null?z>>>0:Math.random()*2**31>>>0,C(),b(),n},info(){return{seed:n,vines:g.vines.length,leaves:g.leaves.length,flowers:g.flowers.length,heroBlooms:g.flowers.filter(z=>z.hero).length,stripPx:p,top:Math.round(m.top*100),bottom:Math.round(m.bottom*100),obstacles:g.obstacles.length,gpu:a.info()}},probe(z){let J=l.getContext(),ee={},ae=[_,u];u=1e5;for(let de of z){_=Math.max(0,Math.round(de-innerHeight*.5)),b();let ye=l.getPixelRatio(),I=l.domElement.width,te=l.domElement.height,L=new Uint8Array(I*te*4);J.readPixels(0,0,I,te,J.RGBA,J.UNSIGNED_BYTE,L);let ge=0;for(let he of R()){let _e=Math.max(0,Math.floor(he[0])),le=Math.min(I,Math.ceil(he[2])),We=Math.max(0,Math.floor(he[1])),Le=Math.min(te,Math.ceil(he[3]));for(let E=We;E<Le;E++)for(let x=_e;x<le;x++)L[(E*I+x)*4+3]>3&&ge++}ee[de]=ge}return[_,u]=ae,s.style.top=_+"px",b(),ee},destroy(){N(),Q.disconnect(),document.removeEventListener("visibilitychange",V),removeEventListener("scroll",A),a.dispose(),s.remove()}};return C(),u=t?1e5:m.top-.3,T=u,b(),Q.observe(document.body),t?addEventListener("scroll",A,{passive:!0}):w(),e.has("vine")&&console.info("[epx-sidevine] seed",n,F.info()),F}function jf(){let i=window.epxGardenConfig;if(!i||document.body.classList.contains("elementor-editor-active"))return;let e=document.querySelector(i.host),t=()=>{if(e&&!e.querySelector(".epx-garden"))try{window.epxGarden=Ip(e,i)}catch(r){e.classList.add("epx-garden-fallback"),console.warn("[epx-garden]",r)}if(i.side&&innerWidth>=(i.side.minWidth||900)&&!document.querySelector(".epx-sidevine")){let r=()=>{try{window.epxSideVine=Fp(i.side)}catch(o){console.warn("[epx-sidevine]",o)}};document.readyState==="complete"?setTimeout(r,200):addEventListener("load",()=>setTimeout(r,200),{once:!0})}};(document.fonts&&document.fonts.ready?Promise.race([document.fonts.ready,new Promise(r=>setTimeout(r,1500))]):Promise.resolve()).then(()=>requestAnimationFrame(t))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",jf):jf();export{Ip as mountGarden,Fp as mountSideVine};
