window.addEventListener('DOMContentLoaded', () =>{
    getDolars()
})

const getDolars = async () => {
    try {
        const template = document.querySelector('template').content
        const kindsDolars = document.querySelector('#kindsDolars')
        const fragment = document.createDocumentFragment()
        const req = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
        const dolars = await req.json()

        if (dolars.length > 0) {
            
            dolars.forEach(dolar => {
                template.querySelector('.card-title').textContent = dolar.casa.nombre
                template.querySelector('.pv').textContent = dolar.casa.venta
                template.querySelector('.pc').textContent = dolar.casa.compra

                let clone = document.importNode(template,true)
                fragment.appendChild(clone)
            });
            
            kindsDolars.appendChild(fragment)


        }else{
            alert('ERROR!!!')
        }

    } catch (error) {
        console.log(error)
    }
} 

