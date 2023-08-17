import { setMetalId} from "./TransientState.js"


const handleMetalChange = (changeEvent) => {
    if (changeEvent.target.name === "metal") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setMetalId(convertedToInteger)
    }
}

export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()

    document.addEventListener("change", handleMetalChange)

    let metalOptionsHTML = "<h2></h2>"
// debugger
    for (const metal of metals) {
        metalOptionsHTML += `<div>
            <input type='radio' name='metal' value='${metal.id}' /> ${metal.metal}
        </div>`
    }

    return metalOptionsHTML
}


// export const MetalOptions = async () => {
//     const response = await fetch("http://localhost:8088/metals")
//     const metals = await response.json()
//     let metalOptionsHTML = "<h2></h2>"
//     const divStringArray = metals.map(
//         (metal) => {
//           return `<div>
//               <input type='radio' name='metal' value='${metal.id}' /> ${metal.metal}
//           </div>`
//         }
//     )
//     metalOptionsHTML += divStringArray.join("")
//     return metalOptionsHTML
// }