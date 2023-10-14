import "./components/export"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const something = this.ownerDocument.createElement('app-dashboard');
        this.shadowRoot?.appendChild(something);

        const prueba = this.ownerDocument.createElement('app-card');
        this.shadowRoot?.appendChild(prueba);
    }
}

customElements.define('app-container', AppContainer)