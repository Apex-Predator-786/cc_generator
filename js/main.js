let bin = document.getElementById("bin");
let month = document.getElementById("month")
let year = document.getElementById("year")
let date_checkbox = document.getElementById("date-checkbox")
let cvv_checkbox = document.getElementById("cvv-checkbox")
let cvv = document.getElementById("cvv")
let qunatity = document.getElementById("Quantity")
let select = document.getElementById("formet")

function luhnalgo(ccc) {

    let ccss = ccc.split("").map(Number);
    cc = ccss.reverse()
    if (cc.length <= 16) {
        for (let i = 0; i < cc.length; i++) {
            if (i % 2 !== 0) {
                cc[i] = cc[i] * 2
                let cceven = cc[i].toString();
                let cclength = cceven.split("").map(Number);
                if (cclength.length === 2) {
                    var cccc = cclength[0] + cclength[1]
                    cc[i] = cccc
                }
            }
        }
        let sum = 0
        for (let i = 0; i < cc.length; i++) {
            sum = sum + cc[i]
        }

        if (sum % 10 === 0) {
            return ccc
        }
        else {
            return null
        }
    }

}

function months() {

    if (date_checkbox.checked === true) {
        if (month.value === "Random") {
            let monthrand = 1 + Math.floor(Math.random() * 12)
            if (monthrand <= 9) {
                monthrand = `0${monthrand}`
            }
            return monthrand
        }
        else {
            return month.value
        }
    }
}
function years() {

    if (year.value === "Random") {
        let a = new Date().getFullYear()
        let yeararray = [a, a + 1, a + 2, a + 3, a + 4]
        let yearrand = Math.floor(Math.random() * 5)
        let yearvalue = yeararray[yearrand]
        return yearvalue

    } else {
        let yearvalue = year.value
        return yearvalue

    }
}

function cvvs() {
    if (cvv.value == "") {
        let randcvv = Math.floor(Math.random() * 1000)
        if (randcvv < 100 && randcvv >= 10) {
            return `0${randcvv}`
        }
        else if (randcvv < 10) {
            return `00${randcvv}`
        }

        else {
            return randcvv
        }
    }
    else if (cvv.value < 0) {
        return cvv.value = ""
    }
    else if (cvv.value.length > 3) {
        alert("Please enter valid cvv")
        cvv.value = ''
        return cvvs()
    }
    else if (cvv.value.length > 0 && cvv.value.length < 4) {
        if (cvv.value.length === 1) {
            return `00${cvv.value}`
        }
        else if (cvv.value.length === 2) {
            return `0${cvv.value}`
        }
        else {
            return cvv.value
        }
    }
}

function cvvs1() {
    if (cvv.value == "") {
        if (cvv.value == "") {
            let randcvv = Math.floor(Math.random() * 10000)
            if (randcvv < 1000 && randcvv >= 100) {
                return `0${randcvv}`
            }
            else if (randcvv < 100 && randcvv >= 10) {
                return `00${randcvv}`
            }
            else if (randcvv < 10) {
                return `000${randcvv}`
            }

            else {
                return randcvv
            }
        }
    }
    else if (cvv.value < 0) {
        return cvv.value = ""
    }
    else if (cvv.value.length > 4) {
        alert("Please enter valid cvv")
        cvv.value = ''
        return cvvs1()
    }
    else if (cvv.value.length > 0 && cvv.value.length < 5) {
        if (cvv.value.length === 1) {
            return `000${cvv.value}`
        }
        else if (cvv.value.length === 2) {
            return `00${cvv.value}`
        }
        else if (cvv.value.length === 3) {
            return `0${cvv.value}`
        }
        else {
            return cvv.value
        }
    }
}


