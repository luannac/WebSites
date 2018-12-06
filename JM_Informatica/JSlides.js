function carregarConteudo(j) {
    botaoProx ="<div id=\"botaoProximo\" style=\"background-image: url(&quot;f2.jpg&quot;);\">"+
     "<div class=\"seta-5\" onclick=\"proximo()\"><i></i>"+
    "</div> ";

    if(j==1){
        document.getElementById('divSServicos').innerHTML = botaoProx+"<h1>Soluções de Hardware</h1><br>Assistência Técnica Especializada em Informática<br>Venda de Equipamentos";
    }
    if(j==2){
        document.getElementById('divSServicos').innerHTML = botaoProx+"<h1>Soluções de Software</h1><br>Sistemas Operacionais<br>Aplicativos<br>Anti – Vírus<br>E-mails - Correio Eletrônico";
    }
    if(j==3){
        document.getElementById('divSServicos').innerHTML = botaoProx+"<h1>Soluções de Rede</h1><br>Dados: Configuração, cabeamento, climpagem";
    }
    if(j==4){
        document.getElementById('divSServicos').innerHTML = botaoProx+"<h1>Sistema para controle comercial</h1><br> Vicommerce: Frente de caixa (açougues, bares, restaurantes, mini mercearias.<br>- Arpa Sistemas:Fábricas, NFe, controle de estoque, fincanceiro, emissão de boletos, entre outros.";
    }
    if(j==5){
        document.getElementById('divSServicos').innerHTML = botaoProx+"<h1>Soluções em Suprimentos</h1><br>Cartuchos de Toner<br>Remanufaturados<br>Novos Compatíveis";
    }
    if(j==6){
        document.getElementById('divSServicos').innerHTML = botaoProx+"<h1>Soluções de Hardware</h1><br>Assistência Técnica Especializada em Informática Venda de Equipamentos";
    }
    if(j==7){
        document.getElementById('divSServicos').innerHTML = botaoProx+"<h1>Com Contrato</h1><br>Avulso - Valor por chamado estabelecido em contrato.<br>Mensal - Valor Fixo de Mão de Obra independente do número de chamadas.";
    }
    if(j==8){
        document.getElementById('divSServicos').innerHTML = botaoProx+"<h1>Sem Contrato</h1><br>Avulso - Sem compromisso.";
    }
}
function iniciarSlide() {
    max = 8;
    min = 1;
    fi = min; 
    tr = true;
    carregarConteudo(1);
    document.getElementById("divSServicos").addEventListener("transitionend", fimTr);
    tr = setInterval(trocaText, 4000);
}

function trocaText() {
    tr = false;
    fi++;
    if (fi > max) {
        fi = min;
    }
   carregarConteudo(fi);
}

function fimTr() {
    tr = true;

}

function proximo() {
    if (tr) {
        tr = false;
        fi++;
        if (fi > max) {
            fi = min;
        }
        carregarConteudo(fi);
    }
}

function anterior() {
    if (tr) {
        tr = false;
        fi--;
        if (fi < min) {
            fi = max;
        }
        carregarConteudo(fi);
    }
}
//JAVA SCRIPT
        // INICIO DA FUNÇÃO CHECA_FORMULARIo
        function checa(verificacao) {

            if (verificacao.nome.value == "") {
                alert("Por favor, Coloque seu nome");
                return (false);
            }

            if (verificacao.mensagem.value == "") {
                alert("Por favor, Coloque sua Mensagem");
                return (false);
            }

            // VERIFICA CAMPO EMAIL
            if (verificacao.email.value == "") {
                alert("O campo E-mail esta vazio");
                verificacao.email.focus();
                return (false);
            }

            if (verificacao.email.value.indexOf("@", 0) == -1) {
                alert("O email é inválido");
                verificacao.email.focus();
                return (false);
            }
            
            if (verificacao.email.value.indexOf(".", 0) == -1) {
                alert("O email é inválido");
                verificacao.email.focus();
                return (false);
            }

        }