from fastapi import UploadFile,File,Depends
from starlette.requests import Request
from src.interfaces import FasAPIAdapter
from .salesman import salesman,adapter

# route http://127.0.0.1:8000/api/v1/salesman/receive-email
@salesman.post("/receive-email",tags=['salesman'])
async def receive_email(form_data:Request):
    data=await form_data.form()
    return await adapter.receive_email(data)
    

# route http://127.0.0.1:8000/api/v1/salesman/alter-pass
@salesman.post('/alter-pass',tags=['salesman'])
async def alter_pass(form_data:Request):
    data=await form_data.form()
    return await adapter.alter_pass(data)