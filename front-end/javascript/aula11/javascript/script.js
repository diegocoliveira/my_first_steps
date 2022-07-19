let sequence = 1;
let products = [];
let sortedBy = "";

const modal = document.querySelector("#modal");
const modalDisplay = document.querySelector("#modal-display");
const modalTitle = document.querySelector("#modal-title");
const alertModal = document.querySelector("#alert-modal");
const alertMain = document.querySelector("#alert-main");
const result = document.querySelector("#result");
const productDisplay = document.querySelector("#product-display");

const txtId = document.querySelector("#txtId");
const txtName = document.querySelector("#txtName");
const txtPrice = document.querySelector("#txtPrice");
const txtDescription = document.querySelector("#txtDescription");

const btnSave = document.querySelector("#btnSave");
const btnCancel = document.querySelector("#btnCancel");
const btnAdd = document.querySelector("#btnAdd");
const btnList = document.querySelector("#btnList");
const btnOK = document.querySelector("#btnOK");

const table = document.querySelector("#listProduct");
const search = document.querySelector("#search");

function nextValue() {
    return sequence++;
}

function add(obj) {
    product = obj;
    product.id = nextValue();
    product.incluidoEm = Date.now();
    product.modificadoEm = Date.now();
    products.push(product);
    return true;
}

function find(id) {
    let i = 0;
    for (const produto of products) {
        if(produto.id == id) {
            return produto;
        }
    }
    throw "Não foi possível encontrar o produto";
}

function update(product) {

    for(let i=0; i < products.length; i++) {
        if (products[i].id == product.id) {
            products[i].nome = product.nome;
            products[i].valor = product.valor;
            products[i].descricao = product.descricao;
            products[i].modificadoEm = Date.now();
            return true;
        }
    }
    throw "Não foi possível atualizar o produto";
}

function deleteProduct(id) {
    let nome = "";
    for (let i in products) {
        if (products[i].id == id) {
            products.splice(i, 1);
        }
    }
    listar();
    console.log("Produto excluído com sucesso!");
    result.innerHTML = `Produto ${nome} excluído com sucesso!`;
}

function incluir() {
    txtId.value = 0;
    txtName.value = "";
    txtPrice.value = "";
    txtDescription.value = "";
    result.innerHTML = "";
    modalTitle.innerHTML = "Incluir Produto";
    openModal(true);
}

function editar(id) {
    const product = find(id);
    txtId.value = product.id;
    txtName.value = product.nome;
    txtPrice.value = product.valor;
    txtDescription.value = product.descricao;
    modalTitle.innerHTML = `Editar ${product.nome}(${product.id})`;
    openModal(true);

}

function visualizar(id) {
    const dateFormat = new Intl.DateTimeFormat('pt-br', { dateStyle: 'short', timeStyle: 'short' });
    const product = find(id);
    productDisplay.innerHTML = "";
    productDisplay.innerHTML += `<h2>Dados do Produto - ${product.nome}</h2>`;
    productDisplay.innerHTML += `<p><strong>ID:</strong> ${product.id}</p>`;
    productDisplay.innerHTML += `<p><strong>Nome:</strong> ${product.nome}</p>`;
    productDisplay.innerHTML += `<p><strong>Valor:</strong> ${product.valor.toFixed(2).replace(".", ",")}</p>`;
    productDisplay.innerHTML += `<p><strong>Descrição:</strong></p> <p>${product.descricao.replaceAll("\n", "<br/>")}</p>`;
    productDisplay.innerHTML += `<p><strong>Incluído em:</strong> ${dateFormat.format(new Date(product.incluidoEm))}</p>`;
    productDisplay.innerHTML += `<p><strong>Modificado em:</strong> ${dateFormat.format(new Date(product.modificadoEm))}</p>`;

    openModalDisplay(true);
}

function salvar() {
    alert.innerHTML = "";
    result.innerHTML = "";
    const produto = {};
    try {
        produto.id = txtId.value;
        if (txtName.value.length < 3)
            throw "Falha no cadastro do produto! Nome inválido. Nome mínimo de 3 caracteres";
        produto.nome = txtName.value;
        txtPrice.value = txtPrice.value.replace(",", ".");
        if (txtPrice.value == "" || isNaN(txtPrice.value) || txtPrice.value <= 0)
            throw "Falha no cadastro do produto! Valor inválido. Valor deve ser numérico e maior que zero"
        produto.valor = Number(txtPrice.value);
        if (txtDescription.value.length < 5)
            throw "Falha no cadastro do produto! Descrição inválida. Descrição mínima de 5 caracteres";
        produto.descricao = txtDescription.value;
        if (produto.id == 0) {
            if (add(produto)) {
                listar();
                result.innerHTML = `Produto ${produto.nome} incluído com sucesso!`;
                openModal(false);
            }
        } else {
            if (update(produto)) {
                listar();
                result.innerHTML = `Produto ${produto.nome} alterado com sucesso!`;
                openModal(false);
            }
        }
        ;
    } catch (error) {
        alertModal.innerHTML = error;
        console.log(error);
    }

}

