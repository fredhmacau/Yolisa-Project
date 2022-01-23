#entity salesman 
import asyncio
from src.core.usecases import registred_salesman
from bcrypt import hashpw,gensalt
from src.infra.helpers import response,exception

class EntitySalesman:
    """salesman entity"""
    def __init__(self):
        pass
    #generate_password
    async def __password_hash(self,password):
        password_hash=hashpw(password.encode('utf-8'),gensalt())
        return password_hash
    
    #register salesman
    async def register(self,**data):
        #call __password_hash
        values={
        "username":data['username'],
        "email":data['email'],
        "business_name":data['business_name'],
        "password_hash":await self.__password_hash(data['password']),
        "nif":data['nif'],
        "doc_identification":data['doc_identification'],
        "desc_business":data['desc_business']
        }
        #usecase registred
        try:
            result=await registred_salesman(**values)
            if result:
                return response(msg={"message":"create salesman with success"},status=201)
        except Exception as exc:
            raise exception(detail=f"error:{exc}",status=406)