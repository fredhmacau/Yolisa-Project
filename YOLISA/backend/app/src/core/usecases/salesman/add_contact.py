from src.infra.db import database
import asyncio

#add more contact from salesman

async def add_contact_from_salesman(id:int,**data):
    #destruture data
    values={
        "phone_number":data['phone_number'],
        "province_focus":data['province_focus'],
        "city_focus":data['city_focus'],
        "desc_localization":data['desc_localization'],
        "salesman_id":id
    } 
    query="""INSERT INTO contact_salesman(phone_number,province_focus,
             city_focus,desc_localization,salesman_id) 
             VALUES(:phone_number,:province_focus,:city_focus,
            :desc_localization,:salesman_id)"""
    
    #conn db
    async with database as conn:
        return await conn.execute(query=query,values=values)
    


#function main
async def main():
    await database.connect()
    task1=asyncio.create_task(add_contact_from_salesman)
    await task1
    await database.disconnect()
    
if __name__=="__main__":
    asyncio.run(main())