from src.infra.db import database
import asyncio

#add post for salesman
async def post_product_from_salesman(id_salesman:int,**data):
    #destruture data
    values={
        "product_name":data['product_name'],
        "price":data['price'],
        "tags":data['tags'],
        "localization":data['localization'],
        "desc_product":data['desc_product'],
        "img_name":data['img'].filename,
        "type_img":data['img'].content_type,
        "img":await data['img'].read(),
        "salesman_id":id_salesman        
    }
    #query
    query="""CALL add_post_salesman(:product_name,:price,:tags,:localization,
             :desc_product,:img_name,:type_img,:img,:salesman_id
             )
          """
    #conn db
    async with database as conn:
        return await conn.execute(query=query,values=values)
    


#function main
async def main():
    await database.connect()
    task1=asyncio.create_task(post_product_from_salesman)
    await task1
    await database.disconnect()

if __name__=="__main__":
    asyncio.run(main())
    