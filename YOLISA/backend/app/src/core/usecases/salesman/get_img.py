from src.infra.db import database
import asyncio

#get img from db
async def get_img_from_salesman(id:int):
    #query
    query="SELECT * FROM image_salesman WHERE salesman_id=:id"
    async with database as conn:
        return await conn.fetch_one(query=query,values={"id":id})
    

#function main
async def main():
    await database.connect()
    task1=asyncio.create_task(get_img_from_salesman)
    await task1
    await database.disconnect()
    
if __name__=="__main__":
    asyncio.run(main())