function gencc() {

    // bin area

    let binvalue = bin.value
    let binvaluearray = binvalue.split("")
    let text = `abcdefghijklmnopqrstuvwyzABCDEFGHIJKLMNOPQRSTUVWYZ!~@#$%^&*()_-+=>?./<|'"{}[]:; `
    let num = `1234567890`

    for (let i = 0; i < binvalue.length; i++) {
        for (let j = 0; j < text.length; j++) {

            if (binvalue[i] === text[j]) {
                var ale = 3
                binvaluearray[i] = "x"
            }
        }

        for (let k = 0; k < num.length; k++) {

            if (binvaluearray[i] !== "x" && binvaluearray[i] === num[k]) {

                binvaluearray[i] = parseInt(binvaluearray[i])
            }
            else if (binvalue[i] === ",") {
                var com = "hello"
            }
        }
    }



    if (binvalue.length <= 16 && com !== "hello") {
        for (let j = 0; j < 16; j++) {

            if (binvalue[j] === undefined && binvalue !== "") {
                binvaluearray[j] = "x"
            }
        }
        let binString = binvaluearray.join("");
        bin.value = binString;
    }
    else if (com === "hello") {

    }

    else if (binvalue.length > 16) {
        let slices = binvaluearray.slice(0, 16)
        let slicestring = slices.join("")
        bin.value = slicestring
    }

    else {
        alert("convert to 16 digit bin number")
    }

    let binv = bin.value

    if (binv === "xxxxxxxxxxxxxxxx") {
        alert("correct bin please")

    }

    else if (binv[0] == 'x' && binv[1] == 'x' && binv[2] == 'x' && binv[3] == 'x' && binv[4] == 'x' && binv[5] == 'x') {
        bin.value = "xxxxxxxxxxxxxxxx"
        alert("please check the bin value")
    }

    else if (binv[0] === "x" || binv[0] === " ") {
        bin.value = "xxxxxxxxxxxxxxxx"
        alert("please check the first number")
    }

    else if (binv !== "" && com !== "hello") {
        if (ale === 3 && binvalue[0] !== " ") {
            alert("wrong formet but still generating cards")

        }
        if (qunatity.value < 0) {
            var qunatityvalue = 5
            qunatity.value = 5
        }
        else if (qunatity.value !== "") {
            var qunatityvalue = parseInt(qunatity.value)
        }
        else {
            var qunatityvalue = 0
            qunatity.value = 0
        }


        let value = select.value
        function cccard(bin) {
            let binzz = bin

            function card(card) {
                let binz = card.split("")
                let srn = 0
                for (let i = 0; i < binvaluearray.length; i++) {

                    srn += binvaluearray[i]
                }

                if (srn > 0) {

                    binz[15] = "x"
                }

                for (let i = 0; i < card.length; i++) {
                    if (binz[i] === "x") {
                        binz[i] = Math.floor(Math.random() * 10)
                    }
                }
                return binz
            }
            let biny = card(binzz)
            let binstr = biny.join("")
            if (luhnalgo(binstr) === null) {
                return cccard(bin)

            }

            else {

                return binstr
            }
        }
        if (value === "PIPE") {

            if (binv[0] == 3) {

                let resultarr = []
                for (let i = 0; i < qunatityvalue; i++) {
                    if (date_checkbox.checked === true && cvv_checkbox.checked === true) {

                        resultarr[i] = `${cccard(binv)}|${months()}|${years()}|${cvvs1()}`

                    }
                    else if (date_checkbox.checked === false && cvv_checkbox.checked === false) {
                        resultarr[i] = `${cccard(binv)}`

                    }
                    else if (date_checkbox.checked === true && cvv_checkbox.checked === false) {
                        resultarr[i] = `${cccard(binv)}|${months()}|${years()}`

                    }
                    else if (cvv_checkbox.checked === true && date_checkbox.checked === false) {
                        resultarr[i] = `${cccard(binv)}|${cvvs1()}`

                    }

                }
                let resultstr = resultarr.join("\n")
                textarea.value = resultstr

            }
            else {

                let resultarr = []
                for (let i = 0; i < qunatityvalue; i++) {
                    if (date_checkbox.checked === true && cvv_checkbox.checked === true) {

                        resultarr[i] = `${cccard(binv)}|${months()}|${years()}|${cvvs()}`

                    }
                    else if (date_checkbox.checked === false && cvv_checkbox.checked === false) {
                        resultarr[i] = `${cccard(binv)}`

                    }
                    else if (date_checkbox.checked === true && cvv_checkbox.checked === false) {
                        resultarr[i] = `${cccard(binv)}|${months()}|${years()}`

                    }
                    else if (cvv_checkbox.checked === true && date_checkbox.checked === false) {
                        resultarr[i] = `${cccard(binv)}|${cvvs()}`

                    }

                }
                let resultstr = resultarr.join("\n")
                textarea.value = resultstr
            }
        }
        else if (value === "CSV") {
            if (binv[0] == 3) {

                let resultarr = []
                for (let i = 0; i < qunatityvalue; i++) {
                    if (date_checkbox.checked === true && cvv_checkbox.checked === true) {

                        resultarr[i] = `${cccard(binv)}, ${months()}, ${years()}, ${cvvs1()}`

                    }
                    else if (date_checkbox.checked === false && cvv_checkbox.checked === false) {
                        resultarr[i] = `${cccard(binv)}`

                    }
                    else if (date_checkbox.checked === true && cvv_checkbox.checked === false) {
                        resultarr[i] = `${cccard(binv)}, ${months()}, ${years()}`

                    }
                    else if (cvv_checkbox.checked === true && date_checkbox.checked === false) {
                        resultarr[i] = `${cccard(binv)}, ${cvvs1()}`

                    }

                }
                let resultstr = resultarr.join("\n")
                textarea.value = resultstr
            }
            else {

                let resultarr = []
                for (let i = 0; i < qunatityvalue; i++) {
                    if (date_checkbox.checked === true && cvv_checkbox.checked === true) {

                        resultarr[i] = `${cccard(binv)}, ${months()}, ${years()}, ${cvvs()}`

                    }
                    else if (date_checkbox.checked === false && cvv_checkbox.checked === false) {
                        resultarr[i] = `${cccard(binv)}`

                    }
                    else if (date_checkbox.checked === true && cvv_checkbox.checked === false) {
                        resultarr[i] = `${cccard(binv)}, ${months()}, ${years()}`

                    }
                    else if (cvv_checkbox.checked === true && date_checkbox.checked === false) {
                        resultarr[i] = `${cccard(binv)}, ${cvvs()}`

                    }

                }
                let resultstr = resultarr.join("\n")
                textarea.value = resultstr
            }
        }
        else if (value === "SQL") {
            if (binv[0] == 3) {

                let resultarr = []
                for (let i = 0; i < qunatityvalue; i++) {
                    if (date_checkbox.checked === true && cvv_checkbox.checked === true) {

                        resultarr[i] = `INSERT INTO credit_cards (card_number,expiration_month,expiration_year,cvv) VALUES ('${cccard(binv)}','${months()}','${years()}','${cvvs1()}');`

                    }
                    else if (date_checkbox.checked === false && cvv_checkbox.checked === false) {
                        resultarr[i] = `INSERT INTO credit_cards (card_number,expiration_month,expiration_year,cvv) VALUES ('${cccard(binv)}');`

                    }
                    else if (date_checkbox.checked === true && cvv_checkbox.checked === false) {
                        resultarr[i] = `INSERT INTO credit_cards (card_number,expiration_month,expiration_year,cvv) VALUES ('${cccard(binv)}','${months()}','${years()}');`

                    }
                    else if (cvv_checkbox.checked === true && date_checkbox.checked === false) {
                        resultarr[i] = `INSERT INTO credit_cards (card_number,expiration_month,expiration_year,cvv) VALUES ('${cccard(binv)}','${cvvs1()}');`

                    }

                }
                let resultstr = resultarr.join("\n")
                let txt = `\`CREATE TABLE IF NOT EXISTS \`credit_cards\` (
                    \`id\` BIGINT(11) NOT NULL AUTO_INCREMENT,
                    \`card_number\` VARCHAR(19) NOT NULL,
                    \`expiration_month\` VARCHAR(2) NOT NULL,
                    \`expiration_year\` VARCHAR(4) NOT NULL,
                    \`cvv\` VARCHAR(4) NOT NULL,
                    PRIMARY KEY (\`id\`),
                    KEY (\`card_number\`),
                    UNIQUE KEY \`unique_card_number\` (\`card_number\`)
                );\`
${resultstr}`
                textarea.value = txt
            }
            else {

                let resultarr = []
                for (let i = 0; i < qunatityvalue; i++) {
                    if (date_checkbox.checked === true && cvv_checkbox.checked === true) {

                        resultarr[i] = `INSERT INTO credit_cards (card_number,expiration_month,expiration_year,cvv) VALUES ('${cccard(binv)}','${months()}','${years()}','${cvvs()}');`

                    }
                    else if (date_checkbox.checked === false && cvv_checkbox.checked === false) {
                        resultarr[i] = `INSERT INTO credit_cards (card_number,expiration_month,expiration_year,cvv) VALUES ('${cccard(binv)}');`

                    }
                    else if (date_checkbox.checked === true && cvv_checkbox.checked === false) {
                        resultarr[i] = `INSERT INTO credit_cards (card_number,expiration_month,expiration_year,cvv) VALUES ('${cccard(binv)}','${months()}','${years()}');`

                    }
                    else if (cvv_checkbox.checked === true && date_checkbox.checked === false) {
                        resultarr[i] = `INSERT INTO credit_cards (card_number,expiration_month,expiration_year,cvv) VALUES ('${cccard(binv)}','${cvvs1()}');`

                    }

                }
                let resultstr = resultarr.join("\n")
                let txt = `\`CREATE TABLE IF NOT EXISTS \`credit_cards\` (
                    \`id\` BIGINT(11) NOT NULL AUTO_INCREMENT,
                    \`card_number\` VARCHAR(19) NOT NULL,
                    \`expiration_month\` VARCHAR(2) NOT NULL,
                    \`expiration_year\` VARCHAR(4) NOT NULL,
                    \`cvv\` VARCHAR(4) NOT NULL,
                    PRIMARY KEY (\`id\`),
                    KEY (\`card_number\`),
                    UNIQUE KEY \`unique_card_number\` (\`card_number\`)
                );\`
${resultstr}`
                textarea.value = txt
            }
        }
        else if (value === "JSON") {
            if (binv[0] == 3) {

                let resultarr = []
                for (let i = 0; i < qunatityvalue; i++) {
                    if (date_checkbox.checked === true && cvv_checkbox.checked === true) {

                        resultarr[i] = `
                        {
                            "card_number": "${cccard(binv)}",
                            "expiration_month": "${months()}",
                            "expiration_year": "${years()}",
                            "cvv": "${cvvs1()}"
                        }`

                    }
                    else if (date_checkbox.checked === false && cvv_checkbox.checked === false) {
                        resultarr[i] = `{
                            "card_number": "${cccard(binv)}"
                          }`

                    }
                    else if (date_checkbox.checked === true && cvv_checkbox.checked === false) {
                        resultarr[i] = `{
                            "card_number": "${cccard(binv)}",
                            "expiration_month": "${months()}",
                            "expiration_year": "${years()}"
                        }`

                    }
                    else if (cvv_checkbox.checked === true && date_checkbox.checked === false) {
                        resultarr[i] = `{
                            "card_number": "${cccard(binv)}",
                            "cvv": "${cvvs1()}"
                          }`

                    }

                }
                let txt = `[${resultarr}
]`
                textarea.value = txt
            }
            else {

                let resultarr = []
                for (let i = 0; i < qunatityvalue; i++) {
                    if (date_checkbox.checked === true && cvv_checkbox.checked === true) {

                        resultarr[i] = `
                        {
                            "card_number": "${cccard(binv)}",
                            "expiration_month": "${months()}",
                            "expiration_year": "${years()}",
                            "cvv": "${cvvs()}"
                        }`

                    }
                    else if (date_checkbox.checked === false && cvv_checkbox.checked === false) {
                        resultarr[i] = `{
                            "card_number": "${cccard(binv)}"
                          }`

                    }
                    else if (date_checkbox.checked === true && cvv_checkbox.checked === false) {
                        resultarr[i] = `{
                            "card_number": "${cccard(binv)}",
                            "expiration_month": "${months()}",
                            "expiration_year": "${years()}"
                        }`

                    }
                    else if (cvv_checkbox.checked === true && date_checkbox.checked === false) {
                        resultarr[i] = `{
                            "card_number": "${cccard(binv)}",
                            "cvv": "${cvvs()}"
                          }`

                    }

                }
                let txt = `[${resultarr}
]`
                textarea.value = txt
            }
        }
        else if (value === "XML") {
            if (binv[0] == 3) {

                let resultarr = []
                for (let i = 0; i < qunatityvalue; i++) {
                    if (date_checkbox.checked === true && cvv_checkbox.checked === true) {

                        resultarr[i] = `
                    <CreditCard>
                        <CardNumber>
                             ${cccard(binv)}
                        </CardNumber>
                        <ExpirationMonth>
                             ${months()}
                        </ExpirationMonth>
                        <ExpirationYear>
                             ${years()}
                        </ExpirationYear>
                        <Cvv>
                             ${cvvs1()}
                        </Cvv>
                    </CreditCard>`

                    }
                    else if (date_checkbox.checked === false && cvv_checkbox.checked === false) {
                        resultarr[i] = `
                        <CreditCard>
                            <CardNumber>
                                 ${cccard(binv)}
                            </CardNumber>
                        </CreditCard>`

                    }
                    else if (date_checkbox.checked === true && cvv_checkbox.checked === false) {
                        resultarr[i] = `
                        <CreditCard>
                            <CardNumber>
                                 ${cccard(binv)}
                            </CardNumber>
                            <ExpirationMonth>
                                 ${months()}
                            </ExpirationMonth>
                            <ExpirationYear>
                                 ${years()}
                            </ExpirationYear>
                        </CreditCard>`

                    }
                    else if (cvv_checkbox.checked === true && date_checkbox.checked === false) {
                        resultarr[i] = `
                        <CreditCard>
                            <CardNumber>
                                 ${cccard(binv)}
                            </CardNumber>
                            <Cvv>
                                 ${cvvs1()}
                            </Cvv>
                        </CreditCard>`

                    }

                }


                let resultstr = resultarr.join("\n")
                let txt = `<?xml version="1.0" encoding="utf-8"?>
<CreditCards>
                    ${resultstr}
</CreditCards>`
                textarea.value = txt
            }
            else {

                let resultarr = []
                for (let i = 0; i < qunatityvalue; i++) {
                    if (date_checkbox.checked === true && cvv_checkbox.checked === true) {

                        resultarr[i] = `
                    <CreditCard>
                        <CardNumber>
                             ${cccard(binv)}
                        </CardNumber>
                        <ExpirationMonth>
                             ${months()}
                        </ExpirationMonth>
                        <ExpirationYear>
                             ${years()}
                        </ExpirationYear>
                        <Cvv>
                             ${cvvs()}
                        </Cvv>
                    </CreditCard>`

                    }
                    else if (date_checkbox.checked === false && cvv_checkbox.checked === false) {
                        resultarr[i] = `
                        <CreditCard>
                            <CardNumber>
                                 ${cccard(binv)}
                            </CardNumber>
                        </CreditCard>`

                    }
                    else if (date_checkbox.checked === true && cvv_checkbox.checked === false) {
                        resultarr[i] = `
                        <CreditCard>
                            <CardNumber>
                                 ${cccard(binv)}
                            </CardNumber>
                            <ExpirationMonth>
                                 ${months()}
                            </ExpirationMonth>
                            <ExpirationYear>
                                 ${years()}
                            </ExpirationYear>
                        </CreditCard>`

                    }
                    else if (cvv_checkbox.checked === true && date_checkbox.checked === false) {
                        resultarr[i] = `
                        <CreditCard>
                            <CardNumber>
                                 ${cccard(binv)}
                            </CardNumber>
                            <Cvv>
                                 ${cvvs()}
                            </Cvv>
                        </CreditCard>`

                    }

                }
                let resultstr = resultarr.join("\n")
                let txt = `<?xml version="1.0" encoding="utf-8"?>
<CreditCards>
                    ${resultstr}
</CreditCards>`
                textarea.value = txt
            }
        }
        else {
            alert("please enter valid Formet")
        }
    }

}


