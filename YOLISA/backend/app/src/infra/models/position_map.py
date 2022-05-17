from src.infra.db import Base
import sqlalchemy as sa
from sqlalchemy import func
from sqlalchemy.types import UserDefinedType

class Geometry(UserDefinedType):
    def get_col_spec(self):
        return 'POINT'


#Class PositionMap
class PositionMap(Base):
    __tablename__="position_map"
    id=sa.Column(sa.Integer, autoincrement=True, primary_key=True)
    cordenates=sa.Column(Geometry, nullable=False)
    salesman_id=sa.Column(sa.Integer,sa.ForeignKey("salesman.id",ondelete="CASCADE",onupdate="CASCADE"),index=True)