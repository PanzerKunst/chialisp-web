(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{76:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return b})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return c}));var a=t(2),r=t(6),i=(t(0),t(92)),o={id:"doc1",title:"1 - CLVM Basics",sidebar_label:"1 - CLVM Basics"},b={unversionedId:"doc1",id:"doc1",isDocsHomePage:!0,title:"1 - CLVM Basics",description:"CLVM is the compiled, minimal version of ChiaLisp that is used by the Chia network.",source:"@site/docs/doc1.md",permalink:"/docs/",editUrl:"https://github.com/Chia-Network/chialisp-web/edit/master/docs/doc1.md",sidebar_label:"1 - CLVM Basics",sidebar:"someSidebar",next:{title:"2 - Coins, Spends and Wallets",permalink:"/docs/doc2"}},l=[{value:"Types",id:"types",children:[]},{value:"Math",id:"math",children:[]},{value:"Booleans",id:"booleans",children:[]},{value:"Flow Control",id:"flow-control",children:[]},{value:"Lists and Programs",id:"lists-and-programs",children:[]},{value:"List Operators",id:"list-operators",children:[]},{value:"Solutions and Environment Variables",id:"solutions-and-environment-variables",children:[]},{value:"Accessing Environmental Variables Through Integers",id:"accessing-environmental-variables-through-integers",children:[]},{value:"End of Part 1",id:"end-of-part-1",children:[]}],s={rightToc:l};function c(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"CLVM is the compiled, minimal version of ChiaLisp that is used by the Chia network.\nThe full set of operators is documented ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Chia-Network/clvm/blob/master/docs/clvm.org"}),"here")),Object(i.b)("p",null,"This guide will cover the basics of the language and act as an introduction to the structure of programs.\nYou should be able to follow along by running a version of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Chia-Network/clvm_tools"}),"clvm_tools"),"."),Object(i.b)("h2",{id:"types"},"Types"),Object(i.b)("p",null,"In ChiaLisp everything is either a list or an atom.\nLists take the form of parentheses and each entry in the list is single spaced."),Object(i.b)("p",null,"Atoms are either literal binary blobs or variables.\n",Object(i.b)("strong",{parentName:"p"},"A program is actually just a list in ",Object(i.b)("a",Object(a.a)({parentName:"strong"},{href:"https://en.wikipedia.org/wiki/Polish_notation"}),"polish notation"),".")),Object(i.b)("p",null,"There is no distinguishing of variable types in ChiaLisp.\nThis means that ",Object(i.b)("inlineCode",{parentName:"p"},"(100 0x65 0x68656c6c6f)")," and ",Object(i.b)("inlineCode",{parentName:"p"},"(0x64 101 'hello')")," are equivalent lists.\nInternally however the blobs can be interpreted in a number of different ways, which we will cover later."),Object(i.b)("h2",{id:"math"},"Math"),Object(i.b)("p",null,"There are no support for floating point numbers in ChiaLisp, only integers.\nInternally integers are interpreted as 256 bit signed integers."),Object(i.b)("p",null,"The math operators are ",Object(i.b)("inlineCode",{parentName:"p"},"*"),", ",Object(i.b)("inlineCode",{parentName:"p"},"+"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"-"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ brun '(- (q 6) (q 5))' '()'\n1\n\n$ brun '(* (q 2) (q 4) (q 5))' '()'\n40\n\n$ brun '(+ (q 10) (q 20) (q 30) (q 40))' '()'\n100\n")),Object(i.b)("p",null,"You may have noticed that the multiplication example above takes more than two parameters in the list.\nThis is because many operators can take variable amounts of parameters.\n",Object(i.b)("inlineCode",{parentName:"p"},"+")," and ",Object(i.b)("inlineCode",{parentName:"p"},"-")," are commutative so the order of parameters does not matter.\nFor non-commutative operations, ",Object(i.b)("inlineCode",{parentName:"p"},"(- (q 100) (q 30) (q 20) (q 5))")," is equivalent to ",Object(i.b)("inlineCode",{parentName:"p"},"(- (q 100) (+ (q 30) (q 20) (q 5)))"),".\nSimilarly, ",Object(i.b)("inlineCode",{parentName:"p"},"(/ 120 5 4 2)")," is equivalent to ",Object(i.b)("inlineCode",{parentName:"p"},"(/ 120 (* 5 4 2))"),"."),Object(i.b)("p",null,"There is also internal support for negatives."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ brun '(- (q 5) (q 7))' '()'\n-2\n\n\n$ brun '(+ (q 3) (q -8))' '()'\n-5\n")),Object(i.b)("p",null,"To use hexadecimal numbers, simply prefix them with ",Object(i.b)("inlineCode",{parentName:"p"},"0x"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ brun '(+ (q 0x000a) (q 0x000b))' '()'\n21\n")),Object(i.b)("p",null,"The final mathematical operator is equal which acts similarly to == in other languages."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ brun '(= (q 5) (q 6))' '()'\n()\n\n$ brun '(= (q 5) (q 5))' '()'\n1\n")),Object(i.b)("p",null,"As you can see above this language interprets some data as boolean values."),Object(i.b)("h2",{id:"booleans"},"Booleans"),Object(i.b)("p",null,"In this language an empty list ",Object(i.b)("inlineCode",{parentName:"p"},"()")," evaluate to ",Object(i.b)("inlineCode",{parentName:"p"},"False"),".\nAny other value evaluates to ",Object(i.b)("inlineCode",{parentName:"p"},"True"),", though internally ",Object(i.b)("inlineCode",{parentName:"p"},"True")," is represented with ",Object(i.b)("inlineCode",{parentName:"p"},"1"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ brun '(= (q 100) (q 90))'\n()\n\n$ brun '(= (q 100) (q 100))'\n1\n")),Object(i.b)("p",null,"The exception to this rule is ",Object(i.b)("inlineCode",{parentName:"p"},"0")," because ",Object(i.b)("inlineCode",{parentName:"p"},"0")," is  exactly the same as ",Object(i.b)("inlineCode",{parentName:"p"},"()"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ brun '(= (q 0) (q ()))' '()'\n1\n\n$ brun '(+ (q 70) (q ()))' '()'\n70\n")),Object(i.b)("h2",{id:"flow-control"},"Flow Control"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"i")," operator takes the form ",Object(i.b)("inlineCode",{parentName:"p"},"(i A B C)")," and acts as an ",Object(i.b)("inlineCode",{parentName:"p"},"if")," statement where ",Object(i.b)("inlineCode",{parentName:"p"},"(if A is True then do B, else do C)"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ brun '(i (q 0) (q 70) (q 80))' '()'\n80\n\n$ brun '(i (q 1) (q 70) (q 80))' '()'\n70\n\n$ brun '(i (q 12) (q 70) (q 80))' '()'\n70\n\n$ brun '(i (q ()) (q 70) (q 80))' '()'\n80\n")),Object(i.b)("p",null,"Now seems like a good time to clarify further about lists and programs."),Object(i.b)("h2",{id:"lists-and-programs"},"Lists and Programs"),Object(i.b)("p",null,"A list is any space-separated, ordered group of one or more elements inside brackets.\nFor example: ",Object(i.b)("inlineCode",{parentName:"p"},"(70 80 90 100)"),", ",Object(i.b)("inlineCode",{parentName:"p"},'(0xf00dbabe 48 "hello")'),", and ",Object(i.b)("inlineCode",{parentName:"p"},"(90)")," are all valid lists."),Object(i.b)("p",null,"Lists can even contain other lists, such as ",Object(i.b)("inlineCode",{parentName:"p"},'("list" "list" ("sublist" "sublist" ("sub-sublist")) "list")'),"."),Object(i.b)("p",null,"Programs are a subset of lists which can be evaluated using CLVM."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"In order for a list to be a valid program:")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"1. The first item in the list must be a valid operator")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"2. Every item after the first must be a valid program")),Object(i.b)("p",null,"This is why literal values and non-program lists ",Object(i.b)("em",{parentName:"p"},"must")," be quoted using ",Object(i.b)("inlineCode",{parentName:"p"},"q"),"."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Note: There is a special case where the first item in a program is also a program, which we will cover in more detail later.")),Object(i.b)("p",null,"Programs can contain non-program lists, but they also must be quoted, for example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ brun '(q (80 90 100))' '()'\n(80 90 100)\n")),Object(i.b)("p",null,"And now that we know we can have programs inside programs we can create programs such as:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ brun '(i (= (q 50) (q 50)) (+ (q 40) (q 30)) (q 20))' '()'\n70\n")),Object(i.b)("p",null,"Programs in ChiaLisp tend to get built in this fashion.\nSmaller programs are assembled together to create a larger program.\nIt is recommended that you create your programs in an editor with brackets matching!"),Object(i.b)("h2",{id:"list-operators"},"List Operators"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"f")," returns the first element in a passed list."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ brun '(f (q (80 90 100)))' '()'\n80\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"r")," returns every element in a list except for the first."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ brun '(r (q (80 90 100)))' '()'\n(90 100)\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"c")," prepends an element to a list"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ brun '(c (q 70) (q (80 90 100)))' '()'\n(70 80 90 100)\n")),Object(i.b)("p",null,"And we can use combinations of these to access or replace any element we want from a list:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ brun '(c (q 100) (r (q (60 110 120))))' '()'\n(100 110 120)\n\n$ brun '(f (r (r (q (100 110 120 130 140)))))' '()'\n120\n")),Object(i.b)("h2",{id:"solutions-and-environment-variables"},"Solutions and Environment Variables"),Object(i.b)("p",null,"Up until now our programs have not had any input or variables, however ChiaLisp does have support for a kind of variable which is passed in through a solution."),Object(i.b)("p",null,"It's important to remember that the context for ChiaLisp is for use in locking up coins with a puzzle program.\nThis means that we need to be able to pass some information to the puzzle."),Object(i.b)("p",null,"A solution is a list of values passed to the puzzle.\nIn the higher level language the solution can be referenced with ",Object(i.b)("inlineCode",{parentName:"p"},"a"),".\nNote the use of ",Object(i.b)("inlineCode",{parentName:"p"},"run")," below:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ run '(a)' '(\"this\" \"is the\" \"solution\")'\n(\"this\" \"is the\" \"solution\")\n\n$ run '(f (a))' '(80 90 100 110)'\n80\n\n$ run '(r (a))' '(80 90 100 110)'\n(90 100 110)\n")),Object(i.b)("p",null,"And remember lists can be nested too."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ run '(f (f (r (a))))' '((70 80) (90 100) (110 120))'\n90\n\n$ run '(f (f (r (a))))' '((70 80) ((91 92 93 94 95) 100) (110 120))'\n(91 92 93 94 95)\n")),Object(i.b)("p",null,"These environment variables can be used in combination with all other operators."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ run '(+ (f (a)) (q 5))' '(10)'\n15\n\n$ run '(* (f (a)) (f (a)))' '(10)'\n100\n")),Object(i.b)("p",null,"This program checks that the second variable is equal to the square of the first variable."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ run '(= (f (r (a))) (* (f (a)) (f (a))))' '(5 25)'\n1\n\n$ run '(= (f (r (a))) (* (f (a)) (f (a))))' '(5 30)'\n()\n")),Object(i.b)("h2",{id:"accessing-environmental-variables-through-integers"},"Accessing Environmental Variables Through Integers"),Object(i.b)("p",null,"In the above examples we were using ",Object(i.b)("inlineCode",{parentName:"p"},"run"),", calling the higher level language, instead of ",Object(i.b)("inlineCode",{parentName:"p"},"brun")," for the lower level language.\nThis is because for the sake of minimalism in the lower level CLVM language, we address the solution with evaluated integers."),Object(i.b)("p",null,"Calling ",Object(i.b)("inlineCode",{parentName:"p"},"1")," accesses the root of the tree and returns the entire solution list."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'$ brun \'1\' \'("this" "is" "a" "test")\'\n("this" 26995 97 "test")\n')),Object(i.b)("p",null,"After that, you can imagine a binary tree of ",Object(i.b)("inlineCode",{parentName:"p"},"f")," and ",Object(i.b)("inlineCode",{parentName:"p"},"r"),", where each node is numbered."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'$ brun \'2\' \'("this" "is" "a" "test")\'\n"this"\n\n$ brun \'3\' \'("this" "is" "a" "test")\'\n(26995 97 "test")\n\n$ brun \'4\' \'((800 900) "is" "a" "test")\'\n800\n')),Object(i.b)("h2",{id:"end-of-part-1"},"End of Part 1"),Object(i.b)("p",null,"This marks the end of this section of the guide.\nIn this section we have covered many of the basics of using ChiaLisp.\nIt is recommended you play with using the information presented here for a bit before moving on."),Object(i.b)("p",null,"This guide has not covered all of the operators available in ChiaLisp - try using some of the other ones listed ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Chia-Network/clvm/blob/master/docs/clvm.org"}),"here"),"."))}c.isMDXComponent=!0}}]);