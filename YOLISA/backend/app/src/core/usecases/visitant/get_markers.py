from src.infra.db import database
import asyncio

#async
async def get_markers_for_salesman(id_salesman):
    query="SELECT * FROM position_map WHERE salesman_id=:id_salesman"
    async with database as conn:
        return await conn.fetch_all(query=query,values={"id_salesman":id_salesman})
    
    
    
async def main():
    await database.connect()
    task=asyncio.create_task(get_markers_for_salesman)
    await task
    await database.disconnect()


if __name__=="__main__":
    asyncio.run(main())