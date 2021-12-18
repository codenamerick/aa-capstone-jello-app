from app.models import db, Board


def seed_boards():
    board_one = Board(
        name='Board 1', image_url='https://res.cloudinary.com/dedpxzbak/image/upload/v1639782657/board-bg-1_qkviry.png', user_id=1
    )
    board_two = Board(
        name='Board 2', image_url='https://res.cloudinary.com/dedpxzbak/image/upload/v1639782657/board-bg-2_y3xzw7.png', user_id=1
    )
    board_three = Board(
        name='Board 3', image_url='https://res.cloudinary.com/dedpxzbak/image/upload/v1639782656/board-bg-3_xttmed.png', user_id=1
    )
    board_four = Board(
        name='Board 4', image_url='https://res.cloudinary.com/dedpxzbak/image/upload/v1639782656/board-bg-3_xttmed.png', user_id=1
    )
    board_five = Board(
        name='Board 5', image_url='https://res.cloudinary.com/dedpxzbak/image/upload/v1639782657/board-bg-1_qkviry.png', user_id=1
    )
    board_six = Board(
        name='Board 6', image_url='https://res.cloudinary.com/dedpxzbak/image/upload/v1639782657/board-bg-2_y3xzw7.png', user_id=1
    )

    db.session.add(board_one)
    db.session.add(board_two)
    db.session.add(board_three)
    db.session.add(board_four)
    db.session.add(board_five)
    db.session.add(board_six)

    db.session.commit()


def undo_boards():
    db.session.execute('TRUNCATE boards RESTART IDENTITY CASCADE;')
    db.session.commit()
