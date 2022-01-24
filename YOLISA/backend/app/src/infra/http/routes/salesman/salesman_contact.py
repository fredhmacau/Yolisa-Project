from fastapi import UploadFile,File
from starlette.requests import Request
from src.interfaces import FasAPIAdapter
from .salesman import salesman,adapter


# route http://127.0.0.1:8000/api/v1/salesman/{id_salesman}/add_contact
@salesman.post('/{id_salesman}/add_contact',tags=['salesman'])
async def add_contact(id_salesman:int,form_data:Request):
    data=await form_data.form()
    #render result 
    return await adapter.add_contact_salesman(id_salesman,**data)