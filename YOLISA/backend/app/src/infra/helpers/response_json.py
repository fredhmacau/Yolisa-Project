#Response model
#response json model
from fastapi import responses
from fastapi.encoders import jsonable_encoder
def response(msg:str,status:int):
    result=jsonable_encoder(msg)
    return responses.JSONResponse(content=result,status_code=status)