const login = document.getElementById("login");
const senha = document.getElementById("senha");

function validar() {
    event.preventDefault();

  if (login.value === "admin" && senha.value === "root") {
    alert("O login foi efetuado com sucesso!");
    window.location.href = "pag.html";
  } else {
    alert("Tem algo de errado, tente novamente!");
  }
}
