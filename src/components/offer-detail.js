import { html } from 'lit';
import { TailwindElement } from '../tailwind-element.js';

export default class OfferDetail extends TailwindElement {
    static properties = {
        description: {type: String},
        detail: {type: String},
    }

    render() {
        return html`
        <div class="flex flex-row gap-4 items-center lg:items-start">
            <div class="h-14 md:h-14 aspect-square p-4 bg-accent fill-secondary rounded-lg">
                <slot name="svg-icon"></slot>
            </div>
            <g>
                <h3 class="leading-normal lg:leading-normal">${this.description}</h3>
                <p class="text-font-secondary text-base lg:text-sm leading-tight">${this.detail}</p>
            </g>
        </div>
        `;
    }
}

customElements.define('offer-detail', OfferDetail);