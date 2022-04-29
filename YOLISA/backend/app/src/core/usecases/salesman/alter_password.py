from src.infra.db import database
import asyncio

#alter password for salesman
async def alter_password_salesman(data):
    #check code
    query_check="""SELECT salesman.id,salesman.email, 
    alter_password.code,alter_password.email_receive
    from alter_password JOIN salesman ON salesman.email=:email_receive and 
   alter_password.code=:code"""
    values_check={
        "code":data['code'],
        "email_receive":data['email_receive']
    }
    async with database as conn:
        
        check_result=await conn.fetch_all(query=query_check,values=values_check)
        if check_result is None:
            return 0
        else:
            value_password={"new_password":data['new_password_hash'],"id":check_result[0][0]}
            query="UPDATE salesman SET password_hash=:new_password WHERE id=:id"
            
            async with database as conn:
                return await conn.execute(query=query,values=value_password)
