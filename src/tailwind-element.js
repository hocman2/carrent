import style from '../style.css?inline';
import {LitElement, unsafeCSS} from 'lit';

const tailwindElement = unsafeCSS(style);

export const TailwindElement = class extends LitElement {
    static styles = [tailwindElement];
};