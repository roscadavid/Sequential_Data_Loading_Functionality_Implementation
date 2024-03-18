Sequential Data Loading Functionality Implementation


The project involves extending the functionality of an existing website by adding the ability to load and display data from an external source sequentially, blending interactive elements and pleasant visualization for the user. Using the provided HTML and CSS documents, as well as the API from https://jsonplaceholder.typicode.com/posts/, the project will fetch data from this source and display it in an interactive manner on the webpage.

Functionality:
1.Sequential Data Loading:

The web page will load a single data item from the specified source.
Data will be fetched sequentially, one by one, to provide a smooth experience for the user.
Each loaded data will be displayed in a dedicated card on the page.
The title of each card will correspond to the "title" field from the returned server data.
The content of each card will be fetched from the "body" field of the returned server data.

2.Progress Indicators:

The page will feature a set of progress dots, initially all being white.
One by one, the progress dots will be filled, in order from left to right, at a rate of one dot per second.
When all progress dots are filled, new data will be loaded, and the progress dots will reset to the initial state (all white). This state will be maintained for one second before starting the next loading.


Objectives:

Providing an interactive and engaging experience for the user through sequential data loading and displaying it in an organized and pleasant manner.
Implementing a clear and intuitive interface, facilitating understanding of the loading process and progress.
Ensuring correct and stable operation of the added functionalities, including proper handling of requests to the external API and manipulation of received data in accordance with specifications.
Through these additions, the project will offer an enhanced experience to users, facilitating access to information and creating a pleasant and captivating interaction on the page.
