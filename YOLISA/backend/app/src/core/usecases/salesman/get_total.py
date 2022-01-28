from src.infra.db import database
import asyncio

#get posts total by salesman
async def get_total_of_post(id_salesman:int):
    query="""
            SELECT COUNT(*) as total FROM publish_product WHERE salesman_id=:id_salesman
          """

    #conn db
    async with database as conn:
        return await conn.fetch_one(query=query,values={"id_salesman":id_salesman})
    

#function main couroutine
async def main():
    await database.connect()
    task1=asyncio.create_task(get_total_of_post)
    await task1
    await database.disconnect()

if __name__=="__main__":
    asyncio.run(main())