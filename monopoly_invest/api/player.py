from __future__ import annotations

import json
from flask import Blueprint, request, jsonify, abort

from monopoly_invest.type.player import Player, PlayerSchema, player_list


player = Blueprint('Player', __name__)


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
    except Exception as e:
        print(e)
        return 'not work, sorry', 400


@player.route('/<name>', methods=['GET'])
def get_currency(name):
    if c := player_list.get(name):
        return jsonify(c), 200
    else:
        return abort(404)


@player.route('/<name>/fortune', methods=['GET'])
def get_fortune(name):
    if c := player_list.get(name):
        fortune = c.get_current_fortune()
        return jsonify({fortune: fortune}), 200
    else:
        return abort(404)