function listar() {
    result.innerHTML = "";
    table.innerHTML = "";
    alertMain.innerHTML = "";
    const productsFiltered = filtrar(products, search.value);

    if (products.length <= 0) {
        alertMain.innerHTML = "Não há produtos cadastrados";
        return;
    }
    if (search.value != "") {
        if (productsFiltered.length <= 0) {
            alertMain.innerHTML = "Não foram encontrados produtos conforme chave de pesquisa!";
            return;
        } else {
            result.innerHTML = `Foram encontrado(s) ${productsFiltered.length}.`;
        }
    }

    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    const row1 = document.createElement('tr');
    const heading1 = document.createElement('th');
    heading1.innerHTML = "Produto";
    heading1.id = "th-produto";
    heading1.onclick = () => { orderBy("name"); }
    row1.appendChild(heading1);
    const heading2 = document.createElement('th');
    heading2.innerHTML = "Valor";
    heading2.id = "th-valor";
    heading2.onclick = () => { orderBy("valor"); }
    row1.appendChild(heading2);
    const heading3 = document.createElement('th');
    heading3.innerHTML = "Editar";
    row1.appendChild(heading3);
    const heading4 = document.createElement('th');
    heading4.innerHTML = "Excluir";
    row1.appendChild(heading4);
    thead.appendChild(row1);
    if (sortedBy == "name asc") {
        heading1.innerHTML = "Produto \u2191";
    }
    if (sortedBy == "name desc") {
        heading1.innerHTML = "Produto \u2193";
    }
    if (sortedBy == "valor asc") {
        heading2.innerHTML = "Valor \u2191";
    }
    if (sortedBy == "valor desc") {
        heading2.innerHTML = "Valor \u2193";
    }

    let row;
    let cell1, cell2, cell3, cell4;
    for (product of productsFiltered){
        let id = product.id;
        row = document.createElement('tr');
        cell1 = document.createElement('td');
        cell1.className = "product";
        cell1.innerHTML = product.nome;
        cell1.onclick = () => { visualizar(id); };
        row.appendChild(cell1);
        cell2 = document.createElement('td');
        cell2.innerHTML = `R$ ${product.valor.toFixed(2).replace(".", ",")}`;
        cell2.className = "price";
        row.appendChild(cell2);
        cell3 = document.createElement('td');
        cell3.innerHTML = "<span class='material-icons'>edit</span>";
        cell3.onclick = () => { editar(id); };
        row.appendChild(cell3);
        cell4 = document.createElement('td');
        cell4.innerHTML = "<span class='material-icons'>delete</span>";
        cell4.onclick = () => { deleteProduct(id); };
        row.appendChild(cell4);
        tbody.appendChild(row);
    }
    table.appendChild(thead);
    table.appendChild(tbody);

}

function filtrar(list, value) {

    function filterProduct(product) {
        return (product.nome.toLowerCase().includes(value.toLowerCase()) || product.descricao.toLowerCase().includes(value.toLowerCase()));
    }

    return list.filter(filterProduct);

}

function orderBy(column) {

    function byName(a, b) {
        if (a.nome.toLowerCase() > b.nome.toLowerCase()) {
            return 1;
        } else if (a.nome.toLowerCase() < b.nome.toLowerCase()) {
            return -1;
        } else {
            return 0;
        }
    }

    function byId(a, b) {
        return a.id - b.id;
    }

    function byPrice(a, b) {
        return a.valor - b.valor;
    }

    if (column == "name") {
        if (sortedBy == "name asc") {
            sortedBy = "name desc";
            products.reverse();
        } else if (sortedBy == "name desc") {
            sortedBy = "";
            products.sort(byId);
        } else {
            sortedBy = "name asc";
            products.sort(byName);
        }
    } else {
        if (sortedBy == "valor asc") {
            sortedBy = "valor desc";
            products.reverse();
        } else if (sortedBy == "valor desc") {
            sortedBy = "";
            products.sort(byId);
        } else {
            sortedBy = "valor asc";
            products.sort(byPrice);
        }

    }
    listar();
}



function openModal(open) {
    if (open) {
        modal.style.display = "flex";
        alertModal.innerHTML = "";
    } else {
        modal.style.display = "none";
        alertMain.innerHTML = "";
    }
}

function openModalDisplay(open) {
    if (open) {
        modalDisplay.style.display = "flex";
    } else {
        modalDisplay.style.display = "none";
    }
    result.innerHTML = "";
}

btnSave.onclick = salvar;
btnCancel.onclick = () => { openModal(false); }
btnAdd.onclick = incluir;
btnList.onclick = listar;
btnOK.onclick = () => { openModalDisplay(false); }
search.onkeyup = listar;

function dadosTeste() {
    add({ nome: "Notebook", valor: 2000, descricao: "Notebook Dell" });
    add({ nome: "Mouse", valor: 100, descricao: "Mouse Logitech" });
    add({ nome: "Teclado", valor: 300, descricao: "Teclado Logitech" });
    add({ nome: "Monitor", valor: 500, descricao: "Monitor LG" });
    add({ nome: "Impressora", valor: 1000, descricao: "Impressora HP" });
    console.log(products);
}

dadosTeste();