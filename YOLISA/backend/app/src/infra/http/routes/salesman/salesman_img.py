from fastapi import UploadFile,File,Depends
from starlette.requests import Request
from src.interfaces import FasAPIAdapter
from .salesman import salesman,adapter,oauth2_token,salesman_token


# route http://127.0.0.1:8000/api/v1/salesman/acount/img/add_img
@salesman.post('/acount/img/add_img',tags=['salesman'])
async def add_img_salesman(token:str=Depends(oauth2_token),img:UploadFile=File(...)):
    id_salesman=await salesman_token.get_current_user(token)
    #render results
    return await adapter.salesman_add_img(id_salesman,img)
    
    
# route http://127.0.0.1:8000/api/v1/salesman/acount/img/get_img
@salesman.get('/acount/{_id}/img/get_img',tags=['salesman'])
async def get_img_salesman(_id:str):
    id_salesman=await salesman_token.get_current_user(_id)
    return await adapter.get_img_salesman(id_salesman)
    
#route http://127.0.0.1:8000/api/v1/salesman/acount/img/update_img
@salesman.put('/acount/img/update_img',tags=['salesman'])
async def update_img_salesman(token:str=Depends(oauth2_token),img:UploadFile=File(...)):
    id_salesman=await salesman_token.get_current_user(token)
    return await adapter.update_img_salesman(id_salesman,img)

# route http://127.0.0.1:8000/api/v1/salesman/acount/img/delete_img
@salesman.delete("/acount/img/delete_img")
async def delete_img_salesman(token:str=Depends(oauth2_token)):
    id_salesman=await salesman_token.get_current_user(token)
    return await adapter.delete_img_salesman(id_salesman)