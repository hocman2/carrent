import { html } from 'lit';
import { TailwindElement }  from '../tailwind-element.js';

export default class Logo extends TailwindElement {
    createRootElement() {
        return this;
    }

    render() {
        return html`
        <div class="aspect-square h-[inherit]">
            <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 53.5377C17.5 83.3389 42.5706 107.5 73.4998 107.5V99.7912C46.9879 99.7912 25.4993 79.0828 25.4993 53.5377H17.5Z"/>
                <path d="M73.4993 22.7087C55.8244 22.7087 41.4998 36.5143 41.4998 53.539C41.4998 70.5694 55.8244 84.375 73.4993 84.375V92.0837C51.4059 92.0837 33.4994 74.8255 33.4994 53.5378C33.4994 32.2536 51.4059 15 73.4993 15V22.7087Z"/>
                <path d="M73.4998 53.5413V76.6663C60.242 76.6663 49.4995 66.312 49.4995 53.5378C49.4995 40.767 60.242 30.4163 73.4998 30.4163C86.7587 30.4163 97.5 40.767 97.5 53.5378L73.4998 53.5413Z"/>
            </svg>
        </div>
        `
    }
}

customElements.define('logo-svg', Logo);