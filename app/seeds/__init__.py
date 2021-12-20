from flask.cli import AppGroup
from .users import seed_users, undo_users
from .boards import seed_boards, undo_boards
from .lists import seed_lists, undo_lists
from .cards import seed_cards, undo_cards
from .comments import seed_comments, undo_comments
from .members import seed_members, undo_members

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_boards()
    seed_lists()
    seed_cards()
    seed_comments()
    seed_members()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_boards()
    undo_lists()
    undo_cards()
    undo_comments()
    undo_members()
    # Add other undo functions here
