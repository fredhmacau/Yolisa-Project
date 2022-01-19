import sqlalchemy as sa
from src.infra.db import Base


# class Salesman or Vendedor
class Salesman(Base):
    __tablename__ = "salesman"
    id = sa.Column(sa.Integer, primary_key=True, autoincrement=True, index=True)
    username = sa.Column(sa.String(60), nullable=False, unique=True)
    email = sa.Column(sa.String(80), nullable=True, unique=True)
    business_name = sa.Column(sa.String(80), nullable=False)
    password_hash = sa.Column(sa.String(120), nullable=False)
    status = sa.Column(sa.Boolean, default=False, nullable=True)
    nif = sa.Column(sa.String(20), nullable=False)
    doc_identification = sa.Column(sa.LargeBinary, nullable=True)
    desc_business = sa.Column(sa.Text, nullable=True)
    contact = sa.orm.relationship(
        "ContactSalesman",
        uselist=False,
        cascade="all,delete",
        back_populates="salesman",
    )
    image_salesman = sa.orm.relationship(
        "ImageSalesman",
        uselist=False,
        cascade="all,delete",
        back_populates="salesman",
    )
    publish_product = sa.orm.relationship(
        "PublishProduct",
        uselist=False,
        cascade="all,delete",
        back_populates="salesman",
    )
