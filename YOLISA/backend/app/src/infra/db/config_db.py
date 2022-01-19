from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.ext.declarative import declarative_base
import sqlalchemy as sa
from databases import  Database

# create a driver engine
conn_str = "mysql+aiomysql://root:12-80-Devtry:2@localhost/yolisa"
engine = create_async_engine(conn_str, echo=True)

# linked database schema
metadata_obj = sa.MetaData(engine, schema="yolisa")
# create Base declarative for will creatings table models
Base = declarative_base(engine, metadata=metadata_obj)

# created linked database with module databases for transition in db schema

database = Database("mysql+aiomysql://root:12-80-Devtry:2@localhost/yolisa")
