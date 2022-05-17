from src.infra.db import database
import asyncio

#update contact salesman
async def update_contact_from_salesman(id_salesman:int,**data):
    #destruture data
    values={
        "phone_number":data['phone_number'],
        "province_focus":data['province_focus'],
        
        "desc_localization":data['desc_localization'],
        "salesman_id":id_salesman
    } 
    #query
    query="""UPDATE contact_salesman SET phone_number=:phone_number,
            province_focus=:province_focus,
            desc_localization=:desc_localization
            WHERE salesman_id=:salesman_id;"""
    
    #conn db
    async with database as conn:
        return await conn.execute(query=query,values=values)
    

#function main
async def main():
    await database.connect()
    task1=asyncio.create_task(update_contact_from_salesman)
    await task1
    await database.disconnect()

if __name__=="__main__":
    asyncio.run(main())