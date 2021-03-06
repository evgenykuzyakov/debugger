from flask import (
    Flask,
    jsonify,
)

from near.dash_mock_node import client

app = Flask(__name__)

action_fns = {
    'get-observer-data': client.get_observer_data,
}


@app.route('/<action>', methods=['GET'])
def get_action(action):
    action_fn = action_fns[action]
    value = action_fn()
    return jsonify(value)


if __name__ == '__main__':
    app.run(port=5001, debug=True)
