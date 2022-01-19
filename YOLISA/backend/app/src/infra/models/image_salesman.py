from src.infra.db import Base
import sqlalchemy as sa


# class ImageSalesman or ImagemVendedor
class imageSalesman(Base):
    __tablename__ = "image_salesman"

    id = sa.Column(sa.Integer, autoincrement=True, primary_key=True)
    image_name = sa.Column(sa.String(80), nullable=False)
    type_image = sa.Column(sa.String(60), nullable=False)
    img = sa.Column(sa.LargeBinary, nullable=False)
    salesman_id = sa.Column(
        sa.Integer,
        sa.ForeignKey("salesman.id", ondelete="CASCADE", onupdate="CASCADE"),
        index=True,
        unique=True,
    )
