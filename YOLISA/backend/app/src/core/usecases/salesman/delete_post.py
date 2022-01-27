from src.infra.db import database
import asyncio

#delete post by salesman
async def delete_post_from_salesman(id_post:int):
    #query
    query="DELETE FROM publish_product WHERE id=:id_post"
    #conn db
    async with database as conn:
        return await conn.execute(query=query,values={"id_post":id_post})
    
#function main courotine
async def main():
    await database.connect()
    task1=asyncio.create_task(delete_post_from_salesman)
    await task1
    await database.disconnect()
    
if __name__=="__main__":
    asyncio.run(main())