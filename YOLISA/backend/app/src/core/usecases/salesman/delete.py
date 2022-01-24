from src.infra.db import database
import asyncio

#delete data from salesman

async def delete_salesman(id:int):
    #conn delete
    query="DELETE FROM salesman WHERE id=:id"
    async with database as conn:
        return await conn.execute(query=query,values={"id":id})


#function main
async def main():
    await database.connect()
    task1=asyncio.create_task(delete_salesman)
    await task1
    await database.disconnect()
    
    
if __name__=="__main__":
    asyncio.run(main())