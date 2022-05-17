from src.infra.db import Base
import sqlalchemy as sa

# class ContactSalesman or Contacto Vendedor


class ContactSalesman(Base):
    __tablename__ = "contact_salesman"

    id = sa.Column(sa.Integer, autoincrement=True, primary_key=True)
    phone_number = sa.Column(sa.Integer, nullable=False)
    province_focus = sa.Column(sa.String(80), nullable=False)
    city_focus = sa.Column(sa.String(80), nullable=True)
    desc_localization = sa.Column(sa.Text, nullable=True)
    salesman_id = sa.Column(
        sa.Integer,
        sa.ForeignKey("salesman.id", ondelete="CASCADE", onupdate="CASCADE"),
        index=True,
        unique=True,
    )
