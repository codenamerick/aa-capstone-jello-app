"""create assignment model

Revision ID: 85db8c809560
Revises: 060e7ed8f4f7
Create Date: 2021-12-17 15:46:18.681529

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '85db8c809560'
down_revision = '060e7ed8f4f7'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('assignments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('card_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['card_id'], ['cards.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('assignments')
    # ### end Alembic commands ###
