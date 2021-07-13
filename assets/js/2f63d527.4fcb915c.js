(self.webpackChunkchialisp_web=self.webpackChunkchialisp_web||[]).push([[658],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=u(n),d=l,m=h["".concat(o,".").concat(d)]||h[d]||c[d]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},610:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return p},default:function(){return h}});var a=n(2122),l=n(9756),r=(n(7294),n(3905)),i=["components"],s={id:"serialization",title:"CLVM Reference Manual",sidebar_label:"Serialization"},o=void 0,u={unversionedId:"ref/serialization",id:"ref/serialization",isDocsHomePage:!1,title:"CLVM Reference Manual",description:"Serialization",source:"@site/docs/ref/serialization.md",sourceDirName:"ref",slug:"/ref/serialization",permalink:"/docs/ref/serialization",editUrl:"https://github.com/Chia-Network/chialisp-web/edit/main/docs/ref/serialization.md",version:"current",frontMatter:{id:"serialization",title:"CLVM Reference Manual",sidebar_label:"Serialization"},sidebar:"someSidebar",previous:{title:"CLVM Reference",permalink:"/docs/ref/clvm"},next:{title:"ChiaLisp and CLVM FAQ",permalink:"/docs/faq"}},p=[{value:"Serialization",id:"serialization",children:[{value:"Values",id:"values",children:[]},{value:"Encoding",id:"encoding",children:[]},{value:"Encoded Size bytes layout",id:"encoded-size-bytes-layout",children:[]},{value:"Decoding",id:"decoding",children:[]},{value:"Lists",id:"lists",children:[]}]}],c={toc:p};function h(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"serialization"},"Serialization"),(0,r.kt)("p",null,"The CLVM serialization format closely follows the in-memory representation of the program tree."),(0,r.kt)("p",null,"This in turn, closely resembles the text format of a fully compiled CLVM program."),(0,r.kt)("p",null,"At the lowest level, there are only two types of Object in the CLVM."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pair (also called Cons Pair/Cons Box/Cons Cell) - A pair of two values. Usually, the first value is an atom and contains information, whereas the second value is usually either a pointer to another pair, or a ",(0,r.kt)("inlineCode",{parentName:"li"},"nil")," atom. Lists are built from these pairs."),(0,r.kt)("li",{parentName:"ul"},"Atom - A value that holds data, which is represented as a byte array with the static length. Empty, zero-length atoms are used to represent ",(0,r.kt)("inlineCode",{parentName:"li"},"nil")," value.")),(0,r.kt)("p",null,"Each CLVM Object is represented by a series of one or more bytes. Each byte belongs to the representation of exactly one CLVM Object. That is, no bits in a byte are shared by multiple CLVM objects."),(0,r.kt)("h3",{id:"values"},"Values"),(0,r.kt)("p",null,"Each value in the CLVM is an untyped sequence of bytes. In the running virtual machine, values have a property length, containing the number of bytes. The same concept is preserved in the serialization format. However, values must be distinguished from cons boxes in the byte stream, so an escaping scheme is used. This escaping means that serialized values using more than 7 bits have a different representation than the in memory representation."),(0,r.kt)("p",null,"Nil has a single predefined value which is not shared with any user-defined value."),(0,r.kt)("h3",{id:"encoding"},"Encoding"),(0,r.kt)("p",null,"Values which can be represented in 7 bits are encoded as a single byte with that value. Larger serialized values are represented as a sequence of bytes that encode the size, and then the value bytes."),(0,r.kt)("p",null,"The encoding scheme for the size prefix is as follows:"),(0,r.kt)("p",null,"The value of the first serialized byte determines the number of size bytes (1 to 6, including the first byte). The size then determines the number of bytes denoting the value (0 to 0x400000000-1 bytes long)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"size")," is the length of the byte array containing the value, as an integer.\nIn the table below, we use ",(0,r.kt)("strong",{parentName:"p"},"s")," to describe the bytes that make up the encoded size value, s","[0]"," being the least significant byte of ",(0,r.kt)("strong",{parentName:"p"},"size"),". The size bytes are encoded MSB first."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"object is cons box:   0xFF\nvalue == nil:         0x80\nvalue <= 0x7F:        value\n\nsize < 0x40:          0x80 | s[0], value\nsize < 0x2000:        0xC0 | s[1], s[0], value\nsize < 0x100000:      0xE0 | s[2], s[1], s[0], value\nsize < 0x8000000:     0xF0 | s[3], s[2], s[1], s[0], value\nsize < 0x400000000:   0xF8 | s[4], s[3], s[2], s[1], s[0], value\n")),(0,r.kt)("p",null,"In the table below, the bits marked x contain the length of the value array, in bytes."),(0,r.kt)("h3",{id:"encoded-size-bytes-layout"},"Encoded Size bytes layout"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Size bytes"),(0,r.kt)("th",{parentName:"tr",align:null},"Min Value Len"),(0,r.kt)("th",{parentName:"tr",align:null},"Max Value Length"),(0,r.kt)("th",{parentName:"tr",align:null},"Byte 1"),(0,r.kt)("th",{parentName:"tr",align:null},"Byte 2"),(0,r.kt)("th",{parentName:"tr",align:null},"Byte 3"),(0,r.kt)("th",{parentName:"tr",align:null},"Byte 4"),(0,r.kt)("th",{parentName:"tr",align:null},"Byte 5"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"0x00"),(0,r.kt)("td",{parentName:"tr",align:null},"0x3F"),(0,r.kt)("td",{parentName:"tr",align:null},"1xxxxxxx"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"0x40"),(0,r.kt)("td",{parentName:"tr",align:null},"0x1FFF"),(0,r.kt)("td",{parentName:"tr",align:null},"11xxxxxx"),(0,r.kt)("td",{parentName:"tr",align:null},"xxxxxxxx"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"0x2000"),(0,r.kt)("td",{parentName:"tr",align:null},"0xFFFFF"),(0,r.kt)("td",{parentName:"tr",align:null},"111xxxxx"),(0,r.kt)("td",{parentName:"tr",align:null},"xxxxxxxx"),(0,r.kt)("td",{parentName:"tr",align:null},"xxxxxxxx"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"0x100000"),(0,r.kt)("td",{parentName:"tr",align:null},"0x7FFFFFF"),(0,r.kt)("td",{parentName:"tr",align:null},"1111xxxx"),(0,r.kt)("td",{parentName:"tr",align:null},"xxxxxxxx"),(0,r.kt)("td",{parentName:"tr",align:null},"xxxxxxxx"),(0,r.kt)("td",{parentName:"tr",align:null},"xxxxxxxx"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"0x8000000"),(0,r.kt)("td",{parentName:"tr",align:null},"0x3FFFFFFFF"),(0,r.kt)("td",{parentName:"tr",align:null},"11111xxx"),(0,r.kt)("td",{parentName:"tr",align:null},"xxxxxxxx"),(0,r.kt)("td",{parentName:"tr",align:null},"xxxxxxxx"),(0,r.kt)("td",{parentName:"tr",align:null},"xxxxxxxx"),(0,r.kt)("td",{parentName:"tr",align:null},"xxxxxxxx")))),(0,r.kt)("h3",{id:"decoding"},"Decoding"),(0,r.kt)("p",null,"The decoding scheme is as follows:"),(0,r.kt)("p",null,"c","[0]"," is the first byte of the serialized CLVM object."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"size")," is the number of bytes contained in the value byte array\n",(0,r.kt)("strong",{parentName:"p"},"s")," is the byte array containing the bytes of the two's complement integer size, the number of bytes in the value array.\n",(0,r.kt)("strong",{parentName:"p"},"value")," is the span of bytes describing the CLVM Object itself"),(0,r.kt)("p",null,"c","[0]"," can contain the entire value, or it can be part of the size header.\nValues below 0x80 do not have size header bytes."),(0,r.kt)("p",null,"0x00-0x7f: A literal one byte value. c","[0]"," contains the value.\n",(0,r.kt)("inlineCode",{parentName:"p"},"size = 1; value = c[0]")),(0,r.kt)("p",null,"0x80-0xbf: The value starts at the byte c","[1]",", and size is in the lower 6 bits of c","[0]","\n",(0,r.kt)("inlineCode",{parentName:"p"},"size = (c[0] & 0x3F); value = c[1] .. c[size]")),(0,r.kt)("p",null,"0xc0-0xdf: The value starts at c","[2]","; the lower 5 bits of c","[0]"," are the high bits of size\n",(0,r.kt)("inlineCode",{parentName:"p"},"size = (c[0] & 0x1F) .. c[1]; value = c[2] .. c[size+1]")),(0,r.kt)("p",null,"0xe0-0xef: The value starts at c","[3]","; the lower 4 bits of c","[0]"," are the high bits of size\n",(0,r.kt)("inlineCode",{parentName:"p"},"size = (c[0] & 0x0F) .. c[2]; value = c[3] .. c[size+2]")),(0,r.kt)("p",null,"0xf0-0xf7: The value starts at c","[4]","; the lower 3 bits of c","[0]"," are the high bits of size\n",(0,r.kt)("inlineCode",{parentName:"p"},"size = (c[0] & 0x07) .. c[3]; value = c[4] .. c[size+3]")),(0,r.kt)("p",null,"0xf7-0xfb: The value starts at c","[5]","; the lower 2 bits of c","[0]"," are the high bits of size\n",(0,r.kt)("inlineCode",{parentName:"p"},"size = (c[0] & 0x03) .. c[4]; value = c[5] .. c[size+4]")),(0,r.kt)("p",null,"Atoms of size 0x400000000 or greater are disallowed in the serialization format."),(0,r.kt)("p",null,"As an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"c = [ 0x84 0x33 0x22 0x11 0x00 ]\nc[0] = 0x84\nsize = (0x84 & 0x3F) = 4\nvalue = [ 33 22 11 00 ]\n")),(0,r.kt)("p",null,"In the above example, the length of the value is ",(0,r.kt)("strong",{parentName:"p"},"4"),", and we only needed the bottom 3 bits of the c","[0]"," byte to encode the length, so the size is completely described by the first serialized byte. The total length of the encoded atom is 5 bytes."),(0,r.kt)("p",null,"Note that for values greater than 0x7F, the bytes of the serialized value representing the length are disjoint with the actual value bytes."),(0,r.kt)("p",null,"Let us consider some special cases."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"value(0x80) = 81 80\n")),(0,r.kt)("p",null,"c","[0]"," is ",(0,r.kt)("inlineCode",{parentName:"p"},"0x81"),".Since c","[0]"," is between ",(0,r.kt)("inlineCode",{parentName:"p"},"0x7F")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"0xC0"),", we know that there is only one size byte, c","[0]",", and the value is contained in the following bytes, starting at c","[1]",". The total size of the value array is\n",(0,r.kt)("inlineCode",{parentName:"p"},"size")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"c[0] & 0x3F")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"0x1"),". So, the full value is contained in the single following byte."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"value(0x81) = 81 81\nvalue(0x82) = 81 82\nvalue(0xFF) = 81 ff\n")),(0,r.kt)("p",null,"Note that the special byte 0xFF is allowed within the bytes representing a value.\n0xFF denotes a cons box when it is the first byte of a decoded CLVM object, but it may also occur within the serialized bytes of a value."),(0,r.kt)("p",null,"A 2 byte value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"value(0x01FF) = 82 01 ff\n")),(0,r.kt)("h3",{id:"lists"},"Lists"),(0,r.kt)("p",null,"Lists are the primary high-level data structure in most LISP implementations. Traditionally, a LISP builds lists from cons boxes, a two-celled data structure that can be thought of as a struct with two fields, left and right, each of which contains either a value, or a (pointer to) another cons cell."),(0,r.kt)("p",null,"Because the cons cell is the low level data structure that lists are built from, LISP lists are only lists by way of the fact that lists can be implemented from trees. A lisp list built from cons cells in a binary tree."),(0,r.kt)("p",null,"Serialized cons cells are represented by the byte 0xFF, followed by the objects in its cells, left then right.\nValues are represented by a variable length byte-aligned encoding scheme, described above.\nNil is chosen to be the zero-length object, which is represented by the byte 0x80."),(0,r.kt)("p",null,"Because lists are represented as a sequence of cons boxes, the byte 0xff occurs frequently in the serialization format."),(0,r.kt)("p",null,"After the FF introducer byte, the next two values describe what is in the left and right cons boxes, respectively."),(0,r.kt)("p",null,"The first examples use single byte values for clarity."),(0,r.kt)("p",null,"The list (1 2 3) will be encoded as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ff 01 ff 02 ff 03 80\n")),(0,r.kt)("p",null,"This can be read as:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"(a cons box containing 01")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"a cons box (containing 02")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"a cons box (containing 03 and nil)))")),(0,r.kt)("p",null,"Alternatively, it could be viewed as a binary tree that looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"      [ ]\n     /   \\\n    1    [ ]\n         / \\\n        2  [ ]\n           / \\\n          3  nil\n")),(0,r.kt)("p",null,"Or, as a chain of memory cells that look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(a)[ 1, ->b ]   (b)[ 2, ->c ]   (c)[ 3, nil ]\n")),(0,r.kt)("p",null,"Where"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'(a) means "The contents of the memory cells at position a and a+1 (cons box a)"'),(0,r.kt)("li",{parentName:"ul"},'->b means "a pointer to cons box (b)"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(a)"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"(b)"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"(c)")," are arbitrary labels for the cons cells, and do not exist in the CLVM")),(0,r.kt)("p",null,"Because the above list contains only one level of nesting, a single ",(0,r.kt)("inlineCode",{parentName:"p"},"0x80")," byte is sufficient to terminate the list. Note the two ",(0,r.kt)("inlineCode",{parentName:"p"},"0x80")," bytes in the example below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"opc '(1 (2 3))'\nff 01 ff ff 02 ff 03 80 80\n")),(0,r.kt)("p",null,"There can be many cons cells in a CLVM program, so 0xFF will be common in the serialized program. There will be one serialized nil (0x80) per properly terminated list. Nil may also occur at other places in the program. There are usually more cons boxes than lists, so 0xFF occurs more frequently than 0x80."))}h.isMDXComponent=!0}}]);