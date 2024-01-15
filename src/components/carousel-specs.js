import { html } from 'lit';
import { TailwindElement } from '../tailwind-element.js'

export default class CarouselSpecs extends TailwindElement {
    static properties = {
        spec1: {type: String},
        spec2: {type: String},
        spec3: {type: String},
        spec4: {type: String},
    }

    render() {
        return html`
        <div class="flex flex-row justify-between items-center text-font-secondary fill-font-secondary stroke-font-secondary text-sm">
            <div class="flex flex-col">
                <div class="mb-2">
                <div class="inline h-6 fill-none stroke-font-secondary">
                    <slot name="svg-spec-1"></slot>
                </div>
                <span>${this.spec1}</span>
                </div>
                <div>
                <slot class="inline h-6 fill-none stroke-font-secondary" name="svg-spec-3"></slot>
                <span>${this.spec3}</span>
                </div>
            </div>
            <div class="flex flex-col">
                <div class="mb-2">
                <slot class="inline h-6 fill-none stroke-font-secondary" name="svg-spec-2"></slot>
                <span>${this.spec2}</span>
                </div>
                <div>
                <slot class="inline h-6 fill-none stroke-font-secondary" name="svg-spec-4"></slot>
                <span>${this.spec4}</span>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('carousel-specs', CarouselSpecs);