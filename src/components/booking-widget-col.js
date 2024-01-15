import { html } from 'lit';
import { TailwindElement } from '../tailwind-element.js';

export default class BookingWidgetCol extends TailwindElement {
    static properties = {
        label: {type: String},
        subtitle: {type: String}
    }
    
    render() {
        return html`
            <div class="flex flex-row gap-2 text-left items-center fill-font-secondary stroke-font-secondary">
                <slot name="svg-icon"></slot>
                <g class="flex flex-col justify-center">
                    <label class="text-font hidden sm:block text-sm lg:text-base">${this.label}</label>
                    <p class="text-font-secondary font-light hidden lg:block text-sm leading-none">${this.subtitle}</p>
                </g>
            </div>
        `;
    }
}

customElements.define('booking-widget-col', BookingWidgetCol);