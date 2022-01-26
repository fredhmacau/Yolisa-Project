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

#route http://127.0.0.1:8000/api/v1/salesman/{id_salesman}/get_contact
@salesman.get('/{id_salesman}/get_contact',tags=['salesman'])
async def get_contact(id_salesman:int):
    return await adapter.get_contact_salesman(id_salesman)

# route http://127.0.0.1:8000/api/v1/salesman/{id_salesman}/update_contact
@salesman.put('/{id_salesman}/update_contact',tags=['salesman'])
async def update_contact(id_salesman:int,form_data:Request):
    data=await form_data.form()
    return await adapter.update_contact_salesman(id_salesman,**data)