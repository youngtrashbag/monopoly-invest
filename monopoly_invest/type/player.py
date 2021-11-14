from __future__ import annotations
from typing import List
from marshmallow import Schema, fields

from monopoly_invest.type.currency import Currency


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
    name = fields.String(required=True)
    portfolio = fields.Dict(keys=fields.Str(), values=fields.Float())
