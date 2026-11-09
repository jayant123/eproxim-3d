# eproxim-3d

Public assets for the 3D store experience on eproxim.com, served through jsDelivr with pinned tags:

    https://cdn.jsdelivr.net/gh/jayant123/eproxim-3d@<tag>/store/xp.js

- `store/xp.js` is built from the private eproxim-seo repo (`pages/store-experience/build.py`). Edit it there, not here.
- `store/index.html` is a local test page (`python3 -m http.server` in this folder, then open /store/).
- `models/*.glb` and `env/*.hdr` come from [Poly Haven](https://polyhaven.com) and are CC0 (public domain).
  Models: desk_lamp_arm_01, mid_century_lounge_chair, ceramic_vase_02, alarm_clock_01, boombox (1k textures,
  converted with gltf-transform: WebP textures, meshopt geometry). HDRI: studio_small_09 (1k).

  It reuses the same models and HDRI.

## garden/ (homepage hero)

    https://cdn.jsdelivr.net/gh/jayant123/eproxim-3d@<garden-tag>/garden/garden.js

- `garden/garden.js` is the luminous botanical hero: seeded procedural vines, leaves and blooms that grow
  around the homepage copy. Built from the private eproxim-seo repo (`pages/home-garden/`, `node build.mjs <tag>`),
  three.js r160 bundled in. `?garden=<seed>` replays a garden, `&gt=<seconds>` freezes time, `&gdebug=1` shows the copy boxes.
- v2 adds the scroll vine (`epxGardenConfig.side`): a vine that grows down the right margin as the visitor scrolls,
  avoiding text, media and cards (`?vine=<seed>` replays one). Below 1100px it hugs the right edge (slim mode).
- v3 tells the integration story: two plants (two systems) grow from left and right and meet at graft blooms;
  each time the headline's system name changes, a pulse crosses the graft and opens a bud. The scroll vine carries
  pulses down the page and ends in a bloom beside the closing call to action (hover brightens it).
- `garden/corner-*.png` are the static fallback corners shown when WebGL is unavailable.

