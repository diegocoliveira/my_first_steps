const selectUF = document.querySelector("#uf");

function carregarUFporRegiao(macrorregiao) {
    console.log("Carregando...");
    return new Promise((resolve, reject) => {
        fetch(
            `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${macrorregiao}/estados?orderBy=nome`
        )
            .then((response) => {
                if (!response.ok || response.status !== 200) {
                    Promise.reject(
                        "Failed to Request Data: " + response.statusText
                    );
                }
                return response.json();
            })
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            })
            .finally(() => {
                console.log("Finally");
            });
    });
}
console.log("chamando carregarUFporRegiao ...");
carregarUFporRegiao(1).then((data) => {
    ///const optgroup = document
    data.forEach((uf) => {
        selectUF.innerHTML += `<option value="${uf.id}">${uf.sigla} - ${uf.nome}</option>`;
    });
});
console.log("fim carregarUFporRegiao ...");
