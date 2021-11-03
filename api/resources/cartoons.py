# what do we need from our deps?
from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required
from peewee import DoesNotExist
from playhouse.shortcuts import model_to_dict

# what do we need from locally?
from cartoon import Cartoon
from favorite import Favorite
from user import User

# how do we make our blueprint?
cartoon = Blueprint('cartoons', __name__, url_prefix='/cartoons')

@cartoon.route('/')
@login_required
def get_all_cartoons():
    try:
        cartoons = [model_to_dict(cartoon) for cartoon in Cartoon.select()]
        return jsonify(cartoons)
    except DoesNotExist:
        return jsonify(message="Error getting cartoons."), 500

@cartoon.route('/', methods=["POST"])
@login_required
def add_cartoon():
    body = request.get_json()
    cartoon = Cartoon.create(**body)
    # Favorite.create(cartoon=cartoon, user=current_user)
    return jsonify(model_to_dict(cartoon)), 201

@cartoon.route('/favorites/<int:cartoon_id>', methods=["POST"])
@login_required
def add_favorite(cartoon_id):
    try:
        # get the cartoon whose id is cartoon_id
        cartoon = Cartoon.get_by_id(cartoon_id)
        if Favorite.get_or_none(Favorite.user == current_user.id, Favorite.cartoon == cartoon.id) != None:
            return jsonify(message="Favorite already exists!"), 400
        # create a favorite for the cartoon / current_user
        Favorite.create(user=current_user, cartoon=cartoon)
        # fetch the user whose id matches the current_user's id
        user = User.get_by_id(current_user.id)
        # delete their password from their model_to_dict
        user_dict = model_to_dict(user, backrefs=True)
        del user_dict['password']
        # send the user's info back!
        return jsonify(user_dict), 201
    except DoesNotExist:
        return jsonify(message="Error getting cartoon."), 500