/**
 * CENTRALIZED IMAGE REGISTRY
 * ─────────────────────────────────────────────────────────────────
 * Drop your image files into src/assets/images/ then import them
 * here and replace the placeholder strings with the import.
 *
 * EXAMPLE:
 *   import heroMain from './images/hero-main.jpg'
 *   export const HOME = {
 *     heroMain,          ← swap null with your import
 *     ...
 *   }
 *
 * Any entry left as null will render a labeled placeholder box
 * so you can see exactly which slot needs an image.
 * ─────────────────────────────────────────────────────────────────
 */

// ── HOME PAGE ────────────────────────────────────────────────────
// import homeHeroBg      from './images/home-hero-bg.jpg'
// import homeAbout       from './images/home-about.jpg'
// import homeProject1    from './images/home-project-1.jpg'
// import homeProject2    from './images/home-project-2.jpg'
// import homeProject3    from './images/home-project-3.jpg'
// import homeGallery1    from './images/home-gallery-1.jpg'
// import homeGallery2    from './images/home-gallery-2.jpg'
// import homeGallery3    from './images/home-gallery-3.jpg'
// import homeGallery4    from './images/home-gallery-4.jpg'
// import homeGallery5    from './images/home-gallery-5.jpg'
// import teamMember1     from './images/team-member-1.jpg'
// import teamMember2     from './images/team-member-2.jpg'
// import teamMember3     from './images/team-member-3.jpg'
// import teamMember4     from './images/team-member-4.jpg'

export const HOME = {
  heroBg:     '/images/21.jpeg', // home-hero-bg.jpg       — full-bleed hero background
  about:      null, // home-about.jpg         — About strip left image
  project1:   '/images/18.jpeg', // home-project-1.jpg     — Featured project card 1
  project2:   '/images/4.jpeg', // home-project-2.jpg     — Featured project card 2
  project3:   '/images/25.png', // home-project-3.jpg     — Featured project card 3
  gallery1:   '/images/16.jpeg', // home-gallery-1.jpg     — Gallery mosaic top-left (landscape)
  gallery2:   '/images/19.jpeg', // home-gallery-2.jpg     — Gallery mosaic top-right tall
  gallery3:   '/images/22.jpeg', // home-gallery-3.jpg     — Gallery mosaic bottom-left
  gallery4:   '/images/17.jpeg', // home-gallery-4.jpg     — Gallery mosaic bottom-center
  gallery5:   '/images/2.jpeg', // home-gallery-5.jpg     — Gallery mosaic bottom-right
  teamMember1: null, // team-member-1.jpg     — Team photo 1
  teamMember2: null, // team-member-2.jpg     — Team photo 2
  teamMember3: null, // team-member-3.jpg     — Team photo 3
  teamMember4: null, // team-member-4.jpg     — Team photo 4
};

// ── SERVICES PAGE ────────────────────────────────────────────────
// import svcConstruction  from './images/svc-construction.jpg'
// import svcMining        from './images/svc-mining.jpg'
// import svcLogistics     from './images/svc-logistics.jpg'
// import svcTrading       from './images/svc-trading.jpg'
// import svcConGallery1   from './images/svc-con-gallery-1.jpg'
// import svcConGallery2   from './images/svc-con-gallery-2.jpg'
// import svcConGallery3   from './images/svc-con-gallery-3.jpg'
// import svcMinGallery1   from './images/svc-min-gallery-1.jpg'
// import svcMinGallery2   from './images/svc-min-gallery-2.jpg'
// import svcMinGallery3   from './images/svc-min-gallery-3.jpg'
// import svcLogGallery1   from './images/svc-log-gallery-1.jpg'
// import svcLogGallery2   from './images/svc-log-gallery-2.jpg'
// import svcLogGallery3   from './images/svc-log-gallery-3.jpg'
// import svcTrdGallery1   from './images/svc-trd-gallery-1.jpg'
// import svcTrdGallery2   from './images/svc-trd-gallery-2.jpg'
// import svcTrdGallery3   from './images/svc-trd-gallery-3.jpg'

export const SERVICES = {
  construction:  '/images/23.jpeg',
  mining:        '/images/3.jpeg',
  logistics:     '/images/31.jpeg',
  trading:       '/images/30.jpeg',

  conGallery1:   '/images/14.png',
  conGallery2:   '/images/21.jpeg',
  conGallery3:   '/images/22.jpeg',

  minGallery1:   '/images/26.jpg',
  minGallery2:   '/images/28.jpg',
  minGallery3:   '/images/27.jpg',

  logGallery1:   '/images/33.jpeg',
  logGallery2:   '/images/32.webp',
  logGallery3:   '/images/34.png',

  trdGallery1:   null,
  trdGallery2:   null,
  trdGallery3:   null,
};
