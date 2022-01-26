from src.infra.db import database
import asyncio

#view img the post 
async def get_img_in_post_salesman(id_img:int):
    #query
    query="""SELECT id,img_name,type_img,img FROM publish_product
             WHERE id=:id_img;
          """
    #conn db
    async with database as conn:
        return await conn.fetch_one(query=query,values={"id_img":id_img})
    

#function main
async def main():
    await database.connect()
    task1=asyncio.create_task(get_img_in_post_salesman)
    await task1
    await database.disconnect()


if __name__=="__main__":
    asyncio.run(main())
    