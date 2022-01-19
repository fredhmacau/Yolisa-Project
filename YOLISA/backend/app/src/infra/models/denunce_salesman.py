from src.infra.db import Base
import sqlalchemy as sa

# class DenunceSalesman or Denuncie Vendedor


class DenunceSalesman(Base):
    __tablename__ = "denunce_salesman"

    id = sa.Column(sa.Integer, autoincrement=True, primary_key=True)
    title = sa.Column(sa.String(60), nullable=False)
    desc_denunce = sa.Column(sa.Text, nullable=False)
    annex_name = sa.Column(sa.String(100), nullable=True)
    type_annex = sa.Column(sa.String(60), nullable=True)
    annex = sa.Column(sa.LargeBinary)
    client_id = sa.Column(
        sa.Integer,
        sa.ForeignKey("client.id", ondelete="CASCADE", onupdate="CASCADE"),
        index=True,
    )
