var titulos = Array('Soluções de Hardware', 'Soluções de Software', 'Soluções de Rede',
        'Sistema para controle comercial', 'Soluções em Suprimentos', 'Soluções de Hardware', 'Com Contrato', 'Sem Contrato');
var texto = array("Assistência Técnica Especializada em Informática<br>Venda de Equipamentos", "Sistemas Operacionais<br>Aplicativos<br>Anti – Vírus<br>E-mails - Correio Eletrônico",
     "Dados: Configuração, cabeamento, climpagem", "- Vicommerce: Frente de caixa (açougues, bares, restaurantes, mini mercearias.<br>- Arpa Sistemas:Fábricas, NFe, controle de estoque, fincanceiro, emissão de boletos, entre outros.",
    "Cartuchos de Toner<br>Remanufaturados<br>Novos Compatíveis", "Assistência Técnica Especializada em Informática Venda de Equipamentos",
    "Avulso - Valor por chamado estabelecido em contrato.<br>Mensal - Valor Fixo de Mão de Obra independente do número de chamadas.", "Avulso - Sem compromisso.");

function preload() {  
    textQtde = titulos.length; 

   /* for (i = 0; i < imgQtde; i++) {/* for para contar as imagens *
        var preloadimg = new Image();
        preloadimg.src = imgs[i];
    }*/

}
function carregarConteudo(j) {
    document.getElementById('divSServicos').innerHTML = "<h1>" + titulos[j] + "</h1>"+"<br>"+texto[j];
    
}
function iniciarSlide() {/* função para carregar as fotos e iniciar a transição */
    preload();
    max = textQtde; /* o maximo de fotos é 2 */
    min = 1; /* o minimo de fotos é 1, quase sempre vai ser 1 */
    fi = min; /* fi foi atribuida min que é 1 */
    tr = true;/* criado a variavel tr e atribuida true, como se fosse um boolean */
    carregarConteudo(1);/* criada a função logo abaixo e passado para carregar uma imagem */
   // document.getElementById("moldura").addEventListener("transitionend", fimTr);
    //tr = setInterval(trocaFoto, 4000);/* tr quem antes era um boolean, agora foi
		//				atribuido o metodo de intervalo e é passo a função que esta logo abaixo e o 4000 conta os segundos, 
			//			ou seja, 1000 é o equivalente a 1 segundo.*/
}

function trocaFoto() {/* função para fazer a troca de imagens automatico */

    tr = false;
    fi++;
    if (fi > max) {
        fi = min;
    }
    carregarFoto("f" + fi + ".jpg");

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
        carregarFoto("f" + fi + ".jpg");

    }
}

function anterior() {
    if (tr) {
        tr = false;
        fi--;
        if (fi < min) {
            fi = max;
        }
        carregarFoto("f" + fi + ".jpg");

    }
}