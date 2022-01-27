from fastapi import UploadFile,File,Depends
from starlette.requests import Request
from src.interfaces import FasAPIAdapter
from .salesman import salesman,adapter,oauth2_token,salesman_token


# route http://127.0.0.1:8000/api/v1/salesman/acount/post/add
@salesman.post('/acount/post/add',tags=['salesman'])
async def add_post(form_data:Request,token:str=Depends(oauth2_token)):
    id_salesman=await salesman_token.get_current_user(token)
    data=await form_data.form()
    return await adapter.add_post_salesman(id_salesman,**data)

#route http://127.0.0.1:8000/api/v1/salesman/acount/post/view_img/{id_post}
@salesman.get('/acount/post/view_img/{id_post}',tags=['salesman'])
async def view_img(id_post:int):
    return await adapter.view_img_post_salesman(id_post)

# route http://127.0.0.1:8000/api/v1/salesman/acount/post/view_posts
@salesman.get('/acount/post/view_posts',tags=['salesman'])
async def get_posts(token:str=Depends(oauth2_token)):
    id_salesman=await salesman_token.get_current_user(token)
    return await adapter.view_posts_salesman(id_salesman)

# route http://127.0.0.1:8000/api/v1/salesman/acount/post/update/{id_post}
@salesman.put('/acount/post/update/{id_post}',tags=['salesman'])
async def update_post(id_post:int,form_data:Request,token:str=Depends(oauth2_token)):
    data=await form_data.form()
    return await adapter.update_post_salesman(id_post,**data)

# route http://127.0.0.1:8000/api/v1/salesman/acount/post/delete/{id_post}
@salesman.delete('/acount/post/delete/{id_post}',tags=['salesman'])
async def delete_post(id_post:int):
    return await adapter.delete_post_salesman(id_post)
