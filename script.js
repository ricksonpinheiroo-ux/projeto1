const login = document.getElementById("login");
const email = document.getElementById("email");


function validar() {
    event.preventDefault();

  if (login.value === "admin" && email.value === "root") {
    alert("O login foi efetuado com sucesso!");
    window.location.href = "pag.html";
  } else {
    alert("Tem algo de errado, tente novamente!");
  }
}

function adicionar() {
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");

  if (nome.value === "" || email.value === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const tabela = document.getElementById("tabela");
  const novaLinha = tabela.insertRow();

  const celulaNome = novaLinha.insertCell(0);
  const celulaEmail = novaLinha.insertCell(1);

  celulaNome.textContent = nome.value;
  celulaEmail.textContent = email.value;

  nome.value = "";
  email.value = ""; 
  
}