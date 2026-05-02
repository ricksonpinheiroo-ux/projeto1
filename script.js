const login = document.getElementById("login");
const senha = document.getElementById("senha");
const lista = document.getElementById("listaUsuarios");

function validar() {
    event.preventDefault();

  if (login.value === "admin" && senha.value === "root") {
    alert("O login foi efetuado com sucesso!");
    window.location.href = "pag.html";
  } else {
    alert("Tem algo de errado, tente novamente!");
  }
}

function adicionar() {
    event.preventDefault();
    
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;

  if (nome || email === "") {
    alert('Preencha todos os campos corretamente!');
    return;
  }
  
  const usuario ={
    nome: nome,
    email: email,
  }
  const li = document.createElement("li");
  li.textContent = `Nome: ${usuario.nome} - Email: ${usuario.email}`;
  lista.appendChild(li);

  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
}