from flask import Flask, request
from flask_cors import CORS
import pandas as pd
import joblib

app = Flask(__name__)
CORS(app)



@app.route('/api', methods=['POST', 'GET'])
def predict():
    text = request.get_json()
    df = pd.DataFrame(text)
    model = joblib.load("model.pkl")
    prediction = model.predict(df.values)
    if prediction == 0:
        prediction = "Valid Booking"
    if prediction == 1:
        prediction = "No show"
    return {
        'prediction': prediction
    }



if __name__ == '__main__':
    app.run(port=5000, debug=True)  