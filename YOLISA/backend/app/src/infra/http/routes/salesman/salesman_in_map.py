from fastapi import UploadFile,File,Depends
from starlette.requests import Request
from src.interfaces import FasAPIAdapter
from .salesman import salesman,adapter,oauth2_token,salesman_token


# route http://127.0.0.1:8000/api/v1/salesman/acount/add-marker-position
@salesman.post("/acount/add-marker-position",tags=['salesman'])
async def post_position(form_data:Request,token:str=Depends(oauth2_token)):
    id_salesman=await salesman_token.get_current_user(token)
    data=await form_data.form()
    return await adapter.post_position(id_salesman,data)
    
#route http://127.0.0.1:8000/api/v1/salesman/acount/get-marker-position
@salesman.get("acount/get-marker-position",tags=['salesman'])
async def get_marker_position(token:str=Depends(oauth2_token)):
    id_salesman=await salesman_token.get_current_user(token)
    return await adapter.get_markers(id_salesman)

#route http://127.0.0.1:8000/api/v1/salesman/acount/update-marker-position
@salesman.put("/acount/update-marker-position",tags=['salesman'])
async def update_marker_position(form_data:Request,token:str=Depends(oauth2_token)):
    id_salesman=await salesman_token.get_current_user(token)
    data=await form_data.form()
    return await adapter.update_marker_position(id_salesman,data)
