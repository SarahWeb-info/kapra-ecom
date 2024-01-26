UI Structure :

:root
page font size : 16px
text color : #222222
btnBgColor : #212b36
highlighter color : #fdc2ab
white base color : #ffffff
grayish base color : #f6f6f8
text weight of menu link : #ededed
font :  Montserrat;

$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
); 

css styles components :  : 
    - navbar        (fixed)
    - footer        (fixed)
    - leftMenu      ()
    - rightMenu
    - centerConfirmationDialog
    - center banner
    - topAlert
    - ad
    - bellAlert

1-  UI project

analysing pages/tabs/links
1- home - 
2 - product links (grids with load more button) (catagories,collections,sale pages, latest , product Page , best seller ) , 
3 - account links (sign up , login , notification settings ) ,
4 -  order links (track order , cart , my order(all , recieved , reveiwed ) , wishlist ) , 
5 - search result page (static filter grid page )

NOTE : search result and product links have the same UI


-fixed oneline disclaimer and Navbar
- there are no dropdowns in navbar in desktop
    -disclaimer is an auto caruosal (full screen with two slides)
    - Navbar responsive (navbar menu collapse on desktop else svg three lines)

    elements = navmenu , submenu , close button , back button , open sub menu button , hamburger threeline button 
        logo - desktop logo , mobile logo
        

    -mobile navbar(-inline flex)

        - menu lines (with 1/3 width scrollY menu in >660 px and 70vw at <660px, X close btn or onBlur close menu )(rest of the screen blur , black fade shadow)(menu comes in transform left to 0 ) . in mobile all the product catagory links , wishlist ,cart , orders , login/sign , help ,contact Info is in menu navbar
           - the submenu replaces the menu list with back btn available 

        - mobile logo center
        - at 776 px , the third part of the inline flex shriks from 5 tab to 2 . (search & cart)
                -search :
                    - search input , filter page , quick links
                    -  (with 1/3 width scrollY search menu right in >660 px and 70vw at <660px, X close btn or onBlur close menu )(rest of the screen blur , black fade shadow)(menu comes in transform right to 0 )
                -cart :
                    -show items in cart  
                    -  (with 1/3 width scrollY search menu right in >660 px and 70vw at <660px, X close btn or onBlur close menu )(rest of the screen blur , black fade shadow)(menu comes in transform right to 0 )

    -desktop navbar  
    -(2 inline flex)
        - 1 inline 
            desktop logo  and inline page (search , track order ,login , wishlist ,cart)
        - 2 inline 
            all the links of product catageries of the nav menu bar    

- footer :
    mobile footer 
        - acordian with three headings 
            information
            customer care 
            contact us 
        - coloumn of logo with social media links

    desktop footer 
        - column flex with three headings 
            information
            customer care 
            contact us         
        - row of logo with social media links    

    Copyright 100vw footer oneline        

- ABSOLUTE BANNER :
        -Left bottom bell icon (fixed , with collapsable subscription message on home page and price drop alert on product page, transition , icon + p + btn + closeBtn ) 
        - irritating closable(closes & appears after 1 min) fixed border-radius:3.34vw ad div . {img+ column(p , title) + closeBtn} 

- notification Alert : 
    column(
        <p>never miss a sale !
        <button>Later</button> 
        <button>allow</button> this goes to the browser setting ? 
    )

- Home : 
    mobile veiw:
    carousal  (promotions of all catagory outfits) ( all of the slides -> {next prev buttons , open link slide buttons and slide titles} )
    
    grids :  (2 repeats)
        in desktop : 
            row { h3 , pairButtons(sale/new) , arrows}
            row {bannerImg , carousel }

        on mobile :(following lines in rows)
            {h3 catagroy heading 
            banner img with links button and zooming img on hover
            two buttons (linked with the content of the following carousal) the carousal is an ongoing loop
            dynamic two slide carousal with wishlist and cart button on both slides and next/prev button on consective slides .}

            arrows animates on bannerImg hover and carousal slide hover , 
            carousel content changes on pairButton selection (Onchange: animation transition with slide down, fade , change , slide up)

    ad video

    h3

    <!-- catagory grid -->
    h3 LOOKBOOK
    column in mobile , row in desktop -> {inline flex with 2 div - last div is again a column of 2 divs , inline flex with 2 div - first div is again a column of 2 divs}

    div -> row in desktop and colum in mobile(customer care feature1 , customer care feature2 , input with form button )div with highligh color and white font 

-grid/filter Collection page :
    row{h1 , row{veiwstyle , filter btn (with opens a filter form )}}

    row{img , img, img}   ( each img has wishlist and add to cart btn )[Add to card has confirmation dialog box and wishlist does work directly]
    row{img , img, img}
    row{img , img, img}
    row{img , img, img}
        loadMoreBtn


- product page :
    breadcrumb [ backBtn , home , lastpagelink , productHading]

    div{            // row in desktop , column in mobile
        div 1 :
        mobile -> columInvert{ row{3 imgs} , bigImg}
        desktop-> row{{ column{3 imgs} , bigImg}}
        ,
        div 2 :
        (
            row { h1(productName) , wishlistBtn }
            p -> product Code
            row { price , availability }
            hr
            column {size , row{sizeOptions}}
            small(00 product left )
            row{ input(-) , label , input(+) }
            add to cart button 
            accordian { product detail  , Shipping and handling }
            p -> ppl veiwing 
            )
    }   

    div{                // new/sale tag on slides if present , wishlist btn and add to card btn on slides
        row{ h3(similar items) , arrows}
        carouasal ( two slides in <1030 px , else 4 slides )
    }

    div{                // new/sale tag on slides if present , wishlist btn and add to card btn on slides
        row{ h3(recent veiwed products) , arrows}
        carouasal ( two slides in <1030 px , else 4 slides )
    }


-wishlist page 

        h1(My Wishlist)
        button to add selected entries to cart (disabled , on able when enteries of tables are selected )
        table with dynamic enteries 


backend : 
1-
(i)- context api is used for the display of GLOBAL sidemenus ,i.e cart , search , login

2 -the rapid api for product listing -https://rapidapi.com/sparior/api/aliexpress-ecommerce
 i- catagory api navbar 
 ii- productListing for home & collection pg
 iii- productDetail for product pg and product Dialog

Note : catagory and productlisting API are called in the first load of the page and the data is stored in context (for retrive and use) . The productDetail API is called when the product pg is load or the product dialog is open .  
Task : Make 3 files of API request.

3 - if the user is logged in : the order data is saved in the user database ELSE in local storage ( with time stamp) .
