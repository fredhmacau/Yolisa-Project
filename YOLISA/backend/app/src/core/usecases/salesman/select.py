import asyncio
from src.infra.db import database

#select salesman in database data
async def select_salesman_data(id:int):
    #query
    query="""SELECT salesman.id,salesman.username,salesman.email,
               salesman.business_name,salesman.nif,salesman.desc_business,
               COUNT(profile_views.salesman_id) as views 
               FROM salesman LEFT JOIN profile_views ON salesman.id=profile_views.salesman_id
               WHERE salesman.id=:id"""
    
    async with database as conn:
        return await conn.fetch_one(query=query,values={"id":id})
    


async def main():
    await database.connect()
    task1 =asyncio.create_task(select_salesman_data)
    await task1
    await database.disconnect()

if __name__=="__main__":
    asyncio.run(main())