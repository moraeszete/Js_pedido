//criando função do botão "não" 
//writting random function for the button

function esquiva(t){
    var btn = t
    btn.style.position='fixed'
    btn.style.top= geraPosição (10, 90)
    btn.style.left= geraPosição (10, 90)

    console.log("Opaa, desviei...")
}
function geraPosição(min,max) {
    return (Math.random() *(max-min)+min) + '%';
}

// Função para botão "sim"
// "yes" button function

function aceitaSim(){
    alert ("Você aceitou namorar comigo! :D")
}
