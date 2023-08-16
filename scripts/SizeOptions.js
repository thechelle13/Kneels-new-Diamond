import { setSizeId} from "./TransientState.js"


const handleSizeChange = (changeEvent) => {
    if (changeEvent.target.name === "size") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setSizeId(convertedToInteger)
    }
}

export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()

    document.addEventListener("change", handleSizeChange)

    let sizeOptionsHTML = "<h2></h2>"

    const divStringArray = sizes.map(
        (size) => {
           
          return `<div>
              <input type='radio' name='size' value='${size.id}' /> ${size.carets}
          </div>`
        }
    )
    sizeOptionsHTML += divStringArray.join("")
    return sizeOptionsHTML
}

// export const SizeOptions = async () => {
//     const response = await fetch("http://localhost:8088/sizes")
//     // Fill in the rest

//     document.addEventListener("change", handleSizeChange)

//     let sizeOptionsHTML = "<h2>Sizes</h2>"
//     // debugger
//     for (const size of sizes) {
//         sizeOptionsHTML += `<div>
//             <input type='radio' name='size' value='${size.id}' /> ${size.size}
//         </div>`
//     }
//     return sizeOptionsHTML
// }


// Use the map() array method in the other component functions to convert the objects into HTML strings in a new array. Then use the join() method to squash the array of strings into a single string and return it.

// export const MetalOptions = async () => {
//     const response = await fetch("http://localhost:8088/metals")
//     const metals = await response.json()

//     let optionsHTML = "<h2>Metals</h2>"

//     // Use map() to generate new array of strings
//     const divStringArray = metals.map(
//         (metal) => {
//           return `<div>
//               <input type='radio' name='metal' value='${metal.id}' /> ${metal.metal}
//           </div>`
//         }
//     )

//     // This function needs to return a single string, not an array of strings
//     const optionsHTML += divStringArray.join("")

//     return optionsHTML
// }

// [
//     "<li> <input type="radio" name="size" value="1" /> 0.5 </li>",
//     "<li> <input type="radio" name="size" value="2" /> 0.75 </li>",
//     "<li> <input type="radio" name="size" value="3" /> 1 </li>",
//     "<li> <input type="radio" name="size" value="4" /> 1.5 </li>",
//     "<li> <input type="radio" name="size" value="5" /> 2 </li>"
//  ]