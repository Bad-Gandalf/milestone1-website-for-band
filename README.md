# Milestone Project 1 - CREATE A WEBSITE FOR A BAND
#### by Patrick Doherty

I was required to build a static (front-end only) website for a band. I have been given the following requirements after interviews
with the client's representatives:

- Their primary target audiences are their fans and potential fans who wish to use the site to see and hear clips from their back catalog, and any new material as it becomes available.
- Also, the band would like to use the site to showcase their music and publicise their availability to perform at events such as weddings and Christmas parties.

I have also been given multimedia such as pictures, a video clip and audio clips which I have integrated into the site.
To add to this I have also added social media links in the footer of all pages. 

## UX
This website is for fans of The Monkees who may possibly wish to hire them for functions.

### Home
Quick, punchy introduction to the Monkees if the user does not already 
know. Tips laid out for navigating the site quickly. A video of a Monkees 
performance to engage the user as quickly as possible, to see if they like the 
goods or are quickly reminded of their love for the Monkees.

### Gallery
Users can quickly find portraits of all band members with some information on 
each of them. Users can also see group pictures and album covers. 

### Listen 
Fans or prospective customers can listen to a few famous Monkees songs to help 
either identify the band by its music or simply increase the nostalgia in order
to close the deal.

### Contact
User can send a message to site admin in order to arrange a conversation. 
This will hopefully lead to a booking for the Monkees.
Through the use of emailjs, the developer will be emailed when a user has 
submitted a contact form so they can follow up on the request. 




## Technolgies used:

- HTML, CSS, Javascript 
- [emailjs](http://www.emailjs.com/) 
    - This is used to create a working contact form on a static website.
- [Bootstrap](https://getbootstrap.com/)
    - Used for its grid system to help in design going from mobile to larger displays.
- [fontawesome](https://fontawesome.com/)
    - Icons needed for styling of the site. 
- [Hover](http://ianlunn.github.io/Hover/)
    - Added hover effects for certain buttons/icons. 


## Testing

- All of the above User Stories were used in order to manually test each link and or page.
    - I checked each link on the navigation bar was correct.
    - Each link on the footer was checked on each page. 
    - Each photo was checked to see if it properly loaded. 
    - Each song was checked in the listen section.
    - Form Validation
        - I submitted a form and each time I would omit a field to check there was an error message.
        - Dashboard on EmailJs was checked to see emails sent and my own inbox was checked for emails sent.
    
        

I used dev tools to check that the site was scaling well from device to device. 
I checked the site with Chrome, Safari and Firefox.

I ran all my files through validators to check for errors.
    - [W3C](https://jigsaw.w3.org/css-validator/) for CSS.
    - [W3C](https://validator.w3.org/) for HTML.
    - [JS Hint](http://jshint.com/) for Javascript.


## The Future
I may take what I have learned from this experience and make my own site to gain work as a developer. 
No obvious plans just yet.

## Deployment

An issue that I came across was in regards to the contact form. As I decided to deploy to github pages,
which only hosts static sites I was getting a 405 error whenever I submitted the form. To correct the problem
I only had to add an extra line of code in sendEmail.js at the very end (return false;). This blocked a new page from loading 
and the form still works, i.e. I get a message every time someone has submitted a form correctly.

## Credits

### Content
- Text for the site was taken from [Wikipedia](https://en.wikipedia.org/wiki/The_Monkees)

### Media
- The photos used in this site where made available to me from Code Institute.

