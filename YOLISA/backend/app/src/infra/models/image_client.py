from src.infra.db import Base
import sqlalchemy as sa

# class ImageClient or Imagem do client


class ImageClient(Base):
    __tablename__ = "image_client"

    id = sa.Column(sa.Integer, autoincrement=True, primary_key=True)
    image_name = sa.Column(sa.String(100), nullable=False)
    type_img = sa.Column(sa.String(60), nullable=False)
    img = sa.Column(sa.LargeBinary, nullable=False)
    client_id = sa.Column(
        sa.Integer,
        sa.ForeignKey("client.id", ondelete="CASCADE", onupdate="CASCADE"),
        index=True,
        unique=True,
    )
