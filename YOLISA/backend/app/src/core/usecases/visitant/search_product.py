from src.infra.db import database
import asyncio

#search product 
async def search_product_name(product_name:str):
    #query
    query=f"""SELECT salesman.id,salesman.business_name,
    contact_salesman.phone_number,contact_salesman.province_focus,
    publish_product.id as post_id,publish_product.product_name, publish_product.desc_product,
    publish_product.price FROM salesman
    INNER JOIN contact_salesman ON salesman.id=contact_salesman.salesman_id
    INNER JOIN publish_product ON salesman.id=publish_product.salesman_id
    WHERE publish_product.product_name LIKE "%{product_name}%" or contact_salesman.province_focus
    LIKE "%{product_name}%" or publish_product.desc_product LIKE "%{product_name}%"  
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