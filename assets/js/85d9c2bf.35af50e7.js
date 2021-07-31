(self.webpackChunkchialisp_web=self.webpackChunkchialisp_web||[]).push([[743],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,p=d["".concat(l,".").concat(h)]||d[h]||c[h]||i;return n?o.createElement(p,r(r({ref:t},m),{},{components:n})):o.createElement(p,r({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2983:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return m},default:function(){return d}});var o=n(2122),a=n(9756),i=(n(7294),n(3905)),r=["components"],s={id:"optimization",title:"10 - Optimization"},l=void 0,u={unversionedId:"optimization",id:"optimization",isDocsHomePage:!1,title:"10 - Optimization",description:"Before you deploy a smart contract to the network, you should closely examine the code to find ways to optimize its execution.  Remember, the code you write is going to be deployed on millions of nodes; if it is slow, you slow down the whole network. This is why the block constraint on the Chia Network is dependent on the program execution cost of Chialisp that has to be run in that block.  If you want to write a bigger, slow running contract, you're going to need to pay more fees every time you want to spend it.  Let's go over some techniques you can use to optimize your puzzles.",source:"@site/docs/optimization.md",sourceDirName:".",slug:"/optimization",permalink:"/docs/optimization",editUrl:"https://github.com/Chia-Network/chialisp-web/edit/main/docs/optimization.md",version:"current",frontMatter:{id:"optimization",title:"10 - Optimization"},sidebar:"someSidebar",previous:{title:"9 - Debugging",permalink:"/docs/debugging"},next:{title:"The Great Chia Glossary",permalink:"/docs/glossary"}},m=[{value:"Minimize the number spends",id:"minimize-the-number-spends",children:[]},{value:"<code>defun</code> vs <code>defun-inline</code>",id:"defun-vs-defun-inline",children:[]},{value:"Familiarize yourself with all of the operators",id:"familiarize-yourself-with-all-of-the-operators",children:[]},{value:"Keep argument numbers small",id:"keep-argument-numbers-small",children:[]},{value:"Don&#39;t use functions by reflex",id:"dont-use-functions-by-reflex",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],c={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Before you deploy a smart contract to the network, you should closely examine the code to find ways to optimize its execution.  Remember, the code you write is going to be deployed on millions of nodes; if it is slow, you slow down the whole network. This is why the block constraint on the Chia Network is dependent on the ",(0,i.kt)("a",{parentName:"p",href:"https://chialisp.com/docs/ref/clvm/#costs"},"program execution cost")," of Chialisp that has to be run in that block.  If you want to write a bigger, slow running contract, you're going to need to pay more fees every time you want to spend it.  Let's go over some techniques you can use to optimize your puzzles."),(0,i.kt)("h2",{id:"minimize-the-number-spends"},"Minimize the number spends"),(0,i.kt)("p",null,"At the end of the day, one of the biggest drains on cost is going to be how often you have to spend the coin.  Quite commonly, you will find ways to build contracts where participants are required to spend the coin in order to interact with it.  The coin may traverse through multiple states as they do so.  Every time the coin has to be spent, it acts as a multiplier for your base program cost.  Even if you are not traversing an expensive path through the code, the full puzzle must still be revealed and there will most likely be ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE_COIN")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"AGG_SIG_ME")," conditions which often represent a large chunk of the cost."),(0,i.kt)("p",null,"It is also important that you have as few signatures and signature operations as possible.  It is usually best practice to collect everything in your program that needs signing, hash it all together and ask for a single signature on that hash.  You can also sometimes be clever with announcements where an unsigned coin can assert its relevant information from a signed coin.  Be creative, but always remember to double check that every piece of important information is signed or asserted."),(0,i.kt)("h2",{id:"defun-vs-defun-inline"},(0,i.kt)("inlineCode",{parentName:"h2"},"defun")," vs ",(0,i.kt)("inlineCode",{parentName:"h2"},"defun-inline")),(0,i.kt)("p",null,"In most instances, it is better to use inline functions rather than regular functions.  Inline functions get inserted where they are called at compile time which will eliminate the function call overhead and will not store the function separately in the code."),(0,i.kt)("p",null,"There is a potential scenario where this is not true.  If you are using an inline function with an argument that has been calculated, you will end up paying for that calculation every time the argument is referenced:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"(defun-inline add_to_self (x) (+ x x))\n\n(add_to_self (* 200 200))\n")),(0,i.kt)("p",null,"The above code snippet will result in the following expansion:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"(+ (* 200 200) (* 200 200))\n")),(0,i.kt)("p",null,"As you can see, the expensive multiplication operation has now been performed twice!"),(0,i.kt)("h2",{id:"familiarize-yourself-with-all-of-the-operators"},"Familiarize yourself with all of the operators"),(0,i.kt)("p",null,"Make sure to check out the ",(0,i.kt)("a",{parentName:"p",href:"https://chialisp.com/docs/ref/clvm"},"reference section")," to find out every operator that you can use and what they cost.  A lot of common operators that you might be tempted to use have a surprisingly high cost and are best to steer clear of."),(0,i.kt)("p",null,"For example, you may want to evaluate differently based on whether a number is even or odd:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"(if (r (divmod value 2))\n  ; do odd things\n  ; do even things\n)\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note that the if takes advantage of the fact that 0 == (). This technique is handy when recursing through lists too.  The last item in a list is always () which evaluates to false, so in that case you can break the recursion.")),(0,i.kt)("p",null,"However, ",(0,i.kt)("inlineCode",{parentName:"p"},"divmod")," is a pretty expensive operation, and we have to add an ",(0,i.kt)("inlineCode",{parentName:"p"},"r")," to access the remainder once the operation has completed.  Instead, we can just use ",(0,i.kt)("inlineCode",{parentName:"p"},"logand")," to evaluate just the last bit:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"(if (logand value 1)\n  ; do odd things\n  ; do even things\n)\n")),(0,i.kt)("p",null,"We have now saved ourselves at least 50% of the cost of this code block!"),(0,i.kt)("h2",{id:"keep-argument-numbers-small"},"Keep argument numbers small"),(0,i.kt)("p",null,"This tip is both good for optimization and readability.  As the program is running, it needs to pay cost to look up a value from the environment.  It is not a large cost, but it gets larger the deeper it has to go into the environment tree to search for the value.  If you can keep the argument numbers small, you can trim off cost every time your program uses an argument in its evaluation."),(0,i.kt)("p",null,"One way to do this is to batch arguments that always end up in the same place together.  Here's an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},'(mod (\n      CURRIED_PUBKEY\n      some_data\n      some_other_data\n      some_more_data\n      even_more_data\n      pubkey\n      my_amount\n      my_id\n     )\n\n     (import "condition_codes.clvm")\n     (import "sha256tree.clvm")\n\n     (defun-inline agg_sig (CURRIED_PUBKEY some_data some_other_data some_more_data even_more_data)\n        (AGG_SIG_ME CURRIED_PUBKEY (sha256tree (list some_data some_other_data some_more_data even_more_data)))\n     )\n\n     (defun-inline assert_amount_and_sig (CURRIED_PUBKEY some_data some_other_data some_more_data even_more_data my_amount)\n        (c (ASSERT_MY_AMOUNT my_amount) (agg_sig CURRIED_PUBKEY some_data some_other_data some_more_data even_more_data))\n     )\n\n     (defun-inline assert_id_and_amount_and_sig (CURRIED_PUBKEY some_data some_other_data some_more_data even_more_data my_amount my_id)\n        (c ASSERT_MY_ID my_id (assert_amount_and_sig CURRIED_PUBKEY some_data some_other_data some_more_data even_more_data my_amount))\n     )\n\n     (assert_id_and_amount_and_sig CURRIED_PUBKEY some_data some_other_data some_more_data even_more_data my_amount my_id)\n)\n')),(0,i.kt)("p",null,"You can see the code is a little bit out of control from a readability standpoint, and when accessing ",(0,i.kt)("inlineCode",{parentName:"p"},"my_amount")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"my_id")," we have to go deep into the environment tree to read their values.  Instead, we should just batch all of our data into a list to start with."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},'(mod (\n      CURRIED_PUBKEY\n      all_data\n      pubkey\n      my_amount\n      my_id\n     )\n\n     (import "condition_codes.clvm")\n     (import "sha256tree.clvm")\n\n     (defun-inline agg_sig (CURRIED_PUBKEY all_data)\n        (AGG_SIG_ME CURRIED_PUBKEY (sha256tree all_data))\n     )\n\n     (defun-inline assert_amount_and_sig (CURRIED_PUBKEY all_data my_amount)\n        (c (ASSERT_MY_AMOUNT my_amount) (agg_sig CURRIED_PUBKEY all_data))\n     )\n\n     (defun-inline assert_id_and_amount_and_sig (CURRIED_PUBKEY all_data my_amount my_id)\n        (c ASSERT_MY_ID my_id (assert_amount_and_sig CURRIED_PUBKEY all_data my_amount))\n     )\n\n     (assert_id_and_amount_and_sig CURRIED_PUBKEY all_data my_amount my_id)\n)\n')),(0,i.kt)("p",null,"This is much more concise, and we can rely on the solver to put the relevant data in a list for us, so we can subtract that cost as well.  This is usually somewhat niche, but it becomes important when trying to pass data down through inner puzzles.  If the outermost puzzle wants to communicate with the innermost puzzle, it will have to pass all the data it needs through every step of the puzzles in between.  That is much easier if it is packaged into a single bundle."),(0,i.kt)("h2",{id:"dont-use-functions-by-reflex"},"Don't use functions by reflex"),(0,i.kt)("p",null,"Oftentimes, using a common function can become a matter of habit and you can end up using it where it actually creates more complexity than is necessary.  A good example is ",(0,i.kt)("a",{parentName:"p",href:"/docs/common_functions#sha256tree1"},"sha256tree"),".  Since the function works on either cons boxes or atoms, you may be tempted to use it on a single atom (maybe you're currying it into a function).  The function needs to work this way because it recurses and will always run into atoms as it does so.  However, using it to hash only an atom actually adds unnecessary cost to the program.  Not only do you add the function call overhead, but you also add the check to see if it's an atom or a list, even though you know its an atom!  A more cost effective method is to manually hash it like it would be hashed in a tree: ",(0,i.kt)("inlineCode",{parentName:"p"},"(sha256 1 some_atom)"),"."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"A lot of optimizations that you can make may seem silly for the small amount of cost that they save.  However, if you expect your contract to become widely used, then there will be thousands of users paying for that in fees every day.  Over time it can add up to a lot of money wasted.  It's important to take the time to review your code and make sure that you can save as much cost as possible before you deploy it to the network."))}d.isMDXComponent=!0}}]);