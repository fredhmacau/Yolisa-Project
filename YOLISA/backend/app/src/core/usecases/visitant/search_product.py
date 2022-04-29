from src.infra.db import database
import asyncio

#search product 
async def search_product_name(product_name:str):
    #query
    query=f"""SELECT publish_product.id, publish_product.product_name,
              price,publish_product.desc_product,
              publish_product.salesman_id,contact_salesman.province_focus,
              contact_salesman.city_focus
              from publish_product INNER
              JOIN contact_salesman ON
              publish_product.salesman_id=contact_salesman.salesman_id
              WHERE contact_salesman.province_focus LIKE "%{product_name}%" 
              and publish_product.product_name LIKE "%{product_name}%";
              
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