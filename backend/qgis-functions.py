from qgis.core import *
from dotenv import dotenv_values

config = dotenv_values(".env")

QgsApplication.setPrefixPath(config.get("QGIS_PATH"), True)