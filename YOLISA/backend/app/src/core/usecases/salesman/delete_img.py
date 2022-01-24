from src.infra.db import database
import asyncio

#delete image from salesman
async def delete_img_salesman(id:int):
    query="DELETE FROM image_salesman WHERE salesman_id=:id"
    #conn db
    async with database as conn:
        return await conn.execute(query=query,values={"id":id})
    
#funciton main
async def main():
    await database.connect()
    task1=asyncio.create_task(delete_img_salesman)
    await task1
    await database.disconnect()


if __name__=="__main__":
    asyncio.run(main())
    