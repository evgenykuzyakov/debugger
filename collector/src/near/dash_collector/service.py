import os

config = dict()

config['node_api_host'] = os.environ.get(
    'NEAR_COLLECTOR_NODE_API_HOST',
    'localhost'
)

config['node_api_port'] = int(os.environ.get(
    'NEAR_COLLECTOR_NODE_API_PORT',
    5001,
))