# Assignment 2 

Part 1
A Vue.js app that searches for books using a public google books API. The following features have been implemented. 

1) Added pagination with next and previous buttons. Each page shows 20 results and the next/previons buttons are disable/enabled only when additional content is available. For example, for the first 20 results, the previous button is disabled. for the last 20 results, the next button is disabled.
2) Each book is displayed via a template, no undefined variables are displayed and the authors list displays correctly. 
3) When available, book thumbnails are presented appropriately. 

Part 2 
Please see part 2 in the following repo: https://github.com/WebKmn/Online_Social_Network

A continuation of Assignment one. The following features have been implemented.

1) Added a validate form function to validate signup input values. 
   A)Check 1: Check to see if password and confirm password match. If they do NOT match, an error is displayed and the style of the confirm password field changes.
   B) Check 2: Make sure there are <, >, #, -, {, }, (), ', ", ` 
    in any of the inputs. Error messages are displayed for every input that does not pass this check, and the background changes.
   C) Check 3: Passwords must contains a small letter, a capital letter, and a number. If not an error message is displayed and highlighted the password field.
   D) If any of these checks fail, your form must not be submitted. 
2) Added a function to dynamically change the layout of the form. 
   A) Changed the sign-up page so that when the security question is chosen, the input box (for security question answer) becomes visible.
