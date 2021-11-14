from __future__ import annotations
from flask import Blueprint, request, jsonify, abort
from marshmallow import ValidationError

from monopoly_invest.type.currency import Currency, CurrencySchema


currency = Blueprint('Currency', __name__)

# TODO: Maybe persist, and not only instantiate on runtime
currency_list = {}


@currency.route('/new', methods=['POST'])
def new_currency():
    response_data = request.json
    schema = CurrencySchema()

    try:
        result = schema.load(response_data)
        new_c = Currency(result.name, result.value)
        currency_list[new_c.name] = new_c

        return jsonify(new_c), 201
    except ValidationError as e:
        return jsonify(e), 400


@currency.route('/<name>', methods=['GET'])
def get_currency(name):
    if c := currency_list.get(name):
        return jsonify(c), 200
    else:
        return abort(404)


@currency.route('/<name>/value', methods=['GET'])
def get_value(name):
    if c := currency_list.get(name):
        value = c.get_current_value()
        return jsonify({value: value}), 200
    else:
        return abort(404)
