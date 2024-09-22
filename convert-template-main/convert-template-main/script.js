
// Cotação de moedos do dia.
const USD = 5.47
const EUR = 6.11
const GBP = 7.27

// Obtendo os elmentos do formulario
const form =  document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulando o input amo 
amount.addEventListener("input", () => {
    
   const hasCharactersRegex = /\D+/g
   
   amount.value = amount.value.replace(hasCharactersRegex, "")

})

// Captando o evento de sbmit do formulario
form.onsubmit = (event) => {
   event.preventDefault()

   switch (currency.value) {
    case "USD":
        convertCurrency(amount.value, USD, "US$")
        break
    case "EUR":
        convertCurrency(amount.value, EUR, "€")
        break
    case "GBP":
        convertCurrency(amount.value, GBP, "£")
        break     
    }
   
}

//Função para converter a moeda.
function convertCurrency (amount, price, symbol) {
    // Aplica a classe que exibe o footer para mostrar o resultado
    try {
       description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
       
       let total = amount * price
       
       // Verifica se o resultado não é um numero.
       if (isNaN(total)) {
        return alert ("Por favor, digite o valor corretamente para converter.")
       }
       
       // Formatar o valor total
        total = formatCurrencyBRL(total).replace("R$" , "")

       // Calcula o resultado total
       result.textContent = `${total} Reais`
       
       // Aplica a classe que exibe o footer para mostrar o resultado
       footer.classList.add("show-result")

    } catch(error) {
      // Remove a clase do footer removendo ele da tela.
      footer.classList.remove("show-result") 
      
      console.log(error)
      alert("Não foi possivel converter. Tente novamente mais tarde")
    }
}

// Formata a moeda em Real Brasileiro.
function formatCurrencyBRL(value) {
   // Converte para número para utilizar o toLocaleString para formatar no padão BRL
    return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
   })
}