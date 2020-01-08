import { ModelApiFactory } from "./output/api"
import { Configuration } from "./output"

var config = new Configuration()
config.basePath = "https://localhost:5001"
config.accessToken = "Bearer AAA"

var fact = ModelApiFactory(config)