import { html } from 'lit';
import { TailwindElement } from '../tailwind-element.js';

export default class MobileBadges extends TailwindElement {
  createRootElement() {
    return this;
  }

  render() {
    return html`
      <div class="flex flex-row items-center gap-4 justify-center lg:justify-start">
        <a href="#">
          <img class="h-[40px]" src="assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" alt="Download on the apple store"/>
        </a>
        <a href="#">
          <img class="h-[60px]" src="assets/google-play-badge.png" alt="Download on google playstore"/>
        </a>
      </div>
    `;
  }
}
customElements.define('mobile-badges', MobileBadges);