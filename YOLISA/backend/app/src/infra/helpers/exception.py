from fastapi import HTTPException


#helpers with exceptions 
def exception(detail,status):
    raise HTTPException(status_code=status,
                        detail=detail)