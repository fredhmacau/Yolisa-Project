#Response model
#response json model
from fastapi import responses
def response(msg:str,status:int):
    return responses.JSONResponse(content=msg,
                                  status_code=status)