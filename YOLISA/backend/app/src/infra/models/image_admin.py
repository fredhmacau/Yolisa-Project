from src.infra.db import Base
import sqlalchemy as sa

# class ImageAdmin or Admistrador imagem


class ImageAdmin(Base):
    __tablename__ = "image_admin"

    id = sa.Column(sa.Integer, autoincrement=True, primary_key=True)
    image_name = sa.Column(sa.String(100), nullable=False)
    image_type = sa.Column(sa.String(60), nullable=False)
    image = sa.Column(sa.LargeBinary, nullable=False)
    admin_id = sa.Column(
        sa.Integer,
        sa.ForeignKey("admin.id", ondelete="CASCADE", onupdate="CASCADE"),
        unique=True,
    )
