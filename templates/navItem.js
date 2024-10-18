

class NavItem extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });

        this.render();
    }

    connectedCallback() {
        this.render();
    }

    static get observedAttributes() {
        return ['linkText', 'href'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    render() {
        this._shadowRoot.innerHTML = `
                <style>
                    .navItem a {
                        color: #eeeeee;
                        text-shadow: 2px 2px 4px #858585;
                        font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                        text-decoration: none;
                        font-size: 1.2em;
                    }
                    .navItem {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;  /* align horizontal */
                        align-items: center;  /* align vertical */
                        width: 100%;
                    }
                </style>
                <div class="navItem">
                    <a href="${this.href}">${this.linkText}</a>
                </div>
            `;
    }



    // getter setters
    get linkText() {
        return this.getAttribute('linkText');
    }

    set linkText(newValue) {
        this.setAttribute('linkText', newValue);
    }

    get href() {
        return this.getAttribute('href');
    }

    set href(newValue) {
        this.setAttribute('href', newValue);
    }
}
  
customElements.define('nav-item', NavItem);
