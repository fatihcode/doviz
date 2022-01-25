const url = "https://api.bigpara.hurriyet.com.tr/doviz/headerlist/anasayfa"

const result = document.getElementById("result")
const time = document.getElementById("time")
const col = document.querySelectorAll(".col")

async function getData(url) {

    const json = await fetch(url)
    const data = await json.json()

    let veri = ""

    for (let m = 0; m < col.length; m++) {

        for (let i = 0; i < data.data.length; i++) {

            if (col[m].innerHTML === data.data[i].SEMBOL) {

                veri += `<tr>
                            <th class="p-3" title="${data.data[i].ACIKLAMA}"><i class="bi bi-info-circle"></i> ${data.data[5].SEMBOL.includes("TRY")?data.data[i].SEMBOL.slice(0,data.data[i].SEMBOL.indexOf("TRY"))+"/TRY":data.data[i].SEMBOL}</th>
                            <td class="p-3">${(data.data[i].ALIS).toFixed(3)}</td>
                            <td class="p-3">${(data.data[i].SATIS).toFixed(3)}</td>
                            <td class="p-3 ${data.data[i].YUZDEDEGISIM} ${data.data[i].YUZDEDEGISIM > 0 ? 'text-success' : 'text-danger'}"><strong>${data.data[i].YUZDEDEGISIM} ${data.data[i].YUZDEDEGISIM > 0 ? '<i class="bi bi-caret-up-fill"></i>' : '<i class="bi bi-caret-down-fill"></i>'}</strong></td>
                        </tr>`
            }
        }
    }

    result.innerHTML = veri
    time.innerHTML = `<i class="bi bi-clock"></i> Son Güncelleme: ${data.data[7].TARIH.substr(11,8)}`
}

getData(url)