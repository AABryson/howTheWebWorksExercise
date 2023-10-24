/*What is HTTP?
hyper text transfer protocol; the rules for how data is transmitted, received, and processed between the client and the server

What is a URL?
Uniform Resource Locator; a standardized address used to locate resources on the internet

What is DNS?
Domain Name System; turns domain names into ip addresses.

What is a query string?
The extra information sent to the server

List two HTTP vers and their use cases.
Get - used to retrieve data from a server
POST - used to submit data to a server

What is an HTTP request?
A message sent by the client to the server requesting data that follows HTTP protocol

What is an HTTP response?
A message sent from the server to the client continaing the requested data and additional information

What is an HTTTP header?
The HTTP header is the part of the request or response message that provides additional information about the request or response
Requests - User-Agent, Host, Accept, Authorization
Resposne - Server, Status Code, Content-Type

What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?

The browser changes the name from a domain name to an ip address using DNS.
A request for resources or data is sent to the server at that particular ip address.
The server sends a response with the status code, and if the request was successful, a message body, which is mostly like the HTML content of a page.
A DOM of the html file is created after the page has been parsed and other resources are requested, such as css files.  Each is a separate HTTP request.

