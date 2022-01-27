from fastapi import UploadFile,File
from starlette.requests import Request
from src.interfaces import FasAPIAdapter
from .salesman import salesman,adapter


# route http://127.0.0.1:8000/api/v1/salesman/{id_salesman}/post/add
@salesman.post('/{id_salesman}/post/add',tags=['salesman'])
async def add_post(id_salesman:int,form_data:Request):
    data=await form_data.form()
    return await adapter.add_post_salesman(id_salesman,**data)

#route http://127.0.0.1:8000/api/v1/salesman/{id_post}/post/view_img
@salesman.get('/{id_post}/post/view_img',tags=['salesman'])
async def view_img(id_post:int):
    return await adapter.view_img_post_salesman(id_post)

# route http://127.0.0.1:8000/api/v1/salesman/{id_salesman}/post/view_posts
@salesman.get('/{id_salesman}/post/view_posts',tags=['salesman'])
async def get_posts(id_salesman:int):
    return await adapter.view_posts_salesman(id_salesman)

# route http://127.0.0.1:8000/api/v1/salesman/post/{id_post}/update
@salesman.put('/post/{id_post}/update',tags=['salesman'])
async def update_post(id_post:int,form_data:Request):
    data=await form_data.form()
    return await adapter.update_post_salesman(id_post,**data)

# route http://127.0.0.1:8000/api/v1/salesman/post/3/delete
@salesman.delete('/post/{id_post}/delete',tags=['salesman'])
async def delete_post(id_post:int):
    return await adapter.delete_post_salesman(id_post)
