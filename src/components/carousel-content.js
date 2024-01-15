import { html } from "lit";
import { TailwindElement } from "../tailwind-element";

export default class CarouselContent extends TailwindElement {

    static properties = {
        vehicle: {type: String},
        specs: {type: String},
        note: {type: Number},
        reviews: {type: Number},

        spec1: {type: String},
        spec2: {type: String},
        spec3: {type: String},
        spec4: {type: String},
    }

    render() {
        return html`
        <div class="h-[32rem] md:h-[28rem] flex flex-col gap-16 justify-between bg-background rounded-md px-2 py-2">
            <carousel-title vehicle="${this.vehicle}" specs="${this.specs}" note="${this.note}" reviews="${this.reviews}"></carousel-title>
            <p class="italic text-base font-light">
                <slot name="description"></slot>
            </p>
            <carousel-specs
                spec1="${this.spec1}"
                spec2="${this.spec2}"
                spec3="${this.spec3}"
                spec4="${this.spec4}">
                <slot slot="svg-spec-1" name="svg-spec-1"></slot>
                <slot slot="svg-spec-2" name="svg-spec-2"></slot>
                <slot slot="svg-spec-3" name="svg-spec-3"></slot>
                <slot slot="svg-spec-4" name="svg-spec-4"></slot>
            </carousel-specs>
        </div>
        `;
    }

}

customElements.define('carousel-content', CarouselContent);