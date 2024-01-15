
// TypeScript would have been better for this
/**
 * @typedef CarouselSwapOptions
 * @property { string } containersId The common ID for the container(s) in which the carousel elements exist (not prefixed with '#')
 * @property { string } elementTag The tag of the element that should be changed. Any valid CSS selector may be passed but they need to be prefixed with '.' or '#'
 * @property { string } currentElementAnimationClass The class to apply to the currently displayed element to play the exit animation
 * @property { string } nextElementAnimationClass The class to apply to the next element to play the enter animation
 * @property { Array<string> } hiddenClasses The classes to apply to make an element hidden
 */

/**
 * 
 * @param { CarouselSwapOptions } options
 */
let swapCarouselElement = (options) => {

    const container = document.querySelector("#" + options.containersId);
    
    let hiddenInvisible = options.hiddenClasses.includes("invisible");

    // This is the element currently displayed
    let current = container.querySelector(options.elementTag + ":nth-child(1)");

    // This is the element that should be displayed
    let next = container.querySelector(options.elementTag + ":nth-child(2)");

    // Return early if crap data was passed
    if (!(current instanceof Element) || !(next instanceof Element)) {
        console.trace("Failed to query 'current' or 'next' as Element");
        return;
    }

    if (options.currentElementAnimationClass) {
        current.classList.add(options.currentElementAnimationClass);
    }
    if (options.nextElementAnimationClass) {
        next.classList.add(options.nextElementAnimationClass);
    }
    
    // For the animation to play the element must be set visible
    if (hiddenInvisible) {
        next.classList.remove("invisible");
    }

    let elementToListenTo = current;
    if (!options.currentElementAnimationClass && !options.nextElementAnimationClass) {
        return;
    }
    else {
        elementToListenTo = next;
    }

    // It is assumed both animations have the same duration and end at the same time. This might be wrong tho
    elementToListenTo.addEventListener("animationend", () => {

        // Re-appending an element that already exists just pushes it down in the tree
        container.appendChild(current);

        // Hide the (previously) current element
        current.classList.add(...options.hiddenClasses);

        if (options.currentElementAnimationClass) {
            current.classList.remove(options.currentElementAnimationClass);
        }

        // Show the new element
        if (options.nextElementAnimationClass) {
            next.classList.remove(options.nextElementAnimationClass);
        }
        
        next.classList.remove(...options.hiddenClasses);

    }, { once: true });
};

let carouselNextElement = () => {
    swapCarouselElement({
        containersId: "carousel-imgs",
        elementTag: "img",
        currentElementAnimationClass: "carousel-switch",
        nextElementAnimationClass: "carousel-switch",
        hiddenClasses: [],
    });

    swapCarouselElement({
        containersId: "carousel-contents",
        elementTag: "carousel-content",
        currentElementAnimationClass: "",
        nextElementAnimationClass: "carousel-switch",
        hiddenClasses: ["absolute", "top-full"],
    });

    swapCarouselElement({
        containersId: "carousel-prices",
        elementTag: "span",
        currentElementAnimationClass: "carousel-switch",
        nextElementAnimationClass: "carousel-switch",
        hiddenClasses: ["absolute", "left-0", "-bottom-full"],
    });
}

// Switch carousel element every 5secs, not ideal for readability, a user control would be better
const CAROUSEL_SWITCH_RATE_MS = 5000;
let repeatCarouselSwitch = () => {
    carouselNextElement();
    setTimeout(repeatCarouselSwitch, CAROUSEL_SWITCH_RATE_MS);
};
setTimeout(() => { repeatCarouselSwitch(); }, CAROUSEL_SWITCH_RATE_MS);