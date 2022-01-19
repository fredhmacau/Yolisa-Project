import asyncio
from src.infra.db import engine, Base
from src.infra.models import *


async def init_db():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)
        await conn.run_sync(Base.metadata.create_all)


async def main():
    task = asyncio.create_task(init_db())
    await task
    await engine.dispose()


if __name__ == "__main__":
    asyncio.run(main())
