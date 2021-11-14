from __future__ import annotations
from pathlib import Path
from flask import Blueprint, render_template

from monopoly_invest.type.player import player_list


web_frontend = Blueprint('WebFrontend', __name__)
web_frontend.template_folder = Path(__file__).parent / 'templates'
web_frontend.static_folder = Path(__file__).parent / 'static'


@web_frontend.route('/')
def index():
    return render_template('index.html')


@web_frontend.route('/players')
def players_view():
    return render_template('players.html', player_list=player_list)

