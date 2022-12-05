
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
                background: white;
                border: black 2px solid;
                margin-top:30px
            }
            .glt-wrapper-monitoring{
                display: flex;
                flex-direction: row;
                justify-content: space-around 
            }
            .glt-title-monitoring {
                display: flex;
                flex-direction: row;
            }
            .glt-monitoring img {
                width: 8%;
            }
            table {
                font-family: arial, sans-serif;
                border-collapse: collapse;
                width: 100%;
            }
              
            td, th {
                border: 1px solid #dddddd;
                text-align: left;
                padding: 8px;
            }

            tr:nth-child(even) {
                background-color: #dddddd;
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
                <div class="">
                    <table>
                        <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        </tr>
                        <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        </tr>
                        <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        </tr>
                    </table>
                </div>
            </div>
        `;
    }
}

customElements.define('geotech-monitoring', GeoTechMonitoring);