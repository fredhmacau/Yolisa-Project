from src.infra.db import database
from faker import Faker


fake = Faker("pt_PT")


class TestSalesman:
    async def insert(self):

        salesman = {
            "username": fake.first_name(),
            "business_name": fake.bs(),
            "password": fake.word(),
            "email": fake.email(),
            "nif": fake.credit_card_number(),
            "desc_business": fake.paragraph(nb_sentence=6),
        }

        async with database.connect() as db:
            sql = """
            INSERT INTO salesman(username,business_name,password,email,nif,desc_business)
            VALUES (:username,:buniness_name,:password,:email,:nif,:desc_business)
            """
            await db.execute(query=sql, values=salesman)
