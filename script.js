function pesquisar(){
    let section = document.getElementById('resultados-pesquisa');

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    campoPesquisa = campoPesquisa.toLowerCase();

    if (campoPesquisa == ""){
        section.innerHTML = "<p>Nenhum texto digitado!</p>";
        return;
    }

    let resultados = "";
    for (let dado of dados){
        let nome = dado.nome.toLowerCase();
        let descricao = dado.descricao.toLowerCase();
        
        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
            resultados += `
                <div class="item-resultado">
                    <h2><a href="${dado.link}" target="_blank">${dado.nome}</a></h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank" rel="noopener noreferrer">Mais Informações</a>
                </div>
            `;
        }
    }

    if(!resultados) {
        resultados = "<p>Resultado não Encontrado</p>";
    }     
    section.innerHTML = resultados;
}
