import asyncio
from src.infra.db import database

#select salesman in database data
async def select_salesman_data(id:int):
    #query
    query="""SELECT username,email,business_name,status,nif,desc_business 
             FROM salesman WHERE id =:id"""
    #connect db
    async with database as conn:
        return await conn.fetch_one(query=query,values={"id":id})
    

#function main
async def main():
    await database.connect()
    task1 =asyncio.create_task(select_salesman_data)
    await task1
    await database.disconnect()

if __name__=="__main__":
    asyncio.run(main())