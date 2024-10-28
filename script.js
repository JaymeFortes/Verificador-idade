function verificar() {
        const data = new Date();
        const ano = data.getFullYear();
        const fAno = document.getElementById("txtano");
        const res = document.querySelector("#res");

        if (fAno.value.length === 0) {
                res.innerHTML = "Erro, verifique os dados e tente novamente.";
        } else if (fAno.value.length !== 4 || isNaN(fAno.value) || fAno.value > ano) {
                res.innerHTML = "Erro: verifique os dados e tente novamente.";
        } else {
                const fSex = document.getElementsByName("radsex");
                const idade = ano - Number(fAno.value);
                let genero = "";
                const img = document.createElement("img");
                img.setAttribute("id", "foto");
                if (fSex[0].checked) {
                        genero = "um Homem";
                        if (idade >=0 && idade <= 10) {
                                //crianca
                                img.setAttribute("src", "photos/homem-bebe.png")
                        } else if (idade > 10 && idade <= 27) {
                                //jovem
                                img.setAttribute("src", "photos/homem-jovem.png")
                        } else if (idade >= 28 && idade <= 60) {
                                // adulto
                                img.setAttribute("src", "photos/homem-adulto.png")
                        } else {
                                //idoso
                                img.setAttribute("src", "photos/homem-idoso.png")
                        }
                } else if (fSex[1].checked) {
                        genero = "uma Mulher";
                        if (idade >=0 && idade <= 10) {
                                //crianca
                                img.setAttribute("src", "photos/mulher-bebe.png")
                        } else if (idade > 10 && idade <= 27 ) {
                                //jovem
                                img.setAttribute("src", "photos/mulher-jovem.png")
                        } else if (idade >= 28 && idade <= 60 ) {
                                // adulto
                                img.setAttribute("src", "photos/mulher-adulta.png")
                        } else {
                                //idoso
                                img.setAttribute("src", "photos/mulher-idosa.png")
                        }
                }
                res.style.textAlign = "center";
                res.innerHTML = "Detectamos "+genero + " com "+idade + " anos.";
                res.appendChild(img);
        }
       
}