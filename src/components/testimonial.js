import { html } from 'lit';
import { TailwindElement } from '../tailwind-element.js';

export default class Testimonial extends TailwindElement {

    static properties = {
        score: {type: Number},
        identity: {type: String},
        src: {type: String},
        city: {type: String},
        country: {type: String},
    }

    yellowStar() {
        return html`
        <svg class="fill-accent h-auto" viewBox="0 0 47.94 47.94">
            <path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"></path>
        </svg>
        `;
    }

    blackStar() {
        return html`
        <svg class="fill-secondary h-auto" viewBox="0 0 47.94 47.94">
            <path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"></path>
        </svg>
        `;
    }

    render() {
        // We need arrays to run foreach loops
        let yellowStarList = new Array(Math.round(this.score)).fill(0);
        let blackStarList = new Array(5 - Math.round(this.score)).fill(0);

        return html`
        <div class="h-full shadow-lg grid grid-rows-1 grid-cols-2 rounded-lg overflow-hidden">
            <div>
                <img class="h-full w-full object-cover" src=${this.src} alt="Testimonial picture">
            </div>
            <div class="flex flex-col justify-between px-6 py-4 bg-background">
                <g>
                    <h1 class="text-font text-2xl"><span class="text-3xl font-medium">${this.score.toFixed(1)}</span>Star</h1>
                    <div class="flex flex-row gap-2 h-3">
                        ${yellowStarList.map(() => { return this.yellowStar(); })}
                        ${blackStarList.map(() => { return this.blackStar(); })}
                    </div>
                </g>
                <p class="text-font italic font-light"><slot></slot></p>
                <g>
                    <label class="block text-font text-lg font-medium">${this.identity}</label>
                    <label class="block text-font-secondary font-light">From ${this.city}, ${this.country}</label>
                </g>
            </div>
        </div>
        `
    }
}

customElements.define('customer-testimonial', Testimonial)