// botão lojas
const chamarDist = document.querySelector('#distribuidora-chamar') as HTMLButtonElement
const rotaDist = document.querySelector('#distribuidora-rota') as HTMLButtonElement
const chamarAdega = document.querySelector('#adega-chamar') as HTMLButtonElement
const rotaAdega = document.querySelector('#adega-rota') as HTMLButtonElement

chamarDist.addEventListener('click', () => {
    window.location.href = "https://api.whatsapp.com/send?phone=5513991868515&text=Ol%C3%A1,%20vim%20do%20site,%20e%20gostaria%20de%20ser%20atendido(a)%20por%20aqui!!";
})
rotaDist.addEventListener('click', () => {
    window.location.href = "https://maps.app.goo.gl/5vfiVJ1MbDo9xqaQ6";
})

chamarAdega.addEventListener('click', () => {
    window.location.href = "https://api.whatsapp.com/send?phone=5513997739347&text=Ol%C3%A1,%20vim%20do%20site,%20e%20gostaria%20de%20ser%20atendido(a)%20por%20aqui!!";
})
rotaAdega.addEventListener('click', () => {
    window.location.href = "https://maps.app.goo.gl/8yJFXVcyCbUZLAFY7";
})

// Botão ofertas

const inputNome = document.querySelector('#input-nome') as HTMLInputElement
const btnOfertas = document.querySelector('#btn-ofertas') as HTMLButtonElement

function NomeOfertas(nome) {

    if (nome) {

        window.location.href = `https://api.whatsapp.com/send?phone=5513997739347&text=Ol%C3%A1,%20eu%20me%20chamo%20${nome}%20e%20gostaria%20de%20receber%20suas%20promo%C3%A7%C3%B5es!!`;
    } else {
        window.location.href = "https://api.whatsapp.com/send?phone=5513998033131&text=Ol%C3%A1,%20vim%20do%20site%20e%20gostaria%20de%20receber%20as%20promo%C3%A7%C3%B5es!!"
    }
}

btnOfertas.addEventListener('click', () => {
    NomeOfertas(inputNome.value)
})


console.log('linkou')
