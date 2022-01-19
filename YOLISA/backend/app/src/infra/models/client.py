import sqlalchemy as sa
from src.infra.db import Base

# class Client or Cliente


class Client(Base):
    __tablename__ = "client"
    id = sa.Column(sa.Integer, autoincrement=True, primary_key=True)
    username = sa.Column(sa.String(60), unique=True, nullable=True)
    first_name = sa.Column(sa.String(60), nullable=False)
    last_name = sa.Column(sa.String(60), nullable=False)
    email = sa.Column(sa.String(80), nullable=True, unique=True)
    password_hash = sa.Column(sa.String(120), nullable=False)
    phone_number = sa.Column(sa.Integer, nullable=False)
    interest = sa.Column(sa.Text, nullable=True)
    image_client = sa.orm.relationship(
        "ImageClient", backref="client", cascade="all,delete", uselist=False
    )
    salve_product = sa.orm.relationship(
        "SalveProduct", backref="client", cascade="all,delete"
    )
    denunce_salesman = sa.orm.relationship(
        "DenunceSalesman", backref="client", cascade="all,delete"
    )
