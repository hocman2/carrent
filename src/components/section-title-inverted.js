import { html } from 'lit';
import { TailwindElement } from '../tailwind-element.js';

export default class SectionTitleInverted extends TailwindElement {
    static properties = {
        title: {type: String}
    }

    render() {
        return html`
        <h2 class="bg-secondary text-accent w-fit mx-auto px-4 py-4 md:px-8 md:py-4 rounded-md shadow-md font-semibold text-sm">
            ${this.title.toUpperCase()}
        </h2>
        `
    }
}

customElements.define("section-title-inverted", SectionTitleInverted);