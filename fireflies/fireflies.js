var Ja="160";var Qa=0,Co=1,$a=2;var cr=1,es=2,ti=3,zt=0,it=1,Mt=2;var Yt=0,_i=1,Po=2,Lo=3,Do=4,ur=5,vi=100,ts=101,is=102,Uo=103,Fo=104,ns=200,fr=201,rs=202,os=203,Xn=204,zi=205,as=206,ss=207,ls=208,cs=209,us=210,fs=211,hs=212,ds=213,ps=214,ms=0,gs=1,_s=2,tn=3,vs=4,xs=5,Ms=6,Ss=7,hr=0,ys=1,Es=2,Zt=0,bs=1,Ts=2,As=3,ws=4,Rs=5,Cs=6;var Io=300,ii=301,ui=302,qn=303,Yn=304,Ri=306,Zn=1e3,It=1001,jn=1002,nt=1003,No=1004;var dr=1005;var ct=1006,Ps=1007;var xi=1008;var Ht=1009,Ls=1010,Ds=1011,nn=1012,pr=1013,Vt=1014,kt=1015,Mi=1016,mr=1017,gr=1018,jt=1020,Us=1021,ht=1023,Fs=1024,Is=1025,ni=1026,fi=1027,Ns=1028,_r=1029,Os=1030,vr=1031,xr=1033,Mr=33776,Sr=33777,yr=33778,Er=33779,Oo=35840,Bo=35841,Go=35842,zo=35843,br=36196,Ho=37492,Vo=37496,ko=37808,Wo=37809,Xo=37810,qo=37811,Yo=37812,Zo=37813,jo=37814,Ko=37815,Jo=37816,Qo=37817,$o=37818,ea=37819,ta=37820,ia=37821,Tr=36492,na=36494,ra=36495,Bs=36283,oa=36284,aa=36285,sa=36286;var Ar=3e3,ri=3001,Gs=3200,zs=3201,Hs=0,Vs=1,St="",et="srgb",At="srgb-linear",rn="display-p3",Hi="display-p3-linear",on="linear",qe="srgb",an="rec709",sn="p3";var Vi=7680;var la=519,ks=512,Ws=513,Xs=514,wr=515,qs=516,Ys=517,Zs=518,js=519,ca=35044;var ua="300 es",Kn=1035,Ot=2e3,ki=2001;var Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Rr=Math.PI/180,Jn=180/Math.PI;function hi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]).toLowerCase()}function dt(i,e,t){return Math.max(e,Math.min(t,i))}function Ks(i,e){return(i%e+e)%e}function Cr(i,e,t){return(1-t)*i+t*e}function fa(i){return(i&i-1)===0&&i!==0}function Qn(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ln(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Nt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Pe=class i{constructor(e,t,n,r,o,s,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c)}set(e,t,n,r,o,s,a,l,c){let d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=o,d[5]=l,d[6]=n,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],d=n[4],p=n[7],m=n[2],g=n[5],u=n[8],v=r[0],h=r[3],f=r[6],b=r[1],x=r[4],P=r[7],N=r[2],R=r[5],w=r[8];return o[0]=s*v+a*b+l*N,o[3]=s*h+a*x+l*R,o[6]=s*f+a*P+l*w,o[1]=c*v+d*b+p*N,o[4]=c*h+d*x+p*R,o[7]=c*f+d*P+p*w,o[2]=m*v+g*b+u*N,o[5]=m*h+g*x+u*R,o[8]=m*f+g*P+u*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*s*d-t*a*c-n*o*d+n*a*l+r*o*c-r*s*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],d=e[8],p=d*s-a*c,m=a*l-d*o,g=c*o-s*l,u=t*p+n*m+r*g;if(u===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/u;return e[0]=p*v,e[1]=(r*c-d*n)*v,e[2]=(a*n-r*s)*v,e[3]=m*v,e[4]=(d*t-r*l)*v,e[5]=(r*o-a*t)*v,e[6]=g*v,e[7]=(n*l-c*t)*v,e[8]=(s*t-n*o)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,s,a){let l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ha.makeScale(e,t)),this}rotate(e){return this.premultiply(ha.makeRotation(-e)),this}translate(e,t){return this.premultiply(ha.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ha=new Pe;var Js=new Pe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Qs=new Pe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Pr={[At]:{transfer:on,primaries:an,toReference:i=>i,fromReference:i=>i},[et]:{transfer:qe,primaries:an,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Hi]:{transfer:on,primaries:sn,toReference:i=>i.applyMatrix3(Qs),fromReference:i=>i.applyMatrix3(Js)},[rn]:{transfer:qe,primaries:sn,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Qs),fromReference:i=>i.applyMatrix3(Js).convertLinearToSRGB()}},ph=new Set([At,Hi]),We={enabled:!0,_workingColorSpace:At,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!ph.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Pr[e].toReference,r=Pr[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Pr[i].primaries},getTransfer:function(i){return i===St?on:Pr[i].transfer}};function Ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Lr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var $s={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},Dr={h:0,s:0,l:0};function da(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Oe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=We.workingColorSpace){if(e=Ks(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{let o=n<=.5?n*(1+t):n+t-n*t,s=2*n-o;this.r=da(s,o,e+1/3),this.g=da(s,o,e),this.b=da(s,o,e-1/3)}return We.toWorkingColorSpace(this,r),this}setStyle(e,t=et){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o,s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=et){let n=$s[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=Lr(e.r),this.g=Lr(e.g),this.b=Lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=et){return We.fromWorkingColorSpace(Lt.copy(this),e),Math.round(dt(Lt.r*255,0,255))*65536+Math.round(dt(Lt.g*255,0,255))*256+Math.round(dt(Lt.b*255,0,255))}getHexString(e=et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.fromWorkingColorSpace(Lt.copy(this),t);let n=Lt.r,r=Lt.g,o=Lt.b,s=Math.max(n,r,o),a=Math.min(n,r,o),l,c,d=(a+s)/2;if(a===s)l=0,c=0;else{let p=s-a;switch(c=d<=.5?p/(s+a):p/(2-s-a),s){case n:l=(r-o)/p+(r<o?6:0);break;case r:l=(o-n)/p+2;break;case o:l=(n-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=We.workingColorSpace){return We.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=et){We.fromWorkingColorSpace(Lt.copy(this),e);let t=Lt.r,n=Lt.g,r=Lt.b;return e!==et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+t,Pi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pi),e.getHSL(Dr);let n=Cr(Pi.h,Dr.h,t),r=Cr(Pi.s,Dr.s,t),o=Cr(Pi.l,Dr.l,t);return this.setHSL(n,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*r,this.g=o[1]*t+o[4]*n+o[7]*r,this.b=o[2]*t+o[5]*n+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Lt=new Oe;Oe.NAMES=$s;var pi=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,s,a){let l=n[r+0],c=n[r+1],d=n[r+2],p=n[r+3],m=o[s+0],g=o[s+1],u=o[s+2],v=o[s+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=p;return}if(a===1){e[t+0]=m,e[t+1]=g,e[t+2]=u,e[t+3]=v;return}if(p!==v||l!==m||c!==g||d!==u){let h=1-a,f=l*m+c*g+d*u+p*v,b=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){let N=Math.sqrt(x),R=Math.atan2(N,f*b);h=Math.sin(h*R)/N,a=Math.sin(a*R)/N}let P=a*b;if(l=l*h+m*P,c=c*h+g*P,d=d*h+u*P,p=p*h+v*P,h===1-a){let N=1/Math.sqrt(l*l+c*c+d*d+p*p);l*=N,c*=N,d*=N,p*=N}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,o,s){let a=n[r],l=n[r+1],c=n[r+2],d=n[r+3],p=o[s],m=o[s+1],g=o[s+2],u=o[s+3];return e[t]=a*u+d*p+l*g-c*m,e[t+1]=l*u+d*m+c*p-a*g,e[t+2]=c*u+d*g+a*m-l*p,e[t+3]=d*u-a*p-l*m-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(r/2),p=a(o/2),m=l(n/2),g=l(r/2),u=l(o/2);switch(s){case"XYZ":this._x=m*d*p+c*g*u,this._y=c*g*p-m*d*u,this._z=c*d*u+m*g*p,this._w=c*d*p-m*g*u;break;case"YXZ":this._x=m*d*p+c*g*u,this._y=c*g*p-m*d*u,this._z=c*d*u-m*g*p,this._w=c*d*p+m*g*u;break;case"ZXY":this._x=m*d*p-c*g*u,this._y=c*g*p+m*d*u,this._z=c*d*u+m*g*p,this._w=c*d*p-m*g*u;break;case"ZYX":this._x=m*d*p-c*g*u,this._y=c*g*p+m*d*u,this._z=c*d*u-m*g*p,this._w=c*d*p+m*g*u;break;case"YZX":this._x=m*d*p+c*g*u,this._y=c*g*p+m*d*u,this._z=c*d*u-m*g*p,this._w=c*d*p-m*g*u;break;case"XZY":this._x=m*d*p-c*g*u,this._y=c*g*p-m*d*u,this._z=c*d*u+m*g*p,this._w=c*d*p+m*g*u;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],o=t[8],s=t[1],a=t[5],l=t[9],c=t[2],d=t[6],p=t[10],m=n+a+p;if(m>0){let g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(d-l)*g,this._y=(o-c)*g,this._z=(s-r)*g}else if(n>a&&n>p){let g=2*Math.sqrt(1+n-a-p);this._w=(d-l)/g,this._x=.25*g,this._y=(r+s)/g,this._z=(o+c)/g}else if(a>p){let g=2*Math.sqrt(1+a-n-p);this._w=(o-c)/g,this._x=(r+s)/g,this._y=.25*g,this._z=(l+d)/g}else{let g=2*Math.sqrt(1+p-n-a);this._w=(s-r)/g,this._x=(o+c)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,o=e._z,s=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+s*a+r*c-o*l,this._y=r*d+s*l+o*a-n*c,this._z=o*d+s*c+n*l-r*a,this._w=s*d-n*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,o=this._z,s=this._w,a=s*e._w+n*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=n,this._y=r,this._z=o,this;let l=1-a*a;if(l<=Number.EPSILON){let g=1-t;return this._w=g*s+t*this._w,this._x=g*n+t*this._x,this._y=g*r+t*this._y,this._z=g*o+t*this._z,this.normalize(),this}let c=Math.sqrt(l),d=Math.atan2(c,a),p=Math.sin((1-t)*d)/c,m=Math.sin(t*d)/c;return this._w=s*p+this._w*m,this._x=n*p+this._x*m,this._y=r*p+this._y*m,this._z=o*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(o),n*Math.cos(o),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};var H=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(el.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(el.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*s,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*r-a*n),d=2*(a*t-o*r),p=2*(o*n-s*t);return this.x=t+l*c+s*p-a*d,this.y=n+l*d+a*c-o*p,this.z=r+l*p+o*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,o=e.z,s=t.x,a=t.y,l=t.z;return this.x=r*l-o*a,this.y=o*s-n*l,this.z=n*a-r*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pa.copy(this).projectOnVector(e),this.sub(pa)}reflect(e){return this.sub(pa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},pa=new H,el=new pi;var yi=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,oi):oi.fromBufferAttribute(o,s),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ur.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ur.copy(n.boundingBox)),Ur.applyMatrix4(e.matrixWorld),this.union(Ur)}let r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($n),Fr.subVectors(this.max,$n),cn.subVectors(e.a,$n),un.subVectors(e.b,$n),fn.subVectors(e.c,$n),Li.subVectors(un,cn),Di.subVectors(fn,un),Wi.subVectors(cn,fn);let t=[0,-Li.z,Li.y,0,-Di.z,Di.y,0,-Wi.z,Wi.y,Li.z,0,-Li.x,Di.z,0,-Di.x,Wi.z,0,-Wi.x,-Li.y,Li.x,0,-Di.y,Di.x,0,-Wi.y,Wi.x,0];return!ma(t,cn,un,fn,Fr)||(t=[1,0,0,0,1,0,0,0,1],!ma(t,cn,un,fn,Fr))?!1:(Ir.crossVectors(Li,Di),t=[Ir.x,Ir.y,Ir.z],ma(t,cn,un,fn,Fr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Si=[new H,new H,new H,new H,new H,new H,new H,new H],oi=new H,Ur=new yi,cn=new H,un=new H,fn=new H,Li=new H,Di=new H,Wi=new H,$n=new H,Fr=new H,Ir=new H,Xi=new H;function ma(i,e,t,n,r){for(let o=0,s=i.length-3;o<=s;o+=3){Xi.fromArray(i,o);let a=r.x*Math.abs(Xi.x)+r.y*Math.abs(Xi.y)+r.z*Math.abs(Xi.z),l=e.dot(Xi),c=t.dot(Xi),d=n.dot(Xi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}var mh=new yi,er=new H,ga=new H,mi=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):mh.setFromPoints(e).getCenter(n);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;er.subVectors(e,this.center);let t=er.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(er,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ga.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(er.copy(e.center).add(ga)),this.expandByPoint(er.copy(e.center).sub(ga))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};var _a=new H,gh=new H,_h=new Pe,ai=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=_a.subVectors(n,t).cross(gh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(_a),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||_h.getNormalMatrix(e),r=this.coplanarPoint(_a).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};var qi=new mi,Nr=new H,hn=class{constructor(e=new ai,t=new ai,n=new ai,r=new ai,o=new ai,s=new ai){this.planes=[e,t,n,r,o,s]}set(e,t,n,r,o,s){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ot){let n=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],c=r[4],d=r[5],p=r[6],m=r[7],g=r[8],u=r[9],v=r[10],h=r[11],f=r[12],b=r[13],x=r[14],P=r[15];if(n[0].setComponents(l-o,m-c,h-g,P-f).normalize(),n[1].setComponents(l+o,m+c,h+g,P+f).normalize(),n[2].setComponents(l+s,m+d,h+u,P+b).normalize(),n[3].setComponents(l-s,m-d,h-u,P-b).normalize(),n[4].setComponents(l-a,m-p,h-v,P-x).normalize(),t===Ot)n[5].setComponents(l+a,m+p,h+v,P+x).normalize();else if(t===ki)n[5].setComponents(a,p,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(e){return qi.center.set(0,0,0),qi.radius=.7071067811865476,qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Nr.x=r.normal.x>0?e.max.x:e.min.x,Nr.y=r.normal.y>0?e.max.y:e.min.y,Nr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Nr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var $e=class i{constructor(e,t,n,r,o,s,a,l,c,d,p,m,g,u,v,h){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c,d,p,m,g,u,v,h)}set(e,t,n,r,o,s,a,l,c,d,p,m,g,u,v,h){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=o,f[5]=s,f[9]=a,f[13]=l,f[2]=c,f[6]=d,f[10]=p,f[14]=m,f[3]=g,f[7]=u,f[11]=v,f[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/dn.setFromMatrixColumn(e,0).length(),o=1/dn.setFromMatrixColumn(e,1).length(),s=1/dn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,o=e.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),d=Math.cos(o),p=Math.sin(o);if(e.order==="XYZ"){let m=s*d,g=s*p,u=a*d,v=a*p;t[0]=l*d,t[4]=-l*p,t[8]=c,t[1]=g+u*c,t[5]=m-v*c,t[9]=-a*l,t[2]=v-m*c,t[6]=u+g*c,t[10]=s*l}else if(e.order==="YXZ"){let m=l*d,g=l*p,u=c*d,v=c*p;t[0]=m+v*a,t[4]=u*a-g,t[8]=s*c,t[1]=s*p,t[5]=s*d,t[9]=-a,t[2]=g*a-u,t[6]=v+m*a,t[10]=s*l}else if(e.order==="ZXY"){let m=l*d,g=l*p,u=c*d,v=c*p;t[0]=m-v*a,t[4]=-s*p,t[8]=u+g*a,t[1]=g+u*a,t[5]=s*d,t[9]=v-m*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){let m=s*d,g=s*p,u=a*d,v=a*p;t[0]=l*d,t[4]=u*c-g,t[8]=m*c+v,t[1]=l*p,t[5]=v*c+m,t[9]=g*c-u,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){let m=s*l,g=s*c,u=a*l,v=a*c;t[0]=l*d,t[4]=v-m*p,t[8]=u*p+g,t[1]=p,t[5]=s*d,t[9]=-a*d,t[2]=-c*d,t[6]=g*p+u,t[10]=m-v*p}else if(e.order==="XZY"){let m=s*l,g=s*c,u=a*l,v=a*c;t[0]=l*d,t[4]=-p,t[8]=c*d,t[1]=m*p+v,t[5]=s*d,t[9]=g*p-u,t[2]=u*p-g,t[6]=a*d,t[10]=v*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vh,e,xh)}lookAt(e,t,n){let r=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),Ui.crossVectors(n,Wt),Ui.lengthSq()===0&&(Math.abs(n.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),Ui.crossVectors(n,Wt)),Ui.normalize(),Or.crossVectors(Wt,Ui),r[0]=Ui.x,r[4]=Or.x,r[8]=Wt.x,r[1]=Ui.y,r[5]=Or.y,r[9]=Wt.y,r[2]=Ui.z,r[6]=Or.z,r[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],d=n[1],p=n[5],m=n[9],g=n[13],u=n[2],v=n[6],h=n[10],f=n[14],b=n[3],x=n[7],P=n[11],N=n[15],R=r[0],w=r[4],K=r[8],M=r[12],T=r[1],U=r[5],q=r[9],ee=r[13],L=r[2],G=r[6],X=r[10],k=r[14],W=r[3],Q=r[7],ie=r[11],oe=r[15];return o[0]=s*R+a*T+l*L+c*W,o[4]=s*w+a*U+l*G+c*Q,o[8]=s*K+a*q+l*X+c*ie,o[12]=s*M+a*ee+l*k+c*oe,o[1]=d*R+p*T+m*L+g*W,o[5]=d*w+p*U+m*G+g*Q,o[9]=d*K+p*q+m*X+g*ie,o[13]=d*M+p*ee+m*k+g*oe,o[2]=u*R+v*T+h*L+f*W,o[6]=u*w+v*U+h*G+f*Q,o[10]=u*K+v*q+h*X+f*ie,o[14]=u*M+v*ee+h*k+f*oe,o[3]=b*R+x*T+P*L+N*W,o[7]=b*w+x*U+P*G+N*Q,o[11]=b*K+x*q+P*X+N*ie,o[15]=b*M+x*ee+P*k+N*oe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],d=e[2],p=e[6],m=e[10],g=e[14],u=e[3],v=e[7],h=e[11],f=e[15];return u*(+o*l*p-r*c*p-o*a*m+n*c*m+r*a*g-n*l*g)+v*(+t*l*g-t*c*m+o*s*m-r*s*g+r*c*d-o*l*d)+h*(+t*c*p-t*a*g-o*s*p+n*s*g+o*a*d-n*c*d)+f*(-r*a*d-t*l*p+t*a*m+r*s*p-n*s*m+n*l*d)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],d=e[8],p=e[9],m=e[10],g=e[11],u=e[12],v=e[13],h=e[14],f=e[15],b=p*h*c-v*m*c+v*l*g-a*h*g-p*l*f+a*m*f,x=u*m*c-d*h*c-u*l*g+s*h*g+d*l*f-s*m*f,P=d*v*c-u*p*c+u*a*g-s*v*g-d*a*f+s*p*f,N=u*p*l-d*v*l-u*a*m+s*v*m+d*a*h-s*p*h,R=t*b+n*x+r*P+o*N;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/R;return e[0]=b*w,e[1]=(v*m*o-p*h*o-v*r*g+n*h*g+p*r*f-n*m*f)*w,e[2]=(a*h*o-v*l*o+v*r*c-n*h*c-a*r*f+n*l*f)*w,e[3]=(p*l*o-a*m*o-p*r*c+n*m*c+a*r*g-n*l*g)*w,e[4]=x*w,e[5]=(d*h*o-u*m*o+u*r*g-t*h*g-d*r*f+t*m*f)*w,e[6]=(u*l*o-s*h*o-u*r*c+t*h*c+s*r*f-t*l*f)*w,e[7]=(s*m*o-d*l*o+d*r*c-t*m*c-s*r*g+t*l*g)*w,e[8]=P*w,e[9]=(u*p*o-d*v*o-u*n*g+t*v*g+d*n*f-t*p*f)*w,e[10]=(s*v*o-u*a*o+u*n*c-t*v*c-s*n*f+t*a*f)*w,e[11]=(d*a*o-s*p*o-d*n*c+t*p*c+s*n*g-t*a*g)*w,e[12]=N*w,e[13]=(d*v*r-u*p*r+u*n*m-t*v*m-d*n*h+t*p*h)*w,e[14]=(u*a*r-s*v*r-u*n*l+t*v*l+s*n*h-t*a*h)*w,e[15]=(s*p*r-d*a*r+d*n*l-t*p*l-s*n*m+t*a*m)*w,this}scale(e){let t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),o=1-n,s=e.x,a=e.y,l=e.z,c=o*s,d=o*a;return this.set(c*s+n,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+n,d*l-r*s,0,c*l-r*a,d*l+r*s,o*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,s){return this.set(1,n,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,o=t._x,s=t._y,a=t._z,l=t._w,c=o+o,d=s+s,p=a+a,m=o*c,g=o*d,u=o*p,v=s*d,h=s*p,f=a*p,b=l*c,x=l*d,P=l*p,N=n.x,R=n.y,w=n.z;return r[0]=(1-(v+f))*N,r[1]=(g+P)*N,r[2]=(u-x)*N,r[3]=0,r[4]=(g-P)*R,r[5]=(1-(m+f))*R,r[6]=(h+b)*R,r[7]=0,r[8]=(u+x)*w,r[9]=(h-b)*w,r[10]=(1-(m+v))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,o=dn.set(r[0],r[1],r[2]).length(),s=dn.set(r[4],r[5],r[6]).length(),a=dn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],si.copy(this);let c=1/o,d=1/s,p=1/a;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=d,si.elements[5]*=d,si.elements[6]*=d,si.elements[8]*=p,si.elements[9]*=p,si.elements[10]*=p,t.setFromRotationMatrix(si),n.x=o,n.y=s,n.z=a,this}makePerspective(e,t,n,r,o,s,a=Ot){let l=this.elements,c=2*o/(t-e),d=2*o/(n-r),p=(t+e)/(t-e),m=(n+r)/(n-r),g,u;if(a===Ot)g=-(s+o)/(s-o),u=-2*s*o/(s-o);else if(a===ki)g=-s/(s-o),u=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=u,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,o,s,a=Ot){let l=this.elements,c=1/(t-e),d=1/(n-r),p=1/(s-o),m=(t+e)*c,g=(n+r)*d,u,v;if(a===Ot)u=(s+o)*p,v=-2*p;else if(a===ki)u=o*p,v=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=v,l[14]=-u,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},dn=new H,si=new $e,vh=new H(0,0,0),xh=new H(1,1,1),Ui=new H,Or=new H,Wt=new H;var He=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*n-s*r+e.x,this.y=o*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};var rt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o,l=e.elements,c=l[0],d=l[4],p=l[8],m=l[1],g=l[5],u=l[9],v=l[2],h=l[6],f=l[10];if(Math.abs(d-m)<.01&&Math.abs(p-v)<.01&&Math.abs(u-h)<.01){if(Math.abs(d+m)<.1&&Math.abs(p+v)<.1&&Math.abs(u+h)<.1&&Math.abs(c+g+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,P=(g+1)/2,N=(f+1)/2,R=(d+m)/4,w=(p+v)/4,K=(u+h)/4;return x>P&&x>N?x<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(x),r=R/n,o=w/n):P>N?P<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(P),n=R/r,o=K/r):N<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(N),n=w/o,r=K/o),this.set(n,r,o,t),this}let b=Math.sqrt((h-u)*(h-u)+(p-v)*(p-v)+(m-d)*(m-d));return Math.abs(b)<.001&&(b=1),this.x=(h-u)/b,this.y=(p-v)/b,this.z=(m-d)/b,this.w=Math.acos((c+g+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};function Br(){let i=null,e=!1,t=null,n=null;function r(o,s){t(o,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function tl(i,e){let t=e.isWebGL2,n=new WeakMap;function r(c,d){let p=c.array,m=c.usage,g=p.byteLength,u=i.createBuffer();i.bindBuffer(d,u),i.bufferData(d,p,m),c.onUploadCallback();let v;if(p instanceof Float32Array)v=i.FLOAT;else if(p instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)v=i.SHORT;else if(p instanceof Uint32Array)v=i.UNSIGNED_INT;else if(p instanceof Int32Array)v=i.INT;else if(p instanceof Int8Array)v=i.BYTE;else if(p instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:u,type:v,bytesPerElement:p.BYTES_PER_ELEMENT,version:c.version,size:g}}function o(c,d,p){let m=d.array,g=d._updateRange,u=d.updateRanges;if(i.bindBuffer(p,c),g.count===-1&&u.length===0&&i.bufferSubData(p,0,m),u.length!==0){for(let v=0,h=u.length;v<h;v++){let f=u[v];t?i.bufferSubData(p,f.start*m.BYTES_PER_ELEMENT,m,f.start,f.count):i.bufferSubData(p,f.start*m.BYTES_PER_ELEMENT,m.subarray(f.start,f.start+f.count))}d.clearUpdateRanges()}g.count!==-1&&(t?i.bufferSubData(p,g.offset*m.BYTES_PER_ELEMENT,m,g.offset,g.count):i.bufferSubData(p,g.offset*m.BYTES_PER_ELEMENT,m.subarray(g.offset,g.offset+g.count)),g.count=-1),d.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let d=n.get(c);d&&(i.deleteBuffer(d.buffer),n.delete(c))}function l(c,d){if(c.isGLBufferAttribute){let m=n.get(c);(!m||m.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let p=n.get(c);if(p===void 0)n.set(c,r(c,d));else if(p.version<c.version){if(p.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(p.buffer,c,d),p.version=c.version}}return{get:s,remove:a,update:l}}var Bt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}};var ut=new H,Gr=new He,Be=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ca,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=kt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gr.fromBufferAttribute(this,t),Gr.applyMatrix3(e),this.setXY(t,Gr.x,Gr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),r=Nt(r,this.array),o=Nt(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ca&&(e.usage=this.usage),e}};var pn=class extends Be{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var mn=class extends Be{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Kt=class extends Be{constructor(e,t,n){super(new Float32Array(e),t,n)}};var il=new $e,nl=new pi,tr=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],d=r[9],p=r[2],m=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,o),this._z=0);break;case"ZXY":this._x=Math.asin(dt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-dt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,o)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-dt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return il.makeRotationFromQuaternion(e),this.setFromRotationMatrix(il,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nl.setFromEuler(this),this.setFromQuaternion(nl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};tr.DEFAULT_ORDER="XYZ";var gn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};var Mh=0,rl=new H,_n=new pi,Ei=new $e,zr=new H,ir=new H,Sh=new H,yh=new pi,ol=new H(1,0,0),al=new H(0,1,0),sl=new H(0,0,1),Eh={type:"added"},bh={type:"removed"},pt=class i extends Bt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new H,t=new tr,n=new pi,r=new H(1,1,1);function o(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new $e},normalMatrix:{value:new Pe}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _n.setFromAxisAngle(e,t),this.quaternion.multiply(_n),this}rotateOnWorldAxis(e,t){return _n.setFromAxisAngle(e,t),this.quaternion.premultiply(_n),this}rotateX(e){return this.rotateOnAxis(ol,e)}rotateY(e){return this.rotateOnAxis(al,e)}rotateZ(e){return this.rotateOnAxis(sl,e)}translateOnAxis(e,t){return rl.copy(e).applyQuaternion(this.quaternion),this.position.add(rl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ol,e)}translateY(e){return this.translateOnAxis(al,e)}translateZ(e){return this.translateOnAxis(sl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zr.copy(e):zr.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(ir,zr,this.up):Ei.lookAt(zr,ir,this.up),this.quaternion.setFromRotationMatrix(Ei),r&&(Ei.extractRotation(r.matrixWorld),_n.setFromRotationMatrix(Ei),this.quaternion.premultiply(_n.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Eh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bh)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,e,Sh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,yh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++){let o=t[n];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let r=this.children;for(let o=0,s=r.length;o<s;o++){let a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let p=l[c];o(e.shapes,p)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(o(e.animations,l))}}if(t){let a=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),p=s(e.shapes),m=s(e.skeletons),g=s(e.animations),u=s(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),g.length>0&&(n.animations=g),u.length>0&&(n.nodes=u)}return n.object=r,n;function s(a){let l=[];for(let c in a){let d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};pt.DEFAULT_UP=new H(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;function Hr(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function vn(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cl(){let i=vn("canvas");return i.style.display="block",i}var ll={};function Fi(i){i in ll||(ll[i]=!0,console.warn(i))}var Th=0,Jt=new $e,va=new pt,xn=new H,Xt=new yi,nr=new yi,yt=new H,ft=class i extends Bt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hr(e)?mn:pn)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let o=new Pe().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return va.lookAt(e),va.updateMatrix(),this.applyMatrix4(va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xn).negate(),this.translate(xn.x,xn.y,xn.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let o=e[n];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Kt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let o=t[n];Xt.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){let n=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){let a=t[o];nr.setFromBufferAttribute(a),this.morphTargetsRelative?(yt.addVectors(Xt.min,nr.min),Xt.expandByPoint(yt),yt.addVectors(Xt.max,nr.max),Xt.expandByPoint(yt)):(Xt.expandByPoint(nr.min),Xt.expandByPoint(nr.max))}Xt.getCenter(n);let r=0;for(let o=0,s=e.count;o<s;o++)yt.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared(yt));if(t)for(let o=0,s=t.length;o<s;o++){let a=t[o],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)yt.fromBufferAttribute(a,c),l&&(xn.fromBufferAttribute(e,c),yt.add(xn)),r=Math.max(r,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,r=t.position.array,o=t.normal.array,s=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Be(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],d=[];for(let T=0;T<a;T++)c[T]=new H,d[T]=new H;let p=new H,m=new H,g=new H,u=new He,v=new He,h=new He,f=new H,b=new H;function x(T,U,q){p.fromArray(r,T*3),m.fromArray(r,U*3),g.fromArray(r,q*3),u.fromArray(s,T*2),v.fromArray(s,U*2),h.fromArray(s,q*2),m.sub(p),g.sub(p),v.sub(u),h.sub(u);let ee=1/(v.x*h.y-h.x*v.y);isFinite(ee)&&(f.copy(m).multiplyScalar(h.y).addScaledVector(g,-v.y).multiplyScalar(ee),b.copy(g).multiplyScalar(v.x).addScaledVector(m,-h.x).multiplyScalar(ee),c[T].add(f),c[U].add(f),c[q].add(f),d[T].add(b),d[U].add(b),d[q].add(b))}let P=this.groups;P.length===0&&(P=[{start:0,count:n.length}]);for(let T=0,U=P.length;T<U;++T){let q=P[T],ee=q.start,L=q.count;for(let G=ee,X=ee+L;G<X;G+=3)x(n[G+0],n[G+1],n[G+2])}let N=new H,R=new H,w=new H,K=new H;function M(T){w.fromArray(o,T*3),K.copy(w);let U=c[T];N.copy(U),N.sub(w.multiplyScalar(w.dot(U))).normalize(),R.crossVectors(K,U);let ee=R.dot(d[T])<0?-1:1;l[T*4]=N.x,l[T*4+1]=N.y,l[T*4+2]=N.z,l[T*4+3]=ee}for(let T=0,U=P.length;T<U;++T){let q=P[T],ee=q.start,L=q.count;for(let G=ee,X=ee+L;G<X;G+=3)M(n[G+0]),M(n[G+1]),M(n[G+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Be(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,g=n.count;m<g;m++)n.setXYZ(m,0,0,0);let r=new H,o=new H,s=new H,a=new H,l=new H,c=new H,d=new H,p=new H;if(e)for(let m=0,g=e.count;m<g;m+=3){let u=e.getX(m+0),v=e.getX(m+1),h=e.getX(m+2);r.fromBufferAttribute(t,u),o.fromBufferAttribute(t,v),s.fromBufferAttribute(t,h),d.subVectors(s,o),p.subVectors(r,o),d.cross(p),a.fromBufferAttribute(n,u),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,h),a.add(d),l.add(d),c.add(d),n.setXYZ(u,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(h,c.x,c.y,c.z)}else for(let m=0,g=t.count;m<g;m+=3)r.fromBufferAttribute(t,m+0),o.fromBufferAttribute(t,m+1),s.fromBufferAttribute(t,m+2),d.subVectors(s,o),p.subVectors(r,o),d.cross(p),n.setXYZ(m+0,d.x,d.y,d.z),n.setXYZ(m+1,d.x,d.y,d.z),n.setXYZ(m+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(a,l){let c=a.array,d=a.itemSize,p=a.normalized,m=new c.constructor(l.length*d),g=0,u=0;for(let v=0,h=l.length;v<h;v++){a.isInterleavedBufferAttribute?g=l[v]*a.data.stride+a.offset:g=l[v]*d;for(let f=0;f<d;f++)m[u++]=c[g++]}return new Be(m,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let o=this.morphAttributes;for(let a in o){let l=[],c=o[a];for(let d=0,p=c.length;d<p;d++){let m=c[d],g=e(m,n);l.push(g)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let a=0,l=s.length;a<l;a++){let c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},o=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let p=0,m=c.length;p<m;p++){let g=c[p];d.push(g.toJSON(e.data))}d.length>0&&(r[l]=d,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let c in r){let d=r[c];this.setAttribute(c,d.clone(t))}let o=e.morphAttributes;for(let c in o){let d=[],p=o[c];for(let m=0,g=p.length;m<g;m++)d.push(p[m].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let c=0,d=s.length;c<d;c++){let p=s[c];this.addGroup(p.start,p.count,p.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ii=class i extends ft{constructor(e=1,t=1,n=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:s};let a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);let l=[],c=[],d=[],p=[],m=0,g=0;u("z","y","x",-1,-1,n,t,e,s,o,0),u("z","y","x",1,-1,n,t,-e,s,o,1),u("x","z","y",1,1,e,n,t,r,s,2),u("x","z","y",1,-1,e,n,-t,r,s,3),u("x","y","z",1,-1,e,t,n,r,o,4),u("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(p,2));function u(v,h,f,b,x,P,N,R,w,K,M){let T=P/w,U=N/K,q=P/2,ee=N/2,L=R/2,G=w+1,X=K+1,k=0,W=0,Q=new H;for(let ie=0;ie<X;ie++){let oe=ie*U-ee;for(let ue=0;ue<G;ue++){let D=ue*T-q;Q[v]=D*b,Q[h]=oe*x,Q[f]=L,c.push(Q.x,Q.y,Q.z),Q[v]=0,Q[h]=0,Q[f]=R>0?1:-1,d.push(Q.x,Q.y,Q.z),p.push(ue/w),p.push(1-ie/K),k+=1}}for(let ie=0;ie<K;ie++)for(let oe=0;oe<w;oe++){let ue=m+oe+G*ie,D=m+oe+G*(ie+1),C=m+(oe+1)+G*(ie+1),B=m+(oe+1)+G*ie;l.push(ue,D,B),l.push(D,C,B),W+=6}a.addGroup(g,W,M),g+=W,m+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Vr=class i extends ft{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let o=e/2,s=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,d=l+1,p=e/a,m=t/l,g=[],u=[],v=[],h=[];for(let f=0;f<d;f++){let b=f*m-s;for(let x=0;x<c;x++){let P=x*p-o;u.push(P,-b,0),v.push(0,0,1),h.push(x/a),h.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<a;b++){let x=b+c*f,P=b+c*(f+1),N=b+1+c*(f+1),R=b+1+c*f;g.push(x,P,R),g.push(P,N,R)}this.setIndex(g),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(v,3)),this.setAttribute("uv",new Kt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ah=0,Qt=class extends Bt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=hi(),this.name="",this.type="Material",this.blending=_i,this.side=zt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xn,this.blendDst=zi,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=tn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=la,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vi,this.stencilZFail=Vi,this.stencilZPass=Vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_i&&(n.blending=this.blending),this.side!==zt&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xn&&(n.blendSrc=this.blendSrc),this.blendDst!==zi&&(n.blendDst=this.blendDst),this.blendEquation!==vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==tn&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==la&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){let s=[];for(let a in o){let l=o[a];delete l.metadata,s.push(l)}return s}if(t){let o=r(e.textures),s=r(e.images);o.length>0&&(n.textures=o),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};function bi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Dt(i){let e={};for(let t=0;t<i.length;t++){let n=bi(i[t]);for(let r in n)e[r]=n[r]}return e}function ul(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function kr(i){return i.getRenderTarget()===null?i.outputColorSpace:We.workingColorSpace}var fl={clone:bi,merge:Dt};var hl=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;var dl=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;var st=class extends Qt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hl,this.fragmentShader=dl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bi(e.uniforms),this.uniformsGroups=ul(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}};var Ti=new H,xa=new H,Wr=new H,Ni=new H,Ma=new H,Xr=new H,Sa=new H,Mn=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){xa.copy(e).add(t).multiplyScalar(.5),Wr.copy(t).sub(e).normalize(),Ni.copy(this.origin).sub(xa);let o=e.distanceTo(t)*.5,s=-this.direction.dot(Wr),a=Ni.dot(this.direction),l=-Ni.dot(Wr),c=Ni.lengthSq(),d=Math.abs(1-s*s),p,m,g,u;if(d>0)if(p=s*l-a,m=s*a-l,u=o*d,p>=0)if(m>=-u)if(m<=u){let v=1/d;p*=v,m*=v,g=p*(p+s*m+2*a)+m*(s*p+m+2*l)+c}else m=o,p=Math.max(0,-(s*m+a)),g=-p*p+m*(m+2*l)+c;else m=-o,p=Math.max(0,-(s*m+a)),g=-p*p+m*(m+2*l)+c;else m<=-u?(p=Math.max(0,-(-s*o+a)),m=p>0?-o:Math.min(Math.max(-o,-l),o),g=-p*p+m*(m+2*l)+c):m<=u?(p=0,m=Math.min(Math.max(-o,-l),o),g=m*(m+2*l)+c):(p=Math.max(0,-(s*o+a)),m=p>0?o:Math.min(Math.max(-o,-l),o),g=-p*p+m*(m+2*l)+c);else m=s>0?-o:o,p=Math.max(0,-(s*m+a)),g=-p*p+m*(m+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(xa).addScaledVector(Wr,m),g}intersectSphere(e,t){Ti.subVectors(e.center,this.origin);let n=Ti.dot(this.direction),r=Ti.dot(Ti)-n*n,o=e.radius*e.radius;if(r>o)return null;let s=Math.sqrt(o-r),a=n-s,l=n+s;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,s,a,l,c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,m=this.origin;return c>=0?(n=(e.min.x-m.x)*c,r=(e.max.x-m.x)*c):(n=(e.max.x-m.x)*c,r=(e.min.x-m.x)*c),d>=0?(o=(e.min.y-m.y)*d,s=(e.max.y-m.y)*d):(o=(e.max.y-m.y)*d,s=(e.min.y-m.y)*d),n>s||o>r||((o>n||isNaN(n))&&(n=o),(s<r||isNaN(r))&&(r=s),p>=0?(a=(e.min.z-m.z)*p,l=(e.max.z-m.z)*p):(a=(e.max.z-m.z)*p,l=(e.min.z-m.z)*p),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,n,r,o){Ma.subVectors(t,e),Xr.subVectors(n,e),Sa.crossVectors(Ma,Xr);let s=this.direction.dot(Sa),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Ni.subVectors(this.origin,e);let l=a*this.direction.dot(Xr.crossVectors(Ni,Xr));if(l<0)return null;let c=a*this.direction.dot(Ma.cross(Ni));if(c<0||l+c>s)return null;let d=-a*Ni.dot(Sa);return d<0?null:this.at(d/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};var li=new H,Ai=new H,ya=new H,wi=new H,Sn=new H,yn=new H,pl=new H,Ea=new H,ba=new H,Ta=new H,qr=!1,Yi=class i{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),li.subVectors(e,t),r.cross(li);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){li.subVectors(r,t),Ai.subVectors(n,t),ya.subVectors(e,t);let s=li.dot(li),a=li.dot(Ai),l=li.dot(ya),c=Ai.dot(Ai),d=Ai.dot(ya),p=s*c-a*a;if(p===0)return o.set(0,0,0),null;let m=1/p,g=(c*l-a*d)*m,u=(s*d-a*l)*m;return o.set(1-g-u,u,g)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getUV(e,t,n,r,o,s,a,l){return qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qr=!0),this.getInterpolation(e,t,n,r,o,s,a,l)}static getInterpolation(e,t,n,r,o,s,a,l){return this.getBarycoord(e,t,n,r,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,wi.x),l.addScaledVector(s,wi.y),l.addScaledVector(a,wi.z),l)}static isFrontFacing(e,t,n,r){return li.subVectors(n,t),Ai.subVectors(e,t),li.cross(Ai).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),li.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,o){return qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qr=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}getInterpolation(e,t,n,r,o){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,o=this.c,s,a;Sn.subVectors(r,n),yn.subVectors(o,n),Ea.subVectors(e,n);let l=Sn.dot(Ea),c=yn.dot(Ea);if(l<=0&&c<=0)return t.copy(n);ba.subVectors(e,r);let d=Sn.dot(ba),p=yn.dot(ba);if(d>=0&&p<=d)return t.copy(r);let m=l*p-d*c;if(m<=0&&l>=0&&d<=0)return s=l/(l-d),t.copy(n).addScaledVector(Sn,s);Ta.subVectors(e,o);let g=Sn.dot(Ta),u=yn.dot(Ta);if(u>=0&&g<=u)return t.copy(o);let v=g*c-l*u;if(v<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(yn,a);let h=d*u-g*p;if(h<=0&&p-d>=0&&g-u>=0)return pl.subVectors(o,r),a=(p-d)/(p-d+(g-u)),t.copy(r).addScaledVector(pl,a);let f=1/(h+v+m);return s=v*f,a=m*f,t.copy(n).addScaledVector(Sn,s).addScaledVector(yn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};var En=class extends Qt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var ml=new $e,Zi=new Mn,Yr=new mi,gl=new H,bn=new H,Tn=new H,An=new H,Aa=new H,Zr=new H,jr=new He,Kr=new He,Jr=new He,_l=new H,vl=new H,xl=new H,Qr=new H,$r=new H,Et=class extends pt{constructor(e=new ft,t=new En){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(o&&a){Zr.set(0,0,0);for(let l=0,c=o.length;l<c;l++){let d=a[l],p=o[l];d!==0&&(Aa.fromBufferAttribute(p,e),s?Zr.addScaledVector(Aa,d):Zr.addScaledVector(Aa.sub(t),d))}t.add(Zr)}return t}raycast(e,t){let n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(o),Zi.copy(e.ray).recast(e.near),!(Yr.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(Yr,gl)===null||Zi.origin.distanceToSquared(gl)>(e.far-e.near)**2))&&(ml.copy(o).invert(),Zi.copy(e.ray).applyMatrix4(ml),!(n.boundingBox!==null&&Zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Zi)))}_computeIntersections(e,t,n){let r,o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,d=o.attributes.uv1,p=o.attributes.normal,m=o.groups,g=o.drawRange;if(a!==null)if(Array.isArray(s))for(let u=0,v=m.length;u<v;u++){let h=m[u],f=s[h.materialIndex],b=Math.max(h.start,g.start),x=Math.min(a.count,Math.min(h.start+h.count,g.start+g.count));for(let P=b,N=x;P<N;P+=3){let R=a.getX(P),w=a.getX(P+1),K=a.getX(P+2);r=eo(this,f,e,n,c,d,p,R,w,K),r&&(r.faceIndex=Math.floor(P/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{let u=Math.max(0,g.start),v=Math.min(a.count,g.start+g.count);for(let h=u,f=v;h<f;h+=3){let b=a.getX(h),x=a.getX(h+1),P=a.getX(h+2);r=eo(this,s,e,n,c,d,p,b,x,P),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let u=0,v=m.length;u<v;u++){let h=m[u],f=s[h.materialIndex],b=Math.max(h.start,g.start),x=Math.min(l.count,Math.min(h.start+h.count,g.start+g.count));for(let P=b,N=x;P<N;P+=3){let R=P,w=P+1,K=P+2;r=eo(this,f,e,n,c,d,p,R,w,K),r&&(r.faceIndex=Math.floor(P/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{let u=Math.max(0,g.start),v=Math.min(l.count,g.start+g.count);for(let h=u,f=v;h<f;h+=3){let b=h,x=h+1,P=h+2;r=eo(this,s,e,n,c,d,p,b,x,P),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}}};function wh(i,e,t,n,r,o,s,a){let l;if(e.side===it?l=n.intersectTriangle(s,o,r,!0,a):l=n.intersectTriangle(r,o,s,e.side===zt,a),l===null)return null;$r.copy(a),$r.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo($r);return c<t.near||c>t.far?null:{distance:c,point:$r.clone(),object:i}}function eo(i,e,t,n,r,o,s,a,l,c){i.getVertexPosition(a,bn),i.getVertexPosition(l,Tn),i.getVertexPosition(c,An);let d=wh(i,e,t,n,bn,Tn,An,Qr);if(d){r&&(jr.fromBufferAttribute(r,a),Kr.fromBufferAttribute(r,l),Jr.fromBufferAttribute(r,c),d.uv=Yi.getInterpolation(Qr,bn,Tn,An,jr,Kr,Jr,new He)),o&&(jr.fromBufferAttribute(o,a),Kr.fromBufferAttribute(o,l),Jr.fromBufferAttribute(o,c),d.uv1=Yi.getInterpolation(Qr,bn,Tn,An,jr,Kr,Jr,new He),d.uv2=d.uv1),s&&(_l.fromBufferAttribute(s,a),vl.fromBufferAttribute(s,l),xl.fromBufferAttribute(s,c),d.normal=Yi.getInterpolation(Qr,bn,Tn,An,_l,vl,xl,new H),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let p={a,b:l,c,normal:new H,materialIndex:0};Yi.getNormal(bn,Tn,An,p.normal),d.face=p}return d}var Ml=`
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
`;var yl=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

#endif
`;var El=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`;var bl=`
#ifdef USE_ALPHATEST

	if ( diffuseColor.a < alphaTest ) discard;

#endif
`;var Tl=`
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
`;var Pl=`
vec3 transformed = vec3( position );

#ifdef USE_ALPHAHASH

	vPosition = vec3( position );

#endif
`;var Ll=`
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

`;var Fl=`
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
`;var Il=`
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
`;var Nl=`
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
`;var Zl=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`;var jl=`
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
`;var Ql=`
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
`;var $l=`
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
`;var vc=`
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
`;var xc=`

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
`;var yc=`
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif
`;var Ec=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`;var bc=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;var Tc=`
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
`;var Pc=`
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
`;var Lc=`
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
`;var Fc=`
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
`;var Ic=`
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
`;var Nc=`
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
`;var Zc=`
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
`;var jc=`
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
`;var Qc=`
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
`;var $c=`
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
`;var vu=`
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
`;var xu=`
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
`,yu=`

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
`;var Eu=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,bu=`
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
`;var Tu=`
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
`,Pu=`
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
`;var Lu=`
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
`,Fu=`
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
`;var Iu=`
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
`,Nu=`
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
`,Zu=`
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
`;var ju=`
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
`,Qu=`
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
`;var Ie={alphahash_fragment:Ml,alphahash_pars_fragment:Sl,alphamap_fragment:yl,alphamap_pars_fragment:El,alphatest_fragment:bl,alphatest_pars_fragment:Tl,aomap_fragment:Al,aomap_pars_fragment:wl,batching_pars_vertex:Rl,batching_vertex:Cl,begin_vertex:Pl,beginnormal_vertex:Ll,bsdfs:Dl,iridescence_fragment:Ul,bumpmap_pars_fragment:Fl,clipping_planes_fragment:Il,clipping_planes_pars_fragment:Nl,clipping_planes_pars_vertex:Ol,clipping_planes_vertex:Bl,color_fragment:Gl,color_pars_fragment:zl,color_pars_vertex:Hl,color_vertex:Vl,common:kl,cube_uv_reflection_fragment:Wl,defaultnormal_vertex:Xl,displacementmap_pars_vertex:ql,displacementmap_vertex:Yl,emissivemap_fragment:Zl,emissivemap_pars_fragment:jl,colorspace_fragment:Kl,colorspace_pars_fragment:Jl,envmap_fragment:Ql,envmap_common_pars_fragment:$l,envmap_pars_fragment:ec,envmap_pars_vertex:tc,envmap_physical_pars_fragment:dc,envmap_vertex:ic,fog_vertex:nc,fog_pars_vertex:rc,fog_fragment:oc,fog_pars_fragment:ac,gradientmap_pars_fragment:sc,lightmap_fragment:lc,lightmap_pars_fragment:cc,lights_lambert_fragment:uc,lights_lambert_pars_fragment:fc,lights_pars_begin:hc,lights_toon_fragment:pc,lights_toon_pars_fragment:mc,lights_phong_fragment:gc,lights_phong_pars_fragment:_c,lights_physical_fragment:vc,lights_physical_pars_fragment:xc,lights_fragment_begin:Mc,lights_fragment_maps:Sc,lights_fragment_end:yc,logdepthbuf_fragment:Ec,logdepthbuf_pars_fragment:bc,logdepthbuf_pars_vertex:Tc,logdepthbuf_vertex:Ac,map_fragment:wc,map_pars_fragment:Rc,map_particle_fragment:Cc,map_particle_pars_fragment:Pc,metalnessmap_fragment:Lc,metalnessmap_pars_fragment:Dc,morphcolor_vertex:Uc,morphnormal_vertex:Fc,morphtarget_pars_vertex:Ic,morphtarget_vertex:Nc,normal_fragment_begin:Oc,normal_fragment_maps:Bc,normal_pars_fragment:Gc,normal_pars_vertex:zc,normal_vertex:Hc,normalmap_pars_fragment:Vc,clearcoat_normal_fragment_begin:kc,clearcoat_normal_fragment_maps:Wc,clearcoat_pars_fragment:Xc,iridescence_pars_fragment:qc,opaque_fragment:Yc,packing:Zc,premultiplied_alpha_fragment:jc,project_vertex:Kc,dithering_fragment:Jc,dithering_pars_fragment:Qc,roughnessmap_fragment:$c,roughnessmap_pars_fragment:eu,shadowmap_pars_fragment:tu,shadowmap_pars_vertex:iu,shadowmap_vertex:nu,shadowmask_pars_fragment:ru,skinbase_vertex:ou,skinning_pars_vertex:au,skinning_vertex:su,skinnormal_vertex:lu,specularmap_fragment:cu,specularmap_pars_fragment:uu,tonemapping_fragment:fu,tonemapping_pars_fragment:hu,transmission_fragment:du,transmission_pars_fragment:pu,uv_pars_fragment:mu,uv_pars_vertex:gu,uv_vertex:_u,worldpos_vertex:vu,background_vert:xu,background_frag:Mu,backgroundCube_vert:Su,backgroundCube_frag:yu,cube_vert:Eu,cube_frag:bu,depth_vert:Tu,depth_frag:Au,distanceRGBA_vert:wu,distanceRGBA_frag:Ru,equirect_vert:Cu,equirect_frag:Pu,linedashed_vert:Lu,linedashed_frag:Du,meshbasic_vert:Uu,meshbasic_frag:Fu,meshlambert_vert:Iu,meshlambert_frag:Nu,meshmatcap_vert:Ou,meshmatcap_frag:Bu,meshnormal_vert:Gu,meshnormal_frag:zu,meshphong_vert:Hu,meshphong_frag:Vu,meshphysical_vert:ku,meshphysical_frag:Wu,meshtoon_vert:Xu,meshtoon_frag:qu,points_vert:Yu,points_frag:Zu,shadow_vert:ju,shadow_frag:Ku,sprite_vert:Ju,sprite_frag:Qu};var me={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}};var $t={basic:{uniforms:Dt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:Dt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:Dt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:Dt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:Dt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:Dt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:Dt([me.points,me.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:Dt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:Dt([me.common,me.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:Dt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:Dt([me.sprite,me.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:Dt([me.common,me.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:Dt([me.lights,me.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};$t.physical={uniforms:Dt([$t.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};var to={r:0,b:0,g:0};function $u(i,e,t,n,r,o,s){let a=new Oe(0),l=o===!0?0:1,c,d,p=null,m=0,g=null;function u(h,f){let b=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?t:e).get(x)),x===null?v(a,l):x&&x.isColor&&(v(x,1),b=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,s):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ri)?(d===void 0&&(d=new Et(new Ii(1,1,1),new st({name:"BackgroundCubeMaterial",uniforms:bi($t.backgroundCube.uniforms),vertexShader:$t.backgroundCube.vertexShader,fragmentShader:$t.backgroundCube.fragmentShader,side:it,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(N,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=x,d.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,d.material.toneMapped=We.getTransfer(x.colorSpace)!==qe,(p!==x||m!==x.version||g!==i.toneMapping)&&(d.material.needsUpdate=!0,p=x,m=x.version,g=i.toneMapping),d.layers.enableAll(),h.unshift(d,d.geometry,d.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Et(new Vr(2,2),new st({name:"BackgroundMaterial",uniforms:bi($t.background.uniforms),vertexShader:$t.background.vertexShader,fragmentShader:$t.background.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=We.getTransfer(x.colorSpace)!==qe,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(p!==x||m!==x.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,p=x,m=x.version,g=i.toneMapping),c.layers.enableAll(),h.unshift(c,c.geometry,c.material,0,0,null))}function v(h,f){h.getRGB(to,kr(i)),n.buffers.color.setClear(to.r,to.g,to.b,f,s)}return{getClearColor:function(){return a},setClearColor:function(h,f=1){a.set(h),l=f,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(h){l=h,v(a,l)},render:u}}function ef(i,e,t,n){let r=i.getParameter(i.MAX_VERTEX_ATTRIBS),o=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||o!==null,a={},l=h(null),c=l,d=!1;function p(L,G,X,k,W){let Q=!1;if(s){let ie=v(k,X,G);c!==ie&&(c=ie,g(c.object)),Q=f(L,k,X,W),Q&&b(L,k,X,W)}else{let ie=G.wireframe===!0;(c.geometry!==k.id||c.program!==X.id||c.wireframe!==ie)&&(c.geometry=k.id,c.program=X.id,c.wireframe=ie,Q=!0)}W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(Q||d)&&(d=!1,K(L,G,X,k),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function m(){return n.isWebGL2?i.createVertexArray():o.createVertexArrayOES()}function g(L){return n.isWebGL2?i.bindVertexArray(L):o.bindVertexArrayOES(L)}function u(L){return n.isWebGL2?i.deleteVertexArray(L):o.deleteVertexArrayOES(L)}function v(L,G,X){let k=X.wireframe===!0,W=a[L.id];W===void 0&&(W={},a[L.id]=W);let Q=W[G.id];Q===void 0&&(Q={},W[G.id]=Q);let ie=Q[k];return ie===void 0&&(ie=h(m()),Q[k]=ie),ie}function h(L){let G=[],X=[],k=[];for(let W=0;W<r;W++)G[W]=0,X[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:X,attributeDivisors:k,object:L,attributes:{},index:null}}function f(L,G,X,k){let W=c.attributes,Q=G.attributes,ie=0,oe=X.getAttributes();for(let ue in oe)if(oe[ue].location>=0){let C=W[ue],B=Q[ue];if(B===void 0&&(ue==="instanceMatrix"&&L.instanceMatrix&&(B=L.instanceMatrix),ue==="instanceColor"&&L.instanceColor&&(B=L.instanceColor)),C===void 0||C.attribute!==B||B&&C.data!==B.data)return!0;ie++}return c.attributesNum!==ie||c.index!==k}function b(L,G,X,k){let W={},Q=G.attributes,ie=0,oe=X.getAttributes();for(let ue in oe)if(oe[ue].location>=0){let C=Q[ue];C===void 0&&(ue==="instanceMatrix"&&L.instanceMatrix&&(C=L.instanceMatrix),ue==="instanceColor"&&L.instanceColor&&(C=L.instanceColor));let B={};B.attribute=C,C&&C.data&&(B.data=C.data),W[ue]=B,ie++}c.attributes=W,c.attributesNum=ie,c.index=k}function x(){let L=c.newAttributes;for(let G=0,X=L.length;G<X;G++)L[G]=0}function P(L){N(L,0)}function N(L,G){let X=c.newAttributes,k=c.enabledAttributes,W=c.attributeDivisors;X[L]=1,k[L]===0&&(i.enableVertexAttribArray(L),k[L]=1),W[L]!==G&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,G),W[L]=G)}function R(){let L=c.newAttributes,G=c.enabledAttributes;for(let X=0,k=G.length;X<k;X++)G[X]!==L[X]&&(i.disableVertexAttribArray(X),G[X]=0)}function w(L,G,X,k,W,Q,ie){ie===!0?i.vertexAttribIPointer(L,G,X,W,Q):i.vertexAttribPointer(L,G,X,k,W,Q)}function K(L,G,X,k){if(n.isWebGL2===!1&&(L.isInstancedMesh||k.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let W=k.attributes,Q=X.getAttributes(),ie=G.defaultAttributeValues;for(let oe in Q){let ue=Q[oe];if(ue.location>=0){let D=W[oe];if(D===void 0&&(oe==="instanceMatrix"&&L.instanceMatrix&&(D=L.instanceMatrix),oe==="instanceColor"&&L.instanceColor&&(D=L.instanceColor)),D!==void 0){let C=D.normalized,B=D.itemSize,Y=t.get(D);if(Y===void 0)continue;let $=Y.buffer,te=Y.type,ae=Y.bytesPerElement,E=n.isWebGL2===!0&&(te===i.INT||te===i.UNSIGNED_INT||D.gpuType===pr);if(D.isInterleavedBufferAttribute){let F=D.data,A=F.stride,he=D.offset;if(F.isInstancedInterleavedBuffer){for(let V=0;V<ue.locationSize;V++)N(ue.location+V,F.meshPerAttribute);L.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let V=0;V<ue.locationSize;V++)P(ue.location+V);i.bindBuffer(i.ARRAY_BUFFER,$);for(let V=0;V<ue.locationSize;V++)w(ue.location+V,B/ue.locationSize,te,C,A*ae,(he+B/ue.locationSize*V)*ae,E)}else{if(D.isInstancedBufferAttribute){for(let F=0;F<ue.locationSize;F++)N(ue.location+F,D.meshPerAttribute);L.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let F=0;F<ue.locationSize;F++)P(ue.location+F);i.bindBuffer(i.ARRAY_BUFFER,$);for(let F=0;F<ue.locationSize;F++)w(ue.location+F,B/ue.locationSize,te,C,B*ae,B/ue.locationSize*F*ae,E)}}else if(ie!==void 0){let C=ie[oe];if(C!==void 0)switch(C.length){case 2:i.vertexAttrib2fv(ue.location,C);break;case 3:i.vertexAttrib3fv(ue.location,C);break;case 4:i.vertexAttrib4fv(ue.location,C);break;default:i.vertexAttrib1fv(ue.location,C)}}}}R()}function M(){q();for(let L in a){let G=a[L];for(let X in G){let k=G[X];for(let W in k)u(k[W].object),delete k[W];delete G[X]}delete a[L]}}function T(L){if(a[L.id]===void 0)return;let G=a[L.id];for(let X in G){let k=G[X];for(let W in k)u(k[W].object),delete k[W];delete G[X]}delete a[L.id]}function U(L){for(let G in a){let X=a[G];if(X[L.id]===void 0)continue;let k=X[L.id];for(let W in k)u(k[W].object),delete k[W];delete X[L.id]}}function q(){ee(),d=!0,c!==l&&(c=l,g(c.object))}function ee(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:q,resetDefaultState:ee,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:U,initAttributes:x,enableAttribute:P,disableUnusedAttributes:R}}function tf(i,e,t,n){let r=n.isWebGL2,o;function s(d){o=d}function a(d,p){i.drawArrays(o,d,p),t.update(p,o,1)}function l(d,p,m){if(m===0)return;let g,u;if(r)g=i,u="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),u="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[u](o,d,p,m),t.update(p,o,m)}function c(d,p,m){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<m;u++)this.render(d[u],p[u]);else{g.multiDrawArraysWEBGL(o,d,0,p,0,m);let u=0;for(let v=0;v<m;v++)u+=p[v];t.update(u,o,1)}}this.setMode=s,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function nf(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=o(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=s||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),u=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),h=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=m>0,P=s||e.has("OES_texture_float"),N=x&&P,R=s?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:u,maxAttributes:v,maxVertexUniforms:h,maxVaryings:f,maxFragmentUniforms:b,vertexTextures:x,floatFragmentTextures:P,floatVertexTextures:N,maxSamples:R}}function rf(i){let e=this,t=null,n=0,r=!1,o=!1,s=new ai,a=new Pe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){let g=p.length!==0||m||n!==0||r;return r=m,n=p.length,g},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(p,m){t=d(p,m,0)},this.setState=function(p,m,g){let u=p.clippingPlanes,v=p.clipIntersection,h=p.clipShadows,f=i.get(p);if(!r||u===null||u.length===0||o&&!h)o?d(null):c();else{let b=o?0:n,x=b*4,P=f.clippingState||null;l.value=P,P=d(u,m,x,g);for(let N=0;N!==x;++N)P[N]=t[N];f.clippingState=P,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,m,g,u){let v=p!==null?p.length:0,h=null;if(v!==0){if(h=l.value,u!==!0||h===null){let f=g+v*4,b=m.matrixWorldInverse;a.getNormalMatrix(b),(h===null||h.length<f)&&(h=new Float32Array(f));for(let x=0,P=g;x!==v;++x,P+=4)s.copy(p[x]).applyMatrix4(b,a),s.normal.toArray(h,P),h[P+3]=s.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,h}}var wn,Rn=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{wn===void 0&&(wn=vn("canvas")),wn.width=e.width,wn.height=e.height;let n=wn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=wn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=vn("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Ci(o[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ci(t[n]/255)*255):t[n]=Ci(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}};var Xh=0,Cn=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=hi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(wa(r[s].image)):o.push(wa(r[s]))}else o=wa(r);n.url=o}return t||(e.images[this.uuid]=n),n}};function wa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rn.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var qh=0,mt=class i extends Bt{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=It,r=It,o=ct,s=xi,a=ht,l=Ht,c=i.DEFAULT_ANISOTROPY,d=St){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=hi(),this.name="",this.source=new Cn(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Fi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===ri?et:St),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Io)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zn:e.x=e.x-Math.floor(e.x);break;case It:e.x=e.x<0?0:1;break;case jn:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zn:e.y=e.y-Math.floor(e.y);break;case It:e.y=e.y<0?0:1;break;case jn:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Fi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===et?ri:Ar}set encoding(e){Fi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ri?et:St}};mt.DEFAULT_IMAGE=null;mt.DEFAULT_MAPPING=Io;mt.DEFAULT_ANISOTROPY=1;var io=class extends Bt{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);let r={width:e,height:t,depth:1};n.encoding!==void 0&&(Fi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ri?et:St),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ct,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new mt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Cn(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}};var wt=class extends io{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}};var Pn=class extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Ot}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};var Rt=class extends Pn{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Jn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jn*2*Math.atan(Math.tan(Rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Rr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,t-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}let a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Ln=-90,Dn=1,no=class extends pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Rt(Ln,Dn,e,t);r.layers=this.layers,this.add(r);let o=new Rt(Ln,Dn,e,t);o.layers=this.layers,this.add(o);let s=new Rt(Ln,Dn,e,t);s.layers=this.layers,this.add(s);let a=new Rt(Ln,Dn,e,t);a.layers=this.layers,this.add(a);let l=new Rt(Ln,Dn,e,t);l.layers=this.layers,this.add(l);let c=new Rt(Ln,Dn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,o,s,a,l]=t;for(let c of t)this.remove(c);if(e===Ot)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ki)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[o,s,a,l,c,d]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),u=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,o),e.setRenderTarget(n,1,r),e.render(t,s),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,d),e.setRenderTarget(p,m,g),e.xr.enabled=u,n.texture.needsPMREMUpdate=!0}};var Un=class extends mt{constructor(e,t,n,r,o,s,a,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:ii,super(e,t,n,r,o,s,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var ro=class extends wt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Fi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ri?et:St),this.texture=new Un(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ct}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ii(5,5,5),o=new st({name:"CubemapFromEquirect",uniforms:bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:it,blending:Yt});o.uniforms.tEquirect.value=t;let s=new Et(r,o),a=t.minFilter;return t.minFilter===xi&&(t.minFilter=ct),new no(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,r){let o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(o)}};function of(i){let e=new WeakMap;function t(s,a){return a===qn?s.mapping=ii:a===Yn&&(s.mapping=ui),s}function n(s){if(s&&s.isTexture){let a=s.mapping;if(a===qn||a===Yn)if(e.has(s)){let l=e.get(s).texture;return t(l,s.mapping)}else{let l=s.image;if(l&&l.height>0){let c=new ro(l.height/2);return c.fromEquirectangularTexture(i,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){let a=s.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}var ji=class extends Pn{constructor(e=-1,t=1,n=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=n-e,s=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var In=4,af=[.125,.215,.35,.446,.526,.582],Ji=20,Ra=new ji,sf=new Oe,Ca=null,Pa=0,La=0,Ki=(1+Math.sqrt(5))/2,Fn=1/Ki,lf=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,Ki,Fn),new H(0,Ki,-Fn),new H(Fn,0,Ki),new H(-Fn,0,Ki),new H(Ki,Fn,0),new H(-Ki,Fn,0)],rr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ca=this._renderer.getRenderTarget(),Pa=this._renderer.getActiveCubeFace(),La=this._renderer.getActiveMipmapLevel(),this._setSize(256);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ff(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ca,Pa,La),e.scissorTest=!1,oo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ii||e.mapping===ui?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ca=this._renderer.getRenderTarget(),Pa=this._renderer.getActiveCubeFace(),La=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ct,minFilter:ct,generateMipmaps:!1,type:Mi,format:ht,colorSpace:At,depthBuffer:!1},r=cf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cf(e,t,n);let{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yh(o)),this._blurMaterial=Zh(o,e,t)}return r}_compileMaterial(e){let t=new Et(this._lodPlanes[0],e);this._renderer.compile(t,Ra)}_sceneToCubeUV(e,t,n,r){let a=new Rt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,m=d.toneMapping;d.getClearColor(sf),d.toneMapping=Zt,d.autoClear=!1;let g=new En({name:"PMREM.Background",side:it,depthWrite:!1,depthTest:!1}),u=new Et(new Ii,g),v=!1,h=e.background;h?h.isColor&&(g.color.copy(h),e.background=null,v=!0):(g.color.copy(sf),v=!0);for(let f=0;f<6;f++){let b=f%3;b===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):b===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let x=this._cubeSize;oo(r,b*x,f>2?x:0,x,x),d.setRenderTarget(r),v&&d.render(u,a),d.render(e,a)}u.geometry.dispose(),u.material.dispose(),d.toneMapping=m,d.autoClear=p,e.background=h}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===ii||e.mapping===ui;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ff()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uf());let o=r?this._cubemapMaterial:this._equirectMaterial,s=new Et(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;let l=this._cubeSize;oo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,Ra)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=lf[(r-1)%lf.length];this._blur(e,r-1,r,o,s)}t.autoClear=n}_blur(e,t,n,r,o){let s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",o),this._halfBlur(s,e,n,n,r,"longitudinal",o)}_halfBlur(e,t,n,r,o,s,a){let l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let d=3,p=new Et(this._lodPlanes[r],c),m=c.uniforms,g=this._sizeLods[n]-1,u=isFinite(o)?Math.PI/(2*g):2*Math.PI/(2*Ji-1),v=o/u,h=isFinite(o)?1+Math.floor(d*v):Ji;h>Ji&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Ji}`);let f=[],b=0;for(let w=0;w<Ji;++w){let K=w/v,M=Math.exp(-K*K/2);f.push(M),w===0?b+=M:w<h&&(b+=2*M)}for(let w=0;w<f.length;w++)f[w]=f[w]/b;m.envMap.value=e.texture,m.samples.value=h,m.weights.value=f,m.latitudinal.value=s==="latitudinal",a&&(m.poleAxis.value=a);let{_lodMax:x}=this;m.dTheta.value=u,m.mipInt.value=x-n;let P=this._sizeLods[r],N=3*P*(r>x-In?r-x+In:0),R=4*(this._cubeSize-P);oo(t,N,R,3*P,2*P),l.setRenderTarget(t),l.render(p,Ra)}};function Yh(i){let e=[],t=[],n=[],r=i,o=i-In+1+af.length;for(let s=0;s<o;s++){let a=Math.pow(2,r);t.push(a);let l=1/a;s>i-In?l=af[s-i+In-1]:s===0&&(l=0),n.push(l);let c=1/(a-2),d=-c,p=1+c,m=[d,d,p,d,p,p,d,d,p,p,d,p],g=6,u=6,v=3,h=2,f=1,b=new Float32Array(v*u*g),x=new Float32Array(h*u*g),P=new Float32Array(f*u*g);for(let R=0;R<g;R++){let w=R%3*2/3-1,K=R>2?0:-1,M=[w,K,0,w+2/3,K,0,w+2/3,K+1,0,w,K,0,w+2/3,K+1,0,w,K+1,0];b.set(M,v*u*R),x.set(m,h*u*R);let T=[R,R,R,R,R,R];P.set(T,f*u*R)}let N=new ft;N.setAttribute("position",new Be(b,v)),N.setAttribute("uv",new Be(x,h)),N.setAttribute("faceIndex",new Be(P,f)),e.push(N),r>In&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function cf(i,e,t){let n=new wt(i,e,t);return n.texture.mapping=Ri,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oo(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Zh(i,e,t){let n=new Float32Array(Ji),r=new H(0,1,0);return new st({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Da(),fragmentShader:`

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
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function uf(){return new st({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Da(),fragmentShader:`

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
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function ff(){return new st({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function Da(){return`

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
	`}function hf(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===qn||l===Yn,d=l===ii||l===ui;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let p=e.get(a);return t===null&&(t=new rr(i)),p=c?t.fromEquirectangular(a,p):t.fromCubemap(a,p),e.set(a,p),p.texture}else{if(e.has(a))return e.get(a).texture;{let p=a.image;if(c&&p&&p.height>0||d&&p&&r(p)){t===null&&(t=new rr(i));let m=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,m),a.addEventListener("dispose",o),m.texture}else return null}}}return a}function r(a){let l=0,c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function o(a){let l=a.target;l.removeEventListener("dispose",o);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function df(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function pf(i,e,t,n){let r={},o=new WeakMap;function s(p){let m=p.target;m.index!==null&&e.remove(m.index);for(let u in m.attributes)e.remove(m.attributes[u]);for(let u in m.morphAttributes){let v=m.morphAttributes[u];for(let h=0,f=v.length;h<f;h++)e.remove(v[h])}m.removeEventListener("dispose",s),delete r[m.id];let g=o.get(m);g&&(e.remove(g),o.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function a(p,m){return r[m.id]===!0||(m.addEventListener("dispose",s),r[m.id]=!0,t.memory.geometries++),m}function l(p){let m=p.attributes;for(let u in m)e.update(m[u],i.ARRAY_BUFFER);let g=p.morphAttributes;for(let u in g){let v=g[u];for(let h=0,f=v.length;h<f;h++)e.update(v[h],i.ARRAY_BUFFER)}}function c(p){let m=[],g=p.index,u=p.attributes.position,v=0;if(g!==null){let b=g.array;v=g.version;for(let x=0,P=b.length;x<P;x+=3){let N=b[x+0],R=b[x+1],w=b[x+2];m.push(N,R,R,w,w,N)}}else if(u!==void 0){let b=u.array;v=u.version;for(let x=0,P=b.length/3-1;x<P;x+=3){let N=x+0,R=x+1,w=x+2;m.push(N,R,R,w,w,N)}}else return;let h=new(Hr(m)?mn:pn)(m,1);h.version=v;let f=o.get(p);f&&e.remove(f),o.set(p,h)}function d(p){let m=o.get(p);if(m){let g=p.index;g!==null&&m.version<g.version&&c(p)}else c(p);return o.get(p)}return{get:a,update:l,getWireframeAttribute:d}}function mf(i,e,t,n){let r=n.isWebGL2,o;function s(g){o=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function d(g,u){i.drawElements(o,u,a,g*l),t.update(u,o,1)}function p(g,u,v){if(v===0)return;let h,f;if(r)h=i,f="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[f](o,u,a,g*l,v),t.update(u,o,v)}function m(g,u,v){if(v===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let f=0;f<v;f++)this.render(g[f]/l,u[f]);else{h.multiDrawElementsWEBGL(o,u,0,a,g,0,v);let f=0;for(let b=0;b<v;b++)f+=u[b];t.update(f,o,1)}}this.setMode=s,this.setIndex=c,this.render=d,this.renderInstances=p,this.renderMultiDraw=m}function gf(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,s,a){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=a*(o/3);break;case i.LINES:t.lines+=a*(o/2);break;case i.LINE_STRIP:t.lines+=a*(o-1);break;case i.LINE_LOOP:t.lines+=a*o;break;case i.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}var Nn=class extends mt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=nt,this.minFilter=nt,this.wrapR=It,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};function jh(i,e){return i[0]-e[0]}function Kh(i,e){return Math.abs(e[1])-Math.abs(i[1])}function _f(i,e,t){let n={},r=new Float32Array(8),o=new WeakMap,s=new rt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,p){let m=c.morphTargetInfluences;if(e.isWebGL2===!0){let g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,u=g!==void 0?g.length:0,v=o.get(d);if(v===void 0||v.count!==u){let L=function(){q.dispose(),o.delete(d),d.removeEventListener("dispose",L)};v!==void 0&&v.texture.dispose();let b=d.morphAttributes.position!==void 0,x=d.morphAttributes.normal!==void 0,P=d.morphAttributes.color!==void 0,N=d.morphAttributes.position||[],R=d.morphAttributes.normal||[],w=d.morphAttributes.color||[],K=0;b===!0&&(K=1),x===!0&&(K=2),P===!0&&(K=3);let M=d.attributes.position.count*K,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let U=new Float32Array(M*T*4*u),q=new Nn(U,M,T,u);q.type=kt,q.needsUpdate=!0;let ee=K*4;for(let G=0;G<u;G++){let X=N[G],k=R[G],W=w[G],Q=M*T*4*G;for(let ie=0;ie<X.count;ie++){let oe=ie*ee;b===!0&&(s.fromBufferAttribute(X,ie),U[Q+oe+0]=s.x,U[Q+oe+1]=s.y,U[Q+oe+2]=s.z,U[Q+oe+3]=0),x===!0&&(s.fromBufferAttribute(k,ie),U[Q+oe+4]=s.x,U[Q+oe+5]=s.y,U[Q+oe+6]=s.z,U[Q+oe+7]=0),P===!0&&(s.fromBufferAttribute(W,ie),U[Q+oe+8]=s.x,U[Q+oe+9]=s.y,U[Q+oe+10]=s.z,U[Q+oe+11]=W.itemSize===4?s.w:1)}}v={count:u,texture:q,size:new He(M,T)},o.set(d,v),d.addEventListener("dispose",L)}let h=0;for(let b=0;b<m.length;b++)h+=m[b];let f=d.morphTargetsRelative?1:1-h;p.getUniforms().setValue(i,"morphTargetBaseInfluence",f),p.getUniforms().setValue(i,"morphTargetInfluences",m),p.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),p.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{let g=m===void 0?0:m.length,u=n[d.id];if(u===void 0||u.length!==g){u=[];for(let x=0;x<g;x++)u[x]=[x,0];n[d.id]=u}for(let x=0;x<g;x++){let P=u[x];P[0]=x,P[1]=m[x]}u.sort(Kh);for(let x=0;x<8;x++)x<g&&u[x][1]?(a[x][0]=u[x][0],a[x][1]=u[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(jh);let v=d.morphAttributes.position,h=d.morphAttributes.normal,f=0;for(let x=0;x<8;x++){let P=a[x],N=P[0],R=P[1];N!==Number.MAX_SAFE_INTEGER&&R?(v&&d.getAttribute("morphTarget"+x)!==v[N]&&d.setAttribute("morphTarget"+x,v[N]),h&&d.getAttribute("morphNormal"+x)!==h[N]&&d.setAttribute("morphNormal"+x,h[N]),r[x]=R,f+=R):(v&&d.hasAttribute("morphTarget"+x)===!0&&d.deleteAttribute("morphTarget"+x),h&&d.hasAttribute("morphNormal"+x)===!0&&d.deleteAttribute("morphNormal"+x),r[x]=0)}let b=d.morphTargetsRelative?1:1-f;p.getUniforms().setValue(i,"morphTargetBaseInfluence",b),p.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function vf(i,e,t,n){let r=new WeakMap;function o(l){let c=n.render.frame,d=l.geometry,p=e.get(l,d);if(r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let m=l.skeleton;r.get(m)!==c&&(m.update(),r.set(m,c))}return p}function s(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:s}}var ao=class extends mt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=nt,this.minFilter=nt,this.wrapR=It,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var On=class extends mt{constructor(e,t,n,r,o,s,a,l,c,d){if(d=d!==void 0?d:ni,d!==ni&&d!==fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===ni&&(n=Vt),n===void 0&&d===fi&&(n=jt),super(null,r,o,s,a,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:nt,this.minFilter=l!==void 0?l:nt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var Tf=new mt,Af=new On(1,1);Af.compareFunction=wr;var wf=new Nn,Rf=new ao,Cf=new Un,xf=[],Mf=[],Sf=new Float32Array(16),yf=new Float32Array(9),Ef=new Float32Array(4);function Bn(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,o=xf[r];if(o===void 0&&(o=new Float32Array(r),xf[r]=o),e!==0){n.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,i[s].toArray(o,a)}return o}function gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function _t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function so(i,e){let t=Mf[e];t===void 0&&(t=new Int32Array(e),Mf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Jh(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Qh(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2fv(this.addr,e),_t(t,e)}}function $h(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;i.uniform3fv(this.addr,e),_t(t,e)}}function ed(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4fv(this.addr,e),_t(t,e)}}function td(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;Ef.set(n),i.uniformMatrix2fv(this.addr,!1,Ef),_t(t,n)}}function id(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;yf.set(n),i.uniformMatrix3fv(this.addr,!1,yf),_t(t,n)}}function nd(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;Sf.set(n),i.uniformMatrix4fv(this.addr,!1,Sf),_t(t,n)}}function rd(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function od(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2iv(this.addr,e),_t(t,e)}}function ad(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;i.uniform3iv(this.addr,e),_t(t,e)}}function sd(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4iv(this.addr,e),_t(t,e)}}function ld(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function cd(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2uiv(this.addr,e),_t(t,e)}}function ud(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;i.uniform3uiv(this.addr,e),_t(t,e)}}function fd(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4uiv(this.addr,e),_t(t,e)}}function hd(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o=this.type===i.SAMPLER_2D_SHADOW?Af:Tf;t.setTexture2D(e||o,r)}function dd(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Rf,r)}function pd(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Cf,r)}function md(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||wf,r)}function gd(i){switch(i){case 5126:return Jh;case 35664:return Qh;case 35665:return $h;case 35666:return ed;case 35674:return td;case 35675:return id;case 35676:return nd;case 5124:case 35670:return rd;case 35667:case 35671:return od;case 35668:case 35672:return ad;case 35669:case 35673:return sd;case 5125:return ld;case 36294:return cd;case 36295:return ud;case 36296:return fd;case 35678:case 36198:case 36298:case 36306:case 35682:return hd;case 35679:case 36299:case 36307:return dd;case 35680:case 36300:case 36308:case 36293:return pd;case 36289:case 36303:case 36311:case 36292:return md}}function _d(i,e){i.uniform1fv(this.addr,e)}function vd(i,e){let t=Bn(e,this.size,2);i.uniform2fv(this.addr,t)}function xd(i,e){let t=Bn(e,this.size,3);i.uniform3fv(this.addr,t)}function Md(i,e){let t=Bn(e,this.size,4);i.uniform4fv(this.addr,t)}function Sd(i,e){let t=Bn(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function yd(i,e){let t=Bn(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ed(i,e){let t=Bn(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function bd(i,e){i.uniform1iv(this.addr,e)}function Td(i,e){i.uniform2iv(this.addr,e)}function Ad(i,e){i.uniform3iv(this.addr,e)}function wd(i,e){i.uniform4iv(this.addr,e)}function Rd(i,e){i.uniform1uiv(this.addr,e)}function Cd(i,e){i.uniform2uiv(this.addr,e)}function Pd(i,e){i.uniform3uiv(this.addr,e)}function Ld(i,e){i.uniform4uiv(this.addr,e)}function Dd(i,e,t){let n=this.cache,r=e.length,o=so(t,r);gt(n,o)||(i.uniform1iv(this.addr,o),_t(n,o));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||Tf,o[s])}function Ud(i,e,t){let n=this.cache,r=e.length,o=so(t,r);gt(n,o)||(i.uniform1iv(this.addr,o),_t(n,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Rf,o[s])}function Fd(i,e,t){let n=this.cache,r=e.length,o=so(t,r);gt(n,o)||(i.uniform1iv(this.addr,o),_t(n,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Cf,o[s])}function Id(i,e,t){let n=this.cache,r=e.length,o=so(t,r);gt(n,o)||(i.uniform1iv(this.addr,o),_t(n,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||wf,o[s])}function Nd(i){switch(i){case 5126:return _d;case 35664:return vd;case 35665:return xd;case 35666:return Md;case 35674:return Sd;case 35675:return yd;case 35676:return Ed;case 5124:case 35670:return bd;case 35667:case 35671:return Td;case 35668:case 35672:return Ad;case 35669:case 35673:return wd;case 5125:return Rd;case 36294:return Cd;case 36295:return Pd;case 36296:return Ld;case 35678:case 36198:case 36298:case 36306:case 35682:return Dd;case 35679:case 36299:case 36307:return Ud;case 35680:case 36300:case 36308:case 36293:return Fd;case 36289:case 36303:case 36311:case 36292:return Id}}var Fa=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=gd(t.type)}},Ia=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Nd(t.type)}},Na=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let o=0,s=r.length;o!==s;++o){let a=r[o];a.setValue(e,t[a.id],n)}}},Ua=/(\w+)(\])?(\[|\.)?/g;function bf(i,e){i.seq.push(e),i.map[e.id]=e}function Od(i,e,t){let n=i.name,r=n.length;for(Ua.lastIndex=0;;){let o=Ua.exec(n),s=Ua.lastIndex,a=o[1],l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){bf(t,c===void 0?new Fa(a,i,e):new Ia(a,i,e));break}else{let p=t.map[a];p===void 0&&(p=new Na(a),bf(t,p)),t=p}}}var Oi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let o=e.getActiveUniform(t,r),s=e.getUniformLocation(t,o.name);Od(o,s,this)}}setValue(e,t,n,r){let o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,s=t.length;o!==s;++o){let a=t[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,o=e.length;r!==o;++r){let s=e[r];s.id in t&&n.push(s)}return n}};function Oa(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Bd=37297,Gd=0;function zd(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){let a=s+1;n.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return n.join(`
`)}function Hd(i){let e=We.getPrimaries(We.workingColorSpace),t=We.getPrimaries(i),n;switch(e===t?n="":e===sn&&t===an?n="LinearDisplayP3ToLinearSRGB":e===an&&t===sn&&(n="LinearSRGBToLinearDisplayP3"),i){case At:case Hi:return[n,"LinearTransferOETF"];case et:case rn:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Pf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let s=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+zd(i.getShaderSource(e),s)}else return r}function Vd(i,e){let t=Hd(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function kd(i,e){let t;switch(e){case bs:t="Linear";break;case Ts:t="Reinhard";break;case As:t="OptimizedCineon";break;case ws:t="ACESFilmic";break;case Cs:t="AgX";break;case Rs:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Wd(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Gn).join(`
`)}function Xd(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Gn).join(`
`)}function qd(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Yd(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let o=i.getActiveAttrib(e,r),s=o.name,a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:i.getAttribLocation(e,s),locationSize:a}}return t}function Gn(i){return i!==""}function Lf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Df(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Zd=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ba(i){return i.replace(Zd,Kd)}var jd=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Kd(i,e){let t=Ie[e];if(t===void 0){let n=jd.get(e);if(n!==void 0)t=Ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ba(t)}var Jd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uf(i){return i.replace(Jd,Qd)}function Qd(i,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Ff(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $d(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===cr?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===es?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ti&&(e="SHADOWMAP_TYPE_VSM"),e}function ep(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ii:case ui:e="ENVMAP_TYPE_CUBE";break;case Ri:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ui:e="ENVMAP_MODE_REFRACTION";break}return e}function ip(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case hr:e="ENVMAP_BLENDING_MULTIPLY";break;case ys:e="ENVMAP_BLENDING_MIX";break;case Es:e="ENVMAP_BLENDING_ADD";break}return e}function np(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function If(i,e,t,n){let r=i.getContext(),o=t.defines,s=t.vertexShader,a=t.fragmentShader,l=$d(t),c=ep(t),d=tp(t),p=ip(t),m=np(t),g=t.isWebGL2?"":Wd(t),u=Xd(t),v=qd(o),h=r.createProgram(),f,b,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Gn).join(`
`),f.length>0&&(f+=`
`),b=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Gn).join(`
`),b.length>0&&(b+=`
`)):(f=[Ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gn).join(`
`),b=[g,Ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zt?"#define TONE_MAPPING":"",t.toneMapping!==Zt?Ie.tonemapping_pars_fragment:"",t.toneMapping!==Zt?kd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,Vd("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gn).join(`
`)),s=Ba(s),s=Lf(s,t),s=Df(s,t),a=Ba(a),a=Lf(a,t),a=Df(a,t),s=Uf(s),a=Uf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[u,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ua?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ua?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);let P=x+f+s,N=x+b+a,R=Oa(r,r.VERTEX_SHADER,P),w=Oa(r,r.FRAGMENT_SHADER,N);r.attachShader(h,R),r.attachShader(h,w),t.index0AttributeName!==void 0?r.bindAttribLocation(h,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(h,0,"position"),r.linkProgram(h);function K(q){if(i.debug.checkShaderErrors){let ee=r.getProgramInfoLog(h).trim(),L=r.getShaderInfoLog(R).trim(),G=r.getShaderInfoLog(w).trim(),X=!0,k=!0;if(r.getProgramParameter(h,r.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,h,R,w);else{let W=Pf(r,R,"vertex"),Q=Pf(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(h,r.VALIDATE_STATUS)+`

Program Info Log: `+ee+`
`+W+`
`+Q)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(L===""||G==="")&&(k=!1);k&&(q.diagnostics={runnable:X,programLog:ee,vertexShader:{log:L,prefix:f},fragmentShader:{log:G,prefix:b}})}r.deleteShader(R),r.deleteShader(w),M=new Oi(r,h),T=Yd(r,h)}let M;this.getUniforms=function(){return M===void 0&&K(this),M};let T;this.getAttributes=function(){return T===void 0&&K(this),T};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(h,Bd)),U},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(h),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Gd++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=R,this.fragmentShader=w,this}var rp=0,lo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ga(e),t.set(e,n)),n}},Ga=class{constructor(e){this.id=rp++,this.code=e,this.usedTimes=0}};function Nf(i,e,t,n,r,o,s){let a=new gn,l=new lo,c=[],d=r.isWebGL2,p=r.logarithmicDepthBuffer,m=r.vertexTextures,g=r.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return M===0?"uv":`uv${M}`}function h(M,T,U,q,ee){let L=q.fog,G=ee.geometry,X=M.isMeshStandardMaterial?q.environment:null,k=(M.isMeshStandardMaterial?t:e).get(M.envMap||X),W=k&&k.mapping===Ri?k.image.height:null,Q=u[M.type];M.precision!==null&&(g=r.getMaxPrecision(M.precision),g!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));let ie=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,oe=ie!==void 0?ie.length:0,ue=0;G.morphAttributes.position!==void 0&&(ue=1),G.morphAttributes.normal!==void 0&&(ue=2),G.morphAttributes.color!==void 0&&(ue=3);let D,C,B,Y;if(Q){let Ut=$t[Q];D=Ut.vertexShader,C=Ut.fragmentShader}else D=M.vertexShader,C=M.fragmentShader,l.update(M),B=l.getVertexShaderID(M),Y=l.getFragmentShaderID(M);let $=i.getRenderTarget(),te=ee.isInstancedMesh===!0,ae=ee.isBatchedMesh===!0,E=!!M.map,F=!!M.matcap,A=!!k,he=!!M.aoMap,V=!!M.lightMap,ne=!!M.bumpMap,de=!!M.normalMap,le=!!M.displacementMap,Ee=!!M.emissiveMap,S=!!M.metalnessMap,_=!!M.roughnessMap,O=M.anisotropy>0,re=M.clearcoat>0,se=M.iridescence>0,ce=M.sheen>0,Me=M.transmission>0,pe=O&&!!M.anisotropyMap,_e=re&&!!M.clearcoatMap,Ae=re&&!!M.clearcoatNormalMap,Ue=re&&!!M.clearcoatRoughnessMap,fe=se&&!!M.iridescenceMap,Ze=se&&!!M.iridescenceThicknessMap,Xe=ce&&!!M.sheenColorMap,De=ce&&!!M.sheenRoughnessMap,Te=!!M.specularMap,ye=!!M.specularColorMap,Ge=!!M.specularIntensityMap,Ye=Me&&!!M.transmissionMap,ot=Me&&!!M.thicknessMap,Ve=!!M.gradientMap,ge=!!M.alphaMap,I=M.alphaTest>0,ve=!!M.alphaHash,xe=!!M.extensions,Ce=!!G.attributes.uv1,we=!!G.attributes.uv2,Ke=!!G.attributes.uv3,Je=Zt;return M.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Je=i.toneMapping),{isWebGL2:d,shaderID:Q,shaderType:M.type,shaderName:M.name,vertexShader:D,fragmentShader:C,defines:M.defines,customVertexShaderID:B,customFragmentShaderID:Y,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,batching:ae,instancing:te,instancingColor:te&&ee.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:At,map:E,matcap:F,envMap:A,envMapMode:A&&k.mapping,envMapCubeUVHeight:W,aoMap:he,lightMap:V,bumpMap:ne,normalMap:de,displacementMap:m&&le,emissiveMap:Ee,normalMapObjectSpace:de&&M.normalMapType===Vs,normalMapTangentSpace:de&&M.normalMapType===Hs,metalnessMap:S,roughnessMap:_,anisotropy:O,anisotropyMap:pe,clearcoat:re,clearcoatMap:_e,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Ue,iridescence:se,iridescenceMap:fe,iridescenceThicknessMap:Ze,sheen:ce,sheenColorMap:Xe,sheenRoughnessMap:De,specularMap:Te,specularColorMap:ye,specularIntensityMap:Ge,transmission:Me,transmissionMap:Ye,thicknessMap:ot,gradientMap:Ve,opaque:M.transparent===!1&&M.blending===_i,alphaMap:ge,alphaTest:I,alphaHash:ve,combine:M.combine,mapUv:E&&v(M.map.channel),aoMapUv:he&&v(M.aoMap.channel),lightMapUv:V&&v(M.lightMap.channel),bumpMapUv:ne&&v(M.bumpMap.channel),normalMapUv:de&&v(M.normalMap.channel),displacementMapUv:le&&v(M.displacementMap.channel),emissiveMapUv:Ee&&v(M.emissiveMap.channel),metalnessMapUv:S&&v(M.metalnessMap.channel),roughnessMapUv:_&&v(M.roughnessMap.channel),anisotropyMapUv:pe&&v(M.anisotropyMap.channel),clearcoatMapUv:_e&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:De&&v(M.sheenRoughnessMap.channel),specularMapUv:Te&&v(M.specularMap.channel),specularColorMapUv:ye&&v(M.specularColorMap.channel),specularIntensityMapUv:Ge&&v(M.specularIntensityMap.channel),transmissionMapUv:Ye&&v(M.transmissionMap.channel),thicknessMapUv:ot&&v(M.thicknessMap.channel),alphaMapUv:ge&&v(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(de||O),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:Ce,vertexUv2s:we,vertexUv3s:Ke,pointsUvs:ee.isPoints===!0&&!!G.attributes.uv&&(E||ge),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:ee.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:ue,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Je,useLegacyLights:i._useLegacyLights,decodeVideoTexture:E&&M.map.isVideoTexture===!0&&We.getTransfer(M.map.colorSpace)===qe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Mt,flipSided:M.side===it,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:xe&&M.extensions.derivatives===!0,extensionFragDepth:xe&&M.extensions.fragDepth===!0,extensionDrawBuffers:xe&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:xe&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:xe&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){let T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(let U in M.defines)T.push(U),T.push(M.defines[U]);return M.isRawShaderMaterial===!1&&(b(T,M),x(T,M),T.push(i.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function b(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function x(M,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function P(M){let T=u[M.type],U;if(T){let q=$t[T];U=fl.clone(q.uniforms)}else U=M.uniforms;return U}function N(M,T){let U;for(let q=0,ee=c.length;q<ee;q++){let L=c[q];if(L.cacheKey===T){U=L,++U.usedTimes;break}}return U===void 0&&(U=new If(i,T,M,o),c.push(U)),U}function R(M){if(--M.usedTimes===0){let T=c.indexOf(M);c[T]=c[c.length-1],c.pop(),M.destroy()}}function w(M){l.remove(M)}function K(){l.dispose()}return{getParameters:h,getProgramCacheKey:f,getUniforms:P,acquireProgram:N,releaseProgram:R,releaseShaderCache:w,programs:c,dispose:K}}function Of(){let i=new WeakMap;function e(o){let s=i.get(o);return s===void 0&&(s={},i.set(o,s)),s}function t(o){i.delete(o)}function n(o,s,a){i.get(o)[s]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function op(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Bf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Gf(){let i=[],e=0,t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function s(p,m,g,u,v,h){let f=i[e];return f===void 0?(f={id:p.id,object:p,geometry:m,material:g,groupOrder:u,renderOrder:p.renderOrder,z:v,group:h},i[e]=f):(f.id=p.id,f.object=p,f.geometry=m,f.material=g,f.groupOrder=u,f.renderOrder=p.renderOrder,f.z=v,f.group=h),e++,f}function a(p,m,g,u,v,h){let f=s(p,m,g,u,v,h);g.transmission>0?n.push(f):g.transparent===!0?r.push(f):t.push(f)}function l(p,m,g,u,v,h){let f=s(p,m,g,u,v,h);g.transmission>0?n.unshift(f):g.transparent===!0?r.unshift(f):t.unshift(f)}function c(p,m){t.length>1&&t.sort(p||op),n.length>1&&n.sort(m||Bf),r.length>1&&r.sort(m||Bf)}function d(){for(let p=e,m=i.length;p<m;p++){let g=i[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:a,unshift:l,finish:d,sort:c}}function zf(){let i=new WeakMap;function e(n,r){let o=i.get(n),s;return o===void 0?(s=new Gf,i.set(n,[s])):r>=o.length?(s=new Gf,o.push(s)):s=o[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function ap(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Oe};break;case"SpotLight":t={position:new H,direction:new H,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function sp(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var lp=0;function cp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Hf(i,e){let t=new ap,n=sp(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new H);let o=new H,s=new $e,a=new $e;function l(d,p){let m=0,g=0,u=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let v=0,h=0,f=0,b=0,x=0,P=0,N=0,R=0,w=0,K=0,M=0;d.sort(cp);let T=p===!0?Math.PI:1;for(let q=0,ee=d.length;q<ee;q++){let L=d[q],G=L.color,X=L.intensity,k=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)m+=G.r*X*T,g+=G.g*X*T,u+=G.b*X*T;else if(L.isLightProbe){for(let Q=0;Q<9;Q++)r.probe[Q].addScaledVector(L.sh.coefficients[Q],X);M++}else if(L.isDirectionalLight){let Q=t.get(L);if(Q.color.copy(L.color).multiplyScalar(L.intensity*T),L.castShadow){let ie=L.shadow,oe=n.get(L);oe.shadowBias=ie.bias,oe.shadowNormalBias=ie.normalBias,oe.shadowRadius=ie.radius,oe.shadowMapSize=ie.mapSize,r.directionalShadow[v]=oe,r.directionalShadowMap[v]=W,r.directionalShadowMatrix[v]=L.shadow.matrix,P++}r.directional[v]=Q,v++}else if(L.isSpotLight){let Q=t.get(L);Q.position.setFromMatrixPosition(L.matrixWorld),Q.color.copy(G).multiplyScalar(X*T),Q.distance=k,Q.coneCos=Math.cos(L.angle),Q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Q.decay=L.decay,r.spot[f]=Q;let ie=L.shadow;if(L.map&&(r.spotLightMap[w]=L.map,w++,ie.updateMatrices(L),L.castShadow&&K++),r.spotLightMatrix[f]=ie.matrix,L.castShadow){let oe=n.get(L);oe.shadowBias=ie.bias,oe.shadowNormalBias=ie.normalBias,oe.shadowRadius=ie.radius,oe.shadowMapSize=ie.mapSize,r.spotShadow[f]=oe,r.spotShadowMap[f]=W,R++}f++}else if(L.isRectAreaLight){let Q=t.get(L);Q.color.copy(G).multiplyScalar(X),Q.halfWidth.set(L.width*.5,0,0),Q.halfHeight.set(0,L.height*.5,0),r.rectArea[b]=Q,b++}else if(L.isPointLight){let Q=t.get(L);if(Q.color.copy(L.color).multiplyScalar(L.intensity*T),Q.distance=L.distance,Q.decay=L.decay,L.castShadow){let ie=L.shadow,oe=n.get(L);oe.shadowBias=ie.bias,oe.shadowNormalBias=ie.normalBias,oe.shadowRadius=ie.radius,oe.shadowMapSize=ie.mapSize,oe.shadowCameraNear=ie.camera.near,oe.shadowCameraFar=ie.camera.far,r.pointShadow[h]=oe,r.pointShadowMap[h]=W,r.pointShadowMatrix[h]=L.shadow.matrix,N++}r.point[h]=Q,h++}else if(L.isHemisphereLight){let Q=t.get(L);Q.skyColor.copy(L.color).multiplyScalar(X*T),Q.groundColor.copy(L.groundColor).multiplyScalar(X*T),r.hemi[x]=Q,x++}}b>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=m,r.ambient[1]=g,r.ambient[2]=u;let U=r.hash;(U.directionalLength!==v||U.pointLength!==h||U.spotLength!==f||U.rectAreaLength!==b||U.hemiLength!==x||U.numDirectionalShadows!==P||U.numPointShadows!==N||U.numSpotShadows!==R||U.numSpotMaps!==w||U.numLightProbes!==M)&&(r.directional.length=v,r.spot.length=f,r.rectArea.length=b,r.point.length=h,r.hemi.length=x,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=R+w-K,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=K,r.numLightProbes=M,U.directionalLength=v,U.pointLength=h,U.spotLength=f,U.rectAreaLength=b,U.hemiLength=x,U.numDirectionalShadows=P,U.numPointShadows=N,U.numSpotShadows=R,U.numSpotMaps=w,U.numLightProbes=M,r.version=lp++)}function c(d,p){let m=0,g=0,u=0,v=0,h=0,f=p.matrixWorldInverse;for(let b=0,x=d.length;b<x;b++){let P=d[b];if(P.isDirectionalLight){let N=r.directional[m];N.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(f),m++}else if(P.isSpotLight){let N=r.spot[u];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(f),N.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(f),u++}else if(P.isRectAreaLight){let N=r.rectArea[v];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(f),a.identity(),s.copy(P.matrixWorld),s.premultiply(f),a.extractRotation(s),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),N.halfWidth.applyMatrix4(a),N.halfHeight.applyMatrix4(a),v++}else if(P.isPointLight){let N=r.point[g];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(f),g++}else if(P.isHemisphereLight){let N=r.hemi[h];N.direction.setFromMatrixPosition(P.matrixWorld),N.direction.transformDirection(f),h++}}}return{setup:l,setupView:c,state:r}}function Vf(i,e){let t=new Hf(i,e),n=[],r=[];function o(){n.length=0,r.length=0}function s(p){n.push(p)}function a(p){r.push(p)}function l(p){t.setup(n,p)}function c(p){t.setupView(n,p)}return{init:o,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:a}}function kf(i,e){let t=new WeakMap;function n(o,s=0){let a=t.get(o),l;return a===void 0?(l=new Vf(i,e),t.set(o,[l])):s>=a.length?(l=new Vf(i,e),a.push(l)):l=a[s],l}function r(){t=new WeakMap}return{get:n,dispose:r}}var co=class extends Qt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gs,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};var uo=class extends Qt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var Wf=`
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
`;function qf(i,e,t){let n=new hn,r=new He,o=new He,s=new rt,a=new co({depthPacking:zs}),l=new uo,c={},d=t.maxTextureSize,p={[zt]:it,[it]:zt,[Mt]:Mt},m=new st({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:Wf,fragmentShader:Xf}),g=m.clone();g.defines.HORIZONTAL_PASS=1;let u=new ft;u.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Et(u,m),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cr;let f=this.type;this.render=function(R,w,K){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||R.length===0)return;let M=i.getRenderTarget(),T=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),q=i.state;q.setBlending(Yt),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let ee=f!==ti&&this.type===ti,L=f===ti&&this.type!==ti;for(let G=0,X=R.length;G<X;G++){let k=R[G],W=k.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);let Q=W.getFrameExtents();if(r.multiply(Q),o.copy(W.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(o.x=Math.floor(d/Q.x),r.x=o.x*Q.x,W.mapSize.x=o.x),r.y>d&&(o.y=Math.floor(d/Q.y),r.y=o.y*Q.y,W.mapSize.y=o.y)),W.map===null||ee===!0||L===!0){let oe=this.type!==ti?{minFilter:nt,magFilter:nt}:{};W.map!==null&&W.map.dispose(),W.map=new wt(r.x,r.y,oe),W.map.texture.name=k.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();let ie=W.getViewportCount();for(let oe=0;oe<ie;oe++){let ue=W.getViewport(oe);s.set(o.x*ue.x,o.y*ue.y,o.x*ue.z,o.y*ue.w),q.viewport(s),W.updateMatrices(k,oe),n=W.getFrustum(),P(w,K,W.camera,k,this.type)}W.isPointLightShadow!==!0&&this.type===ti&&b(W,K),W.needsUpdate=!1}f=this.type,h.needsUpdate=!1,i.setRenderTarget(M,T,U)};function b(R,w){let K=e.update(v);m.defines.VSM_SAMPLES!==R.blurSamples&&(m.defines.VSM_SAMPLES=R.blurSamples,g.defines.VSM_SAMPLES=R.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new wt(r.x,r.y)),m.uniforms.shadow_pass.value=R.map.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(w,null,K,m,v,null),g.uniforms.shadow_pass.value=R.mapPass.texture,g.uniforms.resolution.value=R.mapSize,g.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(w,null,K,g,v,null)}function x(R,w,K,M){let T=null,U=K.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(U!==void 0)T=U;else if(T=K.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let q=T.uuid,ee=w.uuid,L=c[q];L===void 0&&(L={},c[q]=L);let G=L[ee];G===void 0&&(G=T.clone(),L[ee]=G,w.addEventListener("dispose",N)),T=G}if(T.visible=w.visible,T.wireframe=w.wireframe,M===ti?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:p[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,K.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let q=i.properties.get(T);q.light=K}return T}function P(R,w,K,M,T){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&T===ti)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,R.matrixWorld);let ee=e.update(R),L=R.material;if(Array.isArray(L)){let G=ee.groups;for(let X=0,k=G.length;X<k;X++){let W=G[X],Q=L[W.materialIndex];if(Q&&Q.visible){let ie=x(R,Q,M,T);R.onBeforeShadow(i,R,w,K,ee,ie,W),i.renderBufferDirect(K,null,ee,ie,R,W),R.onAfterShadow(i,R,w,K,ee,ie,W)}}}else if(L.visible){let G=x(R,L,M,T);R.onBeforeShadow(i,R,w,K,ee,G,null),i.renderBufferDirect(K,null,ee,G,R,null),R.onAfterShadow(i,R,w,K,ee,G,null)}}let q=R.children;for(let ee=0,L=q.length;ee<L;ee++)P(q[ee],w,K,M,T)}function N(R){R.target.removeEventListener("dispose",N);for(let K in c){let M=c[K],T=R.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}function Yf(i,e,t){let n=t.isWebGL2;function r(){let I=!1,ve=new rt,xe=null,Ce=new rt(0,0,0,0);return{setMask:function(we){xe!==we&&!I&&(i.colorMask(we,we,we,we),xe=we)},setLocked:function(we){I=we},setClear:function(we,Ke,Je,vt,Ut){Ut===!0&&(we*=vt,Ke*=vt,Je*=vt),ve.set(we,Ke,Je,vt),Ce.equals(ve)===!1&&(i.clearColor(we,Ke,Je,vt),Ce.copy(ve))},reset:function(){I=!1,xe=null,Ce.set(-1,0,0,0)}}}function o(){let I=!1,ve=null,xe=null,Ce=null;return{setTest:function(we){we?ae(i.DEPTH_TEST):E(i.DEPTH_TEST)},setMask:function(we){ve!==we&&!I&&(i.depthMask(we),ve=we)},setFunc:function(we){if(xe!==we){switch(we){case ms:i.depthFunc(i.NEVER);break;case gs:i.depthFunc(i.ALWAYS);break;case _s:i.depthFunc(i.LESS);break;case tn:i.depthFunc(i.LEQUAL);break;case vs:i.depthFunc(i.EQUAL);break;case xs:i.depthFunc(i.GEQUAL);break;case Ms:i.depthFunc(i.GREATER);break;case Ss:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=we}},setLocked:function(we){I=we},setClear:function(we){Ce!==we&&(i.clearDepth(we),Ce=we)},reset:function(){I=!1,ve=null,xe=null,Ce=null}}}function s(){let I=!1,ve=null,xe=null,Ce=null,we=null,Ke=null,Je=null,vt=null,Ut=null;return{setTest:function(Qe){I||(Qe?ae(i.STENCIL_TEST):E(i.STENCIL_TEST))},setMask:function(Qe){ve!==Qe&&!I&&(i.stencilMask(Qe),ve=Qe)},setFunc:function(Qe,Ft,ci){(xe!==Qe||Ce!==Ft||we!==ci)&&(i.stencilFunc(Qe,Ft,ci),xe=Qe,Ce=Ft,we=ci)},setOp:function(Qe,Ft,ci){(Ke!==Qe||Je!==Ft||vt!==ci)&&(i.stencilOp(Qe,Ft,ci),Ke=Qe,Je=Ft,vt=ci)},setLocked:function(Qe){I=Qe},setClear:function(Qe){Ut!==Qe&&(i.clearStencil(Qe),Ut=Qe)},reset:function(){I=!1,ve=null,xe=null,Ce=null,we=null,Ke=null,Je=null,vt=null,Ut=null}}}let a=new r,l=new o,c=new s,d=new WeakMap,p=new WeakMap,m={},g={},u=new WeakMap,v=[],h=null,f=!1,b=null,x=null,P=null,N=null,R=null,w=null,K=null,M=new Oe(0,0,0),T=0,U=!1,q=null,ee=null,L=null,G=null,X=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,Q=0,ie=i.getParameter(i.VERSION);ie.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(ie)[1]),W=Q>=1):ie.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),W=Q>=2);let oe=null,ue={},D=i.getParameter(i.SCISSOR_BOX),C=i.getParameter(i.VIEWPORT),B=new rt().fromArray(D),Y=new rt().fromArray(C);function $(I,ve,xe,Ce){let we=new Uint8Array(4),Ke=i.createTexture();i.bindTexture(I,Ke),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Je=0;Je<xe;Je++)n&&(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)?i.texImage3D(ve,0,i.RGBA,1,1,Ce,0,i.RGBA,i.UNSIGNED_BYTE,we):i.texImage2D(ve+Je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,we);return Ke}let te={};te[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),te[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(te[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),te[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ae(i.DEPTH_TEST),l.setFunc(tn),Ee(!1),S(Co),ae(i.CULL_FACE),de(Yt);function ae(I){m[I]!==!0&&(i.enable(I),m[I]=!0)}function E(I){m[I]!==!1&&(i.disable(I),m[I]=!1)}function F(I,ve){return g[I]!==ve?(i.bindFramebuffer(I,ve),g[I]=ve,n&&(I===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=ve),I===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=ve)),!0):!1}function A(I,ve){let xe=v,Ce=!1;if(I)if(xe=u.get(ve),xe===void 0&&(xe=[],u.set(ve,xe)),I.isWebGLMultipleRenderTargets){let we=I.texture;if(xe.length!==we.length||xe[0]!==i.COLOR_ATTACHMENT0){for(let Ke=0,Je=we.length;Ke<Je;Ke++)xe[Ke]=i.COLOR_ATTACHMENT0+Ke;xe.length=we.length,Ce=!0}}else xe[0]!==i.COLOR_ATTACHMENT0&&(xe[0]=i.COLOR_ATTACHMENT0,Ce=!0);else xe[0]!==i.BACK&&(xe[0]=i.BACK,Ce=!0);Ce&&(t.isWebGL2?i.drawBuffers(xe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(xe))}function he(I){return h!==I?(i.useProgram(I),h=I,!0):!1}let V={[vi]:i.FUNC_ADD,[ts]:i.FUNC_SUBTRACT,[is]:i.FUNC_REVERSE_SUBTRACT};if(n)V[Uo]=i.MIN,V[Fo]=i.MAX;else{let I=e.get("EXT_blend_minmax");I!==null&&(V[Uo]=I.MIN_EXT,V[Fo]=I.MAX_EXT)}let ne={[ns]:i.ZERO,[fr]:i.ONE,[rs]:i.SRC_COLOR,[Xn]:i.SRC_ALPHA,[us]:i.SRC_ALPHA_SATURATE,[ls]:i.DST_COLOR,[as]:i.DST_ALPHA,[os]:i.ONE_MINUS_SRC_COLOR,[zi]:i.ONE_MINUS_SRC_ALPHA,[cs]:i.ONE_MINUS_DST_COLOR,[ss]:i.ONE_MINUS_DST_ALPHA,[fs]:i.CONSTANT_COLOR,[hs]:i.ONE_MINUS_CONSTANT_COLOR,[ds]:i.CONSTANT_ALPHA,[ps]:i.ONE_MINUS_CONSTANT_ALPHA};function de(I,ve,xe,Ce,we,Ke,Je,vt,Ut,Qe){if(I===Yt){f===!0&&(E(i.BLEND),f=!1);return}if(f===!1&&(ae(i.BLEND),f=!0),I!==ur){if(I!==b||Qe!==U){if((x!==vi||R!==vi)&&(i.blendEquation(i.FUNC_ADD),x=vi,R=vi),Qe)switch(I){case _i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Po:i.blendFunc(i.ONE,i.ONE);break;case Lo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Do:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case _i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Po:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Lo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Do:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}P=null,N=null,w=null,K=null,M.set(0,0,0),T=0,b=I,U=Qe}return}we=we||ve,Ke=Ke||xe,Je=Je||Ce,(ve!==x||we!==R)&&(i.blendEquationSeparate(V[ve],V[we]),x=ve,R=we),(xe!==P||Ce!==N||Ke!==w||Je!==K)&&(i.blendFuncSeparate(ne[xe],ne[Ce],ne[Ke],ne[Je]),P=xe,N=Ce,w=Ke,K=Je),(vt.equals(M)===!1||Ut!==T)&&(i.blendColor(vt.r,vt.g,vt.b,Ut),M.copy(vt),T=Ut),b=I,U=!1}function le(I,ve){I.side===Mt?E(i.CULL_FACE):ae(i.CULL_FACE);let xe=I.side===it;ve&&(xe=!xe),Ee(xe),I.blending===_i&&I.transparent===!1?de(Yt):de(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);let Ce=I.stencilWrite;c.setTest(Ce),Ce&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),O(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):E(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(I){q!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),q=I)}function S(I){I!==Qa?(ae(i.CULL_FACE),I!==ee&&(I===Co?i.cullFace(i.BACK):I===$a?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):E(i.CULL_FACE),ee=I}function _(I){I!==L&&(W&&i.lineWidth(I),L=I)}function O(I,ve,xe){I?(ae(i.POLYGON_OFFSET_FILL),(G!==ve||X!==xe)&&(i.polygonOffset(ve,xe),G=ve,X=xe)):E(i.POLYGON_OFFSET_FILL)}function re(I){I?ae(i.SCISSOR_TEST):E(i.SCISSOR_TEST)}function se(I){I===void 0&&(I=i.TEXTURE0+k-1),oe!==I&&(i.activeTexture(I),oe=I)}function ce(I,ve,xe){xe===void 0&&(oe===null?xe=i.TEXTURE0+k-1:xe=oe);let Ce=ue[xe];Ce===void 0&&(Ce={type:void 0,texture:void 0},ue[xe]=Ce),(Ce.type!==I||Ce.texture!==ve)&&(oe!==xe&&(i.activeTexture(xe),oe=xe),i.bindTexture(I,ve||te[I]),Ce.type=I,Ce.texture=ve)}function Me(){let I=ue[oe];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function pe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ue(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ze(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Xe(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function De(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ge(I){B.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),B.copy(I))}function Ye(I){Y.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Y.copy(I))}function ot(I,ve){let xe=p.get(ve);xe===void 0&&(xe=new WeakMap,p.set(ve,xe));let Ce=xe.get(I);Ce===void 0&&(Ce=i.getUniformBlockIndex(ve,I.name),xe.set(I,Ce))}function Ve(I,ve){let Ce=p.get(ve).get(I);d.get(ve)!==Ce&&(i.uniformBlockBinding(ve,Ce,I.__bindingPointIndex),d.set(ve,Ce))}function ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},oe=null,ue={},g={},u=new WeakMap,v=[],h=null,f=!1,b=null,x=null,P=null,N=null,R=null,w=null,K=null,M=new Oe(0,0,0),T=0,U=!1,q=null,ee=null,L=null,G=null,X=null,B.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ae,disable:E,bindFramebuffer:F,drawBuffers:A,useProgram:he,setBlending:de,setMaterial:le,setFlipSided:Ee,setCullFace:S,setLineWidth:_,setPolygonOffset:O,setScissorTest:re,activeTexture:se,bindTexture:ce,unbindTexture:Me,compressedTexImage2D:pe,compressedTexImage3D:_e,texImage2D:Te,texImage3D:ye,updateUBOMapping:ot,uniformBlockBinding:Ve,texStorage2D:Xe,texStorage3D:De,texSubImage2D:Ae,texSubImage3D:Ue,compressedTexSubImage2D:fe,compressedTexSubImage3D:Ze,scissor:Ge,viewport:Ye,reset:ge}}function Zf(i,e,t,n,r,o,s){let a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap,p,m=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function u(S,_){return g?new OffscreenCanvas(S,_):vn("canvas")}function v(S,_,O,re){let se=1;if((S.width>re||S.height>re)&&(se=re/Math.max(S.width,S.height)),se<1||_===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){let ce=_?Qn:Math.floor,Me=ce(se*S.width),pe=ce(se*S.height);p===void 0&&(p=u(Me,pe));let _e=O?u(Me,pe):p;return _e.width=Me,_e.height=pe,_e.getContext("2d").drawImage(S,0,0,Me,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+Me+"x"+pe+")."),_e}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function h(S){return fa(S.width)&&fa(S.height)}function f(S){return a?!1:S.wrapS!==It||S.wrapT!==It||S.minFilter!==nt&&S.minFilter!==ct}function b(S,_){return S.generateMipmaps&&_&&S.minFilter!==nt&&S.minFilter!==ct}function x(S){i.generateMipmap(S)}function P(S,_,O,re,se=!1){if(a===!1)return _;if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ce=_;if(_===i.RED&&(O===i.FLOAT&&(ce=i.R32F),O===i.HALF_FLOAT&&(ce=i.R16F),O===i.UNSIGNED_BYTE&&(ce=i.R8)),_===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(ce=i.R8UI),O===i.UNSIGNED_SHORT&&(ce=i.R16UI),O===i.UNSIGNED_INT&&(ce=i.R32UI),O===i.BYTE&&(ce=i.R8I),O===i.SHORT&&(ce=i.R16I),O===i.INT&&(ce=i.R32I)),_===i.RG&&(O===i.FLOAT&&(ce=i.RG32F),O===i.HALF_FLOAT&&(ce=i.RG16F),O===i.UNSIGNED_BYTE&&(ce=i.RG8)),_===i.RGBA){let Me=se?on:We.getTransfer(re);O===i.FLOAT&&(ce=i.RGBA32F),O===i.HALF_FLOAT&&(ce=i.RGBA16F),O===i.UNSIGNED_BYTE&&(ce=Me===qe?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function N(S,_,O){return b(S,O)===!0||S.isFramebufferTexture&&S.minFilter!==nt&&S.minFilter!==ct?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function R(S){return S===nt||S===No||S===dr?i.NEAREST:i.LINEAR}function w(S){let _=S.target;_.removeEventListener("dispose",w),M(_),_.isVideoTexture&&d.delete(_)}function K(S){let _=S.target;_.removeEventListener("dispose",K),U(_)}function M(S){let _=n.get(S);if(_.__webglInit===void 0)return;let O=S.source,re=m.get(O);if(re){let se=re[_.__cacheKey];se.usedTimes--,se.usedTimes===0&&T(S),Object.keys(re).length===0&&m.delete(O)}n.remove(S)}function T(S){let _=n.get(S);i.deleteTexture(_.__webglTexture);let O=S.source,re=m.get(O);delete re[_.__cacheKey],s.memory.textures--}function U(S){let _=S.texture,O=n.get(S),re=n.get(_);if(re.__webglTexture!==void 0&&(i.deleteTexture(re.__webglTexture),s.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(O.__webglFramebuffer[se]))for(let ce=0;ce<O.__webglFramebuffer[se].length;ce++)i.deleteFramebuffer(O.__webglFramebuffer[se][ce]);else i.deleteFramebuffer(O.__webglFramebuffer[se]);O.__webglDepthbuffer&&i.deleteRenderbuffer(O.__webglDepthbuffer[se])}else{if(Array.isArray(O.__webglFramebuffer))for(let se=0;se<O.__webglFramebuffer.length;se++)i.deleteFramebuffer(O.__webglFramebuffer[se]);else i.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&i.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&i.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let se=0;se<O.__webglColorRenderbuffer.length;se++)O.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(O.__webglColorRenderbuffer[se]);O.__webglDepthRenderbuffer&&i.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let se=0,ce=_.length;se<ce;se++){let Me=n.get(_[se]);Me.__webglTexture&&(i.deleteTexture(Me.__webglTexture),s.memory.textures--),n.remove(_[se])}n.remove(_),n.remove(S)}let q=0;function ee(){q=0}function L(){let S=q;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),q+=1,S}function G(S){let _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function X(S,_){let O=n.get(S);if(S.isVideoTexture&&le(S),S.isRenderTargetTexture===!1&&S.version>0&&O.__version!==S.version){let re=S.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{B(O,S,_);return}}t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+_)}function k(S,_){let O=n.get(S);if(S.version>0&&O.__version!==S.version){B(O,S,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+_)}function W(S,_){let O=n.get(S);if(S.version>0&&O.__version!==S.version){B(O,S,_);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+_)}function Q(S,_){let O=n.get(S);if(S.version>0&&O.__version!==S.version){Y(O,S,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+_)}let ie={[Zn]:i.REPEAT,[It]:i.CLAMP_TO_EDGE,[jn]:i.MIRRORED_REPEAT},oe={[nt]:i.NEAREST,[No]:i.NEAREST_MIPMAP_NEAREST,[dr]:i.NEAREST_MIPMAP_LINEAR,[ct]:i.LINEAR,[Ps]:i.LINEAR_MIPMAP_NEAREST,[xi]:i.LINEAR_MIPMAP_LINEAR},ue={[ks]:i.NEVER,[js]:i.ALWAYS,[Ws]:i.LESS,[wr]:i.LEQUAL,[Xs]:i.EQUAL,[Zs]:i.GEQUAL,[qs]:i.GREATER,[Ys]:i.NOTEQUAL};function D(S,_,O){if(O?(i.texParameteri(S,i.TEXTURE_WRAP_S,ie[_.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,ie[_.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,ie[_.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,oe[_.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,oe[_.minFilter])):(i.texParameteri(S,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(S,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(_.wrapS!==It||_.wrapT!==It)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(S,i.TEXTURE_MAG_FILTER,R(_.magFilter)),i.texParameteri(S,i.TEXTURE_MIN_FILTER,R(_.minFilter)),_.minFilter!==nt&&_.minFilter!==ct&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,ue[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let re=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===nt||_.minFilter!==dr&&_.minFilter!==xi||_.type===kt&&e.has("OES_texture_float_linear")===!1||a===!1&&_.type===Mi&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||n.get(_).__currentAnisotropy)&&(i.texParameterf(S,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy)}}function C(S,_){let O=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",w));let re=_.source,se=m.get(re);se===void 0&&(se={},m.set(re,se));let ce=G(_);if(ce!==S.__cacheKey){se[ce]===void 0&&(se[ce]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,O=!0),se[ce].usedTimes++;let Me=se[S.__cacheKey];Me!==void 0&&(se[S.__cacheKey].usedTimes--,Me.usedTimes===0&&T(_)),S.__cacheKey=ce,S.__webglTexture=se[ce].texture}return O}function B(S,_,O){let re=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(re=i.TEXTURE_3D);let se=C(S,_),ce=_.source;t.bindTexture(re,S.__webglTexture,i.TEXTURE0+O);let Me=n.get(ce);if(ce.version!==Me.__version||se===!0){t.activeTexture(i.TEXTURE0+O);let pe=We.getPrimaries(We.workingColorSpace),_e=_.colorSpace===St?null:We.getPrimaries(_.colorSpace),Ae=_.colorSpace===St||pe===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let Ue=f(_)&&h(_.image)===!1,fe=v(_.image,Ue,!1,r.maxTextureSize);fe=Ee(_,fe);let Ze=h(fe)||a,Xe=o.convert(_.format,_.colorSpace),De=o.convert(_.type),Te=P(_.internalFormat,Xe,De,_.colorSpace,_.isVideoTexture);D(re,_,Ze);let ye,Ge=_.mipmaps,Ye=a&&_.isVideoTexture!==!0&&Te!==br,ot=Me.__version===void 0||se===!0,Ve=N(_,fe,Ze);if(_.isDepthTexture)Te=i.DEPTH_COMPONENT,a?_.type===kt?Te=i.DEPTH_COMPONENT32F:_.type===Vt?Te=i.DEPTH_COMPONENT24:_.type===jt?Te=i.DEPTH24_STENCIL8:Te=i.DEPTH_COMPONENT16:_.type===kt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===ni&&Te===i.DEPTH_COMPONENT&&_.type!==nn&&_.type!==Vt&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=Vt,De=o.convert(_.type)),_.format===fi&&Te===i.DEPTH_COMPONENT&&(Te=i.DEPTH_STENCIL,_.type!==jt&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=jt,De=o.convert(_.type))),ot&&(Ye?t.texStorage2D(i.TEXTURE_2D,1,Te,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,Te,fe.width,fe.height,0,Xe,De,null));else if(_.isDataTexture)if(Ge.length>0&&Ze){Ye&&ot&&t.texStorage2D(i.TEXTURE_2D,Ve,Te,Ge[0].width,Ge[0].height);for(let ge=0,I=Ge.length;ge<I;ge++)ye=Ge[ge],Ye?t.texSubImage2D(i.TEXTURE_2D,ge,0,0,ye.width,ye.height,Xe,De,ye.data):t.texImage2D(i.TEXTURE_2D,ge,Te,ye.width,ye.height,0,Xe,De,ye.data);_.generateMipmaps=!1}else Ye?(ot&&t.texStorage2D(i.TEXTURE_2D,Ve,Te,fe.width,fe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe.width,fe.height,Xe,De,fe.data)):t.texImage2D(i.TEXTURE_2D,0,Te,fe.width,fe.height,0,Xe,De,fe.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ye&&ot&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ve,Te,Ge[0].width,Ge[0].height,fe.depth);for(let ge=0,I=Ge.length;ge<I;ge++)ye=Ge[ge],_.format!==ht?Xe!==null?Ye?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,ye.width,ye.height,fe.depth,Xe,ye.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ge,Te,ye.width,ye.height,fe.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,ye.width,ye.height,fe.depth,Xe,De,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ge,Te,ye.width,ye.height,fe.depth,0,Xe,De,ye.data)}else{Ye&&ot&&t.texStorage2D(i.TEXTURE_2D,Ve,Te,Ge[0].width,Ge[0].height);for(let ge=0,I=Ge.length;ge<I;ge++)ye=Ge[ge],_.format!==ht?Xe!==null?Ye?t.compressedTexSubImage2D(i.TEXTURE_2D,ge,0,0,ye.width,ye.height,Xe,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,ge,Te,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage2D(i.TEXTURE_2D,ge,0,0,ye.width,ye.height,Xe,De,ye.data):t.texImage2D(i.TEXTURE_2D,ge,Te,ye.width,ye.height,0,Xe,De,ye.data)}else if(_.isDataArrayTexture)Ye?(ot&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ve,Te,fe.width,fe.height,fe.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Xe,De,fe.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,fe.width,fe.height,fe.depth,0,Xe,De,fe.data);else if(_.isData3DTexture)Ye?(ot&&t.texStorage3D(i.TEXTURE_3D,Ve,Te,fe.width,fe.height,fe.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Xe,De,fe.data)):t.texImage3D(i.TEXTURE_3D,0,Te,fe.width,fe.height,fe.depth,0,Xe,De,fe.data);else if(_.isFramebufferTexture){if(ot)if(Ye)t.texStorage2D(i.TEXTURE_2D,Ve,Te,fe.width,fe.height);else{let ge=fe.width,I=fe.height;for(let ve=0;ve<Ve;ve++)t.texImage2D(i.TEXTURE_2D,ve,Te,ge,I,0,Xe,De,null),ge>>=1,I>>=1}}else if(Ge.length>0&&Ze){Ye&&ot&&t.texStorage2D(i.TEXTURE_2D,Ve,Te,Ge[0].width,Ge[0].height);for(let ge=0,I=Ge.length;ge<I;ge++)ye=Ge[ge],Ye?t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Xe,De,ye):t.texImage2D(i.TEXTURE_2D,ge,Te,Xe,De,ye);_.generateMipmaps=!1}else Ye?(ot&&t.texStorage2D(i.TEXTURE_2D,Ve,Te,fe.width,fe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Xe,De,fe)):t.texImage2D(i.TEXTURE_2D,0,Te,Xe,De,fe);b(_,Ze)&&x(re),Me.__version=ce.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function Y(S,_,O){if(_.image.length!==6)return;let re=C(S,_),se=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+O);let ce=n.get(se);if(se.version!==ce.__version||re===!0){t.activeTexture(i.TEXTURE0+O);let Me=We.getPrimaries(We.workingColorSpace),pe=_.colorSpace===St?null:We.getPrimaries(_.colorSpace),_e=_.colorSpace===St||Me===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let Ae=_.isCompressedTexture||_.image[0].isCompressedTexture,Ue=_.image[0]&&_.image[0].isDataTexture,fe=[];for(let ge=0;ge<6;ge++)!Ae&&!Ue?fe[ge]=v(_.image[ge],!1,!0,r.maxCubemapSize):fe[ge]=Ue?_.image[ge].image:_.image[ge],fe[ge]=Ee(_,fe[ge]);let Ze=fe[0],Xe=h(Ze)||a,De=o.convert(_.format,_.colorSpace),Te=o.convert(_.type),ye=P(_.internalFormat,De,Te,_.colorSpace),Ge=a&&_.isVideoTexture!==!0,Ye=ce.__version===void 0||re===!0,ot=N(_,Ze,Xe);D(i.TEXTURE_CUBE_MAP,_,Xe);let Ve;if(Ae){Ge&&Ye&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ot,ye,Ze.width,Ze.height);for(let ge=0;ge<6;ge++){Ve=fe[ge].mipmaps;for(let I=0;I<Ve.length;I++){let ve=Ve[I];_.format!==ht?De!==null?Ge?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,I,0,0,ve.width,ve.height,De,ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,I,ye,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,I,0,0,ve.width,ve.height,De,Te,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,I,ye,ve.width,ve.height,0,De,Te,ve.data)}}}else{Ve=_.mipmaps,Ge&&Ye&&(Ve.length>0&&ot++,t.texStorage2D(i.TEXTURE_CUBE_MAP,ot,ye,fe[0].width,fe[0].height));for(let ge=0;ge<6;ge++)if(Ue){Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,fe[ge].width,fe[ge].height,De,Te,fe[ge].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ye,fe[ge].width,fe[ge].height,0,De,Te,fe[ge].data);for(let I=0;I<Ve.length;I++){let xe=Ve[I].image[ge].image;Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,I+1,0,0,xe.width,xe.height,De,Te,xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,I+1,ye,xe.width,xe.height,0,De,Te,xe.data)}}else{Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,De,Te,fe[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ye,De,Te,fe[ge]);for(let I=0;I<Ve.length;I++){let ve=Ve[I];Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,I+1,0,0,De,Te,ve.image[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,I+1,ye,De,Te,ve.image[ge])}}}b(_,Xe)&&x(i.TEXTURE_CUBE_MAP),ce.__version=se.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function $(S,_,O,re,se,ce){let Me=o.convert(O.format,O.colorSpace),pe=o.convert(O.type),_e=P(O.internalFormat,Me,pe,O.colorSpace);if(!n.get(_).__hasExternalTextures){let Ue=Math.max(1,_.width>>ce),fe=Math.max(1,_.height>>ce);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,ce,_e,Ue,fe,_.depth,0,Me,pe,null):t.texImage2D(se,ce,_e,Ue,fe,0,Me,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),de(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,se,n.get(O).__webglTexture,0,ne(_)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,se,n.get(O).__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function te(S,_,O){if(i.bindRenderbuffer(i.RENDERBUFFER,S),_.depthBuffer&&!_.stencilBuffer){let re=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(O||de(_)){let se=_.depthTexture;se&&se.isDepthTexture&&(se.type===kt?re=i.DEPTH_COMPONENT32F:se.type===Vt&&(re=i.DEPTH_COMPONENT24));let ce=ne(_);de(_)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,re,_.width,_.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,re,_.width,_.height)}else i.renderbufferStorage(i.RENDERBUFFER,re,_.width,_.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,S)}else if(_.depthBuffer&&_.stencilBuffer){let re=ne(_);O&&de(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,i.DEPTH24_STENCIL8,_.width,_.height):de(_)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,i.DEPTH24_STENCIL8,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,S)}else{let re=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let se=0;se<re.length;se++){let ce=re[se],Me=o.convert(ce.format,ce.colorSpace),pe=o.convert(ce.type),_e=P(ce.internalFormat,Me,pe,ce.colorSpace),Ae=ne(_);O&&de(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,_e,_.width,_.height):de(_)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae,_e,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,_e,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ae(S,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X(_.depthTexture,0);let re=n.get(_.depthTexture).__webglTexture,se=ne(_);if(_.depthTexture.format===ni)de(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(_.depthTexture.format===fi)de(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function E(S){let _=n.get(S),O=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ae(_.__webglFramebuffer,S)}else if(O){_.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[re]),_.__webglDepthbuffer[re]=i.createRenderbuffer(),te(_.__webglDepthbuffer[re],S,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=i.createRenderbuffer(),te(_.__webglDepthbuffer,S,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function F(S,_,O){let re=n.get(S);_!==void 0&&$(re.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&E(S)}function A(S){let _=S.texture,O=n.get(S),re=n.get(_);S.addEventListener("dispose",K),S.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=_.version,s.memory.textures++);let se=S.isWebGLCubeRenderTarget===!0,ce=S.isWebGLMultipleRenderTargets===!0,Me=h(S)||a;if(se){O.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(a&&_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[pe]=[];for(let _e=0;_e<_.mipmaps.length;_e++)O.__webglFramebuffer[pe][_e]=i.createFramebuffer()}else O.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(a&&_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let pe=0;pe<_.mipmaps.length;pe++)O.__webglFramebuffer[pe]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(ce)if(r.drawBuffers){let pe=S.texture;for(let _e=0,Ae=pe.length;_e<Ae;_e++){let Ue=n.get(pe[_e]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=i.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&de(S)===!1){let pe=ce?_:[_];O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let _e=0;_e<pe.length;_e++){let Ae=pe[_e];O.__webglColorRenderbuffer[_e]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[_e]);let Ue=o.convert(Ae.format,Ae.colorSpace),fe=o.convert(Ae.type),Ze=P(Ae.internalFormat,Ue,fe,Ae.colorSpace,S.isXRRenderTarget===!0),Xe=ne(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,Ze,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,O.__webglColorRenderbuffer[_e])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),te(O.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),D(i.TEXTURE_CUBE_MAP,_,Me);for(let pe=0;pe<6;pe++)if(a&&_.mipmaps&&_.mipmaps.length>0)for(let _e=0;_e<_.mipmaps.length;_e++)$(O.__webglFramebuffer[pe][_e],S,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,_e);else $(O.__webglFramebuffer[pe],S,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);b(_,Me)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){let pe=S.texture;for(let _e=0,Ae=pe.length;_e<Ae;_e++){let Ue=pe[_e],fe=n.get(Ue);t.bindTexture(i.TEXTURE_2D,fe.__webglTexture),D(i.TEXTURE_2D,Ue,Me),$(O.__webglFramebuffer,S,Ue,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,0),b(Ue,Me)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?pe=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(pe,re.__webglTexture),D(pe,_,Me),a&&_.mipmaps&&_.mipmaps.length>0)for(let _e=0;_e<_.mipmaps.length;_e++)$(O.__webglFramebuffer[_e],S,_,i.COLOR_ATTACHMENT0,pe,_e);else $(O.__webglFramebuffer,S,_,i.COLOR_ATTACHMENT0,pe,0);b(_,Me)&&x(pe),t.unbindTexture()}S.depthBuffer&&E(S)}function he(S){let _=h(S)||a,O=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let re=0,se=O.length;re<se;re++){let ce=O[re];if(b(ce,_)){let Me=S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,pe=n.get(ce).__webglTexture;t.bindTexture(Me,pe),x(Me),t.unbindTexture()}}}function V(S){if(a&&S.samples>0&&de(S)===!1){let _=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],O=S.width,re=S.height,se=i.COLOR_BUFFER_BIT,ce=[],Me=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(S),_e=S.isWebGLMultipleRenderTargets===!0;if(_e)for(let Ae=0;Ae<_.length;Ae++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Ae=0;Ae<_.length;Ae++){ce.push(i.COLOR_ATTACHMENT0+Ae),S.depthBuffer&&ce.push(Me);let Ue=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(Ue===!1&&(S.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),_e&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[Ae]),Ue===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Me]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Me])),_e){let fe=n.get(_[Ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,fe,0)}i.blitFramebuffer(0,0,O,re,0,0,O,re,se,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_e)for(let Ae=0;Ae<_.length;Ae++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,pe.__webglColorRenderbuffer[Ae]);let Ue=n.get(_[Ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,Ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function ne(S){return Math.min(r.maxSamples,S.samples)}function de(S){let _=n.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function le(S){let _=s.render.frame;d.get(S)!==_&&(d.set(S,_),S.update())}function Ee(S,_){let O=S.colorSpace,re=S.format,se=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Kn||O!==At&&O!==St&&(We.getTransfer(O)===qe?a===!1?e.has("EXT_sRGB")===!0&&re===ht?(S.format=Kn,S.minFilter=ct,S.generateMipmaps=!1):_=Rn.sRGBToLinear(_):(re!==ht||se!==Ht)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),_}this.allocateTextureUnit=L,this.resetTextureUnits=ee,this.setTexture2D=X,this.setTexture2DArray=k,this.setTexture3D=W,this.setTextureCube=Q,this.rebindTextures=F,this.setupRenderTarget=A,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=V,this.setupDepthRenderbuffer=E,this.setupFrameBufferTexture=$,this.useMultisampledRTT=de}function jf(i,e,t){let n=t.isWebGL2;function r(o,s=St){let a,l=We.getTransfer(s);if(o===Ht)return i.UNSIGNED_BYTE;if(o===mr)return i.UNSIGNED_SHORT_4_4_4_4;if(o===gr)return i.UNSIGNED_SHORT_5_5_5_1;if(o===Ls)return i.BYTE;if(o===Ds)return i.SHORT;if(o===nn)return i.UNSIGNED_SHORT;if(o===pr)return i.INT;if(o===Vt)return i.UNSIGNED_INT;if(o===kt)return i.FLOAT;if(o===Mi)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===Us)return i.ALPHA;if(o===ht)return i.RGBA;if(o===Fs)return i.LUMINANCE;if(o===Is)return i.LUMINANCE_ALPHA;if(o===ni)return i.DEPTH_COMPONENT;if(o===fi)return i.DEPTH_STENCIL;if(o===Kn)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===Ns)return i.RED;if(o===_r)return i.RED_INTEGER;if(o===Os)return i.RG;if(o===vr)return i.RG_INTEGER;if(o===xr)return i.RGBA_INTEGER;if(o===Mr||o===Sr||o===yr||o===Er)if(l===qe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===Mr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Sr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===yr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Er)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===Mr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Sr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===yr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Er)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Oo||o===Bo||o===Go||o===zo)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===Oo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Bo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Go)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===zo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===br)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===Ho||o===Vo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===Ho)return l===qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===Vo)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===ko||o===Wo||o===Xo||o===qo||o===Yo||o===Zo||o===jo||o===Ko||o===Jo||o===Qo||o===$o||o===ea||o===ta||o===ia)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===ko)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Wo)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Xo)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===qo)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Yo)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Zo)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===jo)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Ko)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Jo)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Qo)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===$o)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===ea)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===ta)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===ia)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Tr||o===na||o===ra)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===Tr)return l===qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===na)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===ra)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===Bs||o===oa||o===aa||o===sa)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===Tr)return a.COMPRESSED_RED_RGTC1_EXT;if(o===oa)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===aa)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===sa)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===jt?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[o]!==void 0?i[o]:null}return{convert:r}}var fo=class extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}};var Qi=class extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}};var fp={type:"move"},zn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,s=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(let v of e.hand.values()){let h=t.getJointPose(v,n),f=this._getHandJoint(c,v);h!==null&&(f.matrix.fromArray(h.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=h.radius),f.visible=h!==null}let d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],m=d.position.distanceTo(p.position),g=.02,u=.005;c.inputState.pinching&&m>g+u?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&m<=g-u&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fp)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Qi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var ho=class extends Bt{constructor(e,t){super();let n=this,r=null,o=1,s=null,a="local-floor",l=1,c=null,d=null,p=null,m=null,g=null,u=null,v=t.getContextAttributes(),h=null,f=null,b=[],x=[],P=new He,N=null,R=new Rt;R.layers.enable(1),R.viewport=new rt;let w=new Rt;w.layers.enable(2),w.viewport=new rt;let K=[R,w],M=new fo;M.layers.enable(1),M.layers.enable(2);let T=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let C=b[D];return C===void 0&&(C=new zn,b[D]=C),C.getTargetRaySpace()},this.getControllerGrip=function(D){let C=b[D];return C===void 0&&(C=new zn,b[D]=C),C.getGripSpace()},this.getHand=function(D){let C=b[D];return C===void 0&&(C=new zn,b[D]=C),C.getHandSpace()};function q(D){let C=x.indexOf(D.inputSource);if(C===-1)return;let B=b[C];B!==void 0&&(B.update(D.inputSource,D.frame,c||s),B.dispatchEvent({type:D.type,data:D.inputSource}))}function ee(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",L);for(let D=0;D<b.length;D++){let C=x[D];C!==null&&(x[D]=null,b[D].disconnect(C))}T=null,U=null,e.setRenderTarget(h),g=null,m=null,p=null,r=null,f=null,ue.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){o=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(D){c=D},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return p},this.getFrame=function(){return u},this.getSession=function(){return r},this.setSession=async function(D){if(r=D,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",L),v.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let C={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:o};g=new XRWebGLLayer(r,t,C),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),f=new wt(g.framebufferWidth,g.framebufferHeight,{format:ht,type:Ht,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let C=null,B=null,Y=null;v.depth&&(Y=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,C=v.stencil?fi:ni,B=v.stencil?jt:Vt);let $={colorFormat:t.RGBA8,depthFormat:Y,scaleFactor:o};p=new XRWebGLBinding(r,t),m=p.createProjectionLayer($),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),f=new wt(m.textureWidth,m.textureHeight,{format:ht,type:Ht,depthTexture:new On(m.textureWidth,m.textureHeight,B,void 0,void 0,void 0,void 0,void 0,void 0,C),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let te=e.properties.get(f);te.__ignoreDepthValues=m.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),ue.setContext(r),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(D){for(let C=0;C<D.removed.length;C++){let B=D.removed[C],Y=x.indexOf(B);Y>=0&&(x[Y]=null,b[Y].disconnect(B))}for(let C=0;C<D.added.length;C++){let B=D.added[C],Y=x.indexOf(B);if(Y===-1){for(let te=0;te<b.length;te++)if(te>=x.length){x.push(B),Y=te;break}else if(x[te]===null){x[te]=B,Y=te;break}if(Y===-1)break}let $=b[Y];$&&$.connect(B)}}let G=new H,X=new H;function k(D,C,B){G.setFromMatrixPosition(C.matrixWorld),X.setFromMatrixPosition(B.matrixWorld);let Y=G.distanceTo(X),$=C.projectionMatrix.elements,te=B.projectionMatrix.elements,ae=$[14]/($[10]-1),E=$[14]/($[10]+1),F=($[9]+1)/$[5],A=($[9]-1)/$[5],he=($[8]-1)/$[0],V=(te[8]+1)/te[0],ne=ae*he,de=ae*V,le=Y/(-he+V),Ee=le*-he;C.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Ee),D.translateZ(le),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();let S=ae+le,_=E+le,O=ne-Ee,re=de+(Y-Ee),se=F*E/_*S,ce=A*E/_*S;D.projectionMatrix.makePerspective(O,re,se,ce,S,_),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}function W(D,C){C===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(C.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(r===null)return;M.near=w.near=R.near=D.near,M.far=w.far=R.far=D.far,(T!==M.near||U!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,U=M.far);let C=D.parent,B=M.cameras;W(M,C);for(let Y=0;Y<B.length;Y++)W(B[Y],C);B.length===2?k(M,R,w):M.projectionMatrix.copy(R.projectionMatrix),Q(D,M,C)};function Q(D,C,B){B===null?D.matrix.copy(C.matrixWorld):(D.matrix.copy(B.matrixWorld),D.matrix.invert(),D.matrix.multiply(C.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(C.projectionMatrix),D.projectionMatrixInverse.copy(C.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=Jn*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(m===null&&g===null))return l},this.setFoveation=function(D){l=D,m!==null&&(m.fixedFoveation=D),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=D)};let ie=null;function oe(D,C){if(d=C.getViewerPose(c||s),u=C,d!==null){let B=d.views;g!==null&&(e.setRenderTargetFramebuffer(f,g.framebuffer),e.setRenderTarget(f));let Y=!1;B.length!==M.cameras.length&&(M.cameras.length=0,Y=!0);for(let $=0;$<B.length;$++){let te=B[$],ae=null;if(g!==null)ae=g.getViewport(te);else{let F=p.getViewSubImage(m,te);ae=F.viewport,$===0&&(e.setRenderTargetTextures(f,F.colorTexture,m.ignoreDepthValues?void 0:F.depthStencilTexture),e.setRenderTarget(f))}let E=K[$];E===void 0&&(E=new Rt,E.layers.enable($),E.viewport=new rt,K[$]=E),E.matrix.fromArray(te.transform.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale),E.projectionMatrix.fromArray(te.projectionMatrix),E.projectionMatrixInverse.copy(E.projectionMatrix).invert(),E.viewport.set(ae.x,ae.y,ae.width,ae.height),$===0&&(M.matrix.copy(E.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Y===!0&&M.cameras.push(E)}}for(let B=0;B<b.length;B++){let Y=x[B],$=b[B];Y!==null&&$!==void 0&&$.update(Y,C,c||s)}ie&&ie(D,C),C.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:C}),u=null}let ue=new Br;ue.setAnimationLoop(oe),this.setAnimationLoop=function(D){ie=D},this.dispose=function(){}}};function Kf(i,e){function t(h,f){h.matrixAutoUpdate===!0&&h.updateMatrix(),f.value.copy(h.matrix)}function n(h,f){f.color.getRGB(h.fogColor.value,kr(i)),f.isFog?(h.fogNear.value=f.near,h.fogFar.value=f.far):f.isFogExp2&&(h.fogDensity.value=f.density)}function r(h,f,b,x,P){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(h,f):f.isMeshToonMaterial?(o(h,f),p(h,f)):f.isMeshPhongMaterial?(o(h,f),d(h,f)):f.isMeshStandardMaterial?(o(h,f),m(h,f),f.isMeshPhysicalMaterial&&g(h,f,P)):f.isMeshMatcapMaterial?(o(h,f),u(h,f)):f.isMeshDepthMaterial?o(h,f):f.isMeshDistanceMaterial?(o(h,f),v(h,f)):f.isMeshNormalMaterial?o(h,f):f.isLineBasicMaterial?(s(h,f),f.isLineDashedMaterial&&a(h,f)):f.isPointsMaterial?l(h,f,b,x):f.isSpriteMaterial?c(h,f):f.isShadowMaterial?(h.color.value.copy(f.color),h.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(h,f){h.opacity.value=f.opacity,f.color&&h.diffuse.value.copy(f.color),f.emissive&&h.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(h.map.value=f.map,t(f.map,h.mapTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,t(f.alphaMap,h.alphaMapTransform)),f.bumpMap&&(h.bumpMap.value=f.bumpMap,t(f.bumpMap,h.bumpMapTransform),h.bumpScale.value=f.bumpScale,f.side===it&&(h.bumpScale.value*=-1)),f.normalMap&&(h.normalMap.value=f.normalMap,t(f.normalMap,h.normalMapTransform),h.normalScale.value.copy(f.normalScale),f.side===it&&h.normalScale.value.negate()),f.displacementMap&&(h.displacementMap.value=f.displacementMap,t(f.displacementMap,h.displacementMapTransform),h.displacementScale.value=f.displacementScale,h.displacementBias.value=f.displacementBias),f.emissiveMap&&(h.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,h.emissiveMapTransform)),f.specularMap&&(h.specularMap.value=f.specularMap,t(f.specularMap,h.specularMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest);let b=e.get(f).envMap;if(b&&(h.envMap.value=b,h.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=f.reflectivity,h.ior.value=f.ior,h.refractionRatio.value=f.refractionRatio),f.lightMap){h.lightMap.value=f.lightMap;let x=i._useLegacyLights===!0?Math.PI:1;h.lightMapIntensity.value=f.lightMapIntensity*x,t(f.lightMap,h.lightMapTransform)}f.aoMap&&(h.aoMap.value=f.aoMap,h.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,h.aoMapTransform))}function s(h,f){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,f.map&&(h.map.value=f.map,t(f.map,h.mapTransform))}function a(h,f){h.dashSize.value=f.dashSize,h.totalSize.value=f.dashSize+f.gapSize,h.scale.value=f.scale}function l(h,f,b,x){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,h.size.value=f.size*b,h.scale.value=x*.5,f.map&&(h.map.value=f.map,t(f.map,h.uvTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,t(f.alphaMap,h.alphaMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest)}function c(h,f){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,h.rotation.value=f.rotation,f.map&&(h.map.value=f.map,t(f.map,h.mapTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,t(f.alphaMap,h.alphaMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest)}function d(h,f){h.specular.value.copy(f.specular),h.shininess.value=Math.max(f.shininess,1e-4)}function p(h,f){f.gradientMap&&(h.gradientMap.value=f.gradientMap)}function m(h,f){h.metalness.value=f.metalness,f.metalnessMap&&(h.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,h.metalnessMapTransform)),h.roughness.value=f.roughness,f.roughnessMap&&(h.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,h.roughnessMapTransform)),e.get(f).envMap&&(h.envMapIntensity.value=f.envMapIntensity)}function g(h,f,b){h.ior.value=f.ior,f.sheen>0&&(h.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),h.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(h.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,h.sheenColorMapTransform)),f.sheenRoughnessMap&&(h.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,h.sheenRoughnessMapTransform))),f.clearcoat>0&&(h.clearcoat.value=f.clearcoat,h.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(h.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,h.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(h.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===it&&h.clearcoatNormalScale.value.negate())),f.iridescence>0&&(h.iridescence.value=f.iridescence,h.iridescenceIOR.value=f.iridescenceIOR,h.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(h.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,h.iridescenceMapTransform)),f.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),f.transmission>0&&(h.transmission.value=f.transmission,h.transmissionSamplerMap.value=b.texture,h.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(h.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,h.transmissionMapTransform)),h.thickness.value=f.thickness,f.thicknessMap&&(h.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=f.attenuationDistance,h.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(h.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(h.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=f.specularIntensity,h.specularColor.value.copy(f.specularColor),f.specularColorMap&&(h.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,h.specularColorMapTransform)),f.specularIntensityMap&&(h.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,h.specularIntensityMapTransform))}function u(h,f){f.matcap&&(h.matcap.value=f.matcap)}function v(h,f){let b=e.get(f).light;h.referencePosition.value.setFromMatrixPosition(b.matrixWorld),h.nearDistance.value=b.shadow.camera.near,h.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Jf(i,e,t,n){let r={},o={},s=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,x){let P=x.program;n.uniformBlockBinding(b,P)}function c(b,x){let P=r[b.id];P===void 0&&(u(b),P=d(b),r[b.id]=P,b.addEventListener("dispose",h));let N=x.program;n.updateUBOMapping(b,N);let R=e.render.frame;o[b.id]!==R&&(m(b),o[b.id]=R)}function d(b){let x=p();b.__bindingPointIndex=x;let P=i.createBuffer(),N=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,P),i.bufferData(i.UNIFORM_BUFFER,N,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,P),P}function p(){for(let b=0;b<a;b++)if(s.indexOf(b)===-1)return s.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(b){let x=r[b.id],P=b.uniforms,N=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let R=0,w=P.length;R<w;R++){let K=Array.isArray(P[R])?P[R]:[P[R]];for(let M=0,T=K.length;M<T;M++){let U=K[M];if(g(U,R,M,N)===!0){let q=U.__offset,ee=Array.isArray(U.value)?U.value:[U.value],L=0;for(let G=0;G<ee.length;G++){let X=ee[G],k=v(X);typeof X=="number"||typeof X=="boolean"?(U.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,q+L,U.__data)):X.isMatrix3?(U.__data[0]=X.elements[0],U.__data[1]=X.elements[1],U.__data[2]=X.elements[2],U.__data[3]=0,U.__data[4]=X.elements[3],U.__data[5]=X.elements[4],U.__data[6]=X.elements[5],U.__data[7]=0,U.__data[8]=X.elements[6],U.__data[9]=X.elements[7],U.__data[10]=X.elements[8],U.__data[11]=0):(X.toArray(U.__data,L),L+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(b,x,P,N){let R=b.value,w=x+"_"+P;if(N[w]===void 0)return typeof R=="number"||typeof R=="boolean"?N[w]=R:N[w]=R.clone(),!0;{let K=N[w];if(typeof R=="number"||typeof R=="boolean"){if(K!==R)return N[w]=R,!0}else if(K.equals(R)===!1)return K.copy(R),!0}return!1}function u(b){let x=b.uniforms,P=0,N=16;for(let w=0,K=x.length;w<K;w++){let M=Array.isArray(x[w])?x[w]:[x[w]];for(let T=0,U=M.length;T<U;T++){let q=M[T],ee=Array.isArray(q.value)?q.value:[q.value];for(let L=0,G=ee.length;L<G;L++){let X=ee[L],k=v(X),W=P%N;W!==0&&N-W<k.boundary&&(P+=N-W),q.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=P,P+=k.storage}}}let R=P%N;return R>0&&(P+=N-R),b.__size=P,b.__cache={},this}function v(b){let x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function h(b){let x=b.target;x.removeEventListener("dispose",h);let P=s.indexOf(x.__bindingPointIndex);s.splice(P,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete o[x.id]}function f(){for(let b in r)i.deleteBuffer(r[b]);s=[],r={},o={}}return{bind:l,update:c,dispose:f}}var po=class{constructor(e={}){let{canvas:t=cl(),context:n=null,depth:r=!0,stencil:o=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let m;n!==null?m=n.getContextAttributes().alpha:m=s;let g=new Uint32Array(4),u=new Int32Array(4),v=null,h=null,f=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=et,this._useLegacyLights=!1,this.toneMapping=Zt,this.toneMappingExposure=1;let x=this,P=!1,N=0,R=0,w=null,K=-1,M=null,T=new rt,U=new rt,q=null,ee=new Oe(0),L=0,G=t.width,X=t.height,k=1,W=null,Q=null,ie=new rt(0,0,G,X),oe=new rt(0,0,G,X),ue=!1,D=new hn,C=!1,B=!1,Y=null,$=new $e,te=new He,ae=new H,E={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function F(){return w===null?k:1}let A=n;function he(y,z){for(let j=0;j<y.length;j++){let J=y[j],Z=t.getContext(J,z);if(Z!==null)return Z}return null}try{let y={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ja}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",ve,!1),A===null){let z=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&z.shift(),A=he(z,y),A===null)throw he(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&A instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),A.getShaderPrecisionFormat===void 0&&(A.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let V,ne,de,le,Ee,S,_,O,re,se,ce,Me,pe,_e,Ae,Ue,fe,Ze,Xe,De,Te,ye,Ge,Ye;function ot(){V=new df(A),ne=new nf(A,V,e),V.init(ne),ye=new jf(A,V,ne),de=new Yf(A,V,ne),le=new gf(A),Ee=new Of,S=new Zf(A,V,de,Ee,ne,ye,le),_=new of(x),O=new hf(x),re=new tl(A,ne),Ge=new ef(A,V,re,ne),se=new pf(A,re,le,Ge),ce=new vf(A,se,re,le),Xe=new _f(A,ne,S),Ue=new rf(Ee),Me=new Nf(x,_,O,V,ne,Ge,Ue),pe=new Kf(x,Ee),_e=new zf,Ae=new kf(V,ne),Ze=new $u(x,_,O,de,ce,m,l),fe=new qf(x,ce,ne),Ye=new Jf(A,le,ne,de),De=new tf(A,V,le,ne),Te=new mf(A,V,le,ne),le.programs=Me.programs,x.capabilities=ne,x.extensions=V,x.properties=Ee,x.renderLists=_e,x.shadowMap=fe,x.state=de,x.info=le}ot();let Ve=new ho(x,A);this.xr=Ve,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let y=V.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=V.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(y){y!==void 0&&(k=y,this.setSize(G,X,!1))},this.getSize=function(y){return y.set(G,X)},this.setSize=function(y,z,j=!0){if(Ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=y,X=z,t.width=Math.floor(y*k),t.height=Math.floor(z*k),j===!0&&(t.style.width=y+"px",t.style.height=z+"px"),this.setViewport(0,0,y,z)},this.getDrawingBufferSize=function(y){return y.set(G*k,X*k).floor()},this.setDrawingBufferSize=function(y,z,j){G=y,X=z,k=j,t.width=Math.floor(y*j),t.height=Math.floor(z*j),this.setViewport(0,0,y,z)},this.getCurrentViewport=function(y){return y.copy(T)},this.getViewport=function(y){return y.copy(ie)},this.setViewport=function(y,z,j,J){y.isVector4?ie.set(y.x,y.y,y.z,y.w):ie.set(y,z,j,J),de.viewport(T.copy(ie).multiplyScalar(k).floor())},this.getScissor=function(y){return y.copy(oe)},this.setScissor=function(y,z,j,J){y.isVector4?oe.set(y.x,y.y,y.z,y.w):oe.set(y,z,j,J),de.scissor(U.copy(oe).multiplyScalar(k).floor())},this.getScissorTest=function(){return ue},this.setScissorTest=function(y){de.setScissorTest(ue=y)},this.setOpaqueSort=function(y){W=y},this.setTransparentSort=function(y){Q=y},this.getClearColor=function(y){return y.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(y=!0,z=!0,j=!0){let J=0;if(y){let Z=!1;if(w!==null){let Se=w.texture.format;Z=Se===xr||Se===vr||Se===_r}if(Z){let Se=w.texture.type,be=Se===Ht||Se===Vt||Se===nn||Se===jt||Se===mr||Se===gr,Re=Ze.getClearColor(),Le=Ze.getClearAlpha(),ze=Re.r,Fe=Re.g,Ne=Re.b;be?(g[0]=ze,g[1]=Fe,g[2]=Ne,g[3]=Le,A.clearBufferuiv(A.COLOR,0,g)):(u[0]=ze,u[1]=Fe,u[2]=Ne,u[3]=Le,A.clearBufferiv(A.COLOR,0,u))}else J|=A.COLOR_BUFFER_BIT}z&&(J|=A.DEPTH_BUFFER_BIT),j&&(J|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),_e.dispose(),Ae.dispose(),Ee.dispose(),_.dispose(),O.dispose(),ce.dispose(),Ge.dispose(),Ye.dispose(),Me.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",Ut),Ve.removeEventListener("sessionend",Qe),Y&&(Y.dispose(),Y=null),Ft.stop()};function ge(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let y=le.autoReset,z=fe.enabled,j=fe.autoUpdate,J=fe.needsUpdate,Z=fe.type;ot(),le.autoReset=y,fe.enabled=z,fe.autoUpdate=j,fe.needsUpdate=J,fe.type=Z}function ve(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function xe(y){let z=y.target;z.removeEventListener("dispose",xe),Ce(z)}function Ce(y){we(y),Ee.remove(y)}function we(y){let z=Ee.get(y).programs;z!==void 0&&(z.forEach(function(j){Me.releaseProgram(j)}),y.isShaderMaterial&&Me.releaseShaderCache(y))}this.renderBufferDirect=function(y,z,j,J,Z,Se){z===null&&(z=E);let be=Z.isMesh&&Z.matrixWorld.determinant()<0,Re=uh(y,z,j,J,Z);de.setMaterial(J,be);let Le=j.index,ze=1;if(J.wireframe===!0){if(Le=se.getWireframeAttribute(j),Le===void 0)return;ze=2}let Fe=j.drawRange,Ne=j.attributes.position,lt=Fe.start*ze,Gt=(Fe.start+Fe.count)*ze;Se!==null&&(lt=Math.max(lt,Se.start*ze),Gt=Math.min(Gt,(Se.start+Se.count)*ze)),Le!==null?(lt=Math.max(lt,0),Gt=Math.min(Gt,Le.count)):Ne!=null&&(lt=Math.max(lt,0),Gt=Math.min(Gt,Ne.count));let xt=Gt-lt;if(xt<0||xt===1/0)return;Ge.setup(Z,J,Re,j,Le);let gi,tt=De;if(Le!==null&&(gi=re.get(Le),tt=Te,tt.setIndex(gi)),Z.isMesh)J.wireframe===!0?(de.setLineWidth(J.wireframeLinewidth*F()),tt.setMode(A.LINES)):tt.setMode(A.TRIANGLES);else if(Z.isLine){let ke=J.linewidth;ke===void 0&&(ke=1),de.setLineWidth(ke*F()),Z.isLineSegments?tt.setMode(A.LINES):Z.isLineLoop?tt.setMode(A.LINE_LOOP):tt.setMode(A.LINE_STRIP)}else Z.isPoints?tt.setMode(A.POINTS):Z.isSprite&&tt.setMode(A.TRIANGLES);if(Z.isBatchedMesh)tt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else if(Z.isInstancedMesh)tt.renderInstances(lt,xt,Z.count);else if(j.isInstancedBufferGeometry){let ke=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,To=Math.min(j.instanceCount,ke);tt.renderInstances(lt,xt,To)}else tt.render(lt,xt)};function Ke(y,z,j){y.transparent===!0&&y.side===Mt&&y.forceSinglePass===!1?(y.side=it,y.needsUpdate=!0,lr(y,z,j),y.side=zt,y.needsUpdate=!0,lr(y,z,j),y.side=Mt):lr(y,z,j)}this.compile=function(y,z,j=null){j===null&&(j=y),h=Ae.get(j),h.init(),b.push(h),j.traverseVisible(function(Z){Z.isLight&&Z.layers.test(z.layers)&&(h.pushLight(Z),Z.castShadow&&h.pushShadow(Z))}),y!==j&&y.traverseVisible(function(Z){Z.isLight&&Z.layers.test(z.layers)&&(h.pushLight(Z),Z.castShadow&&h.pushShadow(Z))}),h.setupLights(x._useLegacyLights);let J=new Set;return y.traverse(function(Z){let Se=Z.material;if(Se)if(Array.isArray(Se))for(let be=0;be<Se.length;be++){let Re=Se[be];Ke(Re,j,Z),J.add(Re)}else Ke(Se,j,Z),J.add(Se)}),b.pop(),h=null,J},this.compileAsync=function(y,z,j=null){let J=this.compile(y,z,j);return new Promise(Z=>{function Se(){if(J.forEach(function(be){Ee.get(be).currentProgram.isReady()&&J.delete(be)}),J.size===0){Z(y);return}setTimeout(Se,10)}V.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Je=null;function vt(y){Je&&Je(y)}function Ut(){Ft.stop()}function Qe(){Ft.start()}let Ft=new Br;Ft.setAnimationLoop(vt),typeof self<"u"&&Ft.setContext(self),this.setAnimationLoop=function(y){Je=y,Ve.setAnimationLoop(y),y===null?Ft.stop():Ft.start()},Ve.addEventListener("sessionstart",Ut),Ve.addEventListener("sessionend",Qe),this.render=function(y,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(z),z=Ve.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,z,w),h=Ae.get(y,b.length),h.init(),b.push(h),$.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),D.setFromProjectionMatrix($),B=this.localClippingEnabled,C=Ue.init(this.clippingPlanes,B),v=_e.get(y,f.length),v.init(),f.push(v),ci(y,z,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(W,Q),this.info.render.frame++,C===!0&&Ue.beginShadows();let j=h.state.shadowsArray;if(fe.render(j,y,z),C===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ze.render(v,y),h.setupLights(x._useLegacyLights),z.isArrayCamera){let J=z.cameras;for(let Z=0,Se=J.length;Z<Se;Z++){let be=J[Z];Xa(v,y,be,be.viewport)}}else Xa(v,y,z);w!==null&&(S.updateMultisampleRenderTarget(w),S.updateRenderTargetMipmap(w)),y.isScene===!0&&y.onAfterRender(x,y,z),Ge.resetDefaultState(),K=-1,M=null,b.pop(),b.length>0?h=b[b.length-1]:h=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function ci(y,z,j,J){if(y.visible===!1)return;if(y.layers.test(z.layers)){if(y.isGroup)j=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(z);else if(y.isLight)h.pushLight(y),y.castShadow&&h.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||D.intersectsSprite(y)){J&&ae.setFromMatrixPosition(y.matrixWorld).applyMatrix4($);let be=ce.update(y),Re=y.material;Re.visible&&v.push(y,be,Re,j,ae.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||D.intersectsObject(y))){let be=ce.update(y),Re=y.material;if(J&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),ae.copy(y.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),ae.copy(be.boundingSphere.center)),ae.applyMatrix4(y.matrixWorld).applyMatrix4($)),Array.isArray(Re)){let Le=be.groups;for(let ze=0,Fe=Le.length;ze<Fe;ze++){let Ne=Le[ze],lt=Re[Ne.materialIndex];lt&&lt.visible&&v.push(y,be,lt,j,ae.z,Ne)}}else Re.visible&&v.push(y,be,Re,j,ae.z,null)}}let Se=y.children;for(let be=0,Re=Se.length;be<Re;be++)ci(Se[be],z,j,J)}function Xa(y,z,j,J){let Z=y.opaque,Se=y.transmissive,be=y.transparent;h.setupLightsView(j),C===!0&&Ue.setGlobalState(x.clippingPlanes,j),Se.length>0&&ch(Z,Se,z,j),J&&de.viewport(T.copy(J)),Z.length>0&&sr(Z,z,j),Se.length>0&&sr(Se,z,j),be.length>0&&sr(be,z,j),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function ch(y,z,j,J){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;let Se=ne.isWebGL2;Y===null&&(Y=new wt(1,1,{generateMipmaps:!0,type:V.has("EXT_color_buffer_half_float")?Mi:Ht,minFilter:xi,samples:Se?4:0})),x.getDrawingBufferSize(te),Se?Y.setSize(te.x,te.y):Y.setSize(Qn(te.x),Qn(te.y));let be=x.getRenderTarget();x.setRenderTarget(Y),x.getClearColor(ee),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();let Re=x.toneMapping;x.toneMapping=Zt,sr(y,j,J),S.updateMultisampleRenderTarget(Y),S.updateRenderTargetMipmap(Y);let Le=!1;for(let ze=0,Fe=z.length;ze<Fe;ze++){let Ne=z[ze],lt=Ne.object,Gt=Ne.geometry,xt=Ne.material,gi=Ne.group;if(xt.side===Mt&&lt.layers.test(J.layers)){let tt=xt.side;xt.side=it,xt.needsUpdate=!0,qa(lt,j,J,Gt,xt,gi),xt.side=tt,xt.needsUpdate=!0,Le=!0}}Le===!0&&(S.updateMultisampleRenderTarget(Y),S.updateRenderTargetMipmap(Y)),x.setRenderTarget(be),x.setClearColor(ee,L),x.toneMapping=Re}function sr(y,z,j){let J=z.isScene===!0?z.overrideMaterial:null;for(let Z=0,Se=y.length;Z<Se;Z++){let be=y[Z],Re=be.object,Le=be.geometry,ze=J===null?be.material:J,Fe=be.group;Re.layers.test(j.layers)&&qa(Re,z,j,Le,ze,Fe)}}function qa(y,z,j,J,Z,Se){y.onBeforeRender(x,z,j,J,Z,Se),y.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),Z.onBeforeRender(x,z,j,J,y,Se),Z.transparent===!0&&Z.side===Mt&&Z.forceSinglePass===!1?(Z.side=it,Z.needsUpdate=!0,x.renderBufferDirect(j,z,J,Z,y,Se),Z.side=zt,Z.needsUpdate=!0,x.renderBufferDirect(j,z,J,Z,y,Se),Z.side=Mt):x.renderBufferDirect(j,z,J,Z,y,Se),y.onAfterRender(x,z,j,J,Z,Se)}function lr(y,z,j){z.isScene!==!0&&(z=E);let J=Ee.get(y),Z=h.state.lights,Se=h.state.shadowsArray,be=Z.state.version,Re=Me.getParameters(y,Z.state,Se,z,j),Le=Me.getProgramCacheKey(Re),ze=J.programs;J.environment=y.isMeshStandardMaterial?z.environment:null,J.fog=z.fog,J.envMap=(y.isMeshStandardMaterial?O:_).get(y.envMap||J.environment),ze===void 0&&(y.addEventListener("dispose",xe),ze=new Map,J.programs=ze);let Fe=ze.get(Le);if(Fe!==void 0){if(J.currentProgram===Fe&&J.lightsStateVersion===be)return Za(y,Re),Fe}else Re.uniforms=Me.getUniforms(y),y.onBuild(j,Re,x),y.onBeforeCompile(Re,x),Fe=Me.acquireProgram(Re,Le),ze.set(Le,Fe),J.uniforms=Re.uniforms;let Ne=J.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ne.clippingPlanes=Ue.uniform),Za(y,Re),J.needsLights=hh(y),J.lightsStateVersion=be,J.needsLights&&(Ne.ambientLightColor.value=Z.state.ambient,Ne.lightProbe.value=Z.state.probe,Ne.directionalLights.value=Z.state.directional,Ne.directionalLightShadows.value=Z.state.directionalShadow,Ne.spotLights.value=Z.state.spot,Ne.spotLightShadows.value=Z.state.spotShadow,Ne.rectAreaLights.value=Z.state.rectArea,Ne.ltc_1.value=Z.state.rectAreaLTC1,Ne.ltc_2.value=Z.state.rectAreaLTC2,Ne.pointLights.value=Z.state.point,Ne.pointLightShadows.value=Z.state.pointShadow,Ne.hemisphereLights.value=Z.state.hemi,Ne.directionalShadowMap.value=Z.state.directionalShadowMap,Ne.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ne.spotShadowMap.value=Z.state.spotShadowMap,Ne.spotLightMatrix.value=Z.state.spotLightMatrix,Ne.spotLightMap.value=Z.state.spotLightMap,Ne.pointShadowMap.value=Z.state.pointShadowMap,Ne.pointShadowMatrix.value=Z.state.pointShadowMatrix),J.currentProgram=Fe,J.uniformsList=null,Fe}function Ya(y){if(y.uniformsList===null){let z=y.currentProgram.getUniforms();y.uniformsList=Oi.seqWithValue(z.seq,y.uniforms)}return y.uniformsList}function Za(y,z){let j=Ee.get(y);j.outputColorSpace=z.outputColorSpace,j.batching=z.batching,j.instancing=z.instancing,j.instancingColor=z.instancingColor,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}function uh(y,z,j,J,Z){z.isScene!==!0&&(z=E),S.resetTextureUnits();let Se=z.fog,be=J.isMeshStandardMaterial?z.environment:null,Re=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:At,Le=(J.isMeshStandardMaterial?O:_).get(J.envMap||be),ze=J.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Fe=!!j.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ne=!!j.morphAttributes.position,lt=!!j.morphAttributes.normal,Gt=!!j.morphAttributes.color,xt=Zt;J.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(xt=x.toneMapping);let gi=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,tt=gi!==void 0?gi.length:0,ke=Ee.get(J),To=h.state.lights;if(C===!0&&(B===!0||y!==M)){let qt=y===M&&J.id===K;Ue.setState(J,y,qt)}let at=!1;J.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==To.state.version||ke.outputColorSpace!==Re||Z.isBatchedMesh&&ke.batching===!1||!Z.isBatchedMesh&&ke.batching===!0||Z.isInstancedMesh&&ke.instancing===!1||!Z.isInstancedMesh&&ke.instancing===!0||Z.isSkinnedMesh&&ke.skinning===!1||!Z.isSkinnedMesh&&ke.skinning===!0||Z.isInstancedMesh&&ke.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&ke.instancingColor===!1&&Z.instanceColor!==null||ke.envMap!==Le||J.fog===!0&&ke.fog!==Se||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Ue.numPlanes||ke.numIntersection!==Ue.numIntersection)||ke.vertexAlphas!==ze||ke.vertexTangents!==Fe||ke.morphTargets!==Ne||ke.morphNormals!==lt||ke.morphColors!==Gt||ke.toneMapping!==xt||ne.isWebGL2===!0&&ke.morphTargetsCount!==tt)&&(at=!0):(at=!0,ke.__version=J.version);let Bi=ke.currentProgram;at===!0&&(Bi=lr(J,z,Z));let ja=!1,Wn=!1,Ao=!1,Ct=Bi.getUniforms(),Gi=ke.uniforms;if(de.useProgram(Bi.program)&&(ja=!0,Wn=!0,Ao=!0),J.id!==K&&(K=J.id,Wn=!0),ja||M!==y){Ct.setValue(A,"projectionMatrix",y.projectionMatrix),Ct.setValue(A,"viewMatrix",y.matrixWorldInverse);let qt=Ct.map.cameraPosition;qt!==void 0&&qt.setValue(A,ae.setFromMatrixPosition(y.matrixWorld)),ne.logarithmicDepthBuffer&&Ct.setValue(A,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ct.setValue(A,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,Wn=!0,Ao=!0)}if(Z.isSkinnedMesh){Ct.setOptional(A,Z,"bindMatrix"),Ct.setOptional(A,Z,"bindMatrixInverse");let qt=Z.skeleton;qt&&(ne.floatVertexTextures?(qt.boneTexture===null&&qt.computeBoneTexture(),Ct.setValue(A,"boneTexture",qt.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Z.isBatchedMesh&&(Ct.setOptional(A,Z,"batchingTexture"),Ct.setValue(A,"batchingTexture",Z._matricesTexture,S));let wo=j.morphAttributes;if((wo.position!==void 0||wo.normal!==void 0||wo.color!==void 0&&ne.isWebGL2===!0)&&Xe.update(Z,j,Bi),(Wn||ke.receiveShadow!==Z.receiveShadow)&&(ke.receiveShadow=Z.receiveShadow,Ct.setValue(A,"receiveShadow",Z.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Gi.envMap.value=Le,Gi.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),Wn&&(Ct.setValue(A,"toneMappingExposure",x.toneMappingExposure),ke.needsLights&&fh(Gi,Ao),Se&&J.fog===!0&&pe.refreshFogUniforms(Gi,Se),pe.refreshMaterialUniforms(Gi,J,k,X,Y),Oi.upload(A,Ya(ke),Gi,S)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Oi.upload(A,Ya(ke),Gi,S),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ct.setValue(A,"center",Z.center),Ct.setValue(A,"modelViewMatrix",Z.modelViewMatrix),Ct.setValue(A,"normalMatrix",Z.normalMatrix),Ct.setValue(A,"modelMatrix",Z.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let qt=J.uniformsGroups;for(let Ro=0,dh=qt.length;Ro<dh;Ro++)if(ne.isWebGL2){let Ka=qt[Ro];Ye.update(Ka,Bi),Ye.bind(Ka,Bi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Bi}function fh(y,z){y.ambientLightColor.needsUpdate=z,y.lightProbe.needsUpdate=z,y.directionalLights.needsUpdate=z,y.directionalLightShadows.needsUpdate=z,y.pointLights.needsUpdate=z,y.pointLightShadows.needsUpdate=z,y.spotLights.needsUpdate=z,y.spotLightShadows.needsUpdate=z,y.rectAreaLights.needsUpdate=z,y.hemisphereLights.needsUpdate=z}function hh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(y,z,j){Ee.get(y.texture).__webglTexture=z,Ee.get(y.depthTexture).__webglTexture=j;let J=Ee.get(y);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=j===void 0,J.__autoAllocateDepthBuffer||V.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,z){let j=Ee.get(y);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(y,z=0,j=0){w=y,N=z,R=j;let J=!0,Z=null,Se=!1,be=!1;if(y){let Le=Ee.get(y);Le.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(A.FRAMEBUFFER,null),J=!1):Le.__webglFramebuffer===void 0?S.setupRenderTarget(y):Le.__hasExternalTextures&&S.rebindTextures(y,Ee.get(y.texture).__webglTexture,Ee.get(y.depthTexture).__webglTexture);let ze=y.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(be=!0);let Fe=Ee.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Fe[z])?Z=Fe[z][j]:Z=Fe[z],Se=!0):ne.isWebGL2&&y.samples>0&&S.useMultisampledRTT(y)===!1?Z=Ee.get(y).__webglMultisampledFramebuffer:Array.isArray(Fe)?Z=Fe[j]:Z=Fe,T.copy(y.viewport),U.copy(y.scissor),q=y.scissorTest}else T.copy(ie).multiplyScalar(k).floor(),U.copy(oe).multiplyScalar(k).floor(),q=ue;if(de.bindFramebuffer(A.FRAMEBUFFER,Z)&&ne.drawBuffers&&J&&de.drawBuffers(y,Z),de.viewport(T),de.scissor(U),de.setScissorTest(q),Se){let Le=Ee.get(y.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+z,Le.__webglTexture,j)}else if(be){let Le=Ee.get(y.texture),ze=z||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,Le.__webglTexture,j||0,ze)}K=-1},this.readRenderTargetPixels=function(y,z,j,J,Z,Se,be){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Ee.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&be!==void 0&&(Re=Re[be]),Re){de.bindFramebuffer(A.FRAMEBUFFER,Re);try{let Le=y.texture,ze=Le.format,Fe=Le.type;if(ze!==ht&&ye.convert(ze)!==A.getParameter(A.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ne=Fe===Mi&&(V.has("EXT_color_buffer_half_float")||ne.isWebGL2&&V.has("EXT_color_buffer_float"));if(Fe!==Ht&&ye.convert(Fe)!==A.getParameter(A.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===kt&&(ne.isWebGL2||V.has("OES_texture_float")||V.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=y.width-J&&j>=0&&j<=y.height-Z&&A.readPixels(z,j,J,Z,ye.convert(ze),ye.convert(Fe),Se)}finally{let Le=w!==null?Ee.get(w).__webglFramebuffer:null;de.bindFramebuffer(A.FRAMEBUFFER,Le)}}},this.copyFramebufferToTexture=function(y,z,j=0){let J=Math.pow(2,-j),Z=Math.floor(z.image.width*J),Se=Math.floor(z.image.height*J);S.setTexture2D(z,0),A.copyTexSubImage2D(A.TEXTURE_2D,j,0,0,y.x,y.y,Z,Se),de.unbindTexture()},this.copyTextureToTexture=function(y,z,j,J=0){let Z=z.image.width,Se=z.image.height,be=ye.convert(j.format),Re=ye.convert(j.type);S.setTexture2D(j,0),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,j.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,j.unpackAlignment),z.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,J,y.x,y.y,Z,Se,be,Re,z.image.data):z.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,J,y.x,y.y,z.mipmaps[0].width,z.mipmaps[0].height,be,z.mipmaps[0].data):A.texSubImage2D(A.TEXTURE_2D,J,y.x,y.y,be,Re,z.image),J===0&&j.generateMipmaps&&A.generateMipmap(A.TEXTURE_2D),de.unbindTexture()},this.copyTextureToTexture3D=function(y,z,j,J,Z=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Se=y.max.x-y.min.x+1,be=y.max.y-y.min.y+1,Re=y.max.z-y.min.z+1,Le=ye.convert(J.format),ze=ye.convert(J.type),Fe;if(J.isData3DTexture)S.setTexture3D(J,0),Fe=A.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)S.setTexture2DArray(J,0),Fe=A.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,J.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,J.unpackAlignment);let Ne=A.getParameter(A.UNPACK_ROW_LENGTH),lt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Gt=A.getParameter(A.UNPACK_SKIP_PIXELS),xt=A.getParameter(A.UNPACK_SKIP_ROWS),gi=A.getParameter(A.UNPACK_SKIP_IMAGES),tt=j.isCompressedTexture?j.mipmaps[Z]:j.image;A.pixelStorei(A.UNPACK_ROW_LENGTH,tt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,tt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,y.min.x),A.pixelStorei(A.UNPACK_SKIP_ROWS,y.min.y),A.pixelStorei(A.UNPACK_SKIP_IMAGES,y.min.z),j.isDataTexture||j.isData3DTexture?A.texSubImage3D(Fe,Z,z.x,z.y,z.z,Se,be,Re,Le,ze,tt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),A.compressedTexSubImage3D(Fe,Z,z.x,z.y,z.z,Se,be,Re,Le,tt.data)):A.texSubImage3D(Fe,Z,z.x,z.y,z.z,Se,be,Re,Le,ze,tt),A.pixelStorei(A.UNPACK_ROW_LENGTH,Ne),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,lt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Gt),A.pixelStorei(A.UNPACK_SKIP_ROWS,xt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,gi),Z===0&&J.generateMipmaps&&A.generateMipmap(Fe),de.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?S.setTextureCube(y,0):y.isData3DTexture?S.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?S.setTexture2DArray(y,0):S.setTexture2D(y,0),de.unbindTexture()},this.resetState=function(){N=0,R=0,w=null,de.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ot}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===rn?"display-p3":"srgb",t.unpackColorSpace=We.workingColorSpace===Hi?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===et?ri:Ar}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ri?et:At}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}};var Hn=class extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var $i=class extends ft{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var mo=class extends Be{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};var go=class extends Qt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};var Qf=new $e,za=new Mn,_o=new mi,vo=new H,xo=class extends pt{constructor(e=new ft,t=new go){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(r),_o.radius+=o,e.ray.intersectsSphere(_o)===!1)return;Qf.copy(r).invert(),za.copy(e.ray).applyMatrix4(Qf);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,p=n.attributes.position;if(c!==null){let m=Math.max(0,s.start),g=Math.min(c.count,s.start+s.count);for(let u=m,v=g;u<v;u++){let h=c.getX(u);vo.fromBufferAttribute(p,h),$f(vo,h,l,r,e,t,this)}}else{let m=Math.max(0,s.start),g=Math.min(p.count,s.start+s.count);for(let u=m,v=g;u<v;u++)vo.fromBufferAttribute(p,u),$f(vo,u,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function $f(i,e,t,n,r,o,s){let a=za.distanceSqToPoint(i);if(a<t){let l=new H;za.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:s})}}var Mo=class extends mt{constructor(e=null,t=1,n=1,r,o,s,a,l,c=nt,d=nt,p,m){super(null,s,a,l,c,d,r,o,p,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};We.enabled=!1;var So="#f4fbfa",hp=["#2b2a22","#33302a","#2a3027"],dp=["#36463a","#34463d","#3d4c3b"],pp=["#4f6b4f","#56785a","#4b6a55","#5b7a58"],nh=[["#1d3f33","#3d6e52"],["#21463a","#4a7c5b"],["#183a33","#356a54"],["#28503c","#5a8a5e"],["#1f4a3f","#46775d"],["#2a4f36","#5d8a55"]],mp={deep:["#252a24","#2b2f28","#262c25"],mid:["#34453a","#384a3c","#33443a"],tip:["#4a6650","#4f6b52","#53704f","#4a6852"]},rh=[["#183a35","#3a6a5c"],["#1d4239","#447565"],["#163631","#33655a"],["#22483c","#4d7c62"]],gp=[["#2f5f45","#6f9f6a"],["#35664a","#7aa872"]],_p=["ovate","cordate","lance","drip"],vp={ovate:0,cordate:1,lance:2,drip:3},xp={ovate:[.42,.52],cordate:[.62,.78],lance:[.17,.24],drip:[.4,.5]},Eo={coral:{main:"#e9d6dc",light:"#fff6f6",alt:"#d9c2cc",inner:"#fffaf2",eye:"#8a5a62"},pink:{main:"#e6d8ec",light:"#fff8ff",alt:"#d2c4e0",inner:"#fdf6ff",eye:"#7a5a82"},gold:{main:"#efe6c6",light:"#fffdf0",alt:"#e2d6aa",inner:"#fffbea",eye:"#8a6a2a"},lav:{main:"#cfc6ea",light:"#f3f0fd",alt:"#b9addf",inner:"#f7f4ff",eye:"#4b3a7a"},peri:{main:"#c9d6f0",light:"#f2f6ff",alt:"#b3c3e6",inner:"#f5f8ff",eye:"#3d4f8a"}},je=i=>[parseInt(i.slice(1,3),16)/255,parseInt(i.slice(3,5),16)/255,parseInt(i.slice(5,7),16)/255],kn=(i,e,t)=>[i[0]+(e[0]-i[0])*t,i[1]+(e[1]-i[1])*t,i[2]+(e[2]-i[2])*t],Tt=(i,e,t)=>i<e?e:i>t?t:i;var or=(i,e)=>{let t=i-e;for(;t>Math.PI;)t-=2*Math.PI;for(;t<-Math.PI;)t+=2*Math.PI;return t};function Wa(i){let e=i>>>0,t=()=>{e+=1831565813;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return{next:t,range:(n,r)=>n+t()*(r-n),int:(n,r)=>Math.floor(n+t()*(r-n+1)),chance:n=>t()<n,pick:n=>n[Math.floor(t()*n.length)],sign:()=>t()<.5?-1:1,shuffle:n=>{let r=n.slice();for(let o=r.length-1;o>0;o--){let s=Math.floor(t()*(o+1));[r[o],r[s]]=[r[s],r[o]]}return r}}}var yo=(i,e,t)=>{let n=1+i.range(-t,t);return[Tt(e[0]*n,0,1),Tt(e[1]*n,0,1),Tt(e[2]*n,0,1)]},ei=`
uniform float uT; uniform float uTime; uniform float uGlow; uniform vec2 uPar; uniform vec2 uShadowOff;
uniform float uRouteHead; uniform float uRouteMode; uniform float uRouteSpacing; uniform vec3 uFocus; uniform float uFocusR;
uniform vec4 uFF[16]; uniform vec3 uFFCol; uniform vec3 uHaze;
varying vec2 vW2;
// light from nearby fireflies (positions in world units, w = brightness)
float ffAt(vec2 p){ float s = 0.0; for (int i = 0; i < 16; i++) { vec4 f = uFF[i]; vec2 d = p - f.xy; s += f.w * exp(-dot(d, d) * 6.0); } return s; }
vec3 rotZ(vec3 p, float a){ float c=cos(a), s=sin(a); return vec3(c*p.x - s*p.y, s*p.x + c*p.y, p.z); }
vec3 rotX(vec3 p, float a){ float c=cos(a), s=sin(a); return vec3(p.x, c*p.y - s*p.z, s*p.y + c*p.z); }
vec3 rotY(vec3 p, float a){ float c=cos(a), s=sin(a); return vec3(c*p.x + s*p.z, p.y, -s*p.x + c*p.z); }
float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
  return mix(mix(hash(i), hash(i+vec2(1.0,0.0)), f.x), mix(hash(i+vec2(0.0,1.0)), hash(i+vec2(1.0,1.0)), f.x), f.y); }
`,en=`
  vW2 = p.xy;
  p.xy += uPar * (p.z + 0.6);
#ifdef SHADOW
  p.xy += uShadowOff * (p.z + 1.0);
#endif
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
`,ar=`
#ifdef SHADOW
  gl_FragColor = vec4(0.0, 0.0, 0.0, alpha);
#else
  gl_FragColor = vec4(c, alpha);
#endif
`,bo=`
const vec3 LDIR = normalize(vec3(-0.45, 0.6, 0.75));
const vec3 HDIR = normalize(vec3(-0.45, 0.6, 1.75));
`,Mp=ei+`
attribute vec3 aOff; attribute float aW; attribute float aBirth; attribute float aArc; attribute float aPulse; attribute vec3 aCol; attribute float aSide;
attribute float aRoute; attribute float aRouteLen;
varying vec3 vN; varying vec3 vCol; varying float vArc; varying float vSide; varying float vPulse; varying float vRoute; varying float vRouteLen;
void main(){
  vRoute = aRoute; vRouteLen = aRouteLen;
  float g = clamp((uT - aBirth) / 0.24, 0.0, 1.0); g = g*g*(3.0-2.0*g);
  vec3 p = position + aOff * aW * g;
  vN = aOff; vCol = aCol; vArc = aArc; vSide = aSide; vPulse = aPulse;
${en}
}`,Sp=ei+bo+`
varying vec3 vN; varying vec3 vCol; varying float vArc; varying float vSide; varying float vPulse; varying float vRoute; varying float vRouteLen;
void main(){
  vec3 N = normalize(vN);
  float d = dot(N, LDIR)*0.5 + 0.5;
  float sp = pow(max(dot(N, HDIR), 0.0), 30.0);
  // bark: fine longitudinal fibres, a few lenticel flecks, darker ring scars
  float fib = vnoise(vec2(vSide*9.0, vArc*26.0)) * 0.6 + vnoise(vec2(vSide*23.0, vArc*70.0)) * 0.4;
  float fleck = smoothstep(0.82, 0.9, vnoise(vec2(vSide*14.0 + 3.1, vArc*38.0)));
  float ring = smoothstep(0.93, 1.0, fract(vArc*5.0 + vnoise(vec2(vSide*2.0, vArc))*0.3)) * step(0.6, hash(vec2(floor(vArc*5.0), 1.7)));
  vec3 c = vCol * (0.42 + 0.34*d);
  c *= 0.9 + 0.16*fib;
  c = mix(c, c*1.25 + 0.05, fleck*0.35);
  c *= 1.0 - 0.14*ring;
  float rim = 1.0 - abs(N.z);
  c = mix(c, c*0.82, rim*0.35);                                   // rounded, shaded flanks
  c += vec3(0.85, 1.0, 0.98) * sp * 0.18 * (0.6 + 0.4*fib);
  c += vec3(0.22, 0.30, 0.30) * rim * 0.22;               // the evening sky catches the flanks
  c += uFFCol * ffAt(vW2) * 0.45;
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
${ar}
}`,yp=ei+`
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
${en}
}`,Ep=ei+bo+`
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
  vec3 c = base * (0.40 + 0.40*d);
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
  c = mix(c, c*1.28 + vec3(0.06, 0.11, 0.07), edge*0.45);                              // the sky shining through the thin margin
  c *= 1.0 - 0.2 * smoothstep(0.9, 1.0, au / lim);                                      // fine darker rim
  c *= 0.84 + 0.16 * smoothstep(0.0, 0.2, v);                                           // darker where it meets the stalk
  if (back) c = mix(c, vec3(0.30, 0.42, 0.37), 0.4);                                     // matte underside
  float sp = pow(max(dot(N, HDIR), 0.0), 28.0) * (back ? 0.03 : 0.13) * (0.65 + 0.35*mott) * (1.0 - vein*0.5);
  c += vec3(0.9, 1.0, 1.0) * sp;                                                        // waxy cuticle
  c += vec3(0.45, 1.0, 0.92) * vein * vGlow * uGlow * 0.14;
  float ffl = ffAt(vW2);
  c += uFFCol * ffl * (0.30 + 0.55*edge + 0.35*vein);                                   // firefly light on the leaf
  c = mix(c, uHaze, vFade);
  float alpha = (0.97 - 0.09*edge) * edgeA;
${ar}
}`,bp=ei+`
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
${en}
}`,Tp=ei+bo+`
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
  c *= 0.62 + 0.3*d;
  c *= 0.86 + 0.14*smoothstep(0.0, 0.25, v);
  c += uFFCol * ffAt(vW2) * 0.4;
  c = mix(c, c*1.08 + 0.07, smoothstep(0.6, 1.0, au)*0.5);                               // translucent margin
  if (back) c = mix(c, c*0.9 + 0.08, 0.5);
  c += vec3(1.0, 0.86, 0.55) * pow(1.0 - v, 4.0) * 0.14 * uGlow;
  c += vec3(1.0) * pow(max(dot(N, HDIR), 0.0), 16.0) * 0.12;
  c = mix(c, c*1.12 + vec3(0.1, 0.09, 0.07), vFocus * 0.7);                              // brighten near a hovered button
  float alpha = 0.96 - 0.12*smoothstep(0.7, 1.0, au);
${ar}
}`,Ap=ei+`
attribute vec3 iPos; attribute float iR; attribute float iBirth; attribute vec3 iColA; attribute vec3 iColB; attribute float iKind;
varying vec3 vN; varying vec2 vUv; varying vec3 vColA; varying vec3 vColB; varying float vKind;
void main(){
  float g = smoothstep(0.0, 1.1, uT - iBirth);
  vec3 p = position * iR * g * vec3(1.0, 1.0, iKind > 1.5 ? 0.8 : 0.5);
  p += iPos;
  vN = normal; vUv = uv; vColA = iColA; vColB = iColB; vKind = iKind;
${en}
}`,wp=ei+bo+`
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
${ar}
}`,Rp=ei+`
attribute vec3 iPos; attribute float iR; attribute vec3 iCol; attribute float iMax; attribute float iBirth; attribute float iPhase;
varying vec2 vQ; varying vec3 vCol; varying float vA;
void main(){
  vec3 p = vec3(position.xy * iR, 0.0) + iPos;
  vQ = position.xy; vCol = iCol;
  float fo = uFocus.z * (1.0 - smoothstep(0.0, uFocusR, distance(iPos.xy, uFocus.xy)));
  vA = iMax * smoothstep(0.0, 2.2, uT - iBirth) * uGlow * (0.86 + 0.14*sin(uTime*0.9 + iPhase)) * (1.0 + 1.4*fo);
${en}
}`,Cp=`
varying vec2 vQ; varying vec3 vCol; varying float vA;
void main(){
  float r = length(vQ);
  float a = exp(-r*r*3.2) * (1.0 - smoothstep(0.62, 0.8, r));
  vec3 c = mix(vCol, vec3(1.0), exp(-r*r*14.0)*0.55);
  gl_FragColor = vec4(c, a * vA);
}`,Pp=ei+`
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
${en}
}`,Lp=`
varying vec3 vCol; varying float vA;
void main(){
  float r = length(gl_PointCoord - 0.5) * 2.0;
  float a = 1.0 - smoothstep(0.45, 1.0, r);
  gl_FragColor = vec4(mix(vCol, vec3(1.0), (1.0 - r)*0.45), a * vA * 0.9);
}`,eh="void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }",Dp=`
uniform sampler2D tex; uniform vec2 dir; uniform vec2 res;
void main(){
  vec2 uv = gl_FragCoord.xy / res;
  float w[5]; w[0]=0.2270270; w[1]=0.1945946; w[2]=0.1216216; w[3]=0.0540541; w[4]=0.0162162;
  float a = texture2D(tex, uv).a * w[0];
  for (int i = 1; i < 5; i++) { vec2 o = dir * float(i) * 1.6 / res; a += (texture2D(tex, uv + o).a + texture2D(tex, uv - o).a) * w[i]; }
  gl_FragColor = vec4(0.0, 0.0, 0.0, a);
}`,Up=`
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
}`;function Ha(i,e){let t=[],n=[],r=[];for(let s=0;s<=e;s++)for(let a=0;a<=i;a++){let l=a/i*2-1,c=s/e;t.push(0,0,0),n.push(l,c)}for(let s=0;s<e;s++)for(let a=0;a<i;a++){let l=s*(i+1)+a,c=l+i+1;r.push(l,c,l+1,c,c+1,l+1)}let o=new $i;return o.setAttribute("position",new Be(new Float32Array(t),3)),o.setAttribute("uv",new Be(new Float32Array(n),2)),o.setIndex(r),o}function Fp(i,e){let t=[],n=[],r=[],o=[];for(let a=0;a<=i;a++){let l=a/i*Math.PI/2;for(let c=0;c<=e;c++){let d=c/e*Math.PI*2,p=Math.sin(l)*Math.cos(d),m=Math.sin(l)*Math.sin(d),g=Math.cos(l);t.push(p,m,g),n.push(p,m,g),r.push(c/e,a/i)}}for(let a=0;a<i;a++)for(let l=0;l<e;l++){let c=a*(e+1)+l,d=c+e+1;o.push(c,d,c+1,d,d+1,c+1)}let s=new $i;return s.setAttribute("position",new Be(new Float32Array(t),3)),s.setAttribute("normal",new Be(new Float32Array(n),3)),s.setAttribute("uv",new Be(new Float32Array(r),2)),s.setIndex(o),s}function Ip(){let i=new $i;return i.setAttribute("position",new Be(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),i.setIndex([0,1,2,0,2,3]),i}function Vn(i,e,t){let n=new $i;for(let r of Object.keys(i.attributes))n.setAttribute(r,i.attributes[r]);n.setIndex(i.index);for(let[r,[o,s]]of Object.entries(t))n.setAttribute(r,new mo(new Float32Array(o),s));return n.instanceCount=e,n}function Np(i){let t=0,n=0;for(let x of i)t+=x.pts.length*7,n+=(x.pts.length-1)*6*6;let r=new Float32Array(t*3),o=new Float32Array(t*3),s=new Float32Array(t),a=new Float32Array(t),l=new Float32Array(t),c=new Float32Array(t),d=new Float32Array(t*3),p=new Float32Array(t),m=new Float32Array(t).fill(-1),g=new Float32Array(t).fill(1),u=new Uint32Array(n),v=[],h=0,f=0;for(let x of i){let P=h,N=x.plant==="B"?mp:{deep:hp,mid:dp,tip:pp},R=je(N.deep[Math.floor(x.tone*3)%3]),w=je(N.mid[Math.floor(x.tone*7)%3]),K=je(N.tip[Math.floor(x.tone*11)%4]);x.fid!=null&&v.push({fid:x.fid,start:h,count:x.pts.length*7});let M=x.pts.length;for(let T=0;T<M;T++){let U=x.pts[T],q=T/(M-1),ee;if(x.col)ee=kn(x.col[0],x.col[1],q);else{let k=x.depth===0?q:x.depth===3?.75+q*.25:.35+q*.65;ee=k<.6?kn(R,w,k/.6):kn(w,K,(k-.6)/.4)}let L=Math.sin(U.a),G=Math.cos(U.a),X=U.z??x.z;for(let k=0;k<7;k++){let W=k/6*Math.PI;r.set([U.x,-U.y,X],h*3),o.set([Math.cos(W)*L,Math.cos(W)*G,Math.sin(W)],h*3),s[h]=U.w,a[h]=U.t,l[h]=U.arc,c[h]=x.tree*.137%1,d.set(ee,h*3),p[h]=k/6,U.route!=null&&(m[h]=U.route,g[h]=x.routeLen||1),h++}}for(let T=0;T<M-1;T++)for(let U=0;U<6;U++){let q=P+T*7+U,ee=q+7;u.set([q,ee,q+1,ee,ee+1,q+1],f),f+=6}}let b=new ft;return b.setAttribute("position",new Be(r,3)),b.setAttribute("aOff",new Be(o,3)),b.setAttribute("aW",new Be(s,1)),b.setAttribute("aBirth",new Be(a,1)),b.setAttribute("aArc",new Be(l,1)),b.setAttribute("aPulse",new Be(c,1)),b.setAttribute("aCol",new Be(d,3)),b.setAttribute("aSide",new Be(p,1)),b.setAttribute("aRoute",new Be(m,1)),b.setAttribute("aRouteLen",new Be(g,1)),b.setIndex(new Be(u,1)),b.userData.ranges=v,b}function oh(i){return(e,t)=>{let n=1e9;for(let r of i){let o=(r.x0+r.x1)/2,s=(r.y0+r.y1)/2,a=Math.abs(e-o)-(r.x1-r.x0)/2,l=Math.abs(t-s)-(r.y1-r.y0)/2,c=Math.hypot(Math.max(a,0),Math.max(l,0))+Math.min(Math.max(a,l),0);c<n&&(n=c)}return n}}function ah(i,e){let t=[],n=new Set,r=s=>{for(let a=s.parentElement;a&&a!==e;a=a.parentElement){if(a===document.body||a===document.documentElement)return null;if(getComputedStyle(a).overflow!=="visible")return a}return null},o=document.createTreeWalker(i,NodeFilter.SHOW_TEXT);for(let s=o.nextNode();s;s=o.nextNode()){if(!s.textContent.trim())continue;let a=s.parentElement;if(!a||a.closest("script,style,noscript,template,.epx-ff,.epx-ffside"))continue;let l=document.createRange();l.selectNodeContents(s);let c=r(s),d=c&&c.getBoundingClientRect();for(let p of l.getClientRects()){if(p.width<1||p.height<1)continue;if(!d){t.push(p);continue}(p.left<d.left-1||p.right>d.right+1||p.top<d.top-1||p.bottom>d.bottom+1)&&!n.has(c)&&d.width*d.height<4e6&&c!==e&&(n.add(c),t.push(d));let g=Math.max(p.left,d.left),u=Math.min(p.right,d.right),v=Math.max(p.top,d.top),h=Math.min(p.bottom,d.bottom);u-g>1&&h-v>1&&t.push({left:g,right:u,top:v,bottom:h,width:u-g,height:h-v})}}return t}function sh(i,e){let{field:t,pad:n,k:r}=e,o=e.density??1,s=(u,v,h)=>t(u,v)-n-h,a=(u,v)=>{let f=t(u+.02,v)-t(u-.02,v),b=t(u,v+.02)-t(u,v-.02),x=Math.hypot(f,b)||1;return[f/x,b/x]},l={vines:[],leaves:[],flowers:[],petals:[],domes:[],halos:[],dust:[]},c=0;function d(u){let v=[],h=u.x,f=u.y,b=u.a,x=0,P=u.t0,N=.045,R=i.range(.5,1.4),w=i.range(2,4.2),K=i.range(0,6.3),M=i.range(0,6.3),T=i.range(.3,.9)*i.sign()*(u.calm??1),U=i.range(.15,.55)*(u.calm??1),q=i.range(0,6.3),ee=u.len/(u.dur||1),L=u.curl?u.len*i.range(.5,.72):1e9,G=i.sign(),X=.95*r,k=u.tree??c++;for(;x<=u.len;){let ue=x/u.len,D=Math.max(u.w0*Math.pow(1-ue*(u.taper??.86),.9),.007),C=s(h,f,D+u.reach);if(C<0&&(v.length>1||e.inside(h,f,0))&&!(u.main&&h>e.offX)||(u.clock==="scroll"&&(P=Math.max(P,f+(u.lead??0))),u.stopY!=null&&f>u.stopY))break;if(v.push({x:h,y:f,t:P,w:D,arc:u.arc0+x,a:b,route:u.routeArc?u.arc0+x:void 0}),u.goal){let Y=u.goal.x-h,$=u.goal.y-f,te=Math.hypot(Y,$);if(te<.05){v.push({x:u.goal.x,y:u.goal.y,t:P+.03,w:D,arc:u.arc0+x+te,a:b}),u.reached=!0;break}}let B=(T*Math.sin(R*x+K)+U*Math.sin(w*x+M))*N*1.3;if(x>L&&(B+=G*N*(2.2+(x-L)/(u.len-L)*16)),C<X){let Y=a(h,f),$=-Y[1],te=Y[0];$*Math.cos(b)+te*Math.sin(b)<0&&($=-$,te=-te);let ae=1-Math.max(C,0)/X,E=Math.atan2(te+Y[1]*ae*.9,$+Y[0]*ae*.9);B+=or(E,b)*Math.min(1,.06+ae*ae*.8)*.55}if(B+=e.steer(h,f,b,x,u),u.goal){let Y=Math.hypot(u.goal.x-h,u.goal.y-f);B=B*Math.min(1,Y/1.2)+or(Math.atan2(u.goal.y-f,u.goal.x-h),b)*Tt(.04+.35/(Y+.4),0,.6)}if(b+=B,u.clock!=="scroll"){let Y=.42+.58*Math.pow(Math.sin(x*1.25+q)*.5+.5,.6);P+=N/(ee*Y*1.25)}h+=Math.cos(b)*N,f+=Math.sin(b)*N,x+=N}if(v.length<6)return null;let W={pts:v,depth:u.depth,z:u.z,tree:k,len:x,tone:u.tone,curl:!!u.curl,plant:u.plant,reached:!!u.reached,main:!!u.main};l.vines.push(W);let Q=[[.3,.5],[.22,.38],[.14,.24]][Math.min(u.depth,2)],ie=i.range(.1,.25)*r,oe=i.sign();for(let ue=2;ue<v.length&&!u.bare;ue++){let D=v[ue],C=D.arc-u.arc0;if(C<ie||(ie=C+i.range(.2,.38)*r/Math.sqrt(o)*(u.outward?.55:1)*(u.leafGap??1),u.curl&&C>L))continue;let B=C/x>.82;u.outward&&(oe=(Math.cos(D.a+.8)*u.outward>0?1:-1)*(i.chance(.15)?-1:1));let Y=i.chance(.22),$=!1;for(let te of Y?[oe,-oe]:[oe]){let ae=i.range(Q[0],Q[1])*r*(B?.62:1)*(u.leafScale||1);p(D,D.a+te*i.range(.55,1.05),ae,D.t+i.range(.15,.6),u,B)&&($=!0)}$&&(D.w*=1.16,v[ue-1]&&(v[ue-1].w*=1.06),v[ue+1]&&(v[ue+1].w*=1.06)),oe=-oe}if(u.depth<2&&!u.bare){let ue=u.depth===0?u.branchEvery?Math.floor(x/u.branchEvery):i.int(2,4):i.int(1,2);for(let D=0;D<ue;D++){let C=u.branchEvery?Math.floor(v.length*((D+i.range(.2,.8))/ue)):Math.floor(v.length*i.range(.18,.82)),B=v[C];if(!B)continue;let Y=x-(B.arc-u.arc0);d({x:B.x,y:B.y,a:B.a+i.sign()*i.range(.45,1.15),t0:B.t+i.range(.15,.6),clock:u.clock,lead:u.lead,len:Math.min(Math.max(.5,Y*i.range(.4,.75))*(u.depth===0?1:.8),u.maxChild??99),dur:i.range(1.4,2.6),w0:B.w*i.range(.55,.72),depth:u.depth+1,arc0:B.arc,z:u.z+i.range(-.06,.08),tree:k,reach:Q[1]*r*.55,tone:u.tone,curl:u.depth===1&&i.chance(.45),species:u.species,leafScale:u.leafScale,plant:u.plant,maxChild:u.maxChild})}if(i.chance(u.depth===0?.7:.35)||u.branchEvery&&i.chance(.5)){let D=u.branchEvery?Math.max(1,Math.floor(x/(u.branchEvery*1.7))):1;for(let C=0;C<D;C++){let B=Math.floor(v.length*i.range(.1,.95)),Y=v[B];Y&&d({x:Y.x,y:Y.y,a:Y.a+i.sign()*i.range(.5,1),t0:Y.t+i.range(.4,1),clock:u.clock,lead:u.lead,len:i.range(.35,.7)*r,dur:i.range(1.2,2),w0:Y.w*.35,depth:2,arc0:Y.arc,z:u.z+.02,tree:k,reach:.02,tone:u.tone,curl:!0,species:u.species,plant:u.plant})}}}return W}function p(u,v,h,f,b,x){let P=b.species||"ovate",N=h*i.range(.12,.22),R=u.x+Math.cos(v)*N,w=u.y+Math.sin(v)*N,K=v+i.range(-.15,.15),M=xp[P],T=h*i.range(M[0],M[1]),U=R+Math.cos(K)*h*.5,q=w+Math.sin(K)*h*.5;if(s(U,q,h*.55+T*.25+.02)<0)return!1;let ee=b.plant==="B"?i.pick(rh):x&&i.chance(.6)?i.pick(gp):i.pick(nh),L=i.range(-.28,.32),G=[];for(let X=0;X<=4;X++){let k=X/4;G.push({x:u.x+(R-u.x)*k,y:u.y+(w-u.y)*k,z:(b.z??0)+(L-(b.z??0))*k-.01,t:f-.12+k*.1,w:Math.max(.006,h*.035*(1-k*.4)),arc:u.arc+k*N,a:v})}return l.vines.push({pts:G,depth:3,z:L,tree:-1,len:N,tone:i.next(),plant:b.plant}),l.leaves.push({x:R,y:w,z:L,ang:K,len:h,wid:T,birth:f,dur:i.range(.9,1.7),colA:yo(i,je(ee[0]),.08),colB:yo(i,je(ee[1]),.06),phase:i.range(0,6.3),glow:i.chance(.08)?1:0,asym:i.range(.86,1.14),fade:L<-.12?.14:0,type:vp[P],serr:P==="ovate"||P==="cordate"?i.chance(.7)?1:0:P==="lance"?.4:0,twist:i.range(-.45,.45)*(i.chance(.35)?1.6:1),droop:i.range(0,.5)}),!0}function m(u){u.id=l.flowers.length,l.flowers.push(u)}function g(){for(let u of l.flowers){let v=u.hero?["lotus","cosmos","clematis","camellia","daisy","anemone"]:["lotus","cosmos","anemone","daisy","clematis"],h=u.kind||i.pick(v),f=je(u.cl.main),b=je(u.cl.light),x=je(u.cl.alt),P=je(u.cl.inner),N=je(u.cl.eye),R=i.range(0,6.3),w={lotus:{rings:3,n:i.int(8,11),wid:.36,shape:[.6,.95],tilt:[.16,.42,.78],style:[0,.2,.5,.15]},cosmos:{rings:1,n:8,wid:.62,shape:[0,.12],tilt:[.1],style:[1,.6,.9,.55]},clematis:{rings:1,n:6,wid:.46,shape:[.75,.9],tilt:[.08],style:[0,.35,1,.2]},camellia:{rings:4,n:i.int(6,7),wid:.62,shape:[0,.1],tilt:[.12,.42,.75,1.05],style:[0,.5,.25,.1]},daisy:{rings:2,n:i.int(16,22),wid:.16,shape:[.35,.5],tilt:[.06,.2],style:[.4,.1,.3,0]},anemone:{rings:2,n:i.int(5,6),wid:.6,shape:[0,.2],tilt:[.12,.36],style:[0,.3,.4,.9]}}[h];for(let U=0;U<w.rings;U++){let q=h==="lotus"&&U===2?w.n-2:w.n,ee=u.R*[1,.8,.6,.42][U]*(h==="daisy"&&U===1?1.08:1),L=ee*w.wid*Math.sqrt(9/Math.max(w.n,5)),G=w.tilt[U]+(u.bud?.8:0),X=u.cl2&&U>0?je(u.cl2.main):U===0?f:U===1?i.chance(.5)?x:f:kn(f,[1,1,1],.3),k=U>=2?P:kn(b,U===1?P:b,.3);for(let W=0;W<q;W++)l.petals.push({x:u.x,y:u.y,z:u.z+U*.014+W*4e-4,rot:R+(W+(U%2?.5:0))*(Math.PI*2/q)+i.range(-.07,.07),len:ee*i.range(.9,1.07),wid:L*i.range(.88,1.1),cup:L*(h==="camellia"?.45:.28),birth:u.birth,open:U*.3+W*(h==="daisy"?.015:.035)+i.range(0,.12),dur:i.range(1.5,2.3),tilt:G,colA:yo(i,X,.05),colB:yo(i,k,.03),colC:N,shape:i.range(w.shape[0],w.shape[1]),phase:i.range(0,6.3),style:w.style,fid:u.id})}let K=u.R*(h==="daisy"?.27:h==="anemone"?.2:h==="camellia"?.12:.15);if(l.domes.push({fid:u.id,x:u.x,y:u.y,z:u.z+.06,r:K,birth:u.birth+.7,colA:je(h==="daisy"?"#e9b13f":h==="anemone"?"#2f3a4a":"#f5d36d"),colB:je(h==="daisy"?"#a8662a":h==="anemone"?"#161d27":"#f5aa4b"),kind:h==="daisy"?1:0}),!u.bud&&h!=="daisy"){let U=u.hero?i.int(12,20):i.int(6,9),q=h==="anemone"?[je("#3b4656"),je("#1e2633")]:[je("#fff4cf"),je("#f7e3a1")];for(let ee=0;ee<U;ee++){let L=ee/U*Math.PI*2+i.range(-.15,.15),G=K*i.range(1.5,2.3)*(h==="clematis"?1.3:1),X=[];for(let k=0;k<=4;k++){let W=k/4,Q=K*.4+(G-K*.4)*W;X.push({x:u.x+Math.cos(L)*Q,y:u.y+Math.sin(L)*Q,z:u.z+.07+W*.06,t:u.birth+1.2+W*.4,w:u.R*.012*(1-W*.3),arc:W*G,a:L})}l.vines.push({pts:X,depth:4,z:u.z+.07,tree:-1,len:G,tone:0,col:q,fid:u.id}),l.domes.push({fid:u.id,x:X[4].x,y:X[4].y,z:u.z+.14,r:u.R*i.range(.03,.045),birth:u.birth+1.6+ee*.03,colA:je(h==="anemone"?"#2a2f3a":"#ffd36a"),colB:je(h==="anemone"?"#11151c":"#e7a23a"),kind:2})}}let M=i.int(4,5);for(let U=0;U<M;U++){let q=R+U/M*Math.PI*2+i.range(-.2,.2),ee=u.R*(u.bud?.75:.55)*i.range(.85,1.1);s(u.x+Math.cos(q)*ee*.7,u.y+Math.sin(q)*ee*.7,ee*.4)<0||l.leaves.push({x:u.x,y:u.y,z:u.z-.03,ang:q,len:ee,wid:ee*.34,birth:u.birth-.5,dur:1,colA:je("#1f8a76"),colB:je("#5fb894"),phase:i.range(0,6.3),glow:0,asym:1,fade:0,type:2,serr:0,twist:0,droop:.3})}let T=Math.min(u.R*(u.hero?2:1.6),(t(u.x,u.y)-n)/.8);T>u.R*1.05&&(u.hero||i.chance(.25))&&l.halos.push({x:u.x,y:u.y,z:-.6,r:T,col:kn(f,[1,1,1],.3),max:u.hero?i.range(.18,.26):.13,birth:u.birth+1.2,phase:i.range(0,6.3)})}for(let u of l.leaves)if(u.glow){let v=u.x+Math.cos(u.ang)*u.len*.5,h=u.y+Math.sin(u.ang)*u.len*.5,f=Math.min(u.len*1.3,(t(v,h)-n)/.8);f>u.len*.6&&l.halos.push({x:v,y:h,z:-.62,r:f,col:je("#5be8e2"),max:.15,birth:u.birth+1.5,phase:i.range(0,6.3)})}}return{out:l,grow:d,clear:s,dressFlowers:g,addFlower:m,addLeaf:p,newTree:()=>c++}}var Op="varying vec2 vUv; void main(){ vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",Bp=`
uniform vec2 uRes; uniform sampler2D uProfile; uniform vec3 uBgc; uniform vec4 uRects[32]; uniform int uNr; uniform float uTime; uniform float uFade;
varying vec2 vUv;
float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
  return mix(mix(hash(i), hash(i+vec2(1.0,0.0)), f.x), mix(hash(i+vec2(0.0,1.0)), hash(i+vec2(1.0,1.0)), f.x), f.y); }
void main(){
  vec2 px = vec2(vUv.x, 1.0 - vUv.y) * uRes;              // css px, y down
  float down = 1.0 - vUv.y;                                // 0 at the top, 1 at the bottom
  float side = abs(vUv.x - 0.5) * 2.0;
  vec3 top = vec3(0.88, 0.93, 0.935), mid = vec3(0.70, 0.785, 0.80), deep = vec3(0.36, 0.45, 0.47);
  float dusk = smoothstep(0.15, 1.05, side * 0.75 + down * 0.55);
  vec3 sky = mix(top, mid, smoothstep(0.0, 0.6, dusk));
  sky = mix(sky, deep, smoothstep(0.55, 1.05, dusk));
  sky += vec3(0.10, 0.06, 0.02) * exp(-pow((down - 0.78) * 5.0, 2.0)) * (0.6 + 0.4 * side);   // last warmth low on the horizon
  sky *= 0.985 + 0.03 * vnoise(px * 0.01 + uTime * 0.01);
  // far treeline, two hazy layers
  float yb = vUv.y * uRes.y;
  vec4 pr = texture2D(uProfile, vec2(vUv.x, 0.5));
  float far = smoothstep(pr.r * uRes.y + 2.5, pr.r * uRes.y - 2.5, yb);
  float near = smoothstep(pr.g * uRes.y + 1.5, pr.g * uRes.y - 1.5, yb);
  sky = mix(sky, mix(vec3(0.42, 0.53, 0.55), sky, 0.5), far);                 // the far ridge, lost in haze
  sky = mix(sky, vec3(0.13, 0.21, 0.21), near);
  sky = mix(sky, vec3(0.08, 0.13, 0.11), smoothstep(uRes.y - 40.0, uRes.y, px.y) * 0.85);
  // calm ground behind the copy: exactly the page colour on the text, easing into the dusk around it
  float m = 0.0;
  for (int i = 0; i < 32; i++) {
    if (i >= uNr) break;
    vec4 r = uRects[i]; vec2 c = (r.xy + r.zw) * 0.5, h = (r.zw - r.xy) * 0.5;
    vec2 d = abs(px - c) - h; float sd = length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
    m = max(m, 1.0 - smoothstep(14.0, 150.0, sd));
  }
  sky = mix(sky, uBgc, m);
  gl_FragColor = vec4(mix(uBgc, sky, uFade), 1.0);
}`,Gp=ei+`
attribute vec3 iBase; attribute vec4 iP; attribute vec3 iCol; attribute float iBirth;
varying vec2 vUvG; varying vec3 vColG;
void main(){
  float u = uv.x, v = uv.y;
  float g = smoothstep(0.0, 1.4, uT - iBirth);
  float h = iP.x * g;
  float sway = (sin(uTime * 0.9 + iP.w + iBase.x * 0.6) * 0.07 + sin(uTime * 2.1 + iP.w * 2.0) * 0.02) * (0.6 + 0.4 * h);
  float bend = (iP.z + sway) * v * v;
  vec3 p = vec3(iBase.x + bend * h + u * iP.y * pow(1.0 - v, 0.8) * 0.5, -iBase.y + v * h, iBase.z);
  vUvG = uv; vColG = iCol;
${en}
}`,zp=ei+`
varying vec2 vUvG; varying vec3 vColG;
void main(){
  float u = vUvG.x, v = vUvG.y;
  float edgeA = 1.0 - smoothstep(0.75, 1.0, abs(u));
  if (edgeA < 0.02) discard;
  vec3 c = vColG * (0.38 + 0.62 * v);
  c += vec3(0.16, 0.24, 0.20) * pow(1.0 - abs(u), 2.0) * v * 0.5;   // a sheen down the middle of the blade
  c += vec3(0.20, 0.28, 0.27) * smoothstep(0.7, 1.0, v) * 0.35;     // tips against the sky
  c += uFFCol * ffAt(vW2) * (0.35 + 0.4 * v);
  float alpha = edgeA;
${ar}
}`,Hp=`
uniform float uScale;
attribute vec4 iA; // x, y (layout units), depth 0 (far) .. 1 (near), brightness
varying vec2 vQ; varying float vI; varying float vD;
void main(){
  float d = iA.z;
  float r = mix(0.075, 0.17, d * d) * (0.55 + 0.45 * iA.w) * uScale;
  vec3 p = vec3(iA.x + position.x * r, -iA.y + position.y * r, 1.2 + d * 0.2);
  vQ = position.xy; vI = iA.w; vD = d;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  if (iA.w < 0.003) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
}`,Vp=`
uniform vec4 uRects[32]; uniform int uNr; uniform float uPadPx; uniform float uBody;
varying vec2 vQ; varying float vI; varying float vD;
void main(){
  vec2 q = gl_FragCoord.xy;
  for (int i = 0; i < 32; i++) { if (i >= uNr) break; vec4 r = uRects[i]; if (q.x > r.x - uPadPx && q.x < r.z + uPadPx && q.y > r.y - uPadPx && q.y < r.w + uPadPx) discard; }
  float r = length(vQ);
  if (r > 1.0) discard;
  float bok = smoothstep(0.8, 0.98, vD);                      // the nearest fly is out of focus
  float core = exp(-r * r * 60.0), bloom = exp(-r * r * 7.0), wide = exp(-r * r * 2.2);
  float disc = (1.0 - smoothstep(0.78, 1.0, r)) * (0.55 + 0.45 * smoothstep(0.3, 0.95, r));
  float a = mix(core * 1.35 + bloom * 0.6 + wide * 0.2, disc * 0.26 + bloom * 0.2, bok) * vI;
  vec3 col = mix(vec3(0.66, 0.92, 0.20), vec3(0.97, 1.0, 0.78), clamp(core * 1.4, 0.0, 1.0) * (1.0 - bok));
  if (uBody > 0.5) {                                          // on light pages: the insect itself, its lantern glowing
    col = mix(vec3(0.50, 0.80, 0.08), vec3(0.93, 1.0, 0.55), clamp(core * 1.4, 0.0, 1.0));
    a = min(1.0, a * 1.25);
    vec2 bq = vQ * vec2(1.0, 1.6);
    float body = (1.0 - smoothstep(0.13, 0.19, length(bq - vec2(0.0, 0.05)))) * 0.85;
    float wing = (1.0 - smoothstep(0.14, 0.2, length((vQ - vec2(0.0, 0.1)) * vec2(1.6, 1.0)))) * 0.25;
    vec3 bc = vec3(0.16, 0.13, 0.09);
    float ba = max(body, wing);
    gl_FragColor = vec4(col * a + bc * ba * (1.0 - a), a * 0.92 + ba * (1.0 - a));
    return;
  }
  gl_FragColor = vec4(col * a, a * 0.92);
}`,bt={C:6.6,n:6,per:.5,offB:3.1,ticks:0,t0:performance.now()};function kp(){bt.ticks++,bt.offB*=.55,bt.offB<.04&&(bt.offB=0)}var th=i=>i<0?0:i<.045?i/.045:Math.exp(-(i-.045)*15);function ka(i,e){if(i.loner){let o=(e+i.off)%i.C;return o<.2?th(o)*.8:0}let t=i.group?bt.offB:0,n=((e-t+i.jit)%bt.C+bt.C)%bt.C;if(n>bt.n*bt.per)return 0;let r=Math.floor(n/bt.per);return i.skip>>r&1?0:th(n-r*bt.per)}function Wp(i,e){let t=Wa(i),{W:n,H:r}=e,o=n<7,s=!o&&n<11,a=Tt(Math.min(n,r*1.4)/12.5,.55,1.1),l=o?.14:.24,c=oh(e.rects),m=sh(t,{field:c,pad:l,k:a,density:1.25,inside:(E,F,A)=>E>-.6&&E<n+.6&&F>A&&F<r+.8,steer:(E,F,A)=>F<.15?or(Math.PI/2,A)*.1:0}),{out:g,grow:u,clear:v}=m,h={x0:Math.min(...e.rects.map(E=>E.x0)),x1:Math.max(...e.rects.map(E=>E.x1)),y0:Math.min(...e.rects.map(E=>E.y0)),y1:Math.max(...e.rects.map(E=>E.y1))},f=Math.min(h.x0,n-h.x1),b=o?[]:[0,1],x=E=>E?t.pick(rh):t.pick(nh),P=(E,F,A,he,V,ne,de)=>{for(let le=0;le<V;le++){let Ee=t.range(0,Math.PI*2),S=Math.sqrt(t.next()),_=E+Math.cos(Ee)*A*S,O=F+Math.sin(Ee)*he*S;if(O<-.4||_<-.5||_>n+.5)continue;let re={x:_,y:O,arc:0,t:ne.t0+t.range(0,1.6)+S*.8,a:Ee};m.addLeaf(re,t.range(0,Math.PI*2),t.range(.2,.38)*a*(ne.leafScale||1),re.t,{...ne,z:de+t.range(-.25,.25)},!1)}};for(let E of b){let F=E?-1:1,A=E?n-t.range(.05,.3)*a:t.range(.05,.3)*a,he=u({x:A,y:r+.5,a:-Math.PI/2+F*t.range(.04,.12),t0:.05,len:r*t.range(.78,.92),dur:2,w0:t.range(.26,.34)*a,taper:.7,depth:0,arc0:0,z:-.3,reach:.3,tone:t.next(),bare:!0,calm:.25,species:"ovate"});if(!he)continue;let V=he.pts,ne=V.length,de=t.chance(.5)?"ovate":"drip",le=[];for(let S=0;S<5;S++){let _=V[Math.floor(ne*t.range(.55,.95))],O=-Math.PI/2+F*t.range(.35,1.25),re=u({x:_.x,y:_.y,a:O,t0:_.t+.2,len:t.range(1.2,2.4)*a,dur:2,w0:_.w*t.range(.38,.5),depth:1,arc0:_.arc,z:-.2,reach:.1,tone:t.next(),bare:!0,calm:.5});re&&le.push(re)}let Ee={species:de,plant:E?"B":"A",leafScale:1.15,z:0,t0:1.2};for(let S of[he,...le])for(let _=Math.floor(S.pts.length*(S===he?.68:.4));_<S.pts.length;_+=6){let O=S.pts[_];for(let[re,se]of[[-.45,1.25],[-.1,1],[.3,.8]])P(O.x,O.y,.55*a*se,.38*a*se,Math.round((o?6:s?9:12)*se),{...Ee,t0:O.t},re)}for(let S=0;S<6;S++){let _=le[S%Math.max(1,le.length)]||he,O=_.pts[Math.floor(_.pts.length*t.range(.5,1))-1];O&&u({x:O.x,y:O.y,a:Math.PI/2+t.range(-.9,.9),t0:O.t+.6,len:t.range(.5,1.1)*a,dur:1.6,w0:.012,depth:2,arc0:O.arc,z:.2,reach:.12*a,tone:t.next(),species:de,leafScale:.9,leafGap:.5,plant:E?"B":"A",curl:!1,calm:.6})}}let N=o?8:s?12:16;for(let E=0;E<N;E++){let F=E/(N-1),A=F<.5?Math.pow(F*2,1.6)*n*.5*.98:n-Math.pow((1-F)*2,1.6)*n*.5*.98,he=c(A,r-.2)-l;if(he<.15)continue;let V=Tt(he*t.range(.8,1.3),.3,(o?1:1.8)*a);u({x:A+t.range(-.1,.1),y:r+.08,a:-Math.PI/2+t.range(-.7,.7),t0:t.range(.3,1.6),len:V,dur:t.range(1.4,2.2),w0:t.range(.018,.03)*a,depth:1,arc0:0,z:t.range(.1,.5),reach:.12*a,tone:t.next(),species:t.pick(["lance","lance","drip","ovate"]),leafScale:t.range(.8,1.1),leafGap:.6,plant:t.chance(.5)?"A":"B",calm:.7})}if(o)for(let E of[0,1])for(let F=0;F<3;F++){let A=r-F*r*.22-t.range(.1,.4);u({x:E?n+.05:-.05,y:A,a:-Math.PI/2+(E?-.55:.55)+t.range(-.15,.15),t0:t.range(.4,1.6),len:t.range(.4,.8),dur:1.8,w0:.016,depth:1,arc0:0,z:.3,reach:.04,tone:t.next(),species:"lance",leafScale:.75,outward:E?1:-1,plant:E?"B":"A",calm:.5})}let R=o?3:7;for(let E=0,F=0;E<R&&F<80;F++){let A=t.range(.1,n-.1),he=r-t.range(.35,1)*a;if(v(A,he,.2)<0)continue;let V=u({x:A,y:r+.05,a:-Math.PI/2+t.range(-.15,.15),t0:t.range(1.5,3),len:r-he+.05,dur:1.6,w0:.012,depth:2,arc0:0,z:.35,reach:.15,tone:t.next(),species:"lance",leafScale:.6,calm:.3});if(!V)continue;let ne=V.pts[V.pts.length-1];m.addFlower({x:ne.x,y:ne.y,z:.5,R:t.range(.1,.15)*a,hero:!1,cl:Eo[t.pick(["gold","lav","pink","coral"])],kind:t.pick(["daisy","cosmos","anemone"]),birth:ne.t+.6,bud:!1}),E++}m.dressFlowers(),g.halos.length=0;let w=[],K=o?.014:.0085;for(let E=-.15;E<n+.15;E+=K*t.range(.5,1.5))for(let F of[0,1,2]){if(F===2&&t.chance(.4))continue;let A=E<h.x0-l||E>h.x1+l,he=0,V=(A?t.range(.7,2):t.range(.3,1))*a*(F===0?.8:F===1?1:1.15);for(let le=.05;le<=V&&!(c(E,r-le)-l*.95-.04<0);le+=.04)he=le;if(he<.08)continue;let ne=t.next(),de=F===0?[.2+ne*.06,.34+ne*.1,.25+ne*.05]:F===1?[.13+ne*.06,.26+ne*.08,.18+ne*.05]:[.08+ne*.04,.17+ne*.06,.12+ne*.04];w.push({x:E,y:r+.05,z:F===0?-.5+t.next()*.2:F===1?.1+t.next()*.2:.6+t.next()*.15,h:he*t.range(.65,1),w:t.range(.012,.026)*a*(F===2?1.3:1),bend:t.range(-.3,.3),ph:t.range(0,6.3),col:de,birth:t.range(.2,1.8)})}let M=(E,F,A,he,V)=>Array.from({length:E},()=>({x:t.range(-.5,n+.5),h:t.range(F,A)*a,r:t.range(he,V)*a})),T=(E,F)=>.5+.5*Math.sin(E*.55+F)*Math.sin(E*1.3+F*2.1),U=(E,F,A,he,V,ne)=>Array.from({length:E},()=>{let de=t.range(-.4,n+.4);return{x:de,h:(F+A*T(de,ne)+t.range(-.08,.08))*a,r:t.range(he,V)*a}}),q=U(Math.round(n*16),.55,.7,.07,.17,t.range(0,6)),ee=U(Math.round(n*12),.25,.45,.08,.2,t.range(0,6)),L=E=>Math.max(0,1.8-Math.min(E,n-E))*.9*a,G=(E,F)=>{let A=0;for(let he of F){let V=E-he.x;Math.abs(V)<he.r&&(A=Math.max(A,he.h+L(he.x)+Math.sqrt(he.r*he.r-V*V)*.8))}return A},X=E=>{let F=0;for(let A=.05;A<r*.9&&!(c(E,r-A)-l*1.2<0);A+=.04)F=A;return F},k=160,W=new Float32Array(k);for(let E=0;E<k;E++)W[E]=X(E/(k-1)*n);let Q=W.map((E,F)=>{let A=1e9;for(let he=Math.max(0,F-6);he<=Math.min(k-1,F+6);he++)A=Math.min(A,W[he]);return A}),ie=Q.map((E,F)=>{let A=0,he=0;for(let V=Math.max(0,F-8);V<=Math.min(k-1,F+8);V++){let ne=Math.exp(-((V-F)**2)/18);A+=Q[V]*ne,he+=ne}return A/he}),oe=E=>ie[Tt(Math.round(E/n*(k-1)),0,k-1)]*.86,ue=E=>E.map(F=>{let A=F.h+L(F.x)+F.r*.9,he=oe(F.x),V=A<=he?A:he*t.range(.55,.98);return{...F,h:V-F.r*.9}}).filter(F=>F.h>-.05),D=ue(q),C=ue(ee),B=(E,F)=>{let A=0;for(let he of F){let V=E-he.x;if(Math.abs(V)<he.r*3){let ne=he.h+he.r*.9;A=Math.max(A,ne-V*V/(he.r*1.1))}}return Math.max(0,A)},Y=1024,$=new Uint8Array(Y*4);for(let E=0;E<Y;E++){let F=E/(Y-1)*n;$[E*4]=Math.round(Tt(B(F,D)/r,0,1)*255),$[E*4+1]=Math.round(Tt(B(F,C)*.8/r,0,1)*255),$[E*4+3]=255}let te=[],ae=o?54:s?90:140;for(let E=0;te.length<ae&&E<ae*40;E++){let F=t.range(.05,n-.05),A=t.chance(.7)?r-Math.pow(t.next(),1.6)*Math.min(r*.5,2.6*a):t.range(.2,r-.1);if(c(F,A)-l-.12<0)continue;let he=F>n/2?1:0;te.push({x:F,y:A,hx:F,hy:A,vx:0,vy:0,depth:Math.pow(t.next(),2.4),group:he,loner:t.chance(.16),C:t.range(4.5,8.5),off:t.range(0,9),jit:t.range(-.05,.05),skip:Math.floor(t.next()*64)&Math.floor(t.next()*64)&Math.floor(t.next()*64),seed:t.range(0,100),spd:t.range(.08,.22)})}return{...g,grass:w,flies:te,prof:$,ok:!0,pad:l,field:c,k:a,copy:h}}function Xp(i,e){let t=Wa(i),{W:n,strip:r,phone:o}=e,s=n-r,a=o?.5:Tt(n/14.4,.72,1)*.92,l=o?.035:.2,c=e.rects.filter(C=>C.x1>s-1),d=c.concat([{x0:-1e3,y0:-1e3,x1:s,y1:1e5},{x0:-1e3,y0:-1e3,x1:1e3,y1:e.top},{x0:-1e3,y0:e.bottom,x1:1e3,y1:1e5}]),p=oh(d),m=.2,g=[];for(let C=s+.05;C<=n+.5;C+=.08)g.push(C);let u=[];for(let C=e.top;C<=e.bottom;C+=m)u.push(g.map(B=>Math.min(p(B,C),(n-B)*1.1+.04)));let v=4,h=u.map((C,B)=>{let Y=n+.45,$=-1;for(let ae=0;ae<g.length&&!(g[ae]>n-.02);ae++){let E=1e9;for(let F=0;F<=v&&B+F<u.length;F++)E=Math.min(E,u[B+F][ae]);E>$&&($=E,Y=g[ae])}let te=$-l;return{x:te>(o?.03:.12*a+.06)?Y:n+(o?.3:.45),room:te}}),f=C=>h[Tt(Math.round((C-e.top)/m),0,h.length-1)],b=t.range(0,6.3),N=sh(t,{field:p,pad:l,k:a,density:o?.7:1,inside:(C,B,Y)=>C>s+Y&&C<n-Y,steer:(C,B,Y,$,te)=>{if(te.main){let ae=f(B+.35),E=ae.x>n?0:Math.sin(B*.8+b)*Math.min(Math.max(ae.room-.1,0)*.5,.7),F=ae.x+E;return or(Math.atan2(1,(F-C)*1.7),Y)*.16}return C>n+.25?or(Math.PI,Y)*.1:0},offX:n+.08}),{out:R,grow:w,clear:K}=N,M=t.pick(_p),T=t.chance(.5)?M:"ovate",U=e.top+.05,q=0,ee=N.newTree(),L=0,G=e.finale?e.finale.y+.3:e.bottom;for(;U<G-.6&&q++<30;){let C=q===1?Math.min(f(U).x,n-.1):n+.3,B=w({x:C,y:U,a:Math.PI/2+t.range(-.2,.2),t0:U,clock:"scroll",lead:0,len:(e.bottom-U)*1.35+1,w0:(o?.032:.05)*a,taper:.55,depth:0,arc0:0,z:.02,tree:ee,reach:o?.02:.12*a,tone:t.next(),species:T,main:!0,branchEvery:o?2.2:1.5,maxChild:o?.6:1.8,leafScale:o?.8:.95,calm:.6,outward:o?1:0,stopY:G,routeArc:!0});B&&(L+=B.len,B.routeLen=1);let Y=B?B.pts[B.pts.length-1].y:U;for(U=Math.max(Y,U)+.3;U<e.bottom&&p(n+.3,U)-l-.2<0;)U+=.1}let X=t.shuffle(["coral","gold","pink","lav","peri"]),k=[];for(let C of R.vines)if(C.depth<3)for(let B=3;B<C.pts.length;B+=3)k.push(C.pts[B]);k.sort((C,B)=>C.y-B.y);let W=[];if(e.finale){let C=e.finale.y,B=R.vines.filter(A=>A.main).flatMap(A=>A.pts).filter(A=>Math.abs(A.y-C)<1.2&&A.x<n-.02),Y=null,$=-1,te=-1e9;for(let A of B){let he=p(A.x,A.y)-l,V=Math.min(he,.8*a)-Math.abs(A.y-C)*.9;he>.25*a&&V>te&&(te=V,$=he,Y=A)}let ae,E,F;if(Y&&$>.25*a?(ae=Y.x,E=Y.y,F=Math.min(t.range(.78,.95)*a,$/1.1)):(F=Math.min(.5*a,(p(n-.02,C)-l)/1.1),ae=n-F*.3,E=C),F>.08&&K(ae,E,F*1.08)>=0){let A={x:ae,y:E,z:.62,R:F,hero:!0,finale:!0,cl:Eo[t.pick(["coral","gold"])],cl2:Eo[t.pick(["lav","pink"])],kind:t.pick(["camellia","lotus"]),birth:C-2.6,bud:!1};W.push(A),N.addFlower(A)}}let Q=o?7:6,ie=o?2.4:2,oe=e.top-1,ue=e.top-1;for(let C of k){let B=p(C.x,C.y)-l;if(C.x>(o?n:n-.04))continue;let Y=Eo[X[Math.floor((C.y-e.top)/6)%X.length]],$=te=>W.some(ae=>Math.hypot(ae.x-C.x,ae.y-C.y)<(ae.R+te)*1.2);if(C.y-oe>Q&&B>.5*a){let te=Math.min(t.range(.5,.75)*a,B*.88);if(!$(te)&&K(C.x,C.y,te*1.08)>=0&&C.x+te*.4<n){let ae={x:C.x,y:C.y,z:t.range(.36,.6),R:te,hero:!0,cl:Y,birth:C.t+t.range(.5,1.2),bud:!1};W.push(ae),N.addFlower(ae),oe=C.y;continue}}if(o&&C.y-ue>ie*t.range(.7,1.3)&&B<=.17*a){let te=Math.min(t.range(.24,.32)*a,(p(n-.02,C.y)-l)/1.1),ae=n-te*.35;if(te>.07&&!W.some(E=>Math.hypot(E.x-ae,E.y-C.y)<(E.R+te)*1.2)&&K(ae,C.y,te*1.08)>=0){let E={x:ae,y:C.y,z:t.range(.36,.6),R:te,hero:!1,cl:Y,birth:C.t+t.range(.3,.8),bud:t.chance(.2)};W.push(E),N.addFlower(E),ue=C.y;continue}}if(C.y-ue>ie*t.range(.7,1.4)&&B>.17*a){let te=Math.min(t.range(.18,.32)*a,B*.88);if(!$(te)&&K(C.x,C.y,te*1.08)>=0){let ae={x:C.x,y:C.y,z:t.range(.36,.6),R:te,hero:!1,cl:Y,birth:C.t+t.range(.4,1),bud:t.chance(.25)};W.push(ae),N.addFlower(ae),ue=C.y}}}N.dressFlowers();for(let C of R.flowers)if(C.hero)for(let B=0;B<0;B++){let Y=t.range(0,6.3),$=C.R*t.range(1.1,2.2),te=C.x+Math.cos(Y)*$,ae=C.y+Math.sin(Y)*$,E=t.range(2,5);te<n-.03&&K(te,ae,E/200+.06)>=0&&R.dust.push({x:te,y:ae,z:.5,birth:C.birth+1,col:je(C.cl.main),size:E,phase:t.range(0,6.3)})}R.halos.length=0;let D=R.flowers.find(C=>C.finale);return{...R,pad:l,field:p,k:a,obstacles:c,xMin:s,finale:D?{x:D.x,y:D.y,R:D.R}:null}}function lh({alpha:i}){let e=new po({antialias:!0,alpha:i,premultipliedAlpha:!0,powerPreference:"high-performance"});e.outputColorSpace=At,i?e.setClearColor(0,0):e.setClearColor(So,1),e.autoClear=!1;let t=new Hn,n=new ji(0,1,0,-1,-10,10);n.position.z=5;let r={uFF:{value:new Float32Array(64)},uFFCol:{value:[.62,.86,.24]},uHaze:{value:je("#3a5250")},uT:{value:0},uTime:{value:0},uGlow:{value:1},uPar:{value:[0,0]},uBg:{value:je(So)},uPx:{value:100},uShadowOff:{value:[.05,-.075]},uRouteHead:{value:-10},uRouteMode:{value:0},uRouteSpacing:{value:7},uFocus:{value:[0,0,0]},uFocusR:{value:3}},o={uRects:{value:new Float32Array(128)},uNr:{value:0},uPadPx:{value:10},uBody:{value:0},uScale:{value:1}},s={uRes:{value:[4,4]},uProfile:{value:null},uBgc:{value:je(So)},uRects:{value:new Float32Array(128)},uNr:{value:0},uTime:{value:0},uFade:{value:1}},a=(D,C,B={})=>({main:new st({uniforms:r,vertexShader:D,fragmentShader:C,...B}),shadow:new st({uniforms:r,vertexShader:D,fragmentShader:C,defines:{SHADOW:""},...B,transparent:!0})}),l={stem:a(Mp,Sp,{side:Mt}),leaf:a(yp,Ep,{transparent:!0,side:Mt,depthWrite:!0}),petal:a(bp,Tp,{transparent:!0,side:Mt,depthWrite:!0}),dome:a(Ap,wp),halo:{main:new st({uniforms:r,vertexShader:Rp,fragmentShader:Cp,transparent:!0,depthWrite:!1,depthTest:!1})},dust:{main:new st({uniforms:r,vertexShader:Pp,fragmentShader:Lp,transparent:!0,depthWrite:!1})},grass:a(Gp,zp,{transparent:!0,side:Mt,depthWrite:!0}),fly:{main:new st({uniforms:o,vertexShader:Hp,fragmentShader:Vp,transparent:!0,depthWrite:!1,depthTest:!1,blending:ur,blendSrc:fr,blendDst:zi})}},c={leaf:Ha(8,26),petal:Ha(8,14),dome:Fp(7,20),quad:Ip(),blade:Ha(2,6)},d=new wt(4,4),p=new wt(4,4),m=new ft;m.setAttribute("position",new Be(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3));let g=new ji(-1,1,1,-1,0,1),u={tex:{value:null},dir:{value:[1,0]},res:{value:[4,4]}},v={tex:{value:null},res:{value:[4,4]},col:{value:je("#0d3b47")},strength:{value:.13},rects:{value:new Float32Array(128)},nr:{value:0},padPx:{value:16}},h=new st({uniforms:u,vertexShader:eh,fragmentShader:Dp,depthTest:!1,depthWrite:!1}),f=new st({uniforms:v,vertexShader:eh,fragmentShader:Up,transparent:!0,depthTest:!1,depthWrite:!1}),b=new Et(m,h);b.frustumCulled=!1;let x=new Hn;x.add(b);let P=new st({uniforms:s,vertexShader:Op,fragmentShader:Bp,depthTest:!1,depthWrite:!1}),N=new Et(m,P);N.frustumCulled=!1;let R=new Hn;R.add(N);let w=!1,K=null,M=null,T=[],U={petals:new Map,domes:new Map,stems:[]},q={},ee={};function L(D){for(let E of T)t.remove(E),E.geometry.dispose();T=[];let C=(E,F,A,he)=>{let V=new(he||Et)(E,F.main);V.userData.shadow=F.shadow||null,V.frustumCulled=!1,V.renderOrder=A,t.add(V),T.push(V)},B=D.halos;if(B.length&&C(Vn(c.quad,B.length,{iPos:[B.flatMap(E=>[E.x,-E.y,E.z]),3],iR:[B.map(E=>E.r),1],iCol:[B.flatMap(E=>E.col),3],iMax:[B.map(E=>E.max),1],iBirth:[B.map(E=>E.birth),1],iPhase:[B.map(E=>E.phase),1]}),l.halo,0),D.vines.length){let E=Np(D.vines);C(E,l.stem,1),q.stem=E,ee.stemBirth=E.attributes.aBirth.array.slice(),U.stems=E.userData.ranges}let Y=D.leaves.slice().sort((E,F)=>E.z-F.z);Y.length&&C(Vn(c.leaf,Y.length,{iPos:[Y.flatMap(E=>[E.x,-E.y,E.z]),3],iRot:[Y.map(E=>-E.ang-Math.PI/2),1],iSize:[Y.flatMap(E=>[E.len,E.wid/2,E.len]),3],iBirth:[Y.map(E=>E.birth),1],iDur:[Y.map(E=>E.dur),1],iColA:[Y.flatMap(E=>E.colA),3],iColB:[Y.flatMap(E=>E.colB),3],iPhase:[Y.map(E=>E.phase),1],iGlowW:[Y.map(E=>E.glow),1],iAsym:[Y.map(E=>E.asym),1],iFade:[Y.map(E=>E.fade),1],iShape:[Y.flatMap(E=>[E.type??0,E.serr??0,E.twist??0,E.droop??0]),4]}),l.leaf,2);let $=D.petals.slice().sort((E,F)=>E.z-F.z);U.petals=new Map,$.forEach((E,F)=>{E.fid!=null&&(U.petals.has(E.fid)||U.petals.set(E.fid,[]),U.petals.get(E.fid).push(F))}),$.length&&C(Vn(c.petal,$.length,{iPos:[$.flatMap(E=>[E.x,-E.y,E.z]),3],iRot:[$.map(E=>-E.rot-Math.PI/2),1],iSize:[$.flatMap(E=>[E.len,E.wid/2,E.cup]),3],iBirth:[$.map(E=>E.birth),1],iOpen:[$.map(E=>E.open),1],iDur:[$.map(E=>E.dur),1],iTilt:[$.map(E=>E.tilt),1],iColA:[$.flatMap(E=>E.colA),3],iColB:[$.flatMap(E=>E.colB),3],iColC:[$.flatMap(E=>E.colC),3],iShape:[$.map(E=>E.shape),1],iPhase:[$.map(E=>E.phase),1],iStyle:[$.flatMap(E=>E.style),4]}),l.petal,3),$.length&&(q.petal=T[T.length-1].geometry,ee.petalOpen=q.petal.attributes.iOpen.array.slice());let te=D.domes;if(U.domes=new Map,te.forEach((E,F)=>{E.fid!=null&&(U.domes.has(E.fid)||U.domes.set(E.fid,[]),U.domes.get(E.fid).push(F))}),te.length&&C(Vn(c.dome,te.length,{iPos:[te.flatMap(E=>[E.x,-E.y,E.z]),3],iR:[te.map(E=>E.r),1],iBirth:[te.map(E=>E.birth),1],iColA:[te.flatMap(E=>E.colA),3],iColB:[te.flatMap(E=>E.colB),3],iKind:[te.map(E=>E.kind??0),1]}),l.dome,4),te.length&&(q.dome=T[T.length-1].geometry,ee.domeBirth=q.dome.attributes.iBirth.array.slice()),D.grass&&D.grass.length){let E=D.grass;C(Vn(c.blade,E.length,{iBase:[E.flatMap(F=>[F.x,F.y,F.z]),3],iP:[E.flatMap(F=>[F.h,F.w,F.bend,F.ph]),4],iCol:[E.flatMap(F=>F.col),3],iBirth:[E.map(F=>F.birth),1]}),l.grass,2)}M=null,D.flies&&D.flies.length&&(M=Vn(c.quad,D.flies.length,{iA:[new Array(D.flies.length*4).fill(0),4]}),C(M,l.fly,6)),K&&(K.dispose(),K=null),w=!!D.prof,w&&(K=new Mo(D.prof,D.prof.length/4,1,ht),K.magFilter=ct,K.minFilter=ct,K.needsUpdate=!0,s.uProfile.value=K);let ae=D.dust;if(ae.length){let E=new ft;E.setAttribute("position",new Be(new Float32Array(ae.flatMap(F=>[F.x,-F.y,F.z])),3)),E.setAttribute("aBirth",new Be(new Float32Array(ae.map(F=>F.birth)),1)),E.setAttribute("aCol",new Be(new Float32Array(ae.flatMap(F=>F.col)),3)),E.setAttribute("aSize",new Be(new Float32Array(ae.map(F=>F.size/100)),1)),E.setAttribute("aPhase",new Be(new Float32Array(ae.map(F=>F.phase)),1)),C(E,l.dust,5,xo)}}function G(D,C,B){e.setPixelRatio(B),e.setSize(Math.round(D),Math.round(C),!1);let Y=e.domElement.width,$=e.domElement.height,te=Math.max(4,Math.round(Y/2)),ae=Math.max(4,Math.round($/2));d.setSize(te,ae),p.setSize(te,ae),r.uPx.value=100*B,s.uRes.value=[D,C],o.uPadPx.value=8*B,v.res.value=[Y,$],v.padPx.value=14*B}function X(D){for(let B of T)B.userData.shadow?B.material=B.userData.shadow:B.visible=!1;e.setRenderTarget(d),e.setClearColor(0,0),e.clear(),e.render(t,n);for(let B of T)B.material=B.userData.shadow?k.get(B):B.material,B.visible=!0;b.material=h,u.res.value=[d.width,d.height],u.tex.value=d.texture,u.dir.value=[1,0],e.setRenderTarget(p),e.clear(),e.render(x,g),u.tex.value=p.texture,u.dir.value=[0,1],e.setRenderTarget(d),e.clear(),e.render(x,g),e.setRenderTarget(null),i?e.setClearColor(0,0):e.setClearColor(So,1),e.clear();let C=Math.min(32,D.length);for(let B=0;B<C;B++)v.rects.value.set(D[B],B*4),o.uRects.value.set(D[B],B*4);if(v.nr.value=C,o.uNr.value=C,w){let B=e.getPixelRatio();for(let Y=0;Y<C;Y++)s.uRects.value.set(D[Y].map(($,te)=>(te%2?e.domElement.height-$:$)/B),Y*4);for(let Y=0;Y<C;Y++){let $=s.uRects.value,te=$[Y*4+1],ae=$[Y*4+3];$[Y*4+1]=Math.min(te,ae),$[Y*4+3]=Math.max(te,ae)}s.uNr.value=C,e.render(R,g)}v.tex.value=d.texture,b.material=f,e.render(x,g),e.render(t,n)}let k={get:D=>D.userData.mainMat},W=L;function Q(D){W(D);for(let C of T)C.userData.mainMat=C.material}function ie(){for(let D of T)t.remove(D),D.geometry.dispose();for(let D of Object.values(c))D.dispose();for(let D of Object.values(l))for(let C of Object.values(D))C.dispose();d.dispose(),p.dispose(),m.dispose(),h.dispose(),f.dispose(),P.dispose(),K&&K.dispose(),e.dispose()}function oe(D,C){let B=U.petals.get(D);if(B&&q.petal){let $=q.petal.attributes.iOpen;for(let te of B)$.array[te]=ee.petalOpen[te]+C;$.needsUpdate=!0}let Y=U.domes.get(D);if(Y&&q.dome){let $=q.dome.attributes.iBirth;for(let te of Y)$.array[te]=ee.domeBirth[te]+C;$.needsUpdate=!0}if(q.stem){let $=q.stem.attributes.aBirth,te=!1;for(let ae of U.stems)if(ae.fid===D){for(let E=ae.start;E<ae.start+ae.count;E++)$.array[E]=ee.stemBirth[E]+C;te=!0}te&&($.needsUpdate=!0)}}function ue(D){if(!M)return;let C=M.attributes.iA;C.array.set(D),C.needsUpdate=!0}return{skyU:s,flyU:o,setFlies:ue,renderer:e,scene:t,camera:n,U:r,setComposition:Q,setSize:G,render:X,dispose:ie,shiftFlower:oe,info:()=>({...e.info.memory})}}function qp(i,e){i.classList.add("epx-ff-measuring");let t=i.getBoundingClientRect(),n=[],r=o=>{o.width>1&&o.height>1&&n.push({x0:(o.left-t.left)/100,y0:(o.top-t.top)/100,x1:(o.right-t.left)/100,y1:(o.bottom-t.top)/100})};for(let o of e)if(o){if(/^(H\d|P|SPAN)$/.test(o.tagName)&&o.textContent.trim()){let s=[];for(let a of ah(o,o)){if(a.width<1||a.height<1)continue;let l=s.find(c=>Math.abs(c.top-a.top)<6||a.top<c.bottom-4&&a.bottom>c.top+4);l?(l.left=Math.min(l.left,a.left),l.right=Math.max(l.right,a.right),l.top=Math.min(l.top,a.top),l.bottom=Math.max(l.bottom,a.bottom)):s.push({left:a.left,right:a.right,top:a.top,bottom:a.bottom})}if(s.length){for(let a of s)r({left:a.left,right:a.right,top:a.top,bottom:a.bottom,width:a.right-a.left,height:a.bottom-a.top});continue}}r(o.getBoundingClientRect())}return i.classList.remove("epx-ff-measuring"),{W:t.width/100,H:t.height/100,rects:n}}function Yp(i,e,t){let n=document.documentElement;n.classList.add("epx-ff-measuring");let r=n.clientWidth,o=scrollX,s=scrollY,a=[],l=u=>{u.width>.5&&u.height>.5&&u.right>r*.35&&a.push({x0:(u.left+o)/100,y0:(u.top+s)/100,x1:(u.right+o)/100,y1:(u.bottom+s)/100})};for(let u of ah(document.body,null))l(u);document.querySelectorAll('img,svg,video,canvas,iframe,button,input,select,textarea,.e-button,[class*="e-button"]').forEach(u=>{u.closest(".epx-ffside,.epx-ff")||l(u.getBoundingClientRect())}),(i?i.parentElement:document.body).querySelectorAll("*").forEach(u=>{if(u.closest(".epx-ffside,.epx-ff"))return;let v=u.getBoundingClientRect();if(v.width<2||v.height<1||v.width>r*.9||v.right<r*.35)return;let h=getComputedStyle(u),f=h.backgroundColor!=="rgba(0, 0, 0, 0)"&&h.backgroundColor!=="transparent",b=["Top","Right","Bottom","Left"].some(x=>parseFloat(h["border"+x+"Width"])>0&&h["border"+x+"Style"]!=="none");(f||b)&&l(v)});let d=t&&t.getBoundingClientRect(),p=d&&d.width?{x:(d.left+d.width/2+o)/100,y:(d.top+d.height/2+s)/100}:null,m=i?(i.getBoundingClientRect().bottom+s)/100:0,g=e?(e.getBoundingClientRect().top+s)/100:n.scrollHeight/100;return n.classList.remove("epx-ff-measuring"),{W:r/100,rects:a,top:m,bottom:g,docH:n.scrollHeight/100,finale:p}}function Zp(i={}){let e=new URLSearchParams(location.search),t=matchMedia("(prefers-reduced-motion: reduce)").matches,n=e.has("vine")?parseInt(e.get("vine"),10)>>>0:Math.random()*2**31>>>0,r=i.after?document.querySelector(i.after):null,o=i.before?document.querySelector(i.before):document.querySelector(".elementor-location-footer, footer"),s=i.finale?document.querySelector(i.finale):null,a=document.createElement("div");a.className="epx-ffside",a.setAttribute("aria-hidden","true"),document.body.appendChild(a);let l;try{l=lh({alpha:!0})}catch{return a.remove(),{failed:!0}}l.flyU.uBody.value=1,l.flyU.uScale.value=1.9;let{renderer:c,camera:d,U:p}=l;a.appendChild(c.domElement);let m=(navigator.hardwareConcurrency||8)<=4?1.5:2,g=null,u=null,v=0,h=0,f=0,b=0,x=0,P=0;function N(){a.style.height="0px",a.style.top="0px",g=Yp(r,o,s),R=Math.round(g.docH*100);let F=g.W*100;g.phone=F<1100,v=g.phone?96:Math.round(Tt(F*.3,160,460)),g.strip=v/100,u=Xp(n,g);let A=Wa(n^1540483477),he=g.phone?6:12;u.flies=Array.from({length:he},(V,ne)=>({yRel:.08+.84*((ne+A.next())/he),x:g.W-g.strip*A.range(.15,.85),y:(scrollY+innerHeight*.5)/100,vx:0,vy:0,depth:Math.pow(A.next(),2),group:0,loner:!1,jit:A.range(-.05,.05),skip:Math.floor(A.next()*64)&Math.floor(A.next()*64),seed:A.range(0,100),spd:A.range(.06,.16),vis:0})),W=new Float32Array(he*4),l.setComposition(u),f=Math.min(Math.round(innerHeight*2),R),a.style.width=v+"px",a.style.height=f+"px",l.setSize(v,f,Math.min(window.devicePixelRatio||1,m)),c.domElement.style.width="100%",c.domElement.style.height="100%",K(!0)}let R=0,w=F=>Math.max(0,Math.min(Math.round(F-innerHeight*.5),R-f));function K(F){let A=innerHeight;if(F||scrollY<h||scrollY+A>h+f){let he=w(scrollY);return!F&&he===h?!1:(h=he,a.style.top=h+"px",!0)}return!1}function M(){let F=c.getPixelRatio(),A=c.domElement.height,he=g.W-g.strip,V=[];for(let ne of u.obstacles)ne.y1*100<h-40||ne.y0*100>h+f+40||V.push([(ne.x0-he)*100*F,A-(ne.y1*100-h)*F,(ne.x1-he)*100*F,A-(ne.y0*100-h)*F]);return V}function T(){d.left=g.W-g.strip,d.right=g.W,d.top=-h/100,d.bottom=-(h+f)/100,d.updateProjectionMatrix(),p.uT.value=b,p.uTime.value=P,p.uGlow.value=0,p.uRouteMode.value=1,p.uRouteSpacing.value=1e6,p.uFocus.value=u.finale?[u.finale.x,-u.finale.y,q]:[0,0,0],p.uFocusR.value=u.finale?u.finale.R*2.2:1,l.render(M())}let U=()=>(scrollY+innerHeight*.82)/100,q=0,ee=0;if(s){let F=()=>{ee=1},A=()=>{ee=0};s.addEventListener("pointerenter",F),s.addEventListener("focus",F),s.addEventListener("pointerleave",A),s.addEventListener("blur",A)}let L=0,G=0,X=0,k=!1,W=null;function Q(F){if(!u||!u.flies)return;let A=(performance.now()-bt.t0)/1e3,he=g.W-g.strip,V=[],ne=(le,Ee)=>u.field(le,Ee)-u.pad-.08;u.flies.forEach((le,Ee)=>{let S=(scrollY+innerHeight*le.yRel)/100;Math.abs(S-le.y)>innerHeight/100*1.2&&(le.y=S,le.vis=0);let _=Math.sin(P*.31+le.seed)*1.7+le.seed;le.vx+=(Math.cos(_)*le.spd-le.vx)*Math.min(1,F*1.4),le.vy+=((S-le.y)*1.1+Math.sin(_)*le.spd*.5-le.vy)*Math.min(1,F*1.4);let O=ne(le.x,le.y);if(O<.25){let ce=ne(le.x+.03,le.y)-ne(le.x-.03,le.y),Me=ne(le.x,le.y+.03)-ne(le.x,le.y-.03),pe=Math.hypot(ce,Me)||1;le.vx+=ce/pe*(.25-O)*F*8,le.vy+=Me/pe*(.25-O)*F*4}le.x=Tt(le.x+le.vx*F,he+.03,g.W-.02),le.y+=le.vy*F,O=ne(le.x,le.y),le.vis=Tt(le.vis+(O>0?F*1.5:-F*4),0,1);let re=ka(le,A)*le.vis;W.set([le.x,le.y,le.depth*.6,Math.max(re,.22*le.vis)],Ee*4),re>.05&&V.push([le.x,-le.y,re])}),l.setFlies(W);let de=p.uFF.value;de.fill(0),V.slice(0,16).forEach((le,Ee)=>de.set([le[0],le[1],0,le[2]*.9],Ee*4))}function ie(F){L=requestAnimationFrame(ie);let A=Math.min((F-(G||F))/1e3,.05);G=F;let he=K(!1);x=Math.max(x,U());let V=b<x-.01||Math.abs(ee-q)>.01;if(q+=(ee-q)*.12,!V&&!he&&F-X<33)return;V&&(b+=Math.min(x-b,Math.max(.02,(x-b)*Math.min(1,A*2.2))));let ne=Math.min((F-(X||F))/1e3,.05);P+=ne,X=F,Q(ne),T()}function oe(){k||(k=!0,G=0,L=requestAnimationFrame(ie))}function ue(){k=!1,cancelAnimationFrame(L)}let D=()=>{document.hidden?ue():t||oe()};document.addEventListener("visibilitychange",D);let C=()=>{K(!1)&&T()},B=0,Y=innerWidth,$=document.documentElement.scrollHeight,te=()=>{clearTimeout(B),B=setTimeout(()=>{N(),T()},300)},ae=new ResizeObserver(()=>{let F=document.documentElement.scrollHeight;(Math.abs(innerWidth-Y)>1||Math.abs(F-$)>4)&&(Y=innerWidth,$=F,te())}),E={get seed(){return n},regrow(F){return n=F!=null?F>>>0:Math.random()*2**31>>>0,N(),T(),n},info(){return{flies:u.flies?u.flies.length:0,finale:u.finale,seed:n,vines:u.vines.length,leaves:u.leaves.length,flowers:u.flowers.length,heroBlooms:u.flowers.filter(F=>F.hero).length,stripPx:v,top:Math.round(g.top*100),bottom:Math.round(g.bottom*100),obstacles:u.obstacles.length,gpu:l.info()}},probe(F){let A=c.getContext(),he={},V=[h,b];b=1e5;for(let ne of F){h=w(ne),T();let de=c.getPixelRatio(),le=c.domElement.width,Ee=c.domElement.height,S=new Uint8Array(le*Ee*4);A.readPixels(0,0,le,Ee,A.RGBA,A.UNSIGNED_BYTE,S);let _=0;for(let O of M()){let re=Math.max(0,Math.floor(O[0])),se=Math.min(le,Math.ceil(O[2])),ce=Math.max(0,Math.floor(O[1])),Me=Math.min(Ee,Math.ceil(O[3]));for(let pe=ce;pe<Me;pe++)for(let _e=re;_e<se;_e++)S[(pe*le+_e)*4+3]>3&&_++}he[ne]=_}return[h,b]=V,a.style.top=h+"px",T(),he},destroy(){ue(),ae.disconnect(),document.removeEventListener("visibilitychange",D),removeEventListener("scroll",C),l.dispose(),a.remove()}};return N(),b=t?1e5:g.top-.3,x=b,T(),ae.observe(document.body),t?addEventListener("scroll",C,{passive:!0}):oe(),e.has("vine")&&console.info("[epx-ffside] seed",n,E.info()),E}function jp(i,e={}){let t=(e.copy||[]).map(V=>typeof V=="string"?i.querySelector(V):V).filter(Boolean),n=new URLSearchParams(location.search),r=matchMedia("(prefers-reduced-motion: reduce)").matches,o=n.has("ft")?parseFloat(n.get("ft")):null,s=n.has("ff")?parseInt(n.get("ff"),10)>>>0:e.seed??Math.random()*2**31>>>0,a=document.createElement("div");a.className="epx-ff",a.setAttribute("aria-hidden","true"),i.prepend(a);let l;try{l=lh({alpha:!1})}catch{return i.classList.add("epx-ff-fallback"),a.remove(),{seed:s,failed:!0}}let{renderer:c,camera:d,U:p}=l;a.appendChild(c.domElement);let g=(navigator.hardwareConcurrency||8)<=4||(navigator.deviceMemory||8)<=4?1.5:2,u=null,v=null,h=s,f=null;function b(){u=qp(i,t);let{W:V,H:ne}=u;h=s,v=Wp(h,u),d.left=0,d.right=V,d.top=0,d.bottom=-ne,d.updateProjectionMatrix(),l.setComposition(v),f=new Float32Array(v.flies.length*4),x()}function x(){l.setSize(u.W*100,u.H*100,Math.min(window.devicePixelRatio||1,g)),c.domElement.style.width="100%",c.domElement.style.height="100%"}function P(){let V=c.getPixelRatio(),ne=c.domElement.height;return u.rects.map(de=>[de.x0*100*V,ne-de.y1*100*V,de.x1*100*V,ne-de.y0*100*V])}let N=6,R=o??(r?N+4:0),w=0,K=0,M=0,T=0,U=!0,q=!1,ee=[0,0],L=[0,0];function G(V){let ne=(performance.now()-bt.t0)/1e3,de=[],le=(_,O)=>v.field(_,O)-v.pad-.14,Ee=Tt((R-1.5)/2.5,0,1);v.flies.forEach((_,O)=>{if(!r&&o==null){let se=Math.sin(w*.29+_.seed)*1.6+Math.sin(w*.17+_.seed*2.3)+_.seed,ce=ka(_,ne);_.vx+=(Math.cos(se)*_.spd-_.vx)*Math.min(1,V*1.2),_.vy+=(Math.sin(se)*_.spd*.55+(_.hy-_.y)*.12-ce*.18-_.vy)*Math.min(1,V*1.2);let Me=le(_.x,_.y);if(Me<.3){let _e=le(_.x+.03,_.y)-le(_.x-.03,_.y),Ae=le(_.x,_.y+.03)-le(_.x,_.y-.03),Ue=Math.hypot(_e,Ae)||1;_.vx+=_e/Ue*(.3-Me)*V*7,_.vy+=Ae/Ue*(.3-Me)*V*7}_.x=Tt(_.x+_.vx*V,.02,u.W-.02),_.y=Tt(_.y+_.vy*V,.1,u.H-.02)}let re=(r||o!=null?O%3===0?.9:0:ka(_,ne))*(o!=null||r?1:Ee);f.set([_.x,_.y,_.depth,re],O*4),re>.05&&de.push([_.x,-_.y,re*(.6+.4*_.depth)])}),l.setFlies(f),de.sort((_,O)=>O[2]-_[2]);let S=p.uFF.value;S.fill(0),de.slice(0,16).forEach((_,O)=>S.set([_[0],_[1],0,_[2]],O*4))}function X(){if(r||R<N)return;kp();let V=v.flies.find(ne=>ne.loner);V&&(V.loner=!1,V.group=0)}let k=i.querySelector(".epx-reel"),W=null,Q=0;k?(W=new MutationObserver(()=>{k.style.transition!=="none"&&X()}),W.observe(k,{attributes:!0,attributeFilter:["style"]})):Q=setInterval(X,2200);function ie(){p.uT.value=Math.max(R,0),p.uTime.value=w,p.uGlow.value=0,p.uPar.value=ee,l.skyU.uTime.value=w,l.skyU.uFade.value=Tt(R/1.2,0,1),l.render(P())}function oe(V){K=requestAnimationFrame(oe);let ne=Math.min((V-(M||V))/1e3,.05);M=V;let de=R>N+2;if(de&&V-T<32)return;let le=de?Math.min((V-(T||V))/1e3,.05):ne;T=V,o==null&&(R+=le),w+=le,ee=[ee[0]+(L[0]-ee[0])*.05,ee[1]+(L[1]-ee[1])*.05],G(le),ie()}function ue(){q||r||o!=null||(q=!0,M=0,T=0,K=requestAnimationFrame(oe))}function D(){q=!1,cancelAnimationFrame(K)}let C=new IntersectionObserver(V=>{U=V[0].isIntersecting,U&&!document.hidden?ue():D()},{rootMargin:"100px"});C.observe(i);let B=()=>{document.hidden?D():U&&ue()};document.addEventListener("visibilitychange",B);let Y=matchMedia("(pointer: fine)").matches,$=V=>{let ne=i.getBoundingClientRect();L=[((V.clientX-ne.left)/ne.width-.5)*-.04,((V.clientY-ne.top)/ne.height-.5)*.03]};Y&&!r&&i.addEventListener("pointermove",$,{passive:!0});let te=0,ae=0,E=0,F=new ResizeObserver(()=>{let V=i.getBoundingClientRect();Math.abs(V.width-te)<2&&Math.abs(V.height-ae)<2||(clearTimeout(E),E=setTimeout(()=>{te=V.width,ae=V.height,b(),G(0),ie()},te?160:0))}),A={get seed(){return h},regrow(V){return s=V!=null?V>>>0:Math.random()*2**31>>>0,b(),R=r?N+4:0,G(0),ie(),ue(),h},setTime(V){R=V,G(0),ie()},tick(){return R=Math.max(R,N),X(),{offB:bt.offB,ticks:bt.ticks}},probe(V){let ne=c.getContext(),de=c.getPixelRatio(),le=c.domElement.height,Ee={};for(let S of V){R=S,v.flies.forEach((O,re)=>f.set([O.x,O.y,O.depth,1],re*4)),l.setFlies(f),ie();let _=0;for(let O of u.rects){let re=Math.floor(O.x0*100*de),se=Math.floor(O.y0*100*de),ce=Math.ceil((O.x1-O.x0)*100*de),Me=Math.ceil((O.y1-O.y0)*100*de),pe=new Uint8Array(ce*Me*4);ne.readPixels(re,le-se-Me,ce,Me,ne.RGBA,ne.UNSIGNED_BYTE,pe);for(let _e=0;_e<pe.length;_e+=4)(Math.abs(pe[_e]-244)>2||Math.abs(pe[_e+1]-251)>2||Math.abs(pe[_e+2]-250)>2)&&_++}Ee[S]=_}return Ee},info(){return{seed:h,flies:v.flies.length,loners:v.flies.filter(V=>V.loner).length,grass:v.grass.length,vines:v.vines.length,leaves:v.leaves.length,flowers:v.flowers.length,offB:Math.round(bt.offB*100)/100,ticks:bt.ticks,size:[u.W*100,u.H*100],gpu:l.info()}},destroy(){W&&W.disconnect(),clearInterval(Q),D(),C.disconnect(),F.disconnect(),document.removeEventListener("visibilitychange",B),i.removeEventListener("pointermove",$),l.dispose(),a.remove()}};b();let he=i.getBoundingClientRect();return te=he.width,ae=he.height,F.observe(i),G(0),ie(),ue(),n.has("ff")&&console.info("[epx-fireflies] seed",h,A.info()),A}function Va(){let i=document.querySelector(".elementor-location-header")||document.querySelector("header");i&&document.documentElement.style.setProperty("--epx-head",Math.round(i.getBoundingClientRect().height)+"px")}function ih(){let i=window.epxFirefliesConfig;if(!i||document.body.classList.contains("elementor-editor-active"))return;Va(),addEventListener("resize",Va,{passive:!0});let e=document.querySelector(i.host),t=()=>{if(Va(),e&&!e.querySelector(".epx-ff"))try{window.epxFireflies=jp(e,i)}catch(r){e.classList.add("epx-ff-fallback"),console.warn("[epx-fireflies]",r)}if(i.side&&!document.querySelector(".epx-ffside")){let r=()=>{try{window.epxFFSide=Zp(i.side)}catch(o){console.warn("[epx-ffside]",o)}};document.readyState==="complete"?setTimeout(r,200):addEventListener("load",()=>setTimeout(r,200),{once:!0})}};(document.fonts&&document.fonts.ready?Promise.race([document.fonts.ready,new Promise(r=>setTimeout(r,1500))]):Promise.resolve()).then(()=>requestAnimationFrame(t))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ih):ih();export{jp as mountFireflies,Zp as mountSideFireflies};
