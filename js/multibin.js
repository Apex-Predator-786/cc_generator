

function genarate(fc) {
    let binvalue = fc
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
        }
    }



    if (binvalue.length <= 16) {
        for (let j = 0; j < 16; j++) {

            if (binvalue[j] === undefined && binvalue !== "") {
                binvaluearray[j] = "x"
            }
        }
        let binString = binvaluearray.join("");
        var binval1 = binString;
    }

    else if (binvalue.length > 16) {
        let slices = binvaluearray.slice(0, 16)
        let slicestring = slices.join("")
        var binval1 = slicestring
    }

    else {
        alert("convert to 16 digit bin number")
    }

    let binv = binval1

    if (binv === "xxxxxxxxxxxxxxxx") {
        alert("correct bin please")

    }

    else if (binv[0] == 'x' && binv[1] == 'x' && binv[2] == 'x' && binv[3] == 'x' && binv[4] == 'x' && binv[5] == 'x') {
        binval1 = "xxxxxxxxxxxxxxxx"
        alert("please check the bin value")
    }

    else if (binv[0] === "x" || binv[0] === " ") {
        binval1 = "xxxxxxxxxxxxxxxx"
        alert("please check the first number")
    }

    else if (binv !== "") {
        if (ale === 3 && binval1[0] !== " ") {
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
                return resultstr

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
                return resultstr
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
                return resultstr
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
                return resultstr
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
                return resultstr
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

                return resultstr
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
                return resultarr
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
                return resultarr
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
                return resultstr
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
                return resultstr
            }
        }
        else {
            alert("please enter valid Formet")
        }
    }
}

function genc() {
    let num = `1234567890`
    let arrv = []

    for (let i = 0; i < bin.value.length; i++) {
        for (let k = 0; k < num.length; k++) {
            if (bin.value[i] === ",") {
                var com1 = "hello"
            }
        }
    }
    if (com1 === "hello") {
        let comm = bin.value.split(",")
        textarea.value = null
        for (let i = 0; i < comm.length; i++) {
            arrv[i] = genarate(comm[i])
        }
        if (select.value === "PIPE" || select.value === "CSV") {
            let vval = arrv.join("\n")
            textarea.value = vval
            shuffle() * comm.length
        }
        else if (select.value === "SQL") {
            let vval = arrv.join("\n")
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
${vval}`
            textarea.value = txt
        }
        else if (select.value === "JSON") {
            let vval = arrv.join("\n")
            let txt = `[${vval}
]`
            textarea.value = txt
        }
        else if (select.value === "XML") {
            let vval = arrv.join("\n")
            let txt = `<?xml version="1.0" encoding="utf-8"?>
<CreditCards>
                    ${vval}
</CreditCards>`
            textarea.value = txt
        }
        else {
            alert("wrong formet is inserted")
        }
    }
}