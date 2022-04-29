from src.infra.db import database
import asyncio
import random
import smtplib,ssl
from email.message import EmailMessage


#config msg 
msg=EmailMessage()

#config server
context=ssl.create_default_context()

#receive email from salesman for alter pass
async def receive_email_for_alter_pass(data):
    
    
    
    
    query_check_email="SELECT email from salesman WHERE email=:email_receive LIMIT 1;"
    async with database as conn:
        check_result=await conn.fetch_one(query=query_check_email,values={"email_receive":data['email_salesman']})
        
        if check_result is None:
            return 0
        else:
            #general number random
            number=random.randint(100000,999999)
            values={
                "email_receive":data['email_salesman'],
                "code":number
            }
            
            #config msg
            msg['Subject']="Alteração da senha"
            msg['From']="yolisainfo@gmail.com"
            msg['To']=data['email_salesman']
            msg.set_content(f"Use o seguinte código para alterar a sua senha na yolisa: {number}")
            msg.set_charset("utf-8")
            
            
            # send email to salesman
            with smtplib.SMTP_SSL("smtp.gmail.com",465,context=context) as smtp:
                smtp.login("yolisainfo@gmail.com","Deurickmark3232")
                
                smtp.send_message(msg)
                smtp.quit()
            
            query="INSERT INTO alter_password (email_receive,code) values (:email_receive,:code)"
            async with database as conn:
                return await conn.execute(query=query,values=values)


async def main():
    await database.connect()
    task=asyncio.create_task(receive_email_for_alter_pass)
    await task
    await database.disconnect()


if __name__=="__main__":
    asyncio.run(main())