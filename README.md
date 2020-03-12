hi, here is Tic-Tac-Toe.
i made folder have 4 file ( index.html , mine.css,minejs

1)IN index.html:
*i writ <!DOCTYPE html> for the version html 5, <html> tag to wirt the code , <head> tag inside it i add <title>tag and i put Tic-Tac-toe as name, and i link me (CSS) file by using <liknk> tag . i close the head and i put <body> tag to write the the element witch in the web page , inside the body i use <h1> tag to give name of me game.
  
  ** use <table > tag to make the the box for the game and i give it id . inside the table i made 3 <tr> tag to make the box row evre row have 3 <td> tag as the data of the table so now i have tabe of 9 box. i close the table by </table> tag .
 
 *** i put <script src= "jQury.sj"></script> tag to connect me JQurey.
 <script src="text?javascript" src= "main.js"></script> to Connect me js file.
 
 ////////////////////////////////////////////////////////////////
 2) main.css:
 i use * to make main style for all the elemrnt i give ( margin 0 ;padding 0; border 1px ,solid and black as color.
 
 ** i made style for the body{ background color} . for table { border-collasp to set the dordercell present inside the table  i make it as (collapse) to by common border,border space as 0 by useing  corder-spasing:0 and background color} . the style of the table data {200px for width and height ,border :1px solid black , font-size :100px, text-alige :center}
 
 ***  i give the table data hover so when the muose come over will give some style , use backgruond color , and cursor proprety  as pointer.   ((till here ever things was easy ))
 /////////////////////////////////////////////////////////////////
 
 3) main.js (it was the most difficult part):
 in the beggining i write $(document).ready(function() to start the action when the page loading
 * inside the function i made var turn=1; for
                              var play = true; for 
                              var check= 0; for
* i call the table and table row and table data i made event .cick in thi event i made function i write check++; to count time of clicking box. if ($(this).text()==""&&play) to check the of the boxs is empty when the game start. i made if for cjeck the number of play odd or even . if even its mean first player turn so i use . append to make it X  and i give style too . else  . append o with style  
** turn++:   . i mamd if for check for the winner so if the winner x append div with class winner x and button to play agin and i call the 
div and i give it some style and for the button too.  i did the same for O .  i made else if to see if no winner is there 

*** i made function to check for winner i made 9 box  and i call all the boxs which inside the table .


****  for check row : if box1 ==box4 && box4 ==box 7 ,return box7
                      if box4 ==box5 && box5 ==box 6 ,return box6
                      if box7==bo87 && box8 ==box 9 ,return box9
    for check colums: if box1 ==box4&& box4 ==box 7 ,return box7
                      if box2 ==box5 && box2 ==box 8 ,return box8
                      if box3==bo6 && box6==box 9 ,return box9
   for diagonals       if box1 ==bo54&& box5 ==box 9 ,return box9
                      if box2 ==box5 && box5 ==box 7 ,return box7
                              
                              no winner  return -1 to see drow 
 
   
 
