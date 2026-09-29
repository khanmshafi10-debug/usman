(function(){if(window.__IFS_WIDGET_BUNDLE_LOADED__)return;window.__IFS_WIDGET_BUNDLE_LOADED__=!0;let U1=document.currentScript;if(U1&&U1.src){let Z=new URL(U1.src,document.baseURI);window.__IFS_ASSET_QUERY__=Z.search,Z.search="",Z.hash="",window.__IFS_ASSET_BASE__=Z.href.slice(0,Z.href.lastIndexOf("/"))}function D8(){if(document.getElementById("ifs-extension-styles"))return;let Z=document.createElement("style");Z.id="ifs-extension-styles",Z.type="text/css",Z.textContent=`/* src/styles/feed.css */
.ifs-slider {
  overflow: hidden;
  --slide-spacing: 10px;
  --slide-size: 25%;
  position: relative;
}

instagram-feeds {
  display: block;
  width: 100%;
  min-width: 0;
  max-width: 100%;
}

.ifs-hydrated-shell {
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  max-width: 100%;
  margin: 0 auto;
}

.ifs-feed-skeleton {
  display: grid;
  grid-template-columns: repeat(var(--ifs-skeleton-columns, 6), minmax(0, 1fr));
  gap: var(--ifs-skeleton-gap, 10px);
  width: 100%;
  padding: 10px;
}

.ifs-feed-skeleton__post {
  display: block;
  overflow: hidden;
  aspect-ratio: var(--ifs-skeleton-ratio, 3 / 4);
  border-radius: var(--ifs-skeleton-radius, 0);
  background: #ededed;
}

.ifs-feed-skeleton__post:after {
  display: block;
  content: "";
  animation: ifs-skeleton-shimmer 1.5s ease-in-out infinite;
  animation-delay: var(--ifs-skeleton-delay, 0s);
  background: linear-gradient(105deg, #0000 20%, #ffffffb8 42%, #0000 64%);
  width: 100%;
  height: 100%;
  transform: translateX(-100%);
}

.ifs-feed-skeleton--slider, .ifs-feed-skeleton--spotlight, .ifs-feed-skeleton--arc {
  display: flex;
  overflow: hidden;
}

.ifs-feed-skeleton--slider .ifs-feed-skeleton__post {
  flex: 0 0 calc(var(--ifs-carousel-slide-size, 20%)  - var(--ifs-skeleton-gap, 10px));
}

.ifs-feed-skeleton--spotlight .ifs-feed-skeleton__post {
  flex: 0 0 calc(var(--ifs-carousel-slide-size, 25%)  - var(--ifs-skeleton-gap, 10px));
  opacity: .52;
  transform: scale(.8);
}

.ifs-feed-skeleton--arc .ifs-feed-skeleton__post {
  flex: 0 0 var(--ifs-carousel-slide-size, 20%);
}

.ifs-feed-skeleton--spotlight, .ifs-feed-skeleton--arc {
  align-items:  center;
  padding-block-start: 28px;
  padding-block-end: 28px;
}

.ifs-feed-skeleton--arc {
  align-items:  flex-start;
  gap: 0;
  padding-block-start: clamp(10px, 1.5vw, 18px);
  padding-block-end: clamp(64px, 10%, 160px);
}

.ifs-feed-skeleton--spotlight .ifs-feed-skeleton__post:nth-child(3) {
  opacity: 1;
  transform: scale(1);
}

.ifs-feed-skeleton--spotlight .ifs-feed-skeleton__post:first-child {
  transform: translateX(30%)scale(.8);
}

.ifs-feed-skeleton--spotlight .ifs-feed-skeleton__post:nth-child(2) {
  transform: translateX(10%)scale(.8);
}

.ifs-feed-skeleton--spotlight .ifs-feed-skeleton__post:nth-child(4) {
  transform: translateX(-10%)scale(.8);
}

.ifs-feed-skeleton--spotlight .ifs-feed-skeleton__post:nth-child(5) {
  transform: translateX(-30%)scale(.8);
}

.ifs-feed-skeleton--arc .ifs-feed-skeleton__post:first-child {
  transform-origin: center;
  transform: translateY(clamp(24px, 4.5vw, 86px))rotate(-13deg);
}

.ifs-feed-skeleton--arc .ifs-feed-skeleton__post:nth-child(2) {
  transform-origin: center;
  transform: translateY(clamp(8px, 1.1vw, 22px))rotate(-6.5deg);
}

.ifs-feed-skeleton--arc .ifs-feed-skeleton__post:nth-child(4) {
  transform-origin: center;
  transform: translateY(clamp(8px, 1.1vw, 22px))rotate(6.5deg);
}

.ifs-feed-skeleton--arc .ifs-feed-skeleton__post:nth-child(5) {
  transform-origin: center;
  transform: translateY(clamp(24px, 4.5vw, 86px))rotate(13deg);
}

.ifs-feed-skeleton--collage {
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.8fr) minmax(0, 1fr);
  grid-template-rows: repeat(2, minmax(0, 1fr));
  aspect-ratio: 1.9;
}

.ifs-feed-skeleton--collage .ifs-feed-skeleton__post {
  aspect-ratio: auto;
  width: 100%;
  min-width: 0;
  height: 100%;
  min-height: 0;
}

.ifs-feed-skeleton--collage .ifs-feed-skeleton__post:first-child {
  grid-column: 2;
  grid-row: 1 / span 2;
}

.ifs-feed-skeleton--collage .ifs-feed-skeleton__post:nth-child(2) {
  grid-column: 1;
  grid-row: 1;
}

.ifs-feed-skeleton--collage .ifs-feed-skeleton__post:nth-child(3) {
  grid-column: 3;
  grid-row: 1;
}

.ifs-feed-skeleton--collage .ifs-feed-skeleton__post:nth-child(4) {
  grid-column: 1;
  grid-row: 2;
}

.ifs-feed-skeleton--collage .ifs-feed-skeleton__post:nth-child(5) {
  grid-column: 3;
  grid-row: 2;
}

.ifs-visually-hidden {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  white-space: nowrap;
  width: 1px;
  height: 1px;
}

@keyframes ifs-skeleton-shimmer {
  to {
    transform: translateX(100%);
  }
}

.ifs-viewport {
  overflow: hidden;
}

.ifs-effect-viewport {
  overflow: hidden;
  padding: 18px 0;
}

.ifs-effect-carousel--arc .ifs-effect-viewport {
  padding: clamp(10px, 1.5vw, 18px) 0 var(--ifs-arc-clearance, clamp(64px, 10%, 160px));
}

.ifs-effect-carousel--arc {
  --ifs-carousel-nav-top: 28%;
}

.ifs-effect-slide {
  flex: 0 0 var(--ifs-carousel-slide-size, 25%);
}

.ifs-effect-carousel--arc .ifs-effect-slide {
  flex-basis: var(--ifs-carousel-slide-size, 20%);
}

.ifs-effect-inner {
  position: relative;
}

.ifs-effect-carousel--arc .ifs-effect-inner {
  visibility: hidden;
  width: var(--ifs-arc-card-width, calc(100% - var(--ifs-arc-bottom-gap, 10px)));
  margin-inline-start: auto;
  margin-inline-end: auto;
}

.ifs-container {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: var(--ifs-carousel-slide-size, 20%);
  margin-right: calc(var(--slide-spacing) * -1);
}

@media (max-width: 768px) {
  .ifs-container {
    grid-auto-columns: var(--ifs-carousel-slide-size-mobile, 50%) !important;
  }

  .ifs-feed-skeleton:not(.ifs-feed-skeleton--collage) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .ifs-feed-skeleton--slider, .ifs-feed-skeleton--spotlight, .ifs-feed-skeleton--arc {
    display: flex;
  }

  .ifs-feed-skeleton--slider .ifs-feed-skeleton__post, .ifs-feed-skeleton--spotlight .ifs-feed-skeleton__post {
    flex-basis: calc(var(--ifs-carousel-slide-size-mobile, 50%)  - var(--ifs-skeleton-gap, 10px));
  }

  .ifs-feed-skeleton--arc .ifs-feed-skeleton__post {
    flex-basis: var(--ifs-carousel-slide-size-mobile, 33.3333%);
  }

  .ifs-feed-skeleton--arc {
    padding-bottom: clamp(64px, 10%, 160px);
  }

  .ifs-effect-carousel--spotlight .ifs-effect-slide {
    flex-basis: var(--ifs-carousel-slide-size-mobile, 50%);
  }

  .ifs-effect-carousel--arc .ifs-effect-slide {
    flex-basis: var(--ifs-carousel-slide-size-mobile, 33.3333%);
  }

  .ifs-effect-carousel--arc .ifs-effect-viewport {
    padding-bottom: var(--ifs-arc-clearance, clamp(64px, 10%, 160px));
  }
}

.ifs-slide {
  padding-right: var(--slide-spacing);
  position: relative;
  min-width: 0;
}

.ifs-slide-media {
  position: relative;
  overflow: hidden;
  aspect-ratio: var(--ifs-aspect-ratio, 3 / 4);
  border-radius: var(--ifs-radius, 0);
  cursor: pointer;
  isolation: isolate;
  background: #eee;
  width: 100%;
}

.ifs-slide-media img, .ifs-slide-media video, .ifs-slide-media > div:first-child {
  border-radius: var(--ifs-radius, 0);
  height: 100%;
}

.ifs-slide img {
  object-fit: cover;
  object-position: center;
  pointer-events: none;
  width: 100%;
  height: 100%;
}

.ifs-button {
  -webkit-appearance: none;
  appearance: none;
  position: absolute;
  top: var(--ifs-carousel-nav-top, 50%);
  z-index: 5;
  display: flex;
  color: #333;
  font: inherit;
  opacity: 1;
  cursor: pointer;
  touch-action: manipulation;
  box-sizing: border-box;
  background: none;
  border: 0;
  border-radius: 50%;
  justify-content: center;
  align-items:  center;
  width: 30px;
  min-width: 30px;
  max-width: 30px;
  height: 30px;
  min-height: 30px;
  max-height: 30px;
  margin: 0;
  padding: 8px;
  line-height: 1;
  transform: translateY(-50%);
}

.ifs-button:disabled {
  opacity: .5;
}

.ifs-button-svg {
  display: block;
  fill: none;
  stroke: currentColor;
  pointer-events: none;
  flex: none;
  width: 100%;
  height: 100%;
}

.ifs-button--prev {
  left: 10px;
}

.ifs-button--next {
  right: 10px;
}

.ifs-nav--light {
  color: #111;
  background: #fffffff5;
  border: 1px solid #1111112e;
  box-shadow: 0 1px 4px #00000024;
}

.ifs-nav--dark {
  color: #fff;
  background: #111;
}

.ifs-nav--haze {
  color: #fff;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  background: #111111a8;
  border: 1px solid #ffffff38;
  box-shadow: 0 1px 5px #0000002e;
}

.ifs-nav--outline {
  color: #111;
  background: none;
  border: 1.5px solid;
}

#instafeed img, #instafeed video, .instafeed img, .instafeed video {
  pointer-events: none;
}

.ifs-img {
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: transform .32s cubic-bezier(.2,.75,.25,1);
}

.instagram-grid-item, .instagram-layout-item {
  isolation: isolate;
  background: #eee;
}

.instagram-grid-item {
  aspect-ratio: var(--ifs-aspect-ratio, 3 / 4);
}

.instagram-grid-item:before, .instagram-layout-item:before, .ifs-slide-media:before {
  position: absolute;
  z-index: 1;
  content: "";
  opacity: 0;
  pointer-events: none;
  background: linear-gradient(#0000 62%, #0003);
  transition: opacity .22s;
  inset: 0;
}

.instagram-grid-item:hover:before, .instagram-layout-item:hover:before, .ifs-slide-media:hover:before {
  opacity: 1;
}

.instagram-grid-item:hover .ifs-img, .instagram-layout-item:hover .ifs-img, .ifs-slide-media:hover .ifs-img {
  transform: scale(1.025);
}

.ifs-product-badge {
  position: absolute;
  z-index: 3;
  display: inline-flex;
  color: #fff;
  pointer-events: none;
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  background: #0e0e10b8;
  border: 1px solid #ffffff40;
  border-radius: 999px;
  align-items:  center;
  gap: 5px;
  min-height: 28px;
  padding: 4px 9px;
  font-size: 11px;
  font-weight: 650;
  line-height: 1;
  bottom: 10px;
  right: 10px;
}

.ifs-product-badge svg {
  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
  width: 14px;
  height: 14px;
}

.ifs-slide video, .instagram-grid-item video {
  object-fit: cover;
  object-position: center;
  pointer-events: none;
  width: 100%;
  height: 100%;
}

.ifs-video-icon {
  position: absolute;
  display: flex;
  aspect-ratio: 1;
  box-sizing: border-box;
  z-index: 2;
  pointer-events: none;
  background-color: #00000080;
  border-radius: 50%;
  justify-content: center;
  align-items:  center;
  width: 40px;
  min-width: 40px;
  max-width: 40px;
  height: 40px;
  min-height: 40px;
  max-height: 40px;
  padding: 0;
  transition: opacity .25s ease-in-out;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.ifs-video-icon svg {
  display: block;
  flex: none;
  width: 20px;
  min-width: 20px;
  max-width: 20px;
  height: 20px;
  min-height: 20px;
  max-height: 20px;
}

@media (prefers-reduced-motion: reduce) {
  .ifs-feed-skeleton__post:after {
    animation: none;
  }

  .ifs-img, .instagram-grid-item:before, .instagram-layout-item:before, .ifs-slide-media:before {
    transition: none;
  }
}

/* src/styles/promotion.css */
#ifs-promo {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items:  center;
  gap: 8px;
  width: 100%;
  max-width: 96px;
}

.stories.carousel .story.ifs-promo-story {
  width: 20vw;
  max-width: 96px;
  margin-left: 0;
}

.story-circle-gradient {
  appearance: none;
  cursor: pointer;
  background: radial-gradient(at 70% 70%, #ee583f 8%, #d92d77 42%, #bd3381 58%);
  border: 0;
  width: 82px;
  height: 82px;
  border-radius: 50% !important;
  margin: 0 auto !important;
  padding: 2px !important;
}

.story-circle-gradient:focus:not(:focus-visible) {
  outline: none !important;
  box-shadow: none !important;
}

.story-circle-gradient:focus-visible {
  outline: 3px solid #c1317d47;
  outline-offset: 3px;
}

.story-circle {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items:  center;
  width: 78px;
  height: 78px;
  position: relative !important;
  background-size: cover !important;
  border: 3px solid #fff !important;
  border-radius: 50% !important;
}

.story-promo-tag {
  overflow: hidden;
  text-overflow: ellipsis;
  color: #322b31;
  white-space: nowrap;
  max-width: 92px;
  top: calc(100% + 5px);
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 2px 8px #4518341f;
  text-align: center !important;
  position: absolute !important;
  background: #fff !important;
  border: 1.5px solid #c6317d !important;
  border-radius: 999px !important;
  margin: 0 !important;
  padding: 0 7px !important;
  font-family: Helvetica, Arial, sans-serif !important;
  font-size: 10px !important;
  font-weight: 700 !important;
  line-height: 16px !important;
}

.add-story-icon {
  width: 30px;
  height: 30px;
}

#instagram-promo-instructions {
  overflow: hidden;
  color: #fff;
  overscroll-behavior: contain;
  background: none;
  border: 0;
  border-radius: 28px;
  width: min(92vw, 49.5dvh, 405px);
  max-width: none;
  height: min(88dvh, 163.558vw, 720px);
  max-height: none;
  margin: auto;
  padding: 0;
  box-shadow: 0 24px 72px #19091357;
}

#instagram-promo-instructions:not([open]) {
  display: none !important;
}

#instagram-promo-instructions[open] {
  animation: ifs-promo-enter .18s ease-out;
  display: block !important;
}

#instagram-promo-instructions::backdrop {
  backdrop-filter: blur(5px);
  background: #181216a8;
}

.ifs-promo-card {
  position: relative;
  display: flex;
  overflow-x: hidden;
  overflow-y: auto;
  border-radius: inherit;
  scrollbar-width: none;
  background: radial-gradient(circle at 82% 14%, #ffc96d8c, #0000 27%), radial-gradient(circle at 18% 82%, #5c3abe85, #0000 34%), linear-gradient(155deg, #632b91 0%, #b62b72 47%, #e65e49 76%, #ee9a45 100%);
  border: 1px solid #ffffff2e;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-family: Helvetica, Arial, sans-serif;
}

.ifs-promo-card::-webkit-scrollbar {
  display: none;
}

.ifs-promo-card:before, .ifs-promo-card:after {
  position: absolute;
  content: "";
  pointer-events: none;
  border: 1px solid #ffffff21;
  border-radius: 50%;
}

.ifs-promo-card:before {
  aspect-ratio: 1;
  width: 92%;
  top: 24%;
  left: -46%;
}

.ifs-promo-card:after {
  aspect-ratio: 1;
  width: 72%;
  bottom: 13%;
  right: -30%;
}

.ifs-promo-story-progress {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 4px;
  padding: 12px 12px 0;
}

.ifs-promo-story-progress span {
  background: #ffffff7a;
  border-radius: 999px;
  height: 2px;
}

.ifs-promo-story-progress span:first-child {
  background: #fff;
}

.ifs-promo-story-header {
  position: relative;
  z-index: 1;
  display: flex;
  text-align: left;
  align-items:  center;
  gap: 10px;
  padding: 13px 16px;
}

.ifs-promo-avatar {
  display: grid;
  background: #ffffff24;
  border: 1px solid #ffffff9e;
  border-radius: 50%;
  flex: none;
  place-items:  center;
  width: 36px;
  height: 36px;
}

.ifs-promo-avatar svg {
  width: 20px;
  height: 20px;
}

.ifs-promo-story-identity {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
}

.ifs-promo-story-identity strong {
  font-size: 13px;
  line-height: 1.25;
}

.ifs-promo-story-identity small {
  overflow: hidden;
  color: #ffffffb8;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 10px;
  line-height: 1.3;
}

.ifs-promo-close-icon {
  appearance: none;
  cursor: pointer;
  color: #fff;
  background: #0e080d2e;
  border: 0;
  border-radius: 999px;
  flex: none;
  width: 34px;
  height: 34px;
  padding: 7px;
}

.ifs-promo-close-icon:hover {
  background: #0e080d47;
}

.ifs-promo-close-icon:focus-visible {
  outline: 3px solid #c22d7447;
  outline-offset: 2px;
}

.ifs-promo-done:focus-visible {
  outline: 3px solid #c22d7447;
  outline-offset: 2px;
}

.ifs-promo-close-icon svg {
  display: block;
  width: 100%;
  height: 100%;
}

.ifs-promo-offer {
  display: inline-block;
  color: #8b245e;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: #fffffff0;
  border-radius: 999px;
  max-width: 100%;
  margin: 16px auto 0;
  padding: 8px 14px;
  font: 800 13px / 1.2 Helvetica, Arial, sans-serif;
}

.ifs-promo-copy {
  position: relative;
  z-index: 1;
  display: flex;
  text-align: center;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  min-width: 0;
  padding: 22px 26px 26px;
  font-family: Helvetica, Arial, sans-serif;
}

.ifs-promo-kicker {
  color: #ffffffb8;
  letter-spacing: .16em;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 800;
}

.ifs-promo-copy h2 {
  color: #fff;
  letter-spacing: -.04em;
  overflow-wrap: anywhere;
  margin: 9px 0 0;
  font-size: clamp(30px, 8vw, 42px);
  line-height: 1.02;
}

.ifs-promo-lede {
  color: #ffffffd4;
  margin: 14px 0 0;
  font-size: 13px;
  line-height: 1.45;
}

.ifs-promo-steps {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 6px;
  margin-top: 18px;
}

.ifs-promo-steps span {
  display: flex;
  color: #ffffffe6;
  background: #ffffff14;
  border: 1px solid #fff3;
  border-radius: 10px;
  justify-content: center;
  align-items:  center;
  gap: 5px;
  min-width: 0;
  padding: 7px 5px;
  font-size: 10px;
  font-weight: 700;
}

.ifs-promo-steps b {
  display: grid;
  background: #ffffff2e;
  border-radius: 50%;
  place-items:  center;
  width: 17px;
  height: 17px;
  font-size: 9px;
}

.ifs-promo-instruction-box {
  text-align: left;
  background: #14081029;
  border: 1px solid #fff3;
  border-radius: 13px;
  margin-top: 14px;
  padding: 13px 14px;
}

.ifs-promo-instruction-box > span {
  display: block;
  color: #ffffffad;
  text-transform: uppercase;
  letter-spacing: .1em;
  margin-bottom: 4px;
  font-size: 9px;
  font-weight: 800;
}

.promo-instruction {
  color: #fff;
  overflow-wrap: anywhere;
  white-space: pre-line;
  margin: 0;
  font-size: 12px;
  line-height: 1.4;
}

.ifs-promo-done {
  appearance: none;
  color: #7f245c;
  cursor: pointer;
  background: #fff;
  border: 0;
  border-radius: 11px;
  width: 100%;
  margin-top: 14px;
  padding: 11px 16px;
  font: 700 14px / 1.2 Helvetica, Arial, sans-serif;
}

.ifs-promo-done:hover {
  background: #ffffffe6;
}

@keyframes ifs-promo-enter {
  from {
    opacity: 0;
    transform: translateY(10px)scale(.98);
  }

  to {
    opacity: 1;
    transform: translateY(0)scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  #instagram-promo-instructions[open] {
    animation: none;
  }
}

@media (max-height: 620px) {
  .ifs-promo-copy {
    justify-content: flex-start;
    padding: 12px 20px 20px;
  }

  .ifs-promo-copy h2 {
    font-size: 28px;
  }

  .ifs-promo-lede, .ifs-promo-steps {
    margin-top: 10px;
  }
}

/* src/vendor/zuck/zuck.css */
@keyframes zuckSlideTime {
  0% {
    max-width: 0;
  }

  100% {
    max-width: 100%;
  }
}

@keyframes zuckLoading {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

#zuck-modal {
  overflow: hidden;
  position: fixed;
  z-index: 100000;
  background: #000000bf;
  width: 100vw;
  height: 100%;
  font-family: inherit;
  font-size: 14px;
  top: 0;
  left: 0;
  outline: 0 !important;
}

#zuck-modal-content, #zuck-modal-content .story-viewer, #zuck-modal-content .story-viewer > .slides, #zuck-modal-content .story-viewer > .slides > * {
  position: absolute;
  overflow: hidden;
  width: 100vw;
  height: 100%;
  top: 0;
  bottom: 0;
}

#zuck-modal * {
  user-select: none;
  outline: 0;
}

#zuck-modal.with-effects {
  transform-origin: top left;
  transition: all .25s;
  transform: scale(.01);
}

#zuck-modal.with-effects.animated {
  border-radius: 0;
  transform: scale(1);
  margin-top: 0 !important;
  margin-left: 0 !important;
}

#zuck-modal.with-effects.closed {
  transform: translateY(100%);
}

#zuck-modal .slider {
  position: absolute;
  width: 300vw;
  height: 100%;
  top: 0;
  bottom: 0;
  left: -100vw;
}

#zuck-modal .slider > * {
  position: absolute;
  width: 100vw;
  height: 100%;
  top: 0;
  bottom: 0;
}

#zuck-modal .slider > .previous {
  left: 0;
}

#zuck-modal .slider > .viewing {
  left: 100vw;
}

#zuck-modal .slider > .next {
  left: 200vw;
}

#zuck-modal .slider.animated {
  transition: transform .25s linear, -webkit-transform .25s linear;
}

#zuck-modal.with-cube #zuck-modal-content {
  perspective: 1000vw;
  perspective-origin: 50% 50%;
  overflow: visible;
  transition: all .3s;
  transform: scale(.95);
}

#zuck-modal.with-cube .slider {
  transform-style: preserve-3d;
  transform: rotateY(0);
}

#zuck-modal.with-cube .slider > .previous {
  backface-visibility: hidden;
  transform-origin: center left;
  left: 100vw;
  transform: rotateY(270deg)translateX(-50%);
}

#zuck-modal.with-cube .slider > .viewing {
  backface-visibility: hidden;
  left: 100vw;
  transform: translateZ(50vw);
}

#zuck-modal.with-cube .slider > .next {
  backface-visibility: hidden;
  transform-origin: top right;
  left: 100vw;
  transform: rotateY(-270deg)translateX(50%);
}

#zuck-modal-content .story-viewer.paused.longPress .head, #zuck-modal-content .story-viewer.paused.longPress .slides-pointers, #zuck-modal-content .story-viewer.paused.longPress .tip {
  opacity: 0;
}

#zuck-modal-content .story-viewer.viewing:not(.paused):not(.stopped) .slides-pointers > * > .active > .progress {
  -webkit-animation-play-state: running;
  animation-play-state: running;
}

#zuck-modal-content .story-viewer.next {
  z-index: 10;
}

#zuck-modal-content .story-viewer.viewing {
  z-index: 5;
}

#zuck-modal-content .story-viewer.previous {
  z-index: 0;
}

#zuck-modal-content .story-viewer.muted .tip.muted, #zuck-modal-content .story-viewer.loading .head .loading {
  display: block;
}

#zuck-modal-content .story-viewer.loading .head .right .time, #zuck-modal-content .story-viewer.loading .head .right .close {
  display: none;
}

#zuck-modal-content .story-viewer .slides-pagination span {
  position: absolute;
  color: #fff;
  z-index: 1;
  text-align: center;
  width: 48px;
  margin: 6px;
  font-size: 48px;
  line-height: 48px;
  top: 50vh;
  transform: translateY(-50%);
}

#zuck-modal-content .story-viewer .slides-pagination .previous {
  left: 0;
}

#zuck-modal-content .story-viewer .slides-pagination .next {
  right: 0;
}

#zuck-modal-content .story-viewer .slides-pointers {
  display: table;
  table-layout: fixed;
  border-spacing: 6px;
  border-collapse: separate;
  position: absolute;
  z-index: 100020;
  width: 100vh;
  top: 0;
  left: calc(50vw - 50vh);
  right: calc(50vw - 50vh);
}

#zuck-modal-content .story-viewer .slides-pointers > * {
  display: table-row;
}

#zuck-modal-content .story-viewer .slides-pointers > * > * {
  display: table-cell;
  background: #ffffff80;
  border-radius: 2px;
}

#zuck-modal-content .story-viewer .slides-pointers > * > .seen {
  background: #fff;
}

#zuck-modal-content .story-viewer .slides-pointers > * > * > .progress {
  display: block;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-play-state: paused;
  animation-play-state: paused;
  background: #fff;
  border-radius: 2px;
  width: auto;
  max-width: 0;
  height: 2px;
}

#zuck-modal-content .story-viewer .slides-pointers > * > .active > .progress {
  -webkit-animation-name: zuckSlideTime;
  animation-name: zuckSlideTime;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
}

#zuck-modal-content .story-viewer .head {
  position: absolute;
  z-index: 100010;
  color: #fff;
  text-shadow: 1px 1px 1px #00000059, 1px 0 1px #00000059;
  height: 56px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 56px;
  left: 0;
  right: 0;
}

#zuck-modal-content .story-viewer .head .item-preview {
  overflow: hidden;
  vertical-align: top;
  display: inline-block;
  vertical-align: middle;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  margin-right: 9px;
}

#zuck-modal-content .story-viewer .head .item-preview img {
  display: block;
  box-sizing: border-box;
  object-fit: cover;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
}

#zuck-modal-content .story-viewer .head .time {
  opacity: .75;
  font-size: 13px;
  font-weight: 500;
}

#zuck-modal-content .story-viewer .head .left {
  display: inline-block;
  margin: 6px 0;
  line-height: 1 !important;
}

#zuck-modal-content .story-viewer .head .left .info {
  display: inline-block;
  vertical-align: middle;
  max-width: 30vw;
}

#zuck-modal-content .story-viewer .head .left .info > * {
  display: inline-block;
  width: 100%;
  line-height: 21px;
}

#zuck-modal-content .story-viewer .head .left .info .name {
  font-weight: 500;
}

#zuck-modal-content .story-viewer .head .right {
  float: right;
}

#zuck-modal-content .story-viewer .head .right .close, #zuck-modal-content .story-viewer .head .back {
  appearance: none;
  color: inherit;
  cursor: pointer;
  text-align: center;
  background: none;
  border: 0;
  width: 48px;
  height: 48px;
  padding: 0;
  font-family: inherit;
  font-size: 42px;
  line-height: 48px;
}

#zuck-modal-content .story-viewer .head .left .back {
  display: none;
  width: 24px;
  margin: -9px -6px 0;
}

#zuck-modal-content .story-viewer .head .right .time {
  display: none;
}

#zuck-modal-content .story-viewer .head .loading {
  display: none;
  box-sizing: border-box;
  -webkit-animation: zuckLoading 1s infinite linear;
  animation: zuckLoading 1s infinite linear;
  border: 4px solid #fff3;
  border-top-color: #fff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin: 9px 0;
}

#zuck-modal-content .story-viewer .head, #zuck-modal-content .story-viewer .slides-pointers, #zuck-modal-content .story-viewer .tip {
  transition: opacity .5s;
}

#zuck-modal-content .story-viewer .slides .item {
  display: none;
  overflow: hidden;
  background: #000;
}

#zuck-modal-content .story-viewer .slides .item:before {
  z-index: 4;
  content: "";
  position: absolute;
  background: none;
  inset: 0;
}

#zuck-modal-content .story-viewer .slides .item > .media {
  position: absolute;
  object-fit: contain;
  height: 100%;
  margin: auto;
  left: 50%;
  transform: translateX(-50%);
}

#zuck-modal-content .story-viewer .slides .item.active, #zuck-modal-content .story-viewer .slides .item.active .tip.link {
  display: block;
}

#zuck-modal-content .story-viewer .tip {
  z-index: 5;
  text-decoration: none;
  display: none;
  position: absolute;
  z-index: 1000;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  background: #00000080;
  border-radius: 24px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
}

#zuck-modal.rtl {
  direction: rtl;
  left: auto;
  right: 0;
}

#zuck-modal.rtl.with-effects {
  transform-origin: top right;
}

#zuck-modal.rtl.with-effects.animated {
  margin-left: auto !important;
  margin-right: 0 !important;
}

#zuck-modal.rtl .slider {
  left: auto;
  right: -100vw;
}

#zuck-modal.rtl .slider > .previous {
  left: auto;
  right: 0;
  transform: rotateY(-270deg)translateX(50%);
}

#zuck-modal.rtl .slider > .viewing {
  left: auto;
  right: 100vw;
}

#zuck-modal.rtl .slider > .next {
  left: auto;
  right: 200vw;
}

#zuck-modal.rtl.with-cube .slider > .previous {
  transform-origin: center right;
  left: auto;
  right: 100vw;
}

#zuck-modal.rtl.with-cube .slider > .viewing {
  left: auto;
  right: 100vw;
  transform: translateZ(50vw);
}

#zuck-modal.rtl.with-cube .slider > .next {
  transform-origin: top left;
  left: auto;
  right: 100vw;
  transform: rotateY(270deg)translateX(-50%);
}

#zuck-modal.rtl #zuck-modal-content .story-viewer .slides-pagination .previous {
  left: auto;
  right: 0;
}

#zuck-modal.rtl #zuck-modal-content .story-viewer .slides-pagination .next {
  left: 0;
  right: auto;
}

#zuck-modal.rtl #zuck-modal-content .story-viewer .head .item-preview {
  margin-left: 9px;
  margin-right: auto;
}

#zuck-modal.rtl #zuck-modal-content .story-viewer .head .right {
  float: left;
}

#zuck-modal.rtl #zuck-modal-content .story-viewer .tip {
  left: auto;
  right: 50%;
  transform: translateX(50%);
}

@media (max-width: 1024px) {
  #zuck-modal-content .story-viewer .head {
    top: 3px;
  }

  #zuck-modal-content .story-viewer .head .loading {
    width: 24px;
    height: 24px;
    margin: 6px 0;
  }

  #zuck-modal-content .story-viewer .head .item-preview {
    width: 30px;
    height: 30px;
    margin-right: 9px;
  }

  #zuck-modal-content .story-viewer .head .left {
    margin: 15px 0;
    font-size: 15px;
  }

  #zuck-modal-content .story-viewer .head .left > div {
    line-height: 30px;
  }

  #zuck-modal-content .story-viewer .head .right .time {
    display: block;
    white-space: nowrap;
    margin: 15px 0;
    font-size: 15px;
    line-height: 30px;
  }

  #zuck-modal-content .story-viewer .head .left > .back {
    display: none;
    z-index: 20;
    visibility: visible;
    position: absolute;
    text-align: left;
    vertical-align: top;
    text-shadow: none;
    background: none;
    width: 24px;
    height: 42px;
    line-height: 36px;
  }

  #zuck-modal-content .story-viewer.with-back-button .head .left > .back {
    display: block;
  }

  #zuck-modal-content .story-viewer.with-back-button .head .left .item-preview {
    margin-left: 18px;
  }

  #zuck-modal-content .story-viewer .slides-pointers {
    width: 100vw;
    left: 0;
    right: 0;
  }

  #zuck-modal-content .story-viewer .tip {
    padding: 6px 12px;
    font-size: 14px;
  }

  #zuck-modal-content .story-viewer .head .left .time, #zuck-modal-content .story-viewer .head .right .close {
    display: none;
  }

  #zuck-modal.rtl #zuck-modal-content .story-viewer .head .item-preview {
    margin-left: 9px;
    margin-right: auto;
  }

  #zuck-modal.rtl #zuck-modal-content .story-viewer .head .left > .back {
    text-align: right;
  }

  #zuck-modal.rtl #zuck-modal-content .story-viewer.with-back-button .head .left .item-preview {
    margin-left: auto;
    margin-right: 18px;
  }
}

.stories.carousel {
  white-space: nowrap;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;
  user-select: none;
}

.stories.carousel::-webkit-scrollbar {
  background: none;
  width: 0;
}

.stories.carousel .story {
  display: inline-block;
  vertical-align: top;
  width: 18vw;
  max-width: 90px;
  margin: 0 6px;
}

.stories.carousel .story:first-child {
  margin-left: 0;
}

.stories.carousel .story:last-child {
  margin-right: 0;
}

.stories.carousel .story > .item-link {
  cursor: pointer;
  text-align: center;
  display: block;
}

.stories.carousel .story > .item-link:active > .item-preview {
  transform: scale(.9);
}

.stories.carousel .story > .item-link > .item-preview {
  display: block;
  box-sizing: border-box;
  overflow: hidden;
  height: 18vw;
  max-height: 90px;
  transition: transform .2s;
  font-size: 0;
}

.stories.carousel .story > .item-link > .item-preview img {
  display: block;
  box-sizing: border-box;
  object-fit: cover;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
}

.stories.carousel .story > .item-link > .info {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  margin-top: .5em;
  line-height: 1.2em;
}

.stories.carousel .story > .item-link > .info .name {
  font-weight: 300;
}

.stories.carousel .story > .item-link > .info .time, .stories.carousel .story > .items {
  display: none;
}

.stories.list {
  white-space: nowrap;
  overflow: auto;
}

.stories.list .story {
  display: block;
  width: auto;
  margin: 6px;
  padding-bottom: 6px;
}

.stories.list .story > .item-link {
  text-align: left;
  display: block;
}

.stories.list .story > .item-link > .item-preview {
  vertical-align: top;
  display: inline-block;
  box-sizing: border-box;
  overflow: hidden;
  width: 42px;
  max-width: 42px;
  height: 42px;
  margin-right: 12px;
  font-size: 0;
}

.stories.list .story > .item-link > .item-preview img {
  display: block;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
}

.stories.list .story > .item-link > .info {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: top;
  line-height: 1.6em;
}

.stories.list .story > .item-link > .info .name {
  display: block;
  font-weight: 500;
}

.stories.list .story > .item-link > .info .time {
  display: inline-block;
}

.stories.list .story > .items {
  display: none;
}

.stories.rtl {
  direction: rtl;
}

.stories.rtl.carousel .story:first-child {
  margin-left: auto;
  margin-right: 0;
}

.stories.rtl.carousel .story:last-child {
  margin-left: 0;
  margin-right: auto;
}

.stories.rtl.list .story > .item-link {
  text-align: right;
}

.stories.rtl.list .story > .item-link > .item-preview {
  margin-left: 12px;
  margin-right: auto;
}

#zuck-modal .ifs-story-products {
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: max(52px, calc(env(safe-area-inset-bottom)  + 44px));
  z-index: 100010;
  box-sizing: border-box;
  width: calc(100% - 24px);
  max-width: 560px;
  margin: 0 auto;
}

#zuck-modal .ifs-story-products--stack {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 2px;
}

#zuck-modal .ifs-story-products--single {
  display: block;
}

#zuck-modal .ifs-story-product {
  display: grid;
  grid-template-columns: 58px minmax(0, 1fr) auto;
  color: #111;
  text-decoration: none;
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  background: #fffffff5;
  border: 1px solid #ffffffb8;
  border-radius: 15px;
  align-items:  center;
  gap: 11px;
  min-width: 0;
  padding: 7px;
  transition: border-color .15s, transform .15s;
}

#zuck-modal .ifs-story-products--single .ifs-story-product {
  width: min(100%, 420px);
  margin: 0 auto;
}

@media (hover: hover) {
  #zuck-modal .ifs-story-product:hover {
    border-color: #fffffff5;
    transform: translateY(-1px);
  }
}

#zuck-modal .ifs-story-product:active {
  transform: scale(.98);
}

#zuck-modal .ifs-sp-img {
  display: grid;
  overflow: hidden;
  background: #f0f0f2;
  border-radius: 11px;
  place-items:  center;
  width: 58px;
  height: 58px;
}

#zuck-modal .ifs-sp-img img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

#zuck-modal .ifs-sp-placeholder {
  display: grid;
  color: #8b8b91;
  place-items:  center;
  width: 100%;
  height: 100%;
}

#zuck-modal .ifs-sp-placeholder svg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.6;
  width: 22px;
  height: 22px;
}

#zuck-modal .ifs-sp-info {
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
}

#zuck-modal .ifs-sp-info > strong {
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 12px;
  font-weight: 650;
  line-height: 1.3;
}

#zuck-modal .ifs-sp-info .ifs-product-price {
  font-size: 11px;
}

#zuck-modal .ifs-sp-info .ifs-product-rating {
  line-height: 1;
}

#zuck-modal .ifs-sp-cta {
  display: inline-flex;
  color: #fff;
  background: #111;
  border-radius: 999px;
  justify-content: center;
  align-items:  center;
  gap: 2px;
  min-height: 36px;
  padding: 7px 11px;
  font-size: 11px;
  font-weight: 650;
}

#zuck-modal .ifs-sp-cta svg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2;
  width: 13px;
  height: 13px;
}

@media (max-width: 420px) {
  #zuck-modal .ifs-story-products {
    width: calc(100% - 20px);
    left: 10px;
    right: 10px;
  }

  #zuck-modal .ifs-story-product {
    grid-template-columns: 52px minmax(0, 1fr) 36px;
    gap: 9px;
  }

  #zuck-modal .ifs-sp-img {
    width: 52px;
    height: 52px;
  }

  #zuck-modal .ifs-sp-cta {
    width: 36px;
    min-height: 36px;
    padding: 0;
  }

  #zuck-modal .ifs-sp-cta-text {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    white-space: nowrap;
    width: 1px;
    height: 1px;
  }
}

/* src/vendor/zuck/snapgram.css */
.stories.snapgram .story > .item-link {
  text-decoration: none;
  color: #333;
}

.stories.snapgram .story > .item-link > .item-preview {
  background: radial-gradient(at 70% 70%, #ee583f 8%, #d92d77 42%, #bd3381 58%);
  border-radius: 50%;
  padding: 2px;
}

.stories.snapgram .story > .item-link > .item-preview img {
  border: 3px solid #fff;
  border-radius: 50%;
}

.stories.snapgram .story.seen {
  opacity: .75;
}

.stories.snapgram .story.seen > .item-link > .item-preview {
  background: #999;
}

.stories.snapgram .story.seen > .item-link {
  color: #999 !important;
}

/* src/styles/stories.css */
#stories, .stories, .ifs-stories-slot {
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  max-width: 100%;
  margin: auto auto 20px;
}

.stories.carousel {
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  overscroll-behavior-inline: contain;
  scroll-padding-inline: clamp(10px, 2vw, 18px);
  scrollbar-width: none;
  white-space: normal;
  justify-content: safe center;
  align-items:  flex-start;
}

.stories.carousel .story {
  flex: none;
}

.stories.carousel .story:first-child {
  margin-left: clamp(10px, 2vw, 18px);
}

.stories.carousel .story:last-child {
  margin-right: clamp(10px, 2vw, 18px);
}

.ifs-stories-slot {
  min-height: 110px;
}

#stories.ifs-without-title, .ifs-stories-slot.ifs-without-title {
  margin-top: clamp(24px, 4vw, 42px);
}

div.ifs-stories-slot:empty {
  display: block;
}

.stories.carousel .story > .item-link {
  font: inherit;
  background: none;
  border: 0;
  padding: 0;
}

.stories.carousel .story > .item-link[data-ifs-restored-focus], .stories.carousel .story > .item-link[data-ifs-restored-focus] > .item-preview {
  outline: none !important;
  box-shadow: none !important;
}

.stories.carousel .story > .item-link:focus:not(:focus-visible) {
  outline: none !important;
  box-shadow: none !important;
}

.stories.carousel .story > .item-link:focus:not(:focus-visible) > .item-preview {
  outline: none !important;
  box-shadow: none !important;
}

.stories.carousel .story > .item-link > .info .name {
  font-size: 10px;
}

.stories.carousel .story > .item-link > .info {
  margin-top: 0 !important;
}

#zuck-modal .tip {
  margin-bottom: 80px;
  font-weight: bold;
  padding: 5px 10px !important;
  font-size: 13px !important;
}

.stories.snapgram .story > .item-link {
  text-decoration: none;
  color: #333;
}

.stories.snapgram .story > .item-link > .item-preview {
  background: radial-gradient(at 70% 70%, #ee583f 8%, #d92d77 42%, #bd3381 58%);
  border-radius: 50%;
  padding: 2px;
  width: 82px !important;
  height: 82px !important;
}

.stories.snapgram .story > .item-link > .item-preview img {
  border: 3px solid #fff;
  border-radius: 50%;
}

.stories.snapgram .story.seen {
  opacity: .75;
}

.stories.snapgram .story.seen > .item-link > .item-preview {
  background: #999;
}

.stories.snapgram .story.seen > .item-link {
  color: #999 !important;
}

@media (max-width: 1024px) {
  #zuck-modal-content .story-viewer .head .right .close {
    display: block !important;
  }
}

#zuck-modal-content .story-viewer .head .left .time, #stories.ifs-highlights-mode .story > .item-link > .info .time, body.ifs-highlights-mode #zuck-modal-content .story-viewer .head .time {
  display: none !important;
}

@media screen and (max-width: 767px) {
  .stories.carousel .story {
    width: 22vw;
    max-width: -moz-fit-content;
    max-width: fit-content;
  }
}

/* src/styles/title.css */
.instastory-title {
  width: 100%;
  margin: 0;
  font-size: 1.4em;
  line-height: 1.3;
}

.ifs-title-markup a {
  color: inherit;
  text-decoration: inherit;
}

.ifs-title-markup img {
  display: inline-block;
  vertical-align: middle;
  width: auto;
  max-width: min(100%, 360px);
  height: auto;
  max-height: 100px;
}

.ifs-title-container {
  container-type: inline-size;
}

.ifs-title {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  margin: clamp(28px, 5vw, 54px) auto clamp(18px, 3vw, 28px);
  padding-inline-start: clamp(12px, 3vw, 32px);
  padding-inline-end: clamp(12px, 3vw, 32px);
}

.ifs-title--center {
  text-align: center;
  align-items:  center;
}

.ifs-title--left {
  text-align: left;
  align-items:  flex-start;
}

.ifs-title--classic .instastory-title {
  display: inline-flex;
  align-items:  center;
  justify-content: inherit;
  gap: 10px;
  width: auto;
}

.ifs-title--center.ifs-title--classic .instastory-title {
  justify-content: center;
}

.ifs-subtitle {
  opacity: .9;
  margin: 0;
  font-size: .95em;
}

.ifs-title--stacked {
  gap: 8px;
}

.ifs-title--stacked .ifs-follow-btn {
  margin-top: 8px;
}

.ifs-title--profile {
  text-align: left;
  background: #ffffffe0;
  border: 1px solid #12121217;
  border-radius: clamp(16px, 2vw, 24px);
  flex-direction: row;
  align-items:  center;
  gap: clamp(12px, 2vw, 20px);
  width: min(100% - 24px, 880px);
  padding: clamp(16px, 2.5vw, 24px);
}

.ifs-title--profile.ifs-title--center {
  justify-content: center;
}

.ifs-title--profile .ifs-title-profile-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.ifs-title--profile .instastory-title {
  font-size: 1.15em;
}

.ifs-title--profile .ifs-follow-btn {
  margin-left: 6px;
}

.ifs-title-profile-icon {
  display: flex;
  overflow: hidden;
  border-radius: 50%;
  flex: none;
  align-items:  center;
}

.ifs-title--profile .ifs-title-profile-icon {
  display: grid;
  background: linear-gradient(#fff, #fff) padding-box padding-box, linear-gradient(45deg, #f09433, #dc2743 52%, #7557d9) border-box;
  border: 2px solid #0000;
  place-items:  center;
  width: 52px;
  height: 52px;
}

.ifs-profile-picture {
  display: block;
  border-radius: inherit;
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.ifs-title--profile-compact {
  text-align: left;
  background: linear-gradient(135deg, #fffffff5, #f8f8faf0);
  border: 1px solid #1212121a;
  border-radius: 18px;
  flex-direction: row;
  align-items:  center;
  gap: 14px;
  width: min(100% - 24px, 900px);
  padding: 12px 14px;
}

.ifs-title--profile-compact .ifs-title-profile-icon {
  display: grid;
  background: linear-gradient(#fff, #fff) padding-box padding-box, linear-gradient(45deg, #f09433, #dc2743 52%, #7557d9) border-box;
  border: 2px solid #0000;
  border-radius: 50%;
  flex: none;
  place-items:  center;
  width: 50px;
  height: 50px;
}

.ifs-title--profile-compact .ifs-title-profile-text {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 2px;
  min-width: 0;
}

.ifs-title--profile-compact .instastory-title {
  letter-spacing: -.015em;
  font-size: 1.05em;
  font-weight: 650;
  line-height: 1.2;
}

.ifs-title--profile-compact .ifs-subtitle {
  overflow: hidden;
  opacity: .66;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ifs-title--profile-compact .ifs-profile-stats {
  gap: 14px;
  margin-top: 4px;
}

.ifs-title--profile-compact .ifs-profile-stats small {
  opacity: .62;
}

.ifs-title--profile-compact .ifs-follow-btn {
  border-radius: 999px;
  justify-content: center;
  min-height: 40px;
  margin-left: auto;
  padding: 8px 17px;
  font-size: 13px;
}

.ifs-title--profile-centered {
  text-align: center;
  background: linear-gradient(135deg, #fff5f8eb, #f7f4ffeb);
  border: 1px solid #7c499f1f;
  border-radius: clamp(20px, 3vw, 30px);
  align-items:  center;
  width: min(100% - 24px, 680px);
  padding: clamp(22px, 4vw, 34px);
}

.ifs-title--profile-centered .ifs-title-profile-icon {
  display: grid;
  background: linear-gradient(#fff, #fff) padding-box padding-box, linear-gradient(45deg, #f09433, #dc2743 52%, #7557d9) border-box;
  border: 2px solid #0000;
  border-radius: 50%;
  place-items:  center;
  width: 64px;
  height: 64px;
}

.ifs-title--profile-centered .instastory-title {
  width: auto;
  margin-top: 2px;
  font-size: clamp(1.2em, 2vw, 1.55em);
}

.ifs-title--profile-centered .ifs-profile-stats {
  margin: 6px 0 4px;
}

.ifs-title--profile-centered .ifs-follow-btn {
  margin-top: 4px;
}

.ifs-title--banner {
  color: #fff;
  background: linear-gradient(115deg, #f09433 0%, #e6683c 22%, #dc2743 48%, #cc2366 68%, #7557d9 100%);
  border-radius: clamp(18px, 2vw, 26px);
  width: min(100% - 24px, 1120px);
  padding: 2px;
}

.ifs-title-banner-surface {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  box-sizing: border-box;
  background: radial-gradient(circle at 12% -90%, #dc274370, #0000 45%), radial-gradient(circle at 92% 180%, #515bd447, #0000 42%), linear-gradient(135deg, #19191c 0%, #0f0f11 58%, #171319 100%);
  border-radius: calc(clamp(18px, 2vw, 26px) - 2px);
  width: 100%;
  padding: clamp(18px, 2.5vw, 28px);
}

.ifs-title--banner .ifs-title-row {
  position: relative;
  z-index: 1;
}

.ifs-banner-identity {
  display: flex;
  flex: auto;
  align-items:  center;
  gap: clamp(12px, 2vw, 18px);
  min-width: 0;
}

.ifs-banner-icon {
  display: grid;
  overflow: hidden;
  color: #111;
  background: #fff;
  border: 1px solid #ffffffe0;
  border-radius: 16px;
  flex: none;
  place-items:  center;
  width: clamp(46px, 5vw, 58px);
  height: clamp(46px, 5vw, 58px);
}

.ifs-title--banner .ifs-title-kicker {
  overflow: hidden;
  color: #ffffffa3;
  letter-spacing: .025em;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: .76em;
  font-weight: 600;
  line-height: 1.2;
}

.ifs-title--banner .instastory-title {
  color: #fff;
  letter-spacing: -.025em;
  width: auto;
  font-size: clamp(1.25em, 2.4vw, 1.95em);
  font-weight: 650;
  line-height: 1.08;
}

.ifs-title--banner .ifs-title-row-text {
  gap: 5px;
  min-width: 0;
}

.ifs-title--banner .ifs-subtitle {
  color: #ffffffb3;
  max-width: 58ch;
  line-height: 1.4;
}

.ifs-banner-actions {
  display: flex;
  flex: none;
  align-items:  center;
  gap: clamp(14px, 2vw, 24px);
}

.ifs-title--banner .ifs-profile-stats {
  border-right: 1px solid #ffffff29;
  gap: 14px;
  margin: 0;
  padding-right: clamp(14px, 2vw, 24px);
}

.ifs-title--banner .ifs-profile-stats strong {
  color: #fff;
}

.ifs-title--banner .ifs-profile-stats small {
  color: #ffffff9e;
}

.ifs-title--banner .ifs-follow-btn {
  border-radius: 999px;
  justify-content: center;
  min-height: 42px;
  padding-inline-start: 20px;
  padding-inline-end: 20px;
}

.ifs-title--banner .ifs-follow-btn--solid {
  color: #111;
  background: #fff;
}

.ifs-title--banner .ifs-follow-btn--outline {
  color: #fff;
  border-color: #ffffffb8;
}

.ifs-follow-btn {
  display: inline-flex;
  text-decoration: none;
  cursor: pointer;
  border-radius: 6px;
  align-items:  center;
  gap: 8px;
  padding: 8px 18px;
  transition: opacity .15s ease-in-out;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
}

.ifs-follow-btn:hover {
  opacity: .85;
}

.ifs-follow-btn--solid {
  color: #fff;
  background: #111;
}

.ifs-follow-btn--outline {
  color: inherit;
  background: none;
  border: 1.5px solid;
}

.ifs-follow-btn--pill {
  color: #fff;
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  border-radius: 999px;
}

.ifs-profile-stats {
  display: flex;
  align-items:  center;
  gap: 18px;
  margin-top: 8px;
}

.ifs-profile-stats span {
  display: flex;
  align-items: baseline;
  gap: 5px;
}

.ifs-profile-stats strong {
  font-variant-numeric: tabular-nums;
  font-size: .95em;
}

.ifs-profile-stats small {
  opacity: .9;
  font-size: .75em;
}

.ifs-title-row {
  display: flex;
  text-align: left;
  justify-content: space-between;
  align-items:  center;
  gap: 16px;
  width: 100%;
}

.ifs-title-row-text {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.ifs-title--follow-inline .instastory-title .ifs-follow-btn {
  margin-left: 6px;
  padding: 6px 14px;
  font-size: 13px;
}

.ifs-title--profile.ifs-title--follow-apart {
  justify-content: flex-start;
}

.ifs-title--profile.ifs-title--follow-apart .ifs-follow-btn {
  margin-left: auto;
}

@media (max-width: 560px) {
  .ifs-title--profile {
    flex-wrap: wrap;
    align-items:  flex-start;
  }

  .ifs-title--profile .ifs-title-profile-text {
    flex: 1;
  }

  .ifs-title--profile .ifs-follow-btn {
    justify-content: center;
    width: 100%;
    margin: 4px 0 0;
  }

  .ifs-title--banner .ifs-title-row {
    flex-direction: column;
    align-items: stretch;
  }

  .ifs-banner-actions {
    border-top: 1px solid #ffffff21;
    justify-content: space-between;
    width: 100%;
    padding-top: 14px;
  }

  .ifs-title--banner .ifs-profile-stats {
    border-right: 0;
    padding-right: 0;
  }

  .ifs-title--banner .ifs-follow-btn {
    min-height: 48px;
  }
}

@media (max-width: 480px) {
  .ifs-title--profile-compact {
    flex-wrap: wrap;
    padding: 12px;
  }

  .ifs-title--profile-compact .ifs-title-profile-icon {
    width: 46px;
    height: 46px;
  }

  .ifs-title--profile-compact .ifs-title-profile-text {
    flex: 1;
  }

  .ifs-title--profile-compact .ifs-follow-btn {
    width: 100%;
    min-height: 48px;
    margin: 4px 0 0;
  }
}

@media (max-width: 410px) {
  .ifs-title--banner {
    padding: 18px;
  }

  .ifs-banner-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .ifs-title--banner .ifs-follow-btn {
    width: 100%;
  }
}

@container (width <= 620px) {
  .ifs-title--banner .ifs-title-row {
    align-items: stretch;
    flex-direction: column;
  }

  .ifs-banner-actions {
    width: 100%;
    justify-content: space-between;
    padding-top: 14px;
    border-top: 1px solid #ffffff21;
  }

  .ifs-title--banner .ifs-profile-stats {
    padding-right: 0;
    border-right: 0;
  }

  .ifs-title--banner .ifs-follow-btn {
    min-height: 48px;
  }
}

@container (width <= 480px) {
  .ifs-title--profile-compact {
    flex-wrap: wrap;
    padding: 12px;
  }

  .ifs-title--profile-compact .ifs-title-profile-icon {
    width: 46px;
    height: 46px;
  }

  .ifs-title--profile-compact .ifs-title-profile-text {
    flex: 1;
  }

  .ifs-title--profile-compact .ifs-follow-btn {
    width: 100%;
    min-height: 48px;
    margin: 4px 0 0;
  }
}

@container (width <= 410px) {
  .ifs-title--banner {
    padding: 18px;
  }

  .ifs-banner-actions {
    align-items: stretch;
    flex-direction: column;
  }

  .ifs-title--banner .ifs-follow-btn {
    width: 100%;
  }
}

/* src/styles/modal.css */
.ifs-modal-overlay {
  position: fixed;
  z-index: 1000;
  display: grid;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background: #08090bd6;
  place-items:  center;
  padding: clamp(14px, 4vw, 48px);
  inset: 0;
}

.ifs-modal-overlay:focus {
  outline: none;
}

.ifs-modal-content {
  position: relative;
  overflow: hidden;
  background: #fff;
  border: 0;
  border-radius: 22px;
  width: min(1080px, 100%);
  height: min(780px, 100dvh - 48px);
}

.ifs-modal-body {
  display: grid;
  grid-template-columns: minmax(0, 1.45fr) minmax(320px, .75fr);
  height: 100%;
  min-height: 0;
}

.ifs-modal-close {
  position: fixed;
  z-index: 4;
  display: grid;
  color: #fff;
  cursor: pointer;
  background: none;
  border: 0;
  border-radius: 999px;
  place-items:  center;
  width: 42px;
  height: 42px;
  padding: 0;
  top: 10px;
  right: 10px;
}

.ifs-modal-close svg {
  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  width: 28px;
  height: 28px;
}

.ifs-modal-media {
  position: relative;
  display: flex;
  overflow: hidden;
  background: #090909;
  justify-content: center;
  align-items:  center;
  min-width: 0;
  height: 100%;
  min-height: 0;
}

.ifs-modal-media > img, .ifs-modal-media > video {
  display: block;
  object-fit: contain;
  width: auto;
  max-width: 100%;
  height: auto;
  max-height: 100%;
}

.ifs-modal-details {
  display: flex;
  color: #171717;
  background: #fff;
  border-left: 1px solid #ececef;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
}

.ifs-modal-header {
  display: flex;
  border-bottom: 1px solid #ececef;
  justify-content: space-between;
  align-items:  center;
  gap: 12px;
  min-height: 72px;
  padding: 15px 18px;
}

.ifs-modal-identity {
  display: flex;
  align-items:  center;
  gap: 10px;
  min-width: 0;
}

.ifs-modal-identity > span:last-child {
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
}

.ifs-modal-identity strong {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  line-height: 1.25;
}

.ifs-modal-identity small {
  opacity: .55;
  font-size: 11px;
}

.ifs-modal-avatar {
  display: grid;
  color: #fff;
  background: linear-gradient(135deg, #f6a33a, #dc2f74 52%, #6b4bd5);
  border-radius: 50%;
  flex: none;
  place-items:  center;
  width: 36px;
  height: 36px;
  font-size: 13px;
  font-weight: 700;
}

.ifs-modal-follow {
  color: #181818;
  text-decoration: none;
  border: 1px solid #181818;
  border-radius: 999px;
  flex: none;
  padding: 7px 13px;
  transition: background .15s, color .15s;
  font-size: 12px;
  font-weight: 650;
  line-height: 1;
}

.ifs-modal-follow:hover {
  color: #fff;
  background: #181818;
}

.ifs-modal-scroll {
  overflow-y: auto;
  overscroll-behavior: contain;
  flex: 1;
  min-height: 0;
  padding: 18px;
}

.ifs-modal-caption {
  border-bottom: 1px solid #ececef;
  margin: 0 0 20px;
  padding: 0 0 18px;
}

.ifs-modal-caption p {
  color: #343434;
  overflow-wrap: anywhere;
  white-space: pre-line;
  margin: 0;
  font-size: 13px;
  line-height: 1.62;
}

.ifs-modal-products {
  flex: none;
  padding: 10px 18px 18px;
}

.ifs-modal-progress {
  display: flex;
  color: #767676;
  font-variant-numeric: tabular-nums;
  border-top: 1px solid #ececef;
  justify-content: space-between;
  align-items:  center;
  gap: 14px;
  min-height: 48px;
  padding: 10px 18px;
  font-size: 11px;
}

.ifs-modal-progress-dots {
  display: flex;
  align-items:  center;
  gap: 5px;
}

.ifs-modal-progress-dots i {
  background: #d6d6d8;
  border-radius: 999px;
  width: 5px;
  height: 5px;
  transition: width .16s, background .16s;
}

.ifs-modal-progress-dots i.is-active {
  background: #171717;
  width: 15px;
}

.ifs-linked-products {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.ifs-linked-products-heading {
  display: flex;
  justify-content: space-between;
  align-items:  center;
  gap: 12px;
}

.ifs-linked-products-heading strong {
  font-size: 13px;
  line-height: 1.3;
}

.ifs-linked-products-heading span {
  display: grid;
  color: #626267;
  font-variant-numeric: tabular-nums;
  background: #f1f1f3;
  border-radius: 999px;
  place-items:  center;
  min-width: 22px;
  height: 22px;
  font-size: 11px;
}

.ifs-linked-products-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.ifs-linked-product-item {
  display: grid;
  grid-template-columns: 66px minmax(0, 1fr) auto;
  color: inherit;
  text-decoration: none;
  background: #fff;
  border: 1px solid #e7e7ea;
  border-radius: 14px;
  align-items:  center;
  gap: 11px;
  padding: 7px;
  transition: border-color .15s, transform .15s;
}

.ifs-linked-product-item:hover {
  border-color: #cacace;
  transform: translateY(-1px);
}

.ifs-product-image {
  display: block;
  overflow: hidden;
  background: #f2f2f3;
  border-radius: 10px;
  width: 66px;
  height: 66px;
}

.ifs-product-image img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.ifs-product-copy {
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
}

.ifs-product-copy > strong {
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 12px;
  font-weight: 650;
  line-height: 1.35;
}

.ifs-product-price {
  display: flex;
  color: #444;
  gap: 6px;
  margin: 0;
  font-size: 11px;
  line-height: 1.3;
}

.ifs-product-price del {
  color: #999;
}

.ifs-product-rating {
  display: inline-flex;
  align-items:  center;
  gap: 4px;
}

.ifs-product-rating small {
  color: #8b8b90;
  font-size: 9px;
}

.ifs-product-stars {
  position: relative;
  display: inline-block;
  color: #dcdce0;
  letter-spacing: .5px;
  font-family: Arial, sans-serif;
  font-size: 10px;
  line-height: 1;
}

.ifs-product-stars > span:last-child {
  position: absolute;
  overflow: hidden;
  color: #e5a000;
  white-space: nowrap;
  top: 0;
  left: 0;
}

.ifs-product-shop {
  display: inline-flex;
  color: #252525;
  align-items:  center;
  gap: 2px;
  padding-right: 5px;
  font-size: 11px;
  font-weight: 650;
}

.ifs-product-shop svg {
  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
  width: 14px;
  height: 14px;
}

.ifs-product-skeleton {
  display: grid;
  grid-template-columns: 66px 1fr;
  border: 1px solid #ededee;
  border-radius: 14px;
  align-items:  center;
  gap: 11px;
  padding: 7px;
}

.ifs-product-skeleton > span:first-child {
  background: #ededee;
  border-radius: 10px;
  width: 66px;
  height: 66px;
}

.ifs-product-skeleton > span:last-child {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.ifs-product-skeleton i {
  display: block;
  background: #ededee;
  border-radius: 5px;
  width: 78%;
  height: 10px;
}

.ifs-product-skeleton i:last-child {
  width: 42%;
}

.ifs-modal-nav {
  position: fixed;
  z-index: 3;
  display: grid;
  color: #fff;
  cursor: pointer;
  background: #fff3;
  border: 0;
  border-radius: 50%;
  place-items:  center;
  width: 42px;
  height: 42px;
  padding: 0;
  transition: background .15s, transform .15s;
  top: 50%;
  transform: translateY(-50%);
}

.ifs-modal-nav:hover {
  background: #fff6;
  transform: translateY(-50%)scale(1.05);
}

.ifs-modal-prev {
  left: 20px;
}

.ifs-modal-next {
  right: 20px;
}

.ifs-modal-nav-svg {
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  width: 20px;
  height: 20px;
}

.ifs-video-player {
  position: relative;
  display: flex;
  cursor: pointer;
  background: #000;
  justify-content: center;
  align-items:  center;
  width: 100%;
  height: 100%;
}

.ifs-video-player video {
  display: block;
  object-fit: contain;
  width: auto;
  max-width: 100%;
  height: auto;
  max-height: 100%;
}

.ifs-video-controls {
  position: absolute;
  display: flex;
  opacity: 0;
  background: linear-gradient(#0000, #000000b8);
  align-items:  center;
  gap: 10px;
  padding: 36px 70px 14px;
  transition: opacity .18s;
  bottom: 0;
  left: 0;
  right: 0;
}

.ifs-video-player:hover .ifs-video-controls, .ifs-video-player:focus-within .ifs-video-controls {
  opacity: 1;
}

.ifs-video-btn {
  display: flex;
  cursor: pointer;
  background: none;
  border: 0;
  flex: none;
  justify-content: center;
  align-items:  center;
  padding: 4px;
}

.ifs-video-progress {
  overflow: hidden;
  cursor: pointer;
  background: #ffffff4d;
  border-radius: 2px;
  flex: 1;
  height: 4px;
}

.ifs-video-progress-bar {
  border-radius: inherit;
  background: #fff;
  height: 100%;
}

@media (max-width: 780px) {
  .ifs-modal-overlay {
    padding: 0;
  }

  .ifs-modal-content {
    border: 0;
    border-radius: 0;
    width: 100%;
    height: 100dvh;
    max-height: 100dvh;
  }

  .ifs-modal-body {
    grid-template-columns: 1fr;
    grid-template-rows: minmax(300px, 58dvh) minmax(0, 42dvh);
    min-height: 100dvh;
    max-height: 100dvh;
  }

  .ifs-modal-details {
    border-top: 1px solid #ececef;
    border-left: 0;
  }

  .ifs-modal-header {
    min-height: 64px;
    padding: 12px 14px;
  }

  .ifs-modal-scroll {
    padding: 14px;
  }

  .ifs-modal-products {
    padding: 8px 14px 14px;
  }

  .ifs-modal-caption {
    margin-bottom: 16px;
    padding-bottom: 14px;
  }

  .ifs-modal-close {
    top: 8px;
    right: 8px;
  }

  .ifs-modal-nav {
    width: 38px;
    height: 38px;
  }

  .ifs-modal-prev {
    left: 10px;
  }

  .ifs-modal-next {
    right: 10px;
  }

  .ifs-video-controls {
    opacity: 1;
    padding: 36px 62px 12px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .ifs-modal-nav, .ifs-modal-follow, .ifs-modal-progress-dots i {
    transition: none;
  }
}
`,document.head.insertBefore(Z,document.head.firstChild)}D8();var a0,_,i1,F8,k0,n1,t1,e1,H1,s0,y0,Z6,z1,L1,O1,U8,o0={},i0=[],H8=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,b0=Array.isArray;function H0(Z,J){for(var Y in J)Z[Y]=J[Y];return Z}function B1(Z){Z&&Z.parentNode&&Z.parentNode.removeChild(Z)}function S0(Z,J,Y){var X,Q,$,q={};for($ in J)$=="key"?X=J[$]:$=="ref"?Q=J[$]:q[$]=J[$];if(arguments.length>2&&(q.children=arguments.length>3?a0.call(arguments,2):Y),typeof Z=="function"&&Z.defaultProps!=null)for($ in Z.defaultProps)q[$]===void 0&&(q[$]=Z.defaultProps[$]);return n0(Z,q,X,Q,null)}function n0(Z,J,Y,X,Q){var $={type:Z,props:J,key:Y,ref:X,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Q==null?++i1:Q,__i:-1,__u:0};return Q==null&&_.vnode!=null&&_.vnode($),$}function z0(Z){return Z.children}function L0(Z,J){this.props=Z,this.context=J}function A0(Z,J){if(J==null)return Z.__?A0(Z.__,Z.__i+1):null;for(var Y;J<Z.__k.length;J++)if((Y=Z.__k[J])!=null&&Y.__e!=null)return Y.__e;return typeof Z.type=="function"?A0(Z):null}function z8(Z){if(Z.__P&&Z.__d){var J=Z.__v,Y=J.__e,X=[],Q=[],$=H0({},J);$.__v=J.__v+1,_.vnode&&_.vnode($),k1(Z.__P,$,J,Z.__n,Z.__P.namespaceURI,32&J.__u?[Y]:null,X,Y==null?A0(J):Y,!!(32&J.__u),Q),$.__v=J.__v,$.__.__k[$.__i]=$,G6(X,$,Q),J.__e=J.__=null,$.__e!=Y&&J6($)}}function J6(Z){if((Z=Z.__)!=null&&Z.__c!=null)return Z.__e=Z.__c.base=null,Z.__k.some(function(J){if(J!=null&&J.__e!=null)return Z.__e=Z.__c.base=J.__e}),J6(Z)}function Y6(Z){(!Z.__d&&(Z.__d=!0)&&k0.push(Z)&&!t0.__r++||n1!=_.debounceRendering)&&((n1=_.debounceRendering)||t1)(t0)}function t0(){try{for(var Z,J=1;k0.length;)k0.length>J&&k0.sort(e1),Z=k0.shift(),J=k0.length,z8(Z)}finally{k0.length=t0.__r=0}}function X6(Z,J,Y,X,Q,$,q,K,W,M,V){var N,j,D,U,H,O,F,L=X&&X.__k||i0,z=J.length;for(W=L8(Y,J,L,W,z),N=0;N<z;N++)(D=Y.__k[N])!=null&&(j=D.__i!=-1&&L[D.__i]||o0,D.__i=N,O=k1(Z,D,j,Q,$,q,K,W,M,V),U=D.__e,D.ref&&j.ref!=D.ref&&(j.ref&&I1(j.ref,null,D),V.push(D.ref,D.__c||U,D)),H==null&&U!=null&&(H=U),(F=!!(4&D.__u))||j.__k===D.__k?(W=Q6(D,W,Z,F),F&&j.__e&&(j.__e=null)):typeof D.type=="function"&&O!==void 0?W=O:U&&(W=U.nextSibling),D.__u&=-7);return Y.__e=H,W}function L8(Z,J,Y,X,Q){var $,q,K,W,M,V=Y.length,N=V,j=0;for(Z.__k=Array(Q),$=0;$<Q;$++)(q=J[$])!=null&&typeof q!="boolean"&&typeof q!="function"?(typeof q=="string"||typeof q=="number"||typeof q=="bigint"||q.constructor==String?q=Z.__k[$]=n0(null,q,null,null,null):b0(q)?q=Z.__k[$]=n0(z0,{children:q},null,null,null):q.constructor===void 0&&q.__b>0?q=Z.__k[$]=n0(q.type,q.props,q.key,q.ref?q.ref:null,q.__v):Z.__k[$]=q,W=$+j,q.__=Z,q.__b=Z.__b+1,K=null,(M=q.__i=O8(q,Y,W,N))!=-1&&(N--,(K=Y[M])&&(K.__u|=2)),K==null||K.__v==null?(M==-1&&(Q>V?j--:Q<V&&j++),typeof q.type!="function"&&(q.__u|=4)):M!=W&&(M==W-1?j--:M==W+1?j++:(M>W?j--:j++,q.__u|=4))):Z.__k[$]=null;if(N)for($=0;$<V;$++)(K=Y[$])!=null&&(2&K.__u)==0&&(K.__e==X&&(X=A0(K)),W6(K,K));return X}function Q6(Z,J,Y,X){var Q,$;if(typeof Z.type=="function"){for(Q=Z.__k,$=0;Q&&$<Q.length;$++)Q[$]&&(Q[$].__=Z,J=Q6(Q[$],J,Y,X));return J}Z.__e!=J&&(X&&(J&&Z.type&&!J.parentNode&&(J=A0(Z)),Y.insertBefore(Z.__e,J||null)),J=Z.__e);do J=J&&J.nextSibling;while(J!=null&&J.nodeType==8);return J}function e0(Z,J){return J=J||[],Z==null||typeof Z=="boolean"||(b0(Z)?Z.some(function(Y){e0(Y,J)}):J.push(Z)),J}function O8(Z,J,Y,X){var Q,$,q,K=Z.key,W=Z.type,M=J[Y],V=M!=null&&(2&M.__u)==0;if(M===null&&K==null||V&&K==M.key&&W==M.type)return Y;if(X>(V?1:0)){for(Q=Y-1,$=Y+1;Q>=0||$<J.length;)if((M=J[q=Q>=0?Q--:$++])!=null&&(2&M.__u)==0&&K==M.key&&W==M.type)return q}return-1}function $6(Z,J,Y){J[0]=="-"?Z.setProperty(J,Y==null?"":Y):Z[J]=Y==null?"":typeof Y!="number"||H8.test(J)?Y:Y+"px"}function Z1(Z,J,Y,X,Q){var $,q;Z:if(J=="style")if(typeof Y=="string")Z.style.cssText=Y;else{if(typeof X=="string"&&(Z.style.cssText=X=""),X)for(J in X)Y&&J in Y||$6(Z.style,J,"");if(Y)for(J in Y)X&&Y[J]==X[J]||$6(Z.style,J,Y[J])}else if(J[0]=="o"&&J[1]=="n")$=J!=(J=J.replace(Z6,"$1")),q=J.toLowerCase(),J=q in Z||J=="onFocusOut"||J=="onFocusIn"?q.slice(2):J.slice(2),Z.l||(Z.l={}),Z.l[J+$]=Y,Y?X?Y[y0]=X[y0]:(Y[y0]=z1,Z.addEventListener(J,$?O1:L1,$)):Z.removeEventListener(J,$?O1:L1,$);else{if(Q=="http://www.w3.org/2000/svg")J=J.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(J!="width"&&J!="height"&&J!="href"&&J!="list"&&J!="form"&&J!="tabIndex"&&J!="download"&&J!="rowSpan"&&J!="colSpan"&&J!="role"&&J!="popover"&&J in Z)try{Z[J]=Y==null?"":Y;break Z}catch(K){}typeof Y=="function"||(Y==null||Y===!1&&J[4]!="-"?Z.removeAttribute(J):Z.setAttribute(J,J=="popover"&&Y==1?"":Y))}}function q6(Z){return function(J){if(this.l){var Y=this.l[J.type+Z];if(J[s0]==null)J[s0]=z1++;else if(J[s0]<Y[y0])return;return Y(_.event?_.event(J):J)}}}function k1(Z,J,Y,X,Q,$,q,K,W,M){var V,N,j,D,U,H,O,F,L,z,C,x,A,E,T,B,k=J.type;if(J.constructor!==void 0)return null;128&Y.__u&&(W=!!(32&Y.__u),$=[K=J.__e=Y.__e]),(V=_.__b)&&V(J);Z:if(typeof k=="function"){N=q.length;try{if(L=J.props,z=k.prototype&&k.prototype.render,C=(V=k.contextType)&&X[V.__c],x=V?C?C.props.value:V.__:X,Y.__c?F=(j=J.__c=Y.__c).__=j.__E:(z?J.__c=j=new k(L,x):(J.__c=j=new L0(L,x),j.constructor=k,j.render=k8),C&&C.sub(j),j.state||(j.state={}),j.__n=X,D=j.__d=!0,j.__h=[],j._sb=[]),z&&j.__s==null&&(j.__s=j.state),z&&k.getDerivedStateFromProps!=null&&(j.__s==j.state&&(j.__s=H0({},j.__s)),H0(j.__s,k.getDerivedStateFromProps(L,j.__s))),U=j.props,H=j.state,j.__v=J,D)z&&k.getDerivedStateFromProps==null&&j.componentWillMount!=null&&j.componentWillMount(),z&&j.componentDidMount!=null&&j.__h.push(j.componentDidMount);else{if(z&&k.getDerivedStateFromProps==null&&L!==U&&j.componentWillReceiveProps!=null&&j.componentWillReceiveProps(L,x),J.__v==Y.__v||!j.__e&&j.shouldComponentUpdate!=null&&j.shouldComponentUpdate(L,j.__s,x)===!1){J.__v!=Y.__v&&(j.props=L,j.state=j.__s,j.__d=!1),J.__e=Y.__e,J.__k=Y.__k,J.__k.some(function(I){I&&(I.__=J)}),i0.push.apply(j.__h,j._sb),j._sb=[],j.__h.length&&q.push(j);break Z}j.componentWillUpdate!=null&&j.componentWillUpdate(L,j.__s,x),z&&j.componentDidUpdate!=null&&j.__h.push(function(){j.componentDidUpdate(U,H,O)})}if(j.context=x,j.props=L,j.__P=Z,j.__e=!1,A=_.__r,E=0,z)j.state=j.__s,j.__d=!1,A&&A(J),V=j.render(j.props,j.state,j.context),i0.push.apply(j.__h,j._sb),j._sb=[];else do j.__d=!1,A&&A(J),V=j.render(j.props,j.state,j.context),j.state=j.__s;while(j.__d&&++E<25);j.state=j.__s,j.getChildContext!=null&&(X=H0(H0({},X),j.getChildContext())),z&&!D&&j.getSnapshotBeforeUpdate!=null&&(O=j.getSnapshotBeforeUpdate(U,H)),T=V!=null&&V.type===z0&&V.key==null?j6(V.props.children):V,K=X6(Z,b0(T)?T:[T],J,Y,X,Q,$,q,K,W,M),j.base=J.__e,J.__u&=-161,j.__h.length&&q.push(j),F&&(j.__E=j.__=null)}catch(I){if(q.length=N,J.__v=null,W||$!=null){if(I.then){for(J.__u|=W?160:128;K&&K.nodeType==8&&K.nextSibling;)K=K.nextSibling;$!=null&&($[$.indexOf(K)]=null),J.__e=K}else if($!=null)for(B=$.length;B--;)B1($[B])}else J.__e=Y.__e;J.__k==null&&(J.__k=Y.__k||[]),I.then||K6(J),_.__e(I,J,Y)}}else $==null&&J.__v==Y.__v?(J.__k=Y.__k,J.__e=Y.__e):K=J.__e=B8(Y.__e,J,Y,X,Q,$,q,W,M);return(V=_.diffed)&&V(J),128&J.__u?void 0:K}function K6(Z){Z&&(Z.__c&&(Z.__c.__e=!0),Z.__k&&Z.__k.some(K6))}function G6(Z,J,Y){for(var X=0;X<Y.length;X++)I1(Y[X],Y[++X],Y[++X]);_.__c&&_.__c(J,Z),Z.some(function(Q){try{Z=Q.__h,Q.__h=[],Z.some(function($){$.call(Q)})}catch($){_.__e($,Q.__v)}})}function j6(Z){return typeof Z!="object"||Z==null||Z.__b>0?Z:b0(Z)?Z.map(j6):Z.constructor!==void 0?null:H0({},Z)}function B8(Z,J,Y,X,Q,$,q,K,W){var M,V,N,j,D,U,H,O=Y.props||o0,F=J.props,L=J.type;if(L=="svg"?Q="http://www.w3.org/2000/svg":L=="math"?Q="http://www.w3.org/1998/Math/MathML":Q||(Q="http://www.w3.org/1999/xhtml"),$!=null){for(M=0;M<$.length;M++)if((D=$[M])&&"setAttribute"in D==!!L&&(L?D.localName==L:D.nodeType==3)){Z=D,$[M]=null;break}}if(Z==null){if(L==null)return document.createTextNode(F);Z=document.createElementNS(Q,L,F.is&&F),K&&(_.__m&&_.__m(J,$),K=!1),$=null}if(L==null)O===F||K&&Z.data==F||(Z.data=F);else{if($=L=="textarea"&&F.defaultValue!=null?null:$&&a0.call(Z.childNodes),!K&&$!=null)for(O={},M=0;M<Z.attributes.length;M++)O[(D=Z.attributes[M]).name]=D.value;for(M in O)D=O[M],M=="dangerouslySetInnerHTML"?N=D:M=="children"||(M in F)||M=="value"&&("defaultValue"in F)||M=="checked"&&("defaultChecked"in F)||Z1(Z,M,null,D,Q);for(M in F)D=F[M],M=="children"?j=D:M=="dangerouslySetInnerHTML"?V=D:M=="value"?U=D:M=="checked"?H=D:K&&typeof D!="function"||O[M]===D||Z1(Z,M,D,O[M],Q);if(V)K||N&&(V.__html==N.__html||V.__html==Z.innerHTML)||(Z.innerHTML=V.__html),J.__k=[];else if(N&&(Z.innerHTML=""),X6(J.type=="template"?Z.content:Z,b0(j)?j:[j],J,Y,X,L=="foreignObject"?"http://www.w3.org/1999/xhtml":Q,$,q,$?$[0]:Y.__k&&A0(Y,0),K,W),$!=null)for(M=$.length;M--;)B1($[M]);K&&L!="textarea"||(M="value",L=="progress"&&U==null?Z.removeAttribute("value"):U!=null&&(U!==Z[M]||L=="progress"&&!U||L=="option"&&U!=O[M])&&Z1(Z,M,U,O[M],Q),M="checked",H!=null&&H!=Z[M]&&Z1(Z,M,H,O[M],Q))}return Z}function I1(Z,J,Y){try{if(typeof Z=="function"){var X=typeof Z.__u=="function";X&&Z.__u(),X&&J==null||(Z.__u=Z(J))}else Z.current=J}catch(Q){_.__e(Q,Y)}}function W6(Z,J,Y){var X,Q;if(_.unmount&&_.unmount(Z),(X=Z.ref)&&(X.current&&X.current!=Z.__e||I1(X,null,J)),(X=Z.__c)!=null){if(X.componentWillUnmount)try{X.componentWillUnmount()}catch($){_.__e($,J)}X.base=X.__P=X.__n=null}if(X=Z.__k)for(Q=0;Q<X.length;Q++)X[Q]&&W6(X[Q],J,Y||typeof Z.type!="function");Y||B1(Z.__e),Z.__c=Z.__=Z.__e=void 0}function k8(Z,J,Y){return this.constructor(Z,Y)}function X0(Z,J,Y){var X,Q,$,q;J==document&&(J=document.documentElement),_.__&&_.__(Z,J),Q=(X=typeof Y=="function")?null:Y&&Y.__k||J.__k,$=[],q=[],k1(J,Z=(!X&&Y||J).__k=S0(z0,null,[Z]),Q||o0,o0,J.namespaceURI,!X&&Y?[Y]:Q?null:J.firstChild?a0.call(J.childNodes):null,$,!X&&Y?Y:Q?Q.__e:J.firstChild,X,q),G6($,Z,q),Z.props.children=null}a0=i0.slice,_={__e:function(Z,J,Y,X){for(var Q,$,q;J=J.__;)if((Q=J.__c)&&!Q.__)try{if(($=Q.constructor)&&$.getDerivedStateFromError!=null&&(Q.setState($.getDerivedStateFromError(Z)),q=Q.__d),Q.componentDidCatch!=null&&(Q.componentDidCatch(Z,X||{}),q=Q.__d),q)return Q.__E=Q}catch(K){Z=K}throw Z}},i1=0,F8=function(Z){return Z!=null&&Z.constructor===void 0},L0.prototype.setState=function(Z,J){var Y;Y=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=H0({},this.state),typeof Z=="function"&&(Z=Z(H0({},Y),this.props)),Z&&H0(Y,Z),Z!=null&&this.__v&&(J&&this._sb.push(J),Y6(this))},L0.prototype.forceUpdate=function(Z){this.__v&&(this.__e=!0,Z&&this.__h.push(Z),Y6(this))},L0.prototype.render=z0,k0=[],t1=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,e1=function(Z,J){return Z.__v.__b-J.__v.__b},t0.__r=0,H1=Math.random().toString(8),s0="__d"+H1,y0="__a"+H1,Z6=/(PointerCapture)$|Capture$/i,z1=0,L1=q6(!1),O1=q6(!0),U8=0;var M6=(Z)=>{try{return JSON.parse(Z)}catch{return[]}};function I8(Z){let J=typeof Z==="string"?M6(Z):Z;if(!Array.isArray(J))return[];return J.filter((Y)=>typeof Y==="string")}function T8(Z){let J=typeof Z==="string"?M6(Z):Z;if(!Array.isArray(J))return[];let Y=[];return J.forEach((X,Q)=>{if(typeof X==="string")Y.push({s:X,i:Q});else if(X&&typeof X.s==="string"&&typeof X.i==="number")Y.push({s:X.s,i:X.i})}),Y}function V6(Z,J,Y){let X=new Set(I8(Y)),Q=T8(J),$=new Map(Z.map((W)=>[W.shortcode,W])),q=new Set(Q.map((W)=>W.s)),K=Z.filter((W)=>!X.has(W.shortcode)&&!q.has(W.shortcode));return[...Q].sort((W,M)=>W.i-M.i).forEach(({s:W,i:M})=>{let V=$.get(W);if(V&&!X.has(W))K.splice(Math.min(Math.max(M,0),K.length),0,V)}),K}var f0,l,T1,N6,h0=0,D6=[],r=_,F6=r.__b,U6=r.__r,H6=r.diffed,z6=r.__c,L6=r.unmount,O6=r.__;function E1(Z,J){r.__h&&r.__h(l,Z,h0||J),h0=0;var Y=l.__H||(l.__H={__:[],__h:[]});return Z>=Y.__.length&&Y.__.push({}),Y.__[Z]}function a(Z){return h0=1,E8(I6,Z)}function E8(Z,J,Y){var X=E1(f0++,2);if(X.t=Z,!X.__c&&(X.__=[Y?Y(J):I6(void 0,J),function(K){var W=X.__N?X.__N[0]:X.__[0],M=X.t(W,K);W!==M&&(X.__N=[M,X.__[1]],X.__c.setState({}))}],X.__c=l,!l.__f)){var Q=function(K,W,M){if(!X.__c.__H)return!0;var V=!1,N=X.__c.props!==K;if(X.__c.__H.__.some(function(D){if(D.__N){V=!0;var U=D.__[0];D.__=D.__N,D.__N=void 0,U!==D.__[0]&&(N=!0)}}),$){var j=$.call(this,K,W,M);return V?j||N:j}return!V||N};l.__f=!0;var{shouldComponentUpdate:$,componentWillUpdate:q}=l;l.componentWillUpdate=function(K,W,M){if(this.__e){var V=$;$=void 0,Q(K,W,M),$=V}q&&q.call(this,K,W,M)},l.shouldComponentUpdate=Q}return X.__N||X.__}function u(Z,J){var Y=E1(f0++,3);!r.__s&&k6(Y.__H,J)&&(Y.__=Z,Y.u=J,l.__H.__h.push(Y))}function $0(Z){return h0=5,x0(function(){return{current:Z}},[])}function x0(Z,J){var Y=E1(f0++,7);return k6(Y.__H,J)&&(Y.__=Z(),Y.__H=J,Y.__h=Z),Y.__}function v0(Z,J){return h0=8,x0(function(){return Z},J)}function R8(){for(var Z;Z=D6.shift();){var J=Z.__H;if(Z.__P&&J)try{J.__h.some(J1),J.__h.some(R1),J.__h=[]}catch(Y){J.__h=[],r.__e(Y,Z.__v)}}}r.__b=function(Z){l=null,F6&&F6(Z)},r.__=function(Z,J){Z&&J.__k&&J.__k.__m&&(Z.__m=J.__k.__m),O6&&O6(Z,J)},r.__r=function(Z){U6&&U6(Z),f0=0;var J=(l=Z.__c).__H;J&&(T1===l?(J.__h=[],l.__h=[],J.__.some(function(Y){Y.__N&&(Y.__=Y.__N),Y.u=Y.__N=void 0})):(J.__h.some(J1),J.__h.some(R1),J.__h=[],f0=0)),T1=l},r.diffed=function(Z){H6&&H6(Z);var J=Z.__c;J&&J.__H&&(J.__H.__h.length&&(D6.push(J)!==1&&N6===r.requestAnimationFrame||((N6=r.requestAnimationFrame)||C8)(R8)),J.__H.__.some(function(Y){Y.u&&(Y.__H=Y.u,Y.u=void 0)})),T1=l=null},r.__c=function(Z,J){J.some(function(Y){try{Y.__h.some(J1),Y.__h=Y.__h.filter(function(X){return!X.__||R1(X)})}catch(X){J.some(function(Q){Q.__h&&(Q.__h=[])}),J=[],r.__e(X,Y.__v)}}),z6&&z6(Z,J)},r.unmount=function(Z){L6&&L6(Z);var J,Y=Z.__c;Y&&Y.__H&&(Y.__H.__.some(function(X){try{J1(X)}catch(Q){J=Q}}),Y.__H=void 0,J&&r.__e(J,Y.__v))};var B6=typeof requestAnimationFrame=="function";function C8(Z){var J,Y=function(){clearTimeout(X),B6&&cancelAnimationFrame(J),setTimeout(Z)},X=setTimeout(Y,35);B6&&(J=requestAnimationFrame(Y))}function J1(Z){var J=l,Y=Z.__c;typeof Y=="function"&&(Z.__c=void 0,Y()),l=J}function R1(Z){var J=l;Z.__c=Z.__(),l=J}function k6(Z,J){return!Z||Z.length!==J.length||J.some(function(Y,X){return Y!==Z[X]})}function I6(Z,J){return typeof J=="function"?J(Z):J}var A8="https://ifeed.bio";function Y1(){try{let Z=window.__IFS_DEV__,J=window?.Shopify?.shop;if(Z&&Z.apiBase&&Z.shop&&J===Z.shop)return Z.apiBase}catch{}try{let Z=localStorage.getItem("ifs-api-base");if(Z)return Z}catch{}return A8}function x8(){let Z=document.querySelectorAll('script[type="application/json"][data-ifs-store-data]');for(let J of Array.from(Z))try{let Y=JSON.parse(J.textContent||"");if(Y&&typeof Y==="object"&&typeof Y.success==="boolean")return Y}catch{}return null}async function w8(Z){try{let J=await fetch(`${Y1()}/api/store/ping`,{method:"POST",body:JSON.stringify({shop:Z}),keepalive:!0});if(!J.ok)return!0;return(await J.json()).available!==!1}catch{return!0}}function P8(Z){let J=Z.preloadImage||Z.posts?.[0]?.mediaUrl,Y=Array.from(document.querySelectorAll("link[data-ifs-post-preload]")).some((Q)=>Q.dataset.ifsPostPreload===J);if(!J||Y)return;let X=document.createElement("link");X.rel="preload",X.as="image",X.href=J,X.setAttribute("fetchpriority","high"),X.dataset.ifsPostPreload=J,document.head.appendChild(X)}function X1(Z,J){try{let Y=window?.Shopify?.shop;if(!Y)return;fetch(`${Y1()}/api/store/click`,{method:"POST",body:JSON.stringify({shop:Y,kind:Z,ref:J}),keepalive:!0}).catch(()=>{})}catch{}}async function _8(){try{let J=window?.Shopify?.shop;if(!J)throw Error("Shopify shop not found.");let Y=x8(),X;if(Y)X=Y,w8(J).then((Q)=>{if(!Q)window.dispatchEvent(new CustomEvent("ifs:availability",{detail:{available:!1}}))});else{let Q=await fetch(`${Y1()}/api/store/data`,{method:"POST",body:JSON.stringify({shop:J})});if(!Q.ok)throw Error(`Store data request failed with ${Q.status}`);X=await Q.json()}if(P8(X),console.log("[InstaFeedStory] Storefront data",{source:Y?"shop metafield":"legacy API",apiBase:Y1(),data:X}),!X.success)throw Error("Instagram data is unavailable");return X}catch(J){throw console.error("Error loading Instagram data:",J),J}}function y8(Z,J){for(var Y in J)Z[Y]=J[Y];return Z}function T6(Z,J){for(var Y in Z)if(Y!=="__source"&&!(Y in J))return!0;for(var X in J)if(X!=="__source"&&Z[X]!==J[X])return!0;return!1}function E6(Z,J){this.props=Z,this.context=J}(E6.prototype=new L0).isPureReactComponent=!0,E6.prototype.shouldComponentUpdate=function(Z,J){return T6(this.props,Z)||T6(this.state,J)};var R6=_.__b;_.__b=function(Z){Z.type&&Z.type.__f&&Z.ref&&(Z.props.ref=Z.ref,Z.ref=null),R6&&R6(Z)};var fZ=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911,b8=_.__e;_.__e=function(Z,J,Y,X){if(Z.then){for(var Q,$=J;$=$.__;)if((Q=$.__c)&&Q.__c)return J.__e==null&&(J.__e=Y.__e,J.__k=Y.__k||[]),Q.__c(Z,J)}b8(Z,J,Y,X)};var C6=_.unmount;function A6(Z,J,Y){return Z&&(Z.__c&&Z.__c.__H&&(Z.__c.__H.__.forEach(function(X){typeof X.__c=="function"&&X.__c()}),Z.__c.__H=null),(Z=y8({},Z)).__c!=null&&(Z.__c.__P===Y&&(Z.__c.__P=J),Z.__c.__e=!0,Z.__c=null),Z.__k=Z.__k&&Z.__k.map(function(X){return A6(X,J,Y)})),Z}function x6(Z,J,Y){return Z&&Y&&(Z.__v=null,Z.__k=Z.__k&&Z.__k.map(function(X){return x6(X,J,Y)}),Z.__c&&Z.__c.__P===J&&(Z.__e&&Y.appendChild(Z.__e),Z.__c.__e=!0,Z.__c.__P=Y)),Z}function C1(){this.__u=0,this.o=null,this.__b=null}function w6(Z){var J=Z.__&&Z.__.__c;return J&&J.__a&&J.__a(Z)}function Q1(){this.i=null,this.l=null}_.unmount=function(Z){var J=Z.__c;J&&(J.__z=!0),J&&J.__R&&J.__R(),J&&32&Z.__u&&(Z.type=null),C6&&C6(Z)},(C1.prototype=new L0).__c=function(Z,J){var Y=J.__c,X=this;X.o==null&&(X.o=[]),X.o.push(Y);var Q=w6(X.__v),$=!1,q=function(){$||X.__z||($=!0,Y.__R=null,Q?Q(W):W())};Y.__R=q;var K=Y.__P;Y.__P=null;var W=function(){if(!--X.__u){if(X.state.__a){var M=X.state.__a;X.__v.__k[0]=x6(M,M.__c.__P,M.__c.__O)}var V;for(X.setState({__a:X.__b=null});V=X.o.pop();)V.__P=K,V.forceUpdate()}};X.__u++||32&J.__u||X.setState({__a:X.__b=X.__v.__k[0]}),Z.then(q,q)},C1.prototype.componentWillUnmount=function(){this.o=[]},C1.prototype.render=function(Z,J){if(this.__b){if(this.__v.__k){var Y=document.createElement("div"),X=this.__v.__k[0].__c;this.__v.__k[0]=A6(this.__b,Y,X.__O=X.__P)}this.__b=null}var Q=J.__a&&S0(z0,null,Z.fallback);return Q&&(Q.__u&=-33),[S0(z0,null,J.__a?null:Z.children),Q]};var P6=function(Z,J,Y){if(++Y[1]===Y[0]&&Z.l.delete(J),Z.props.revealOrder&&(Z.props.revealOrder[0]!=="t"||!Z.l.size))for(Y=Z.i;Y;){for(;Y.length>3;)Y.pop()();if(Y[1]<Y[0])break;Z.i=Y=Y[2]}};function S8(Z){return this.getChildContext=function(){return Z.context},Z.children}function f8(Z){var J=this,Y=Z.h;if(J.componentWillUnmount=function(){X0(null,J.v),J.v=null,J.h=null},J.h&&J.h!==Y&&J.componentWillUnmount(),!J.v){for(var X=J.__v;X!==null&&!X.__m&&X.__!==null;)X=X.__;J.h=Y,J.v={nodeType:1,parentNode:Y,childNodes:[],__k:{__m:X.__m},contains:function(){return!0},namespaceURI:Y.namespaceURI,insertBefore:function(Q,$){this.childNodes.push(Q),J.h.insertBefore(Q,$)},removeChild:function(Q){this.childNodes.splice(this.childNodes.indexOf(Q)>>>1,1),J.h.removeChild(Q)}}}X0(S0(S8,{context:J.context},Z.__v),J.v)}function _6(Z,J){var Y=S0(f8,{__v:Z,h:J});return Y.containerInfo=J,Y}(Q1.prototype=new L0).__a=function(Z){var J=this,Y=w6(J.__v),X=J.l.get(Z);return X[0]++,function(Q){var $=function(){J.props.revealOrder?(X.push(Q),P6(J,Z,X)):Q()};Y?Y($):$()}},Q1.prototype.render=function(Z){this.i=null,this.l=new Map;var J=e0(Z.children);Z.revealOrder&&Z.revealOrder[0]==="b"&&J.reverse();for(var Y=J.length;Y--;)this.l.set(J[Y],this.i=[1,0,this.i]);return Z.children},Q1.prototype.componentDidUpdate=Q1.prototype.componentDidMount=function(){var Z=this;this.l.forEach(function(J,Y){P6(Z,Y,J)})};var h8=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,v8=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,m8=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,g8=/[A-Z0-9]/g,p8=typeof document<"u",c8=function(Z){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(Z)};L0.prototype.isReactComponent=!0,["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(Z){Object.defineProperty(L0.prototype,Z,{configurable:!0,get:function(){return this["UNSAFE_"+Z]},set:function(J){Object.defineProperty(this,Z,{configurable:!0,writable:!0,value:J})}})});var y6=_.event;_.event=function(Z){return y6&&(Z=y6(Z)),Z.persist=function(){},Z.isPropagationStopped=function(){return this.cancelBubble},Z.isDefaultPrevented=function(){return this.defaultPrevented},Z.nativeEvent=Z};var b6,u8={configurable:!0,get:function(){return this.class}},S6=_.vnode;_.vnode=function(Z){typeof Z.type=="string"&&function(J){var{props:Y,type:X}=J,Q={},$=X.indexOf("-")==-1;for(var q in Y){var K=Y[q];if(!(q==="value"&&("defaultValue"in Y)&&K==null||p8&&q==="children"&&X==="noscript"||q==="class"||q==="className")){var W=q.toLowerCase();q==="defaultValue"&&"value"in Y&&Y.value==null?q="value":q==="download"&&K===!0?K="":W==="translate"&&K==="no"?K=!1:W[0]==="o"&&W[1]==="n"?W==="ondoubleclick"?q="ondblclick":W!=="onchange"||X!=="input"&&X!=="textarea"||c8(Y.type)?W==="onfocus"?q="onfocusin":W==="onblur"?q="onfocusout":m8.test(q)&&(q=W):W=q="oninput":$&&v8.test(q)?q=q.replace(g8,"-$&").toLowerCase():K===null&&(K=void 0),W==="oninput"&&Q[q=W]&&(q="oninputCapture"),Q[q]=K}}X=="select"&&(Q.multiple&&Array.isArray(Q.value)&&(Q.value=e0(Y.children).forEach(function(M){M.props.selected=Q.value.indexOf(M.props.value)!=-1})),Q.defaultValue!=null&&(Q.value=e0(Y.children).forEach(function(M){M.props.selected=Q.multiple?Q.defaultValue.indexOf(M.props.value)!=-1:Q.defaultValue==M.props.value}))),Y.class&&!Y.className?(Q.class=Y.class,Object.defineProperty(Q,"className",u8)):Y.className&&(Q.class=Q.className=Y.className),J.props=Q}(Z),Z.$$typeof=h8,S6&&S6(Z)};var f6=_.__r;_.__r=function(Z){f6&&f6(Z),b6=Z.__c};var h6=_.diffed;_.diffed=function(Z){h6&&h6(Z);var{props:J,__e:Y}=Z;Y!=null&&Z.type==="textarea"&&"value"in J&&J.value!==Y.value&&(Y.value=J.value==null?"":J.value),b6=null};function A1(Z){return typeof Z==="number"}function x1(Z){return typeof Z==="string"}function $1(Z){return typeof Z==="boolean"}function v6(Z){return Object.prototype.toString.call(Z)==="[object Object]"}function c(Z){return Math.abs(Z)}function w1(Z){return Math.sign(Z)}function m0(Z,J){return c(Z-J)}function d8(Z,J){if(Z===0||J===0)return 0;if(c(Z)<=c(J))return 0;let Y=m0(c(Z),c(J));return c(Y/Z)}function l8(Z){return Math.round(Z*100)/100}function g0(Z){return c0(Z).map(Number)}function N0(Z){return Z[p0(Z)]}function p0(Z){return Math.max(0,Z.length-1)}function P1(Z,J){return J===p0(Z)}function m6(Z,J=0){return Array.from(Array(Z),(Y,X)=>J+X)}function c0(Z){return Object.keys(Z)}function g6(Z,J){return[Z,J].reduce((Y,X)=>{return c0(X).forEach((Q)=>{let $=Y[Q],q=X[Q],K=v6($)&&v6(q);Y[Q]=K?g6($,q):q}),Y},{})}function _1(Z,J){return typeof J.MouseEvent<"u"&&Z instanceof J.MouseEvent}function r8(Z,J){let Y={start:X,center:Q,end:$};function X(){return 0}function Q(W){return $(W)/2}function $(W){return J-W}function q(W,M){if(x1(Z))return Y[Z](W);return Z(J,W,M)}return{measure:q}}function u0(){let Z=[];function J(Q,$,q,K={passive:!0}){let W;if("addEventListener"in Q)Q.addEventListener($,q,K),W=()=>Q.removeEventListener($,q,K);else{let M=Q;M.addListener(q),W=()=>M.removeListener(q)}return Z.push(W),X}function Y(){Z=Z.filter((Q)=>Q())}let X={add:J,clear:Y};return X}function a8(Z,J,Y,X){let Q=u0(),$=16.666666666666668,q=null,K=0,W=0;function M(){Q.add(Z,"visibilitychange",()=>{if(Z.hidden)U()})}function V(){D(),Q.clear()}function N(O){if(!W)return;if(!q)q=O,Y(),Y();let F=O-q;q=O,K+=F;while(K>=16.666666666666668)Y(),K-=16.666666666666668;let L=K/16.666666666666668;if(X(L),W)W=J.requestAnimationFrame(N)}function j(){if(W)return;W=J.requestAnimationFrame(N)}function D(){J.cancelAnimationFrame(W),q=null,K=0,W=0}function U(){q=null,K=0}return{init:M,destroy:V,start:j,stop:D,update:Y,render:X}}function s8(Z,J){let Y=J==="rtl",X=Z==="y",Q=X?"y":"x",$=X?"x":"y",q=!X&&Y?-1:1,K=V(),W=N();function M(U){let{height:H,width:O}=U;return X?H:O}function V(){if(X)return"top";return Y?"right":"left"}function N(){if(X)return"bottom";return Y?"left":"right"}function j(U){return U*q}return{scroll:Q,cross:$,startEdge:K,endEdge:W,measureSize:M,direction:j}}function E0(Z=0,J=0){let Y=c(Z-J);function X(M){return M<Z}function Q(M){return M>J}function $(M){return X(M)||Q(M)}function q(M){if(!$(M))return M;return X(M)?Z:J}function K(M){if(!Y)return M;return M-Y*Math.ceil((M-J)/Y)}return{length:Y,max:J,min:Z,constrain:q,reachedAny:$,reachedMax:Q,reachedMin:X,removeOffset:K}}function p6(Z,J,Y){let{constrain:X}=E0(0,Z),Q=Z+1,$=q(J);function q(j){return!Y?X(j):c((Q+j)%Q)}function K(){return $}function W(j){return $=q(j),N}function M(j){return V().set(K()+j)}function V(){return p6(Z,K(),Y)}let N={get:K,set:W,add:M,clone:V};return N}function o8(Z,J,Y,X,Q,$,q,K,W,M,V,N,j,D,U,H,O,F,L){let{cross:z,direction:C}=Z,x=["INPUT","SELECT","TEXTAREA"],A={passive:!1},E=u0(),T=u0(),B=E0(50,225).constrain(D.measure(20)),k={mouse:300,touch:400},I={mouse:500,touch:600},h=U?43:25,b=!1,y=0,P=0,v=!1,m=!1,d=!1,s=!1;function Y0(R){if(!L)return;function S(n){if($1(L)||L(R,n))D0(n)}let p=J;E.add(p,"dragstart",(n)=>n.preventDefault(),A).add(p,"touchmove",()=>{return},A).add(p,"touchend",()=>{return}).add(p,"touchstart",S).add(p,"mousedown",S).add(p,"touchcancel",i).add(p,"contextmenu",i).add(p,"click",e,!0)}function Z0(){E.clear(),T.clear()}function J0(){let R=s?Y:J;T.add(R,"touchmove",t,A).add(R,"touchend",i).add(R,"mousemove",t,A).add(R,"mouseup",i)}function o(R){let S=R.nodeName||"";return x.includes(S)}function q0(){return(U?I:k)[s?"mouse":"touch"]}function W0(R,S){let p=N.add(w1(R)*-1),n=V.byDistance(R,!U).distance;if(U||c(R)<B)return n;if(O&&S)return n*0.5;return V.byIndex(p.get(),0).distance}function D0(R){let S=_1(R,X);if(s=S,d=U&&S&&!R.buttons&&b,b=m0(Q.get(),q.get())>=2,S&&R.button!==0)return;if(o(R.target))return;v=!0,$.pointerDown(R),M.useFriction(0).useDuration(0),Q.set(q),J0(),y=$.readPoint(R),P=$.readPoint(R,z),j.emit("pointerDown")}function t(R){if(!_1(R,X)&&R.touches.length>=2)return i(R);let p=$.readPoint(R),n=$.readPoint(R,z),G0=m0(p,y),j0=m0(n,P);if(!m&&!s){if(!R.cancelable)return i(R);if(m=G0>j0,!m)return i(R)}let K0=$.pointerMove(R);if(G0>H)d=!0;M.useFriction(0.3).useDuration(0.75),K.start(),Q.add(C(K0)),R.preventDefault()}function i(R){let p=V.byDistance(0,!1).index!==N.get(),n=$.pointerUp(R)*q0(),G0=W0(C(n),p),j0=d8(n,G0),K0=h-10*j0,g=F+j0/50;m=!1,v=!1,T.clear(),M.useDuration(K0).useFriction(g),W.distance(G0,!U),s=!1,j.emit("pointerUp")}function e(R){if(d)R.stopPropagation(),R.preventDefault(),d=!1}function w(){return v}return{init:Y0,destroy:Z0,pointerDown:w}}function i8(Z,J){let X,Q;function $(N){return N.timeStamp}function q(N,j){let U=`client${(j||Z.scroll)==="x"?"X":"Y"}`;return(_1(N,J)?N:N.touches[0])[U]}function K(N){return X=N,Q=N,q(N)}function W(N){let j=q(N)-q(Q),D=$(N)-$(X)>170;if(Q=N,D)X=N;return j}function M(N){if(!X||!Q)return 0;let j=q(Q)-q(X),D=$(N)-$(X),U=$(N)-$(Q)>170,H=j/D;return D&&!U&&c(H)>0.1?H:0}return{pointerDown:K,pointerMove:W,pointerUp:M,readPoint:q}}function n8(){function Z(Y){let{offsetTop:X,offsetLeft:Q,offsetWidth:$,offsetHeight:q}=Y;return{top:X,right:Q+$,bottom:X+q,left:Q,width:$,height:q}}return{measure:Z}}function t8(Z){function J(X){return Z*(X/100)}return{measure:J}}function e8(Z,J,Y,X,Q,$,q){let K=[Z].concat(X),W,M,V=[],N=!1;function j(O){return Q.measureSize(q.measure(O))}function D(O){if(!$)return;M=j(Z),V=X.map(j);function F(L){for(let z of L){if(N)return;let C=z.target===Z,x=X.indexOf(z.target),A=C?M:V[x],E=j(C?Z:X[x]);if(c(E-A)>=0.5){O.reInit(),J.emit("resize");break}}}W=new ResizeObserver((L)=>{if($1($)||$(O,L))F(L)}),Y.requestAnimationFrame(()=>{K.forEach((L)=>W.observe(L))})}function U(){if(N=!0,W)W.disconnect()}return{init:D,destroy:U}}function Z9(Z,J,Y,X,Q,$){let q=0,K=0,W=Q,M=$,V=Z.get(),N=0;function j(){let A=X.get()-Z.get(),E=!W,T=0;if(E)q=0,Y.set(X),Z.set(X),T=A;else Y.set(Z),q+=A/W,q*=M,V+=q,Z.add(q),T=V-N;return K=w1(T),N=V,x}function D(){let A=X.get()-J.get();return c(A)<0.001}function U(){return W}function H(){return K}function O(){return q}function F(){return z(Q)}function L(){return C($)}function z(A){return W=A,x}function C(A){return M=A,x}let x={direction:H,duration:U,velocity:O,seek:j,settled:D,useBaseFriction:L,useBaseDuration:F,useFriction:C,useDuration:z};return x}function J9(Z,J,Y,X,Q){let $=Q.measure(10),q=Q.measure(50),K=E0(0.1,0.99),W=!1;function M(){if(W)return!1;if(!Z.reachedAny(Y.get()))return!1;if(!Z.reachedAny(J.get()))return!1;return!0}function V(D){if(!M())return;let U=Z.reachedMin(J.get())?"min":"max",H=c(Z[U]-J.get()),O=Y.get()-J.get(),F=K.constrain(H/q);if(Y.subtract(O*F),!D&&c(O)<$)Y.set(Z.constrain(Y.get())),X.useDuration(25).useBaseFriction()}function N(D){W=!D}return{shouldConstrain:M,constrain:V,toggleActive:N}}function Y9(Z,J,Y,X,Q){let $=E0(-J+Z,0),q=N(),K=V(),W=j();function M(U,H){return m0(U,H)<=1}function V(){let U=q[0],H=N0(q),O=q.lastIndexOf(U),F=q.indexOf(H)+1;return E0(O,F)}function N(){return Y.map((U,H)=>{let{min:O,max:F}=$,L=$.constrain(U),z=!H,C=P1(Y,H);if(z)return F;if(C)return O;if(M(O,L))return O;if(M(F,L))return F;return L}).map((U)=>parseFloat(U.toFixed(3)))}function j(){if(J<=Z+Q)return[$.max];if(X==="keepSnaps")return q;let{min:U,max:H}=K;return q.slice(U,H)}return{snapsContained:W,scrollContainLimit:K}}function X9(Z,J,Y){let X=J[0],Q=Y?X-Z:N0(J);return{limit:E0(Q,X)}}function Q9(Z,J,Y,X){let $=J.min+0.1,q=J.max+0.1,{reachedMin:K,reachedMax:W}=E0($,q);function M(j){if(j===1)return W(Y.get());if(j===-1)return K(Y.get());return!1}function V(j){if(!M(j))return;let D=Z*(j*-1);X.forEach((U)=>U.add(D))}return{loop:V}}function $9(Z){let{max:J,length:Y}=Z;function X($){let q=$-J;return Y?q/-Y:0}return{get:X}}function q9(Z,J,Y,X,Q){let{startEdge:$,endEdge:q}=Z,{groupSlides:K}=Q,W=N().map(J.measure),M=j(),V=D();function N(){return K(X).map((H)=>N0(H)[q]-H[0][$]).map(c)}function j(){return X.map((H)=>Y[$]-H[$]).map((H)=>-c(H))}function D(){return K(M).map((H)=>H[0]).map((H,O)=>H+W[O])}return{snaps:M,snapsAligned:V}}function K9(Z,J,Y,X,Q,$){let{groupSlides:q}=Q,{min:K,max:W}=X,M=V();function V(){let j=q($),D=!Z||J==="keepSnaps";if(Y.length===1)return[$];if(D)return j;return j.slice(K,W).map((U,H,O)=>{let F=!H,L=P1(O,H);if(F){let z=N0(O[0])+1;return m6(z)}if(L){let z=p0($)-N0(O)[0]+1;return m6(z,N0(O)[0])}return U})}return{slideRegistry:M}}function G9(Z,J,Y,X,Q){let{reachedAny:$,removeOffset:q,constrain:K}=X;function W(U){return U.concat().sort((H,O)=>c(H)-c(O))[0]}function M(U){let H=Z?q(U):K(U),O=J.map((L,z)=>({diff:V(L-H,0),index:z})).sort((L,z)=>c(L.diff)-c(z.diff)),{index:F}=O[0];return{index:F,distance:H}}function V(U,H){let O=[U,U+Y,U-Y];if(!Z)return U;if(!H)return W(O);let F=O.filter((L)=>w1(L)===H);if(F.length)return W(F);return N0(O)-Y}function N(U,H){let O=J[U]-Q.get(),F=V(O,H);return{index:U,distance:F}}function j(U,H){let O=Q.get()+U,{index:F,distance:L}=M(O),z=!Z&&$(O);if(!H||z)return{index:F,distance:U};let C=J[F]-L,x=U+V(C,0);return{index:F,distance:x}}return{byDistance:j,byIndex:N,shortcut:V}}function j9(Z,J,Y,X,Q,$,q){function K(N){let j=N.distance,D=N.index!==J.get();if($.add(j),j)if(X.duration())Z.start();else Z.update(),Z.render(1),Z.update();if(D)Y.set(J.get()),J.set(N.index),q.emit("select")}function W(N,j){let D=Q.byDistance(N,j);K(D)}function M(N,j){let D=J.clone().set(N),U=Q.byIndex(D.get(),j);K(U)}return{distance:W,index:M}}function W9(Z,J,Y,X,Q,$,q,K){let W={passive:!0,capture:!0},M=0;function V(D){if(!K)return;function U(H){if(new Date().getTime()-M>10)return;q.emit("slideFocusStart"),Z.scrollLeft=0;let L=Y.findIndex((z)=>z.includes(H));if(!A1(L))return;Q.useDuration(0),X.index(L,0),q.emit("slideFocus")}$.add(document,"keydown",N,!1),J.forEach((H,O)=>{$.add(H,"focus",(F)=>{if($1(K)||K(D,F))U(O)},W)})}function N(D){if(D.code==="Tab")M=new Date().getTime()}return{init:V}}function d0(Z){let J=Z;function Y(){return J}function X(W){J=q(W)}function Q(W){J+=q(W)}function $(W){J-=q(W)}function q(W){return A1(W)?W:W.get()}return{get:Y,set:X,add:Q,subtract:$}}function c6(Z,J){let Y=Z.scroll==="x"?q:K,X=J.style,Q=null,$=!1;function q(j){return`translate3d(${j}px,0px,0px)`}function K(j){return`translate3d(0px,${j}px,0px)`}function W(j){if($)return;let D=l8(Z.direction(j));if(D===Q)return;X.transform=Y(D),Q=D}function M(j){$=!j}function V(){if($)return;if(X.transform="",!J.getAttribute("style"))J.removeAttribute("style")}return{clear:V,to:W,toggleActive:M}}function M9(Z,J,Y,X,Q,$,q,K,W){let V=g0(Q),N=g0(Q).reverse(),j=F().concat(L());function D(E,T){return E.reduce((B,k)=>{return B-Q[k]},T)}function U(E,T){return E.reduce((B,k)=>{return D(B,T)>0?B.concat([k]):B},[])}function H(E){return $.map((T,B)=>({start:T-X[B]+0.5+E,end:T+J-0.5+E}))}function O(E,T,B){let k=H(T);return E.map((I)=>{let h=B?0:-Y,b=B?Y:0,y=B?"end":"start",P=k[I][y];return{index:I,loopPoint:P,slideLocation:d0(-1),translate:c6(Z,W[I]),target:()=>K.get()>P?h:b}})}function F(){let E=q[0],T=U(N,E);return O(T,Y,!1)}function L(){let E=J-q[0]-1,T=U(V,E);return O(T,-Y,!0)}function z(){return j.every(({index:E})=>{let T=V.filter((B)=>B!==E);return D(T,J)<=0.1})}function C(){j.forEach((E)=>{let{target:T,translate:B,slideLocation:k}=E,I=T();if(I===k.get())return;B.to(I),k.set(I)})}function x(){j.forEach((E)=>E.translate.clear())}return{canLoop:z,clear:x,loop:C,loopPoints:j}}function V9(Z,J,Y){let X,Q=!1;function $(W){if(!Y)return;function M(V){for(let N of V)if(N.type==="childList"){W.reInit(),J.emit("slidesChanged");break}}X=new MutationObserver((V)=>{if(Q)return;if($1(Y)||Y(W,V))M(V)}),X.observe(Z,{childList:!0})}function q(){if(X)X.disconnect();Q=!0}return{init:$,destroy:q}}function N9(Z,J,Y,X){let Q={},$=null,q=null,K,W=!1;function M(){K=new IntersectionObserver((U)=>{if(W)return;U.forEach((H)=>{let O=J.indexOf(H.target);Q[O]=H}),$=null,q=null,Y.emit("slidesInView")},{root:Z.parentElement,threshold:X}),J.forEach((U)=>K.observe(U))}function V(){if(K)K.disconnect();W=!0}function N(U){return c0(Q).reduce((H,O)=>{let F=parseInt(O),{isIntersecting:L}=Q[F];if(U&&L||!U&&!L)H.push(F);return H},[])}function j(U=!0){if(U&&$)return $;if(!U&&q)return q;let H=N(U);if(U)$=H;if(!U)q=H;return H}return{init:M,destroy:V,get:j}}function D9(Z,J,Y,X,Q,$){let{measureSize:q,startEdge:K,endEdge:W}=Z,M=Y[0]&&Q,V=U(),N=H(),j=Y.map(q),D=O();function U(){if(!M)return 0;let L=Y[0];return c(J[K]-L[K])}function H(){if(!M)return 0;let L=$.getComputedStyle(N0(X));return parseFloat(L.getPropertyValue(`margin-${W}`))}function O(){return Y.map((L,z,C)=>{let x=!z,A=P1(C,z);if(x)return j[z]+V;if(A)return j[z]+N;return C[z+1][K]-L[K]}).map(c)}return{slideSizes:j,slideSizesWithGaps:D,startGap:V,endGap:N}}function F9(Z,J,Y,X,Q,$,q,K,W){let{startEdge:M,endEdge:V,direction:N}=Z,j=A1(Y);function D(F,L){return g0(F).filter((z)=>z%L===0).map((z)=>F.slice(z,z+L))}function U(F){if(!F.length)return[];return g0(F).reduce((L,z,C)=>{let x=N0(L)||0,A=x===0,E=z===p0(F),T=Q[M]-$[x][M],B=Q[M]-$[z][V],k=!X&&A?N(q):0,I=!X&&E?N(K):0,h=c(B-I-(T+k));if(C&&h>J+W)L.push(z);if(E)L.push(F.length);return L},[]).map((L,z,C)=>{let x=Math.max(C[z-1]||0);return F.slice(x,L)})}function H(F){return j?D(F,Y):U(F)}return{groupSlides:H}}function U9(Z,J,Y,X,Q,$,q){let{align:K,axis:W,direction:M,startIndex:V,loop:N,duration:j,dragFree:D,dragThreshold:U,inViewThreshold:H,slidesToScroll:O,skipSnaps:F,containScroll:L,watchResize:z,watchSlides:C,watchDrag:x,watchFocus:A}=$,E=2,T=n8(),B=T.measure(J),k=Y.map(T.measure),I=s8(W,M),h=I.measureSize(B),b=t8(h),y=r8(K,h),P=!N&&!!L,v=N||!!L,{slideSizes:m,slideSizesWithGaps:d,startGap:s,endGap:Y0}=D9(I,B,k,Y,v,Q),Z0=F9(I,h,O,N,B,k,s,Y0,2),{snaps:J0,snapsAligned:o}=q9(I,y,B,k,Z0),q0=-N0(J0)+N0(d),{snapsContained:W0,scrollContainLimit:D0}=Y9(h,q0,o,L,2),t=P?W0:o,{limit:i}=X9(q0,t,N),e=p6(p0(t),V,N),w=e.clone(),f=g0(Y),R=({dragHandler:V0,scrollBody:s1,scrollBounds:o1,options:{loop:F1}})=>{if(!F1)o1.constrain(V0.pointerDown());s1.seek()},S=({scrollBody:V0,translate:s1,location:o1,offsetLocation:F1,previousLocation:AZ,scrollLooper:xZ,slideLooper:wZ,dragHandler:PZ,animation:_Z,eventHandler:G8,scrollBounds:yZ,options:{loop:j8}},W8)=>{let M8=V0.settled(),bZ=!yZ.shouldConstrain(),V8=j8?M8:M8&&bZ,N8=V8&&!PZ.pointerDown();if(N8)_Z.stop();let SZ=o1.get()*W8+AZ.get()*(1-W8);if(F1.set(SZ),j8)xZ.loop(V0.direction()),wZ.loop();if(s1.to(F1.get()),N8)G8.emit("settle");if(!V8)G8.emit("scroll")},p=a8(X,Q,()=>R(B0),(V0)=>S(B0,V0)),n=0.68,G0=t[e.get()],j0=d0(G0),K0=d0(G0),g=d0(G0),F0=d0(G0),O0=Z9(j0,g,K0,F0,j,0.68),P0=G9(N,t,q0,i,F0),T0=j9(p,e,w,O0,P0,F0,q),M0=$9(i),U0=u0(),Q0=N9(J,Y,q,H),{slideRegistry:_0}=K9(P,L,t,D0,Z0,f),D1=W9(Z,Y,_0,T0,O0,U0,q,A),B0={ownerDocument:X,ownerWindow:Q,eventHandler:q,containerRect:B,slideRects:k,animation:p,axis:I,dragHandler:o8(I,Z,X,Q,F0,i8(I,Q),j0,p,T0,O0,P0,e,q,b,D,U,F,0.68,x),eventStore:U0,percentOfView:b,index:e,indexPrevious:w,limit:i,location:j0,offsetLocation:g,previousLocation:K0,options:$,resizeHandler:e8(J,q,Q,Y,I,z,T),scrollBody:O0,scrollBounds:J9(i,g,F0,O0,b),scrollLooper:Q9(q0,i,g,[j0,g,K0,F0]),scrollProgress:M0,scrollSnapList:t.map(M0.get),scrollSnaps:t,scrollTarget:P0,scrollTo:T0,slideLooper:M9(I,h,q0,m,d,J0,t,g,Y),slideFocus:D1,slidesHandler:V9(J,q,C),slidesInView:Q0,slideIndexes:f,slideRegistry:_0,slidesToScroll:Z0,target:F0,translate:c6(I,J)};return B0}function H9(){let Z={},J;function Y(M){J=M}function X(M){return Z[M]||[]}function Q(M){return X(M).forEach((V)=>V(J,M)),W}function $(M,V){return Z[M]=X(M).concat([V]),W}function q(M,V){return Z[M]=X(M).filter((N)=>N!==V),W}function K(){Z={}}let W={init:Y,emit:Q,off:q,on:$,clear:K};return W}var z9={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function L9(Z){function J($,q){return g6($,q||{})}function Y($){let q=$.breakpoints||{},K=c0(q).filter((W)=>Z.matchMedia(W).matches).map((W)=>q[W]).reduce((W,M)=>J(W,M),{});return J($,K)}function X($){return $.map((q)=>c0(q.breakpoints||{})).reduce((q,K)=>q.concat(K),[]).map(Z.matchMedia)}return{mergeOptions:J,optionsAtMedia:Y,optionsMediaQueries:X}}function O9(Z){let J=[];function Y($,q){return J=q.filter(({options:K})=>Z.optionsAtMedia(K).active!==!1),J.forEach((K)=>K.init($,Z)),q.reduce((K,W)=>Object.assign(K,{[W.name]:W}),{})}function X(){J=J.filter(($)=>$.destroy())}return{init:Y,destroy:X}}function y1(Z,J,Y){let X=Z.ownerDocument,Q=X.defaultView,$=L9(Q),q=O9($),K=u0(),W=H9(),{mergeOptions:M,optionsAtMedia:V,optionsMediaQueries:N}=$,{on:j,off:D,emit:U}=W,H=I,O=!1,F,L=M(z9,y1.globalOptions),z=M(L),C=[],x,A,E;function T(){let{container:f,slides:R}=z;A=(x1(f)?Z.querySelector(f):f)||Z.children[0];let p=x1(R)?A.querySelectorAll(R):R;E=[].slice.call(p||A.children)}function B(f){let R=U9(Z,A,E,X,Q,f,W);if(f.loop&&!R.slideLooper.canLoop()){let S=Object.assign({},f,{loop:!1});return B(S)}return R}function k(f,R){if(O)return;if(L=M(L,f),z=V(L),C=R||C,T(),F=B(z),N([L,...C.map(({options:S})=>S)]).forEach((S)=>K.add(S,"change",I)),!z.active)return;if(F.translate.to(F.location.get()),F.animation.init(),F.slidesInView.init(),F.slideFocus.init(w),F.eventHandler.init(w),F.resizeHandler.init(w),F.slidesHandler.init(w),F.options.loop)F.slideLooper.loop();if(A.offsetParent&&E.length)F.dragHandler.init(w);x=q.init(w,C)}function I(f,R){let S=Z0();h(),k(M({startIndex:S},f),R),W.emit("reInit")}function h(){F.dragHandler.destroy(),F.eventStore.clear(),F.translate.clear(),F.slideLooper.clear(),F.resizeHandler.destroy(),F.slidesHandler.destroy(),F.slidesInView.destroy(),F.animation.destroy(),q.destroy(),K.clear()}function b(){if(O)return;O=!0,K.clear(),h(),W.emit("destroy"),W.clear()}function y(f,R,S){if(!z.active||O)return;F.scrollBody.useBaseFriction().useDuration(R===!0?0:z.duration),F.scrollTo.index(f,S||0)}function P(f){let R=F.index.add(1).get();y(R,f,-1)}function v(f){let R=F.index.add(-1).get();y(R,f,1)}function m(){return F.index.add(1).get()!==Z0()}function d(){return F.index.add(-1).get()!==Z0()}function s(){return F.scrollSnapList}function Y0(){return F.scrollProgress.get(F.offsetLocation.get())}function Z0(){return F.index.get()}function J0(){return F.indexPrevious.get()}function o(){return F.slidesInView.get()}function q0(){return F.slidesInView.get(!1)}function W0(){return x}function D0(){return F}function t(){return Z}function i(){return A}function e(){return E}let w={canScrollNext:m,canScrollPrev:d,containerNode:i,internalEngine:D0,destroy:b,off:D,on:j,emit:U,plugins:W0,previousScrollSnap:J0,reInit:H,rootNode:t,scrollNext:P,scrollPrev:v,scrollProgress:Y0,scrollSnapList:s,scrollTo:y,selectedScrollSnap:Z0,slideNodes:e,slidesInView:o,slidesNotInView:q0};return k(J,Y),setTimeout(()=>W.emit("init"),0),w}y1.globalOptions=void 0;var u6=(Z)=>Object.prototype.toString.call(Z)==="[object Object]"||Array.isArray(Z),b1=(Z,J)=>{let Y=Object.keys(Z),X=Object.keys(J);if(Y.length!==X.length)return!1;let Q=JSON.stringify(Object.keys(Z.breakpoints??{})),$=JSON.stringify(Object.keys(J.breakpoints??{}));if(Q!==$)return!1;return Y.every((q)=>{let K=Z[q],W=J[q];if(typeof K==="function")return String(K)===String(W);if(!u6(K)||!u6(W))return K===W;return b1(K,W)})},B9=(Z,J)=>{if(Z.length!==J.length)return!1;let Y=($,q)=>$.name>q.name?1:-1,X=Z.slice().sort(Y).map(($)=>$.options),Q=J.slice().sort(Y).map(($)=>$.options);return X.every(($,q)=>b1($,Q[q]))};function d6(Z={},J=[]){let Y=$0(Z),X=$0(J),[Q,$]=a(),[q,K]=a(),W=v0(()=>{Q?.reInit(Y.current,X.current)},[Q]);return u(()=>{if(b1(Y.current,Z))return;Y.current=Z,W()},[Z,W]),u(()=>{if(B9(X.current,J))return;X.current=J,W()},[J,W]),u(()=>{if(!q){$(void 0);return}let M=y1(q,Y.current,X.current);return $(M),()=>M.destroy()},[q]),[K,Q]}var k9={active:!0,breakpoints:{},delay:4000,jump:!1,playOnInit:!0,stopOnFocusIn:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};function I9(Z,J){let Y=Z.scrollSnapList();if(typeof J==="number")return Y.map(()=>J);return J(Y,Z)}function T9(Z,J){let Y=Z.rootNode();return J&&J(Y)||Y}function q1(Z={}){let J,Y,X,Q,$=null,q=0,K=!1,W=!1,M=!1,V=!1;function N(y,P){Y=y;let{mergeOptions:v,optionsAtMedia:m}=P,d=v(k9,q1.globalOptions),s=v(d,Z);if(J=m(s),Y.scrollSnapList().length<=1)return;V=J.jump,X=!1,Q=I9(Y,J.delay);let{eventStore:Y0,ownerDocument:Z0}=Y.internalEngine(),J0=!!Y.internalEngine().options.watchDrag,o=T9(Y,J.rootNode);if(Y0.add(Z0,"visibilitychange",F),J0)Y.on("pointerDown",z);if(J0&&!J.stopOnInteraction)Y.on("pointerUp",C);if(J.stopOnMouseEnter)Y0.add(o,"mouseenter",x);if(J.stopOnMouseEnter&&!J.stopOnInteraction)Y0.add(o,"mouseleave",A);if(J.stopOnFocusIn)Y.on("slideFocusStart",O);if(J.stopOnFocusIn&&!J.stopOnInteraction)Y0.add(Y.containerNode(),"focusout",H);if(J.playOnInit)H()}function j(){Y.off("pointerDown",z).off("pointerUp",C).off("slideFocusStart",O),O(),X=!0,K=!1}function D(){let{ownerWindow:y}=Y.internalEngine();y.clearTimeout(q),q=y.setTimeout(I,Q[Y.selectedScrollSnap()]),$=new Date().getTime(),Y.emit("autoplay:timerset")}function U(){let{ownerWindow:y}=Y.internalEngine();y.clearTimeout(q),q=0,$=null,Y.emit("autoplay:timerstopped")}function H(){if(X)return;if(L()){M=!0;return}if(!K)Y.emit("autoplay:play");D(),K=!0}function O(){if(X)return;if(K)Y.emit("autoplay:stop");U(),K=!1}function F(){if(L())return M=K,O();if(M)H()}function L(){let{ownerDocument:y}=Y.internalEngine();return y.visibilityState==="hidden"}function z(){if(!W)O()}function C(){if(!W)H()}function x(){W=!0,O()}function A(){W=!1,H()}function E(y){if(typeof y<"u")V=y;H()}function T(){if(K)O()}function B(){if(K)H()}function k(){return K}function I(){let{index:y}=Y.internalEngine(),P=y.clone().add(1).get(),v=Y.scrollSnapList().length-1,m=J.stopOnLastSnap&&P===v;if(Y.canScrollNext())Y.scrollNext(V);else Y.scrollTo(0,V);if(Y.emit("autoplay:select"),m)return O();H()}function h(){if(!$)return null;let y=Q[Y.selectedScrollSnap()],P=new Date().getTime()-$;return y-P}return{name:"autoplay",options:Z,init:N,destroy:j,play:E,stop:T,reset:B,isPlaying:k,timeUntilNext:h}}q1.globalOptions=void 0;var E9={direction:"forward",speed:2,startDelay:1000,active:!0,breakpoints:{},playOnInit:!0,stopOnFocusIn:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,rootNode:null};function R9(Z,J){let Y=Z.rootNode();return J&&J(Y)||Y}function K1(Z={}){let J,Y,X,Q,$=0,q=!1,K=!1,W;function M(B,k){Y=B;let{mergeOptions:I,optionsAtMedia:h}=k,b=I(E9,K1.globalOptions),y=I(b,Z);if(J=h(y),Y.scrollSnapList().length<=1)return;Q=J.startDelay,X=!1,W=Y.internalEngine().scrollBody;let{eventStore:P}=Y.internalEngine(),v=!!Y.internalEngine().options.watchDrag,m=R9(Y,J.rootNode);if(v)Y.on("pointerDown",U);if(v&&!J.stopOnInteraction)Y.on("pointerUp",H);if(J.stopOnMouseEnter)P.add(m,"mouseenter",O);if(J.stopOnMouseEnter&&!J.stopOnInteraction)P.add(m,"mouseleave",F);if(J.stopOnFocusIn)Y.on("slideFocusStart",j);if(J.stopOnFocusIn&&!J.stopOnInteraction)P.add(Y.containerNode(),"focusout",N);if(J.playOnInit)N()}function V(){Y.off("pointerDown",U).off("pointerUp",H).off("slideFocusStart",j).off("settle",L),j(),X=!0,q=!1}function N(){if(X)return;if(q)return;Y.emit("autoScroll:play");let B=Y.internalEngine(),{ownerWindow:k}=B;$=k.setTimeout(()=>{B.scrollBody=D(B),B.animation.start()},Q),q=!0}function j(){if(X)return;if(!q)return;Y.emit("autoScroll:stop");let B=Y.internalEngine(),{ownerWindow:k}=B;B.scrollBody=W,k.clearTimeout($),$=0,q=!1}function D(B){let{location:k,previousLocation:I,offsetLocation:h,target:b,scrollTarget:y,index:P,indexPrevious:v,limit:{reachedMin:m,reachedMax:d,constrain:s},options:{loop:Y0}}=B,Z0=J.direction==="forward"?-1:1,J0=()=>e,o=0,q0=0,W0=k.get(),D0=0,t=!1;function i(){let w=0;I.set(k),o=Z0*J.speed,W0+=o,k.add(o),b.set(k),w=W0-D0,q0=Math.sign(w),D0=W0;let f=y.byDistance(0,!1).index;if(P.get()!==f)v.set(P.get()),P.set(f),Y.emit("select");let R=J.direction==="forward"?m(h.get()):d(h.get());if(!Y0&&R){t=!0;let S=s(k.get());k.set(S),b.set(k),j()}return e}let e={direction:()=>q0,duration:()=>-1,velocity:()=>o,settled:()=>t,seek:i,useBaseFriction:J0,useBaseDuration:J0,useFriction:J0,useDuration:J0};return e}function U(){if(!K)j()}function H(){if(!K)z()}function O(){K=!0,j()}function F(){K=!1,N()}function L(){Y.off("settle",L),N()}function z(){Y.on("settle",L)}function C(B){if(typeof B<"u")Q=B;N()}function x(){if(q)j()}function A(){if(q)j(),z()}function E(){return q}return{name:"autoScroll",options:Z,init:M,destroy:V,play:C,stop:x,reset:A,isPlaying:E}}K1.globalOptions=void 0;var G1={};function C9(Z){for(let J of Object.keys(G1))delete G1[J];if(Z&&typeof Z==="object")Object.assign(G1,Z)}var S1=/\{\{\s*(\w+)\s*\}\}/;function R0(Z,J,Y,X){let Q=Z.toFixed(J).split("."),$=(Q[0]??"0").replace(/\B(?=(\d{3})+(?!\d))/g,Y);return Q[1]?`${$}${X}${Q[1]}`:$}function A9(Z,J){let Y=J.match(S1)?.[1]??"amount",X;switch(Y){case"amount_no_decimals":X=R0(Z,0,",",".");break;case"amount_with_comma_separator":X=R0(Z,2,".",",");break;case"amount_no_decimals_with_comma_separator":X=R0(Z,0,".",",");break;case"amount_with_apostrophe_separator":X=R0(Z,2,"'",".");break;case"amount_with_space_separator":X=R0(Z,2," ",",");break;case"amount_no_decimals_with_space_separator":X=R0(Z,0," ",",");break;default:X=R0(Z,2,",",".")}return J.replace(S1,X)}function f1(Z){let J=typeof Z==="string"?parseFloat(Z):Z;if(!isFinite(J))return typeof Z==="string"?Z:"";let Y=(typeof window<"u"?window.Shopify:void 0)||{};if(typeof Y.money_format==="string"&&S1.test(Y.money_format))return A9(J,Y.money_format);try{return new Intl.NumberFormat(Y.locale||"en-US",{style:"currency",currency:Y.currency?.active||"USD"}).format(J)}catch{return String(J)}}var x9=0;function G(Z,J,Y,X,Q,$){J||(J={});var q,K,W=J;if("ref"in W)for(K in W={},J)K=="ref"?q=J[K]:W[K]=J[K];var M={type:Z,props:W,key:Y,ref:q,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--x9,__i:-1,__u:0,__source:Q,__self:$};if(typeof Z=="function"&&(q=Z.defaultProps))for(K in q)W[K]===void 0&&(W[K]=q[K]);return _.vnode&&_.vnode(M),M}function w9({rating:Z,count:J}){let Y=Math.max(0,Math.min(100,Z/5*100));return G("span",{class:"ifs-product-rating","aria-label":`${Z.toFixed(1)} out of 5 stars, ${J} reviews`,children:[G("span",{class:"ifs-product-stars",children:[G("span",{children:"★★★★★"},void 0,!1,void 0,this),G("span",{style:{width:`${Y}%`},children:"★★★★★"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),G("small",{children:["(",J,")"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)}function P9({product:Z}){if(!Z.variants?.length)return null;if(Z.variants.length>1){let Q=Z.variants.map(($)=>Number.parseFloat($.price)).filter(Number.isFinite);if(!Q.length)return null;return G("p",{class:"ifs-product-price",children:["From ",f1(Math.min(...Q))]},void 0,!0,void 0,this)}let J=Z.variants[0];if(!J)return null;let Y=Number.parseFloat(J.price),X=Number.parseFloat(J.compare_at_price||"");if(!Number.isFinite(Y))return null;return G("p",{class:"ifs-product-price",children:[Number.isFinite(X)&&X>Y&&G("del",{children:f1(X)},void 0,!1,void 0,this),G("span",{children:f1(Y)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)}function _9(Z){if(!Z)return;try{let J=new URL(Z,window.location.origin);if(J.hostname==="cdn.shopify.com"||J.pathname.startsWith("/cdn/"))J.searchParams.set("width","240");return J.toString()}catch{return}}function y9({product:Z}){let J=typeof Z.featured_image==="string"?Z.featured_image:Z.featured_image?.src,Y=typeof Z.images?.[0]==="string"?Z.images[0]:Z.images?.[0]?.src,X=_9(J||Y),Q=Z.url?`${Z.url}${Z.url.includes("?")?"&":"?"}utm_source=instafeed_story_app&utm_medium=app_widget`:`/products/${Z.handle}?utm_source=instafeed_story_app&utm_medium=app_widget`,$=G1[Z.handle];return G("a",{class:"ifs-linked-product-item",href:Q,target:"_blank",rel:"noopener noreferrer",onClick:()=>X1("product",Z.handle),children:[G("span",{class:"ifs-product-image",children:X?G("img",{loading:"lazy",alt:"",src:X},void 0,!1,void 0,this):G("span",{"aria-hidden":"true"},void 0,!1,void 0,this)},void 0,!1,void 0,this),G("span",{class:"ifs-product-copy",children:[G("strong",{children:Z.title},void 0,!1,void 0,this),$&&G(w9,{rating:$.rating,count:$.count},void 0,!1,void 0,this),G(P9,{product:Z},void 0,!1,void 0,this)]},void 0,!0,void 0,this),G("span",{class:"ifs-product-shop",children:["Shop",G("svg",{viewBox:"0 0 20 20","aria-hidden":"true",children:G("path",{d:"m7 4 6 6-6 6"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)}function b9(){return G("div",{class:"ifs-product-skeleton","aria-hidden":"true",children:[G("span",{},void 0,!1,void 0,this),G("span",{children:[G("i",{},void 0,!1,void 0,this),G("i",{},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)}function S9({products:Z,loading:J,productCount:Y}){if(!J&&Z.length===0)return null;return G("section",{class:"ifs-linked-products","aria-label":"Linked products",children:[G("div",{class:"ifs-linked-products-heading",children:[G("strong",{children:"Shop this post"},void 0,!1,void 0,this),G("span",{children:J?Y:Z.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),G("div",{class:"ifs-linked-products-list",children:J?Array.from({length:Math.max(1,Math.min(Y,3))}).map((X,Q)=>G(b9,{},Q,!1,void 0,this)):Z.map((X)=>G(y9,{product:X},X.id,!1,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)}function h1(Z){let J=Z;if(typeof J==="string"){let Q=J.trim();if(!Q)return[];try{J=JSON.parse(Q)}catch{J=Q}}let X=(Array.isArray(J)?J:[J]).map((Q)=>{if(typeof Q==="string")return Q.trim();if(Q&&typeof Q==="object"&&"handle"in Q){let $=Q.handle;return typeof $==="string"?$.trim():""}return""}).filter(Boolean);return[...new Set(X)]}function f9(){try{return localStorage.getItem("ifs-video-muted")==="true"}catch{return!1}}function h9(Z){try{localStorage.setItem("ifs-video-muted",Z?"true":"false")}catch{}}function v9({src:Z,poster:J}){let Y=$0(null),[X,Q]=a(!0),[$,q]=a(0),[K,W]=a(f9);u(()=>{let j=Y.current;if(!j)return;j.muted=K;let D=()=>{if(j.duration)q(j.currentTime/j.duration*100)},U=()=>Q(!0),H=()=>Q(!1);return j.addEventListener("timeupdate",D),j.addEventListener("play",U),j.addEventListener("pause",H),()=>{j.removeEventListener("timeupdate",D),j.removeEventListener("play",U),j.removeEventListener("pause",H)}},[Z]);let M=(j)=>{j.stopPropagation();let D=Y.current;if(!D)return;if(D.paused)D.play();else D.pause()},V=(j)=>{j.stopPropagation();let D=Y.current;if(!D)return;let U=!D.muted;D.muted=U,W(U),h9(U)};return G("div",{class:"ifs-video-player",onClick:M,children:[G("video",{ref:Y,preload:"metadata",src:Z,poster:J,autoPlay:!0,playsInline:!0,muted:K},void 0,!1,void 0,this),G("div",{class:"ifs-video-controls",onClick:(j)=>j.stopPropagation(),children:[G("button",{class:"ifs-video-btn",onClick:M,"aria-label":X?"Pause":"Play",children:X?G("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"white",children:[G("rect",{x:"6",y:"4",width:"4",height:"16",rx:"1"},void 0,!1,void 0,this),G("rect",{x:"14",y:"4",width:"4",height:"16",rx:"1"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):G("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"white",children:G("path",{d:"M8 5v14l11-7z"},void 0,!1,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this),G("div",{class:"ifs-video-progress",onClick:(j)=>{j.stopPropagation();let D=Y.current;if(!D)return;let U=j.currentTarget.getBoundingClientRect(),H=(j.clientX-U.left)/U.width;D.currentTime=H*D.duration},children:G("div",{class:"ifs-video-progress-bar",style:{width:`${$}%`}},void 0,!1,void 0,this)},void 0,!1,void 0,this),G("button",{class:"ifs-video-btn",onClick:V,"aria-label":K?"Unmute":"Mute",children:K?G("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"white",children:G("path",{d:"M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0021 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 003.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"},void 0,!1,void 0,this)},void 0,!1,void 0,this):G("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"white",children:G("path",{d:"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"},void 0,!1,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)}function m9({post:Z,onClose:J,onNext:Y,onPrev:X,hasNext:Q,hasPrev:$,currentIndex:q,total:K,linkedProducts:W,productsLoading:M,settings:V}){let N=V?.popupShowUsername!==!1,j=V?.popupShowFollow!==!1,D=V?.popupShowCaption!==!1,U=V?.popupShowProducts!==!1,H=$0(null),O=$0(null),F=$0(null);if(u(()=>{let E=(T)=>{if(T.key==="Escape")J();else if(T.key==="ArrowRight"&&Q)Y();else if(T.key==="ArrowLeft"&&$)X()};return document.addEventListener("keydown",E),()=>document.removeEventListener("keydown",E)},[J,Y,X,Q,$]),u(()=>{if(!Z)return;F.current=document.activeElement instanceof HTMLElement?document.activeElement:null;let E=document.body.style.overflow;return document.body.style.overflow="hidden",requestAnimationFrame(()=>{O.current?.focus({preventScroll:!0})}),()=>{document.body.style.overflow=E,F.current?.focus(),F.current=null}},[Boolean(Z)]),!Z)return null;let L=(E)=>{E.stopPropagation(),Y()},z=(E)=>{E.stopPropagation(),X()},C=(E)=>{H.current=E.changedTouches[0]?.clientX??null},x=(E)=>{let T=H.current,B=E.changedTouches[0]?.clientX;if(H.current=null,T==null||B==null||Math.abs(B-T)<48)return;if(B<T&&Q)Y();if(B>T&&$)X()},A=h1(Z.linkedProducts).length;return G("div",{ref:O,class:"ifs-modal-overlay",onClick:J,role:"dialog","aria-modal":"true","aria-label":`Post by ${Z.username}`,tabIndex:-1,children:[$&&G("button",{class:"ifs-modal-nav ifs-modal-prev",onClick:z,"aria-label":"Previous post",children:G("svg",{class:"ifs-modal-nav-svg",viewBox:"0 0 24 24","aria-hidden":"true",children:G("path",{d:"M15.5 4.5 8 12l7.5 7.5"},void 0,!1,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this),G("div",{class:"ifs-modal-content",onClick:(E)=>E.stopPropagation(),onTouchStart:C,onTouchEnd:x,children:[G("button",{class:"ifs-modal-close",onClick:J,"aria-label":"Close",children:G("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:G("path",{d:"M6 6l12 12M18 6L6 18"},void 0,!1,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this),G("div",{class:"ifs-modal-body",children:[G("div",{class:"ifs-modal-media",children:Z.mediaType==="VIDEO"&&Z.videoUrl?G(v9,{src:Z.videoUrl,poster:Z.mediaUrl},void 0,!1,void 0,this):G("img",{loading:"eager",decoding:"async",alt:`Instagram post by ${Z.username}`,src:Z.mediaUrl},void 0,!1,void 0,this)},void 0,!1,void 0,this),G("div",{class:"ifs-modal-details",children:[(N||j)&&G("div",{class:"ifs-modal-header",children:[N?G("div",{class:"ifs-modal-identity",children:[G("span",{class:"ifs-modal-avatar","aria-hidden":"true",children:Z.username?.slice(0,1).toUpperCase()},void 0,!1,void 0,this),G("span",{children:[G("strong",{children:["@",Z.username]},void 0,!0,void 0,this),G("small",{children:"Instagram"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this):G("span",{},void 0,!1,void 0,this),j&&G("a",{href:`https://www.instagram.com/${Z.username}`,class:"ifs-modal-follow",target:"_blank",rel:"noopener noreferrer",onClick:()=>X1("follow"),children:"Follow"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),G("div",{class:"ifs-modal-scroll",children:D&&Z.caption&&G("div",{class:"ifs-modal-caption",children:G("p",{children:Z.caption.split(/\r?\n/).map((E,T,B)=>G("span",{children:[E,T<B.length-1&&G("br",{},void 0,!1,void 0,this)]},T,!0,void 0,this))},void 0,!1,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this),U&&(M||W.length>0)&&G("div",{class:"ifs-modal-products",children:G(S9,{products:W,loading:M,productCount:A},void 0,!1,void 0,this)},void 0,!1,void 0,this),K>1&&G("div",{class:"ifs-modal-progress",children:[G("span",{children:[q+1," of ",K]},void 0,!0,void 0,this),G("span",{class:"ifs-modal-progress-dots","aria-hidden":"true",children:Array.from({length:Math.min(K,7)}).map((E,T)=>{let B=K<=7?T===q:T===Math.round(q/(K-1)*6);return G("i",{class:B?"is-active":""},T,!1,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q&&G("button",{class:"ifs-modal-nav ifs-modal-next",onClick:L,"aria-label":"Next post",children:G("svg",{class:"ifs-modal-nav-svg",viewBox:"0 0 24 24","aria-hidden":"true",children:G("path",{d:"m8.5 4.5 7.5 7.5-7.5 7.5"},void 0,!1,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)}var l6=0.52,r6=0.8,g9=0.52,p9=0.1,c9=64,u9=160,l0=(Z,J,Y)=>Math.min(Math.max(Z,J),Y);function d9(Z){let J=0,Y=[],X=0,Q=()=>{Y=Z.slideNodes().map((K)=>K.querySelector(".ifs-effect-inner"))},$=()=>{J=l6*Z.scrollSnapList().length;let K=Z.slideNodes()[0];if(!K){X=0;return}let W=Number.parseFloat(getComputedStyle(K).paddingRight)||0;X=Math.max(0,K.clientWidth-W)},q=(K,W)=>{let M=Z.internalEngine(),V=Z.scrollProgress(),N=Z.slidesInView(),j=W==="scroll";Z.scrollSnapList().forEach((D,U)=>{let H=D-V;M.slideRegistry[U].forEach((F)=>{if(j&&!N.includes(F))return;if(M.options.loop)M.slideLooper.loopPoints.forEach((I)=>{let h=I.target();if(F===I.index&&h!==0){let b=Math.sign(h);if(b===-1)H=D-(1+V);if(b===1)H=D+(1-V)}});let L=Y[F];if(!L)return;let z=Math.abs(H*J),C=Math.sign(H)||0,x=z/l6,A=l0(x,0,1),E=1-(1-r6)*A,T=1-(1-g9)*A,B=X*((1-E)/2+Math.max(0,x-1)*(1-r6)),k=-C*B;L.style.opacity=T.toFixed(3),L.style.zIndex=String(Math.max(1,100-Math.round(z*100))),L.style.transform=`translateX(${k}px) scale(${E})`})})};return Q(),$(),q(),Z.on("reInit",Q).on("reInit",$).on("reInit",q).on("scroll",q).on("slideFocus",q).on("select",q).on("settle",q),()=>{Z.off("reInit",Q).off("reInit",$).off("reInit",q).off("scroll",q).off("slideFocus",q).off("select",q).off("settle",q),Y.forEach((K)=>{if(!K)return;K.style.opacity="",K.style.zIndex="",K.style.transform=""})}}function l9(Z){let J=[],Y=null,X=()=>{J=Z.slideNodes().map((V)=>V.querySelector(".ifs-effect-inner")),J.forEach((V)=>{if(!V)return;V.style.position="relative",V.style.opacity="0",V.style.visibility="hidden"})},Q=()=>{Y=null;let V=Z.rootNode(),N=Z.slideNodes();if(!V||!N.length)return;let j=V.getBoundingClientRect(),D=j.left+j.width/2,U=l0(j.width*p9,c9,u9),H=N[0].getBoundingClientRect(),O=Math.max(1,H.width),F=Math.max(0,Number.parseFloat(getComputedStyle(V).getPropertyValue("--ifs-arc-bottom-gap"))||0),L=Math.max(0.01,Number.parseFloat(getComputedStyle(V).getPropertyValue("--ifs-arc-aspect-ratio"))||0.75),z=Math.max(1,j.width/2+O/2),C=(z**2+U**2)/(2*U),x=Math.asin(l0(O/2/C,-1,1)),A=Math.cos(x)+Math.sin(x)/L,T=`${Math.max(1,(O-Math.min(F,O-1))/A).toFixed(2)}px`;if(V.style.getPropertyValue("--ifs-arc-card-width")!==T)V.style.setProperty("--ifs-arc-card-width",T);let B=`${Math.ceil(U)}px`;if(V.style.getPropertyValue("--ifs-arc-clearance")!==B)V.style.setProperty("--ifs-arc-clearance",B);N.map((I,h)=>{let b=I.getBoundingClientRect(),y=Math.max(0,Math.min(b.right,j.right)-Math.max(b.left,j.left)),P=b.left+b.width/2-D,v=l0(P,-z,z),m=C-Math.sqrt(Math.max(0,C**2-v**2)),d=Math.asin(l0(v/C,-1,1))*(180/Math.PI),s=Math.abs(v/z);return{node:J[h],y:m,angle:d,distance:s,visible:y>0}}).forEach(({node:I,y:h,angle:b,distance:y,visible:P})=>{if(!I)return;let v=String(Math.max(1,100-Math.round(y*20))),m=`translate3d(0, ${h.toFixed(2)}px, 0) rotate(${b.toFixed(3)}deg)`,d=P?"1":"0";if(I.style.zIndex!==v)I.style.zIndex=v;if(I.style.transform!==m)I.style.transform=m;if(I.style.opacity!==d)I.style.opacity=d;let s=P?"visible":"hidden";if(I.style.visibility!==s)I.style.visibility=s})},$=()=>{if(Y!==null)cancelAnimationFrame(Y),Y=null;Q()},q=()=>{if(Y!==null)return;Y=requestAnimationFrame(Q)},K=new ResizeObserver(q),W=()=>{K.disconnect();let V=Z.rootNode();if(V)K.observe(V);let N=Z.slideNodes()[0];if(N)K.observe(N)},M=()=>{X(),W(),q()};return M(),Z.on("reInit",M).on("scroll",$).on("slideFocus",$),()=>{if(Y!==null)cancelAnimationFrame(Y);K.disconnect(),Z.off("reInit",M).off("scroll",$).off("slideFocus",$);let V=Z.rootNode();V?.style.removeProperty("--ifs-arc-clearance"),V?.style.removeProperty("--ifs-arc-card-width"),J.forEach((N)=>{if(!N)return;N.style.position="",N.style.opacity="",N.style.zIndex="",N.style.transform="",N.style.visibility=""})}}function r9(Z,J){return J==="arc"?l9(Z):d9(Z)}var v1=new Map,a9={},s9=(Z)=>{let J=v1.get(Z);if(!J)J=fetch(`/products/${Z}.json`).then((Y)=>{if(!Y.ok)throw Error(`Failed to fetch product ${Z}`);return Y.json()}),J.catch(()=>v1.delete(Z)),v1.set(Z,J);return J},m1=({item:Z,autoplay:J,active:Y=!0,priority:X=!1})=>{let Q=$0(null),$=$0(null),[q,K]=a(!1),[W,M]=a(!1),[V,N]=a(!1),[j,D]=a(!1),U=typeof window>"u"||!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches&&!navigator.connection?.saveData,H=W&&(J&&Y&&U||q);return u(()=>{let O=Q.current;if(!O)return;if(!("IntersectionObserver"in window)){M(!0);return}let F=new IntersectionObserver(([L])=>M(Boolean(L?.isIntersecting)),{rootMargin:"80px",threshold:0.15});return F.observe(O),()=>F.disconnect()},[]),u(()=>{if(!H||!Z.videoUrl){N(!1),D(!1);return}let O=J&&!q?600:0,F=window.setTimeout(()=>N(!0),O);return()=>window.clearTimeout(F)},[J,q,Z.videoUrl,H]),G("div",{ref:Q,onMouseEnter:()=>K(!0),onMouseLeave:()=>K(!1),style:"display: block; width: 100%; height: 100%; position: relative;",children:[G("img",{loading:X?"eager":"lazy",fetchPriority:X?"high":"auto",decoding:"async",src:Z.mediaUrl||"",alt:`Instagram ${Z.username||""}`,style:"width: 100%; height: 100%; object-fit: cover;",class:"ifs-img"},void 0,!1,void 0,this),V&&Z.videoUrl&&G("video",{ref:$,src:Z.videoUrl,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"none",poster:Z.mediaUrl||void 0,onCanPlay:()=>D(!0),onPlaying:()=>D(!0),style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:j?1:0},class:"ifs-img"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};function g1({linkedProducts:Z}){let J=h1(Z).length;if(!J)return null;return G("span",{class:"ifs-product-badge","aria-label":`${J} linked ${J===1?"product":"products"}`,children:[G("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:G("path",{d:"M16 11V7a4 4 0 0 0-8 0v4M5 9h14l1 12H4L5 9Z"},void 0,!1,void 0,this)},void 0,!1,void 0,this),G("span",{children:J},void 0,!1,void 0,this)]},void 0,!0,void 0,this)}var o9=(Z)=>({id:Z.handle,title:Z.title||Z.handle.replace(/-/g," "),handle:Z.handle,variants:Z.price?[{price:Z.price,compare_at_price:Z.compareAtPrice??null}]:[],images:Z.image?[{src:Z.image}]:[],featured_image:Z.image?{src:Z.image}:null,url:Z.url});function i9({settings:Z}){let J=p1(Z),Y=Z.feedType==="grid"?Math.min(12,Math.max(4,Z.imageCount||6)):Z.feedType==="collage"?5:Z.feedType==="scattered"?6:Math.max(J.desktop,J.mobile),X=Z.feedType==="grid"?Y===9?3:Y===4||Y===8?4:Y===5||Y===10?5:6:5,Q=Z.aspectRatio?.replace(":"," / ")||"3 / 4";return G("div",{class:`ifs-feed-skeleton ifs-feed-skeleton--${Z.feedType||"grid"}`,role:"status","aria-live":"polite","aria-label":"Instagram posts are loading",style:{"--ifs-skeleton-columns":X,"--ifs-skeleton-gap":`${Z.postSpacing??10}px`,"--ifs-skeleton-radius":`${Z.cornerRadius??0}px`,"--ifs-skeleton-ratio":Q,"--ifs-carousel-slide-size":J.desktopCss,"--ifs-carousel-slide-size-mobile":J.mobileCss},children:[Array.from({length:Y},($,q)=>G("span",{class:"ifs-feed-skeleton__post",style:{"--ifs-skeleton-delay":`${q*80}ms`}},q,!1,void 0,this)),G("span",{class:"ifs-visually-hidden",children:"Bringing in the latest Instagram posts."},void 0,!1,void 0,this)]},void 0,!0,void 0,this)}var n9=(Z,J)=>{if(!J||J.feedType!=="grid"||!Z)return;let X=Z.querySelectorAll(".instagram-grid-item").length;if(!X)return;let Q;switch(X){case 6:Q=6;break;case 4:Q=4;break;case 5:Q=5;break;case 12:Q=6;break;case 10:Q=5;break;case 8:Q=4;break;case 9:Q=3;break;default:if(X<=3)Q=X;else if(X<=6)Q=3;else Q=4}if(window.innerWidth<=600)Q=Math.min(2,Q);Z.style.gridTemplateColumns=`repeat(${Q}, 1fr)`,Z.style.gridAutoRows="1fr"},j1=({posts:Z,settings:J,onPostClick:Y})=>{let X=$0(null);u(()=>{let $=()=>{if(X.current)n9(X.current,J)};return window.addEventListener("resize",$),$(),()=>window.removeEventListener("resize",$)},[J]);let Q=Z.filter(($)=>$.mediaUrl).slice(0,J.imageCount||6);return G("div",{ref:X,class:"instagram-grid-container",style:{display:"grid",padding:"10px",gridGap:`${J.postSpacing??10}px`,gridTemplateColumns:"repeat(auto-fill, minmax(150px, 1fr))"},children:Q.map(($,q)=>{let W=$.mediaType==="VIDEO"&&!!$.videoUrl;return G("div",{class:`instagram-grid-item${W?" ifs-has-video":""}`,style:{width:"100%",height:"100%",overflow:"hidden",position:"relative",cursor:"pointer",borderRadius:`${J.cornerRadius??0}px`,"--ifs-aspect-ratio":J?.aspectRatio?.replace(":","/")||"3/4"},onClick:()=>Y($,Q),children:[W?G(m1,{item:$,autoplay:J.autoplayVideos!==!1,priority:q===0},void 0,!1,void 0,this):G("div",{style:"display: block; width: 100%; height: 100%; position: relative;",children:G("img",{loading:q===0?"eager":"lazy",fetchPriority:q===0?"high":"auto",decoding:"async",src:$.mediaUrl||"",alt:`Instagram ${$.username||""}`,style:"width: 100%; height: 100%; object-fit: cover;",class:"ifs-img"},void 0,!1,void 0,this)},void 0,!1,void 0,this),W&&G("div",{class:"ifs-video-icon",children:G("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"white",xmlns:"http://www.w3.org/2000/svg",children:G("path",{d:"M8 5v14l11-7z"},void 0,!1,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this),G(g1,{linkedProducts:$.linkedProducts},void 0,!1,void 0,this)]},$.id,!0,void 0,this)})},void 0,!1,void 0,this)},a6=(Z,J,Y,X)=>{let Q=Number(Z);return Z!=null&&Number.isFinite(Q)?Math.min(X,Math.max(Y,Math.round(Q))):J},p1=(Z)=>{let J=Z.feedType==="spotlight"?4:5,Y=Z.feedType==="arc"?3:2,X=a6(Z.carouselPostsDesktop,J,2,8),Q=a6(Z.carouselPostsMobile,Y,1,5);return{desktop:X,mobile:Q,desktopCss:`${100/X}%`,mobileCss:`${100/Q}%`}},s6=(Z)=>{if(Z.carouselMotion==="focused"||Z.carouselMotion==="continuous")return Z.carouselMotion;return Number(Z.carouselSpeed??5)<0?"focused":"continuous"},o6=(Z)=>Math.min(10,Math.max(1,Math.abs(Number(Z.carouselSpeed??5)||5))),i6=(Z,J)=>{u(()=>{if(!Z||!J)return;let Y=Z.plugins()?.autoScroll,X=Z.rootNode?.();if(!Y||!X)return;let Q=!0,$=()=>{if(document.hidden||!Q)Y.stop();else if(!Y.isPlaying())Y.play()},q="IntersectionObserver"in window?new IntersectionObserver(([K])=>{Q=Boolean(K?.isIntersecting),$()},{rootMargin:"240px 0px"}):null;return q?.observe(X),document.addEventListener("visibilitychange",$),$(),()=>{q?.disconnect(),document.removeEventListener("visibilitychange",$)}},[Z,J])},c1=({item:Z,list:J,settings:Y,onPostClick:X,style:Q,videoActive:$,priority:q=!1})=>{let W=Z.mediaType==="VIDEO"&&!!Z.videoUrl;return G("div",{class:`instagram-layout-item${W?" ifs-has-video":""}`,style:{overflow:"hidden",position:"relative",cursor:"pointer",...Q},onClick:()=>X(Z,J),children:[W?G(m1,{item:Z,autoplay:Y.autoplayVideos!==!1,active:$,priority:q},void 0,!1,void 0,this):G("img",{loading:q?"eager":"lazy",fetchPriority:q?"high":"auto",decoding:"async",src:Z.mediaUrl||"",alt:`Instagram ${Z.username||""}`,style:"width: 100%; height: 100%; object-fit: cover; display: block;",class:"ifs-img"},void 0,!1,void 0,this),W&&G("div",{class:"ifs-video-icon",children:G("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"white",xmlns:"http://www.w3.org/2000/svg",children:G("path",{d:"M8 5v14l11-7z"},void 0,!1,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this),G(g1,{linkedProducts:Z.linkedProducts},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},t9=({posts:Z,settings:J,onPostClick:Y})=>{let X=Z.filter((K)=>K.mediaUrl).slice(0,5);if(X.length<5)return G(j1,{posts:Z,settings:J,onPostClick:Y},void 0,!1,void 0,this);let Q=`${J.postSpacing??10}px`,$=`${J.cornerRadius??0}px`;return G("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 1fr) minmax(0, 1.8fr) minmax(0, 1fr)",gridTemplateRows:"repeat(2, minmax(0, 1fr))",aspectRatio:"1.9 / 1",alignItems:"stretch",gap:Q,padding:"10px"},children:[{i:1,col:"1",row:"1"},{i:0,col:"2",row:"1 / span 2"},{i:2,col:"3",row:"1"},{i:3,col:"1",row:"2"},{i:4,col:"3",row:"2"}].map((K)=>{let W=X[K.i];if(!W)return null;return G(c1,{item:W,list:X,settings:J,onPostClick:Y,priority:K.i===0,style:{gridColumn:K.col,gridRow:K.row,width:"100%",height:"100%",minWidth:0,minHeight:0,borderRadius:$}},W.id,!1,void 0,this)})},void 0,!1,void 0,this)},n6=({posts:Z,settings:J,onPostClick:Y,effect:X})=>{let Q=J.carouselInterval??4,$=X==="spotlight"?"focused":s6(J),q=o6(J),K=J.carouselPauseOnHover===!0,W=typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,M=Q>0&&$==="continuous"&&!W,V=x0(()=>{if(Q<=0||W)return[];return $==="continuous"?[K1({speed:0.3+q*0.25,startDelay:K?0:400,stopOnInteraction:!1,stopOnMouseEnter:K,stopOnFocusIn:!0})]:[q1({delay:Q*1000,stopOnInteraction:!1,stopOnMouseEnter:K,stopOnFocusIn:!0})]},[Q,$,K,W,q]),[N,j]=d6({loop:!0,align:"center",dragFree:X==="arc"||M,duration:25},V);i6(j,M);let[D,U]=a(0),H=Z.filter((k)=>k.mediaUrl).slice(0,12);u(()=>{if(!j)return;return r9(j,X)},[j,X,J.aspectRatio,J.carouselPostsDesktop,J.carouselPostsMobile,J.postSpacing]),u(()=>{if(!j)return;let k=()=>U(j.selectedScrollSnap());return k(),j.on("select",k),j.on("reInit",k),()=>{j.off("select",k),j.off("reInit",k)}},[j]);let O=v0(()=>{j?.scrollPrev()},[j]),F=v0(()=>{j?.scrollNext()},[j]);if(H.length<3)return G(j1,{posts:Z,settings:J,onPostClick:Y},void 0,!1,void 0,this);let L=Math.max(0,J.postSpacing??10),z=`${J.cornerRadius??(X==="arc"?14:10)}px`,C=J.aspectRatio?.replace(":","/")||"3/4",[x,A]=C.split("/").map(Number),E=x>0&&A>0?x/A:0.75,T=p1(J),B=Q>0;return G("section",{class:`ifs-slider ifs-effect-carousel ifs-effect-carousel--${X}`,style:{position:"relative","--ifs-carousel-slide-size":T.desktopCss,"--ifs-carousel-slide-size-mobile":T.mobileCss,"--ifs-arc-bottom-gap":`${L}px`,"--ifs-arc-aspect-ratio":E},children:[G("div",{ref:N,class:"ifs-effect-viewport",children:G("div",{style:{display:"flex",touchAction:"pan-y pinch-zoom",marginRight:X==="arc"?0:`calc(${L}px * -1)`},children:H.map((k,I)=>G("div",{class:"ifs-effect-slide",style:{minWidth:0,paddingRight:X==="arc"?0:`${L}px`},children:G("div",{class:"ifs-effect-inner",style:{transformOrigin:"center center"},children:G(c1,{item:k,list:H,settings:J,onPostClick:Y,videoActive:I===D,priority:I===0,style:{aspectRatio:C,borderRadius:z}},void 0,!1,void 0,this)},void 0,!1,void 0,this)},k.id,!1,void 0,this))},void 0,!1,void 0,this)},void 0,!1,void 0,this),!B&&G("button",{class:`ifs-button ifs-button--prev ifs-nav--${J.carouselNavStyle||"light"}`,type:"button","aria-label":"Previous Instagram posts",onClick:O,children:G("svg",{class:"ifs-button-svg",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2.8",stroke:"currentColor",children:G("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 19.5 8.25 12l7.5-7.5"},void 0,!1,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this),!B&&G("button",{class:`ifs-button ifs-button--next ifs-nav--${J.carouselNavStyle||"light"}`,type:"button","aria-label":"Next Instagram posts",onClick:F,children:G("svg",{class:"ifs-button-svg",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2.8",stroke:"currentColor",children:G("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"},void 0,!1,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},e9=(Z)=>G(n6,{...Z,effect:"spotlight"},void 0,!1,void 0,this),ZZ=(Z)=>G(n6,{...Z,effect:"arc"},void 0,!1,void 0,this),t6=[{left:"36%",top:"8%",width:"26%",rot:0,z:5,aspect:"3/4"},{left:"6%",top:"16%",width:"17%",rot:-5,z:3,aspect:"1/1"},{left:"68%",top:"4%",width:"15%",rot:5,z:3,aspect:"1/1"},{left:"16%",top:"56%",width:"19%",rot:4,z:4,aspect:"1/1"},{left:"66%",top:"50%",width:"21%",rot:-4,z:4,aspect:"3/4"},{left:"48%",top:"66%",width:"14%",rot:6,z:2,aspect:"1/1"}],JZ=({posts:Z,settings:J,onPostClick:Y})=>{let X=Z.filter(($)=>$.mediaUrl).slice(0,t6.length);if(X.length<5)return G(j1,{posts:Z,settings:J,onPostClick:Y},void 0,!1,void 0,this);let Q=`${J.cornerRadius??10}px`;return G("div",{style:{position:"relative",aspectRatio:"16/9",margin:"10px"},children:X.map(($,q)=>{let K=t6[q];if(!K)return null;return G(c1,{item:$,list:X,settings:J,onPostClick:Y,priority:q===0,style:{position:"absolute",left:K.left,top:K.top,width:K.width,aspectRatio:K.aspect,transform:`rotate(${K.rot}deg)`,zIndex:K.z,borderRadius:Q}},$.id,!1,void 0,this)})},void 0,!1,void 0,this)},YZ=({posts:Z,settings:J,onPostClick:Y})=>{let X=J.carouselInterval??4,Q=X>0,$=s6(J),q=o6(J),K=J.carouselPauseOnHover===!0,W=typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,M=Q&&$==="continuous"&&!W,V=x0(()=>{if(!Q||W)return[];return $==="continuous"?[K1({speed:0.3+q*0.25,startDelay:K?0:400,stopOnInteraction:!1,stopOnMouseEnter:K,stopOnFocusIn:!0})]:[q1({delay:X*1000,stopOnInteraction:!1,stopOnMouseEnter:K,stopOnFocusIn:!0})]},[Q,X,$,K,W,q]),[N,j]=d6({loop:!0,align:"start",dragFree:M},V);i6(j,M);let[D,U]=a(0);u(()=>{if(!j)return;let z=()=>U(j.selectedScrollSnap());return z(),j.on("select",z),j.on("reInit",z),()=>{j.off("select",z),j.off("reInit",z)}},[j]);let H=v0(()=>{j?.scrollPrev()},[j]),O=v0(()=>{j?.scrollNext()},[j]),F=Z.filter((z)=>z.mediaUrl).slice(0,J.imageCountForCarousel||12),L=p1(J);return G("section",{class:"ifs-slider",style:{"--ifs-aspect-ratio":J?.aspectRatio?.replace(":","/")||"3/4","--slide-spacing":`${J.postSpacing??10}px`,"--ifs-radius":`${J.cornerRadius??0}px`,"--ifs-carousel-slide-size":L.desktopCss,"--ifs-carousel-slide-size-mobile":L.mobileCss},children:[G("div",{class:"ifs-viewport",ref:N,children:G("div",{class:"ifs-container",children:F.map((z,C)=>{let A=z.mediaType==="VIDEO"&&!!z.videoUrl;return G("div",{class:"ifs-slide",children:G("div",{class:`ifs-slide-media${A?" ifs-has-video":""}`,onClick:()=>Y(z,F),children:[A?G(m1,{item:z,autoplay:J.autoplayVideos!==!1,active:C===D,priority:C===0},void 0,!1,void 0,this):G("img",{loading:C===0?"eager":"lazy",fetchPriority:C===0?"high":"auto",decoding:"async",src:z.mediaUrl||"",alt:`${z.username||""}`,class:"ifs-img"},void 0,!1,void 0,this),A&&G("div",{class:"ifs-video-icon",children:G("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"white",xmlns:"http://www.w3.org/2000/svg",children:G("path",{d:"M8 5v14l11-7z"},void 0,!1,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this),G(g1,{linkedProducts:z.linkedProducts},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},z.id,!1,void 0,this)})},void 0,!1,void 0,this)},void 0,!1,void 0,this),!Q&&G("button",{class:`ifs-button ifs-button--prev ifs-nav--${J.carouselNavStyle||"light"}`,type:"button","aria-label":"Previous Instagram posts",onClick:H,children:G("svg",{class:"ifs-button-svg",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2.8",stroke:"currentColor",children:G("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 19.5 8.25 12l7.5-7.5"},void 0,!1,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this),!Q&&G("button",{class:`ifs-button ifs-button--next ifs-nav--${J.carouselNavStyle||"light"}`,type:"button","aria-label":"Next Instagram posts",onClick:O,children:G("svg",{class:"ifs-button-svg",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2.8",stroke:"currentColor",children:G("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"},void 0,!1,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};function u1({posts:Z,settings:J,canOpenPopup:Y,preview:X=!1,previewInteraction:Q="popup",previewPostShortcode:$,onPreviewPostChange:q,productCatalog:K}){let[W,M]=a(null),[V,N]=a([]),[j,D]=a({}),[U,H]=a(!1),O=x0(()=>Z.map((B)=>({...B,linkedProducts:h1(B.linkedProducts)})),[Z]),F=x0(()=>Object.fromEntries(Object.entries(K??a9).map(([B,k])=>[B,o9({...k,handle:B})])),[K]);u(()=>{if(J.isFeedLoading){D(F),H(!1);return}(async()=>{let I=O.flatMap((b)=>b.linkedProducts||[]).filter((b,y,P)=>P.indexOf(b)===y).filter((b)=>!F[b]);if(D(F),X||I.length===0){H(!1);return}H(!0);let h={...F};try{let b=I.map((P)=>s9(P));(await Promise.allSettled(b)).forEach((P,v)=>{let m=I[v];if(P.status==="fulfilled"&&P.value.product&&m)h[m]=P.value.product})}catch(b){console.error("Error fetching linked products:",b)}D(h),H(!1)})()},[O,X,J.isFeedLoading,F]),u(()=>{if($===void 0)return;if($===null){M(null),N([]);return}let B=O.find((k)=>k.shortcode===$)??O[0]??null;M(B),N(O)},[O,$]);let L=(B,k)=>{if(!X)X1("post",B.shortcode);if(X&&Q==="edit"){q?.(B.shortcode);return}if(X||Y)M(B),N(k),q?.(B.shortcode);else window.open(`https://www.instagram.com/${B.username}/`,"_blank")},z=()=>{M(null),N([]),q?.(null)},C=()=>{if(!W)return;let B=V.findIndex((k)=>k.id===W.id);if(B>-1){let k=(B+1)%V.length,I=V[k];if(I)M(I),q?.(I.shortcode)}},x=()=>{if(!W)return;let B=V.findIndex((k)=>k.id===W.id);if(B>-1){let k=(B-1+V.length)%V.length,I=V[k];if(I)M(I),q?.(I.shortcode)}};if(J.isFeedLoading)return G(i9,{settings:J},void 0,!1,void 0,this);let A=J.feedType==="grid"?j1:J.feedType==="collage"?t9:J.feedType==="spotlight"?e9:J.feedType==="arc"?ZZ:J.feedType==="scattered"?JZ:YZ,E=W?.linkedProducts?.map((B)=>j[B]).filter((B)=>!!B)||[],T=W?Math.max(0,V.findIndex((B)=>B.id===W.id)):0;return G(z0,{children:[G(A,{posts:O,settings:J,onPostClick:L},void 0,!1,void 0,this),W&&_6(G(m9,{post:W,onClose:z,onNext:C,onPrev:x,hasNext:V.length>1,hasPrev:V.length>1,currentIndex:T,total:V.length,linkedProducts:E,productsLoading:U,settings:J},void 0,!1,void 0,this),document.body)]},void 0,!0,void 0,this)}var W1=()=>window,XZ=()=>{let Z=document.currentScript;if(Z?.src)return Z.src;return document.querySelector('script[src*="instagram-story.js"], script[src*="ifs-script-tag-min.js"]')?.src},QZ=(Z)=>{let J=W1(),Y=XZ(),X=Y?new URL(Y,location.href):null,Q=J.__IFS_ASSET_BASE__||(X?X.href.slice(0,X.href.lastIndexOf("/")):""),$=J.__IFS_ASSET_QUERY__??X?.search??"";return`${Q}/ifs-${Z}-chunk.js${$}`};function $Z(Z){let J=W1();J.__IFS_CHUNKS__||={},J.__IFS_CHUNK_PROMISES__||={};let Y=J.__IFS_CHUNKS__[Z];if(Y)return Promise.resolve(Y);let X=J.__IFS_CHUNK_PROMISES__[Z];if(X)return X;let Q=new Promise(($,q)=>{let K=document.createElement("script");K.src=QZ(Z),K.async=!0,K.dataset.ifsChunk=Z,K.onload=()=>{let W=W1().__IFS_CHUNKS__?.[Z];if(W)$(W);else q(Error(`Widget chunk did not register: ${Z}`))},K.onerror=()=>q(Error(`Unable to load widget chunk: ${Z}`)),document.head.appendChild(K)}).catch(($)=>{throw delete W1().__IFS_CHUNK_PROMISES__?.[Z],$});return J.__IFS_CHUNK_PROMISES__[Z]=Q,Q}function e6({settings:Z,open:J,onOpenChange:Y}){let[X,Q]=a(!1),$=$0(null),q=$0(null),K=J??X,W=(j)=>{if(J===void 0)Q(j);Y?.(j)},M=()=>W(!0),V=()=>W(!1);if(u(()=>{if(!K)return;let j=q.current;if(!j)return;let D=document.body.style.overflow;if(document.body.style.overflow="hidden",!j.open)j.showModal();return()=>{if(document.body.style.overflow=D,j.open)j.close();$.current?.focus({preventScroll:!0})}},[K]),!Z.enabled)return null;let N=Z.promoValue?.trim()||"A special offer";return G(z0,{children:[G("div",{id:"ifs-promo",children:G("button",{ref:$,type:"button",class:"story-circle-gradient","aria-label":`Share an Instagram story to unlock ${N}`,"aria-haspopup":"dialog","aria-expanded":K,onClick:M,children:G("div",{class:"story-circle",children:[G("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"#ffffff",class:"add-story-icon",children:G("path",{d:"M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"},void 0,!1,void 0,this)},void 0,!1,void 0,this),G("span",{class:"story-promo-tag",children:N},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this),K&&_6(G("dialog",{ref:q,id:"instagram-promo-instructions","aria-labelledby":"ifs-promo-title","aria-describedby":"ifs-promo-description",onCancel:(j)=>{j.preventDefault(),V()},onClick:(j)=>{if(j.target===j.currentTarget)V()},children:G("div",{class:"ifs-promo-card ifs-promo-story-card",children:[G("div",{class:"ifs-promo-story-progress","aria-hidden":"true",children:[G("span",{},void 0,!1,void 0,this),G("span",{},void 0,!1,void 0,this),G("span",{},void 0,!1,void 0,this)]},void 0,!0,void 0,this),G("header",{class:"ifs-promo-story-header",children:[G("span",{class:"ifs-promo-avatar","aria-hidden":"true",children:G("svg",{viewBox:"0 0 24 24",fill:"none",children:[G("rect",{x:"4",y:"4",width:"16",height:"16",rx:"5",stroke:"currentColor","stroke-width":"1.8"},void 0,!1,void 0,this),G("circle",{cx:"12",cy:"12",r:"3.5",stroke:"currentColor","stroke-width":"1.8"},void 0,!1,void 0,this),G("circle",{cx:"17.5",cy:"6.7",r:"1",fill:"currentColor"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),G("span",{class:"ifs-promo-story-identity",children:[G("strong",{children:"Shoutout offer"},void 0,!1,void 0,this),G("small",{children:"Shared manually on Instagram"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),G("button",{type:"button",class:"ifs-promo-close-icon",id:"instagram-promo-instructions-close","aria-label":"Close shoutout details",onClick:V,children:G("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:G("path",{d:"M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"},void 0,!1,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),G("div",{class:"ifs-promo-copy",children:[G("span",{class:"ifs-promo-kicker",children:"Story shoutout"},void 0,!1,void 0,this),G("h2",{id:"ifs-promo-title",children:"Share it to your story"},void 0,!1,void 0,this),G("span",{class:"ifs-promo-offer",children:N},void 0,!1,void 0,this),G("p",{id:"ifs-promo-description",class:"ifs-promo-lede",children:"Create and upload your story in Instagram, then tag the store. Nothing is posted automatically."},void 0,!1,void 0,this),G("div",{class:"ifs-promo-steps","aria-label":"Three steps",children:[G("span",{children:[G("b",{children:"1"},void 0,!1,void 0,this),"Create"]},void 0,!0,void 0,this),G("span",{children:[G("b",{children:"2"},void 0,!1,void 0,this),"Tag"]},void 0,!0,void 0,this),G("span",{children:[G("b",{children:"3"},void 0,!1,void 0,this),"Claim"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),G("div",{class:"ifs-promo-instruction-box",children:[G("span",{children:"Merchant instructions"},void 0,!1,void 0,this),G("p",{class:"promo-instruction",children:Z.instruction},void 0,!1,void 0,this)]},void 0,!0,void 0,this),G("button",{type:"button",class:"ifs-promo-done",onClick:V,children:"I know what to do"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),document.body)]},void 0,!0,void 0,this)}function Z8({stories:Z,highlights:J,settings:Y,promotionSettings:X,containerRef:Q,productCatalog:$,ratings:q,promotionOpen:K,onPromotionChange:W}){let M=$0(null),V=$0({promotionSettings:X,promotionOpen:K,onPromotionChange:W});return V.current={promotionSettings:X,promotionOpen:K,onPromotionChange:W},u(()=>{let N=!1,j,D=null;return $Z("stories").then((U)=>{if(N)return;j=U.mountStories({stories:Z,highlights:J,settings:Y,container:Q,productCatalog:$,ratings:q});let H=V.current;if(H.promotionSettings?.enabled)Q.classList.add("stories","user-icon","carousel","snapgram"),D=document.createElement("div"),D.className="story ifs-promo-story",Q.prepend(D),M.current=D,X0(G(e6,{settings:H.promotionSettings,open:H.promotionOpen,onOpenChange:H.onPromotionChange},void 0,!1,void 0,this),D)}).catch((U)=>console.error("Error loading Instagram stories:",U)),()=>{if(N=!0,D){if(X0(null,D),D.remove(),M.current===D)M.current=null}j?.()}},[Z,J,Y,Q,$,q,X?.enabled]),u(()=>{let N=M.current;if(!N||!X?.enabled)return;X0(G(e6,{settings:X,open:K,onOpenChange:W},void 0,!1,void 0,this),N)},[X,K,W]),null}var qZ=`https://apps.shopify.com/instafeed-for-instagram-feed/?utm_source=${window?.Shopify?.shop??""}&utm_medium=referral&utm_campaign=powered-by-link`,KZ=2000;function GZ({removeBranding:Z,freeUpgrade:J}){let Y=$0(null);if(u(()=>{if(Z||J)return;let X=setInterval(()=>{if(Y.current&&!document.body.contains(Y.current))console.warn("PoweredBy element was removed from the DOM.")},KZ);return()=>{clearInterval(X)}},[Z,J]),Z||J)return null;return G("div",{ref:Y,style:{textAlign:"center",fontSize:"15px",marginTop:"14px",opacity:0.7},children:G("a",{href:qZ,target:"_blank",rel:"noopener noreferrer",style:{color:"#000",textDecoration:"underline"},children:"Powered by InstaFeed+Story"},void 0,!1,void 0,this)},void 0,!1,void 0,this)}var jZ=new Set(["B","STRONG","I","EM","U","S","STRIKE","SMALL","SUB","SUP","MARK","SPAN","BR","A","IMG"]),WZ=new Set(["STYLE","SCRIPT","TEXTAREA","OPTION","NOSCRIPT","TEMPLATE","IFRAME","OBJECT","EMBED","SVG","MATH"]),MZ=new Set(["ifs-feed-title","ifs-feed-subtitle","instagram-image"]),VZ=(Z)=>Z.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),J8=(Z)=>{if(!Z)return null;try{let J=new URL(Z);return J.protocol==="https:"?J.toString():null}catch{return null}},Y8=(Z)=>{if(!Z||!/^\d{1,4}$/.test(Z))return null;let J=Number(Z);return J>0&&J<=2000?String(J):null},NZ=(Z)=>(Z??"").split(/\s+/).filter((J)=>MZ.has(J)).join(" "),d1=(Z)=>{for(let J of Array.from(Z.attributes))Z.removeAttribute(J.name)};function DZ(Z){if(typeof Z!=="string"||!Z.trim())return"";if(typeof document>"u")return VZ(Z);let J=document.createElement("template");J.innerHTML=Z;let Y=(X)=>{for(let Q of Array.from(X.childNodes)){if(!(Q instanceof Element))continue;if(WZ.has(Q.tagName)){Q.remove();continue}if(Y(Q),!jZ.has(Q.tagName)){Q.replaceWith(...Array.from(Q.childNodes));continue}let $=NZ(Q.getAttribute("class"));if(Q.tagName==="A"){let q=J8(Q.getAttribute("href"));if(!q){let K=document.createElement("span");if(K.append(...Array.from(Q.childNodes)),$)K.setAttribute("class",$);Q.replaceWith(K);continue}if(d1(Q),Q.setAttribute("href",q),Q.setAttribute("target","_blank"),Q.setAttribute("rel","noopener noreferrer"),$)Q.setAttribute("class",$);continue}if(Q.tagName==="IMG"){let q=J8(Q.getAttribute("src"));if(!q){Q.remove();continue}let K=Q.getAttribute("alt")?.slice(0,200)??"",W=Y8(Q.getAttribute("width")),M=Y8(Q.getAttribute("height"));if(d1(Q),Q.setAttribute("src",q),Q.setAttribute("alt",K),$)Q.setAttribute("class",$);if(W)Q.setAttribute("width",W);if(M)Q.setAttribute("height",M);continue}if(d1(Q),Q.tagName==="SPAN"&&$)Q.setAttribute("class",$)}};return Y(J.content),J.innerHTML}var FZ=0,UZ=({size:Z=28,gradient:J=!1})=>{let Y=J?`ifs-ig-gradient-${++FZ}`:"";return G("svg",{width:Z,height:Z,viewBox:"0 0 24 24","aria-hidden":"true",children:[J&&G("defs",{children:G("linearGradient",{id:Y,x1:"0%",y1:"100%",x2:"100%",y2:"0%",children:[G("stop",{offset:"0%","stop-color":"#FED373"},void 0,!1,void 0,this),G("stop",{offset:"25%","stop-color":"#F15245"},void 0,!1,void 0,this),G("stop",{offset:"50%","stop-color":"#D92E7F"},void 0,!1,void 0,this),G("stop",{offset:"75%","stop-color":"#9B36B7"},void 0,!1,void 0,this),G("stop",{offset:"100%","stop-color":"#515BD4"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),G("path",{fill:J?`url(#${Y})`:"currentColor",d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};function I0(Z){return Z.showTitle!==!1&&!!(Z.feedTitle?.trim()||Z.feedSubtitle?.trim()||Z.showFollowButton)}var HZ=({size:Z=28})=>G("svg",{width:Z,height:Z,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8","aria-hidden":"true",children:[G("path",{d:"M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"},void 0,!1,void 0,this),G("circle",{cx:"12",cy:"13",r:"4"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),M1=({icon:Z,size:J})=>{if(!Z||Z==="none")return null;if(Z==="camera")return G(HZ,{size:J},void 0,!1,void 0,this);return G(UZ,{size:J,gradient:Z==="instagram-gradient"},void 0,!1,void 0,this)},V1=({profilePictureUrl:Z,fallbackIcon:J,fallbackSize:Y,username:X})=>{let[Q,$]=a(!1);if(!Z||Q)return G(M1,{icon:J,size:Y},void 0,!1,void 0,this);return G("img",{class:"ifs-profile-picture",src:Z,alt:X?`@${X}`:"Instagram profile",loading:"lazy",decoding:"async",onError:()=>$(!0)},void 0,!1,void 0,this)},w0=({settings:Z,username:J})=>{if(!Z.showFollowButton||!J)return null;let Y=Z.followButtonStyle||"solid";return G("a",{class:`ifs-follow-btn ifs-follow-btn--${Y}`,href:`https://www.instagram.com/${J}/`,target:"_blank",rel:"noopener noreferrer",onClick:()=>X1("follow"),children:G("span",{children:Z.followButtonText||"Follow on Instagram"},void 0,!1,void 0,this)},void 0,!1,void 0,this)};function X8(Z){if(Z>=1e6)return`${(Z/1e6).toFixed(Z%1e6>=1e5?1:0).replace(/\.0$/,"")}M`;if(Z>=1e4)return`${(Z/1000).toFixed(Z%1000>=100?1:0).replace(/\.0$/,"")}K`;return Z.toLocaleString()}var N1=({followers:Z,postCount:J})=>{if(!J&&!Z)return null;return G("div",{class:"ifs-profile-stats","aria-label":"Instagram account statistics",children:[!!J&&G("span",{children:[G("strong",{children:X8(J)},void 0,!1,void 0,this),G("small",{children:"posts"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!!Z&&G("span",{children:[G("strong",{children:X8(Z)},void 0,!1,void 0,this),G("small",{children:"followers"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},C0=({html:Z})=>G("span",{class:"ifs-title-markup",dangerouslySetInnerHTML:{__html:Z}},void 0,!1,void 0,this);function l1({settings:Z,username:J,followers:Y,profilePictureUrl:X,postCount:Q=0}){let $=Z.titleLayout||"classic",q=Z.titleAlignment||"center",K=Z.followAlignment||"spaced",W=DZ(Z.feedTitleHtml||Z.feedTitle||""),M=!!W,V=!!Z.feedSubtitle?.trim();if(!I0(Z))return null;if($==="profile")return G("div",{class:`ifs-title ifs-title--profile ifs-title--${q} ifs-title--follow-${K}`,children:[G("div",{class:"ifs-title-profile-icon",children:G(V1,{profilePictureUrl:X,fallbackIcon:Z.titleIcon==="none"||!Z.titleIcon?"instagram-gradient":Z.titleIcon,fallbackSize:40,username:J},void 0,!1,void 0,this)},void 0,!1,void 0,this),G("div",{class:"ifs-title-profile-text",children:[M&&G("h2",{class:"instastory-title",children:G(C0,{html:W},void 0,!1,void 0,this)},void 0,!1,void 0,this),V?G("p",{class:"ifs-subtitle",children:Z.feedSubtitle},void 0,!1,void 0,this):J&&G("p",{class:"ifs-subtitle",children:["@",J]},void 0,!0,void 0,this),G(N1,{postCount:Q,followers:Y},void 0,!1,void 0,this)]},void 0,!0,void 0,this),G(w0,{settings:Z,username:J},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if($==="profile-compact")return G("div",{class:`ifs-title ifs-title--profile-compact ifs-title--${q}`,children:[G("div",{class:"ifs-title-profile-icon",children:G(V1,{profilePictureUrl:X,fallbackIcon:Z.titleIcon==="none"||!Z.titleIcon?"instagram-gradient":Z.titleIcon,fallbackSize:34,username:J},void 0,!1,void 0,this)},void 0,!1,void 0,this),G("div",{class:"ifs-title-profile-text",children:[M&&G("h2",{class:"instastory-title",children:G(C0,{html:W},void 0,!1,void 0,this)},void 0,!1,void 0,this),V?G("p",{class:"ifs-subtitle",children:Z.feedSubtitle},void 0,!1,void 0,this):J&&G("p",{class:"ifs-subtitle",children:["@",J]},void 0,!0,void 0,this),G(N1,{postCount:Q,followers:Y},void 0,!1,void 0,this)]},void 0,!0,void 0,this),G(w0,{settings:Z,username:J},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if($==="profile-centered")return G("div",{class:`ifs-title ifs-title--profile-centered ifs-title--${q}`,children:[G("div",{class:"ifs-title-profile-icon",children:G(V1,{profilePictureUrl:X,fallbackIcon:Z.titleIcon==="none"||!Z.titleIcon?"instagram-gradient":Z.titleIcon,fallbackSize:44,username:J},void 0,!1,void 0,this)},void 0,!1,void 0,this),M&&G("h2",{class:"instastory-title",children:G(C0,{html:W},void 0,!1,void 0,this)},void 0,!1,void 0,this),V?G("p",{class:"ifs-subtitle",children:Z.feedSubtitle},void 0,!1,void 0,this):J&&G("p",{class:"ifs-subtitle",children:["@",J]},void 0,!0,void 0,this),G(N1,{postCount:Q,followers:Y},void 0,!1,void 0,this),G(w0,{settings:Z,username:J},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if($==="banner"){let j=Z.titleIcon==="none"?null:Z.titleIcon||"instagram-gradient";return G("div",{class:`ifs-title ifs-title--banner ifs-title--${q}`,children:G("div",{class:"ifs-title-banner-surface",children:G("div",{class:"ifs-title-row",children:[G("div",{class:"ifs-banner-identity",children:[(X||j)&&G("span",{class:"ifs-banner-icon",children:G(V1,{profilePictureUrl:X,fallbackIcon:j||"instagram-gradient",fallbackSize:30,username:J},void 0,!1,void 0,this)},void 0,!1,void 0,this),G("div",{class:"ifs-title-row-text",children:[G("span",{class:"ifs-title-kicker",children:J?`@${J}`:"Instagram"},void 0,!1,void 0,this),M&&G("h2",{class:"instastory-title",children:G(C0,{html:W},void 0,!1,void 0,this)},void 0,!1,void 0,this),V&&G("p",{class:"ifs-subtitle",children:Z.feedSubtitle},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),G("div",{class:"ifs-banner-actions",children:[G(N1,{postCount:Q,followers:Y},void 0,!1,void 0,this),G(w0,{settings:Z,username:J},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this)}if($==="stacked")return G("div",{class:`ifs-title ifs-title--stacked ifs-title--${q}`,children:[G(M1,{icon:Z.titleIcon,size:32},void 0,!1,void 0,this),M&&G("h2",{class:"instastory-title",children:G(C0,{html:W},void 0,!1,void 0,this)},void 0,!1,void 0,this),V&&G("p",{class:"ifs-subtitle",children:Z.feedSubtitle},void 0,!1,void 0,this),G(w0,{settings:Z,username:J},void 0,!1,void 0,this)]},void 0,!0,void 0,this);let N=G(w0,{settings:Z,username:J},void 0,!1,void 0,this);return G("div",{class:`ifs-title ifs-title--classic ifs-title--${q} ifs-title--follow-${K}`,children:K==="apart"&&Z.showFollowButton?G("div",{class:"ifs-title-row",children:[G("div",{class:"ifs-title-row-text",children:[M&&G("h2",{class:"instastory-title",children:[G(M1,{icon:Z.titleIcon,size:24},void 0,!1,void 0,this),G(C0,{html:W},void 0,!1,void 0,this)]},void 0,!0,void 0,this),V&&G("p",{class:"ifs-subtitle",children:Z.feedSubtitle},void 0,!1,void 0,this)]},void 0,!0,void 0,this),N]},void 0,!0,void 0,this):G(z0,{children:[M&&G("h2",{class:"instastory-title",children:[G(M1,{icon:Z.titleIcon,size:24},void 0,!1,void 0,this),G(C0,{html:W},void 0,!1,void 0,this),K==="inline"&&Z.showFollowButton&&N]},void 0,!0,void 0,this),V&&G("p",{class:"ifs-subtitle",children:Z.feedSubtitle},void 0,!1,void 0,this),K!=="inline"&&Z.showFollowButton&&G("div",{class:"ifs-title-actions",children:N},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)}var zZ=(Z)=>{let J=Z?.trim().toLowerCase(),Y=J==="shoppable feed"||J==="shoppable feed (annual)"||J==="creatives generation"||J==="creatives generation (annual)",X=!J,Q=Boolean(J)&&!Y;return{advancedFeedLayouts:X||Y,advancedTitleLayouts:X||Y,videos:X||Y,shoppablePopup:X||Y,shoutouts:X||Q||Y,removeBranding:X||Q||Y}};function LZ(Z,J){let Y=zZ(J);return{advancedFeedLayouts:Z?.advancedFeedLayouts??Y.advancedFeedLayouts,advancedTitleLayouts:Z?.advancedTitleLayouts??Y.advancedTitleLayouts,videos:Z?.videos??Y.videos,shoppablePopup:Z?.shoppablePopup??Y.shoppablePopup,shoutouts:Z?.shoutouts??Y.shoutouts,removeBranding:Z?.removeBranding??Y.removeBranding}}function r1(Z,J){return{...Z,feedType:J.advancedFeedLayouts?Z.feedType:Z.feedType==="slider"?"slider":"grid",titleLayout:J.advancedTitleLayouts?Z.titleLayout:"classic",autoplayVideos:J.videos?Z.autoplayVideos:!1}}function OZ(Z,J,Y,X){if(X.videos)return{posts:Z,stories:J,highlights:Y};return{posts:Z.map((Q)=>({...Q,videoUrl:null})),stories:J.filter((Q)=>Q.mediaType!=="VIDEO"),highlights:Y}}function BZ(Z){let J=document.createElement("style");J.textContent=Z,document.head.appendChild(J)}function Q8(Z){let J=document.getElementById("instagram-stories-box"),Y=document.querySelector("#instagram-feed-box, .ifs-feed-block"),X=J!==null||Y!==null;if(Z.onlyWhereDiv)return X;if(X)return!0;if(Z.showOnAllPages)return!0;let Q=(M)=>M.replace(/\/$/,"")||"/",$=window?.Shopify?.routes?.root,q=Q(window.location.pathname),K=$?q===Q($):q==="/",W=window.location.pathname.includes("/products/");if(Z.showOnHomepage&&K)return!0;if(Z.showOnProductpage&&W)return!0;return!1}function r0(Z){if(!Z)return null;try{return document.querySelector(Z)}catch{return null}}var kZ=({placementSettings:Z,feedContainer:J})=>{let Y=!1,X=r0(Z.beforeClassFeed),Q=r0(Z.afterClassFeed);if(X)X.parentNode?.insertBefore(J,X),Y=!0;else if(Q)Q.parentNode?.insertBefore(J,Q),Y=!0;if(!Y){let $=[{selector:".content-for-layout",position:"append"},{selector:"footer",position:"before"},{selector:"#shopify-section-footer",position:"before"},{selector:".footer-section",position:"before"}];for(let q of $){let K=document.querySelector(q.selector);if(K){if(q.position==="before")K.parentNode?.insertBefore(J,K);else K.appendChild(J);Y=!0;break}}}if(!Y)document.body.appendChild(J)},IZ=({placementSettings:Z,storiesContainer:J})=>{let Y=r0(Z.beforeClass),X=r0(Z.afterClass);if(Y)Y.parentNode?.insertBefore(J,Y);else if(X)X.parentNode?.insertBefore(J,X.nextSibling);else{let Q=[{selector:"#instafeed",position:"before"},{selector:"footer",position:"before"},{selector:"#shopify-section-footer",position:"before"},{selector:".footer-section",position:"before"},{selector:"#shopify-section-action-bar",position:"after"},{selector:".slideshow--adapt",position:"after"},{selector:".index-section--hero",position:"after"},{selector:".index-slideshow-section",position:"after"},{selector:".shopify-section--slideshow",position:"after"},{selector:"#shopify-section-header",position:"after"}],$=!1;for(let q of Q){let K=document.querySelector(q.selector);if(K){if(q.position==="before")K.parentNode?.insertBefore(J,K);else K.parentNode?.insertBefore(J,K.nextSibling);$=!0,console.log("Stories container inserted relative to:",q.selector);break}}if(!$)document.body.prepend(J)}},TZ=({placementSettings:Z,feedSettings:J})=>{if(!I0(J))return null;let Y=document.createElement("div");Y.className="ifs-title-container";let X=r0(Z?.feedTitleClass);if(X)return X.parentNode?.insertBefore(Y,X),Y;let Q=document.getElementById("stories");if(Q)return Q.parentNode?.insertBefore(Y,Q),Y;let $=document.getElementById("instafeed");if($)return $.parentNode?.insertBefore(Y,$),Y;return null};function EZ(Z,J){let Y=J.dataset,X={...Z};if(Y.feedTitle!==void 0)X.feedTitle=Y.feedTitle,X.feedTitleHtml=void 0;if(Y.feedSubtitle!==void 0)X.feedSubtitle=Y.feedSubtitle;if(Y.feedType==="grid"||Y.feedType==="slider")X.feedType=Y.feedType;if(Y.imageCount&&!Number.isNaN(parseInt(Y.imageCount,10)))X.imageCount=parseInt(Y.imageCount,10),X.imageCountForCarousel=X.imageCount;if(Y.titleLayout)X.titleLayout=Y.titleLayout;if(Y.titleAlignment)X.titleAlignment=Y.titleAlignment;if(Y.titleIcon)X.titleIcon=Y.titleIcon;if(Y.showFollowButton)X.showFollowButton=Y.showFollowButton==="true";if(Y.postSpacing&&!Number.isNaN(parseInt(Y.postSpacing,10)))X.postSpacing=parseInt(Y.postSpacing,10);if(Y.cornerRadius&&!Number.isNaN(parseInt(Y.cornerRadius,10)))X.cornerRadius=parseInt(Y.cornerRadius,10);return X}var $8=(Z)=>{if(Array.isArray(Z))return Z.filter((J)=>typeof J==="string");if(typeof Z==="string")try{let J=JSON.parse(Z);return Array.isArray(J)?J.filter((Y)=>typeof Y==="string"):[]}catch{return[]}return[]};function RZ(Z,J){if(!Z||Z.length===0)return null;let Y=J==="/"||J===""?"home":J.includes("/products/")?"product":J.includes("/collections/")?"collection":"other",X=[];for(let Q of Z){if(Q?.enabled===!1)continue;let $=Q?.rules??{};if($.pathContains){if(J.includes($.pathContains))X.push({feed:Q,score:3000+String($.pathContains).length});continue}if($.pageType===Y)X.push({feed:Q,score:2000});else if($.pageType==="all")X.push({feed:Q,score:1000})}return X.sort((Q,$)=>$.score-Q.score||Number(Q.feed.id)-Number($.feed.id)),X[0]?.feed??null}function q8(Z){let J={...Z?.settings??{}};if(J.showFeed=J.showFeed??Z?.enabled!==!1,J.storiesMode)J.showHighlights=J.storiesMode==="highlights",J.showStories=J.storiesMode==="stories";if(!Object.prototype.hasOwnProperty.call(J,"promotionSettings"))J.promotionSettings=null;return J}function a1(Z,J,Y){if(Object.prototype.hasOwnProperty.call(Z,"promotionSettings"))return Z.promotionSettings??null;return Y?J:null}function CZ(){let[Z,J]=a(null),[Y,X]=a(!0),[Q,$]=a(null),q=$0([]).current;return u(()=>{let K=(W)=>{if(W.detail?.available===!1)J(null),$("Instagram data is unavailable")};return window.addEventListener("ifs:availability",K),()=>window.removeEventListener("ifs:availability",K)},[]),u(()=>{_8().then((K)=>{C9(K.ratings);let W=RZ(K.feeds,window.location.pathname);if(K.baseFeedSettings=K.feedSettings,K.matchedExtraFeedId=W?.id??null,W)K={...K,feedSettings:{...K.feedSettings,...q8(W)}};else if(K.feedSettings&&!Q8(K.feedSettings))return;if(J(K),K.feedSettings?.customCssCode)BZ(K.feedSettings.customCssCode)}).catch((K)=>$(K.message)).finally(()=>X(!1))},[]),u(()=>{if(!Z||!Z.feedSettings)return;let{feedSettings:K,placementSettings:W,promotionSettings:M,stories:V,highlights:N,posts:j,subscriptionName:D,entitlements:U,productCatalog:H,ratings:O}=Z,F=LZ(U,D),L=r1(K,F),z=r1(Z.baseFeedSettings??K,F),C=F.shoutouts?a1(L,M,Z.matchedExtraFeedId==null):null,x=F.shoutouts?a1(z,M,!0):null,{posts:A,stories:E,highlights:T}=OZ(j,V,N,F),B=document.createElement("div");B.id="stories";let k=document.createElement("div");k.id="instafeed";let I=document.createElement("div"),h=V6(A,z.pinnedPosts,z.hiddenPosts),b=A?.[0]?.username||T?.[0]?.username||E?.[0]?.username||"",y=Array.from(document.querySelectorAll(".ifs-feed-block")),P=y.filter((w)=>w.classList.contains("ifs-ssr-feed")),v=y.filter((w)=>!w.classList.contains("ifs-ssr-feed")),m=Z.matchedExtraFeedId,d=Z.feeds??[],s=(w)=>{let f=w.dataset.widgetId;if(f==="default")return!0;if(f)return!d.some((R)=>String(R.id)===f);return m==null},Y0=P.some(s),Z0=Y0?P:[...P,...v.slice(0,1)],J0=document.getElementById("instagram-feed-box"),o=!Y0&&J0&&!y.includes(J0)?J0:null,q0=o?[...Z0,o]:Z0,W0=Z0.some((w)=>!w.classList.contains("ifs-ssr-feed")),D0=!Y0&&!W0&&!o&&(P.length>0||Q8(z)),t=!Y0&&!W0&&(!!o||D0),i=!1,e=null;if(L.showFeed||L.showHighlights||L.showStories||C?.enabled||I0(L)||z.showFeed||z.showHighlights||z.showStories||x?.enabled||I0(z)){if(q0.length>0)q0.forEach((w,f)=>{let R=w!==o,S=w.classList.contains("ifs-ssr-feed"),p=w.querySelector("[data-ifs-ssr-shell]"),n=R?document.createElement("div"):w;if(R)n.className="ifs-hydrated-shell";let G0=w.dataset.widgetId,j0=S?L:z,K0=!S;if(S&&G0==="default")j0=z,K0=!0;else if(S&&G0){let Q0=d.find((_0)=>String(_0.id)===G0);if(Q0)j0={...z,...q8(Q0)};else j0=z,K0=!0}else if(S)K0=m==null;let g=r1(S?EZ(j0,w):z,F),F0=F.shoutouts?a1(g,M,K0):null,O0=g.sectionOrder,P0=Array.isArray(O0)&&O0.length?O0.filter((Q0)=>Q0==="title"||Q0==="highlights"||Q0==="posts"):R?["title","highlights","posts"]:null,T0=V6(A,g.pinnedPosts,g.hiddenPosts),M0=R?document.createElement("div"):k;M0.classList.add("instafeed");let U0=R?document.createElement("div"):B;if(R)U0.id=`stories-${w.dataset.blockId||f}`,U0.classList.add("ifs-stories-slot");if(U0.classList.toggle("ifs-without-title",!I0(g)),R&&P0){let Q0=g.visibleHighlights,_0=$8(Q0),D1=Q0!=null?T.filter((B0)=>_0.includes(String(B0.highlightId))):T;if(P0.forEach((B0)=>{if(B0==="title"&&I0(g)){let V0=document.createElement("div");V0.className="ifs-title-container",n.appendChild(V0),X0(G(l1,{settings:g,username:b,followers:Z.followers,profilePictureUrl:Z.profilePictureUrl,postCount:T0.length},void 0,!1,void 0,this),V0),q.push(V0)}else if(B0==="highlights"&&(g.showStories||g.showHighlights||F0?.enabled)){if(g.showHighlights&&D1.length>0||g.showStories&&E.length>0||F0?.enabled){if(n.appendChild(U0),X0(G(Z8,{stories:E,highlights:D1,settings:g,promotionSettings:F0,containerRef:U0,productCatalog:H,ratings:O},void 0,!1,void 0,this),U0),q.push(U0),K0)i=!0}}else if(B0==="posts"&&g.showFeed){if(n.appendChild(M0),X0(G(u1,{posts:T0,settings:g,canOpenPopup:F.shoppablePopup,productCatalog:H},void 0,!1,void 0,this),M0),q.push(M0),K0)e=M0}}),p)p.replaceWith(n);else w.appendChild(n);return}if(R&&I0(g)){let Q0=document.createElement("div");Q0.className="ifs-title-container",w.appendChild(Q0),X0(G(l1,{settings:g,username:b,followers:Z.followers,profilePictureUrl:Z.profilePictureUrl,postCount:T0.length},void 0,!1,void 0,this),Q0),q.push(Q0)}if(g.showFeed){if(w.appendChild(M0),X0(G(u1,{posts:T0,settings:g,canOpenPopup:F.shoppablePopup,productCatalog:H},void 0,!1,void 0,this),M0),q.push(M0),K0)e=M0}});if(D0&&z.showFeed&&!z.onlyWhereDiv){let w=k.isConnected?document.createElement("div"):k;w.classList.add("instafeed"),kZ({placementSettings:W,feedContainer:w}),X0(G(u1,{posts:h,settings:z,canOpenPopup:F.shoppablePopup,productCatalog:H},void 0,!1,void 0,this),w),q.push(w),e=w}}if(t&&(z.showStories||z.showHighlights||x?.enabled)&&!i){let w=document.getElementById("instagram-stories-box");if(w)w.appendChild(B);else if(!z.onlyWhereDiv)IZ({placementSettings:W,storiesContainer:B});let f=z.visibleHighlights,R=$8(f),S=f!=null?T.filter((p)=>R.includes(String(p.highlightId))):T;B.classList.toggle("ifs-without-title",!I0(z)),X0(G(Z8,{stories:E,highlights:S,settings:z,promotionSettings:x,containerRef:B,productCatalog:H,ratings:O},void 0,!1,void 0,this),B),q.push(B)}if(t){let w=TZ({placementSettings:W,feedSettings:z});if(w)X0(G(l1,{settings:z,username:b,followers:Z.followers,profilePictureUrl:Z.profilePictureUrl,postCount:h.length},void 0,!1,void 0,this),w),q.push(w)}if(z.showFeed&&e?.isConnected&&!F.removeBranding&&!z.hidePoweredBy&&!z.freeUpgrade)e.appendChild(I),X0(G(GZ,{removeBranding:F.removeBranding,freeUpgrade:z.freeUpgrade},void 0,!1,void 0,this),I),q.push(I);return()=>{q.forEach((w)=>{if(X0(null,w),w.parentNode)w.parentNode.removeChild(w)}),q.length=0}},[Z,q]),null}function K8(){if(window.igServerpath)return;window.igServerpath=!0,X0(G(CZ,{},void 0,!1,void 0,this),document.querySelector("body"))}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",()=>{K8()});else K8()})();
