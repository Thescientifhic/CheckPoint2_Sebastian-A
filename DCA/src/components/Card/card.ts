export enum AttributeCard{
    "img" = "img",
    "fact" = "fact",
}

export default class Card extends HTMLElement{
    img?: string;
    fact?: string;

    static get observedAttributes(){
        const attrs: Record <AttributeCard, null> = {
            img: null,
            fact: null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(propName:AttributeCard,
        oldValue: string | undefined,
        newValue: string | undefined){
            switch (propName) {
                    default:
                        this[propName] = newValue;
                    break;
            }
            this.render();
        }

        constructor(){
                super();
                this.attachShadow({mode:'open'});
            }
        connectedCallback(){
            this.render();
        }

        render(){
            if(this.shadowRoot){this.shadowRoot.innerHTML = `
            <section>
            <h1>Cats Facts</h1>
            <img src="${this.img}">
            <p>${this.fact}</p>
            </section>
            `}
        }
}

customElements.define('app-card', Card);