window.onload = function() {
  const alerta = document.createElement("div");
  alerta.textContent = "🔥👄 Bem-vindo a Cozinha da Unique!";
  Object.assign(alerta.style, {
    position: "fixed",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "#ff94a6",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "6px",
    fontFamily: "sans-serif"
  });
  document.body.appendChild(alerta);
  setTimeout(() => alerta.remove(), 5000);
}
