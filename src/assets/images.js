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

export const HOME = {
  heroBg:     '/images/23.jpg', // home-hero-bg.jpg       — full-bleed hero background
  about:      null, // home-about.jpg         — About strip left image
  project1:   '/images/18.jpg', // home-project-1.jpg     — Featured project card 1
  project2:   '/images/4.jpeg', // home-project-2.jpg     — Featured project card 2
  project3:   '/images/25.png', // home-project-3.jpg     — Featured project card 3
  gallery1:   '/images/10.jpeg', // home-gallery-1.jpg     — Gallery mosaic top-left (landscape)
  gallery2:   '/images/13.jpeg', // home-gallery-2.jpg     — Gallery mosaic top-right tall
  gallery3:   '/images/12.jpeg', // home-gallery-3.jpg     — Gallery mosaic bottom-left
  gallery4:   '/images/11.jpeg', // home-gallery-4.jpg     — Gallery mosaic bottom-center
  gallery5:   '/images/5.jpeg', // home-gallery-5.jpg     — Gallery mosaic bottom-right
  teamMember1: null, // team-member-1.jpg     — Team photo 1
  teamMember2: null, // team-member-2.jpg     — Team photo 2
  teamMember3: null, // team-member-3.jpg     — Team photo 3
  teamMember4: null, // team-member-4.jpg     — Team photo 4
};


export const SERVICES = {
  construction:  '/images/23.jpg',
  mining:        '/images/3.jpeg',
  logistics:     '/images/31.jpeg',
  trading:       '/images/30.jpeg',

  conGallery1:   '/images/14.png',
  conGallery2:   '/images/21.jpeg',
  conGallery3:   '/images/22.jpg',

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
