const sn = document.getElementById("sn");
const numero = document.getElementById("numero");

sn.addEventListener("change", function() {
  numero.disabled = sn.checked;
});

numero.addEventListener("input", function() {
  sn.disabled = numero.value !== "";
});

const cepInput = document.getElementById("cep");
const ruaInput = document.getElementById("endereco");
const cidadeInput = document.getElementById("cidade");
const estadoInput = document.getElementById("estado");
const bairroInput = document.getElementById("bairro");
const numeroInput = document.getElementById("numero");

cepInput.addEventListener("input", function() {
  const cep = cepInput.value.replace(/\D/g, "");

  if (cep.length === 8) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (!data.erro) {
          ruaInput.value = data.logradouro || "";
          cidadeInput.value = data.localidade || "";
          estadoInput.value = data.uf || "";
          bairroInput.value = data.bairro || "";
        }
      })
      .catch(error => console.log(error));
  }
});


ruaInput.addEventListener("input", function() {
  if (ruaInput.value !== "") {
    cepInput.disabled = true;
  } else {
    cepInput.disabled = false;
  }
});

cidadeInput.addEventListener("input", function() {
  if (cidadeInput.value !== "") {
    cepInput.disabled = true;
  } else {
    cepInput.disabled = false;
  }
});

estadoInput.addEventListener("input", function() {
  if (estadoInput.value !== "") {
    cepInput.disabled = true;
  } else {
    cepInput.disabled = false;
  }
});

bairroInput.addEventListener("input", function() {
  if (bairroInput.value !== "") {
    cepInput.disabled = true;
  } else {
    cepInput.disabled = false;
  }
});


numeroInput.addEventListener("input", function() {
  cepInput.disabled = true;
});

numeroInput.addEventListener("input", function() {
    if (numeroInput.value === "") {
      cepInput.disabled = false;
    }
  });

  function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
  }
  
  
  const toggleImage = document.createElement("img");
  toggleImage.src = "NightMode.png";
  toggleImage.addEventListener("click", toggleDarkMode);
  
  
  document.body.insertBefore(toggleImage, document.body.firstChild);

  toggleImage.style.width = "25px";
  toggleImage.style.height = "auto";
