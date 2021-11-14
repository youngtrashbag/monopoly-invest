from __future__ import annotations
from pathlib import Path
from flask import Blueprint, render_template


web_frontend = Blueprint('WebFrontend', __name__)
web_frontend.template_folder = Path(__file__).parent / 'templates'
web_frontend.static_folder = Path(__file__).parent / 'static'


@web_frontend.route('/')
def index():
    return render_template('index.html')

