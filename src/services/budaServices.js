
export async function getCryptoPrice(crypto, money) {
    const pair = `${crypto.toLowerCase()}-${money.toLowerCase()}`
    const url = `https://www.buda.com/api/v2/markets/${pair}/ticker.json`

    const response = await fetch(url)
    if (!response.ok) {
    throw new Error(`No se pudo obtener precio para ${crypto}`)
    }

    const data = await response.json()
    return parseFloat(data.ticker.last_price[0])

}