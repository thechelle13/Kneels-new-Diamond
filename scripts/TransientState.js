// set up the transient state data structure and provide initial values
const transientState = {
    // "metals": 0, 
    // "sizes": 0, 
    // "styles": 0,
    // "orders": 0, 
    metalId: 0, 
    sizeId: 0, 
    styleId: 0, 
    orderId: 0

}

// functions to modify each property of transient state
export const setMetalId = (chosenMetal) => {
    transientState.metals = chosenMetal
    console.log(transientState)
}
export const setSizeId = (chosenSize) => {
    transientState.sizes = chosenSize
    console.log(transientState)
}
export const setStyleId = (chosenStyle) => {
    transientState.styles = chosenStyle
    console.log(transientState)
}

// functions to convert transient state to permanent state
export const OrderList = async () => {
    const postOrders = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    const response = await fetch ("http://localhost:8088/orders", postOrders)

    const customEvent = new CustomEvent("newOrderCreated", response)
    document.dispatchEvent(customEvent)
}
