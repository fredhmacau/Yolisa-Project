from src.infra.db import database
import asyncio

#get_contact from salesman

async def get_contact_from_salesman(id:int):
    #query
    query="SELECT * FROM contact_salesman WHERE salesman_id=:id"
    #conn db
    async with database as conn:
        return await conn.fetch_one(query=query,values={"id":id})
    


#function main
async def main():
    await database.connect()
    task1=asyncio.create_task(get_contact_from_salesman)
    await task1
    await database.disconnect()
    
if __name__=="__main__":
    asyncio.run(main())
    