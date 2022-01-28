from src.infra.db import database
import asyncio


#update salesman
async def update_salesman(id:int,**data):
    query="""UPDATE salesman SET username=:username,
             email=:email,desc_business=:desc_business
             WHERE id=:id;"""
    values={
        "id":id,
        "username":data['username'],
        "email":data['email'],
        "desc_business":data['desc_business']
    }
    #conn database
    async with database as conn:
        return await conn.execute(query=query,values=values)
    
    
#function main
async def main():
    await database.connect()
    task1=asyncio.create_task(update_salesman)
    await task1
    await database.disconnect()
    
if __name__=="__main__":
    asyncio.run(main())
