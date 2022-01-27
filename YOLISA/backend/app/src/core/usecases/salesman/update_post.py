from src.infra.db import database
import asyncio

#update post created by salesman
async def update_post_from_salesman(id_post:int,**data):
    values={
        "product_name":data['product_name'],
        "localization":data['localization'],
        "desc_product":data['desc_product'],
        "post_id":id_post
    }
    
    #query
    query="""CALL update_post_salesman(:product_name,:localization,
             :desc_product,:post_id)"""
    #conn db
    async with database as conn:
        return await conn.execute(query=query,values=values)


#function main courotine
async def main():
    await database.connect()
    task1=asyncio.create_task(update_post_from_salesman)
    await task1
    await database.disconnect()

if __name__=="__main__":
    asyncio.run(main()) 