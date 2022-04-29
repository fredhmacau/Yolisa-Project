from src.infra.db import database
import asyncio


#add position the salesman in map
async def add_position_for_salesman(id_salesman,data):
    values={
        "lat":data['lat'],
        "lng":data['lng'],
        "salesman_id":id_salesman
    }
    query="INSERT INTO position_map (lat,lng,salesman_id) values (:lat,:lng,:salesman_id)"
    async with database as conn:
        return await conn.execute(query=query,values=values)
    

async def main():
    await database.connect()
    task = asyncio.create_task(add_position_for_salesman)
    await task
    await database.disconnect()


if __name__=="__main__":
    asyncio.run(main())
    