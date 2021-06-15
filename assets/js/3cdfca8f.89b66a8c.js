(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{81:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return o})),n.d(a,"metadata",(function(){return l})),n.d(a,"toc",(function(){return s})),n.d(a,"default",(function(){return p}));var t=n(3),r=n(7),i=(n(0),n(92)),o={id:"basics",title:"1 - CLVM Basics",sidebar_label:"1 - CLVM Basics"},l={unversionedId:"basics",id:"basics",isDocsHomePage:!0,title:"1 - CLVM Basics",description:"CLVM is the compiled, minimal version of ChiaLisp that is used by the Chia network.",source:"@site/docs/basics.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/Chia-Network/chialisp-web/edit/main/docs/basics.md",version:"current",sidebar_label:"1 - CLVM Basics",sidebar:"someSidebar",next:{title:"2 - Coins, Spends and Wallets",permalink:"/docs/coins_spends_and_wallets"}},s=[{value:"CLVM values",id:"clvm-values",children:[{value:"Atoms",id:"atoms",children:[]},{value:"Cons Boxes",id:"cons-boxes",children:[]}]},{value:"Lists",id:"lists",children:[]},{value:"Quoting",id:"quoting",children:[]},{value:"Math",id:"math",children:[]},{value:"Booleans",id:"booleans",children:[]},{value:"Flow Control",id:"flow-control",children:[]},{value:"Lists and Programs",id:"lists-and-programs",children:[]},{value:"List Operators",id:"list-operators",children:[]},{value:"Solutions and Environment Variables",id:"solutions-and-environment-variables",children:[]},{value:"Accessing Environmental Variables Through Integers",id:"accessing-environmental-variables-through-integers",children:[]},{value:"End of Part 1",id:"end-of-part-1",children:[]}],c={toc:s};function p(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(t.a)({},c,n,{components:a,mdxType:"MDXLayout"}),Object(i.a)("p",null,"CLVM is the compiled, minimal version of ChiaLisp that is used by the Chia network.\nThe full set of operators is documented ",Object(i.a)("a",{parentName:"p",href:"https://github.com/Chia-Network/clvm/blob/main/docs/clvm.org"},"here")),Object(i.a)("p",null,"This guide will cover the basics of the language and act as an introduction to the structure of programs.\nYou should be able to follow along by running a version of ",Object(i.a)("a",{parentName:"p",href:"https://github.com/Chia-Network/clvm_tools"},"clvm_tools"),"."),Object(i.a)("h2",{id:"clvm-values"},"CLVM values"),Object(i.a)("p",null,"CLVM is built out of ",Object(i.a)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cons"},"cons boxes")," and ",Object(i.a)("a",{parentName:"p",href:"https://www.gnu.org/software/emacs/manual/html_node/eintr/Lisp-Atoms.html#:~:text=Technically%20speaking%2C%20a%20list%20in,nothing%20in%20it%20at%20all."},"atoms"),". These are referred to as CLVM Objects.\nA cons box is a pair of CLVM Objects. The items in a cons box can either be an atom or another cons box."),Object(i.a)("h3",{id:"atoms"},"Atoms"),Object(i.a)("p",null,"An atom is a string of bytes. These bytes can be interpreted both as a signed big-endian integer and a byte string, depending on the operator using it."),Object(i.a)("p",null,"All atoms in CLVM are immutable. All operators that perform computations on atoms create new atoms for the result."),Object(i.a)("p",null,"Atoms can be printed in three different ways, decimal, hexadecimal and as a string. Hexadecimal values are prefixed by ",Object(i.a)("inlineCode",{parentName:"p"},"0x"),", and strings are quoted in ",Object(i.a)("inlineCode",{parentName:"p"},'"'),".\nThe way the integer is printed does not affect its underlying value.\nThe atom ",Object(i.a)("inlineCode",{parentName:"p"},"100")," printed in decimal is the same as ",Object(i.a)("inlineCode",{parentName:"p"},"0x64")," printed in hexadecimal. Likewise the value ",Object(i.a)("inlineCode",{parentName:"p"},"0x68656c6c6f")," is the same as ",Object(i.a)("inlineCode",{parentName:"p"},'"hello"'),"."),Object(i.a)("p",null,"When interpreting atoms as integers, it's important to remember that they are signed. In order to represent a positive integer, the most significant bit may not be set. Because of this, positive integers have a 0 byte prepended to them, in case the most significant bit in the next byte is set."),Object(i.a)("h3",{id:"cons-boxes"},"Cons Boxes"),Object(i.a)("p",null,"Cons boxes are represented as a parentheses with two elements separated by a ",Object(i.a)("inlineCode",{parentName:"p"},"."),".\nFor example:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},'(200 . "hello")\n\n("hello" . ("world" . "!!!"))\n')),Object(i.a)("p",null,"Are legal cons boxes, but the following is not."),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},"(200 . 300 . 400)\n")),Object(i.a)("p",null,"A cons box always has two elements.\nHowever, we can chain cons boxes together to construct lists."),Object(i.a)("h2",{id:"lists"},"Lists"),Object(i.a)("p",null,"Lists are enclosed by parentheses and each entry in the list is single spaced with no period between values.\nLists are much more commonly used than cons boxes as they are more versatile."),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},'(200 300 "hello" "world")\n')),Object(i.a)("p",null,"You can also nest lists."),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},'("hello" ("nested" "list") ("world"))\n')),Object(i.a)("p",null,"Remember a list is a representation of consecutive cons boxes terminated in a null atom ",Object(i.a)("inlineCode",{parentName:"p"},"()"),".\nThe following expressions are equal:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},"(200 . (300 . (400 . ())))\n\n(200 300 400)\n")),Object(i.a)("h2",{id:"quoting"},"Quoting"),Object(i.a)("p",null,"To interpret an atom as a value, rather than a program, it needs to be quoted with ",Object(i.a)("inlineCode",{parentName:"p"},"q"),". Quoted values form a cons box where the first item is the ",Object(i.a)("inlineCode",{parentName:"p"},"q")," operator.\nFor example, this program is just the value ",Object(i.a)("inlineCode",{parentName:"p"},"100"),":"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},"(q . 100)\n")),Object(i.a)("p",null,"Note that in the higher level Chialisp language, values do not need to be quoted."),Object(i.a)("h2",{id:"math"},"Math"),Object(i.a)("p",null,"There are no support for floating point numbers in CLVM, only integers. There is no hard size limit on integers in CLVM."),Object(i.a)("p",null,"The math operators are ",Object(i.a)("inlineCode",{parentName:"p"},"+"),", ",Object(i.a)("inlineCode",{parentName:"p"},"-"),", ",Object(i.a)("inlineCode",{parentName:"p"},"*"),", and ",Object(i.a)("inlineCode",{parentName:"p"},"/"),"."),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-lisp"},"$ brun '(- (q . 6) (q . 5))' '()'\n1\n\n$ brun '(* (q . 2) (q . 4) (q . 5))' '()'\n40\n\n$ brun '(+ (q . 10) (q . 20) (q . 30) (q . 40))' '()'\n100\n\n$ brun '(/ (q . 20) (q . 11))' '()'\n1\n")),Object(i.a)("p",null,Object(i.a)("em",{parentName:"p"},"Note that ",Object(i.a)("inlineCode",{parentName:"em"},"/")," returns the")," ",Object(i.a)("strong",{parentName:"p"},Object(i.a)("em",{parentName:"strong"},"floored"))," ",Object(i.a)("em",{parentName:"p"},"quotient")),Object(i.a)("p",null,"You may have noticed that the multiplication example above takes more than two parameters in the list.\nThis is because many operators can take a variable number of parameters.\n",Object(i.a)("inlineCode",{parentName:"p"},"+")," and ",Object(i.a)("inlineCode",{parentName:"p"},"*")," are commutative so the order of parameters does not matter.\nFor non-commutative operations, ",Object(i.a)("inlineCode",{parentName:"p"},"(- 100 30 20 5)")," is equivalent to ",Object(i.a)("inlineCode",{parentName:"p"},"(- 100 (+ 30 20 5))"),".\nSimilarly, ",Object(i.a)("inlineCode",{parentName:"p"},"(/ 120 5 4 2)")," is equivalent to ",Object(i.a)("inlineCode",{parentName:"p"},"(/ 120 (* 5 4 2))"),"."),Object(i.a)("p",null,"There is also support for negative values."),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-lisp"},"$ brun '(- (q . 5) (q . 7))' '()'\n-2\n\n\n$ brun '(+ (q . 3) (q . -8))' '()'\n-5\n")),Object(i.a)("p",null,"To use hexadecimal numbers, simply prefix them with ",Object(i.a)("inlineCode",{parentName:"p"},"0x"),"."),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-lisp"},"$ brun '(+ (q . 0x000a) (q . 0x000b))' '()'\n21\n")),Object(i.a)("p",null,"The final mathematical operator is equal which acts similarly to == in other languages."),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-lisp"},"$ brun '(= (q . 5) (q . 6))' '()'\n()\n\n$ brun '(= (q . 5) (q . 5))' '()'\n1\n")),Object(i.a)("p",null,"As you can see above this language interprets some data as boolean values."),Object(i.a)("h2",{id:"booleans"},"Booleans"),Object(i.a)("p",null,"In this language an empty list ",Object(i.a)("inlineCode",{parentName:"p"},"()")," evaluate to ",Object(i.a)("inlineCode",{parentName:"p"},"False"),".\nAny other value evaluates to ",Object(i.a)("inlineCode",{parentName:"p"},"True"),", though internally ",Object(i.a)("inlineCode",{parentName:"p"},"True")," is represented with ",Object(i.a)("inlineCode",{parentName:"p"},"1"),"."),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-lisp"},"$ brun '(= (q . 100) (q . 90))'\n()\n\n$ brun '(= (q . 100) (q . 100))'\n1\n")),Object(i.a)("p",null,"The exception to this rule is ",Object(i.a)("inlineCode",{parentName:"p"},"0")," because ",Object(i.a)("inlineCode",{parentName:"p"},"0")," is  exactly the same as ",Object(i.a)("inlineCode",{parentName:"p"},"()"),"."),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-lisp"},"$ brun '(= (q . 0) ())' '()'\n1\n\n$ brun '(+ (q . 70) ())' '()'\n70\n")),Object(i.a)("h2",{id:"flow-control"},"Flow Control"),Object(i.a)("p",null,"The ",Object(i.a)("inlineCode",{parentName:"p"},"i")," operator takes the form ",Object(i.a)("inlineCode",{parentName:"p"},"(i A B C)")," and acts as an if-statement that\nevaluates to ",Object(i.a)("inlineCode",{parentName:"p"},"B")," if ",Object(i.a)("inlineCode",{parentName:"p"},"A")," is True and ",Object(i.a)("inlineCode",{parentName:"p"},"C")," otherwise."),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-lisp"},"$ brun '(i (q . 0) (q . 70) (q . 80))' '()'\n80\n\n$ brun '(i (q . 1) (q . 70) (q . 80))' '()'\n70\n\n$ brun '(i (q . 12) (q . 70) (q . 80))' '()'\n70\n\n$ brun '(i (q . ()) (q . 70) (q . 80))' '()'\n80\n")),Object(i.a)("p",null,"Note that both ",Object(i.a)("inlineCode",{parentName:"p"},"B")," and ",Object(i.a)("inlineCode",{parentName:"p"},"C")," are evaluated eagerly, just like all subexpressions.\nTo defer evaluation until after the condition, ",Object(i.a)("inlineCode",{parentName:"p"},"B")," and ",Object(i.a)("inlineCode",{parentName:"p"},"C")," must be quoted (with\n",Object(i.a)("inlineCode",{parentName:"p"},"q"),"), and then evaluated with ",Object(i.a)("inlineCode",{parentName:"p"},"(a)"),"."),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-lisp"},"$ brun '(a (i (q . 0) (q . (x (q . 1337) )) (q . 1)) ())'\n")),Object(i.a)("p",null,"More on this later."),Object(i.a)("p",null,"Now seems like a good time to clarify further about lists and programs."),Object(i.a)("h2",{id:"lists-and-programs"},"Lists and Programs"),Object(i.a)("p",null,"A list is any space-separated, ordered group of one or more elements inside brackets.\nFor example: ",Object(i.a)("inlineCode",{parentName:"p"},"(70 80 90 100)"),", ",Object(i.a)("inlineCode",{parentName:"p"},'(0xf00dbabe 48 "hello")'),", and ",Object(i.a)("inlineCode",{parentName:"p"},"(90)")," are all valid lists."),Object(i.a)("p",null,"Lists can even contain other lists, such as ",Object(i.a)("inlineCode",{parentName:"p"},'("list" "list" ("sublist" "sublist" ("sub-sublist")) "list")'),"."),Object(i.a)("p",null,"Programs are a subset of lists which can be evaluated using CLVM."),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"In order for a list to be a valid program:")),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("strong",{parentName:"li"},"1. The first item in the list must be a valid operator")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("strong",{parentName:"li"},"2. Every item after the first must be a valid program"))),Object(i.a)("p",null,"This is why literal values and non-program lists ",Object(i.a)("em",{parentName:"p"},"must")," be quoted using ",Object(i.a)("inlineCode",{parentName:"p"},"q . "),"."),Object(i.a)("p",null,"Programs can contain non-program lists, but they also must be quoted, for example:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-lisp"},"$ brun '(q . (80 90 100))' '()'\n(80 90 100)\n")),Object(i.a)("p",null,"And now that we know we can have programs inside programs we can create programs such as:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-lisp"},"$ brun '(i (= (q . 50) (q . 50)) (+ (q . 40) (q . 30)) (q . 20))' '()'\n70\n")),Object(i.a)("p",null,"Programs in CLVM tend to get built in this fashion.\nSmaller programs are assembled together to create a larger program.\nIt is recommended that you create your programs in an editor with brackets matching!"),Object(i.a)("h2",{id:"list-operators"},"List Operators"),Object(i.a)("p",null,Object(i.a)("inlineCode",{parentName:"p"},"f")," returns the first element in a passed list."),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-lisp"},"$ brun '(f (q . (80 90 100)))' '()'\n80\n")),Object(i.a)("p",null,Object(i.a)("inlineCode",{parentName:"p"},"r")," returns every element in a list except for the first."),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-lisp"},"$ brun '(r (q . (80 90 100)))' '()'\n(90 100)\n")),Object(i.a)("p",null,Object(i.a)("inlineCode",{parentName:"p"},"c")," prepends an element to a list"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-lisp"},"$ brun '(c (q . 70) (q . (80 90 100)))' '()'\n(70 80 90 100)\n")),Object(i.a)("p",null,"And we can use combinations of these to access or replace any element we want from a list:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-lisp"},"$ brun '(c (q . 100) (r (q . (60 110 120))))' '()'\n(100 110 120)\n\n$ brun '(f (r (r (q . (100 110 120 130 140)))))' '()'\n120\n")),Object(i.a)("h2",{id:"solutions-and-environment-variables"},"Solutions and Environment Variables"),Object(i.a)("p",null,"Up until now our programs have not had any input or variables, however CLVM does have support for a kind of variable which is passed in through a solution."),Object(i.a)("p",null,"It's important to remember that the context for ChiaLisp is for use in locking up coins with a puzzle program.\nThis means that we need to be able to pass some information to the puzzle."),Object(i.a)("p",null,"A solution is a list of values passed to the puzzle.\nThe solution can be referenced with ",Object(i.a)("inlineCode",{parentName:"p"},"1"),"."),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-lisp"},"$ brun '1' '(\"this\" \"is the\" \"solution\")'\n(\"this\" \"is the\" \"solution\")\n\n$ brun '(f 1)' '(80 90 100 110)'\n80\n\n$ brun '(r 1)' '(80 90 100 110)'\n(90 100 110)\n")),Object(i.a)("p",null,"And remember lists can be nested too."),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-lisp"},"$ brun '(f (f (r 1)))' '((70 80) (90 100) (110 120))'\n90\n\n$ brun '(f (f (r 1)))' '((70 80) ((91 92 93 94 95) 100) (110 120))'\n(91 92 93 94 95)\n")),Object(i.a)("p",null,"These environment variables can be used in combination with all other operators."),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-lisp"},"$ brun '(+ (f 1) (q . 5))' '(10)'\n15\n\n$ brun '(* (f 1) (f 1))' '(10)'\n100\n")),Object(i.a)("p",null,"This program checks that the second variable is equal to the square of the first variable."),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-lisp"},"$ brun '(= (f (r 1)) (* (f 1) (f 1)))' '(5 25)'\n1\n\n$ brun '(= (f (r 1)) (* (f 1) (f 1)))' '(5 30)'\n()\n")),Object(i.a)("h2",{id:"accessing-environmental-variables-through-integers"},"Accessing Environmental Variables Through Integers"),Object(i.a)("p",null,"In the above examples we only used ",Object(i.a)("inlineCode",{parentName:"p"},"1")," which access the root of the tree and returns the entire solution list."),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-lisp"},'$ brun \'1\' \'("example" "data" "for" "test")\'\n("example" "data" "for" "test")\n')),Object(i.a)("p",null,"However, every unquoted integer in the lower level language refers to a part of the solution."),Object(i.a)("p",null,"You can imagine a binary tree of ",Object(i.a)("inlineCode",{parentName:"p"},"f")," and ",Object(i.a)("inlineCode",{parentName:"p"},"r"),", where each node is numbered."),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-lisp"},'$ brun \'2\' \'("example" "data" "for" "test")\'\n"example"\n\n$ brun \'3\' \'("example" "data" "for" "test")\'\n("data" "for" "test")\n')),Object(i.a)("p",null,"And this is designed to work when there are lists inside lists too."),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},'$ brun \'4\' \'(("deeper" "example") "data" "for" "test")\'\n"deeper"\n\n$ brun \'5\' \'(("deeper" "example") "data" "for" "test")\'\n"data"\n\n$ brun \'6\' \'(("deeper" "example") "data" "for" "test")\'\n("example")\n')),Object(i.a)("p",null,"And so on."),Object(i.a)("h2",{id:"end-of-part-1"},"End of Part 1"),Object(i.a)("p",null,"This marks the end of this section of the guide.\nIn this section we have covered many of the basics of using CLVM/ChiaLisp.\nIt is recommended you play with using the information presented here for a bit before moving on."),Object(i.a)("p",null,"This guide has not covered all of the operators available in CLVM - try using some of the other ones listed! ",Object(i.a)("a",{parentName:"p",href:"https://github.com/Chia-Network/clvm/blob/main/docs/clvm.org"},"here"),"."))}p.isMDXComponent=!0},92:function(e,a,n){"use strict";n.d(a,"a",(function(){return m}));var t=n(0),r=n.n(t);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var a=r.a.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},b={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},u=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=t,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||i;return n?r.a.createElement(d,l(l({ref:a},c),{},{components:n})):r.a.createElement(d,l({ref:a},c))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);