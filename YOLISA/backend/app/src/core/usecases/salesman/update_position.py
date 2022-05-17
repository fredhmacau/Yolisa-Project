from src.infra.db import database
import asyncio


async def update_marker_position_salesman(id_salesman,data):
    #check positions
    query_check="SELECT * from position_map WHERE  salesman_id=:id_salesman"
    async with database as conn:
        check_result=await conn.fetch_all(query=query_check,values={"id_salesman":id_salesman})
        if check_result is None:
            return 0
        else:
            query_delete="DELETE FROM position_map WHERE salesman_id=:id_salesman"
            values={
                "salesman_id":id_salesman
            }
            query_insert=f"""INSERT INTO position_map (cordenates, salesman_id) 
    values (ST_GeomFromText('POINT({data["lat"]} {data["lng"]})'),:salesman_id)"""
            
            async with database as conn:
                await conn.execute(query=query_delete,values={"id_salesman":id_salesman})
                return await conn.execute(query=query_insert,values=values)


async def main():
    await database.connect()
    task=asyncio.create_task(update_marker_position_salesman)
    await task
    await database.disconnect()

if __name__=="__main__":
    asyncio.run(main())
