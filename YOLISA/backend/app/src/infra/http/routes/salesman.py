from fastapi import APIRouter
from starlette.requests import Request
from src.interfaces import FasAPIAdapter
from src.infra.helpers import exception
#salesman routes
salesman=APIRouter(prefix="/salesman",tags=['salesman'])
#instance adapter
adapter=FasAPIAdapter()

# route http://127.0.0.1:8000/api/v1/salesman/add
@salesman.post("/add")
async def create_salesman(form_data:Request):
        #parser data from form
        data=await form_data.form()
        #return result of adapter values
        return await adapter.salesman_register(**data)
