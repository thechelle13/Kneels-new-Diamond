export const OrderDetailsList = async () => {
    // Get the submissions from your API
    const response = await fetch ("http://localhost:8088/orders")
    const orders = await response.json()

    let orderHTML = ""
    
    for (const order of orders) {
    
        orderHTML += `<section class="order">
            <div> Order Details:</div>
            
        <div> ${order.metal}
        </div>
        <div>  ${order.style}
        </div>
        <div>  ${order.size}
        </div>

        </section>
        `
    }
    return orderHTML
}

// export const OrderDetailsList = async () => {
//     const response = await fetch ("http://localhost:8088/orders")
//     const orders = await response.json()
//     const orderHTML = orders.map( (order) => {
//     return `<section class="order">
//             <div> Order Details:</div>
//             <div> ${order.metal}
//             </div>
//             <div>  ${order.style}
//             </div>
//             <div>  ${order.size}
//             </div>
//         </section>
//         `
//     }
//     )
//     return orderHTML
// }