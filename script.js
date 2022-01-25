// const url = "https://api.genelpara.com/embed/doviz.json"

const url = "http://api.bigpara.hurriyet.com.tr/doviz/headerlist/anasayfa"

const yerel = "data.json"

const result = document.getElementById("result")
const time = document.getElementById("time")


async function getData(url) {

    const json = await fetch(url)
    const data = await json.json()

    console.log(data)
    console.log(data.data[3])
    console.log(data.data[3].ALIS)



    let veri = ""

    for (let i =3; i < data.data.length; i++) {

        veri += `<tr>
        <th>${data.data[i].SEMBOL}</th>
        <td>${(data.data[i].ALIS).toFixed(3)}</td>
        <td>${(data.data[i].SATIS).toFixed(3)}</td>
        <td>${(data.data[i].YUZDEDEGISIM).toFixed(3)}</td>
    </tr>`

    }

    result.innerHTML = veri
    time.innerHTML=data.data[7].TARIH

}



getData(url)