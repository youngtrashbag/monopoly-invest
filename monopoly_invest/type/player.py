from __future__ import annotations
from typing import List
from flask_marshmallow import Schema
from flask_marshmallow.fields import fields

from monopoly_invest.type.currency import Currency


# TODO: Maybe persist, and not only instantiate on runtime
player_list = {}


class Player:
    def __init__(self, name: str):
        self.name = name
        self.portfolio = {}

    def get_current_fortune(self, currency_list: List[Currency]):
        fortune = 0.0

        for name in currency_list:
            if c := self.portfolio.get(name):
                fortune += c.get_current_value()

        return fortune


class PlayerSchema(Schema):
    name = fields.Str(required=True)
    portfolio = fields.Dict(keys=fields.Str(), values=fields.Float(), required=False)
