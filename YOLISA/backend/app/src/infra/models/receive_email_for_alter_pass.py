from src.infra.db import Base
import sqlalchemy as sa

#class RestorePasswordSalesman
class AlterPassword(Base):
    __tablename__="alter_password"
    id=sa.Column(sa.Integer, autoincrement=True, primary_key=True)
    code=sa.Column(sa.Integer, nullable=False)
    email_receive=sa.Column(sa.String(100), nullable=False)
    salesman_id=sa.Column(sa.Integer,sa.ForeignKey("salesman.id", ondelete="CASCADE", onupdate="CASCADE"), index=True, unique=True)