
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
                width: 40%;
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
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
            <div class="container glt-overview mt-5">
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