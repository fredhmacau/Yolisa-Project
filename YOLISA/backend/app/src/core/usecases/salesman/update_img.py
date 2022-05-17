from src.infra.db import database
import asyncio

#update img from salesman
async def update_img_salesman(id:int,img):
    #destruture data from img
    values={
        "image_name":img.filename,
        "type_image":img.content_type,
        "img":await img.read(),
        "salesman_id":id
    }
    
    #query
    query="""UPDATE image_salesman SET image_name=:image_name,
            type_image=:type_image,img=:img WHERE salesman_id=:salesman_id
            """
    
    #conn db
    async with database as conn:
        return await conn.execute(query=query,values=values)
    

#function main
async def main():
    await database.connect()
    task1=asyncio.create_task(update_img_salesman)
    await task1
    await database.disconnect()
    
if __name__=="__main__":
    asyncio.run(main())