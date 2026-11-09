var qs="160";var Ys=0,bo=1,js=2;var lr=1,Zs=2,Qt=3,Ot=0,it=1,Pt=2;var Xt=0,mi=1,Ao=2,wo=3,Ro=4,Ks=5,gi=100,Js=101,Qs=102,Co=103,Lo=104,$s=200,ea=201,ta=202,ia=203,zn=204,Hn=205,na=206,ra=207,oa=208,sa=209,aa=210,la=211,ca=212,ua=213,ha=214,fa=0,da=1,pa=2,$i=3,ma=4,ga=5,_a=6,xa=7,cr=0,va=1,Ma=2,qt=0,Sa=1,Ea=2,ya=3,Ta=4,ba=5,Aa=6;var Po=300,$t=301,li=302,Vn=303,kn=304,wi=306,Wn=1e3,Dt=1001,Xn=1002,st=1003,Do=1004;var ur=1005;var xt=1006,wa=1007;var _i=1008;var Bt=1009,Ra=1010,Ca=1011,en=1012,hr=1013,Gt=1014,zt=1015,xi=1016,fr=1017,dr=1018,Yt=1020,La=1021,vt=1023,Pa=1024,Da=1025,ei=1026,ci=1027,Ua=1028,pr=1029,Ia=1030,mr=1031,gr=1033,_r=33776,xr=33777,vr=33778,Mr=33779,Uo=35840,Io=35841,Fo=35842,No=35843,Sr=36196,Oo=37492,Bo=37496,Go=37808,zo=37809,Ho=37810,Vo=37811,ko=37812,Wo=37813,Xo=37814,qo=37815,Yo=37816,jo=37817,Zo=37818,Ko=37819,Jo=37820,Qo=37821,Er=36492,$o=36494,es=36495,Fa=36283,ts=36284,is=36285,ns=36286;var yr=3e3,ti=3001,Na=3200,Oa=3201,Ba=0,Ga=1,gt="",et="srgb",Mt="srgb-linear",tn="display-p3",zi="display-p3-linear",nn="linear",Ze="srgb",rn="rec709",on="p3";var Hi=7680;var rs=519,za=512,Ha=513,Va=514,Tr=515,ka=516,Wa=517,Xa=518,qa=519,os=35044;var ss="300 es",qn=1035,It=2e3,Vi=2001;var At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var br=Math.PI/180,Yn=180/Math.PI;function ui(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]).toLowerCase()}function ut(n,e,t){return Math.max(e,Math.min(t,n))}function Ya(n,e){return(n%e+e)%e}function Ar(n,e,t){return(1-t)*n+t*e}function as(n){return(n&n-1)===0&&n!==0}function jn(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function sn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ut(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Ne=class n{constructor(e,t,i,r,o,a,s,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,a,s,l,c)}set(e,t,i,r,o,a,s,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=s,u[3]=t,u[4]=o,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,o=this.elements,a=i[0],s=i[3],l=i[6],c=i[1],u=i[4],f=i[7],p=i[2],m=i[5],g=i[8],_=r[0],d=r[3],h=r[6],y=r[1],v=r[4],R=r[7],D=r[2],C=r[5],w=r[8];return o[0]=a*_+s*y+l*D,o[3]=a*d+s*v+l*C,o[6]=a*h+s*R+l*w,o[1]=c*_+u*y+f*D,o[4]=c*d+u*v+f*C,o[7]=c*h+u*R+f*w,o[2]=p*_+m*y+g*D,o[5]=p*d+m*v+g*C,o[8]=p*h+m*R+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*s*c-i*o*u+i*s*l+r*o*c-r*a*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=u*a-s*c,p=s*l-u*o,m=c*o-a*l,g=t*f+i*p+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(s*i-r*a)*_,e[3]=p*_,e[4]=(u*t-r*l)*_,e[5]=(r*o-s*t)*_,e[6]=m*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*o)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,o,a,s){let l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*a+c*s)+a+e,-r*c,r*l,-r*(-c*a+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(ls.makeScale(e,t)),this}rotate(e){return this.premultiply(ls.makeRotation(-e)),this}translate(e,t){return this.premultiply(ls.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ls=new Ne;var ja=new Ne().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Za=new Ne().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wr={[Mt]:{transfer:nn,primaries:rn,toReference:n=>n,fromReference:n=>n},[et]:{transfer:Ze,primaries:rn,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[zi]:{transfer:nn,primaries:on,toReference:n=>n.applyMatrix3(Za),fromReference:n=>n.applyMatrix3(ja)},[tn]:{transfer:Ze,primaries:on,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Za),fromReference:n=>n.applyMatrix3(ja).convertLinearToSRGB()}},pf=new Set([Mt,zi]),qe={enabled:!0,_workingColorSpace:Mt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!pf.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=wr[e].toReference,r=wr[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return wr[n].primaries},getTransfer:function(n){return n===gt?nn:wr[n].transfer}};function Ri(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Rr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ka={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},Cr={h:0,s:0,l:0};function cs(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var He=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,qe.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=qe.workingColorSpace){if(e=Ya(e,1),t=ut(t,0,1),i=ut(i,0,1),t===0)this.r=this.g=this.b=i;else{let o=i<=.5?i*(1+t):i+t-i*t,a=2*i-o;this.r=cs(a,o,e+1/3),this.g=cs(a,o,e),this.b=cs(a,o,e-1/3)}return qe.toWorkingColorSpace(this,r),this}setStyle(e,t=et){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o,a=r[1],s=r[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let o=r[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=et){let i=Ka[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=et){return qe.fromWorkingColorSpace(wt.copy(this),e),Math.round(ut(wt.r*255,0,255))*65536+Math.round(ut(wt.g*255,0,255))*256+Math.round(ut(wt.b*255,0,255))}getHexString(e=et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(wt.copy(this),t);let i=wt.r,r=wt.g,o=wt.b,a=Math.max(i,r,o),s=Math.min(i,r,o),l,c,u=(s+a)/2;if(s===a)l=0,c=0;else{let f=a-s;switch(c=u<=.5?f/(a+s):f/(2-a-s),a){case i:l=(r-o)/f+(r<o?6:0);break;case r:l=(o-i)/f+2;break;case o:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=et){qe.fromWorkingColorSpace(wt.copy(this),e);let t=wt.r,i=wt.g,r=wt.b;return e!==et?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+t,Ci.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ci),e.getHSL(Cr);let i=Ar(Ci.h,Cr.h,t),r=Ar(Ci.s,Cr.s,t),o=Ar(Ci.l,Cr.l,t);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*r,this.g=o[1]*t+o[4]*i+o[7]*r,this.b=o[2]*t+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wt=new He;He.NAMES=Ka;var fi=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,o,a,s){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],p=o[a+0],m=o[a+1],g=o[a+2],_=o[a+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(s===1){e[t+0]=p,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==p||c!==m||u!==g){let d=1-s,h=l*p+c*m+u*g+f*_,y=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){let D=Math.sqrt(v),C=Math.atan2(D,h*y);d=Math.sin(d*C)/D,s=Math.sin(s*C)/D}let R=s*y;if(l=l*d+p*R,c=c*d+m*R,u=u*d+g*R,f=f*d+_*R,d===1-s){let D=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=D,c*=D,u*=D,f*=D}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,o,a){let s=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=o[a],p=o[a+1],m=o[a+2],g=o[a+3];return e[t]=s*g+u*f+l*m-c*p,e[t+1]=l*g+u*p+c*f-s*m,e[t+2]=c*g+u*m+s*p-l*f,e[t+3]=u*g-s*f-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,o=e._z,a=e._order,s=Math.cos,l=Math.sin,c=s(i/2),u=s(r/2),f=s(o/2),p=l(i/2),m=l(r/2),g=l(o/2);switch(a){case"XYZ":this._x=p*u*f+c*m*g,this._y=c*m*f-p*u*g,this._z=c*u*g+p*m*f,this._w=c*u*f-p*m*g;break;case"YXZ":this._x=p*u*f+c*m*g,this._y=c*m*f-p*u*g,this._z=c*u*g-p*m*f,this._w=c*u*f+p*m*g;break;case"ZXY":this._x=p*u*f-c*m*g,this._y=c*m*f+p*u*g,this._z=c*u*g+p*m*f,this._w=c*u*f-p*m*g;break;case"ZYX":this._x=p*u*f-c*m*g,this._y=c*m*f+p*u*g,this._z=c*u*g-p*m*f,this._w=c*u*f+p*m*g;break;case"YZX":this._x=p*u*f+c*m*g,this._y=c*m*f+p*u*g,this._z=c*u*g-p*m*f,this._w=c*u*f-p*m*g;break;case"XZY":this._x=p*u*f-c*m*g,this._y=c*m*f-p*u*g,this._z=c*u*g+p*m*f,this._w=c*u*f+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],o=t[8],a=t[1],s=t[5],l=t[9],c=t[2],u=t[6],f=t[10],p=i+s+f;if(p>0){let m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(u-l)*m,this._y=(o-c)*m,this._z=(a-r)*m}else if(i>s&&i>f){let m=2*Math.sqrt(1+i-s-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(o+c)/m}else if(s>f){let m=2*Math.sqrt(1+s-i-f);this._w=(o-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{let m=2*Math.sqrt(1+f-i-s);this._w=(a-r)/m,this._x=(o+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,o=e._z,a=e._w,s=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*s+r*c-o*l,this._y=r*u+a*l+o*s-i*c,this._z=o*u+a*c+i*l-r*s,this._w=a*u-i*s-r*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,o=this._z,a=this._w,s=a*e._w+i*e._x+r*e._y+o*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=i,this._y=r,this._z=o,this;let l=1-s*s;if(l<=Number.EPSILON){let m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*o+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,s),f=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=a*f+this._w*p,this._x=i*f+this._x*p,this._y=r*f+this._y*p,this._z=o*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(o),i*Math.cos(o),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};var B=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ja.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ja.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*r,this.y=o[1]*t+o[4]*i+o[7]*r,this.z=o[2]*t+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,o=e.elements,a=1/(o[3]*t+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*r+o[12])*a,this.y=(o[1]*t+o[5]*i+o[9]*r+o[13])*a,this.z=(o[2]*t+o[6]*i+o[10]*r+o[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,o=e.x,a=e.y,s=e.z,l=e.w,c=2*(a*r-s*i),u=2*(s*t-o*r),f=2*(o*i-a*t);return this.x=t+l*c+a*f-s*u,this.y=i+l*u+s*c-o*f,this.z=r+l*f+o*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r,this.y=o[1]*t+o[5]*i+o[9]*r,this.z=o[2]*t+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,o=e.z,a=t.x,s=t.y,l=t.z;return this.x=r*l-o*s,this.y=o*a-i*l,this.z=i*s-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return us.copy(this).projectOnVector(e),this.sub(us)}reflect(e){return this.sub(us.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},us=new B,Ja=new fi;var Mi=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let a=0,s=o.count;a<s;a++)e.isMesh===!0?e.getVertexPosition(a,ii):ii.fromBufferAttribute(o,a),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Lr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Lr.copy(i.boundingBox)),Lr.applyMatrix4(e.matrixWorld),this.union(Lr)}let r=e.children;for(let o=0,a=r.length;o<a;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zn),Pr.subVectors(this.max,Zn),an.subVectors(e.a,Zn),ln.subVectors(e.b,Zn),cn.subVectors(e.c,Zn),Li.subVectors(ln,an),Pi.subVectors(cn,ln),ki.subVectors(an,cn);let t=[0,-Li.z,Li.y,0,-Pi.z,Pi.y,0,-ki.z,ki.y,Li.z,0,-Li.x,Pi.z,0,-Pi.x,ki.z,0,-ki.x,-Li.y,Li.x,0,-Pi.y,Pi.x,0,-ki.y,ki.x,0];return!hs(t,an,ln,cn,Pr)||(t=[1,0,0,0,1,0,0,0,1],!hs(t,an,ln,cn,Pr))?!1:(Dr.crossVectors(Li,Pi),t=[Dr.x,Dr.y,Dr.z],hs(t,an,ln,cn,Pr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},vi=[new B,new B,new B,new B,new B,new B,new B,new B],ii=new B,Lr=new Mi,an=new B,ln=new B,cn=new B,Li=new B,Pi=new B,ki=new B,Zn=new B,Pr=new B,Dr=new B,Wi=new B;function hs(n,e,t,i,r){for(let o=0,a=n.length-3;o<=a;o+=3){Wi.fromArray(n,o);let s=r.x*Math.abs(Wi.x)+r.y*Math.abs(Wi.y)+r.z*Math.abs(Wi.z),l=e.dot(Wi),c=t.dot(Wi),u=i.dot(Wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}var mf=new Mi,Kn=new B,fs=new B,di=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):mf.setFromPoints(e).getCenter(i);let r=0;for(let o=0,a=e.length;o<a;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Kn.subVectors(e,this.center);let t=Kn.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Kn,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Kn.copy(e.center).add(fs)),this.expandByPoint(Kn.copy(e.center).sub(fs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};var ds=new B,gf=new B,_f=new Ne,ni=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=ds.subVectors(i,t).cross(gf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(ds),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||_f.getNormalMatrix(e),r=this.coplanarPoint(ds).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};var Xi=new di,Ur=new B,un=class{constructor(e=new ni,t=new ni,i=new ni,r=new ni,o=new ni,a=new ni){this.planes=[e,t,i,r,o,a]}set(e,t,i,r,o,a){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(o),s[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=It){let i=this.planes,r=e.elements,o=r[0],a=r[1],s=r[2],l=r[3],c=r[4],u=r[5],f=r[6],p=r[7],m=r[8],g=r[9],_=r[10],d=r[11],h=r[12],y=r[13],v=r[14],R=r[15];if(i[0].setComponents(l-o,p-c,d-m,R-h).normalize(),i[1].setComponents(l+o,p+c,d+m,R+h).normalize(),i[2].setComponents(l+a,p+u,d+g,R+y).normalize(),i[3].setComponents(l-a,p-u,d-g,R-y).normalize(),i[4].setComponents(l-s,p-f,d-_,R-v).normalize(),t===It)i[5].setComponents(l+s,p+f,d+_,R+v).normalize();else if(t===Vi)i[5].setComponents(s,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(e){return Xi.center.set(0,0,0),Xi.radius=.7071067811865476,Xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Ur.x=r.normal.x>0?e.max.x:e.min.x,Ur.y=r.normal.y>0?e.max.y:e.min.y,Ur.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ur)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var $e=class n{constructor(e,t,i,r,o,a,s,l,c,u,f,p,m,g,_,d){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,a,s,l,c,u,f,p,m,g,_,d)}set(e,t,i,r,o,a,s,l,c,u,f,p,m,g,_,d){let h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=o,h[5]=a,h[9]=s,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=p,h[3]=m,h[7]=g,h[11]=_,h[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/hn.setFromMatrixColumn(e,0).length(),o=1/hn.setFromMatrixColumn(e,1).length(),a=1/hn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,o=e.z,a=Math.cos(i),s=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){let p=a*u,m=a*f,g=s*u,_=s*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=p-_*c,t[9]=-s*l,t[2]=_-p*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){let p=l*u,m=l*f,g=c*u,_=c*f;t[0]=p+_*s,t[4]=g*s-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-s,t[2]=m*s-g,t[6]=_+p*s,t[10]=a*l}else if(e.order==="ZXY"){let p=l*u,m=l*f,g=c*u,_=c*f;t[0]=p-_*s,t[4]=-a*f,t[8]=g+m*s,t[1]=m+g*s,t[5]=a*u,t[9]=_-p*s,t[2]=-a*c,t[6]=s,t[10]=a*l}else if(e.order==="ZYX"){let p=a*u,m=a*f,g=s*u,_=s*f;t[0]=l*u,t[4]=g*c-m,t[8]=p*c+_,t[1]=l*f,t[5]=_*c+p,t[9]=m*c-g,t[2]=-c,t[6]=s*l,t[10]=a*l}else if(e.order==="YZX"){let p=a*l,m=a*c,g=s*l,_=s*c;t[0]=l*u,t[4]=_-p*f,t[8]=g*f+m,t[1]=f,t[5]=a*u,t[9]=-s*u,t[2]=-c*u,t[6]=m*f+g,t[10]=p-_*f}else if(e.order==="XZY"){let p=a*l,m=a*c,g=s*l,_=s*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=p*f+_,t[5]=a*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=s*u,t[10]=_*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xf,e,vf)}lookAt(e,t,i){let r=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Di.crossVectors(i,Ht),Di.lengthSq()===0&&(Math.abs(i.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Di.crossVectors(i,Ht)),Di.normalize(),Ir.crossVectors(Ht,Di),r[0]=Di.x,r[4]=Ir.x,r[8]=Ht.x,r[1]=Di.y,r[5]=Ir.y,r[9]=Ht.y,r[2]=Di.z,r[6]=Ir.z,r[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,o=this.elements,a=i[0],s=i[4],l=i[8],c=i[12],u=i[1],f=i[5],p=i[9],m=i[13],g=i[2],_=i[6],d=i[10],h=i[14],y=i[3],v=i[7],R=i[11],D=i[15],C=r[0],w=r[4],H=r[8],M=r[12],T=r[1],U=r[5],Y=r[9],W=r[13],A=r[2],L=r[6],I=r[10],K=r[14],j=r[3],q=r[7],ee=r[11],X=r[15];return o[0]=a*C+s*T+l*A+c*j,o[4]=a*w+s*U+l*L+c*q,o[8]=a*H+s*Y+l*I+c*ee,o[12]=a*M+s*W+l*K+c*X,o[1]=u*C+f*T+p*A+m*j,o[5]=u*w+f*U+p*L+m*q,o[9]=u*H+f*Y+p*I+m*ee,o[13]=u*M+f*W+p*K+m*X,o[2]=g*C+_*T+d*A+h*j,o[6]=g*w+_*U+d*L+h*q,o[10]=g*H+_*Y+d*I+h*ee,o[14]=g*M+_*W+d*K+h*X,o[3]=y*C+v*T+R*A+D*j,o[7]=y*w+v*U+R*L+D*q,o[11]=y*H+v*Y+R*I+D*ee,o[15]=y*M+v*W+R*K+D*X,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],o=e[12],a=e[1],s=e[5],l=e[9],c=e[13],u=e[2],f=e[6],p=e[10],m=e[14],g=e[3],_=e[7],d=e[11],h=e[15];return g*(+o*l*f-r*c*f-o*s*p+i*c*p+r*s*m-i*l*m)+_*(+t*l*m-t*c*p+o*a*p-r*a*m+r*c*u-o*l*u)+d*(+t*c*f-t*s*m-o*a*f+i*a*m+o*s*u-i*c*u)+h*(-r*s*u-t*l*f+t*s*p+r*a*f-i*a*p+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=e[9],p=e[10],m=e[11],g=e[12],_=e[13],d=e[14],h=e[15],y=f*d*c-_*p*c+_*l*m-s*d*m-f*l*h+s*p*h,v=g*p*c-u*d*c-g*l*m+a*d*m+u*l*h-a*p*h,R=u*_*c-g*f*c+g*s*m-a*_*m-u*s*h+a*f*h,D=g*f*l-u*_*l-g*s*p+a*_*p+u*s*d-a*f*d,C=t*y+i*v+r*R+o*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/C;return e[0]=y*w,e[1]=(_*p*o-f*d*o-_*r*m+i*d*m+f*r*h-i*p*h)*w,e[2]=(s*d*o-_*l*o+_*r*c-i*d*c-s*r*h+i*l*h)*w,e[3]=(f*l*o-s*p*o-f*r*c+i*p*c+s*r*m-i*l*m)*w,e[4]=v*w,e[5]=(u*d*o-g*p*o+g*r*m-t*d*m-u*r*h+t*p*h)*w,e[6]=(g*l*o-a*d*o-g*r*c+t*d*c+a*r*h-t*l*h)*w,e[7]=(a*p*o-u*l*o+u*r*c-t*p*c-a*r*m+t*l*m)*w,e[8]=R*w,e[9]=(g*f*o-u*_*o-g*i*m+t*_*m+u*i*h-t*f*h)*w,e[10]=(a*_*o-g*s*o+g*i*c-t*_*c-a*i*h+t*s*h)*w,e[11]=(u*s*o-a*f*o-u*i*c+t*f*c+a*i*m-t*s*m)*w,e[12]=D*w,e[13]=(u*_*r-g*f*r+g*i*p-t*_*p-u*i*d+t*f*d)*w,e[14]=(g*s*r-a*_*r-g*i*l+t*_*l+a*i*d-t*s*d)*w,e[15]=(a*f*r-u*s*r+u*i*l-t*f*l-a*i*p+t*s*p)*w,this}scale(e){let t=this.elements,i=e.x,r=e.y,o=e.z;return t[0]*=i,t[4]*=r,t[8]*=o,t[1]*=i,t[5]*=r,t[9]*=o,t[2]*=i,t[6]*=r,t[10]*=o,t[3]*=i,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),o=1-i,a=e.x,s=e.y,l=e.z,c=o*a,u=o*s;return this.set(c*a+i,c*s-r*l,c*l+r*s,0,c*s+r*l,u*s+i,u*l-r*a,0,c*l-r*s,u*l+r*a,o*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,o,a){return this.set(1,i,o,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,o=t._x,a=t._y,s=t._z,l=t._w,c=o+o,u=a+a,f=s+s,p=o*c,m=o*u,g=o*f,_=a*u,d=a*f,h=s*f,y=l*c,v=l*u,R=l*f,D=i.x,C=i.y,w=i.z;return r[0]=(1-(_+h))*D,r[1]=(m+R)*D,r[2]=(g-v)*D,r[3]=0,r[4]=(m-R)*C,r[5]=(1-(p+h))*C,r[6]=(d+y)*C,r[7]=0,r[8]=(g+v)*w,r[9]=(d-y)*w,r[10]=(1-(p+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,o=hn.set(r[0],r[1],r[2]).length(),a=hn.set(r[4],r[5],r[6]).length(),s=hn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],ri.copy(this);let c=1/o,u=1/a,f=1/s;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=u,ri.elements[5]*=u,ri.elements[6]*=u,ri.elements[8]*=f,ri.elements[9]*=f,ri.elements[10]*=f,t.setFromRotationMatrix(ri),i.x=o,i.y=a,i.z=s,this}makePerspective(e,t,i,r,o,a,s=It){let l=this.elements,c=2*o/(t-e),u=2*o/(i-r),f=(t+e)/(t-e),p=(i+r)/(i-r),m,g;if(s===It)m=-(a+o)/(a-o),g=-2*a*o/(a-o);else if(s===Vi)m=-a/(a-o),g=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,o,a,s=It){let l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(a-o),p=(t+e)*c,m=(i+r)*u,g,_;if(s===It)g=(a+o)*f,_=-2*f;else if(s===Vi)g=o*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},hn=new B,ri=new $e,xf=new B(0,0,0),vf=new B(1,1,1),Di=new B,Ir=new B,Ht=new B;var We=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),o=this.x-e.x,a=this.y-e.y;return this.x=o*i-a*r+e.x,this.y=o*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};var nt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,o=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*o,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*o,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*o,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,o,l=e.elements,c=l[0],u=l[4],f=l[8],p=l[1],m=l[5],g=l[9],_=l[2],d=l[6],h=l[10];if(Math.abs(u-p)<.01&&Math.abs(f-_)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+p)<.1&&Math.abs(f+_)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,R=(m+1)/2,D=(h+1)/2,C=(u+p)/4,w=(f+_)/4,H=(g+d)/4;return v>R&&v>D?v<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(v),r=C/i,o=w/i):R>D?R<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(R),i=C/r,o=H/r):D<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(D),i=w/o,r=H/o),this.set(i,r,o,t),this}let y=Math.sqrt((d-g)*(d-g)+(f-_)*(f-_)+(p-u)*(p-u));return Math.abs(y)<.001&&(y=1),this.x=(d-g)/y,this.y=(f-_)/y,this.z=(p-u)/y,this.w=Math.acos((c+m+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};function Fr(){let n=null,e=!1,t=null,i=null;function r(o,a){t(o,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function Qa(n,e){let t=e.isWebGL2,i=new WeakMap;function r(c,u){let f=c.array,p=c.usage,m=f.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,f,p),c.onUploadCallback();let _;if(f instanceof Float32Array)_=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=n.SHORT;else if(f instanceof Uint32Array)_=n.UNSIGNED_INT;else if(f instanceof Int32Array)_=n.INT;else if(f instanceof Int8Array)_=n.BYTE;else if(f instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:m}}function o(c,u,f){let p=u.array,m=u._updateRange,g=u.updateRanges;if(n.bindBuffer(f,c),m.count===-1&&g.length===0&&n.bufferSubData(f,0,p),g.length!==0){for(let _=0,d=g.length;_<d;_++){let h=g[_];t?n.bufferSubData(f,h.start*p.BYTES_PER_ELEMENT,p,h.start,h.count):n.bufferSubData(f,h.start*p.BYTES_PER_ELEMENT,p.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(f,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):n.bufferSubData(f,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){let p=i.get(c);(!p||p.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let f=i.get(c);if(f===void 0)i.set(c,r(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(f.buffer,c,u),f.version=c.version}}return{get:a,remove:s,update:l}}var Ft=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let o=0,a=r.length;o<a;o++)r[o].call(this,e);e.target=null}}};var at=new B,Nr=new We,Ye=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=os,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=zt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Nr.fromBufferAttribute(this,t),Nr.applyMatrix3(e),this.setXY(t,Nr.x,Nr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyMatrix3(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=sn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=sn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=sn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=sn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=sn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),r=Ut(r,this.array),o=Ut(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==os&&(e.usage=this.usage),e}};var fn=class extends Ye{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var dn=class extends Ye{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var jt=class extends Ye{constructor(e,t,i){super(new Float32Array(e),t,i)}};var $a=new $e,el=new fi,Jn=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,o=r[0],a=r[4],s=r[8],l=r[1],c=r[5],u=r[9],f=r[2],p=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(ut(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(ut(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-ut(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(s,o)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return $a.makeRotationFromQuaternion(e),this.setFromRotationMatrix($a,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return el.setFromEuler(this),this.setFromQuaternion(el,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Jn.DEFAULT_ORDER="XYZ";var pn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};var Mf=0,tl=new B,mn=new fi,Si=new $e,Or=new B,Qn=new B,Sf=new B,Ef=new fi,il=new B(1,0,0),nl=new B(0,1,0),rl=new B(0,0,1),yf={type:"added"},Tf={type:"removed"},ht=class n extends Ft{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new B,t=new Jn,i=new fi,r=new B(1,1,1);function o(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new $e},normalMatrix:{value:new Ne}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mn.setFromAxisAngle(e,t),this.quaternion.multiply(mn),this}rotateOnWorldAxis(e,t){return mn.setFromAxisAngle(e,t),this.quaternion.premultiply(mn),this}rotateX(e){return this.rotateOnAxis(il,e)}rotateY(e){return this.rotateOnAxis(nl,e)}rotateZ(e){return this.rotateOnAxis(rl,e)}translateOnAxis(e,t){return tl.copy(e).applyQuaternion(this.quaternion),this.position.add(tl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(il,e)}translateY(e){return this.translateOnAxis(nl,e)}translateZ(e){return this.translateOnAxis(rl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Or.copy(e):Or.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Qn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Qn,Or,this.up):Si.lookAt(Or,Qn,this.up),this.quaternion.setFromRotationMatrix(Si),r&&(Si.extractRotation(r.matrixWorld),mn.setFromRotationMatrix(Si),this.quaternion.premultiply(mn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(yf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tf)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qn,e,Sf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qn,Ef,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++){let o=t[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++){let s=r[o];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);let s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){let l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];o(e.shapes,f)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(o(e.materials,this.material[l]));r.material=s}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){let l=this.animations[s];r.animations.push(o(e.animations,l))}}if(t){let s=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),p=a(e.skeletons),m=a(e.animations),g=a(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(s){let l=[];for(let c in s){let u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};ht.DEFAULT_UP=new B(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;function Br(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function gn(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function sl(){let n=gn("canvas");return n.style.display="block",n}var ol={};function Ui(n){n in ol||(ol[n]=!0,console.warn(n))}var bf=0,Zt=new $e,ps=new ht,_n=new B,Vt=new Mi,$n=new Mi,_t=new B,lt=class n extends Ft{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Br(e)?dn:fn)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let o=new Ne().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,i){return Zt.makeTranslation(e,t,i),this.applyMatrix4(Zt),this}scale(e,t,i){return Zt.makeScale(e,t,i),this.applyMatrix4(Zt),this}lookAt(e){return ps.lookAt(e),ps.updateMatrix(),this.applyMatrix4(ps.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_n).negate(),this.translate(_n.x,_n.y,_n.z),this}setFromPoints(e){let t=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new jt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let o=t[i];Vt.setFromBufferAttribute(o),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new di);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){let i=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let o=0,a=t.length;o<a;o++){let s=t[o];$n.setFromBufferAttribute(s),this.morphTargetsRelative?(_t.addVectors(Vt.min,$n.min),Vt.expandByPoint(_t),_t.addVectors(Vt.max,$n.max),Vt.expandByPoint(_t)):(Vt.expandByPoint($n.min),Vt.expandByPoint($n.max))}Vt.getCenter(i);let r=0;for(let o=0,a=e.count;o<a;o++)_t.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(_t));if(t)for(let o=0,a=t.length;o<a;o++){let s=t[o],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)_t.fromBufferAttribute(s,c),l&&(_n.fromBufferAttribute(e,c),_t.add(_n)),r=Math.max(r,i.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,r=t.position.array,o=t.normal.array,a=t.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ye(new Float32Array(4*s),4));let l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<s;T++)c[T]=new B,u[T]=new B;let f=new B,p=new B,m=new B,g=new We,_=new We,d=new We,h=new B,y=new B;function v(T,U,Y){f.fromArray(r,T*3),p.fromArray(r,U*3),m.fromArray(r,Y*3),g.fromArray(a,T*2),_.fromArray(a,U*2),d.fromArray(a,Y*2),p.sub(f),m.sub(f),_.sub(g),d.sub(g);let W=1/(_.x*d.y-d.x*_.y);isFinite(W)&&(h.copy(p).multiplyScalar(d.y).addScaledVector(m,-_.y).multiplyScalar(W),y.copy(m).multiplyScalar(_.x).addScaledVector(p,-d.x).multiplyScalar(W),c[T].add(h),c[U].add(h),c[Y].add(h),u[T].add(y),u[U].add(y),u[Y].add(y))}let R=this.groups;R.length===0&&(R=[{start:0,count:i.length}]);for(let T=0,U=R.length;T<U;++T){let Y=R[T],W=Y.start,A=Y.count;for(let L=W,I=W+A;L<I;L+=3)v(i[L+0],i[L+1],i[L+2])}let D=new B,C=new B,w=new B,H=new B;function M(T){w.fromArray(o,T*3),H.copy(w);let U=c[T];D.copy(U),D.sub(w.multiplyScalar(w.dot(U))).normalize(),C.crossVectors(H,U);let W=C.dot(u[T])<0?-1:1;l[T*4]=D.x,l[T*4+1]=D.y,l[T*4+2]=D.z,l[T*4+3]=W}for(let T=0,U=R.length;T<U;++T){let Y=R[T],W=Y.start,A=Y.count;for(let L=W,I=W+A;L<I;L+=3)M(i[L+0]),M(i[L+1]),M(i[L+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ye(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);let r=new B,o=new B,a=new B,s=new B,l=new B,c=new B,u=new B,f=new B;if(e)for(let p=0,m=e.count;p<m;p+=3){let g=e.getX(p+0),_=e.getX(p+1),d=e.getX(p+2);r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,_),a.fromBufferAttribute(t,d),u.subVectors(a,o),f.subVectors(r,o),u.cross(f),s.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,d),s.add(u),l.add(u),c.add(u),i.setXYZ(g,s.x,s.y,s.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3)r.fromBufferAttribute(t,p+0),o.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),u.subVectors(a,o),f.subVectors(r,o),u.cross(f),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(s,l){let c=s.array,u=s.itemSize,f=s.normalized,p=new c.constructor(l.length*u),m=0,g=0;for(let _=0,d=l.length;_<d;_++){s.isInterleavedBufferAttribute?m=l[_]*s.data.stride+s.offset:m=l[_]*u;for(let h=0;h<u;h++)p[g++]=c[m++]}return new Ye(p,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let s in r){let l=r[s],c=e(l,i);t.setAttribute(s,c)}let o=this.morphAttributes;for(let s in o){let l=[],c=o[s];for(let u=0,f=c.length;u<f;u++){let p=c[u],m=e(p,i);l.push(m)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let s=0,l=a.length;s<l;s++){let c=a[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},o=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,p=c.length;f<p;f++){let m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let o=e.morphAttributes;for(let c in o){let u=[],f=o[c];for(let p=0,m=f.length;p<m;p++)u.push(f[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ii=class n extends lt{constructor(e=1,t=1,i=1,r=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:o,depthSegments:a};let s=this;r=Math.floor(r),o=Math.floor(o),a=Math.floor(a);let l=[],c=[],u=[],f=[],p=0,m=0;g("z","y","x",-1,-1,i,t,e,a,o,0),g("z","y","x",1,-1,i,t,-e,a,o,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,o,4),g("x","y","z",-1,-1,e,t,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(f,2));function g(_,d,h,y,v,R,D,C,w,H,M){let T=R/w,U=D/H,Y=R/2,W=D/2,A=C/2,L=w+1,I=H+1,K=0,j=0,q=new B;for(let ee=0;ee<I;ee++){let X=ee*U-W;for(let Q=0;Q<L;Q++){let G=Q*T-Y;q[_]=G*y,q[d]=X*v,q[h]=A,c.push(q.x,q.y,q.z),q[_]=0,q[d]=0,q[h]=C>0?1:-1,u.push(q.x,q.y,q.z),f.push(Q/w),f.push(1-ee/H),K+=1}}for(let ee=0;ee<H;ee++)for(let X=0;X<w;X++){let Q=p+X+L*ee,G=p+X+L*(ee+1),Z=p+(X+1)+L*(ee+1),re=p+(X+1)+L*ee;l.push(Q,G,re),l.push(G,Z,re),j+=6}s.addGroup(m,j,M),m+=j,p+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Gr=class n extends lt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let o=e/2,a=t/2,s=Math.floor(i),l=Math.floor(r),c=s+1,u=l+1,f=e/s,p=t/l,m=[],g=[],_=[],d=[];for(let h=0;h<u;h++){let y=h*p-a;for(let v=0;v<c;v++){let R=v*f-o;g.push(R,-y,0),_.push(0,0,1),d.push(v/s),d.push(1-h/l)}}for(let h=0;h<l;h++)for(let y=0;y<s;y++){let v=y+c*h,R=y+c*(h+1),D=y+1+c*(h+1),C=y+1+c*h;m.push(v,R,C),m.push(R,D,C)}this.setIndex(m),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(_,3)),this.setAttribute("uv",new jt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Af=0,Kt=class extends Ft{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=ui(),this.name="",this.type="Material",this.blending=mi,this.side=Ot,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zn,this.blendDst=Hn,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=$i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rs,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==mi&&(i.blending=this.blending),this.side!==Ot&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zn&&(i.blendSrc=this.blendSrc),this.blendDst!==Hn&&(i.blendDst=this.blendDst),this.blendEquation!==gi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$i&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rs&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){let a=[];for(let s in o){let l=o[s];delete l.metadata,a.push(l)}return a}if(t){let o=r(e.textures),a=r(e.images);o.length>0&&(i.textures=o),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};function Ei(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Rt(n){let e={};for(let t=0;t<n.length;t++){let i=Ei(n[t]);for(let r in i)e[r]=i[r]}return e}function al(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function zr(n){return n.getRenderTarget()===null?n.outputColorSpace:qe.workingColorSpace}var ll={clone:Ei,merge:Rt};var cl=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;var ul=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;var ct=class extends Kt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cl,this.fragmentShader=ul,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ei(e.uniforms),this.uniformsGroups=al(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}};var yi=new B,ms=new B,Hr=new B,Fi=new B,gs=new B,Vr=new B,_s=new B,xn=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ms.copy(e).add(t).multiplyScalar(.5),Hr.copy(t).sub(e).normalize(),Fi.copy(this.origin).sub(ms);let o=e.distanceTo(t)*.5,a=-this.direction.dot(Hr),s=Fi.dot(this.direction),l=-Fi.dot(Hr),c=Fi.lengthSq(),u=Math.abs(1-a*a),f,p,m,g;if(u>0)if(f=a*l-s,p=a*s-l,g=o*u,f>=0)if(p>=-g)if(p<=g){let _=1/u;f*=_,p*=_,m=f*(f+a*p+2*s)+p*(a*f+p+2*l)+c}else p=o,f=Math.max(0,-(a*p+s)),m=-f*f+p*(p+2*l)+c;else p=-o,f=Math.max(0,-(a*p+s)),m=-f*f+p*(p+2*l)+c;else p<=-g?(f=Math.max(0,-(-a*o+s)),p=f>0?-o:Math.min(Math.max(-o,-l),o),m=-f*f+p*(p+2*l)+c):p<=g?(f=0,p=Math.min(Math.max(-o,-l),o),m=p*(p+2*l)+c):(f=Math.max(0,-(a*o+s)),p=f>0?o:Math.min(Math.max(-o,-l),o),m=-f*f+p*(p+2*l)+c);else p=a>0?-o:o,f=Math.max(0,-(a*p+s)),m=-f*f+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ms).addScaledVector(Hr,p),m}intersectSphere(e,t){yi.subVectors(e.center,this.origin);let i=yi.dot(this.direction),r=yi.dot(yi)-i*i,o=e.radius*e.radius;if(r>o)return null;let a=Math.sqrt(o-r),s=i-a,l=i+a;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,o,a,s,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),u>=0?(o=(e.min.y-p.y)*u,a=(e.max.y-p.y)*u):(o=(e.max.y-p.y)*u,a=(e.min.y-p.y)*u),i>a||o>r||((o>i||isNaN(i))&&(i=o),(a<r||isNaN(r))&&(r=a),f>=0?(s=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(s=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),i>l||s>r)||((s>i||i!==i)&&(i=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,i,r,o){gs.subVectors(t,e),Vr.subVectors(i,e),_s.crossVectors(gs,Vr);let a=this.direction.dot(_s),s;if(a>0){if(r)return null;s=1}else if(a<0)s=-1,a=-a;else return null;Fi.subVectors(this.origin,e);let l=s*this.direction.dot(Vr.crossVectors(Fi,Vr));if(l<0)return null;let c=s*this.direction.dot(gs.cross(Fi));if(c<0||l+c>a)return null;let u=-s*Fi.dot(_s);return u<0?null:this.at(u/a,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};var oi=new B,Ti=new B,xs=new B,bi=new B,vn=new B,Mn=new B,hl=new B,vs=new B,Ms=new B,Ss=new B,kr=!1,qi=class n{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),oi.subVectors(e,t),r.cross(oi);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,i,r,o){oi.subVectors(r,t),Ti.subVectors(i,t),xs.subVectors(e,t);let a=oi.dot(oi),s=oi.dot(Ti),l=oi.dot(xs),c=Ti.dot(Ti),u=Ti.dot(xs),f=a*c-s*s;if(f===0)return o.set(0,0,0),null;let p=1/f,m=(c*l-s*u)*p,g=(a*u-s*l)*p;return o.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getUV(e,t,i,r,o,a,s,l){return kr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),kr=!0),this.getInterpolation(e,t,i,r,o,a,s,l)}static getInterpolation(e,t,i,r,o,a,s,l){return this.getBarycoord(e,t,i,r,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,bi.x),l.addScaledVector(a,bi.y),l.addScaledVector(s,bi.z),l)}static isFrontFacing(e,t,i,r){return oi.subVectors(i,t),Ti.subVectors(e,t),oi.cross(Ti).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),oi.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,o){return kr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),kr=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}getInterpolation(e,t,i,r,o){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,o=this.c,a,s;vn.subVectors(r,i),Mn.subVectors(o,i),vs.subVectors(e,i);let l=vn.dot(vs),c=Mn.dot(vs);if(l<=0&&c<=0)return t.copy(i);Ms.subVectors(e,r);let u=vn.dot(Ms),f=Mn.dot(Ms);if(u>=0&&f<=u)return t.copy(r);let p=l*f-u*c;if(p<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(vn,a);Ss.subVectors(e,o);let m=vn.dot(Ss),g=Mn.dot(Ss);if(g>=0&&m<=g)return t.copy(o);let _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return s=c/(c-g),t.copy(i).addScaledVector(Mn,s);let d=u*g-m*f;if(d<=0&&f-u>=0&&m-g>=0)return hl.subVectors(o,r),s=(f-u)/(f-u+(m-g)),t.copy(r).addScaledVector(hl,s);let h=1/(d+_+p);return a=_*h,s=p*h,t.copy(i).addScaledVector(vn,a).addScaledVector(Mn,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};var Sn=class extends Kt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var fl=new $e,Yi=new xn,Wr=new di,dl=new B,En=new B,yn=new B,Tn=new B,Es=new B,Xr=new B,qr=new We,Yr=new We,jr=new We,pl=new B,ml=new B,gl=new B,Zr=new B,Kr=new B,St=class extends ht{constructor(e=new lt,t=new Sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){let s=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let s=this.morphTargetInfluences;if(o&&s){Xr.set(0,0,0);for(let l=0,c=o.length;l<c;l++){let u=s[l],f=o[l];u!==0&&(Es.fromBufferAttribute(f,e),a?Xr.addScaledVector(Es,u):Xr.addScaledVector(Es.sub(t),u))}t.add(Xr)}return t}raycast(e,t){let i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wr.copy(i.boundingSphere),Wr.applyMatrix4(o),Yi.copy(e.ray).recast(e.near),!(Wr.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(Wr,dl)===null||Yi.origin.distanceToSquared(dl)>(e.far-e.near)**2))&&(fl.copy(o).invert(),Yi.copy(e.ray).applyMatrix4(fl),!(i.boundingBox!==null&&Yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Yi)))}_computeIntersections(e,t,i){let r,o=this.geometry,a=this.material,s=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,f=o.attributes.normal,p=o.groups,m=o.drawRange;if(s!==null)if(Array.isArray(a))for(let g=0,_=p.length;g<_;g++){let d=p[g],h=a[d.materialIndex],y=Math.max(d.start,m.start),v=Math.min(s.count,Math.min(d.start+d.count,m.start+m.count));for(let R=y,D=v;R<D;R+=3){let C=s.getX(R),w=s.getX(R+1),H=s.getX(R+2);r=Jr(this,h,e,i,c,u,f,C,w,H),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{let g=Math.max(0,m.start),_=Math.min(s.count,m.start+m.count);for(let d=g,h=_;d<h;d+=3){let y=s.getX(d),v=s.getX(d+1),R=s.getX(d+2);r=Jr(this,a,e,i,c,u,f,y,v,R),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=p.length;g<_;g++){let d=p[g],h=a[d.materialIndex],y=Math.max(d.start,m.start),v=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let R=y,D=v;R<D;R+=3){let C=R,w=R+1,H=R+2;r=Jr(this,h,e,i,c,u,f,C,w,H),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{let g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let d=g,h=_;d<h;d+=3){let y=d,v=d+1,R=d+2;r=Jr(this,a,e,i,c,u,f,y,v,R),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}};function wf(n,e,t,i,r,o,a,s){let l;if(e.side===it?l=i.intersectTriangle(a,o,r,!0,s):l=i.intersectTriangle(r,o,a,e.side===Ot,s),l===null)return null;Kr.copy(s),Kr.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Kr);return c<t.near||c>t.far?null:{distance:c,point:Kr.clone(),object:n}}function Jr(n,e,t,i,r,o,a,s,l,c){n.getVertexPosition(s,En),n.getVertexPosition(l,yn),n.getVertexPosition(c,Tn);let u=wf(n,e,t,i,En,yn,Tn,Zr);if(u){r&&(qr.fromBufferAttribute(r,s),Yr.fromBufferAttribute(r,l),jr.fromBufferAttribute(r,c),u.uv=qi.getInterpolation(Zr,En,yn,Tn,qr,Yr,jr,new We)),o&&(qr.fromBufferAttribute(o,s),Yr.fromBufferAttribute(o,l),jr.fromBufferAttribute(o,c),u.uv1=qi.getInterpolation(Zr,En,yn,Tn,qr,Yr,jr,new We),u.uv2=u.uv1),a&&(pl.fromBufferAttribute(a,s),ml.fromBufferAttribute(a,l),gl.fromBufferAttribute(a,c),u.normal=qi.getInterpolation(Zr,En,yn,Tn,pl,ml,gl,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a:s,b:l,c,normal:new B,materialIndex:0};qi.getNormal(En,yn,Tn,f.normal),u.face=f}return u}var _l=`
#ifdef USE_ALPHAHASH

	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;

#endif
`;var xl=`
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
`;var vl=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

#endif
`;var Ml=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`;var Sl=`
#ifdef USE_ALPHATEST

	if ( diffuseColor.a < alphaTest ) discard;

#endif
`;var El=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`;var yl=`
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
`;var Tl=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`;var bl=`
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
`;var Al=`
#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif
`;var wl=`
vec3 transformed = vec3( position );

#ifdef USE_ALPHAHASH

	vPosition = vec3( position );

#endif
`;var Rl=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`;var Cl=`

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

`;var Ll=`

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

`;var Pl=`
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
`;var Dl=`
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
`;var Ul=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`;var Il=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`;var Fl=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`;var Nl=`
#if defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#elif defined( USE_COLOR )

	diffuseColor.rgb *= vColor;

#endif
`;var Ol=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR )

	varying vec3 vColor;

#endif
`;var Bl=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	varying vec3 vColor;

#endif
`;var Gl=`
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
`;var zl=`
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
`;var Hl=`
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
`;var Vl=`

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
`;var kl=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`;var Wl=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );

#endif
`;var Xl=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`;var ql=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`;var Yl=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`;var jl=`

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
`;var Zl=`
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
`;var Kl=`
#ifdef USE_ENVMAP

	uniform float envMapIntensity;
	uniform float flipEnvMap;

	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif
`;var Jl=`
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
`;var Ql=`
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
`;var $l=`
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
`;var ec=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`;var tc=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`;var ic=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`;var nc=`
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
`;var rc=`

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
`;var oc=`
#ifdef USE_LIGHTMAP

	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

	reflectedLight.indirectDiffuse += lightMapIrradiance;

#endif
`;var sc=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`;var ac=`
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`;var lc=`
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
`;var cc=`
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
`;var uc=`
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
`;var hc=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`;var fc=`
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
`;var dc=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`;var pc=`
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
`;var mc=`
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
`;var gc=`

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
`;var _c=`
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
`;var xc=`
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
`;var vc=`
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif
`;var Mc=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`;var Sc=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;var Ec=`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		varying float vFragDepth;
		varying float vIsPerspective;

	#else

		uniform float logDepthBufFC;

	#endif

#endif
`;var yc=`
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
`;var Tc=`
#ifdef USE_MAP

	vec4 sampledDiffuseColor = texture2D( map, vMapUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_APLHA8 with video textures

		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`;var bc=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`;var Ac=`
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
`;var wc=`
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
`;var Rc=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`;var Cc=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`;var Lc=`
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
`;var Pc=`
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
`;var Dc=`
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
`;var Uc=`
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
`;var Ic=`
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

`;var Fc=`

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
`;var Nc=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;var Oc=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;var Bc=`
#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif
`;var Gc=`
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
`;var zc=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = nonPerturbedNormal;

#endif
`;var Hc=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	clearcoatNormal = normalize( tbn2 * clearcoatMapN );

#endif
`;var Vc=`

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
`;var kc=`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`;var Wc=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`;var Xc=`
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
`;var qc=`
#ifdef PREMULTIPLIED_ALPHA

	// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.
	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`;var Yc=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_BATCHING

	mvPosition = batchingMatrix * mvPosition;

#endif

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`;var jc=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`;var Zc=`
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
`;var Kc=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`;var Jc=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`;var Qc=`
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
`;var $c=`

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
`;var eu=`

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


`;var tu=`
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
`;var iu=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`;var nu=`
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
`;var ru=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`;var ou=`
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
`;var su=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`;var au=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`;var lu=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`;var cu=`
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
`;var uu=`
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
`;var hu=`
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
`;var fu=`
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
`;var du=`
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
`;var pu=`
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
`;var mu=`
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
`;var gu=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,_u=`
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
`;var xu=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,vu=`

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
`;var Mu=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,Su=`
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
`;var Eu=`
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
`,yu=`
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
`;var Tu=`
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
`,bu=`
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
`;var Au=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,wu=`
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
`;var Ru=`
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
`,Cu=`
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
`;var Lu=`
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
`,Pu=`
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
`;var Du=`
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
`,Uu=`
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
`;var Iu=`
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
`,Fu=`
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
`;var Nu=`
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
`,Ou=`
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
`;var Bu=`
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
`,Gu=`
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
`;var zu=`
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
`,Hu=`
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
`;var Vu=`
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
`,ku=`
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
`;var Wu=`
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
`,Xu=`
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
`;var qu=`
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
`,Yu=`
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
`;var ju=`
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
`,Zu=`
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
`;var Ge={alphahash_fragment:_l,alphahash_pars_fragment:xl,alphamap_fragment:vl,alphamap_pars_fragment:Ml,alphatest_fragment:Sl,alphatest_pars_fragment:El,aomap_fragment:yl,aomap_pars_fragment:Tl,batching_pars_vertex:bl,batching_vertex:Al,begin_vertex:wl,beginnormal_vertex:Rl,bsdfs:Cl,iridescence_fragment:Ll,bumpmap_pars_fragment:Pl,clipping_planes_fragment:Dl,clipping_planes_pars_fragment:Ul,clipping_planes_pars_vertex:Il,clipping_planes_vertex:Fl,color_fragment:Nl,color_pars_fragment:Ol,color_pars_vertex:Bl,color_vertex:Gl,common:zl,cube_uv_reflection_fragment:Hl,defaultnormal_vertex:Vl,displacementmap_pars_vertex:kl,displacementmap_vertex:Wl,emissivemap_fragment:Xl,emissivemap_pars_fragment:ql,colorspace_fragment:Yl,colorspace_pars_fragment:jl,envmap_fragment:Zl,envmap_common_pars_fragment:Kl,envmap_pars_fragment:Jl,envmap_pars_vertex:Ql,envmap_physical_pars_fragment:uc,envmap_vertex:$l,fog_vertex:ec,fog_pars_vertex:tc,fog_fragment:ic,fog_pars_fragment:nc,gradientmap_pars_fragment:rc,lightmap_fragment:oc,lightmap_pars_fragment:sc,lights_lambert_fragment:ac,lights_lambert_pars_fragment:lc,lights_pars_begin:cc,lights_toon_fragment:hc,lights_toon_pars_fragment:fc,lights_phong_fragment:dc,lights_phong_pars_fragment:pc,lights_physical_fragment:mc,lights_physical_pars_fragment:gc,lights_fragment_begin:_c,lights_fragment_maps:xc,lights_fragment_end:vc,logdepthbuf_fragment:Mc,logdepthbuf_pars_fragment:Sc,logdepthbuf_pars_vertex:Ec,logdepthbuf_vertex:yc,map_fragment:Tc,map_pars_fragment:bc,map_particle_fragment:Ac,map_particle_pars_fragment:wc,metalnessmap_fragment:Rc,metalnessmap_pars_fragment:Cc,morphcolor_vertex:Lc,morphnormal_vertex:Pc,morphtarget_pars_vertex:Dc,morphtarget_vertex:Uc,normal_fragment_begin:Ic,normal_fragment_maps:Fc,normal_pars_fragment:Nc,normal_pars_vertex:Oc,normal_vertex:Bc,normalmap_pars_fragment:Gc,clearcoat_normal_fragment_begin:zc,clearcoat_normal_fragment_maps:Hc,clearcoat_pars_fragment:Vc,iridescence_pars_fragment:kc,opaque_fragment:Wc,packing:Xc,premultiplied_alpha_fragment:qc,project_vertex:Yc,dithering_fragment:jc,dithering_pars_fragment:Zc,roughnessmap_fragment:Kc,roughnessmap_pars_fragment:Jc,shadowmap_pars_fragment:Qc,shadowmap_pars_vertex:$c,shadowmap_vertex:eu,shadowmask_pars_fragment:tu,skinbase_vertex:iu,skinning_pars_vertex:nu,skinning_vertex:ru,skinnormal_vertex:ou,specularmap_fragment:su,specularmap_pars_fragment:au,tonemapping_fragment:lu,tonemapping_pars_fragment:cu,transmission_fragment:uu,transmission_pars_fragment:hu,uv_pars_fragment:fu,uv_pars_vertex:du,uv_vertex:pu,worldpos_vertex:mu,background_vert:gu,background_frag:_u,backgroundCube_vert:xu,backgroundCube_frag:vu,cube_vert:Mu,cube_frag:Su,depth_vert:Eu,depth_frag:yu,distanceRGBA_vert:Tu,distanceRGBA_frag:bu,equirect_vert:Au,equirect_frag:wu,linedashed_vert:Ru,linedashed_frag:Cu,meshbasic_vert:Lu,meshbasic_frag:Pu,meshlambert_vert:Du,meshlambert_frag:Uu,meshmatcap_vert:Iu,meshmatcap_frag:Fu,meshnormal_vert:Nu,meshnormal_frag:Ou,meshphong_vert:Bu,meshphong_frag:Gu,meshphysical_vert:zu,meshphysical_frag:Hu,meshtoon_vert:Vu,meshtoon_frag:ku,points_vert:Wu,points_frag:Xu,shadow_vert:qu,shadow_frag:Yu,sprite_vert:ju,sprite_frag:Zu};var de={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}};var Jt={basic:{uniforms:Rt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Rt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new He(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Rt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Rt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Rt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new He(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Rt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Rt([de.points,de.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Rt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Rt([de.common,de.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Rt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Rt([de.sprite,de.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Rt([de.common,de.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Rt([de.lights,de.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Jt.physical={uniforms:Rt([Jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var Qr={r:0,b:0,g:0};function Ku(n,e,t,i,r,o,a){let s=new He(0),l=o===!0?0:1,c,u,f=null,p=0,m=null;function g(d,h){let y=!1,v=h.isScene===!0?h.background:null;v&&v.isTexture&&(v=(h.backgroundBlurriness>0?t:e).get(v)),v===null?_(s,l):v&&v.isColor&&(_(v,1),y=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===wi)?(u===void 0&&(u=new St(new Ii(1,1,1),new ct({name:"BackgroundCubeMaterial",uniforms:Ei(Jt.backgroundCube.uniforms),vertexShader:Jt.backgroundCube.vertexShader,fragmentShader:Jt.backgroundCube.fragmentShader,side:it,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=qe.getTransfer(v.colorSpace)!==Ze,(f!==v||p!==v.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=v,p=v.version,m=n.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new St(new Gr(2,2),new ct({name:"BackgroundMaterial",uniforms:Ei(Jt.background.uniforms),vertexShader:Jt.background.vertexShader,fragmentShader:Jt.background.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=qe.getTransfer(v.colorSpace)!==Ze,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||p!==v.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=v,p=v.version,m=n.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function _(d,h){d.getRGB(Qr,zr(n)),i.buffers.color.setClear(Qr.r,Qr.g,Qr.b,h,a)}return{getClearColor:function(){return s},setClearColor:function(d,h=1){s.set(d),l=h,_(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,_(s,l)},render:g}}function Ju(n,e,t,i){let r=n.getParameter(n.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||o!==null,s={},l=d(null),c=l,u=!1;function f(A,L,I,K,j){let q=!1;if(a){let ee=_(K,I,L);c!==ee&&(c=ee,m(c.object)),q=h(A,K,I,j),q&&y(A,K,I,j)}else{let ee=L.wireframe===!0;(c.geometry!==K.id||c.program!==I.id||c.wireframe!==ee)&&(c.geometry=K.id,c.program=I.id,c.wireframe=ee,q=!0)}j!==null&&t.update(j,n.ELEMENT_ARRAY_BUFFER),(q||u)&&(u=!1,H(A,L,I,K),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function p(){return i.isWebGL2?n.createVertexArray():o.createVertexArrayOES()}function m(A){return i.isWebGL2?n.bindVertexArray(A):o.bindVertexArrayOES(A)}function g(A){return i.isWebGL2?n.deleteVertexArray(A):o.deleteVertexArrayOES(A)}function _(A,L,I){let K=I.wireframe===!0,j=s[A.id];j===void 0&&(j={},s[A.id]=j);let q=j[L.id];q===void 0&&(q={},j[L.id]=q);let ee=q[K];return ee===void 0&&(ee=d(p()),q[K]=ee),ee}function d(A){let L=[],I=[],K=[];for(let j=0;j<r;j++)L[j]=0,I[j]=0,K[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:I,attributeDivisors:K,object:A,attributes:{},index:null}}function h(A,L,I,K){let j=c.attributes,q=L.attributes,ee=0,X=I.getAttributes();for(let Q in X)if(X[Q].location>=0){let Z=j[Q],re=q[Q];if(re===void 0&&(Q==="instanceMatrix"&&A.instanceMatrix&&(re=A.instanceMatrix),Q==="instanceColor"&&A.instanceColor&&(re=A.instanceColor)),Z===void 0||Z.attribute!==re||re&&Z.data!==re.data)return!0;ee++}return c.attributesNum!==ee||c.index!==K}function y(A,L,I,K){let j={},q=L.attributes,ee=0,X=I.getAttributes();for(let Q in X)if(X[Q].location>=0){let Z=q[Q];Z===void 0&&(Q==="instanceMatrix"&&A.instanceMatrix&&(Z=A.instanceMatrix),Q==="instanceColor"&&A.instanceColor&&(Z=A.instanceColor));let re={};re.attribute=Z,Z&&Z.data&&(re.data=Z.data),j[Q]=re,ee++}c.attributes=j,c.attributesNum=ee,c.index=K}function v(){let A=c.newAttributes;for(let L=0,I=A.length;L<I;L++)A[L]=0}function R(A){D(A,0)}function D(A,L){let I=c.newAttributes,K=c.enabledAttributes,j=c.attributeDivisors;I[A]=1,K[A]===0&&(n.enableVertexAttribArray(A),K[A]=1),j[A]!==L&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](A,L),j[A]=L)}function C(){let A=c.newAttributes,L=c.enabledAttributes;for(let I=0,K=L.length;I<K;I++)L[I]!==A[I]&&(n.disableVertexAttribArray(I),L[I]=0)}function w(A,L,I,K,j,q,ee){ee===!0?n.vertexAttribIPointer(A,L,I,j,q):n.vertexAttribPointer(A,L,I,K,j,q)}function H(A,L,I,K){if(i.isWebGL2===!1&&(A.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let j=K.attributes,q=I.getAttributes(),ee=L.defaultAttributeValues;for(let X in q){let Q=q[X];if(Q.location>=0){let G=j[X];if(G===void 0&&(X==="instanceMatrix"&&A.instanceMatrix&&(G=A.instanceMatrix),X==="instanceColor"&&A.instanceColor&&(G=A.instanceColor)),G!==void 0){let Z=G.normalized,re=G.itemSize,ue=t.get(G);if(ue===void 0)continue;let le=ue.buffer,Ee=ue.type,he=ue.bytesPerElement,ge=i.isWebGL2===!0&&(Ee===n.INT||Ee===n.UNSIGNED_INT||G.gpuType===hr);if(G.isInterleavedBufferAttribute){let xe=G.data,b=xe.stride,fe=G.offset;if(xe.isInstancedInterleavedBuffer){for(let J=0;J<Q.locationSize;J++)D(Q.location+J,xe.meshPerAttribute);A.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let J=0;J<Q.locationSize;J++)R(Q.location+J);n.bindBuffer(n.ARRAY_BUFFER,le);for(let J=0;J<Q.locationSize;J++)w(Q.location+J,re/Q.locationSize,Ee,Z,b*he,(fe+re/Q.locationSize*J)*he,ge)}else{if(G.isInstancedBufferAttribute){for(let xe=0;xe<Q.locationSize;xe++)D(Q.location+xe,G.meshPerAttribute);A.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let xe=0;xe<Q.locationSize;xe++)R(Q.location+xe);n.bindBuffer(n.ARRAY_BUFFER,le);for(let xe=0;xe<Q.locationSize;xe++)w(Q.location+xe,re/Q.locationSize,Ee,Z,re*he,re/Q.locationSize*xe*he,ge)}}else if(ee!==void 0){let Z=ee[X];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(Q.location,Z);break;case 3:n.vertexAttrib3fv(Q.location,Z);break;case 4:n.vertexAttrib4fv(Q.location,Z);break;default:n.vertexAttrib1fv(Q.location,Z)}}}}C()}function M(){Y();for(let A in s){let L=s[A];for(let I in L){let K=L[I];for(let j in K)g(K[j].object),delete K[j];delete L[I]}delete s[A]}}function T(A){if(s[A.id]===void 0)return;let L=s[A.id];for(let I in L){let K=L[I];for(let j in K)g(K[j].object),delete K[j];delete L[I]}delete s[A.id]}function U(A){for(let L in s){let I=s[L];if(I[A.id]===void 0)continue;let K=I[A.id];for(let j in K)g(K[j].object),delete K[j];delete I[A.id]}}function Y(){W(),u=!0,c!==l&&(c=l,m(c.object))}function W(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:Y,resetDefaultState:W,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:U,initAttributes:v,enableAttribute:R,disableUnusedAttributes:C}}function Qu(n,e,t,i){let r=i.isWebGL2,o;function a(u){o=u}function s(u,f){n.drawArrays(o,u,f),t.update(f,o,1)}function l(u,f,p){if(p===0)return;let m,g;if(r)m=n,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](o,u,f,p),t.update(f,o,p)}function c(u,f,p){if(p===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<p;g++)this.render(u[g],f[g]);else{m.multiDrawArraysWEBGL(o,u,0,f,0,p);let g=0;for(let _=0;_<p;_++)g+=f[_];t.update(g,o,1)}}this.setMode=a,this.render=s,this.renderInstances=l,this.renderMultiDraw=c}function $u(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",s=t.precision!==void 0?t.precision:"highp",l=o(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);let c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),d=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=p>0,R=a||e.has("OES_texture_float"),D=v&&R,C=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:o,precision:s,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:d,maxVaryings:h,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:R,floatVertexTextures:D,maxSamples:C}}function eh(n){let e=this,t=null,i=0,r=!1,o=!1,a=new ni,s=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){let m=f.length!==0||p||i!==0||r;return r=p,i=f.length,m},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,p){t=u(f,p,0)},this.setState=function(f,p,m){let g=f.clippingPlanes,_=f.clipIntersection,d=f.clipShadows,h=n.get(f);if(!r||g===null||g.length===0||o&&!d)o?u(null):c();else{let y=o?0:i,v=y*4,R=h.clippingState||null;l.value=R,R=u(g,p,v,m);for(let D=0;D!==v;++D)R[D]=t[D];h.clippingState=R,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,p,m,g){let _=f!==null?f.length:0,d=null;if(_!==0){if(d=l.value,g!==!0||d===null){let h=m+_*4,y=p.matrixWorldInverse;s.getNormalMatrix(y),(d===null||d.length<h)&&(d=new Float32Array(h));for(let v=0,R=m;v!==_;++v,R+=4)a.copy(f[v]).applyMatrix4(y,s),a.normal.toArray(d,R),d[R+3]=a.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,d}}var bn,An=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bn===void 0&&(bn=gn("canvas")),bn.width=e.width,bn.height=e.height;let i=bn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=bn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=gn("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let a=0;a<o.length;a++)o[a]=Ri(o[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ri(t[i]/255)*255):t[i]=Ri(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}};var Xf=0,wn=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=ui(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let a=0,s=r.length;a<s;a++)r[a].isDataTexture?o.push(ys(r[a].image)):o.push(ys(r[a]))}else o=ys(r);i.url=o}return t||(e.images[this.uuid]=i),i}};function ys(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?An.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var qf=0,Et=class n extends Ft{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Dt,r=Dt,o=xt,a=_i,s=vt,l=Bt,c=n.DEFAULT_ANISOTROPY,u=gt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=ui(),this.name="",this.source=new wn(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=a,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ui("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ti?et:gt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Po)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wn:e.x=e.x-Math.floor(e.x);break;case Dt:e.x=e.x<0?0:1;break;case Xn:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wn:e.y=e.y-Math.floor(e.y);break;case Dt:e.y=e.y<0?0:1;break;case Xn:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ui("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===et?ti:yr}set encoding(e){Ui("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ti?et:gt}};Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=Po;Et.DEFAULT_ANISOTROPY=1;var $r=class extends Ft{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);let r={width:e,height:t,depth:1};i.encoding!==void 0&&(Ui("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ti?et:gt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Et(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new wn(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}};var yt=class extends $r{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}};var Rn=class extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=It}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};var Tt=class extends Rn{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Yn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yn*2*Math.atan(Math.tan(br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,o,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(br*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,o=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;o+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}let s=this.filmOffset;s!==0&&(o+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Cn=-90,Ln=1,eo=class extends ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Tt(Cn,Ln,e,t);r.layers=this.layers,this.add(r);let o=new Tt(Cn,Ln,e,t);o.layers=this.layers,this.add(o);let a=new Tt(Cn,Ln,e,t);a.layers=this.layers,this.add(a);let s=new Tt(Cn,Ln,e,t);s.layers=this.layers,this.add(s);let l=new Tt(Cn,Ln,e,t);l.layers=this.layers,this.add(l);let c=new Tt(Cn,Ln,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,o,a,s,l]=t;for(let c of t)this.remove(c);if(e===It)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Vi)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[o,a,s,l,c,u]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,o),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,s),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,p,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}};var Pn=class extends Et{constructor(e,t,i,r,o,a,s,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:$t,super(e,t,i,r,o,a,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var to=class extends yt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Ui("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ti?et:gt),this.texture=new Pn(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ii(5,5,5),o=new ct({name:"CubemapFromEquirect",uniforms:Ei(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:it,blending:Xt});o.uniforms.tEquirect.value=t;let a=new St(r,o),s=t.minFilter;return t.minFilter===_i&&(t.minFilter=xt),new eo(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){let o=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(o)}};function th(n){let e=new WeakMap;function t(a,s){return s===Vn?a.mapping=$t:s===kn&&(a.mapping=li),a}function i(a){if(a&&a.isTexture){let s=a.mapping;if(s===Vn||s===kn)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new to(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){let s=a.target;s.removeEventListener("dispose",r);let l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}var ji=class extends Rn{constructor(e=-1,t=1,i=1,r=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=i-e,a=i+e,s=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,a=o+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(o,a,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Un=4,ih=[.125,.215,.35,.446,.526,.582],Ki=20,Ts=new ji,nh=new He,bs=null,As=0,ws=0,Zi=(1+Math.sqrt(5))/2,Dn=1/Zi,rh=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,Zi,Dn),new B(0,Zi,-Dn),new B(Dn,0,Zi),new B(-Dn,0,Zi),new B(Zi,Dn,0),new B(-Zi,Dn,0)],er=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){bs=this._renderer.getRenderTarget(),As=this._renderer.getActiveCubeFace(),ws=this._renderer.getActiveMipmapLevel(),this._setSize(256);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ah(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bs,As,ws),e.scissorTest=!1,io(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$t||e.mapping===li?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bs=this._renderer.getRenderTarget(),As=this._renderer.getActiveCubeFace(),ws=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:xt,minFilter:xt,generateMipmaps:!1,type:xi,format:vt,colorSpace:Mt,depthBuffer:!1},r=oh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oh(e,t,i);let{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yf(o)),this._blurMaterial=jf(o,e,t)}return r}_compileMaterial(e){let t=new St(this._lodPlanes[0],e);this._renderer.compile(t,Ts)}_sceneToCubeUV(e,t,i,r){let s=new Tt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(nh),u.toneMapping=qt,u.autoClear=!1;let m=new Sn({name:"PMREM.Background",side:it,depthWrite:!1,depthTest:!1}),g=new St(new Ii,m),_=!1,d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,_=!0):(m.color.copy(nh),_=!0);for(let h=0;h<6;h++){let y=h%3;y===0?(s.up.set(0,l[h],0),s.lookAt(c[h],0,0)):y===1?(s.up.set(0,0,l[h]),s.lookAt(0,c[h],0)):(s.up.set(0,l[h],0),s.lookAt(0,0,c[h]));let v=this._cubeSize;io(r,y*v,h>2?v:0,v,v),u.setRenderTarget(r),_&&u.render(g,s),u.render(e,s)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===$t||e.mapping===li;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ah()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sh());let o=r?this._cubemapMaterial:this._equirectMaterial,a=new St(this._lodPlanes[0],o),s=o.uniforms;s.envMap.value=e;let l=this._cubeSize;io(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ts)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=rh[(r-1)%rh.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,r,o){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",o),this._halfBlur(a,e,i,i,r,"longitudinal",o)}_halfBlur(e,t,i,r,o,a,s){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,f=new St(this._lodPlanes[r],c),p=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*Ki-1),_=o/g,d=isFinite(o)?1+Math.floor(u*_):Ki;d>Ki&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Ki}`);let h=[],y=0;for(let w=0;w<Ki;++w){let H=w/_,M=Math.exp(-H*H/2);h.push(M),w===0?y+=M:w<d&&(y+=2*M)}for(let w=0;w<h.length;w++)h[w]=h[w]/y;p.envMap.value=e.texture,p.samples.value=d,p.weights.value=h,p.latitudinal.value=a==="latitudinal",s&&(p.poleAxis.value=s);let{_lodMax:v}=this;p.dTheta.value=g,p.mipInt.value=v-i;let R=this._sizeLods[r],D=3*R*(r>v-Un?r-v+Un:0),C=4*(this._cubeSize-R);io(t,D,C,3*R,2*R),l.setRenderTarget(t),l.render(f,Ts)}};function Yf(n){let e=[],t=[],i=[],r=n,o=n-Un+1+ih.length;for(let a=0;a<o;a++){let s=Math.pow(2,r);t.push(s);let l=1/s;a>n-Un?l=ih[a-n+Un-1]:a===0&&(l=0),i.push(l);let c=1/(s-2),u=-c,f=1+c,p=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,_=3,d=2,h=1,y=new Float32Array(_*g*m),v=new Float32Array(d*g*m),R=new Float32Array(h*g*m);for(let C=0;C<m;C++){let w=C%3*2/3-1,H=C>2?0:-1,M=[w,H,0,w+2/3,H,0,w+2/3,H+1,0,w,H,0,w+2/3,H+1,0,w,H+1,0];y.set(M,_*g*C),v.set(p,d*g*C);let T=[C,C,C,C,C,C];R.set(T,h*g*C)}let D=new lt;D.setAttribute("position",new Ye(y,_)),D.setAttribute("uv",new Ye(v,d)),D.setAttribute("faceIndex",new Ye(R,h)),e.push(D),r>Un&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function oh(n,e,t){let i=new yt(n,e,t);return i.texture.mapping=wi,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function io(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function jf(n,e,t){let i=new Float32Array(Ki),r=new B(0,1,0);return new ct({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Rs(),fragmentShader:`

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
		`,blending:Xt,depthTest:!1,depthWrite:!1})}function sh(){return new ct({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rs(),fragmentShader:`

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
		`,blending:Xt,depthTest:!1,depthWrite:!1})}function ah(){return new ct({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xt,depthTest:!1,depthWrite:!1})}function Rs(){return`

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
	`}function lh(n){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){let l=s.mapping,c=l===Vn||l===kn,u=l===$t||l===li;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let f=e.get(s);return t===null&&(t=new er(n)),f=c?t.fromEquirectangular(s,f):t.fromCubemap(s,f),e.set(s,f),f.texture}else{if(e.has(s))return e.get(s).texture;{let f=s.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new er(n));let p=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,p),s.addEventListener("dispose",o),p.texture}else return null}}}return s}function r(s){let l=0,c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function o(s){let l=s.target;l.removeEventListener("dispose",o);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function ch(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function uh(n,e,t,i){let r={},o=new WeakMap;function a(f){let p=f.target;p.index!==null&&e.remove(p.index);for(let g in p.attributes)e.remove(p.attributes[g]);for(let g in p.morphAttributes){let _=p.morphAttributes[g];for(let d=0,h=_.length;d<h;d++)e.remove(_[d])}p.removeEventListener("dispose",a),delete r[p.id];let m=o.get(p);m&&(e.remove(m),o.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function s(f,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,t.memory.geometries++),p}function l(f){let p=f.attributes;for(let g in p)e.update(p[g],n.ARRAY_BUFFER);let m=f.morphAttributes;for(let g in m){let _=m[g];for(let d=0,h=_.length;d<h;d++)e.update(_[d],n.ARRAY_BUFFER)}}function c(f){let p=[],m=f.index,g=f.attributes.position,_=0;if(m!==null){let y=m.array;_=m.version;for(let v=0,R=y.length;v<R;v+=3){let D=y[v+0],C=y[v+1],w=y[v+2];p.push(D,C,C,w,w,D)}}else if(g!==void 0){let y=g.array;_=g.version;for(let v=0,R=y.length/3-1;v<R;v+=3){let D=v+0,C=v+1,w=v+2;p.push(D,C,C,w,w,D)}}else return;let d=new(Br(p)?dn:fn)(p,1);d.version=_;let h=o.get(f);h&&e.remove(h),o.set(f,d)}function u(f){let p=o.get(f);if(p){let m=f.index;m!==null&&p.version<m.version&&c(f)}else c(f);return o.get(f)}return{get:s,update:l,getWireframeAttribute:u}}function hh(n,e,t,i){let r=i.isWebGL2,o;function a(m){o=m}let s,l;function c(m){s=m.type,l=m.bytesPerElement}function u(m,g){n.drawElements(o,g,s,m*l),t.update(g,o,1)}function f(m,g,_){if(_===0)return;let d,h;if(r)d=n,h="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[h](o,g,s,m*l,_),t.update(g,o,_)}function p(m,g,_){if(_===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let h=0;h<_;h++)this.render(m[h]/l,g[h]);else{d.multiDrawElementsWEBGL(o,g,0,s,m,0,_);let h=0;for(let y=0;y<_;y++)h+=g[y];t.update(h,o,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=p}function fh(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,a,s){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=s*(o/3);break;case n.LINES:t.lines+=s*(o/2);break;case n.LINE_STRIP:t.lines+=s*(o-1);break;case n.LINE_LOOP:t.lines+=s*o;break;case n.POINTS:t.points+=s*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}var In=class extends Et{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=st,this.minFilter=st,this.wrapR=Dt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};function Zf(n,e){return n[0]-e[0]}function Kf(n,e){return Math.abs(e[1])-Math.abs(n[1])}function dh(n,e,t){let i={},r=new Float32Array(8),o=new WeakMap,a=new nt,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,f){let p=c.morphTargetInfluences;if(e.isWebGL2===!0){let m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0,_=o.get(u);if(_===void 0||_.count!==g){let A=function(){Y.dispose(),o.delete(u),u.removeEventListener("dispose",A)};_!==void 0&&_.texture.dispose();let y=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,R=u.morphAttributes.color!==void 0,D=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],w=u.morphAttributes.color||[],H=0;y===!0&&(H=1),v===!0&&(H=2),R===!0&&(H=3);let M=u.attributes.position.count*H,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let U=new Float32Array(M*T*4*g),Y=new In(U,M,T,g);Y.type=zt,Y.needsUpdate=!0;let W=H*4;for(let L=0;L<g;L++){let I=D[L],K=C[L],j=w[L],q=M*T*4*L;for(let ee=0;ee<I.count;ee++){let X=ee*W;y===!0&&(a.fromBufferAttribute(I,ee),U[q+X+0]=a.x,U[q+X+1]=a.y,U[q+X+2]=a.z,U[q+X+3]=0),v===!0&&(a.fromBufferAttribute(K,ee),U[q+X+4]=a.x,U[q+X+5]=a.y,U[q+X+6]=a.z,U[q+X+7]=0),R===!0&&(a.fromBufferAttribute(j,ee),U[q+X+8]=a.x,U[q+X+9]=a.y,U[q+X+10]=a.z,U[q+X+11]=j.itemSize===4?a.w:1)}}_={count:g,texture:Y,size:new We(M,T)},o.set(u,_),u.addEventListener("dispose",A)}let d=0;for(let y=0;y<p.length;y++)d+=p[y];let h=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(n,"morphTargetBaseInfluence",h),f.getUniforms().setValue(n,"morphTargetInfluences",p),f.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{let m=p===void 0?0:p.length,g=i[u.id];if(g===void 0||g.length!==m){g=[];for(let v=0;v<m;v++)g[v]=[v,0];i[u.id]=g}for(let v=0;v<m;v++){let R=g[v];R[0]=v,R[1]=p[v]}g.sort(Kf);for(let v=0;v<8;v++)v<m&&g[v][1]?(s[v][0]=g[v][0],s[v][1]=g[v][1]):(s[v][0]=Number.MAX_SAFE_INTEGER,s[v][1]=0);s.sort(Zf);let _=u.morphAttributes.position,d=u.morphAttributes.normal,h=0;for(let v=0;v<8;v++){let R=s[v],D=R[0],C=R[1];D!==Number.MAX_SAFE_INTEGER&&C?(_&&u.getAttribute("morphTarget"+v)!==_[D]&&u.setAttribute("morphTarget"+v,_[D]),d&&u.getAttribute("morphNormal"+v)!==d[D]&&u.setAttribute("morphNormal"+v,d[D]),r[v]=C,h+=C):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),d&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),r[v]=0)}let y=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",y),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function ph(n,e,t,i){let r=new WeakMap;function o(l){let c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return f}function a(){r=new WeakMap}function s(l){let c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:a}}var no=class extends Et{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=st,this.minFilter=st,this.wrapR=Dt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fn=class extends Et{constructor(e,t,i,r,o,a,s,l,c,u){if(u=u!==void 0?u:ei,u!==ei&&u!==ci)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ei&&(i=Gt),i===void 0&&u===ci&&(i=Yt),super(null,r,o,a,s,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:st,this.minFilter=l!==void 0?l:st,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var Sh=new Et,Eh=new Fn(1,1);Eh.compareFunction=Tr;var yh=new In,Th=new no,bh=new Pn,mh=[],gh=[],_h=new Float32Array(16),xh=new Float32Array(9),vh=new Float32Array(4);function Nn(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,o=mh[r];if(o===void 0&&(o=new Float32Array(r),mh[r]=o),e!==0){i.toArray(o,0);for(let a=1,s=0;a!==e;++a)s+=t,n[a].toArray(o,s)}return o}function ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function dt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ro(n,e){let t=gh[e];t===void 0&&(t=new Int32Array(e),gh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Jf(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Qf(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;n.uniform2fv(this.addr,e),dt(t,e)}}function $f(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;n.uniform3fv(this.addr,e),dt(t,e)}}function ed(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;n.uniform4fv(this.addr,e),dt(t,e)}}function td(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ft(t,i))return;vh.set(i),n.uniformMatrix2fv(this.addr,!1,vh),dt(t,i)}}function id(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ft(t,i))return;xh.set(i),n.uniformMatrix3fv(this.addr,!1,xh),dt(t,i)}}function nd(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ft(t,i))return;_h.set(i),n.uniformMatrix4fv(this.addr,!1,_h),dt(t,i)}}function rd(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function od(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;n.uniform2iv(this.addr,e),dt(t,e)}}function sd(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;n.uniform3iv(this.addr,e),dt(t,e)}}function ad(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;n.uniform4iv(this.addr,e),dt(t,e)}}function ld(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function cd(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;n.uniform2uiv(this.addr,e),dt(t,e)}}function ud(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;n.uniform3uiv(this.addr,e),dt(t,e)}}function hd(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;n.uniform4uiv(this.addr,e),dt(t,e)}}function fd(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let o=this.type===n.SAMPLER_2D_SHADOW?Eh:Sh;t.setTexture2D(e||o,r)}function dd(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Th,r)}function pd(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||bh,r)}function md(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||yh,r)}function gd(n){switch(n){case 5126:return Jf;case 35664:return Qf;case 35665:return $f;case 35666:return ed;case 35674:return td;case 35675:return id;case 35676:return nd;case 5124:case 35670:return rd;case 35667:case 35671:return od;case 35668:case 35672:return sd;case 35669:case 35673:return ad;case 5125:return ld;case 36294:return cd;case 36295:return ud;case 36296:return hd;case 35678:case 36198:case 36298:case 36306:case 35682:return fd;case 35679:case 36299:case 36307:return dd;case 35680:case 36300:case 36308:case 36293:return pd;case 36289:case 36303:case 36311:case 36292:return md}}function _d(n,e){n.uniform1fv(this.addr,e)}function xd(n,e){let t=Nn(e,this.size,2);n.uniform2fv(this.addr,t)}function vd(n,e){let t=Nn(e,this.size,3);n.uniform3fv(this.addr,t)}function Md(n,e){let t=Nn(e,this.size,4);n.uniform4fv(this.addr,t)}function Sd(n,e){let t=Nn(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ed(n,e){let t=Nn(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function yd(n,e){let t=Nn(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Td(n,e){n.uniform1iv(this.addr,e)}function bd(n,e){n.uniform2iv(this.addr,e)}function Ad(n,e){n.uniform3iv(this.addr,e)}function wd(n,e){n.uniform4iv(this.addr,e)}function Rd(n,e){n.uniform1uiv(this.addr,e)}function Cd(n,e){n.uniform2uiv(this.addr,e)}function Ld(n,e){n.uniform3uiv(this.addr,e)}function Pd(n,e){n.uniform4uiv(this.addr,e)}function Dd(n,e,t){let i=this.cache,r=e.length,o=ro(t,r);ft(i,o)||(n.uniform1iv(this.addr,o),dt(i,o));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Sh,o[a])}function Ud(n,e,t){let i=this.cache,r=e.length,o=ro(t,r);ft(i,o)||(n.uniform1iv(this.addr,o),dt(i,o));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Th,o[a])}function Id(n,e,t){let i=this.cache,r=e.length,o=ro(t,r);ft(i,o)||(n.uniform1iv(this.addr,o),dt(i,o));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||bh,o[a])}function Fd(n,e,t){let i=this.cache,r=e.length,o=ro(t,r);ft(i,o)||(n.uniform1iv(this.addr,o),dt(i,o));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||yh,o[a])}function Nd(n){switch(n){case 5126:return _d;case 35664:return xd;case 35665:return vd;case 35666:return Md;case 35674:return Sd;case 35675:return Ed;case 35676:return yd;case 5124:case 35670:return Td;case 35667:case 35671:return bd;case 35668:case 35672:return Ad;case 35669:case 35673:return wd;case 5125:return Rd;case 36294:return Cd;case 36295:return Ld;case 36296:return Pd;case 35678:case 36198:case 36298:case 36306:case 35682:return Dd;case 35679:case 36299:case 36307:return Ud;case 35680:case 36300:case 36308:case 36293:return Id;case 36289:case 36303:case 36311:case 36292:return Fd}}var Ls=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=gd(t.type)}},Ps=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Nd(t.type)}},Ds=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let o=0,a=r.length;o!==a;++o){let s=r[o];s.setValue(e,t[s.id],i)}}},Cs=/(\w+)(\])?(\[|\.)?/g;function Mh(n,e){n.seq.push(e),n.map[e.id]=e}function Od(n,e,t){let i=n.name,r=i.length;for(Cs.lastIndex=0;;){let o=Cs.exec(i),a=Cs.lastIndex,s=o[1],l=o[2]==="]",c=o[3];if(l&&(s=s|0),c===void 0||c==="["&&a+2===r){Mh(t,c===void 0?new Ls(s,n,e):new Ps(s,n,e));break}else{let f=t.map[s];f===void 0&&(f=new Ds(s),Mh(t,f)),t=f}}}var Ni=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=e.getActiveUniform(t,r),a=e.getUniformLocation(t,o.name);Od(o,a,this)}}setValue(e,t,i,r){let o=this.map[t];o!==void 0&&o.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let o=0,a=t.length;o!==a;++o){let s=t[o],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,o=e.length;r!==o;++r){let a=e[r];a.id in t&&i.push(a)}return i}};function Us(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Bd=37297,Gd=0;function zd(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let a=r;a<o;a++){let s=a+1;i.push(`${s===e?">":" "} ${s}: ${t[a]}`)}return i.join(`
`)}function Hd(n){let e=qe.getPrimaries(qe.workingColorSpace),t=qe.getPrimaries(n),i;switch(e===t?i="":e===on&&t===rn?i="LinearDisplayP3ToLinearSRGB":e===rn&&t===on&&(i="LinearSRGBToLinearDisplayP3"),n){case Mt:case zi:return[i,"LinearTransferOETF"];case et:case tn:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Ah(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+zd(n.getShaderSource(e),a)}else return r}function Vd(n,e){let t=Hd(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function kd(n,e){let t;switch(e){case Sa:t="Linear";break;case Ea:t="Reinhard";break;case ya:t="OptimizedCineon";break;case Ta:t="ACESFilmic";break;case Aa:t="AgX";break;case ba:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Wd(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(On).join(`
`)}function Xd(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(On).join(`
`)}function qd(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Yd(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let o=n.getActiveAttrib(e,r),a=o.name,s=1;o.type===n.FLOAT_MAT2&&(s=2),o.type===n.FLOAT_MAT3&&(s=3),o.type===n.FLOAT_MAT4&&(s=4),t[a]={type:o.type,location:n.getAttribLocation(e,a),locationSize:s}}return t}function On(n){return n!==""}function wh(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var jd=/^[ \t]*#include +<([\w\d./]+)>/gm;function Is(n){return n.replace(jd,Kd)}var Zd=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Kd(n,e){let t=Ge[e];if(t===void 0){let i=Zd.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Is(t)}var Jd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ch(n){return n.replace(Jd,Qd)}function Qd(n,e,t,i){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Lh(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $d(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===lr?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Zs?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Qt&&(e="SHADOWMAP_TYPE_VSM"),e}function ep(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case $t:case li:e="ENVMAP_TYPE_CUBE";break;case wi:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tp(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case li:e="ENVMAP_MODE_REFRACTION";break}return e}function ip(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case cr:e="ENVMAP_BLENDING_MULTIPLY";break;case va:e="ENVMAP_BLENDING_MIX";break;case Ma:e="ENVMAP_BLENDING_ADD";break}return e}function np(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Ph(n,e,t,i){let r=n.getContext(),o=t.defines,a=t.vertexShader,s=t.fragmentShader,l=$d(t),c=ep(t),u=tp(t),f=ip(t),p=np(t),m=t.isWebGL2?"":Wd(t),g=Xd(t),_=qd(o),d=r.createProgram(),h,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(On).join(`
`),h.length>0&&(h+=`
`),y=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(On).join(`
`),y.length>0&&(y+=`
`)):(h=[Lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(On).join(`
`),y=[m,Lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qt?"#define TONE_MAPPING":"",t.toneMapping!==qt?Ge.tonemapping_pars_fragment:"",t.toneMapping!==qt?kd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Vd("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(On).join(`
`)),a=Is(a),a=wh(a,t),a=Rh(a,t),s=Is(s),s=wh(s,t),s=Rh(s,t),a=Ch(a),s=Ch(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,h=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ss?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ss?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let R=v+h+a,D=v+y+s,C=Us(r,r.VERTEX_SHADER,R),w=Us(r,r.FRAGMENT_SHADER,D);r.attachShader(d,C),r.attachShader(d,w),t.index0AttributeName!==void 0?r.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(d,0,"position"),r.linkProgram(d);function H(Y){if(n.debug.checkShaderErrors){let W=r.getProgramInfoLog(d).trim(),A=r.getShaderInfoLog(C).trim(),L=r.getShaderInfoLog(w).trim(),I=!0,K=!0;if(r.getProgramParameter(d,r.LINK_STATUS)===!1)if(I=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,d,C,w);else{let j=Ah(r,C,"vertex"),q=Ah(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(d,r.VALIDATE_STATUS)+`

Program Info Log: `+W+`
`+j+`
`+q)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(A===""||L==="")&&(K=!1);K&&(Y.diagnostics={runnable:I,programLog:W,vertexShader:{log:A,prefix:h},fragmentShader:{log:L,prefix:y}})}r.deleteShader(C),r.deleteShader(w),M=new Ni(r,d),T=Yd(r,d)}let M;this.getUniforms=function(){return M===void 0&&H(this),M};let T;this.getAttributes=function(){return T===void 0&&H(this),T};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(d,Bd)),U},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(d),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Gd++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=C,this.fragmentShader=w,this}var rp=0,oo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Fs(e),t.set(e,i)),i}},Fs=class{constructor(e){this.id=rp++,this.code=e,this.usedTimes=0}};function Dh(n,e,t,i,r,o,a){let s=new pn,l=new oo,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,p=r.vertexTextures,m=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function d(M,T,U,Y,W){let A=Y.fog,L=W.geometry,I=M.isMeshStandardMaterial?Y.environment:null,K=(M.isMeshStandardMaterial?t:e).get(M.envMap||I),j=K&&K.mapping===wi?K.image.height:null,q=g[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));let ee=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,X=ee!==void 0?ee.length:0,Q=0;L.morphAttributes.position!==void 0&&(Q=1),L.morphAttributes.normal!==void 0&&(Q=2),L.morphAttributes.color!==void 0&&(Q=3);let G,Z,re,ue;if(q){let Ct=Jt[q];G=Ct.vertexShader,Z=Ct.fragmentShader}else G=M.vertexShader,Z=M.fragmentShader,l.update(M),re=l.getVertexShaderID(M),ue=l.getFragmentShaderID(M);let le=n.getRenderTarget(),Ee=W.isInstancedMesh===!0,he=W.isBatchedMesh===!0,ge=!!M.map,xe=!!M.matcap,b=!!K,fe=!!M.aoMap,J=!!M.lightMap,oe=!!M.bumpMap,ae=!!M.normalMap,Te=!!M.displacementMap,me=!!M.emissiveMap,S=!!M.metalnessMap,x=!!M.roughnessMap,F=M.anisotropy>0,te=M.clearcoat>0,$=M.iridescence>0,N=M.sheen>0,pe=M.transmission>0,se=F&&!!M.anisotropyMap,ve=te&&!!M.clearcoatMap,we=te&&!!M.clearcoatNormalMap,Le=te&&!!M.clearcoatRoughnessMap,ne=$&&!!M.iridescenceMap,Re=$&&!!M.iridescenceThicknessMap,Ue=N&&!!M.sheenColorMap,be=N&&!!M.sheenRoughnessMap,ye=!!M.specularMap,Me=!!M.specularColorMap,Ce=!!M.specularIntensityMap,Ve=pe&&!!M.transmissionMap,je=pe&&!!M.thicknessMap,Pe=!!M.gradientMap,ie=!!M.alphaMap,P=M.alphaTest>0,_e=!!M.alphaHash,ce=!!M.extensions,De=!!L.attributes.uv1,Ie=!!L.attributes.uv2,Ke=!!L.attributes.uv3,Je=qt;return M.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Je=n.toneMapping),{isWebGL2:u,shaderID:q,shaderType:M.type,shaderName:M.name,vertexShader:G,fragmentShader:Z,defines:M.defines,customVertexShaderID:re,customFragmentShaderID:ue,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:he,instancing:Ee,instancingColor:Ee&&W.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:le===null?n.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Mt,map:ge,matcap:xe,envMap:b,envMapMode:b&&K.mapping,envMapCubeUVHeight:j,aoMap:fe,lightMap:J,bumpMap:oe,normalMap:ae,displacementMap:p&&Te,emissiveMap:me,normalMapObjectSpace:ae&&M.normalMapType===Ga,normalMapTangentSpace:ae&&M.normalMapType===Ba,metalnessMap:S,roughnessMap:x,anisotropy:F,anisotropyMap:se,clearcoat:te,clearcoatMap:ve,clearcoatNormalMap:we,clearcoatRoughnessMap:Le,iridescence:$,iridescenceMap:ne,iridescenceThicknessMap:Re,sheen:N,sheenColorMap:Ue,sheenRoughnessMap:be,specularMap:ye,specularColorMap:Me,specularIntensityMap:Ce,transmission:pe,transmissionMap:Ve,thicknessMap:je,gradientMap:Pe,opaque:M.transparent===!1&&M.blending===mi,alphaMap:ie,alphaTest:P,alphaHash:_e,combine:M.combine,mapUv:ge&&_(M.map.channel),aoMapUv:fe&&_(M.aoMap.channel),lightMapUv:J&&_(M.lightMap.channel),bumpMapUv:oe&&_(M.bumpMap.channel),normalMapUv:ae&&_(M.normalMap.channel),displacementMapUv:Te&&_(M.displacementMap.channel),emissiveMapUv:me&&_(M.emissiveMap.channel),metalnessMapUv:S&&_(M.metalnessMap.channel),roughnessMapUv:x&&_(M.roughnessMap.channel),anisotropyMapUv:se&&_(M.anisotropyMap.channel),clearcoatMapUv:ve&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:we&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:be&&_(M.sheenRoughnessMap.channel),specularMapUv:ye&&_(M.specularMap.channel),specularColorMapUv:Me&&_(M.specularColorMap.channel),specularIntensityMapUv:Ce&&_(M.specularIntensityMap.channel),transmissionMapUv:Ve&&_(M.transmissionMap.channel),thicknessMapUv:je&&_(M.thicknessMap.channel),alphaMapUv:ie&&_(M.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ae||F),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUv1s:De,vertexUv2s:Ie,vertexUv3s:Ke,pointsUvs:W.isPoints===!0&&!!L.attributes.uv&&(ge||ie),fog:!!A,useFog:M.fog===!0,fogExp2:A&&A.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:W.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:Q,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:Je,useLegacyLights:n._useLegacyLights,decodeVideoTexture:ge&&M.map.isVideoTexture===!0&&qe.getTransfer(M.map.colorSpace)===Ze,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Pt,flipSided:M.side===it,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ce&&M.extensions.derivatives===!0,extensionFragDepth:ce&&M.extensions.fragDepth===!0,extensionDrawBuffers:ce&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ce&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ce&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function h(M){let T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(let U in M.defines)T.push(U),T.push(M.defines[U]);return M.isRawShaderMaterial===!1&&(y(T,M),v(T,M),T.push(n.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function y(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function v(M,T){s.disableAll(),T.isWebGL2&&s.enable(0),T.supportsVertexTextures&&s.enable(1),T.instancing&&s.enable(2),T.instancingColor&&s.enable(3),T.matcap&&s.enable(4),T.envMap&&s.enable(5),T.normalMapObjectSpace&&s.enable(6),T.normalMapTangentSpace&&s.enable(7),T.clearcoat&&s.enable(8),T.iridescence&&s.enable(9),T.alphaTest&&s.enable(10),T.vertexColors&&s.enable(11),T.vertexAlphas&&s.enable(12),T.vertexUv1s&&s.enable(13),T.vertexUv2s&&s.enable(14),T.vertexUv3s&&s.enable(15),T.vertexTangents&&s.enable(16),T.anisotropy&&s.enable(17),T.alphaHash&&s.enable(18),T.batching&&s.enable(19),M.push(s.mask),s.disableAll(),T.fog&&s.enable(0),T.useFog&&s.enable(1),T.flatShading&&s.enable(2),T.logarithmicDepthBuffer&&s.enable(3),T.skinning&&s.enable(4),T.morphTargets&&s.enable(5),T.morphNormals&&s.enable(6),T.morphColors&&s.enable(7),T.premultipliedAlpha&&s.enable(8),T.shadowMapEnabled&&s.enable(9),T.useLegacyLights&&s.enable(10),T.doubleSided&&s.enable(11),T.flipSided&&s.enable(12),T.useDepthPacking&&s.enable(13),T.dithering&&s.enable(14),T.transmission&&s.enable(15),T.sheen&&s.enable(16),T.opaque&&s.enable(17),T.pointsUvs&&s.enable(18),T.decodeVideoTexture&&s.enable(19),M.push(s.mask)}function R(M){let T=g[M.type],U;if(T){let Y=Jt[T];U=ll.clone(Y.uniforms)}else U=M.uniforms;return U}function D(M,T){let U;for(let Y=0,W=c.length;Y<W;Y++){let A=c[Y];if(A.cacheKey===T){U=A,++U.usedTimes;break}}return U===void 0&&(U=new Ph(n,T,M,o),c.push(U)),U}function C(M){if(--M.usedTimes===0){let T=c.indexOf(M);c[T]=c[c.length-1],c.pop(),M.destroy()}}function w(M){l.remove(M)}function H(){l.dispose()}return{getParameters:d,getProgramCacheKey:h,getUniforms:R,acquireProgram:D,releaseProgram:C,releaseShaderCache:w,programs:c,dispose:H}}function Uh(){let n=new WeakMap;function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function t(o){n.delete(o)}function i(o,a,s){n.get(o)[a]=s}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function op(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ih(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Fh(){let n=[],e=0,t=[],i=[],r=[];function o(){e=0,t.length=0,i.length=0,r.length=0}function a(f,p,m,g,_,d){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:p,material:m,groupOrder:g,renderOrder:f.renderOrder,z:_,group:d},n[e]=h):(h.id=f.id,h.object=f,h.geometry=p,h.material=m,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=_,h.group=d),e++,h}function s(f,p,m,g,_,d){let h=a(f,p,m,g,_,d);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):t.push(h)}function l(f,p,m,g,_,d){let h=a(f,p,m,g,_,d);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,p){t.length>1&&t.sort(f||op),i.length>1&&i.sort(p||Ih),r.length>1&&r.sort(p||Ih)}function u(){for(let f=e,p=n.length;f<p;f++){let m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:o,push:s,unshift:l,finish:u,sort:c}}function Nh(){let n=new WeakMap;function e(i,r){let o=n.get(i),a;return o===void 0?(a=new Fh,n.set(i,[a])):r>=o.length?(a=new Fh,o.push(a)):a=o[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function sp(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new He};break;case"SpotLight":t={position:new B,direction:new B,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function ap(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var lp=0;function cp(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Oh(n,e){let t=new sp,i=ap(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new B);let o=new B,a=new $e,s=new $e;function l(u,f){let p=0,m=0,g=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let _=0,d=0,h=0,y=0,v=0,R=0,D=0,C=0,w=0,H=0,M=0;u.sort(cp);let T=f===!0?Math.PI:1;for(let Y=0,W=u.length;Y<W;Y++){let A=u[Y],L=A.color,I=A.intensity,K=A.distance,j=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)p+=L.r*I*T,m+=L.g*I*T,g+=L.b*I*T;else if(A.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector(A.sh.coefficients[q],I);M++}else if(A.isDirectionalLight){let q=t.get(A);if(q.color.copy(A.color).multiplyScalar(A.intensity*T),A.castShadow){let ee=A.shadow,X=i.get(A);X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,r.directionalShadow[_]=X,r.directionalShadowMap[_]=j,r.directionalShadowMatrix[_]=A.shadow.matrix,R++}r.directional[_]=q,_++}else if(A.isSpotLight){let q=t.get(A);q.position.setFromMatrixPosition(A.matrixWorld),q.color.copy(L).multiplyScalar(I*T),q.distance=K,q.coneCos=Math.cos(A.angle),q.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),q.decay=A.decay,r.spot[h]=q;let ee=A.shadow;if(A.map&&(r.spotLightMap[w]=A.map,w++,ee.updateMatrices(A),A.castShadow&&H++),r.spotLightMatrix[h]=ee.matrix,A.castShadow){let X=i.get(A);X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,r.spotShadow[h]=X,r.spotShadowMap[h]=j,C++}h++}else if(A.isRectAreaLight){let q=t.get(A);q.color.copy(L).multiplyScalar(I),q.halfWidth.set(A.width*.5,0,0),q.halfHeight.set(0,A.height*.5,0),r.rectArea[y]=q,y++}else if(A.isPointLight){let q=t.get(A);if(q.color.copy(A.color).multiplyScalar(A.intensity*T),q.distance=A.distance,q.decay=A.decay,A.castShadow){let ee=A.shadow,X=i.get(A);X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,X.shadowCameraNear=ee.camera.near,X.shadowCameraFar=ee.camera.far,r.pointShadow[d]=X,r.pointShadowMap[d]=j,r.pointShadowMatrix[d]=A.shadow.matrix,D++}r.point[d]=q,d++}else if(A.isHemisphereLight){let q=t.get(A);q.skyColor.copy(A.color).multiplyScalar(I*T),q.groundColor.copy(A.groundColor).multiplyScalar(I*T),r.hemi[v]=q,v++}}y>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=de.LTC_FLOAT_1,r.rectAreaLTC2=de.LTC_FLOAT_2):(r.rectAreaLTC1=de.LTC_HALF_1,r.rectAreaLTC2=de.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=de.LTC_FLOAT_1,r.rectAreaLTC2=de.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=de.LTC_HALF_1,r.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=m,r.ambient[2]=g;let U=r.hash;(U.directionalLength!==_||U.pointLength!==d||U.spotLength!==h||U.rectAreaLength!==y||U.hemiLength!==v||U.numDirectionalShadows!==R||U.numPointShadows!==D||U.numSpotShadows!==C||U.numSpotMaps!==w||U.numLightProbes!==M)&&(r.directional.length=_,r.spot.length=h,r.rectArea.length=y,r.point.length=d,r.hemi.length=v,r.directionalShadow.length=R,r.directionalShadowMap.length=R,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=R,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=C+w-H,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=M,U.directionalLength=_,U.pointLength=d,U.spotLength=h,U.rectAreaLength=y,U.hemiLength=v,U.numDirectionalShadows=R,U.numPointShadows=D,U.numSpotShadows=C,U.numSpotMaps=w,U.numLightProbes=M,r.version=lp++)}function c(u,f){let p=0,m=0,g=0,_=0,d=0,h=f.matrixWorldInverse;for(let y=0,v=u.length;y<v;y++){let R=u[y];if(R.isDirectionalLight){let D=r.directional[p];D.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(h),p++}else if(R.isSpotLight){let D=r.spot[g];D.position.setFromMatrixPosition(R.matrixWorld),D.position.applyMatrix4(h),D.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(h),g++}else if(R.isRectAreaLight){let D=r.rectArea[_];D.position.setFromMatrixPosition(R.matrixWorld),D.position.applyMatrix4(h),s.identity(),a.copy(R.matrixWorld),a.premultiply(h),s.extractRotation(a),D.halfWidth.set(R.width*.5,0,0),D.halfHeight.set(0,R.height*.5,0),D.halfWidth.applyMatrix4(s),D.halfHeight.applyMatrix4(s),_++}else if(R.isPointLight){let D=r.point[m];D.position.setFromMatrixPosition(R.matrixWorld),D.position.applyMatrix4(h),m++}else if(R.isHemisphereLight){let D=r.hemi[d];D.direction.setFromMatrixPosition(R.matrixWorld),D.direction.transformDirection(h),d++}}}return{setup:l,setupView:c,state:r}}function Bh(n,e){let t=new Oh(n,e),i=[],r=[];function o(){i.length=0,r.length=0}function a(f){i.push(f)}function s(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:s}}function Gh(n,e){let t=new WeakMap;function i(o,a=0){let s=t.get(o),l;return s===void 0?(l=new Bh(n,e),t.set(o,[l])):a>=s.length?(l=new Bh(n,e),s.push(l)):l=s[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}var so=class extends Kt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Na,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};var ao=class extends Kt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var zh=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,Hh=`
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
`;function Vh(n,e,t){let i=new un,r=new We,o=new We,a=new nt,s=new so({depthPacking:Oa}),l=new ao,c={},u=t.maxTextureSize,f={[Ot]:it,[it]:Ot,[Pt]:Pt},p=new ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:zh,fragmentShader:Hh}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let g=new lt;g.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new St(g,p),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lr;let h=this.type;this.render=function(C,w,H){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||C.length===0)return;let M=n.getRenderTarget(),T=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending(Xt),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let W=h!==Qt&&this.type===Qt,A=h===Qt&&this.type!==Qt;for(let L=0,I=C.length;L<I;L++){let K=C[L],j=K.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);let q=j.getFrameExtents();if(r.multiply(q),o.copy(j.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/q.x),r.x=o.x*q.x,j.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/q.y),r.y=o.y*q.y,j.mapSize.y=o.y)),j.map===null||W===!0||A===!0){let X=this.type!==Qt?{minFilter:st,magFilter:st}:{};j.map!==null&&j.map.dispose(),j.map=new yt(r.x,r.y,X),j.map.texture.name=K.name+".shadowMap",j.camera.updateProjectionMatrix()}n.setRenderTarget(j.map),n.clear();let ee=j.getViewportCount();for(let X=0;X<ee;X++){let Q=j.getViewport(X);a.set(o.x*Q.x,o.y*Q.y,o.x*Q.z,o.y*Q.w),Y.viewport(a),j.updateMatrices(K,X),i=j.getFrustum(),R(w,H,j.camera,K,this.type)}j.isPointLightShadow!==!0&&this.type===Qt&&y(j,H),j.needsUpdate=!1}h=this.type,d.needsUpdate=!1,n.setRenderTarget(M,T,U)};function y(C,w){let H=e.update(_);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new yt(r.x,r.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(w,null,H,p,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(w,null,H,m,_,null)}function v(C,w,H,M){let T=null,U=H.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(U!==void 0)T=U;else if(T=H.isPointLight===!0?l:s,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let Y=T.uuid,W=w.uuid,A=c[Y];A===void 0&&(A={},c[Y]=A);let L=A[W];L===void 0&&(L=T.clone(),A[W]=L,w.addEventListener("dispose",D)),T=L}if(T.visible=w.visible,T.wireframe=w.wireframe,M===Qt?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:f[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,H.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let Y=n.properties.get(T);Y.light=H}return T}function R(C,w,H,M,T){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&T===Qt)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,C.matrixWorld);let W=e.update(C),A=C.material;if(Array.isArray(A)){let L=W.groups;for(let I=0,K=L.length;I<K;I++){let j=L[I],q=A[j.materialIndex];if(q&&q.visible){let ee=v(C,q,M,T);C.onBeforeShadow(n,C,w,H,W,ee,j),n.renderBufferDirect(H,null,W,ee,C,j),C.onAfterShadow(n,C,w,H,W,ee,j)}}}else if(A.visible){let L=v(C,A,M,T);C.onBeforeShadow(n,C,w,H,W,L,null),n.renderBufferDirect(H,null,W,L,C,null),C.onAfterShadow(n,C,w,H,W,L,null)}}let Y=C.children;for(let W=0,A=Y.length;W<A;W++)R(Y[W],w,H,M,T)}function D(C){C.target.removeEventListener("dispose",D);for(let H in c){let M=c[H],T=C.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}function kh(n,e,t){let i=t.isWebGL2;function r(){let P=!1,_e=new nt,ce=null,De=new nt(0,0,0,0);return{setMask:function(Ie){ce!==Ie&&!P&&(n.colorMask(Ie,Ie,Ie,Ie),ce=Ie)},setLocked:function(Ie){P=Ie},setClear:function(Ie,Ke,Je,pt,Ct){Ct===!0&&(Ie*=pt,Ke*=pt,Je*=pt),_e.set(Ie,Ke,Je,pt),De.equals(_e)===!1&&(n.clearColor(Ie,Ke,Je,pt),De.copy(_e))},reset:function(){P=!1,ce=null,De.set(-1,0,0,0)}}}function o(){let P=!1,_e=null,ce=null,De=null;return{setTest:function(Ie){Ie?he(n.DEPTH_TEST):ge(n.DEPTH_TEST)},setMask:function(Ie){_e!==Ie&&!P&&(n.depthMask(Ie),_e=Ie)},setFunc:function(Ie){if(ce!==Ie){switch(Ie){case fa:n.depthFunc(n.NEVER);break;case da:n.depthFunc(n.ALWAYS);break;case pa:n.depthFunc(n.LESS);break;case $i:n.depthFunc(n.LEQUAL);break;case ma:n.depthFunc(n.EQUAL);break;case ga:n.depthFunc(n.GEQUAL);break;case _a:n.depthFunc(n.GREATER);break;case xa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=Ie}},setLocked:function(Ie){P=Ie},setClear:function(Ie){De!==Ie&&(n.clearDepth(Ie),De=Ie)},reset:function(){P=!1,_e=null,ce=null,De=null}}}function a(){let P=!1,_e=null,ce=null,De=null,Ie=null,Ke=null,Je=null,pt=null,Ct=null;return{setTest:function(Qe){P||(Qe?he(n.STENCIL_TEST):ge(n.STENCIL_TEST))},setMask:function(Qe){_e!==Qe&&!P&&(n.stencilMask(Qe),_e=Qe)},setFunc:function(Qe,Lt,ai){(ce!==Qe||De!==Lt||Ie!==ai)&&(n.stencilFunc(Qe,Lt,ai),ce=Qe,De=Lt,Ie=ai)},setOp:function(Qe,Lt,ai){(Ke!==Qe||Je!==Lt||pt!==ai)&&(n.stencilOp(Qe,Lt,ai),Ke=Qe,Je=Lt,pt=ai)},setLocked:function(Qe){P=Qe},setClear:function(Qe){Ct!==Qe&&(n.clearStencil(Qe),Ct=Qe)},reset:function(){P=!1,_e=null,ce=null,De=null,Ie=null,Ke=null,Je=null,pt=null,Ct=null}}}let s=new r,l=new o,c=new a,u=new WeakMap,f=new WeakMap,p={},m={},g=new WeakMap,_=[],d=null,h=!1,y=null,v=null,R=null,D=null,C=null,w=null,H=null,M=new He(0,0,0),T=0,U=!1,Y=null,W=null,A=null,L=null,I=null,K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,q=0,ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(ee)[1]),j=q>=1):ee.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),j=q>=2);let X=null,Q={},G=n.getParameter(n.SCISSOR_BOX),Z=n.getParameter(n.VIEWPORT),re=new nt().fromArray(G),ue=new nt().fromArray(Z);function le(P,_e,ce,De){let Ie=new Uint8Array(4),Ke=n.createTexture();n.bindTexture(P,Ke),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Je=0;Je<ce;Je++)i&&(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)?n.texImage3D(_e,0,n.RGBA,1,1,De,0,n.RGBA,n.UNSIGNED_BYTE,Ie):n.texImage2D(_e+Je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ie);return Ke}let Ee={};Ee[n.TEXTURE_2D]=le(n.TEXTURE_2D,n.TEXTURE_2D,1),Ee[n.TEXTURE_CUBE_MAP]=le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ee[n.TEXTURE_2D_ARRAY]=le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ee[n.TEXTURE_3D]=le(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),he(n.DEPTH_TEST),l.setFunc($i),me(!1),S(bo),he(n.CULL_FACE),ae(Xt);function he(P){p[P]!==!0&&(n.enable(P),p[P]=!0)}function ge(P){p[P]!==!1&&(n.disable(P),p[P]=!1)}function xe(P,_e){return m[P]!==_e?(n.bindFramebuffer(P,_e),m[P]=_e,i&&(P===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=_e),P===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=_e)),!0):!1}function b(P,_e){let ce=_,De=!1;if(P)if(ce=g.get(_e),ce===void 0&&(ce=[],g.set(_e,ce)),P.isWebGLMultipleRenderTargets){let Ie=P.texture;if(ce.length!==Ie.length||ce[0]!==n.COLOR_ATTACHMENT0){for(let Ke=0,Je=Ie.length;Ke<Je;Ke++)ce[Ke]=n.COLOR_ATTACHMENT0+Ke;ce.length=Ie.length,De=!0}}else ce[0]!==n.COLOR_ATTACHMENT0&&(ce[0]=n.COLOR_ATTACHMENT0,De=!0);else ce[0]!==n.BACK&&(ce[0]=n.BACK,De=!0);De&&(t.isWebGL2?n.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function fe(P){return d!==P?(n.useProgram(P),d=P,!0):!1}let J={[gi]:n.FUNC_ADD,[Js]:n.FUNC_SUBTRACT,[Qs]:n.FUNC_REVERSE_SUBTRACT};if(i)J[Co]=n.MIN,J[Lo]=n.MAX;else{let P=e.get("EXT_blend_minmax");P!==null&&(J[Co]=P.MIN_EXT,J[Lo]=P.MAX_EXT)}let oe={[$s]:n.ZERO,[ea]:n.ONE,[ta]:n.SRC_COLOR,[zn]:n.SRC_ALPHA,[aa]:n.SRC_ALPHA_SATURATE,[oa]:n.DST_COLOR,[na]:n.DST_ALPHA,[ia]:n.ONE_MINUS_SRC_COLOR,[Hn]:n.ONE_MINUS_SRC_ALPHA,[sa]:n.ONE_MINUS_DST_COLOR,[ra]:n.ONE_MINUS_DST_ALPHA,[la]:n.CONSTANT_COLOR,[ca]:n.ONE_MINUS_CONSTANT_COLOR,[ua]:n.CONSTANT_ALPHA,[ha]:n.ONE_MINUS_CONSTANT_ALPHA};function ae(P,_e,ce,De,Ie,Ke,Je,pt,Ct,Qe){if(P===Xt){h===!0&&(ge(n.BLEND),h=!1);return}if(h===!1&&(he(n.BLEND),h=!0),P!==Ks){if(P!==y||Qe!==U){if((v!==gi||C!==gi)&&(n.blendEquation(n.FUNC_ADD),v=gi,C=gi),Qe)switch(P){case mi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ao:n.blendFunc(n.ONE,n.ONE);break;case wo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ro:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case mi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ao:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case wo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ro:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}R=null,D=null,w=null,H=null,M.set(0,0,0),T=0,y=P,U=Qe}return}Ie=Ie||_e,Ke=Ke||ce,Je=Je||De,(_e!==v||Ie!==C)&&(n.blendEquationSeparate(J[_e],J[Ie]),v=_e,C=Ie),(ce!==R||De!==D||Ke!==w||Je!==H)&&(n.blendFuncSeparate(oe[ce],oe[De],oe[Ke],oe[Je]),R=ce,D=De,w=Ke,H=Je),(pt.equals(M)===!1||Ct!==T)&&(n.blendColor(pt.r,pt.g,pt.b,Ct),M.copy(pt),T=Ct),y=P,U=!1}function Te(P,_e){P.side===Pt?ge(n.CULL_FACE):he(n.CULL_FACE);let ce=P.side===it;_e&&(ce=!ce),me(ce),P.blending===mi&&P.transparent===!1?ae(Xt):ae(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),s.setMask(P.colorWrite);let De=P.stencilWrite;c.setTest(De),De&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),F(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function me(P){Y!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),Y=P)}function S(P){P!==Ys?(he(n.CULL_FACE),P!==W&&(P===bo?n.cullFace(n.BACK):P===js?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ge(n.CULL_FACE),W=P}function x(P){P!==A&&(j&&n.lineWidth(P),A=P)}function F(P,_e,ce){P?(he(n.POLYGON_OFFSET_FILL),(L!==_e||I!==ce)&&(n.polygonOffset(_e,ce),L=_e,I=ce)):ge(n.POLYGON_OFFSET_FILL)}function te(P){P?he(n.SCISSOR_TEST):ge(n.SCISSOR_TEST)}function $(P){P===void 0&&(P=n.TEXTURE0+K-1),X!==P&&(n.activeTexture(P),X=P)}function N(P,_e,ce){ce===void 0&&(X===null?ce=n.TEXTURE0+K-1:ce=X);let De=Q[ce];De===void 0&&(De={type:void 0,texture:void 0},Q[ce]=De),(De.type!==P||De.texture!==_e)&&(X!==ce&&(n.activeTexture(ce),X=ce),n.bindTexture(P,_e||Ee[P]),De.type=P,De.texture=_e)}function pe(){let P=Q[X];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function se(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Le(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Re(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ue(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function be(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Me(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ce(P){re.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),re.copy(P))}function Ve(P){ue.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),ue.copy(P))}function je(P,_e){let ce=f.get(_e);ce===void 0&&(ce=new WeakMap,f.set(_e,ce));let De=ce.get(P);De===void 0&&(De=n.getUniformBlockIndex(_e,P.name),ce.set(P,De))}function Pe(P,_e){let De=f.get(_e).get(P);u.get(_e)!==De&&(n.uniformBlockBinding(_e,De,P.__bindingPointIndex),u.set(_e,De))}function ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},X=null,Q={},m={},g=new WeakMap,_=[],d=null,h=!1,y=null,v=null,R=null,D=null,C=null,w=null,H=null,M=new He(0,0,0),T=0,U=!1,Y=null,W=null,A=null,L=null,I=null,re.set(0,0,n.canvas.width,n.canvas.height),ue.set(0,0,n.canvas.width,n.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:he,disable:ge,bindFramebuffer:xe,drawBuffers:b,useProgram:fe,setBlending:ae,setMaterial:Te,setFlipSided:me,setCullFace:S,setLineWidth:x,setPolygonOffset:F,setScissorTest:te,activeTexture:$,bindTexture:N,unbindTexture:pe,compressedTexImage2D:se,compressedTexImage3D:ve,texImage2D:ye,texImage3D:Me,updateUBOMapping:je,uniformBlockBinding:Pe,texStorage2D:Ue,texStorage3D:be,texSubImage2D:we,texSubImage3D:Le,compressedTexSubImage2D:ne,compressedTexSubImage3D:Re,scissor:Ce,viewport:Ve,reset:ie}}function Wh(n,e,t,i,r,o,a){let s=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,x){return m?new OffscreenCanvas(S,x):gn("canvas")}function _(S,x,F,te){let $=1;if((S.width>te||S.height>te)&&($=te/Math.max(S.width,S.height)),$<1||x===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){let N=x?jn:Math.floor,pe=N($*S.width),se=N($*S.height);f===void 0&&(f=g(pe,se));let ve=F?g(pe,se):f;return ve.width=pe,ve.height=se,ve.getContext("2d").drawImage(S,0,0,pe,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+pe+"x"+se+")."),ve}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function d(S){return as(S.width)&&as(S.height)}function h(S){return s?!1:S.wrapS!==Dt||S.wrapT!==Dt||S.minFilter!==st&&S.minFilter!==xt}function y(S,x){return S.generateMipmaps&&x&&S.minFilter!==st&&S.minFilter!==xt}function v(S){n.generateMipmap(S)}function R(S,x,F,te,$=!1){if(s===!1)return x;if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let N=x;if(x===n.RED&&(F===n.FLOAT&&(N=n.R32F),F===n.HALF_FLOAT&&(N=n.R16F),F===n.UNSIGNED_BYTE&&(N=n.R8)),x===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(N=n.R8UI),F===n.UNSIGNED_SHORT&&(N=n.R16UI),F===n.UNSIGNED_INT&&(N=n.R32UI),F===n.BYTE&&(N=n.R8I),F===n.SHORT&&(N=n.R16I),F===n.INT&&(N=n.R32I)),x===n.RG&&(F===n.FLOAT&&(N=n.RG32F),F===n.HALF_FLOAT&&(N=n.RG16F),F===n.UNSIGNED_BYTE&&(N=n.RG8)),x===n.RGBA){let pe=$?nn:qe.getTransfer(te);F===n.FLOAT&&(N=n.RGBA32F),F===n.HALF_FLOAT&&(N=n.RGBA16F),F===n.UNSIGNED_BYTE&&(N=pe===Ze?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(N=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(N=n.RGB5_A1)}return(N===n.R16F||N===n.R32F||N===n.RG16F||N===n.RG32F||N===n.RGBA16F||N===n.RGBA32F)&&e.get("EXT_color_buffer_float"),N}function D(S,x,F){return y(S,F)===!0||S.isFramebufferTexture&&S.minFilter!==st&&S.minFilter!==xt?Math.log2(Math.max(x.width,x.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?x.mipmaps.length:1}function C(S){return S===st||S===Do||S===ur?n.NEAREST:n.LINEAR}function w(S){let x=S.target;x.removeEventListener("dispose",w),M(x),x.isVideoTexture&&u.delete(x)}function H(S){let x=S.target;x.removeEventListener("dispose",H),U(x)}function M(S){let x=i.get(S);if(x.__webglInit===void 0)return;let F=S.source,te=p.get(F);if(te){let $=te[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&T(S),Object.keys(te).length===0&&p.delete(F)}i.remove(S)}function T(S){let x=i.get(S);n.deleteTexture(x.__webglTexture);let F=S.source,te=p.get(F);delete te[x.__cacheKey],a.memory.textures--}function U(S){let x=S.texture,F=i.get(S),te=i.get(x);if(te.__webglTexture!==void 0&&(n.deleteTexture(te.__webglTexture),a.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(F.__webglFramebuffer[$]))for(let N=0;N<F.__webglFramebuffer[$].length;N++)n.deleteFramebuffer(F.__webglFramebuffer[$][N]);else n.deleteFramebuffer(F.__webglFramebuffer[$]);F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer[$])}else{if(Array.isArray(F.__webglFramebuffer))for(let $=0;$<F.__webglFramebuffer.length;$++)n.deleteFramebuffer(F.__webglFramebuffer[$]);else n.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&n.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let $=0;$<F.__webglColorRenderbuffer.length;$++)F.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(F.__webglColorRenderbuffer[$]);F.__webglDepthRenderbuffer&&n.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let $=0,N=x.length;$<N;$++){let pe=i.get(x[$]);pe.__webglTexture&&(n.deleteTexture(pe.__webglTexture),a.memory.textures--),i.remove(x[$])}i.remove(x),i.remove(S)}let Y=0;function W(){Y=0}function A(){let S=Y;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),Y+=1,S}function L(S){let x=[];return x.push(S.wrapS),x.push(S.wrapT),x.push(S.wrapR||0),x.push(S.magFilter),x.push(S.minFilter),x.push(S.anisotropy),x.push(S.internalFormat),x.push(S.format),x.push(S.type),x.push(S.generateMipmaps),x.push(S.premultiplyAlpha),x.push(S.flipY),x.push(S.unpackAlignment),x.push(S.colorSpace),x.join()}function I(S,x){let F=i.get(S);if(S.isVideoTexture&&Te(S),S.isRenderTargetTexture===!1&&S.version>0&&F.__version!==S.version){let te=S.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(F,S,x);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+x)}function K(S,x){let F=i.get(S);if(S.version>0&&F.__version!==S.version){re(F,S,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+x)}function j(S,x){let F=i.get(S);if(S.version>0&&F.__version!==S.version){re(F,S,x);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+x)}function q(S,x){let F=i.get(S);if(S.version>0&&F.__version!==S.version){ue(F,S,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+x)}let ee={[Wn]:n.REPEAT,[Dt]:n.CLAMP_TO_EDGE,[Xn]:n.MIRRORED_REPEAT},X={[st]:n.NEAREST,[Do]:n.NEAREST_MIPMAP_NEAREST,[ur]:n.NEAREST_MIPMAP_LINEAR,[xt]:n.LINEAR,[wa]:n.LINEAR_MIPMAP_NEAREST,[_i]:n.LINEAR_MIPMAP_LINEAR},Q={[za]:n.NEVER,[qa]:n.ALWAYS,[Ha]:n.LESS,[Tr]:n.LEQUAL,[Va]:n.EQUAL,[Xa]:n.GEQUAL,[ka]:n.GREATER,[Wa]:n.NOTEQUAL};function G(S,x,F){if(F?(n.texParameteri(S,n.TEXTURE_WRAP_S,ee[x.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,ee[x.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,ee[x.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,X[x.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,X[x.minFilter])):(n.texParameteri(S,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(S,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(x.wrapS!==Dt||x.wrapT!==Dt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(S,n.TEXTURE_MAG_FILTER,C(x.magFilter)),n.texParameteri(S,n.TEXTURE_MIN_FILTER,C(x.minFilter)),x.minFilter!==st&&x.minFilter!==xt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,Q[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let te=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===st||x.minFilter!==ur&&x.minFilter!==_i||x.type===zt&&e.has("OES_texture_float_linear")===!1||s===!1&&x.type===xi&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(S,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function Z(S,x){let F=!1;S.__webglInit===void 0&&(S.__webglInit=!0,x.addEventListener("dispose",w));let te=x.source,$=p.get(te);$===void 0&&($={},p.set(te,$));let N=L(x);if(N!==S.__cacheKey){$[N]===void 0&&($[N]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),$[N].usedTimes++;let pe=$[S.__cacheKey];pe!==void 0&&($[S.__cacheKey].usedTimes--,pe.usedTimes===0&&T(x)),S.__cacheKey=N,S.__webglTexture=$[N].texture}return F}function re(S,x,F){let te=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(te=n.TEXTURE_3D);let $=Z(S,x),N=x.source;t.bindTexture(te,S.__webglTexture,n.TEXTURE0+F);let pe=i.get(N);if(N.version!==pe.__version||$===!0){t.activeTexture(n.TEXTURE0+F);let se=qe.getPrimaries(qe.workingColorSpace),ve=x.colorSpace===gt?null:qe.getPrimaries(x.colorSpace),we=x.colorSpace===gt||se===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let Le=h(x)&&d(x.image)===!1,ne=_(x.image,Le,!1,r.maxTextureSize);ne=me(x,ne);let Re=d(ne)||s,Ue=o.convert(x.format,x.colorSpace),be=o.convert(x.type),ye=R(x.internalFormat,Ue,be,x.colorSpace,x.isVideoTexture);G(te,x,Re);let Me,Ce=x.mipmaps,Ve=s&&x.isVideoTexture!==!0&&ye!==Sr,je=pe.__version===void 0||$===!0,Pe=D(x,ne,Re);if(x.isDepthTexture)ye=n.DEPTH_COMPONENT,s?x.type===zt?ye=n.DEPTH_COMPONENT32F:x.type===Gt?ye=n.DEPTH_COMPONENT24:x.type===Yt?ye=n.DEPTH24_STENCIL8:ye=n.DEPTH_COMPONENT16:x.type===zt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===ei&&ye===n.DEPTH_COMPONENT&&x.type!==en&&x.type!==Gt&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Gt,be=o.convert(x.type)),x.format===ci&&ye===n.DEPTH_COMPONENT&&(ye=n.DEPTH_STENCIL,x.type!==Yt&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Yt,be=o.convert(x.type))),je&&(Ve?t.texStorage2D(n.TEXTURE_2D,1,ye,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,ye,ne.width,ne.height,0,Ue,be,null));else if(x.isDataTexture)if(Ce.length>0&&Re){Ve&&je&&t.texStorage2D(n.TEXTURE_2D,Pe,ye,Ce[0].width,Ce[0].height);for(let ie=0,P=Ce.length;ie<P;ie++)Me=Ce[ie],Ve?t.texSubImage2D(n.TEXTURE_2D,ie,0,0,Me.width,Me.height,Ue,be,Me.data):t.texImage2D(n.TEXTURE_2D,ie,ye,Me.width,Me.height,0,Ue,be,Me.data);x.generateMipmaps=!1}else Ve?(je&&t.texStorage2D(n.TEXTURE_2D,Pe,ye,ne.width,ne.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne.width,ne.height,Ue,be,ne.data)):t.texImage2D(n.TEXTURE_2D,0,ye,ne.width,ne.height,0,Ue,be,ne.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ve&&je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,ye,Ce[0].width,Ce[0].height,ne.depth);for(let ie=0,P=Ce.length;ie<P;ie++)Me=Ce[ie],x.format!==vt?Ue!==null?Ve?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,Me.width,Me.height,ne.depth,Ue,Me.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,ye,Me.width,Me.height,ne.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,Me.width,Me.height,ne.depth,Ue,be,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,ye,Me.width,Me.height,ne.depth,0,Ue,be,Me.data)}else{Ve&&je&&t.texStorage2D(n.TEXTURE_2D,Pe,ye,Ce[0].width,Ce[0].height);for(let ie=0,P=Ce.length;ie<P;ie++)Me=Ce[ie],x.format!==vt?Ue!==null?Ve?t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,Me.width,Me.height,Ue,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,ye,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage2D(n.TEXTURE_2D,ie,0,0,Me.width,Me.height,Ue,be,Me.data):t.texImage2D(n.TEXTURE_2D,ie,ye,Me.width,Me.height,0,Ue,be,Me.data)}else if(x.isDataArrayTexture)Ve?(je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,ye,ne.width,ne.height,ne.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,Ue,be,ne.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,ne.width,ne.height,ne.depth,0,Ue,be,ne.data);else if(x.isData3DTexture)Ve?(je&&t.texStorage3D(n.TEXTURE_3D,Pe,ye,ne.width,ne.height,ne.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,Ue,be,ne.data)):t.texImage3D(n.TEXTURE_3D,0,ye,ne.width,ne.height,ne.depth,0,Ue,be,ne.data);else if(x.isFramebufferTexture){if(je)if(Ve)t.texStorage2D(n.TEXTURE_2D,Pe,ye,ne.width,ne.height);else{let ie=ne.width,P=ne.height;for(let _e=0;_e<Pe;_e++)t.texImage2D(n.TEXTURE_2D,_e,ye,ie,P,0,Ue,be,null),ie>>=1,P>>=1}}else if(Ce.length>0&&Re){Ve&&je&&t.texStorage2D(n.TEXTURE_2D,Pe,ye,Ce[0].width,Ce[0].height);for(let ie=0,P=Ce.length;ie<P;ie++)Me=Ce[ie],Ve?t.texSubImage2D(n.TEXTURE_2D,ie,0,0,Ue,be,Me):t.texImage2D(n.TEXTURE_2D,ie,ye,Ue,be,Me);x.generateMipmaps=!1}else Ve?(je&&t.texStorage2D(n.TEXTURE_2D,Pe,ye,ne.width,ne.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ue,be,ne)):t.texImage2D(n.TEXTURE_2D,0,ye,Ue,be,ne);y(x,Re)&&v(te),pe.__version=N.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function ue(S,x,F){if(x.image.length!==6)return;let te=Z(S,x),$=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+F);let N=i.get($);if($.version!==N.__version||te===!0){t.activeTexture(n.TEXTURE0+F);let pe=qe.getPrimaries(qe.workingColorSpace),se=x.colorSpace===gt?null:qe.getPrimaries(x.colorSpace),ve=x.colorSpace===gt||pe===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let we=x.isCompressedTexture||x.image[0].isCompressedTexture,Le=x.image[0]&&x.image[0].isDataTexture,ne=[];for(let ie=0;ie<6;ie++)!we&&!Le?ne[ie]=_(x.image[ie],!1,!0,r.maxCubemapSize):ne[ie]=Le?x.image[ie].image:x.image[ie],ne[ie]=me(x,ne[ie]);let Re=ne[0],Ue=d(Re)||s,be=o.convert(x.format,x.colorSpace),ye=o.convert(x.type),Me=R(x.internalFormat,be,ye,x.colorSpace),Ce=s&&x.isVideoTexture!==!0,Ve=N.__version===void 0||te===!0,je=D(x,Re,Ue);G(n.TEXTURE_CUBE_MAP,x,Ue);let Pe;if(we){Ce&&Ve&&t.texStorage2D(n.TEXTURE_CUBE_MAP,je,Me,Re.width,Re.height);for(let ie=0;ie<6;ie++){Pe=ne[ie].mipmaps;for(let P=0;P<Pe.length;P++){let _e=Pe[P];x.format!==vt?be!==null?Ce?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,P,0,0,_e.width,_e.height,be,_e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,P,Me,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,P,0,0,_e.width,_e.height,be,ye,_e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,P,Me,_e.width,_e.height,0,be,ye,_e.data)}}}else{Pe=x.mipmaps,Ce&&Ve&&(Pe.length>0&&je++,t.texStorage2D(n.TEXTURE_CUBE_MAP,je,Me,ne[0].width,ne[0].height));for(let ie=0;ie<6;ie++)if(Le){Ce?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ne[ie].width,ne[ie].height,be,ye,ne[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Me,ne[ie].width,ne[ie].height,0,be,ye,ne[ie].data);for(let P=0;P<Pe.length;P++){let ce=Pe[P].image[ie].image;Ce?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,P+1,0,0,ce.width,ce.height,be,ye,ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,P+1,Me,ce.width,ce.height,0,be,ye,ce.data)}}else{Ce?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,be,ye,ne[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Me,be,ye,ne[ie]);for(let P=0;P<Pe.length;P++){let _e=Pe[P];Ce?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,P+1,0,0,be,ye,_e.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,P+1,Me,be,ye,_e.image[ie])}}}y(x,Ue)&&v(n.TEXTURE_CUBE_MAP),N.__version=$.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function le(S,x,F,te,$,N){let pe=o.convert(F.format,F.colorSpace),se=o.convert(F.type),ve=R(F.internalFormat,pe,se,F.colorSpace);if(!i.get(x).__hasExternalTextures){let Le=Math.max(1,x.width>>N),ne=Math.max(1,x.height>>N);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,N,ve,Le,ne,x.depth,0,pe,se,null):t.texImage2D($,N,ve,Le,ne,0,pe,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),ae(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,$,i.get(F).__webglTexture,0,oe(x)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,$,i.get(F).__webglTexture,N),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ee(S,x,F){if(n.bindRenderbuffer(n.RENDERBUFFER,S),x.depthBuffer&&!x.stencilBuffer){let te=s===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(F||ae(x)){let $=x.depthTexture;$&&$.isDepthTexture&&($.type===zt?te=n.DEPTH_COMPONENT32F:$.type===Gt&&(te=n.DEPTH_COMPONENT24));let N=oe(x);ae(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,N,te,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,N,te,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,te,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,S)}else if(x.depthBuffer&&x.stencilBuffer){let te=oe(x);F&&ae(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,te,n.DEPTH24_STENCIL8,x.width,x.height):ae(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,S)}else{let te=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let $=0;$<te.length;$++){let N=te[$],pe=o.convert(N.format,N.colorSpace),se=o.convert(N.type),ve=R(N.internalFormat,pe,se,N.colorSpace),we=oe(x);F&&ae(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,we,ve,x.width,x.height):ae(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we,ve,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ve,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function he(S,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),I(x.depthTexture,0);let te=i.get(x.depthTexture).__webglTexture,$=oe(x);if(x.depthTexture.format===ei)ae(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(x.depthTexture.format===ci)ae(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function ge(S){let x=i.get(S),F=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");he(x.__webglFramebuffer,S)}else if(F){x.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[te]),x.__webglDepthbuffer[te]=n.createRenderbuffer(),Ee(x.__webglDepthbuffer[te],S,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),Ee(x.__webglDepthbuffer,S,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function xe(S,x,F){let te=i.get(S);x!==void 0&&le(te.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&ge(S)}function b(S){let x=S.texture,F=i.get(S),te=i.get(x);S.addEventListener("dispose",H),S.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=x.version,a.memory.textures++);let $=S.isWebGLCubeRenderTarget===!0,N=S.isWebGLMultipleRenderTargets===!0,pe=d(S)||s;if($){F.__webglFramebuffer=[];for(let se=0;se<6;se++)if(s&&x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[se]=[];for(let ve=0;ve<x.mipmaps.length;ve++)F.__webglFramebuffer[se][ve]=n.createFramebuffer()}else F.__webglFramebuffer[se]=n.createFramebuffer()}else{if(s&&x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let se=0;se<x.mipmaps.length;se++)F.__webglFramebuffer[se]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(N)if(r.drawBuffers){let se=S.texture;for(let ve=0,we=se.length;ve<we;ve++){let Le=i.get(se[ve]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&S.samples>0&&ae(S)===!1){let se=N?x:[x];F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ve=0;ve<se.length;ve++){let we=se[ve];F.__webglColorRenderbuffer[ve]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ve]);let Le=o.convert(we.format,we.colorSpace),ne=o.convert(we.type),Re=R(we.internalFormat,Le,ne,we.colorSpace,S.isXRRenderTarget===!0),Ue=oe(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,Re,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,F.__webglColorRenderbuffer[ve])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Ee(F.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),G(n.TEXTURE_CUBE_MAP,x,pe);for(let se=0;se<6;se++)if(s&&x.mipmaps&&x.mipmaps.length>0)for(let ve=0;ve<x.mipmaps.length;ve++)le(F.__webglFramebuffer[se][ve],S,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,ve);else le(F.__webglFramebuffer[se],S,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);y(x,pe)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(N){let se=S.texture;for(let ve=0,we=se.length;ve<we;ve++){let Le=se[ve],ne=i.get(Le);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture),G(n.TEXTURE_2D,Le,pe),le(F.__webglFramebuffer,S,Le,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,0),y(Le,pe)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(s?se=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(se,te.__webglTexture),G(se,x,pe),s&&x.mipmaps&&x.mipmaps.length>0)for(let ve=0;ve<x.mipmaps.length;ve++)le(F.__webglFramebuffer[ve],S,x,n.COLOR_ATTACHMENT0,se,ve);else le(F.__webglFramebuffer,S,x,n.COLOR_ATTACHMENT0,se,0);y(x,pe)&&v(se),t.unbindTexture()}S.depthBuffer&&ge(S)}function fe(S){let x=d(S)||s,F=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let te=0,$=F.length;te<$;te++){let N=F[te];if(y(N,x)){let pe=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,se=i.get(N).__webglTexture;t.bindTexture(pe,se),v(pe),t.unbindTexture()}}}function J(S){if(s&&S.samples>0&&ae(S)===!1){let x=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],F=S.width,te=S.height,$=n.COLOR_BUFFER_BIT,N=[],pe=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=i.get(S),ve=S.isWebGLMultipleRenderTargets===!0;if(ve)for(let we=0;we<x.length;we++)t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let we=0;we<x.length;we++){N.push(n.COLOR_ATTACHMENT0+we),S.depthBuffer&&N.push(pe);let Le=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(Le===!1&&(S.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),ve&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,se.__webglColorRenderbuffer[we]),Le===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[pe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[pe])),ve){let ne=i.get(x[we]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ne,0)}n.blitFramebuffer(0,0,F,te,0,0,F,te,$,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,N)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ve)for(let we=0;we<x.length;we++){t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,se.__webglColorRenderbuffer[we]);let Le=i.get(x[we]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,Le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}}function oe(S){return Math.min(r.maxSamples,S.samples)}function ae(S){let x=i.get(S);return s&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Te(S){let x=a.render.frame;u.get(S)!==x&&(u.set(S,x),S.update())}function me(S,x){let F=S.colorSpace,te=S.format,$=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===qn||F!==Mt&&F!==gt&&(qe.getTransfer(F)===Ze?s===!1?e.has("EXT_sRGB")===!0&&te===vt?(S.format=qn,S.minFilter=xt,S.generateMipmaps=!1):x=An.sRGBToLinear(x):(te!==vt||$!==Bt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}this.allocateTextureUnit=A,this.resetTextureUnits=W,this.setTexture2D=I,this.setTexture2DArray=K,this.setTexture3D=j,this.setTextureCube=q,this.rebindTextures=xe,this.setupRenderTarget=b,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=le,this.useMultisampledRTT=ae}function Xh(n,e,t){let i=t.isWebGL2;function r(o,a=gt){let s,l=qe.getTransfer(a);if(o===Bt)return n.UNSIGNED_BYTE;if(o===fr)return n.UNSIGNED_SHORT_4_4_4_4;if(o===dr)return n.UNSIGNED_SHORT_5_5_5_1;if(o===Ra)return n.BYTE;if(o===Ca)return n.SHORT;if(o===en)return n.UNSIGNED_SHORT;if(o===hr)return n.INT;if(o===Gt)return n.UNSIGNED_INT;if(o===zt)return n.FLOAT;if(o===xi)return i?n.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(o===La)return n.ALPHA;if(o===vt)return n.RGBA;if(o===Pa)return n.LUMINANCE;if(o===Da)return n.LUMINANCE_ALPHA;if(o===ei)return n.DEPTH_COMPONENT;if(o===ci)return n.DEPTH_STENCIL;if(o===qn)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(o===Ua)return n.RED;if(o===pr)return n.RED_INTEGER;if(o===Ia)return n.RG;if(o===mr)return n.RG_INTEGER;if(o===gr)return n.RGBA_INTEGER;if(o===_r||o===xr||o===vr||o===Mr)if(l===Ze)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(o===_r)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===xr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===vr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Mr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(o===_r)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===xr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===vr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Mr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Uo||o===Io||o===Fo||o===No)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(o===Uo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Io)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Fo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===No)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Sr)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===Oo||o===Bo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(o===Oo)return l===Ze?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(o===Bo)return l===Ze?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Go||o===zo||o===Ho||o===Vo||o===ko||o===Wo||o===Xo||o===qo||o===Yo||o===jo||o===Zo||o===Ko||o===Jo||o===Qo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(o===Go)return l===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===zo)return l===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Ho)return l===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Vo)return l===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===ko)return l===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Wo)return l===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Xo)return l===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===qo)return l===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Yo)return l===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===jo)return l===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Zo)return l===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Ko)return l===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Jo)return l===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Qo)return l===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Er||o===$o||o===es)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(o===Er)return l===Ze?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===$o)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===es)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===Fa||o===ts||o===is||o===ns)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(o===Er)return s.COMPRESSED_RED_RGTC1_EXT;if(o===ts)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===is)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===ns)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Yt?i?n.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):n[o]!==void 0?n[o]:null}return{convert:r}}var lo=class extends Tt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}};var Ji=class extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}};var hp={type:"move"},Bn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,o=null,a=null,s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let d=t.getJointPose(_,i),h=this._getHandJoint(c,_);d!==null&&(h.matrix.fromArray(d.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=d.radius),h.visible=d!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&p>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(hp)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ji;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var co=class extends Ft{constructor(e,t){super();let i=this,r=null,o=1,a=null,s="local-floor",l=1,c=null,u=null,f=null,p=null,m=null,g=null,_=t.getContextAttributes(),d=null,h=null,y=[],v=[],R=new We,D=null,C=new Tt;C.layers.enable(1),C.viewport=new nt;let w=new Tt;w.layers.enable(2),w.viewport=new nt;let H=[C,w],M=new lo;M.layers.enable(1),M.layers.enable(2);let T=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Z=y[G];return Z===void 0&&(Z=new Bn,y[G]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(G){let Z=y[G];return Z===void 0&&(Z=new Bn,y[G]=Z),Z.getGripSpace()},this.getHand=function(G){let Z=y[G];return Z===void 0&&(Z=new Bn,y[G]=Z),Z.getHandSpace()};function Y(G){let Z=v.indexOf(G.inputSource);if(Z===-1)return;let re=y[Z];re!==void 0&&(re.update(G.inputSource,G.frame,c||a),re.dispatchEvent({type:G.type,data:G.inputSource}))}function W(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",A);for(let G=0;G<y.length;G++){let Z=v[G];Z!==null&&(v[G]=null,y[G].disconnect(Z))}T=null,U=null,e.setRenderTarget(d),m=null,p=null,f=null,r=null,h=null,Q.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){o=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",W),r.addEventListener("inputsourceschange",A),_.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Z={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,t,Z),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),h=new yt(m.framebufferWidth,m.framebufferHeight,{format:vt,type:Bt,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Z=null,re=null,ue=null;_.depth&&(ue=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=_.stencil?ci:ei,re=_.stencil?Yt:Gt);let le={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:o};f=new XRWebGLBinding(r,t),p=f.createProjectionLayer(le),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),h=new yt(p.textureWidth,p.textureHeight,{format:vt,type:Bt,depthTexture:new Fn(p.textureWidth,p.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let Ee=e.properties.get(h);Ee.__ignoreDepthValues=p.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(s),Q.setContext(r),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function A(G){for(let Z=0;Z<G.removed.length;Z++){let re=G.removed[Z],ue=v.indexOf(re);ue>=0&&(v[ue]=null,y[ue].disconnect(re))}for(let Z=0;Z<G.added.length;Z++){let re=G.added[Z],ue=v.indexOf(re);if(ue===-1){for(let Ee=0;Ee<y.length;Ee++)if(Ee>=v.length){v.push(re),ue=Ee;break}else if(v[Ee]===null){v[Ee]=re,ue=Ee;break}if(ue===-1)break}let le=y[ue];le&&le.connect(re)}}let L=new B,I=new B;function K(G,Z,re){L.setFromMatrixPosition(Z.matrixWorld),I.setFromMatrixPosition(re.matrixWorld);let ue=L.distanceTo(I),le=Z.projectionMatrix.elements,Ee=re.projectionMatrix.elements,he=le[14]/(le[10]-1),ge=le[14]/(le[10]+1),xe=(le[9]+1)/le[5],b=(le[9]-1)/le[5],fe=(le[8]-1)/le[0],J=(Ee[8]+1)/Ee[0],oe=he*fe,ae=he*J,Te=ue/(-fe+J),me=Te*-fe;Z.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(me),G.translateZ(Te),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();let S=he+Te,x=ge+Te,F=oe-me,te=ae+(ue-me),$=xe*ge/x*S,N=b*ge/x*S;G.projectionMatrix.makePerspective(F,te,$,N,S,x),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function j(G,Z){Z===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Z.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;M.near=w.near=C.near=G.near,M.far=w.far=C.far=G.far,(T!==M.near||U!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,U=M.far);let Z=G.parent,re=M.cameras;j(M,Z);for(let ue=0;ue<re.length;ue++)j(re[ue],Z);re.length===2?K(M,C,w):M.projectionMatrix.copy(C.projectionMatrix),q(G,M,Z)};function q(G,Z,re){re===null?G.matrix.copy(Z.matrixWorld):(G.matrix.copy(re.matrixWorld),G.matrix.invert(),G.matrix.multiply(Z.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Z.projectionMatrix),G.projectionMatrixInverse.copy(Z.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Yn*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(G){l=G,p!==null&&(p.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)};let ee=null;function X(G,Z){if(u=Z.getViewerPose(c||a),g=Z,u!==null){let re=u.views;m!==null&&(e.setRenderTargetFramebuffer(h,m.framebuffer),e.setRenderTarget(h));let ue=!1;re.length!==M.cameras.length&&(M.cameras.length=0,ue=!0);for(let le=0;le<re.length;le++){let Ee=re[le],he=null;if(m!==null)he=m.getViewport(Ee);else{let xe=f.getViewSubImage(p,Ee);he=xe.viewport,le===0&&(e.setRenderTargetTextures(h,xe.colorTexture,p.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(h))}let ge=H[le];ge===void 0&&(ge=new Tt,ge.layers.enable(le),ge.viewport=new nt,H[le]=ge),ge.matrix.fromArray(Ee.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(Ee.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(he.x,he.y,he.width,he.height),le===0&&(M.matrix.copy(ge.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ue===!0&&M.cameras.push(ge)}}for(let re=0;re<y.length;re++){let ue=v[re],le=y[re];ue!==null&&le!==void 0&&le.update(ue,Z,c||a)}ee&&ee(G,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}let Q=new Fr;Q.setAnimationLoop(X),this.setAnimationLoop=function(G){ee=G},this.dispose=function(){}}};function qh(n,e){function t(d,h){d.matrixAutoUpdate===!0&&d.updateMatrix(),h.value.copy(d.matrix)}function i(d,h){h.color.getRGB(d.fogColor.value,zr(n)),h.isFog?(d.fogNear.value=h.near,d.fogFar.value=h.far):h.isFogExp2&&(d.fogDensity.value=h.density)}function r(d,h,y,v,R){h.isMeshBasicMaterial||h.isMeshLambertMaterial?o(d,h):h.isMeshToonMaterial?(o(d,h),f(d,h)):h.isMeshPhongMaterial?(o(d,h),u(d,h)):h.isMeshStandardMaterial?(o(d,h),p(d,h),h.isMeshPhysicalMaterial&&m(d,h,R)):h.isMeshMatcapMaterial?(o(d,h),g(d,h)):h.isMeshDepthMaterial?o(d,h):h.isMeshDistanceMaterial?(o(d,h),_(d,h)):h.isMeshNormalMaterial?o(d,h):h.isLineBasicMaterial?(a(d,h),h.isLineDashedMaterial&&s(d,h)):h.isPointsMaterial?l(d,h,y,v):h.isSpriteMaterial?c(d,h):h.isShadowMaterial?(d.color.value.copy(h.color),d.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function o(d,h){d.opacity.value=h.opacity,h.color&&d.diffuse.value.copy(h.color),h.emissive&&d.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(d.map.value=h.map,t(h.map,d.mapTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,t(h.alphaMap,d.alphaMapTransform)),h.bumpMap&&(d.bumpMap.value=h.bumpMap,t(h.bumpMap,d.bumpMapTransform),d.bumpScale.value=h.bumpScale,h.side===it&&(d.bumpScale.value*=-1)),h.normalMap&&(d.normalMap.value=h.normalMap,t(h.normalMap,d.normalMapTransform),d.normalScale.value.copy(h.normalScale),h.side===it&&d.normalScale.value.negate()),h.displacementMap&&(d.displacementMap.value=h.displacementMap,t(h.displacementMap,d.displacementMapTransform),d.displacementScale.value=h.displacementScale,d.displacementBias.value=h.displacementBias),h.emissiveMap&&(d.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,d.emissiveMapTransform)),h.specularMap&&(d.specularMap.value=h.specularMap,t(h.specularMap,d.specularMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest);let y=e.get(h).envMap;if(y&&(d.envMap.value=y,d.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=h.reflectivity,d.ior.value=h.ior,d.refractionRatio.value=h.refractionRatio),h.lightMap){d.lightMap.value=h.lightMap;let v=n._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=h.lightMapIntensity*v,t(h.lightMap,d.lightMapTransform)}h.aoMap&&(d.aoMap.value=h.aoMap,d.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,d.aoMapTransform))}function a(d,h){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,h.map&&(d.map.value=h.map,t(h.map,d.mapTransform))}function s(d,h){d.dashSize.value=h.dashSize,d.totalSize.value=h.dashSize+h.gapSize,d.scale.value=h.scale}function l(d,h,y,v){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,d.size.value=h.size*y,d.scale.value=v*.5,h.map&&(d.map.value=h.map,t(h.map,d.uvTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,t(h.alphaMap,d.alphaMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest)}function c(d,h){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,d.rotation.value=h.rotation,h.map&&(d.map.value=h.map,t(h.map,d.mapTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,t(h.alphaMap,d.alphaMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest)}function u(d,h){d.specular.value.copy(h.specular),d.shininess.value=Math.max(h.shininess,1e-4)}function f(d,h){h.gradientMap&&(d.gradientMap.value=h.gradientMap)}function p(d,h){d.metalness.value=h.metalness,h.metalnessMap&&(d.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,d.metalnessMapTransform)),d.roughness.value=h.roughness,h.roughnessMap&&(d.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,d.roughnessMapTransform)),e.get(h).envMap&&(d.envMapIntensity.value=h.envMapIntensity)}function m(d,h,y){d.ior.value=h.ior,h.sheen>0&&(d.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),d.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(d.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,d.sheenColorMapTransform)),h.sheenRoughnessMap&&(d.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,d.sheenRoughnessMapTransform))),h.clearcoat>0&&(d.clearcoat.value=h.clearcoat,d.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(d.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,d.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(d.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===it&&d.clearcoatNormalScale.value.negate())),h.iridescence>0&&(d.iridescence.value=h.iridescence,d.iridescenceIOR.value=h.iridescenceIOR,d.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(d.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,d.iridescenceMapTransform)),h.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),h.transmission>0&&(d.transmission.value=h.transmission,d.transmissionSamplerMap.value=y.texture,d.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(d.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,d.transmissionMapTransform)),d.thickness.value=h.thickness,h.thicknessMap&&(d.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=h.attenuationDistance,d.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(d.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(d.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=h.specularIntensity,d.specularColor.value.copy(h.specularColor),h.specularColorMap&&(d.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,d.specularColorMapTransform)),h.specularIntensityMap&&(d.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,h){h.matcap&&(d.matcap.value=h.matcap)}function _(d,h){let y=e.get(h).light;d.referencePosition.value.setFromMatrixPosition(y.matrixWorld),d.nearDistance.value=y.shadow.camera.near,d.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Yh(n,e,t,i){let r={},o={},a=[],s=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){let R=v.program;i.uniformBlockBinding(y,R)}function c(y,v){let R=r[y.id];R===void 0&&(g(y),R=u(y),r[y.id]=R,y.addEventListener("dispose",d));let D=v.program;i.updateUBOMapping(y,D);let C=e.render.frame;o[y.id]!==C&&(p(y),o[y.id]=C)}function u(y){let v=f();y.__bindingPointIndex=v;let R=n.createBuffer(),D=y.__size,C=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,D,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,R),R}function f(){for(let y=0;y<s;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){let v=r[y.id],R=y.uniforms,D=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let C=0,w=R.length;C<w;C++){let H=Array.isArray(R[C])?R[C]:[R[C]];for(let M=0,T=H.length;M<T;M++){let U=H[M];if(m(U,C,M,D)===!0){let Y=U.__offset,W=Array.isArray(U.value)?U.value:[U.value],A=0;for(let L=0;L<W.length;L++){let I=W[L],K=_(I);typeof I=="number"||typeof I=="boolean"?(U.__data[0]=I,n.bufferSubData(n.UNIFORM_BUFFER,Y+A,U.__data)):I.isMatrix3?(U.__data[0]=I.elements[0],U.__data[1]=I.elements[1],U.__data[2]=I.elements[2],U.__data[3]=0,U.__data[4]=I.elements[3],U.__data[5]=I.elements[4],U.__data[6]=I.elements[5],U.__data[7]=0,U.__data[8]=I.elements[6],U.__data[9]=I.elements[7],U.__data[10]=I.elements[8],U.__data[11]=0):(I.toArray(U.__data,A),A+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Y,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(y,v,R,D){let C=y.value,w=v+"_"+R;if(D[w]===void 0)return typeof C=="number"||typeof C=="boolean"?D[w]=C:D[w]=C.clone(),!0;{let H=D[w];if(typeof C=="number"||typeof C=="boolean"){if(H!==C)return D[w]=C,!0}else if(H.equals(C)===!1)return H.copy(C),!0}return!1}function g(y){let v=y.uniforms,R=0,D=16;for(let w=0,H=v.length;w<H;w++){let M=Array.isArray(v[w])?v[w]:[v[w]];for(let T=0,U=M.length;T<U;T++){let Y=M[T],W=Array.isArray(Y.value)?Y.value:[Y.value];for(let A=0,L=W.length;A<L;A++){let I=W[A],K=_(I),j=R%D;j!==0&&D-j<K.boundary&&(R+=D-j),Y.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=R,R+=K.storage}}}let C=R%D;return C>0&&(R+=D-C),y.__size=R,y.__cache={},this}function _(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function d(y){let v=y.target;v.removeEventListener("dispose",d);let R=a.indexOf(v.__bindingPointIndex);a.splice(R,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete o[v.id]}function h(){for(let y in r)n.deleteBuffer(r[y]);a=[],r={},o={}}return{bind:l,update:c,dispose:h}}var uo=class{constructor(e={}){let{canvas:t=sl(),context:i=null,depth:r=!0,stencil:o=!0,alpha:a=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=a;let m=new Uint32Array(4),g=new Int32Array(4),_=null,d=null,h=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=et,this._useLegacyLights=!1,this.toneMapping=qt,this.toneMappingExposure=1;let v=this,R=!1,D=0,C=0,w=null,H=-1,M=null,T=new nt,U=new nt,Y=null,W=new He(0),A=0,L=t.width,I=t.height,K=1,j=null,q=null,ee=new nt(0,0,L,I),X=new nt(0,0,L,I),Q=!1,G=new un,Z=!1,re=!1,ue=null,le=new $e,Ee=new We,he=new B,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function xe(){return w===null?K:1}let b=i;function fe(E,O){for(let V=0;V<E.length;V++){let k=E[V],z=t.getContext(k,O);if(z!==null)return z}return null}try{let E={alpha:!0,depth:r,stencil:o,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qs}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",_e,!1),b===null){let O=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&O.shift(),b=fe(O,E),b===null)throw fe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&b instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),b.getShaderPrecisionFormat===void 0&&(b.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let J,oe,ae,Te,me,S,x,F,te,$,N,pe,se,ve,we,Le,ne,Re,Ue,be,ye,Me,Ce,Ve;function je(){J=new ch(b),oe=new $u(b,J,e),J.init(oe),Me=new Xh(b,J,oe),ae=new kh(b,J,oe),Te=new fh(b),me=new Uh,S=new Wh(b,J,ae,me,oe,Me,Te),x=new th(v),F=new lh(v),te=new Qa(b,oe),Ce=new Ju(b,J,te,oe),$=new uh(b,te,Te,Ce),N=new ph(b,$,te,Te),Ue=new dh(b,oe,S),Le=new eh(me),pe=new Dh(v,x,F,J,oe,Ce,Le),se=new qh(v,me),ve=new Nh,we=new Gh(J,oe),Re=new Ku(v,x,F,ae,N,p,l),ne=new Vh(v,N,oe),Ve=new Yh(b,Te,oe,ae),be=new Qu(b,J,Te,oe),ye=new hh(b,J,Te,oe),Te.programs=pe.programs,v.capabilities=oe,v.extensions=J,v.properties=me,v.renderLists=ve,v.shadowMap=ne,v.state=ae,v.info=Te}je();let Pe=new co(v,b);this.xr=Pe,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){let E=J.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=J.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(E){E!==void 0&&(K=E,this.setSize(L,I,!1))},this.getSize=function(E){return E.set(L,I)},this.setSize=function(E,O,V=!0){if(Pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=E,I=O,t.width=Math.floor(E*K),t.height=Math.floor(O*K),V===!0&&(t.style.width=E+"px",t.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(L*K,I*K).floor()},this.setDrawingBufferSize=function(E,O,V){L=E,I=O,K=V,t.width=Math.floor(E*V),t.height=Math.floor(O*V),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(ee)},this.setViewport=function(E,O,V,k){E.isVector4?ee.set(E.x,E.y,E.z,E.w):ee.set(E,O,V,k),ae.viewport(T.copy(ee).multiplyScalar(K).floor())},this.getScissor=function(E){return E.copy(X)},this.setScissor=function(E,O,V,k){E.isVector4?X.set(E.x,E.y,E.z,E.w):X.set(E,O,V,k),ae.scissor(U.copy(X).multiplyScalar(K).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(E){ae.setScissorTest(Q=E)},this.setOpaqueSort=function(E){j=E},this.setTransparentSort=function(E){q=E},this.getClearColor=function(E){return E.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(E=!0,O=!0,V=!0){let k=0;if(E){let z=!1;if(w!==null){let Se=w.texture.format;z=Se===gr||Se===mr||Se===pr}if(z){let Se=w.texture.type,Ae=Se===Bt||Se===Gt||Se===en||Se===Yt||Se===fr||Se===dr,Fe=Re.getClearColor(),Oe=Re.getClearAlpha(),ke=Fe.r,Be=Fe.g,ze=Fe.b;Ae?(m[0]=ke,m[1]=Be,m[2]=ze,m[3]=Oe,b.clearBufferuiv(b.COLOR,0,m)):(g[0]=ke,g[1]=Be,g[2]=ze,g[3]=Oe,b.clearBufferiv(b.COLOR,0,g))}else k|=b.COLOR_BUFFER_BIT}O&&(k|=b.DEPTH_BUFFER_BIT),V&&(k|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),ve.dispose(),we.dispose(),me.dispose(),x.dispose(),F.dispose(),N.dispose(),Ce.dispose(),Ve.dispose(),pe.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",Ct),Pe.removeEventListener("sessionend",Qe),ue&&(ue.dispose(),ue=null),Lt.stop()};function ie(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let E=Te.autoReset,O=ne.enabled,V=ne.autoUpdate,k=ne.needsUpdate,z=ne.type;je(),Te.autoReset=E,ne.enabled=O,ne.autoUpdate=V,ne.needsUpdate=k,ne.type=z}function _e(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ce(E){let O=E.target;O.removeEventListener("dispose",ce),De(O)}function De(E){Ie(E),me.remove(E)}function Ie(E){let O=me.get(E).programs;O!==void 0&&(O.forEach(function(V){pe.releaseProgram(V)}),E.isShaderMaterial&&pe.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,V,k,z,Se){O===null&&(O=ge);let Ae=z.isMesh&&z.matrixWorld.determinant()<0,Fe=uf(E,O,V,k,z);ae.setMaterial(k,Ae);let Oe=V.index,ke=1;if(k.wireframe===!0){if(Oe=$.getWireframeAttribute(V),Oe===void 0)return;ke=2}let Be=V.drawRange,ze=V.attributes.position,ot=Be.start*ke,Nt=(Be.start+Be.count)*ke;Se!==null&&(ot=Math.max(ot,Se.start*ke),Nt=Math.min(Nt,(Se.start+Se.count)*ke)),Oe!==null?(ot=Math.max(ot,0),Nt=Math.min(Nt,Oe.count)):ze!=null&&(ot=Math.max(ot,0),Nt=Math.min(Nt,ze.count));let mt=Nt-ot;if(mt<0||mt===1/0)return;Ce.setup(z,k,Fe,V,Oe);let pi,tt=be;if(Oe!==null&&(pi=te.get(Oe),tt=ye,tt.setIndex(pi)),z.isMesh)k.wireframe===!0?(ae.setLineWidth(k.wireframeLinewidth*xe()),tt.setMode(b.LINES)):tt.setMode(b.TRIANGLES);else if(z.isLine){let Xe=k.linewidth;Xe===void 0&&(Xe=1),ae.setLineWidth(Xe*xe()),z.isLineSegments?tt.setMode(b.LINES):z.isLineLoop?tt.setMode(b.LINE_LOOP):tt.setMode(b.LINE_STRIP)}else z.isPoints?tt.setMode(b.POINTS):z.isSprite&&tt.setMode(b.TRIANGLES);if(z.isBatchedMesh)tt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)tt.renderInstances(ot,mt,z.count);else if(V.isInstancedBufferGeometry){let Xe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,So=Math.min(V.instanceCount,Xe);tt.renderInstances(ot,mt,So)}else tt.render(ot,mt)};function Ke(E,O,V){E.transparent===!0&&E.side===Pt&&E.forceSinglePass===!1?(E.side=it,E.needsUpdate=!0,ar(E,O,V),E.side=Ot,E.needsUpdate=!0,ar(E,O,V),E.side=Pt):ar(E,O,V)}this.compile=function(E,O,V=null){V===null&&(V=E),d=we.get(V),d.init(),y.push(d),V.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),E!==V&&E.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights(v._useLegacyLights);let k=new Set;return E.traverse(function(z){let Se=z.material;if(Se)if(Array.isArray(Se))for(let Ae=0;Ae<Se.length;Ae++){let Fe=Se[Ae];Ke(Fe,V,z),k.add(Fe)}else Ke(Se,V,z),k.add(Se)}),y.pop(),d=null,k},this.compileAsync=function(E,O,V=null){let k=this.compile(E,O,V);return new Promise(z=>{function Se(){if(k.forEach(function(Ae){me.get(Ae).currentProgram.isReady()&&k.delete(Ae)}),k.size===0){z(E);return}setTimeout(Se,10)}J.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Je=null;function pt(E){Je&&Je(E)}function Ct(){Lt.stop()}function Qe(){Lt.start()}let Lt=new Fr;Lt.setAnimationLoop(pt),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(E){Je=E,Pe.setAnimationLoop(E),E===null?Lt.stop():Lt.start()},Pe.addEventListener("sessionstart",Ct),Pe.addEventListener("sessionend",Qe),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(O),O=Pe.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,O,w),d=we.get(E,y.length),d.init(),y.push(d),le.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),G.setFromProjectionMatrix(le),re=this.localClippingEnabled,Z=Le.init(this.clippingPlanes,re),_=ve.get(E,h.length),_.init(),h.push(_),ai(E,O,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(j,q),this.info.render.frame++,Z===!0&&Le.beginShadows();let V=d.state.shadowsArray;if(ne.render(V,E,O),Z===!0&&Le.endShadows(),this.info.autoReset===!0&&this.info.reset(),Re.render(_,E),d.setupLights(v._useLegacyLights),O.isArrayCamera){let k=O.cameras;for(let z=0,Se=k.length;z<Se;z++){let Ae=k[z];zs(_,E,Ae,Ae.viewport)}}else zs(_,E,O);w!==null&&(S.updateMultisampleRenderTarget(w),S.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(v,E,O),Ce.resetDefaultState(),H=-1,M=null,y.pop(),y.length>0?d=y[y.length-1]:d=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function ai(E,O,V,k){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||G.intersectsSprite(E)){k&&he.setFromMatrixPosition(E.matrixWorld).applyMatrix4(le);let Ae=N.update(E),Fe=E.material;Fe.visible&&_.push(E,Ae,Fe,V,he.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||G.intersectsObject(E))){let Ae=N.update(E),Fe=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),he.copy(E.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),he.copy(Ae.boundingSphere.center)),he.applyMatrix4(E.matrixWorld).applyMatrix4(le)),Array.isArray(Fe)){let Oe=Ae.groups;for(let ke=0,Be=Oe.length;ke<Be;ke++){let ze=Oe[ke],ot=Fe[ze.materialIndex];ot&&ot.visible&&_.push(E,Ae,ot,V,he.z,ze)}}else Fe.visible&&_.push(E,Ae,Fe,V,he.z,null)}}let Se=E.children;for(let Ae=0,Fe=Se.length;Ae<Fe;Ae++)ai(Se[Ae],O,V,k)}function zs(E,O,V,k){let z=E.opaque,Se=E.transmissive,Ae=E.transparent;d.setupLightsView(V),Z===!0&&Le.setGlobalState(v.clippingPlanes,V),Se.length>0&&cf(z,Se,O,V),k&&ae.viewport(T.copy(k)),z.length>0&&sr(z,O,V),Se.length>0&&sr(Se,O,V),Ae.length>0&&sr(Ae,O,V),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function cf(E,O,V,k){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;let Se=oe.isWebGL2;ue===null&&(ue=new yt(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")?xi:Bt,minFilter:_i,samples:Se?4:0})),v.getDrawingBufferSize(Ee),Se?ue.setSize(Ee.x,Ee.y):ue.setSize(jn(Ee.x),jn(Ee.y));let Ae=v.getRenderTarget();v.setRenderTarget(ue),v.getClearColor(W),A=v.getClearAlpha(),A<1&&v.setClearColor(16777215,.5),v.clear();let Fe=v.toneMapping;v.toneMapping=qt,sr(E,V,k),S.updateMultisampleRenderTarget(ue),S.updateRenderTargetMipmap(ue);let Oe=!1;for(let ke=0,Be=O.length;ke<Be;ke++){let ze=O[ke],ot=ze.object,Nt=ze.geometry,mt=ze.material,pi=ze.group;if(mt.side===Pt&&ot.layers.test(k.layers)){let tt=mt.side;mt.side=it,mt.needsUpdate=!0,Hs(ot,V,k,Nt,mt,pi),mt.side=tt,mt.needsUpdate=!0,Oe=!0}}Oe===!0&&(S.updateMultisampleRenderTarget(ue),S.updateRenderTargetMipmap(ue)),v.setRenderTarget(Ae),v.setClearColor(W,A),v.toneMapping=Fe}function sr(E,O,V){let k=O.isScene===!0?O.overrideMaterial:null;for(let z=0,Se=E.length;z<Se;z++){let Ae=E[z],Fe=Ae.object,Oe=Ae.geometry,ke=k===null?Ae.material:k,Be=Ae.group;Fe.layers.test(V.layers)&&Hs(Fe,O,V,Oe,ke,Be)}}function Hs(E,O,V,k,z,Se){E.onBeforeRender(v,O,V,k,z,Se),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(v,O,V,k,E,Se),z.transparent===!0&&z.side===Pt&&z.forceSinglePass===!1?(z.side=it,z.needsUpdate=!0,v.renderBufferDirect(V,O,k,z,E,Se),z.side=Ot,z.needsUpdate=!0,v.renderBufferDirect(V,O,k,z,E,Se),z.side=Pt):v.renderBufferDirect(V,O,k,z,E,Se),E.onAfterRender(v,O,V,k,z,Se)}function ar(E,O,V){O.isScene!==!0&&(O=ge);let k=me.get(E),z=d.state.lights,Se=d.state.shadowsArray,Ae=z.state.version,Fe=pe.getParameters(E,z.state,Se,O,V),Oe=pe.getProgramCacheKey(Fe),ke=k.programs;k.environment=E.isMeshStandardMaterial?O.environment:null,k.fog=O.fog,k.envMap=(E.isMeshStandardMaterial?F:x).get(E.envMap||k.environment),ke===void 0&&(E.addEventListener("dispose",ce),ke=new Map,k.programs=ke);let Be=ke.get(Oe);if(Be!==void 0){if(k.currentProgram===Be&&k.lightsStateVersion===Ae)return ks(E,Fe),Be}else Fe.uniforms=pe.getUniforms(E),E.onBuild(V,Fe,v),E.onBeforeCompile(Fe,v),Be=pe.acquireProgram(Fe,Oe),ke.set(Oe,Be),k.uniforms=Fe.uniforms;let ze=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ze.clippingPlanes=Le.uniform),ks(E,Fe),k.needsLights=ff(E),k.lightsStateVersion=Ae,k.needsLights&&(ze.ambientLightColor.value=z.state.ambient,ze.lightProbe.value=z.state.probe,ze.directionalLights.value=z.state.directional,ze.directionalLightShadows.value=z.state.directionalShadow,ze.spotLights.value=z.state.spot,ze.spotLightShadows.value=z.state.spotShadow,ze.rectAreaLights.value=z.state.rectArea,ze.ltc_1.value=z.state.rectAreaLTC1,ze.ltc_2.value=z.state.rectAreaLTC2,ze.pointLights.value=z.state.point,ze.pointLightShadows.value=z.state.pointShadow,ze.hemisphereLights.value=z.state.hemi,ze.directionalShadowMap.value=z.state.directionalShadowMap,ze.directionalShadowMatrix.value=z.state.directionalShadowMatrix,ze.spotShadowMap.value=z.state.spotShadowMap,ze.spotLightMatrix.value=z.state.spotLightMatrix,ze.spotLightMap.value=z.state.spotLightMap,ze.pointShadowMap.value=z.state.pointShadowMap,ze.pointShadowMatrix.value=z.state.pointShadowMatrix),k.currentProgram=Be,k.uniformsList=null,Be}function Vs(E){if(E.uniformsList===null){let O=E.currentProgram.getUniforms();E.uniformsList=Ni.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function ks(E,O){let V=me.get(E);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function uf(E,O,V,k,z){O.isScene!==!0&&(O=ge),S.resetTextureUnits();let Se=O.fog,Ae=k.isMeshStandardMaterial?O.environment:null,Fe=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Mt,Oe=(k.isMeshStandardMaterial?F:x).get(k.envMap||Ae),ke=k.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Be=!!V.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),ze=!!V.morphAttributes.position,ot=!!V.morphAttributes.normal,Nt=!!V.morphAttributes.color,mt=qt;k.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(mt=v.toneMapping);let pi=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,tt=pi!==void 0?pi.length:0,Xe=me.get(k),So=d.state.lights;if(Z===!0&&(re===!0||E!==M)){let Wt=E===M&&k.id===H;Le.setState(k,E,Wt)}let rt=!1;k.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==So.state.version||Xe.outputColorSpace!==Fe||z.isBatchedMesh&&Xe.batching===!1||!z.isBatchedMesh&&Xe.batching===!0||z.isInstancedMesh&&Xe.instancing===!1||!z.isInstancedMesh&&Xe.instancing===!0||z.isSkinnedMesh&&Xe.skinning===!1||!z.isSkinnedMesh&&Xe.skinning===!0||z.isInstancedMesh&&Xe.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Xe.instancingColor===!1&&z.instanceColor!==null||Xe.envMap!==Oe||k.fog===!0&&Xe.fog!==Se||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Le.numPlanes||Xe.numIntersection!==Le.numIntersection)||Xe.vertexAlphas!==ke||Xe.vertexTangents!==Be||Xe.morphTargets!==ze||Xe.morphNormals!==ot||Xe.morphColors!==Nt||Xe.toneMapping!==mt||oe.isWebGL2===!0&&Xe.morphTargetsCount!==tt)&&(rt=!0):(rt=!0,Xe.__version=k.version);let Bi=Xe.currentProgram;rt===!0&&(Bi=ar(k,O,z));let Ws=!1,Gn=!1,Eo=!1,bt=Bi.getUniforms(),Gi=Xe.uniforms;if(ae.useProgram(Bi.program)&&(Ws=!0,Gn=!0,Eo=!0),k.id!==H&&(H=k.id,Gn=!0),Ws||M!==E){bt.setValue(b,"projectionMatrix",E.projectionMatrix),bt.setValue(b,"viewMatrix",E.matrixWorldInverse);let Wt=bt.map.cameraPosition;Wt!==void 0&&Wt.setValue(b,he.setFromMatrixPosition(E.matrixWorld)),oe.logarithmicDepthBuffer&&bt.setValue(b,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&bt.setValue(b,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Gn=!0,Eo=!0)}if(z.isSkinnedMesh){bt.setOptional(b,z,"bindMatrix"),bt.setOptional(b,z,"bindMatrixInverse");let Wt=z.skeleton;Wt&&(oe.floatVertexTextures?(Wt.boneTexture===null&&Wt.computeBoneTexture(),bt.setValue(b,"boneTexture",Wt.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(bt.setOptional(b,z,"batchingTexture"),bt.setValue(b,"batchingTexture",z._matricesTexture,S));let yo=V.morphAttributes;if((yo.position!==void 0||yo.normal!==void 0||yo.color!==void 0&&oe.isWebGL2===!0)&&Ue.update(z,V,Bi),(Gn||Xe.receiveShadow!==z.receiveShadow)&&(Xe.receiveShadow=z.receiveShadow,bt.setValue(b,"receiveShadow",z.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Gi.envMap.value=Oe,Gi.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),Gn&&(bt.setValue(b,"toneMappingExposure",v.toneMappingExposure),Xe.needsLights&&hf(Gi,Eo),Se&&k.fog===!0&&se.refreshFogUniforms(Gi,Se),se.refreshMaterialUniforms(Gi,k,K,I,ue),Ni.upload(b,Vs(Xe),Gi,S)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ni.upload(b,Vs(Xe),Gi,S),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&bt.setValue(b,"center",z.center),bt.setValue(b,"modelViewMatrix",z.modelViewMatrix),bt.setValue(b,"normalMatrix",z.normalMatrix),bt.setValue(b,"modelMatrix",z.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let Wt=k.uniformsGroups;for(let To=0,df=Wt.length;To<df;To++)if(oe.isWebGL2){let Xs=Wt[To];Ve.update(Xs,Bi),Ve.bind(Xs,Bi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Bi}function hf(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function ff(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,O,V){me.get(E.texture).__webglTexture=O,me.get(E.depthTexture).__webglTexture=V;let k=me.get(E);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=V===void 0,k.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,O){let V=me.get(E);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,V=0){w=E,D=O,C=V;let k=!0,z=null,Se=!1,Ae=!1;if(E){let Oe=me.get(E);Oe.__useDefaultFramebuffer!==void 0?(ae.bindFramebuffer(b.FRAMEBUFFER,null),k=!1):Oe.__webglFramebuffer===void 0?S.setupRenderTarget(E):Oe.__hasExternalTextures&&S.rebindTextures(E,me.get(E.texture).__webglTexture,me.get(E.depthTexture).__webglTexture);let ke=E.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ae=!0);let Be=me.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Be[O])?z=Be[O][V]:z=Be[O],Se=!0):oe.isWebGL2&&E.samples>0&&S.useMultisampledRTT(E)===!1?z=me.get(E).__webglMultisampledFramebuffer:Array.isArray(Be)?z=Be[V]:z=Be,T.copy(E.viewport),U.copy(E.scissor),Y=E.scissorTest}else T.copy(ee).multiplyScalar(K).floor(),U.copy(X).multiplyScalar(K).floor(),Y=Q;if(ae.bindFramebuffer(b.FRAMEBUFFER,z)&&oe.drawBuffers&&k&&ae.drawBuffers(E,z),ae.viewport(T),ae.scissor(U),ae.setScissorTest(Y),Se){let Oe=me.get(E.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+O,Oe.__webglTexture,V)}else if(Ae){let Oe=me.get(E.texture),ke=O||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Oe.__webglTexture,V||0,ke)}H=-1},this.readRenderTargetPixels=function(E,O,V,k,z,Se,Ae){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=me.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(Fe=Fe[Ae]),Fe){ae.bindFramebuffer(b.FRAMEBUFFER,Fe);try{let Oe=E.texture,ke=Oe.format,Be=Oe.type;if(ke!==vt&&Me.convert(ke)!==b.getParameter(b.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let ze=Be===xi&&(J.has("EXT_color_buffer_half_float")||oe.isWebGL2&&J.has("EXT_color_buffer_float"));if(Be!==Bt&&Me.convert(Be)!==b.getParameter(b.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Be===zt&&(oe.isWebGL2||J.has("OES_texture_float")||J.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-k&&V>=0&&V<=E.height-z&&b.readPixels(O,V,k,z,Me.convert(ke),Me.convert(Be),Se)}finally{let Oe=w!==null?me.get(w).__webglFramebuffer:null;ae.bindFramebuffer(b.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(E,O,V=0){let k=Math.pow(2,-V),z=Math.floor(O.image.width*k),Se=Math.floor(O.image.height*k);S.setTexture2D(O,0),b.copyTexSubImage2D(b.TEXTURE_2D,V,0,0,E.x,E.y,z,Se),ae.unbindTexture()},this.copyTextureToTexture=function(E,O,V,k=0){let z=O.image.width,Se=O.image.height,Ae=Me.convert(V.format),Fe=Me.convert(V.type);S.setTexture2D(V,0),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,V.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,V.unpackAlignment),O.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,k,E.x,E.y,z,Se,Ae,Fe,O.image.data):O.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,k,E.x,E.y,O.mipmaps[0].width,O.mipmaps[0].height,Ae,O.mipmaps[0].data):b.texSubImage2D(b.TEXTURE_2D,k,E.x,E.y,Ae,Fe,O.image),k===0&&V.generateMipmaps&&b.generateMipmap(b.TEXTURE_2D),ae.unbindTexture()},this.copyTextureToTexture3D=function(E,O,V,k,z=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Se=E.max.x-E.min.x+1,Ae=E.max.y-E.min.y+1,Fe=E.max.z-E.min.z+1,Oe=Me.convert(k.format),ke=Me.convert(k.type),Be;if(k.isData3DTexture)S.setTexture3D(k,0),Be=b.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)S.setTexture2DArray(k,0),Be=b.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,k.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,k.unpackAlignment);let ze=b.getParameter(b.UNPACK_ROW_LENGTH),ot=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Nt=b.getParameter(b.UNPACK_SKIP_PIXELS),mt=b.getParameter(b.UNPACK_SKIP_ROWS),pi=b.getParameter(b.UNPACK_SKIP_IMAGES),tt=V.isCompressedTexture?V.mipmaps[z]:V.image;b.pixelStorei(b.UNPACK_ROW_LENGTH,tt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,tt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,E.min.x),b.pixelStorei(b.UNPACK_SKIP_ROWS,E.min.y),b.pixelStorei(b.UNPACK_SKIP_IMAGES,E.min.z),V.isDataTexture||V.isData3DTexture?b.texSubImage3D(Be,z,O.x,O.y,O.z,Se,Ae,Fe,Oe,ke,tt.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),b.compressedTexSubImage3D(Be,z,O.x,O.y,O.z,Se,Ae,Fe,Oe,tt.data)):b.texSubImage3D(Be,z,O.x,O.y,O.z,Se,Ae,Fe,Oe,ke,tt),b.pixelStorei(b.UNPACK_ROW_LENGTH,ze),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,ot),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Nt),b.pixelStorei(b.UNPACK_SKIP_ROWS,mt),b.pixelStorei(b.UNPACK_SKIP_IMAGES,pi),z===0&&k.generateMipmaps&&b.generateMipmap(Be),ae.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?S.setTextureCube(E,0):E.isData3DTexture?S.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?S.setTexture2DArray(E,0):S.setTexture2D(E,0),ae.unbindTexture()},this.resetState=function(){D=0,C=0,w=null,ae.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return It}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===tn?"display-p3":"srgb",t.unpackColorSpace=qe.workingColorSpace===zi?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===et?ti:yr}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ti?et:Mt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}};var tr=class extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var ir=class extends lt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var ho=class extends Ye{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};var fo=class extends Kt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};var jh=new $e,Ns=new xn,po=new di,mo=new B,go=class extends ht{constructor(e=new lt,t=new fo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),po.copy(i.boundingSphere),po.applyMatrix4(r),po.radius+=o,e.ray.intersectsSphere(po)===!1)return;jh.copy(r).invert(),Ns.copy(e.ray).applyMatrix4(jh);let s=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=i.index,f=i.attributes.position;if(c!==null){let p=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=p,_=m;g<_;g++){let d=c.getX(g);mo.fromBufferAttribute(f,d),Zh(mo,d,l,r,e,t,this)}}else{let p=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let g=p,_=m;g<_;g++)mo.fromBufferAttribute(f,g),Zh(mo,g,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){let s=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}};function Zh(n,e,t,i,r,o,a){let s=Ns.distanceSqToPoint(n);if(s<t){let l=new B;Ns.closestPointToPoint(n,l),l.applyMatrix4(i);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;o.push({distance:c,distanceToRay:Math.sqrt(s),point:l,index:e,face:null,object:a})}}qe.enabled=!1;var Kh="#f4fbfa",nr=["#0b7287","#0b8a98","#1a9f9a","#0b6f80","#1fb0aa","#167a72","#0f8f8a"],rr=["#1d5f86","#1b6e8a","#2b6f9a","#3a69b0","#4f7cc4","#245c7e","#3a5f96"],ef=["#ff748a","#f5aa4b","#ba8ee8","#5fcf8a","#80a9f4","#e982bb"],tf=["#8fd3cf","#a9c6e6","#ffd3cf","#fde6ae"],kt=n=>[parseInt(n.slice(1,3),16)/255,parseInt(n.slice(3,5),16)/255,parseInt(n.slice(5,7),16)/255],Ai=(n,e,t)=>[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t,n[2]+(e[2]-n[2])*t],si=(n,e,t)=>n<e?e:n>t?t:n,_o=(n,e,t)=>{let i=si((t-n)/(e-n),0,1);return i*i*(3-2*i)},or=(n,e)=>{let t=n-e;for(;t>Math.PI;)t-=2*Math.PI;for(;t<-Math.PI;)t+=2*Math.PI;return t};function nf(n){let e=n>>>0,t=()=>{e+=1831565813;let i=e;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296};return{next:t,range:(i,r)=>i+t()*(r-i),int:(i,r)=>Math.floor(i+t()*(r-i+1)),chance:i=>t()<i,pick:i=>i[Math.floor(t()*i.length)],sign:()=>t()<.5?-1:1,shuffle:i=>{let r=i.slice();for(let o=r.length-1;o>0;o--){let a=Math.floor(t()*(o+1));[r[o],r[a]]=[r[a],r[o]]}return r}}}var Qi=(n,e,t)=>{let i=1+n.range(-t,t);return[si(e[0]*i,0,1),si(e[1]*i,0,1),si(e[2]*i,0,1)]},Mo=`
uniform float uT; uniform float uTime; uniform float uGlow; uniform vec2 uPar; uniform vec2 uShadowOff;
uniform float uRouteHead; uniform float uRouteMode; uniform float uRouteSpacing; uniform vec3 uFocus; uniform float uFocusR;
float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
  return mix(mix(hash(i), hash(i+vec2(1.0,0.0)), f.x), mix(hash(i+vec2(0.0,1.0)), hash(i+vec2(1.0,1.0)), f.x), f.y); }
`,Bs=`
  p.xy += uPar * (p.z + 0.6);
#ifdef SHADOW
  p.xy += uShadowOff * (p.z + 1.0);
#endif
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
`,fp=`
#ifdef SHADOW
  gl_FragColor = vec4(0.0, 0.0, 0.0, alpha);
#else
  gl_FragColor = vec4(c, alpha);
#endif
`,dp=`
const vec3 LDIR = normalize(vec3(-0.45, 0.6, 0.75));
const vec3 HDIR = normalize(vec3(-0.45, 0.6, 1.75));
`,pp=Mo+`
attribute vec3 aOff; attribute float aW; attribute float aBirth; attribute float aArc; attribute vec3 aCol; attribute float aSide;
attribute float aRoute; attribute float aRouteLen; attribute float aPly;
varying vec3 vN; varying vec3 vCol; varying float vArc; varying float vSide; varying float vRoute; varying float vRouteLen; varying float vW; varying float vFocus; varying float vPly;
void main(){
  float g = clamp((uT - aBirth) / 0.14, 0.0, 1.0); g = g*g*(3.0-2.0*g);
  vec3 p = position + aOff * aW * g;
  vFocus = uFocus.z * (1.0 - smoothstep(0.0, uFocusR, distance(position.xy, uFocus.xy)));
  vN = aOff; vCol = aCol; vArc = aArc; vSide = aSide; vRoute = aRoute; vRouteLen = aRouteLen; vW = aW; vPly = aPly;
${Bs}
}`,mp=Mo+dp+`
varying vec3 vN; varying vec3 vCol; varying float vArc; varying float vSide; varying float vRoute; varying float vRouteLen; varying float vW; varying float vFocus; varying float vPly;
void main(){
  vec3 N = normalize(vN);
  float d = dot(N, LDIR)*0.5 + 0.5;
  // plied yarn: strands twisted around each other (slanted grooves), each strand made of fine fibers
  float tw = vArc / max(vW * 2.4, 0.003) * vPly + vSide * 1.7;
  float ply = abs(fract(tw) - 0.5) * 2.0;                 // 0 in the groove between strands, 1 on a strand's crown
  float crown = smoothstep(0.0, 0.75, ply);
  float fib = vnoise(vec2(vSide*38.0 + tw*4.0, vArc*150.0))*0.6 + vnoise(vec2(vSide*95.0, vArc*420.0 + tw))*0.4;
  vec3 c = vCol * (0.6 + 0.5*d);
  c *= 0.72 + 0.32*crown;
  c *= 0.9 + 0.2*fib;
  float rim = 1.0 - abs(N.z);
  c = mix(c, c*0.74, rim*0.45);                            // rounded, shaded flanks
  float sh = pow(max(dot(N, HDIR), 0.0), 7.0) * crown * (0.55 + 0.45*fib);
  c += vec3(0.92, 1.0, 1.0) * sh * 0.26;                   // soft sheen along the fibers
  c += vec3(0.5, 0.95, 0.9) * 0.05 * uGlow * crown;
  // data crossing the integration: a pulse along a route (hero: one head; side cord: a repeating train)
  if (vRoute >= 0.0) {
    float rp;
    if (uRouteMode < 0.5) rp = exp(-pow((vRoute - uRouteHead) * vRouteLen * 0.95, 2.0));
    else { float dd = mod(vRoute - uTime * 2.4, uRouteSpacing); rp = 0.75 * exp(-pow((dd - uRouteSpacing * 0.5) * 3.2, 2.0)); }
    c = mix(c, vec3(0.86, 1.0, 0.98), rp * 0.8);
    c += vec3(0.1, 0.35, 0.3) * rp;
  }
  c = mix(c, c*1.16 + vec3(0.07, 0.1, 0.09), vFocus * 0.7);  // brighten near a hovered button
  float alpha = 1.0;
${fp}
}`,gp=Mo+`
attribute vec3 iPos; attribute vec2 iR; attribute vec3 iCol; attribute float iMax; attribute float iBirth; attribute float iPhase;
varying vec2 vQ; varying vec3 vCol; varying float vA;
void main(){
  vec3 p = vec3(position.xy * iR, 0.0) + iPos;
  vQ = position.xy; vCol = iCol;
  float fo = uFocus.z * (1.0 - smoothstep(0.0, uFocusR, distance(iPos.xy, uFocus.xy)));
  vA = iMax * smoothstep(0.0, 2.2, uT - iBirth) * uGlow * (0.86 + 0.14*sin(uTime*0.9 + iPhase)) * (1.0 + 1.6*fo);
${Bs}
}`,_p=`
varying vec2 vQ; varying vec3 vCol; varying float vA;
void main(){
  float r = length(vQ);
  float a = exp(-r*r*3.2) * (1.0 - smoothstep(0.62, 0.8, r));
  vec3 c = mix(vCol, vec3(1.0), exp(-r*r*14.0)*0.5);
  gl_FragColor = vec4(c, a * vA);
}`,xp=Mo+`
uniform float uPx;
attribute float aBirth; attribute vec3 aCol; attribute float aSize; attribute float aPhase;
varying vec3 vCol; varying float vA;
void main(){
  float g = smoothstep(0.0, 1.4, uT - aBirth);
  vec3 p = position;
  p.x += sin(uTime*0.27 + aPhase*3.0) * 0.04;
  p.y += sin(uTime*0.39 + aPhase) * 0.05;
  vCol = aCol; vA = g * (0.65 + 0.35*sin(uTime*1.1 + aPhase*5.0));
  gl_PointSize = aSize * uPx * g;
${Bs}
}`,vp=`
varying vec3 vCol; varying float vA;
void main(){
  float r = length(gl_PointCoord - 0.5) * 2.0;
  float a = 1.0 - smoothstep(0.4, 1.0, r);
  gl_FragColor = vec4(mix(vCol, vec3(1.0), (1.0 - r)*0.4), a * vA * 0.8);
}`,Jh="void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }",Mp=`
uniform sampler2D tex; uniform vec2 dir; uniform vec2 res;
void main(){
  vec2 uv = gl_FragCoord.xy / res;
  float w[5]; w[0]=0.2270270; w[1]=0.1945946; w[2]=0.1216216; w[3]=0.0540541; w[4]=0.0162162;
  float a = texture2D(tex, uv).a * w[0];
  for (int i = 1; i < 5; i++) { vec2 o = dir * float(i) * 1.3 / res; a += (texture2D(tex, uv + o).a + texture2D(tex, uv - o).a) * w[i]; }
  gl_FragColor = vec4(0.0, 0.0, 0.0, a);
}`,Sp=`
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
}`;function Ep(){let n=new ir;return n.setAttribute("position",new Ye(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),n.setIndex([0,1,2,0,2,3]),n}function yp(n,e,t){let i=new ir;for(let r of Object.keys(n.attributes))i.setAttribute(r,n.attributes[r]);i.setIndex(n.index);for(let[r,[o,a]]of Object.entries(t))i.setAttribute(r,new ho(new Float32Array(o),a));return i.instanceCount=e,i}function Tp(n){let t=0,i=0;for(let v of n)t+=v.pts.length*7,i+=(v.pts.length-1)*6*6;let r=new Float32Array(t*3),o=new Float32Array(t*3),a=new Float32Array(t),s=new Float32Array(t),l=new Float32Array(t),c=new Float32Array(t*3),u=new Float32Array(t),f=new Float32Array(t),p=new Float32Array(t).fill(-1),m=new Float32Array(t).fill(1),g=new Uint32Array(i),_=[],d=0,h=0;for(let v of n){let R=d,D=v.pts.length;v.fid!=null&&_.push({fid:v.fid,start:d,count:D*7});let C=0;for(let w=0;w<D;w++){let H=v.pts[w],M=v.pts[Math.max(0,w-1)],T=v.pts[Math.min(D-1,w+1)];w>0&&(C+=Math.hypot(H.x-M.x,H.y-M.y,H.z-M.z));let U=Math.atan2(T.y-M.y,T.x-M.x),Y=Ai(v.col[0],v.col[1],w/(D-1)),W=Math.sin(U),A=Math.cos(U);for(let L=0;L<7;L++){let I=L/6*Math.PI;r.set([H.x,-H.y,H.z],d*3),o.set([Math.cos(I)*W,Math.cos(I)*A,Math.sin(I)],d*3),a[d]=H.w,s[d]=H.t,l[d]=C+(v.arc0||0),c.set(Y,d*3),u[d]=L/6,f[d]=v.ply??1,H.route!=null&&(p[d]=H.route,m[d]=v.routeLen||1),d++}}for(let w=0;w<D-1;w++)for(let H=0;H<6;H++){let M=R+w*7+H,T=M+7;g.set([M,T,M+1,T,T+1,M+1],h),h+=6}}let y=new lt;return y.setAttribute("position",new Ye(r,3)),y.setAttribute("aOff",new Ye(o,3)),y.setAttribute("aW",new Ye(a,1)),y.setAttribute("aBirth",new Ye(s,1)),y.setAttribute("aArc",new Ye(l,1)),y.setAttribute("aCol",new Ye(c,3)),y.setAttribute("aSide",new Ye(u,1)),y.setAttribute("aPly",new Ye(f,1)),y.setAttribute("aRoute",new Ye(p,1)),y.setAttribute("aRouteLen",new Ye(m,1)),y.setIndex(new Ye(g,1)),y.userData.ranges=_,y}function rf(n){return(e,t)=>{let i=1e9;for(let r of n){let o=(r.x0+r.x1)/2,a=(r.y0+r.y1)/2,s=Math.abs(e-o)-(r.x1-r.x0)/2,l=Math.abs(t-a)-(r.y1-r.y0)/2,c=Math.hypot(Math.max(s,0),Math.max(l,0))+Math.min(Math.max(s,l),0);c<i&&(i=c)}return i}}function of(n,e){let t=[],i=new Set,r=a=>{for(let s=a.parentElement;s&&s!==e;s=s.parentElement){if(s===document.body||s===document.documentElement)return null;if(getComputedStyle(s).overflow!=="visible")return s}return null},o=document.createTreeWalker(n,NodeFilter.SHOW_TEXT);for(let a=o.nextNode();a;a=o.nextNode()){if(!a.textContent.trim())continue;let s=a.parentElement;if(!s||s.closest("script,style,noscript,template,.epx-threads,.epx-threadside"))continue;let l=document.createRange();l.selectNodeContents(a);let c=r(a),u=c&&c.getBoundingClientRect();for(let f of l.getClientRects()){if(f.width<1||f.height<1)continue;if(!u){t.push(f);continue}(f.left<u.left-1||f.right>u.right+1||f.top<u.top-1||f.bottom>u.bottom+1)&&!i.has(c)&&u.width*u.height<4e6&&c!==e&&(i.add(c),t.push(u));let m=Math.max(f.left,u.left),g=Math.min(f.right,u.right),_=Math.max(f.top,u.top),d=Math.min(f.bottom,u.bottom);g-m>1&&d-_>1&&t.push({left:m,right:g,top:_,bottom:d,width:g-m,height:d-_})}}return t}function sf(n,e){let{field:t,pad:i,k:r}=e,o=(l,c,u,f)=>t(l,c)-(f??i)-u,a=(l,c)=>{let f=t(l+.02,c)-t(l-.02,c),p=t(l,c+.02)-t(l,c-.02),m=Math.hypot(f,p)||1;return[f/m,p/m]};function s(l){let c=[],u=l.x,f=l.y,p=l.a,m=0,g=l.t0,_=.04,d=n.range(.5,1.3),h=n.range(1.8,3.6),y=n.range(0,6.3),v=n.range(0,6.3),R=n.range(.3,.8)*n.sign()*(l.calm??1),D=n.range(.12,.45)*(l.calm??1),C=n.range(0,6.3),w=l.len/(l.dur||1),H=l.curl?l.len*n.range(.55,.75):1e9,M=n.sign(),T=.95*r,U=!1;for(;m<=l.len;){let Y=o(u,f,l.reach,l.pad);if(Y<0&&(c.length>1||e.inside(u,f,0))&&!(l.main&&u>e.offX)||(l.clock==="scroll"&&(g=Math.max(g,f+(l.lead??0))),l.stopY!=null&&f>l.stopY))break;if(c.push({x:u,y:f,t:g,a:p,s:m}),l.goal){let A=l.goal.x-u,L=l.goal.y-f,I=Math.hypot(A,L);if(I<.05){c.push({x:l.goal.x,y:l.goal.y,t:g+.03,a:p,s:m+I}),U=!0;break}}let W=(R*Math.sin(d*m+y)+D*Math.sin(h*m+v))*_*1.3;if(m>H&&(W+=M*_*(1.4+(m-H)/(l.len-H)*8)),Y<T){let A=a(u,f),L=-A[1],I=A[0];L*Math.cos(p)+I*Math.sin(p)<0&&(L=-L,I=-I);let K=1-Math.max(Y,0)/T,j=Math.atan2(I+A[1]*K*.9,L+A[0]*K*.9);W+=or(j,p)*Math.min(1,.06+K*K*.8)*.55}if(W+=e.steer(u,f,p,m,l),l.goal){let A=Math.hypot(l.goal.x-u,l.goal.y-f);W=W*Math.min(1,A/1.2)+or(Math.atan2(l.goal.y-f,l.goal.x-u),p)*si(.04+.35/(A+.4),0,.6)}if(p+=W,l.clock!=="scroll"){let A=.5+.5*Math.pow(Math.sin(m*1.1+C)*.5+.5,.6);g+=_/(w*A*1.2)}u+=Math.cos(p)*_,f+=Math.sin(p)*_,m+=_}return c.length<4?null:{pts:c,len:m,reached:U}}return{path:s,clear:o}}function xo(n,e,t,i,r,o){let a=Math.hypot(t.x-n.x,t.y-n.y),s=a*.42,l={x:n.x+Math.cos(e)*s,y:n.y+Math.sin(e)*s},c={x:t.x-Math.cos(i)*s,y:t.y-Math.sin(i)*s},u=Math.max(4,Math.ceil(a/r)),f=[];for(let p=1;p<=u;p++){let m=p/u,g=1-m;f.push({x:g*g*g*n.x+3*g*g*m*l.x+3*g*m*m*c.x+m*m*m*t.x,y:g*g*g*n.y+3*g*g*m*l.y+3*g*m*m*c.y+m*m*m*t.y,u:m,...o})}return f}var bp=n=>{let e=0;for(let t=1;t<n.length;t++)e+=Math.hypot(n[t].x-n[t-1].x,n[t].y-n[t-1].y);return e};function Oi(n,e,t){let i=0;for(let r=0;r<n.length;r++)r&&(i+=Math.hypot(n[r].x-n[r-1].x,n[r].y-n[r-1].y)),n[r].t=e+i/t;return n.length?n[n.length-1].t:e}function Qh(n,e,t,i,r,o){let a=(e-(t-1)/2)*i,s=r.range(0,6.3),l=r.range(1.2,2.2);return n.map((c,u)=>{let f=Math.min(1,u/6),p=a*(.55+.45*f)+Math.sin(c.s*l+s)*i*.18;return{x:c.x-Math.sin(c.a)*p,y:c.y+Math.cos(c.a)*p,z:o+e*.0045+Math.sin(c.s*1.3+e*.9)*.012,t:c.t+e*.012,s:c.s}})}function Gs(n){let e=(n.cols-1)*n.sp/2,t=(n.rows-1)*n.sp/2,i=Math.cos(n.rot),r=Math.sin(n.rot),o=n.flipX?-1:1,a=n.flipY?-1:1,s=(c,u)=>{let f=c*o,p=u*a;return{x:n.cx+f*i-p*r,y:n.cy+f*r+p*i}};return{hx:e,hy:t,W:s,dir:c=>{let u=s(Math.cos(c),Math.sin(c)),f=s(0,0);return Math.atan2(u.y-f.y,u.x-f.x)}}}function Os(n,e,t,i,r){let{hx:o,hy:a,W:s}=Gs(n),l=n.r+.02,c=Math.ceil((2*a+r+i)/.08),u=Math.ceil((2*o+r+i)/.08);for(let f=0;f<=c;f++)for(let p=0;p<=u;p++){let m=s(-o-r+p/u*(2*o+r+i),-a-r+f/c*(2*a+r+i));if(e(m.x,m.y,l)<0||!t(m.x,m.y,.02))return!1}return!0}function af(n,e,t){let{hx:i,hy:r,W:o,dir:a}=Gs(n),s=n.r*1.45,l=n.sp/7,c=[],u=[],f=()=>n.sp*e.range(1.4,2.4);for(let p=0;p<n.cols;p++){let m=-i+p*n.sp,g=[],_=f(),d=e.range(0,6.3);for(let h=-r-n.sp*.8;h<=r+_;h+=l){let y=h<=r+n.sp*.5,v=y?1:Math.max(0,1-(h-r-n.sp*.5)/(n.sp*.8)),R=y?0:Math.sin((h-r)*9+d)*n.sp*.12*((h-r)/_),D=o(m+R,h);g.push({x:D.x,y:D.y,z:t.z+s*Math.cos(Math.PI*(h+r)/n.sp+Math.PI*p)*v,w:n.r*(y?1:1-.45*((h-r)/_)),cloth:y})}c.push({i:p,entry:o(m,-r-n.sp*.8),heading:a(Math.PI/2),pts:g})}for(let p=0;p<n.rows;p++){let m=-r+p*n.sp,g=[],_=f(),d=e.range(0,6.3);for(let h=-i-n.sp*.8;h<=i+_;h+=l){let y=h<=i+n.sp*.5,v=y?1:Math.max(0,1-(h-i-n.sp*.5)/(n.sp*.8)),R=y?0:Math.sin((h-i)*9+d)*n.sp*.12*((h-i)/_),D=o(h,m+R);g.push({x:D.x,y:D.y,z:t.z+s*Math.cos(Math.PI*(h+i)/n.sp+Math.PI*(p+1))*v,w:n.r*(y?1:1-.45*((h-i)/_)),cloth:y})}u.push({j:p,entry:o(-i-n.sp*.8,m),heading:a(0),pts:g})}return{warps:c,wefts:u,hx:i,hy:r,W:o,dir:a}}function Ap(n,e){let t=nf(n),{W:i,H:r}=e,o=i<7,a=!o&&i<11,s=si(Math.min(i,r*1.25)/12.5,.58,1.1),l=o?.12:.22+.02*i+.04,c=rf(e.rects),u=(b,fe,J)=>b>J&&b<i-J&&fe>J&&fe<r-J,p=sf(t,{field:c,pad:l,k:s,inside:u,steer:(b,fe,J)=>b<-.2||b>i+.2||fe<-.2||fe>r+.2?or(Math.atan2(r/2-fe,i/2-b),J)*.14:0}),{path:m,clear:g}=p,_=o?.08:.3,d=(b,fe,J)=>g(b,fe,J,_),h=[],y=[],v=[],R=1.7,D=o?.021:.034*s,C=o?.075:.112*s,w=D*1.05,H=[],M=[],T=t.shuffle(ef),U=0,Y=o?7:9,W=o?6:7,A=o?2:4,L=(b,fe,J,oe)=>{let ae=[],Te=(J-1)*C/2,me=(oe-1)*C/2;for(let x=b;x<=fe;x+=.1)for(let F=i*.2;F<=i*.8;F+=.1)if(!(c(F,x)-_<Math.min(Te,me)*.95))for(let te of[!1,!0]){let $={cx:F,cy:x,rot:0,cols:J,rows:oe,sp:C,r:D,flipX:!1,flipY:te};if(!Os($,d,u,C*2.6,C*1.2))continue;let N=Gs($).W(0,-me-.5);if(d(N.x,N.y,.05)<0||!u(N.x,N.y,.05))continue;let pe=-Math.abs(F-i/2)*1.4+Math.min(c(F,x)-_,1)*.4+t.range(0,.05);ae.push({s:$,sc:pe})}ae.sort((x,F)=>F.sc-x.sc);let S=[];for(let x of ae){if(S.length>=4)break;S.every(F=>Math.hypot(F.cx-x.s.cx,F.cy-x.s.cy)>1)&&S.push(x.s)}return S},I=(b,fe,J,oe)=>{for(let ae=0;ae<4;ae++){let Te={x:b,y:si(fe.y+t.range(-.8,.8)*(1+ae*.6),.1,r-.1),a:b<0?t.range(-.3,.3):Math.PI+t.range(-.3,.3),t0:J,len:Math.hypot(fe.x-b,1)*2.2+1.5,dur:t.range(2.8,3.4),reach:w*Math.max(oe.cols,oe.rows)*.5+.04,goal:fe,calm:.75,pad:_},me=m(Te);if(me&&me.reached)return me}return null},K=(b,fe,J,oe,ae)=>{let Te=h.length,me=M.length,S=U,{hx:x,hy:F}=fe,te=J.len,$=oe.len,N=te+$+(x+F)*2,pe=t.shuffle(rr),se=0;for(let Re of fe.warps){let Ue=Qh(oe.pts,Re.i,b.cols,w,t,ae-.05),be=Ue[Ue.length-1],ye=oe.pts[oe.pts.length-1].a,Me=xo(be,ye,Re.entry,Re.heading,.03,{z:ae-.02});Me.forEach(ie=>{ie.z=be.z+(ae-be.z)*ie.u});let Ce=Oi(Me,be.t,1.6),Ve=Oi(Re.pts,Ce+.02,1.2);se=Math.max(se,Ve);let je=[...Ue.map(ie=>({...ie,w:D*(.66+.34*_o($*.6,$,ie.s)),route:.5+.5*($-ie.s)/$})),...Me.map(ie=>({...ie,w:D,route:.5})),...Re.pts.map(ie=>({...ie,route:ie.cloth?.5:-1}))],Pe=Qi(t,kt(pe[Re.i%pe.length]),.06);h.push({pts:je,col:[Pe,Ai(Pe,[1,1,1],.08)],ply:t.pick([1,1,1.3]),routeLen:N})}let ve=t.shuffle(nr),we=b.rows-b.reserve,Le=se+.25;for(let Re of fe.wefts){let Ue=Re.j>=we,be=Qh(J.pts,Re.j,b.rows,w,t,ae-.04),ye=be[be.length-1],Me=J.pts[J.pts.length-1].a,Ce=xo(ye,Me,Re.entry,Re.heading,.03,{});Ce.forEach(je=>{je.z=ye.z+(ae-ye.z)*je.u});let Ve;if(Ue){let je=[...be.map(ce=>({...ce,w:D*.92*(.66+.34*_o(te*.6,te,ce.s))})),...Ce.map(ce=>({...ce,w:D*.92})),...Re.pts.map(ce=>({...ce,w:ce.w*.92}))],Pe=te+bp(Ce),ie=0;je.forEach((ce,De)=>{De&&(ie+=Math.hypot(ce.x-je[De-1].x,ce.y-je[De-1].y)),ce.t=ie<=Pe?.5*R*ie/Pe:.5*R+(ie-Pe)/2.6,ce.route=ie<=Pe?.5*ie/Pe:-1,ce.z+=.012});let P=1e3+M.length+H.length*50,_e=kt(T[U++%T.length]);h.push({pts:je,col:[_e,Ai(_e,[1,1,1],.12)],ply:1.3,routeLen:N,fid:P}),M.push({fid:P,swatch:H.length,row:Re.j,birth:0})}else{let je=Oi(Ce,Math.max(ye.t,Le),2.2);Oi(Re.pts,je,2.4),Le+=o?.42:.36,Ve=[...be.map(ie=>({...ie,w:D*(.66+.34*_o(te*.6,te,ie.s)),route:.5*ie.s/te})),...Ce.map(ie=>({...ie,w:D,route:.5})),...Re.pts.map(ie=>({...ie,route:ie.cloth?.5:-1}))];let Pe=Qi(t,kt(ve[Re.j%ve.length]),.06);h.push({pts:Ve,col:[Pe,Ai(Pe,[1,1,1],.08)],ply:t.pick([1,1,1.3]),routeLen:N})}}let ne=o?.03:.1;for(let Re of h.slice(Te))for(let Ue of Re.pts)if(c(Ue.x,Ue.y)-ne-Ue.w*1.3<0)return h.length=Te,M.length=me,U=S,!1;return y.push({x:b.cx,y:b.cy,z:-.6,rx:(x+C*3)*1.5,ry:(F+C*3)*1.5,col:kt("#7fe0d6"),max:.2,birth:se,phase:t.range(0,6.3)}),H.push({x:b.cx,y:b.cy,hx:x,hy:F,cols:b.cols,rows:b.rows,reserve:b.reserve,done:Le}),!0};for(let[b,fe]of[[.2,r*.42],[r*.58,r-.2]]){let J=null,oe=0;for(let ae of[1,.78,.62]){let Te=Math.max(5,Math.round(Y*ae)),me=Math.max(4,Math.round(W*ae));for(let S of L(b,fe,Te,me)){S.reserve=Math.min(A,me-3),S.rot=t.range(-.07,.07),Os(S,d,u,C*2.6,C*1.2)||(S.rot=0),oe=.3+H.length*.02;let x=af(S,t,{z:oe}),F=x.W(0,-x.hy-.5),te=x.W(-x.hx-.5,0),$=I(i+.15,F,t.range(.4,.7),S);if(!$)continue;let N=I(-.15,te,t.range(.15,.4),S);if(N&&K(S,x,N,$,oe)){J=S;break}}if(J)break}}M.sort((b,fe)=>b.row-fe.row||b.swatch-fe.swatch);let j=[],q=.4;for(let b=0;b<=i;b+=q)j.push({x:b,y:-.12,nx:0,ny:1}),j.push({x:b,y:r+.12,nx:0,ny:-1});for(let b=q;b<r;b+=q)j.push({x:-.12,y:b,nx:1,ny:0}),j.push({x:i+.12,y:b,nx:-1,ny:0});for(let b of j)b.room=Math.max(0,c(b.x+b.nx*.9,b.y+b.ny*.9)-l);let ee=o?2:a?3:t.int(4,5),X=[],Q=j.filter(b=>b.room>.3),G=0;for(;X.length<ee&&Q.length&&G++<300;){let b=Q.reduce((me,S)=>me+Math.pow(S.room,1.3),0),fe=t.next()*b,J=Q[0];for(let me of Q)if(fe-=Math.pow(me.room,1.3),fe<=0){J=me;break}if(Q=Q.filter(me=>me!==J),X.some(me=>Math.hypot(me.x-J.x,me.y-J.y)<Math.max(1.6,(i+r)/7)))continue;let oe=Math.atan2(J.ny,J.nx),ae=oe+t.sign()*Math.PI/2,Te=t.range(.3,.7);X.push({x:J.x,y:J.y,a:Math.atan2(Math.sin(oe)*(1-Te)+Math.sin(ae)*Te,Math.cos(oe)*(1-Te)+Math.cos(ae)*Te)})}let Z=Math.min(i,r);for(let b of X){let fe=b.x<i/2,J=t.chance(.45),oe=J?D*.7:D*t.range(.75,.95),ae=m({x:b.x,y:b.y,a:b.a,t0:t.range(.2,1.4),len:t.range(.45,.8)*Z+t.range(.5,1.2),dur:t.range(2.6,3.4),reach:J?oe*2.2:oe+.02,curl:t.chance(.6),calm:1});ae&&vo(ae.pts,J?2:1,oe,fe?nr:rr,t,t.range(0,.2)).forEach(Te=>h.push(Te))}if(o)for(let b of[0,1]){let fe=Math.max(2,Math.round(r/3.4));for(let J=0;J<fe;J++){let oe=J%2===0,ae=oe?r*J/fe-t.range(0,.3):r*(J+1)/fe+t.range(0,.3),Te=m({x:b?i-t.range(.03,.07):t.range(.03,.07),y:si(ae,-.2,r+.2),a:(oe?Math.PI/2:-Math.PI/2)+(b?1:-1)*(oe?-1:1)*t.range(.03,.1),t0:t.range(.2,2),len:r/fe*t.range(1.1,1.4),dur:t.range(3,4.2),reach:.03,calm:.5});Te&&vo(Te.pts,2,.013,b?rr:nr,t,.05).forEach(me=>h.push(me))}}let re=o?18:a?28:40;for(let b=0,fe=0;b<re&&fe<re*10;fe++){let J,oe;if(H.length&&t.chance(.55)){let Te=t.pick(H),me=t.range(0,6.3),S=(Te.hx+Te.hy)*t.range(.9,2);J=Te.x+Math.cos(me)*S,oe=Te.y+Math.sin(me)*S}else{let Te=t.pick(h),me=Te.pts[Math.floor(t.next()*Te.pts.length)];J=me.x+t.range(-.3,.3),oe=me.y+t.range(-.3,.3)}let ae=t.range(1.6,4.2);!u(J,oe,.05)||g(J,oe,ae/200+.06)<0||(v.push({x:J,y:oe,z:t.range(.1,.8),birth:t.range(6,11),col:kt(t.pick(tf)),size:ae,phase:t.range(0,6.3)}),b++)}let ue={left:b=>b.x<i*.2,right:b=>b.x>i*.8,top:b=>b.y<r*.2,bottom:b=>b.y>r*.8},le={};for(let[b,fe]of Object.entries(ue))le[b]=h.reduce((J,oe)=>J+oe.pts.filter(fe).length,0);let Ee=Object.entries(ue).filter(([b])=>j.some(fe=>fe.room>.6&&ue[b](fe))),he=Ee.reduce((b,[fe])=>b+le[fe],0)/Math.max(1,Ee.length),ge=Ee.filter(([b])=>le[b]<he*.15).map(([b])=>b),xe=H.length>=(o||a?1:2)&&ge.length===0;return{threads:h,halos:y,dust:v,ok:xe,weak:ge,pad:l,field:c,k:s,swatches:H,pulseRows:M,DP:R}}function vo(n,e,t,i,r,o,a={}){let s=[];if(e===1){let u=Qi(r,kt(r.pick(i)),.06);return s.push({pts:n.map((f,p)=>({x:f.x,y:f.y,z:o,t:f.t,w:t*(a.taper?1-.5*(p/n.length):1),route:a.route?f.s+(a.arc0||0):void 0})),col:[u,Ai(u,[1,1,1],.1)],ply:1,routeLen:1}),s}let l=t*(a.pitch||10),c=a.cols||[r.pick(i),r.pick(i)];for(let u=0;u<e;u++){let f=Qi(r,kt(c[u%c.length]),.05),p=n.map(m=>{let g=(m.s+(a.arc0||0))/l*Math.PI*2+u*Math.PI*2/e,_=Math.cos(g)*t*.95;return{x:m.x-Math.sin(m.a)*_,y:m.y+Math.cos(m.a)*_,z:o+Math.sin(g)*t*1.1,t:m.t,w:t,route:a.route?m.s+(a.arc0||0):void 0}});s.push({pts:p,col:[f,Ai(f,[1,1,1],.08)],ply:1.2,routeLen:1})}return s}function wp(n,e){let t=nf(n),{W:i,strip:r,phone:o}=e,a=i-r,s=o?.5:si(i/14.4,.72,1)*.92,l=o?.035:.2,c=e.rects.filter(X=>X.x1>a-1),u=c.concat([{x0:-1e3,y0:-1e3,x1:a,y1:1e5},{x0:-1e3,y0:-1e3,x1:1e3,y1:e.top},{x0:-1e3,y0:e.bottom,x1:1e3,y1:1e5}]),f=rf(u),p=.2,m=[];for(let X=a+.05;X<=i+.5;X+=.08)m.push(X);let g=[];for(let X=e.top;X<=e.bottom;X+=p)g.push(m.map(Q=>Math.min(f(Q,X),(i-Q)*1.1+.04)));let _=4,d=g.map((X,Q)=>{let G=i+.45,Z=-1;for(let ue=0;ue<m.length&&!(m[ue]>i-.02);ue++){let le=1e9;for(let Ee=0;Ee<=_&&Q+Ee<g.length;Ee++)le=Math.min(le,g[Q+Ee][ue]);le>Z&&(Z=le,G=m[ue])}let re=Z-l;return{x:re>(o?.03:.1*s+.05)?G:i+(o?.3:.45),room:re}}),h=X=>d[si(Math.round((X-e.top)/p),0,d.length-1)],y=t.range(0,6.3),v=(X,Q,G,Z,re)=>{if(re.main){let ue=h(Q+.35),le=ue.x>i?0:Math.sin(Q*.8+y)*Math.min(Math.max(ue.room-.1,0)*.5,.7);return or(Math.atan2(1,(ue.x+le-X)*1.7),G)*.16}return X>i+.25?or(Math.PI,G)*.1:0},R=(X,Q,G)=>X>a+G&&X<i-G,D=sf(t,{field:f,pad:l,k:s,inside:R,steer:v,offX:i+.08}),{path:C,clear:w}=D,H=[],M=[],T=[],U=o?.017:.028*s,Y=t.pick(nr),W=t.pick(rr),A=null;if(e.finale){let X=e.finale.y,Q=o?.07:.1*s,G=o?.019:.028*s,Z=o?[[5,5],[4,4]]:[[8,8],[7,7],[6,6],[5,5]];for(let[re,ue]of Z){let le=(re-1)*Q/2,Ee=(ue-1)*Q/2,he=null,ge=-1e9;for(let xe=X-.9;xe<=X+.9;xe+=.06)for(let b=a+le+.1;b<=i+(o?le*.6:-le-Q*3);b+=.05){let fe={cx:b,cy:xe,rot:t.range(-.05,.05),cols:re,rows:ue,sp:Q,r:G,flipX:!0,flipY:!1};if(!Os(fe,w,o?oe=>oe>a:R,Q*2.2,Q))continue;let J=-Math.abs(xe-X)*.9-Math.abs(b-(o?i:i-r*.45))*.2;J>ge&&(ge=J,he=fe)}if(he){A=he;break}}}let L=e.top+.05,I=0,K=0,j=A?A.cy-(A.rows-1)*A.sp/2-.45:null,q=A?j:e.finale?e.finale.y:e.bottom,ee=null;for(;L<q-.4&&I++<30;){let X=I===1?Math.min(h(L).x,i-.1):i+.3,Q=C({x:X,y:L,a:Math.PI/2+t.range(-.2,.2),t0:L,clock:"scroll",lead:0,len:(e.bottom-L)*1.35+1,reach:U*2.2+(o?0:.02),calm:.6,main:!0,stopY:q});if(Q){vo(Q.pts,2,U,null,t,.1,{cols:[Y,W],route:!0,arc0:K,pitch:9}).forEach(Z=>H.push(Z));for(let Z=t.int(20,50);Z<Q.pts.length-12;Z+=t.int(70,120)){let re=Q.pts[Z];if(w(re.x,re.y,.25*s)<0&&!o)continue;let ue=C({x:re.x,y:re.y,a:re.a+t.sign()*t.range(.5,.9),t0:re.t+.2,clock:"scroll",lead:.25,len:t.range(.6,1)*(o?.5:1),reach:.015,curl:!0,calm:.8});ue&&ue.pts.length>12&&vo(ue.pts,1,U*.8,t.chance(.5)?[Y]:[W],t,.08,{taper:!0}).forEach(le=>H.push(le))}K+=Q.len,ee=Q}let G=Q?Q.pts[Q.pts.length-1].y:L;for(L=Math.max(G,L)+.3;L<e.bottom&&f(i+.3,L)-l-.2<0;)L+=.1}if(A){let X=af(A,t,{z:.3}),{hx:Q,hy:G}=X,Z=e.finale.y,re=ee?ee.pts[ee.pts.length-1]:{x:A.cx,y:A.cy-G-.45,a:Math.PI/2,t:Z-2.6},ue=Math.min(re.t,Z-2.4),le=ue;for(let xe of X.warps){let b=xo(re,re.a??Math.PI/2,xe.entry,xe.heading,.03,{});b.forEach(oe=>{oe.z=.1+.2*oe.u,oe.w=A.r*(.75+.25*oe.u)});let fe=Oi(b,ue,1.8);le=Math.max(le,Oi(xe.pts,fe,1.8));let J=Qi(t,kt(xe.i%2?W:t.pick(rr)),.05);H.push({pts:[...b,...xe.pts],col:[J,Ai(J,[1,1,1],.08)],ply:1.2,routeLen:1})}let Ee=t.shuffle(nr),he=t.shuffle(ef),ge=le+.05;for(let xe of X.wefts){let b={x:i+.25,y:xe.entry.y+t.range(-.25,.25)},fe=xo(b,Math.PI,xe.entry,xe.heading,.03,{});fe.forEach(Te=>{Te.z=.3,Te.w=A.r});let J=Oi(fe,ge,3);Oi(xe.pts,J,3),ge+=.12;let oe=xe.j===Math.floor(A.rows/2)||xe.j===A.rows-2,ae=Qi(t,kt(oe?he[xe.j%he.length]:Ee[xe.j%Ee.length]),.05);H.push({pts:[...fe,...xe.pts],col:[ae,Ai(ae,[1,1,1],.08)],ply:1.2,routeLen:1})}M.push({x:A.cx,y:A.cy,z:-.6,rx:(Q+A.sp*3)*1.6,ry:(G+A.sp*3)*1.6,col:kt("#7fe0d6"),max:.22,birth:le,phase:t.range(0,6.3)});for(let xe=0;xe<8;xe++){let b=t.range(0,6.3),fe=(Q+G)*t.range(.9,1.8),J=A.cx+Math.cos(b)*fe,oe=A.cy+Math.sin(b)*fe,ae=t.range(1.6,3.6);J<i-.03&&w(J,oe,ae/200+.06)>=0&&T.push({x:J,y:oe,z:.5,birth:le+.5,col:kt(t.pick(tf)),size:ae,phase:t.range(0,6.3)})}}else if(ee&&e.finale){let X=ee.pts[ee.pts.length-1];for(let Q=0;Q<7;Q++){let G=Math.PI/2+(Q-3)*.09,Z=t.range(.18,.3)*(o?.7:1),re=[];for(let le=0;le<=10;le++){let Ee=le/10;re.push({x:X.x+Math.cos(G)*Z*Ee+Math.sin(Ee*6+Q)*.008,y:X.y+Math.sin(G)*Z*Ee,z:.12,t:X.t+.1+Ee*.3,w:U*.8*(1-Ee*.4)})}let ue=Qi(t,kt(Q%2?W:Y),.05);re.every(le=>w(le.x,le.y,.005)>=0||le.x>i-.02)&&H.push({pts:re,col:[ue,Ai(ue,[1,1,1],.1)],ply:1,routeLen:1})}}return{threads:H,halos:M,dust:T,pad:l,field:f,k:s,obstacles:c,xMin:a,finale:A?{x:A.cx,y:A.cy,R:Math.max(A.cols,A.rows)*A.sp*.6}:null}}function lf({alpha:n}){let e=new uo({antialias:!0,alpha:n,premultipliedAlpha:!0,powerPreference:"high-performance"});e.outputColorSpace=Mt,n?e.setClearColor(0,0):e.setClearColor(Kh,1),e.autoClear=!1;let t=new tr,i=new ji(0,1,0,-1,-10,10);i.position.z=5;let r={uT:{value:0},uTime:{value:0},uGlow:{value:1},uPar:{value:[0,0]},uPx:{value:100},uShadowOff:{value:[.035,-.05]},uRouteHead:{value:-10},uRouteMode:{value:0},uRouteSpacing:{value:7},uFocus:{value:[0,0,0]},uFocusR:{value:3}},a={yarn:((U,Y,W={})=>({main:new ct({uniforms:r,vertexShader:U,fragmentShader:Y,...W}),shadow:new ct({uniforms:r,vertexShader:U,fragmentShader:Y,defines:{SHADOW:""},...W,transparent:!0})}))(pp,mp,{side:Pt}),halo:{main:new ct({uniforms:r,vertexShader:gp,fragmentShader:_p,transparent:!0,depthWrite:!1,depthTest:!1})},dust:{main:new ct({uniforms:r,vertexShader:xp,fragmentShader:vp,transparent:!0,depthWrite:!1})}},s={quad:Ep()},l=new yt(4,4),c=new yt(4,4),u=new lt;u.setAttribute("position",new Ye(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3));let f=new ji(-1,1,1,-1,0,1),p={tex:{value:null},dir:{value:[1,0]},res:{value:[4,4]}},m={tex:{value:null},res:{value:[4,4]},col:{value:kt("#0d3b47")},strength:{value:.3},rects:{value:new Float32Array(128)},nr:{value:0},padPx:{value:16}},g=new ct({uniforms:p,vertexShader:Jh,fragmentShader:Mp,depthTest:!1,depthWrite:!1}),_=new ct({uniforms:m,vertexShader:Jh,fragmentShader:Sp,transparent:!0,depthTest:!1,depthWrite:!1}),d=new St(u,g);d.frustumCulled=!1;let h=new tr;h.add(d);let y=[],v=null,R=null,D=[];function C(U){for(let L of y)t.remove(L),L.geometry.dispose();y=[],v=null;let Y=(L,I,K,j)=>{let q=new(j||St)(L,I.main);q.userData.shadow=I.shadow||null,q.userData.mainMat=I.main,q.frustumCulled=!1,q.renderOrder=K,t.add(q),y.push(q)},W=U.halos;W.length&&Y(yp(s.quad,W.length,{iPos:[W.flatMap(L=>[L.x,-L.y,L.z]),3],iR:[W.flatMap(L=>[L.rx,L.ry]),2],iCol:[W.flatMap(L=>L.col),3],iMax:[W.map(L=>L.max),1],iBirth:[W.map(L=>L.birth),1],iPhase:[W.map(L=>L.phase),1]}),a.halo,0),U.threads.length&&(v=Tp(U.threads),Y(v,a.yarn,1),R=v.attributes.aBirth.array.slice(),D=v.userData.ranges);let A=U.dust;if(A.length){let L=new lt;L.setAttribute("position",new Ye(new Float32Array(A.flatMap(I=>[I.x,-I.y,I.z])),3)),L.setAttribute("aBirth",new Ye(new Float32Array(A.map(I=>I.birth)),1)),L.setAttribute("aCol",new Ye(new Float32Array(A.flatMap(I=>I.col)),3)),L.setAttribute("aSize",new Ye(new Float32Array(A.map(I=>I.size/100)),1)),L.setAttribute("aPhase",new Ye(new Float32Array(A.map(I=>I.phase)),1)),Y(L,a.dust,5,go)}}function w(U,Y,W){e.setPixelRatio(W),e.setSize(Math.round(U),Math.round(Y),!1);let A=e.domElement.width,L=e.domElement.height,I=Math.max(4,Math.round(A/2)),K=Math.max(4,Math.round(L/2));l.setSize(I,K),c.setSize(I,K),r.uPx.value=100*W,m.res.value=[A,L],m.padPx.value=14*W}function H(U){for(let W of y)W.userData.shadow?W.material=W.userData.shadow:W.visible=!1;e.setRenderTarget(l),e.setClearColor(0,0),e.clear(),e.render(t,i);for(let W of y)W.material=W.userData.mainMat,W.visible=!0;d.material=g,p.res.value=[l.width,l.height],p.tex.value=l.texture,p.dir.value=[1,0],e.setRenderTarget(c),e.clear(),e.render(h,f),p.tex.value=c.texture,p.dir.value=[0,1],e.setRenderTarget(l),e.clear(),e.render(h,f),e.setRenderTarget(null),n?e.setClearColor(0,0):e.setClearColor(Kh,1),e.clear();let Y=Math.min(32,U.length);for(let W=0;W<Y;W++)m.rects.value.set(U[W],W*4);m.nr.value=Y,m.tex.value=l.texture,d.material=_,e.render(h,f),e.render(t,i)}function M(){for(let U of y)t.remove(U),U.geometry.dispose();for(let U of Object.values(s))U.dispose();for(let U of Object.values(a))for(let Y of Object.values(U))Y.dispose();l.dispose(),c.dispose(),u.dispose(),g.dispose(),_.dispose(),e.dispose()}function T(U,Y){if(!v)return;let W=v.attributes.aBirth,A=!1;for(let L of D)if(L.fid===U){for(let I=L.start;I<L.start+L.count;I++)W.array[I]=R[I]+Y;A=!0}A&&(W.needsUpdate=!0)}return{renderer:e,scene:t,camera:i,U:r,setComposition:C,setSize:w,render:H,dispose:M,shiftThread:T,info:()=>({...e.info.memory})}}function Rp(n,e){n.classList.add("epx-threads-measuring");let t=n.getBoundingClientRect(),i=[],r=o=>{o.width>1&&o.height>1&&i.push({x0:(o.left-t.left)/100,y0:(o.top-t.top)/100,x1:(o.right-t.left)/100,y1:(o.bottom-t.top)/100})};for(let o of e)if(o){if(/^(H\d|P|SPAN)$/.test(o.tagName)&&o.textContent.trim()){let a=[];for(let s of of(o,o)){if(s.width<1||s.height<1)continue;let l=a.find(c=>Math.abs(c.top-s.top)<6||s.top<c.bottom-4&&s.bottom>c.top+4);l?(l.left=Math.min(l.left,s.left),l.right=Math.max(l.right,s.right),l.top=Math.min(l.top,s.top),l.bottom=Math.max(l.bottom,s.bottom)):a.push({left:s.left,right:s.right,top:s.top,bottom:s.bottom})}if(a.length){for(let s of a)r({left:s.left,right:s.right,top:s.top,bottom:s.bottom,width:s.right-s.left,height:s.bottom-s.top});continue}}r(o.getBoundingClientRect())}return n.classList.remove("epx-threads-measuring"),{W:t.width/100,H:t.height/100,rects:i}}function Cp(n,e={}){let t=(e.copy||[]).map(N=>typeof N=="string"?n.querySelector(N):N).filter(Boolean),i=new URLSearchParams(location.search),r=matchMedia("(prefers-reduced-motion: reduce)").matches,o=i.has("tt")?parseFloat(i.get("tt")):null,a=i.has("threads")?parseInt(i.get("threads"),10)>>>0:e.seed??Math.random()*2**31>>>0,s=document.createElement("div");s.className="epx-threads",s.setAttribute("aria-hidden","true"),n.prepend(s);let l;try{l=lf({alpha:!1})}catch{return n.classList.add("epx-threads-fallback"),s.remove(),{seed:a,failed:!0}}let{renderer:c,camera:u,U:f}=l;s.appendChild(c.domElement);let m=(navigator.hardwareConcurrency||8)<=4||(navigator.deviceMemory||8)<=4?1.5:2,g=null,_=null,d=a,h=0,y=0,v=-1,R=0;function D(){g=Rp(n,t);let{W:N,H:pe}=g,se=0;d=a;do{if(_=Ap(d,g),_.ok)break;d=d+2654435761>>>0}while(++se<6);u.left=0,u.right=N,u.top=0,u.bottom=-pe,u.updateProjectionMatrix(),l.setComposition(_);let ve=Math.min(y,_.pulseRows.length),we=Math.max(0,..._.swatches.map(Le=>Le.done));_.pulseRows.forEach((Le,ne)=>l.shiftThread(Le.fid,r||o!=null?we+.3*ne:ne<ve?0:1e4)),h=ve,C()}function C(){l.setSize(g.W*100,g.H*100,Math.min(window.devicePixelRatio||1,m)),c.domElement.style.width="100%",c.domElement.style.height="100%"}function w(){let N=c.getPixelRatio(),pe=c.domElement.height;return g.rects.map(se=>[se.x0*100*N,pe-se.y1*100*N,se.x1*100*N,pe-se.y0*100*N])}let H=13,M=o??(r?H+2:0),T=0,U=0,Y=0,W=0,A=!0,L=!1,I=[0,0],K=[0,0],j=0,q=0;function ee(){if(r||o!=null||M<9.5||!_||!_.swatches.length)return;let N=performance.now();N-R<1e3||(R=N,v=M,h<_.pulseRows.length&&(l.shiftThread(_.pulseRows[h++].fid,M),y=h))}let X=n.querySelector(".epx-reel"),Q=null,G=0;X?(Q=new MutationObserver(()=>{X.style.transition!=="none"&&ee()}),Q.observe(X,{attributes:!0,attributeFilter:["style"]})):G=setInterval(ee,2200);let Z=0,re=0,ue=[0,0],le=(e.focus||[]).map(N=>n.querySelector(N)).filter(Boolean),Ee=N=>{let pe=n.getBoundingClientRect(),se=N.currentTarget.getBoundingClientRect();ue=[(se.left+se.width/2-pe.left)/100,-(se.top+se.height/2-pe.top)/100],re=1,!L&&!r&&b()},he=()=>{re=0};for(let N of le)N.addEventListener("pointerenter",Ee),N.addEventListener("focus",Ee),N.addEventListener("pointerleave",he),N.addEventListener("blur",he);function ge(){let N=_.DP;f.uRouteHead.value=v>=0&&M-v<N*1.4?(M-v)/N:-10,f.uFocus.value=[ue[0],ue[1],Z],f.uFocusR.value=g.W<7?2.4:4.2,f.uT.value=Math.max(M,0),f.uTime.value=T,f.uGlow.value=_o(6,11,Math.max(M,0)),f.uPar.value=I,l.render(w())}function xe(N){U=requestAnimationFrame(xe);let pe=Math.min((N-(Y||N))/1e3,.05);Y=N;let se=M>H;if(se&&N-W<32)return;let ve=se?(N-(W||N))/1e3:pe;W=N,o==null&&(M+=Math.min(ve,.05)),T+=Math.min(ve,.05),I=[I[0]+(K[0]-I[0])*.05,I[1]+(K[1]-I[1])*.05],Z+=(re-Z)*.12,ge(),!se&&M>.5&&q<120&&(q++,pe>.034&&j++,q===120&&j>60&&m>1&&(m=1,C()))}function b(){L||r||o!=null||(L=!0,Y=0,W=0,U=requestAnimationFrame(xe))}function fe(){L=!1,cancelAnimationFrame(U)}let J=new IntersectionObserver(N=>{A=N[0].isIntersecting,A&&!document.hidden?b():fe()},{rootMargin:"100px"});J.observe(n);let oe=()=>{document.hidden?fe():A&&b()};document.addEventListener("visibilitychange",oe);let ae=matchMedia("(pointer: fine)").matches,Te=N=>{let pe=n.getBoundingClientRect();K=[((N.clientX-pe.left)/pe.width-.5)*-.04,((N.clientY-pe.top)/pe.height-.5)*.04]};ae&&!r&&n.addEventListener("pointermove",Te,{passive:!0});let me=0,S=0,x=0,F=new ResizeObserver(()=>{let N=n.getBoundingClientRect();Math.abs(N.width-me)<2&&Math.abs(N.height-S)<2||(clearTimeout(x),x=setTimeout(()=>{me=N.width,S=N.height,D(),ge()},me?160:0))}),te={get seed(){return d},regrow(N){return a=N!=null?N>>>0:Math.random()*2**31>>>0,y=0,D(),M=r?H+2:0,ge(),b(),d},setTime(N){M=N,ge()},pulse(){return R=0,ee(),{next:h,rows:_.pulseRows.length}},probe(N){let pe=c.getContext(),se=c.getPixelRatio(),ve=c.domElement.height,we={};for(let Le of N){M=Le,ge();let ne=0;for(let Re of g.rects){let Ue=Math.floor(Re.x0*100*se),be=Math.floor(Re.y0*100*se),ye=Math.ceil((Re.x1-Re.x0)*100*se),Me=Math.ceil((Re.y1-Re.y0)*100*se),Ce=new Uint8Array(ye*Me*4);pe.readPixels(Ue,ve-be-Me,ye,Me,pe.RGBA,pe.UNSIGNED_BYTE,Ce);for(let Ve=0;Ve<Ce.length;Ve+=4)(Math.abs(Ce[Ve]-244)>2||Math.abs(Ce[Ve+1]-251)>2||Math.abs(Ce[Ve+2]-250)>2)&&ne++}we[Le]=ne}return we},info(){return{swatches:_.swatches.length,swatchAt:_.swatches.map(N=>[Math.round(N.x*100),Math.round(N.y*100),N.cols+"x"+N.rows]),pulseRows:_.pulseRows.length,seed:d,threads:_.threads.length,motes:_.dust.length,ok:_.ok,weak:_.weak,gpu:l.info(),size:[g.W*100,g.H*100],pad:Math.round(_.pad*100)}},destroy(){Q&&Q.disconnect(),clearInterval(G),fe(),J.disconnect(),F.disconnect(),document.removeEventListener("visibilitychange",oe),n.removeEventListener("pointermove",Te),l.dispose(),s.remove()}};D();let $=n.getBoundingClientRect();return me=$.width,S=$.height,F.observe(n),ge(),b(),i.has("threads")&&console.info("[epx-threads] seed",d,te.info()),te}function Lp(n,e,t){let i=document.documentElement;i.classList.add("epx-threads-measuring");let r=i.clientWidth,o=scrollX,a=scrollY,s=[],l=g=>{g.width>.5&&g.height>.5&&g.right>r*.35&&s.push({x0:(g.left+o)/100,y0:(g.top+a)/100,x1:(g.right+o)/100,y1:(g.bottom+a)/100})};for(let g of of(document.body,null))l(g);document.querySelectorAll('img,svg,video,canvas,iframe,button,input,select,textarea,.e-button,[class*="e-button"]').forEach(g=>{g.closest(".epx-threadside,.epx-threads")||l(g.getBoundingClientRect())}),(n?n.parentElement:document.body).querySelectorAll("*").forEach(g=>{if(g.closest(".epx-threadside,.epx-threads"))return;let _=g.getBoundingClientRect();if(_.width<2||_.height<1||_.width>r*.9||_.right<r*.35)return;let d=getComputedStyle(g),h=d.backgroundColor!=="rgba(0, 0, 0, 0)"&&d.backgroundColor!=="transparent",y=["Top","Right","Bottom","Left"].some(v=>parseFloat(d["border"+v+"Width"])>0&&d["border"+v+"Style"]!=="none");(h||y)&&l(_)});let u=t&&t.getBoundingClientRect(),f=u&&u.width?{x:(u.left+u.width/2+o)/100,y:(u.top+u.height/2+a)/100}:null,p=n?(n.getBoundingClientRect().bottom+a)/100:0,m=e?(e.getBoundingClientRect().top+a)/100:i.scrollHeight/100;return i.classList.remove("epx-threads-measuring"),{W:r/100,rects:s,top:p,bottom:m,docH:i.scrollHeight/100,finale:f}}function Pp(n={}){let e=new URLSearchParams(location.search),t=matchMedia("(prefers-reduced-motion: reduce)").matches,i=e.has("cord")?parseInt(e.get("cord"),10)>>>0:Math.random()*2**31>>>0,r=n.after?document.querySelector(n.after):null,o=n.before?document.querySelector(n.before):document.querySelector(".elementor-location-footer, footer"),a=n.finale?document.querySelector(n.finale):null,s=document.createElement("div");s.className="epx-threadside",s.setAttribute("aria-hidden","true"),document.body.appendChild(s);let l;try{l=lf({alpha:!0})}catch{return s.remove(),{failed:!0}}let{renderer:c,camera:u,U:f}=l;s.appendChild(c.domElement);let p=(navigator.hardwareConcurrency||8)<=4?1.5:2,m=null,g=null,_=0,d=0,h=0,y=0,v=0,R=0,D=0;function C(){s.style.height="0px",s.style.top="0px",m=Lp(r,o,a),y=Math.round(m.docH*100);let he=m.W*100;m.phone=he<1100,_=m.phone?96:Math.round(si(he*.3,160,460)),m.strip=_/100,g=wp(i,m),l.setComposition(g),h=Math.min(Math.round(innerHeight*2),y),s.style.width=_+"px",s.style.height=h+"px",l.setSize(_,h,Math.min(window.devicePixelRatio||1,p)),c.domElement.style.width="100%",c.domElement.style.height="100%",H(!0)}let w=he=>Math.max(0,Math.min(Math.round(he-innerHeight*.5),y-h));function H(he){let ge=innerHeight;if(he||scrollY<d||scrollY+ge>d+h){let xe=w(scrollY);return!he&&xe===d?!1:(d=xe,s.style.top=d+"px",!0)}return!1}function M(){let he=c.getPixelRatio(),ge=c.domElement.height,xe=m.W-m.strip,b=[];for(let fe of g.obstacles)fe.y1*100<d-40||fe.y0*100>d+h+40||b.push([(fe.x0-xe)*100*he,ge-(fe.y1*100-d)*he,(fe.x1-xe)*100*he,ge-(fe.y0*100-d)*he]);return b}function T(){u.left=m.W-m.strip,u.right=m.W,u.top=-d/100,u.bottom=-(d+h)/100,u.updateProjectionMatrix(),f.uT.value=v,f.uTime.value=D,f.uGlow.value=1,f.uRouteMode.value=1,f.uRouteSpacing.value=m.phone?5:7,f.uFocus.value=g.finale?[g.finale.x,-g.finale.y,Y]:[0,0,0],f.uFocusR.value=g.finale?g.finale.R*2.4:1,l.render(M())}let U=()=>(scrollY+innerHeight*.82)/100,Y=0,W=0;if(a){let he=()=>{W=1},ge=()=>{W=0};a.addEventListener("pointerenter",he),a.addEventListener("focus",he),a.addEventListener("pointerleave",ge),a.addEventListener("blur",ge)}let A=0,L=0,I=0,K=!1;function j(he){A=requestAnimationFrame(j);let ge=Math.min((he-(L||he))/1e3,.05);L=he;let xe=H(!1);R=Math.max(R,U());let b=v<R-.01||Math.abs(W-Y)>.01;Y+=(W-Y)*.12,!(!b&&!xe&&he-I<40)&&(b&&(v+=Math.min(R-v,Math.max(.02,(R-v)*Math.min(1,ge*2.2)))),D+=Math.min((he-(I||he))/1e3,.05),I=he,T())}function q(){K||(K=!0,L=0,A=requestAnimationFrame(j))}function ee(){K=!1,cancelAnimationFrame(A)}let X=()=>{document.hidden?ee():t||q()};document.addEventListener("visibilitychange",X);let Q=()=>{H(!1)&&T()},G=0,Z=innerWidth,re=document.documentElement.scrollHeight,ue=()=>{clearTimeout(G),G=setTimeout(()=>{C(),T()},300)},le=new ResizeObserver(()=>{let he=document.documentElement.scrollHeight;(Math.abs(innerWidth-Z)>1||Math.abs(he-re)>4)&&(Z=innerWidth,re=he,ue())}),Ee={get seed(){return i},regrow(he){return i=he!=null?he>>>0:Math.random()*2**31>>>0,C(),T(),i},info(){return{finale:g.finale,seed:i,threads:g.threads.length,stripPx:_,top:Math.round(m.top*100),bottom:Math.round(m.bottom*100),obstacles:g.obstacles.length,gpu:l.info()}},probe(he){let ge=c.getContext(),xe={},b=[d,v];v=1e5;for(let fe of he){d=w(fe),T();let J=c.domElement.width,oe=c.domElement.height,ae=new Uint8Array(J*oe*4);ge.readPixels(0,0,J,oe,ge.RGBA,ge.UNSIGNED_BYTE,ae);let Te=0;for(let me of M()){let S=Math.max(0,Math.floor(me[0])),x=Math.min(J,Math.ceil(me[2])),F=Math.max(0,Math.floor(me[1])),te=Math.min(oe,Math.ceil(me[3]));for(let $=F;$<te;$++)for(let N=S;N<x;N++)ae[($*J+N)*4+3]>3&&Te++}xe[fe]=Te}return[d,v]=b,s.style.top=d+"px",T(),xe},destroy(){ee(),le.disconnect(),document.removeEventListener("visibilitychange",X),removeEventListener("scroll",Q),l.dispose(),s.remove()}};return C(),v=t?1e5:m.top-.3,R=v,T(),le.observe(document.body),t?addEventListener("scroll",Q,{passive:!0}):q(),e.has("cord")&&console.info("[epx-threadside] seed",i,Ee.info()),Ee}function $h(){let n=window.epxThreadsConfig;if(!n||document.body.classList.contains("elementor-editor-active"))return;let e=document.querySelector(n.host),t=()=>{if(e&&!e.querySelector(".epx-threads"))try{window.epxThreads=Cp(e,n)}catch(r){e.classList.add("epx-threads-fallback"),console.warn("[epx-threads]",r)}if(n.side&&innerWidth>=(n.side.minWidth||0)&&!document.querySelector(".epx-threadside")){let r=()=>{try{window.epxThreadSide=Pp(n.side)}catch(o){console.warn("[epx-threadside]",o)}};document.readyState==="complete"?setTimeout(r,200):addEventListener("load",()=>setTimeout(r,200),{once:!0})}};(document.fonts&&document.fonts.ready?Promise.race([document.fonts.ready,new Promise(r=>setTimeout(r,1500))]):Promise.resolve()).then(()=>requestAnimationFrame(t))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",$h):$h();export{Pp as mountThreadSide,Cp as mountThreads};
