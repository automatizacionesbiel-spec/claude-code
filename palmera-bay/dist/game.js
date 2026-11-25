(()=>{var xu=0,sl=1,_u=2;var uh=1,Sc=2,An=3,Qn=0,Le=1,ze=2,Zn=0,$n=1,jn=2,rl=3,al=4,vu=5,fi=100,yu=101,Mu=102,Su=103,bu=104,wu=200,Eu=201,Tu=202,Au=203,so=204,ro=205,Ru=206,Cu=207,Iu=208,Pu=209,Lu=210,Du=211,Uu=212,Nu=213,zu=214,ao=0,oo=1,co=2,Ki=3,lo=4,ho=5,uo=6,fo=7,dh=0,Ou=1,Fu=2,Jn=0,Bu=1,ku=2,Hu=3,bc=4,Vu=5,Gu=6,Wu=7;var fh=300,Qi=301,ji=302,po=303,mo=304,Qr=306,Rs=1e3,mi=1001,go=1002,qe=1003,Xu=1004;var Xs=1005;var pn=1006,Ea=1007;var gi=1008;var Pn=1009,ph=1010,mh=1011,Cs=1012,wc=1013,xi=1014,mn=1015,Os=1016,Ec=1017,Tc=1018,ts=1020,gh=35902,xh=1021,_h=1022,on=1023,vh=1024,yh=1025,Zi=1026,es=1027,Ac=1028,Rc=1029,Mh=1030,Cc=1031;var Ic=1033,vr=33776,yr=33777,Mr=33778,Sr=33779,xo=35840,_o=35841,vo=35842,yo=35843,Mo=36196,So=37492,bo=37496,wo=37808,Eo=37809,To=37810,Ao=37811,Ro=37812,Co=37813,Io=37814,Po=37815,Lo=37816,Do=37817,Uo=37818,No=37819,zo=37820,Oo=37821,br=36492,Fo=36494,Bo=36495,Sh=36283,ko=36284,Ho=36285,Vo=36286;var wr=2300,Go=2301,Ta=2302,ol=2400,cl=2401,ll=2402;var qu=3200,Yu=3201;var bh=0,Zu=1,qn="",we="srgb",rs="srgb-linear",jr="linear",jt="srgb";var Ri=7680;var hl=519,$u=512,Ju=513,Ku=514,wh=515,Qu=516,ju=517,td=518,ed=519,Wo=35044;var ul="300 es",Cn=2e3,Er=2001,ti=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Aa=Math.PI/180,Xo=180/Math.PI;function Kn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[i&255]+Ce[i>>8&255]+Ce[i>>16&255]+Ce[i>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function ke(i,t,e){return Math.max(t,Math.min(e,i))}function nd(i,t){return(i%t+t)%t}function Ra(i,t,e){return(1-e)*i+e*t}function fn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function te(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var It=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ut=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=s[0],g=s[3],p=s[6],S=s[1],y=s[4],_=s[7],R=s[2],T=s[5],A=s[8];return r[0]=a*x+o*S+c*R,r[3]=a*g+o*y+c*T,r[6]=a*p+o*_+c*A,r[1]=l*x+h*S+u*R,r[4]=l*g+h*y+u*T,r[7]=l*p+h*_+u*A,r[2]=d*x+f*S+m*R,r[5]=d*g+f*y+m*T,r[8]=d*p+f*_+m*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,m=e*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=u*x,t[1]=(s*l-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=d*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-o*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ca.makeScale(t,e)),this}rotate(t){return this.premultiply(Ca.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ca.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ca=new Ut;function Eh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function id(){let i=Tr("canvas");return i.style.display="block",i}var dl={};function Es(i){i in dl||(dl[i]=!0,console.warn(i))}function sd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function rd(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ad(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var qt={enabled:!0,workingColorSpace:rs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===jt&&(i.r=In(i.r),i.g=In(i.g),i.b=In(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===jt&&(i.r=$i(i.r),i.g=$i(i.g),i.b=$i(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===qn?jr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function In(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $i(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var fl=[.64,.33,.3,.6,.15,.06],pl=[.2126,.7152,.0722],ml=[.3127,.329],gl=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xl=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qt.define({[rs]:{primaries:fl,whitePoint:ml,transfer:jr,toXYZ:gl,fromXYZ:xl,luminanceCoefficients:pl,workingColorSpaceConfig:{unpackColorSpace:we},outputColorSpaceConfig:{drawingBufferColorSpace:we}},[we]:{primaries:fl,whitePoint:ml,transfer:jt,toXYZ:gl,fromXYZ:xl,luminanceCoefficients:pl,outputColorSpaceConfig:{drawingBufferColorSpace:we}}});var Ci,qo=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ci===void 0&&(Ci=Tr("canvas")),Ci.width=t.width,Ci.height=t.height;let n=Ci.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ci}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Tr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=In(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(In(e[n]/255)*255):e[n]=In(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},od=0,Ar=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=Kn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ia(s[a].image)):r.push(Ia(s[a]))}else r=Ia(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ia(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var cd=0,He=class i extends ti{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=mi,s=mi,r=pn,a=gi,o=on,c=Pn,l=i.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=Kn(),this.name="",this.source=new Ar(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Rs:t.x=t.x-Math.floor(t.x);break;case mi:t.x=t.x<0?0:1;break;case go:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Rs:t.y=t.y-Math.floor(t.y);break;case mi:t.y=t.y<0?0:1;break;case go:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=fh;He.DEFAULT_ANISOTROPY=1;var ee=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(l+1)/2,_=(f+1)/2,R=(p+1)/2,T=(h+d)/4,A=(u+x)/4,I=(m+g)/4;return y>_&&y>R?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=T/n,r=A/n):_>R?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=T/s,r=I/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=A/r,s=I/r),this.set(n,s,r,e),this}let S=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(g-m)/S,this.y=(u-x)/S,this.z=(d-h)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yo=class extends ti{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new He(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ar(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ln=class extends Yo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Rr=class extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Zo=class extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],m=r[a+2],x=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=x;return}if(u!==x||c!==d||l!==f||h!==m){let g=1-o,p=c*d+l*f+h*m+u*x,S=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let R=Math.sqrt(y),T=Math.atan2(R,p*S);g=Math.sin(g*T)/R,o=Math.sin(o*T)/R}let _=o*S;if(c=c*g+d*_,l=l*g+f*_,h=h*g+m*_,u=u*g+x*_,g===1-o){let R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+h*u+c*f-l*d,t[e+1]=c*m+h*d+l*u-o*f,t[e+2]=l*m+h*f+o*d-c*u,t[e+3]=h*m-o*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ke(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_l.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_l.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Pa.copy(this).projectOnVector(t),this.sub(Pa)}reflect(t){return this.sub(Pa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Pa=new L,_l=new gn,Dn=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,sn):sn.fromBufferAttribute(r,a),sn.applyMatrix4(t.matrixWorld),this.expandByPoint(sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qs.copy(n.boundingBox)),qs.applyMatrix4(t.matrixWorld),this.union(qs)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,sn),sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ms),Ys.subVectors(this.max,ms),Ii.subVectors(t.a,ms),Pi.subVectors(t.b,ms),Li.subVectors(t.c,ms),kn.subVectors(Pi,Ii),Hn.subVectors(Li,Pi),ai.subVectors(Ii,Li);let e=[0,-kn.z,kn.y,0,-Hn.z,Hn.y,0,-ai.z,ai.y,kn.z,0,-kn.x,Hn.z,0,-Hn.x,ai.z,0,-ai.x,-kn.y,kn.x,0,-Hn.y,Hn.x,0,-ai.y,ai.x,0];return!La(e,Ii,Pi,Li,Ys)||(e=[1,0,0,0,1,0,0,0,1],!La(e,Ii,Pi,Li,Ys))?!1:(Zs.crossVectors(kn,Hn),e=[Zs.x,Zs.y,Zs.z],La(e,Ii,Pi,Li,Ys))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Sn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Sn=[new L,new L,new L,new L,new L,new L,new L,new L],sn=new L,qs=new Dn,Ii=new L,Pi=new L,Li=new L,kn=new L,Hn=new L,ai=new L,ms=new L,Ys=new L,Zs=new L,oi=new L;function La(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){oi.fromArray(i,r);let o=s.x*Math.abs(oi.x)+s.y*Math.abs(oi.y)+s.z*Math.abs(oi.z),c=t.dot(oi),l=e.dot(oi),h=n.dot(oi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var ld=new Dn,gs=new L,Da=new L,ei=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ld.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gs.subVectors(t,this.center);let e=gs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(gs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Da.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gs.copy(t.center).add(Da)),this.expandByPoint(gs.copy(t.center).sub(Da))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},bn=new L,Ua=new L,$s=new L,Vn=new L,Na=new L,Js=new L,za=new L,Cr=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bn.copy(this.origin).addScaledVector(this.direction,e),bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ua.copy(t).add(e).multiplyScalar(.5),$s.copy(e).sub(t).normalize(),Vn.copy(this.origin).sub(Ua);let r=t.distanceTo(e)*.5,a=-this.direction.dot($s),o=Vn.dot(this.direction),c=-Vn.dot($s),l=Vn.lengthSq(),h=Math.abs(1-a*a),u,d,f,m;if(h>0)if(u=a*c-o,d=a*o-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ua).addScaledVector($s,d),f}intersectSphere(t,e){bn.subVectors(t.center,this.origin);let n=bn.dot(this.direction),s=bn.dot(bn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,bn)!==null}intersectTriangle(t,e,n,s,r){Na.subVectors(e,t),Js.subVectors(n,t),za.crossVectors(Na,Js);let a=this.direction.dot(za),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Vn.subVectors(this.origin,t);let c=o*this.direction.dot(Js.crossVectors(Vn,Js));if(c<0)return null;let l=o*this.direction.dot(Na.cross(Vn));if(l<0||c+l>a)return null;let h=-o*Vn.dot(za);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qt=class i{constructor(t,e,n,s,r,a,o,c,l,h,u,d,f,m,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,d,f,m,x,g)}set(t,e,n,s,r,a,o,c,l,h,u,d,f,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Di.setFromMatrixColumn(t,0).length(),r=1/Di.setFromMatrixColumn(t,1).length(),a=1/Di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,m=o*h,x=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+m*l,e[5]=d-x*l,e[9]=-o*c,e[2]=x-d*l,e[6]=m+f*l,e[10]=a*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,m=l*h,x=l*u;e[0]=d+x*o,e[4]=m*o-f,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-m,e[6]=x+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,m=l*h,x=l*u;e[0]=d-x*o,e[4]=-a*u,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*h,f=a*u,m=o*h,x=o*u;e[0]=c*h,e[4]=m*l-f,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=f*l-m,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,f=a*l,m=o*c,x=o*l;e[0]=c*h,e[4]=x-d*u,e[8]=m*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*u+m,e[10]=d-x*u}else if(t.order==="XZY"){let d=a*c,f=a*l,m=o*c,x=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=a*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hd,t,ud)}lookAt(t,e,n){let s=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),Gn.crossVectors(n,We),Gn.lengthSq()===0&&(Math.abs(n.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),Gn.crossVectors(n,We)),Gn.normalize(),Ks.crossVectors(We,Gn),s[0]=Gn.x,s[4]=Ks.x,s[8]=We.x,s[1]=Gn.y,s[5]=Ks.y,s[9]=We.y,s[2]=Gn.z,s[6]=Ks.z,s[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],S=n[3],y=n[7],_=n[11],R=n[15],T=s[0],A=s[4],I=s[8],w=s[12],M=s[1],C=s[5],P=s[9],O=s[13],H=s[2],Y=s[6],W=s[10],j=s[14],G=s[3],it=s[7],ht=s[11],Mt=s[15];return r[0]=a*T+o*M+c*H+l*G,r[4]=a*A+o*C+c*Y+l*it,r[8]=a*I+o*P+c*W+l*ht,r[12]=a*w+o*O+c*j+l*Mt,r[1]=h*T+u*M+d*H+f*G,r[5]=h*A+u*C+d*Y+f*it,r[9]=h*I+u*P+d*W+f*ht,r[13]=h*w+u*O+d*j+f*Mt,r[2]=m*T+x*M+g*H+p*G,r[6]=m*A+x*C+g*Y+p*it,r[10]=m*I+x*P+g*W+p*ht,r[14]=m*w+x*O+g*j+p*Mt,r[3]=S*T+y*M+_*H+R*G,r[7]=S*A+y*C+_*Y+R*it,r[11]=S*I+y*P+_*W+R*ht,r[15]=S*w+y*O+_*j+R*Mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],x=t[7],g=t[11],p=t[15];return m*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*f-n*c*f)+x*(+e*c*f-e*l*d+r*a*d-s*a*f+s*l*h-r*c*h)+g*(+e*l*u-e*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-s*o*h-e*c*u+e*o*d+s*a*u-n*a*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],x=t[13],g=t[14],p=t[15],S=u*g*l-x*d*l+x*c*f-o*g*f-u*c*p+o*d*p,y=m*d*l-h*g*l-m*c*f+a*g*f+h*c*p-a*d*p,_=h*x*l-m*u*l+m*o*f-a*x*f-h*o*p+a*u*p,R=m*u*c-h*x*c-m*o*d+a*x*d+h*o*g-a*u*g,T=e*S+n*y+s*_+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return t[0]=S*A,t[1]=(x*d*r-u*g*r-x*s*f+n*g*f+u*s*p-n*d*p)*A,t[2]=(o*g*r-x*c*r+x*s*l-n*g*l-o*s*p+n*c*p)*A,t[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*f-n*c*f)*A,t[4]=y*A,t[5]=(h*g*r-m*d*r+m*s*f-e*g*f-h*s*p+e*d*p)*A,t[6]=(m*c*r-a*g*r-m*s*l+e*g*l+a*s*p-e*c*p)*A,t[7]=(a*d*r-h*c*r+h*s*l-e*d*l-a*s*f+e*c*f)*A,t[8]=_*A,t[9]=(m*u*r-h*x*r-m*n*f+e*x*f+h*n*p-e*u*p)*A,t[10]=(a*x*r-m*o*r+m*n*l-e*x*l-a*n*p+e*o*p)*A,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*f-e*o*f)*A,t[12]=R*A,t[13]=(h*x*s-m*u*s+m*n*d-e*x*d-h*n*g+e*u*g)*A,t[14]=(m*o*s-a*x*s-m*n*c+e*x*c+a*n*g-e*o*g)*A,t[15]=(a*u*s-h*o*s+h*n*c-e*u*c-a*n*d+e*o*d)*A,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,m=r*u,x=a*h,g=a*u,p=o*u,S=c*l,y=c*h,_=c*u,R=n.x,T=n.y,A=n.z;return s[0]=(1-(x+p))*R,s[1]=(f+_)*R,s[2]=(m-y)*R,s[3]=0,s[4]=(f-_)*T,s[5]=(1-(d+p))*T,s[6]=(g+S)*T,s[7]=0,s[8]=(m+y)*A,s[9]=(g-S)*A,s[10]=(1-(d+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Di.set(s[0],s[1],s[2]).length(),a=Di.set(s[4],s[5],s[6]).length(),o=Di.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],rn.copy(this);let l=1/r,h=1/a,u=1/o;return rn.elements[0]*=l,rn.elements[1]*=l,rn.elements[2]*=l,rn.elements[4]*=h,rn.elements[5]*=h,rn.elements[6]*=h,rn.elements[8]*=u,rn.elements[9]*=u,rn.elements[10]*=u,e.setFromRotationMatrix(rn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Cn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,m;if(o===Cn)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Er)f=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Cn){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*l,f=(n+s)*h,m,x;if(o===Cn)m=(a+r)*u,x=-2*u;else if(o===Er)m=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Di=new L,rn=new Qt,hd=new L(0,0,0),ud=new L(1,1,1),Gn=new L,Ks=new L,We=new L,vl=new Qt,yl=new gn,xn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return vl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yl.setFromEuler(this),this.setFromQuaternion(yl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xn.DEFAULT_ORDER="XYZ";var Ir=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},dd=0,Ml=new L,Ui=new gn,wn=new Qt,Qs=new L,xs=new L,fd=new L,pd=new gn,Sl=new L(1,0,0),bl=new L(0,1,0),wl=new L(0,0,1),El={type:"added"},md={type:"removed"},Ni={type:"childadded",child:null},Oa={type:"childremoved",child:null},Te=class i extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new xn,n=new gn,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qt},normalMatrix:{value:new Ut}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ir,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.premultiply(Ui),this}rotateX(t){return this.rotateOnAxis(Sl,t)}rotateY(t){return this.rotateOnAxis(bl,t)}rotateZ(t){return this.rotateOnAxis(wl,t)}translateOnAxis(t,e){return Ml.copy(t).applyQuaternion(this.quaternion),this.position.add(Ml.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Sl,t)}translateY(t){return this.translateOnAxis(bl,t)}translateZ(t){return this.translateOnAxis(wl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qs.copy(t):Qs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(xs,Qs,this.up):wn.lookAt(Qs,xs,this.up),this.quaternion.setFromRotationMatrix(wn),s&&(wn.extractRotation(s.matrixWorld),Ui.setFromRotationMatrix(wn),this.quaternion.premultiply(Ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(El),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(md),Oa.child=t,this.dispatchEvent(Oa),Oa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(El),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,t,fd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,pd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Te.DEFAULT_UP=new L(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var an=new L,En=new L,Fa=new L,Tn=new L,zi=new L,Oi=new L,Tl=new L,Ba=new L,ka=new L,Ha=new L,Va=new ee,Ga=new ee,Wa=new ee,Yn=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),an.subVectors(t,e),s.cross(an);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){an.subVectors(s,e),En.subVectors(n,e),Fa.subVectors(t,e);let a=an.dot(an),o=an.dot(En),c=an.dot(Fa),l=En.dot(En),h=En.dot(Fa),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,m=(a*h-o*c)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Tn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Tn.x),c.addScaledVector(a,Tn.y),c.addScaledVector(o,Tn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Va.setScalar(0),Ga.setScalar(0),Wa.setScalar(0),Va.fromBufferAttribute(t,e),Ga.fromBufferAttribute(t,n),Wa.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Va,r.x),a.addScaledVector(Ga,r.y),a.addScaledVector(Wa,r.z),a}static isFrontFacing(t,e,n,s){return an.subVectors(n,e),En.subVectors(t,e),an.cross(En).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),En.subVectors(this.a,this.b),an.cross(En).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;zi.subVectors(s,n),Oi.subVectors(r,n),Ba.subVectors(t,n);let c=zi.dot(Ba),l=Oi.dot(Ba);if(c<=0&&l<=0)return e.copy(n);ka.subVectors(t,s);let h=zi.dot(ka),u=Oi.dot(ka);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(zi,a);Ha.subVectors(t,r);let f=zi.dot(Ha),m=Oi.dot(Ha);if(m>=0&&f<=m)return e.copy(r);let x=f*l-c*m;if(x<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(n).addScaledVector(Oi,o);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Tl.subVectors(r,s),o=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(Tl,o);let p=1/(g+x+d);return a=x*p,o=d*p,e.copy(n).addScaledVector(zi,a).addScaledVector(Oi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},js={h:0,s:0,l:0};function Xa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var At=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=we){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=qt.workingColorSpace){if(t=nd(t,1),e=ke(e,0,1),n=ke(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Xa(a,r,t+1/3),this.g=Xa(a,r,t),this.b=Xa(a,r,t-1/3)}return qt.toWorkingColorSpace(this,s),this}setStyle(t,e=we){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=we){let n=Th[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=In(t.r),this.g=In(t.g),this.b=In(t.b),this}copyLinearToSRGB(t){return this.r=$i(t.r),this.g=$i(t.g),this.b=$i(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=we){return qt.fromWorkingColorSpace(Ie.copy(this),t),Math.round(ke(Ie.r*255,0,255))*65536+Math.round(ke(Ie.g*255,0,255))*256+Math.round(ke(Ie.b*255,0,255))}getHexString(t=we){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(Ie.copy(this),e);let n=Ie.r,s=Ie.g,r=Ie.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=we){qt.fromWorkingColorSpace(Ie.copy(this),t);let e=Ie.r,n=Ie.g,s=Ie.b;return t!==we?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Wn),this.setHSL(Wn.h+t,Wn.s+e,Wn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Wn),t.getHSL(js);let n=Ra(Wn.h,js.h,e),s=Ra(Wn.s,js.s,e),r=Ra(Wn.l,js.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ie=new At;At.NAMES=Th;var gd=0,Un=class extends ti{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=Kn(),this.name="",this.blending=$n,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=so,this.blendDst=ro,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ri,this.stencilZFail=Ri,this.stencilZPass=Ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$n&&(n.blending=this.blending),this.side!==Qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==so&&(n.blendSrc=this.blendSrc),this.blendDst!==ro&&(n.blendDst=this.blendDst),this.blendEquation!==fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ki&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Qe=class extends Un{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var _e=new L,tr=new It,ve=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wo,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)tr.fromBufferAttribute(this,e),tr.applyMatrix3(t),this.setXY(e,tr.x,tr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fn(e,this.array)),e}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fn(e,this.array)),e}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fn(e,this.array)),e}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array),r=te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wo&&(t.usage=this.usage),t}};var Pr=class extends ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Lr=class extends ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ae=class extends ve{constructor(t,e,n){super(new Float32Array(t),e,n)}},xd=0,Ke=new Qt,qa=new Te,Fi=new L,Xe=new Dn,_s=new Dn,be=new L,Ee=class i extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Eh(t)?Lr:Pr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ut().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,n){return Ke.makeTranslation(t,e,n),this.applyMatrix4(Ke),this}scale(t,e,n){return Ke.makeScale(t,e,n),this.applyMatrix4(Ke),this}lookAt(t){return qa.lookAt(t),qa.updateMatrix(),this.applyMatrix4(qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ae(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Xe.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ei);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];_s.setFromBufferAttribute(o),this.morphTargetsRelative?(be.addVectors(Xe.min,_s.min),Xe.expandByPoint(be),be.addVectors(Xe.max,_s.max),Xe.expandByPoint(be)):(Xe.expandByPoint(_s.min),Xe.expandByPoint(_s.max))}Xe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(be));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)be.fromBufferAttribute(o,l),c&&(Fi.fromBufferAttribute(t,l),be.add(Fi)),s=Math.max(s,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ve(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let I=0;I<n.count;I++)o[I]=new L,c[I]=new L;let l=new L,h=new L,u=new L,d=new It,f=new It,m=new It,x=new L,g=new L;function p(I,w,M){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,w),m.fromBufferAttribute(r,M),h.sub(l),u.sub(l),f.sub(d),m.sub(d);let C=1/(f.x*m.y-m.x*f.y);isFinite(C)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(C),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(C),o[I].add(x),o[w].add(x),o[M].add(x),c[I].add(g),c[w].add(g),c[M].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let I=0,w=S.length;I<w;++I){let M=S[I],C=M.start,P=M.count;for(let O=C,H=C+P;O<H;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let y=new L,_=new L,R=new L,T=new L;function A(I){R.fromBufferAttribute(s,I),T.copy(R);let w=o[I];y.copy(w),y.sub(R.multiplyScalar(R.dot(w))).normalize(),_.crossVectors(T,w);let C=_.dot(c[I])<0?-1:1;a.setXYZW(I,y.x,y.y,y.z,C)}for(let I=0,w=S.length;I<w;++I){let M=S[I],C=M.start,P=M.count;for(let O=C,H=C+P;O<H;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new L,r=new L,a=new L,o=new L,c=new L,l=new L,h=new L,u=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,m=0;for(let x=0,g=c.length;x<g;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new ve(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Al=new Qt,ci=new Cr,er=new ei,Rl=new L,nr=new L,ir=new L,sr=new L,Ya=new L,rr=new L,Cl=new L,ar=new L,kt=class extends Te{constructor(t=new Ee,e=new Qe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){rr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Ya.fromBufferAttribute(u,t),a?rr.addScaledVector(Ya,h):rr.addScaledVector(Ya.sub(e),h))}e.add(rr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere),er.applyMatrix4(r),ci.copy(t.ray).recast(t.near),!(er.containsPoint(ci.origin)===!1&&(ci.intersectSphere(er,Rl)===null||ci.origin.distanceToSquared(Rl)>(t.far-t.near)**2))&&(Al.copy(r).invert(),ci.copy(t.ray).applyMatrix4(Al),!(n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ci)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=a[g.materialIndex],S=Math.max(g.start,f.start),y=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let _=S,R=y;_<R;_+=3){let T=o.getX(_),A=o.getX(_+1),I=o.getX(_+2);s=or(this,p,t,n,l,h,u,T,A,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let S=o.getX(g),y=o.getX(g+1),_=o.getX(g+2);s=or(this,a,t,n,l,h,u,S,y,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=a[g.materialIndex],S=Math.max(g.start,f.start),y=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let _=S,R=y;_<R;_+=3){let T=_,A=_+1,I=_+2;s=or(this,p,t,n,l,h,u,T,A,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let S=g,y=g+1,_=g+2;s=or(this,a,t,n,l,h,u,S,y,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function _d(i,t,e,n,s,r,a,o){let c;if(t.side===Le?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Qn,o),c===null)return null;ar.copy(o),ar.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(ar);return l<e.near||l>e.far?null:{distance:l,point:ar.clone(),object:i}}function or(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,nr),i.getVertexPosition(c,ir),i.getVertexPosition(l,sr);let h=_d(i,t,e,n,nr,ir,sr,Cl);if(h){let u=new L;Yn.getBarycoord(Cl,nr,ir,sr,u),s&&(h.uv=Yn.getInterpolatedAttribute(s,o,c,l,u,new It)),r&&(h.uv1=Yn.getInterpolatedAttribute(r,o,c,l,u,new It)),a&&(h.normal=Yn.getInterpolatedAttribute(a,o,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new L,materialIndex:0};Yn.getNormal(nr,ir,sr,d.normal),h.face=d,h.barycoord=u}return h}var fe=class i extends Ee{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(u,2));function m(x,g,p,S,y,_,R,T,A,I,w){let M=_/A,C=R/I,P=_/2,O=R/2,H=T/2,Y=A+1,W=I+1,j=0,G=0,it=new L;for(let ht=0;ht<W;ht++){let Mt=ht*C-O;for(let Ft=0;Ft<Y;Ft++){let ne=Ft*M-P;it[x]=ne*S,it[g]=Mt*y,it[p]=H,l.push(it.x,it.y,it.z),it[x]=0,it[g]=0,it[p]=T>0?1:-1,h.push(it.x,it.y,it.z),u.push(Ft/A),u.push(1-ht/I),j+=1}}for(let ht=0;ht<I;ht++)for(let Mt=0;Mt<A;Mt++){let Ft=d+Mt+Y*ht,ne=d+Mt+Y*(ht+1),q=d+(Mt+1)+Y*(ht+1),tt=d+(Mt+1)+Y*ht;c.push(Ft,ne,tt),c.push(ne,q,tt),G+=6}o.addGroup(f,G,w),f+=G,d+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ns(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ne(i){let t={};for(let e=0;e<i.length;e++){let n=ns(i[e]);for(let s in n)t[s]=n[s]}return t}function vd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ah(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}var yd={clone:ns,merge:Ne},Md=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,je=class extends Un{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Md,this.fragmentShader=Sd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ns(t.uniforms),this.uniformsGroups=vd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Dr=class extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=Cn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Xn=new L,Il=new It,Pl=new It,Pe=class extends Dr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Xo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Aa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xo*2*Math.atan(Math.tan(Aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z)}getViewSize(t,e){return this.getViewBounds(t,Il,Pl),e.subVectors(Pl,Il)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Aa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Bi=-90,ki=1,$o=class extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Pe(Bi,ki,t,e);s.layers=this.layers,this.add(s);let r=new Pe(Bi,ki,t,e);r.layers=this.layers,this.add(r);let a=new Pe(Bi,ki,t,e);a.layers=this.layers,this.add(a);let o=new Pe(Bi,ki,t,e);o.layers=this.layers,this.add(o);let c=new Pe(Bi,ki,t,e);c.layers=this.layers,this.add(c);let l=new Pe(Bi,ki,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===Cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Er)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Ur=class extends He{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Qi,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Jo=class extends Ln{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ur(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:pn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new fe(5,5,5),r=new je({name:"CubemapFromEquirect",uniforms:ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:Zn});r.uniforms.tEquirect.value=e;let a=new kt(s,r),o=e.minFilter;return e.minFilter===gi&&(e.minFilter=pn),new $o(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Za=new L,bd=new L,wd=new Ut,Rn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Za.subVectors(n,e).cross(bd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Za),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||wd.getNormalMatrix(t),s=this.coplanarPoint(Za).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},li=new ei,cr=new L,Is=class{constructor(t=new Rn,e=new Rn,n=new Rn,s=new Rn,r=new Rn,a=new Rn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Cn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],x=s[10],g=s[11],p=s[12],S=s[13],y=s[14],_=s[15];if(n[0].setComponents(c-r,d-l,g-f,_-p).normalize(),n[1].setComponents(c+r,d+l,g+f,_+p).normalize(),n[2].setComponents(c+a,d+h,g+m,_+S).normalize(),n[3].setComponents(c-a,d-h,g-m,_-S).normalize(),n[4].setComponents(c-o,d-u,g-x,_-y).normalize(),e===Cn)n[5].setComponents(c+o,d+u,g+x,_+y).normalize();else if(e===Er)n[5].setComponents(o,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(t){return li.center.set(0,0,0),li.radius=.7071067811865476,li.applyMatrix4(t.matrixWorld),this.intersectsSphere(li)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(cr.x=s.normal.x>0?t.max.x:t.min.x,cr.y=s.normal.y>0?t.max.y:t.min.y,cr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(cr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Rh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ed(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let x=u[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var _n=class i extends Ee{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,d=e/c,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let S=p*d-a;for(let y=0;y<l;y++){let _=y*u-r;m.push(_,-S,0),x.push(0,0,1),g.push(y/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<o;S++){let y=S+l*p,_=S+l*(p+1),R=S+1+l*(p+1),T=S+1+l*p;f.push(y,_,T),f.push(_,R,T)}this.setIndex(f),this.setAttribute("position",new ae(m,3)),this.setAttribute("normal",new ae(x,3)),this.setAttribute("uv",new ae(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Td=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ad=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Rd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Id=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ld=`#ifdef USE_AOMAP
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
#endif`,Dd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ud=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Nd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Od=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fd=`float G_BlinnPhong_Implicit( ) {
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
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Bd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
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
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,$d=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
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
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Jd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
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
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
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
			mip = - 2.0 * log2( 1.16 * roughness );		}
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
#endif`,Kd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
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
#endif`,Qd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ef=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nf="gl_FragColor = linearToOutputTexel( gl_FragColor );",sf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,af=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,of=`#ifdef USE_ENVMAP
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
#endif`,cf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lf=`#ifdef USE_ENVMAP
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
#endif`,hf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,df=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ff=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_f=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
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
#endif`,vf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,yf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ef=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
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
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
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
	float alpha = pow2( roughness );
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
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
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
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
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
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
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
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
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
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Tf=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Af=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,If=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Df=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Uf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zf=`#if defined( USE_POINTS_UV )
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
#endif`,Of=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ff=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Gf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
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
#endif`,qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$f=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Jf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ep=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,np=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ip=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ap=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,op=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
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
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,lp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif
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
#endif`,up=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fp=`#ifdef USE_SKINNING
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
#endif`,pp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mp=`#ifdef USE_SKINNING
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
#endif`,gp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_p=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
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
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yp=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Mp=`#ifdef USE_TRANSMISSION
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
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
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
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ep=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Tp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ap=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Dp=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Up=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,Np=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Op=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fp=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bp=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kp=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Hp=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
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
}`,Vp=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,Gp=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wp=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,Xp=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qp=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,Yp=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Zp=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,$p=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jp=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,Kp=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
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
}`,Qp=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,jp=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tm=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,em=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,nm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,im=`uniform vec3 color;
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
}`,sm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,rm=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,zt={alphahash_fragment:Td,alphahash_pars_fragment:Ad,alphamap_fragment:Rd,alphamap_pars_fragment:Cd,alphatest_fragment:Id,alphatest_pars_fragment:Pd,aomap_fragment:Ld,aomap_pars_fragment:Dd,batching_pars_vertex:Ud,batching_vertex:Nd,begin_vertex:zd,beginnormal_vertex:Od,bsdfs:Fd,iridescence_fragment:Bd,bumpmap_pars_fragment:kd,clipping_planes_fragment:Hd,clipping_planes_pars_fragment:Vd,clipping_planes_pars_vertex:Gd,clipping_planes_vertex:Wd,color_fragment:Xd,color_pars_fragment:qd,color_pars_vertex:Yd,color_vertex:Zd,common:$d,cube_uv_reflection_fragment:Jd,defaultnormal_vertex:Kd,displacementmap_pars_vertex:Qd,displacementmap_vertex:jd,emissivemap_fragment:tf,emissivemap_pars_fragment:ef,colorspace_fragment:nf,colorspace_pars_fragment:sf,envmap_fragment:rf,envmap_common_pars_fragment:af,envmap_pars_fragment:of,envmap_pars_vertex:cf,envmap_physical_pars_fragment:vf,envmap_vertex:lf,fog_vertex:hf,fog_pars_vertex:uf,fog_fragment:df,fog_pars_fragment:ff,gradientmap_pars_fragment:pf,lightmap_pars_fragment:mf,lights_lambert_fragment:gf,lights_lambert_pars_fragment:xf,lights_pars_begin:_f,lights_toon_fragment:yf,lights_toon_pars_fragment:Mf,lights_phong_fragment:Sf,lights_phong_pars_fragment:bf,lights_physical_fragment:wf,lights_physical_pars_fragment:Ef,lights_fragment_begin:Tf,lights_fragment_maps:Af,lights_fragment_end:Rf,logdepthbuf_fragment:Cf,logdepthbuf_pars_fragment:If,logdepthbuf_pars_vertex:Pf,logdepthbuf_vertex:Lf,map_fragment:Df,map_pars_fragment:Uf,map_particle_fragment:Nf,map_particle_pars_fragment:zf,metalnessmap_fragment:Of,metalnessmap_pars_fragment:Ff,morphinstance_vertex:Bf,morphcolor_vertex:kf,morphnormal_vertex:Hf,morphtarget_pars_vertex:Vf,morphtarget_vertex:Gf,normal_fragment_begin:Wf,normal_fragment_maps:Xf,normal_pars_fragment:qf,normal_pars_vertex:Yf,normal_vertex:Zf,normalmap_pars_fragment:$f,clearcoat_normal_fragment_begin:Jf,clearcoat_normal_fragment_maps:Kf,clearcoat_pars_fragment:Qf,iridescence_pars_fragment:jf,opaque_fragment:tp,packing:ep,premultiplied_alpha_fragment:np,project_vertex:ip,dithering_fragment:sp,dithering_pars_fragment:rp,roughnessmap_fragment:ap,roughnessmap_pars_fragment:op,shadowmap_pars_fragment:cp,shadowmap_pars_vertex:lp,shadowmap_vertex:hp,shadowmask_pars_fragment:up,skinbase_vertex:dp,skinning_pars_vertex:fp,skinning_vertex:pp,skinnormal_vertex:mp,specularmap_fragment:gp,specularmap_pars_fragment:xp,tonemapping_fragment:_p,tonemapping_pars_fragment:vp,transmission_fragment:yp,transmission_pars_fragment:Mp,uv_pars_fragment:Sp,uv_pars_vertex:bp,uv_vertex:wp,worldpos_vertex:Ep,background_vert:Tp,background_frag:Ap,backgroundCube_vert:Rp,backgroundCube_frag:Cp,cube_vert:Ip,cube_frag:Pp,depth_vert:Lp,depth_frag:Dp,distanceRGBA_vert:Up,distanceRGBA_frag:Np,equirect_vert:zp,equirect_frag:Op,linedashed_vert:Fp,linedashed_frag:Bp,meshbasic_vert:kp,meshbasic_frag:Hp,meshlambert_vert:Vp,meshlambert_frag:Gp,meshmatcap_vert:Wp,meshmatcap_frag:Xp,meshnormal_vert:qp,meshnormal_frag:Yp,meshphong_vert:Zp,meshphong_frag:$p,meshphysical_vert:Jp,meshphysical_frag:Kp,meshtoon_vert:Qp,meshtoon_frag:jp,points_vert:tm,points_frag:em,shadow_vert:nm,shadow_frag:im,sprite_vert:sm,sprite_frag:rm},et={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},dn={basic:{uniforms:Ne([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Ne([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new At(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Ne([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Ne([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Ne([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new At(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Ne([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Ne([et.points,et.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Ne([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Ne([et.common,et.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Ne([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Ne([et.sprite,et.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Ne([et.common,et.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Ne([et.lights,et.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};dn.physical={uniforms:Ne([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};var lr={r:0,b:0,g:0},hi=new xn,am=new Qt;function om(i,t,e,n,s,r,a){let o=new At(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?e:t).get(y)),y}function x(S){let y=!1,_=m(S);_===null?p(o,c):_&&_.isColor&&(p(_,1),y=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(S,y){let _=m(y);_&&(_.isCubeTexture||_.mapping===Qr)?(h===void 0&&(h=new kt(new fe(1,1,1),new je({name:"BackgroundCubeMaterial",uniforms:ns(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),hi.copy(y.backgroundRotation),hi.x*=-1,hi.y*=-1,hi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(am.makeRotationFromEuler(hi)),h.material.toneMapped=qt.getTransfer(_.colorSpace)!==jt,(u!==_||d!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new kt(new _n(2,2),new je({name:"BackgroundMaterial",uniforms:ns(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=qt.getTransfer(_.colorSpace)!==jt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,y){S.getRGB(lr,Ah(i)),n.buffers.color.setClear(lr.r,lr.g,lr.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(S,y=1){o.set(S),c=y,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(o,c)},render:x,addToRenderList:g}}function cm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(M,C,P,O,H){let Y=!1,W=u(O,P,C);r!==W&&(r=W,l(r.object)),Y=f(M,O,P,H),Y&&m(M,O,P,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,_(M,C,P,O),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,C,P){let O=P.wireframe===!0,H=n[M.id];H===void 0&&(H={},n[M.id]=H);let Y=H[C.id];Y===void 0&&(Y={},H[C.id]=Y);let W=Y[O];return W===void 0&&(W=d(c()),Y[O]=W),W}function d(M){let C=[],P=[],O=[];for(let H=0;H<e;H++)C[H]=0,P[H]=0,O[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:P,attributeDivisors:O,object:M,attributes:{},index:null}}function f(M,C,P,O){let H=r.attributes,Y=C.attributes,W=0,j=P.getAttributes();for(let G in j)if(j[G].location>=0){let ht=H[G],Mt=Y[G];if(Mt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(Mt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(Mt=M.instanceColor)),ht===void 0||ht.attribute!==Mt||Mt&&ht.data!==Mt.data)return!0;W++}return r.attributesNum!==W||r.index!==O}function m(M,C,P,O){let H={},Y=C.attributes,W=0,j=P.getAttributes();for(let G in j)if(j[G].location>=0){let ht=Y[G];ht===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ht=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ht=M.instanceColor));let Mt={};Mt.attribute=ht,ht&&ht.data&&(Mt.data=ht.data),H[G]=Mt,W++}r.attributes=H,r.attributesNum=W,r.index=O}function x(){let M=r.newAttributes;for(let C=0,P=M.length;C<P;C++)M[C]=0}function g(M){p(M,0)}function p(M,C){let P=r.newAttributes,O=r.enabledAttributes,H=r.attributeDivisors;P[M]=1,O[M]===0&&(i.enableVertexAttribArray(M),O[M]=1),H[M]!==C&&(i.vertexAttribDivisor(M,C),H[M]=C)}function S(){let M=r.newAttributes,C=r.enabledAttributes;for(let P=0,O=C.length;P<O;P++)C[P]!==M[P]&&(i.disableVertexAttribArray(P),C[P]=0)}function y(M,C,P,O,H,Y,W){W===!0?i.vertexAttribIPointer(M,C,P,H,Y):i.vertexAttribPointer(M,C,P,O,H,Y)}function _(M,C,P,O){x();let H=O.attributes,Y=P.getAttributes(),W=C.defaultAttributeValues;for(let j in Y){let G=Y[j];if(G.location>=0){let it=H[j];if(it===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(it=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(it=M.instanceColor)),it!==void 0){let ht=it.normalized,Mt=it.itemSize,Ft=t.get(it);if(Ft===void 0)continue;let ne=Ft.buffer,q=Ft.type,tt=Ft.bytesPerElement,_t=q===i.INT||q===i.UNSIGNED_INT||it.gpuType===wc;if(it.isInterleavedBufferAttribute){let st=it.data,Tt=st.stride,Pt=it.offset;if(st.isInstancedInterleavedBuffer){for(let Bt=0;Bt<G.locationSize;Bt++)p(G.location+Bt,st.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Bt=0;Bt<G.locationSize;Bt++)g(G.location+Bt);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let Bt=0;Bt<G.locationSize;Bt++)y(G.location+Bt,Mt/G.locationSize,q,ht,Tt*tt,(Pt+Mt/G.locationSize*Bt)*tt,_t)}else{if(it.isInstancedBufferAttribute){for(let st=0;st<G.locationSize;st++)p(G.location+st,it.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let st=0;st<G.locationSize;st++)g(G.location+st);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let st=0;st<G.locationSize;st++)y(G.location+st,Mt/G.locationSize,q,ht,Mt*tt,Mt/G.locationSize*st*tt,_t)}}else if(W!==void 0){let ht=W[j];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(G.location,ht);break;case 3:i.vertexAttrib3fv(G.location,ht);break;case 4:i.vertexAttrib4fv(G.location,ht);break;default:i.vertexAttrib1fv(G.location,ht)}}}}S()}function R(){I();for(let M in n){let C=n[M];for(let P in C){let O=C[P];for(let H in O)h(O[H].object),delete O[H];delete C[P]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;let C=n[M.id];for(let P in C){let O=C[P];for(let H in O)h(O[H].object),delete O[H];delete C[P]}delete n[M.id]}function A(M){for(let C in n){let P=n[C];if(P[M.id]===void 0)continue;let O=P[M.id];for(let H in O)h(O[H].object),delete O[H];delete P[M.id]}}function I(){w(),a=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:w,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:S}}function lm(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)a(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*d[x];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function hm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==on&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let I=A===Os&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Pn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==mn&&!I)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=m>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:R,maxSamples:T}}function um(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Rn,o=new Ut,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let S=r?0:n,y=S*4,_=p.clippingState||null;c.value=_,_=h(m,d,y,f);for(let R=0;R!==y;++R)_[R]=e[R];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=c.value,m!==!0||g===null){let p=f+x*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,_=f;y!==x;++y,_+=4)a.copy(u[y]).applyMatrix4(S,o),a.normal.toArray(g,_),g[_+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function dm(i){let t=new WeakMap;function e(a,o){return o===po?a.mapping=Qi:o===mo&&(a.mapping=ji),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===po||o===mo)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Jo(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Nr=class extends Dr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Yi=4,Ll=[.125,.215,.35,.446,.526,.582],pi=20,$a=new Nr,Dl=new At,Ja=null,Ka=0,Qa=0,ja=!1,di=(1+Math.sqrt(5))/2,Hi=1/di,Ul=[new L(-di,Hi,0),new L(di,Hi,0),new L(-Hi,0,di),new L(Hi,0,di),new L(0,di,-Hi),new L(0,di,Hi),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],zr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ja=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ol(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ja,Ka,Qa),this._renderer.xr.enabled=ja,t.scissorTest=!1,hr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qi||t.mapping===ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ja=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Os,format:on,colorSpace:rs,depthBuffer:!1},s=Nl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nl(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fm(r)),this._blurMaterial=pm(r,t,e)}return s}_compileMaterial(t){let e=new kt(this._lodPlanes[0],t);this._renderer.compile(e,$a)}_sceneToCubeUV(t,e,n,s){let o=new Pe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Dl),h.toneMapping=Jn,h.autoClear=!1;let f=new Qe({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),m=new kt(new fe,f),x=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,x=!0):(f.color.copy(Dl),x=!0);for(let p=0;p<6;p++){let S=p%3;S===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):S===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));let y=this._cubeSize;hr(s,S*y,p>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Qi||t.mapping===ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ol()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zl());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new kt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;hr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,$a)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ul[(s-r-1)%Ul.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new kt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*pi-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):pi;g>pi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${pi}`);let p=[],S=0;for(let A=0;A<pi;++A){let I=A/x,w=Math.exp(-I*I/2);p.push(w),A===0?S+=w:A<g&&(S+=2*w)}for(let A=0;A<p.length;A++)p[A]=p[A]/S;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-n;let _=this._sizeLods[s],R=3*_*(s>y-Yi?s-y+Yi:0),T=4*(this._cubeSize-_);hr(e,R,T,3*_,2*_),c.setRenderTarget(e),c.render(u,$a)}};function fm(i){let t=[],e=[],n=[],s=i,r=i-Yi+1+Ll.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Yi?c=Ll[a-i+Yi-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,x=3,g=2,p=1,S=new Float32Array(x*m*f),y=new Float32Array(g*m*f),_=new Float32Array(p*m*f);for(let T=0;T<f;T++){let A=T%3*2/3-1,I=T>2?0:-1,w=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];S.set(w,x*m*T),y.set(d,g*m*T);let M=[T,T,T,T,T,T];_.set(M,p*m*T)}let R=new Ee;R.setAttribute("position",new ve(S,x)),R.setAttribute("uv",new ve(y,g)),R.setAttribute("faceIndex",new ve(_,p)),t.push(R),s>Yi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Nl(i,t,e){let n=new Ln(i,t,e);return n.texture.mapping=Qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function pm(i,t,e){let n=new Float32Array(pi),s=new L(0,1,0);return new je({name:"SphericalGaussianBlur",defines:{n:pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function zl(){return new je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Ol(){return new je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Pc(){return`

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
	`}function mm(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===po||c===mo,h=c===Qi||c===ji;if(l||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new zr(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new zr(i)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function gm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Es("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function xm(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let x=d.morphAttributes[m];for(let g=0,p=x.length;g<p;g++)t.remove(x[g])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let m in d)t.update(d[m],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let m in f){let x=f[m];for(let g=0,p=x.length;g<p;g++)t.update(x[g],i.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,m=u.attributes.position,x=0;if(f!==null){let S=f.array;x=f.version;for(let y=0,_=S.length;y<_;y+=3){let R=S[y+0],T=S[y+1],A=S[y+2];d.push(R,T,T,A,A,R)}}else if(m!==void 0){let S=m.array;x=m.version;for(let y=0,_=S.length/3-1;y<_;y+=3){let R=y+0,T=y+1,A=y+2;d.push(R,T,T,A,A,R)}}else return;let g=new(Eh(d)?Lr:Pr)(d,1);g.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function _m(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function l(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*a,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,x){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,m);let p=0;for(let S=0;S<m;S++)p+=f[S]*x[S];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function vm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ym(i,t,e){let n=new WeakMap,s=new ee;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let w=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],y=0;f===!0&&(y=1),m===!0&&(y=2),x===!0&&(y=3);let _=o.attributes.position.count*y,R=1;_>t.maxTextureSize&&(R=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let T=new Float32Array(_*R*4*u),A=new Rr(T,_,R,u);A.type=mn,A.needsUpdate=!0;let I=y*4;for(let M=0;M<u;M++){let C=g[M],P=p[M],O=S[M],H=_*R*4*M;for(let Y=0;Y<C.count;Y++){let W=Y*I;f===!0&&(s.fromBufferAttribute(C,Y),T[H+W+0]=s.x,T[H+W+1]=s.y,T[H+W+2]=s.z,T[H+W+3]=0),m===!0&&(s.fromBufferAttribute(P,Y),T[H+W+4]=s.x,T[H+W+5]=s.y,T[H+W+6]=s.z,T[H+W+7]=0),x===!0&&(s.fromBufferAttribute(O,Y),T[H+W+8]=s.x,T[H+W+9]=s.y,T[H+W+10]=s.z,T[H+W+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new It(_,R)},n.set(o,d),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let m=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Mm(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var Or=class extends He{constructor(t,e,n,s,r,a,o,c,l,h=Zi){if(h!==Zi&&h!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Zi&&(n=xi),n===void 0&&h===es&&(n=ts),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:qe,this.minFilter=c!==void 0?c:qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ch=new He,Fl=new Or(1,1),Ih=new Rr,Ph=new Zo,Lh=new Ur,Bl=[],kl=[],Hl=new Float32Array(16),Vl=new Float32Array(9),Gl=new Float32Array(4);function as(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Bl[s];if(r===void 0&&(r=new Float32Array(s),Bl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ta(i,t){let e=kl[t];e===void 0&&(e=new Int32Array(t),kl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Sm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function bm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2fv(this.addr,t),Me(e,t)}}function wm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;i.uniform3fv(this.addr,t),Me(e,t)}}function Em(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4fv(this.addr,t),Me(e,t)}}function Tm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;Gl.set(n),i.uniformMatrix2fv(this.addr,!1,Gl),Me(e,n)}}function Am(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;Vl.set(n),i.uniformMatrix3fv(this.addr,!1,Vl),Me(e,n)}}function Rm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;Hl.set(n),i.uniformMatrix4fv(this.addr,!1,Hl),Me(e,n)}}function Cm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Im(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2iv(this.addr,t),Me(e,t)}}function Pm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3iv(this.addr,t),Me(e,t)}}function Lm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4iv(this.addr,t),Me(e,t)}}function Dm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Um(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2uiv(this.addr,t),Me(e,t)}}function Nm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3uiv(this.addr,t),Me(e,t)}}function zm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4uiv(this.addr,t),Me(e,t)}}function Om(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Fl.compareFunction=wh,r=Fl):r=Ch,e.setTexture2D(t||r,s)}function Fm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ph,s)}function Bm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Lh,s)}function km(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ih,s)}function Hm(i){switch(i){case 5126:return Sm;case 35664:return bm;case 35665:return wm;case 35666:return Em;case 35674:return Tm;case 35675:return Am;case 35676:return Rm;case 5124:case 35670:return Cm;case 35667:case 35671:return Im;case 35668:case 35672:return Pm;case 35669:case 35673:return Lm;case 5125:return Dm;case 36294:return Um;case 36295:return Nm;case 36296:return zm;case 35678:case 36198:case 36298:case 36306:case 35682:return Om;case 35679:case 36299:case 36307:return Fm;case 35680:case 36300:case 36308:case 36293:return Bm;case 36289:case 36303:case 36311:case 36292:return km}}function Vm(i,t){i.uniform1fv(this.addr,t)}function Gm(i,t){let e=as(t,this.size,2);i.uniform2fv(this.addr,e)}function Wm(i,t){let e=as(t,this.size,3);i.uniform3fv(this.addr,e)}function Xm(i,t){let e=as(t,this.size,4);i.uniform4fv(this.addr,e)}function qm(i,t){let e=as(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ym(i,t){let e=as(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Zm(i,t){let e=as(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function $m(i,t){i.uniform1iv(this.addr,t)}function Jm(i,t){i.uniform2iv(this.addr,t)}function Km(i,t){i.uniform3iv(this.addr,t)}function Qm(i,t){i.uniform4iv(this.addr,t)}function jm(i,t){i.uniform1uiv(this.addr,t)}function tg(i,t){i.uniform2uiv(this.addr,t)}function eg(i,t){i.uniform3uiv(this.addr,t)}function ng(i,t){i.uniform4uiv(this.addr,t)}function ig(i,t,e){let n=this.cache,s=t.length,r=ta(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Ch,r[a])}function sg(i,t,e){let n=this.cache,s=t.length,r=ta(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Ph,r[a])}function rg(i,t,e){let n=this.cache,s=t.length,r=ta(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Lh,r[a])}function ag(i,t,e){let n=this.cache,s=t.length,r=ta(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ih,r[a])}function og(i){switch(i){case 5126:return Vm;case 35664:return Gm;case 35665:return Wm;case 35666:return Xm;case 35674:return qm;case 35675:return Ym;case 35676:return Zm;case 5124:case 35670:return $m;case 35667:case 35671:return Jm;case 35668:case 35672:return Km;case 35669:case 35673:return Qm;case 5125:return jm;case 36294:return tg;case 36295:return eg;case 36296:return ng;case 35678:case 36198:case 36298:case 36306:case 35682:return ig;case 35679:case 36299:case 36307:return sg;case 35680:case 36300:case 36308:case 36293:return rg;case 36289:case 36303:case 36311:case 36292:return ag}}var Ko=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Hm(e.type)}},Qo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=og(e.type)}},jo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},to=/(\w+)(\])?(\[|\.)?/g;function Wl(i,t){i.seq.push(t),i.map[t.id]=t}function cg(i,t,e){let n=i.name,s=n.length;for(to.lastIndex=0;;){let r=to.exec(n),a=to.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Wl(e,l===void 0?new Ko(o,i,t):new Qo(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new jo(o),Wl(e,u)),e=u}}}var Ji=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);cg(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Xl(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var lg=37297,hg=0;function ug(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var ql=new Ut;function dg(i){qt._getMatrix(ql,qt.workingColorSpace,i);let t=`mat3( ${ql.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(i)){case jr:return[t,"LinearTransferOETF"];case jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Yl(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+ug(i.getShaderSource(t),a)}else return s}function fg(i,t){let e=dg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function pg(i,t){let e;switch(t){case Bu:e="Linear";break;case ku:e="Reinhard";break;case Hu:e="Cineon";break;case bc:e="ACESFilmic";break;case Gu:e="AgX";break;case Wu:e="Neutral";break;case Vu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ur=new L;function mg(){qt.getLuminanceCoefficients(ur);let i=ur.x.toFixed(4),t=ur.y.toFixed(4),e=ur.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function xg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function _g(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ts(i){return i!==""}function Zl(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $l(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var vg=/^[ \t]*#include +<([\w\d./]+)>/gm;function tc(i){return i.replace(vg,Mg)}var yg=new Map;function Mg(i,t){let e=zt[t];if(e===void 0){let n=yg.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return tc(e)}var Sg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jl(i){return i.replace(Sg,bg)}function bg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function wg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===uh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Sc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===An&&(t="SHADOWMAP_TYPE_VSM"),t}function Eg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Qi:case ji:t="ENVMAP_TYPE_CUBE";break;case Qr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Tg(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ji&&(t="ENVMAP_MODE_REFRACTION"),t}function Ag(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case dh:t="ENVMAP_BLENDING_MULTIPLY";break;case Ou:t="ENVMAP_BLENDING_MIX";break;case Fu:t="ENVMAP_BLENDING_ADD";break}return t}function Rg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Cg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=wg(e),l=Eg(e),h=Tg(e),u=Ag(e),d=Rg(e),f=gg(e),m=xg(r),x=s.createProgram(),g,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ts).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ts).join(`
`),p.length>0&&(p+=`
`)):(g=[Kl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),p=[Kl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Jn?"#define TONE_MAPPING":"",e.toneMapping!==Jn?zt.tonemapping_pars_fragment:"",e.toneMapping!==Jn?pg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,fg("linearToOutputTexel",e.outputColorSpace),mg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ts).join(`
`)),a=tc(a),a=Zl(a,e),a=$l(a,e),o=tc(o),o=Zl(o,e),o=$l(o,e),a=Jl(a),o=Jl(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=S+g+a,_=S+p+o,R=Xl(s,s.VERTEX_SHADER,y),T=Xl(s,s.FRAGMENT_SHADER,_);s.attachShader(x,R),s.attachShader(x,T),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(C){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(x).trim(),O=s.getShaderInfoLog(R).trim(),H=s.getShaderInfoLog(T).trim(),Y=!0,W=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,R,T);else{let j=Yl(s,R,"vertex"),G=Yl(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+P+`
`+j+`
`+G)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(O===""||H==="")&&(W=!1);W&&(C.diagnostics={runnable:Y,programLog:P,vertexShader:{log:O,prefix:g},fragmentShader:{log:H,prefix:p}})}s.deleteShader(R),s.deleteShader(T),I=new Ji(s,x),w=_g(s,x)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,lg)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=T,this}var Ig=0,ec=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new nc(t),e.set(t,n)),n}},nc=class{constructor(t){this.id=Ig++,this.code=t,this.usedTimes=0}};function Pg(i,t,e,n,s,r,a){let o=new Ir,c=new ec,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return l.add(w),w===0?"uv":`uv${w}`}function g(w,M,C,P,O){let H=P.fog,Y=O.geometry,W=w.isMeshStandardMaterial?P.environment:null,j=(w.isMeshStandardMaterial?e:t).get(w.envMap||W),G=j&&j.mapping===Qr?j.image.height:null,it=m[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let ht=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Mt=ht!==void 0?ht.length:0,Ft=0;Y.morphAttributes.position!==void 0&&(Ft=1),Y.morphAttributes.normal!==void 0&&(Ft=2),Y.morphAttributes.color!==void 0&&(Ft=3);let ne,q,tt,_t;if(it){let Kt=dn[it];ne=Kt.vertexShader,q=Kt.fragmentShader}else ne=w.vertexShader,q=w.fragmentShader,c.update(w),tt=c.getVertexShaderID(w),_t=c.getFragmentShaderID(w);let st=i.getRenderTarget(),Tt=i.state.buffers.depth.getReversed(),Pt=O.isInstancedMesh===!0,Bt=O.isBatchedMesh===!0,de=!!w.map,Wt=!!w.matcap,me=!!j,z=!!w.aoMap,$e=!!w.lightMap,Ht=!!w.bumpMap,Vt=!!w.normalMap,wt=!!w.displacementMap,oe=!!w.emissiveMap,bt=!!w.metalnessMap,E=!!w.roughnessMap,v=w.anisotropy>0,F=w.clearcoat>0,Z=w.dispersion>0,J=w.iridescence>0,X=w.sheen>0,vt=w.transmission>0,rt=v&&!!w.anisotropyMap,ut=F&&!!w.clearcoatMap,Xt=F&&!!w.clearcoatNormalMap,K=F&&!!w.clearcoatRoughnessMap,dt=J&&!!w.iridescenceMap,Et=J&&!!w.iridescenceThicknessMap,Rt=X&&!!w.sheenColorMap,ft=X&&!!w.sheenRoughnessMap,Gt=!!w.specularMap,Nt=!!w.specularColorMap,se=!!w.specularIntensityMap,D=vt&&!!w.transmissionMap,nt=vt&&!!w.thicknessMap,V=!!w.gradientMap,$=!!w.alphaMap,ct=w.alphaTest>0,at=!!w.alphaHash,Lt=!!w.extensions,pe=Jn;w.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(pe=i.toneMapping);let Re={shaderID:it,shaderType:w.type,shaderName:w.name,vertexShader:ne,fragmentShader:q,defines:w.defines,customVertexShaderID:tt,customFragmentShaderID:_t,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Bt,batchingColor:Bt&&O._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&O.instanceColor!==null,instancingMorph:Pt&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:rs,alphaToCoverage:!!w.alphaToCoverage,map:de,matcap:Wt,envMap:me,envMapMode:me&&j.mapping,envMapCubeUVHeight:G,aoMap:z,lightMap:$e,bumpMap:Ht,normalMap:Vt,displacementMap:d&&wt,emissiveMap:oe,normalMapObjectSpace:Vt&&w.normalMapType===Zu,normalMapTangentSpace:Vt&&w.normalMapType===bh,metalnessMap:bt,roughnessMap:E,anisotropy:v,anisotropyMap:rt,clearcoat:F,clearcoatMap:ut,clearcoatNormalMap:Xt,clearcoatRoughnessMap:K,dispersion:Z,iridescence:J,iridescenceMap:dt,iridescenceThicknessMap:Et,sheen:X,sheenColorMap:Rt,sheenRoughnessMap:ft,specularMap:Gt,specularColorMap:Nt,specularIntensityMap:se,transmission:vt,transmissionMap:D,thicknessMap:nt,gradientMap:V,opaque:w.transparent===!1&&w.blending===$n&&w.alphaToCoverage===!1,alphaMap:$,alphaTest:ct,alphaHash:at,combine:w.combine,mapUv:de&&x(w.map.channel),aoMapUv:z&&x(w.aoMap.channel),lightMapUv:$e&&x(w.lightMap.channel),bumpMapUv:Ht&&x(w.bumpMap.channel),normalMapUv:Vt&&x(w.normalMap.channel),displacementMapUv:wt&&x(w.displacementMap.channel),emissiveMapUv:oe&&x(w.emissiveMap.channel),metalnessMapUv:bt&&x(w.metalnessMap.channel),roughnessMapUv:E&&x(w.roughnessMap.channel),anisotropyMapUv:rt&&x(w.anisotropyMap.channel),clearcoatMapUv:ut&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:ft&&x(w.sheenRoughnessMap.channel),specularMapUv:Gt&&x(w.specularMap.channel),specularColorMapUv:Nt&&x(w.specularColorMap.channel),specularIntensityMapUv:se&&x(w.specularIntensityMap.channel),transmissionMapUv:D&&x(w.transmissionMap.channel),thicknessMapUv:nt&&x(w.thicknessMap.channel),alphaMapUv:$&&x(w.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Vt||v),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Y.attributes.uv&&(de||$),fog:!!H,useFog:w.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Tt,skinning:O.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Ft,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:pe,decodeVideoTexture:de&&w.map.isVideoTexture===!0&&qt.getTransfer(w.map.colorSpace)===jt,decodeVideoTextureEmissive:oe&&w.emissiveMap.isVideoTexture===!0&&qt.getTransfer(w.emissiveMap.colorSpace)===jt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ze,flipSided:w.side===Le,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Lt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&w.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Re.vertexUv1s=l.has(1),Re.vertexUv2s=l.has(2),Re.vertexUv3s=l.has(3),l.clear(),Re}function p(w){let M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(let C in w.defines)M.push(C),M.push(w.defines[C]);return w.isRawShaderMaterial===!1&&(S(M,w),y(M,w),M.push(i.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function S(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function y(w,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),w.push(o.mask)}function _(w){let M=m[w.type],C;if(M){let P=dn[M];C=yd.clone(P.uniforms)}else C=w.uniforms;return C}function R(w,M){let C;for(let P=0,O=h.length;P<O;P++){let H=h[P];if(H.cacheKey===M){C=H,++C.usedTimes;break}}return C===void 0&&(C=new Cg(i,M,w,r),h.push(C)),C}function T(w){if(--w.usedTimes===0){let M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),w.destroy()}}function A(w){c.remove(w)}function I(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:R,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:I}}function Lg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Dg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ql(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function jl(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,m,x,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),t++,p}function o(u,d,f,m,x,g){let p=a(u,d,f,m,x,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,m,x,g){let p=a(u,d,f,m,x,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||Dg),n.length>1&&n.sort(d||Ql),s.length>1&&s.sort(d||Ql)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function Ug(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new jl,i.set(n,[a])):s>=r.length?(a=new jl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ng(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new At};break;case"SpotLight":e={position:new L,direction:new L,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new At,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new At,groundColor:new At};break;case"RectAreaLight":e={color:new At,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function zg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Og=0;function Fg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Bg(i){let t=new Ng,e=zg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let s=new L,r=new Qt,a=new Qt;function o(l){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,S=0,y=0,_=0,R=0,T=0,A=0;l.sort(Fg);for(let w=0,M=l.length;w<M;w++){let C=l[w],P=C.color,O=C.intensity,H=C.distance,Y=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=P.r*O,u+=P.g*O,d+=P.b*O;else if(C.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(C.sh.coefficients[W],O);A++}else if(C.isDirectionalLight){let W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let j=C.shadow,G=e.get(C);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=C.shadow.matrix,S++}n.directional[f]=W,f++}else if(C.isSpotLight){let W=t.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(P).multiplyScalar(O),W.distance=H,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,n.spot[x]=W;let j=C.shadow;if(C.map&&(n.spotLightMap[R]=C.map,R++,j.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[x]=j.matrix,C.castShadow){let G=e.get(C);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=Y,_++}x++}else if(C.isRectAreaLight){let W=t.get(C);W.color.copy(P).multiplyScalar(O),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),n.rectArea[g]=W,g++}else if(C.isPointLight){let W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){let j=C.shadow,G=e.get(C);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,G.shadowCameraNear=j.camera.near,G.shadowCameraFar=j.camera.far,n.pointShadow[m]=G,n.pointShadowMap[m]=Y,n.pointShadowMatrix[m]=C.shadow.matrix,y++}n.point[m]=W,m++}else if(C.isHemisphereLight){let W=t.get(C);W.skyColor.copy(C.color).multiplyScalar(O),W.groundColor.copy(C.groundColor).multiplyScalar(O),n.hemi[p]=W,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=et.LTC_FLOAT_1,n.rectAreaLTC2=et.LTC_FLOAT_2):(n.rectAreaLTC1=et.LTC_HALF_1,n.rectAreaLTC2=et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let I=n.hash;(I.directionalLength!==f||I.pointLength!==m||I.spotLength!==x||I.rectAreaLength!==g||I.hemiLength!==p||I.numDirectionalShadows!==S||I.numPointShadows!==y||I.numSpotShadows!==_||I.numSpotMaps!==R||I.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,I.directionalLength=f,I.pointLength=m,I.spotLength=x,I.rectAreaLength=g,I.hemiLength=p,I.numDirectionalShadows=S,I.numPointShadows=y,I.numSpotShadows=_,I.numSpotMaps=R,I.numLightProbes=A,n.version=Og++)}function c(l,h){let u=0,d=0,f=0,m=0,x=0,g=h.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){let y=l[p];if(y.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),u++}else if(y.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),f++}else if(y.isRectAreaLight){let _=n.rectArea[m];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(g),x++}}}return{setup:o,setupView:c,state:n}}function th(i){let t=new Bg(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function kg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new th(i),t.set(s,[o])):r>=a.length?(o=new th(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var ic=class extends Un{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=qu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},sc=class extends Un{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Hg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vg=`uniform sampler2D shadow_pass;
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
}`;function Gg(i,t,e){let n=new Is,s=new It,r=new It,a=new ee,o=new ic({depthPacking:Yu}),c=new sc,l={},h=e.maxTextureSize,u={[Qn]:Le,[Le]:Qn,[ze]:ze},d=new je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:Hg,fragmentShader:Vg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Ee;m.setAttribute("position",new ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new kt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uh;let p=this.type;this.render=function(T,A,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let w=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),P=i.state;P.setBlending(Zn),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let O=p!==An&&this.type===An,H=p===An&&this.type!==An;for(let Y=0,W=T.length;Y<W;Y++){let j=T[Y],G=j.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let it=G.getFrameExtents();if(s.multiply(it),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,G.mapSize.y=r.y)),G.map===null||O===!0||H===!0){let Mt=this.type!==An?{minFilter:qe,magFilter:qe}:{};G.map!==null&&G.map.dispose(),G.map=new Ln(s.x,s.y,Mt),G.map.texture.name=j.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let ht=G.getViewportCount();for(let Mt=0;Mt<ht;Mt++){let Ft=G.getViewport(Mt);a.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),P.viewport(a),G.updateMatrices(j,Mt),n=G.getFrustum(),_(A,I,G.camera,j,this.type)}G.isPointLightShadow!==!0&&this.type===An&&S(G,I),G.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(w,M,C)};function S(T,A){let I=t.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ln(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,I,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,I,f,x,null)}function y(T,A,I,w){let M=null,C=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)M=C;else if(M=I.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let P=M.uuid,O=A.uuid,H=l[P];H===void 0&&(H={},l[P]=H);let Y=H[O];Y===void 0&&(Y=M.clone(),H[O]=Y,A.addEventListener("dispose",R)),M=Y}if(M.visible=A.visible,M.wireframe=A.wireframe,w===An?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let P=i.properties.get(M);P.light=I}return M}function _(T,A,I,w,M){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===An)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);let O=t.update(T),H=T.material;if(Array.isArray(H)){let Y=O.groups;for(let W=0,j=Y.length;W<j;W++){let G=Y[W],it=H[G.materialIndex];if(it&&it.visible){let ht=y(T,it,w,M);T.onBeforeShadow(i,T,A,I,O,ht,G),i.renderBufferDirect(I,null,O,ht,T,G),T.onAfterShadow(i,T,A,I,O,ht,G)}}}else if(H.visible){let Y=y(T,H,w,M);T.onBeforeShadow(i,T,A,I,O,Y,null),i.renderBufferDirect(I,null,O,Y,T,null),T.onAfterShadow(i,T,A,I,O,Y,null)}}let P=T.children;for(let O=0,H=P.length;O<H;O++)_(P[O],A,I,w,M)}function R(T){T.target.removeEventListener("dispose",R);for(let I in l){let w=l[I],M=T.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}var Wg={[ao]:oo,[co]:uo,[lo]:fo,[Ki]:ho,[oo]:ao,[uo]:co,[fo]:lo,[ho]:Ki};function Xg(i,t){function e(){let D=!1,nt=new ee,V=null,$=new ee(0,0,0,0);return{setMask:function(ct){V!==ct&&!D&&(i.colorMask(ct,ct,ct,ct),V=ct)},setLocked:function(ct){D=ct},setClear:function(ct,at,Lt,pe,Re){Re===!0&&(ct*=pe,at*=pe,Lt*=pe),nt.set(ct,at,Lt,pe),$.equals(nt)===!1&&(i.clearColor(ct,at,Lt,pe),$.copy(nt))},reset:function(){D=!1,V=null,$.set(-1,0,0,0)}}}function n(){let D=!1,nt=!1,V=null,$=null,ct=null;return{setReversed:function(at){if(nt!==at){let Lt=t.get("EXT_clip_control");nt?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT);let pe=ct;ct=null,this.setClear(pe)}nt=at},getReversed:function(){return nt},setTest:function(at){at?st(i.DEPTH_TEST):Tt(i.DEPTH_TEST)},setMask:function(at){V!==at&&!D&&(i.depthMask(at),V=at)},setFunc:function(at){if(nt&&(at=Wg[at]),$!==at){switch(at){case ao:i.depthFunc(i.NEVER);break;case oo:i.depthFunc(i.ALWAYS);break;case co:i.depthFunc(i.LESS);break;case Ki:i.depthFunc(i.LEQUAL);break;case lo:i.depthFunc(i.EQUAL);break;case ho:i.depthFunc(i.GEQUAL);break;case uo:i.depthFunc(i.GREATER);break;case fo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=at}},setLocked:function(at){D=at},setClear:function(at){ct!==at&&(nt&&(at=1-at),i.clearDepth(at),ct=at)},reset:function(){D=!1,V=null,$=null,ct=null,nt=!1}}}function s(){let D=!1,nt=null,V=null,$=null,ct=null,at=null,Lt=null,pe=null,Re=null;return{setTest:function(Kt){D||(Kt?st(i.STENCIL_TEST):Tt(i.STENCIL_TEST))},setMask:function(Kt){nt!==Kt&&!D&&(i.stencilMask(Kt),nt=Kt)},setFunc:function(Kt,en,yn){(V!==Kt||$!==en||ct!==yn)&&(i.stencilFunc(Kt,en,yn),V=Kt,$=en,ct=yn)},setOp:function(Kt,en,yn){(at!==Kt||Lt!==en||pe!==yn)&&(i.stencilOp(Kt,en,yn),at=Kt,Lt=en,pe=yn)},setLocked:function(Kt){D=Kt},setClear:function(Kt){Re!==Kt&&(i.clearStencil(Kt),Re=Kt)},reset:function(){D=!1,nt=null,V=null,$=null,ct=null,at=null,Lt=null,pe=null,Re=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,S=null,y=null,_=null,R=null,T=null,A=new At(0,0,0),I=0,w=!1,M=null,C=null,P=null,O=null,H=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,j=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=j>=1):G.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=j>=2);let it=null,ht={},Mt=i.getParameter(i.SCISSOR_BOX),Ft=i.getParameter(i.VIEWPORT),ne=new ee().fromArray(Mt),q=new ee().fromArray(Ft);function tt(D,nt,V,$){let ct=new Uint8Array(4),at=i.createTexture();i.bindTexture(D,at),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Lt=0;Lt<V;Lt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(nt,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(nt+Lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return at}let _t={};_t[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(i.DEPTH_TEST),a.setFunc(Ki),Ht(!1),Vt(sl),st(i.CULL_FACE),z(Zn);function st(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Tt(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Pt(D,nt){return u[D]!==nt?(i.bindFramebuffer(D,nt),u[D]=nt,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=nt),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=nt),!0):!1}function Bt(D,nt){let V=f,$=!1;if(D){V=d.get(nt),V===void 0&&(V=[],d.set(nt,V));let ct=D.textures;if(V.length!==ct.length||V[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Lt=ct.length;at<Lt;at++)V[at]=i.COLOR_ATTACHMENT0+at;V.length=ct.length,$=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,$=!0);$&&i.drawBuffers(V)}function de(D){return m!==D?(i.useProgram(D),m=D,!0):!1}let Wt={[fi]:i.FUNC_ADD,[yu]:i.FUNC_SUBTRACT,[Mu]:i.FUNC_REVERSE_SUBTRACT};Wt[Su]=i.MIN,Wt[bu]=i.MAX;let me={[wu]:i.ZERO,[Eu]:i.ONE,[Tu]:i.SRC_COLOR,[so]:i.SRC_ALPHA,[Lu]:i.SRC_ALPHA_SATURATE,[Iu]:i.DST_COLOR,[Ru]:i.DST_ALPHA,[Au]:i.ONE_MINUS_SRC_COLOR,[ro]:i.ONE_MINUS_SRC_ALPHA,[Pu]:i.ONE_MINUS_DST_COLOR,[Cu]:i.ONE_MINUS_DST_ALPHA,[Du]:i.CONSTANT_COLOR,[Uu]:i.ONE_MINUS_CONSTANT_COLOR,[Nu]:i.CONSTANT_ALPHA,[zu]:i.ONE_MINUS_CONSTANT_ALPHA};function z(D,nt,V,$,ct,at,Lt,pe,Re,Kt){if(D===Zn){x===!0&&(Tt(i.BLEND),x=!1);return}if(x===!1&&(st(i.BLEND),x=!0),D!==vu){if(D!==g||Kt!==w){if((p!==fi||_!==fi)&&(i.blendEquation(i.FUNC_ADD),p=fi,_=fi),Kt)switch(D){case $n:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jn:i.blendFunc(i.ONE,i.ONE);break;case rl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case al:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case $n:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case rl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case al:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,y=null,R=null,T=null,A.set(0,0,0),I=0,g=D,w=Kt}return}ct=ct||nt,at=at||V,Lt=Lt||$,(nt!==p||ct!==_)&&(i.blendEquationSeparate(Wt[nt],Wt[ct]),p=nt,_=ct),(V!==S||$!==y||at!==R||Lt!==T)&&(i.blendFuncSeparate(me[V],me[$],me[at],me[Lt]),S=V,y=$,R=at,T=Lt),(pe.equals(A)===!1||Re!==I)&&(i.blendColor(pe.r,pe.g,pe.b,Re),A.copy(pe),I=Re),g=D,w=!1}function $e(D,nt){D.side===ze?Tt(i.CULL_FACE):st(i.CULL_FACE);let V=D.side===Le;nt&&(V=!V),Ht(V),D.blending===$n&&D.transparent===!1?z(Zn):z(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let $=D.stencilWrite;o.setTest($),$&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),oe(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):Tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(D){M!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),M=D)}function Vt(D){D!==xu?(st(i.CULL_FACE),D!==C&&(D===sl?i.cullFace(i.BACK):D===_u?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Tt(i.CULL_FACE),C=D}function wt(D){D!==P&&(W&&i.lineWidth(D),P=D)}function oe(D,nt,V){D?(st(i.POLYGON_OFFSET_FILL),(O!==nt||H!==V)&&(i.polygonOffset(nt,V),O=nt,H=V)):Tt(i.POLYGON_OFFSET_FILL)}function bt(D){D?st(i.SCISSOR_TEST):Tt(i.SCISSOR_TEST)}function E(D){D===void 0&&(D=i.TEXTURE0+Y-1),it!==D&&(i.activeTexture(D),it=D)}function v(D,nt,V){V===void 0&&(it===null?V=i.TEXTURE0+Y-1:V=it);let $=ht[V];$===void 0&&($={type:void 0,texture:void 0},ht[V]=$),($.type!==D||$.texture!==nt)&&(it!==V&&(i.activeTexture(V),it=V),i.bindTexture(D,nt||_t[D]),$.type=D,$.texture=nt)}function F(){let D=ht[it];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Xt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Rt(D){ne.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),ne.copy(D))}function ft(D){q.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function Gt(D,nt){let V=l.get(nt);V===void 0&&(V=new WeakMap,l.set(nt,V));let $=V.get(D);$===void 0&&($=i.getUniformBlockIndex(nt,D.name),V.set(D,$))}function Nt(D,nt){let $=l.get(nt).get(D);c.get(nt)!==$&&(i.uniformBlockBinding(nt,$,D.__bindingPointIndex),c.set(nt,$))}function se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},it=null,ht={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,S=null,y=null,_=null,R=null,T=null,A=new At(0,0,0),I=0,w=!1,M=null,C=null,P=null,O=null,H=null,ne.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:st,disable:Tt,bindFramebuffer:Pt,drawBuffers:Bt,useProgram:de,setBlending:z,setMaterial:$e,setFlipSided:Ht,setCullFace:Vt,setLineWidth:wt,setPolygonOffset:oe,setScissorTest:bt,activeTexture:E,bindTexture:v,unbindTexture:F,compressedTexImage2D:Z,compressedTexImage3D:J,texImage2D:dt,texImage3D:Et,updateUBOMapping:Gt,uniformBlockBinding:Nt,texStorage2D:Xt,texStorage3D:K,texSubImage2D:X,texSubImage3D:vt,compressedTexSubImage2D:rt,compressedTexSubImage3D:ut,scissor:Rt,viewport:ft,reset:se}}function eh(i,t,e,n){let s=qg(n);switch(e){case xh:return i*t;case vh:return i*t;case yh:return i*t*2;case Ac:return i*t/s.components*s.byteLength;case Rc:return i*t/s.components*s.byteLength;case Mh:return i*t*2/s.components*s.byteLength;case Cc:return i*t*2/s.components*s.byteLength;case _h:return i*t*3/s.components*s.byteLength;case on:return i*t*4/s.components*s.byteLength;case Ic:return i*t*4/s.components*s.byteLength;case vr:case yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Mr:case Sr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _o:case yo:return Math.max(i,16)*Math.max(t,8)/4;case xo:case vo:return Math.max(i,8)*Math.max(t,8)/2;case Mo:case So:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Eo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case To:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ro:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Co:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Io:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Po:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Lo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Do:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case No:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case zo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Oo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case br:case Fo:case Bo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Sh:case ko:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ho:case Vo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qg(i){switch(i){case Pn:case ph:return{byteLength:1,components:1};case Cs:case mh:case Os:return{byteLength:2,components:1};case Ec:case Tc:return{byteLength:2,components:4};case xi:case wc:case mn:return{byteLength:4,components:1};case gh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Yg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new It,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(E,v){return f?new OffscreenCanvas(E,v):Tr("canvas")}function x(E,v,F){let Z=1,J=bt(E);if((J.width>F||J.height>F)&&(Z=F/Math.max(J.width,J.height)),Z<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let X=Math.floor(Z*J.width),vt=Math.floor(Z*J.height);u===void 0&&(u=m(X,vt));let rt=v?m(X,vt):u;return rt.width=X,rt.height=vt,rt.getContext("2d").drawImage(E,0,0,X,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+vt+")."),rt}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),E;return E}function g(E){return E.generateMipmaps}function p(E){i.generateMipmap(E)}function S(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(E,v,F,Z,J=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let X=v;if(v===i.RED&&(F===i.FLOAT&&(X=i.R32F),F===i.HALF_FLOAT&&(X=i.R16F),F===i.UNSIGNED_BYTE&&(X=i.R8)),v===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.R8UI),F===i.UNSIGNED_SHORT&&(X=i.R16UI),F===i.UNSIGNED_INT&&(X=i.R32UI),F===i.BYTE&&(X=i.R8I),F===i.SHORT&&(X=i.R16I),F===i.INT&&(X=i.R32I)),v===i.RG&&(F===i.FLOAT&&(X=i.RG32F),F===i.HALF_FLOAT&&(X=i.RG16F),F===i.UNSIGNED_BYTE&&(X=i.RG8)),v===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RG8UI),F===i.UNSIGNED_SHORT&&(X=i.RG16UI),F===i.UNSIGNED_INT&&(X=i.RG32UI),F===i.BYTE&&(X=i.RG8I),F===i.SHORT&&(X=i.RG16I),F===i.INT&&(X=i.RG32I)),v===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGB8UI),F===i.UNSIGNED_SHORT&&(X=i.RGB16UI),F===i.UNSIGNED_INT&&(X=i.RGB32UI),F===i.BYTE&&(X=i.RGB8I),F===i.SHORT&&(X=i.RGB16I),F===i.INT&&(X=i.RGB32I)),v===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),F===i.UNSIGNED_INT&&(X=i.RGBA32UI),F===i.BYTE&&(X=i.RGBA8I),F===i.SHORT&&(X=i.RGBA16I),F===i.INT&&(X=i.RGBA32I)),v===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),v===i.RGBA){let vt=J?jr:qt.getTransfer(Z);F===i.FLOAT&&(X=i.RGBA32F),F===i.HALF_FLOAT&&(X=i.RGBA16F),F===i.UNSIGNED_BYTE&&(X=vt===jt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function _(E,v){let F;return E?v===null||v===xi||v===ts?F=i.DEPTH24_STENCIL8:v===mn?F=i.DEPTH32F_STENCIL8:v===Cs&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===xi||v===ts?F=i.DEPTH_COMPONENT24:v===mn?F=i.DEPTH_COMPONENT32F:v===Cs&&(F=i.DEPTH_COMPONENT16),F}function R(E,v){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==qe&&E.minFilter!==pn?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function T(E){let v=E.target;v.removeEventListener("dispose",T),I(v),v.isVideoTexture&&h.delete(v)}function A(E){let v=E.target;v.removeEventListener("dispose",A),M(v)}function I(E){let v=n.get(E);if(v.__webglInit===void 0)return;let F=E.source,Z=d.get(F);if(Z){let J=Z[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&w(E),Object.keys(Z).length===0&&d.delete(F)}n.remove(E)}function w(E){let v=n.get(E);i.deleteTexture(v.__webglTexture);let F=E.source,Z=d.get(F);delete Z[v.__cacheKey],a.memory.textures--}function M(E){let v=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(v.__webglFramebuffer[Z]))for(let J=0;J<v.__webglFramebuffer[Z].length;J++)i.deleteFramebuffer(v.__webglFramebuffer[Z][J]);else i.deleteFramebuffer(v.__webglFramebuffer[Z]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Z])}else{if(Array.isArray(v.__webglFramebuffer))for(let Z=0;Z<v.__webglFramebuffer.length;Z++)i.deleteFramebuffer(v.__webglFramebuffer[Z]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Z=0;Z<v.__webglColorRenderbuffer.length;Z++)v.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Z]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let F=E.textures;for(let Z=0,J=F.length;Z<J;Z++){let X=n.get(F[Z]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(F[Z])}n.remove(E)}let C=0;function P(){C=0}function O(){let E=C;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),C+=1,E}function H(E){let v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function Y(E,v){let F=n.get(E);if(E.isVideoTexture&&wt(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){let Z=E.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(F,E,v);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+v)}function W(E,v){let F=n.get(E);if(E.version>0&&F.__version!==E.version){q(F,E,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+v)}function j(E,v){let F=n.get(E);if(E.version>0&&F.__version!==E.version){q(F,E,v);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+v)}function G(E,v){let F=n.get(E);if(E.version>0&&F.__version!==E.version){tt(F,E,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+v)}let it={[Rs]:i.REPEAT,[mi]:i.CLAMP_TO_EDGE,[go]:i.MIRRORED_REPEAT},ht={[qe]:i.NEAREST,[Xu]:i.NEAREST_MIPMAP_NEAREST,[Xs]:i.NEAREST_MIPMAP_LINEAR,[pn]:i.LINEAR,[Ea]:i.LINEAR_MIPMAP_NEAREST,[gi]:i.LINEAR_MIPMAP_LINEAR},Mt={[$u]:i.NEVER,[ed]:i.ALWAYS,[Ju]:i.LESS,[wh]:i.LEQUAL,[Ku]:i.EQUAL,[td]:i.GEQUAL,[Qu]:i.GREATER,[ju]:i.NOTEQUAL};function Ft(E,v){if(v.type===mn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===pn||v.magFilter===Ea||v.magFilter===Xs||v.magFilter===gi||v.minFilter===pn||v.minFilter===Ea||v.minFilter===Xs||v.minFilter===gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,it[v.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,it[v.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,it[v.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ht[v.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ht[v.minFilter]),v.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Mt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===qe||v.minFilter!==Xs&&v.minFilter!==gi||v.type===mn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ne(E,v){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",T));let Z=v.source,J=d.get(Z);J===void 0&&(J={},d.set(Z,J));let X=H(v);if(X!==E.__cacheKey){J[X]===void 0&&(J[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),J[X].usedTimes++;let vt=J[E.__cacheKey];vt!==void 0&&(J[E.__cacheKey].usedTimes--,vt.usedTimes===0&&w(v)),E.__cacheKey=X,E.__webglTexture=J[X].texture}return F}function q(E,v,F){let Z=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=i.TEXTURE_3D);let J=ne(E,v),X=v.source;e.bindTexture(Z,E.__webglTexture,i.TEXTURE0+F);let vt=n.get(X);if(X.version!==vt.__version||J===!0){e.activeTexture(i.TEXTURE0+F);let rt=qt.getPrimaries(qt.workingColorSpace),ut=v.colorSpace===qn?null:qt.getPrimaries(v.colorSpace),Xt=v.colorSpace===qn||rt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let K=x(v.image,!1,s.maxTextureSize);K=oe(v,K);let dt=r.convert(v.format,v.colorSpace),Et=r.convert(v.type),Rt=y(v.internalFormat,dt,Et,v.colorSpace,v.isVideoTexture);Ft(Z,v);let ft,Gt=v.mipmaps,Nt=v.isVideoTexture!==!0,se=vt.__version===void 0||J===!0,D=X.dataReady,nt=R(v,K);if(v.isDepthTexture)Rt=_(v.format===es,v.type),se&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,Rt,K.width,K.height):e.texImage2D(i.TEXTURE_2D,0,Rt,K.width,K.height,0,dt,Et,null));else if(v.isDataTexture)if(Gt.length>0){Nt&&se&&e.texStorage2D(i.TEXTURE_2D,nt,Rt,Gt[0].width,Gt[0].height);for(let V=0,$=Gt.length;V<$;V++)ft=Gt[V],Nt?D&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,ft.width,ft.height,dt,Et,ft.data):e.texImage2D(i.TEXTURE_2D,V,Rt,ft.width,ft.height,0,dt,Et,ft.data);v.generateMipmaps=!1}else Nt?(se&&e.texStorage2D(i.TEXTURE_2D,nt,Rt,K.width,K.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,K.width,K.height,dt,Et,K.data)):e.texImage2D(i.TEXTURE_2D,0,Rt,K.width,K.height,0,dt,Et,K.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Nt&&se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,nt,Rt,Gt[0].width,Gt[0].height,K.depth);for(let V=0,$=Gt.length;V<$;V++)if(ft=Gt[V],v.format!==on)if(dt!==null)if(Nt){if(D)if(v.layerUpdates.size>0){let ct=eh(ft.width,ft.height,v.format,v.type);for(let at of v.layerUpdates){let Lt=ft.data.subarray(at*ct/ft.data.BYTES_PER_ELEMENT,(at+1)*ct/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,at,ft.width,ft.height,1,dt,Lt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,ft.width,ft.height,K.depth,dt,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,Rt,ft.width,ft.height,K.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,ft.width,ft.height,K.depth,dt,Et,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,V,Rt,ft.width,ft.height,K.depth,0,dt,Et,ft.data)}else{Nt&&se&&e.texStorage2D(i.TEXTURE_2D,nt,Rt,Gt[0].width,Gt[0].height);for(let V=0,$=Gt.length;V<$;V++)ft=Gt[V],v.format!==on?dt!==null?Nt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,ft.width,ft.height,dt,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,V,Rt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?D&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,ft.width,ft.height,dt,Et,ft.data):e.texImage2D(i.TEXTURE_2D,V,Rt,ft.width,ft.height,0,dt,Et,ft.data)}else if(v.isDataArrayTexture)if(Nt){if(se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,nt,Rt,K.width,K.height,K.depth),D)if(v.layerUpdates.size>0){let V=eh(K.width,K.height,v.format,v.type);for(let $ of v.layerUpdates){let ct=K.data.subarray($*V/K.data.BYTES_PER_ELEMENT,($+1)*V/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,K.width,K.height,1,dt,Et,ct)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,dt,Et,K.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,K.width,K.height,K.depth,0,dt,Et,K.data);else if(v.isData3DTexture)Nt?(se&&e.texStorage3D(i.TEXTURE_3D,nt,Rt,K.width,K.height,K.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,dt,Et,K.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,K.width,K.height,K.depth,0,dt,Et,K.data);else if(v.isFramebufferTexture){if(se)if(Nt)e.texStorage2D(i.TEXTURE_2D,nt,Rt,K.width,K.height);else{let V=K.width,$=K.height;for(let ct=0;ct<nt;ct++)e.texImage2D(i.TEXTURE_2D,ct,Rt,V,$,0,dt,Et,null),V>>=1,$>>=1}}else if(Gt.length>0){if(Nt&&se){let V=bt(Gt[0]);e.texStorage2D(i.TEXTURE_2D,nt,Rt,V.width,V.height)}for(let V=0,$=Gt.length;V<$;V++)ft=Gt[V],Nt?D&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,dt,Et,ft):e.texImage2D(i.TEXTURE_2D,V,Rt,dt,Et,ft);v.generateMipmaps=!1}else if(Nt){if(se){let V=bt(K);e.texStorage2D(i.TEXTURE_2D,nt,Rt,V.width,V.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,Et,K)}else e.texImage2D(i.TEXTURE_2D,0,Rt,dt,Et,K);g(v)&&p(Z),vt.__version=X.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function tt(E,v,F){if(v.image.length!==6)return;let Z=ne(E,v),J=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+F);let X=n.get(J);if(J.version!==X.__version||Z===!0){e.activeTexture(i.TEXTURE0+F);let vt=qt.getPrimaries(qt.workingColorSpace),rt=v.colorSpace===qn?null:qt.getPrimaries(v.colorSpace),ut=v.colorSpace===qn||vt===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Xt=v.isCompressedTexture||v.image[0].isCompressedTexture,K=v.image[0]&&v.image[0].isDataTexture,dt=[];for(let $=0;$<6;$++)!Xt&&!K?dt[$]=x(v.image[$],!0,s.maxCubemapSize):dt[$]=K?v.image[$].image:v.image[$],dt[$]=oe(v,dt[$]);let Et=dt[0],Rt=r.convert(v.format,v.colorSpace),ft=r.convert(v.type),Gt=y(v.internalFormat,Rt,ft,v.colorSpace),Nt=v.isVideoTexture!==!0,se=X.__version===void 0||Z===!0,D=J.dataReady,nt=R(v,Et);Ft(i.TEXTURE_CUBE_MAP,v);let V;if(Xt){Nt&&se&&e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,Gt,Et.width,Et.height);for(let $=0;$<6;$++){V=dt[$].mipmaps;for(let ct=0;ct<V.length;ct++){let at=V[ct];v.format!==on?Rt!==null?Nt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,0,0,at.width,at.height,Rt,at.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,Gt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,0,0,at.width,at.height,Rt,ft,at.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,Gt,at.width,at.height,0,Rt,ft,at.data)}}}else{if(V=v.mipmaps,Nt&&se){V.length>0&&nt++;let $=bt(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,Gt,$.width,$.height)}for(let $=0;$<6;$++)if(K){Nt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,dt[$].width,dt[$].height,Rt,ft,dt[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Gt,dt[$].width,dt[$].height,0,Rt,ft,dt[$].data);for(let ct=0;ct<V.length;ct++){let Lt=V[ct].image[$].image;Nt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,0,0,Lt.width,Lt.height,Rt,ft,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,Gt,Lt.width,Lt.height,0,Rt,ft,Lt.data)}}else{Nt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Rt,ft,dt[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Gt,Rt,ft,dt[$]);for(let ct=0;ct<V.length;ct++){let at=V[ct];Nt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,0,0,Rt,ft,at.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,Gt,Rt,ft,at.image[$])}}}g(v)&&p(i.TEXTURE_CUBE_MAP),X.__version=J.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function _t(E,v,F,Z,J,X){let vt=r.convert(F.format,F.colorSpace),rt=r.convert(F.type),ut=y(F.internalFormat,vt,rt,F.colorSpace),Xt=n.get(v),K=n.get(F);if(K.__renderTarget=v,!Xt.__hasExternalTextures){let dt=Math.max(1,v.width>>X),Et=Math.max(1,v.height>>X);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,X,ut,dt,Et,v.depth,0,vt,rt,null):e.texImage2D(J,X,ut,dt,Et,0,vt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),Vt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,J,K.__webglTexture,0,Ht(v)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,J,K.__webglTexture,X),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(E,v,F){if(i.bindRenderbuffer(i.RENDERBUFFER,E),v.depthBuffer){let Z=v.depthTexture,J=Z&&Z.isDepthTexture?Z.type:null,X=_(v.stencilBuffer,J),vt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=Ht(v);Vt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,X,v.width,v.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,X,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,X,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,E)}else{let Z=v.textures;for(let J=0;J<Z.length;J++){let X=Z[J],vt=r.convert(X.format,X.colorSpace),rt=r.convert(X.type),ut=y(X.internalFormat,vt,rt,X.colorSpace),Xt=Ht(v);F&&Vt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt,ut,v.width,v.height):Vt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xt,ut,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ut,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Tt(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=n.get(v.depthTexture);Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y(v.depthTexture,0);let J=Z.__webglTexture,X=Ht(v);if(v.depthTexture.format===Zi)Vt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(v.depthTexture.format===es)Vt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Pt(E){let v=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){let Z=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Z){let J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Z.removeEventListener("dispose",J)};Z.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=Z}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Tt(v.__webglFramebuffer,E)}else if(F){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]===void 0)v.__webglDepthbuffer[Z]=i.createRenderbuffer(),st(v.__webglDepthbuffer[Z],E,!1);else{let J=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,X)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),st(v.__webglDepthbuffer,E,!1);else{let Z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(E,v,F){let Z=n.get(E);v!==void 0&&_t(Z.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Pt(E)}function de(E){let v=E.texture,F=n.get(E),Z=n.get(v);E.addEventListener("dispose",A);let J=E.textures,X=E.isWebGLCubeRenderTarget===!0,vt=J.length>1;if(vt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=v.version,a.memory.textures++),X){F.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[rt]=[];for(let ut=0;ut<v.mipmaps.length;ut++)F.__webglFramebuffer[rt][ut]=i.createFramebuffer()}else F.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let rt=0;rt<v.mipmaps.length;rt++)F.__webglFramebuffer[rt]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(vt)for(let rt=0,ut=J.length;rt<ut;rt++){let Xt=n.get(J[rt]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&Vt(E)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let rt=0;rt<J.length;rt++){let ut=J[rt];F.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[rt]);let Xt=r.convert(ut.format,ut.colorSpace),K=r.convert(ut.type),dt=y(ut.internalFormat,Xt,K,ut.colorSpace,E.isXRRenderTarget===!0),Et=Ht(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,dt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,F.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),st(F.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Ft(i.TEXTURE_CUBE_MAP,v);for(let rt=0;rt<6;rt++)if(v.mipmaps&&v.mipmaps.length>0)for(let ut=0;ut<v.mipmaps.length;ut++)_t(F.__webglFramebuffer[rt][ut],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ut);else _t(F.__webglFramebuffer[rt],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);g(v)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let rt=0,ut=J.length;rt<ut;rt++){let Xt=J[rt],K=n.get(Xt);e.bindTexture(i.TEXTURE_2D,K.__webglTexture),Ft(i.TEXTURE_2D,Xt),_t(F.__webglFramebuffer,E,Xt,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,0),g(Xt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(rt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,Z.__webglTexture),Ft(rt,v),v.mipmaps&&v.mipmaps.length>0)for(let ut=0;ut<v.mipmaps.length;ut++)_t(F.__webglFramebuffer[ut],E,v,i.COLOR_ATTACHMENT0,rt,ut);else _t(F.__webglFramebuffer,E,v,i.COLOR_ATTACHMENT0,rt,0);g(v)&&p(rt),e.unbindTexture()}E.depthBuffer&&Pt(E)}function Wt(E){let v=E.textures;for(let F=0,Z=v.length;F<Z;F++){let J=v[F];if(g(J)){let X=S(E),vt=n.get(J).__webglTexture;e.bindTexture(X,vt),p(X),e.unbindTexture()}}}let me=[],z=[];function $e(E){if(E.samples>0){if(Vt(E)===!1){let v=E.textures,F=E.width,Z=E.height,J=i.COLOR_BUFFER_BIT,X=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(E),rt=v.length>1;if(rt)for(let ut=0;ut<v.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let ut=0;ut<v.length;ut++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ut]);let Xt=n.get(v[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xt,0)}i.blitFramebuffer(0,0,F,Z,0,0,F,Z,J,i.NEAREST),c===!0&&(me.length=0,z.length=0,me.push(i.COLOR_ATTACHMENT0+ut),E.depthBuffer&&E.resolveDepthBuffer===!1&&(me.push(X),z.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,me))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let ut=0;ut<v.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ut]);let Xt=n.get(v[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){let v=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Ht(E){return Math.min(s.maxSamples,E.samples)}function Vt(E){let v=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function wt(E){let v=a.render.frame;h.get(E)!==v&&(h.set(E,v),E.update())}function oe(E,v){let F=E.colorSpace,Z=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==rs&&F!==qn&&(qt.getTransfer(F)===jt?(Z!==on||J!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function bt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=P,this.setTexture2D=Y,this.setTexture2DArray=W,this.setTexture3D=j,this.setTextureCube=G,this.rebindTextures=Bt,this.setupRenderTarget=de,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Vt}function Zg(i,t){function e(n,s=qn){let r,a=qt.getTransfer(s);if(n===Pn)return i.UNSIGNED_BYTE;if(n===Ec)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Tc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ph)return i.BYTE;if(n===mh)return i.SHORT;if(n===Cs)return i.UNSIGNED_SHORT;if(n===wc)return i.INT;if(n===xi)return i.UNSIGNED_INT;if(n===mn)return i.FLOAT;if(n===Os)return i.HALF_FLOAT;if(n===xh)return i.ALPHA;if(n===_h)return i.RGB;if(n===on)return i.RGBA;if(n===vh)return i.LUMINANCE;if(n===yh)return i.LUMINANCE_ALPHA;if(n===Zi)return i.DEPTH_COMPONENT;if(n===es)return i.DEPTH_STENCIL;if(n===Ac)return i.RED;if(n===Rc)return i.RED_INTEGER;if(n===Mh)return i.RG;if(n===Cc)return i.RG_INTEGER;if(n===Ic)return i.RGBA_INTEGER;if(n===vr||n===yr||n===Mr||n===Sr)if(a===jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Sr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xo||n===_o||n===vo||n===yo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_o)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Mo||n===So||n===bo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Mo||n===So)return a===jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===bo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===wo||n===Eo||n===To||n===Ao||n===Ro||n===Co||n===Io||n===Po||n===Lo||n===Do||n===Uo||n===No||n===zo||n===Oo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Eo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===To)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ao)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ro)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Co)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Io)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Po)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Lo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Do)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Uo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===No)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===br||n===Fo||n===Bo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===br)return a===jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sh||n===ko||n===Ho||n===Vo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===br)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ko)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ho)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var rc=class extends Pe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Oe=class extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}},$g={type:"move"},As=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),p=this._getHandJoint(l,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($g)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Oe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Jg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ac=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new He,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new je({vertexShader:Jg,fragmentShader:Kg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new kt(new _n(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},oc=class extends ti{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null,x=new ac,g=e.getContextAttributes(),p=null,S=null,y=[],_=[],R=new It,T=null,A=new Pe;A.viewport=new ee;let I=new Pe;I.viewport=new ee;let w=[A,I],M=new rc,C=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let tt=y[q];return tt===void 0&&(tt=new As,y[q]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(q){let tt=y[q];return tt===void 0&&(tt=new As,y[q]=tt),tt.getGripSpace()},this.getHand=function(q){let tt=y[q];return tt===void 0&&(tt=new As,y[q]=tt),tt.getHandSpace()};function O(q){let tt=_.indexOf(q.inputSource);if(tt===-1)return;let _t=y[tt];_t!==void 0&&(_t.update(q.inputSource,q.frame,l||a),_t.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",Y);for(let q=0;q<y.length;q++){let tt=_[q];tt!==null&&(_[q]=null,y[q].disconnect(tt))}C=null,P=null,x.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,S=null,ne.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",H),s.addEventListener("inputsourceschange",Y),g.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){let tt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Ln(f.framebufferWidth,f.framebufferHeight,{format:on,type:Pn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let tt=null,_t=null,st=null;g.depth&&(st=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=g.stencil?es:Zi,_t=g.stencil?ts:xi);let Tt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Tt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Ln(d.textureWidth,d.textureHeight,{format:on,type:Pn,depthTexture:new Or(d.textureWidth,d.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ne.setContext(s),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y(q){for(let tt=0;tt<q.removed.length;tt++){let _t=q.removed[tt],st=_.indexOf(_t);st>=0&&(_[st]=null,y[st].disconnect(_t))}for(let tt=0;tt<q.added.length;tt++){let _t=q.added[tt],st=_.indexOf(_t);if(st===-1){for(let Pt=0;Pt<y.length;Pt++)if(Pt>=_.length){_.push(_t),st=Pt;break}else if(_[Pt]===null){_[Pt]=_t,st=Pt;break}if(st===-1)break}let Tt=y[st];Tt&&Tt.connect(_t)}}let W=new L,j=new L;function G(q,tt,_t){W.setFromMatrixPosition(tt.matrixWorld),j.setFromMatrixPosition(_t.matrixWorld);let st=W.distanceTo(j),Tt=tt.projectionMatrix.elements,Pt=_t.projectionMatrix.elements,Bt=Tt[14]/(Tt[10]-1),de=Tt[14]/(Tt[10]+1),Wt=(Tt[9]+1)/Tt[5],me=(Tt[9]-1)/Tt[5],z=(Tt[8]-1)/Tt[0],$e=(Pt[8]+1)/Pt[0],Ht=Bt*z,Vt=Bt*$e,wt=st/(-z+$e),oe=wt*-z;if(tt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(oe),q.translateZ(wt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Tt[10]===-1)q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let bt=Bt+wt,E=de+wt,v=Ht-oe,F=Vt+(st-oe),Z=Wt*de/E*bt,J=me*de/E*bt;q.projectionMatrix.makePerspective(v,F,Z,J,bt,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function it(q,tt){tt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(tt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let tt=q.near,_t=q.far;x.texture!==null&&(x.depthNear>0&&(tt=x.depthNear),x.depthFar>0&&(_t=x.depthFar)),M.near=I.near=A.near=tt,M.far=I.far=A.far=_t,(C!==M.near||P!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,P=M.far),A.layers.mask=q.layers.mask|2,I.layers.mask=q.layers.mask|4,M.layers.mask=A.layers.mask|I.layers.mask;let st=q.parent,Tt=M.cameras;it(M,st);for(let Pt=0;Pt<Tt.length;Pt++)it(Tt[Pt],st);Tt.length===2?G(M,A,I):M.projectionMatrix.copy(A.projectionMatrix),ht(q,M,st)};function ht(q,tt,_t){_t===null?q.matrix.copy(tt.matrixWorld):(q.matrix.copy(_t.matrixWorld),q.matrix.invert(),q.matrix.multiply(tt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Xo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let Mt=null;function Ft(q,tt){if(h=tt.getViewerPose(l||a),m=tt,h!==null){let _t=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let st=!1;_t.length!==M.cameras.length&&(M.cameras.length=0,st=!0);for(let Pt=0;Pt<_t.length;Pt++){let Bt=_t[Pt],de=null;if(f!==null)de=f.getViewport(Bt);else{let me=u.getViewSubImage(d,Bt);de=me.viewport,Pt===0&&(t.setRenderTargetTextures(S,me.colorTexture,d.ignoreDepthValues?void 0:me.depthStencilTexture),t.setRenderTarget(S))}let Wt=w[Pt];Wt===void 0&&(Wt=new Pe,Wt.layers.enable(Pt),Wt.viewport=new ee,w[Pt]=Wt),Wt.matrix.fromArray(Bt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Bt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(de.x,de.y,de.width,de.height),Pt===0&&(M.matrix.copy(Wt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),st===!0&&M.cameras.push(Wt)}let Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){let Pt=u.getDepthInformation(_t[0]);Pt&&Pt.isValid&&Pt.texture&&x.init(t,Pt,s.renderState)}}for(let _t=0;_t<y.length;_t++){let st=_[_t],Tt=y[_t];st!==null&&Tt!==void 0&&Tt.update(st,tt,l||a)}Mt&&Mt(q,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),m=null}let ne=new Rh;ne.setAnimationLoop(Ft),this.setAnimationLoop=function(q){Mt=q},this.dispose=function(){}}},ui=new xn,Qg=new Qt;function jg(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Ah(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,S,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,S,y):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Le&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Le&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let S=t.get(p),y=S.envMap,_=S.envMapRotation;y&&(g.envMap.value=y,ui.copy(_),ui.x*=-1,ui.y*=-1,ui.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),g.envMapRotation.value.setFromMatrix4(Qg.makeRotationFromEuler(ui)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,S,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*S,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,S){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Le&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let S=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function t0(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,y){let _=y.program;n.uniformBlockBinding(S,_)}function l(S,y){let _=s[S.id];_===void 0&&(m(S),_=h(S),s[S.id]=_,S.addEventListener("dispose",g));let R=y.program;n.updateUBOMapping(S,R);let T=t.render.frame;r[S.id]!==T&&(d(S),r[S.id]=T)}function h(S){let y=u();S.__bindingPointIndex=y;let _=i.createBuffer(),R=S.__size,T=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let y=s[S.id],_=S.uniforms,R=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,A=_.length;T<A;T++){let I=Array.isArray(_[T])?_[T]:[_[T]];for(let w=0,M=I.length;w<M;w++){let C=I[w];if(f(C,T,w,R)===!0){let P=C.__offset,O=Array.isArray(C.value)?C.value:[C.value],H=0;for(let Y=0;Y<O.length;Y++){let W=O[Y],j=x(W);typeof W=="number"||typeof W=="boolean"?(C.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,P+H,C.__data)):W.isMatrix3?(C.__data[0]=W.elements[0],C.__data[1]=W.elements[1],C.__data[2]=W.elements[2],C.__data[3]=0,C.__data[4]=W.elements[3],C.__data[5]=W.elements[4],C.__data[6]=W.elements[5],C.__data[7]=0,C.__data[8]=W.elements[6],C.__data[9]=W.elements[7],C.__data[10]=W.elements[8],C.__data[11]=0):(W.toArray(C.__data,H),H+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,P,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,y,_,R){let T=S.value,A=y+"_"+_;if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:R[A]=T.clone(),!0;{let I=R[A];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return R[A]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function m(S){let y=S.uniforms,_=0,R=16;for(let A=0,I=y.length;A<I;A++){let w=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,C=w.length;M<C;M++){let P=w[M],O=Array.isArray(P.value)?P.value:[P.value];for(let H=0,Y=O.length;H<Y;H++){let W=O[H],j=x(W),G=_%R,it=G%j.boundary,ht=G+it;_+=it,ht!==0&&R-ht<j.storage&&(_+=R-ht),P.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=_,_+=j.storage}}}let T=_%R;return T>0&&(_+=R-T),S.__size=_,S.__cache={},this}function x(S){let y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function g(S){let y=S.target;y.removeEventListener("dispose",g);let _=a.indexOf(y.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Fr=class{constructor(t={}){let{canvas:e=id(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,S=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=we,this.toneMapping=Jn,this.toneMappingExposure=1;let _=this,R=!1,T=0,A=0,I=null,w=-1,M=null,C=new ee,P=new ee,O=null,H=new At(0),Y=0,W=e.width,j=e.height,G=1,it=null,ht=null,Mt=new ee(0,0,W,j),Ft=new ee(0,0,W,j),ne=!1,q=new Is,tt=!1,_t=!1,st=new Qt,Tt=new Qt,Pt=new L,Bt=new ee,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Wt=!1;function me(){return I===null?G:1}let z=n;function $e(b,U){return e.getContext(b,U)}try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",at,!1),z===null){let U="webgl2";if(z=$e(U,b),z===null)throw $e(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ht,Vt,wt,oe,bt,E,v,F,Z,J,X,vt,rt,ut,Xt,K,dt,Et,Rt,ft,Gt,Nt,se,D;function nt(){Ht=new gm(z),Ht.init(),Nt=new Zg(z,Ht),Vt=new hm(z,Ht,t,Nt),wt=new Xg(z,Ht),Vt.reverseDepthBuffer&&d&&wt.buffers.depth.setReversed(!0),oe=new vm(z),bt=new Lg,E=new Yg(z,Ht,wt,bt,Vt,Nt,oe),v=new dm(_),F=new mm(_),Z=new Ed(z),se=new cm(z,Z),J=new xm(z,Z,oe,se),X=new Mm(z,J,Z,oe),Rt=new ym(z,Vt,E),K=new um(bt),vt=new Pg(_,v,F,Ht,Vt,se,K),rt=new jg(_,bt),ut=new Ug,Xt=new kg(Ht),Et=new om(_,v,F,wt,X,f,c),dt=new Gg(_,X,Vt),D=new t0(z,oe,Vt,wt),ft=new lm(z,Ht,oe),Gt=new _m(z,Ht,oe),oe.programs=vt.programs,_.capabilities=Vt,_.extensions=Ht,_.properties=bt,_.renderLists=ut,_.shadowMap=dt,_.state=wt,_.info=oe}nt();let V=new oc(_,z);this.xr=V,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let b=Ht.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Ht.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(b){b!==void 0&&(G=b,this.setSize(W,j,!1))},this.getSize=function(b){return b.set(W,j)},this.setSize=function(b,U,B=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=b,j=U,e.width=Math.floor(b*G),e.height=Math.floor(U*G),B===!0&&(e.style.width=b+"px",e.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(W*G,j*G).floor()},this.setDrawingBufferSize=function(b,U,B){W=b,j=U,G=B,e.width=Math.floor(b*B),e.height=Math.floor(U*B),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(C)},this.getViewport=function(b){return b.copy(Mt)},this.setViewport=function(b,U,B,k){b.isVector4?Mt.set(b.x,b.y,b.z,b.w):Mt.set(b,U,B,k),wt.viewport(C.copy(Mt).multiplyScalar(G).round())},this.getScissor=function(b){return b.copy(Ft)},this.setScissor=function(b,U,B,k){b.isVector4?Ft.set(b.x,b.y,b.z,b.w):Ft.set(b,U,B,k),wt.scissor(P.copy(Ft).multiplyScalar(G).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(b){wt.setScissorTest(ne=b)},this.setOpaqueSort=function(b){it=b},this.setTransparentSort=function(b){ht=b},this.getClearColor=function(b){return b.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor.apply(Et,arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha.apply(Et,arguments)},this.clear=function(b=!0,U=!0,B=!0){let k=0;if(b){let N=!1;if(I!==null){let Q=I.texture.format;N=Q===Ic||Q===Cc||Q===Rc}if(N){let Q=I.texture.type,ot=Q===Pn||Q===xi||Q===Cs||Q===ts||Q===Ec||Q===Tc,mt=Et.getClearColor(),gt=Et.getClearAlpha(),Ct=mt.r,Dt=mt.g,xt=mt.b;ot?(m[0]=Ct,m[1]=Dt,m[2]=xt,m[3]=gt,z.clearBufferuiv(z.COLOR,0,m)):(x[0]=Ct,x[1]=Dt,x[2]=xt,x[3]=gt,z.clearBufferiv(z.COLOR,0,x))}else k|=z.COLOR_BUFFER_BIT}U&&(k|=z.DEPTH_BUFFER_BIT),B&&(k|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",at,!1),ut.dispose(),Xt.dispose(),bt.dispose(),v.dispose(),F.dispose(),X.dispose(),se.dispose(),D.dispose(),vt.dispose(),V.dispose(),V.removeEventListener("sessionstart",Jc),V.removeEventListener("sessionend",Kc),ri.stop()};function $(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let b=oe.autoReset,U=dt.enabled,B=dt.autoUpdate,k=dt.needsUpdate,N=dt.type;nt(),oe.autoReset=b,dt.enabled=U,dt.autoUpdate=B,dt.needsUpdate=k,dt.type=N}function at(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Lt(b){let U=b.target;U.removeEventListener("dispose",Lt),pe(U)}function pe(b){Re(b),bt.remove(b)}function Re(b){let U=bt.get(b).programs;U!==void 0&&(U.forEach(function(B){vt.releaseProgram(B)}),b.isShaderMaterial&&vt.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,B,k,N,Q){U===null&&(U=de);let ot=N.isMesh&&N.matrixWorld.determinant()<0,mt=pu(b,U,B,k,N);wt.setMaterial(k,ot);let gt=B.index,Ct=1;if(k.wireframe===!0){if(gt=J.getWireframeAttribute(B),gt===void 0)return;Ct=2}let Dt=B.drawRange,xt=B.attributes.position,Yt=Dt.start*Ct,re=(Dt.start+Dt.count)*Ct;Q!==null&&(Yt=Math.max(Yt,Q.start*Ct),re=Math.min(re,(Q.start+Q.count)*Ct)),gt!==null?(Yt=Math.max(Yt,0),re=Math.min(re,gt.count)):xt!=null&&(Yt=Math.max(Yt,0),re=Math.min(re,xt.count));let ce=re-Yt;if(ce<0||ce===1/0)return;se.setup(N,k,mt,B,gt);let Be,$t=ft;if(gt!==null&&(Be=Z.get(gt),$t=Gt,$t.setIndex(Be)),N.isMesh)k.wireframe===!0?(wt.setLineWidth(k.wireframeLinewidth*me()),$t.setMode(z.LINES)):$t.setMode(z.TRIANGLES);else if(N.isLine){let yt=k.linewidth;yt===void 0&&(yt=1),wt.setLineWidth(yt*me()),N.isLineSegments?$t.setMode(z.LINES):N.isLineLoop?$t.setMode(z.LINE_LOOP):$t.setMode(z.LINE_STRIP)}else N.isPoints?$t.setMode(z.POINTS):N.isSprite&&$t.setMode(z.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)$t.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ht.get("WEBGL_multi_draw"))$t.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let yt=N._multiDrawStarts,Mn=N._multiDrawCounts,Jt=N._multiDrawCount,nn=gt?Z.get(gt).bytesPerElement:1,Ai=bt.get(k).currentProgram.getUniforms();for(let Ge=0;Ge<Jt;Ge++)Ai.setValue(z,"_gl_DrawID",Ge),$t.render(yt[Ge]/nn,Mn[Ge])}else if(N.isInstancedMesh)$t.renderInstances(Yt,ce,N.count);else if(B.isInstancedBufferGeometry){let yt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Mn=Math.min(B.instanceCount,yt);$t.renderInstances(Yt,ce,Mn)}else $t.render(Yt,ce)};function Kt(b,U,B){b.transparent===!0&&b.side===ze&&b.forceSinglePass===!1?(b.side=Le,b.needsUpdate=!0,Ws(b,U,B),b.side=Qn,b.needsUpdate=!0,Ws(b,U,B),b.side=ze):Ws(b,U,B)}this.compile=function(b,U,B=null){B===null&&(B=b),p=Xt.get(B),p.init(U),y.push(p),B.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),b!==B&&b.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let k=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let Q=N.material;if(Q)if(Array.isArray(Q))for(let ot=0;ot<Q.length;ot++){let mt=Q[ot];Kt(mt,B,N),k.add(mt)}else Kt(Q,B,N),k.add(Q)}),y.pop(),p=null,k},this.compileAsync=function(b,U,B=null){let k=this.compile(b,U,B);return new Promise(N=>{function Q(){if(k.forEach(function(ot){bt.get(ot).currentProgram.isReady()&&k.delete(ot)}),k.size===0){N(b);return}setTimeout(Q,10)}Ht.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let en=null;function yn(b){en&&en(b)}function Jc(){ri.stop()}function Kc(){ri.start()}let ri=new Rh;ri.setAnimationLoop(yn),typeof self<"u"&&ri.setContext(self),this.setAnimationLoop=function(b){en=b,V.setAnimationLoop(b),b===null?ri.stop():ri.start()},V.addEventListener("sessionstart",Jc),V.addEventListener("sessionend",Kc),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(U),U=V.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,U,I),p=Xt.get(b,y.length),p.init(U),y.push(p),Tt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix(Tt),_t=this.localClippingEnabled,tt=K.init(this.clippingPlanes,_t),g=ut.get(b,S.length),g.init(),S.push(g),V.enabled===!0&&V.isPresenting===!0){let Q=_.xr.getDepthSensingMesh();Q!==null&&wa(Q,U,-1/0,_.sortObjects)}wa(b,U,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(it,ht),Wt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Wt&&Et.addToRenderList(g,b),this.info.render.frame++,tt===!0&&K.beginShadows();let B=p.state.shadowsArray;dt.render(B,b,U),tt===!0&&K.endShadows(),this.info.autoReset===!0&&this.info.reset();let k=g.opaque,N=g.transmissive;if(p.setupLights(),U.isArrayCamera){let Q=U.cameras;if(N.length>0)for(let ot=0,mt=Q.length;ot<mt;ot++){let gt=Q[ot];jc(k,N,b,gt)}Wt&&Et.render(b);for(let ot=0,mt=Q.length;ot<mt;ot++){let gt=Q[ot];Qc(g,b,gt,gt.viewport)}}else N.length>0&&jc(k,N,b,U),Wt&&Et.render(b),Qc(g,b,U);I!==null&&(E.updateMultisampleRenderTarget(I),E.updateRenderTargetMipmap(I)),b.isScene===!0&&b.onAfterRender(_,b,U),se.resetDefaultState(),w=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],tt===!0&&K.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?g=S[S.length-1]:g=null};function wa(b,U,B,k){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)B=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||q.intersectsSprite(b)){k&&Bt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Tt);let ot=X.update(b),mt=b.material;mt.visible&&g.push(b,ot,mt,B,Bt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||q.intersectsObject(b))){let ot=X.update(b),mt=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Bt.copy(b.boundingSphere.center)):(ot.boundingSphere===null&&ot.computeBoundingSphere(),Bt.copy(ot.boundingSphere.center)),Bt.applyMatrix4(b.matrixWorld).applyMatrix4(Tt)),Array.isArray(mt)){let gt=ot.groups;for(let Ct=0,Dt=gt.length;Ct<Dt;Ct++){let xt=gt[Ct],Yt=mt[xt.materialIndex];Yt&&Yt.visible&&g.push(b,ot,Yt,B,Bt.z,xt)}}else mt.visible&&g.push(b,ot,mt,B,Bt.z,null)}}let Q=b.children;for(let ot=0,mt=Q.length;ot<mt;ot++)wa(Q[ot],U,B,k)}function Qc(b,U,B,k){let N=b.opaque,Q=b.transmissive,ot=b.transparent;p.setupLightsView(B),tt===!0&&K.setGlobalState(_.clippingPlanes,B),k&&wt.viewport(C.copy(k)),N.length>0&&Gs(N,U,B),Q.length>0&&Gs(Q,U,B),ot.length>0&&Gs(ot,U,B),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function jc(b,U,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new Ln(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?Os:Pn,minFilter:gi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));let Q=p.state.transmissionRenderTarget[k.id],ot=k.viewport||C;Q.setSize(ot.z,ot.w);let mt=_.getRenderTarget();_.setRenderTarget(Q),_.getClearColor(H),Y=_.getClearAlpha(),Y<1&&_.setClearColor(16777215,.5),_.clear(),Wt&&Et.render(B);let gt=_.toneMapping;_.toneMapping=Jn;let Ct=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),tt===!0&&K.setGlobalState(_.clippingPlanes,k),Gs(b,B,k),E.updateMultisampleRenderTarget(Q),E.updateRenderTargetMipmap(Q),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let xt=0,Yt=U.length;xt<Yt;xt++){let re=U[xt],ce=re.object,Be=re.geometry,$t=re.material,yt=re.group;if($t.side===ze&&ce.layers.test(k.layers)){let Mn=$t.side;$t.side=Le,$t.needsUpdate=!0,tl(ce,B,k,Be,$t,yt),$t.side=Mn,$t.needsUpdate=!0,Dt=!0}}Dt===!0&&(E.updateMultisampleRenderTarget(Q),E.updateRenderTargetMipmap(Q))}_.setRenderTarget(mt),_.setClearColor(H,Y),Ct!==void 0&&(k.viewport=Ct),_.toneMapping=gt}function Gs(b,U,B){let k=U.isScene===!0?U.overrideMaterial:null;for(let N=0,Q=b.length;N<Q;N++){let ot=b[N],mt=ot.object,gt=ot.geometry,Ct=k===null?ot.material:k,Dt=ot.group;mt.layers.test(B.layers)&&tl(mt,U,B,gt,Ct,Dt)}}function tl(b,U,B,k,N,Q){b.onBeforeRender(_,U,B,k,N,Q),b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(_,U,B,k,b,Q),N.transparent===!0&&N.side===ze&&N.forceSinglePass===!1?(N.side=Le,N.needsUpdate=!0,_.renderBufferDirect(B,U,k,N,b,Q),N.side=Qn,N.needsUpdate=!0,_.renderBufferDirect(B,U,k,N,b,Q),N.side=ze):_.renderBufferDirect(B,U,k,N,b,Q),b.onAfterRender(_,U,B,k,N,Q)}function Ws(b,U,B){U.isScene!==!0&&(U=de);let k=bt.get(b),N=p.state.lights,Q=p.state.shadowsArray,ot=N.state.version,mt=vt.getParameters(b,N.state,Q,U,B),gt=vt.getProgramCacheKey(mt),Ct=k.programs;k.environment=b.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(b.isMeshStandardMaterial?F:v).get(b.envMap||k.environment),k.envMapRotation=k.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Ct===void 0&&(b.addEventListener("dispose",Lt),Ct=new Map,k.programs=Ct);let Dt=Ct.get(gt);if(Dt!==void 0){if(k.currentProgram===Dt&&k.lightsStateVersion===ot)return nl(b,mt),Dt}else mt.uniforms=vt.getUniforms(b),b.onBeforeCompile(mt,_),Dt=vt.acquireProgram(mt,gt),Ct.set(gt,Dt),k.uniforms=mt.uniforms;let xt=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(xt.clippingPlanes=K.uniform),nl(b,mt),k.needsLights=gu(b),k.lightsStateVersion=ot,k.needsLights&&(xt.ambientLightColor.value=N.state.ambient,xt.lightProbe.value=N.state.probe,xt.directionalLights.value=N.state.directional,xt.directionalLightShadows.value=N.state.directionalShadow,xt.spotLights.value=N.state.spot,xt.spotLightShadows.value=N.state.spotShadow,xt.rectAreaLights.value=N.state.rectArea,xt.ltc_1.value=N.state.rectAreaLTC1,xt.ltc_2.value=N.state.rectAreaLTC2,xt.pointLights.value=N.state.point,xt.pointLightShadows.value=N.state.pointShadow,xt.hemisphereLights.value=N.state.hemi,xt.directionalShadowMap.value=N.state.directionalShadowMap,xt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,xt.spotShadowMap.value=N.state.spotShadowMap,xt.spotLightMatrix.value=N.state.spotLightMatrix,xt.spotLightMap.value=N.state.spotLightMap,xt.pointShadowMap.value=N.state.pointShadowMap,xt.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=Dt,k.uniformsList=null,Dt}function el(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=Ji.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function nl(b,U){let B=bt.get(b);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function pu(b,U,B,k,N){U.isScene!==!0&&(U=de),E.resetTextureUnits();let Q=U.fog,ot=k.isMeshStandardMaterial?U.environment:null,mt=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:rs,gt=(k.isMeshStandardMaterial?F:v).get(k.envMap||ot),Ct=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Dt=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),xt=!!B.morphAttributes.position,Yt=!!B.morphAttributes.normal,re=!!B.morphAttributes.color,ce=Jn;k.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ce=_.toneMapping);let Be=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,$t=Be!==void 0?Be.length:0,yt=bt.get(k),Mn=p.state.lights;if(tt===!0&&(_t===!0||b!==M)){let Je=b===M&&k.id===w;K.setState(k,b,Je)}let Jt=!1;k.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==Mn.state.version||yt.outputColorSpace!==mt||N.isBatchedMesh&&yt.batching===!1||!N.isBatchedMesh&&yt.batching===!0||N.isBatchedMesh&&yt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&yt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&yt.instancing===!1||!N.isInstancedMesh&&yt.instancing===!0||N.isSkinnedMesh&&yt.skinning===!1||!N.isSkinnedMesh&&yt.skinning===!0||N.isInstancedMesh&&yt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&yt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&yt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&yt.instancingMorph===!1&&N.morphTexture!==null||yt.envMap!==gt||k.fog===!0&&yt.fog!==Q||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==K.numPlanes||yt.numIntersection!==K.numIntersection)||yt.vertexAlphas!==Ct||yt.vertexTangents!==Dt||yt.morphTargets!==xt||yt.morphNormals!==Yt||yt.morphColors!==re||yt.toneMapping!==ce||yt.morphTargetsCount!==$t)&&(Jt=!0):(Jt=!0,yt.__version=k.version);let nn=yt.currentProgram;Jt===!0&&(nn=Ws(k,U,N));let Ai=!1,Ge=!1,fs=!1,le=nn.getUniforms(),un=yt.uniforms;if(wt.useProgram(nn.program)&&(Ai=!0,Ge=!0,fs=!0),k.id!==w&&(w=k.id,Ge=!0),Ai||M!==b){wt.buffers.depth.getReversed()?(st.copy(b.projectionMatrix),rd(st),ad(st),le.setValue(z,"projectionMatrix",st)):le.setValue(z,"projectionMatrix",b.projectionMatrix),le.setValue(z,"viewMatrix",b.matrixWorldInverse);let Fn=le.map.cameraPosition;Fn!==void 0&&Fn.setValue(z,Pt.setFromMatrixPosition(b.matrixWorld)),Vt.logarithmicDepthBuffer&&le.setValue(z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&le.setValue(z,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Ge=!0,fs=!0)}if(N.isSkinnedMesh){le.setOptional(z,N,"bindMatrix"),le.setOptional(z,N,"bindMatrixInverse");let Je=N.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),le.setValue(z,"boneTexture",Je.boneTexture,E))}N.isBatchedMesh&&(le.setOptional(z,N,"batchingTexture"),le.setValue(z,"batchingTexture",N._matricesTexture,E),le.setOptional(z,N,"batchingIdTexture"),le.setValue(z,"batchingIdTexture",N._indirectTexture,E),le.setOptional(z,N,"batchingColorTexture"),N._colorsTexture!==null&&le.setValue(z,"batchingColorTexture",N._colorsTexture,E));let ps=B.morphAttributes;if((ps.position!==void 0||ps.normal!==void 0||ps.color!==void 0)&&Rt.update(N,B,nn),(Ge||yt.receiveShadow!==N.receiveShadow)&&(yt.receiveShadow=N.receiveShadow,le.setValue(z,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(un.envMap.value=gt,un.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(un.envMapIntensity.value=U.environmentIntensity),Ge&&(le.setValue(z,"toneMappingExposure",_.toneMappingExposure),yt.needsLights&&mu(un,fs),Q&&k.fog===!0&&rt.refreshFogUniforms(un,Q),rt.refreshMaterialUniforms(un,k,G,j,p.state.transmissionRenderTarget[b.id]),Ji.upload(z,el(yt),un,E)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ji.upload(z,el(yt),un,E),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&le.setValue(z,"center",N.center),le.setValue(z,"modelViewMatrix",N.modelViewMatrix),le.setValue(z,"normalMatrix",N.normalMatrix),le.setValue(z,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let Je=k.uniformsGroups;for(let Fn=0,Bn=Je.length;Fn<Bn;Fn++){let il=Je[Fn];D.update(il,nn),D.bind(il,nn)}}return nn}function mu(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function gu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(b,U,B){bt.get(b.texture).__webglTexture=U,bt.get(b.depthTexture).__webglTexture=B;let k=bt.get(b);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||Ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,U){let B=bt.get(b);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,B=0){I=b,T=U,A=B;let k=!0,N=null,Q=!1,ot=!1;if(b){let gt=bt.get(b);if(gt.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(z.FRAMEBUFFER,null),k=!1;else if(gt.__webglFramebuffer===void 0)E.setupRenderTarget(b);else if(gt.__hasExternalTextures)E.rebindTextures(b,bt.get(b.texture).__webglTexture,bt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let xt=b.depthTexture;if(gt.__boundDepthTexture!==xt){if(xt!==null&&bt.has(xt)&&(b.width!==xt.image.width||b.height!==xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(b)}}let Ct=b.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(ot=!0);let Dt=bt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Dt[U])?N=Dt[U][B]:N=Dt[U],Q=!0):b.samples>0&&E.useMultisampledRTT(b)===!1?N=bt.get(b).__webglMultisampledFramebuffer:Array.isArray(Dt)?N=Dt[B]:N=Dt,C.copy(b.viewport),P.copy(b.scissor),O=b.scissorTest}else C.copy(Mt).multiplyScalar(G).floor(),P.copy(Ft).multiplyScalar(G).floor(),O=ne;if(wt.bindFramebuffer(z.FRAMEBUFFER,N)&&k&&wt.drawBuffers(b,N),wt.viewport(C),wt.scissor(P),wt.setScissorTest(O),Q){let gt=bt.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+U,gt.__webglTexture,B)}else if(ot){let gt=bt.get(b.texture),Ct=U||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,gt.__webglTexture,B||0,Ct)}w=-1},this.readRenderTargetPixels=function(b,U,B,k,N,Q,ot){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=bt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ot!==void 0&&(mt=mt[ot]),mt){wt.bindFramebuffer(z.FRAMEBUFFER,mt);try{let gt=b.texture,Ct=gt.format,Dt=gt.type;if(!Vt.textureFormatReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-k&&B>=0&&B<=b.height-N&&z.readPixels(U,B,k,N,Nt.convert(Ct),Nt.convert(Dt),Q)}finally{let gt=I!==null?bt.get(I).__webglFramebuffer:null;wt.bindFramebuffer(z.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(b,U,B,k,N,Q,ot){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=bt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ot!==void 0&&(mt=mt[ot]),mt){let gt=b.texture,Ct=gt.format,Dt=gt.type;if(!Vt.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=b.width-k&&B>=0&&B<=b.height-N){wt.bindFramebuffer(z.FRAMEBUFFER,mt);let xt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,xt),z.bufferData(z.PIXEL_PACK_BUFFER,Q.byteLength,z.STREAM_READ),z.readPixels(U,B,k,N,Nt.convert(Ct),Nt.convert(Dt),0);let Yt=I!==null?bt.get(I).__webglFramebuffer:null;wt.bindFramebuffer(z.FRAMEBUFFER,Yt);let re=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await sd(z,re,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,xt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Q),z.deleteBuffer(xt),z.deleteSync(re),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,U=null,B=0){b.isTexture!==!0&&(Es("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,b=arguments[1]);let k=Math.pow(2,-B),N=Math.floor(b.image.width*k),Q=Math.floor(b.image.height*k),ot=U!==null?U.x:0,mt=U!==null?U.y:0;E.setTexture2D(b,0),z.copyTexSubImage2D(z.TEXTURE_2D,B,0,0,ot,mt,N,Q),wt.unbindTexture()},this.copyTextureToTexture=function(b,U,B=null,k=null,N=0){b.isTexture!==!0&&(Es("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,b=arguments[1],U=arguments[2],N=arguments[3]||0,B=null);let Q,ot,mt,gt,Ct,Dt,xt,Yt,re,ce=b.isCompressedTexture?b.mipmaps[N]:b.image;B!==null?(Q=B.max.x-B.min.x,ot=B.max.y-B.min.y,mt=B.isBox3?B.max.z-B.min.z:1,gt=B.min.x,Ct=B.min.y,Dt=B.isBox3?B.min.z:0):(Q=ce.width,ot=ce.height,mt=ce.depth||1,gt=0,Ct=0,Dt=0),k!==null?(xt=k.x,Yt=k.y,re=k.z):(xt=0,Yt=0,re=0);let Be=Nt.convert(U.format),$t=Nt.convert(U.type),yt;U.isData3DTexture?(E.setTexture3D(U,0),yt=z.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(E.setTexture2DArray(U,0),yt=z.TEXTURE_2D_ARRAY):(E.setTexture2D(U,0),yt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,U.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,U.unpackAlignment);let Mn=z.getParameter(z.UNPACK_ROW_LENGTH),Jt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),nn=z.getParameter(z.UNPACK_SKIP_PIXELS),Ai=z.getParameter(z.UNPACK_SKIP_ROWS),Ge=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,ce.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ce.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,gt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ct),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Dt);let fs=b.isDataArrayTexture||b.isData3DTexture,le=U.isDataArrayTexture||U.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let un=bt.get(b),ps=bt.get(U),Je=bt.get(un.__renderTarget),Fn=bt.get(ps.__renderTarget);wt.bindFramebuffer(z.READ_FRAMEBUFFER,Je.__webglFramebuffer),wt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Fn.__webglFramebuffer);for(let Bn=0;Bn<mt;Bn++)fs&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,bt.get(b).__webglTexture,N,Dt+Bn),b.isDepthTexture?(le&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,bt.get(U).__webglTexture,N,re+Bn),z.blitFramebuffer(gt,Ct,Q,ot,xt,Yt,Q,ot,z.DEPTH_BUFFER_BIT,z.NEAREST)):le?z.copyTexSubImage3D(yt,N,xt,Yt,re+Bn,gt,Ct,Q,ot):z.copyTexSubImage2D(yt,N,xt,Yt,re+Bn,gt,Ct,Q,ot);wt.bindFramebuffer(z.READ_FRAMEBUFFER,null),wt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else le?b.isDataTexture||b.isData3DTexture?z.texSubImage3D(yt,N,xt,Yt,re,Q,ot,mt,Be,$t,ce.data):U.isCompressedArrayTexture?z.compressedTexSubImage3D(yt,N,xt,Yt,re,Q,ot,mt,Be,ce.data):z.texSubImage3D(yt,N,xt,Yt,re,Q,ot,mt,Be,$t,ce):b.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,N,xt,Yt,Q,ot,Be,$t,ce.data):b.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,N,xt,Yt,ce.width,ce.height,Be,ce.data):z.texSubImage2D(z.TEXTURE_2D,N,xt,Yt,Q,ot,Be,$t,ce);z.pixelStorei(z.UNPACK_ROW_LENGTH,Mn),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Jt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,nn),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ai),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ge),N===0&&U.generateMipmaps&&z.generateMipmap(yt),wt.unbindTexture()},this.copyTextureToTexture3D=function(b,U,B=null,k=null,N=0){return b.isTexture!==!0&&(Es("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,k=arguments[1]||null,b=arguments[2],U=arguments[3],N=arguments[4]||0),Es('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,U,B,k,N)},this.initRenderTarget=function(b){bt.get(b).__webglFramebuffer===void 0&&E.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?E.setTextureCube(b,0):b.isData3DTexture?E.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?E.setTexture2DArray(b,0):E.setTexture2D(b,0),wt.unbindTexture()},this.resetState=function(){T=0,A=0,I=null,wt.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}};var Br=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new At(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},kr=class extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Hr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Wo,this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ue=new L,Ps=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=fn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=fn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=fn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=fn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array),r=te(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ve(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ls=class extends Un{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new At(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Vi,vs=new L,Gi=new L,Wi=new L,Xi=new It,ys=new It,Dh=new Qt,dr=new L,Ms=new L,fr=new L,nh=new It,eo=new It,ih=new It,Vr=class extends Te{constructor(t=new Ls){if(super(),this.isSprite=!0,this.type="Sprite",Vi===void 0){Vi=new Ee;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Hr(e,5);Vi.setIndex([0,1,2,0,2,3]),Vi.setAttribute("position",new Ps(n,3,0,!1)),Vi.setAttribute("uv",new Ps(n,2,3,!1))}this.geometry=Vi,this.material=t,this.center=new It(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gi.setFromMatrixScale(this.matrixWorld),Dh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Wi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gi.multiplyScalar(-Wi.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;pr(dr.set(-.5,-.5,0),Wi,a,Gi,s,r),pr(Ms.set(.5,-.5,0),Wi,a,Gi,s,r),pr(fr.set(.5,.5,0),Wi,a,Gi,s,r),nh.set(0,0),eo.set(1,0),ih.set(1,1);let o=t.ray.intersectTriangle(dr,Ms,fr,!1,vs);if(o===null&&(pr(Ms.set(-.5,.5,0),Wi,a,Gi,s,r),eo.set(0,1),o=t.ray.intersectTriangle(dr,fr,Ms,!1,vs),o===null))return;let c=t.ray.origin.distanceTo(vs);c<t.near||c>t.far||e.push({distance:c,point:vs.clone(),uv:Yn.getInterpolation(vs,dr,Ms,fr,nh,eo,ih,new It),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function pr(i,t,e,n,s,r){Xi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ys.x=r*Xi.x-s*Xi.y,ys.y=s*Xi.x+r*Xi.y):ys.copy(Xi),i.copy(t),i.x+=ys.x,i.y+=ys.y,i.applyMatrix4(Dh)}var cc=class extends He{constructor(t=null,e=1,n=1,s,r,a,o,c,l=qe,h=qe,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ds=class extends ve{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},qi=new Qt,sh=new Qt,mr=[],rh=new Dn,e0=new Qt,Ss=new kt,bs=new ei,Nn=class extends kt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ds(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,e0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Dn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qi),rh.copy(t.boundingBox).applyMatrix4(qi),this.boundingBox.union(rh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ei),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qi),bs.copy(t.boundingSphere).applyMatrix4(qi),this.boundingSphere.union(bs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ss.geometry=this.geometry,Ss.material=this.material,Ss.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bs.copy(this.boundingSphere),bs.applyMatrix4(n),t.ray.intersectsSphere(bs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,qi),sh.multiplyMatrices(n,qi),Ss.matrixWorld=sh,Ss.raycast(t,mr);for(let a=0,o=mr.length;a<o;a++){let c=mr[a];c.instanceId=r,c.object=this,e.push(c)}mr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ds(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new cc(new Float32Array(s*this.count),s,this.count,Ac,mn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Us=class extends Un{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ah=new Qt,lc=new Cr,gr=new ei,xr=new L,Gr=class extends Te{constructor(t=new Ee,e=new Us){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere),gr.applyMatrix4(s),gr.radius+=r,t.ray.intersectsSphere(gr)===!1)return;ah.copy(s).invert(),lc.copy(t.ray).applyMatrix4(ah);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let m=d,x=f;m<x;m++){let g=l.getX(m);xr.fromBufferAttribute(u,g),oh(xr,g,c,s,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,x=f;m<x;m++)xr.fromBufferAttribute(u,m),oh(xr,m,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function oh(i,t,e,n,s,r,a){let o=lc.distanceSqToPoint(i);if(o<e){let c=new L;lc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var is=class extends He{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ye=class i extends Ee{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,x=[],g=n/2,p=0;S(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ae(u,3)),this.setAttribute("normal",new ae(d,3)),this.setAttribute("uv",new ae(f,2));function S(){let _=new L,R=new L,T=0,A=(e-t)/n;for(let I=0;I<=r;I++){let w=[],M=I/r,C=M*(e-t)+t;for(let P=0;P<=s;P++){let O=P/s,H=O*c+o,Y=Math.sin(H),W=Math.cos(H);R.x=C*Y,R.y=-M*n+g,R.z=C*W,u.push(R.x,R.y,R.z),_.set(Y,A,W).normalize(),d.push(_.x,_.y,_.z),f.push(O,1-M),w.push(m++)}x.push(w)}for(let I=0;I<s;I++)for(let w=0;w<r;w++){let M=x[w][I],C=x[w+1][I],P=x[w+1][I+1],O=x[w][I+1];(t>0||w!==0)&&(h.push(M,C,O),T+=3),(e>0||w!==r-1)&&(h.push(C,P,O),T+=3)}l.addGroup(p,T,0),p+=T}function y(_){let R=m,T=new It,A=new L,I=0,w=_===!0?t:e,M=_===!0?1:-1;for(let P=1;P<=s;P++)u.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),m++;let C=m;for(let P=0;P<=s;P++){let H=P/s*c+o,Y=Math.cos(H),W=Math.sin(H);A.x=w*W,A.y=g*M,A.z=w*Y,u.push(A.x,A.y,A.z),d.push(0,M,0),T.x=Y*.5+.5,T.y=W*.5*M+.5,f.push(T.x,T.y),m++}for(let P=0;P<s;P++){let O=R+P,H=C+P;_===!0?h.push(H,H+1,O):h.push(H+1,H,O),I+=3}l.addGroup(p,I,_===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},_i=class i extends Ye{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Wr=class i extends Ee{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new ae(r,3)),this.setAttribute("normal",new ae(r.slice(),3)),this.setAttribute("uv",new ae(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let y=new L,_=new L,R=new L;for(let T=0;T<e.length;T+=3)f(e[T+0],y),f(e[T+1],_),f(e[T+2],R),c(y,_,R,S)}function c(S,y,_,R){let T=R+1,A=[];for(let I=0;I<=T;I++){A[I]=[];let w=S.clone().lerp(_,I/T),M=y.clone().lerp(_,I/T),C=T-I;for(let P=0;P<=C;P++)P===0&&I===T?A[I][P]=w:A[I][P]=w.clone().lerp(M,P/C)}for(let I=0;I<T;I++)for(let w=0;w<2*(T-I)-1;w++){let M=Math.floor(w/2);w%2===0?(d(A[I][M+1]),d(A[I+1][M]),d(A[I][M])):(d(A[I][M+1]),d(A[I+1][M+1]),d(A[I+1][M]))}}function l(S){let y=new L;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(S),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function h(){let S=new L;for(let y=0;y<r.length;y+=3){S.x=r[y+0],S.y=r[y+1],S.z=r[y+2];let _=g(S)/2/Math.PI+.5,R=p(S)/Math.PI+.5;a.push(_,1-R)}m(),u()}function u(){for(let S=0;S<a.length;S+=6){let y=a[S+0],_=a[S+2],R=a[S+4],T=Math.max(y,_,R),A=Math.min(y,_,R);T>.9&&A<.1&&(y<.2&&(a[S+0]+=1),_<.2&&(a[S+2]+=1),R<.2&&(a[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,y){let _=S*3;y.x=t[_+0],y.y=t[_+1],y.z=t[_+2]}function m(){let S=new L,y=new L,_=new L,R=new L,T=new It,A=new It,I=new It;for(let w=0,M=0;w<r.length;w+=9,M+=6){S.set(r[w+0],r[w+1],r[w+2]),y.set(r[w+3],r[w+4],r[w+5]),_.set(r[w+6],r[w+7],r[w+8]),T.set(a[M+0],a[M+1]),A.set(a[M+2],a[M+3]),I.set(a[M+4],a[M+5]),R.copy(S).add(y).add(_).divideScalar(3);let C=g(R);x(T,M+0,S,C),x(A,M+2,y,C),x(I,M+4,_,C)}}function x(S,y,_,R){R<0&&S.x===1&&(a[y]=S.x-1),_.x===0&&_.z===0&&(a[y]=R/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Xr=class i extends Wr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},qr=class i extends Wr{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Yr=class i extends Ee{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],u=t,d=(e-t)/s,f=new L,m=new It;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let p=r+g/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let x=0;x<s;x++){let g=x*(n+1);for(let p=0;p<n;p++){let S=p+g,y=S,_=S+n+1,R=S+n+2,T=S+1;o.push(y,_,T),o.push(_,R,T)}}this.setIndex(o),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var vi=class i extends Ee{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new L,d=new L,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let S=[],y=p/n,_=0;p===0&&a===0?_=.5/e:p===n&&c===Math.PI&&(_=-.5/e);for(let R=0;R<=e;R++){let T=R/e;u.x=-t*Math.cos(s+T*r)*Math.sin(a+y*o),u.y=t*Math.cos(a+y*o),u.z=t*Math.sin(s+T*r)*Math.sin(a+y*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(T+_,1-y),S.push(l++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){let y=h[p][S+1],_=h[p][S],R=h[p+1][S],T=h[p+1][S+1];(p!==0||a>0)&&f.push(y,_,T),(p!==n-1||c<Math.PI)&&f.push(_,R,T)}this.setIndex(f),this.setAttribute("position",new ae(m,3)),this.setAttribute("normal",new ae(x,3)),this.setAttribute("uv",new ae(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ie=class extends Un{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bh,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function _r(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function n0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ss=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},hc=class extends ss{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ol,endingEnd:ol}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case cl:r=t,o=2*e-n;break;case ll:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case cl:a=t,c=2*n-e;break;case ll:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,S=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,y=(-1-f)*g+(1.5+f)*x+.5*m,_=f*g-f*x;for(let R=0;R!==o;++R)r[R]=p*a[h+R]+S*a[l+R]+y*a[c+R]+_*a[u+R];return r}},uc=class extends ss{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},dc=class extends ss{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},cn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=_r(e,this.TimeBufferType),this.values=_r(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:_r(t.times,Array),values:_r(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new dc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new uc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new hc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case wr:e=this.InterpolantFactoryMethodDiscrete;break;case Go:e=this.InterpolantFactoryMethodLinear;break;case Ta:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wr;case this.InterpolantFactoryMethodLinear:return Go;case this.InterpolantFactoryMethodSmooth:return Ta}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&n0(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ta,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let x=e[u+m];if(x!==e[d+m]||x!==e[f+m]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};cn.prototype.TimeBufferType=Float32Array;cn.prototype.ValueBufferType=Float32Array;cn.prototype.DefaultInterpolation=Go;var yi=class extends cn{constructor(t,e,n){super(t,e,n)}};yi.prototype.ValueTypeName="bool";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=wr;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var fc=class extends cn{};fc.prototype.ValueTypeName="color";var pc=class extends cn{};pc.prototype.ValueTypeName="number";var mc=class extends ss{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)gn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Zr=class extends cn{InterpolantFactoryMethodLinear(t){return new mc(this.times,this.values,this.getValueSize(),t)}};Zr.prototype.ValueTypeName="quaternion";Zr.prototype.InterpolantFactoryMethodSmooth=void 0;var Mi=class extends cn{constructor(t,e,n){super(t,e,n)}};Mi.prototype.ValueTypeName="string";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=wr;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var gc=class extends cn{};gc.prototype.ValueTypeName="vector";var xc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},i0=new xc,_c=class{constructor(t){this.manager=t!==void 0?t:i0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};_c.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ns=class extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new At(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},$r=class extends Ns{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},no=new Qt,ch=new L,lh=new L,Jr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Is,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;ch.setFromMatrixPosition(t.matrixWorld),e.position.copy(ch),lh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(lh),e.updateMatrixWorld(),no.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(no),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(no)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var hh=new Qt,ws=new L,io=new L,vc=class extends Jr{constructor(){super(new Pe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new It(4,2),this._viewportCount=6,this._viewports=[new ee(2,1,1,1),new ee(0,1,1,1),new ee(3,1,1,1),new ee(1,1,1,1),new ee(3,0,1,1),new ee(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ws.setFromMatrixPosition(t.matrixWorld),n.position.copy(ws),io.copy(n.position),io.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(io),n.updateMatrixWorld(),s.makeTranslation(-ws.x,-ws.y,-ws.z),hh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hh)}},zs=class extends Ns{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new vc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},yc=class extends Jr{constructor(){super(new Nr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Kr=class extends Ns{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new yc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Lc="\\[\\]\\.:\\/",s0=new RegExp("["+Lc+"]","g"),Dc="[^"+Lc+"]",r0="[^"+Lc.replace("\\.","")+"]",a0=/((?:WC+[\/:])*)/.source.replace("WC",Dc),o0=/(WCOD+)?/.source.replace("WCOD",r0),c0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dc),l0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dc),h0=new RegExp("^"+a0+o0+c0+l0+"$"),u0=["material","materials","bones","map"],Mc=class{constructor(t,e,n){let s=n||ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ue=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(s0,"")}static parseTrackName(t){let e=h0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);u0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ue.Composite=Mc;ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ue.prototype.GetterByBindingType=[ue.prototype._getValue_direct,ue.prototype._getValue_array,ue.prototype._getValue_arrayElement,ue.prototype._getValue_toArray];ue.prototype.SetterByBindingTypeAndVersioning=[[ue.prototype._setValue_direct,ue.prototype._setValue_direct_setNeedsUpdate,ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_array,ue.prototype._setValue_array_setNeedsUpdate,ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_arrayElement,ue.prototype._setValue_arrayElement_setNeedsUpdate,ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_fromArray,ue.prototype._setValue_fromArray_setNeedsUpdate,ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var H0=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Ot=(i,t,e)=>i<t?t:i>e?e:i,sa=(i,t,e)=>i+(t-i)*e,Uc=(i,t,e)=>{let n=Ot((e-i)/(t-i),0,1);return n*n*(3-2*n)},ln=(i,t,e,n)=>sa(i,t,1-Math.exp(-e*n)),na=Math.PI*2;function os(i){return i=(i+Math.PI)%na,i<0&&(i+=na),i-Math.PI}var ra=(i,t)=>os(i-t);function d0(i){let t=i>>>0;return function(){t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Ve=class{constructor(t=1){this.f=d0(t)}next(){return this.f()}range(t,e){return t+(e-t)*this.f()}int(t,e){return Math.floor(this.range(t,e+1))}pick(t){return t[Math.floor(this.f()*t.length)%t.length]}chance(t){return this.f()<t}};function Uh(i,t,e,n,s){return{minX:i-e/2,maxX:i+e/2,minZ:t-n/2,maxZ:t+n/2,h:s}}function Si(i,t,e,n){let s=Ot(i,n.minX,n.maxX),r=Ot(t,n.minZ,n.maxZ),a=i-s,o=t-r,c=a*a+o*o;if(c>e*e)return null;if(c>1e-9){let m=Math.sqrt(c);return{nx:a/m,nz:o/m,pen:e-m}}let l=i-n.minX,h=n.maxX-i,u=t-n.minZ,d=n.maxZ-t,f=Math.min(l,h,u,d);return f===l?{nx:-1,nz:0,pen:e+l}:f===h?{nx:1,nz:0,pen:e+h}:f===u?{nx:0,nz:-1,pen:e+u}:{nx:0,nz:1,pen:e+d}}function Nc(i,t,e,n,s,r,a,o=1/0){let c=0,l=o,h=[[i,n,a.minX,a.maxX],[t,s,0,a.h],[e,r,a.minZ,a.maxZ]];for(let u=0;u<3;u++){let[d,f,m,x]=h[u];if(Math.abs(f)<1e-9){if(d<m||d>x)return 1/0}else{let g=(m-d)/f,p=(x-d)/f;if(g>p){let S=g;g=p,p=S}if(g>c&&(c=g),p<l&&(l=p),c>l)return 1/0}}return c}function zc(i,t,e,n,s,r,a,o,c,l,h,u=1/0){let d=i-a,f=e-o,m=n*n+r*r;if(m<1e-9)return null;let x=2*(d*n+f*r),g=d*d+f*f-h*h,p=x*x-4*m*g;if(p<0)return null;let S=Math.sqrt(p),y=(-x-S)/(2*m);if(y<0&&(y=(-x+S)/(2*m)),y<0||y>u)return null;let _=t+s*y;return _<c||_>c+l?null:{t:y,y:_}}function Oc(i,t,e,n,s,r,a,o,c,l,h,u,d,f=1/0){let m=Math.sin(c),x=Math.cos(c),g=(i-a)*x-(e-o)*m,p=(i-a)*m+(e-o)*x,S=n*x-r*m,y=n*m+r*x;return Nc(g+l,t-u,p+h,S,s,y,{minX:0,maxX:2*l,minZ:0,maxZ:2*h,h:d-u},f)}var ia=class{constructor(t=20){this.cell=t,this.map=new Map}key(t,e){return t*73856093^e*19349663}insertBox(t,e){let n=this.cell,s=Math.floor(e.minX/n),r=Math.floor(e.maxX/n),a=Math.floor(e.minZ/n),o=Math.floor(e.maxZ/n);for(let c=s;c<=r;c++)for(let l=a;l<=o;l++){let h=this.key(c,l),u=this.map.get(h);u||(u=[],this.map.set(h,u)),u.push(t)}}query(t,e,n,s,r){let a=this.cell,o=Math.floor(t/a),c=Math.floor(n/a),l=Math.floor(e/a),h=Math.floor(s/a);for(let u=o;u<=c;u++)for(let d=l;d<=h;d++){let f=this.map.get(this.key(u,d));if(f)for(let m=0;m<f.length;m++)r(f[m])}}},tn=(i,t,e,n)=>(i-e)*(i-e)+(t-n)*(t-n),Zt=(i,t,e,n)=>Math.sqrt(tn(i,t,e,n)),bi=i=>"$"+Math.round(i).toLocaleString("en-US"),aa=(...i)=>i.every(t=>Number.isFinite(t));var ge=10,pt=70,St=7,oa=3,ls=.04,De=.2,Se=ge*pt,lt={minX:-40,maxX:790,minZ:-40,maxZ:750},f0=20260615,cs={residential:["#f4a6a0","#f7d2a0","#a6d8d0","#c8b6e2","#f0e4b0","#9ec5ee","#f2b8d0"],downtown:["#8aa0b8","#a0aec0","#6f86a6","#b8c4d4","#7d8fa8","#98a8c0","#5f7490"],hotel:["#ff8fb1","#6fe0d0","#ffd36e","#9ad0ff","#ffb08a","#c1a0ff"],port:["#8c8f94","#a05a3c","#5c7a9a","#b8b0a0","#6d7d6d"]},p0=["#c0392b","#2471a3","#d68910","#1e8449","#7d3c98","#cb4335","#117a8b"],m0=["BAR","HOTEL","SUSHI","CLUB","24H","TAXI","PIZZA","CASINO","SPA","TACOS","DISCO"],g0=["#ff2fb3","#25e8ff","#ffe14d","#7dff6a","#ff7a2f"],Nh={"4,4":{kind:"bank",label:"BANC",color:"#d9d2c0",h:36,size:40},"5,2":{kind:"police",label:"POLICIA",color:"#3a5a8c",h:22,size:40},"2,5":{kind:"hospital",label:"HOSPITAL",color:"#e8eef2",h:30,size:40},"6,5":{kind:"gunshop",label:"ARMERIA",color:"#8a4a34",h:12,size:34},"1,7":{kind:"garage",label:"GARATGE",color:"#4a4f58",h:10,size:36}},x0=new Set(["1,3","8,6","3,8","7,8","0,5","6,1"]),Fc=(i,t)=>({x:i*pt+pt/2,z:t*pt+pt/2}),Bc=(i,t)=>({x:i*pt,z:t*pt}),zh=(i,t)=>({x:i*pt+St+1.5,z:t*pt+St+1.5});function _0(i,t){let e=i+","+t;return Nh[e]?"special":x0.has(e)?"park":t===0?"port":i>=8?"hotel":i>=3&&i<=6&&t>=3&&t<=6?"downtown":"residential"}function Ze(i,t){if(i<-St||t<-St||i>Se+St||t>Se+St)return 0;let e=i-Math.floor(i/pt)*pt,n=t-Math.floor(t/pt)*pt,s=Math.floor(i/pt),r=Math.floor(t/pt);return s<0||r<0||s>=ge||r>=ge?ls:e>=St&&e<=pt-St&&n>=St&&n<=pt-St?De:ls}function Oh(i=f0){let t=new Ve(i),e={blocks:[],buildings:[],lamps:[],palms:[],trees:[],signs:[],colliders:[],pois:{},hash:new ia(20)},n=o=>{e.buildings.push(o),s(o.cx,o.cz,o.w,o.d,o.h)};function s(o,c,l,h,u,d){let f=Uh(o,c,l,h,u);d&&(f.tag=d),e.colliders.push(f),e.hash.insertBox(f,f)}function r(o,c,l,h,u,d){let f=o*pt+St+oa,m=c*pt+St+oa,x=pt-2*(St+oa),g=(x-u*(l-1))/l,p=(x-u*(h-1))/h;for(let S=0;S<l;S++)for(let y=0;y<h;y++){let _=f+S*(g+u)+g/2,R=m+y*(p+u)+p/2,T=d.h(),A={cx:_,cz:R,w:g-t.range(0,3),d:p-t.range(0,3),h:T,color:t.pick(d.palette),kind:d.kind,windows:!0};n(A),t.chance(d.neon)&&T>8&&e.signs.push({x:A.cx+t.range(-A.w/4,A.w/4),y:Math.min(T*.45,9+t.range(0,4)),z:A.cz+A.d/2+.06,w:Math.min(A.w*.6,9),h:2.2,text:t.pick(m0),color:t.pick(g0),neon:!0})}}for(let o=0;o<ge;o++)for(let c=0;c<ge;c++){let l=_0(o,c),{x:h,z:u}=Fc(o,c);e.blocks.push({bi:o,bj:c,cx:h,cz:u,kind:l});let d=o+","+c;if(l==="special"){let f=Nh[d];n({cx:h,cz:u,w:f.size,d:f.size,h:f.h,color:f.color,kind:f.kind,windows:f.kind!=="garage",landmark:!0}),e.signs.push({x:h,y:f.h*.55,z:u+f.size/2+.08,w:Math.min(f.size*.8,26),h:4,text:f.label,color:"#ffffff",bg:f.kind==="police"?"#1f3d7a":f.kind==="hospital"?"#c0392b":"#222831",neon:!1});let m={x:h,z:u+f.size/2+4};e.pois[f.kind]=m}else if(l==="park"){s(h,u,6,6,1.2,"fountain"),e.fountain=e.fountain||[],e.fountain.push({x:h,z:u});for(let f=0;f<14;f++){let m=h+t.range(-20,20),x=u+t.range(-20,20);Math.hypot(m-h,x-u)<7||(e.trees.push({x:m,z:x,s:t.range(.9,1.5)}),s(m,x,.8,.8,6,"tree"))}}else if(l==="port"){r(o,c,2,1,4,{palette:cs.port,h:()=>t.range(8,13),kind:"warehouse",neon:0});for(let f=0;f<5;f++){let m=o*pt+St+oa+5+f*9,x=-22-t.range(0,6),g=t.int(1,3);e.buildings.push({cx:m,cz:x,w:8.4,d:2.5,h:2.6*g,color:t.pick(p0),kind:"container",windows:!1}),s(m,x,8.4,2.5,2.6*g)}}else if(l==="downtown"){let f=t.next();f<.3?r(o,c,1,1,0,{palette:cs.downtown,h:()=>t.range(70,125),kind:"tower",neon:.4}):f<.65?r(o,c,2,1,6,{palette:cs.downtown,h:()=>t.range(45,95),kind:"tower",neon:.5}):r(o,c,2,2,5,{palette:cs.downtown,h:()=>t.range(28,75),kind:"tower",neon:.4})}else l==="hotel"?r(o,c,t.chance(.5)?1:2,t.chance(.5)?2:1,8,{palette:cs.hotel,h:()=>t.range(22,52),kind:"hotel",neon:.7}):r(o,c,2,2,4,{palette:cs.residential,h:()=>t.range(8,24),kind:"residential",neon:.12})}for(let o of e.blocks){let c=o.bi*pt+St,l=o.bj*pt+St,h=pt-2*St;for(let u of[.25,.75])e.lamps.push({x:c+h*u,z:l+1.2,rot:0}),e.lamps.push({x:c+h*u,z:l+h-1.2,rot:Math.PI}),e.lamps.push({x:c+1.2,z:l+h*u,rot:Math.PI/2}),e.lamps.push({x:c+h-1.2,z:l+h*u,rot:-Math.PI/2})}for(let o of e.lamps)s(o.x,o.z,.5,.5,7,"lamp");for(let o of e.blocks){if(o.kind==="special"||o.kind==="port")continue;let c=o.kind==="hotel"?7:o.kind==="residential"?2:o.kind==="park"?0:1,l=o.bi*pt+St,h=o.bj*pt+St,u=pt-2*St;for(let d=0;d<c;d++){let f=t.int(0,3),m=t.range(.1,.9),x=f===0?[l+u*m,h+2.2]:f===1?[l+u*m,h+u-2.2]:f===2?[l+2.2,h+u*m]:[l+u-2.2,h+u*m];e.lamps.some(g=>Math.hypot(g.x-x[0],g.z-x[1])<3)||(e.palms.push({x:x[0],z:x[1],s:t.range(.9,1.35),r:t.range(0,6.28)}),s(x[0],x[1],.7,.7,7,"palm"))}}e.beach={minX:Se+St,maxX:lt.maxX,minZ:-St,maxZ:Se+St};for(let o=0;o<40;o++){let c=t.range(e.beach.minX+4,e.beach.minX+30),l=t.range(10,Se-10);e.palms.push({x:c,z:l,s:t.range(1,1.5),r:t.range(0,6.28)}),s(c,l,.7,.7,7,"palm")}for(let o=0;o<24;o++){let c=t.range(e.beach.minX+35,e.beach.minX+65),l=t.range(10,Se-10);e.beach.umbrellas=e.beach.umbrellas||[],e.beach.umbrellas.push({x:c,z:l,c:t.pick(["#ff4d6d","#ffd23f","#3bceac","#4cc9f0","#f77f00"])})}let a=Bc(3,7);return e.pois.spawn={x:a.x,z:a.z},e.pois.bounds=lt,e.pois.shopMarker=e.pois.gunshop,e}function wi(i,t,e,n,s){i.hash.query(t-n,e-n,t+n,e+n,s)}function Fs(i,t,e,n,s,r,a,o){let c=1/0,l=t+s*o,h=n+a*o;return i.hash.query(Math.min(t,l)-1,Math.min(n,h)-1,Math.max(t,l)+1,Math.max(n,h)+1,u=>{let d=Nc(t,e,n,s,r,a,u,Math.min(o,c));d<c&&(c=d)}),c}function ni(i,t,e,n,s,r=1.6,a=1.6){let o=n-t,c=s-e,l=a-r,h=Math.hypot(o,l,c);return h<.01?!0:Fs(i,t,r,e,o/h,l/h,c/h,h-.2)===1/0}function zn(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Ee,l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Fh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][d]);let m=Fh(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function Fh(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new ve(a,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<e;m++){let x=h.getComponent(d,m);o.setComponent(d+u,m,x)}}else a.set(h.array,c);c+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var xe=i=>new At(i);function hs(i,t,e,{repeat:n=!1,srgb:s=!0,aniso:r=4}={}){let a=document.createElement("canvas");a.width=i,a.height=t,e(a.getContext("2d"),i,t);let o=new is(a);return s&&(o.colorSpace=we),n&&(o.wrapS=o.wrapT=Rs),o.anisotropy=r,o}function v0(){let n=new Ve(77),s=[];for(let o=0;o<16;o++)s.push(n.chance(.48)?n.pick(["#ffd28a","#ffe7b8","#a8e6ff","#ffc27a"]):null);let r=hs(256,256,o=>{o.fillStyle="#ffffff",o.fillRect(0,0,256,256);for(let c=0;c<4;c++)for(let l=0;l<4;l++)o.fillStyle="#5f6f82",o.fillRect(l*64+14,c*64+12,36,38),o.fillStyle="#8392a6",o.fillRect(l*64+14,c*64+12,36,6),o.fillStyle="#d4d4d4",o.fillRect(l*64,c*64+64-3,64,3)},{repeat:!0}),a=hs(256,256,o=>{o.fillStyle="#000",o.fillRect(0,0,256,256);for(let c=0;c<4;c++)for(let l=0;l<4;l++){let h=s[c*4+l];h&&(o.fillStyle=h,o.fillRect(l*64+14,c*64+12,36,38))}},{repeat:!0});return{wall:r,emi:a}}function y0(i,t,e,n){return hs(512,128,(s,r,a)=>{e?(s.fillStyle=e,s.fillRect(0,0,r,a),s.strokeStyle="#ffffff",s.lineWidth=6,s.strokeRect(5,5,r-10,a-10)):s.clearRect(0,0,r,a),s.font="900 78px Arial, Helvetica, sans-serif",s.textAlign="center",s.textBaseline="middle",n&&(s.shadowColor=t,s.shadowBlur=24),s.fillStyle=n?"#ffffff":t,s.fillText(i,r/2,a/2+4),n&&(s.shadowBlur=8,s.fillStyle=t,s.fillText(i,r/2,a/2+4))})}function Ei(i,t,e,n,s,r,a,o="wall"){let c=new fe(i,t,e),l=c.attributes.uv,h=xe(a),u=c.attributes.position.count,d=new Float32Array(u*3);for(let f=0;f<u;f++){let m=Math.floor(f/4),x=l.getX(f),g=l.getY(f);if(o==="plain"||m===2||m===3)x=.004,g=.004;else{let S=m<2?e:i;x*=Math.max(1,Math.round(S/12)),g*=Math.max(1,Math.round(t/14.4))}l.setXY(f,x,g);let p=m===2?.8:m===3?.5:1;d[f*3]=h.r*p,d[f*3+1]=h.g*p,d[f*3+2]=h.b*p}return c.setAttribute("color",new ve(d,3)),c.translate(n,s,r),c}function ii(i,t,e,n,s,r){let a=new _n(Math.abs(e-i),Math.abs(n-t));a.rotateX(-Math.PI/2),a.translate((i+e)/2,s,(t+n)/2);let o=xe(r),c=a.attributes.position.count,l=new Float32Array(c*3);for(let h=0;h<c;h++)l[h*3]=o.r,l[h*3+1]=o.g,l[h*3+2]=o.b;return a.setAttribute("color",new ve(l,3)),a}var ca=class{constructor(t,e="medium"){this.scene=t,this.quality=e,this.city=Oh(),this.hour=17.8,this.dayLength=1800,this.night=0,this.sunElev=0,this.neonMats=[],this.group=new Oe,t.add(this.group),this.buildGround(),this.buildRoads(),this.buildBuildings(),this.buildProps(),this.buildSignsAndSea(),this.buildSky(),this.buildLights(),this.setQuality(e),this.update(0,350,350,null)}buildGround(){let t=new ie({vertexColors:!0,roughness:.95,metalness:0}),e=[];e.push(ii(lt.minX,lt.minZ,lt.maxX,lt.maxZ,0,"#3f7d4a")),e.push(ii(lt.minX,lt.minZ,lt.maxX,-St,.02,"#6e737b")),e.push(ii(Se+St,-St,lt.maxX,lt.maxZ,.02,"#e8d6a0"));let n=(o,c,l,h,u,d,f,m,x)=>{let g=new Ee;g.setAttribute("position",new ae([o,0,c,l,0,h,u,-.7,d,o,0,c,u,-.7,d,f,-.7,m],3)),g.computeVertexNormals();let p=xe(x),S=[];for(let y=0;y<6;y++)S.push(p.r,p.g,p.b);return g.setAttribute("color",new ae(S,3)),g},s=30;e.push(n(lt.maxX,lt.minZ,lt.maxX,lt.maxZ,lt.maxX+s,lt.maxZ,lt.maxX+s,lt.minZ,"#d9c88c")),e.push(n(lt.minX,lt.maxZ,lt.maxX,lt.maxZ,lt.maxX,lt.maxZ+s,lt.minX,lt.maxZ+s,"#b8aa78")),e.push(n(lt.minX,lt.minZ,lt.minX,lt.maxZ,lt.minX-s,lt.maxZ,lt.minX-s,lt.minZ,"#b8aa78")),e.push(n(lt.minX,lt.minZ,lt.maxX,lt.minZ,lt.maxX,lt.minZ-s,lt.minX,lt.minZ-s,"#555a62")),t.side=ze;let r=e.map(o=>o.index?o.toNonIndexed():o),a=new kt(zn(r.map(o=>(o.attributes.uv||o.setAttribute("uv",new ve(new Float32Array(o.attributes.position.count*2),2)),o))),t);a.receiveShadow=!0,this.group.add(a)}buildRoads(){let t=hs(128,128,(l,h,u)=>{l.fillStyle="#ffffff",l.fillRect(0,0,h,u);let d=new Ve(5);for(let f=0;f<900;f++){let m=200+Math.floor(d.range(0,55));l.fillStyle=`rgb(${m},${m},${m})`,l.fillRect(d.range(0,h),d.range(0,u),2,2)}},{repeat:!0});t.repeat.set(90,90);let e=Se+2*St,n=new kt(new _n(e,e),new ie({color:4014669,map:t,roughness:.92,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));n.rotation.x=-Math.PI/2,n.position.set(Se/2,ls,Se/2),n.receiveShadow=!0,this.group.add(n);let s=[],r=[];for(let l of this.city.blocks){let h=pt-2*St,u=l.kind==="port"?"#7b7f86":l.kind==="hotel"?"#c9c2b2":"#9da1a9";s.push(Ei(h,De,h,l.cx,De/2,l.cz,u,"plain")),l.kind==="park"&&s.push(ii(l.cx-h/2+3,l.cz-h/2+3,l.cx+h/2-3,l.cz+h/2-3,De+.02,"#4f9a55"))}let a=new kt(zn(s.map(l=>(l.deleteAttribute("uv"),l))),new ie({vertexColors:!0,roughness:.9}));a.receiveShadow=!0,a.castShadow=!1,this.group.add(a);let o=ls+.02;for(let l=0;l<=ge;l++)for(let h=0;h<ge;h++){let u=h*pt+St+.6,d=h*pt+pt-St-.6;r.push(ii(l*pt-.12,u,l*pt+.12,d,o,"#e0b400")),r.push(ii(u,l*pt-.12,d,l*pt+.12,o,"#e0b400"))}for(let l=0;l<=ge;l++)for(let h=0;h<=ge;h++){let u=l*pt,d=h*pt;for(let f=-5;f<=5;f++){let m=f*1.25;for(let x of[-1,1])r.push(ii(u+m-.35,d+x*(St+.2)-1.1,u+m+.35,d+x*(St+.2)+1.1,o+.005,"#e6e6e6")),r.push(ii(u+x*(St+.2)-1.1,d+m-.35,u+x*(St+.2)+1.1,d+m+.35,o+.005,"#e6e6e6"))}}let c=new kt(zn(r),new ie({vertexColors:!0,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));c.receiveShadow=!0,this.group.add(c)}buildBuildings(){let{wall:t,emi:e}=v0();this.windowMat=new ie({vertexColors:!0,map:t,emissive:16777215,emissiveMap:e,emissiveIntensity:0,roughness:.65,metalness:.15});let n=[],s=new Ve(404);for(let a of this.city.buildings){let o=a.windows?"wall":"plain";n.push(Ei(a.w,a.h,a.d,a.cx,De+a.h/2-.05,a.cz,a.color,o)),a.h>14&&a.kind!=="container"&&(n.push(Ei(a.w*.35,2.2,a.d*.3,a.cx+s.range(-a.w/5,a.w/5),De+a.h+1.05,a.cz+s.range(-a.d/5,a.d/5),"#6b7078","plain")),a.kind==="tower"&&a.h>60&&n.push(Ei(.4,10,.4,a.cx,De+a.h+5,a.cz,"#b0b4ba","plain")))}let r=new kt(zn(n),this.windowMat);r.castShadow=!0,r.receiveShadow=!0,this.group.add(r)}buildProps(){let{lamps:t,palms:e,trees:n}=this.city,s=[],r=[];for(let P of t){s.push(Ei(.18,7,.18,P.x,De+3.5,P.z,"#40454d","plain"));let O=Math.sin(P.rot)*.9,H=Math.cos(P.rot)*.9;s.push(Ei(Math.abs(O)>.1?1.8:.14,.14,Math.abs(H)>.1?1.8:.14,P.x+O,De+7,P.z+H,"#40454d","plain")),r.push(Ei(.55,.18,.55,P.x+O*1.7,De+6.92,P.z+H*1.7,"#ffffff","plain"))}let a=new kt(zn(s.map(P=>(P.deleteAttribute("uv"),P))),new ie({vertexColors:!0,roughness:.6,metalness:.4}));a.castShadow=!1,this.group.add(a),this.lampMat=new Qe({color:5592405,fog:!0}),this.group.add(new kt(zn(r.map(P=>(P.deleteAttribute("uv"),P.deleteAttribute("color"),P))),this.lampMat));let o=hs(64,64,(P,O,H)=>{let Y=P.createRadialGradient(O/2,H/2,0,O/2,H/2,O/2);Y.addColorStop(0,"rgba(255,214,140,0.9)"),Y.addColorStop(.45,"rgba(255,190,110,0.28)"),Y.addColorStop(1,"rgba(255,170,90,0)"),P.fillStyle=Y,P.fillRect(0,0,O,H)}),c=[];for(let P of t){let O=P.x+Math.sin(P.rot)*1.5,H=P.z+Math.cos(P.rot)*1.5,Y=new _n(15,15);Y.rotateX(-Math.PI/2),Y.translate(O,ls+.045,H),c.push(Y)}this.glowMat=new Qe({map:o,transparent:!0,depthWrite:!1,blending:jn,opacity:0,fog:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3});let l=new kt(zn(c),this.glowMat);l.renderOrder=2,this.group.add(l);let h=new Ye(.2,.32,6.5,6);h.translate(0,3.25,0);let u=[];for(let P=0;P<7;P++){let O=new _i(.55,4.2,4);O.rotateZ(Math.PI/2-.35),O.translate(2,0,0),O.rotateY(P/7*Math.PI*2),O.translate(0,6.5,0),u.push(O)}let d=zn(u),f=new Nn(h,new ie({color:8018490,roughness:.9}),e.length),m=new Nn(d,new ie({color:3116870,roughness:.8,side:ze}),e.length),x=new Qt,g=new gn,p=new L,S=new L;e.forEach((P,O)=>{g.setFromAxisAngle(new L(0,1,0),P.r),p.set(P.s,P.s,P.s),S.set(P.x,P.z===void 0?0:P.x>Se+St?.02:De,P.z),x.compose(S,g,p),f.setMatrixAt(O,x),m.setMatrixAt(O,x)}),f.castShadow=m.castShadow=!0,this.group.add(f,m);let y=new Ye(.25,.35,3,6);y.translate(0,1.5,0);let _=new Xr(2.4,0);_.translate(0,4.4,0);let R=new Nn(y,new ie({color:7031343}),Math.max(1,n.length)),T=new Nn(_,new ie({color:4037194,roughness:.9,flatShading:!0}),Math.max(1,n.length));n.forEach((P,O)=>{S.set(P.x,De,P.z),p.set(P.s,P.s,P.s),g.identity(),x.compose(S,g,p),R.setMatrixAt(O,x),T.setMatrixAt(O,x)}),R.castShadow=T.castShadow=!0,this.group.add(R,T);for(let P of this.city.fountain||[]){let O=new kt(new Ye(3.2,3.4,1.2,16),new ie({color:13620184}));O.position.set(P.x,De+.6,P.z);let H=new kt(new Ye(2.8,2.8,.1,16),new ie({color:3842264,emissive:1065056,roughness:.2}));H.position.set(P.x,De+1.18,P.z),this.group.add(O,H)}let A=this.city.beach.umbrellas||[],I=new _i(1.6,.7,8);I.translate(0,2.2,0);let w=new Ye(.05,.05,2.2,5);w.translate(0,1.1,0);let M=new Nn(I,new ie({color:16777215}),Math.max(1,A.length)),C=new Nn(w,new ie({color:14540253}),Math.max(1,A.length));A.forEach((P,O)=>{S.set(P.x,.02,P.z),p.set(1,1,1),g.identity(),x.compose(S,g,p),M.setMatrixAt(O,x),C.setMatrixAt(O,x),M.setColorAt(O,xe(P.c))}),this.group.add(M,C)}buildSignsAndSea(){for(let e of this.city.signs){let n=y0(e.text,e.color,e.bg,e.neon),s=new Qe({map:n,transparent:!e.bg,toneMapped:!1,side:ze}),r=new kt(new _n(e.w,e.h),s);r.position.set(e.x,De+e.y,e.z),this.group.add(r),e.neon&&this.neonMats.push(s)}let t=hs(256,256,(e,n,s)=>{e.fillStyle="#ffffff",e.fillRect(0,0,n,s);let r=new Ve(9);for(let a=0;a<260;a++)e.fillStyle=`rgba(160,200,230,${r.range(.15,.5)})`,e.fillRect(r.range(0,n),r.range(0,s),r.range(8,30),2)},{repeat:!0});t.repeat.set(500,500),this.seaTex=t,this.sea=new kt(new _n(8e3,8e3),new ie({color:1010334,map:t,roughness:.28,metalness:.15})),this.sea.rotation.x=-Math.PI/2,this.sea.position.set(Se/2,-.7,Se/2),this.sea.receiveShadow=!0,this.scene.add(this.sea)}buildSky(){this.skyUniforms={top:{value:new At},horizon:{value:new At},sunDir:{value:new L(0,1,0)},sunColor:{value:new At},night:{value:0}};let t=new je({uniforms:this.skyUniforms,side:Le,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec3 vDir; uniform vec3 top; uniform vec3 horizon; uniform vec3 sunDir; uniform vec3 sunColor; uniform float night;
        void main(){
          float h = vDir.y;
          vec3 c = mix(horizon, top, pow(clamp(h, 0.0, 1.0), 0.55));
          if (h < 0.0) c = mix(horizon, horizon * 0.5, clamp(-h * 4.0, 0.0, 1.0));
          float s = max(dot(normalize(vDir), normalize(sunDir)), 0.0);
          c += sunColor * (pow(s, 600.0) * 3.0 + pow(s, 10.0) * 0.35);
          float m = max(dot(normalize(vDir), normalize(-sunDir)), 0.0);
          c += vec3(0.75, 0.85, 1.0) * pow(m, 900.0) * 2.0 * night;
          gl_FragColor = vec4(c, 1.0);
        }`});this.sky=new kt(new vi(2e3,32,16),t),this.sky.renderOrder=-10,this.sky.frustumCulled=!1,this.scene.add(this.sky);let e=new Ve(31),n=[];for(let r=0;r<700;r++){let a=e.range(0,Math.PI*2),o=Math.acos(e.range(.05,1));n.push(Math.sin(o)*Math.cos(a)*1900,Math.cos(o)*1900,Math.sin(o)*Math.sin(a)*1900)}let s=new Ee;s.setAttribute("position",new ae(n,3)),this.starMat=new Us({color:16777215,size:2.2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}),this.stars=new Gr(s,this.starMat),this.stars.frustumCulled=!1,this.scene.add(this.stars)}buildLights(){this.hemi=new $r(12572927,3820090,.6),this.sun=new Kr(16777215,1),this.sun.castShadow=!0,this.sun.shadow.bias=-6e-4,this.sun.shadow.normalBias=.6;let t=this.sun.shadow.camera;t.near=10,t.far=400,t.left=t.bottom=-70,t.right=t.top=70,this.scene.add(this.hemi,this.sun,this.sun.target),this.scene.fog=new Br(11193599,120,750)}setQuality(t){this.quality=t;let e=t==="high"?2048:t==="medium"?1024:0;this.sun.castShadow=e>0,e>0&&(this.sun.shadow.mapSize.set(e,e),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null)),this.scene.fog.far=t==="high"?950:t==="medium"?750:520,this.scene.fog.near=120}setHour(t){this.hour=(t%24+24)%24}update(t,e,n,s){this.hour=(this.hour+t/this.dayLength*24)%24;let r=(this.hour-6)/24*Math.PI*2,a=Math.sin(r);this.sunElev=a;let o=new L(Math.cos(r)*.85,a,.35).normalize(),c=Uc(-.08,.35,a),l=1-Uc(-.12,.12,a),h=Math.exp(-Math.pow((a-.04)/.16,2));this.night=l;let u=xe("#06091f").lerp(xe("#3a86d8"),c).lerp(xe("#5a3f9a"),h*.75),d=xe("#161640").lerp(xe("#a9d3ff"),c).lerp(xe("#ff7b4f"),h*.85);this.skyUniforms.top.value.copy(u),this.skyUniforms.horizon.value.copy(d),this.skyUniforms.sunDir.value.copy(o),this.skyUniforms.sunColor.value.copy(xe("#ffd9a0").lerp(xe("#ff9650"),h)),this.skyUniforms.night.value=l,this.scene.fog.color.copy(d),this.starMat.opacity=Ot(l*1.1,0,1);let f=Math.max(0,a)*2.2*(1-h*.25);this.sun.intensity=Math.max(f,l*.7),this.sun.color.copy(l>.6?xe("#8fa6ff"):xe("#fff1d6").lerp(xe("#ff9a5a"),h)),this.hemi.intensity=sa(1.25,1,c),this.hemi.color.copy(xe("#8a9ae0").lerp(xe("#cfe4ff"),c)),this.hemi.groundColor.copy(xe("#34405a").lerp(xe("#4a5a46"),c)),this.windowMat.emissiveIntensity=Ot(l*1.2+h*.45,0,1.3),this.glowMat.opacity=Ot(l+h*.5,0,1)*.85,this.lampMat.color.copy(xe("#4b4e54").lerp(xe("#ffe9a8"),Ot(l+h*.6,0,1)));for(let S of this.neonMats)S.color.setScalar(sa(.55,1.15,Ot(l+h*.7,0,1)));this.seaTex.offset.x+=t*4e-4,this.seaTex.offset.y+=t*2e-4;let m=a>-.05?o:o.clone().negate(),x=140/Math.max(1,this.sun.shadow.mapSize.x||1024),g=Math.round(e/x)*x,p=Math.round(n/x)*x;this.sun.position.set(g+m.x*160,Math.max(30,m.y*160+40),p+m.z*160),this.sun.target.position.set(g,0,p),this.sun.target.updateMatrixWorld(),s&&(this.sky.position.copy(s.position),this.stars.position.copy(s.position))}get timeString(){let t=Math.floor(this.hour),e=Math.floor((this.hour-t)*60);return String(t).padStart(2,"0")+":"+String(e).padStart(2,"0")}};function M0(){let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.5,"rgba(255,255,255,0.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);let n=new is(i);return n.colorSpace=we,n}var la=class{constructor(t){this.scene=t;let e=M0();this.parts=[];for(let s=0;s<220;s++){let r=s<90,a=new Ls({map:e,transparent:!0,depthWrite:!1,blending:r?jn:$n,opacity:0}),o=new Vr(a);o.visible=!1,o.frustumCulled=!1,t.add(o),this.parts.push({s:o,life:0,max:1,vx:0,vy:0,vz:0,s0:1,s1:1,add:r,drag:0,color:new At})}this.addCursor=0,this.smokeCursor=90,this.tracers=[];let n=new fe(.04,.04,1);for(let s=0;s<20;s++){let r=new kt(n,new Qe({color:16773544,transparent:!0,opacity:0,toneMapped:!1}));r.visible=!1,t.add(r),this.tracers.push({m:r,life:0})}this.tracerCursor=0,this.flash=new zs(16765056,0,14,2),this.flash.position.set(0,-50,0),this.boom=new zs(16744496,0,90,2),this.boom.position.set(0,-50,0),t.add(this.flash,this.boom),this.shake=0}spawn(t,e,n,s,r,a,o,c,l,h,u,d=1.5){let f;t?(f=this.parts[this.addCursor],this.addCursor=(this.addCursor+1)%90):(f=this.parts[this.smokeCursor],this.smokeCursor=90+(this.smokeCursor-89)%130),f.s.position.set(e,n,s),f.vx=r,f.vy=a,f.vz=o,f.life=f.max=c,f.s0=l,f.s1=h,f.drag=d,f.color.set(u),f.s.material.color.copy(f.color),f.s.visible=!0,f.s.scale.setScalar(l)}explosion(t,e,n){for(let s=0;s<26;s++){let r=Math.random()*Math.PI*2,a=Math.random()*1.2,o=3+Math.random()*9;this.spawn(!0,t,e+1,n,Math.cos(r)*o,a*o*.8+2,Math.sin(r)*o,.5+Math.random()*.5,3,9+Math.random()*5,s%3?"#ff8a28":"#ffd070",2.5)}for(let s=0;s<22;s++){let r=Math.random()*Math.PI*2,a=1+Math.random()*4;this.spawn(!1,t,e+1.5,n,Math.cos(r)*a,2+Math.random()*5,Math.sin(r)*a,1.6+Math.random()*1.6,3,11,"#2b2b2b",.8)}this.boom.position.set(t,e+3,n),this.boom.intensity=900,this.shake=Math.max(this.shake,.5)}smoke(t,e,n,s=!1){this.spawn(!1,t+(Math.random()-.5),e,n+(Math.random()-.5),(Math.random()-.5)*.6,1.6+Math.random(),(Math.random()-.5)*.6,1.4,.8,3.2,s?"#3a3a3a":"#777777",.3),s&&this.spawn(!0,t,e-.2,n,0,1.2,0,.45,.7,1.6,"#ff8a28",.5)}muzzle(t,e,n){this.flash.position.set(t,e,n),this.flash.intensity=40,this.spawn(!0,t,e,n,0,0,0,.06,.5,.9,"#ffe9a0",0)}spark(t,e,n,s="#ffd27a"){for(let r=0;r<4;r++)this.spawn(!0,t,e,n,(Math.random()-.5)*5,Math.random()*4,(Math.random()-.5)*5,.25,.25,.05,s,1);this.spawn(!1,t,e,n,0,.4,0,.5,.3,1,"#9a9a9a",.5)}tracer(t,e,n,s,r,a){let o=this.tracers[this.tracerCursor];this.tracerCursor=(this.tracerCursor+1)%this.tracers.length;let c=Math.hypot(s-t,r-e,a-n);o.m.position.set((t+s)/2,(e+r)/2,(n+a)/2),o.m.scale.set(1,1,Math.max(.1,c)),o.m.lookAt(s,r,a),o.m.visible=!0,o.life=.07,o.m.material.opacity=.9}update(t){for(let e of this.parts){if(e.life<=0)continue;if(e.life-=t,e.life<=0){e.s.visible=!1;continue}let n=1-e.life/e.max,s=Math.exp(-e.drag*t);e.vx*=s,e.vy*=s,e.vz*=s,e.s.position.x+=e.vx*t,e.s.position.y+=e.vy*t,e.s.position.z+=e.vz*t,e.s.scale.setScalar(e.s0+(e.s1-e.s0)*n),e.s.material.opacity=e.add?1-n:Math.min(1,(1-n)*1.4)*.65}for(let e of this.tracers)e.life<=0||(e.life-=t,e.life<=0?e.m.visible=!1:e.m.material.opacity=e.life/.07);this.flash.intensity*=Math.exp(-40*t),this.boom.intensity*=Math.exp(-5*t),this.shake*=Math.exp(-3*t)}};var ha=class{constructor(t){this.el=t,this.down=new Set,this.pressed=new Set,this.released=new Set,this.mdx=0,this.mdy=0,this.lmb=!1,this.rmb=!1,this.locked=!1,this.wheel=0,this.sens=1,this.onLockChange=null;let e=new Set(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab"]);addEventListener("keydown",n=>{if(n.repeat){e.has(n.code)&&n.preventDefault();return}e.has(n.code)&&n.preventDefault(),this.press(n.code)}),addEventListener("keyup",n=>this.release(n.code)),addEventListener("blur",()=>{this.down.clear(),this.lmb=this.rmb=!1}),t.addEventListener("mousedown",n=>{n.button===0&&(this.lmb=!0),n.button===2&&(this.rmb=!0)}),addEventListener("mouseup",n=>{n.button===0&&(this.lmb=!1),n.button===2&&(this.rmb=!1)}),t.addEventListener("contextmenu",n=>n.preventDefault()),addEventListener("mousemove",n=>{this.locked&&(this.mdx+=n.movementX||0,this.mdy+=n.movementY||0)}),addEventListener("wheel",n=>{this.wheel+=Math.sign(n.deltaY)},{passive:!0}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===t,this.locked||(this.down.clear(),this.lmb=this.rmb=!1),this.onLockChange&&this.onLockChange(this.locked)})}press(t){this.down.has(t)||this.pressed.add(t),this.down.add(t)}release(t){this.down.delete(t),this.released.add(t)}isDown(...t){return t.some(e=>this.down.has(e))}wasPressed(...t){return t.some(e=>this.pressed.has(e))}lock(){try{let t=this.el.requestPointerLock&&this.el.requestPointerLock();t&&t.catch&&t.catch(()=>{})}catch{}}unlock(){document.exitPointerLock&&document.exitPointerLock()}takeMouse(){let t=[this.mdx*this.sens,this.mdy*this.sens];return this.mdx=this.mdy=0,t}endFrame(){this.pressed.clear(),this.released.clear(),this.wheel=0}};var si=i=>440*Math.pow(2,(i-69)/12),ua=[{name:"Neon Wave FM",bpm:104},{name:"Radio Caribe",bpm:98},{name:"Lo-Fi Costa",bpm:78},{name:"Silenci",bpm:0}],da=class{constructor(){this.ctx=null,this.ok=!1,this.station=0,this.step=0,this.nextT=0,this.masterVol=.7,this.musicVol=.5,this.engineOn=!1}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});return}try{let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=this.masterVol,this.master.connect(e.destination),this.sfx=e.createGain(),this.sfx.gain.value=.8,this.sfx.connect(this.master),this.music=e.createGain(),this.music.gain.value=this.musicVol,this.music.connect(this.master);let n=e.sampleRate*1.5,s=e.createBuffer(1,n,e.sampleRate),r=s.getChannelData(0);for(let a=0;a<n;a++)r[a]=Math.random()*2-1;this.noiseBuf=s,this.eng={o1:e.createOscillator(),o2:e.createOscillator(),g:e.createGain(),f:e.createBiquadFilter()},this.eng.o1.type="sawtooth",this.eng.o2.type="square",this.eng.f.type="lowpass",this.eng.f.frequency.value=400,this.eng.g.gain.value=0,this.eng.o1.connect(this.eng.f),this.eng.o2.connect(this.eng.f),this.eng.f.connect(this.eng.g),this.eng.g.connect(this.sfx),this.eng.o1.start(),this.eng.o2.start(),this.sir={o:e.createOscillator(),g:e.createGain()},this.sir.o.type="sawtooth",this.sir.g.gain.value=0,this.sir.o.connect(this.sir.g),this.sir.g.connect(this.sfx),this.sir.o.start(),this.nextT=e.currentTime+.1,this.ok=!0,e.state==="suspended"&&e.resume().catch(()=>{})}catch{this.ok=!1}}setMaster(t){this.masterVol=t,this.ok&&(this.master.gain.value=t)}setMusic(t){this.musicVol=t,this.ok&&(this.music.gain.value=t)}nextStation(){return this.station=(this.station+1)%ua.length,this.step=0,ua[this.station].name}get stationName(){return ua[this.station].name}_osc(t,e,n,s,r,a,o){let c=this.ctx,l=c.createOscillator(),h=c.createGain();l.type=t,l.frequency.setValueAtTime(e,n),o&&l.frequency.exponentialRampToValueAtTime(Math.max(1,o),n+s),h.gain.setValueAtTime(1e-4,n),h.gain.exponentialRampToValueAtTime(r,n+.008),h.gain.exponentialRampToValueAtTime(1e-4,n+s),l.connect(h),h.connect(a),l.start(n),l.stop(n+s+.05)}_noise(t,e,n,s,r=2e3,a="bandpass",o=1){let c=this.ctx,l=c.createBufferSource(),h=c.createBiquadFilter(),u=c.createGain();l.buffer=this.noiseBuf,l.loop=!0,h.type=a,h.frequency.value=r,h.Q.value=o,u.gain.setValueAtTime(n,t),u.gain.exponentialRampToValueAtTime(1e-4,t+e),l.connect(h),h.connect(u),u.connect(s),l.start(t,Math.random()),l.stop(t+e+.05)}_kick(t,e=1){this._osc("sine",140,t,.22,.9*e,this.music,40)}_snare(t,e=1){this._noise(t,.14,.45*e,this.music,1800,"highpass"),this._osc("triangle",220,t,.1,.25*e,this.music,120)}_hat(t,e=1){this._noise(t,.04,.16*e,this.music,7e3,"highpass")}_vol(t,e=25){return 1/(1+t/e*(t/e))}gunshot(t="pistol",e=0){if(!this.ok)return;let n=this.ctx.currentTime,s=this._vol(e,40);if(s<.02)return;let r=t==="shotgun";this._noise(n,r?.28:.14,(r?1:.7)*s,this.sfx,r?900:1600,"lowpass"),this._osc("square",r?120:220,n,.09,.4*s,this.sfx,60)}explosion(t=0){if(!this.ok)return;let e=this.ctx.currentTime,n=this._vol(t,70);this._noise(e,1.4,1.3*n,this.sfx,500,"lowpass"),this._osc("sine",90,e,1,1.2*n,this.sfx,25)}crash(t=1,e=0){if(!this.ok)return;let n=this.ctx.currentTime,s=Math.min(1,t)*this._vol(e,40);s<.03||(this._noise(n,.3,.8*s,this.sfx,700,"bandpass",.7),this._osc("sawtooth",120,n,.18,.3*s,this.sfx,50))}horn(t){if(this.ok){if(t&&!this._hornO){let e=this.ctx,n=e.createGain();n.gain.value=.18,n.connect(this.sfx);let s=e.createOscillator(),r=e.createOscillator();s.type=r.type="square",s.frequency.value=392,r.frequency.value=494,s.connect(n),r.connect(n),s.start(),r.start(),this._hornO={a:s,b:r,g:n}}else if(!t&&this._hornO){let e=this._hornO;e.g.gain.setTargetAtTime(0,this.ctx.currentTime,.02),e.a.stop(this.ctx.currentTime+.2),e.b.stop(this.ctx.currentTime+.2),this._hornO=null}}}beep(t="ok"){if(!this.ok)return;let e=this.ctx.currentTime;t==="ok"?(this._osc("triangle",660,e,.12,.3,this.sfx),this._osc("triangle",880,e+.1,.18,.3,this.sfx)):t==="fail"?this._osc("sawtooth",300,e,.3,.3,this.sfx,120):t==="cash"?(this._osc("square",1200,e,.06,.2,this.sfx),this._osc("square",1600,e+.06,.12,.2,this.sfx)):this._osc("sine",500,e,.06,.2,this.sfx)}engine(t,e,n){if(!this.ok)return;let s=this.ctx.currentTime,r=this.eng,a=38+e*150+n*12;r.o1.frequency.setTargetAtTime(a,s,.05),r.o2.frequency.setTargetAtTime(a*.5,s,.05),r.f.frequency.setTargetAtTime(250+e*900+n*300,s,.05),r.g.gain.setTargetAtTime(t?.05+n*.05+e*.04:0,s,.08)}siren(t){if(!this.ok)return;let e=this.ctx.currentTime,n=t<220?.07*this._vol(t,90):0;this.sir.o.frequency.setTargetAtTime(700+Math.floor(e*2.2)%2*380,e,.02),this.sir.g.gain.setTargetAtTime(n,e,.1)}update(){if(!this.ok||this.ctx.state!=="running")return;let t=ua[this.station];if(!t.bpm)return;let e=60/t.bpm/4,n=this.ctx.currentTime;this.nextT<n-.5&&(this.nextT=n+.05);let s=0;for(;this.nextT<n+.25&&s++<16;)this._schedule(this.station,this.step,this.nextT,e),this.step=(this.step+1)%256,this.nextT+=e}_schedule(t,e,n,s){let r=Math.floor(e/16)%4,a=e%16;if(t===0){let o=[57,53,48,55],c=o[r];a%4===0&&this._kick(n,1),(a===4||a===12)&&this._snare(n,1),a%2===0&&this._hat(n,a%4===2?1:.5),a%2===0&&this._osc("sawtooth",si(c-12),n,s*1.8,.26,this.music);let l=[0,7,12,7,16,12,7,12],h=c+12+l[a%8]+0;if(this._osc("square",si(h),n,s*.9,.07,this.music),a===0)for(let u of[0,3+(r===1||r===2?1:0),7])this._osc("triangle",si(c+12+u),n,s*14,.05,this.music)}else if(t===1){let o=[52,57,50,55],c=o[r];if((a===0||a===6||a===10)&&this._kick(n,.9),(a===4||a===12)&&this._noise(n,.08,.4,this.music,3e3,"bandpass",3),[2,3,7,11,14].includes(a)&&this._noise(n,.06,.25,this.music,1100+a%3*400,"bandpass",5),a%2===0&&this._hat(n,.6),[0,3,6,8,11,14].includes(a)&&this._osc("triangle",si(c-12+(a>7?7:0)),n,s*2.2,.3,this.music),[2,5,10,13].includes(a))for(let l of[0,4,7,10])this._osc("square",si(c+12+l),n,s*1.2,.035,this.music)}else{let o=[[60,64,67,71],[57,60,64,67],[53,57,60,64],[55,59,62,65]],c=o[r];if((a===0||a===10)&&this._kick(n,.7),a===8&&this._snare(n,.55),a%4===2&&this._hat(n,.5),a===0)for(let l of c)this._osc("triangle",si(l),n,s*15,.07,this.music);[0,3,6,9,12].includes(a)&&this._osc("sine",si(c[a/3%4]+12),n,s*3,.1,this.music),a%8===0&&this._osc("sine",si(c[0]-24),n,s*7,.3,this.music),a%4===1&&this._noise(n,.05,.02,this.music,5e3,"highpass")}}};var Bs={sedan:{name:"Sedan",len:4.6,wid:1.9,hgt:1.45,maxSpeed:40,accel:16,brake:34,steerRate:2.3,grip:6.5,hp:100,mass:1,colors:["#c0392b","#2e86c1","#d4ac0d","#7f8c8d","#1e8449","#e8e8e8"]},sports:{name:"Esportiu",len:4.3,wid:1.95,hgt:1.2,maxSpeed:62,accel:28,brake:40,steerRate:2.7,grip:5.2,hp:90,mass:.9,colors:["#e74c3c","#f1c40f","#8e44ad","#16a085","#ff2fb3","#1b1b1b"]},suv:{name:"SUV",len:4.9,wid:2.1,hgt:1.8,maxSpeed:36,accel:14,brake:32,steerRate:2,grip:7,hp:150,mass:1.4,colors:["#2c3e50","#566573","#873600","#e5e7e9"]},van:{name:"Furgoneta",len:5.2,wid:2.1,hgt:2.3,maxSpeed:31,accel:11,brake:28,steerRate:1.8,grip:7.2,hp:130,mass:1.6,colors:["#ecf0f1","#f39c12","#3498db"]},taxi:{name:"Taxi",len:4.6,wid:1.9,hgt:1.45,maxSpeed:40,accel:16,brake:34,steerRate:2.3,grip:6.5,hp:100,mass:1,colors:["#f7c600"]},police:{name:"Policia",len:4.7,wid:1.95,hgt:1.45,maxSpeed:50,accel:22,brake:38,steerRate:2.5,grip:6.2,hp:130,mass:1.15,colors:["#1c1f26"]}},S0=1;function Bh(i,t,e,n,s){let r=Bs[i]||Bs.sedan;return{id:S0++,type:i,spec:r,color:s||r.colors[0],x:t,z:e,y:Ze(t,e),heading:n,vx:0,vz:0,yawRate:0,spin:0,steer:0,speed:0,wheelSpin:0,health:r.hp,dead:!1,fuse:0,exploded:!1,removeAt:0,input:{throttle:0,steer:0,handbrake:!1},driver:null,lastImpact:0,lastHitBy:null,owner:null,mission:!1}}function fa(i){return[Math.sin(i.heading),Math.cos(i.heading)]}function kh(i){return[Math.cos(i.heading),-Math.sin(i.heading)]}function Ti(i){let[t,e]=fa(i),n=i.spec.wid*.5*1.02,s=(i.spec.len-i.spec.wid)*.5;return[s,0,-s].map(r=>({x:i.x+t*r,z:i.z+e*r,r:n,off:r}))}function Hh(i,t){let e=i.spec,n=i.input,s=i.vx*Math.sin(i.heading)+i.vz*Math.cos(i.heading);i.steer=ln(i.steer,Ot(n.steer||0,-1,1),9,t);let r=Math.abs(s),a=Ot(r/4.5,0,1)/(1+r/e.maxSpeed*1.4),o=i.steer*e.steerRate*a*Math.sign(s||1)*(n.handbrake?1.35:1);i.yawRate=ln(i.yawRate,i.dead?0:o,10,t),i.spin*=Math.exp(-3.5*t),i.heading+=(i.yawRate+i.spin)*t;let c=Math.sin(i.heading),l=Math.cos(i.heading),h=Math.cos(i.heading),u=-Math.sin(i.heading),d=i.vx*c+i.vz*l,f=i.vx*h+i.vz*u,m=Ot(n.throttle||0,-1,1);i.dead&&(m=0);let x;m>0?x=d<-.5?e.brake*m:e.accel*m*(1-Ot(d/e.maxSpeed,0,1)):m<0?x=d>.5?-e.brake*-m:-e.accel*.6*-m*(1-Ot(-d/(e.maxSpeed*.35),0,1)):x=-Math.sign(d)*Math.min(Math.abs(d)/t,1.2+Math.abs(d)*.05),x-=d*.04,d+=x*t,n.handbrake&&(d*=Math.exp(-1.1*t)),f*=Math.exp(-(n.handbrake?e.grip*.16:e.grip)*t),i.vx=c*d+h*f,i.vz=l*d+u*f,i.x+=i.vx*t,i.z+=i.vz*t,i.speed=d,i.wheelSpin+=d/.35*t,i.y=ln(i.y,Ze(i.x,i.z),18,t),i.lastImpact=0}function Vh(i,t,e=0){let n=0;for(let a=0;a<2;a++)for(let o of Ti(i))wi(t,o.x,o.z,o.r+.5,c=>{let l=Si(o.x,o.z,o.r,c);if(!l)return;o.x+=l.nx*l.pen,o.z+=l.nz*l.pen,i.x+=l.nx*l.pen,i.z+=l.nz*l.pen;let h=i.vx*l.nx+i.vz*l.nz;if(h<0){let u=-1.22*h;i.vx+=u*l.nx,i.vz+=u*l.nz;let d=l.nx*Math.cos(i.heading)-l.nz*Math.sin(i.heading);i.spin+=Ot(o.off*d*u*.06,-2.5,2.5),-h>n&&(n=-h)}});let s=i.spec.len*.4,r=(a,o,c,l)=>{if(a<o+s){i[l]=o+s;let h=l==="x"?"vx":"vz";i[h]<0&&(n=Math.max(n,-i[h]),i[h]=0)}else if(a>c-s){i[l]=c-s;let h=l==="x"?"vx":"vz";i[h]>0&&(n=Math.max(n,i[h]),i[h]=0)}};return r(i.x,lt.minX,lt.maxX,"x"),r(i.z,lt.minZ,lt.maxZ,"z"),n>i.lastImpact&&(i.lastImpact=n),n}function Gh(i,t){let e=t.x-i.x,n=t.z-i.z,s=(i.spec.len+t.spec.len)*.5+.5;if(e*e+n*n>s*s)return 0;let r=Ti(i),a=Ti(t),o=1/i.spec.mass,c=1/t.spec.mass,l=0;for(let h of r)for(let u of a){let d=h.x-u.x,f=h.z-u.z,m=d*d+f*f,x=h.r+u.r;if(m>=x*x)continue;let g=Math.sqrt(m);g<1e-6?(d=1,f=0,g=1e-6):(d/=g,f/=g);let p=x-g,S=o+c;i.x+=d*p*o/S,i.z+=f*p*o/S,t.x-=d*p*c/S,t.z-=f*p*c/S;let y=i.vx-t.vx,_=i.vz-t.vz,R=y*d+_*f;if(R<0){let T=-1.3*R/S;i.vx+=T*o*d,i.vz+=T*o*f,t.vx-=T*c*d,t.vz-=T*c*f;let A=d*Math.cos(i.heading)-f*Math.sin(i.heading),I=-d*Math.cos(t.heading)+f*Math.sin(t.heading);i.spin+=Ot(h.off*A*T*o*.05,-2,2),t.spin+=Ot(u.off*I*T*c*.05,-2,2),l=Math.max(l,-R)}}return l>0&&(i.lastImpact=Math.max(i.lastImpact,l),t.lastImpact=Math.max(t.lastImpact,l)),l}function Wh(i,t,e=1){return i.dead||t<6?!1:(i.health-=(t-5)*3.2*e,i.health<=0?(Xh(i),!0):!1)}function pa(i,t){return i.dead?!1:(i.health-=t,i.health<=0?(Xh(i),!0):!1)}function Xh(i){i.health=0,i.dead=!0,i.fuse=2.4,i.input={throttle:0,steer:0,handbrake:!1}}var Fe={pistol:{name:"Pistola",dmg:30,rpm:280,mag:12,pellets:1,spread:.01,range:120,auto:!1,reload:1.2,price:0,ammoPrice:60,sound:"pistol"},smg:{name:"Metralleta",dmg:16,rpm:760,mag:30,pellets:1,spread:.032,range:90,auto:!0,reload:1.7,price:1500,ammoPrice:120,sound:"smg"},shotgun:{name:"Escopeta",dmg:12,rpm:70,mag:6,pellets:9,spread:.075,range:38,auto:!1,reload:2.2,price:2500,ammoPrice:150,sound:"shotgun"}},qh=["pistol","smg","shotgun"];function Yh(i,t,e,n,s,r,a,o,c={}){let l={t:o,kind:"none"},h=Fs(i.city,t,e,n,s,r,a,o);if(h<l.t&&(l={t:h,kind:"world"}),r<-1e-6){let u=-e/r;u>0&&u<l.t&&(l={t:u,kind:"ground"})}for(let u of i.peds){if(u.state==="dead"||u===c.ignorePed)continue;let d=u.x-t,f=u.z-n;if(d*d+f*f>(l.t+2)*(l.t+2))continue;let m=zc(t,e,n,s,r,a,u.x,u.z,u.y,1.85,.42,l.t);m&&m.t<l.t&&(l={t:m.t,kind:"ped",ped:u,head:m.y-u.y>1.5})}for(let u of i.vehicles){if(u===c.ignoreVehicle||u.exploded)continue;let d=u.x-t,f=u.z-n,m=u.spec.len+l.t;if(d*d+f*f>m*m)continue;let x=Oc(t,e,n,s,r,a,u.x,u.z,u.heading,u.spec.wid/2,u.spec.len/2,u.y,u.y+u.spec.hgt+.3,l.t);x<l.t&&(l={t:x,kind:"vehicle",vehicle:u})}if(c.player&&!c.player.dead&&!c.player.vehicle){let u=c.player,d=zc(t,e,n,s,r,a,u.x,u.z,u.y,1.8,.4,l.t);d&&d.t<l.t&&(l={t:d.t,kind:"player"})}return l}function Zh(i,t,e,n,s){if(n<=0)return[i,t,e];let r=s()*na,a=Math.sqrt(s())*n,o=-e,c=0,l=i,h=Math.hypot(o,l)||1;o/=h,l/=h;let u=t*l-e*c,d=e*o-i*l,f=i*c-t*o,m=Math.cos(r)*a,x=Math.sin(r)*a,g=i+o*m+u*x,p=t+c*m+d*x,S=e+l*m+f*x,y=Math.hypot(g,p,S);return[g/y,p/y,S/y]}function $h(i){let t=i.player,e=Fe[t.current],n=t.weapons[t.current];if(t.cool>0||t.reloadT>0||t.dead)return!1;if(n.clip<=0)return t.startReload(),!1;n.clip--,t.cool=60/e.rpm;let s=i.cam,r=t.muzzle(),a=t.aiming?.6:1.4;for(let o=0;o<e.pellets;o++){let[c,l,h]=Zh(s.fx,s.fy,s.fz,e.spread*a,()=>i.rng.next()),u=Yh(i,s.x,s.y,s.z,c,l,h,e.range,{ignoreVehicle:t.vehicle||null}),d=s.x+c*u.t,f=s.y+l*u.t,m=s.z+h*u.t;i.effects.tracer(r[0],r[1],r[2],d,f,m),b0(i,u,e.dmg,d,f,m,"player",c,h)}return i.effects.muzzle(r[0],r[1],r[2]),i.audio.gunshot(e.sound,0),i.noise(t.x,t.z,45),t.kick=Math.min(.12,t.kick+(e.sound==="shotgun"?.09:.025)),n.clip===0&&n.ammo>0&&t.startReload(),!0}function b0(i,t,e,n,s,r,a,o=0,c=0){if(t.kind==="ped")kc(i,t.ped,t.head?e*3:e,a,o,c);else if(t.kind==="vehicle"){let l=t.vehicle;l.lastHitBy=a,i.effects.spark(n,s,r),pa(l,e*.35)&&i.onVehicleDestroyed(l,a),i.alarm(n,r,25,a==="player"),a==="player"&&l.driver==="police"?i.crime("hitCop",l.x,l.z,!0):a==="player"&&l.ai&&l.ai.role==="traffic"&&i.crime("assault",l.x,l.z),l.ai&&(l.ai.panicT=6)}else t.kind==="world"||t.kind==="ground"?i.effects.spark(n,s,r,"#cfcfcf"):t.kind==="player"&&us(i,e,o,c)}function kc(i,t,e,n,s=0,r=0){t.state!=="dead"&&(t.hp-=e,i.effects.spark(t.x,t.y+1.2,t.z,"#b02020"),t.hp<=0?(t.state="dead",t.deadT=0,t.speed=0,t.kx=s*3,t.kz=r*3,n==="player"&&(i.stats.kills++,t.kind==="civ"?i.crime("kill",t.x,t.z):t.kind==="cop"&&i.crime("killCop",t.x,t.z,!0)),i.onPedKilled(t,n)):(t.kind==="civ"&&(t.state="flee",t.fleeT=8,t.threat={x:i.player.x,z:i.player.z}),n==="player"&&(t.kind==="civ"?i.crime("assault",t.x,t.z):t.kind==="cop"&&i.crime("hitCop",t.x,t.z,!0))),i.alarm(t.x,t.z,22,n==="player"))}function us(i,t,e=0,n=0){let s=i.player;if(!(s.dead||i.godMode)){if(s.armor>0){let r=Math.min(s.armor,t*.6);s.armor-=r,t-=r}s.hp-=t,s.hurtT=.35,s.lastHurtAt=i.time,s.hp<=0&&(s.hp=0,i.onPlayerDeath())}}function Jh(i,t,e,n,s,r){i.effects.explosion(t,0,e),i.audio.explosion(Zt(t,e,i.player.x,i.player.z)),i.alarm(t,e,60,r==="player");for(let c of i.vehicles){let l=Zt(t,e,c.x,c.z);if(l>n*1.4||c.exploded)continue;let h=1-l/(n*1.4);c.lastHitBy=r;let u=(c.x-t)/(l||1),d=(c.z-e)/(l||1);c.vx+=u*18*h,c.vz+=d*18*h,c.spin+=(i.rng.next()-.5)*3*h,pa(c,s*h)&&i.onVehicleDestroyed(c,r)}for(let c of i.peds){if(c.state==="dead")continue;let l=Zt(t,e,c.x,c.z);l<n*1.3&&kc(i,c,s*(1-l/(n*1.3))*1.2,r,(c.x-t)/(l||1),(c.z-e)/(l||1))}let a=i.player,o=Zt(t,e,a.x,a.z);!a.dead&&o<n*1.3&&us(i,s*(1-o/(n*1.3))*.8),r==="player"&&i.crime("explosion",t,e,!0)}function Kh(i,t,e){let n=Fe[e]||Fe.pistol,s=i.player,r=s.vehicle?s.vehicle.x:s.x,a=s.vehicle?s.vehicle.z:s.z,o=Zt(t.x,t.z,r,a),c=t.x,l=t.y+1.45,h=t.z,u=s.vehicle?s.vehicle.y+.9:s.y+1.1,d=r-c,f=u-l,m=a-h,x=Math.hypot(d,f,m)||1;d/=x,f/=x,m/=x;let g=.045+o*.0018;[d,f,m]=Zh(d,f,m,g,()=>i.rng.next());let p=Yh(i,c,l,h,d,f,m,110,{ignorePed:t,player:s.vehicle?null:s}),S=p;if(s.vehicle&&p.kind!=="world"){let T=s.vehicle,A=Oc(c,l,h,d,f,m,T.x,T.z,T.heading,T.spec.wid/2,T.spec.len/2,T.y,T.y+T.spec.hgt+.3,p.t);A<p.t&&(S={t:A,kind:"myvehicle"})}let y=c+d*S.t,_=l+f*S.t,R=h+m*S.t;if(i.effects.tracer(c,l,h,y,_,R),i.effects.muzzle(c,l,h),i.audio.gunshot(n.sound,Zt(c,h,s.x,s.z)),S.kind==="player")us(i,n.dmg*(e==="smg"?.35:.5),d,m);else if(S.kind==="myvehicle"){let T=s.vehicle;i.effects.spark(y,_,R),pa(T,n.dmg*.25)&&i.onVehicleDestroyed(T,"enemy"),us(i,n.dmg*.12,d,m)}else S.kind==="ped"?kc(i,S.ped,n.dmg*.5,"enemy",d,m):S.kind==="vehicle"?i.effects.spark(y,_,R):i.effects.spark(y,_,R,"#cfcfcf")}var ds=100,Hc=900;function w0(i,t,e){let n=document.createElement(i);return t&&(n.className=t),e!==void 0&&(n.innerHTML=e),n}var ma=class{constructor(t,e){this.root=t,this.city=e,t.innerHTML=`
      <div id="hud-top-left"><canvas id="minimap" width="220" height="220"></canvas>
        <div class="bars"><div class="bar hp"><i id="b-hp"></i></div><div class="bar ar"><i id="b-ar"></i></div></div>
        <div id="time"></div></div>
      <div id="hud-top-right"><div id="money"></div><div id="stars"></div><div id="weapon"></div></div>
      <div id="mission" class="hidden"><div id="m-title"></div><div id="m-obj"></div><div id="m-prog"></div></div>
      <div id="speedo" class="hidden"><div id="kmh">0</div><small>km/h</small><div class="bar car"><i id="b-car"></i></div></div>
      <div id="radio" class="hidden"></div>
      <div id="prompt" class="hidden"></div>
      <div id="reticle" class="hidden"><i></i></div>
      <div id="toasts"></div>
      <div id="banner" class="hidden"><h1></h1><p></p></div>
      <div id="vignette"></div>
      <div id="bigmap" class="hidden"><canvas id="bigmap-c" width="720" height="720"></canvas><div class="legend">M \xB7 tancar mapa</div></div>
      <div id="shop" class="hidden"></div>`,this.q=n=>t.querySelector(n),this.mini=this.q("#minimap").getContext("2d"),this.big=this.q("#bigmap-c").getContext("2d"),this.cache={},this.map=this.renderMap(),this.bannerT=0,this.radioT=0,this.toastCount=0}set(t,e){this.cache[t]!==e&&(this.cache[t]=e,this.q("#"+t).textContent=e)}show(t,e){let n="v"+t;this.cache[n]!==e&&(this.cache[n]=e,this.q("#"+t).classList.toggle("hidden",!e))}toast(t){let e=w0("div","toast",t),n=this.q("#toasts");for(n.appendChild(e);n.children.length>4;)n.removeChild(n.firstChild);setTimeout(()=>{e.classList.add("out"),setTimeout(()=>e.remove(),500)},3200)}banner(t,e,n=""){let s=this.q("#banner");s.className=e,s.querySelector("h1").textContent=t,s.querySelector("p").textContent=n,this.bannerT=e==="start"?5:4}showRadio(t){this.radioName=t,this.radioT=3.5}renderMap(){let t=document.createElement("canvas");t.width=t.height=Hc;let e=t.getContext("2d");e.translate(ds,ds),e.fillStyle="#1f5f86",e.fillRect(-ds,-ds,Hc,Hc),e.fillStyle="#45704c",e.fillRect(lt.minX,lt.minZ,lt.maxX-lt.minX,lt.maxZ-lt.minZ),e.fillStyle="#6e737b",e.fillRect(lt.minX,lt.minZ,lt.maxX-lt.minX,lt.minZ*-1-St),e.fillStyle="#e0cf9a",e.fillRect(Se+St,-St,lt.maxX-Se-St,lt.maxZ+St),e.fillStyle="#3b3f48";for(let s=0;s<=ge;s++)e.fillRect(s*pt-St,-St,2*St,Se+2*St),e.fillRect(-St,s*pt-St,Se+2*St,2*St);let n={residential:"#8a7f86",downtown:"#6f7f98",hotel:"#a78a98",port:"#6b6f66",park:"#3f8f4f",special:"#9a8f66"};for(let s of this.city.blocks){e.fillStyle=n[s.kind]||"#777";let r=pt-2*St;e.fillRect(s.cx-r/2,s.cz-r/2,r,r)}e.fillStyle="rgba(255,255,255,0.18)";for(let s of this.city.buildings)e.fillRect(s.cx-s.w/2,s.cz-s.d/2,s.w,s.d);return t}drawMap(t,e,n,s,r,a,o,c){t.save(),t.clearRect(0,0,e,e),t.translate(e/2,e/2),c&&t.rotate(r-Math.PI),t.scale(a,a),t.drawImage(this.map,-(n+ds),-(s+ds));let l=m=>m-n,h=m=>m-s;for(let m of o.pickups)m.taken||(t.fillStyle=m.type==="health"?"#ff5d73":m.type==="armor"?"#4cc9f0":m.type==="cash"?"#46d36a":"#ffd23f",t.fillRect(l(m.x)-1.6,h(m.z)-1.6,3.2,3.2));let u=this.city.pois.gunshop;t.fillStyle="#ff6b35",t.beginPath(),t.arc(l(u.x),h(u.z),4/Math.max(a,.5),0,7),t.fill();let d=Math.floor(o.time*4)%2;for(let m of o.vehicles)m.driver==="police"&&!m.dead&&(t.fillStyle=d?"#ff3b3b":"#3b6bff",t.beginPath(),t.arc(l(m.x),h(m.z),4.5/Math.max(a,.5),0,7),t.fill());for(let m of o.peds)m.kind==="cop"&&m.state!=="dead"&&(t.fillStyle=d?"#ff3b3b":"#3b6bff",t.fillRect(l(m.x)-1.5,h(m.z)-1.5,3,3));for(let m of o.missions.markers()){let x=(m.small?3.2:5.5)/Math.max(a,.5);t.fillStyle=m.color,t.strokeStyle="#000",t.lineWidth=1/a,t.beginPath(),t.arc(l(m.x),h(m.z),x,0,7),t.fill(),t.stroke(),m.kind==="dest"&&(t.strokeStyle=m.color,t.lineWidth=1.2/a,t.beginPath(),t.arc(l(m.x),h(m.z),m.r||6,0,7),t.stroke())}t.restore(),t.save();let f=o.player;t.translate(e/2+(c?0:(f.x-n)*a),e/2+(c?0:(f.z-s)*a)),c||t.rotate(Math.PI-r),t.fillStyle="#ffffff",t.strokeStyle="#000",t.lineWidth=2,t.beginPath(),t.moveTo(0,-9),t.lineTo(6.5,8),t.lineTo(0,4),t.lineTo(-6.5,8),t.closePath(),t.fill(),t.stroke(),t.restore()}update(t,e){let n=t.player;this.set("money",bi(n.money)),this.set("time",t.world.timeString+(t.world.night>.5?"  \u263E":"  \u2600")),this.q("#b-hp").style.width=Math.max(0,n.hp)+"%",this.q("#b-ar").style.width=n.armor+"%",this.q("#b-ar").parentElement.style.opacity=n.armor>0?1:.35;let s=t.wanted.level,r=t.wanted.evading&&Math.floor(t.time*3)%2===0,a="";for(let m=0;m<5;m++)a+=`<b class="${m<s?r?"on flash":"on":""}">\u2605</b>`;this.cache.stars!==a+r&&(this.cache.stars=a+r,this.q("#stars").innerHTML=a);let o=Fe[n.current],c=n.weapons[n.current];this.set("weapon",n.vehicle?"":`${o.name}  ${c.clip}/${c.ammo}${n.reloadT>0?"  \u21BB":""}`);let l=t.missions;if(this.show("mission",!!l.active),l.active){this.set("m-title",l.active.def.title);let m=l.timeLeft;this.set("m-obj",l.objective+(m!==null?`  \xB7  ${Math.ceil(m)} s`:"")),this.set("m-prog",l.progress)}let h=n.vehicle;this.show("speedo",!!h),h&&(this.set("kmh",String(Math.round(Math.abs(h.speed)*3.6))),this.q("#b-car").style.width=Math.max(0,h.health/h.spec.hp*100)+"%");let u="";t.shopOpen?u="":h?u="F \xB7 Sortir del cotxe":n.nearVehicle?u="F \xB7 Entrar al "+n.nearVehicle.spec.name.toLowerCase():t.nearShop&&(u="E \xB7 Entrar a l'armeria"),this.set("prompt",u),this.show("prompt",!!u&&t.mode==="play"),this.show("reticle",!h&&!n.dead&&t.mode==="play"),this.q("#reticle").classList.toggle("aim",n.aiming),this.radioT=Math.max(0,this.radioT-e),this.show("radio",(!!h||this.radioT>0)&&t.audio.station!==3||this.radioT>0),this.set("radio","\u266A "+t.audio.stationName),this.bannerT=Math.max(0,this.bannerT-e),this.q("#banner").classList.toggle("hidden",this.bannerT<=0);let d=this.q("#vignette");d.style.opacity=String(Math.min(1,n.hurtT*2.2+(n.hp<30?.25:0)));let f=t.cam.yaw;this.drawMap(this.mini,220,n.x,n.z,f,.85,t,!0),t.bigMap&&this.drawMap(this.big,720,350,350,0,720/880,t,!1)}};var Qh=new Map,jh=new Map;function hn(i,t){let e=Qh.get(i);return e||(e=t(),Qh.set(i,e)),e}function ks(i,t){let e=jh.get(i);return e||(e=t(),jh.set(i,e)),e}var vn=(i,t={})=>new ie({color:i,roughness:.6,metalness:.2,...t}),Vc=()=>ks("glass",()=>vn(1317931,{roughness:.15,metalness:.7})),eu=()=>ks("tire",()=>vn(1381653,{roughness:.9,metalness:0})),E0=()=>ks("wreck",()=>vn(1710618,{roughness:1,metalness:0})),Gc={value:0};function tu(i){return ks("body"+i,()=>vn(i,{metalness:.45,roughness:.35}))}function Ae(i,t,e,n,s,r=!0){let a=new kt(i,t);return a.position.set(e,n,s),a.castShadow=r,a}function nu(i){let{len:t,wid:e,hgt:n}=i.spec,s=new Oe,r=tu(i.color),a=Math.max(.5,n*.42),o=Ae(hn("b"+t+e+a,()=>new fe(e,a,t)),r,0,.35+a/2,0);s.add(o);let c=i.type==="sports",l=i.type==="van",h=i.type==="suv",u=n-a-.3,d=l?t*.78:c?t*.42:t*.5,f=l||c?-t*.06:-t*.07,m=Ae(hn("c"+e+u+d,()=>new fe(e*.88,u,d)),l||h?r:Vc(),0,.35+a+u/2,f);if(s.add(m),!l&&!h)s.add(Ae(hn("r"+e+d,()=>new fe(e*.84,.07,d*.8)),r,0,.35+a+u+.03,f));else{let y=Ae(hn("w"+e+u+d,()=>new fe(e*.9,u*.45,d*.98)),Vc(),0,.35+a+u*.62,f,!1);s.add(y)}c&&s.add(Ae(hn("spoil",()=>new fe(e*.9,.06,.4)),r,0,.35+a+.35,-t/2+.2));let x=hn("wheel",()=>{let y=new Ye(.36,.36,.28,12);return y.rotateZ(Math.PI/2),y});s.userData.wheels=[];let g=e/2-.08,p=t*.32;for(let[y,_,R]of[[-1,1,!0],[1,1,!0],[-1,-1,!1],[1,-1,!1]]){let T=new Oe;T.position.set(y*g,.36,_*p),T.add(Ae(x,eu(),0,0,0)),s.add(T),s.userData.wheels.push({pivot:T,front:R})}s.userData.head=[],s.userData.tail=[];let S=hn("lamp",()=>new fe(.34,.16,.06));for(let y of[-1,1]){let _=new ie({color:16777198,emissive:16773824,emissiveIntensity:.2}),R=new ie({color:10027008,emissive:16715792,emissiveIntensity:.3});s.add(Ae(S,_,y*(e/2-.3),.35+a*.55,t/2+.02,!1)),s.add(Ae(S,R,y*(e/2-.3),.35+a*.55,-t/2-.02,!1)),s.userData.head.push(_),s.userData.tail.push(R)}if(s.userData.bodyMats=[r],s.userData.wrecked=!1,i.type==="police"){let y=tu("#f2f2f2");s.add(Ae(hn("pdoor",()=>new fe(e+.02,a*.7,t*.3)),y,0,.35+a/2,-t*.02));let _=new ie({color:16719904,emissive:16711680,emissiveIntensity:1}),R=new ie({color:2113791,emissive:12543,emissiveIntensity:1});s.add(Ae(hn("lb",()=>new fe(e*.36,.14,.3)),_,-e*.2,.35+a+u+.14,f)),s.add(Ae(hn("lb",()=>new fe(e*.36,.14,.3)),R,e*.2,.35+a+u+.14,f)),s.userData.siren=[_,R]}return i.type==="taxi"&&s.add(Ae(hn("tx",()=>new fe(.7,.2,.3)),ks("taxi",()=>new ie({color:16773792,emissive:16764928,emissiveIntensity:.8})),0,.35+a+u+.17,f)),s.userData.hasFire=null,s}function Wc(i,t,e){i.position.set(t.x,t.y,t.z),i.rotation.y=t.heading;for(let s of i.userData.wheels)s.pivot.children[0].rotation.x=t.wheelSpin,s.front&&(s.pivot.rotation.y=t.steer*.42);let n=Gc.value;for(let s of i.userData.head)s.emissiveIntensity=.25+n*2.2;for(let s of i.userData.tail)s.emissiveIntensity=t.input.throttle<-.1||t.input.handbrake?2.2:.35+n*.8;if(i.userData.siren){let s=t.driver==="police"&&!t.dead&&t.sirenOn,r=Math.floor(e*6)%2;i.userData.siren[0].emissiveIntensity=s&&r===0?2.5:.1,i.userData.siren[1].emissiveIntensity=s&&r===1?2.5:.1}t.dead&&!i.userData.wrecked&&(i.userData.wrecked=!0,i.traverse(s=>{s.isMesh&&s.material!==eu()&&s.material!==Vc()&&(s.material=E0())}))}function ga({shirt:i=3900150,pants:t=2830138,skin:e=14726282,hair:n=2759956,vest:s=null}={}){let r=new Oe,a=vn(e,{metalness:0,roughness:.8}),o=vn(i,{metalness:0,roughness:.8}),c=vn(t,{metalness:0,roughness:.85}),l=Ae(new fe(.5,.64,.27),s?vn(s,{metalness:0}):o,0,1.15,0);r.add(l);let h=Ae(new vi(.18,10,8),a,0,1.64,0);r.add(h),r.add(Ae(new vi(.19,10,6,0,Math.PI*2,0,Math.PI*.55),vn(n,{metalness:0}),0,1.67,0));let u=(d,f,m,x,g,p)=>{let S=new Oe;S.position.set(g,p,0);let y=Ae(new fe(d,f,m),x,0,-f/2,0);return S.add(y),r.add(S),S};return r.userData.legL=u(.2,.82,.22,c,-.13,.84),r.userData.legR=u(.2,.82,.22,c,.13,.84),r.userData.armL=u(.15,.6,.17,o,-.33,1.44),r.userData.armR=u(.15,.6,.17,o,.33,1.44),r.userData.armR.add(Ae(new fe(.1,.12,.26),vn(1381653,{metalness:.3}),0,-.62,.13,!1)),r.userData.gun=r.userData.armR.children[1],r.userData.gun.visible=!1,r.userData.phase=Math.random()*6,r.userData.fall=0,r}function Hs(i,t,e,n=!1,s=0){let r=i.userData;r.phase+=t*e*1.9;let a=Math.min(t/4,1)*.9,o=Math.sin(r.phase)*a;r.legL.rotation.x=o,r.legR.rotation.x=-o,r.armL.rotation.x=-o*.8,r.armR.rotation.x=n?-Math.PI/2+.1:o*.8,r.gun.visible=n,r.fall+=(s-r.fall)*Math.min(1,e*10),i.rotation.x=-r.fall*(Math.PI/2),i.position.y=r.fall*.25}var xa=class{constructor(t){this.g=t,this.x=0,this.z=0,this.y=0,this.vy=0,this.vx=0,this.vz=0,this.heading=0,this.speed=0,this.hp=100,this.armor=0,this.money=500,this.dead=!1,this.vehicle=null,this.weapons={},this.current="pistol",this.cool=0,this.reloadT=0,this.kick=0,this.hurtT=0,this.lastHurtAt=-99,this.aiming=!1,this.sprinting=!1,this.camYaw=0,this.camPitch=-.18,this.camYawOffset=0,this.nearVehicle=null,this.lmbWas=!1,this.mesh=ga({shirt:15224906,pants:2437194,hair:1708560}),this.mesh.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),t.scene.add(this.mesh),this.giveWeapon("pistol",48)}giveWeapon(t,e){let n=Fe[t],s=this.weapons[t]||(this.weapons[t]={owned:!0,ammo:0,clip:0});s.owned=!0;let r=s.ammo+s.clip+e;s.clip=Math.min(n.mag,s.clip+Math.min(e,n.mag-s.clip)),s.ammo=r-s.clip}addAmmo(t,e){let n=this.weapons[t];n&&(n.ammo+=e)}totalAmmo(t){let e=this.weapons[t];return e?e.ammo+e.clip:0}startReload(){let t=this.weapons[this.current],e=Fe[this.current];this.reloadT>0||t.ammo<=0||t.clip>=e.mag||(this.reloadT=e.reload)}selectWeapon(t){!this.weapons[t]||t===this.current||(this.current=t,this.reloadT=0,this.cool=.25,this.g.hud.toast(Fe[t].name))}muzzle(){let t=Math.sin(this.heading),e=Math.cos(this.heading);return[this.x+t*.65-e*.28,this.y+1.38,this.z+e*.65+t*.28]}respawn(t,e,n=0){this.x=t,this.z=e,this.y=Ze(t,e),this.vy=0,this.vx=this.vz=0,this.heading=n,this.camYaw=n,this.dead=!1,this.hp=100,this.vehicle=null,this.mesh.visible=!0,this.mesh.rotation.set(0,n,0)}findNearVehicle(){let t=null,e=4.2;for(let n of this.g.vehicles){if(n.exploded||n.dead&&n.fuse<=0)continue;let s=Zt(this.x,this.z,n.x,n.z)-n.spec.len*.35;s<e&&(e=s,t=n)}return t}enter(t){let e=this.g;t.ai&&e.carjack(t),t.driver="player",t.owner="player",t.ai=null,t.nav=null,t.input={throttle:0,steer:0,handbrake:!1},this.vehicle=t,this.mesh.visible=!1,e.hud.toast(t.spec.name),e.audio.beep("click")}exit(){let t=this.vehicle;if(!t)return;let[e,n]=kh(t),[s,r]=fa(t),a=t.spec.wid/2+.9,o=[[e,n,a],[-e,-n,a],[s,r,t.spec.len/2+1],[-s,-r,t.spec.len/2+1]],c=[t.x+e*a,t.z+n*a];for(let[l,h,u]of o){let d=t.x+l*u,f=t.z+h*u,m=!1;if(wi(this.g.city,d,f,.5,x=>{Si(d,f,.45,x)&&(m=!0)}),!m){c=[d,f];break}}this.x=c[0],this.z=c[1],this.y=Ze(this.x,this.z),this.heading=this.camYaw=t.heading,t.driver=null,t.input={throttle:0,steer:0,handbrake:!0},this.vehicle=null,this.mesh.visible=!0,this.camYawOffset=0}update(t){let e=this.g.input;if(this.cool=Math.max(0,this.cool-t),this.kick=Math.max(0,this.kick-t*.35),this.hurtT=Math.max(0,this.hurtT-t),this.reloadT>0&&(this.reloadT-=t,this.reloadT<=0)){let r=this.weapons[this.current],a=Fe[this.current],o=Math.min(a.mag-r.clip,r.ammo);r.clip+=o,r.ammo-=o}if(this.dead)return;let[n,s]=e.takeMouse();if(this.vehicle?this.camYawOffset=Ot(this.camYawOffset-n*.0022,-2.4,2.4):this.camYaw=os(this.camYaw-n*.0022*(this.aiming?.7:1)),this.camPitch=Ot(this.camPitch-s*.0022,-.95,.75),e.wasPressed("Digit1")&&this.selectWeapon("pistol"),e.wasPressed("Digit2")&&this.selectWeapon("smg"),e.wasPressed("Digit3")&&this.selectWeapon("shotgun"),e.wheel!==0&&!this.vehicle){let r=qh.filter(o=>this.weapons[o]),a=r.indexOf(this.current);this.selectWeapon(r[(a+e.wheel+r.length)%r.length])}this.vehicle?this.driving(t,e):this.onFoot(t,e)}driving(t,e){let n=this.vehicle;if(n.exploded||n.dead&&n.fuse<=0){this.exit();return}n.input.throttle=(e.isDown("KeyW","ArrowUp")?1:0)-(e.isDown("KeyS","ArrowDown")?1:0),n.input.steer=(e.isDown("KeyA","ArrowLeft")?1:0)-(e.isDown("KeyD","ArrowRight")?1:0),n.input.handbrake=e.isDown("Space"),n.dead&&(n.input.throttle=0,n.input.steer=0),this.g.audio.horn(e.isDown("KeyE")&&!n.dead&&!this.g.shopOpen),this.x=n.x,this.z=n.z,this.y=n.y,this.speed=n.speed,this.camYawOffset=ln(this.camYawOffset,0,Math.abs(n.speed)>3&&!e.isDown("KeyC")?.9:0,t),e.wasPressed("KeyF")&&this.exit()}onFoot(t,e){let n=this.g;this.aiming=e.rmb,this.sprinting=e.isDown("ShiftLeft","ShiftRight")&&!this.aiming;let s=(e.isDown("KeyW","ArrowUp")?1:0)-(e.isDown("KeyS","ArrowDown")?1:0),r=(e.isDown("KeyD","ArrowRight")?1:0)-(e.isDown("KeyA","ArrowLeft")?1:0),a=Math.sin(this.camYaw),o=Math.cos(this.camYaw),c=a*s+-o*r,l=o*s+a*r,h=Math.hypot(c,l),u=this.aiming?2.8:this.sprinting?8.4:4.4;h>0&&(c/=h,l/=h);let d=c*u*(h>0?1:0),f=l*u*(h>0?1:0);this.vx=ln(this.vx,d,h>0?12:16,t),this.vz=ln(this.vz,f,h>0?12:16,t),this.speed=Math.hypot(this.vx,this.vz);let m=Ze(this.x,this.z);this.y<=m+.02&&this.vy<=0&&e.wasPressed("Space")&&(this.vy=6.2),this.vy-=19*t,this.y+=this.vy*t,this.y<=m&&(this.y=m,this.vy=0),this.x+=this.vx*t,this.z+=this.vz*t;for(let S=0;S<2;S++){wi(n.city,this.x,this.z,.6,y=>{if(this.y>y.h-.2)return;let _=Si(this.x,this.z,.4,y);_&&(this.x+=_.nx*_.pen,this.z+=_.nz*_.pen)});for(let y of n.vehicles)if(!(Math.abs(y.x-this.x)>4||Math.abs(y.z-this.z)>4))for(let _ of Ti(y)){let R=Math.hypot(this.x-_.x,this.z-_.z),T=_.r+.4;R<T&&R>1e-6&&(this.x+=(this.x-_.x)/R*(T-R),this.z+=(this.z-_.z)/R*(T-R))}}this.x=Ot(this.x,lt.minX+1,lt.maxX-1),this.z=Ot(this.z,lt.minZ+1,lt.maxZ-1);let x=this.aiming||e.lmb;x?this.heading=this.camYaw:h>0&&(this.heading=this.heading+ra(Math.atan2(c,l),this.heading)*Math.min(1,t*14)),e.wasPressed("KeyR")&&this.startReload();let g=Fe[this.current];e.lmb&&(g.auto||!this.lmbWas)&&!n.shopOpen&&n.mode==="play"&&this.hasTarget()&&$h(n),this.lmbWas=e.lmb,this.nearVehicle=this.findNearVehicle(),e.wasPressed("KeyF")&&this.nearVehicle&&this.enter(this.nearVehicle),Hs(this.mesh,this.speed,t,x||this.aiming,0),this.mesh.position.set(this.x,this.y,this.z),this.mesh.rotation.y=this.heading}hasTarget(){return!0}syncMeshWhileDriving(){this.mesh.visible=!1}};var T0=(i,t,e,n)=>{let s=i==="x"?e>0?3.5:-3.5:e>0?-3.5:3.5;return i==="x"?{x:n,z:t*70+s}:{x:t*70+s,z:n}},A0=(i,t)=>i==="x"?t>0?Math.PI/2:-Math.PI/2:t>0?0:Math.PI;function R0(i){let t=i.pois.garage,e=i.pois.bank,n=(a,o)=>zh(a,o),s=(a,o)=>Bc(a,o),r=(a,o,c,l)=>({...T0(a,o,c,l),h:A0(a,c)});return[{id:"deliver",title:"Entrega nocturna",giver:n(2,2),reward:600,intro:"Un client paga b\xE9 per un esportiu groc. Roba'l i porta'l al garatge abans que se n'adonin.",steps:[{type:"getcar",text:"Roba l'esportiu groc",vtype:"sports",color:"#f1c40f",at:r("z",4,-1,105)},{type:"goto",text:"Porta el cotxe al garatge",at:t,r:6,needCar:!0,timeLimit:150}]},{id:"race",title:"Cursa de controls",giver:n(4,6),reward:900,intro:"Cursa contra el rellotge pels carrers de Palmera Bay. Passa pels 6 controls abans que s'acabi el temps.",ride:{vtype:"sports",color:"#e74c3c",at:r("z",4,-1,450)},steps:[{type:"checkpoints",text:"Passa pels controls",points:[s(4,8),s(8,8),s(8,4),s(5,4),s(5,7),s(3,7)],r:11,timeLimit:130,needVehicle:!0}]},{id:"chase",title:"Ca\xE7a al fugitiu",giver:n(7,3),reward:1400,intro:"Un lladre fuig amb el bot\xED en un sedan morat. Atura'l abans que s'escapi de la ciutat.",ride:{vtype:"sports",color:"#16a085",at:r("z",7,-1,250)},steps:[{type:"destroy",text:"Destrueix el sedan morat",vtype:"sedan",color:"#7d3c98",at:r("x",2,1,400),timeLimit:150}]},{id:"heist",title:"El gran cop",giver:n(6,7),reward:5e3,intro:"El banc central t\xE9 una caixa forta plena. Entra, buida-la i fuig. La policia no trigar\xE0 gens.",steps:[{type:"goto",text:"Ves al banc",at:{x:e.x,z:e.z-3},r:4,onFoot:!0},{type:"hold",text:"Buida la caixa forta",at:{x:e.x,z:e.z-3},r:6,seconds:7,alarm:3},{type:"getcar",text:"Puja al cotxe de fugida",vtype:"sedan",color:"#1b1b1b",at:r("z",5,-1,318),keepWanted:!0},{type:"evade",text:"Perd la policia"},{type:"goto",text:"Amaga't al garatge",at:t,r:6}]},{id:"gang",title:"Neteja de barri",giver:n(8,8),reward:1800,give:{smg:90},intro:"Una banda s'ha apoderat del parc. Et deixo una metralleta: neteja'ls, per\xF2 ells tamb\xE9 disparen.",steps:[{type:"kill",text:"Elimina els membres de la banda",at:Fc(8,6),r:14,count:5}]}]}var _a=class{constructor(t){this.g=t,this.defs=R0(t.city),this.done=new Set,this.active=null,this.cd=0,this.armed=new Set(this.defs.map(e=>e.id))}get objective(){return this.active?this.active.st.text:""}get timeLeft(){let t=this.active;return t&&t.st.timeLimit?Math.max(0,t.st.timeLimit-t.t):null}get progress(){let t=this.active;return t&&t.st.progress?t.st.progress:""}start(t){let e=this.g,n=this.defs.find(s=>s.id===t);if(!n||this.active)return!1;if(this.armed.delete(t),this.active={def:n,i:-1,t:0,st:null,vehicles:[],peds:[]},n.give)for(let[s,r]of Object.entries(n.give))e.player.giveWeapon(s,r);if(n.ride){let s=e.addVehicle(n.ride.vtype,n.ride.at.x,n.ride.at.z,n.ride.at.h,n.ride.color,{mission:!0});this.active.vehicles.push(s)}return e.hud.banner(n.title,"start",n.intro),e.audio.beep("ok"),this.nextStep(),!0}nextStep(){let t=this.active,e=this.g;if(t.i++,t.t=0,t.i>=t.def.steps.length)return this.complete();let n=t.st={...t.def.steps[t.i],timeLimit:t.def.steps[t.i].timeLimit||0,hold:0,cp:0};return n.type==="getcar"?(n.car=e.addVehicle(n.vtype,n.at.x,n.at.z,n.at.h,n.color,{mission:!0}),t.vehicles.push(n.car),t.car=n.car):n.type==="destroy"?(n.car=e.addVehicle(n.vtype,n.at.x,n.at.z,n.at.h,n.color,{mission:!0,aiMode:"flee"}),t.vehicles.push(n.car)):n.type==="kill"&&(n.peds=e.spawnGang(n.at.x,n.at.z,n.r,n.count),t.peds.push(...n.peds)),null}fail(t){this.active&&(this.g.hud.banner("MISSI\xD3 FALLIDA","fail",t),this.g.audio.beep("fail"),this.cleanup(),this.cd=4)}complete(){let t=this.active,e=this.g,n=!this.done.has(t.def.id),s=n?t.def.reward:Math.round(t.def.reward*.25);this.done.add(t.def.id),e.addMoney(s),e.hud.banner("MISSI\xD3 SUPERADA","pass",`${t.def.title} \xB7 +$${s.toLocaleString("en-US")}`+(n?"":" (repetici\xF3)")),e.audio.beep("cash"),e.stats.missions++,this.cleanup(),e.requestSave()}cleanup(){let t=this.active;if(t){for(let e of t.vehicles)e.mission=!1,e.ai&&(e.ai.role="traffic");for(let e of t.peds)e.mission=!1;this.active=null}}abort(){this.active&&this.cleanup()}markers(){let t=[],e=this.active,n=this.g,s=n.player;if(e){let r=e.st;if(!r)return t;if(r.type==="getcar"&&r.car&&!r.car.exploded)t.push({x:r.car.x,z:r.car.z,color:"#ffd23f",kind:"target",tall:!0});else if(r.type==="goto")r.needCar&&e.car&&s.vehicle!==e.car?t.push({x:e.car.x,z:e.car.z,color:"#ffd23f",kind:"target",tall:!0}):t.push({x:r.at.x,z:r.at.z,color:"#4cc9f0",kind:"dest",r:r.r});else if(r.type==="hold")t.push({x:r.at.x,z:r.at.z,color:"#ff9f1c",kind:"dest",r:r.r});else if(r.type==="checkpoints"){let a=r.points[r.cp];a&&t.push({x:a.x,z:a.z,color:"#4cc9f0",kind:"dest",r:r.r});let o=r.points[r.cp+1];o&&t.push({x:o.x,z:o.z,color:"#2b6f85",kind:"dest",r:r.r*.6,small:!0})}else if(r.type==="destroy"&&r.car&&!r.car.dead)t.push({x:r.car.x,z:r.car.z,color:"#ff4d4d",kind:"enemy",tall:!0});else if(r.type==="kill")for(let a of r.peds)a.state!=="dead"&&t.push({x:a.x,z:a.z,color:"#ff4d4d",kind:"enemy",small:!0})}else for(let r of this.defs){let a=this.done.has(r.id);t.push({x:r.giver.x,z:r.giver.z,color:a?"#46d36a":"#ffd23f",kind:"giver",r:2.4,label:r.title,done:a})}return t}update(t){let e=this.g,n=e.player;this.cd>0&&(this.cd-=t);let s=this.active;for(let a of this.defs)Zt(n.x,n.z,a.giver.x,a.giver.z)>4.5&&this.armed.add(a.id);if(!s){if(this.cd>0||n.dead||n.vehicle)return;for(let a of this.defs)if(this.armed.has(a.id)&&Zt(n.x,n.z,a.giver.x,a.giver.z)<2.6){if(e.wanted.level>0){this._warned||(e.hud.toast("Perd la policia abans de comen\xE7ar una missi\xF3"),this._warned=!0);return}this._warned=!1,this.start(a.id);return}return}if(n.dead)return this.fail("Has mort");s.t+=t;let r=s.st;if(r.timeLimit&&s.t>r.timeLimit)return this.fail("S'ha esgotat el temps");if(r.type==="goto"&&r.needCar&&s.car&&(s.car.dead||s.car.exploded))return this.fail("El vehicle ha quedat destru\xEFt");switch(r.type){case"getcar":if(r.car.exploded||r.car.dead)return this.fail("El vehicle ha quedat destru\xEFt");n.vehicle===r.car&&this.nextStep();break;case"goto":{if(r.needCar&&n.vehicle!==s.car){r.text="Torna al cotxe";break}if(r.text=s.def.steps[s.i].text,r.onFoot&&n.vehicle){r.text="Baixa del cotxe";break}Zt(n.x,n.z,r.at.x,r.at.z)<r.r&&this.nextStep();break}case"hold":{Zt(n.x,n.z,r.at.x,r.at.z)<r.r?(r.hold===0&&r.alarm&&(e.wanted.force(r.alarm),e.hud.toast("S'ha activat l'alarma!")),r.hold+=t,r.progress=`${Math.min(100,Math.round(r.hold/r.seconds*100))}%`,r.hold>=r.seconds&&(e.addMoney(0),this.nextStep())):r.hold>0&&(r.hold=Math.max(0,r.hold-t),r.progress="Torna al punt");break}case"checkpoints":{if(r.needVehicle&&!n.vehicle){r.progress="Puja a un vehicle";break}let a=r.points[r.cp];Zt(n.x,n.z,a.x,a.z)<r.r&&(r.cp++,e.audio.beep("ok"),r.cp>=r.points.length&&this.nextStep()),r.progress=`${Math.min(r.cp+1,r.points.length)}/${r.points.length}`;break}case"destroy":if(r.car.dead||r.car.exploded){this.nextStep();break}if(Zt(n.x,n.z,r.car.x,r.car.z)>420)return this.fail("El fugitiu s'ha escapat");r.progress=`Dist\xE0ncia ${Math.round(Zt(n.x,n.z,r.car.x,r.car.z))} m`;break;case"kill":{let a=r.peds.filter(o=>o.state!=="dead").length;r.progress=`Queden ${a}`,a===0&&this.nextStep();break}case"evade":e.wanted.level===0&&this.nextStep();break;default:this.nextStep()}}};var C0={assault:{heat:1.2,min:1},kill:{heat:2,min:1},theft:{heat:1.5,min:1},hitCop:{heat:3,min:2},killCop:{heat:6,min:3},explosion:{heat:2.5,min:2},rampage:{heat:4,min:3}},va=[1,4,8,13,20],I0=14,ya=class{constructor(){this.level=0,this.heat=0,this.unseen=0,this.flash=0}reset(){this.level=0,this.heat=0,this.unseen=0}crime(t,e=!0){if(!e)return this.level;let n=C0[t];if(!n)return this.level;this.heat+=n.heat;let s=Math.max(this.level,n.min);for(let r=0;r<va.length;r++)this.heat>=va[r]&&(s=Math.max(s,r+1));return this.level=Math.min(5,s),this.unseen=0,this.level}force(t){this.level=Math.max(0,Math.min(5,t)),this.heat=this.level?va[this.level-1]:0,this.unseen=0}update(t,e){if(this.level===0){this.heat=Math.max(0,this.heat-t*.1);return}if(e){this.unseen=0,this.flash=0;return}this.unseen+=t,this.flash+=t,this.unseen>=I0&&(this.unseen=0,this.level-=1,this.heat=this.level?va[this.level-1]:0)}get evading(){return this.level>0&&this.unseen>.5}get copCars(){return[0,2,3,5,7,9][this.level]}};var su=3.5,iu=8.2;function ru(i,t,e,n=su){return t==="x"?i*pt+(e>0?n:-n):i*pt+(e>0?-n:n)}function P0(i,t){return i==="x"?t>0?Math.PI/2:-Math.PI/2:t>0?0:Math.PI}function L0(i,t){return t>0?Math.floor(i/pt+1e-6)+1:Math.ceil(i/pt-1e-6)-1}function D0(i,t){let{axis:e,dir:n,line:s}=i,r=[],a=e==="x"?"z":"x";t+n>=0&&t+n<=ge&&r.push({type:"straight",axis:e,dir:n,line:s,dest:e==="x"?[t+n,s]:[s,t+n]});let o=e==="x"?-n:n,c=-o;for(let[l,h]of[["left",o],["right",c]]){let u=s+h;u>=0&&u<=ge&&r.push({type:l,axis:a,dir:h,line:t,dest:a==="z"?[t,u]:[u,t]})}return r}function U0(i,t,e,n,s){let r=D0(i,t);if(!r.length)return null;if(e==="chase"||e==="flee"){let c=e==="chase"?1:-1,l=null,h=1/0;for(let u of r){let d=c*(Math.abs(u.dest[0]-n[0])+Math.abs(u.dest[1]-n[1]))+s()*.5;d<h&&(h=d,l=u)}return l}let a=r.map(c=>c.type==="straight"?.6:.2),o=s()*a.reduce((c,l)=>c+l,0);for(let c=0;c<r.length;c++)if(o-=a[c],o<=0)return r[c];return r[0]}function au(i,t,e){return Math.abs(Math.sin(e))>Math.abs(Math.cos(e))?{axis:"x",dir:Math.sin(e)>0?1:-1,line:Ot(Math.round(t/pt),0,ge),decided:-1,pending:null}:{axis:"z",dir:Math.cos(e)>0?1:-1,line:Ot(Math.round(i/pt),0,ge),decided:-1,pending:null}}var On=i=>{let t=i>>1;return i%2===0?t*pt-iu:t*pt+iu};function N0(i,t){let e=[];return i>1&&e.push([i-1,t]),i<20&&e.push([i+1,t]),t>1&&e.push([i,t-1]),t<20&&e.push([i,t+1]),e}function Xc(i,t,e,n,s,r=12){for(let a=0;a<r;a++){let o=i.chance(.5)?"x":"z",c=i.chance(.5)?1:-1,l=i.int(0,ge),h=i.range(10,ge*pt-10),u=(h%pt+pt)%pt;if(u<14||u>pt-14)continue;let d=ru(l,o,c),f=o==="x"?h:d,m=o==="x"?d:h,x=Zt(f,m,t,e);if(x>=n&&x<=s)return{x:f,z:m,axis:o,dir:c,line:l,heading:P0(o,c)}}return null}function Vs(i,t,e){for(let n=0;n<2;n++)wi(i,t.x,t.z,e+.2,s=>{let r=Si(t.x,t.z,e,s);r&&(t.x+=r.nx*r.pen,t.z+=r.nz*r.pen)})}function z0(i,t,e){let n=Math.sin(t.heading),s=Math.cos(t.heading),r=Math.cos(t.heading),a=-Math.sin(t.heading),o=t.spec.wid/2+1,c=null,l=(u,d,f,m)=>{let x=u*n+d*s,g=u*r+d*a;if(x<=0||x>e||Math.abs(g)>o+f)return;let p=x-t.spec.len/2;(!c||p<c.gap)&&(c={gap:p,speed:m})};for(let u of i.vehicles){if(u===t||u.dead&&u.exploded)continue;let d=u.x-t.x,f=u.z-t.z;d*d+f*f>e*e*1.5||l(d,f,u.spec.wid/2-.4,u.dead?0:u.speed)}for(let u of i.peds){if(u.state==="dead")continue;let d=u.x-t.x,f=u.z-t.z;d*d+f*f>e*e||l(d,f,.2,0)}let h=i.player;return!h.vehicle&&!h.dead&&l(h.x-t.x,h.z-t.z,.2,0),c}function ou(i,t,e){let n=t.ai,s=t.input;if(t.dead){s.throttle=0,s.steer=0,s.handbrake=!1;return}let r=t.nav,a=()=>i.rng.next(),o=n.mode,c=r.axis==="x"?t.x:t.z,l=r.axis==="x"?t.z:t.x,h=L0(c,r.dir),u=Math.abs(h*pt-c),d=Math.abs(t.speed);if(r.decided!==h&&u<26){r.decided=h;let R=o==="cruise"?null:[Ot(Math.round(n.tx/pt),0,ge),Ot(Math.round(n.tz/pt),0,ge)];r.pending=U0(r,h,o,R,a)}r.pending&&r.pending.type!=="straight"&&u<10.5&&(r.axis=r.pending.axis,r.dir=r.pending.dir,r.line=r.pending.line,r.pending=null,r.decided=-1);let f=r.pending&&r.pending.type!=="straight"&&u<30,m=Ot(6+d*.4,7,17),x,g;if(n.direct)x=n.tx+(n.tvx||0)*.4,g=n.tz+(n.tvz||0)*.4;else{let R=ru(r.line,r.axis,r.dir,n.laneOff??su);r.axis==="x"?(x=t.x+r.dir*m,g=R):(x=R,g=t.z+r.dir*m)}let S=Math.atan2(x-t.x,g-t.z);s.steer=Ot(ra(S,t.heading)*2,-1,1),s.handbrake=!1;let y=n.cruise;f&&(y=Math.min(y,9)),Math.abs(s.steer)>.6&&(y=Math.min(y,10));let _=n.ignoreObstacles?null:z0(i,t,8+d*1.1);if(_){let R=Math.max(0,_.speed)+Math.max(0,(_.gap-3.2)*.8);y=Math.min(y,R),_.gap<2.2&&d>1&&(y=0)}s.throttle=Ot((y-t.speed)*.6,-1,1),y<.5&&d<1.2&&(s.throttle=0),n.reverseT>0?(n.reverseT-=e,s.throttle=-.8,s.steer=-s.steer):(d<.6&&y>2?n.stuckT+=e:n.stuckT=Math.max(0,n.stuckT-e),n.stuckT>3.5&&(n.stuckT=0,n.reverseT=1.3,n.stuckCount++))}function cu(i,t,e){let n=t.state==="flee"?4.6:t.walkSpeed,s=On(t.ta),r=On(t.tb),a=s-t.x,o=r-t.z,c=Math.hypot(a,o);if(c<.4){let h=N0(t.ta,t.tb),u=h.filter(f=>!(f[0]===t.pa&&f[1]===t.pb));u.length||(u=h);let d;if(t.state==="flee"&&t.threat)d=u.reduce((f,m)=>{let x=tn(On(m[0]),On(m[1]),t.threat.x,t.threat.z);return!f||x>f.dd?{n:m,dd:x}:f},null).n;else{let f=Math.sign(t.ta-t.pa),m=Math.sign(t.tb-t.pb),x=u.find(g=>Math.sign(g[0]-t.ta)===f&&Math.sign(g[1]-t.tb)===m&&(f||m));d=x&&i.rng.chance(.62)?x:u[Math.floor(i.rng.next()*u.length)]}t.pa=t.ta,t.pb=t.tb,t.ta=d[0],t.tb=d[1];return}t.heading=Math.atan2(a,o);let l=Math.min(n*e,c);t.x+=a/c*l,t.z+=o/c*l,t.speed=n}var qc="palmera-bay-save-v1";function Yc(){return{v:1,money:500,hp:100,armor:0,weapons:{pistol:{owned:!0,ammo:48}},current:"pistol",done:[],hour:17.8,pos:null,settings:{}}}function O0(i){let t=Yc();if(!i||typeof i!="object"||i.v!==1)return t;let e=(r,a,o,c)=>Number.isFinite(r)?Math.min(o,Math.max(a,r)):c,n={v:1,money:Math.round(e(i.money,0,1e9,t.money)),hp:e(i.hp,1,100,100),armor:e(i.armor,0,100,0),weapons:{},current:"pistol",done:Array.isArray(i.done)?i.done.filter(r=>typeof r=="string").slice(0,50):[],hour:e(i.hour,0,24,t.hour),pos:i.pos&&Number.isFinite(i.pos.x)&&Number.isFinite(i.pos.z)?{x:i.pos.x,z:i.pos.z,h:Number.isFinite(i.pos.h)?i.pos.h:0}:null,settings:i.settings&&typeof i.settings=="object"?i.settings:{}},s=["pistol","smg","shotgun"];for(let r of s){let a=i.weapons&&i.weapons[r];a&&a.owned&&(n.weapons[r]={owned:!0,ammo:Math.round(e(a.ammo,0,999,0))})}return n.weapons.pistol||(n.weapons.pistol={owned:!0,ammo:48}),n.current=s.includes(i.current)&&n.weapons[i.current]?i.current:"pistol",n}function Ma(i=globalThis.localStorage){try{let t=i.getItem(qc);return t?O0(JSON.parse(t)):null}catch{return null}}function lu(i,t=globalThis.localStorage){try{return t.setItem(qc,JSON.stringify(i)),!0}catch{return!1}}function hu(i=globalThis.localStorage){try{i.removeItem(qc)}catch{}}var uu=[["sedan",46],["suv",16],["van",10],["taxi",14],["sports",14]],F0=[3900150,15224906,3066993,15844367,10181046,15528177,15105570,1752220,3426654],Zc=[15845536,14726282,13012322,9263675,6044196],$c=1/60,Sa=class{constructor(t,e,n="medium"){this.canvas=t,this.quality=n,this.rng=new Ve(Date.now()&65535),this.renderer=new Fr({canvas:t,antialias:n!=="low",powerPreference:"high-performance"}),this.renderer.toneMapping=bc,this.renderer.toneMappingExposure=1.7,this.renderer.outputColorSpace=we,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Sc,this.scene=new kr,this.camera=new Pe(62,1,.3,2600),this.world=new ca(this.scene,n),this.city=this.world.city,this.effects=new la(this.scene),this.input=new ha(t),this.audio=new da,this.hud=new ma(e,this.city),this.vehicles=[],this.peds=[],this.pickups=[],this.stats={kills:0,missions:0},this.wanted=new ya,this.player=new xa(this),this.missions=new _a(this),this.time=0,this.mode="menu",this.bigMap=!1,this.shopOpen=!1,this.nearShop=!1,this.godMode=!1,this.cam={x:0,y:5,z:0,fx:0,fy:0,fz:1,yaw:0,camHeading:0,dist:4},this.lastCrime={},this.lastCopSpawn=0,this.lastTrafficSpawn=0,this.lastPedSpawn=0,this.deathT=0,this.bustT=0,this.saveT=0,this.pendingSave=!1,this.errors=[],this.buildMarkers(),this.buildPickups(),this.resize(),this.menuOrbit=0,this.setQuality(n),addEventListener("resize",()=>this.resize())}setSeed(t){this.rng=new Ve(t)}setQuality(t){this.quality=t,this.world.setQuality(t),this.renderer.shadowMap.enabled=t!=="low",this.renderer.setPixelRatio(t==="high"?Math.min(devicePixelRatio||1,2):t==="medium"?Math.min(devicePixelRatio||1,1.5):1),this.carTarget=t==="high"?32:t==="medium"?24:14,this.pedTarget=t==="high"?55:t==="medium"?40:22,this.resize()}resize(){let t=innerWidth||1280,e=innerHeight||720;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}addVehicle(t,e,n,s,r,a={}){let o=Bh(t,e,n,s,r||Bs[t].colors[Math.floor(this.rng.next()*Bs[t].colors.length)]);return o.mission=!!a.mission,o.mesh=nu(o),this.scene.add(o.mesh),Wc(o.mesh,o,this.time),a.aiMode&&this.makeAI(o,a.aiMode,a.role||"traffic"),this.vehicles.push(o),o}makeAI(t,e,n="traffic"){t.nav=au(t.x,t.z,t.heading),t.driver=n==="police"?"police":"ai",t.ai={mode:e,role:n,cruise:e==="flee"?26:n==="police"?30:10+this.rng.next()*5,stuckT:0,reverseT:0,stuckCount:0,tx:this.player.x,tz:this.player.z,direct:!1,laneOff:void 0,ignoreObstacles:!1,born:this.time,panicT:0};let s=e==="cruise"?7:12;t.vx=Math.sin(t.heading)*s,t.vz=Math.cos(t.heading)*s,t.speed=s}removeVehicle(t){let e=this.vehicles.indexOf(t);e>=0&&this.vehicles.splice(e,1),t.mesh&&(this.scene.remove(t.mesh),t.mesh=null)}addPed(t){let e=t.kind||"civ",n=e==="cop"?{shirt:2046574,pants:1317934,vest:2046574,hair:1118481,skin:Zc[this.rng.int(0,2)]}:e==="gang"?{shirt:11542056,pants:1842204,hair:1118481,skin:Zc[this.rng.int(0,4)]}:{shirt:this.rng.pick(F0),pants:this.rng.pick([2830138,4871528,1981023,7032634,13222576]),hair:this.rng.pick([1708560,3877402,13214247,7237230]),skin:this.rng.pick(Zc)},s={id:Math.random(),kind:e,x:t.x,z:t.z,y:Ze(t.x,t.z),heading:t.heading||0,speed:0,walkSpeed:1.1+this.rng.next()*.7,hp:e==="civ"?60:e==="cop"?90:80,state:t.state||"walk",pa:t.a??1,pb:t.b??1,ta:t.a??1,tb:t.b??1,fleeT:0,fireCd:.6+this.rng.next(),burst:0,deadT:0,kx:0,kz:0,threat:null,weapon:t.weapon||"pistol",mission:!!t.mission,stuckT:0,born:this.time};return s.mesh=ga(n),s.mesh.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),this.scene.add(s.mesh),this.peds.push(s),s}removePed(t){let e=this.peds.indexOf(t);e>=0&&this.peds.splice(e,1),t.mesh&&(this.scene.remove(t.mesh),t.mesh=null)}spawnGang(t,e,n,s){let r=[];for(let a=0;a<s;a++){let o=a/s*Math.PI*2+this.rng.next(),c=this.rng.range(n*.3,n),l=t+Math.cos(o)*c,h=e+Math.sin(o)*c,u=this.addPed({kind:"gang",x:l,z:h,weapon:"smg",state:"idle",mission:!0});Vs(this.city,u,.5),r.push(u)}return r}addMoney(t){this.player.money=Math.max(0,this.player.money+t)}crime(t,e,n,s=!1){if(this.time-(this.lastCrime[t]||-9)<.9)return;this.lastCrime[t]=this.time;let r=s;if(!r){for(let o of this.peds)if(!(o.state==="dead"||tn(o.x,o.z,e,n)>2025)&&ni(this.city,o.x,o.z,e,n)){r=!0;break}}if(!r){for(let o of this.vehicles)if(!(o.driver!=="police"||o.dead||tn(o.x,o.z,e,n)>4900)&&ni(this.city,o.x,o.z,e,n)){r=!0;break}}if(!r)return;let a=this.wanted.level;this.wanted.crime(t,!0),this.wanted.level>a&&(this.hud.toast("Et busquen!  "+"\u2605".repeat(this.wanted.level)),this.audio.beep("fail"))}alarm(t,e,n){for(let s of this.peds)s.kind!=="civ"||s.state==="dead"||tn(s.x,s.z,t,e)>n*n||(s.state="flee",s.fleeT=6+this.rng.next()*4,s.threat={x:t,z:e})}noise(t,e,n){this.alarm(t,e,n)}carjack(t){let[e,n]=[Math.cos(t.heading),-Math.sin(t.heading)],s=this.addPed({kind:"civ",x:t.x+e*(t.spec.wid/2+1),z:t.z+n*(t.spec.wid/2+1),state:"flee"});s.fleeT=8,s.threat={x:this.player.x,z:this.player.z};let r=Math.round(Ot(s.x/70*2,1,20)),a=Math.round(Ot(s.z/70*2,1,20));s.pa=s.ta=r,s.pb=s.tb=a,t.driver==="police"?this.crime("hitCop",t.x,t.z,!0):this.crime("assault",t.x,t.z),this.crime("theft",t.x,t.z)}onVehicleDestroyed(t,e){t.mission||(e==="player"&&t.ai&&t.ai.role==="police"?this.crime("killCop",t.x,t.z,!0):e==="player"&&this.crime("explosion",t.x,t.z))}onPedKilled(){}onPlayerDeath(){let t=this.player;t.dead||(t.dead=!0,this.deathT=0,this.deathKind="wasted",t.vehicle&&(t.vehicle.driver=null,t.vehicle=null,t.mesh.visible=!0),this.audio.horn(!1),this.hud.banner("ABATUT","fail","La ciutat no perdona"),this.audio.beep("fail"))}bust(){let t=this.player;t.dead||(t.dead=!0,this.deathT=0,this.deathKind="busted",t.vehicle&&(t.vehicle.driver=null,t.vehicle.input={throttle:0,steer:0,handbrake:!0},t.vehicle=null,t.mesh.visible=!0),this.audio.horn(!1),this.hud.banner("ARRESTAT","fail","Perds diners i la cerca"),this.audio.beep("fail"))}finishRespawn(){let t=this.player,e=this.city.pois,n=this.deathKind==="busted"?e.police:e.hospital,s=Math.min(t.money,this.deathKind==="busted"?400:Math.round(t.money*.1)+100);t.money-=s,t.armor=0,t.respawn(n.x,n.z,Math.PI),this.wanted.reset(),this.bustT=0,this.missions.abort();for(let r of[...this.peds])(r.kind==="cop"||r.kind==="gang"&&!r.mission)&&this.removePed(r);this.hud.toast(`${this.deathKind==="busted"?"Fian\xE7a":"Factura de l'hospital"}: -${bi(s)}`)}snapshot(){let t=this.player,e={};for(let[n,s]of Object.entries(t.weapons))s.owned&&(e[n]={owned:!0,ammo:s.ammo+s.clip});return{v:1,money:t.money,hp:t.hp,armor:t.armor,weapons:e,current:t.current,done:[...this.missions.done],hour:this.world.hour,pos:{x:t.x,z:t.z,h:t.heading},settings:{quality:this.quality,music:this.audio.musicVol,master:this.audio.masterVol}}}applySave(t){let e=this.player;e.money=t.money,e.hp=t.hp,e.armor=t.armor,e.weapons={};for(let[n,s]of Object.entries(t.weapons))e.weapons[n]={owned:!0,ammo:0,clip:0},e.giveWeapon(n,s.ammo);e.current=t.current,this.missions.done=new Set(t.done),this.world.setHour(t.hour)}requestSave(){this.pendingSave=!0}flushSave(){return this.pendingSave?(this.pendingSave=!1,lu(this.snapshot())):!1}newGame(){hu(),this.resetWorldEntities();let t=Yc();this.applySave(t);let e=this.city.pois.spawn;this.player.respawn(e.x+6,e.z+8.2,Math.PI/2),this.player.camYaw=Math.PI/2,this.wanted.reset(),this.stats={kills:0,missions:0},this.begin()}continueGame(){let t=Ma();if(!t)return this.newGame();this.resetWorldEntities(),this.applySave(t);let e=t.pos||{x:this.city.pois.spawn.x+6,z:this.city.pois.spawn.z+8.2,h:0};this.player.respawn(e.x,e.z,e.h),this.player.hp=t.hp,this.begin()}resetWorldEntities(){for(let t of[...this.vehicles])this.removeVehicle(t);for(let t of[...this.peds])this.removePed(t);this.missions.abort(),this.shopOpen=!1}begin(){this.mode="play",this.prewarm()}prewarm(){for(let t=0;t<40&&this.vehicles.filter(e=>e.ai&&e.ai.role==="traffic").length<this.carTarget;t++)this.spawnTraffic(!0);for(let t=0;t<80&&this.peds.filter(e=>e.kind==="civ").length<this.pedTarget;t++)this.spawnPed(!0)}visibleFrom(t,e){let n=this.cam,s=t-n.x,r=e-n.z,a=Math.hypot(s,r);return a<25?!0:a>150?!1:(s*n.fx+r*n.fz)/a>.15}spawnTraffic(t=!1){let e=this.player,n=Xc(this.rng,e.x,e.z,t?30:100,t?260:240,10);if(!n||!t&&this.visibleFrom(n.x,n.z))return!1;for(let a of this.vehicles)if(tn(a.x,a.z,n.x,n.z)<100)return!1;if(tn(e.x,e.z,n.x,n.z)<400)return!1;let s=this.rng.next()*uu.reduce((a,o)=>a+o[1],0),r="sedan";for(let[a,o]of uu)if(s-=o,s<=0){r=a;break}return this.addVehicle(r,n.x,n.z,n.heading,null,{aiMode:"cruise"}),!0}spawnPed(t=!1){let e=this.player;for(let n=0;n<8;n++){let s=this.rng.int(1,20),r=this.rng.int(1,20),a=On(s),o=On(r),c=Zt(a,o,e.x,e.z);if(c<(t?15:45)||c>(t?130:120)||!t&&this.visibleFrom(a,o)&&c<90)continue;let l=[[s+1,r],[s-1,r],[s,r+1],[s,r-1]].filter(d=>d[0]>=1&&d[0]<=20&&d[1]>=1&&d[1]<=20),h=l[this.rng.int(0,l.length-1)],u=this.addPed({kind:"civ",x:a,z:o,a:h[0],b:h[1]});return u.pa=s,u.pb=r,!0}return!1}manageTraffic(t){let e=this.player,n=0;for(let s of[...this.vehicles]){if(s.exploded&&this.time>s.removeAt){this.removeVehicle(s);continue}if(s.mission||s.mesh===null)continue;let r=Zt(s.x,s.z,e.x,e.z);s.ai&&s.ai.role==="traffic"?(n++,(r>290||s.ai.stuckCount>4&&!this.visibleFrom(s.x,s.z))&&(this.removeVehicle(s),n--)):!s.ai&&s.driver===null&&s.owner==="player"&&r>450?this.removeVehicle(s):s.ai&&s.ai.role==="police"&&r>340&&this.removeVehicle(s)}n<this.carTarget&&this.time-this.lastTrafficSpawn>.35&&(this.lastTrafficSpawn=this.time,this.spawnTraffic(!1))}managePeds(t){let e=this.player,n=0;for(let s of[...this.peds]){if(s.mission)continue;let r=Zt(s.x,s.z,e.x,e.z);if(s.state==="dead"){s.deadT>22&&this.removePed(s);continue}s.kind==="civ"?(n++,r>160&&(this.removePed(s),n--)):s.kind==="cop"&&this.wanted.level===0&&(r>70||s.born+40<this.time)&&this.removePed(s)}n<this.pedTarget&&this.time-this.lastPedSpawn>.2&&(this.lastPedSpawn=this.time,this.spawnPed(!1))}managePolice(t){let e=this.player,n=this.wanted,s=e.vehicle?e.vehicle.x:e.x,r=e.vehicle?e.vehicle.z:e.z,a=e.vehicle?e.vehicle.vx:e.vx,o=e.vehicle?e.vehicle.vz:e.vz,c=this.vehicles.filter(l=>l.ai&&l.ai.role==="police"&&!l.dead);if(n.level>0&&c.length<n.copCars&&this.time-this.lastCopSpawn>1.6&&!e.dead){let l=Xc(this.rng,s,r,100,200,14);if(l&&!this.visibleFrom(l.x,l.z)&&!this.vehicles.some(h=>tn(h.x,h.z,l.x,l.z)<100)){this.lastCopSpawn=this.time;let h=this.addVehicle("police",l.x,l.z,l.heading,null,{aiMode:"chase",role:"police"});h.sirenOn=!0}}for(let l of c){let h=l.ai;if(l.sirenOn=n.level>0,n.level===0){h.mode="cruise",h.cruise=13,h.direct=!1,h.laneOff=void 0;continue}h.mode="chase",h.tx=s,h.tz=r,h.tvx=a,h.tvz=o;let u=Zt(l.x,l.z,s,r),d=u<60&&ni(this.city,l.x,l.z,s,r,1.2,1.2);if(h.direct=d&&u<55,h.ignoreObstacles=h.direct&&u<18,h.laneOff=u<90?.6:void 0,h.cruise=u>80?31:u>30?26:20,!e.vehicle&&n.level>=2&&!h.copsOut&&u<22&&Math.abs(l.speed)<5&&this.peds.filter(f=>f.kind==="cop"&&f.state!=="dead").length<6){h.copsOut=!0,h.parked=!0;for(let f=0;f<2;f++){let m=this.addPed({kind:"cop",x:l.x+(f?2.2:-2.2)*Math.cos(l.heading),z:l.z-(f?2.2:-2.2)*Math.sin(l.heading),state:"attack"});Vs(this.city,m,.5)}}h.parked&&(l.input.throttle=0,l.input.handbrake=!0)}if(n.level>0){let l=this.copsSee(s,r);n.update(t,l)}else n.update(t,!1)}copsSee(t,e){for(let n of this.vehicles)if(!(n.driver!=="police"||n.dead)&&tn(n.x,n.z,t,e)<5625&&ni(this.city,n.x,n.z,t,e,1.4,1.4))return!0;for(let n of this.peds)if(!(n.kind!=="cop"||n.state==="dead")&&tn(n.x,n.z,t,e)<5625&&ni(this.city,n.x,n.z,t,e))return!0;return!1}updateVehicles(t){let e=this.player;for(let s of this.vehicles){s.ai&&!s.exploded?(s.ai.mode==="flee"&&(s.ai.tx=e.x,s.ai.tz=e.z),s.ai.panicT>0&&(s.ai.panicT-=t),ou(this,s,t),s.ai.parked&&(s.input.throttle=0,s.input.handbrake=!0)):!s.driver&&!s.dead&&(s.input.throttle=0,s.input.steer=0,s.input.handbrake=!0),Hh(s,t);let r=Vh(s,this.city,t);r>4&&this.onCrash(s,r,1),s.dead&&this.updateWreck(s,t)}let n=this.vehicles;for(let s=0;s<n.length;s++)for(let r=s+1;r<n.length;r++){let a=n[s],o=n[r];if(Math.abs(a.x-o.x)>7||Math.abs(a.z-o.z)>7)continue;let c=Gh(a,o);if(c>4){let h=a.driver==="player"||o.driver==="player"?1:.3;this.onCrash(a,c,h*o.spec.mass/a.spec.mass,o),this.onCrash(o,c,h*a.spec.mass/o.spec.mass,a,!0)}}}onCrash(t,e,n,s,r){if(e>6&&!t.dead&&Wh(t,e,n)&&(t.lastHitBy=s&&s.driver==="player"?"player":"crash",this.onVehicleDestroyed(t,t.lastHitBy)),r)return;let a=Zt(t.x,t.z,this.player.x,this.player.z);e>6&&this.audio.crash(e/18,a),e>9&&this.effects.spark(t.x,t.y+.8,t.z,"#ffd27a"),t.driver==="player"&&(this.effects.shake=Math.max(this.effects.shake,Math.min(.5,e/35)),e>12&&us(this,(e-12)*1.6)),s&&s.driver==="police"&&t.driver==="player"?this.crime("hitCop",t.x,t.z,!0):t.driver==="player"&&s&&s.ai&&s.ai.role==="traffic"&&e>8&&this.crime("assault",t.x,t.z)}updateWreck(t,e){t.exploded||(t.fuse-=e,t._smokeT=(t._smokeT||0)-e,t._smokeT<=0&&(t._smokeT=.09,this.effects.smoke(t.x,t.y+1.2,t.z,!0)),t.fuse<=0&&(t.exploded=!0,t.removeAt=this.time+25,Jh(this,t.x,t.z,9,180,t.lastHitBy||"crash"),t.driver=t.driver==="player"?"player":null))}smokeDamaged(t){for(let e of this.vehicles)e.dead||e.health>e.spec.hp*.3||(e._smokeT=(e._smokeT||0)-t,e._smokeT<=0&&(e._smokeT=.18,this.effects.smoke(e.x+Math.sin(e.heading)*e.spec.len*.35,e.y+1.1,e.z+Math.cos(e.heading)*e.spec.len*.35,!1)))}updatePeds(t){let e=this.player,n=e.vehicle?e.vehicle.x:e.x,s=e.vehicle?e.vehicle.z:e.z,r=0;for(let a of this.peds){if(a.y=Ze(a.x,a.z),a.state==="dead"){a.deadT+=t,(a.kx||a.kz)&&(a.x+=a.kx*t,a.z+=a.kz*t,a.kx*=Math.exp(-6*t),a.kz*=Math.exp(-6*t),Vs(this.city,a,.4));continue}a.kind==="civ"?(a.state==="flee"&&(a.fleeT-=t,a.fleeT<=0&&(a.state="walk",a.threat=null)),cu(this,a,t)):(this.updateArmedPed(a,t,n,s),a.kind==="cop"&&Math.hypot(a.x-n,a.z-s)<2.4&&r++)}for(let a of this.vehicles){if(a.dead||Math.abs(a.speed)<2.4)continue;let o=Ti(a);for(let c of this.peds){if(c.state==="dead"||Math.abs(c.x-a.x)>4||Math.abs(c.z-a.z)>4)continue;let l=!1;for(let d of o)if((c.x-d.x)**2+(c.z-d.z)**2<(d.r+.35)**2){l=!0;break}if(!l)continue;let h=a.driver==="player",u=c.hp;c.hp-=Math.abs(a.speed)*9,this.effects.spark(c.x,c.y+1,c.z,"#b02020"),c.kx=a.vx*.5,c.kz=a.vz*.5,c.hp<=0?(c.state="dead",c.deadT=0,h&&(this.stats.kills++,c.kind==="civ"?this.crime("kill",c.x,c.z):c.kind==="cop"&&this.crime("killCop",c.x,c.z,!0))):h&&u>0&&c.kind==="civ"&&this.crime("assault",c.x,c.z),c.state!=="dead"&&c.kind==="civ"&&(c.state="flee",c.fleeT=8,c.threat={x:a.x,z:a.z})}}if(this.wanted.level>0&&!e.dead){let a=e.vehicle?this.vehicles.filter(c=>c.driver==="police"&&!c.dead&&Zt(c.x,c.z,e.vehicle.x,e.vehicle.z)<7).length:0,o=e.vehicle?Math.abs(e.vehicle.speed)<2.5&&a>=2:e.speed<3.2&&r>=1;this.bustT=o?this.bustT+t:Math.max(0,this.bustT-t*2),this.bustT>2.2&&this.bust()}else this.bustT=0}updateArmedPed(t,e,n,s){let r=Zt(t.x,t.z,n,s),a=r<60&&ni(this.city,t.x,t.z,n,s,1.5,1.3);if(t.state==="idle")if(r<38&&a)t.state="attack";else{t.speed=0;return}if(this.player.dead){t.speed=0;return}t.fireCd-=e;let o=t.kind==="cop"?11:14,c=0,l=0;r>o||!a?(c=(n-t.x)/(r||1),l=(s-t.z)/(r||1)):r<o*.55&&(c=-(n-t.x)/(r||1),l=-(s-t.z)/(r||1));let h=c||l?r>25?5.2:3.4:0,u=t.x,d=t.z;t.x+=c*h*e,t.z+=l*h*e,Vs(this.city,t,.42),t.speed=Math.hypot(t.x-u,t.z-d)/e,h>0&&t.speed<h*.25?t.stuckT+=e:t.stuckT=Math.max(0,t.stuckT-e),t.stuckT>5&&t.kind==="cop"&&!this.visibleFrom(t.x,t.z)&&this.removePed(t),t.heading=Math.atan2(n-t.x,s-t.z),a&&t.fireCd<=0&&r<55&&(Kh(this,t,t.weapon),t.weapon==="smg"?(t.burst++,t.fireCd=t.burst%4===0?.9+this.rng.next()*.6:.11):t.fireCd=.55+this.rng.next()*.5)}buildPickups(){let t=new Ve(2025),e=["health","armor","cash","ammo","cash","ammo"],n={health:16735603,armor:5032432,cash:4641642,ammo:16765503},s=new qr(.42);for(let r=0;r<30;r++){let a=t.int(2,19),o=t.int(2,19),c=On(a),l=On(o),h=e[r%e.length],u=new kt(s,new ie({color:n[h],emissive:n[h],emissiveIntensity:.7}));u.position.set(c,1.1,l),this.scene.add(u),this.pickups.push({type:h,x:c,z:l,mesh:u,taken:!1,respawn:0})}}updatePickups(t){let e=this.player,n=e.vehicle?e.vehicle.x:e.x,s=e.vehicle?e.vehicle.z:e.z;for(let r of this.pickups){if(r.mesh.rotation.y+=t*2,r.mesh.position.y=1.1+Math.sin(this.time*2+r.x)*.12,r.taken){r.respawn-=t,r.respawn<=0&&(r.taken=!1,r.mesh.visible=!0);continue}if(!(e.dead||Math.abs(r.x-n)>2.6||Math.abs(r.z-s)>2.6)&&!(Zt(r.x,r.z,n,s)>(e.vehicle?3:1.7))&&!(r.type==="health"&&e.hp>=100)&&!(r.type==="armor"&&e.armor>=100)){if(r.taken=!0,r.respawn=90,r.mesh.visible=!1,r.type==="health")e.hp=Math.min(100,e.hp+50),this.hud.toast("+50 salut");else if(r.type==="armor")e.armor=Math.min(100,e.armor+50),this.hud.toast("+50 armadura");else if(r.type==="cash"){let a=100+this.rng.int(0,4)*50;this.addMoney(a),this.hud.toast("+"+bi(a)),this.audio.beep("cash")}else{for(let a of Object.keys(e.weapons))e.addAmmo(a,Fe[a].mag);this.hud.toast("Munici\xF3")}this.audio.beep("click")}}}updateShop(){let t=this.player,e=this.city.pois.gunshop;if(this.nearShop=!t.vehicle&&!t.dead&&Zt(t.x,t.z,e.x,e.z)<6,this.nearShop&&this.input.wasPressed("KeyE")&&!this.shopOpen)this.toggleShop(!0);else if(this.shopOpen)if(!this.nearShop||this.input.wasPressed("KeyE","Escape"))this.toggleShop(!1);else for(let n=1;n<=5;n++)this.input.wasPressed("Digit"+n)&&this.buy(n)}toggleShop(t){this.shopOpen=t,this.hud.q("#shop").classList.toggle("hidden",!t),t&&this.renderShop()}shopItems(){let t=this.player,e=Fe[t.current];return[{k:1,label:`Munici\xF3 \xB7 ${e.name}`,price:e.ammoPrice,ok:!0},{k:2,label:t.weapons.smg?"Metralleta (la tens)":"Metralleta",price:1500,ok:!t.weapons.smg},{k:3,label:t.weapons.shotgun?"Escopeta (la tens)":"Escopeta",price:2500,ok:!t.weapons.shotgun},{k:4,label:"Armadura completa",price:400,ok:t.armor<100},{k:5,label:"Farmaciola",price:200,ok:t.hp<100}]}renderShop(){let t=this.shopItems();this.hud.q("#shop").innerHTML=`<h2>ARMERIA</h2><p class="cash">${bi(this.player.money)}</p>`+t.map(e=>`<div class="item ${e.ok&&this.player.money>=e.price?"":"off"}"><b>${e.k}</b> ${e.label}<span>${bi(e.price)}</span></div>`).join("")+'<p class="hint">Prem el n\xFAmero per comprar \xB7 E per sortir</p>'}buy(t){let e=this.player,n=this.shopItems().find(s=>s.k===t);if(!(!n||!n.ok)){if(e.money<n.price){this.hud.toast("No tens prou diners"),this.audio.beep("fail");return}e.money-=n.price,t===1?e.addAmmo(e.current,Fe[e.current].mag*2):t===2?(e.giveWeapon("smg",90),e.selectWeapon("smg")):t===3?(e.giveWeapon("shotgun",24),e.selectWeapon("shotgun")):t===4?e.armor=100:t===5&&(e.hp=100),this.audio.beep("cash"),this.requestSave(),this.renderShop()}}buildMarkers(){this.markerPool=[];let t=new Ye(1,1,1,20,1,!0),e=new Yr(.88,1,40);e.rotateX(-Math.PI/2);let n=new _i(.7,1.6,4);n.rotateX(Math.PI);for(let s=0;s<14;s++){let r=new Oe,a=()=>new Qe({color:16765503,transparent:!0,opacity:.35,depthWrite:!1,side:ze,blending:jn,toneMapped:!1}),o=new kt(t,a()),c=new kt(e,a()),l=new kt(n,a());c.material.opacity=.8,l.material.opacity=.9,r.add(o,c,l),r.visible=!1,r.userData={b:o,r:c,a:l},this.scene.add(r),this.markerPool.push(r)}}updateMarkers(){let t=this.missions.markers(),e=this.player,n=0;for(let s of t){if(n>=this.markerPool.length)break;if(Zt(s.x,s.z,e.x,e.z)>(s.kind==="giver"?260:900))continue;let r=this.markerPool[n++],a=r.userData;r.visible=!0;let o=Ze(s.x,s.z);r.position.set(s.x,o+.05,s.z);let c=s.r||2.2,l=new At(s.color);a.b.material.color.copy(l),a.r.material.color.copy(l),a.a.material.color.copy(l);let h=1+Math.sin(this.time*3)*.04;a.r.visible=s.kind!=="target"&&s.kind!=="enemy",a.b.visible=a.r.visible,a.a.visible=s.kind==="target"||s.kind==="enemy"||s.kind==="giver",a.r.scale.setScalar(c*h),a.b.scale.set(c*.96,s.small?9:38,c*.96),a.b.position.y=(s.small?9:38)/2,a.a.position.y=(s.kind==="giver"?4.2:3.4)+Math.sin(this.time*3)*.25,a.a.rotation.y=this.time*2}for(;n<this.markerPool.length;n++)this.markerPool[n].visible=!1}updateCamera(t){let e=this.player,n=this.cam,s=this.camera,r,a,o,c,l,h,u=62;if(this.mode==="menu"){this.menuOrbit+=t*.06;let m=this.menuOrbit;r=350+Math.cos(m)*330,o=350+Math.sin(m)*330,a=120,s.position.set(r,a,o),s.lookAt(350,15,350),n.x=r,n.y=a,n.z=o,n.fx=350-r,n.fz=350-o;let x=Math.hypot(n.fx,n.fz);n.fx/=x,n.fz/=x,n.fy=0,n.yaw=Math.atan2(n.fx,n.fz);return}if(e.vehicle){let m=e.vehicle,x=Math.abs(m.speed)>6?Math.atan2(m.vx,m.vz):m.heading,g=m.speed<-2?m.heading+Math.PI:x,p=os(g-n.camHeading);n.camHeading=os(n.camHeading+p*Math.min(1,t*(3+Math.abs(m.speed)*.08))),c=n.camHeading+e.camYawOffset,h=7.2+Math.min(4,Math.abs(m.speed)*.1)+m.spec.len*.2;let S=Math.sin(c),y=Math.cos(c);r=m.x,a=m.y+1.6,o=m.z,l=-.2+Ot(e.camPitch+.18,-.4,.5)*.4,u=62+Ot(Math.abs(m.speed)*.35,0,20),h=this.camClip(r,a,o,-Math.sin(c)*Math.cos(l),-Math.sin(l),-Math.cos(c)*Math.cos(l),h),s.position.set(r-S*Math.cos(l)*h,a-Math.sin(l)*h,o-y*Math.cos(l)*h),n.yaw=c}else{c=e.camYaw,l=e.camPitch+e.kick;let m=e.aiming,x=m?2.1:3.9;n.dist=ln(n.dist,x,10,t),r=e.x,a=e.y+1.55,o=e.z;let g=Math.sin(c)*Math.cos(l),p=Math.sin(l),S=Math.cos(c)*Math.cos(l),y=-Math.cos(c),_=Math.sin(c),R=m?.75:.55,T=r+y*R,A=o+_*R,I=this.camClip(T,a,A,-g,-p,-S,n.dist);s.position.set(T-g*I,a-p*I+.15,A-S*I),u=m?48:62,n.yaw=c}if(s.fov=ln(s.fov,u,6,t),s.updateProjectionMatrix(),e.vehicle){let m=e.vehicle,x=Math.sin(c),g=Math.cos(c);s.lookAt(m.x+x*8,m.y+1.1+l*-2,m.z+g*8)}else{let m=Math.sin(c)*Math.cos(l),x=Math.sin(l),g=Math.cos(c)*Math.cos(l);s.lookAt(s.position.x+m,s.position.y+x,s.position.z+g)}let d=this.effects.shake;d>.01&&s.position.add(new L((Math.random()-.5)*d,(Math.random()-.5)*d,(Math.random()-.5)*d)),s.position.y<Ze(s.position.x,s.position.z)+.3&&(s.position.y=Ze(s.position.x,s.position.z)+.3);let f=new L;s.getWorldDirection(f),n.x=s.position.x,n.y=s.position.y,n.z=s.position.z,n.fx=f.x,n.fy=f.y,n.fz=f.z}camClip(t,e,n,s,r,a,o){let c=Fs(this.city,t,e,n,s,r,a,o+.4);return c<o+.4?Math.max(.6,c-.4):o}step(t){if(this.mode!=="play")return;this.time+=t;let e=this.player;if(this.updateShop(),e.update(t),this.updateVehicles(t),this.updatePeds(t),this.managePolice(t),this.manageTraffic(t),this.managePeds(t),this.updatePickups(t),this.smokeDamaged(t),this.missions.update(t),e.dead&&(this.deathT+=t,this.deathT>3.4&&this.finishRespawn()),this.saveT+=t,this.saveT>45&&(this.saveT=0,this.requestSave()),this.input.wasPressed("KeyN")&&e.vehicle){let n=this.audio.nextStation();this.hud.showRadio(n)}this.input.wasPressed("KeyM")&&(this.bigMap=!this.bigMap,this.hud.q("#bigmap").classList.toggle("hidden",!this.bigMap)),this.checkInvariants()}checkInvariants(){let t=this.player;if(!aa(t.x,t.z,t.y)){let e=this.city.pois.spawn;t.respawn(e.x,e.z),this.errors.push("jugador amb NaN")}for(let e of[...this.vehicles])aa(e.x,e.z,e.heading,e.vx,e.vz)||(this.errors.push("vehicle amb NaN"),t.vehicle===e&&t.exit(),this.removeVehicle(e));for(let e of[...this.peds])aa(e.x,e.z)||(this.errors.push("ped amb NaN"),this.removePed(e))}frameUpdate(t){let e=this.player;for(let n of this.vehicles)n.mesh&&Wc(n.mesh,n,this.time);for(let n of this.peds)n.mesh&&(n.mesh.position.set(n.x,n.y,n.z),n.mesh.rotation.y=n.heading,Hs(n.mesh,n.state==="dead"?0:n.speed,t,n.kind!=="civ"&&n.state==="attack",n.state==="dead"?1:0));if(e.dead&&Hs(e.mesh,0,t,!1,1),Gc.value=this.world.night,this.world.update(this.mode==="play"?t:t*.6,e.x,e.z,this.camera),this.effects.update(t),this.updateMarkers(),this.updateCamera(t),this.mode==="play"){let n=e.vehicle;this.audio.engine(!!n&&!n.dead,n?Math.min(1,Math.abs(n.speed)/n.spec.maxSpeed):0,n?Math.max(0,n.input.throttle):0);let s=999;for(let r of this.vehicles)r.driver==="police"&&!r.dead&&this.wanted.level>0&&(s=Math.min(s,Zt(r.x,r.z,e.x,e.z)));this.audio.siren(s),this.audio.update()}this.hud.update(this,t),this.hud.root.style.opacity=this.mode==="menu"?"0":"1",this.input.endFrame()}loop(t){let e=t/1e3;this._last||(this._last=e);let n=Math.min(.1,e-this._last);this._last=e,this.advance(n),this.render(),this._raf=requestAnimationFrame(s=>this.loop(s))}advance(t){this._acc=(this._acc||0)+t;let e=0;try{for(;this._acc>=$c&&e<6;)this.step($c),this._acc-=$c,e++;e===6&&(this._acc=0),this.frameUpdate(t)}catch(n){this.errors.push(String(n&&n.stack||n)),this.errors.length<4&&console.error(n)}}render(){this.renderer.render(this.scene,this.camera)}start(){this._raf=requestAnimationFrame(t=>this.loop(t))}};var he=i=>document.getElementById(i),fu="palmera-bay-settings-v1";function B0(){try{return{quality:"medium",master:.7,music:.5,sens:1,...JSON.parse(localStorage.getItem(fu))||{}}}catch{return{quality:"medium",master:.7,music:.5,sens:1}}}function ba(i){try{localStorage.setItem(fu,JSON.stringify(i))}catch{}}function du(i){let t=he("err");t||(t=document.createElement("div"),t.id="err",document.body.appendChild(t)),t.textContent=i}function k0(){let i=B0(),t;try{t=new Sa(he("view"),he("hud"),i.quality)}catch(c){throw du(`No s'ha pogut iniciar el joc (cal un navegador amb WebGL).
`+(c&&c.message?c.message:c)),c}window.__game=t,t.input.sens=i.sens,t.audio.masterVol=i.master,t.audio.musicVol=i.music;let e=["p-main","p-opt","p-keys","p-pause"],n="p-main",s=c=>{for(let l of e)he(l).classList.toggle("hidden",l!==c)},r=he("menu");Ma()&&he("b-cont").classList.remove("off");let o=()=>{r.classList.add("hidden"),t.mode="play",t.audio.init(),t.input.lock()};he("b-new").onclick=()=>{t.newGame(),o()},he("b-cont").onclick=()=>{t.continueGame(),o()},he("b-opt").onclick=()=>{n="p-main",s("p-opt")},he("b-opt2").onclick=()=>{n="p-pause",s("p-opt")},he("b-keys").onclick=()=>{n="p-main",s("p-keys")},document.querySelectorAll("[data-back]").forEach(c=>{c.onclick=()=>s(n)}),he("b-resume").onclick=()=>{r.classList.add("hidden"),t.mode="play",t.audio.init(),t.input.lock()},he("b-save").onclick=()=>{t.requestSave(),he("b-save").textContent=t.flushSave()?"Partida desada \u2713":"No s'ha pogut desar"},he("b-quit").onclick=()=>{t.requestSave(),t.flushSave(),t.mode="menu",t.resetWorldEntities(),s("p-main"),he("b-cont").classList.remove("off")},he("o-q").value=i.quality,he("o-vol").value=i.master,he("o-mus").value=i.music,he("o-sens").value=i.sens,he("o-q").onchange=c=>{i.quality=c.target.value,t.setQuality(i.quality),ba(i)},he("o-vol").oninput=c=>{i.master=+c.target.value,t.audio.setMaster(i.master),ba(i)},he("o-mus").oninput=c=>{i.music=+c.target.value,t.audio.setMusic(i.music),ba(i)},he("o-sens").oninput=c=>{i.sens=+c.target.value,t.input.sens=i.sens,ba(i)},t.input.onLockChange=c=>{!c&&t.mode==="play"&&!t.player.dead&&(t.mode="paused",t.requestSave(),t.flushSave(),he("b-save").textContent="Desa la partida",s("p-pause"),r.classList.remove("hidden"))},addEventListener("keydown",c=>{c.code==="KeyP"&&!c.repeat&&t.mode==="play"&&(t.input.unlock(),t.input.locked||t.input.onLockChange(!1))}),addEventListener("beforeunload",()=>{t.mode==="play"&&(t.requestSave(),t.flushSave())}),document.addEventListener("visibilitychange",()=>{document.hidden&&t.mode==="play"&&t.input.unlock()}),window.addEventListener("error",c=>du(String(c.message))),s("p-main"),t.start()}k0();})();
