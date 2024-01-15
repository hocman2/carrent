import { html } from 'lit';
import { TailwindElement } from '../tailwind-element.js';

export default class RentStep extends TailwindElement {
    static properties = {
        title: {type: String},
        subtitle: {type: String}
    }
    
    render() {
        return html`
        <div class="flex flex-col items-center gap-2">
            <div class="h-16 md:h-20 aspect-square p-5 bg-accent rounded-lg">
                <slot name="svg-icon" class="h-full aspect-square fill-secondary"></slot>
            </div>
            <g>
              <h3 class="text-base text-center">${this.title}</h3>
              <p class="text-base lg:text-sm text-font-secondary text-center">${this.subtitle}</p>
            </g>
        </div>
        `
    }
};

customElements.define('rent-step', RentStep);