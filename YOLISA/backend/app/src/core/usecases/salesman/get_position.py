from src.infra.db import database
import asyncio


#visualy markers the map for salesman
async def get_marker_for_salesman(id_salesman):
    query="SELECT * from position_map WHERE salesman_id=:id_salesman"
    async with database as conn:
        return await conn.fetch_all(query=query,values={"id_salesman":id_salesman})
    

async def main():
    await database.connect()
    task=asyncio.create_task(get_marker_for_salesman)
    await task
    await database.disconnect()
