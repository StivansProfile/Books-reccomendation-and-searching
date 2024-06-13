from flask import Flask, jsonify, request
from reccomend import main
from flask_cors import CORS
import csv

app = Flask(__name__)
CORS(app)


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


@app.route("/autocomplete", methods=["GET"])
def autocomplete():
    term = request.args.get("term", "").lower()
    max_results = 20  # Maximum number of results to fetch

    filtered_books = []

    if len(term) > 3 and len(term) != 0:
        # Open the CSV file and search line by line
        with open("./sorted_book_titles.csv", newline="", encoding="utf-8") as csvfile:
            reader = csv.DictReader(csvfile)

            # Iterate through the rows and search for matching titles
            for row in reader:
                title = row["book_title"].lower()
                if title.startswith(term):
                    filtered_books.append(row["book_title"])
                    if len(filtered_books) >= max_results:
                        break

    return jsonify(filtered_books)


@app.route("/recommend", methods=["POST"])
def recommend():
    if request.method == "POST":
        # Assuming main function returns recommendations based on POST data
        data = request.get_json()
        book_title = data.get("book_title")

        recommendations = main(book_title)

        return jsonify({"books_recommended": recommendations})
    else:
        return "Only POST requests are supported for this endpoint"


if __name__ == "__main__":
    app.run()
