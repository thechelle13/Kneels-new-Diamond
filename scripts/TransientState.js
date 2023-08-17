// set up the transient state data structure and provide initial values
const transientState = {
   metalId : 0, 
   sizeId : 0, 
   styleId : 0,
//    "metals": 0,
//    "sizes": 0,
//    "styles": 0
}

// functions to modify each property of transient state
export const setMetalId = (chosenMetal) => {
    transientState.metalId = chosenMetal
    console.log(transientState)
}
export const setSizeId = (chosenSize) => {
    transientState.sizeId = chosenSize
    console.log(transientState)
}
export const setStyleId = (chosenStyle) => {
    transientState.styleId = chosenStyle
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
