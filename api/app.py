# what do we import from our packages?
from flask import Flask, g
from flask_cors import CORS
from flask_login import LoginManager

# what do we import from locally?
from db import DATABASE, initialize
from cartoon import Cartoon
from favorite import Favorite
from user import User
from resources.cartoons import cartoon
from resources.users import user

# what options does our flask app need
DEBUG = True
PORT = 8000

login_manager = LoginManager()

# how do we create our flask app
app = Flask(__name__)

app.secret_key = 'ednededdnededdneddy'
login_manager.init_app(app)

@login_manager.user_loader
def load_user(userid):
    try:
        return User.get(User.id == userid)
    except:
        return None

# set up before and after request decorators
@app.before_request
def before_request():
    # make the global db be DATABASE
    g.db = DATABASE
    # open the global db connection
    g.db.connect()

@app.after_request
def after_request(response):
    g.db.close()
    return response

# let's make an index route
@app.route('/')
def index():
    return 'Welcome to Cartoons and Waffles!'

app.register_blueprint(cartoon)
app.register_blueprint(user)

CORS(app, origins=['http://localhost:3000'], supports_credentials=True)

# what's the main deal?
if __name__ == '__main__':
    # initialize tables
    initialize([Cartoon, User, Favorite])
    # run server
    app.run(debug=DEBUG, port=PORT)