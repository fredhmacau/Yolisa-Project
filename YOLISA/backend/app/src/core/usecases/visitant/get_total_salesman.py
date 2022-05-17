from src.infra.db import database
import asyncio

#get informations of de post
async def get_total_salesman():
    query="""
            SELECT id,business_name from salesman;
          """
    
    async with database as conn:
        return await conn.fetch_all(query=query)


#function main
async def main():
    await database.connect()
    task1=asyncio.create_task(get_total_salesman)
    await task1
    await database.disconnect()

if __name__=="__main__":
    asyncio.run(main())