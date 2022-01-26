from fastapi import UploadFile,File
from starlette.requests import Request
from src.interfaces import FasAPIAdapter
from .salesman import salesman,adapter


# route http://127.0.0.1:8000/api/v1/salesman/{id_salesman}/post/add
@salesman.post('/{id_salesman}/post/add',tags=['salesman'])
async def add_post(id_salesman:int,form_data:Request):
    data=await form_data.form()
    return await adapter.add_post_salesman(id_salesman,**data)

#route http://127.0.0.1:8000/api/v1/salesman/{id_img}/post/view_img
@salesman.get('/{id_img}/post/view_img',tags=['salesman'])
async def view_img(id_img:int):
    return await adapter.view_img_post__salesman(id_img)