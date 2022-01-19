from src.infra.db import Base
import sqlalchemy as sa

# class PublishProdut or Publicar Produto


class PublishProduct(Base):
    __tablename__ = "publish_product"

    id = sa.Column(sa.Integer, autoincrement=True, primary_key=True)
    product_name = sa.Column(sa.String(80), nullable=False)
    price = sa.Column(sa.REAL, nullable=True)
    tags = sa.Column(sa.JSON(False), nullable=True)
    localization = sa.Column(sa.String(80), nullable=True)
    desc_product = sa.Column(sa.Text, nullable=True)
    link_site = sa.Column(sa.Text, nullable=True)
    img_name = sa.Column(sa.String(100), nullable=False)
    type_img = sa.Column(sa.String(60), nullable=False)
    img = sa.Column(sa.LargeBinary, nullable=False)
    salesman_id = sa.Column(
        sa.Integer,
        sa.ForeignKey("salesman.id", ondelete="CASCADE", onupdate="CASCADE"),
        index=True,
    )
    salveProduct = sa.orm.relationship(
        "SalveProduct", backref="publish_product", cascade="all,delete"
    )
