"use strict";(self.webpackChunkchialisp_web=self.webpackChunkchialisp_web||[]).push([[7369],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),h=u(n),d=i,m=h["".concat(s,".").concat(d)]||h[d]||c[d]||o;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1746:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return h}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),l=["components"],r={},s="CAT creation tutorial (Windows)",u={unversionedId:"tutorials/CAT_Launch_Process_Windows",id:"tutorials/CAT_Launch_Process_Windows",isDocsHomePage:!1,title:"CAT creation tutorial (Windows)",description:"This tutorial is for creating Chia Asset Tokens (CATS) on Windows. The equivalent Linux/MacOS tutorial can be found here.",source:"@site/docs/tutorials/CAT_Launch_Process_Windows.md",sourceDirName:"tutorials",slug:"/tutorials/CAT_Launch_Process_Windows",permalink:"/docs/tutorials/CAT_Launch_Process_Windows",editUrl:"https://github.com/Chia-Network/chialisp-web/edit/main/docs/tutorials/CAT_Launch_Process_Windows.md",version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"CAT creation tutorial (Linux/MacOS)",permalink:"/docs/tutorials/CAT_Launch_Process_Linux_MacOS"},next:{title:"Single Issuance CAT",permalink:"/docs/tutorials/single_issuance_CAT"}},p=[{value:"Introduction",id:"introduction",children:[]},{value:"Setting up your Chia environment",id:"setting-up-your-chia-environment",children:[]},{value:"Creating a single-mint CAT",id:"creating-a-single-mint-cat",children:[]},{value:"Creating a multiple mint CAT",id:"creating-a-multiple-mint-cat",children:[]},{value:"Preparing for mainnet",id:"preparing-for-mainnet",children:[]},{value:"Generating a secure key pair",id:"generating-a-secure-key-pair",children:[]},{value:"Potential future additions",id:"potential-future-additions",children:[]}],c={toc:p};function h(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cat-creation-tutorial-windows"},"CAT creation tutorial (Windows)"),(0,o.kt)("p",null,"This tutorial is for creating Chia Asset Tokens (CATS) on Windows. The equivalent Linux/MacOS tutorial can be found ",(0,o.kt)("a",{parentName:"p",href:"https://www.chialisp.com/docs/tutorials/CAT_Launch_Process_Linux_MacOS",title:"Chia Asset Token tutorial for Linux and MacOs users"},"here"),"."),(0,o.kt)("p",null,"Contents:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#introduction"},"Introduction")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#setting-up-your-chia-environment"},"Setting up your Chia environment")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#creating-a-single-mint-cat"},"Creating a single-mint CAT")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#creating-a-multiple-mint-cat"},"Creating a multiple mint CAT")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#preparing-for-mainnet"},"Preparing for mainnet")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#generating-a-secure-key-pair"},"Generating a secure key pair")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#potential-future-additions"},"Potential future additions"))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Welcome to the world of CATs! We're excited to have you here, and we can't wait to see the creative ideas you come up with."),(0,o.kt)("p",null,"This tutorial will help you jump right in and get started with issuing your own CATs. However, there are a few things you should know before we begin."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://chialisp.com/docs/puzzles/cats",title:"CAT1 standard documentation"},"CAT1 standard")," is currently in ",(0,o.kt)("strong",{parentName:"p"},"draft")," form. This means that anything you do here could potentially be invalidated later if we add any breaking changes to the final standard. ",(0,o.kt)("strong",{parentName:"p"},"Proceed at your own risk"),"."),(0,o.kt)("p",null,"As this still a draft standard, not all edge cases have been thoroughly tested. To minimize your risk of running into unexpected results, we recommend that you do following (each of these will be discussed in more detail later in the tutorial):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run your full node and light wallet on the same computer."),(0,o.kt)("li",{parentName:"ul"},"Do not use the executable installer to install the light wallet for this tutorial. Instead, install from source, as this document will show you how to do. The reason for this is because the executable installer will overwrite your full node installation."),(0,o.kt)("li",{parentName:"ul"},"Generate a new public/private key pair for each CAT you issue. This key pair should be used for issuing one specific CAT ",(0,o.kt)("strong",{parentName:"li"},"and nothing else"),". It should also be the only key pair on your computer while issuing the CAT."),(0,o.kt)("li",{parentName:"ul"},"Do not attempt to test your CAT's creation on an active farming machine."),(0,o.kt)("li",{parentName:"ul"},"Test thoroughly on testnet before issuing your CAT to mainnet.")),(0,o.kt)("p",null,"For any questions regarding this tutorial, head over to the #chialisp channel on our ",(0,o.kt)("a",{parentName:"p",href:"https://keybase.io/team/chia_network.public",title:"Chia's Keybase forum"},"Keybase")," forum, where there are lots of friendly folks who can help you."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"setting-up-your-chia-environment"},"Setting up your Chia environment"),(0,o.kt)("p",null,"First, a few notes on the current structure of Chia's source code as it pertains to CATs:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For now, the light wallet is the only wallet capable of issuing new CATs. It is currently located in a GitHub branch called ",(0,o.kt)("inlineCode",{parentName:"p"},"protocol_and_cats_rebased"),". This branch will eventually be merged with the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," branch, but while the CAT1 standard is still in draft form, the two branches will be kept separate."),(0,o.kt)("p",{parentName:"blockquote"},"There are two phases of issuing a CAT: testing your issuance on testnet and actually issuing on mainnet. In both of these phases, you'll need a synced full node and a synced light wallet."),(0,o.kt)("p",{parentName:"blockquote"},"For testing your issuance, you'll need to use testnet10. This testnet is only located on the ",(0,o.kt)("inlineCode",{parentName:"p"},"protocol_and_cats_rebased")," branch. Therefore, you must use this branch for both your full node and the light wallet."),(0,o.kt)("p",{parentName:"blockquote"},"For issuing on mainnet, your light wallet must come from ",(0,o.kt)("inlineCode",{parentName:"p"},"protocol_and_cats_rebased"),", but your full node can be based off of either ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"protocol_and_cats_rebased"),".")),(0,o.kt)("p",null,"To start this tutorial, we'll assume you are currently testing your issuance, and therefore will be running on the ",(0,o.kt)("inlineCode",{parentName:"p"},"protocol_and_cats_rebased")," branch. Later in the tutorial, we'll show you how to make the switch to mainnet."),(0,o.kt)("p",null,"All right, time to get started!"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Clone the ",(0,o.kt)("inlineCode",{parentName:"p"},"protocol_and_cats_rebased")," branch from GitHub and install the light wallet:"),(0,o.kt)("p",{parentName:"li"},"a. Install the necessary prerequisites to run a normal Chia build, such as Git, Python, and Rust. Note that your Python version must be between 3.7 and 3.9. You can obtain the version by running ",(0,o.kt)("inlineCode",{parentName:"p"},"python version"),"."),(0,o.kt)("p",{parentName:"li"},"a. Open a new PowerShell window as Administrator, create a new folder called ",(0,o.kt)("inlineCode",{parentName:"p"},"protocol_and_cats_rebased")," and cd to it."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"In case you missed the above warning, please do not run the executable installer to install the light wallet. It will overwrite your full node if you have one installed. This will be fixed in a future release. For now, run the ",(0,o.kt)("inlineCode",{parentName:"p"},"git")," command listed below to avoid overwriting your full node.")),(0,o.kt)("p",{parentName:"li"},"b. Run ",(0,o.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/Chia-Network/chia-blockchain.git -b protocol_and_cats_rebased --recurse-submodules")," to clone Chia's CAT branch."),(0,o.kt)("p",{parentName:"li"},"c. Run ",(0,o.kt)("inlineCode",{parentName:"p"},"cd chia-blockchain"),"."),(0,o.kt)("p",{parentName:"li"},"d. Run ",(0,o.kt)("inlineCode",{parentName:"p"},".\\Install.ps1")," to install the light wallet."),(0,o.kt)("p",{parentName:"li"},"e. Run ",(0,o.kt)("inlineCode",{parentName:"p"},".\\venv\\Scripts\\Activate.ps1")," to activate a virtual environment."),(0,o.kt)("p",{parentName:"li"},"f. Run ",(0,o.kt)("inlineCode",{parentName:"p"},"chia init")," to initialize your environment."),(0,o.kt)("p",{parentName:"li"},'g. If you receive this message: "WARNING: UNPROTECTED SSL FILE!" then run ',(0,o.kt)("inlineCode",{parentName:"p"},"chia init --fix-ssl-permissions"),"."),(0,o.kt)("p",{parentName:"li"},"h. Run ",(0,o.kt)("inlineCode",{parentName:"p"},"chia configure -t true")," to switch to testnet10."),(0,o.kt)("p",{parentName:"li"},"i. Run ",(0,o.kt)("inlineCode",{parentName:"p"},".\\Install-gui.ps1")," to install the light wallet GUI."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"If this command fails, you may have better luck running ",(0,o.kt)("inlineCode",{parentName:"p"},".\\install-gui.sh"),"."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run and sync the light wallet GUI:"),(0,o.kt)("p",{parentName:"li"},"a. Before doing anything else, it\u2019s a good idea to set your log_level to INFO. To do this, run ",(0,o.kt)("inlineCode",{parentName:"p"},"chia configure -log-level INFO"),"."),(0,o.kt)("p",{parentName:"li"},"b. Run ",(0,o.kt)("inlineCode",{parentName:"p"},"cd chia-blockchain-gui"),"."),(0,o.kt)("p",{parentName:"li"},"c. Run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run electron")," to run the light wallet GUI as a daemon."),(0,o.kt)("p",{parentName:"li"},'d. If you already have a "Private key with public fingerprint", select it when the GUI loads. Otherwise, select "CREATE A NEW PRIVATE KEY".'),(0,o.kt)("p",{parentName:"li"},'e. "Status: Syncing" should appear in the upper right corner of the GUI. Within a few minutes, this should change to "Status: Synced". This process doesn\u2019t take long because the light wallet only requests and downloads the blocks that are required for that specific wallet.'),(0,o.kt)("p",{parentName:"li"},"f. If your Total Balance is 0, you can get some testnet10 txch from ",(0,o.kt)("a",{parentName:"p",href:"https://testnet10-faucet.chia.net",title:"testnet10 TXCH faucet"},"our faucet"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Sync your testnet10 full_node:"),(0,o.kt)("p",{parentName:"li"},"Because your are running on the testnet, you can download a database to speed up the syncing of your full node."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"WARNING: Do not attempt this on mainnet.")," ")),(0,o.kt)("p",{parentName:"li"},"a. Open a new browser window and go to ",(0,o.kt)("a",{parentName:"p",href:"https://download.chia.net/?prefix=testnet10/",title:"Testnet10 database download"},"our download site"),"."),(0,o.kt)("p",{parentName:"li"},'b. Click the file "blockchain_v1_testnet10.sqlite" to download it. Depending on your connection speed, this could take several minutes.'),(0,o.kt)("p",{parentName:"li"},"c. Move the .sqlite file to the db folder, which is located in ",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\Users\\<User>\\.chia\\standalone_wallet\\wallet\\db\\"),"."),(0,o.kt)("p",{parentName:"li"},'d. Change to the "chia-blockchain" directory where you installed the light wallet.'),(0,o.kt)("p",{parentName:"li"},'e. If "(venv)" doesn\u2019t appear on the left side of your command line, run ',(0,o.kt)("inlineCode",{parentName:"p"},".\\venv\\Scripts\\Activate.ps1")," to activate your virtual environment."),(0,o.kt)("p",{parentName:"li"},"f. Run ",(0,o.kt)("inlineCode",{parentName:"p"},"chia start node"),". You should receive a message that the chia_full_node has been started. If you copied the .sqlite file to your db folder, your node should be synced within a few minutes. You can monitor the syncing progress in ",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\Users\\<User>\\.chia\\standalone_wallet\\log\\debug.log"),"."),(0,o.kt)("p",{parentName:"li"},"g. While your full node is syncing, you may proceed to the next step."))),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set up the CAT admin tool, which will help you to issue your CATs:"),(0,o.kt)("p",{parentName:"li"},"a. Run ",(0,o.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/Chia-Network/CAT-admin-tool.git -b main --recurse-submodules")," to clone the CAT admin tool."),(0,o.kt)("p",{parentName:"li"},"b. Run ",(0,o.kt)("inlineCode",{parentName:"p"},"cd CAT-admin-tool-main"),"."),(0,o.kt)("p",{parentName:"li"},"c. Run ",(0,o.kt)("inlineCode",{parentName:"p"},"python -m venv venv")," to create a virtual environment."),(0,o.kt)("p",{parentName:"li"},"d. Run ",(0,o.kt)("inlineCode",{parentName:"p"},".\\venv\\Scripts\\Activate.ps1")," to activate the virtual environment."),(0,o.kt)("p",{parentName:"li"},"e. Run ",(0,o.kt)("inlineCode",{parentName:"p"},"pip install ."),". This will take a few minutes."),(0,o.kt)("p",{parentName:"li"},"f. Run ",(0,o.kt)("inlineCode",{parentName:"p"},"pip install chia-dev-tools --no-deps"),"."),(0,o.kt)("p",{parentName:"li"},"g. Run ",(0,o.kt)("inlineCode",{parentName:"p"},"pip install pytest"),". You can safely ignore the errors about missing requirements.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Your environment should be all set, but let's make sure:"),(0,o.kt)("p",{parentName:"li"},"a. Run ",(0,o.kt)("inlineCode",{parentName:"p"},"cats --help"),". You should get a usage statement."),(0,o.kt)("p",{parentName:"li"},"b. Run ",(0,o.kt)("inlineCode",{parentName:"p"},"cdv --help"),". You should get another usage statement."),(0,o.kt)("p",{parentName:"li"},"c. Run ",(0,o.kt)("inlineCode",{parentName:"p"},"chia show -s"),'. You should get this message: "Current Blockchain Status: Full Node Synced", along with a listing of the latest block heights.'),(0,o.kt)("p",{parentName:"li"},'d. Verify that "Status: Synced" is showing in the upper right side of the standalone GUI.'),(0,o.kt)("p",{parentName:"li"},"e. Make sure you have some TXCH in your wallet."))),(0,o.kt)("p",null,"Your environment is now set up and you are ready to start issuing CATs."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"creating-a-single-mint-cat"},"Creating a single-mint CAT"),(0,o.kt)("p",null,"If you're a visual learner, click ",(0,o.kt)("a",{parentName:"p",href:"https://chialisp.com/docs/tutorials/single_issuance_CAT",title:"Single-mint CAT video tutorial"},"here")," for a video tutorial for creating a single-mint CAT."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: This section will discuss Token Asset Issuance Limiters (TAILs), as well some technical details of CATs. For a refresher on CATs and TAILs, check out our ",(0,o.kt)("a",{parentName:"p",href:"https://chialisp.com/docs/puzzles/cats",title:"CAT1 standard documentation"},"CAT1 standard"),".")),(0,o.kt)("p",null,"To get started, you will create a single-mint CAT. This is the default way to issue a CAT. It's also the simplest. It contains a TAIL that only can be used on a specific XCH coin. In Chia the coins can only be spent once, so in this case, the CAT can only mint tokens once."),(0,o.kt)("p",null,"A CAT with a single-mint TAIL will be useful for anyone who wants to create a token with a guaranteed fixed supply."),(0,o.kt)("p",null,"You can find the TAIL we'll use for this example ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chia-blockchain/blob/protocol_and_cats_rebased/chia/wallet/puzzles/genesis-by-coin-id-with-0.clvm",title:"Single-mint TAIL"},"here"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Find a coin to mint, and create and push a new spendbundle:"),(0,o.kt)("p",{parentName:"li"},'a. Change to the "CAT-admin-tool-main" folder if you\'re not already there.'),(0,o.kt)("p",{parentName:"li"},"b. Figure out how many XCH mojos you want to use to issue your CAT. By default each CAT token will contain 1000 mojos, so you should multiply the number of tokens you want to mint by 1000. For example, if you want to mint 1 million tokens, you'll need 1 billion XCH mojos (1/1000 of an XCH)."),(0,o.kt)("p",{parentName:"li"},"c. Take note of your Receive Address in the standalone GUI. You'll need it for the next step."),(0,o.kt)("p",{parentName:"li"},"d. Run ",(0,o.kt)("inlineCode",{parentName:"p"},"cats --tail .\\reference_tails\\genesis_by_coin_id.clsp.hex --send-to <your receive address> --amount <XCH mojos> --as-bytes --select-coin")),(0,o.kt)("p",{parentName:"li"},'The --select-coin flag will choose a coin from your wallet for minting your tokens. The final line of the output will be "Name: ',"<","Coin ID",">",'". You\u2019ll use "',"<","Coin ID",">",'" in the next step.'),(0,o.kt)("p",{parentName:"li"},'e. Run the same command again, this time removing the --select-coin flag and adding a new flag, "--curry 0x',"<","Coin ID",">",'". It\u2019s very important to preface the ',"<","Coin ID",">"," with 0x here, to make CLVM interpret the value as bytes and not a string. Here\u2019s the full command to run:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"cats --tail .\\reference_tails\\genesis_by_coin_id.clsp.hex --send-to <your receive address> --amount <XCH mojos> --as-bytes --curry 0x<Coin ID>")),(0,o.kt)("p",{parentName:"li"},"The command will output two values, ","<","Asset ID",">"," and ","<","Spend Bundle",">",". ","<","Asset ID",">"," will be the ID of this CAT, so it\u2019s important to save this value for later. ","<","Spend Bundle",">"," is a large wall of text. This is the actual transaction that you will push to the blockchain, in byte format."),(0,o.kt)("p",{parentName:"li"},"f. Copy the value of ","<","Spend Bundle",">"," and run ",(0,o.kt)("inlineCode",{parentName:"p"},"cdv rpc pushtx <Spend Bundle>"),'. You should receive the message "status": "SUCCESS", "success": true.'),(0,o.kt)("p",{parentName:"li"},"Congratulations! You have issued your first CAT. You still need to tell your wallet about it, though.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add a wallet ID for your new CAT:"),(0,o.kt)("p",{parentName:"li"},"a. Switch to your light wallet GUI. Within a few minutes, your balance should decrease by the number of mojos you just minted. It won\u2019t show up in your transactions, though. That feature has not yet been implemented."),(0,o.kt)("p",{parentName:"li"},'b. Now you can add a wallet ID for your new CAT. In the upper left corner, click "+ ADD TOKEN", then click "+ Custom". Enter the name of your CAT (it can be anything) in the Name field. For the Token and Asset Issuance Limitations field, paste the ',"<","Asset ID",">"," you saved from a few steps ago. Click ADD."),(0,o.kt)("p",{parentName:"li"},"c. You will now be taken to your new CAT wallet. The balance should show the number of XCH mojos you chose to use, divided by 1000. This is because CAT mojos by default are one-thousandth of a CAT."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"NOTE: There are currently two cosmetic bugs you might run into, covered in the next two steps.")),(0,o.kt)("p",{parentName:"li"},"d. If you see a Total Balance of 0, you need to refresh your wallet. Run ",(0,o.kt)("inlineCode",{parentName:"p"},"chia start wallet-only -r"),". You should now see the correct balance. This will be fixed in a future release."),(0,o.kt)("p",{parentName:"li"},'e. Your cat\'s name might not show up in your wallet automatically. In this case, click the three dots next to "Status: Synced" and click "Rename Wallet". You can rename it to its proper name. This will be done automatically in a future release.'))),(0,o.kt)("p",null,"You now have access to your CAT in the GUI. You can send and receive your new tokens just like you would with regular XCH."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"creating-a-multiple-mint-cat"},"Creating a multiple mint CAT"),(0,o.kt)("p",null,"If you're a visual learner, click ",(0,o.kt)("a",{parentName:"p",href:"https://chialisp.com/docs/tutorials/multiple_issuance_CAT",title:"Multiple mint CAT video tutorial"},"here")," for a video tutorial for creating a multiple mint CAT."),(0,o.kt)("p",null,"Next we\u2019ll create a CAT capable of minting tokens multiple times. This CAT uses a delegated TAIL, which is much more flexible than the previous one. As long as you sign a puzzlehash that you specify, you can mint new tokens using whatever TAIL you want. This allows for features such as rebate offers and distributed minting and retiring of tokens."),(0,o.kt)("p",null,"You can find the TAIL we'll use for this example ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chia-blockchain/blob/protocol_and_cats_rebased/chia/wallet/puzzles/delegated_genesis_checker.clvm",title:"Delegated TAIL"},"here"),"."),(0,o.kt)("p",null,"We\u2019ll set up this CAT to delegate the same TAIL we set up previously. What this means is that nobody else can mint new tokens until you allow it. Keep in mind that this is only one of many possible implementations of a delegated TAIL."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Find a coin to mint, and create and push a new spendbundle:"),(0,o.kt)("p",{parentName:"li"},'a. Change to the "CAT-admin-tool-main" folder if you\'re not already there.'),(0,o.kt)("p",{parentName:"li"},"b. Figure out how many XCH mojos you want to use to issue your CAT. By default each CAT token will contain 1000 mojos, so you should multiply the number of tokens you want to mint by 1000. For example, if you want to mint 1 million tokens, you'll need 1 billion XCH mojos (1/1000 of an XCH)."),(0,o.kt)("p",{parentName:"li"},"c. Take note of your Receive Address in the standalone GUI."),(0,o.kt)("p",{parentName:"li"},"d. Run ",(0,o.kt)("inlineCode",{parentName:"p"},"chia keys show"),". Take note of your ","<","Fingerprint",">"," and ","<","Master public key",">","."),(0,o.kt)("p",{parentName:"li"},"e. Run ",(0,o.kt)("inlineCode",{parentName:"p"},"cats --tail .\\reference_tails\\delegated_tail.clsp.hex --curry 0x<Master public key> --send-to <wallet address> -a <XCH mojos> --as-bytes --select-coin")),(0,o.kt)("p",{parentName:"li"},'The --select-coin flag will choose a coin from your wallet to issue the CAT from. The final line of the output will be "Name: ',"<","Coin ID",">",'". You\u2019ll use "',"<","Coin ID",">",'" in the next step.'),(0,o.kt)("p",{parentName:"li"},"Now that you have a coin, you can create a full delegated TAIL. In our case, the TAIL it delegates will be of the single-mint variety."),(0,o.kt)("p",{parentName:"li"},"f. Run ",(0,o.kt)("inlineCode",{parentName:"p"},"cdv clsp curry .\\reference_tails\\genesis_by_coin_id.clsp.hex -a 0x<Coin ID>"),". (Keep in mind the 0x before ","<","Coin ID",">"," is necessary.) The result of this command will be a ","<","delegated puzzle",">",", which you\u2019ll pass in as part of the solution to your main TAIL."),(0,o.kt)("p",{parentName:"li"},"g. Run the same command again, with the additional --treehash flag. This will give you the ","<","treehash",">"," of the puzzle you just created:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"cdv clsp curry .\\reference_tails\\genesis_by_coin_id.clsp.hex -a 0x<Coin ID> --treehash")),(0,o.kt)("p",{parentName:"li"},"h. Sign the treehash (you do not need 0x here) with the ","<","Fingerprint",">"," you noted above by running this command:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"chia keys sign -d <treehash> -f <Fingerprint> -t m -b")),(0,o.kt)("p",{parentName:"li"},"The last two flags are for the path and bytes. Make sure the resulting Public Key corresponds to the ","<","Fingerprint",">"," you just used. Copy the ","<","Signature",">"," to use in the next step."),(0,o.kt)("p",{parentName:"li"},'i. Run the same "cats" command as above, but remove the --select-coin flag and add the --solution flag, passing in the ',"<","delegated puzzle",">"," you just calculated. This must be surrounded by quotes and parenthesis, and it must contain a solution, which we'll leave empty. Add the --signature flag as well, so the command looks like this:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},'cats --tail .\\reference_tails\\delegated_tail.clsp.hex --curry 0x<Master public key> --send-to <wallet address> -a <amount in mojos to issue> --as-bytes --solution "(<delegated puzzle> ())" --signature <Signature>')),(0,o.kt)("p",{parentName:"li"},"This command will output two values, ","<","Asset ID",">"," and ","<","Spend Bundle",">",". ","<","Asset ID",">"," will be the ID of this CAT, so it\u2019s important to save this value for later. ","<","Spend Bundle",">"," is a large wall of text. This is the actual transaction that you will push to the blockchain, in byte format."),(0,o.kt)("p",{parentName:"li"},"j. Run ",(0,o.kt)("inlineCode",{parentName:"p"},"cdv rpc pushtx <Spend Bundle>"),'. You should receive the message "status": "SUCCESS", "success": true.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add a wallet ID for your new CAT:"),(0,o.kt)("p",{parentName:"li"},"a. Switch to your light wallet GUI. Within a few minutes, your balance should decrease by the number of mojos you just minted. It won\u2019t show up in your transactions, though. That feature has not yet been implemented."),(0,o.kt)("p",{parentName:"li"},'b. Now you can add a wallet ID for your new CAT. In the upper left corner, click "+ ADD TOKEN", then click "+ Custom". Enter the name of your CAT (it can be anything) in the Name field. For the Token and Asset Issuance Limitations field, paste the ',"<","Asset ID",">"," you saved from a few steps ago. Click ADD."),(0,o.kt)("p",{parentName:"li"},"c. You will now be taken to your new CAT wallet. The balance should show the number of XCH mojos you chose to use, divided by 1000. This is because CAT mojos by default are one-thousandth of a CAT."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"NOTE: There are currently two cosmetic bugs you might run into, covered in the next two steps.")),(0,o.kt)("p",{parentName:"li"},"d. If you see a Total Balance of 0, you need to refresh your wallet. Run ",(0,o.kt)("inlineCode",{parentName:"p"},"chia start wallet-only -r"),". You should now see the correct balance. This will be fixed in a future release."),(0,o.kt)("p",{parentName:"li"},'e. Your cat\'s name might not show up in your wallet automatically. In this case, click the three dots next to "Status: Synced" and click "Rename Wallet". You can rename it to its proper name. This will be done automatically in a future release.'),(0,o.kt)("p",{parentName:"li"},"Just like the previous example, you now have access to your CAT in the GUI.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Because this CAT uses a delegated TAIL, you can issue new mintings by re-doing step 1 from this section. After you run the \u201ccdv rpc pushtx\u201d command, the balance in your CAT wallet will increase according to the new minting."))),(0,o.kt)("h2",{id:"preparing-for-mainnet"},"Preparing for mainnet"),(0,o.kt)("p",null,"After you are comfortable with issuing your CAT on testnet, you may wish to move to mainnet. Please keep in mind that there are extra risks inherent to publishing code on a public blockchain. If your CAT and/or TAIL have not been created securely, your funds could potentially be bricked or stolen. ",(0,o.kt)("strong",{parentName:"p"},"Proceed with caution.")),(0,o.kt)("p",null,"That said, issuing a CAT to mainnet isn't very different from issuing one to testnet. You'll still need a synced full node and a light wallet."),(0,o.kt)("p",null,"One difference is that for mainnet issuance, your full node could be based off of the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," code branch. This will save you time in syncing your full node. Your light wallet will still need to be running on the ",(0,o.kt)("inlineCode",{parentName:"p"},"protocol_and_cats_rebased")," branch."),(0,o.kt)("p",null,"When you are ready to issue your CAT to mainnet, the first step is to run ",(0,o.kt)("inlineCode",{parentName:"p"},"chia configure -t false"),", which will instruct Chia to switch your configuration to mainnet."),(0,o.kt)("p",null,"Next, you'll need to generate and protect your keys in a secure manner, which we'll discuss in the following section."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: You may be wondering how to get your CAT listed among the default options in our GUI. We will formalize this process around January 2022, but it has not yet been completed. But don't let that discourage you from creating your own CATs. They will be fully functional, even if they are not listed in our GUI.")),(0,o.kt)("h2",{id:"generating-a-secure-key-pair"},"Generating a secure key pair"),(0,o.kt)("p",null,"Before we walk you through the process of securely generating and saving a new public/private key pair, please read this important message."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"WARNING:")," The key pair you are about to use will control the minting and retirement of these tokens ",(0,o.kt)("strong",{parentName:"p"},"forever.")," If the private key were ever compromised, an attacker could mint new tokens, as well as melt any that they owned into regular XCH."),(0,o.kt)("p",{parentName:"blockquote"},"The only way to nullify an attack would be to keep track of illegitimate mints (luckily all of this is fully visible on the public ledger), issue a new CAT, and then offer an exchange of legitimate old CATs for the new CAT type."),(0,o.kt)("p",{parentName:"blockquote"},"This would be a complex and time-consuming process that would likely result in people being sold counterfeit CATs at some point. It\u2019s very important to keep your private key secret.")),(0,o.kt)("p",null,"Here's how to generate a secure public/private key pair for issuing your new CAT:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open your choice of command prompt and change to the ",(0,o.kt)("inlineCode",{parentName:"p"},"chia-blockchain")," directory.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run ",(0,o.kt)("inlineCode",{parentName:"p"},".\\venv\\Scripts\\Activate.ps1")," to activate your virtual environment.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"chia keys show"),"."),(0,o.kt)("p",{parentName:"li"},"a. If you receive this message: ",(0,o.kt)("inlineCode",{parentName:"p"},"There are no saved private keys"),", then proceed to step 4."),(0,o.kt)("p",{parentName:"li"},"b. If you have any keys stored on your machine, they'll be shown now. Note the Fingerprint for each key, as you will ",(0,o.kt)("em",{parentName:"p"},"not")," be using these keys to create your CAT and you don't want to confuse them for the key you are about to create. Even better, if this is an option for you, would be to delete your existing keys to avoid confusing them for the new ones. Just be sure to save your mnemonic seed somewhere secure before you delete your keys.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"chia init"),". This will initialize your environment if it has not yet been set up.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"chia keys generate"),". This will generate a new public/private key pair.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"chia keys show --show-mnemonic-seed"),". This will show your public and private keys, as well as your Mnemonic seed.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy your new key pair's ",(0,o.kt)("inlineCode",{parentName:"p"},"Mnemonic seed (24 secret words)")," to a secure offline location. These 24 words are all you'll need to restore your wallet in the future."))),(0,o.kt)("h2",{id:"potential-future-additions"},"Potential future additions"),(0,o.kt)("p",null,"As our Cat1 standard is still in draft form, this document will likely require multiple updates. In the future, we may add sections for issuing CATs with different TAILs, and we'll do a major revision when the ",(0,o.kt)("inlineCode",{parentName:"p"},"protocol_and_cats_rebased")," branch is merged into the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," branch."),(0,o.kt)("p",null,"Be sure to check back for future updates. Good luck and happy minting!"))}h.isMDXComponent=!0}}]);