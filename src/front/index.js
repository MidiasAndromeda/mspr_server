fetch("http://127.0.0.1:3000")
    .then(result => result.json())
    .then(result => console.log(result))
    .then(result => jquery('#qrcode').qrcode(`${result.id} : ${result.code} / ${result.discountRate}`))
