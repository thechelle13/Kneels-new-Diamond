
export const OrderDetailsList = async () => {
    // Get the submissions from your API
    //const response = await fetch ("http://localhost:8088/orders")
    const response = await fetch ("http://localhost:8088/orders??_expand=metal&_expand=style&_expand=size")
    const orders = await response.json()

    let orderHTML = ""
    
    for (const order of orders) {
        
        const metalPrice = order.metal && order.metal.price ? parseFloat(order.metal.price) : 0

        const sizePrice = order.size && order.size.price ? parseFloat(order.size.price) : 0
        const stylePrice = order.style && order.style.price ? parseFloat(order.style.price) : 0

        const orderPrice = metalPrice + sizePrice + stylePrice

        const costString = orderPrice.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })

        orderHTML += `<section class="order">
            <div> Order Details:</div>
            <div>Order #${order.id} cost ${costString}</div>
        
        </section>
        `
    }
    return orderHTML
}
{/* <div> Metal Choice: #${orders.metalId}
        </div>
        <div> Size Choice: #${orders.sizeId}
        </div>
        <div> Style Choice: #${orders.styleId}
        </div> */}
// export const OrderDetailsList = async () => {
//     const response = await fetch ("http://localhost:8088/orders")
//     const orders = await response.json()
    
    
//     const orderHTML = orders.map( (order) => {
//         const orderPrice = order.metal.price + order.size.price + order.style.price
//         const costString = orderPrice.toLocaleString("en-US", {
//             style: "currency",
//             currency: "USD"
//         })
//     return `<section class="order">
//             <div> Order Details:</div>
//             <div>Order #${order.id} cost ${costString}</div>
//         <div> Metal Choice: #${order.metals}
//         </div>
//         <div> Size Choice: #${order.sizes}
//         </div>
//         <div> Style Choice: #${order.styles}
//         </div>
//         </section>
//         `
//     }
//     )
//     const finalCost = orderHTML.join("")
//     return finalCost
// }