// result section 

let textarea = document.getElementById("result-ccs")

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function shuffle() {
    if (select.value === "PIPE" || select.value === "CSV") {
        let b = textarea.value;
        let d = b.split("\n");
        let c = shuffleArray(d);
        let k = c.join("\n");
        textarea.value = k;
    }
    else if (select.value === "SQL") {
        let valarr1 = textarea.value.split("\n");
        let finalval = valarr1.splice(0, 10);
        let c = shuffleArray(valarr1);
        let final1 = `${finalval.join("\n")}
${c.join("\n")}`;
        textarea.value = final1;
    }
    else if (select.value === "JSON") {
//         let valarr1 = textarea.value.split("\n");
//         let finalval = valarr1.splice(0, 1);
//         let finalval2 = valarr1.splice(-1);
//         const newArr = [];
//         for (let i = 0; i < valarr1.length; i += 6) {
//             const subArr = [valarr1[i] , valarr1[i + 1] , valarr1[i + 2] , valarr1[i + 3] , valarr1[i + 4] , valarr1[i + 5]];
//             newArr.push(subArr);
//         }
//         let c = shuffleArray(newArr);
//         console.log(c)

//         let final1 = `${finalval.join("\n")}
// ${c}
// ${finalval2.join("\n")}`;
//         textarea.value = final1;
    }
    else if (select.value === "XML") {
//         let valarr1 = textarea.value.split("\n");
//         let finalval = valarr1.splice(0, 10);
//         let c = shuffleArray(valarr1);
//         console.log(c);
//         let final1 = `${finalval.join("\n")}
// ${c.join("\n")}`;
//         textarea.value = final1;
//     }
//     else {
//         let b = textarea.value;
//         let d = b.split("\n");
//         let c = shuffleArray(d);
//         let k = c.join("\n");
//         textarea.value = k;
    }
}
function copy() {
    textarea.select();
    document.execCommand('copy');
}

function Clear() {
    textarea.value = null
}
function formet() {
    let fo = textarea.value
    let replace = fo.replace("\n", ",")
    textarea.value = replace
    for (const key in fo) {
        formet()
    }
}

