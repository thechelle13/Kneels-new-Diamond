import { setStyleId } from "./TransientState.js"

const handleStyleChange = (changeEvent) => {
    if (changeEvent.target.name === "style") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setStyleId(convertedToInteger)
    }
}

// export const StyleOptions = async () => {
//     const response = await fetch("http://localhost:8088/styles")
//     document.addEventListener("change", handleStyleChange)
//     let styleOptionsHTML = "<h2>Styles</h2>"
//     debugger
//     for (const style of styles) {
//         styleOptionsHTML += `<div>
//             <input type='radio' name='style' value='${style.id}' /> ${style.style}
//         </div>
//         `
//     }
//     return styleOptionsHTML
// }

export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

    document.addEventListener("change", handleStyleChange)

    let styleOptionsHTML = "<h2></h2>"
    const divStringArray = styles.map(
        (style) => {
          return `<div>
              <input type='radio' name='style' value='${style.id}' /> ${style.style}
          </div>`
        }
    )
    styleOptionsHTML += divStringArray.join("")
    return styleOptionsHTML
}

// Use the map() array method in the other component functions to convert the objects into HTML strings in a new array. Then use the join() method to squash the array of strings into a single string and return it.
