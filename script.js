/* ============================= */
/* ===== Abertura da bio ======= */
/* ============================= */

function toggleInfo(id) {

  // pega a bio clicada
  const box = document.getElementById(id);

  // fecha todas as outras bios
  document.querySelectorAll(".member-info").forEach(el => {

    // se não for a bio atual
    if (el.id !== id) {

      // remove a classe open
      el.classList.remove("open");

      // se for o rocky, reseta tudo
      if (el.id === "rocky") resetRocky();
    }
  });

  // alterna a bio clicada
  box.classList.toggle("open");

  // se fechou a bio do rocky, reseta
  if (!box.classList.contains("open") && id === "rocky") {
    resetRocky();
  }

  // rolagem suave
  if (box.classList.contains("open")) {
    box.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

/* ============================= */
/* ===== Rocky Mode (IMAGEM) === */
/* ============================= */

// controla estado do rocky
let rockyAtivo = false;

// função chamada ao clicar na imagem rockywtf
function rockyMode(event) {

  // impede o clique de fechar a bio
  event.stopPropagation();

  // pega imagem da bio
  const img = document.getElementById("rocky-bio-img");

  // pega áudio
  const audio = document.getElementById("rocky-audio");

  // se ainda não está ativo
  if (rockyAtivo === false) {

    // troca a imagem
    img.src = "img/rockywtf_ALT.png";

    // toca o áudio
    audio.play();

    // ativa estado
    rockyAtivo = true;

  } else {

    // volta imagem original
    img.src = "img/rockywtf.jpg";

    // pausa o áudio
    audio.pause();

    // volta o áudio para o início
    audio.currentTime = 0;

    // desativa estado
    rockyAtivo = false;
  }
}

// reseta rocky quando fecha a bio
function resetRocky() {

  // pega imagem da bio
  const img = document.getElementById("rocky-bio-img");

  // pega áudio
  const audio = document.getElementById("rocky-audio");

  // se não existir, cancela
  if (!img || !audio) return;

  // volta imagem original
  img.src = "img/rockywtf.jpg";

  // pausa áudio
  audio.pause();

  // zera áudio
  audio.currentTime = 0;

  // desativa estado
  rockyAtivo = false;
}

/* ============================= */
/* === Animação ao aparecer ==== */
/* ============================= */

const cards = document.querySelectorAll(".member-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.2 }
);

cards.forEach((card) => {

  // inicia invisível
  card.style.opacity = "0";

  // deslocamento inicial
  card.style.transform = "translateY(20px)";

  // transição suave
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease";

  // observa o card
  observer.observe(card);
});

/* ============================= */
/* ===== Fallback imagem ======= */
/* ============================= */

document.querySelectorAll(".member-img").forEach((img) => {

  // se der erro, troca para placeholder
  img.onerror = () => (img.src = "img/placeholder.png");
});

/* ============================= */
/* ===== Botão de fechar ======= */
/* ============================= */

function closeInfo(event) {

  // impede clique externo
  event.stopPropagation();

  // pega a bio
  const box = event.target.closest(".member-info");

  // fecha a bio
  box.classList.remove("open");

  // se for rocky, reseta tudo
  if (box.id === "rocky") resetRocky();
}

document.querySelectorAll(".member-info").forEach((box) => {

  // cria botão
  const btn = document.createElement("button");

  // classe do botão
  btn.className = "close-btn";

  // ícone
  btn.innerHTML = "✖";

  // evento de clique
  btn.onclick = closeInfo;

  // adiciona no topo
  box.prepend(btn);
});
