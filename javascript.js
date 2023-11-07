window.addEventListener("DOMContentLoaded", () => {
  const utenteNome = localStorage.getItem("utenteNome");
  if (utenteNome) {
    document.getElementById("name").value = utenteNome;
    document.getElementById("nomeSalvato").textContent = utenteNome;
  }
});

function salvaNome() {
  const nome = document.getElementById("name").value;
  localStorage.setItem("utenteNome", nome);
  document.getElementById("nomeSalvato").textContent = nome;
}

function rimuoviNome() {
  localStorage.removeItem("utenteNome");
  document.getElementById("name").value = "";
  document.getElementById("nomeSalvato").textContent = "";
}
// -------------
// const timer = () => {
//   const startTimer = sessionStorage.getItem("startTime");

//   if (startTimer) {
//     sessionStorage.setItem("startTime", Date.now());
//   }
// };

// setInterval(timer, 1000);

// timer();

// ---------------------------------
