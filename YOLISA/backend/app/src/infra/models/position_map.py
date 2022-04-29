from src.infra.db import Base
import sqlalchemy as sa


#Class PositionMap
class PositionMap(Base):
    __tablename__="position_map"
    id=sa.Column(sa.Integer, autoincrement=True, primary_key=True)
    lat=sa.Column(sa.REAL, nullable=False)
    lng=sa.Column(sa.REAL, nullable=False)
    salesman_id=sa.Column(sa.Integer,sa.ForeignKey("salesman.id",ondelete="CASCADE",onupdate="CASCADE"),index=True)