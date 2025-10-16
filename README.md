# BoodaTask

# 📄 API – Valorizador de Portafolio Cripto

Esta API permite calcular el **valor total de un portafolio de criptomonedas** en una moneda fiat (`CLP`, `PEN` o `COP`) usando precios en tiempo real obtenidos desde la [API pública de Buda.com](https://api.buda.com/#rest-api-llamadas-publicas).

---

## 📌 Endpoint

### `POST /api/portafolio/value`

Calcula el valor total de un portafolio cripto.

#### ✅ Request body
```json
{
  "portfolio": {
    "BTC": 0.5,
    "ETH": 2.0,
    "USDT": 1000
  },
  "fiat_currency": "CLP"
}

La api esta deployeada en

http://34.203.224.233:3000/api/portafolio/value