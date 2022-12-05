
class GeoLegalTech extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
            <style>
            .glt-overview {
                font-family: 'Arial', sans-serif;
                display: flex;
                flex-direction: column;
                background: white;
                width: 600px;
                border: black 2px solid;
                padding:5px 0;
                margin: 0 auto;
            }
            .glt-title {
                display: flex;
                flex-direction: row;
                justify-content: center
            }
            .glt-overview img {
                width: 8%;
            }
            .info {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-bottom:5px;
            }
            .sub-title {
                margin: 0
            }
            </style>
            <div class="glt-overview">
                <div class="glt-title">
                    <img src='./images/geoLegalTech.svg' />
                    <h3>GeoLegalTech</h3>
                </div>
                <div class="info">
                    <p class="sub-title">Baurecht-Monitoring</p>
                    <p>Im Umfeld dieses Qubes gibt es 5 relevante Ereignisse.</p>
                    <a href="https://www.google.com" target="_blank">Jetzt die GLT-App testen</a>
                </div>
            </div>
        `;
    }
}

customElements.define('geo-overview', GeoLegalTech);