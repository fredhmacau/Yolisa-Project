from fastapi import UploadFile,File,Depends
from starlette.requests import Request
from src.interfaces import FasAPIAdapter
from .salesman import salesman,adapter,oauth2_token,salesman_token


# route http://127.0.0.1:8000/api/v1/salesman/acount/contact/add_contact
@salesman.post('/acount/contact/add_contact',tags=['salesman'])
async def add_contact(form_data:Request,token:str=Depends(oauth2_token)):
    id_salesman=await salesman_token.get_current_user(token)
    data=await form_data.form()
    #render result 
    return await adapter.add_contact_salesman(id_salesman,**data)

#route http://127.0.0.1:8000/api/v1/salesman/acount/contact/get_contact
@salesman.get('/acount/contact/get_contact',tags=['salesman'])
async def get_contact(token:str=Depends(oauth2_token)):
    id_salesman=await salesman_token.get_current_user(token)
    return await adapter.get_contact_salesman(id_salesman)

# route http://127.0.0.1:8000/api/v1/salesman/acount/contact/update_contact
@salesman.put('/acount/contact/update_contact',tags=['salesman'])
async def update_contact(form_data:Request,token:str=Depends(oauth2_token)):
    id_salesman=await salesman_token.get_current_user(token)
    data=await form_data.form()
    return await adapter.update_contact_salesman(id_salesman,**data)