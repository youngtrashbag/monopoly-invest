from flask import Blueprint, request, jsonify, abort
from marshmallow import ValidationError

from monopoly_invest.type.player import Player, PlayerSchema


player = Blueprint('Player', __name__)

# TODO: Maybe persist, and not only instantiate on runtime
player_list = {}


# TODO: Maybe use generics, because it could potentially save code
@player.route('/new', methods=['POST'])
def new_player():
    response_data = request.json
    schema = PlayerSchema()

    try:
        result = schema.load(response_data)
        new_p = Player(result.name)
        player_list[new_p.name] = new_p

        return jsonify(new_p), 201
    except ValidationError as e:
        return jsonify(e), 400