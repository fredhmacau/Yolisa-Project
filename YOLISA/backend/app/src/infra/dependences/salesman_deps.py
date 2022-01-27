from bcrypt import checkpw
from src.infra.db import database
import asyncio
from jose import JWTError,jwt
from src.infra.helpers import exception,response

#CONSTANTS
SECRET="9c1f5e6705012fdc76df5717dfb979a23d7b66f48ee24662f8e4f710730fd6f1"
ALGORITH="HS256"

#dependences for access data for salesman
class TokenSalesman:
    
    #check password hash
    @classmethod
    async def __verify_password(cls,password:str,password_hash:str):
        result=checkpw(password.encode("utf-8"),password_hash.encode('utf-8'))
        return True if result else False
    
    #verify user in db
    @classmethod
    async def __verify_user(cls,username):
        #verify_in_db
        async with database as conn:
            #conn db
            query="SELECT id,username,password_hash FROM salesman WHERE username=:username"
            return await conn.fetch_one(query=query,values={"username":username})
    
    #create authorization
    @classmethod
    async def create_access_token(cls,data):
        user_auth=await cls.__authenticate_user(data)
        if user_auth:
            try:
                values={"id":user_auth['id']}
                token=jwt.encode(values,SECRET,ALGORITH)
                return response(msg={"access_token":token,"token_type":"Bearer"},
                                status=200)
            except (Exception,JWTError) as exc:
                raise exception(detail=f"error:{exc}",status=404)
        else:
            raise exception(detail="{msg:'username or password invalid!'}",
                            status=406)
        
            
            
    
    #authenticate user
    @classmethod
    async def __authenticate_user(cls,data):
        user =await cls.__verify_user(data['username'])
        if user:
            if await cls.__verify_password(data['password'],user['password_hash']):
                return user
            else:
                return False
        else:
            return False
    
    #view user current token
    @classmethod
    async def get_current_user(cls,token):
        try:
            payload=jwt.decode(token,SECRET,ALGORITH)
            return payload.get('id')
        except (Exception,JWTError) as exc:
            raise exception(detail=f"{exc}",status=404)
        
            
