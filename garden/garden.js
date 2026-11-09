var ka="160";var Wa=0,bo=1,Xa=2;var sr=1,qa=2,$t=3,Bt=0,nt=1,vt=2;var qt=0,gi=1,To=2,Ao=3,wo=4,Ya=5,_i=100,Za=101,Ka=102,Ro=103,Co=104,ja=200,Ja=201,Qa=202,$a=203,Hn=204,Vn=205,es=206,ts=207,is=208,ns=209,rs=210,os=211,as=212,ss=213,ls=214,cs=0,us=1,fs=2,Qi=3,hs=4,ds=5,ps=6,ms=7,lr=0,gs=1,_s=2,Yt=0,xs=1,vs=2,Ms=3,Ss=4,ys=5,Es=6;var Lo=300,ei=301,li=302,kn=303,Wn=304,wi=306,Xn=1e3,Ut=1001,qn=1002,st=1003,Po=1004;var cr=1005;var Mt=1006,bs=1007;var xi=1008;var Gt=1009,Ts=1010,As=1011,$i=1012,ur=1013,zt=1014,Ht=1015,vi=1016,fr=1017,hr=1018,Zt=1020,ws=1021,St=1023,Rs=1024,Cs=1025,ti=1026,ci=1027,Ls=1028,dr=1029,Ps=1030,pr=1031,mr=1033,gr=33776,_r=33777,xr=33778,vr=33779,Do=35840,Uo=35841,Io=35842,Fo=35843,Mr=36196,No=37492,Oo=37496,Bo=37808,Go=37809,zo=37810,Ho=37811,Vo=37812,ko=37813,Wo=37814,Xo=37815,qo=37816,Yo=37817,Zo=37818,Ko=37819,jo=37820,Jo=37821,Sr=36492,Qo=36494,$o=36495,Ds=36283,ea=36284,ta=36285,ia=36286;var yr=3e3,ii=3001,Us=3200,Is=3201,Fs=0,Ns=1,_t="",tt="srgb",yt="srgb-linear",en="display-p3",Gi="display-p3-linear",tn="linear",Ze="srgb",nn="rec709",rn="p3";var zi=7680;var na=519,Os=512,Bs=513,Gs=514,Er=515,zs=516,Hs=517,Vs=518,ks=519,ra=35044;var oa="300 es",Yn=1035,Ft=2e3,Hi=2001;var Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var br=Math.PI/180,Zn=180/Math.PI;function ui(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]).toLowerCase()}function ft(i,e,t){return Math.max(e,Math.min(t,i))}function Ws(i,e){return(i%e+e)%e}function Tr(i,e,t){return(1-t)*i+t*e}function aa(i){return(i&i-1)===0&&i!==0}function Kn(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function on(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function It(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var De=class i{constructor(e,t,n,r,o,s,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c)}set(e,t,n,r,o,s,a,l,c){let d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=o,d[5]=l,d[6]=n,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],d=n[4],p=n[7],m=n[2],g=n[5],u=n[8],_=r[0],h=r[3],f=r[6],y=r[1],x=r[4],w=r[7],L=r[2],C=r[5],R=r[8];return o[0]=s*_+a*y+l*L,o[3]=s*h+a*x+l*C,o[6]=s*f+a*w+l*R,o[1]=c*_+d*y+p*L,o[4]=c*h+d*x+p*C,o[7]=c*f+d*w+p*R,o[2]=m*_+g*y+u*L,o[5]=m*h+g*x+u*C,o[8]=m*f+g*w+u*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*s*d-t*a*c-n*o*d+n*a*l+r*o*c-r*s*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],d=e[8],p=d*s-a*c,m=a*l-d*o,g=c*o-s*l,u=t*p+n*m+r*g;if(u===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/u;return e[0]=p*_,e[1]=(r*c-d*n)*_,e[2]=(a*n-r*s)*_,e[3]=m*_,e[4]=(d*t-r*l)*_,e[5]=(r*o-a*t)*_,e[6]=g*_,e[7]=(n*l-c*t)*_,e[8]=(s*t-n*o)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,s,a){let l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(sa.makeScale(e,t)),this}rotate(e){return this.premultiply(sa.makeRotation(-e)),this}translate(e,t){return this.premultiply(sa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},sa=new De;var Xs=new De().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),qs=new De().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ar={[yt]:{transfer:tn,primaries:nn,toReference:i=>i,fromReference:i=>i},[tt]:{transfer:Ze,primaries:nn,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Gi]:{transfer:tn,primaries:rn,toReference:i=>i.applyMatrix3(qs),fromReference:i=>i.applyMatrix3(Xs)},[en]:{transfer:Ze,primaries:rn,toReference:i=>i.convertSRGBToLinear().applyMatrix3(qs),fromReference:i=>i.applyMatrix3(Xs).convertLinearToSRGB()}},sh=new Set([yt,Gi]),Xe={enabled:!0,_workingColorSpace:yt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!sh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Ar[e].toReference,r=Ar[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ar[i].primaries},getTransfer:function(i){return i===_t?tn:Ar[i].transfer}};function Ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ys={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},Rr={h:0,s:0,l:0};function la(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ge=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Xe.workingColorSpace){if(e=Ws(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{let o=n<=.5?n*(1+t):n+t-n*t,s=2*n-o;this.r=la(s,o,e+1/3),this.g=la(s,o,e),this.b=la(s,o,e-1/3)}return Xe.toWorkingColorSpace(this,r),this}setStyle(e,t=tt){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o,s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tt){let n=Ys[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tt){return Xe.fromWorkingColorSpace(Ct.copy(this),e),Math.round(ft(Ct.r*255,0,255))*65536+Math.round(ft(Ct.g*255,0,255))*256+Math.round(ft(Ct.b*255,0,255))}getHexString(e=tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(Ct.copy(this),t);let n=Ct.r,r=Ct.g,o=Ct.b,s=Math.max(n,r,o),a=Math.min(n,r,o),l,c,d=(a+s)/2;if(a===s)l=0,c=0;else{let p=s-a;switch(c=d<=.5?p/(s+a):p/(2-s-a),s){case n:l=(r-o)/p+(r<o?6:0);break;case r:l=(o-n)/p+2;break;case o:l=(n-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=tt){Xe.fromWorkingColorSpace(Ct.copy(this),e);let t=Ct.r,n=Ct.g,r=Ct.b;return e!==tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+t,Ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ci),e.getHSL(Rr);let n=Tr(Ci.h,Rr.h,t),r=Tr(Ci.s,Rr.s,t),o=Tr(Ci.l,Rr.l,t);return this.setHSL(n,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*r,this.g=o[1]*t+o[4]*n+o[7]*r,this.b=o[2]*t+o[5]*n+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ct=new Ge;Ge.NAMES=Ys;var hi=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,s,a){let l=n[r+0],c=n[r+1],d=n[r+2],p=n[r+3],m=o[s+0],g=o[s+1],u=o[s+2],_=o[s+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=p;return}if(a===1){e[t+0]=m,e[t+1]=g,e[t+2]=u,e[t+3]=_;return}if(p!==_||l!==m||c!==g||d!==u){let h=1-a,f=l*m+c*g+d*u+p*_,y=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){let L=Math.sqrt(x),C=Math.atan2(L,f*y);h=Math.sin(h*C)/L,a=Math.sin(a*C)/L}let w=a*y;if(l=l*h+m*w,c=c*h+g*w,d=d*h+u*w,p=p*h+_*w,h===1-a){let L=1/Math.sqrt(l*l+c*c+d*d+p*p);l*=L,c*=L,d*=L,p*=L}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,o,s){let a=n[r],l=n[r+1],c=n[r+2],d=n[r+3],p=o[s],m=o[s+1],g=o[s+2],u=o[s+3];return e[t]=a*u+d*p+l*g-c*m,e[t+1]=l*u+d*m+c*p-a*g,e[t+2]=c*u+d*g+a*m-l*p,e[t+3]=d*u-a*p-l*m-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(r/2),p=a(o/2),m=l(n/2),g=l(r/2),u=l(o/2);switch(s){case"XYZ":this._x=m*d*p+c*g*u,this._y=c*g*p-m*d*u,this._z=c*d*u+m*g*p,this._w=c*d*p-m*g*u;break;case"YXZ":this._x=m*d*p+c*g*u,this._y=c*g*p-m*d*u,this._z=c*d*u-m*g*p,this._w=c*d*p+m*g*u;break;case"ZXY":this._x=m*d*p-c*g*u,this._y=c*g*p+m*d*u,this._z=c*d*u+m*g*p,this._w=c*d*p-m*g*u;break;case"ZYX":this._x=m*d*p-c*g*u,this._y=c*g*p+m*d*u,this._z=c*d*u-m*g*p,this._w=c*d*p+m*g*u;break;case"YZX":this._x=m*d*p+c*g*u,this._y=c*g*p+m*d*u,this._z=c*d*u-m*g*p,this._w=c*d*p-m*g*u;break;case"XZY":this._x=m*d*p-c*g*u,this._y=c*g*p-m*d*u,this._z=c*d*u+m*g*p,this._w=c*d*p+m*g*u;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],o=t[8],s=t[1],a=t[5],l=t[9],c=t[2],d=t[6],p=t[10],m=n+a+p;if(m>0){let g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(d-l)*g,this._y=(o-c)*g,this._z=(s-r)*g}else if(n>a&&n>p){let g=2*Math.sqrt(1+n-a-p);this._w=(d-l)/g,this._x=.25*g,this._y=(r+s)/g,this._z=(o+c)/g}else if(a>p){let g=2*Math.sqrt(1+a-n-p);this._w=(o-c)/g,this._x=(r+s)/g,this._y=.25*g,this._z=(l+d)/g}else{let g=2*Math.sqrt(1+p-n-a);this._w=(s-r)/g,this._x=(o+c)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,o=e._z,s=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+s*a+r*c-o*l,this._y=r*d+s*l+o*a-n*c,this._z=o*d+s*c+n*l-r*a,this._w=s*d-n*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,o=this._z,s=this._w,a=s*e._w+n*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=n,this._y=r,this._z=o,this;let l=1-a*a;if(l<=Number.EPSILON){let g=1-t;return this._w=g*s+t*this._w,this._x=g*n+t*this._x,this._y=g*r+t*this._y,this._z=g*o+t*this._z,this.normalize(),this}let c=Math.sqrt(l),d=Math.atan2(c,a),p=Math.sin((1-t)*d)/c,m=Math.sin(t*d)/c;return this._w=s*p+this._w*m,this._x=n*p+this._x*m,this._y=r*p+this._y*m,this._z=o*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(o),n*Math.cos(o),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};var H=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zs.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zs.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*s,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*r-a*n),d=2*(a*t-o*r),p=2*(o*n-s*t);return this.x=t+l*c+s*p-a*d,this.y=n+l*d+a*c-o*p,this.z=r+l*p+o*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,o=e.z,s=t.x,a=t.y,l=t.z;return this.x=r*l-o*a,this.y=o*s-n*l,this.z=n*a-r*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ca.copy(this).projectOnVector(e),this.sub(ca)}reflect(e){return this.sub(ca.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ca=new H,Zs=new hi;var Si=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,ni):ni.fromBufferAttribute(o,s),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cr.copy(n.boundingBox)),Cr.applyMatrix4(e.matrixWorld),this.union(Cr)}let r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jn),Lr.subVectors(this.max,jn),an.subVectors(e.a,jn),sn.subVectors(e.b,jn),ln.subVectors(e.c,jn),Li.subVectors(sn,an),Pi.subVectors(ln,sn),Vi.subVectors(an,ln);let t=[0,-Li.z,Li.y,0,-Pi.z,Pi.y,0,-Vi.z,Vi.y,Li.z,0,-Li.x,Pi.z,0,-Pi.x,Vi.z,0,-Vi.x,-Li.y,Li.x,0,-Pi.y,Pi.x,0,-Vi.y,Vi.x,0];return!ua(t,an,sn,ln,Lr)||(t=[1,0,0,0,1,0,0,0,1],!ua(t,an,sn,ln,Lr))?!1:(Pr.crossVectors(Li,Pi),t=[Pr.x,Pr.y,Pr.z],ua(t,an,sn,ln,Lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Mi=[new H,new H,new H,new H,new H,new H,new H,new H],ni=new H,Cr=new Si,an=new H,sn=new H,ln=new H,Li=new H,Pi=new H,Vi=new H,jn=new H,Lr=new H,Pr=new H,ki=new H;function ua(i,e,t,n,r){for(let o=0,s=i.length-3;o<=s;o+=3){ki.fromArray(i,o);let a=r.x*Math.abs(ki.x)+r.y*Math.abs(ki.y)+r.z*Math.abs(ki.z),l=e.dot(ki),c=t.dot(ki),d=n.dot(ki);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}var lh=new Si,Jn=new H,fa=new H,di=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):lh.setFromPoints(e).getCenter(n);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jn.subVectors(e,this.center);let t=Jn.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Jn,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jn.copy(e.center).add(fa)),this.expandByPoint(Jn.copy(e.center).sub(fa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};var ha=new H,ch=new H,uh=new De,ri=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=ha.subVectors(n,t).cross(ch.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ha),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||uh.getNormalMatrix(e),r=this.coplanarPoint(ha).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};var Wi=new di,Dr=new H,cn=class{constructor(e=new ri,t=new ri,n=new ri,r=new ri,o=new ri,s=new ri){this.planes=[e,t,n,r,o,s]}set(e,t,n,r,o,s){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ft){let n=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],c=r[4],d=r[5],p=r[6],m=r[7],g=r[8],u=r[9],_=r[10],h=r[11],f=r[12],y=r[13],x=r[14],w=r[15];if(n[0].setComponents(l-o,m-c,h-g,w-f).normalize(),n[1].setComponents(l+o,m+c,h+g,w+f).normalize(),n[2].setComponents(l+s,m+d,h+u,w+y).normalize(),n[3].setComponents(l-s,m-d,h-u,w-y).normalize(),n[4].setComponents(l-a,m-p,h-_,w-x).normalize(),t===Ft)n[5].setComponents(l+a,m+p,h+_,w+x).normalize();else if(t===Hi)n[5].setComponents(a,p,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(e){return Wi.center.set(0,0,0),Wi.radius=.7071067811865476,Wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Dr.x=r.normal.x>0?e.max.x:e.min.x,Dr.y=r.normal.y>0?e.max.y:e.min.y,Dr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var et=class i{constructor(e,t,n,r,o,s,a,l,c,d,p,m,g,u,_,h){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c,d,p,m,g,u,_,h)}set(e,t,n,r,o,s,a,l,c,d,p,m,g,u,_,h){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=o,f[5]=s,f[9]=a,f[13]=l,f[2]=c,f[6]=d,f[10]=p,f[14]=m,f[3]=g,f[7]=u,f[11]=_,f[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/un.setFromMatrixColumn(e,0).length(),o=1/un.setFromMatrixColumn(e,1).length(),s=1/un.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,o=e.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),d=Math.cos(o),p=Math.sin(o);if(e.order==="XYZ"){let m=s*d,g=s*p,u=a*d,_=a*p;t[0]=l*d,t[4]=-l*p,t[8]=c,t[1]=g+u*c,t[5]=m-_*c,t[9]=-a*l,t[2]=_-m*c,t[6]=u+g*c,t[10]=s*l}else if(e.order==="YXZ"){let m=l*d,g=l*p,u=c*d,_=c*p;t[0]=m+_*a,t[4]=u*a-g,t[8]=s*c,t[1]=s*p,t[5]=s*d,t[9]=-a,t[2]=g*a-u,t[6]=_+m*a,t[10]=s*l}else if(e.order==="ZXY"){let m=l*d,g=l*p,u=c*d,_=c*p;t[0]=m-_*a,t[4]=-s*p,t[8]=u+g*a,t[1]=g+u*a,t[5]=s*d,t[9]=_-m*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){let m=s*d,g=s*p,u=a*d,_=a*p;t[0]=l*d,t[4]=u*c-g,t[8]=m*c+_,t[1]=l*p,t[5]=_*c+m,t[9]=g*c-u,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){let m=s*l,g=s*c,u=a*l,_=a*c;t[0]=l*d,t[4]=_-m*p,t[8]=u*p+g,t[1]=p,t[5]=s*d,t[9]=-a*d,t[2]=-c*d,t[6]=g*p+u,t[10]=m-_*p}else if(e.order==="XZY"){let m=s*l,g=s*c,u=a*l,_=a*c;t[0]=l*d,t[4]=-p,t[8]=c*d,t[1]=m*p+_,t[5]=s*d,t[9]=g*p-u,t[2]=u*p-g,t[6]=a*d,t[10]=_*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fh,e,hh)}lookAt(e,t,n){let r=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),Di.crossVectors(n,Vt),Di.lengthSq()===0&&(Math.abs(n.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),Di.crossVectors(n,Vt)),Di.normalize(),Ur.crossVectors(Vt,Di),r[0]=Di.x,r[4]=Ur.x,r[8]=Vt.x,r[1]=Di.y,r[5]=Ur.y,r[9]=Vt.y,r[2]=Di.z,r[6]=Ur.z,r[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],d=n[1],p=n[5],m=n[9],g=n[13],u=n[2],_=n[6],h=n[10],f=n[14],y=n[3],x=n[7],w=n[11],L=n[15],C=r[0],R=r[4],j=r[8],S=r[12],b=r[1],U=r[5],Z=r[9],$=r[13],T=r[2],I=r[6],F=r[10],B=r[14],N=r[3],V=r[7],J=r[11],A=r[15];return o[0]=s*C+a*b+l*T+c*N,o[4]=s*R+a*U+l*I+c*V,o[8]=s*j+a*Z+l*F+c*J,o[12]=s*S+a*$+l*B+c*A,o[1]=d*C+p*b+m*T+g*N,o[5]=d*R+p*U+m*I+g*V,o[9]=d*j+p*Z+m*F+g*J,o[13]=d*S+p*$+m*B+g*A,o[2]=u*C+_*b+h*T+f*N,o[6]=u*R+_*U+h*I+f*V,o[10]=u*j+_*Z+h*F+f*J,o[14]=u*S+_*$+h*B+f*A,o[3]=y*C+x*b+w*T+L*N,o[7]=y*R+x*U+w*I+L*V,o[11]=y*j+x*Z+w*F+L*J,o[15]=y*S+x*$+w*B+L*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],d=e[2],p=e[6],m=e[10],g=e[14],u=e[3],_=e[7],h=e[11],f=e[15];return u*(+o*l*p-r*c*p-o*a*m+n*c*m+r*a*g-n*l*g)+_*(+t*l*g-t*c*m+o*s*m-r*s*g+r*c*d-o*l*d)+h*(+t*c*p-t*a*g-o*s*p+n*s*g+o*a*d-n*c*d)+f*(-r*a*d-t*l*p+t*a*m+r*s*p-n*s*m+n*l*d)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],d=e[8],p=e[9],m=e[10],g=e[11],u=e[12],_=e[13],h=e[14],f=e[15],y=p*h*c-_*m*c+_*l*g-a*h*g-p*l*f+a*m*f,x=u*m*c-d*h*c-u*l*g+s*h*g+d*l*f-s*m*f,w=d*_*c-u*p*c+u*a*g-s*_*g-d*a*f+s*p*f,L=u*p*l-d*_*l-u*a*m+s*_*m+d*a*h-s*p*h,C=t*y+n*x+r*w+o*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/C;return e[0]=y*R,e[1]=(_*m*o-p*h*o-_*r*g+n*h*g+p*r*f-n*m*f)*R,e[2]=(a*h*o-_*l*o+_*r*c-n*h*c-a*r*f+n*l*f)*R,e[3]=(p*l*o-a*m*o-p*r*c+n*m*c+a*r*g-n*l*g)*R,e[4]=x*R,e[5]=(d*h*o-u*m*o+u*r*g-t*h*g-d*r*f+t*m*f)*R,e[6]=(u*l*o-s*h*o-u*r*c+t*h*c+s*r*f-t*l*f)*R,e[7]=(s*m*o-d*l*o+d*r*c-t*m*c-s*r*g+t*l*g)*R,e[8]=w*R,e[9]=(u*p*o-d*_*o-u*n*g+t*_*g+d*n*f-t*p*f)*R,e[10]=(s*_*o-u*a*o+u*n*c-t*_*c-s*n*f+t*a*f)*R,e[11]=(d*a*o-s*p*o-d*n*c+t*p*c+s*n*g-t*a*g)*R,e[12]=L*R,e[13]=(d*_*r-u*p*r+u*n*m-t*_*m-d*n*h+t*p*h)*R,e[14]=(u*a*r-s*_*r-u*n*l+t*_*l+s*n*h-t*a*h)*R,e[15]=(s*p*r-d*a*r+d*n*l-t*p*l-s*n*m+t*a*m)*R,this}scale(e){let t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),o=1-n,s=e.x,a=e.y,l=e.z,c=o*s,d=o*a;return this.set(c*s+n,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+n,d*l-r*s,0,c*l-r*a,d*l+r*s,o*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,s){return this.set(1,n,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,o=t._x,s=t._y,a=t._z,l=t._w,c=o+o,d=s+s,p=a+a,m=o*c,g=o*d,u=o*p,_=s*d,h=s*p,f=a*p,y=l*c,x=l*d,w=l*p,L=n.x,C=n.y,R=n.z;return r[0]=(1-(_+f))*L,r[1]=(g+w)*L,r[2]=(u-x)*L,r[3]=0,r[4]=(g-w)*C,r[5]=(1-(m+f))*C,r[6]=(h+y)*C,r[7]=0,r[8]=(u+x)*R,r[9]=(h-y)*R,r[10]=(1-(m+_))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,o=un.set(r[0],r[1],r[2]).length(),s=un.set(r[4],r[5],r[6]).length(),a=un.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],oi.copy(this);let c=1/o,d=1/s,p=1/a;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=d,oi.elements[5]*=d,oi.elements[6]*=d,oi.elements[8]*=p,oi.elements[9]*=p,oi.elements[10]*=p,t.setFromRotationMatrix(oi),n.x=o,n.y=s,n.z=a,this}makePerspective(e,t,n,r,o,s,a=Ft){let l=this.elements,c=2*o/(t-e),d=2*o/(n-r),p=(t+e)/(t-e),m=(n+r)/(n-r),g,u;if(a===Ft)g=-(s+o)/(s-o),u=-2*s*o/(s-o);else if(a===Hi)g=-s/(s-o),u=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=u,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,o,s,a=Ft){let l=this.elements,c=1/(t-e),d=1/(n-r),p=1/(s-o),m=(t+e)*c,g=(n+r)*d,u,_;if(a===Ft)u=(s+o)*p,_=-2*p;else if(a===Hi)u=o*p,_=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=_,l[14]=-u,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},un=new H,oi=new et,fh=new H(0,0,0),hh=new H(1,1,1),Di=new H,Ur=new H,Vt=new H;var Ve=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*n-s*r+e.x,this.y=o*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};var rt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o,l=e.elements,c=l[0],d=l[4],p=l[8],m=l[1],g=l[5],u=l[9],_=l[2],h=l[6],f=l[10];if(Math.abs(d-m)<.01&&Math.abs(p-_)<.01&&Math.abs(u-h)<.01){if(Math.abs(d+m)<.1&&Math.abs(p+_)<.1&&Math.abs(u+h)<.1&&Math.abs(c+g+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,w=(g+1)/2,L=(f+1)/2,C=(d+m)/4,R=(p+_)/4,j=(u+h)/4;return x>w&&x>L?x<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(x),r=C/n,o=R/n):w>L?w<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(w),n=C/r,o=j/r):L<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(L),n=R/o,r=j/o),this.set(n,r,o,t),this}let y=Math.sqrt((h-u)*(h-u)+(p-_)*(p-_)+(m-d)*(m-d));return Math.abs(y)<.001&&(y=1),this.x=(h-u)/y,this.y=(p-_)/y,this.z=(m-d)/y,this.w=Math.acos((c+g+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};function Ir(){let i=null,e=!1,t=null,n=null;function r(o,s){t(o,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function Ks(i,e){let t=e.isWebGL2,n=new WeakMap;function r(c,d){let p=c.array,m=c.usage,g=p.byteLength,u=i.createBuffer();i.bindBuffer(d,u),i.bufferData(d,p,m),c.onUploadCallback();let _;if(p instanceof Float32Array)_=i.FLOAT;else if(p instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)_=i.SHORT;else if(p instanceof Uint32Array)_=i.UNSIGNED_INT;else if(p instanceof Int32Array)_=i.INT;else if(p instanceof Int8Array)_=i.BYTE;else if(p instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:u,type:_,bytesPerElement:p.BYTES_PER_ELEMENT,version:c.version,size:g}}function o(c,d,p){let m=d.array,g=d._updateRange,u=d.updateRanges;if(i.bindBuffer(p,c),g.count===-1&&u.length===0&&i.bufferSubData(p,0,m),u.length!==0){for(let _=0,h=u.length;_<h;_++){let f=u[_];t?i.bufferSubData(p,f.start*m.BYTES_PER_ELEMENT,m,f.start,f.count):i.bufferSubData(p,f.start*m.BYTES_PER_ELEMENT,m.subarray(f.start,f.start+f.count))}d.clearUpdateRanges()}g.count!==-1&&(t?i.bufferSubData(p,g.offset*m.BYTES_PER_ELEMENT,m,g.offset,g.count):i.bufferSubData(p,g.offset*m.BYTES_PER_ELEMENT,m.subarray(g.offset,g.offset+g.count)),g.count=-1),d.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let d=n.get(c);d&&(i.deleteBuffer(d.buffer),n.delete(c))}function l(c,d){if(c.isGLBufferAttribute){let m=n.get(c);(!m||m.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let p=n.get(c);if(p===void 0)n.set(c,r(c,d));else if(p.version<c.version){if(p.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(p.buffer,c,d),p.version=c.version}}return{get:s,remove:a,update:l}}var Nt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}};var lt=new H,Fr=new Ve,ze=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ra,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ht,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fr.fromBufferAttribute(this,t),Fr.applyMatrix3(e),this.setXY(t,Fr.x,Fr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=on(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=on(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=on(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=on(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=on(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),r=It(r,this.array),o=It(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ra&&(e.usage=this.usage),e}};var fn=class extends ze{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var hn=class extends ze{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Kt=class extends ze{constructor(e,t,n){super(new Float32Array(e),t,n)}};var js=new et,Js=new hi,Qn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],d=r[9],p=r[2],m=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,o),this._z=0);break;case"ZXY":this._x=Math.asin(ft(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-ft(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,o)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-ft(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return js.makeRotationFromQuaternion(e),this.setFromRotationMatrix(js,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Js.setFromEuler(this),this.setFromQuaternion(Js,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qn.DEFAULT_ORDER="XYZ";var dn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};var dh=0,Qs=new H,pn=new hi,yi=new et,Nr=new H,$n=new H,ph=new H,mh=new hi,$s=new H(1,0,0),el=new H(0,1,0),tl=new H(0,0,1),gh={type:"added"},_h={type:"removed"},ht=class i extends Nt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new H,t=new Qn,n=new hi,r=new H(1,1,1);function o(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new et},normalMatrix:{value:new De}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pn.setFromAxisAngle(e,t),this.quaternion.multiply(pn),this}rotateOnWorldAxis(e,t){return pn.setFromAxisAngle(e,t),this.quaternion.premultiply(pn),this}rotateX(e){return this.rotateOnAxis($s,e)}rotateY(e){return this.rotateOnAxis(el,e)}rotateZ(e){return this.rotateOnAxis(tl,e)}translateOnAxis(e,t){return Qs.copy(e).applyQuaternion(this.quaternion),this.position.add(Qs.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($s,e)}translateY(e){return this.translateOnAxis(el,e)}translateZ(e){return this.translateOnAxis(tl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Nr.copy(e):Nr.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),$n.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt($n,Nr,this.up):yi.lookAt(Nr,$n,this.up),this.quaternion.setFromRotationMatrix(yi),r&&(yi.extractRotation(r.matrixWorld),pn.setFromRotationMatrix(yi),this.quaternion.premultiply(pn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(gh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_h)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($n,e,ph),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($n,mh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++){let o=t[n];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let r=this.children;for(let o=0,s=r.length;o<s;o++){let a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let p=l[c];o(e.shapes,p)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(o(e.animations,l))}}if(t){let a=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),p=s(e.shapes),m=s(e.skeletons),g=s(e.animations),u=s(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),g.length>0&&(n.animations=g),u.length>0&&(n.nodes=u)}return n.object=r,n;function s(a){let l=[];for(let c in a){let d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};ht.DEFAULT_UP=new H(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;function Or(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function mn(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nl(){let i=mn("canvas");return i.style.display="block",i}var il={};function Ui(i){i in il||(il[i]=!0,console.warn(i))}var xh=0,jt=new et,da=new ht,gn=new H,kt=new Si,er=new Si,xt=new H,ct=class i extends Nt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xh++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Or(e)?hn:fn)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let o=new De().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,n){return jt.makeTranslation(e,t,n),this.applyMatrix4(jt),this}scale(e,t,n){return jt.makeScale(e,t,n),this.applyMatrix4(jt),this}lookAt(e){return da.lookAt(e),da.updateMatrix(),this.applyMatrix4(da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gn).negate(),this.translate(gn.x,gn.y,gn.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let o=e[n];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Kt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let o=t[n];kt.setFromBufferAttribute(o),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new di);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){let n=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){let a=t[o];er.setFromBufferAttribute(a),this.morphTargetsRelative?(xt.addVectors(kt.min,er.min),kt.expandByPoint(xt),xt.addVectors(kt.max,er.max),kt.expandByPoint(xt)):(kt.expandByPoint(er.min),kt.expandByPoint(er.max))}kt.getCenter(n);let r=0;for(let o=0,s=e.count;o<s;o++)xt.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared(xt));if(t)for(let o=0,s=t.length;o<s;o++){let a=t[o],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)xt.fromBufferAttribute(a,c),l&&(gn.fromBufferAttribute(e,c),xt.add(gn)),r=Math.max(r,n.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,r=t.position.array,o=t.normal.array,s=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ze(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],d=[];for(let b=0;b<a;b++)c[b]=new H,d[b]=new H;let p=new H,m=new H,g=new H,u=new Ve,_=new Ve,h=new Ve,f=new H,y=new H;function x(b,U,Z){p.fromArray(r,b*3),m.fromArray(r,U*3),g.fromArray(r,Z*3),u.fromArray(s,b*2),_.fromArray(s,U*2),h.fromArray(s,Z*2),m.sub(p),g.sub(p),_.sub(u),h.sub(u);let $=1/(_.x*h.y-h.x*_.y);isFinite($)&&(f.copy(m).multiplyScalar(h.y).addScaledVector(g,-_.y).multiplyScalar($),y.copy(g).multiplyScalar(_.x).addScaledVector(m,-h.x).multiplyScalar($),c[b].add(f),c[U].add(f),c[Z].add(f),d[b].add(y),d[U].add(y),d[Z].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let b=0,U=w.length;b<U;++b){let Z=w[b],$=Z.start,T=Z.count;for(let I=$,F=$+T;I<F;I+=3)x(n[I+0],n[I+1],n[I+2])}let L=new H,C=new H,R=new H,j=new H;function S(b){R.fromArray(o,b*3),j.copy(R);let U=c[b];L.copy(U),L.sub(R.multiplyScalar(R.dot(U))).normalize(),C.crossVectors(j,U);let $=C.dot(d[b])<0?-1:1;l[b*4]=L.x,l[b*4+1]=L.y,l[b*4+2]=L.z,l[b*4+3]=$}for(let b=0,U=w.length;b<U;++b){let Z=w[b],$=Z.start,T=Z.count;for(let I=$,F=$+T;I<F;I+=3)S(n[I+0]),S(n[I+1]),S(n[I+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ze(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,g=n.count;m<g;m++)n.setXYZ(m,0,0,0);let r=new H,o=new H,s=new H,a=new H,l=new H,c=new H,d=new H,p=new H;if(e)for(let m=0,g=e.count;m<g;m+=3){let u=e.getX(m+0),_=e.getX(m+1),h=e.getX(m+2);r.fromBufferAttribute(t,u),o.fromBufferAttribute(t,_),s.fromBufferAttribute(t,h),d.subVectors(s,o),p.subVectors(r,o),d.cross(p),a.fromBufferAttribute(n,u),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,h),a.add(d),l.add(d),c.add(d),n.setXYZ(u,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(h,c.x,c.y,c.z)}else for(let m=0,g=t.count;m<g;m+=3)r.fromBufferAttribute(t,m+0),o.fromBufferAttribute(t,m+1),s.fromBufferAttribute(t,m+2),d.subVectors(s,o),p.subVectors(r,o),d.cross(p),n.setXYZ(m+0,d.x,d.y,d.z),n.setXYZ(m+1,d.x,d.y,d.z),n.setXYZ(m+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(a,l){let c=a.array,d=a.itemSize,p=a.normalized,m=new c.constructor(l.length*d),g=0,u=0;for(let _=0,h=l.length;_<h;_++){a.isInterleavedBufferAttribute?g=l[_]*a.data.stride+a.offset:g=l[_]*d;for(let f=0;f<d;f++)m[u++]=c[g++]}return new ze(m,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let o=this.morphAttributes;for(let a in o){let l=[],c=o[a];for(let d=0,p=c.length;d<p;d++){let m=c[d],g=e(m,n);l.push(g)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let a=0,l=s.length;a<l;a++){let c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},o=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let p=0,m=c.length;p<m;p++){let g=c[p];d.push(g.toJSON(e.data))}d.length>0&&(r[l]=d,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let c in r){let d=r[c];this.setAttribute(c,d.clone(t))}let o=e.morphAttributes;for(let c in o){let d=[],p=o[c];for(let m=0,g=p.length;m<g;m++)d.push(p[m].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let c=0,d=s.length;c<d;c++){let p=s[c];this.addGroup(p.start,p.count,p.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ii=class i extends ct{constructor(e=1,t=1,n=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:s};let a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);let l=[],c=[],d=[],p=[],m=0,g=0;u("z","y","x",-1,-1,n,t,e,s,o,0),u("z","y","x",1,-1,n,t,-e,s,o,1),u("x","z","y",1,1,e,n,t,r,s,2),u("x","z","y",1,-1,e,n,-t,r,s,3),u("x","y","z",1,-1,e,t,n,r,o,4),u("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(p,2));function u(_,h,f,y,x,w,L,C,R,j,S){let b=w/R,U=L/j,Z=w/2,$=L/2,T=C/2,I=R+1,F=j+1,B=0,N=0,V=new H;for(let J=0;J<F;J++){let A=J*U-$;for(let te=0;te<I;te++){let z=te*b-Z;V[_]=z*y,V[h]=A*x,V[f]=T,c.push(V.x,V.y,V.z),V[_]=0,V[h]=0,V[f]=C>0?1:-1,d.push(V.x,V.y,V.z),p.push(te/R),p.push(1-J/j),B+=1}}for(let J=0;J<j;J++)for(let A=0;A<R;A++){let te=m+A+I*J,z=m+A+I*(J+1),D=m+(A+1)+I*(J+1),X=m+(A+1)+I*J;l.push(te,z,X),l.push(z,D,X),N+=6}a.addGroup(g,N,S),g+=N,m+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Br=class i extends ct{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let o=e/2,s=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,d=l+1,p=e/a,m=t/l,g=[],u=[],_=[],h=[];for(let f=0;f<d;f++){let y=f*m-s;for(let x=0;x<c;x++){let w=x*p-o;u.push(w,-y,0),_.push(0,0,1),h.push(x/a),h.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<a;y++){let x=y+c*f,w=y+c*(f+1),L=y+1+c*(f+1),C=y+1+c*f;g.push(x,w,C),g.push(w,L,C)}this.setIndex(g),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(_,3)),this.setAttribute("uv",new Kt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var vh=0,Jt=class extends Nt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=ui(),this.name="",this.type="Material",this.blending=gi,this.side=Bt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hn,this.blendDst=Vn,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=na,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gi&&(n.blending=this.blending),this.side!==Bt&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Hn&&(n.blendSrc=this.blendSrc),this.blendDst!==Vn&&(n.blendDst=this.blendDst),this.blendEquation!==_i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==na&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){let s=[];for(let a in o){let l=o[a];delete l.metadata,s.push(l)}return s}if(t){let o=r(e.textures),s=r(e.images);o.length>0&&(n.textures=o),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};function Ei(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Lt(i){let e={};for(let t=0;t<i.length;t++){let n=Ei(i[t]);for(let r in n)e[r]=n[r]}return e}function rl(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Gr(i){return i.getRenderTarget()===null?i.outputColorSpace:Xe.workingColorSpace}var ol={clone:Ei,merge:Lt};var al=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;var sl=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;var ut=class extends Jt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=al,this.fragmentShader=sl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ei(e.uniforms),this.uniformsGroups=rl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}};var bi=new H,pa=new H,zr=new H,Fi=new H,ma=new H,Hr=new H,ga=new H,_n=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,t),bi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){pa.copy(e).add(t).multiplyScalar(.5),zr.copy(t).sub(e).normalize(),Fi.copy(this.origin).sub(pa);let o=e.distanceTo(t)*.5,s=-this.direction.dot(zr),a=Fi.dot(this.direction),l=-Fi.dot(zr),c=Fi.lengthSq(),d=Math.abs(1-s*s),p,m,g,u;if(d>0)if(p=s*l-a,m=s*a-l,u=o*d,p>=0)if(m>=-u)if(m<=u){let _=1/d;p*=_,m*=_,g=p*(p+s*m+2*a)+m*(s*p+m+2*l)+c}else m=o,p=Math.max(0,-(s*m+a)),g=-p*p+m*(m+2*l)+c;else m=-o,p=Math.max(0,-(s*m+a)),g=-p*p+m*(m+2*l)+c;else m<=-u?(p=Math.max(0,-(-s*o+a)),m=p>0?-o:Math.min(Math.max(-o,-l),o),g=-p*p+m*(m+2*l)+c):m<=u?(p=0,m=Math.min(Math.max(-o,-l),o),g=m*(m+2*l)+c):(p=Math.max(0,-(s*o+a)),m=p>0?o:Math.min(Math.max(-o,-l),o),g=-p*p+m*(m+2*l)+c);else m=s>0?-o:o,p=Math.max(0,-(s*m+a)),g=-p*p+m*(m+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(pa).addScaledVector(zr,m),g}intersectSphere(e,t){bi.subVectors(e.center,this.origin);let n=bi.dot(this.direction),r=bi.dot(bi)-n*n,o=e.radius*e.radius;if(r>o)return null;let s=Math.sqrt(o-r),a=n-s,l=n+s;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,s,a,l,c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,m=this.origin;return c>=0?(n=(e.min.x-m.x)*c,r=(e.max.x-m.x)*c):(n=(e.max.x-m.x)*c,r=(e.min.x-m.x)*c),d>=0?(o=(e.min.y-m.y)*d,s=(e.max.y-m.y)*d):(o=(e.max.y-m.y)*d,s=(e.min.y-m.y)*d),n>s||o>r||((o>n||isNaN(n))&&(n=o),(s<r||isNaN(r))&&(r=s),p>=0?(a=(e.min.z-m.z)*p,l=(e.max.z-m.z)*p):(a=(e.max.z-m.z)*p,l=(e.min.z-m.z)*p),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,n,r,o){ma.subVectors(t,e),Hr.subVectors(n,e),ga.crossVectors(ma,Hr);let s=this.direction.dot(ga),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Fi.subVectors(this.origin,e);let l=a*this.direction.dot(Hr.crossVectors(Fi,Hr));if(l<0)return null;let c=a*this.direction.dot(ma.cross(Fi));if(c<0||l+c>s)return null;let d=-a*Fi.dot(ga);return d<0?null:this.at(d/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};var ai=new H,Ti=new H,_a=new H,Ai=new H,xn=new H,vn=new H,ll=new H,xa=new H,va=new H,Ma=new H,Vr=!1,Xi=class i{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),ai.subVectors(e,t),r.cross(ai);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){ai.subVectors(r,t),Ti.subVectors(n,t),_a.subVectors(e,t);let s=ai.dot(ai),a=ai.dot(Ti),l=ai.dot(_a),c=Ti.dot(Ti),d=Ti.dot(_a),p=s*c-a*a;if(p===0)return o.set(0,0,0),null;let m=1/p,g=(c*l-a*d)*m,u=(s*d-a*l)*m;return o.set(1-g-u,u,g)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getUV(e,t,n,r,o,s,a,l){return Vr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Vr=!0),this.getInterpolation(e,t,n,r,o,s,a,l)}static getInterpolation(e,t,n,r,o,s,a,l){return this.getBarycoord(e,t,n,r,Ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Ai.x),l.addScaledVector(s,Ai.y),l.addScaledVector(a,Ai.z),l)}static isFrontFacing(e,t,n,r){return ai.subVectors(n,t),Ti.subVectors(e,t),ai.cross(Ti).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),ai.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,o){return Vr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Vr=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}getInterpolation(e,t,n,r,o){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,o=this.c,s,a;xn.subVectors(r,n),vn.subVectors(o,n),xa.subVectors(e,n);let l=xn.dot(xa),c=vn.dot(xa);if(l<=0&&c<=0)return t.copy(n);va.subVectors(e,r);let d=xn.dot(va),p=vn.dot(va);if(d>=0&&p<=d)return t.copy(r);let m=l*p-d*c;if(m<=0&&l>=0&&d<=0)return s=l/(l-d),t.copy(n).addScaledVector(xn,s);Ma.subVectors(e,o);let g=xn.dot(Ma),u=vn.dot(Ma);if(u>=0&&g<=u)return t.copy(o);let _=g*c-l*u;if(_<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(vn,a);let h=d*u-g*p;if(h<=0&&p-d>=0&&g-u>=0)return ll.subVectors(o,r),a=(p-d)/(p-d+(g-u)),t.copy(r).addScaledVector(ll,a);let f=1/(h+_+m);return s=_*f,a=m*f,t.copy(n).addScaledVector(xn,s).addScaledVector(vn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};var Mn=class extends Jt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=lr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var cl=new et,qi=new _n,kr=new di,ul=new H,Sn=new H,yn=new H,En=new H,Sa=new H,Wr=new H,Xr=new Ve,qr=new Ve,Yr=new Ve,fl=new H,hl=new H,dl=new H,Zr=new H,Kr=new H,Et=class extends ht{constructor(e=new ct,t=new Mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(o&&a){Wr.set(0,0,0);for(let l=0,c=o.length;l<c;l++){let d=a[l],p=o[l];d!==0&&(Sa.fromBufferAttribute(p,e),s?Wr.addScaledVector(Sa,d):Wr.addScaledVector(Sa.sub(t),d))}t.add(Wr)}return t}raycast(e,t){let n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(o),qi.copy(e.ray).recast(e.near),!(kr.containsPoint(qi.origin)===!1&&(qi.intersectSphere(kr,ul)===null||qi.origin.distanceToSquared(ul)>(e.far-e.near)**2))&&(cl.copy(o).invert(),qi.copy(e.ray).applyMatrix4(cl),!(n.boundingBox!==null&&qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qi)))}_computeIntersections(e,t,n){let r,o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,d=o.attributes.uv1,p=o.attributes.normal,m=o.groups,g=o.drawRange;if(a!==null)if(Array.isArray(s))for(let u=0,_=m.length;u<_;u++){let h=m[u],f=s[h.materialIndex],y=Math.max(h.start,g.start),x=Math.min(a.count,Math.min(h.start+h.count,g.start+g.count));for(let w=y,L=x;w<L;w+=3){let C=a.getX(w),R=a.getX(w+1),j=a.getX(w+2);r=jr(this,f,e,n,c,d,p,C,R,j),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{let u=Math.max(0,g.start),_=Math.min(a.count,g.start+g.count);for(let h=u,f=_;h<f;h+=3){let y=a.getX(h),x=a.getX(h+1),w=a.getX(h+2);r=jr(this,s,e,n,c,d,p,y,x,w),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let u=0,_=m.length;u<_;u++){let h=m[u],f=s[h.materialIndex],y=Math.max(h.start,g.start),x=Math.min(l.count,Math.min(h.start+h.count,g.start+g.count));for(let w=y,L=x;w<L;w+=3){let C=w,R=w+1,j=w+2;r=jr(this,f,e,n,c,d,p,C,R,j),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{let u=Math.max(0,g.start),_=Math.min(l.count,g.start+g.count);for(let h=u,f=_;h<f;h+=3){let y=h,x=h+1,w=h+2;r=jr(this,s,e,n,c,d,p,y,x,w),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}}};function Mh(i,e,t,n,r,o,s,a){let l;if(e.side===nt?l=n.intersectTriangle(s,o,r,!0,a):l=n.intersectTriangle(r,o,s,e.side===Bt,a),l===null)return null;Kr.copy(a),Kr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Kr);return c<t.near||c>t.far?null:{distance:c,point:Kr.clone(),object:i}}function jr(i,e,t,n,r,o,s,a,l,c){i.getVertexPosition(a,Sn),i.getVertexPosition(l,yn),i.getVertexPosition(c,En);let d=Mh(i,e,t,n,Sn,yn,En,Zr);if(d){r&&(Xr.fromBufferAttribute(r,a),qr.fromBufferAttribute(r,l),Yr.fromBufferAttribute(r,c),d.uv=Xi.getInterpolation(Zr,Sn,yn,En,Xr,qr,Yr,new Ve)),o&&(Xr.fromBufferAttribute(o,a),qr.fromBufferAttribute(o,l),Yr.fromBufferAttribute(o,c),d.uv1=Xi.getInterpolation(Zr,Sn,yn,En,Xr,qr,Yr,new Ve),d.uv2=d.uv1),s&&(fl.fromBufferAttribute(s,a),hl.fromBufferAttribute(s,l),dl.fromBufferAttribute(s,c),d.normal=Xi.getInterpolation(Zr,Sn,yn,En,fl,hl,dl,new H),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let p={a,b:l,c,normal:new H,materialIndex:0};Xi.getNormal(Sn,yn,En,p.normal),d.face=p}return d}var pl=`
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
`;var bl=`
vec3 transformed = vec3( position );

#ifdef USE_ALPHAHASH

	vPosition = vec3( position );

#endif
`;var Tl=`
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
`;var Fl=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	varying vec3 vColor;

#endif
`;var Nl=`
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
`;var bc=`
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
`;var Tc=`
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
`;var Fc=`
#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif
`;var Nc=`
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
`,bu=`
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
`;var Tu=`
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
`;var Fu=`
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
`,Nu=`
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
`;var Oe={alphahash_fragment:pl,alphahash_pars_fragment:ml,alphamap_fragment:gl,alphamap_pars_fragment:_l,alphatest_fragment:xl,alphatest_pars_fragment:vl,aomap_fragment:Ml,aomap_pars_fragment:Sl,batching_pars_vertex:yl,batching_vertex:El,begin_vertex:bl,beginnormal_vertex:Tl,bsdfs:Al,iridescence_fragment:wl,bumpmap_pars_fragment:Rl,clipping_planes_fragment:Cl,clipping_planes_pars_fragment:Ll,clipping_planes_pars_vertex:Pl,clipping_planes_vertex:Dl,color_fragment:Ul,color_pars_fragment:Il,color_pars_vertex:Fl,color_vertex:Nl,common:Ol,cube_uv_reflection_fragment:Bl,defaultnormal_vertex:Gl,displacementmap_pars_vertex:zl,displacementmap_vertex:Hl,emissivemap_fragment:Vl,emissivemap_pars_fragment:kl,colorspace_fragment:Wl,colorspace_pars_fragment:Xl,envmap_fragment:ql,envmap_common_pars_fragment:Yl,envmap_pars_fragment:Zl,envmap_pars_vertex:Kl,envmap_physical_pars_fragment:sc,envmap_vertex:jl,fog_vertex:Jl,fog_pars_vertex:Ql,fog_fragment:$l,fog_pars_fragment:ec,gradientmap_pars_fragment:tc,lightmap_fragment:ic,lightmap_pars_fragment:nc,lights_lambert_fragment:rc,lights_lambert_pars_fragment:oc,lights_pars_begin:ac,lights_toon_fragment:lc,lights_toon_pars_fragment:cc,lights_phong_fragment:uc,lights_phong_pars_fragment:fc,lights_physical_fragment:hc,lights_physical_pars_fragment:dc,lights_fragment_begin:pc,lights_fragment_maps:mc,lights_fragment_end:gc,logdepthbuf_fragment:_c,logdepthbuf_pars_fragment:xc,logdepthbuf_pars_vertex:vc,logdepthbuf_vertex:Mc,map_fragment:Sc,map_pars_fragment:yc,map_particle_fragment:Ec,map_particle_pars_fragment:bc,metalnessmap_fragment:Tc,metalnessmap_pars_fragment:Ac,morphcolor_vertex:wc,morphnormal_vertex:Rc,morphtarget_pars_vertex:Cc,morphtarget_vertex:Lc,normal_fragment_begin:Pc,normal_fragment_maps:Dc,normal_pars_fragment:Uc,normal_pars_vertex:Ic,normal_vertex:Fc,normalmap_pars_fragment:Nc,clearcoat_normal_fragment_begin:Oc,clearcoat_normal_fragment_maps:Bc,clearcoat_pars_fragment:Gc,iridescence_pars_fragment:zc,opaque_fragment:Hc,packing:Vc,premultiplied_alpha_fragment:kc,project_vertex:Wc,dithering_fragment:Xc,dithering_pars_fragment:qc,roughnessmap_fragment:Yc,roughnessmap_pars_fragment:Zc,shadowmap_pars_fragment:Kc,shadowmap_pars_vertex:jc,shadowmap_vertex:Jc,shadowmask_pars_fragment:Qc,skinbase_vertex:$c,skinning_pars_vertex:eu,skinning_vertex:tu,skinnormal_vertex:iu,specularmap_fragment:nu,specularmap_pars_fragment:ru,tonemapping_fragment:ou,tonemapping_pars_fragment:au,transmission_fragment:su,transmission_pars_fragment:lu,uv_pars_fragment:cu,uv_pars_vertex:uu,uv_vertex:fu,worldpos_vertex:hu,background_vert:du,background_frag:pu,backgroundCube_vert:mu,backgroundCube_frag:gu,cube_vert:_u,cube_frag:xu,depth_vert:vu,depth_frag:Mu,distanceRGBA_vert:Su,distanceRGBA_frag:yu,equirect_vert:Eu,equirect_frag:bu,linedashed_vert:Tu,linedashed_frag:Au,meshbasic_vert:wu,meshbasic_frag:Ru,meshlambert_vert:Cu,meshlambert_frag:Lu,meshmatcap_vert:Pu,meshmatcap_frag:Du,meshnormal_vert:Uu,meshnormal_frag:Iu,meshphong_vert:Fu,meshphong_frag:Nu,meshphysical_vert:Ou,meshphysical_frag:Bu,meshtoon_vert:Gu,meshtoon_frag:zu,points_vert:Hu,points_frag:Vu,shadow_vert:ku,shadow_frag:Wu,sprite_vert:Xu,sprite_frag:qu};var me={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}};var Qt={basic:{uniforms:Lt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Lt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Lt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Lt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Lt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Lt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Lt([me.points,me.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Lt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Lt([me.common,me.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Lt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Lt([me.sprite,me.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Lt([me.common,me.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Lt([me.lights,me.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Qt.physical={uniforms:Lt([Qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};var Jr={r:0,b:0,g:0};function Yu(i,e,t,n,r,o,s){let a=new Ge(0),l=o===!0?0:1,c,d,p=null,m=0,g=null;function u(h,f){let y=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),y=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===wi)?(d===void 0&&(d=new Et(new Ii(1,1,1),new ut({name:"BackgroundCubeMaterial",uniforms:Ei(Qt.backgroundCube.uniforms),vertexShader:Qt.backgroundCube.vertexShader,fragmentShader:Qt.backgroundCube.fragmentShader,side:nt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=x,d.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,d.material.toneMapped=Xe.getTransfer(x.colorSpace)!==Ze,(p!==x||m!==x.version||g!==i.toneMapping)&&(d.material.needsUpdate=!0,p=x,m=x.version,g=i.toneMapping),d.layers.enableAll(),h.unshift(d,d.geometry,d.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Et(new Br(2,2),new ut({name:"BackgroundMaterial",uniforms:Ei(Qt.background.uniforms),vertexShader:Qt.background.vertexShader,fragmentShader:Qt.background.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(x.colorSpace)!==Ze,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(p!==x||m!==x.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,p=x,m=x.version,g=i.toneMapping),c.layers.enableAll(),h.unshift(c,c.geometry,c.material,0,0,null))}function _(h,f){h.getRGB(Jr,Gr(i)),n.buffers.color.setClear(Jr.r,Jr.g,Jr.b,f,s)}return{getClearColor:function(){return a},setClearColor:function(h,f=1){a.set(h),l=f,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(h){l=h,_(a,l)},render:u}}function Zu(i,e,t,n){let r=i.getParameter(i.MAX_VERTEX_ATTRIBS),o=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||o!==null,a={},l=h(null),c=l,d=!1;function p(T,I,F,B,N){let V=!1;if(s){let J=_(B,F,I);c!==J&&(c=J,g(c.object)),V=f(T,B,F,N),V&&y(T,B,F,N)}else{let J=I.wireframe===!0;(c.geometry!==B.id||c.program!==F.id||c.wireframe!==J)&&(c.geometry=B.id,c.program=F.id,c.wireframe=J,V=!0)}N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(V||d)&&(d=!1,j(T,I,F,B),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function m(){return n.isWebGL2?i.createVertexArray():o.createVertexArrayOES()}function g(T){return n.isWebGL2?i.bindVertexArray(T):o.bindVertexArrayOES(T)}function u(T){return n.isWebGL2?i.deleteVertexArray(T):o.deleteVertexArrayOES(T)}function _(T,I,F){let B=F.wireframe===!0,N=a[T.id];N===void 0&&(N={},a[T.id]=N);let V=N[I.id];V===void 0&&(V={},N[I.id]=V);let J=V[B];return J===void 0&&(J=h(m()),V[B]=J),J}function h(T){let I=[],F=[],B=[];for(let N=0;N<r;N++)I[N]=0,F[N]=0,B[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:F,attributeDivisors:B,object:T,attributes:{},index:null}}function f(T,I,F,B){let N=c.attributes,V=I.attributes,J=0,A=F.getAttributes();for(let te in A)if(A[te].location>=0){let D=N[te],X=V[te];if(X===void 0&&(te==="instanceMatrix"&&T.instanceMatrix&&(X=T.instanceMatrix),te==="instanceColor"&&T.instanceColor&&(X=T.instanceColor)),D===void 0||D.attribute!==X||X&&D.data!==X.data)return!0;J++}return c.attributesNum!==J||c.index!==B}function y(T,I,F,B){let N={},V=I.attributes,J=0,A=F.getAttributes();for(let te in A)if(A[te].location>=0){let D=V[te];D===void 0&&(te==="instanceMatrix"&&T.instanceMatrix&&(D=T.instanceMatrix),te==="instanceColor"&&T.instanceColor&&(D=T.instanceColor));let X={};X.attribute=D,D&&D.data&&(X.data=D.data),N[te]=X,J++}c.attributes=N,c.attributesNum=J,c.index=B}function x(){let T=c.newAttributes;for(let I=0,F=T.length;I<F;I++)T[I]=0}function w(T){L(T,0)}function L(T,I){let F=c.newAttributes,B=c.enabledAttributes,N=c.attributeDivisors;F[T]=1,B[T]===0&&(i.enableVertexAttribArray(T),B[T]=1),N[T]!==I&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](T,I),N[T]=I)}function C(){let T=c.newAttributes,I=c.enabledAttributes;for(let F=0,B=I.length;F<B;F++)I[F]!==T[F]&&(i.disableVertexAttribArray(F),I[F]=0)}function R(T,I,F,B,N,V,J){J===!0?i.vertexAttribIPointer(T,I,F,N,V):i.vertexAttribPointer(T,I,F,B,N,V)}function j(T,I,F,B){if(n.isWebGL2===!1&&(T.isInstancedMesh||B.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let N=B.attributes,V=F.getAttributes(),J=I.defaultAttributeValues;for(let A in V){let te=V[A];if(te.location>=0){let z=N[A];if(z===void 0&&(A==="instanceMatrix"&&T.instanceMatrix&&(z=T.instanceMatrix),A==="instanceColor"&&T.instanceColor&&(z=T.instanceColor)),z!==void 0){let D=z.normalized,X=z.itemSize,re=t.get(z);if(re===void 0)continue;let fe=re.buffer,he=re.type,ee=re.bytesPerElement,de=n.isWebGL2===!0&&(he===i.INT||he===i.UNSIGNED_INT||z.gpuType===ur);if(z.isInterleavedBufferAttribute){let Me=z.data,O=Me.stride,q=z.offset;if(Me.isInstancedInterleavedBuffer){for(let ie=0;ie<te.locationSize;ie++)L(te.location+ie,Me.meshPerAttribute);T.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let ie=0;ie<te.locationSize;ie++)w(te.location+ie);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let ie=0;ie<te.locationSize;ie++)R(te.location+ie,X/te.locationSize,he,D,O*ee,(q+X/te.locationSize*ie)*ee,de)}else{if(z.isInstancedBufferAttribute){for(let Me=0;Me<te.locationSize;Me++)L(te.location+Me,z.meshPerAttribute);T.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let Me=0;Me<te.locationSize;Me++)w(te.location+Me);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let Me=0;Me<te.locationSize;Me++)R(te.location+Me,X/te.locationSize,he,D,X*ee,X/te.locationSize*Me*ee,de)}}else if(J!==void 0){let D=J[A];if(D!==void 0)switch(D.length){case 2:i.vertexAttrib2fv(te.location,D);break;case 3:i.vertexAttrib3fv(te.location,D);break;case 4:i.vertexAttrib4fv(te.location,D);break;default:i.vertexAttrib1fv(te.location,D)}}}}C()}function S(){Z();for(let T in a){let I=a[T];for(let F in I){let B=I[F];for(let N in B)u(B[N].object),delete B[N];delete I[F]}delete a[T]}}function b(T){if(a[T.id]===void 0)return;let I=a[T.id];for(let F in I){let B=I[F];for(let N in B)u(B[N].object),delete B[N];delete I[F]}delete a[T.id]}function U(T){for(let I in a){let F=a[I];if(F[T.id]===void 0)continue;let B=F[T.id];for(let N in B)u(B[N].object),delete B[N];delete F[T.id]}}function Z(){$(),d=!0,c!==l&&(c=l,g(c.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:Z,resetDefaultState:$,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfProgram:U,initAttributes:x,enableAttribute:w,disableUnusedAttributes:C}}function Ku(i,e,t,n){let r=n.isWebGL2,o;function s(d){o=d}function a(d,p){i.drawArrays(o,d,p),t.update(p,o,1)}function l(d,p,m){if(m===0)return;let g,u;if(r)g=i,u="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),u="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[u](o,d,p,m),t.update(p,o,m)}function c(d,p,m){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<m;u++)this.render(d[u],p[u]);else{g.multiDrawArraysWEBGL(o,d,0,p,0,m);let u=0;for(let _=0;_<m;_++)u+=p[_];t.update(u,o,1)}}this.setMode=s,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function ju(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=o(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=s||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),u=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),h=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=m>0,w=s||e.has("OES_texture_float"),L=x&&w,C=s?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:u,maxAttributes:_,maxVertexUniforms:h,maxVaryings:f,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:w,floatVertexTextures:L,maxSamples:C}}function Ju(i){let e=this,t=null,n=0,r=!1,o=!1,s=new ri,a=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){let g=p.length!==0||m||n!==0||r;return r=m,n=p.length,g},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(p,m){t=d(p,m,0)},this.setState=function(p,m,g){let u=p.clippingPlanes,_=p.clipIntersection,h=p.clipShadows,f=i.get(p);if(!r||u===null||u.length===0||o&&!h)o?d(null):c();else{let y=o?0:n,x=y*4,w=f.clippingState||null;l.value=w,w=d(u,m,x,g);for(let L=0;L!==x;++L)w[L]=t[L];f.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,m,g,u){let _=p!==null?p.length:0,h=null;if(_!==0){if(h=l.value,u!==!0||h===null){let f=g+_*4,y=m.matrixWorldInverse;a.getNormalMatrix(y),(h===null||h.length<f)&&(h=new Float32Array(f));for(let x=0,w=g;x!==_;++x,w+=4)s.copy(p[x]).applyMatrix4(y,a),s.normal.toArray(h,w),h[w+3]=s.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,h}}var bn,Tn=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bn===void 0&&(bn=mn("canvas")),bn.width=e.width,bn.height=e.height;let n=bn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=bn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=mn("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Ri(o[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ri(t[n]/255)*255):t[n]=Ri(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}};var Bh=0,An=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=ui(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(ya(r[s].image)):o.push(ya(r[s]))}else o=ya(r);n.url=o}return t||(e.images[this.uuid]=n),n}};function ya(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Tn.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Gh=0,bt=class i extends Nt{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ut,r=Ut,o=Mt,s=xi,a=St,l=Gt,c=i.DEFAULT_ANISOTROPY,d=_t){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=ui(),this.name="",this.source=new An(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Ui("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===ii?tt:_t),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xn:e.x=e.x-Math.floor(e.x);break;case Ut:e.x=e.x<0?0:1;break;case qn:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xn:e.y=e.y-Math.floor(e.y);break;case Ut:e.y=e.y<0?0:1;break;case qn:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ui("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===tt?ii:yr}set encoding(e){Ui("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ii?tt:_t}};bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=Lo;bt.DEFAULT_ANISOTROPY=1;var Qr=class extends Nt{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);let r={width:e,height:t,depth:1};n.encoding!==void 0&&(Ui("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ii?tt:_t),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new bt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new An(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Tt=class extends Qr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}};var wn=class extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=Ft}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};var At=class extends wn{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Zn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zn*2*Math.atan(Math.tan(br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(br*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,t-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}let a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Rn=-90,Cn=1,$r=class extends ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new At(Rn,Cn,e,t);r.layers=this.layers,this.add(r);let o=new At(Rn,Cn,e,t);o.layers=this.layers,this.add(o);let s=new At(Rn,Cn,e,t);s.layers=this.layers,this.add(s);let a=new At(Rn,Cn,e,t);a.layers=this.layers,this.add(a);let l=new At(Rn,Cn,e,t);l.layers=this.layers,this.add(l);let c=new At(Rn,Cn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,o,s,a,l]=t;for(let c of t)this.remove(c);if(e===Ft)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Hi)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[o,s,a,l,c,d]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),u=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,o),e.setRenderTarget(n,1,r),e.render(t,s),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,d),e.setRenderTarget(p,m,g),e.xr.enabled=u,n.texture.needsPMREMUpdate=!0}};var Ln=class extends bt{constructor(e,t,n,r,o,s,a,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:ei,super(e,t,n,r,o,s,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var eo=class extends Tt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Ui("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ii?tt:_t),this.texture=new Ln(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ii(5,5,5),o=new ut({name:"CubemapFromEquirect",uniforms:Ei(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nt,blending:qt});o.uniforms.tEquirect.value=t;let s=new Et(r,o),a=t.minFilter;return t.minFilter===xi&&(t.minFilter=Mt),new $r(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,r){let o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(o)}};function Qu(i){let e=new WeakMap;function t(s,a){return a===kn?s.mapping=ei:a===Wn&&(s.mapping=li),s}function n(s){if(s&&s.isTexture){let a=s.mapping;if(a===kn||a===Wn)if(e.has(s)){let l=e.get(s).texture;return t(l,s.mapping)}else{let l=s.image;if(l&&l.height>0){let c=new eo(l.height/2);return c.fromEquirectangularTexture(i,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){let a=s.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}var Yi=class extends wn{constructor(e=-1,t=1,n=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=n-e,s=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Dn=4,$u=[.125,.215,.35,.446,.526,.582],Ki=20,Ea=new Yi,ef=new Ge,ba=null,Ta=0,Aa=0,Zi=(1+Math.sqrt(5))/2,Pn=1/Zi,tf=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,Zi,Pn),new H(0,Zi,-Pn),new H(Pn,0,Zi),new H(-Pn,0,Zi),new H(Zi,Pn,0),new H(-Zi,Pn,0)],tr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ba=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),Aa=this._renderer.getActiveMipmapLevel(),this._setSize(256);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=of(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ba,Ta,Aa),e.scissorTest=!1,to(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ei||e.mapping===li?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ba=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),Aa=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Mt,minFilter:Mt,generateMipmaps:!1,type:vi,format:St,colorSpace:yt,depthBuffer:!1},r=nf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nf(e,t,n);let{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zh(o)),this._blurMaterial=Hh(o,e,t)}return r}_compileMaterial(e){let t=new Et(this._lodPlanes[0],e);this._renderer.compile(t,Ea)}_sceneToCubeUV(e,t,n,r){let a=new At(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,m=d.toneMapping;d.getClearColor(ef),d.toneMapping=Yt,d.autoClear=!1;let g=new Mn({name:"PMREM.Background",side:nt,depthWrite:!1,depthTest:!1}),u=new Et(new Ii,g),_=!1,h=e.background;h?h.isColor&&(g.color.copy(h),e.background=null,_=!0):(g.color.copy(ef),_=!0);for(let f=0;f<6;f++){let y=f%3;y===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):y===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let x=this._cubeSize;to(r,y*x,f>2?x:0,x,x),d.setRenderTarget(r),_&&d.render(u,a),d.render(e,a)}u.geometry.dispose(),u.material.dispose(),d.toneMapping=m,d.autoClear=p,e.background=h}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===ei||e.mapping===li;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=of()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rf());let o=r?this._cubemapMaterial:this._equirectMaterial,s=new Et(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;let l=this._cubeSize;to(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,Ea)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=tf[(r-1)%tf.length];this._blur(e,r-1,r,o,s)}t.autoClear=n}_blur(e,t,n,r,o){let s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",o),this._halfBlur(s,e,n,n,r,"longitudinal",o)}_halfBlur(e,t,n,r,o,s,a){let l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let d=3,p=new Et(this._lodPlanes[r],c),m=c.uniforms,g=this._sizeLods[n]-1,u=isFinite(o)?Math.PI/(2*g):2*Math.PI/(2*Ki-1),_=o/u,h=isFinite(o)?1+Math.floor(d*_):Ki;h>Ki&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Ki}`);let f=[],y=0;for(let R=0;R<Ki;++R){let j=R/_,S=Math.exp(-j*j/2);f.push(S),R===0?y+=S:R<h&&(y+=2*S)}for(let R=0;R<f.length;R++)f[R]=f[R]/y;m.envMap.value=e.texture,m.samples.value=h,m.weights.value=f,m.latitudinal.value=s==="latitudinal",a&&(m.poleAxis.value=a);let{_lodMax:x}=this;m.dTheta.value=u,m.mipInt.value=x-n;let w=this._sizeLods[r],L=3*w*(r>x-Dn?r-x+Dn:0),C=4*(this._cubeSize-w);to(t,L,C,3*w,2*w),l.setRenderTarget(t),l.render(p,Ea)}};function zh(i){let e=[],t=[],n=[],r=i,o=i-Dn+1+$u.length;for(let s=0;s<o;s++){let a=Math.pow(2,r);t.push(a);let l=1/a;s>i-Dn?l=$u[s-i+Dn-1]:s===0&&(l=0),n.push(l);let c=1/(a-2),d=-c,p=1+c,m=[d,d,p,d,p,p,d,d,p,p,d,p],g=6,u=6,_=3,h=2,f=1,y=new Float32Array(_*u*g),x=new Float32Array(h*u*g),w=new Float32Array(f*u*g);for(let C=0;C<g;C++){let R=C%3*2/3-1,j=C>2?0:-1,S=[R,j,0,R+2/3,j,0,R+2/3,j+1,0,R,j,0,R+2/3,j+1,0,R,j+1,0];y.set(S,_*u*C),x.set(m,h*u*C);let b=[C,C,C,C,C,C];w.set(b,f*u*C)}let L=new ct;L.setAttribute("position",new ze(y,_)),L.setAttribute("uv",new ze(x,h)),L.setAttribute("faceIndex",new ze(w,f)),e.push(L),r>Dn&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function nf(i,e,t){let n=new Tt(i,e,t);return n.texture.mapping=wi,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function to(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Hh(i,e,t){let n=new Float32Array(Ki),r=new H(0,1,0);return new ut({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wa(),fragmentShader:`

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
		`,blending:qt,depthTest:!1,depthWrite:!1})}function rf(){return new ut({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wa(),fragmentShader:`

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
		`,blending:qt,depthTest:!1,depthWrite:!1})}function of(){return new ut({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qt,depthTest:!1,depthWrite:!1})}function wa(){return`

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
	`}function af(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===kn||l===Wn,d=l===ei||l===li;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let p=e.get(a);return t===null&&(t=new tr(i)),p=c?t.fromEquirectangular(a,p):t.fromCubemap(a,p),e.set(a,p),p.texture}else{if(e.has(a))return e.get(a).texture;{let p=a.image;if(c&&p&&p.height>0||d&&p&&r(p)){t===null&&(t=new tr(i));let m=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,m),a.addEventListener("dispose",o),m.texture}else return null}}}return a}function r(a){let l=0,c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function o(a){let l=a.target;l.removeEventListener("dispose",o);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function sf(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function lf(i,e,t,n){let r={},o=new WeakMap;function s(p){let m=p.target;m.index!==null&&e.remove(m.index);for(let u in m.attributes)e.remove(m.attributes[u]);for(let u in m.morphAttributes){let _=m.morphAttributes[u];for(let h=0,f=_.length;h<f;h++)e.remove(_[h])}m.removeEventListener("dispose",s),delete r[m.id];let g=o.get(m);g&&(e.remove(g),o.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function a(p,m){return r[m.id]===!0||(m.addEventListener("dispose",s),r[m.id]=!0,t.memory.geometries++),m}function l(p){let m=p.attributes;for(let u in m)e.update(m[u],i.ARRAY_BUFFER);let g=p.morphAttributes;for(let u in g){let _=g[u];for(let h=0,f=_.length;h<f;h++)e.update(_[h],i.ARRAY_BUFFER)}}function c(p){let m=[],g=p.index,u=p.attributes.position,_=0;if(g!==null){let y=g.array;_=g.version;for(let x=0,w=y.length;x<w;x+=3){let L=y[x+0],C=y[x+1],R=y[x+2];m.push(L,C,C,R,R,L)}}else if(u!==void 0){let y=u.array;_=u.version;for(let x=0,w=y.length/3-1;x<w;x+=3){let L=x+0,C=x+1,R=x+2;m.push(L,C,C,R,R,L)}}else return;let h=new(Or(m)?hn:fn)(m,1);h.version=_;let f=o.get(p);f&&e.remove(f),o.set(p,h)}function d(p){let m=o.get(p);if(m){let g=p.index;g!==null&&m.version<g.version&&c(p)}else c(p);return o.get(p)}return{get:a,update:l,getWireframeAttribute:d}}function cf(i,e,t,n){let r=n.isWebGL2,o;function s(g){o=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function d(g,u){i.drawElements(o,u,a,g*l),t.update(u,o,1)}function p(g,u,_){if(_===0)return;let h,f;if(r)h=i,f="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[f](o,u,a,g*l,_),t.update(u,o,_)}function m(g,u,_){if(_===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let f=0;f<_;f++)this.render(g[f]/l,u[f]);else{h.multiDrawElementsWEBGL(o,u,0,a,g,0,_);let f=0;for(let y=0;y<_;y++)f+=u[y];t.update(f,o,1)}}this.setMode=s,this.setIndex=c,this.render=d,this.renderInstances=p,this.renderMultiDraw=m}function uf(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,s,a){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=a*(o/3);break;case i.LINES:t.lines+=a*(o/2);break;case i.LINE_STRIP:t.lines+=a*(o-1);break;case i.LINE_LOOP:t.lines+=a*o;break;case i.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}var Un=class extends bt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=st,this.minFilter=st,this.wrapR=Ut,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};function Vh(i,e){return i[0]-e[0]}function kh(i,e){return Math.abs(e[1])-Math.abs(i[1])}function ff(i,e,t){let n={},r=new Float32Array(8),o=new WeakMap,s=new rt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,p){let m=c.morphTargetInfluences;if(e.isWebGL2===!0){let g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,u=g!==void 0?g.length:0,_=o.get(d);if(_===void 0||_.count!==u){let T=function(){Z.dispose(),o.delete(d),d.removeEventListener("dispose",T)};_!==void 0&&_.texture.dispose();let y=d.morphAttributes.position!==void 0,x=d.morphAttributes.normal!==void 0,w=d.morphAttributes.color!==void 0,L=d.morphAttributes.position||[],C=d.morphAttributes.normal||[],R=d.morphAttributes.color||[],j=0;y===!0&&(j=1),x===!0&&(j=2),w===!0&&(j=3);let S=d.attributes.position.count*j,b=1;S>e.maxTextureSize&&(b=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let U=new Float32Array(S*b*4*u),Z=new Un(U,S,b,u);Z.type=Ht,Z.needsUpdate=!0;let $=j*4;for(let I=0;I<u;I++){let F=L[I],B=C[I],N=R[I],V=S*b*4*I;for(let J=0;J<F.count;J++){let A=J*$;y===!0&&(s.fromBufferAttribute(F,J),U[V+A+0]=s.x,U[V+A+1]=s.y,U[V+A+2]=s.z,U[V+A+3]=0),x===!0&&(s.fromBufferAttribute(B,J),U[V+A+4]=s.x,U[V+A+5]=s.y,U[V+A+6]=s.z,U[V+A+7]=0),w===!0&&(s.fromBufferAttribute(N,J),U[V+A+8]=s.x,U[V+A+9]=s.y,U[V+A+10]=s.z,U[V+A+11]=N.itemSize===4?s.w:1)}}_={count:u,texture:Z,size:new Ve(S,b)},o.set(d,_),d.addEventListener("dispose",T)}let h=0;for(let y=0;y<m.length;y++)h+=m[y];let f=d.morphTargetsRelative?1:1-h;p.getUniforms().setValue(i,"morphTargetBaseInfluence",f),p.getUniforms().setValue(i,"morphTargetInfluences",m),p.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),p.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{let g=m===void 0?0:m.length,u=n[d.id];if(u===void 0||u.length!==g){u=[];for(let x=0;x<g;x++)u[x]=[x,0];n[d.id]=u}for(let x=0;x<g;x++){let w=u[x];w[0]=x,w[1]=m[x]}u.sort(kh);for(let x=0;x<8;x++)x<g&&u[x][1]?(a[x][0]=u[x][0],a[x][1]=u[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Vh);let _=d.morphAttributes.position,h=d.morphAttributes.normal,f=0;for(let x=0;x<8;x++){let w=a[x],L=w[0],C=w[1];L!==Number.MAX_SAFE_INTEGER&&C?(_&&d.getAttribute("morphTarget"+x)!==_[L]&&d.setAttribute("morphTarget"+x,_[L]),h&&d.getAttribute("morphNormal"+x)!==h[L]&&d.setAttribute("morphNormal"+x,h[L]),r[x]=C,f+=C):(_&&d.hasAttribute("morphTarget"+x)===!0&&d.deleteAttribute("morphTarget"+x),h&&d.hasAttribute("morphNormal"+x)===!0&&d.deleteAttribute("morphNormal"+x),r[x]=0)}let y=d.morphTargetsRelative?1:1-f;p.getUniforms().setValue(i,"morphTargetBaseInfluence",y),p.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function hf(i,e,t,n){let r=new WeakMap;function o(l){let c=n.render.frame,d=l.geometry,p=e.get(l,d);if(r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let m=l.skeleton;r.get(m)!==c&&(m.update(),r.set(m,c))}return p}function s(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:s}}var io=class extends bt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=st,this.minFilter=st,this.wrapR=Ut,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var In=class extends bt{constructor(e,t,n,r,o,s,a,l,c,d){if(d=d!==void 0?d:ti,d!==ti&&d!==ci)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===ti&&(n=zt),n===void 0&&d===ci&&(n=Zt),super(null,r,o,s,a,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:st,this.minFilter=l!==void 0?l:st,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var vf=new bt,Mf=new In(1,1);Mf.compareFunction=Er;var Sf=new Un,yf=new io,Ef=new Ln,df=[],pf=[],mf=new Float32Array(16),gf=new Float32Array(9),_f=new Float32Array(4);function Fn(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,o=df[r];if(o===void 0&&(o=new Float32Array(r),df[r]=o),e!==0){n.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,i[s].toArray(o,a)}return o}function dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function no(i,e){let t=pf[e];t===void 0&&(t=new Int32Array(e),pf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Wh(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Xh(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2fv(this.addr,e),pt(t,e)}}function qh(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;i.uniform3fv(this.addr,e),pt(t,e)}}function Yh(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4fv(this.addr,e),pt(t,e)}}function Zh(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;_f.set(n),i.uniformMatrix2fv(this.addr,!1,_f),pt(t,n)}}function Kh(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;gf.set(n),i.uniformMatrix3fv(this.addr,!1,gf),pt(t,n)}}function jh(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;mf.set(n),i.uniformMatrix4fv(this.addr,!1,mf),pt(t,n)}}function Jh(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Qh(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2iv(this.addr,e),pt(t,e)}}function $h(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3iv(this.addr,e),pt(t,e)}}function ed(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4iv(this.addr,e),pt(t,e)}}function td(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function id(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2uiv(this.addr,e),pt(t,e)}}function nd(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3uiv(this.addr,e),pt(t,e)}}function rd(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4uiv(this.addr,e),pt(t,e)}}function od(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o=this.type===i.SAMPLER_2D_SHADOW?Mf:vf;t.setTexture2D(e||o,r)}function ad(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||yf,r)}function sd(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Ef,r)}function ld(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Sf,r)}function cd(i){switch(i){case 5126:return Wh;case 35664:return Xh;case 35665:return qh;case 35666:return Yh;case 35674:return Zh;case 35675:return Kh;case 35676:return jh;case 5124:case 35670:return Jh;case 35667:case 35671:return Qh;case 35668:case 35672:return $h;case 35669:case 35673:return ed;case 5125:return td;case 36294:return id;case 36295:return nd;case 36296:return rd;case 35678:case 36198:case 36298:case 36306:case 35682:return od;case 35679:case 36299:case 36307:return ad;case 35680:case 36300:case 36308:case 36293:return sd;case 36289:case 36303:case 36311:case 36292:return ld}}function ud(i,e){i.uniform1fv(this.addr,e)}function fd(i,e){let t=Fn(e,this.size,2);i.uniform2fv(this.addr,t)}function hd(i,e){let t=Fn(e,this.size,3);i.uniform3fv(this.addr,t)}function dd(i,e){let t=Fn(e,this.size,4);i.uniform4fv(this.addr,t)}function pd(i,e){let t=Fn(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function md(i,e){let t=Fn(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function gd(i,e){let t=Fn(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function _d(i,e){i.uniform1iv(this.addr,e)}function xd(i,e){i.uniform2iv(this.addr,e)}function vd(i,e){i.uniform3iv(this.addr,e)}function Md(i,e){i.uniform4iv(this.addr,e)}function Sd(i,e){i.uniform1uiv(this.addr,e)}function yd(i,e){i.uniform2uiv(this.addr,e)}function Ed(i,e){i.uniform3uiv(this.addr,e)}function bd(i,e){i.uniform4uiv(this.addr,e)}function Td(i,e,t){let n=this.cache,r=e.length,o=no(t,r);dt(n,o)||(i.uniform1iv(this.addr,o),pt(n,o));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||vf,o[s])}function Ad(i,e,t){let n=this.cache,r=e.length,o=no(t,r);dt(n,o)||(i.uniform1iv(this.addr,o),pt(n,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||yf,o[s])}function wd(i,e,t){let n=this.cache,r=e.length,o=no(t,r);dt(n,o)||(i.uniform1iv(this.addr,o),pt(n,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Ef,o[s])}function Rd(i,e,t){let n=this.cache,r=e.length,o=no(t,r);dt(n,o)||(i.uniform1iv(this.addr,o),pt(n,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Sf,o[s])}function Cd(i){switch(i){case 5126:return ud;case 35664:return fd;case 35665:return hd;case 35666:return dd;case 35674:return pd;case 35675:return md;case 35676:return gd;case 5124:case 35670:return _d;case 35667:case 35671:return xd;case 35668:case 35672:return vd;case 35669:case 35673:return Md;case 5125:return Sd;case 36294:return yd;case 36295:return Ed;case 36296:return bd;case 35678:case 36198:case 36298:case 36306:case 35682:return Td;case 35679:case 36299:case 36307:return Ad;case 35680:case 36300:case 36308:case 36293:return wd;case 36289:case 36303:case 36311:case 36292:return Rd}}var Ca=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=cd(t.type)}},La=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cd(t.type)}},Pa=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let o=0,s=r.length;o!==s;++o){let a=r[o];a.setValue(e,t[a.id],n)}}},Ra=/(\w+)(\])?(\[|\.)?/g;function xf(i,e){i.seq.push(e),i.map[e.id]=e}function Ld(i,e,t){let n=i.name,r=n.length;for(Ra.lastIndex=0;;){let o=Ra.exec(n),s=Ra.lastIndex,a=o[1],l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){xf(t,c===void 0?new Ca(a,i,e):new La(a,i,e));break}else{let p=t.map[a];p===void 0&&(p=new Pa(a),xf(t,p)),t=p}}}var Ni=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let o=e.getActiveUniform(t,r),s=e.getUniformLocation(t,o.name);Ld(o,s,this)}}setValue(e,t,n,r){let o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,s=t.length;o!==s;++o){let a=t[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,o=e.length;r!==o;++r){let s=e[r];s.id in t&&n.push(s)}return n}};function Da(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Pd=37297,Dd=0;function Ud(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){let a=s+1;n.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return n.join(`
`)}function Id(i){let e=Xe.getPrimaries(Xe.workingColorSpace),t=Xe.getPrimaries(i),n;switch(e===t?n="":e===rn&&t===nn?n="LinearDisplayP3ToLinearSRGB":e===nn&&t===rn&&(n="LinearSRGBToLinearDisplayP3"),i){case yt:case Gi:return[n,"LinearTransferOETF"];case tt:case en:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function bf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let s=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Ud(i.getShaderSource(e),s)}else return r}function Fd(i,e){let t=Id(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Nd(i,e){let t;switch(e){case xs:t="Linear";break;case vs:t="Reinhard";break;case Ms:t="OptimizedCineon";break;case Ss:t="ACESFilmic";break;case Es:t="AgX";break;case ys:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Od(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Nn).join(`
`)}function Bd(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Nn).join(`
`)}function Gd(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function zd(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let o=i.getActiveAttrib(e,r),s=o.name,a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:i.getAttribLocation(e,s),locationSize:a}}return t}function Nn(i){return i!==""}function Tf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Af(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Hd=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ua(i){return i.replace(Hd,kd)}var Vd=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function kd(i,e){let t=Oe[e];if(t===void 0){let n=Vd.get(e);if(n!==void 0)t=Oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ua(t)}var Wd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wf(i){return i.replace(Wd,Xd)}function Xd(i,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Rf(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qd(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===sr?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===qa?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===$t&&(e="SHADOWMAP_TYPE_VSM"),e}function Yd(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ei:case li:e="ENVMAP_TYPE_CUBE";break;case wi:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Zd(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case li:e="ENVMAP_MODE_REFRACTION";break}return e}function Kd(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case lr:e="ENVMAP_BLENDING_MULTIPLY";break;case gs:e="ENVMAP_BLENDING_MIX";break;case _s:e="ENVMAP_BLENDING_ADD";break}return e}function jd(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Cf(i,e,t,n){let r=i.getContext(),o=t.defines,s=t.vertexShader,a=t.fragmentShader,l=qd(t),c=Yd(t),d=Zd(t),p=Kd(t),m=jd(t),g=t.isWebGL2?"":Od(t),u=Bd(t),_=Gd(o),h=r.createProgram(),f,y,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Nn).join(`
`),f.length>0&&(f+=`
`),y=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Nn).join(`
`),y.length>0&&(y+=`
`)):(f=[Rf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nn).join(`
`),y=[g,Rf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yt?"#define TONE_MAPPING":"",t.toneMapping!==Yt?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Yt?Nd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,Fd("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Nn).join(`
`)),s=Ua(s),s=Tf(s,t),s=Af(s,t),a=Ua(a),a=Tf(a,t),a=Af(a,t),s=wf(s),a=wf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[u,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===oa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===oa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let w=x+f+s,L=x+y+a,C=Da(r,r.VERTEX_SHADER,w),R=Da(r,r.FRAGMENT_SHADER,L);r.attachShader(h,C),r.attachShader(h,R),t.index0AttributeName!==void 0?r.bindAttribLocation(h,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(h,0,"position"),r.linkProgram(h);function j(Z){if(i.debug.checkShaderErrors){let $=r.getProgramInfoLog(h).trim(),T=r.getShaderInfoLog(C).trim(),I=r.getShaderInfoLog(R).trim(),F=!0,B=!0;if(r.getProgramParameter(h,r.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,h,C,R);else{let N=bf(r,C,"vertex"),V=bf(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(h,r.VALIDATE_STATUS)+`

Program Info Log: `+$+`
`+N+`
`+V)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(T===""||I==="")&&(B=!1);B&&(Z.diagnostics={runnable:F,programLog:$,vertexShader:{log:T,prefix:f},fragmentShader:{log:I,prefix:y}})}r.deleteShader(C),r.deleteShader(R),S=new Ni(r,h),b=zd(r,h)}let S;this.getUniforms=function(){return S===void 0&&j(this),S};let b;this.getAttributes=function(){return b===void 0&&j(this),b};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(h,Pd)),U},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(h),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Dd++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=C,this.fragmentShader=R,this}var Jd=0,ro=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ia(e),t.set(e,n)),n}},Ia=class{constructor(e){this.id=Jd++,this.code=e,this.usedTimes=0}};function Lf(i,e,t,n,r,o,s){let a=new dn,l=new ro,c=[],d=r.isWebGL2,p=r.logarithmicDepthBuffer,m=r.vertexTextures,g=r.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function h(S,b,U,Z,$){let T=Z.fog,I=$.geometry,F=S.isMeshStandardMaterial?Z.environment:null,B=(S.isMeshStandardMaterial?t:e).get(S.envMap||F),N=B&&B.mapping===wi?B.image.height:null,V=u[S.type];S.precision!==null&&(g=r.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));let J=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,A=J!==void 0?J.length:0,te=0;I.morphAttributes.position!==void 0&&(te=1),I.morphAttributes.normal!==void 0&&(te=2),I.morphAttributes.color!==void 0&&(te=3);let z,D,X,re;if(V){let Pt=Qt[V];z=Pt.vertexShader,D=Pt.fragmentShader}else z=S.vertexShader,D=S.fragmentShader,l.update(S),X=l.getVertexShaderID(S),re=l.getFragmentShaderID(S);let fe=i.getRenderTarget(),he=$.isInstancedMesh===!0,ee=$.isBatchedMesh===!0,de=!!S.map,Me=!!S.matcap,O=!!B,q=!!S.aoMap,ie=!!S.lightMap,ne=!!S.bumpMap,le=!!S.normalMap,Te=!!S.displacementMap,_e=!!S.emissiveMap,M=!!S.metalnessMap,v=!!S.roughnessMap,k=S.anisotropy>0,ue=S.clearcoat>0,ae=S.iridescence>0,ce=S.sheen>0,Q=S.transmission>0,se=k&&!!S.anisotropyMap,pe=ue&&!!S.clearcoatMap,Ee=ue&&!!S.clearcoatNormalMap,be=ue&&!!S.clearcoatRoughnessMap,oe=ae&&!!S.iridescenceMap,Ye=ae&&!!S.iridescenceThicknessMap,Ce=ce&&!!S.sheenColorMap,Ue=ce&&!!S.sheenRoughnessMap,we=!!S.specularMap,ye=!!S.specularColorMap,Fe=!!S.specularIntensityMap,qe=Q&&!!S.transmissionMap,je=Q&&!!S.thicknessMap,ke=!!S.gradientMap,ge=!!S.alphaMap,P=S.alphaTest>0,xe=!!S.alphaHash,ve=!!S.extensions,Pe=!!I.attributes.uv1,Re=!!I.attributes.uv2,Je=!!I.attributes.uv3,Qe=Yt;return S.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Qe=i.toneMapping),{isWebGL2:d,shaderID:V,shaderType:S.type,shaderName:S.name,vertexShader:z,fragmentShader:D,defines:S.defines,customVertexShaderID:X,customFragmentShaderID:re,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,batching:ee,instancing:he,instancingColor:he&&$.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:fe===null?i.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:yt,map:de,matcap:Me,envMap:O,envMapMode:O&&B.mapping,envMapCubeUVHeight:N,aoMap:q,lightMap:ie,bumpMap:ne,normalMap:le,displacementMap:m&&Te,emissiveMap:_e,normalMapObjectSpace:le&&S.normalMapType===Ns,normalMapTangentSpace:le&&S.normalMapType===Fs,metalnessMap:M,roughnessMap:v,anisotropy:k,anisotropyMap:se,clearcoat:ue,clearcoatMap:pe,clearcoatNormalMap:Ee,clearcoatRoughnessMap:be,iridescence:ae,iridescenceMap:oe,iridescenceThicknessMap:Ye,sheen:ce,sheenColorMap:Ce,sheenRoughnessMap:Ue,specularMap:we,specularColorMap:ye,specularIntensityMap:Fe,transmission:Q,transmissionMap:qe,thicknessMap:je,gradientMap:ke,opaque:S.transparent===!1&&S.blending===gi,alphaMap:ge,alphaTest:P,alphaHash:xe,combine:S.combine,mapUv:de&&_(S.map.channel),aoMapUv:q&&_(S.aoMap.channel),lightMapUv:ie&&_(S.lightMap.channel),bumpMapUv:ne&&_(S.bumpMap.channel),normalMapUv:le&&_(S.normalMap.channel),displacementMapUv:Te&&_(S.displacementMap.channel),emissiveMapUv:_e&&_(S.emissiveMap.channel),metalnessMapUv:M&&_(S.metalnessMap.channel),roughnessMapUv:v&&_(S.roughnessMap.channel),anisotropyMapUv:se&&_(S.anisotropyMap.channel),clearcoatMapUv:pe&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&_(S.sheenRoughnessMap.channel),specularMapUv:we&&_(S.specularMap.channel),specularColorMapUv:ye&&_(S.specularColorMap.channel),specularIntensityMapUv:Fe&&_(S.specularIntensityMap.channel),transmissionMapUv:qe&&_(S.transmissionMap.channel),thicknessMapUv:je&&_(S.thicknessMap.channel),alphaMapUv:ge&&_(S.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(le||k),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUv1s:Pe,vertexUv2s:Re,vertexUv3s:Je,pointsUvs:$.isPoints===!0&&!!I.attributes.uv&&(de||ge),fog:!!T,useFog:S.fog===!0,fogExp2:T&&T.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:$.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:A,morphTextureStride:te,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qe,useLegacyLights:i._useLegacyLights,decodeVideoTexture:de&&S.map.isVideoTexture===!0&&Xe.getTransfer(S.map.colorSpace)===Ze,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===vt,flipSided:S.side===nt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ve&&S.extensions.derivatives===!0,extensionFragDepth:ve&&S.extensions.fragDepth===!0,extensionDrawBuffers:ve&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ve&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ve&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){let b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(let U in S.defines)b.push(U),b.push(S.defines[U]);return S.isRawShaderMaterial===!1&&(y(b,S),x(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function y(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function x(S,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function w(S){let b=u[S.type],U;if(b){let Z=Qt[b];U=ol.clone(Z.uniforms)}else U=S.uniforms;return U}function L(S,b){let U;for(let Z=0,$=c.length;Z<$;Z++){let T=c[Z];if(T.cacheKey===b){U=T,++U.usedTimes;break}}return U===void 0&&(U=new Cf(i,b,S,o),c.push(U)),U}function C(S){if(--S.usedTimes===0){let b=c.indexOf(S);c[b]=c[c.length-1],c.pop(),S.destroy()}}function R(S){l.remove(S)}function j(){l.dispose()}return{getParameters:h,getProgramCacheKey:f,getUniforms:w,acquireProgram:L,releaseProgram:C,releaseShaderCache:R,programs:c,dispose:j}}function Pf(){let i=new WeakMap;function e(o){let s=i.get(o);return s===void 0&&(s={},i.set(o,s)),s}function t(o){i.delete(o)}function n(o,s,a){i.get(o)[s]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Qd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Df(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Uf(){let i=[],e=0,t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function s(p,m,g,u,_,h){let f=i[e];return f===void 0?(f={id:p.id,object:p,geometry:m,material:g,groupOrder:u,renderOrder:p.renderOrder,z:_,group:h},i[e]=f):(f.id=p.id,f.object=p,f.geometry=m,f.material=g,f.groupOrder=u,f.renderOrder=p.renderOrder,f.z=_,f.group=h),e++,f}function a(p,m,g,u,_,h){let f=s(p,m,g,u,_,h);g.transmission>0?n.push(f):g.transparent===!0?r.push(f):t.push(f)}function l(p,m,g,u,_,h){let f=s(p,m,g,u,_,h);g.transmission>0?n.unshift(f):g.transparent===!0?r.unshift(f):t.unshift(f)}function c(p,m){t.length>1&&t.sort(p||Qd),n.length>1&&n.sort(m||Df),r.length>1&&r.sort(m||Df)}function d(){for(let p=e,m=i.length;p<m;p++){let g=i[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:a,unshift:l,finish:d,sort:c}}function If(){let i=new WeakMap;function e(n,r){let o=i.get(n),s;return o===void 0?(s=new Uf,i.set(n,[s])):r>=o.length?(s=new Uf,o.push(s)):s=o[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function $d(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Ge};break;case"SpotLight":t={position:new H,direction:new H,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function ep(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var tp=0;function ip(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ff(i,e){let t=new $d,n=ep(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new H);let o=new H,s=new et,a=new et;function l(d,p){let m=0,g=0,u=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let _=0,h=0,f=0,y=0,x=0,w=0,L=0,C=0,R=0,j=0,S=0;d.sort(ip);let b=p===!0?Math.PI:1;for(let Z=0,$=d.length;Z<$;Z++){let T=d[Z],I=T.color,F=T.intensity,B=T.distance,N=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)m+=I.r*F*b,g+=I.g*F*b,u+=I.b*F*b;else if(T.isLightProbe){for(let V=0;V<9;V++)r.probe[V].addScaledVector(T.sh.coefficients[V],F);S++}else if(T.isDirectionalLight){let V=t.get(T);if(V.color.copy(T.color).multiplyScalar(T.intensity*b),T.castShadow){let J=T.shadow,A=n.get(T);A.shadowBias=J.bias,A.shadowNormalBias=J.normalBias,A.shadowRadius=J.radius,A.shadowMapSize=J.mapSize,r.directionalShadow[_]=A,r.directionalShadowMap[_]=N,r.directionalShadowMatrix[_]=T.shadow.matrix,w++}r.directional[_]=V,_++}else if(T.isSpotLight){let V=t.get(T);V.position.setFromMatrixPosition(T.matrixWorld),V.color.copy(I).multiplyScalar(F*b),V.distance=B,V.coneCos=Math.cos(T.angle),V.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),V.decay=T.decay,r.spot[f]=V;let J=T.shadow;if(T.map&&(r.spotLightMap[R]=T.map,R++,J.updateMatrices(T),T.castShadow&&j++),r.spotLightMatrix[f]=J.matrix,T.castShadow){let A=n.get(T);A.shadowBias=J.bias,A.shadowNormalBias=J.normalBias,A.shadowRadius=J.radius,A.shadowMapSize=J.mapSize,r.spotShadow[f]=A,r.spotShadowMap[f]=N,C++}f++}else if(T.isRectAreaLight){let V=t.get(T);V.color.copy(I).multiplyScalar(F),V.halfWidth.set(T.width*.5,0,0),V.halfHeight.set(0,T.height*.5,0),r.rectArea[y]=V,y++}else if(T.isPointLight){let V=t.get(T);if(V.color.copy(T.color).multiplyScalar(T.intensity*b),V.distance=T.distance,V.decay=T.decay,T.castShadow){let J=T.shadow,A=n.get(T);A.shadowBias=J.bias,A.shadowNormalBias=J.normalBias,A.shadowRadius=J.radius,A.shadowMapSize=J.mapSize,A.shadowCameraNear=J.camera.near,A.shadowCameraFar=J.camera.far,r.pointShadow[h]=A,r.pointShadowMap[h]=N,r.pointShadowMatrix[h]=T.shadow.matrix,L++}r.point[h]=V,h++}else if(T.isHemisphereLight){let V=t.get(T);V.skyColor.copy(T.color).multiplyScalar(F*b),V.groundColor.copy(T.groundColor).multiplyScalar(F*b),r.hemi[x]=V,x++}}y>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=m,r.ambient[1]=g,r.ambient[2]=u;let U=r.hash;(U.directionalLength!==_||U.pointLength!==h||U.spotLength!==f||U.rectAreaLength!==y||U.hemiLength!==x||U.numDirectionalShadows!==w||U.numPointShadows!==L||U.numSpotShadows!==C||U.numSpotMaps!==R||U.numLightProbes!==S)&&(r.directional.length=_,r.spot.length=f,r.rectArea.length=y,r.point.length=h,r.hemi.length=x,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=C+R-j,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=j,r.numLightProbes=S,U.directionalLength=_,U.pointLength=h,U.spotLength=f,U.rectAreaLength=y,U.hemiLength=x,U.numDirectionalShadows=w,U.numPointShadows=L,U.numSpotShadows=C,U.numSpotMaps=R,U.numLightProbes=S,r.version=tp++)}function c(d,p){let m=0,g=0,u=0,_=0,h=0,f=p.matrixWorldInverse;for(let y=0,x=d.length;y<x;y++){let w=d[y];if(w.isDirectionalLight){let L=r.directional[m];L.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(f),m++}else if(w.isSpotLight){let L=r.spot[u];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(f),L.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(f),u++}else if(w.isRectAreaLight){let L=r.rectArea[_];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(f),a.identity(),s.copy(w.matrixWorld),s.premultiply(f),a.extractRotation(s),L.halfWidth.set(w.width*.5,0,0),L.halfHeight.set(0,w.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),_++}else if(w.isPointLight){let L=r.point[g];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(f),g++}else if(w.isHemisphereLight){let L=r.hemi[h];L.direction.setFromMatrixPosition(w.matrixWorld),L.direction.transformDirection(f),h++}}}return{setup:l,setupView:c,state:r}}function Nf(i,e){let t=new Ff(i,e),n=[],r=[];function o(){n.length=0,r.length=0}function s(p){n.push(p)}function a(p){r.push(p)}function l(p){t.setup(n,p)}function c(p){t.setupView(n,p)}return{init:o,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:a}}function Of(i,e){let t=new WeakMap;function n(o,s=0){let a=t.get(o),l;return a===void 0?(l=new Nf(i,e),t.set(o,[l])):s>=a.length?(l=new Nf(i,e),a.push(l)):l=a[s],l}function r(){t=new WeakMap}return{get:n,dispose:r}}var oo=class extends Jt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Us,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};var ao=class extends Jt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var Bf=`
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
`;function zf(i,e,t){let n=new cn,r=new Ve,o=new Ve,s=new rt,a=new oo({depthPacking:Is}),l=new ao,c={},d=t.maxTextureSize,p={[Bt]:nt,[nt]:Bt,[vt]:vt},m=new ut({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:Bf,fragmentShader:Gf}),g=m.clone();g.defines.HORIZONTAL_PASS=1;let u=new ct;u.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Et(u,m),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sr;let f=this.type;this.render=function(C,R,j){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||C.length===0)return;let S=i.getRenderTarget(),b=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(qt),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);let $=f!==$t&&this.type===$t,T=f===$t&&this.type!==$t;for(let I=0,F=C.length;I<F;I++){let B=C[I],N=B.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);let V=N.getFrameExtents();if(r.multiply(V),o.copy(N.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(o.x=Math.floor(d/V.x),r.x=o.x*V.x,N.mapSize.x=o.x),r.y>d&&(o.y=Math.floor(d/V.y),r.y=o.y*V.y,N.mapSize.y=o.y)),N.map===null||$===!0||T===!0){let A=this.type!==$t?{minFilter:st,magFilter:st}:{};N.map!==null&&N.map.dispose(),N.map=new Tt(r.x,r.y,A),N.map.texture.name=B.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();let J=N.getViewportCount();for(let A=0;A<J;A++){let te=N.getViewport(A);s.set(o.x*te.x,o.y*te.y,o.x*te.z,o.y*te.w),Z.viewport(s),N.updateMatrices(B,A),n=N.getFrustum(),w(R,j,N.camera,B,this.type)}N.isPointLightShadow!==!0&&this.type===$t&&y(N,j),N.needsUpdate=!1}f=this.type,h.needsUpdate=!1,i.setRenderTarget(S,b,U)};function y(C,R){let j=e.update(_);m.defines.VSM_SAMPLES!==C.blurSamples&&(m.defines.VSM_SAMPLES=C.blurSamples,g.defines.VSM_SAMPLES=C.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Tt(r.x,r.y)),m.uniforms.shadow_pass.value=C.map.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(R,null,j,m,_,null),g.uniforms.shadow_pass.value=C.mapPass.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(R,null,j,g,_,null)}function x(C,R,j,S){let b=null,U=j.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(U!==void 0)b=U;else if(b=j.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let Z=b.uuid,$=R.uuid,T=c[Z];T===void 0&&(T={},c[Z]=T);let I=T[$];I===void 0&&(I=b.clone(),T[$]=I,R.addEventListener("dispose",L)),b=I}if(b.visible=R.visible,b.wireframe=R.wireframe,S===$t?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:p[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,j.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let Z=i.properties.get(b);Z.light=j}return b}function w(C,R,j,S,b){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===$t)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,C.matrixWorld);let $=e.update(C),T=C.material;if(Array.isArray(T)){let I=$.groups;for(let F=0,B=I.length;F<B;F++){let N=I[F],V=T[N.materialIndex];if(V&&V.visible){let J=x(C,V,S,b);C.onBeforeShadow(i,C,R,j,$,J,N),i.renderBufferDirect(j,null,$,J,C,N),C.onAfterShadow(i,C,R,j,$,J,N)}}}else if(T.visible){let I=x(C,T,S,b);C.onBeforeShadow(i,C,R,j,$,I,null),i.renderBufferDirect(j,null,$,I,C,null),C.onAfterShadow(i,C,R,j,$,I,null)}}let Z=C.children;for(let $=0,T=Z.length;$<T;$++)w(Z[$],R,j,S,b)}function L(C){C.target.removeEventListener("dispose",L);for(let j in c){let S=c[j],b=C.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}function Hf(i,e,t){let n=t.isWebGL2;function r(){let P=!1,xe=new rt,ve=null,Pe=new rt(0,0,0,0);return{setMask:function(Re){ve!==Re&&!P&&(i.colorMask(Re,Re,Re,Re),ve=Re)},setLocked:function(Re){P=Re},setClear:function(Re,Je,Qe,mt,Pt){Pt===!0&&(Re*=mt,Je*=mt,Qe*=mt),xe.set(Re,Je,Qe,mt),Pe.equals(xe)===!1&&(i.clearColor(Re,Je,Qe,mt),Pe.copy(xe))},reset:function(){P=!1,ve=null,Pe.set(-1,0,0,0)}}}function o(){let P=!1,xe=null,ve=null,Pe=null;return{setTest:function(Re){Re?ee(i.DEPTH_TEST):de(i.DEPTH_TEST)},setMask:function(Re){xe!==Re&&!P&&(i.depthMask(Re),xe=Re)},setFunc:function(Re){if(ve!==Re){switch(Re){case cs:i.depthFunc(i.NEVER);break;case us:i.depthFunc(i.ALWAYS);break;case fs:i.depthFunc(i.LESS);break;case Qi:i.depthFunc(i.LEQUAL);break;case hs:i.depthFunc(i.EQUAL);break;case ds:i.depthFunc(i.GEQUAL);break;case ps:i.depthFunc(i.GREATER);break;case ms:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=Re}},setLocked:function(Re){P=Re},setClear:function(Re){Pe!==Re&&(i.clearDepth(Re),Pe=Re)},reset:function(){P=!1,xe=null,ve=null,Pe=null}}}function s(){let P=!1,xe=null,ve=null,Pe=null,Re=null,Je=null,Qe=null,mt=null,Pt=null;return{setTest:function($e){P||($e?ee(i.STENCIL_TEST):de(i.STENCIL_TEST))},setMask:function($e){xe!==$e&&!P&&(i.stencilMask($e),xe=$e)},setFunc:function($e,Dt,si){(ve!==$e||Pe!==Dt||Re!==si)&&(i.stencilFunc($e,Dt,si),ve=$e,Pe=Dt,Re=si)},setOp:function($e,Dt,si){(Je!==$e||Qe!==Dt||mt!==si)&&(i.stencilOp($e,Dt,si),Je=$e,Qe=Dt,mt=si)},setLocked:function($e){P=$e},setClear:function($e){Pt!==$e&&(i.clearStencil($e),Pt=$e)},reset:function(){P=!1,xe=null,ve=null,Pe=null,Re=null,Je=null,Qe=null,mt=null,Pt=null}}}let a=new r,l=new o,c=new s,d=new WeakMap,p=new WeakMap,m={},g={},u=new WeakMap,_=[],h=null,f=!1,y=null,x=null,w=null,L=null,C=null,R=null,j=null,S=new Ge(0,0,0),b=0,U=!1,Z=null,$=null,T=null,I=null,F=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,V=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(J)[1]),N=V>=1):J.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),N=V>=2);let A=null,te={},z=i.getParameter(i.SCISSOR_BOX),D=i.getParameter(i.VIEWPORT),X=new rt().fromArray(z),re=new rt().fromArray(D);function fe(P,xe,ve,Pe){let Re=new Uint8Array(4),Je=i.createTexture();i.bindTexture(P,Je),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qe=0;Qe<ve;Qe++)n&&(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)?i.texImage3D(xe,0,i.RGBA,1,1,Pe,0,i.RGBA,i.UNSIGNED_BYTE,Re):i.texImage2D(xe+Qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Re);return Je}let he={};he[i.TEXTURE_2D]=fe(i.TEXTURE_2D,i.TEXTURE_2D,1),he[i.TEXTURE_CUBE_MAP]=fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(he[i.TEXTURE_2D_ARRAY]=fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),he[i.TEXTURE_3D]=fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ee(i.DEPTH_TEST),l.setFunc(Qi),_e(!1),M(bo),ee(i.CULL_FACE),le(qt);function ee(P){m[P]!==!0&&(i.enable(P),m[P]=!0)}function de(P){m[P]!==!1&&(i.disable(P),m[P]=!1)}function Me(P,xe){return g[P]!==xe?(i.bindFramebuffer(P,xe),g[P]=xe,n&&(P===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=xe),P===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=xe)),!0):!1}function O(P,xe){let ve=_,Pe=!1;if(P)if(ve=u.get(xe),ve===void 0&&(ve=[],u.set(xe,ve)),P.isWebGLMultipleRenderTargets){let Re=P.texture;if(ve.length!==Re.length||ve[0]!==i.COLOR_ATTACHMENT0){for(let Je=0,Qe=Re.length;Je<Qe;Je++)ve[Je]=i.COLOR_ATTACHMENT0+Je;ve.length=Re.length,Pe=!0}}else ve[0]!==i.COLOR_ATTACHMENT0&&(ve[0]=i.COLOR_ATTACHMENT0,Pe=!0);else ve[0]!==i.BACK&&(ve[0]=i.BACK,Pe=!0);Pe&&(t.isWebGL2?i.drawBuffers(ve):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ve))}function q(P){return h!==P?(i.useProgram(P),h=P,!0):!1}let ie={[_i]:i.FUNC_ADD,[Za]:i.FUNC_SUBTRACT,[Ka]:i.FUNC_REVERSE_SUBTRACT};if(n)ie[Ro]=i.MIN,ie[Co]=i.MAX;else{let P=e.get("EXT_blend_minmax");P!==null&&(ie[Ro]=P.MIN_EXT,ie[Co]=P.MAX_EXT)}let ne={[ja]:i.ZERO,[Ja]:i.ONE,[Qa]:i.SRC_COLOR,[Hn]:i.SRC_ALPHA,[rs]:i.SRC_ALPHA_SATURATE,[is]:i.DST_COLOR,[es]:i.DST_ALPHA,[$a]:i.ONE_MINUS_SRC_COLOR,[Vn]:i.ONE_MINUS_SRC_ALPHA,[ns]:i.ONE_MINUS_DST_COLOR,[ts]:i.ONE_MINUS_DST_ALPHA,[os]:i.CONSTANT_COLOR,[as]:i.ONE_MINUS_CONSTANT_COLOR,[ss]:i.CONSTANT_ALPHA,[ls]:i.ONE_MINUS_CONSTANT_ALPHA};function le(P,xe,ve,Pe,Re,Je,Qe,mt,Pt,$e){if(P===qt){f===!0&&(de(i.BLEND),f=!1);return}if(f===!1&&(ee(i.BLEND),f=!0),P!==Ya){if(P!==y||$e!==U){if((x!==_i||C!==_i)&&(i.blendEquation(i.FUNC_ADD),x=_i,C=_i),$e)switch(P){case gi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case To:i.blendFunc(i.ONE,i.ONE);break;case Ao:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case gi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case To:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ao:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}w=null,L=null,R=null,j=null,S.set(0,0,0),b=0,y=P,U=$e}return}Re=Re||xe,Je=Je||ve,Qe=Qe||Pe,(xe!==x||Re!==C)&&(i.blendEquationSeparate(ie[xe],ie[Re]),x=xe,C=Re),(ve!==w||Pe!==L||Je!==R||Qe!==j)&&(i.blendFuncSeparate(ne[ve],ne[Pe],ne[Je],ne[Qe]),w=ve,L=Pe,R=Je,j=Qe),(mt.equals(S)===!1||Pt!==b)&&(i.blendColor(mt.r,mt.g,mt.b,Pt),S.copy(mt),b=Pt),y=P,U=!1}function Te(P,xe){P.side===vt?de(i.CULL_FACE):ee(i.CULL_FACE);let ve=P.side===nt;xe&&(ve=!ve),_e(ve),P.blending===gi&&P.transparent===!1?le(qt):le(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);let Pe=P.stencilWrite;c.setTest(Pe),Pe&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),k(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):de(i.SAMPLE_ALPHA_TO_COVERAGE)}function _e(P){Z!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),Z=P)}function M(P){P!==Wa?(ee(i.CULL_FACE),P!==$&&(P===bo?i.cullFace(i.BACK):P===Xa?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):de(i.CULL_FACE),$=P}function v(P){P!==T&&(N&&i.lineWidth(P),T=P)}function k(P,xe,ve){P?(ee(i.POLYGON_OFFSET_FILL),(I!==xe||F!==ve)&&(i.polygonOffset(xe,ve),I=xe,F=ve)):de(i.POLYGON_OFFSET_FILL)}function ue(P){P?ee(i.SCISSOR_TEST):de(i.SCISSOR_TEST)}function ae(P){P===void 0&&(P=i.TEXTURE0+B-1),A!==P&&(i.activeTexture(P),A=P)}function ce(P,xe,ve){ve===void 0&&(A===null?ve=i.TEXTURE0+B-1:ve=A);let Pe=te[ve];Pe===void 0&&(Pe={type:void 0,texture:void 0},te[ve]=Pe),(Pe.type!==P||Pe.texture!==xe)&&(A!==ve&&(i.activeTexture(ve),A=ve),i.bindTexture(P,xe||he[P]),Pe.type=P,Pe.texture=xe)}function Q(){let P=te[A];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function se(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function be(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ye(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ce(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ue(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Fe(P){X.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),X.copy(P))}function qe(P){re.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),re.copy(P))}function je(P,xe){let ve=p.get(xe);ve===void 0&&(ve=new WeakMap,p.set(xe,ve));let Pe=ve.get(P);Pe===void 0&&(Pe=i.getUniformBlockIndex(xe,P.name),ve.set(P,Pe))}function ke(P,xe){let Pe=p.get(xe).get(P);d.get(xe)!==Pe&&(i.uniformBlockBinding(xe,Pe,P.__bindingPointIndex),d.set(xe,Pe))}function ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},A=null,te={},g={},u=new WeakMap,_=[],h=null,f=!1,y=null,x=null,w=null,L=null,C=null,R=null,j=null,S=new Ge(0,0,0),b=0,U=!1,Z=null,$=null,T=null,I=null,F=null,X.set(0,0,i.canvas.width,i.canvas.height),re.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ee,disable:de,bindFramebuffer:Me,drawBuffers:O,useProgram:q,setBlending:le,setMaterial:Te,setFlipSided:_e,setCullFace:M,setLineWidth:v,setPolygonOffset:k,setScissorTest:ue,activeTexture:ae,bindTexture:ce,unbindTexture:Q,compressedTexImage2D:se,compressedTexImage3D:pe,texImage2D:we,texImage3D:ye,updateUBOMapping:je,uniformBlockBinding:ke,texStorage2D:Ce,texStorage3D:Ue,texSubImage2D:Ee,texSubImage3D:be,compressedTexSubImage2D:oe,compressedTexSubImage3D:Ye,scissor:Fe,viewport:qe,reset:ge}}function Vf(i,e,t,n,r,o,s){let a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap,p,m=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function u(M,v){return g?new OffscreenCanvas(M,v):mn("canvas")}function _(M,v,k,ue){let ae=1;if((M.width>ue||M.height>ue)&&(ae=ue/Math.max(M.width,M.height)),ae<1||v===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){let ce=v?Kn:Math.floor,Q=ce(ae*M.width),se=ce(ae*M.height);p===void 0&&(p=u(Q,se));let pe=k?u(Q,se):p;return pe.width=Q,pe.height=se,pe.getContext("2d").drawImage(M,0,0,Q,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+Q+"x"+se+")."),pe}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function h(M){return aa(M.width)&&aa(M.height)}function f(M){return a?!1:M.wrapS!==Ut||M.wrapT!==Ut||M.minFilter!==st&&M.minFilter!==Mt}function y(M,v){return M.generateMipmaps&&v&&M.minFilter!==st&&M.minFilter!==Mt}function x(M){i.generateMipmap(M)}function w(M,v,k,ue,ae=!1){if(a===!1)return v;if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ce=v;if(v===i.RED&&(k===i.FLOAT&&(ce=i.R32F),k===i.HALF_FLOAT&&(ce=i.R16F),k===i.UNSIGNED_BYTE&&(ce=i.R8)),v===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(ce=i.R8UI),k===i.UNSIGNED_SHORT&&(ce=i.R16UI),k===i.UNSIGNED_INT&&(ce=i.R32UI),k===i.BYTE&&(ce=i.R8I),k===i.SHORT&&(ce=i.R16I),k===i.INT&&(ce=i.R32I)),v===i.RG&&(k===i.FLOAT&&(ce=i.RG32F),k===i.HALF_FLOAT&&(ce=i.RG16F),k===i.UNSIGNED_BYTE&&(ce=i.RG8)),v===i.RGBA){let Q=ae?tn:Xe.getTransfer(ue);k===i.FLOAT&&(ce=i.RGBA32F),k===i.HALF_FLOAT&&(ce=i.RGBA16F),k===i.UNSIGNED_BYTE&&(ce=Q===Ze?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function L(M,v,k){return y(M,k)===!0||M.isFramebufferTexture&&M.minFilter!==st&&M.minFilter!==Mt?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function C(M){return M===st||M===Po||M===cr?i.NEAREST:i.LINEAR}function R(M){let v=M.target;v.removeEventListener("dispose",R),S(v),v.isVideoTexture&&d.delete(v)}function j(M){let v=M.target;v.removeEventListener("dispose",j),U(v)}function S(M){let v=n.get(M);if(v.__webglInit===void 0)return;let k=M.source,ue=m.get(k);if(ue){let ae=ue[v.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&b(M),Object.keys(ue).length===0&&m.delete(k)}n.remove(M)}function b(M){let v=n.get(M);i.deleteTexture(v.__webglTexture);let k=M.source,ue=m.get(k);delete ue[v.__cacheKey],s.memory.textures--}function U(M){let v=M.texture,k=n.get(M),ue=n.get(v);if(ue.__webglTexture!==void 0&&(i.deleteTexture(ue.__webglTexture),s.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(k.__webglFramebuffer[ae]))for(let ce=0;ce<k.__webglFramebuffer[ae].length;ce++)i.deleteFramebuffer(k.__webglFramebuffer[ae][ce]);else i.deleteFramebuffer(k.__webglFramebuffer[ae]);k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer[ae])}else{if(Array.isArray(k.__webglFramebuffer))for(let ae=0;ae<k.__webglFramebuffer.length;ae++)i.deleteFramebuffer(k.__webglFramebuffer[ae]);else i.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&i.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let ae=0;ae<k.__webglColorRenderbuffer.length;ae++)k.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(k.__webglColorRenderbuffer[ae]);k.__webglDepthRenderbuffer&&i.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let ae=0,ce=v.length;ae<ce;ae++){let Q=n.get(v[ae]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),s.memory.textures--),n.remove(v[ae])}n.remove(v),n.remove(M)}let Z=0;function $(){Z=0}function T(){let M=Z;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),Z+=1,M}function I(M){let v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.colorSpace),v.join()}function F(M,v){let k=n.get(M);if(M.isVideoTexture&&Te(M),M.isRenderTargetTexture===!1&&M.version>0&&k.__version!==M.version){let ue=M.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(k,M,v);return}}t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+v)}function B(M,v){let k=n.get(M);if(M.version>0&&k.__version!==M.version){X(k,M,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+v)}function N(M,v){let k=n.get(M);if(M.version>0&&k.__version!==M.version){X(k,M,v);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+v)}function V(M,v){let k=n.get(M);if(M.version>0&&k.__version!==M.version){re(k,M,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+v)}let J={[Xn]:i.REPEAT,[Ut]:i.CLAMP_TO_EDGE,[qn]:i.MIRRORED_REPEAT},A={[st]:i.NEAREST,[Po]:i.NEAREST_MIPMAP_NEAREST,[cr]:i.NEAREST_MIPMAP_LINEAR,[Mt]:i.LINEAR,[bs]:i.LINEAR_MIPMAP_NEAREST,[xi]:i.LINEAR_MIPMAP_LINEAR},te={[Os]:i.NEVER,[ks]:i.ALWAYS,[Bs]:i.LESS,[Er]:i.LEQUAL,[Gs]:i.EQUAL,[Vs]:i.GEQUAL,[zs]:i.GREATER,[Hs]:i.NOTEQUAL};function z(M,v,k){if(k?(i.texParameteri(M,i.TEXTURE_WRAP_S,J[v.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,J[v.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,J[v.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,A[v.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,A[v.minFilter])):(i.texParameteri(M,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(M,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(v.wrapS!==Ut||v.wrapT!==Ut)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(M,i.TEXTURE_MAG_FILTER,C(v.magFilter)),i.texParameteri(M,i.TEXTURE_MIN_FILTER,C(v.minFilter)),v.minFilter!==st&&v.minFilter!==Mt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,te[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ue=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===st||v.minFilter!==cr&&v.minFilter!==xi||v.type===Ht&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===vi&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(i.texParameterf(M,ue.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function D(M,v){let k=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",R));let ue=v.source,ae=m.get(ue);ae===void 0&&(ae={},m.set(ue,ae));let ce=I(v);if(ce!==M.__cacheKey){ae[ce]===void 0&&(ae[ce]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,k=!0),ae[ce].usedTimes++;let Q=ae[M.__cacheKey];Q!==void 0&&(ae[M.__cacheKey].usedTimes--,Q.usedTimes===0&&b(v)),M.__cacheKey=ce,M.__webglTexture=ae[ce].texture}return k}function X(M,v,k){let ue=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ue=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ue=i.TEXTURE_3D);let ae=D(M,v),ce=v.source;t.bindTexture(ue,M.__webglTexture,i.TEXTURE0+k);let Q=n.get(ce);if(ce.version!==Q.__version||ae===!0){t.activeTexture(i.TEXTURE0+k);let se=Xe.getPrimaries(Xe.workingColorSpace),pe=v.colorSpace===_t?null:Xe.getPrimaries(v.colorSpace),Ee=v.colorSpace===_t||se===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let be=f(v)&&h(v.image)===!1,oe=_(v.image,be,!1,r.maxTextureSize);oe=_e(v,oe);let Ye=h(oe)||a,Ce=o.convert(v.format,v.colorSpace),Ue=o.convert(v.type),we=w(v.internalFormat,Ce,Ue,v.colorSpace,v.isVideoTexture);z(ue,v,Ye);let ye,Fe=v.mipmaps,qe=a&&v.isVideoTexture!==!0&&we!==Mr,je=Q.__version===void 0||ae===!0,ke=L(v,oe,Ye);if(v.isDepthTexture)we=i.DEPTH_COMPONENT,a?v.type===Ht?we=i.DEPTH_COMPONENT32F:v.type===zt?we=i.DEPTH_COMPONENT24:v.type===Zt?we=i.DEPTH24_STENCIL8:we=i.DEPTH_COMPONENT16:v.type===Ht&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===ti&&we===i.DEPTH_COMPONENT&&v.type!==$i&&v.type!==zt&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=zt,Ue=o.convert(v.type)),v.format===ci&&we===i.DEPTH_COMPONENT&&(we=i.DEPTH_STENCIL,v.type!==Zt&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Zt,Ue=o.convert(v.type))),je&&(qe?t.texStorage2D(i.TEXTURE_2D,1,we,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,we,oe.width,oe.height,0,Ce,Ue,null));else if(v.isDataTexture)if(Fe.length>0&&Ye){qe&&je&&t.texStorage2D(i.TEXTURE_2D,ke,we,Fe[0].width,Fe[0].height);for(let ge=0,P=Fe.length;ge<P;ge++)ye=Fe[ge],qe?t.texSubImage2D(i.TEXTURE_2D,ge,0,0,ye.width,ye.height,Ce,Ue,ye.data):t.texImage2D(i.TEXTURE_2D,ge,we,ye.width,ye.height,0,Ce,Ue,ye.data);v.generateMipmaps=!1}else qe?(je&&t.texStorage2D(i.TEXTURE_2D,ke,we,oe.width,oe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe.width,oe.height,Ce,Ue,oe.data)):t.texImage2D(i.TEXTURE_2D,0,we,oe.width,oe.height,0,Ce,Ue,oe.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){qe&&je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ke,we,Fe[0].width,Fe[0].height,oe.depth);for(let ge=0,P=Fe.length;ge<P;ge++)ye=Fe[ge],v.format!==St?Ce!==null?qe?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,ye.width,ye.height,oe.depth,Ce,ye.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ge,we,ye.width,ye.height,oe.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,ye.width,ye.height,oe.depth,Ce,Ue,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ge,we,ye.width,ye.height,oe.depth,0,Ce,Ue,ye.data)}else{qe&&je&&t.texStorage2D(i.TEXTURE_2D,ke,we,Fe[0].width,Fe[0].height);for(let ge=0,P=Fe.length;ge<P;ge++)ye=Fe[ge],v.format!==St?Ce!==null?qe?t.compressedTexSubImage2D(i.TEXTURE_2D,ge,0,0,ye.width,ye.height,Ce,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,ge,we,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage2D(i.TEXTURE_2D,ge,0,0,ye.width,ye.height,Ce,Ue,ye.data):t.texImage2D(i.TEXTURE_2D,ge,we,ye.width,ye.height,0,Ce,Ue,ye.data)}else if(v.isDataArrayTexture)qe?(je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ke,we,oe.width,oe.height,oe.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Ce,Ue,oe.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,oe.width,oe.height,oe.depth,0,Ce,Ue,oe.data);else if(v.isData3DTexture)qe?(je&&t.texStorage3D(i.TEXTURE_3D,ke,we,oe.width,oe.height,oe.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Ce,Ue,oe.data)):t.texImage3D(i.TEXTURE_3D,0,we,oe.width,oe.height,oe.depth,0,Ce,Ue,oe.data);else if(v.isFramebufferTexture){if(je)if(qe)t.texStorage2D(i.TEXTURE_2D,ke,we,oe.width,oe.height);else{let ge=oe.width,P=oe.height;for(let xe=0;xe<ke;xe++)t.texImage2D(i.TEXTURE_2D,xe,we,ge,P,0,Ce,Ue,null),ge>>=1,P>>=1}}else if(Fe.length>0&&Ye){qe&&je&&t.texStorage2D(i.TEXTURE_2D,ke,we,Fe[0].width,Fe[0].height);for(let ge=0,P=Fe.length;ge<P;ge++)ye=Fe[ge],qe?t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Ce,Ue,ye):t.texImage2D(i.TEXTURE_2D,ge,we,Ce,Ue,ye);v.generateMipmaps=!1}else qe?(je&&t.texStorage2D(i.TEXTURE_2D,ke,we,oe.width,oe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ce,Ue,oe)):t.texImage2D(i.TEXTURE_2D,0,we,Ce,Ue,oe);y(v,Ye)&&x(ue),Q.__version=ce.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function re(M,v,k){if(v.image.length!==6)return;let ue=D(M,v),ae=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+k);let ce=n.get(ae);if(ae.version!==ce.__version||ue===!0){t.activeTexture(i.TEXTURE0+k);let Q=Xe.getPrimaries(Xe.workingColorSpace),se=v.colorSpace===_t?null:Xe.getPrimaries(v.colorSpace),pe=v.colorSpace===_t||Q===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let Ee=v.isCompressedTexture||v.image[0].isCompressedTexture,be=v.image[0]&&v.image[0].isDataTexture,oe=[];for(let ge=0;ge<6;ge++)!Ee&&!be?oe[ge]=_(v.image[ge],!1,!0,r.maxCubemapSize):oe[ge]=be?v.image[ge].image:v.image[ge],oe[ge]=_e(v,oe[ge]);let Ye=oe[0],Ce=h(Ye)||a,Ue=o.convert(v.format,v.colorSpace),we=o.convert(v.type),ye=w(v.internalFormat,Ue,we,v.colorSpace),Fe=a&&v.isVideoTexture!==!0,qe=ce.__version===void 0||ue===!0,je=L(v,Ye,Ce);z(i.TEXTURE_CUBE_MAP,v,Ce);let ke;if(Ee){Fe&&qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,je,ye,Ye.width,Ye.height);for(let ge=0;ge<6;ge++){ke=oe[ge].mipmaps;for(let P=0;P<ke.length;P++){let xe=ke[P];v.format!==St?Ue!==null?Fe?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,P,0,0,xe.width,xe.height,Ue,xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,P,ye,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,P,0,0,xe.width,xe.height,Ue,we,xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,P,ye,xe.width,xe.height,0,Ue,we,xe.data)}}}else{ke=v.mipmaps,Fe&&qe&&(ke.length>0&&je++,t.texStorage2D(i.TEXTURE_CUBE_MAP,je,ye,oe[0].width,oe[0].height));for(let ge=0;ge<6;ge++)if(be){Fe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,oe[ge].width,oe[ge].height,Ue,we,oe[ge].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ye,oe[ge].width,oe[ge].height,0,Ue,we,oe[ge].data);for(let P=0;P<ke.length;P++){let ve=ke[P].image[ge].image;Fe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,P+1,0,0,ve.width,ve.height,Ue,we,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,P+1,ye,ve.width,ve.height,0,Ue,we,ve.data)}}else{Fe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ue,we,oe[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ye,Ue,we,oe[ge]);for(let P=0;P<ke.length;P++){let xe=ke[P];Fe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,P+1,0,0,Ue,we,xe.image[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,P+1,ye,Ue,we,xe.image[ge])}}}y(v,Ce)&&x(i.TEXTURE_CUBE_MAP),ce.__version=ae.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function fe(M,v,k,ue,ae,ce){let Q=o.convert(k.format,k.colorSpace),se=o.convert(k.type),pe=w(k.internalFormat,Q,se,k.colorSpace);if(!n.get(v).__hasExternalTextures){let be=Math.max(1,v.width>>ce),oe=Math.max(1,v.height>>ce);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,ce,pe,be,oe,v.depth,0,Q,se,null):t.texImage2D(ae,ce,pe,be,oe,0,Q,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,M),le(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,ae,n.get(k).__webglTexture,0,ne(v)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ue,ae,n.get(k).__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function he(M,v,k){if(i.bindRenderbuffer(i.RENDERBUFFER,M),v.depthBuffer&&!v.stencilBuffer){let ue=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(k||le(v)){let ae=v.depthTexture;ae&&ae.isDepthTexture&&(ae.type===Ht?ue=i.DEPTH_COMPONENT32F:ae.type===zt&&(ue=i.DEPTH_COMPONENT24));let ce=ne(v);le(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,ue,v.width,v.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,ue,v.width,v.height)}else i.renderbufferStorage(i.RENDERBUFFER,ue,v.width,v.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,M)}else if(v.depthBuffer&&v.stencilBuffer){let ue=ne(v);k&&le(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,i.DEPTH24_STENCIL8,v.width,v.height):le(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,i.DEPTH24_STENCIL8,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,M)}else{let ue=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let ae=0;ae<ue.length;ae++){let ce=ue[ae],Q=o.convert(ce.format,ce.colorSpace),se=o.convert(ce.type),pe=w(ce.internalFormat,Q,se,ce.colorSpace),Ee=ne(v);k&&le(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,pe,v.width,v.height):le(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,pe,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,pe,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ee(M,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),F(v.depthTexture,0);let ue=n.get(v.depthTexture).__webglTexture,ae=ne(v);if(v.depthTexture.format===ti)le(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0);else if(v.depthTexture.format===ci)le(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function de(M){let v=n.get(M),k=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!v.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ee(v.__webglFramebuffer,M)}else if(k){v.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[ue]),v.__webglDepthbuffer[ue]=i.createRenderbuffer(),he(v.__webglDepthbuffer[ue],M,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),he(v.__webglDepthbuffer,M,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Me(M,v,k){let ue=n.get(M);v!==void 0&&fe(ue.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&de(M)}function O(M){let v=M.texture,k=n.get(M),ue=n.get(v);M.addEventListener("dispose",j),M.isWebGLMultipleRenderTargets!==!0&&(ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture()),ue.__version=v.version,s.memory.textures++);let ae=M.isWebGLCubeRenderTarget===!0,ce=M.isWebGLMultipleRenderTargets===!0,Q=h(M)||a;if(ae){k.__webglFramebuffer=[];for(let se=0;se<6;se++)if(a&&v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[se]=[];for(let pe=0;pe<v.mipmaps.length;pe++)k.__webglFramebuffer[se][pe]=i.createFramebuffer()}else k.__webglFramebuffer[se]=i.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let se=0;se<v.mipmaps.length;se++)k.__webglFramebuffer[se]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(ce)if(r.drawBuffers){let se=M.texture;for(let pe=0,Ee=se.length;pe<Ee;pe++){let be=n.get(se[pe]);be.__webglTexture===void 0&&(be.__webglTexture=i.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&le(M)===!1){let se=ce?v:[v];k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let pe=0;pe<se.length;pe++){let Ee=se[pe];k.__webglColorRenderbuffer[pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[pe]);let be=o.convert(Ee.format,Ee.colorSpace),oe=o.convert(Ee.type),Ye=w(Ee.internalFormat,be,oe,Ee.colorSpace,M.isXRRenderTarget===!0),Ce=ne(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,Ye,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,k.__webglColorRenderbuffer[pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),he(k.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,ue.__webglTexture),z(i.TEXTURE_CUBE_MAP,v,Q);for(let se=0;se<6;se++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let pe=0;pe<v.mipmaps.length;pe++)fe(k.__webglFramebuffer[se][pe],M,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,pe);else fe(k.__webglFramebuffer[se],M,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);y(v,Q)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){let se=M.texture;for(let pe=0,Ee=se.length;pe<Ee;pe++){let be=se[pe],oe=n.get(be);t.bindTexture(i.TEXTURE_2D,oe.__webglTexture),z(i.TEXTURE_2D,be,Q),fe(k.__webglFramebuffer,M,be,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,0),y(be,Q)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?se=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(se,ue.__webglTexture),z(se,v,Q),a&&v.mipmaps&&v.mipmaps.length>0)for(let pe=0;pe<v.mipmaps.length;pe++)fe(k.__webglFramebuffer[pe],M,v,i.COLOR_ATTACHMENT0,se,pe);else fe(k.__webglFramebuffer,M,v,i.COLOR_ATTACHMENT0,se,0);y(v,Q)&&x(se),t.unbindTexture()}M.depthBuffer&&de(M)}function q(M){let v=h(M)||a,k=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ue=0,ae=k.length;ue<ae;ue++){let ce=k[ue];if(y(ce,v)){let Q=M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,se=n.get(ce).__webglTexture;t.bindTexture(Q,se),x(Q),t.unbindTexture()}}}function ie(M){if(a&&M.samples>0&&le(M)===!1){let v=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],k=M.width,ue=M.height,ae=i.COLOR_BUFFER_BIT,ce=[],Q=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=n.get(M),pe=M.isWebGLMultipleRenderTargets===!0;if(pe)for(let Ee=0;Ee<v.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let Ee=0;Ee<v.length;Ee++){ce.push(i.COLOR_ATTACHMENT0+Ee),M.depthBuffer&&ce.push(Q);let be=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(be===!1&&(M.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),pe&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,se.__webglColorRenderbuffer[Ee]),be===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Q]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Q])),pe){let oe=n.get(v[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,k,ue,0,0,k,ue,ae,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pe)for(let Ee=0;Ee<v.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,se.__webglColorRenderbuffer[Ee]);let be=n.get(v[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}}function ne(M){return Math.min(r.maxSamples,M.samples)}function le(M){let v=n.get(M);return a&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Te(M){let v=s.render.frame;d.get(M)!==v&&(d.set(M,v),M.update())}function _e(M,v){let k=M.colorSpace,ue=M.format,ae=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Yn||k!==yt&&k!==_t&&(Xe.getTransfer(k)===Ze?a===!1?e.has("EXT_sRGB")===!0&&ue===St?(M.format=Yn,M.minFilter=Mt,M.generateMipmaps=!1):v=Tn.sRGBToLinear(v):(ue!==St||ae!==Gt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),v}this.allocateTextureUnit=T,this.resetTextureUnits=$,this.setTexture2D=F,this.setTexture2DArray=B,this.setTexture3D=N,this.setTextureCube=V,this.rebindTextures=Me,this.setupRenderTarget=O,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=le}function kf(i,e,t){let n=t.isWebGL2;function r(o,s=_t){let a,l=Xe.getTransfer(s);if(o===Gt)return i.UNSIGNED_BYTE;if(o===fr)return i.UNSIGNED_SHORT_4_4_4_4;if(o===hr)return i.UNSIGNED_SHORT_5_5_5_1;if(o===Ts)return i.BYTE;if(o===As)return i.SHORT;if(o===$i)return i.UNSIGNED_SHORT;if(o===ur)return i.INT;if(o===zt)return i.UNSIGNED_INT;if(o===Ht)return i.FLOAT;if(o===vi)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===ws)return i.ALPHA;if(o===St)return i.RGBA;if(o===Rs)return i.LUMINANCE;if(o===Cs)return i.LUMINANCE_ALPHA;if(o===ti)return i.DEPTH_COMPONENT;if(o===ci)return i.DEPTH_STENCIL;if(o===Yn)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===Ls)return i.RED;if(o===dr)return i.RED_INTEGER;if(o===Ps)return i.RG;if(o===pr)return i.RG_INTEGER;if(o===mr)return i.RGBA_INTEGER;if(o===gr||o===_r||o===xr||o===vr)if(l===Ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===gr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===_r)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===xr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===vr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===gr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===_r)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===xr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===vr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Do||o===Uo||o===Io||o===Fo)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===Do)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Uo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Io)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Fo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Mr)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===No||o===Oo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===No)return l===Ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===Oo)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Bo||o===Go||o===zo||o===Ho||o===Vo||o===ko||o===Wo||o===Xo||o===qo||o===Yo||o===Zo||o===Ko||o===jo||o===Jo)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===Bo)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Go)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===zo)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Ho)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Vo)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===ko)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Wo)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Xo)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===qo)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Yo)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Zo)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Ko)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===jo)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Jo)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Sr||o===Qo||o===$o)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===Sr)return l===Ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===Qo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===$o)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===Ds||o===ea||o===ta||o===ia)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===Sr)return a.COMPRESSED_RED_RGTC1_EXT;if(o===ea)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===ta)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===ia)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Zt?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[o]!==void 0?i[o]:null}return{convert:r}}var so=class extends At{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}};var ji=class extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}};var rp={type:"move"},On=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,s=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(let _ of e.hand.values()){let h=t.getJointPose(_,n),f=this._getHandJoint(c,_);h!==null&&(f.matrix.fromArray(h.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=h.radius),f.visible=h!==null}let d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],m=d.position.distanceTo(p.position),g=.02,u=.005;c.inputState.pinching&&m>g+u?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&m<=g-u&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rp)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ji;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var lo=class extends Nt{constructor(e,t){super();let n=this,r=null,o=1,s=null,a="local-floor",l=1,c=null,d=null,p=null,m=null,g=null,u=null,_=t.getContextAttributes(),h=null,f=null,y=[],x=[],w=new Ve,L=null,C=new At;C.layers.enable(1),C.viewport=new rt;let R=new At;R.layers.enable(2),R.viewport=new rt;let j=[C,R],S=new so;S.layers.enable(1),S.layers.enable(2);let b=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let D=y[z];return D===void 0&&(D=new On,y[z]=D),D.getTargetRaySpace()},this.getControllerGrip=function(z){let D=y[z];return D===void 0&&(D=new On,y[z]=D),D.getGripSpace()},this.getHand=function(z){let D=y[z];return D===void 0&&(D=new On,y[z]=D),D.getHandSpace()};function Z(z){let D=x.indexOf(z.inputSource);if(D===-1)return;let X=y[D];X!==void 0&&(X.update(z.inputSource,z.frame,c||s),X.dispatchEvent({type:z.type,data:z.inputSource}))}function $(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",T);for(let z=0;z<y.length;z++){let D=x[z];D!==null&&(x[z]=null,y[z].disconnect(D))}b=null,U=null,e.setRenderTarget(h),g=null,m=null,p=null,r=null,f=null,te.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){o=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return p},this.getFrame=function(){return u},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",$),r.addEventListener("inputsourceschange",T),_.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(w),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let D={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:o};g=new XRWebGLLayer(r,t,D),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),f=new Tt(g.framebufferWidth,g.framebufferHeight,{format:St,type:Gt,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let D=null,X=null,re=null;_.depth&&(re=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,D=_.stencil?ci:ti,X=_.stencil?Zt:zt);let fe={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:o};p=new XRWebGLBinding(r,t),m=p.createProjectionLayer(fe),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),f=new Tt(m.textureWidth,m.textureHeight,{format:St,type:Gt,depthTexture:new In(m.textureWidth,m.textureHeight,X,void 0,void 0,void 0,void 0,void 0,void 0,D),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let he=e.properties.get(f);he.__ignoreDepthValues=m.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),te.setContext(r),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function T(z){for(let D=0;D<z.removed.length;D++){let X=z.removed[D],re=x.indexOf(X);re>=0&&(x[re]=null,y[re].disconnect(X))}for(let D=0;D<z.added.length;D++){let X=z.added[D],re=x.indexOf(X);if(re===-1){for(let he=0;he<y.length;he++)if(he>=x.length){x.push(X),re=he;break}else if(x[he]===null){x[he]=X,re=he;break}if(re===-1)break}let fe=y[re];fe&&fe.connect(X)}}let I=new H,F=new H;function B(z,D,X){I.setFromMatrixPosition(D.matrixWorld),F.setFromMatrixPosition(X.matrixWorld);let re=I.distanceTo(F),fe=D.projectionMatrix.elements,he=X.projectionMatrix.elements,ee=fe[14]/(fe[10]-1),de=fe[14]/(fe[10]+1),Me=(fe[9]+1)/fe[5],O=(fe[9]-1)/fe[5],q=(fe[8]-1)/fe[0],ie=(he[8]+1)/he[0],ne=ee*q,le=ee*ie,Te=re/(-q+ie),_e=Te*-q;D.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(_e),z.translateZ(Te),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();let M=ee+Te,v=de+Te,k=ne-_e,ue=le+(re-_e),ae=Me*de/v*M,ce=O*de/v*M;z.projectionMatrix.makePerspective(k,ue,ae,ce,M,v),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function N(z,D){D===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(D.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;S.near=R.near=C.near=z.near,S.far=R.far=C.far=z.far,(b!==S.near||U!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),b=S.near,U=S.far);let D=z.parent,X=S.cameras;N(S,D);for(let re=0;re<X.length;re++)N(X[re],D);X.length===2?B(S,C,R):S.projectionMatrix.copy(C.projectionMatrix),V(z,S,D)};function V(z,D,X){X===null?z.matrix.copy(D.matrixWorld):(z.matrix.copy(X.matrixWorld),z.matrix.invert(),z.matrix.multiply(D.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(D.projectionMatrix),z.projectionMatrixInverse.copy(D.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Zn*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(m===null&&g===null))return l},this.setFoveation=function(z){l=z,m!==null&&(m.fixedFoveation=z),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=z)};let J=null;function A(z,D){if(d=D.getViewerPose(c||s),u=D,d!==null){let X=d.views;g!==null&&(e.setRenderTargetFramebuffer(f,g.framebuffer),e.setRenderTarget(f));let re=!1;X.length!==S.cameras.length&&(S.cameras.length=0,re=!0);for(let fe=0;fe<X.length;fe++){let he=X[fe],ee=null;if(g!==null)ee=g.getViewport(he);else{let Me=p.getViewSubImage(m,he);ee=Me.viewport,fe===0&&(e.setRenderTargetTextures(f,Me.colorTexture,m.ignoreDepthValues?void 0:Me.depthStencilTexture),e.setRenderTarget(f))}let de=j[fe];de===void 0&&(de=new At,de.layers.enable(fe),de.viewport=new rt,j[fe]=de),de.matrix.fromArray(he.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(he.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(ee.x,ee.y,ee.width,ee.height),fe===0&&(S.matrix.copy(de.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),re===!0&&S.cameras.push(de)}}for(let X=0;X<y.length;X++){let re=x[X],fe=y[X];re!==null&&fe!==void 0&&fe.update(re,D,c||s)}J&&J(z,D),D.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:D}),u=null}let te=new Ir;te.setAnimationLoop(A),this.setAnimationLoop=function(z){J=z},this.dispose=function(){}}};function Wf(i,e){function t(h,f){h.matrixAutoUpdate===!0&&h.updateMatrix(),f.value.copy(h.matrix)}function n(h,f){f.color.getRGB(h.fogColor.value,Gr(i)),f.isFog?(h.fogNear.value=f.near,h.fogFar.value=f.far):f.isFogExp2&&(h.fogDensity.value=f.density)}function r(h,f,y,x,w){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(h,f):f.isMeshToonMaterial?(o(h,f),p(h,f)):f.isMeshPhongMaterial?(o(h,f),d(h,f)):f.isMeshStandardMaterial?(o(h,f),m(h,f),f.isMeshPhysicalMaterial&&g(h,f,w)):f.isMeshMatcapMaterial?(o(h,f),u(h,f)):f.isMeshDepthMaterial?o(h,f):f.isMeshDistanceMaterial?(o(h,f),_(h,f)):f.isMeshNormalMaterial?o(h,f):f.isLineBasicMaterial?(s(h,f),f.isLineDashedMaterial&&a(h,f)):f.isPointsMaterial?l(h,f,y,x):f.isSpriteMaterial?c(h,f):f.isShadowMaterial?(h.color.value.copy(f.color),h.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(h,f){h.opacity.value=f.opacity,f.color&&h.diffuse.value.copy(f.color),f.emissive&&h.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(h.map.value=f.map,t(f.map,h.mapTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,t(f.alphaMap,h.alphaMapTransform)),f.bumpMap&&(h.bumpMap.value=f.bumpMap,t(f.bumpMap,h.bumpMapTransform),h.bumpScale.value=f.bumpScale,f.side===nt&&(h.bumpScale.value*=-1)),f.normalMap&&(h.normalMap.value=f.normalMap,t(f.normalMap,h.normalMapTransform),h.normalScale.value.copy(f.normalScale),f.side===nt&&h.normalScale.value.negate()),f.displacementMap&&(h.displacementMap.value=f.displacementMap,t(f.displacementMap,h.displacementMapTransform),h.displacementScale.value=f.displacementScale,h.displacementBias.value=f.displacementBias),f.emissiveMap&&(h.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,h.emissiveMapTransform)),f.specularMap&&(h.specularMap.value=f.specularMap,t(f.specularMap,h.specularMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest);let y=e.get(f).envMap;if(y&&(h.envMap.value=y,h.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=f.reflectivity,h.ior.value=f.ior,h.refractionRatio.value=f.refractionRatio),f.lightMap){h.lightMap.value=f.lightMap;let x=i._useLegacyLights===!0?Math.PI:1;h.lightMapIntensity.value=f.lightMapIntensity*x,t(f.lightMap,h.lightMapTransform)}f.aoMap&&(h.aoMap.value=f.aoMap,h.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,h.aoMapTransform))}function s(h,f){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,f.map&&(h.map.value=f.map,t(f.map,h.mapTransform))}function a(h,f){h.dashSize.value=f.dashSize,h.totalSize.value=f.dashSize+f.gapSize,h.scale.value=f.scale}function l(h,f,y,x){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,h.size.value=f.size*y,h.scale.value=x*.5,f.map&&(h.map.value=f.map,t(f.map,h.uvTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,t(f.alphaMap,h.alphaMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest)}function c(h,f){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,h.rotation.value=f.rotation,f.map&&(h.map.value=f.map,t(f.map,h.mapTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,t(f.alphaMap,h.alphaMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest)}function d(h,f){h.specular.value.copy(f.specular),h.shininess.value=Math.max(f.shininess,1e-4)}function p(h,f){f.gradientMap&&(h.gradientMap.value=f.gradientMap)}function m(h,f){h.metalness.value=f.metalness,f.metalnessMap&&(h.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,h.metalnessMapTransform)),h.roughness.value=f.roughness,f.roughnessMap&&(h.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,h.roughnessMapTransform)),e.get(f).envMap&&(h.envMapIntensity.value=f.envMapIntensity)}function g(h,f,y){h.ior.value=f.ior,f.sheen>0&&(h.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),h.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(h.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,h.sheenColorMapTransform)),f.sheenRoughnessMap&&(h.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,h.sheenRoughnessMapTransform))),f.clearcoat>0&&(h.clearcoat.value=f.clearcoat,h.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(h.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,h.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(h.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===nt&&h.clearcoatNormalScale.value.negate())),f.iridescence>0&&(h.iridescence.value=f.iridescence,h.iridescenceIOR.value=f.iridescenceIOR,h.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(h.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,h.iridescenceMapTransform)),f.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),f.transmission>0&&(h.transmission.value=f.transmission,h.transmissionSamplerMap.value=y.texture,h.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(h.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,h.transmissionMapTransform)),h.thickness.value=f.thickness,f.thicknessMap&&(h.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=f.attenuationDistance,h.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(h.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(h.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=f.specularIntensity,h.specularColor.value.copy(f.specularColor),f.specularColorMap&&(h.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,h.specularColorMapTransform)),f.specularIntensityMap&&(h.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,h.specularIntensityMapTransform))}function u(h,f){f.matcap&&(h.matcap.value=f.matcap)}function _(h,f){let y=e.get(f).light;h.referencePosition.value.setFromMatrixPosition(y.matrixWorld),h.nearDistance.value=y.shadow.camera.near,h.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Xf(i,e,t,n){let r={},o={},s=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,x){let w=x.program;n.uniformBlockBinding(y,w)}function c(y,x){let w=r[y.id];w===void 0&&(u(y),w=d(y),r[y.id]=w,y.addEventListener("dispose",h));let L=x.program;n.updateUBOMapping(y,L);let C=e.render.frame;o[y.id]!==C&&(m(y),o[y.id]=C)}function d(y){let x=p();y.__bindingPointIndex=x;let w=i.createBuffer(),L=y.__size,C=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,L,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,w),w}function p(){for(let y=0;y<a;y++)if(s.indexOf(y)===-1)return s.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(y){let x=r[y.id],w=y.uniforms,L=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let C=0,R=w.length;C<R;C++){let j=Array.isArray(w[C])?w[C]:[w[C]];for(let S=0,b=j.length;S<b;S++){let U=j[S];if(g(U,C,S,L)===!0){let Z=U.__offset,$=Array.isArray(U.value)?U.value:[U.value],T=0;for(let I=0;I<$.length;I++){let F=$[I],B=_(F);typeof F=="number"||typeof F=="boolean"?(U.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,Z+T,U.__data)):F.isMatrix3?(U.__data[0]=F.elements[0],U.__data[1]=F.elements[1],U.__data[2]=F.elements[2],U.__data[3]=0,U.__data[4]=F.elements[3],U.__data[5]=F.elements[4],U.__data[6]=F.elements[5],U.__data[7]=0,U.__data[8]=F.elements[6],U.__data[9]=F.elements[7],U.__data[10]=F.elements[8],U.__data[11]=0):(F.toArray(U.__data,T),T+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Z,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(y,x,w,L){let C=y.value,R=x+"_"+w;if(L[R]===void 0)return typeof C=="number"||typeof C=="boolean"?L[R]=C:L[R]=C.clone(),!0;{let j=L[R];if(typeof C=="number"||typeof C=="boolean"){if(j!==C)return L[R]=C,!0}else if(j.equals(C)===!1)return j.copy(C),!0}return!1}function u(y){let x=y.uniforms,w=0,L=16;for(let R=0,j=x.length;R<j;R++){let S=Array.isArray(x[R])?x[R]:[x[R]];for(let b=0,U=S.length;b<U;b++){let Z=S[b],$=Array.isArray(Z.value)?Z.value:[Z.value];for(let T=0,I=$.length;T<I;T++){let F=$[T],B=_(F),N=w%L;N!==0&&L-N<B.boundary&&(w+=L-N),Z.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=w,w+=B.storage}}}let C=w%L;return C>0&&(w+=L-C),y.__size=w,y.__cache={},this}function _(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function h(y){let x=y.target;x.removeEventListener("dispose",h);let w=s.indexOf(x.__bindingPointIndex);s.splice(w,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete o[x.id]}function f(){for(let y in r)i.deleteBuffer(r[y]);s=[],r={},o={}}return{bind:l,update:c,dispose:f}}var co=class{constructor(e={}){let{canvas:t=nl(),context:n=null,depth:r=!0,stencil:o=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let m;n!==null?m=n.getContextAttributes().alpha:m=s;let g=new Uint32Array(4),u=new Int32Array(4),_=null,h=null,f=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tt,this._useLegacyLights=!1,this.toneMapping=Yt,this.toneMappingExposure=1;let x=this,w=!1,L=0,C=0,R=null,j=-1,S=null,b=new rt,U=new rt,Z=null,$=new Ge(0),T=0,I=t.width,F=t.height,B=1,N=null,V=null,J=new rt(0,0,I,F),A=new rt(0,0,I,F),te=!1,z=new cn,D=!1,X=!1,re=null,fe=new et,he=new Ve,ee=new H,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Me(){return R===null?B:1}let O=n;function q(E,G){for(let Y=0;Y<E.length;Y++){let K=E[Y],W=t.getContext(K,G);if(W!==null)return W}return null}try{let E={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ka}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",xe,!1),O===null){let G=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&G.shift(),O=q(G,E),O===null)throw q(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ie,ne,le,Te,_e,M,v,k,ue,ae,ce,Q,se,pe,Ee,be,oe,Ye,Ce,Ue,we,ye,Fe,qe;function je(){ie=new sf(O),ne=new ju(O,ie,e),ie.init(ne),ye=new kf(O,ie,ne),le=new Hf(O,ie,ne),Te=new uf(O),_e=new Pf,M=new Vf(O,ie,le,_e,ne,ye,Te),v=new Qu(x),k=new af(x),ue=new Ks(O,ne),Fe=new Zu(O,ie,ue,ne),ae=new lf(O,ue,Te,Fe),ce=new hf(O,ae,ue,Te),Ce=new ff(O,ne,M),be=new Ju(_e),Q=new Lf(x,v,k,ie,ne,Fe,be),se=new Wf(x,_e),pe=new If,Ee=new Of(ie,ne),Ye=new Yu(x,v,k,le,ce,m,l),oe=new zf(x,ce,ne),qe=new Xf(O,Te,ne,le),Ue=new Ku(O,ie,Te,ne),we=new cf(O,ie,Te,ne),Te.programs=Q.programs,x.capabilities=ne,x.extensions=ie,x.properties=_e,x.renderLists=pe,x.shadowMap=oe,x.state=le,x.info=Te}je();let ke=new lo(x,O);this.xr=ke,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let E=ie.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ie.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(E){E!==void 0&&(B=E,this.setSize(I,F,!1))},this.getSize=function(E){return E.set(I,F)},this.setSize=function(E,G,Y=!0){if(ke.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=E,F=G,t.width=Math.floor(E*B),t.height=Math.floor(G*B),Y===!0&&(t.style.width=E+"px",t.style.height=G+"px"),this.setViewport(0,0,E,G)},this.getDrawingBufferSize=function(E){return E.set(I*B,F*B).floor()},this.setDrawingBufferSize=function(E,G,Y){I=E,F=G,B=Y,t.width=Math.floor(E*Y),t.height=Math.floor(G*Y),this.setViewport(0,0,E,G)},this.getCurrentViewport=function(E){return E.copy(b)},this.getViewport=function(E){return E.copy(J)},this.setViewport=function(E,G,Y,K){E.isVector4?J.set(E.x,E.y,E.z,E.w):J.set(E,G,Y,K),le.viewport(b.copy(J).multiplyScalar(B).floor())},this.getScissor=function(E){return E.copy(A)},this.setScissor=function(E,G,Y,K){E.isVector4?A.set(E.x,E.y,E.z,E.w):A.set(E,G,Y,K),le.scissor(U.copy(A).multiplyScalar(B).floor())},this.getScissorTest=function(){return te},this.setScissorTest=function(E){le.setScissorTest(te=E)},this.setOpaqueSort=function(E){N=E},this.setTransparentSort=function(E){V=E},this.getClearColor=function(E){return E.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor.apply(Ye,arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha.apply(Ye,arguments)},this.clear=function(E=!0,G=!0,Y=!0){let K=0;if(E){let W=!1;if(R!==null){let Se=R.texture.format;W=Se===mr||Se===pr||Se===dr}if(W){let Se=R.texture.type,Ae=Se===Gt||Se===zt||Se===$i||Se===Zt||Se===fr||Se===hr,Le=Ye.getClearColor(),Ie=Ye.getClearAlpha(),He=Le.r,Ne=Le.g,Be=Le.b;Ae?(g[0]=He,g[1]=Ne,g[2]=Be,g[3]=Ie,O.clearBufferuiv(O.COLOR,0,g)):(u[0]=He,u[1]=Ne,u[2]=Be,u[3]=Ie,O.clearBufferiv(O.COLOR,0,u))}else K|=O.COLOR_BUFFER_BIT}G&&(K|=O.DEPTH_BUFFER_BIT),Y&&(K|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),pe.dispose(),Ee.dispose(),_e.dispose(),v.dispose(),k.dispose(),ce.dispose(),Fe.dispose(),qe.dispose(),Q.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",Pt),ke.removeEventListener("sessionend",$e),re&&(re.dispose(),re=null),Dt.stop()};function ge(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let E=Te.autoReset,G=oe.enabled,Y=oe.autoUpdate,K=oe.needsUpdate,W=oe.type;je(),Te.autoReset=E,oe.enabled=G,oe.autoUpdate=Y,oe.needsUpdate=K,oe.type=W}function xe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ve(E){let G=E.target;G.removeEventListener("dispose",ve),Pe(G)}function Pe(E){Re(E),_e.remove(E)}function Re(E){let G=_e.get(E).programs;G!==void 0&&(G.forEach(function(Y){Q.releaseProgram(Y)}),E.isShaderMaterial&&Q.releaseShaderCache(E))}this.renderBufferDirect=function(E,G,Y,K,W,Se){G===null&&(G=de);let Ae=W.isMesh&&W.matrixWorld.determinant()<0,Le=nh(E,G,Y,K,W);le.setMaterial(K,Ae);let Ie=Y.index,He=1;if(K.wireframe===!0){if(Ie=ae.getWireframeAttribute(Y),Ie===void 0)return;He=2}let Ne=Y.drawRange,Be=Y.attributes.position,at=Ne.start*He,Ot=(Ne.start+Ne.count)*He;Se!==null&&(at=Math.max(at,Se.start*He),Ot=Math.min(Ot,(Se.start+Se.count)*He)),Ie!==null?(at=Math.max(at,0),Ot=Math.min(Ot,Ie.count)):Be!=null&&(at=Math.max(at,0),Ot=Math.min(Ot,Be.count));let gt=Ot-at;if(gt<0||gt===1/0)return;Fe.setup(W,K,Le,Y,Ie);let mi,it=Ue;if(Ie!==null&&(mi=ue.get(Ie),it=we,it.setIndex(mi)),W.isMesh)K.wireframe===!0?(le.setLineWidth(K.wireframeLinewidth*Me()),it.setMode(O.LINES)):it.setMode(O.TRIANGLES);else if(W.isLine){let We=K.linewidth;We===void 0&&(We=1),le.setLineWidth(We*Me()),W.isLineSegments?it.setMode(O.LINES):W.isLineLoop?it.setMode(O.LINE_LOOP):it.setMode(O.LINE_STRIP)}else W.isPoints?it.setMode(O.POINTS):W.isSprite&&it.setMode(O.TRIANGLES);if(W.isBatchedMesh)it.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)it.renderInstances(at,gt,W.count);else if(Y.isInstancedBufferGeometry){let We=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Mo=Math.min(Y.instanceCount,We);it.renderInstances(at,gt,Mo)}else it.render(at,gt)};function Je(E,G,Y){E.transparent===!0&&E.side===vt&&E.forceSinglePass===!1?(E.side=nt,E.needsUpdate=!0,ar(E,G,Y),E.side=Bt,E.needsUpdate=!0,ar(E,G,Y),E.side=vt):ar(E,G,Y)}this.compile=function(E,G,Y=null){Y===null&&(Y=E),h=Ee.get(Y),h.init(),y.push(h),Y.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(h.pushLight(W),W.castShadow&&h.pushShadow(W))}),E!==Y&&E.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(h.pushLight(W),W.castShadow&&h.pushShadow(W))}),h.setupLights(x._useLegacyLights);let K=new Set;return E.traverse(function(W){let Se=W.material;if(Se)if(Array.isArray(Se))for(let Ae=0;Ae<Se.length;Ae++){let Le=Se[Ae];Je(Le,Y,W),K.add(Le)}else Je(Se,Y,W),K.add(Se)}),y.pop(),h=null,K},this.compileAsync=function(E,G,Y=null){let K=this.compile(E,G,Y);return new Promise(W=>{function Se(){if(K.forEach(function(Ae){_e.get(Ae).currentProgram.isReady()&&K.delete(Ae)}),K.size===0){W(E);return}setTimeout(Se,10)}ie.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Qe=null;function mt(E){Qe&&Qe(E)}function Pt(){Dt.stop()}function $e(){Dt.start()}let Dt=new Ir;Dt.setAnimationLoop(mt),typeof self<"u"&&Dt.setContext(self),this.setAnimationLoop=function(E){Qe=E,ke.setAnimationLoop(E),E===null?Dt.stop():Dt.start()},ke.addEventListener("sessionstart",Pt),ke.addEventListener("sessionend",$e),this.render=function(E,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(G),G=ke.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,G,R),h=Ee.get(E,y.length),h.init(),y.push(h),fe.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),z.setFromProjectionMatrix(fe),X=this.localClippingEnabled,D=be.init(this.clippingPlanes,X),_=pe.get(E,f.length),_.init(),f.push(_),si(E,G,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(N,V),this.info.render.frame++,D===!0&&be.beginShadows();let Y=h.state.shadowsArray;if(oe.render(Y,E,G),D===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ye.render(_,E),h.setupLights(x._useLegacyLights),G.isArrayCamera){let K=G.cameras;for(let W=0,Se=K.length;W<Se;W++){let Ae=K[W];Oa(_,E,Ae,Ae.viewport)}}else Oa(_,E,G);R!==null&&(M.updateMultisampleRenderTarget(R),M.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(x,E,G),Fe.resetDefaultState(),j=-1,S=null,y.pop(),y.length>0?h=y[y.length-1]:h=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function si(E,G,Y,K){if(E.visible===!1)return;if(E.layers.test(G.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(G);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||z.intersectsSprite(E)){K&&ee.setFromMatrixPosition(E.matrixWorld).applyMatrix4(fe);let Ae=ce.update(E),Le=E.material;Le.visible&&_.push(E,Ae,Le,Y,ee.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||z.intersectsObject(E))){let Ae=ce.update(E),Le=E.material;if(K&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ee.copy(E.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),ee.copy(Ae.boundingSphere.center)),ee.applyMatrix4(E.matrixWorld).applyMatrix4(fe)),Array.isArray(Le)){let Ie=Ae.groups;for(let He=0,Ne=Ie.length;He<Ne;He++){let Be=Ie[He],at=Le[Be.materialIndex];at&&at.visible&&_.push(E,Ae,at,Y,ee.z,Be)}}else Le.visible&&_.push(E,Ae,Le,Y,ee.z,null)}}let Se=E.children;for(let Ae=0,Le=Se.length;Ae<Le;Ae++)si(Se[Ae],G,Y,K)}function Oa(E,G,Y,K){let W=E.opaque,Se=E.transmissive,Ae=E.transparent;h.setupLightsView(Y),D===!0&&be.setGlobalState(x.clippingPlanes,Y),Se.length>0&&ih(W,Se,G,Y),K&&le.viewport(b.copy(K)),W.length>0&&or(W,G,Y),Se.length>0&&or(Se,G,Y),Ae.length>0&&or(Ae,G,Y),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function ih(E,G,Y,K){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;let Se=ne.isWebGL2;re===null&&(re=new Tt(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")?vi:Gt,minFilter:xi,samples:Se?4:0})),x.getDrawingBufferSize(he),Se?re.setSize(he.x,he.y):re.setSize(Kn(he.x),Kn(he.y));let Ae=x.getRenderTarget();x.setRenderTarget(re),x.getClearColor($),T=x.getClearAlpha(),T<1&&x.setClearColor(16777215,.5),x.clear();let Le=x.toneMapping;x.toneMapping=Yt,or(E,Y,K),M.updateMultisampleRenderTarget(re),M.updateRenderTargetMipmap(re);let Ie=!1;for(let He=0,Ne=G.length;He<Ne;He++){let Be=G[He],at=Be.object,Ot=Be.geometry,gt=Be.material,mi=Be.group;if(gt.side===vt&&at.layers.test(K.layers)){let it=gt.side;gt.side=nt,gt.needsUpdate=!0,Ba(at,Y,K,Ot,gt,mi),gt.side=it,gt.needsUpdate=!0,Ie=!0}}Ie===!0&&(M.updateMultisampleRenderTarget(re),M.updateRenderTargetMipmap(re)),x.setRenderTarget(Ae),x.setClearColor($,T),x.toneMapping=Le}function or(E,G,Y){let K=G.isScene===!0?G.overrideMaterial:null;for(let W=0,Se=E.length;W<Se;W++){let Ae=E[W],Le=Ae.object,Ie=Ae.geometry,He=K===null?Ae.material:K,Ne=Ae.group;Le.layers.test(Y.layers)&&Ba(Le,G,Y,Ie,He,Ne)}}function Ba(E,G,Y,K,W,Se){E.onBeforeRender(x,G,Y,K,W,Se),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(x,G,Y,K,E,Se),W.transparent===!0&&W.side===vt&&W.forceSinglePass===!1?(W.side=nt,W.needsUpdate=!0,x.renderBufferDirect(Y,G,K,W,E,Se),W.side=Bt,W.needsUpdate=!0,x.renderBufferDirect(Y,G,K,W,E,Se),W.side=vt):x.renderBufferDirect(Y,G,K,W,E,Se),E.onAfterRender(x,G,Y,K,W,Se)}function ar(E,G,Y){G.isScene!==!0&&(G=de);let K=_e.get(E),W=h.state.lights,Se=h.state.shadowsArray,Ae=W.state.version,Le=Q.getParameters(E,W.state,Se,G,Y),Ie=Q.getProgramCacheKey(Le),He=K.programs;K.environment=E.isMeshStandardMaterial?G.environment:null,K.fog=G.fog,K.envMap=(E.isMeshStandardMaterial?k:v).get(E.envMap||K.environment),He===void 0&&(E.addEventListener("dispose",ve),He=new Map,K.programs=He);let Ne=He.get(Ie);if(Ne!==void 0){if(K.currentProgram===Ne&&K.lightsStateVersion===Ae)return za(E,Le),Ne}else Le.uniforms=Q.getUniforms(E),E.onBuild(Y,Le,x),E.onBeforeCompile(Le,x),Ne=Q.acquireProgram(Le,Ie),He.set(Ie,Ne),K.uniforms=Le.uniforms;let Be=K.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Be.clippingPlanes=be.uniform),za(E,Le),K.needsLights=oh(E),K.lightsStateVersion=Ae,K.needsLights&&(Be.ambientLightColor.value=W.state.ambient,Be.lightProbe.value=W.state.probe,Be.directionalLights.value=W.state.directional,Be.directionalLightShadows.value=W.state.directionalShadow,Be.spotLights.value=W.state.spot,Be.spotLightShadows.value=W.state.spotShadow,Be.rectAreaLights.value=W.state.rectArea,Be.ltc_1.value=W.state.rectAreaLTC1,Be.ltc_2.value=W.state.rectAreaLTC2,Be.pointLights.value=W.state.point,Be.pointLightShadows.value=W.state.pointShadow,Be.hemisphereLights.value=W.state.hemi,Be.directionalShadowMap.value=W.state.directionalShadowMap,Be.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Be.spotShadowMap.value=W.state.spotShadowMap,Be.spotLightMatrix.value=W.state.spotLightMatrix,Be.spotLightMap.value=W.state.spotLightMap,Be.pointShadowMap.value=W.state.pointShadowMap,Be.pointShadowMatrix.value=W.state.pointShadowMatrix),K.currentProgram=Ne,K.uniformsList=null,Ne}function Ga(E){if(E.uniformsList===null){let G=E.currentProgram.getUniforms();E.uniformsList=Ni.seqWithValue(G.seq,E.uniforms)}return E.uniformsList}function za(E,G){let Y=_e.get(E);Y.outputColorSpace=G.outputColorSpace,Y.batching=G.batching,Y.instancing=G.instancing,Y.instancingColor=G.instancingColor,Y.skinning=G.skinning,Y.morphTargets=G.morphTargets,Y.morphNormals=G.morphNormals,Y.morphColors=G.morphColors,Y.morphTargetsCount=G.morphTargetsCount,Y.numClippingPlanes=G.numClippingPlanes,Y.numIntersection=G.numClipIntersection,Y.vertexAlphas=G.vertexAlphas,Y.vertexTangents=G.vertexTangents,Y.toneMapping=G.toneMapping}function nh(E,G,Y,K,W){G.isScene!==!0&&(G=de),M.resetTextureUnits();let Se=G.fog,Ae=K.isMeshStandardMaterial?G.environment:null,Le=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:yt,Ie=(K.isMeshStandardMaterial?k:v).get(K.envMap||Ae),He=K.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ne=!!Y.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Be=!!Y.morphAttributes.position,at=!!Y.morphAttributes.normal,Ot=!!Y.morphAttributes.color,gt=Yt;K.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(gt=x.toneMapping);let mi=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,it=mi!==void 0?mi.length:0,We=_e.get(K),Mo=h.state.lights;if(D===!0&&(X===!0||E!==S)){let Xt=E===S&&K.id===j;be.setState(K,E,Xt)}let ot=!1;K.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Mo.state.version||We.outputColorSpace!==Le||W.isBatchedMesh&&We.batching===!1||!W.isBatchedMesh&&We.batching===!0||W.isInstancedMesh&&We.instancing===!1||!W.isInstancedMesh&&We.instancing===!0||W.isSkinnedMesh&&We.skinning===!1||!W.isSkinnedMesh&&We.skinning===!0||W.isInstancedMesh&&We.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&We.instancingColor===!1&&W.instanceColor!==null||We.envMap!==Ie||K.fog===!0&&We.fog!==Se||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==be.numPlanes||We.numIntersection!==be.numIntersection)||We.vertexAlphas!==He||We.vertexTangents!==Ne||We.morphTargets!==Be||We.morphNormals!==at||We.morphColors!==Ot||We.toneMapping!==gt||ne.isWebGL2===!0&&We.morphTargetsCount!==it)&&(ot=!0):(ot=!0,We.__version=K.version);let Oi=We.currentProgram;ot===!0&&(Oi=ar(K,G,W));let Ha=!1,zn=!1,So=!1,wt=Oi.getUniforms(),Bi=We.uniforms;if(le.useProgram(Oi.program)&&(Ha=!0,zn=!0,So=!0),K.id!==j&&(j=K.id,zn=!0),Ha||S!==E){wt.setValue(O,"projectionMatrix",E.projectionMatrix),wt.setValue(O,"viewMatrix",E.matrixWorldInverse);let Xt=wt.map.cameraPosition;Xt!==void 0&&Xt.setValue(O,ee.setFromMatrixPosition(E.matrixWorld)),ne.logarithmicDepthBuffer&&wt.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&wt.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,zn=!0,So=!0)}if(W.isSkinnedMesh){wt.setOptional(O,W,"bindMatrix"),wt.setOptional(O,W,"bindMatrixInverse");let Xt=W.skeleton;Xt&&(ne.floatVertexTextures?(Xt.boneTexture===null&&Xt.computeBoneTexture(),wt.setValue(O,"boneTexture",Xt.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(wt.setOptional(O,W,"batchingTexture"),wt.setValue(O,"batchingTexture",W._matricesTexture,M));let yo=Y.morphAttributes;if((yo.position!==void 0||yo.normal!==void 0||yo.color!==void 0&&ne.isWebGL2===!0)&&Ce.update(W,Y,Oi),(zn||We.receiveShadow!==W.receiveShadow)&&(We.receiveShadow=W.receiveShadow,wt.setValue(O,"receiveShadow",W.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Bi.envMap.value=Ie,Bi.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),zn&&(wt.setValue(O,"toneMappingExposure",x.toneMappingExposure),We.needsLights&&rh(Bi,So),Se&&K.fog===!0&&se.refreshFogUniforms(Bi,Se),se.refreshMaterialUniforms(Bi,K,B,F,re),Ni.upload(O,Ga(We),Bi,M)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ni.upload(O,Ga(We),Bi,M),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&wt.setValue(O,"center",W.center),wt.setValue(O,"modelViewMatrix",W.modelViewMatrix),wt.setValue(O,"normalMatrix",W.normalMatrix),wt.setValue(O,"modelMatrix",W.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let Xt=K.uniformsGroups;for(let Eo=0,ah=Xt.length;Eo<ah;Eo++)if(ne.isWebGL2){let Va=Xt[Eo];qe.update(Va,Oi),qe.bind(Va,Oi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Oi}function rh(E,G){E.ambientLightColor.needsUpdate=G,E.lightProbe.needsUpdate=G,E.directionalLights.needsUpdate=G,E.directionalLightShadows.needsUpdate=G,E.pointLights.needsUpdate=G,E.pointLightShadows.needsUpdate=G,E.spotLights.needsUpdate=G,E.spotLightShadows.needsUpdate=G,E.rectAreaLights.needsUpdate=G,E.hemisphereLights.needsUpdate=G}function oh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,G,Y){_e.get(E.texture).__webglTexture=G,_e.get(E.depthTexture).__webglTexture=Y;let K=_e.get(E);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=Y===void 0,K.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,G){let Y=_e.get(E);Y.__webglFramebuffer=G,Y.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(E,G=0,Y=0){R=E,L=G,C=Y;let K=!0,W=null,Se=!1,Ae=!1;if(E){let Ie=_e.get(E);Ie.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(O.FRAMEBUFFER,null),K=!1):Ie.__webglFramebuffer===void 0?M.setupRenderTarget(E):Ie.__hasExternalTextures&&M.rebindTextures(E,_e.get(E.texture).__webglTexture,_e.get(E.depthTexture).__webglTexture);let He=E.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Ae=!0);let Ne=_e.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ne[G])?W=Ne[G][Y]:W=Ne[G],Se=!0):ne.isWebGL2&&E.samples>0&&M.useMultisampledRTT(E)===!1?W=_e.get(E).__webglMultisampledFramebuffer:Array.isArray(Ne)?W=Ne[Y]:W=Ne,b.copy(E.viewport),U.copy(E.scissor),Z=E.scissorTest}else b.copy(J).multiplyScalar(B).floor(),U.copy(A).multiplyScalar(B).floor(),Z=te;if(le.bindFramebuffer(O.FRAMEBUFFER,W)&&ne.drawBuffers&&K&&le.drawBuffers(E,W),le.viewport(b),le.scissor(U),le.setScissorTest(Z),Se){let Ie=_e.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ie.__webglTexture,Y)}else if(Ae){let Ie=_e.get(E.texture),He=G||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ie.__webglTexture,Y||0,He)}j=-1},this.readRenderTargetPixels=function(E,G,Y,K,W,Se,Ae){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=_e.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le){le.bindFramebuffer(O.FRAMEBUFFER,Le);try{let Ie=E.texture,He=Ie.format,Ne=Ie.type;if(He!==St&&ye.convert(He)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Be=Ne===vi&&(ie.has("EXT_color_buffer_half_float")||ne.isWebGL2&&ie.has("EXT_color_buffer_float"));if(Ne!==Gt&&ye.convert(Ne)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===Ht&&(ne.isWebGL2||ie.has("OES_texture_float")||ie.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=E.width-K&&Y>=0&&Y<=E.height-W&&O.readPixels(G,Y,K,W,ye.convert(He),ye.convert(Ne),Se)}finally{let Ie=R!==null?_e.get(R).__webglFramebuffer:null;le.bindFramebuffer(O.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(E,G,Y=0){let K=Math.pow(2,-Y),W=Math.floor(G.image.width*K),Se=Math.floor(G.image.height*K);M.setTexture2D(G,0),O.copyTexSubImage2D(O.TEXTURE_2D,Y,0,0,E.x,E.y,W,Se),le.unbindTexture()},this.copyTextureToTexture=function(E,G,Y,K=0){let W=G.image.width,Se=G.image.height,Ae=ye.convert(Y.format),Le=ye.convert(Y.type);M.setTexture2D(Y,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Y.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Y.unpackAlignment),G.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,K,E.x,E.y,W,Se,Ae,Le,G.image.data):G.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,K,E.x,E.y,G.mipmaps[0].width,G.mipmaps[0].height,Ae,G.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,K,E.x,E.y,Ae,Le,G.image),K===0&&Y.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),le.unbindTexture()},this.copyTextureToTexture3D=function(E,G,Y,K,W=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Se=E.max.x-E.min.x+1,Ae=E.max.y-E.min.y+1,Le=E.max.z-E.min.z+1,Ie=ye.convert(K.format),He=ye.convert(K.type),Ne;if(K.isData3DTexture)M.setTexture3D(K,0),Ne=O.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)M.setTexture2DArray(K,0),Ne=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,K.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,K.unpackAlignment);let Be=O.getParameter(O.UNPACK_ROW_LENGTH),at=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ot=O.getParameter(O.UNPACK_SKIP_PIXELS),gt=O.getParameter(O.UNPACK_SKIP_ROWS),mi=O.getParameter(O.UNPACK_SKIP_IMAGES),it=Y.isCompressedTexture?Y.mipmaps[W]:Y.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,it.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,it.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,E.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,E.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,E.min.z),Y.isDataTexture||Y.isData3DTexture?O.texSubImage3D(Ne,W,G.x,G.y,G.z,Se,Ae,Le,Ie,He,it.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Ne,W,G.x,G.y,G.z,Se,Ae,Le,Ie,it.data)):O.texSubImage3D(Ne,W,G.x,G.y,G.z,Se,Ae,Le,Ie,He,it),O.pixelStorei(O.UNPACK_ROW_LENGTH,Be),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,at),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ot),O.pixelStorei(O.UNPACK_SKIP_ROWS,gt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,mi),W===0&&K.generateMipmaps&&O.generateMipmap(Ne),le.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?M.setTextureCube(E,0):E.isData3DTexture?M.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?M.setTexture2DArray(E,0):M.setTexture2D(E,0),le.unbindTexture()},this.resetState=function(){L=0,C=0,R=null,le.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ft}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===en?"display-p3":"srgb",t.unpackColorSpace=Xe.workingColorSpace===Gi?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===tt?ii:yr}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ii?tt:yt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}};var ir=class extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Ji=class extends ct{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var uo=class extends ze{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};var fo=class extends Jt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};var qf=new et,Fa=new _n,ho=new di,po=new H,mo=class extends ht{constructor(e=new ct,t=new fo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere),ho.applyMatrix4(r),ho.radius+=o,e.ray.intersectsSphere(ho)===!1)return;qf.copy(r).invert(),Fa.copy(e.ray).applyMatrix4(qf);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,p=n.attributes.position;if(c!==null){let m=Math.max(0,s.start),g=Math.min(c.count,s.start+s.count);for(let u=m,_=g;u<_;u++){let h=c.getX(u);po.fromBufferAttribute(p,h),Yf(po,h,l,r,e,t,this)}}else{let m=Math.max(0,s.start),g=Math.min(p.count,s.start+s.count);for(let u=m,_=g;u<_;u++)po.fromBufferAttribute(p,u),Yf(po,u,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function Yf(i,e,t,n,r,o,s){let a=Fa.distanceSqToPoint(i);if(a<t){let l=new H;Fa.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:s})}}Xe.enabled=!1;var Na="#f4fbfa",op=["#0b6577","#135b78","#145a5a"],ap=["#0b8a98","#0b7287","#2a8a7c"],sp=["#1fb5b2","#48c5ad","#69bfa3","#7cc49a"],lp=[["#0b6f80","#1fb0aa"],["#0b8f9b","#48c5ad"],["#125a73","#0b98a5"],["#1a9f9a","#69bfa3"],["#2f7d6d","#6fb58f"],["#167a72","#58b79a"]],cp={deep:["#0e4a63","#123f5c","#0f4a5e"],mid:["#1b6e8a","#22607e","#1d6a82"],tip:["#4d9fb8","#5fb0bf","#6ab7c4","#58a8b8"]},up=[["#0f4f69","#2d8ba6"],["#155a75","#3f9db3"],["#0d4660","#2a7f99"],["#1b6680","#5aaebd"]],fp=[["#3fae96","#9fd8b0"],["#48c5ad","#b3e3c3"]],hp=["ovate","cordate","lance","drip"],dp={ovate:0,cordate:1,lance:2,drip:3},pp={ovate:[.42,.52],cordate:[.62,.78],lance:[.17,.24],drip:[.4,.5]},nr={coral:{main:"#ff748a",light:"#ffd3cf",alt:"#f5aa4b",inner:"#ffe2de",eye:"#c2365a"},pink:{main:"#e982bb",light:"#fbd9ec",alt:"#ba8ee8",inner:"#f7dff4",eye:"#a8407e"},gold:{main:"#f5aa4b",light:"#fde6ae",alt:"#ff748a",inner:"#fff2c9",eye:"#c46a1c"},lav:{main:"#ba8ee8",light:"#e8ddfb",alt:"#80a9f4",inner:"#f1e9fd",eye:"#6b48a8"},peri:{main:"#80a9f4",light:"#d8e5fd",alt:"#ba8ee8",inner:"#e9f0fe",eye:"#3d5fae"}},Ke=i=>[parseInt(i.slice(1,3),16)/255,parseInt(i.slice(3,5),16)/255,parseInt(i.slice(5,7),16)/255],Bn=(i,e,t)=>[i[0]+(e[0]-i[0])*t,i[1]+(e[1]-i[1])*t,i[2]+(e[2]-i[2])*t],Wt=(i,e,t)=>i<e?e:i>t?t:i,mp=(i,e,t)=>{let n=Wt((t-i)/(e-i),0,1);return n*n*(3-2*n)},rr=(i,e)=>{let t=i-e;for(;t>Math.PI;)t-=2*Math.PI;for(;t<-Math.PI;)t+=2*Math.PI;return t};function Jf(i){let e=i>>>0,t=()=>{e+=1831565813;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return{next:t,range:(n,r)=>n+t()*(r-n),int:(n,r)=>Math.floor(n+t()*(r-n+1)),chance:n=>t()<n,pick:n=>n[Math.floor(t()*n.length)],sign:()=>t()<.5?-1:1,shuffle:n=>{let r=n.slice();for(let o=r.length-1;o>0;o--){let s=Math.floor(t()*(o+1));[r[o],r[s]]=[r[s],r[o]]}return r}}}var go=(i,e,t)=>{let n=1+i.range(-t,t);return[Wt(e[0]*n,0,1),Wt(e[1]*n,0,1),Wt(e[2]*n,0,1)]},pi=`
uniform float uT; uniform float uTime; uniform float uGlow; uniform vec2 uPar; uniform vec2 uShadowOff;
uniform float uRouteHead; uniform float uRouteMode; uniform float uRouteSpacing; uniform vec3 uFocus; uniform float uFocusR;
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
`,xo=`
#ifdef SHADOW
  gl_FragColor = vec4(0.0, 0.0, 0.0, alpha);
#else
  gl_FragColor = vec4(c, alpha);
#endif
`,vo=`
const vec3 LDIR = normalize(vec3(-0.45, 0.6, 0.75));
const vec3 HDIR = normalize(vec3(-0.45, 0.6, 1.75));
`,gp=pi+`
attribute vec3 aOff; attribute float aW; attribute float aBirth; attribute float aArc; attribute float aPulse; attribute vec3 aCol; attribute float aSide;
attribute float aRoute; attribute float aRouteLen;
varying vec3 vN; varying vec3 vCol; varying float vArc; varying float vSide; varying float vPulse; varying float vRoute; varying float vRouteLen;
void main(){
  vRoute = aRoute; vRouteLen = aRouteLen;
  float g = clamp((uT - aBirth) / 0.24, 0.0, 1.0); g = g*g*(3.0-2.0*g);
  vec3 p = position + aOff * aW * g;
  vN = aOff; vCol = aCol; vArc = aArc; vSide = aSide; vPulse = aPulse;
${Gn}
}`,_p=pi+vo+`
varying vec3 vN; varying vec3 vCol; varying float vArc; varying float vSide; varying float vPulse; varying float vRoute; varying float vRouteLen;
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
  c = mix(c, vec3(0.78, 1.0, 0.97), band * 0.3 * uGlow * (vRoute >= 0.0 ? 0.4 : 1.0));
  // data crossing the integration: a pulse along a route (hero: one head; scroll vine: a repeating train)
  if (vRoute >= 0.0) {
    float rp;
    if (uRouteMode < 0.5) rp = exp(-pow((vRoute - uRouteHead) * vRouteLen * 0.95, 2.0));
    else { float dd = mod(vRoute - uTime * 2.4, uRouteSpacing); rp = 0.75 * exp(-pow((dd - uRouteSpacing * 0.5) * 3.2, 2.0)); }
    c = mix(c, vec3(0.86, 1.0, 0.98), rp * 0.85);
    c += vec3(0.1, 0.35, 0.3) * rp;
  }
  float alpha = 1.0;
${xo}
}`,xp=pi+`
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
}`,vp=pi+vo+`
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
${xo}
}`,Mp=pi+`
attribute vec3 iPos; attribute float iRot; attribute vec3 iSize; attribute float iBirth; attribute float iOpen; attribute float iDur;
attribute float iTilt; attribute vec3 iColA; attribute vec3 iColB; attribute vec3 iColC; attribute float iShape; attribute float iPhase;
attribute vec4 iStyle; // notch, ruffle, pigment veins, eye
varying vec2 vUv; varying vec3 vN; varying vec3 vColA; varying vec3 vColB; varying vec3 vColC; varying vec4 vStyle; varying float vPhase; varying float vFocus;
void main(){
  vFocus = uFocus.z * (1.0 - smoothstep(0.0, uFocusR, distance(iPos.xy, uFocus.xy)));
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
}`,Sp=pi+vo+`
varying vec2 vUv; varying vec3 vN; varying vec3 vColA; varying vec3 vColB; varying vec3 vColC; varying vec4 vStyle; varying float vPhase; varying float vFocus;
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
  c = mix(c, c*1.12 + vec3(0.1, 0.09, 0.07), vFocus * 0.7);                              // brighten near a hovered button
  float alpha = 0.96 - 0.12*smoothstep(0.7, 1.0, au);
${xo}
}`,yp=pi+`
attribute vec3 iPos; attribute float iR; attribute float iBirth; attribute vec3 iColA; attribute vec3 iColB; attribute float iKind;
varying vec3 vN; varying vec2 vUv; varying vec3 vColA; varying vec3 vColB; varying float vKind;
void main(){
  float g = smoothstep(0.0, 1.1, uT - iBirth);
  vec3 p = position * iR * g * vec3(1.0, 1.0, iKind > 1.5 ? 0.8 : 0.5);
  p += iPos;
  vN = normal; vUv = uv; vColA = iColA; vColB = iColB; vKind = iKind;
${Gn}
}`,Ep=pi+vo+`
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
${xo}
}`,bp=pi+`
attribute vec3 iPos; attribute float iR; attribute vec3 iCol; attribute float iMax; attribute float iBirth; attribute float iPhase;
varying vec2 vQ; varying vec3 vCol; varying float vA;
void main(){
  vec3 p = vec3(position.xy * iR, 0.0) + iPos;
  vQ = position.xy; vCol = iCol;
  float fo = uFocus.z * (1.0 - smoothstep(0.0, uFocusR, distance(iPos.xy, uFocus.xy)));
  vA = iMax * smoothstep(0.0, 2.2, uT - iBirth) * uGlow * (0.86 + 0.14*sin(uTime*0.9 + iPhase)) * (1.0 + 1.4*fo);
${Gn}
}`,Tp=`
varying vec2 vQ; varying vec3 vCol; varying float vA;
void main(){
  float r = length(vQ);
  float a = exp(-r*r*3.2) * (1.0 - smoothstep(0.62, 0.8, r));
  vec3 c = mix(vCol, vec3(1.0), exp(-r*r*14.0)*0.55);
  gl_FragColor = vec4(c, a * vA);
}`,Ap=pi+`
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
}`,wp=`
varying vec3 vCol; varying float vA;
void main(){
  float r = length(gl_PointCoord - 0.5) * 2.0;
  float a = 1.0 - smoothstep(0.45, 1.0, r);
  gl_FragColor = vec4(mix(vCol, vec3(1.0), (1.0 - r)*0.45), a * vA * 0.9);
}`,Zf="void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }",Rp=`
uniform sampler2D tex; uniform vec2 dir; uniform vec2 res;
void main(){
  vec2 uv = gl_FragCoord.xy / res;
  float w[5]; w[0]=0.2270270; w[1]=0.1945946; w[2]=0.1216216; w[3]=0.0540541; w[4]=0.0162162;
  float a = texture2D(tex, uv).a * w[0];
  for (int i = 1; i < 5; i++) { vec2 o = dir * float(i) * 1.6 / res; a += (texture2D(tex, uv + o).a + texture2D(tex, uv - o).a) * w[i]; }
  gl_FragColor = vec4(0.0, 0.0, 0.0, a);
}`,Cp=`
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
}`;function Kf(i,e){let t=[],n=[],r=[];for(let s=0;s<=e;s++)for(let a=0;a<=i;a++){let l=a/i*2-1,c=s/e;t.push(0,0,0),n.push(l,c)}for(let s=0;s<e;s++)for(let a=0;a<i;a++){let l=s*(i+1)+a,c=l+i+1;r.push(l,c,l+1,c,c+1,l+1)}let o=new Ji;return o.setAttribute("position",new ze(new Float32Array(t),3)),o.setAttribute("uv",new ze(new Float32Array(n),2)),o.setIndex(r),o}function Lp(i,e){let t=[],n=[],r=[],o=[];for(let a=0;a<=i;a++){let l=a/i*Math.PI/2;for(let c=0;c<=e;c++){let d=c/e*Math.PI*2,p=Math.sin(l)*Math.cos(d),m=Math.sin(l)*Math.sin(d),g=Math.cos(l);t.push(p,m,g),n.push(p,m,g),r.push(c/e,a/i)}}for(let a=0;a<i;a++)for(let l=0;l<e;l++){let c=a*(e+1)+l,d=c+e+1;o.push(c,d,c+1,d,d+1,c+1)}let s=new Ji;return s.setAttribute("position",new ze(new Float32Array(t),3)),s.setAttribute("normal",new ze(new Float32Array(n),3)),s.setAttribute("uv",new ze(new Float32Array(r),2)),s.setIndex(o),s}function Pp(){let i=new Ji;return i.setAttribute("position",new ze(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),i.setIndex([0,1,2,0,2,3]),i}function _o(i,e,t){let n=new Ji;for(let r of Object.keys(i.attributes))n.setAttribute(r,i.attributes[r]);n.setIndex(i.index);for(let[r,[o,s]]of Object.entries(t))n.setAttribute(r,new uo(new Float32Array(o),s));return n.instanceCount=e,n}function Dp(i){let t=0,n=0;for(let x of i)t+=x.pts.length*7,n+=(x.pts.length-1)*6*6;let r=new Float32Array(t*3),o=new Float32Array(t*3),s=new Float32Array(t),a=new Float32Array(t),l=new Float32Array(t),c=new Float32Array(t),d=new Float32Array(t*3),p=new Float32Array(t),m=new Float32Array(t).fill(-1),g=new Float32Array(t).fill(1),u=new Uint32Array(n),_=[],h=0,f=0;for(let x of i){let w=h,L=x.plant==="B"?cp:{deep:op,mid:ap,tip:sp},C=Ke(L.deep[Math.floor(x.tone*3)%3]),R=Ke(L.mid[Math.floor(x.tone*7)%3]),j=Ke(L.tip[Math.floor(x.tone*11)%4]);x.fid!=null&&_.push({fid:x.fid,start:h,count:x.pts.length*7});let S=x.pts.length;for(let b=0;b<S;b++){let U=x.pts[b],Z=b/(S-1),$;if(x.col)$=Bn(x.col[0],x.col[1],Z);else{let B=x.depth===0?Z:x.depth===3?.75+Z*.25:.35+Z*.65;$=B<.6?Bn(C,R,B/.6):Bn(R,j,(B-.6)/.4)}let T=Math.sin(U.a),I=Math.cos(U.a),F=U.z??x.z;for(let B=0;B<7;B++){let N=B/6*Math.PI;r.set([U.x,-U.y,F],h*3),o.set([Math.cos(N)*T,Math.cos(N)*I,Math.sin(N)],h*3),s[h]=U.w,a[h]=U.t,l[h]=U.arc,c[h]=x.tree*.137%1,d.set($,h*3),p[h]=B/6,U.route!=null&&(m[h]=U.route,g[h]=x.routeLen||1),h++}}for(let b=0;b<S-1;b++)for(let U=0;U<6;U++){let Z=w+b*7+U,$=Z+7;u.set([Z,$,Z+1,$,$+1,Z+1],f),f+=6}}let y=new ct;return y.setAttribute("position",new ze(r,3)),y.setAttribute("aOff",new ze(o,3)),y.setAttribute("aW",new ze(s,1)),y.setAttribute("aBirth",new ze(a,1)),y.setAttribute("aArc",new ze(l,1)),y.setAttribute("aPulse",new ze(c,1)),y.setAttribute("aCol",new ze(d,3)),y.setAttribute("aSide",new ze(p,1)),y.setAttribute("aRoute",new ze(m,1)),y.setAttribute("aRouteLen",new ze(g,1)),y.setIndex(new ze(u,1)),y.userData.ranges=_,y}function Qf(i){return(e,t)=>{let n=1e9;for(let r of i){let o=(r.x0+r.x1)/2,s=(r.y0+r.y1)/2,a=Math.abs(e-o)-(r.x1-r.x0)/2,l=Math.abs(t-s)-(r.y1-r.y0)/2,c=Math.hypot(Math.max(a,0),Math.max(l,0))+Math.min(Math.max(a,l),0);c<n&&(n=c)}return n}}function $f(i,e){let t=[],n=new Set,r=s=>{for(let a=s.parentElement;a&&a!==e;a=a.parentElement){if(a===document.body||a===document.documentElement)return null;if(getComputedStyle(a).overflow!=="visible")return a}return null},o=document.createTreeWalker(i,NodeFilter.SHOW_TEXT);for(let s=o.nextNode();s;s=o.nextNode()){if(!s.textContent.trim())continue;let a=s.parentElement;if(!a||a.closest("script,style,noscript,template,.epx-garden,.epx-sidevine"))continue;let l=document.createRange();l.selectNodeContents(s);let c=r(s),d=c&&c.getBoundingClientRect();for(let p of l.getClientRects()){if(p.width<1||p.height<1)continue;if(!d){t.push(p);continue}(p.left<d.left-1||p.right>d.right+1||p.top<d.top-1||p.bottom>d.bottom+1)&&!n.has(c)&&d.width*d.height<4e6&&c!==e&&(n.add(c),t.push(d));let g=Math.max(p.left,d.left),u=Math.min(p.right,d.right),_=Math.max(p.top,d.top),h=Math.min(p.bottom,d.bottom);u-g>1&&h-_>1&&t.push({left:g,right:u,top:_,bottom:h,width:u-g,height:h-_})}}return t}function eh(i,e){let{field:t,pad:n,k:r}=e,o=e.density??1,s=(u,_,h)=>t(u,_)-n-h,a=(u,_)=>{let f=t(u+.02,_)-t(u-.02,_),y=t(u,_+.02)-t(u,_-.02),x=Math.hypot(f,y)||1;return[f/x,y/x]},l={vines:[],leaves:[],flowers:[],petals:[],domes:[],halos:[],dust:[]},c=0;function d(u){let _=[],h=u.x,f=u.y,y=u.a,x=0,w=u.t0,L=.045,C=i.range(.5,1.4),R=i.range(2,4.2),j=i.range(0,6.3),S=i.range(0,6.3),b=i.range(.3,.9)*i.sign()*(u.calm??1),U=i.range(.15,.55)*(u.calm??1),Z=i.range(0,6.3),$=u.len/(u.dur||1),T=u.curl?u.len*i.range(.5,.72):1e9,I=i.sign(),F=.95*r,B=u.tree??c++;for(;x<=u.len;){let te=x/u.len,z=Math.max(u.w0*Math.pow(1-te*(u.taper??.86),.9),.007),D=s(h,f,z+u.reach);if(D<0&&(_.length>1||e.inside(h,f,0))&&!(u.main&&h>e.offX)||(u.clock==="scroll"&&(w=Math.max(w,f+(u.lead??0))),u.stopY!=null&&f>u.stopY))break;if(_.push({x:h,y:f,t:w,w:z,arc:u.arc0+x,a:y,route:u.routeArc?u.arc0+x:void 0}),u.goal){let re=u.goal.x-h,fe=u.goal.y-f,he=Math.hypot(re,fe);if(he<.05){_.push({x:u.goal.x,y:u.goal.y,t:w+.03,w:z,arc:u.arc0+x+he,a:y}),u.reached=!0;break}}let X=(b*Math.sin(C*x+j)+U*Math.sin(R*x+S))*L*1.3;if(x>T&&(X+=I*L*(2.2+(x-T)/(u.len-T)*16)),D<F){let re=a(h,f),fe=-re[1],he=re[0];fe*Math.cos(y)+he*Math.sin(y)<0&&(fe=-fe,he=-he);let ee=1-Math.max(D,0)/F,de=Math.atan2(he+re[1]*ee*.9,fe+re[0]*ee*.9);X+=rr(de,y)*Math.min(1,.06+ee*ee*.8)*.55}if(X+=e.steer(h,f,y,x,u),u.goal){let re=Math.hypot(u.goal.x-h,u.goal.y-f);X=X*Math.min(1,re/1.2)+rr(Math.atan2(u.goal.y-f,u.goal.x-h),y)*Wt(.04+.35/(re+.4),0,.6)}if(y+=X,u.clock!=="scroll"){let re=.42+.58*Math.pow(Math.sin(x*1.25+Z)*.5+.5,.6);w+=L/($*re*1.25)}h+=Math.cos(y)*L,f+=Math.sin(y)*L,x+=L}if(_.length<6)return null;let N={pts:_,depth:u.depth,z:u.z,tree:B,len:x,tone:u.tone,curl:!!u.curl,plant:u.plant,reached:!!u.reached,main:!!u.main};l.vines.push(N);let V=[[.3,.5],[.22,.38],[.14,.24]][Math.min(u.depth,2)],J=i.range(.1,.25)*r,A=i.sign();for(let te=2;te<_.length;te++){let z=_[te],D=z.arc-u.arc0;if(D<J||(J=D+i.range(.2,.38)*r/Math.sqrt(o)*(u.outward?.55:1)*(u.leafGap??1),u.curl&&D>T))continue;let X=D/x>.82;u.outward&&(A=(Math.cos(z.a+.8)*u.outward>0?1:-1)*(i.chance(.15)?-1:1));let re=i.chance(.22),fe=!1;for(let he of re?[A,-A]:[A]){let ee=i.range(V[0],V[1])*r*(X?.62:1)*(u.leafScale||1);p(z,z.a+he*i.range(.55,1.05),ee,z.t+i.range(.15,.6),u,X)&&(fe=!0)}fe&&(z.w*=1.16,_[te-1]&&(_[te-1].w*=1.06),_[te+1]&&(_[te+1].w*=1.06)),A=-A}if(u.depth<2){let te=u.depth===0?u.branchEvery?Math.floor(x/u.branchEvery):i.int(2,4):i.int(1,2);for(let z=0;z<te;z++){let D=u.branchEvery?Math.floor(_.length*((z+i.range(.2,.8))/te)):Math.floor(_.length*i.range(.18,.82)),X=_[D];if(!X)continue;let re=x-(X.arc-u.arc0);d({x:X.x,y:X.y,a:X.a+i.sign()*i.range(.45,1.15),t0:X.t+i.range(.15,.6),clock:u.clock,lead:u.lead,len:Math.min(Math.max(.5,re*i.range(.4,.75))*(u.depth===0?1:.8),u.maxChild??99),dur:i.range(1.4,2.6),w0:X.w*i.range(.55,.72),depth:u.depth+1,arc0:X.arc,z:u.z+i.range(-.06,.08),tree:B,reach:V[1]*r*.55,tone:u.tone,curl:u.depth===1&&i.chance(.45),species:u.species,leafScale:u.leafScale,plant:u.plant,maxChild:u.maxChild})}if(i.chance(u.depth===0?.7:.35)||u.branchEvery&&i.chance(.5)){let z=u.branchEvery?Math.max(1,Math.floor(x/(u.branchEvery*1.7))):1;for(let D=0;D<z;D++){let X=Math.floor(_.length*i.range(.1,.95)),re=_[X];re&&d({x:re.x,y:re.y,a:re.a+i.sign()*i.range(.5,1),t0:re.t+i.range(.4,1),clock:u.clock,lead:u.lead,len:i.range(.35,.7)*r,dur:i.range(1.2,2),w0:re.w*.35,depth:2,arc0:re.arc,z:u.z+.02,tree:B,reach:.02,tone:u.tone,curl:!0,species:u.species,plant:u.plant})}}}return N}function p(u,_,h,f,y,x){let w=y.species||"ovate",L=h*i.range(.12,.22),C=u.x+Math.cos(_)*L,R=u.y+Math.sin(_)*L,j=_+i.range(-.15,.15),S=pp[w],b=h*i.range(S[0],S[1]),U=C+Math.cos(j)*h*.5,Z=R+Math.sin(j)*h*.5;if(s(U,Z,h*.55+b*.25+.02)<0)return!1;let $=y.plant==="B"?i.pick(up):x&&i.chance(.6)?i.pick(fp):i.pick(lp),T=i.range(-.28,.32),I=[];for(let F=0;F<=4;F++){let B=F/4;I.push({x:u.x+(C-u.x)*B,y:u.y+(R-u.y)*B,z:(y.z??0)+(T-(y.z??0))*B-.01,t:f-.12+B*.1,w:Math.max(.006,h*.035*(1-B*.4)),arc:u.arc+B*L,a:_})}return l.vines.push({pts:I,depth:3,z:T,tree:-1,len:L,tone:i.next(),plant:y.plant}),l.leaves.push({x:C,y:R,z:T,ang:j,len:h,wid:b,birth:f,dur:i.range(.9,1.7),colA:go(i,Ke($[0]),.08),colB:go(i,Ke($[1]),.06),phase:i.range(0,6.3),glow:i.chance(.08)?1:0,asym:i.range(.86,1.14),fade:T<-.12?.14:0,type:dp[w],serr:w==="ovate"||w==="cordate"?i.chance(.7)?1:0:w==="lance"?.4:0,twist:i.range(-.45,.45)*(i.chance(.35)?1.6:1),droop:i.range(0,.5)}),!0}function m(u){u.id=l.flowers.length,l.flowers.push(u)}function g(){for(let u of l.flowers){let _=u.hero?["lotus","cosmos","clematis","camellia","daisy","anemone"]:["lotus","cosmos","anemone","daisy","clematis"],h=u.kind||i.pick(_),f=Ke(u.cl.main),y=Ke(u.cl.light),x=Ke(u.cl.alt),w=Ke(u.cl.inner),L=Ke(u.cl.eye),C=i.range(0,6.3),R={lotus:{rings:3,n:i.int(8,11),wid:.36,shape:[.6,.95],tilt:[.16,.42,.78],style:[0,.2,.5,.15]},cosmos:{rings:1,n:8,wid:.62,shape:[0,.12],tilt:[.1],style:[1,.6,.9,.55]},clematis:{rings:1,n:6,wid:.46,shape:[.75,.9],tilt:[.08],style:[0,.35,1,.2]},camellia:{rings:4,n:i.int(6,7),wid:.62,shape:[0,.1],tilt:[.12,.42,.75,1.05],style:[0,.5,.25,.1]},daisy:{rings:2,n:i.int(16,22),wid:.16,shape:[.35,.5],tilt:[.06,.2],style:[.4,.1,.3,0]},anemone:{rings:2,n:i.int(5,6),wid:.6,shape:[0,.2],tilt:[.12,.36],style:[0,.3,.4,.9]}}[h];for(let U=0;U<R.rings;U++){let Z=h==="lotus"&&U===2?R.n-2:R.n,$=u.R*[1,.8,.6,.42][U]*(h==="daisy"&&U===1?1.08:1),T=$*R.wid*Math.sqrt(9/Math.max(R.n,5)),I=R.tilt[U]+(u.bud?.8:0),F=u.cl2&&U>0?Ke(u.cl2.main):U===0?f:U===1?i.chance(.5)?x:f:Bn(f,[1,1,1],.3),B=U>=2?w:Bn(y,U===1?w:y,.3);for(let N=0;N<Z;N++)l.petals.push({x:u.x,y:u.y,z:u.z+U*.014+N*4e-4,rot:C+(N+(U%2?.5:0))*(Math.PI*2/Z)+i.range(-.07,.07),len:$*i.range(.9,1.07),wid:T*i.range(.88,1.1),cup:T*(h==="camellia"?.45:.28),birth:u.birth,open:U*.3+N*(h==="daisy"?.015:.035)+i.range(0,.12),dur:i.range(1.5,2.3),tilt:I,colA:go(i,F,.05),colB:go(i,B,.03),colC:L,shape:i.range(R.shape[0],R.shape[1]),phase:i.range(0,6.3),style:R.style,fid:u.id})}let j=u.R*(h==="daisy"?.27:h==="anemone"?.2:h==="camellia"?.12:.15);if(l.domes.push({fid:u.id,x:u.x,y:u.y,z:u.z+.06,r:j,birth:u.birth+.7,colA:Ke(h==="daisy"?"#e9b13f":h==="anemone"?"#2f3a4a":"#f5d36d"),colB:Ke(h==="daisy"?"#a8662a":h==="anemone"?"#161d27":"#f5aa4b"),kind:h==="daisy"?1:0}),!u.bud&&h!=="daisy"){let U=u.hero?i.int(12,20):i.int(6,9),Z=h==="anemone"?[Ke("#3b4656"),Ke("#1e2633")]:[Ke("#fff4cf"),Ke("#f7e3a1")];for(let $=0;$<U;$++){let T=$/U*Math.PI*2+i.range(-.15,.15),I=j*i.range(1.5,2.3)*(h==="clematis"?1.3:1),F=[];for(let B=0;B<=4;B++){let N=B/4,V=j*.4+(I-j*.4)*N;F.push({x:u.x+Math.cos(T)*V,y:u.y+Math.sin(T)*V,z:u.z+.07+N*.06,t:u.birth+1.2+N*.4,w:u.R*.012*(1-N*.3),arc:N*I,a:T})}l.vines.push({pts:F,depth:4,z:u.z+.07,tree:-1,len:I,tone:0,col:Z,fid:u.id}),l.domes.push({fid:u.id,x:F[4].x,y:F[4].y,z:u.z+.14,r:u.R*i.range(.03,.045),birth:u.birth+1.6+$*.03,colA:Ke(h==="anemone"?"#2a2f3a":"#ffd36a"),colB:Ke(h==="anemone"?"#11151c":"#e7a23a"),kind:2})}}let S=i.int(4,5);for(let U=0;U<S;U++){let Z=C+U/S*Math.PI*2+i.range(-.2,.2),$=u.R*(u.bud?.75:.55)*i.range(.85,1.1);s(u.x+Math.cos(Z)*$*.7,u.y+Math.sin(Z)*$*.7,$*.4)<0||l.leaves.push({x:u.x,y:u.y,z:u.z-.03,ang:Z,len:$,wid:$*.34,birth:u.birth-.5,dur:1,colA:Ke("#1f8a76"),colB:Ke("#5fb894"),phase:i.range(0,6.3),glow:0,asym:1,fade:0,type:2,serr:0,twist:0,droop:.3})}let b=Math.min(u.R*(u.hero?2:1.6),(t(u.x,u.y)-n)/.8);b>u.R*1.05&&(u.hero||i.chance(.25))&&l.halos.push({x:u.x,y:u.y,z:-.6,r:b,col:Bn(f,[1,1,1],.3),max:u.hero?i.range(.18,.26):.13,birth:u.birth+1.2,phase:i.range(0,6.3)})}for(let u of l.leaves)if(u.glow){let _=u.x+Math.cos(u.ang)*u.len*.5,h=u.y+Math.sin(u.ang)*u.len*.5,f=Math.min(u.len*1.3,(t(_,h)-n)/.8);f>u.len*.6&&l.halos.push({x:_,y:h,z:-.62,r:f,col:Ke("#5be8e2"),max:.15,birth:u.birth+1.5,phase:i.range(0,6.3)})}}return{out:l,grow:d,clear:s,dressFlowers:g,addFlower:m,newTree:()=>c++}}function Up(i,e){let t=Jf(i),{W:n,H:r}=e,o=n<7,s=!o&&n<11,a=Wt(Math.min(n,r*1.25)/12.5,.58,1.1),l=o?.55:s?.78:1,c=o?.12:.24+.022*n+.06,d=Qf(e.rects),p=(q,ie,ne)=>q>ne&&q<n-ne&&ie>ne&&ie<r-ne,m=(q,ie,ne)=>q<-.2||q>n+.2||ie<-.2||ie>r+.2?rr(Math.atan2(r/2-ie,n/2-q),ne)*.14:0,g=t.pick(["ovate","ovate","drip","lance"]),u=eh(t,{field:d,pad:c,k:a,density:l,inside:p,steer:m}),{out:_,grow:h,clear:f}=u,y=nr[t.pick(["coral","gold"])],x=nr[t.pick(["lav","peri","pink"])],w=q=>q==="A"?{plant:"A",species:g}:{plant:"B",species:"cordate"},L=[],C=[],R=.45*a*(o?.7:1),j=(q,ie)=>{let ne=null,le=-1e9;for(let Te=q;Te<=ie;Te+=.08)for(let _e=n*.18;_e<=n*.82;_e+=.08){let M=d(_e,Te)-c;if(M<R*1.1||!p(_e,Te,R*.6))continue;let v=-Math.abs(_e-n/2)*1.4+Math.min(M,.8)*.5;v>le&&(le=v,ne={x:_e,y:Te,room:M})}return ne};for(let[q,ie]of[[.25,r*.42],[r*.6,r-.25]]){let ne=j(q,ie);if(!ne)continue;let le=(Q,se)=>{let pe={x:se,y:Wt(ne.y+t.range(-.6,.6),.1,r-.1),a:se<0?t.range(-.3,.3):Math.PI+t.range(-.3,.3),t0:Q==="A"?t.range(.15,.4):t.range(.4,.7),len:Math.hypot(ne.x-se,.8)*1.9+1.2,dur:t.range(3.2,3.8),w0:t.range(.04,.05)*a,depth:0,arc0:0,z:t.range(-.04,.08),reach:.22*a,tone:t.next(),goal:{x:ne.x,y:ne.y},...w(Q)},Ee=h(pe);return Ee&&pe.reached?Ee:null},Te=le("A",-.15),_e=le("B",n+.15);if(!Te||!_e)continue;let M=Te.len,v=_e.len,k=M+v;for(let Q of Te.pts)Q.route=Q.arc/k;for(let Q of _e.pts)Q.route=(M+(v-Q.arc))/k;Te.routeLen=_e.routeLen=k;let ue=Math.max(Te.pts[Te.pts.length-1].t,_e.pts[_e.pts.length-1].t),ae=Math.min(t.range(.6,.85)*a*(o?.7:1),ne.room/1.1),ce={x:ne.x,y:ne.y,z:.66,R:ae,hero:!0,graft:!0,cl:y,cl2:x,kind:t.pick(["lotus","camellia","anemone"]),birth:ue+.5,bud:!1};u.addFlower(ce),L.push({x:ne.x,y:ne.y,R:ae,vA:Te,vB:_e});for(let Q of[Te,_e]){let se=0,pe=-1,Ee=Q.pts.slice(6,-6);for(let be of t.shuffle(Ee)){if(se>=(o?1:2))break;let oe=t.range(.2,.28)*a*(o?.8:1);if(Math.hypot(be.x-ne.x,be.y-ne.y)<(ae+oe)*1.6||!p(be.x,be.y,oe*.55)||f(be.x,be.y,oe*1.08)<0||Math.abs(be.route-pe)<.12||_.flowers.some(Ce=>Math.hypot(Ce.x-be.x,Ce.y-be.y)<(Ce.R+oe)*1.2))continue;let Ye={x:be.x,y:be.y,z:t.range(.4,.6),R:oe,hero:!1,pulseBud:!0,routePos:be.route,cl:Q.plant==="B"?x:y,kind:t.pick(["cosmos","anemone","lotus"]),birth:be.t+.6,bud:!1};u.addFlower(Ye),C.push(Ye),se++,pe=be.route}}}let S=[],b=.4;for(let q=0;q<=n;q+=b)S.push({x:q,y:-.15,nx:0,ny:1}),S.push({x:q,y:r+.15,nx:0,ny:-1});for(let q=b;q<r;q+=b)S.push({x:-.15,y:q,nx:1,ny:0}),S.push({x:n+.15,y:q,nx:-1,ny:0});for(let q of S)q.room=Math.max(0,d(q.x+q.nx*.9,q.y+q.ny*.9)-c);let U=[[-.15,-.15,.6],[n+.15,-.15,Math.PI-.6],[-.15,r+.15,-.6],[n+.15,r+.15,-Math.PI+.6]],Z=Math.round(Wt(2*(n+r)/4.4,5,11)*(o?.85:l)),$=[];for(let[q,ie,ne]of t.shuffle(U))d(q+Math.cos(ne),ie+Math.sin(ne))-c>.3&&$.push({x:q,y:ie,a:ne+t.range(-.35,.35)});let T=S.filter(q=>q.room>.25),I=0;for(;$.length<Z&&T.length&&I++<400;){let q=T.reduce((M,v)=>M+Math.pow(v.room,1.3),0),ie=t.next()*q,ne=T[0];for(let M of T)if(ie-=Math.pow(M.room,1.3),ie<=0){ne=M;break}if($.some(M=>Math.hypot(M.x-ne.x,M.y-ne.y)<Math.max(1.2,(n+r)/9))){T.splice(T.indexOf(ne),1);continue}let le=Math.atan2(ne.ny,ne.nx),Te=le+t.sign()*Math.PI/2,_e=t.range(.25,.75);$.push({x:ne.x,y:ne.y,a:Math.atan2(Math.sin(le)*(1-_e)+Math.sin(Te)*_e,Math.cos(le)*(1-_e)+Math.cos(Te)*_e)})}let F=Math.min(n,r);for(let q of $.slice(0,Math.max(3,$.length-L.length*2)))h({x:q.x,y:q.y,a:q.a,t0:t.range(.1,1.3),len:t.range(.5,.85)*F*(o?.85:1)+t.range(.6,1.4),dur:t.range(2.6,3.6),w0:t.range(.034,.05)*a,depth:0,arc0:0,z:t.range(-.08,.12),reach:.24*a,tone:t.next(),...w(q.x<n/2?"A":"B")});if(o)for(let q of[0,1]){let ie=Math.max(2,Math.round(r/3.2));for(let ne=0;ne<ie;ne++){let le=ne%2===0,Te=le?r*ne/ie-t.range(0,.3):r*(ne+1)/ie+t.range(0,.3);h({x:q?n-t.range(.03,.09):t.range(.03,.09),y:Wt(Te,-.2,r+.2),a:(le?Math.PI/2:-Math.PI/2)+(q?1:-1)*(le?-1:1)*t.range(.04,.14),t0:t.range(.2,2.2),len:r/ie*t.range(1.1,1.5),dur:t.range(3,4.4),w0:t.range(.024,.032)*a,depth:1,arc0:0,z:t.range(-.05,.1),reach:.05,tone:t.next(),leafScale:.8,outward:q?1:-1,...w(q?"B":"A")})}}let B=[];for(let q of _.vines)if(q.depth<3)for(let ie=4;ie<q.pts.length;ie+=3)B.push({p:q.pts[ie],end:ie>q.pts.length-5,v:q});let N=_.flowers.slice(),V=(q,ie,ne)=>{let le=q.p;if(!p(le.x,le.y,ie*.55)||f(le.x,le.y,ie*1.08)<0||N.some(M=>Math.hypot(M.x-le.x,M.y-le.y)<(M.R+ie)*1.15))return!1;let Te=q.v.plant==="B"?x:y,_e={x:le.x,y:le.y,z:t.range(.36,.62),R:ie,hero:ne,cl:Te,birth:Wt(le.t+t.range(1,3),ne?4.6:4,ne?8.6:9.8),bud:!ne&&t.chance(.28)};return N.push(_e),u.addFlower(_e),!0},J=o?3:s?4:t.int(5,6),A=[[0,0],[n,0],[0,r],[n,r]],te=(q,ie)=>d(q.p.x,q.p.y)*.6-Math.hypot(q.p.x-ie[0],q.p.y-ie[1])*.35+(q.end?.3:0)+t.range(0,.4),z=()=>_.flowers.filter(q=>q.hero&&!q.graft).length;for(let q of t.shuffle(A)){if(z()>=J)break;let ie=t.range(.68,1)*a*(o?.72:1),ne=B.slice().sort((le,Te)=>te(Te,q)-te(le,q));for(let le of ne.slice(0,60))if(V(le,ie,!0))break}for(let q=0;q<40&&z()<J;q++){let ie=t.pick(B);ie&&V(ie,t.range(.55,.8)*a*(o?.72:1),!0)}let D=Math.round(t.int(12,18)*l);for(let q=0,ie=0;q<D&&ie<300;ie++){let ne=t.pick(B);if(!ne)break;V(ne,t.range(.2,.36)*a,!1)&&q++}u.dressFlowers();let X=Math.round((o?30:s?50:70)*(l>.6?1:.8)),re=[Ke(y.main),Ke(x.main),Ke("#5be8e2"),Ke("#f5d36d")];for(let q=0,ie=0;q<X&&ie<X*8;ie++){let ne,le;if(_.flowers.length&&t.chance(.5)){let _e=t.pick(_.flowers),M=t.range(0,6.3),v=_e.R*t.range(1,2.4);ne=_e.x+Math.cos(M)*v,le=_e.y+Math.sin(M)*v}else{let _e=t.pick(_.vines),M=_e.pts[Math.floor(t.next()*_e.pts.length)];ne=M.x+t.range(-.3,.3),le=M.y+t.range(-.3,.3)}let Te=t.range(2.2,6);!p(ne,le,.05)||f(ne,le,Te/200+.06)<0||(_.dust.push({x:ne,y:le,z:t.range(.1,.8),birth:t.range(7,11.5),col:t.pick(re),size:Te,phase:t.range(0,6.3)}),q++)}let fe={left:q=>q.x<n*.2,right:q=>q.x>n*.8,top:q=>q.y<r*.2,bottom:q=>q.y>r*.8},he={};for(let[q,ie]of Object.entries(fe))he[q]=_.vines.reduce((ne,le)=>ne+le.pts.filter(ie).length,0)*.045;let ee=Object.entries(fe).filter(([q])=>S.some(ie=>ie.room>.6&&fe[q](ie))),de=ee.reduce((q,[ie])=>q+he[ie],0)/Math.max(1,ee.length),Me=ee.filter(([q])=>he[q]<de*.25).map(([q])=>q),O=Me.length===0&&z()>=Math.min(J,o?2:3)&&L.length>=1;return{..._,ok:O,weak:Me,heroes:z(),pad:c,field:d,k:a,grafts:L.map(q=>({x:q.x,y:q.y,R:q.R})),pulseBuds:C.sort((q,ie)=>q.routePos-ie.routePos).map(q=>({fid:q.id,routePos:q.routePos,birth:q.birth}))}}function Ip(i,e){let t=Jf(i),{W:n,strip:r,phone:o}=e,s=n-r,a=o?.5:Wt(n/14.4,.72,1)*.92,l=o?.035:.2,c=e.rects.filter(D=>D.x1>s-1),d=c.concat([{x0:-1e3,y0:-1e3,x1:s,y1:1e5},{x0:-1e3,y0:-1e3,x1:1e3,y1:e.top},{x0:-1e3,y0:e.bottom,x1:1e3,y1:1e5}]),p=Qf(d),m=.2,g=[];for(let D=s+.05;D<=n+.5;D+=.08)g.push(D);let u=[];for(let D=e.top;D<=e.bottom;D+=m)u.push(g.map(X=>Math.min(p(X,D),(n-X)*1.1+.04)));let _=4,h=u.map((D,X)=>{let re=n+.45,fe=-1;for(let ee=0;ee<g.length&&!(g[ee]>n-.02);ee++){let de=1e9;for(let Me=0;Me<=_&&X+Me<u.length;Me++)de=Math.min(de,u[X+Me][ee]);de>fe&&(fe=de,re=g[ee])}let he=fe-l;return{x:he>(o?.03:.12*a+.06)?re:n+(o?.3:.45),room:he}}),f=D=>h[Wt(Math.round((D-e.top)/m),0,h.length-1)],y=t.range(0,6.3),L=eh(t,{field:p,pad:l,k:a,density:o?.7:1,inside:(D,X,re)=>D>s+re&&D<n-re,steer:(D,X,re,fe,he)=>{if(he.main){let ee=f(X+.35),de=ee.x>n?0:Math.sin(X*.8+y)*Math.min(Math.max(ee.room-.1,0)*.5,.7),Me=ee.x+de;return rr(Math.atan2(1,(Me-D)*1.7),re)*.16}return D>n+.25?rr(Math.PI,re)*.1:0},offX:n+.08}),{out:C,grow:R,clear:j}=L,S=t.pick(hp),b=t.chance(.5)?S:"ovate",U=e.top+.05,Z=0,$=L.newTree(),T=0,I=e.finale?e.finale.y+.3:e.bottom;for(;U<I-.6&&Z++<30;){let D=Z===1?Math.min(f(U).x,n-.1):n+.3,X=R({x:D,y:U,a:Math.PI/2+t.range(-.2,.2),t0:U,clock:"scroll",lead:0,len:(e.bottom-U)*1.35+1,w0:(o?.032:.05)*a,taper:.55,depth:0,arc0:0,z:.02,tree:$,reach:o?.02:.12*a,tone:t.next(),species:b,main:!0,branchEvery:o?2.2:1.5,maxChild:o?.6:1.8,leafScale:o?.8:.95,calm:.6,outward:o?1:0,stopY:I,routeArc:!0});X&&(T+=X.len,X.routeLen=1);let re=X?X.pts[X.pts.length-1].y:U;for(U=Math.max(re,U)+.3;U<e.bottom&&p(n+.3,U)-l-.2<0;)U+=.1}let F=t.shuffle(["coral","gold","pink","lav","peri"]),B=[];for(let D of C.vines)if(D.depth<3)for(let X=3;X<D.pts.length;X+=3)B.push(D.pts[X]);B.sort((D,X)=>D.y-X.y);let N=[];if(e.finale){let D=e.finale.y,X=C.vines.filter(O=>O.main).flatMap(O=>O.pts).filter(O=>Math.abs(O.y-D)<1.2&&O.x<n-.02),re=null,fe=-1,he=-1e9;for(let O of X){let q=p(O.x,O.y)-l,ie=Math.min(q,.8*a)-Math.abs(O.y-D)*.9;q>.25*a&&ie>he&&(he=ie,fe=q,re=O)}let ee,de,Me;if(re&&fe>.25*a?(ee=re.x,de=re.y,Me=Math.min(t.range(.78,.95)*a,fe/1.1)):(Me=Math.min(.5*a,(p(n-.02,D)-l)/1.1),ee=n-Me*.3,de=D),Me>.08&&j(ee,de,Me*1.08)>=0){let O={x:ee,y:de,z:.62,R:Me,hero:!0,finale:!0,cl:nr[t.pick(["coral","gold"])],cl2:nr[t.pick(["lav","pink"])],kind:t.pick(["camellia","lotus"]),birth:D-2.6,bud:!1};N.push(O),L.addFlower(O)}}let V=o?4:3.2,J=o?1.1:.9,A=e.top-1,te=e.top-1;for(let D of B){let X=p(D.x,D.y)-l;if(D.x>(o?n:n-.04))continue;let re=nr[F[Math.floor((D.y-e.top)/6)%F.length]],fe=he=>N.some(ee=>Math.hypot(ee.x-D.x,ee.y-D.y)<(ee.R+he)*1.2);if(D.y-A>V&&X>.5*a){let he=Math.min(t.range(.5,.75)*a,X*.88);if(!fe(he)&&j(D.x,D.y,he*1.08)>=0&&D.x+he*.4<n){let ee={x:D.x,y:D.y,z:t.range(.36,.6),R:he,hero:!0,cl:re,birth:D.t+t.range(.5,1.2),bud:!1};N.push(ee),L.addFlower(ee),A=D.y;continue}}if(o&&D.y-te>J*t.range(.7,1.3)&&X<=.17*a){let he=Math.min(t.range(.24,.32)*a,(p(n-.02,D.y)-l)/1.1),ee=n-he*.35;if(he>.07&&!N.some(de=>Math.hypot(de.x-ee,de.y-D.y)<(de.R+he)*1.2)&&j(ee,D.y,he*1.08)>=0){let de={x:ee,y:D.y,z:t.range(.36,.6),R:he,hero:!1,cl:re,birth:D.t+t.range(.3,.8),bud:t.chance(.2)};N.push(de),L.addFlower(de),te=D.y;continue}}if(D.y-te>J*t.range(.7,1.4)&&X>.17*a){let he=Math.min(t.range(.18,.32)*a,X*.88);if(!fe(he)&&j(D.x,D.y,he*1.08)>=0){let ee={x:D.x,y:D.y,z:t.range(.36,.6),R:he,hero:!1,cl:re,birth:D.t+t.range(.4,1),bud:t.chance(.25)};N.push(ee),L.addFlower(ee),te=D.y}}}L.dressFlowers();for(let D of C.flowers)if(D.hero)for(let X=0;X<6;X++){let re=t.range(0,6.3),fe=D.R*t.range(1.1,2.2),he=D.x+Math.cos(re)*fe,ee=D.y+Math.sin(re)*fe,de=t.range(2,5);he<n-.03&&j(he,ee,de/200+.06)>=0&&C.dust.push({x:he,y:ee,z:.5,birth:D.birth+1,col:Ke(D.cl.main),size:de,phase:t.range(0,6.3)})}let z=C.flowers.find(D=>D.finale);return{...C,pad:l,field:p,k:a,obstacles:c,xMin:s,finale:z?{x:z.x,y:z.y,R:z.R}:null}}function th({alpha:i}){let e=new co({antialias:!0,alpha:i,premultipliedAlpha:!0,powerPreference:"high-performance"});e.outputColorSpace=yt,i?e.setClearColor(0,0):e.setClearColor(Na,1),e.autoClear=!1;let t=new ir,n=new Yi(0,1,0,-1,-10,10);n.position.z=5;let r={uT:{value:0},uTime:{value:0},uGlow:{value:1},uPar:{value:[0,0]},uBg:{value:Ke(Na)},uPx:{value:100},uShadowOff:{value:[.05,-.075]},uRouteHead:{value:-10},uRouteMode:{value:0},uRouteSpacing:{value:7},uFocus:{value:[0,0,0]},uFocusR:{value:3}},o=(T,I,F={})=>({main:new ut({uniforms:r,vertexShader:T,fragmentShader:I,...F}),shadow:new ut({uniforms:r,vertexShader:T,fragmentShader:I,defines:{SHADOW:""},...F,transparent:!0})}),s={stem:o(gp,_p,{side:vt}),leaf:o(xp,vp,{transparent:!0,side:vt,depthWrite:!0}),petal:o(Mp,Sp,{transparent:!0,side:vt,depthWrite:!0}),dome:o(yp,Ep),halo:{main:new ut({uniforms:r,vertexShader:bp,fragmentShader:Tp,transparent:!0,depthWrite:!1,depthTest:!1})},dust:{main:new ut({uniforms:r,vertexShader:Ap,fragmentShader:wp,transparent:!0,depthWrite:!1})}},a={leaf:Kf(8,26),petal:Kf(8,14),dome:Lp(7,20),quad:Pp()},l=new Tt(4,4),c=new Tt(4,4),d=new ct;d.setAttribute("position",new ze(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3));let p=new Yi(-1,1,1,-1,0,1),m={tex:{value:null},dir:{value:[1,0]},res:{value:[4,4]}},g={tex:{value:null},res:{value:[4,4]},col:{value:Ke("#0d3b47")},strength:{value:.24},rects:{value:new Float32Array(128)},nr:{value:0},padPx:{value:16}},u=new ut({uniforms:m,vertexShader:Zf,fragmentShader:Rp,depthTest:!1,depthWrite:!1}),_=new ut({uniforms:g,vertexShader:Zf,fragmentShader:Cp,transparent:!0,depthTest:!1,depthWrite:!1}),h=new Et(d,u);h.frustumCulled=!1;let f=new ir;f.add(h);let y=[],x={petals:new Map,domes:new Map,stems:[]},w={},L={};function C(T){for(let A of y)t.remove(A),A.geometry.dispose();y=[];let I=(A,te,z,D)=>{let X=new(D||Et)(A,te.main);X.userData.shadow=te.shadow||null,X.frustumCulled=!1,X.renderOrder=z,t.add(X),y.push(X)},F=T.halos;if(F.length&&I(_o(a.quad,F.length,{iPos:[F.flatMap(A=>[A.x,-A.y,A.z]),3],iR:[F.map(A=>A.r),1],iCol:[F.flatMap(A=>A.col),3],iMax:[F.map(A=>A.max),1],iBirth:[F.map(A=>A.birth),1],iPhase:[F.map(A=>A.phase),1]}),s.halo,0),T.vines.length){let A=Dp(T.vines);I(A,s.stem,1),w.stem=A,L.stemBirth=A.attributes.aBirth.array.slice(),x.stems=A.userData.ranges}let B=T.leaves.slice().sort((A,te)=>A.z-te.z);B.length&&I(_o(a.leaf,B.length,{iPos:[B.flatMap(A=>[A.x,-A.y,A.z]),3],iRot:[B.map(A=>-A.ang-Math.PI/2),1],iSize:[B.flatMap(A=>[A.len,A.wid/2,A.len]),3],iBirth:[B.map(A=>A.birth),1],iDur:[B.map(A=>A.dur),1],iColA:[B.flatMap(A=>A.colA),3],iColB:[B.flatMap(A=>A.colB),3],iPhase:[B.map(A=>A.phase),1],iGlowW:[B.map(A=>A.glow),1],iAsym:[B.map(A=>A.asym),1],iFade:[B.map(A=>A.fade),1],iShape:[B.flatMap(A=>[A.type??0,A.serr??0,A.twist??0,A.droop??0]),4]}),s.leaf,2);let N=T.petals.slice().sort((A,te)=>A.z-te.z);x.petals=new Map,N.forEach((A,te)=>{A.fid!=null&&(x.petals.has(A.fid)||x.petals.set(A.fid,[]),x.petals.get(A.fid).push(te))}),N.length&&I(_o(a.petal,N.length,{iPos:[N.flatMap(A=>[A.x,-A.y,A.z]),3],iRot:[N.map(A=>-A.rot-Math.PI/2),1],iSize:[N.flatMap(A=>[A.len,A.wid/2,A.cup]),3],iBirth:[N.map(A=>A.birth),1],iOpen:[N.map(A=>A.open),1],iDur:[N.map(A=>A.dur),1],iTilt:[N.map(A=>A.tilt),1],iColA:[N.flatMap(A=>A.colA),3],iColB:[N.flatMap(A=>A.colB),3],iColC:[N.flatMap(A=>A.colC),3],iShape:[N.map(A=>A.shape),1],iPhase:[N.map(A=>A.phase),1],iStyle:[N.flatMap(A=>A.style),4]}),s.petal,3),N.length&&(w.petal=y[y.length-1].geometry,L.petalOpen=w.petal.attributes.iOpen.array.slice());let V=T.domes;x.domes=new Map,V.forEach((A,te)=>{A.fid!=null&&(x.domes.has(A.fid)||x.domes.set(A.fid,[]),x.domes.get(A.fid).push(te))}),V.length&&I(_o(a.dome,V.length,{iPos:[V.flatMap(A=>[A.x,-A.y,A.z]),3],iR:[V.map(A=>A.r),1],iBirth:[V.map(A=>A.birth),1],iColA:[V.flatMap(A=>A.colA),3],iColB:[V.flatMap(A=>A.colB),3],iKind:[V.map(A=>A.kind??0),1]}),s.dome,4),V.length&&(w.dome=y[y.length-1].geometry,L.domeBirth=w.dome.attributes.iBirth.array.slice());let J=T.dust;if(J.length){let A=new ct;A.setAttribute("position",new ze(new Float32Array(J.flatMap(te=>[te.x,-te.y,te.z])),3)),A.setAttribute("aBirth",new ze(new Float32Array(J.map(te=>te.birth)),1)),A.setAttribute("aCol",new ze(new Float32Array(J.flatMap(te=>te.col)),3)),A.setAttribute("aSize",new ze(new Float32Array(J.map(te=>te.size/100)),1)),A.setAttribute("aPhase",new ze(new Float32Array(J.map(te=>te.phase)),1)),I(A,s.dust,5,mo)}}function R(T,I,F){e.setPixelRatio(F),e.setSize(Math.round(T),Math.round(I),!1);let B=e.domElement.width,N=e.domElement.height,V=Math.max(4,Math.round(B/2)),J=Math.max(4,Math.round(N/2));l.setSize(V,J),c.setSize(V,J),r.uPx.value=100*F,g.res.value=[B,N],g.padPx.value=14*F}function j(T){for(let F of y)F.userData.shadow?F.material=F.userData.shadow:F.visible=!1;e.setRenderTarget(l),e.setClearColor(0,0),e.clear(),e.render(t,n);for(let F of y)F.material=F.userData.shadow?S.get(F):F.material,F.visible=!0;h.material=u,m.res.value=[l.width,l.height],m.tex.value=l.texture,m.dir.value=[1,0],e.setRenderTarget(c),e.clear(),e.render(f,p),m.tex.value=c.texture,m.dir.value=[0,1],e.setRenderTarget(l),e.clear(),e.render(f,p),e.setRenderTarget(null),i?e.setClearColor(0,0):e.setClearColor(Na,1),e.clear();let I=Math.min(32,T.length);for(let F=0;F<I;F++)g.rects.value.set(T[F],F*4);g.nr.value=I,g.tex.value=l.texture,h.material=_,e.render(f,p),e.render(t,n)}let S={get:T=>T.userData.mainMat},b=C;function U(T){b(T);for(let I of y)I.userData.mainMat=I.material}function Z(){for(let T of y)t.remove(T),T.geometry.dispose();for(let T of Object.values(a))T.dispose();for(let T of Object.values(s))for(let I of Object.values(T))I.dispose();l.dispose(),c.dispose(),d.dispose(),u.dispose(),_.dispose(),e.dispose()}function $(T,I){let F=x.petals.get(T);if(F&&w.petal){let N=w.petal.attributes.iOpen;for(let V of F)N.array[V]=L.petalOpen[V]+I;N.needsUpdate=!0}let B=x.domes.get(T);if(B&&w.dome){let N=w.dome.attributes.iBirth;for(let V of B)N.array[V]=L.domeBirth[V]+I;N.needsUpdate=!0}if(w.stem){let N=w.stem.attributes.aBirth,V=!1;for(let J of x.stems)if(J.fid===T){for(let A=J.start;A<J.start+J.count;A++)N.array[A]=L.stemBirth[A]+I;V=!0}V&&(N.needsUpdate=!0)}}return{renderer:e,scene:t,camera:n,U:r,setComposition:U,setSize:R,render:j,dispose:Z,shiftFlower:$,info:()=>({...e.info.memory})}}function Fp(i,e){i.classList.add("epx-garden-measuring");let t=i.getBoundingClientRect(),n=[],r=o=>{o.width>1&&o.height>1&&n.push({x0:(o.left-t.left)/100,y0:(o.top-t.top)/100,x1:(o.right-t.left)/100,y1:(o.bottom-t.top)/100})};for(let o of e)if(o){if(/^(H\d|P|SPAN)$/.test(o.tagName)&&o.textContent.trim()){let s=[];for(let a of $f(o,o)){if(a.width<1||a.height<1)continue;let l=s.find(c=>Math.abs(c.top-a.top)<6||a.top<c.bottom-4&&a.bottom>c.top+4);l?(l.left=Math.min(l.left,a.left),l.right=Math.max(l.right,a.right),l.top=Math.min(l.top,a.top),l.bottom=Math.max(l.bottom,a.bottom)):s.push({left:a.left,right:a.right,top:a.top,bottom:a.bottom})}if(s.length){for(let a of s)r({left:a.left,right:a.right,top:a.top,bottom:a.bottom,width:a.right-a.left,height:a.bottom-a.top});continue}}r(o.getBoundingClientRect())}return i.classList.remove("epx-garden-measuring"),{W:t.width/100,H:t.height/100,rects:n}}function Np(i,e={}){let t=(e.copy||[]).map(Q=>typeof Q=="string"?i.querySelector(Q):Q).filter(Boolean),n=new URLSearchParams(location.search),r=matchMedia("(prefers-reduced-motion: reduce)").matches,o=n.has("gt")?parseFloat(n.get("gt")):null,s=n.has("garden")?parseInt(n.get("garden"),10)>>>0:e.seed??Math.random()*2**31>>>0,a=document.createElement("div");a.className="epx-garden",a.setAttribute("aria-hidden","true"),i.prepend(a);let l;try{l=th({alpha:!1})}catch{return i.classList.add("epx-garden-fallback"),a.remove(),{seed:s,failed:!0}}let{renderer:c,camera:d,U:p}=l;a.appendChild(c.domElement);let g=(navigator.hardwareConcurrency||8)<=4||(navigator.deviceMemory||8)<=4?1.5:2,u=null,_=null,h=s;function f(){u=Fp(i,t);let{W:Q,H:se}=u,pe=0;h=s;do{if(_=Up(h,u),_.ok)break;h=h+2654435761>>>0}while(++pe<6);d.left=0,d.right=Q,d.top=0,d.bottom=-se,d.updateProjectionMatrix(),l.setComposition(_);let Ee=Math.min(B,_.pulseBuds.length);_.pulseBuds.forEach((be,oe)=>l.shiftFlower(be.fid,r||o!=null||oe<Ee?0:1e4)),F=Ee,y()}function y(){l.setSize(u.W*100,u.H*100,Math.min(window.devicePixelRatio||1,g)),c.domElement.style.width="100%",c.domElement.style.height="100%"}function x(){let Q=c.getPixelRatio(),se=c.domElement.height;return u.rects.map(pe=>[pe.x0*100*Q,se-pe.y1*100*Q,pe.x1*100*Q,se-pe.y0*100*Q])}let w=13.5,L=o??(r?w+2:0),C=0,R=0,j=0,S=0,b=!0,U=!1,Z=[0,0],$=[0,0],T=0,I=0,F=0,B=0,N=-1,V=0,J=1.7;function A(){if(r||o!=null||L<9||!_||!_.grafts.length)return;let Q=performance.now();if(!(Q-V<1e3)&&(V=Q,N=L,F<_.pulseBuds.length)){let se=_.pulseBuds[F++];B=F,l.shiftFlower(se.fid,Math.max(0,L+se.routePos*J-se.birth-.25))}}let te=i.querySelector(".epx-reel"),z=null,D=0;te?(z=new MutationObserver(()=>{te.style.transition!=="none"&&A()}),z.observe(te,{attributes:!0,attributeFilter:["style"]})):D=setInterval(A,2200);let X=0,re=0,fe=[0,0],he=(e.focus||[]).map(Q=>i.querySelector(Q)).filter(Boolean),ee=Q=>{let se=i.getBoundingClientRect(),pe=Q.currentTarget.getBoundingClientRect();fe=[(pe.left+pe.width/2-se.left)/100,-(pe.top+pe.height/2-se.top)/100],re=1,!U&&!r&&q()},de=()=>{re=0};for(let Q of he)Q.addEventListener("pointerenter",ee),Q.addEventListener("focus",ee),Q.addEventListener("pointerleave",de),Q.addEventListener("blur",de);function Me(){p.uRouteHead.value=N>=0&&L-N<J*1.4?(L-N)/J:-10,p.uFocus.value=[fe[0],fe[1],X],p.uFocusR.value=u.W<7?2.4:4.2,p.uT.value=Math.max(L,0),p.uTime.value=C,p.uGlow.value=mp(6.5,11.5,Math.max(L,0)),p.uPar.value=Z,l.render(x())}function O(Q){R=requestAnimationFrame(O);let se=Math.min((Q-(j||Q))/1e3,.05);j=Q;let pe=L>w;if(pe&&Q-S<32)return;let Ee=pe?(Q-(S||Q))/1e3:se;S=Q,o==null&&(L+=Math.min(Ee,.05)),C+=Math.min(Ee,.05),Z=[Z[0]+($[0]-Z[0])*.05,Z[1]+($[1]-Z[1])*.05],X+=(re-X)*.12,Me(),!pe&&L>.5&&I<120&&(I++,se>.034&&T++,I===120&&T>60&&g>1&&(g=1,y()))}function q(){U||r||o!=null||(U=!0,j=0,S=0,R=requestAnimationFrame(O))}function ie(){U=!1,cancelAnimationFrame(R)}let ne=new IntersectionObserver(Q=>{b=Q[0].isIntersecting,b&&!document.hidden?q():ie()},{rootMargin:"100px"});ne.observe(i);let le=()=>{document.hidden?ie():b&&q()};document.addEventListener("visibilitychange",le);let Te=matchMedia("(pointer: fine)").matches,_e=Q=>{let se=i.getBoundingClientRect();$=[((Q.clientX-se.left)/se.width-.5)*-.05,((Q.clientY-se.top)/se.height-.5)*.05]};Te&&!r&&i.addEventListener("pointermove",_e,{passive:!0});let M=0,v=0,k=0,ue=new ResizeObserver(()=>{let Q=i.getBoundingClientRect();Math.abs(Q.width-M)<2&&Math.abs(Q.height-v)<2||(clearTimeout(k),k=setTimeout(()=>{M=Q.width,v=Q.height,f(),Me()},M?160:0))}),ae={get seed(){return h},regrow(Q){return s=Q!=null?Q>>>0:Math.random()*2**31>>>0,f(),L=r?w+2:0,Me(),q(),h},setTime(Q){L=Q,Me()},pulse(){return V=0,A(),{next:F,buds:_.pulseBuds.length}},probe(Q){let se=c.getContext(),pe=c.getPixelRatio(),Ee=c.domElement.height,be={};for(let oe of Q){L=oe,Me();let Ye=0;for(let Ce of u.rects){let Ue=Math.floor(Ce.x0*100*pe),we=Math.floor(Ce.y0*100*pe),ye=Math.ceil((Ce.x1-Ce.x0)*100*pe),Fe=Math.ceil((Ce.y1-Ce.y0)*100*pe),qe=new Uint8Array(ye*Fe*4);se.readPixels(Ue,Ee-we-Fe,ye,Fe,se.RGBA,se.UNSIGNED_BYTE,qe);for(let je=0;je<qe.length;je+=4)(Math.abs(qe[je]-244)>2||Math.abs(qe[je+1]-251)>2||Math.abs(qe[je+2]-250)>2)&&Ye++}be[oe]=Ye}return be},info(){return{grafts:_.grafts.length,graftAt:_.grafts.map(Q=>[Math.round(Q.x*100),Math.round(Q.y*100),Math.round(Q.R*100)]),pulseBuds:_.pulseBuds.length,seed:h,vines:_.vines.length,leaves:_.leaves.length,flowers:_.flowers.length,heroBlooms:_.heroes,petals:_.petals.length,halos:_.halos.length,motes:_.dust.length,ok:_.ok,weak:_.weak,gpu:l.info(),size:[u.W*100,u.H*100],pad:Math.round(_.pad*100)}},destroy(){z&&z.disconnect(),clearInterval(D),ie(),ne.disconnect(),ue.disconnect(),document.removeEventListener("visibilitychange",le),i.removeEventListener("pointermove",_e),l.dispose(),a.remove()}};f();let ce=i.getBoundingClientRect();return M=ce.width,v=ce.height,ue.observe(i),Me(),q(),n.has("garden")&&console.info("[epx-garden] seed",h,ae.info()),ae}function Op(i,e,t){let n=document.documentElement;n.classList.add("epx-garden-measuring");let r=n.clientWidth,o=scrollX,s=scrollY,a=[],l=u=>{u.width>.5&&u.height>.5&&u.right>r*.35&&a.push({x0:(u.left+o)/100,y0:(u.top+s)/100,x1:(u.right+o)/100,y1:(u.bottom+s)/100})};for(let u of $f(document.body,null))l(u);document.querySelectorAll('img,svg,video,canvas,iframe,button,input,select,textarea,.e-button,[class*="e-button"]').forEach(u=>{u.closest(".epx-sidevine,.epx-garden")||l(u.getBoundingClientRect())}),(i?i.parentElement:document.body).querySelectorAll("*").forEach(u=>{if(u.closest(".epx-sidevine,.epx-garden"))return;let _=u.getBoundingClientRect();if(_.width<2||_.height<1||_.width>r*.9||_.right<r*.35)return;let h=getComputedStyle(u),f=h.backgroundColor!=="rgba(0, 0, 0, 0)"&&h.backgroundColor!=="transparent",y=["Top","Right","Bottom","Left"].some(x=>parseFloat(h["border"+x+"Width"])>0&&h["border"+x+"Style"]!=="none");(f||y)&&l(_)});let d=t&&t.getBoundingClientRect(),p=d&&d.width?{x:(d.left+d.width/2+o)/100,y:(d.top+d.height/2+s)/100}:null,m=i?(i.getBoundingClientRect().bottom+s)/100:0,g=e?(e.getBoundingClientRect().top+s)/100:n.scrollHeight/100;return n.classList.remove("epx-garden-measuring"),{W:r/100,rects:a,top:m,bottom:g,docH:n.scrollHeight/100,finale:p}}function Bp(i={}){let e=new URLSearchParams(location.search),t=matchMedia("(prefers-reduced-motion: reduce)").matches,n=e.has("vine")?parseInt(e.get("vine"),10)>>>0:Math.random()*2**31>>>0,r=i.after?document.querySelector(i.after):null,o=i.before?document.querySelector(i.before):document.querySelector(".elementor-location-footer, footer"),s=i.finale?document.querySelector(i.finale):null,a=document.createElement("div");a.className="epx-sidevine",a.setAttribute("aria-hidden","true"),document.body.appendChild(a);let l;try{l=th({alpha:!0})}catch{return a.remove(),{failed:!0}}let{renderer:c,camera:d,U:p}=l;a.appendChild(c.domElement);let m=(navigator.hardwareConcurrency||8)<=4?1.5:2,g=null,u=null,_=0,h=0,f=0,y=0,x=0,w=0;function L(){a.style.height="0px",a.style.top="0px",g=Op(r,o,s),C=Math.round(g.docH*100);let ee=g.W*100;g.phone=ee<1100,_=g.phone?96:Math.round(Wt(ee*.3,160,460)),g.strip=_/100,u=Ip(n,g),l.setComposition(u),f=Math.min(Math.round(innerHeight*2),C),a.style.width=_+"px",a.style.height=f+"px",l.setSize(_,f,Math.min(window.devicePixelRatio||1,m)),c.domElement.style.width="100%",c.domElement.style.height="100%",j(!0)}let C=0,R=ee=>Math.max(0,Math.min(Math.round(ee-innerHeight*.5),C-f));function j(ee){let de=innerHeight;if(ee||scrollY<h||scrollY+de>h+f){let Me=R(scrollY);return!ee&&Me===h?!1:(h=Me,a.style.top=h+"px",!0)}return!1}function S(){let ee=c.getPixelRatio(),de=c.domElement.height,Me=g.W-g.strip,O=[];for(let q of u.obstacles)q.y1*100<h-40||q.y0*100>h+f+40||O.push([(q.x0-Me)*100*ee,de-(q.y1*100-h)*ee,(q.x1-Me)*100*ee,de-(q.y0*100-h)*ee]);return O}function b(){d.left=g.W-g.strip,d.right=g.W,d.top=-h/100,d.bottom=-(h+f)/100,d.updateProjectionMatrix(),p.uT.value=y,p.uTime.value=w,p.uGlow.value=1,p.uRouteMode.value=1,p.uRouteSpacing.value=g.phone?5:7,p.uFocus.value=u.finale?[u.finale.x,-u.finale.y,Z]:[0,0,0],p.uFocusR.value=u.finale?u.finale.R*2.2:1,l.render(S())}let U=()=>(scrollY+innerHeight*.82)/100,Z=0,$=0;if(s){let ee=()=>{$=1},de=()=>{$=0};s.addEventListener("pointerenter",ee),s.addEventListener("focus",ee),s.addEventListener("pointerleave",de),s.addEventListener("blur",de)}let T=0,I=0,F=0,B=!1;function N(ee){T=requestAnimationFrame(N);let de=Math.min((ee-(I||ee))/1e3,.05);I=ee;let Me=j(!1);x=Math.max(x,U());let O=y<x-.01||Math.abs($-Z)>.01;Z+=($-Z)*.12,!(!O&&!Me&&ee-F<40)&&(O&&(y+=Math.min(x-y,Math.max(.02,(x-y)*Math.min(1,de*2.2)))),w+=Math.min((ee-(F||ee))/1e3,.05),F=ee,b())}function V(){B||(B=!0,I=0,T=requestAnimationFrame(N))}function J(){B=!1,cancelAnimationFrame(T)}let A=()=>{document.hidden?J():t||V()};document.addEventListener("visibilitychange",A);let te=()=>{j(!1)&&b()},z=0,D=innerWidth,X=document.documentElement.scrollHeight,re=()=>{clearTimeout(z),z=setTimeout(()=>{L(),b()},300)},fe=new ResizeObserver(()=>{let ee=document.documentElement.scrollHeight;(Math.abs(innerWidth-D)>1||Math.abs(ee-X)>4)&&(D=innerWidth,X=ee,re())}),he={get seed(){return n},regrow(ee){return n=ee!=null?ee>>>0:Math.random()*2**31>>>0,L(),b(),n},info(){return{finale:u.finale,seed:n,vines:u.vines.length,leaves:u.leaves.length,flowers:u.flowers.length,heroBlooms:u.flowers.filter(ee=>ee.hero).length,stripPx:_,top:Math.round(g.top*100),bottom:Math.round(g.bottom*100),obstacles:u.obstacles.length,gpu:l.info()}},probe(ee){let de=c.getContext(),Me={},O=[h,y];y=1e5;for(let q of ee){h=R(q),b();let ie=c.getPixelRatio(),ne=c.domElement.width,le=c.domElement.height,Te=new Uint8Array(ne*le*4);de.readPixels(0,0,ne,le,de.RGBA,de.UNSIGNED_BYTE,Te);let _e=0;for(let M of S()){let v=Math.max(0,Math.floor(M[0])),k=Math.min(ne,Math.ceil(M[2])),ue=Math.max(0,Math.floor(M[1])),ae=Math.min(le,Math.ceil(M[3]));for(let ce=ue;ce<ae;ce++)for(let Q=v;Q<k;Q++)Te[(ce*ne+Q)*4+3]>3&&_e++}Me[q]=_e}return[h,y]=O,a.style.top=h+"px",b(),Me},destroy(){J(),fe.disconnect(),document.removeEventListener("visibilitychange",A),removeEventListener("scroll",te),l.dispose(),a.remove()}};return L(),y=t?1e5:g.top-.3,x=y,b(),fe.observe(document.body),t?addEventListener("scroll",te,{passive:!0}):V(),e.has("vine")&&console.info("[epx-sidevine] seed",n,he.info()),he}function jf(){let i=window.epxGardenConfig;if(!i||document.body.classList.contains("elementor-editor-active"))return;let e=document.querySelector(i.host),t=()=>{if(e&&!e.querySelector(".epx-garden"))try{window.epxGarden=Np(e,i)}catch(r){e.classList.add("epx-garden-fallback"),console.warn("[epx-garden]",r)}if(i.side&&innerWidth>=(i.side.minWidth||0)&&!document.querySelector(".epx-sidevine")){let r=()=>{try{window.epxSideVine=Bp(i.side)}catch(o){console.warn("[epx-sidevine]",o)}};document.readyState==="complete"?setTimeout(r,200):addEventListener("load",()=>setTimeout(r,200),{once:!0})}};(document.fonts&&document.fonts.ready?Promise.race([document.fonts.ready,new Promise(r=>setTimeout(r,1500))]):Promise.resolve()).then(()=>requestAnimationFrame(t))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",jf):jf();export{Np as mountGarden,Bp as mountSideVine};
