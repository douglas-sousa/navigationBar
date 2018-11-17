let menu = document.getElementsByClassName("btn-group");
let justText = document.getElementsByClassName("just-text");
//let dropdown = document.getElementsByClassName("dropdown-menu");

[].forEach.call(menu, (elem, index)=>{
    //Cria um evento de clique para cada menu com uma função que busca dentro dele por "dropdown-menu"
    elem.addEventListener("click", function(){
        //Se achar, cria-se um evento de clique para cada âncora dele onde a função triangleChanger é chamado
        if(elem.getElementsByClassName("dropdown-menu").length){
            let eDropdown = elem.getElementsByClassName("dropdown-menu")[0];
                [].forEach.call(eDropdown.children, $anchor => {
                    $anchor.addEventListener("click", function(){
                        triangleChanger(justText, index);
                    })
                })
        //Caso não ache, esse elemento só possui um botão. Pode chamar a função direto.
        }else{
            triangleChanger(justText, index);
        }

    })
});

//Função que pega a posição horizontal do menu selecionado e move os triângulos para debaixo deste menu.
function triangleChanger(elem, index){
    //Atribui a leftPosition a posição horizontal do menu a partir da esquerda 
    let leftPosition = elem[index].getBoundingClientRect().left;
    let blackT;
    let whiteT;

    if(!document.getElementById("tOne")&& !document.getElementById("tTwo")){
        blackT = document.createElement("style");
        whiteT = document.createElement("style");
        blackT.id= "tOne";
        whiteT.id= "tTwo";

        document.body.appendChild(blackT);
        document.body.appendChild(whiteT);
    }

    document.getElementById("tOne").innerHTML = `
        #blackTriangle{
            width:0;
            border-bottom: 12px solid #c5c5c5;
            border-left: 12px solid transparent;
            border-right: 12px solid transparent;
            margin-left:${leftPosition+5}px;
        }`;

    document.getElementById("tTwo").innerHTML = `
        #whiteTriangle{
            width:0;
            border-bottom: 10px solid #fff;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            margin-top: -9.3px;
            margin-left:${leftPosition+6.5}px;
        }`;
    //Retornando todos os menus para a cor original cinza    
    [].forEach.call(elem, $elem=> $elem.style.color="#ACACAC");
    //Modificando só o menu selecionado para verde
    elem[index].style.color = "#006280";

}