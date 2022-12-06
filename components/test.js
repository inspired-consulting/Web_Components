
const template = document.createElement('template');
template.innerHTML = `
    <style>
        .glt-monitoring {
            font-family: 'Arial', sans-serif;
            display: flex;
            flex-direction: column;
            margin-top: 30px
        }
        .glt-wrapper-monitoring{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: 0 auto;
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
    </style>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <div class="container table-responsive-md">
        <div class="glt-monitoring">
            <div class="glt-wrapper-monitoring">
                <h3>Baurecht-Monitoring</h3>

                <div class="glt-title-monitoring">
                    <img src='./images/geoLegalTech.svg' />
                    <h3>GeoLegalTech</h3>
                </div>
            </div>
            <div class="glt-monitoring-table">
                <table class="table mt-3">
                    <thead>
                        <tr>
                            <th>S No</th>
                            <th>name</th>
                            <th>username</th>
                            <th>email</th>
                            <th>phone</th>
                            <th>address</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        </div>
    </div>
`;

class TestBootstrap extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res => res.json())
        .then(data => {
            let tableData = "";
            data.map((values) => {
            console.log("values##",values)
            tableData+= `
                <tr>
                    <td>${values.id}</td>
                    <td>${values.name}</td>
                    <td>${values.username}</td>
                    <td>${values.email}</td>
                    <td>${values.phone}</td>
                    <td>${values.address.city}</td>
                </tr>`;
            });
            this.shadowRoot.querySelector("tbody").innerHTML = tableData;
        });
    }
}
customElements.define('geo-strap', TestBootstrap);