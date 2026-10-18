import os
import html
from typing import List
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
import requests

app = FastAPI(title="BathShop Secure Backend", version="1.1")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://bathshop-az-selling-site.vercel.app"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Secrets come only from the hosting environment (Render -> Environment), never from the code.
TELEGRAM_BOT_TOKEN = os.getenv("TELEGRAM_BOT_TOKEN", "")
CHAT_ID = os.getenv("CHAT_ID", "")

class OrderItem(BaseModel):
    name: str
    price: float

class OrderModel(BaseModel):
    name: str = Field(..., min_length=2, max_length=50)
    phone: str = Field(..., min_length=9, max_length=20)
    items: List[OrderItem]
    total: float

@app.post("/api/checkout")
def create_order(order: OrderModel):
    safe_name = html.escape(order.name)
    safe_phone = html.escape(order.phone)
    items_list = "\n".join([f"• {html.escape(item.name)} — <b>{item.price:.2f} ₼</b>" for item in order.items])
    
    message = (
        f"🛒 <b>YENİ SİFARİŞ GƏLDİ!</b>\n\n"
        f"👤 <b>Müştəri:</b> {safe_name}\n"
        f"📞 <b>Telefon:</b> {safe_phone}\n\n"
        f"📦 <b>Məhsullar:</b>\n{items_list}\n\n"
        f"💰 <b>Cəmi məbləğ:</b> {order.total:.2f} ₼"
    )
    
    if not TELEGRAM_BOT_TOKEN or not CHAT_ID:
        raise HTTPException(status_code=500, detail="Sifariş xidməti hazırda əlçatan deyil.")
    url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage"
    payload = {
        "chat_id": CHAT_ID,
        "text": message,
        "parse_mode": "HTML"
    }
    
    try:
        response = requests.post(url, json=payload, timeout=10)
        response.raise_for_status()
    except requests.RequestException:
        raise HTTPException(status_code=500, detail="Sifariş göndərilərkən xəta baş verdi.")
        
    return {"status": "success", "message": "Sifariş uğurla qəbul olundu!"}