from fastapi import APIRouter, Depends,UploadFile,File
from starlette.requests import Request
from src.interfaces import FasAPIAdapter
from fastapi.security.oauth2 import OAuth2PasswordBearer
from src.infra.dependences import TokenSalesman

#salesman routes
salesman=APIRouter(prefix="/salesman",tags=['salesman'])
#instance adapter
adapter=FasAPIAdapter()
#instance class generated token access
oauth2_token=OAuth2PasswordBearer(tokenUrl="login")
salesman_token=TokenSalesman()


# route http://127.0.0.1:8000/api/v1/salesman/acount/add
@salesman.post("/acount/add",tags=['salesman'])
async def create_salesman(form_data:Request):
        #parser data from form
        data=await form_data.form()
        #return result of adapter values
        return await adapter.salesman_register(**data)


# route http://127.0.0.1:8000/api/v1/salesman/acount/login
@salesman.post('/login',tags=['salesman'])
async def login_for_access_data(form_data:Request):
        data=await form_data.form()
        return await salesman_token.create_access_token(data)

# route http://127.0.0.1:8000/api/v1/salesman/acount/get
@salesman.get('/acount/get',tags=['salesman'])
async def get_salesman(token:str=Depends(oauth2_token)):
        id=await salesman_token.get_current_user(token)
        #render data from salesman
        return await adapter.salesman_get(id)

# route http://127.0.0.1:8000/api/v1/salesman/acount/update
@salesman.put("/acount/update",tags=['salesman'])
async def update_salesman(form_data:Request,token:str=Depends(oauth2_token)):
        id=await salesman_token.get_current_user(token)
        #parser data from form 
        data=await form_data.form()
        #render result of update salesman
        return await adapter.salesman_update(id,**data)
        

# route http://127.0.0.1:8000/api/v1/salesman/acount/delete
@salesman.delete('/acount/delete',tags=['salesman'])
async def delete_salesman(token:str=Depends(oauth2_token)):
        id=await salesman_token.get_current_user(token)
      
        return await adapter.salesman_delete(id)

#add more routes for salesman
from .salesman_img import *
from .salesman_contact import *
from .salesman_posts import *
from .salesman_alter_pass import *
from .salesman_in_map import *