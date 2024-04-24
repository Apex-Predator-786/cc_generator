(function year() {
    function Year() {
        let a = new Date().getFullYear()
        return a;
    }
    let b = Year()
    let select = [
        `<option value="Random">Random</option>
        <option value="${b}">${b}</option>
        <option value="${b + 1}">${b + 1}</option>
        <option value="${b + 2}">${b + 2}</option>
        <option value="${b + 3}">${b + 3}</option>
        <option value="${b + 4}">${b + 4}</option>`
    ]
    let d = document.getElementById("year")
    d.innerHTML = select
})()