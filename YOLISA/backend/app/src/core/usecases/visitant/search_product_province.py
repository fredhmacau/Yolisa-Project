from src.infra.db import database
import asyncio

#searching product by province
async def search_product_filter_by_province(product_name:str,province:str):
    #query
    query=f"""SELECT publish_product.id, publish_product.product_name,
              price,CAST(publish_product.tags as JSON) as tags,
              publish_product.localization,publish_product.desc_product,
              publish_product.salesman_id,contact_salesman.province_focus 
              from publish_product INNER
              JOIN contact_salesman ON
              publish_product.salesman_id=contact_salesman.salesman_id
              WHERE contact_salesman.province_focus LIKE "%{province}%" 
              and publish_product.product_name LIKE "%{product_name}%"
              or publish_product.localization LIKE "%{province}%";
          """
    async with database as conn:
        return await conn.fetch_all(query=query)

#function main
async def main():
    await database.connect()
    task1=asyncio.create_task(search_product_filter_by_province)
    await task1
    await database.disconnect()
    
if __name__=="__main__":
    asyncio.run(main())
    