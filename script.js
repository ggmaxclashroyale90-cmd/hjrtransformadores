// ============================
// HJR Transformadores
// script.js
// ============================

// Mensagem de boas-vindas
window.addEventListener("load", function () {
    console.log("Bem-vindo ao site da HJR Transformadores Elétricos!");
});

// Animação ao rolar a página
const elementos = document.querySelectorAll("section, .card");

function mostrarElementos() {
    elementos.forEach((elemento) => {
        const topo = elemento.getBoundingClientRect().top;
        const alturaTela = window.innerHeight;

        if (topo < alturaTela - 100) {
            elemento.style.opacity = "1";
            elemento.style.transform = "translateY(0)";
            elemento.style.transition = "all 0.8s ease";
        }
    });
}

elementos.forEach((elemento) => {
    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(40px)";
});

window.addEventListener("scroll", mostrarElementos);
mostrarElementos();

// Destaque do menu conforme a seção
const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let atual = "";

    document.querySelectorAll("section").forEach((secao) => {
        const topo = secao.offsetTop - 120;

        if (pageYOffset >= topo) {
            atual = secao.getAttribute("id");
        }
    });

    links.forEach((link) => {
        link.classList.remove("ativo");

        if (link.getAttribute("href") === "#" + atual) {
            link.classList.add("ativo");
        }
    });
});

// Ano automático no rodapé (caso exista um elemento com id="ano")
const ano = document.getElementById("ano");
if (ano) {
    ano.textContent = new Date().getFullYear();
}

// Botão de voltar ao topo
const botaoTopo = document.createElement("button");
botaoTopo.innerHTML = "⬆";
botaoTopo.style.position = "fixed";
botaoTopo.style.bottom = "20px";
botaoTopo.style.right = "20px";
botaoTopo.style.padding = "12px 15px";
botaoTopo.style.border = "none";
botaoTopo.style.borderRadius = "50%";
botaoTopo.style.background = "#003366";
botaoTopo.style.color = "#fff";
botaoTopo.style.cursor = "pointer";
botaoTopo.style.display = "none";
botaoTopo.style.fontSize = "18px";
botaoTopo.style.boxShadow = "0 2px 10px rgba(0,0,0,.3)";

document.body.appendChild(botaoTopo);

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        botaoTopo.style.display = "block";
    } else {
        botaoTopo.style.display = "none";
    }
});

botaoTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
