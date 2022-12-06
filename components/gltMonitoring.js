
class GeoTechMonitoring extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
            <style>
            .glt-monitoring {
                font-family: 'Arial', sans-serif;
                display: flex;
                flex-direction: column;
                background: #F5F5F5;
                border: black 2px solid;
                margin: 30px auto
            }
            .glt-wrapper-monitoring{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin: 25px auto;
            }
            .glt-title-monitoring {
                display: flex;
                flex-direction: row;
                justify-content: end;
            }

            .glt-monitoring-table {
                margin: 10px auto;
            }
            .glt-monitoring img {
                width: 8%;
            }
            table {
                font-family: arial, sans-serif;
                border-collapse: seperate;
                border-spacing: 0 10px;
               
            }
            
            td, th {
                text-align: left;
                padding: 16px;
                border-top: 1px solid white;
                border-bottom: 1px solid white;
            }

            td:first-child {
                border-left: 1px solid white;
            }

            td:last-child {
                border-right: 1px solid white;
            }

            .red-cell {
                color: #D43A48;
            }

            tr {
                background-color: white;
            }

            tbody tr:hover {
                background-color: #ebdadd;
            }

            tr:nth-child(even) {
                background-color: white;
            }
            
            </style>
            <div class="glt-monitoring">
                <div class="glt-wrapper-monitoring">
                    <h3>Baurecht-Monitoring</h3>

                    <div class="glt-title-monitoring">
                        <img src='./images/geoLegalTech.svg' />
                        <h3>GeoLegalTech</h3>
                    </div>
                </div>
                <div class="glt-monitoring-table">
                    <table>
                        <tr>
                            <td>Fortschreibung Einzelhandelskonzept fuer die Stadt</td>
                            <td>EHK</td>
                            <td>Ratsitzung/Protokoll</td>
                            <td>4200m</td>
                            <td class="red-cell">Original-Dokument</td>
                            <td class="red-cell">GLT Sharepoint</td>
                        </tr>
                        <tr>
                            <td>4. Aenderung des Bebauungsplanes Nr.5</td>
                            <td>B</td>
                            <td>Begruendung</td>
                            <td>500m</td>
                            <td class="red-cell">Original-Dokument</td>
                            <td class="red-cell">GLT Sharepoint</td>
                        </tr>
                    </table>
                </div>
            </div>
        `;
    }
}

customElements.define('geotech-monitoring', GeoTechMonitoring);