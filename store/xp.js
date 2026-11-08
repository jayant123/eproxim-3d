// eProxim "stores people want to buy from" scroll experience.
// Real CC0 product models (Poly Haven), studio HDRI, a noise "burn" dissolve with embers between products,
// a live finish change on the product page, and the systems behind the store.
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/+esm';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/loaders/GLTFLoader.js/+esm';
import { RGBELoader } from 'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/loaders/RGBELoader.js/+esm';
import { MeshoptDecoder } from 'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/libs/meshopt_decoder.module.js/+esm';
import { MeshSurfaceSampler } from 'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/math/MeshSurfaceSampler.js/+esm';
import { RoundedBoxGeometry } from 'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/geometries/RoundedBoxGeometry.js/+esm';

const BASE = new URL('../', import.meta.url).href;

function main() {
  const root = document.getElementById('epx-x');
  if (!root || root.dataset.xInit) return;
  root.dataset.xInit = '1';
  const stage = root.querySelector('.x-stage');
  const story = root.querySelector('.x-story');
  const hud = root.querySelector('.x-hud');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = () => innerWidth < 820;
  requestAnimationFrame(() => root.classList.add('x-on'));

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  } catch (e) { root.classList.add('x-nogl'); return; }
  renderer.setPixelRatio(Math.min(devicePixelRatio, isMobile() ? 1.6 : 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setClearColor(0x000000, 0);
  stage.insertBefore(renderer.domElement, hud);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);

  // ---------- lights ----------
  const key = new THREE.SpotLight(0xffe2c8, 3.4, 0, 0.95, 1, 0);
  key.position.set(-3.4, 6.2, 3.6);
  key.castShadow = true;
  key.shadow.mapSize.set(isMobile() ? 1024 : 2048, isMobile() ? 1024 : 2048);
  key.shadow.bias = -0.0003;
  key.shadow.normalBias = 0.02;
  key.target.position.set(0, 0.7, 0);
  scene.add(key, key.target);
  const rim = new THREE.DirectionalLight(0xa9c2ff, 1.6);
  rim.position.set(3.5, 3.2, -4.5);
  scene.add(rim);
  const warmRim = new THREE.DirectionalLight(0xff9a62, 0.7);
  warmRim.position.set(-4, 1.2, -3);
  scene.add(warmRim);
  scene.add(new THREE.HemisphereLight(0xfff3e8, 0x15110d, 0.25));

  const catcherMat = new THREE.ShadowMaterial({ opacity: 0.5 });
  const catcher = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), catcherMat);
  catcher.rotation.x = -Math.PI / 2;
  catcher.receiveShadow = true;
  scene.add(catcher);

  // glows use normal alpha blending: additive light is not valid on a transparent canvas
  const glow = (m) => { m.blending = THREE.NormalBlending; m.transparent = true; return m; };
  // soft glow textures
  function radialTex(stops) {
    const c = document.createElement('canvas'); c.width = c.height = 256;
    const g = c.getContext('2d'); const gr = g.createRadialGradient(128, 128, 0, 128, 128, 128);
    stops.forEach(([o, col]) => gr.addColorStop(o, col)); g.fillStyle = gr; g.fillRect(0, 0, 256, 256);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  }
  const poolTex = radialTex([[0, 'rgba(255,190,130,1)'], [0.35, 'rgba(255,140,70,.45)'], [1, 'rgba(255,120,50,0)']]);
  const pool = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 1.8), new THREE.MeshBasicMaterial({ map: poolTex, transparent: true, depthWrite: false, opacity: 0 }));
  glow(pool.material);
  pool.rotation.x = -Math.PI / 2; pool.position.y = 0.003; pool.renderOrder = 2;
  scene.add(pool);
  const floorGlow = new THREE.Mesh(new THREE.PlaneGeometry(7, 7), new THREE.MeshBasicMaterial({ map: radialTex([[0, 'rgba(255,214,180,.10)'], [1, 'rgba(255,214,180,0)']]), transparent: true, depthWrite: false }));
  glow(floorGlow.material);
  floorGlow.rotation.x = -Math.PI / 2; floorGlow.position.y = 0.002;
  scene.add(floorGlow);
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.985, 1, 128), new THREE.MeshBasicMaterial({ color: 0xa6e3d0, transparent: true, depthWrite: false, opacity: 0 }));
  glow(ring.material);
  ring.rotation.x = -Math.PI / 2; ring.position.y = 0.004;
  scene.add(ring);

  // ---------- shader pieces ----------
  const NOISE = `
  vec3 xm289(vec3 x){return x-floor(x*(1./289.))*289.;}
  vec4 xm289(vec4 x){return x-floor(x*(1./289.))*289.;}
  vec4 xperm(vec4 x){return xm289(((x*34.)+1.)*x);}
  vec4 xtis(vec4 r){return 1.79284291400159-0.85373472095314*r;}
  float xsnoise(vec3 v){
    const vec2 C=vec2(1./6.,1./3.);const vec4 D=vec4(0.,.5,1.,2.);
    vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);
    vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);
    vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;
    i=xm289(i);
    vec4 p=xperm(xperm(xperm(i.z+vec4(0.,i1.z,i2.z,1.))+i.y+vec4(0.,i1.y,i2.y,1.))+i.x+vec4(0.,i1.x,i2.x,1.));
    float n_=.142857142857;vec3 ns=n_*D.wyz-D.xzx;
    vec4 j=p-49.*floor(p*ns.z*ns.z);
    vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.*x_);
    vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.-abs(x)-abs(y);
    vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);
    vec4 s0=floor(b0)*2.+1.;vec4 s1=floor(b1)*2.+1.;vec4 sh=-step(h,vec4(0.));
    vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
    vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);
    vec4 nm=xtis(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
    p0*=nm.x;p1*=nm.y;p2*=nm.z;p3*=nm.w;
    vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);m=m*m;
    return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
  }
  uniform float uDis,uMinY,uMaxY,uFreq,uSeed;
  float xDis(vec3 p){
    float n=xsnoise(p*uFreq+vec3(uSeed))*.5+.5;
    n=n*.75+(xsnoise(p*uFreq*3.1+vec3(uSeed*1.7))*.5+.5)*.25;
    float h=clamp((p.y-uMinY)/(uMaxY-uMinY),0.,1.);
    return mix(n,1.-h,.42);
  }`;
  const RECOLOR = `
  uniform vec4 uTintA,uTintB;uniform float uWipe,uRecolor;
  vec3 xrgb2hsv(vec3 c){vec4 K=vec4(0.,-1./3.,2./3.,-1.);vec4 p=mix(vec4(c.bg,K.wz),vec4(c.gb,K.xy),step(c.b,c.g));vec4 q=mix(vec4(p.xyw,c.r),vec4(c.r,p.yzx),step(p.x,c.r));float d=q.x-min(q.w,q.y);float e=1e-10;return vec3(abs(q.z+(q.w-q.y)/(6.*d+e)),d/(q.x+e),q.x);}
  vec3 xhsv2rgb(vec3 c){vec4 K=vec4(1.,2./3.,1./3.,3.);vec3 p=abs(fract(c.xxx+K.xyz)*6.-K.www);return c.z*mix(K.xxx,clamp(p-K.xxx,0.,1.),c.y);}
  vec3 xRecolor(vec3 c,vec3 rp){
    vec3 hsv=xrgb2hsv(c);
    float hd=min(abs(hsv.x-.035),1.-abs(hsv.x-.035));
    float m=smoothstep(.28,.5,hsv.y)*(1.-smoothstep(.05,.11,hd));
    float hn=clamp((rp.y-uMinY)/(uMaxY-uMinY),0.,1.);
    vec4 t=hn<uWipe?uTintB:uTintA;
    if(t.w<.01) return c;
    vec3 o=xhsv2rgb(vec3(t.x,clamp(hsv.y*t.y,0.,1.),hsv.z*t.z));
    return mix(c,o,m*t.w);
  }`;

  function patch(mat, U) {
    mat.onBeforeCompile = (sh) => {
      Object.assign(sh.uniforms, U);
      sh.vertexShader = 'uniform mat4 uRootInv;\nvarying vec3 vRP;\n' + sh.vertexShader.replace('#include <project_vertex>',
        '#include <project_vertex>\nvRP=(uRootInv*modelMatrix*vec4(transformed,1.0)).xyz;');
      sh.fragmentShader = 'varying vec3 vRP;\nuniform vec3 uEdge;\n' + NOISE + RECOLOR + '\n' + sh.fragmentShader
        .replace('#include <clipping_planes_fragment>', '#include <clipping_planes_fragment>\nfloat xT=uDis*1.12-.06;float xD=xDis(vRP);if(xD<xT) discard;')
        .replace('#include <map_fragment>', '#include <map_fragment>\nif(uRecolor>.5) diffuseColor.rgb=xRecolor(diffuseColor.rgb,vRP);')
        .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
          totalEmissiveRadiance+=uEdge*(1.-smoothstep(0.,.05,xD-xT))*8.*step(.0001,uDis);
          if(uRecolor>.5){float xh=clamp((vRP.y-uMinY)/(uMaxY-uMinY),0.,1.);totalEmissiveRadiance+=vec3(1.,.75,.55)*(1.-smoothstep(0.,.015,abs(xh-uWipe)))*step(.001,uWipe)*step(uWipe,.999)*3.;}`);
    };
    mat.customProgramCacheKey = () => 'xp-dissolve';
  }

  const EMBER_VS = `
  uniform mat4 uRootInv; uniform float uTime,uPx,uSpread;
  attribute vec3 aRand; varying float vA; varying float vHot;
  ${NOISE}
  void main(){
    float d=xDis(position); float t=uDis*1.12-.06;
    float age=clamp((t-d)/.26,0.,1.);
    vec3 dir=normalize(vec3(aRand.x-.5,.55+aRand.y*.8,aRand.z-.5));
    vec3 p=position+dir*age*(.25+aRand.y*.9)*uSpread;
    p.x+=sin(uTime*1.7+aRand.z*31.)*age*.06*uSpread;
    p.z+=cos(uTime*1.3+aRand.x*17.)*age*.06*uSpread;
    vA=sin(age*3.14159)*step(.001,age); vHot=1.-age;
    vec4 mv=modelViewMatrix*vec4(p,1.);
    gl_PointSize=(1.4+aRand.x*2.6)*uPx*(4.5/-mv.z);
    gl_Position=projectionMatrix*mv;
  }`;
  const EMBER_FS = `
  varying float vA; varying float vHot; uniform vec3 uEdge;
  void main(){ float r=length(gl_PointCoord-.5); float a=smoothstep(.5,.0,r);
    vec3 c=mix(uEdge,vec3(1.,.93,.82),vHot*.6);
    gl_FragColor=vec4(min(c*1.25,vec3(1.)),a*vA); }`;

  // ---------- products ----------
  const DEFS = [
    { id: 'lamp', file: 'desk_lamp_arm_01', size: 2.25, name: 'Arc desk lamp', giant: 'Lamp', price: '$180', rot: -0.75 },
    { id: 'chair', file: 'mid_century_lounge_chair', size: 1.7, name: 'Shell lounge chair', giant: 'Lounge', price: '$1,240', rot: -0.65 },
    { id: 'vase', file: 'ceramic_vase_02', size: 1.15, name: 'Stoneware vase', giant: 'Vase', price: '$64', rot: 0 },
    { id: 'clock', file: 'alarm_clock_01', size: 1.05, name: 'Twin-bell clock', giant: 'Clock', price: '$48', rot: -0.5 },
    { id: 'boom', file: 'boombox', size: 1.6, name: 'Cassette boombox', giant: 'Boombox', price: '$220', rot: -0.35 },
  ];
  // visible windows in scroll progress; fades happen at window edges
  const WIN = { lamp: [[-1, 0.18], [0.42, 2]], chair: [[0.18, 0.24]], vase: [[0.24, 0.30]], clock: [[0.30, 0.36]], boom: [[0.36, 0.42]] };
  const FADE = 0.024;
  const products = {};
  const loader = new GLTFLoader();
  loader.setMeshoptDecoder(MeshoptDecoder);
  const nEmbers = isMobile() ? 1600 : 3200;
  const loadingBar = root.querySelector('.x-loading i');
  let loadedCount = 0;

  function loadProduct(def) {
    return new Promise((res) => loader.load(BASE + 'models/' + def.file + '.glb', (g) => {
      const model = g.scene;
      model.updateMatrixWorld(true);
      const box = new THREE.Box3().setFromObject(model);
      const size = box.getSize(new THREE.Vector3()), c = box.getCenter(new THREE.Vector3());
      const k = def.size / Math.max(size.x, size.y, size.z);
      model.scale.setScalar(k);
      model.position.set(-c.x * k, -box.min.y * k, -c.z * k);
      const rootG = new THREE.Group();
      rootG.add(model);
      rootG.updateMatrixWorld(true);
      const U = {
        uDis: { value: 1 }, uRootInv: { value: new THREE.Matrix4() }, uMinY: { value: 0 }, uMaxY: { value: size.y * k },
        uFreq: { value: 2.6 }, uSeed: { value: Math.random() * 20 }, uEdge: { value: new THREE.Color(0xff7a32) },
        uTintA: { value: new THREE.Vector4(0, 1, 1, 0) }, uTintB: { value: new THREE.Vector4(0, 1, 1, 0) }, uWipe: { value: 0 },
        uRecolor: { value: def.id === 'lamp' ? 1 : 0 },
      };
      const meshes = []; let bulb = null;
      model.traverse((o) => {
        if (!o.isMesh) return;
        o.castShadow = true; o.receiveShadow = true;
        let m = o.material;
        if (/glass/i.test(m.name)) {
          m = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.04, metalness: 0, transparent: true, opacity: 0.16, envMapIntensity: 2.2, clearcoat: 1 });
          o.material = m; o.castShadow = false;
        }
        if (/light/i.test(m.name)) {
          m.emissive = new THREE.Color(0xffd7a8); m.emissiveIntensity = 0; bulb = o;
        }
        m.envMapIntensity = m.envMapIntensity === 1 ? 0.85 : m.envMapIntensity;
        patch(m, U);
        meshes.push(o);
      });
      // embers sampled from the surfaces, in root space
      const tris = meshes.map((m) => (m.geometry.index ? m.geometry.index.count : m.geometry.attributes.position.count) / 3);
      const totTris = tris.reduce((a, b) => a + b, 0);
      const pos = new Float32Array(nEmbers * 3), rnd = new Float32Array(nEmbers * 3);
      const tmp = new THREE.Vector3(); let w = 0;
      meshes.forEach((m, mi) => {
        const n = mi === meshes.length - 1 ? nEmbers - w : Math.round(nEmbers * tris[mi] / totTris);
        const s = new MeshSurfaceSampler(m).build();
        for (let i = 0; i < n && w < nEmbers; i++, w++) {
          s.sample(tmp); tmp.applyMatrix4(m.matrixWorld);
          pos.set([tmp.x, tmp.y, tmp.z], w * 3);
          rnd.set([Math.random(), Math.random(), Math.random()], w * 3);
        }
      });
      const eg = new THREE.BufferGeometry();
      eg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      eg.setAttribute('aRand', new THREE.BufferAttribute(rnd, 3));
      const em = new THREE.ShaderMaterial({
        uniforms: Object.assign({ uTime: shared.uTime, uPx: shared.uPx, uSpread: { value: def.size * 0.55 } }, U),
        vertexShader: EMBER_VS, fragmentShader: EMBER_FS, transparent: true, depthWrite: false,
      });
      glow(em);
      const embers = new THREE.Points(eg, em);
      embers.frustumCulled = false;
      rootG.add(embers);
      rootG.visible = false;
      let bulbLocal = null;
      if (bulb) { const bb = new THREE.Box3().setFromObject(bulb); bulbLocal = bb.getCenter(new THREE.Vector3()); }
      scene.add(rootG);
      products[def.id] = { def, root: rootG, U, embers, bulb, bulbLocal, spin: 0 };
      loadedCount++; if (loadingBar) loadingBar.style.width = (loadedCount / DEFS.length * 100) + '%';
      res(products[def.id]);
    }, undefined, () => res(null)));
  }
  const shared = { uTime: { value: 0 }, uPx: { value: renderer.getPixelRatio() * 1.5 } };

  // ---------- systems ----------
  const SYS = [
    { a: -1.15, accent: 0xff6a2b }, { a: -0.58, accent: 0xa6e3d0 }, { a: 0, accent: 0xf3d9c4 },
    { a: 0.58, accent: 0x8fb4ff }, { a: 1.15, accent: 0xffc46b },
  ];
  const sysGroup = new THREE.Group(); scene.add(sysGroup);
  const boxGeo = new RoundedBoxGeometry(0.56, 0.56, 0.56, 6, 0.13);
  const TUBE_VS = `varying float vT; void main(){ vT=uv.x; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }`;
  const TUBE_FS = `varying float vT; uniform float uDraw,uTime,uSeed; uniform vec3 uColor;
    void main(){ if(vT>uDraw) discard;
      float pulse=smoothstep(.0,.06,fract(vT-uTime*.45+uSeed))*(1.-smoothstep(.06,.14,fract(vT-uTime*.45+uSeed)));
      float head=1.-smoothstep(0.,.05,uDraw-vT);
      vec3 c=uColor*(.75+pulse*1.2+head*1.2);
      gl_FragColor=vec4(min(c,vec3(1.)),clamp(.45+pulse+head,0.,1.)); }`;
  const systems = SYS.map((s, i) => {
    const R = 2.5;
    const x = Math.sin(s.a) * R, z = -Math.cos(s.a) * R * 0.75 + 0.35;
    const mat = new THREE.MeshPhysicalMaterial({ color: new THREE.Color(0xece5dc).lerp(new THREE.Color(s.accent), 0.38), roughness: 0.3, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.12,
      sheen: 1, sheenColor: new THREE.Color(s.accent), sheenRoughness: 0.35, envMapIntensity: 1.1, emissive: new THREE.Color(s.accent), emissiveIntensity: 0 });
    const m = new THREE.Mesh(boxGeo, mat); m.castShadow = true; m.receiveShadow = true;
    m.position.set(x, 0.28, z);
    sysGroup.add(m);
    const curve = new THREE.QuadraticBezierCurve3(new THREE.Vector3(0, 0.05, 0.05), new THREE.Vector3(x * 0.5, 0.55, z * 0.5 + 0.3), new THREE.Vector3(x, 0.3, z));
    const tm = new THREE.ShaderMaterial({ uniforms: { uDraw: { value: 0 }, uTime: shared.uTime, uSeed: { value: i * 0.21 }, uColor: { value: new THREE.Color(s.accent) } },
      vertexShader: TUBE_VS, fragmentShader: TUBE_FS, transparent: true, depthWrite: false });
    glow(tm);
    const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 120, 0.016, 8, false), tm);
    sysGroup.add(tube);
    return { m, tube, x, z, label: root.querySelector('.x-node[data-node="' + i + '"]') };
  });
  sysGroup.visible = false;

  // ---------- environment + load ----------
  const pmrem = new THREE.PMREMGenerator(renderer);
  new RGBELoader().load(BASE + 'env/studio_small_09_1k.hdr', (t) => {
    t.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = pmrem.fromEquirectangular(t).texture; t.dispose();
  });
  let introStart = -1;
  loadProduct(DEFS[0]).then((p) => {
    if (!p) { root.classList.add('x-nogl'); return; }
    root.classList.add('x-ready');
    introStart = performance.now();
    DEFS.slice(1).reduce((ch, d) => ch.then(() => loadProduct(d)), Promise.resolve());
  });

  // ---------- finishes ----------
  const FINISH = [new THREE.Vector4(0, 1, 1, 0), new THREE.Vector4(0.6, 0.08, 0.075, 1), new THREE.Vector4(0.44, 0.62, 0.95, 1)];
  const FINISH_NAME = ['Signal orange', 'Graphite', 'Mint'];
  let finish = 0, wipeT = -1, userPicked = false;
  const finishBtns = root.querySelectorAll('.x-finishes button');
  const stepItem = root.querySelector('.x-step__item');
  function setFinish(i, byUser) {
    if (byUser) userPicked = true;
    if (i === finish) return;
    const lamp = products.lamp; finish = i;
    finishBtns.forEach((b) => b.setAttribute('aria-pressed', String(+b.dataset.finish === i)));
    if (stepItem) stepItem.textContent = 'Arc desk lamp, ' + FINISH_NAME[i];
    if (!lamp) return;
    lamp.U.uTintB.value.copy(FINISH[i]);
    if (reduce) { lamp.U.uTintA.value.copy(FINISH[i]); return; }
    wipeT = performance.now();
  }
  finishBtns.forEach((b) => b.addEventListener('click', () => setFinish(+b.dataset.finish, true)));
  const addBtn = root.querySelector('.x-add');
  addBtn.addEventListener('click', () => { addBtn.classList.add('is-added'); addBtn.textContent = 'Added to cart'; });

  // ---------- camera path ----------
  const CAM = [
    [0.00, [0.1, 1.25, 6.0], [0, 0.95, 0]],
    [0.11, [-0.5, 1.15, 5.3], [0, 0.8, 0]],
    [0.42, [0.5, 1.05, 5.0], [0, 0.75, 0]],
    [0.49, [1.7, 1.55, 4.6], [0, 1.15, 0]],
    [0.56, [1.2, 1.45, 4.8], [0, 1.1, 0]],
    [0.64, [-1.6, 2.1, 5.7], [0.2, 1.05, 0]],
    [0.75, [0, 4.6, 6.6], [0, 0.3, -0.6]],
    [0.85, [0.6, 3.9, 6.9], [0, 0.35, -0.5]],
    [0.95, [0.1, 1.25, 6.0], [0, 0.95, 0]],
    [1.00, [0.1, 1.25, 6.0], [0, 0.95, 0]],
  ];
  const sstep = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  const camPos = new THREE.Vector3(), camTgt = new THREE.Vector3(), tmpA = new THREE.Vector3(), tmpB = new THREE.Vector3();
  function camAt(p) {
    let i = 0; while (i < CAM.length - 2 && p > CAM[i + 1][0]) i++;
    const [p0, a0, t0] = CAM[i], [p1, a1, t1] = CAM[i + 1];
    const f = sstep(p0, p1, p);
    camPos.copy(tmpA.fromArray(a0)).lerp(tmpB.fromArray(a1), f);
    camTgt.copy(tmpA.fromArray(t0)).lerp(tmpB.fromArray(t1), f);
    if (isMobile()) camPos.sub(camTgt).multiplyScalar(1.4 + 0.55 * sstep(0.66, 0.72, p) * (1 - sstep(0.86, 0.9, p))).add(camTgt);
  }
  function disFor(id, p) {
    let d = 1;
    for (const [a, b] of WIN[id]) {
      let v;
      if (p < a || p > b) v = 1;
      else if (p < a + FADE && a > 0) v = 1 - (p - a) / FADE;
      else if (p > b - FADE && b < 1) v = (p - (b - FADE)) / FADE;
      else v = 0;
      d = Math.min(d, v);
    }
    return Math.min(1, Math.max(0, d));
  }

  // ---------- chapters + HUD ----------
  const chapters = [...root.querySelectorAll('.x-ch')].map((el) => ({ el, s: parseFloat(el.style.getPropertyValue('--s')), e: parseFloat(el.style.getPropertyValue('--e')) }));
  const giant = root.querySelector('.x-giant__word');
  const cap = root.querySelector('.x-cap'), capName = root.querySelector('.x-cap__name'), capPrice = root.querySelector('.x-cap__price');
  const card = root.querySelector('.x-card'), checkout = root.querySelector('.x-checkout');
  const steps = [...root.querySelectorAll('.x-step')];
  let giantId = '';
  function fitGiant() {
    const W = stage.clientWidth * (isMobile() ? 0.94 : 0.8);
    giant.style.fontSize = '100px';
    const w = giant.scrollWidth || 1;
    giant.style.fontSize = Math.min(100 * W / w, stage.clientHeight * 0.42) + 'px';
  }
  const fade = (el, on) => { el.style.opacity = on; el.style.visibility = on > 0.01 ? 'visible' : 'hidden'; };

  function progress() {
    const r = story.getBoundingClientRect();
    const total = r.height - innerHeight;
    return Math.min(1, Math.max(0, -r.top / total));
  }

  // ---------- pointer ----------
  const ptr = { x: 0, y: 0, sx: 0, sy: 0 };
  addEventListener('pointermove', (e) => { ptr.x = e.clientX / innerWidth * 2 - 1; ptr.y = e.clientY / innerHeight * 2 - 1; }, { passive: true });

  // ---------- resize ----------
  let W = 1, H = 1;
  function resize() {
    W = stage.clientWidth; H = stage.clientHeight;
    renderer.setSize(W, H, false);
    camera.aspect = W / H;
    camera.fov = isMobile() ? 40 : 30;
    setOffset(0);
    shared.uPx.value = renderer.getPixelRatio() * 1.5;
    fitGiant();
  }
  function setOffset(p) {
    const sys = sstep(0.66, 0.72, p) * (1 - sstep(0.86, 0.9, p));
    const cardOn = sstep(0.42, 0.46, p) * (1 - sstep(0.68, 0.71, p));
    if (isMobile()) camera.setViewOffset(W, H, -W * 0.2 * (1 - sys) * (1 - cardOn), -H * 0.1 + H * 0.16 * cardOn, W, H);
    else camera.setViewOffset(W, H, -W * 0.13 * (1 - sys * 0.4), 0, W, H);
    camera.updateProjectionMatrix();
  }
  addEventListener('resize', resize);
  resize();

  // ---------- loop ----------
  let pS = progress(), visible = true;
  new IntersectionObserver((en) => { visible = en[0].isIntersecting; }, { rootMargin: '100px' }).observe(story);
  const clock = new THREE.Clock();
  const proj = new THREE.Vector3();

  function frame() {
    requestAnimationFrame(frame);
    if (!visible) return;
    const dt = Math.min(clock.getDelta(), 0.05);
    const time = clock.elapsedTime;
    shared.uTime.value = time;
    const pT = progress();
    pS += (pT - pS) * (reduce ? 1 : Math.min(1, dt * 7));
    const p = pS;

    // intro: lamp assembles from embers, then switches on
    let intro = 1, introP = 0;
    if (introStart > 0) { introP = reduce ? 1 : Math.min(1, (performance.now() - introStart) / 2200); intro = 1 - (1 - Math.pow(1 - introP, 3)); }

    // camera
    camAt(p);
    setOffset(p);
    ptr.sx += (ptr.x - ptr.sx) * dt * 2.5; ptr.sy += (ptr.y - ptr.sy) * dt * 2.5;
    camera.position.copy(camPos).add(tmpA.set(ptr.sx * 0.25, -ptr.sy * 0.12, 0));
    camera.lookAt(camTgt);
    key.position.set(-3.4 + ptr.sx * 1.2, 6.2, 3.6 - ptr.sy * 0.8);

    // products
    let activeId = null, activeDis = 1;
    for (const def of DEFS) {
      const pr = products[def.id]; if (!pr) continue;
      let d = disFor(def.id, p);
      if (def.id === 'lamp') d = Math.max(d, intro);
      pr.U.uDis.value = d;
      pr.root.visible = d < 1;
      if (d < activeDis) { activeDis = d; activeId = def.id; }
      pr.spin += dt * (reduce ? 0 : 0.1);
      const w = WIN[def.id][0], mid = (w[0] + w[1]) / 2;
      const turn = def.id === 'lamp' ? pr.spin + p * 2.2 : (p - mid) * 7 + Math.sin(time * 0.4) * 0.08;
      pr.root.rotation.y = def.rot + turn + ptr.sx * 0.15;
      pr.root.updateMatrixWorld(true);
      pr.U.uRootInv.value.copy(pr.root.matrixWorld).invert();
    }
    catcherMat.opacity = 0.5 * (1 - activeDis);

    // lamp light and pool
    const lamp = products.lamp;
    if (lamp) {
      const on = sstep(0.82, 1, introP) * (1 - lamp.U.uDis.value) * (0.92 + 0.08 * Math.sin(time * 40) * (1 - sstep(0.9, 1, introP)));
      if (lamp.bulb) lamp.bulb.material.emissiveIntensity = on * 6;
      if (lamp.bulbLocal) {
        proj.copy(lamp.bulbLocal).applyMatrix4(lamp.root.matrixWorld);
        pool.position.x = proj.x; pool.position.z = proj.z;
      }
      pool.material.opacity = on * 0.85;
      // finish wipe
      if (wipeT > 0) {
        const f = Math.min(1, (performance.now() - wipeT) / 900);
        lamp.U.uWipe.value = f;
        if (f >= 1) { lamp.U.uTintA.value.copy(lamp.U.uTintB.value); lamp.U.uWipe.value = 0; wipeT = -1; }
      }
    }

    // giant product name + caption
    const showcase = p > 0.135 && p < 0.425;
    const want = showcase && activeId ? activeId : '';
    if (want !== giantId) {
      giantId = want;
      giant.classList.remove('is-on');
      if (want) {
        const def = DEFS.find((d) => d.id === want);
        setTimeout(() => { if (giantId !== want) return; giant.textContent = def.giant; fitGiant(); giant.classList.add('is-on'); }, 160);
        capName.textContent = def.name; capPrice.textContent = 'FORMA, ' + def.price;
      }
    }
    cap.style.opacity = showcase ? 1 - activeDis : 0;

    // product page: auto-demo finishes until the visitor picks one
    fade(card, sstep(0.43, 0.46, p) * (1 - sstep(0.555, 0.57, p)));
    if (!userPicked && p > 0.44 && p < 0.565) setFinish(p < 0.475 ? 0 : p < 0.515 ? 1 : 2);

    // checkout
    const co = sstep(0.575, 0.6, p) * (1 - sstep(0.68, 0.7, p));
    fade(checkout, co);
    const sp = (p - 0.58) / 0.09;
    steps.forEach((s, i) => { s.classList.toggle('is-active', sp >= i / 3 && sp < (i + 1) / 3 || (i === 2 && sp >= 1)); s.classList.toggle('is-done', sp >= (i + 1) / 3 && !(i === 2)); });
    const rp = Math.min(1, Math.max(0, (sp - 0.67) / 0.33));
    ring.scale.setScalar(0.3 + rp * 2.6); ring.material.opacity = rp > 0 && rp < 1 ? (1 - rp) * 0.9 : 0;

    // systems
    const sysIn = sstep(0.68, 0.75, p) * (1 - sstep(0.86, 0.9, p));
    sysGroup.visible = sysIn > 0.001;
    systems.forEach((s, i) => {
      const r = sstep(i * 0.08, i * 0.08 + 0.6, sysIn);
      s.m.position.y = -0.3 + r * 0.58 + Math.sin(time * 1.2 + i) * 0.015 * r;
      s.m.scale.setScalar(Math.max(0.001, r));
      s.m.rotation.y = (1 - r) * 1.5 + Math.sin(time * 0.5 + i) * 0.08;
      const draw = sstep(0.3 + i * 0.05, 0.85 + i * 0.03, sysIn);
      s.tube.material.uniforms.uDraw.value = draw;
      s.m.material.emissiveIntensity = draw >= 0.999 ? 0.08 + 0.1 * Math.max(0, Math.sin(time * 2.8 - i)) : 0;
      if (s.label) {
        if (sysIn > 0.01) {
          proj.set(s.x, 0.62 + s.m.position.y, s.z).project(camera);
          s.label.style.transform = `translate(${(proj.x * 0.5 + 0.5) * W}px,${(-proj.y * 0.5 + 0.5) * H}px) translate(-50%,-140%)`;
        }
        s.label.style.opacity = sstep(0.5, 0.8, r) * sysIn;
        s.label.classList.toggle('is-on', draw >= 0.999);
      }
    });

    // chapter copy fades
    for (const c of chapters) {
      const o = c.s <= 0 ? 1 - sstep(c.e - 0.02, c.e + 0.005, p) : sstep(c.s - 0.005, c.s + 0.02, p) * (c.e >= 1 ? 1 : 1 - sstep(c.e - 0.015, c.e + 0.005, p));
      c.el.style.opacity = o;
    }

    renderer.render(scene, camera);
  }
  frame();
  window.__xp = { products, scene, camera, setFinish };
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', main); else main();
