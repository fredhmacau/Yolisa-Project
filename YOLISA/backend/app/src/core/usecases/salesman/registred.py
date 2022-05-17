import asyncio
from src.infra.db import database


#use case cadastrar
async def registred_salesman(**data):
    
    #struture data
    values={
        "username":data['username'],
        "email":data['email'],
        "business_name":data['business_name'],
        "password_hash":data['password_hash'],
        "nif":data['nif'],
        "desc_business":data['desc_business']
    }
    
    #conn db
    async with database as conn:
        #query
        sql="""INSERT INTO salesman(username,email,business_name,password_hash,nif,
                desc_business) 
                values(:username,:email,:business_name,
                :password_hash,:nif,
                :desc_business)"""
 
        
        return await conn.execute(query=sql,values=values)
           
        
        
#function main
async def main():
    await database.connect()
    task1=asyncio.create_task(registred_salesman) 
    await task1
    await database.disconnect()
    
        
if __name__=="__main__":
    asyncio.run(main())