import { MetalOptions } from './MetalOptions.js'
import { SizeOptions } from './SizeOptions.js'
import { StyleOptions } from './StyleOptions.js'
import { OrderDetailsList } from './Orders.js'
import { SaveOrder } from './SaveOptions.js'


const render = async () => {
    const metalOptionsHTML = await MetalOptions()
    const styleOptionsHTML = await StyleOptions()
    const sizeOptionsHTML = await SizeOptions()
    const buttonHTML = await OrderDetailsList()
    const newOrdersHTML = await SaveOrder()

    const container = document.querySelector("#container")
    const composedHTML = `
        <h1 class="title">Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${sizeOptionsHTML}
            </section>

            <section class="choices__styles options">
                <h2>Styles</h2>
                ${styleOptionsHTML}
            </section>
        </article>
        <article class="orderButton">
               ${newOrdersHTML}
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            
            ${buttonHTML}
        </article>
    `

    container.innerHTML = composedHTML
   
}

document.addEventListener("newOrderCreated", render)
render ()

