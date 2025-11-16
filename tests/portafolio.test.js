import request from 'supertest'
import app from '../src/app.js'

import { describe, it, expect } from 'vitest' 

describe('POST /api/portafolio/value', () => {
  it('debería retornar el valor total del portafolio', async () => {
    const response = await request(app.callback())
      .post('/api/portafolio/value')
      .send({
        portfolio: { BTC: 0.5, ETH: 2.0, USDT: 1000 },
        fiat_currency: 'CLP'
      })
      .expect(200)

    expect(response.body).toHaveProperty('total_value')
  })
})


it('debería retornar 400 si falta el portfolio', async () => {
  const res = await request(app.callback())
    .post('/api/portafolio/value')
    .send({
      fiat_currency: 'CLP'
    })
    .expect(400)

  expect(res.body).toHaveProperty('error')
})