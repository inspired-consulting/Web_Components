
class GeoLegalTechBootstrap extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
    }
    set usersData(data) {
        this.root = innerHTML = `
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
            <div class="container table-responsive-sm">
                <table class="table mt-5">
                    <tbody>
                        <tr>
                            <th scope="row">${data.id}</th>
                            <td>${data.name}</td>
                            <td>${data.username}</td>
                            <td>${data.email}</td>
                            <td>${data.website}</td>
                            <td class="red-cell">Original-Dokument</td>
                            <td class="red-cell">GLT Sharepoint</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    }


}
customElements.define('geo-bootstrap', GeoLegalTechBootstrap);