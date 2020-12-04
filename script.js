function verificar(){
    var fsex = document.getElementsByName("sex")
    var fcm = document.getElementsByName("cm")
    var fres = document.getElementById("res")
    genero = " "
    comprimento = " "
    array = " "
    nome = " "

    if (fsex[0].checked && fcm[0].checked) {
        genero = "Menino"
        comprimento = " Curto "
        array = ["Lúcio", "Isaac", "Bento", "Caio", "Diego ", "Eliot", "Fábio", "Heitor", "Ian", "João", "Jonas", "Keven", "Lucas", "Gabriel", "Olavo", "Peter", "Pedro", "Simon", "Théo", "Tomás", "Vítor","Sam"]
        nome = array[Math.floor(Math.random() * array.length)];    
    } else if (fsex[0].checked && fcm[1].checked) {
        genero = "Menino"
        comprimento = "Longo"
        array = ["Cristóvão", "Leonardo", "Benjamin", "Geovanne", "Nataniel", "Ezequiel", "Alexandre", "Estevão", "Joaquim", "Gabriel", "Matheus", "Rafael", "Sérgio", "Miguel", "Charles"]
        nome = array[Math.floor(Math.random() * array.length)];
    } else if (fsex[1].checked && fcm[0].checked) {
        genero = "Menina"
        comprimento = "Curto"
        array = ["Ana", "Isis", "Laura", "Clara", "Júlia", "Alice", "Maria", "Sofia", " Analu", "Clara", "Maia", "Cora", "Ayla", "Naomi", "Luna", "Zoé", "Lívia"]
        nome = array[Math.floor(Math.random() * array.length)];   
    } else if (fsex[1].checked && fcm[1].checked) {
        genero = "Menina"
        comprimento = "Longo"
        array = ["Violeta", "Cecília", "Amélia", "Emanuelly", "Larissa", "Geovanna", "Charlote", "Teodora", "Beatriz", "Lunara", "Natália", "Coralina", "Hortênsia"]
        nome = array[Math.floor(Math.random() * array.length)]; 
    } else {
        console.log("Por favor, selecione as duas opções")
    }

    res.innerHTML = `O nome do seu bebê será: ${nome}`
     
  















}



