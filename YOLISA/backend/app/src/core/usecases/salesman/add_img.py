from src.infra.db import database
import asyncio


#add img from salesman
async def salesman_add_img(id:int,img):
    #destruture data
    values={
        "image_name":img.filename,
        "type_image":img.content_type,
        "img":await img.read(),
        "salesman_id":id
    }
    #query
    query="CALL add_img_salesman(:image_name,:type_image,:img,:salesman_id)"
    #conn database
    async with database as conn:
        return await conn.execute(query=query,values=values)
    
    
    
#function main
async def main():
    await database.connect()
    task1=asyncio.create_task(salesman_add_img)
    await task1
    await database.disconnect()
    
if __name__=="__main__":
    asyncio.run(main())