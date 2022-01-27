from src.infra.db import database
import asyncio

#view all posts the salesman
async def get_posts_from_salesman(id_salesman:int):
    #query
    query="""SELECT id,product_name,price,JSON_PRETTY(tags) as tags,localization,desc_product
             salesman_id FROM publish_product 
             WHERE salesman_id=:id_salesman"""
    #conn database
    #conn db
    async with database as conn:
        return await conn.fetch_all(query=query,values={"id_salesman":id_salesman})
    

#function main courotine
async def main():
    await database.connect()
    task1=asyncio.create_task(get_posts_from_salesman)
    await task1
    await database.disconnect()

if __name__=="__main__":
    asyncio.run(main())


    