from src.infra.db import Base
import sqlalchemy as sa

# class SalveProduct or Salvar Product


class SalveProduct(Base):
    __tablename__ = "salve_product"

    id = sa.Column(sa.Integer, autoincrement=True, primary_key=True)
    product_id = sa.Column(
        sa.Integer,
        sa.ForeignKey("publish_product.id", ondelete="CASCADE", onupdate="CASCADE"),
        index=True,
        unique=True,
    )
    client_id = sa.Column(
        sa.Integer, sa.ForeignKey("client.id", ondelete="CASCADE", onupdate="CASCADE")
    )
