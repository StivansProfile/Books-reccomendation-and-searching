<h1>Books recommendation and searching web app</h1>
<h2>What is it ?</h2>
<p>This is a web app that allows you to search through thousands of books using the autocomplete feature.</p>
<p>After you've found the book you have been searching for you simply click the "Reccomend me books" button.</p>
<p>Then the app would return 5 recommendations for similar books to the one you have been searching for.</p>

![Screenshot 2024-06-13 195137](https://github.com/StivansProfile/Books-reccomendation-and-searching/assets/81162165/e6beb07b-2ad9-456b-8650-f55419f23eca)
![Screenshot 2024-06-13 195039](https://github.com/StivansProfile/Books-reccomendation-and-searching/assets/81162165/756e05d5-67d5-4b8b-a5cd-e8e417eb37d1)


<h2>What are the technologies used to build the app ?</h2>
<p>The app is split into a back-end and a front-end and it uses:</p>

Python, Flask, React, JavaScript
\
[![My Skills](https://skillicons.dev/icons?i=python,flask,react,js&theme=dark)](https://skillicons.dev)

<h2>How does it work under the hood ?</h2>

<h3>For the machine learning part:</h3>
<p>Firstly I found a dataset with about 50,000 books. Then I converted each book description
to lowercase and removed non-alphabetic characters to clean the data.</p>
<p>I used the TfidfVectorizer from the scikit-learn library to transform the cleaned book descriptions into TF-IDF <strong>(Term Frequency-Inverse Document Frequency)</strong> vectors. This helps quantify the importance of words in each description.</p>
<p>The NearestNeighbors algorithm from scikit-learn is employed to find books with similar descriptions. This algorithm uses the cosine similarity metric to measure the distance between the TF-IDF vectors of the books.</p>

<p>Creating recommendations</p>
<ul>
  <li>I create a mapping from book titles to their indices for quick lookup</li>
  <li>When you provide a book title, the system finds the k-nearest neighbors (excluding the input book itself) based on the cosine similarity of their descriptions.</li>
  <li>The titles and image URLs of the recommended books are then returned.</li>
</ul>

<h3>Fetching the data</h3>
<p>After all of the hard work is done for figuring out the recommendations I simply fetch the data from a Flask API endpoint to my React client.</p>
<p>Then in React I simply get the data from the back-end and display it in the front-end</p>

<h3>The autocomplete feature</h3>
<p>The autocomplete feature is quite simple. I simply sorted the books I had in my csv file in alphabetical order and return the nearest possible suggestion.</p>
