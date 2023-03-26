const btn = document.querySelector('.advice-uptade')
const adviceId = document.querySelector('.advice-id')
const adviceDescription = document.querySelector('.advice-description')

btn.addEventListener('click', () => {
    criarConselhoAleatorio()
})

async function criarConselhoAleatorio(){
    const resposta = await fetch('https://api.adviceslip.com/advice')
    const json = await resposta.json()
    const adviceNumber = `Advice #${json.slip.id}`
    const adviceText = `"${json.slip.advice}"`

    adviceId.innerHTML = adviceNumber
    adviceDescription.innerHTML = adviceText
}

criarConselhoAleatorio()