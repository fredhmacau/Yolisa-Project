from src.infra.db import database
import asyncio

#get informations of de post
async def get_info_of_the_post_by_visitant(id_post):
    query="""
            SELECT id,product_name,price,CAST(tags as JSON)as tags,
            localization,desc_product FROM publish_product 
            WHERE id=:id_post;
          """
    async with database as conn:
        return await conn.fetch_all(query=query,values={"id_post":id_post})


#function main
async def main():
    await database.connect()
    task1=asyncio.create_task(get_info_of_the_post_by_visitant)
    await task1
    await database.disconnect()

if __name__=="__main__":
    asyncio.run(main())