import sqlalchemy.orm as _orm_sync
import sqlalchemy.ext.asyncio as _sql_async


# connect_str
connect_str = "mysql+aiomysql://root:12-80-Devtry:2@localhost/yolisa"
# create engine
engine = _sql_async.create_async_engine(connect_str, echo=True)
# base declarative
Base = _orm_sync.declarative_base()
# session async
Session = _sql_async.AsyncSession(engine, expire_on_commit=False)
