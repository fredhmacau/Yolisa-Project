from src.infra.db import database

import asyncio

#get informations of de post
async def get_all_info(id_salesman,id_post):
    query="""
            SELECT salesman.id, salesman.nif,
salesman.email,salesman.business_name,
contact_salesman.phone_number, contact_salesman.province_focus,
salesman.desc_business,publish_product.id as id_post, 
publish_product.price,publish_product.product_name, publish_product.desc_product,
position_map.id as "id_markers",
concat(st_x(position_map.cordenates),',',st_y(position_map.cordenates)) as markers FROM
salesman INNER JOIN contact_salesman ON salesman.id=contact_salesman.salesman_id
INNER JOIN publish_product ON salesman.id=publish_product.salesman_id
LEFT JOIN position_map ON salesman.id=position_map.salesman_id
WHERE salesman.id=:id_salesman and publish_product.id=:id_post;
          """
    
    async with database as conn:
        return await conn.fetch_all(query=query,values={"id_salesman":id_salesman,"id_post":id_post})


#function main
async def main():
    await database.connect()
    task1=asyncio.create_task(get_all_info)
    await task1
    await database.disconnect()

if __name__=="__main__":
    asyncio.run(main())