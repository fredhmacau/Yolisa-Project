from src.infra.db import database


#register views 
async def register_views_in_salesman(id_salesman):
    query="INSERT INTO profile_views(salesman_id) VALUES (:id_salesman)"
    async with database as conn:
        return await conn.execute(query=query,values={"id_salesman":id_salesman})
    
    
