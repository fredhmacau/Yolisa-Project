from fastapi import APIRouter,UploadFile,File
from starlette.requests import Request
from src.interfaces import FasAPIAdapter

#salesman routes
salesman=APIRouter(prefix="/salesman",tags=['salesman'])
#instance adapter
adapter=FasAPIAdapter()

# route http://127.0.0.1:8000/api/v1/salesman/add
@salesman.post("/add",tags=['salesman'])
async def create_salesman(form_data:Request):
        #parser data from form
        data=await form_data.form()
        #return result of adapter values
        return await adapter.salesman_register(**data)


# route http://127.0.0.1:8000/api/v1/salesman/get/{id}
@salesman.get('/get/{id}',tags=['salesman'])
async def get_salesman(id:int):
        #render data from salesman
        return await adapter.salesman_get(id)

# route http://127.0.0.1:8000/api/v1/salesman/update/{id}
@salesman.put("/update/{id}",tags=['salesman'])
async def update_salesman(id:int,form_data:Request):
        #parser data from dorm 
        data=await form_data.form()
        #render result of update salesman
        return await adapter.salesman_update(id,**data)
        

# route http://127.0.0.1:8000/api/v1/salesman/delete/{id}
@salesman.delete('/delete/{id}',tags=['salesman'])
async def delete_salesman(id:int):
        return await adapter.salesman_delete(id)

#add more routes for salesman
from .salesman_img import *
from .salesman_contact import *