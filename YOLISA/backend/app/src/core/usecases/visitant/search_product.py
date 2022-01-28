from src.infra.db import database
import asyncio

#search product 
async def search_product_name(product_name:str):
    #query
    query=f"""SELECT id,product_name,price,CAST(tags as JSON) as tags,
             localization,desc_product,salesman_id from publish_product 
             WHERE product_name LIKE "%{product_name}%";
          """
    #conn db
    async with database as conn:
        return await conn.fetch_all(query=query)
    

#function main courotines
async def main():
    await database.connect()
    task1=asyncio.create_task(search_product_name)
    await task1
    await database.disconnect()


if __name__=="__main__":
    asyncio.run(main())