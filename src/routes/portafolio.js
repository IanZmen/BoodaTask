import Router from '@koa/router';
import { getCryptoPrice } from '../services/budaServices.js';
const router = new Router();


router.post('/api/portafolio/value', async (ctx) => {
    const { portfolio, fiat_currency } = ctx.request.body

    let total_value = 0;

    for (const crypto of Object.keys(portfolio)) {
        const price = await getCryptoPrice(crypto, fiat_currency)
        total_value += price * portfolio[crypto]
    }

    ctx.body = { total_value: total_value }
})


export default router;