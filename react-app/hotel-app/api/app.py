from flask import Flask, request
from flask_cors import CORS
import pandas as pd
import joblib

app = Flask(__name__)
CORS(app)


# df.columns = ['lead_time', 'arrival_date_month', 'stays_in_weekend_nights', 'stays_in_week_nights', 'adults', 
# 'children', 'babies', 'is_repeated_guest', 'previous_cancellations', 'previous_bookings_not_canceled', 
# 'booking_changes', 'required_car_parking_spaces', 'total_of_special_requests']



@app.route('/api', methods=['POST'])
def predict():

    months = {
        "january" : 1,
        "february" : 2,
        "march" : 3,
        "april" : 4,
        "may" : 5,
        "june" : 6,
        "july" : 7,
        "august" : 8,
        "september" : 9,
        "october" : 10,
        "november" : 11,
        "december" : 12

    }

    text = request.get_json()

    print(text)

    text[1] = text[1].lower()
    text[1] = months.get(text[1])

    text[7] = text[7].lower()
    if text[7] == 'yes':
        text[7] = 1
    if text[7] == 'no':
        text[7] = 0

    text = [text]
    df = pd.DataFrame(text)
    model = joblib.load("model.pkl")
    prediction = model.predict(df.values)
    if prediction == 0:
        prediction = "Valid Booking"
    if prediction == 1:
        prediction = "No show"

    print(prediction)

    return {
        'prediction': prediction
    }



if __name__ == '__main__':
    app.run(port=5000, debug=True)  