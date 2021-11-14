from __future__ import annotations
from flask import Blueprint

from monopoly_invest.api.currency import currency
from monopoly_invest.api.player import player


API = Blueprint('API', __name__)
API.register_blueprint(currency, url_prefix='/currency')
API.register_blueprint(player, url_prefix='/player')

