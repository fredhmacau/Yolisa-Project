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
        "doc_name":data['doc_identification'].filename,
        "doc_type":data['doc_identification'].content_type,
        "doc_identification":await data['doc_identification'].read(),
        "desc_business":data['desc_business']
    }
    
    #conn db
    async with database as conn:
        #query
        sql="""CALL register_salesman(:username,:email,:business_name,
            :password_hash,:nif,:doc_name,:doc_type,:doc_identification,:desc_business)"""
        #try/except
        
        return await conn.execute(query=sql,values=values)
           
        
        
#function main
async def main():
    await database.connect()
    task1=asyncio.create_task(registred_salesman) 
    await task1
    await database.disconnect()
    
        
if __name__=="__main__":
    asyncio.run(main())