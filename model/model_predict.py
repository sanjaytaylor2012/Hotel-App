import joblib
import pandas as pd

# df.columns = ['lead_time', 'arrival_date_month', 'stays_in_weekend_nights', 'stays_in_week_nights', 'adults', 
# 'children', 'babies', 'is_repeated_guest', 'previous_cancellations', 'previous_bookings_not_canceled', 
# 'booking_changes', 'required_car_parking_spaces', 'total_of_special_requests']

pred_values = [[10, 5, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1]]
df = pd.DataFrame(pred_values)
model = joblib.load("model.pkl")
prediction = model.predict(df.values)
