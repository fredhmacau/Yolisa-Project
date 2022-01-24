from fastapi import UploadFile,File
from starlette.requests import Request
from src.interfaces import FasAPIAdapter
from .salesman import salesman,adapter


# route http://127.0.0.1:8000/api/v1/salesman/{id_salesman}/add_img
@salesman.post('/{id_salesman}/add_img',tags=['salesman'])
async def add_img_salesman(id_salesman:int,img:UploadFile=File(...)):
    
    #render results
    return await adapter.salesman_add_img(id_salesman,img)
    
    
# route http://127.0.0.1:8000/api/v1/salesman/{id_salesman}/get_img
@salesman.get('/{id_salesman}/get_img',tags=['salesman'])
async def get_img_salesman(id_salesman:int):
    return await adapter.get_img_salesman(id_salesman)
    
#route http://127.0.0.1:8000/api/v1/salesman/{id_salesman}/update_img
@salesman.put('/{id_salesman}/update_img',tags=['salesman'])
async def update_img_salesman(id_salesman:int,img:UploadFile=File(...)):
    return await adapter.update_img_salesman(id_salesman,img)

# route http://127.0.0.1:8000/api/v1/salesman/25/delete_img
@salesman.delete("/{id_salesman}/delete_img")
async def delete_img_salesman(id_salesman:int):
    return await adapter.delete_img_salesman(id_salesman)