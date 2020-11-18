/*
 * Calculate GT-CDT index
 */


function createContainer(d)  {
    let container = d.createElement("div")
    container.id = "container"
    return container
}


function createInfo(d) {

    let p = d.createElement("p")
    p.appendChild(d.createTextNode("GT-CDT index"))
    p.style.fontSize = "5vh"
    p.style.fontFamily = "Courier"

    let a = d.createElement("a")
    a.href = "https://www.islab.fi/documents/7350541/7929855/2-2018+Laboratoriotiedote+S+-CDT+ja+GT-CDT-Ind+050118.pdf/d6572b44-34bc-4f5b-92ac-9e5f74ba0913"
    a.target = "_blank"
    a.style.textDecoration = "none"
    a.appendChild(p)

    let div = d.createElement("div")
    div.id = "info"
    div.appendChild(a)

    return div
}


function createCalculator(d) {

    let calc = d.createElement("div")

    const createField = (id, readOnly, placeholder = "") => {
        let input = d.createElement("input")
        input.id = id
        input.readOnly = readOnly
        input.placeholder = placeholder
        input.type = "text"
        return input
    }

    // Result field
    let c = createField("result", true, "GT-CDT")

    // Input fields
    let a = createField("input", false, "P-GT")
    let b = createField("input", false, "S-CDT")

    const updateResult = () => {
        let pgt = parseFloat(a.value)
        let scdt = parseFloat(b.value)
        c.value = (
            !Number.isNaN(pgt) && !Number.isNaN(scdt)
        ) ? 0.8 * Math.log(pgt) + 1.3 * Math.log(scdt) : c.value

    }

    a.oninput = updateResult
    b.oninput = updateResult

    calc.appendChild(a)
    calc.appendChild(b)
    calc.appendChild(c)

    return calc

}


//
// Build document body
//

container = createContainer(document)
container.appendChild(createInfo(document))
container.appendChild(createCalculator(document))
document.body.appendChild(container)
