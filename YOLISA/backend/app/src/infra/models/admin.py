"""Admin file """
import sqlalchemy as sa
from src.infra.db import Base


# class Admin or Administrador
class Admin(Base):
    """Admin class"""

    __tablename__ = "admin"
    id = sa.Column(sa.Integer, autoincrement=True, primary_key=True)
    username = sa.Column(sa.String(80), nullable=False, unique=True)
    email = sa.Column(sa.String(80), nullable=True, unique=True)
    password_hash = sa.Column(sa.String(120), nullable=False)
    first_name = sa.Column(sa.String(65), nullable=False)
    last_name = sa.Column(sa.String(65), nullable=False)
    img_admin = sa.orm.relationship("ImageAdmin", backref="admin", cascade="all,delete")
