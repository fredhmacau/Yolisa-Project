from src.infra.db import Base
import sqlalchemy as sa


#view in profile
class ProfileViews(Base):
    __tablename__="profile_views"
    id=sa.Column(sa.Integer,autoincrement=True,primary_key=True)
    salesman_id=sa.Column(sa.Integer,sa.ForeignKey("salesman.id",ondelete="CASCADE",onupdate="CASCADE"),index=True)
