(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{167:function(e,t,n){},291:function(e,t,n){e.exports=n(728)},369:function(e,t){},371:function(e,t){},391:function(e,t){},394:function(e,t){},648:function(e,t){},728:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(47),s=n.n(r),i=(n(167),n(286)),l=n(56),c=n(17),u=n.n(c),m=n(279),p=n.n(m),y=c.Connectors.InjectedConnector,d=c.Connectors.NetworkOnlyConnector,b=c.Connectors.PortisConnector,f={Injected:new y({supportedNetworks:[1,3,4]}),Network:new d({providerURL:"https://ropsten.infura.io/v3/c4809a978c5b48c8a5b8fdc9133cef42"}),Portis:new b({api:p.a,dAppId:"c5ae5710-95ad-43ff-8d6b-e7657ab429b4",network:"ropsten"})},h=n(14),g=n(730),v=n(731),w=n(732),E=n(734);var x=function(e){var t=Object(c.useWeb3Context)(),n=Object(a.useState)(!0),r=Object(h.a)(n,2),s=r[0],i=r[1];return console.log(Object.keys(f)),"router"===e.source&&t.setConnector("Network"),t.error&&console.error("Error!"),"router"===e.source?null:o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,null,o.a.createElement("div",{className:"container text-center"},!t.active&&o.a.createElement(v.a,{style:{display:"flex",alignItems:"center",justifyContent:"center"}},o.a.createElement(w.a,{onClick:function(){return t.setConnector("Injected")}},"Metamask"),o.a.createElement(w.a,{onClick:function(){return t.setConnector("Portis")}},"Portis")))),o.a.createElement(g.a,null,o.a.createElement("div",{className:"container text-center"},t.error&&o.a.createElement("p",null,"Something went wrong.  Please refresh the page and unlock Metamask or Portis again."))),o.a.createElement(g.a,null,o.a.createElement("div",{className:"container text-center"},t.active&&"Network"===t.connectorName&&o.a.createElement("p",null,"You do not currently have Metamask or Portis activated.  Please unlock Metamask or Portis in order to begin ENS domain registration process."))),"Network"!==t.connectorName&&o.a.createElement(E.a,{size:"lg",centered:!0,show:s,onHide:function(){return i(!1)}},o.a.createElement(E.a.Header,{closeButton:!0},o.a.createElement(E.a.Title,{id:"intro-modal"},"First time here?")),o.a.createElement(E.a.Body,null,o.a.createElement("h4",null,"What is ArwENS?"),o.a.createElement("p",null,"ArwENS is a one-stop shop for registering ENS domain/subdomains, storing text or web pages on Arweave, and then linking your newly minted ENS domain to your Arweave content."),o.a.createElement("h4",null,"What you need to get started"),o.a.createElement("ol",null,o.a.createElement("li",null," A Metamask or Portis wallet"),o.a.createElement("li",null," An Arweave wallet with some AR in it",o.a.createElement("br",null),o.a.createElement("span",null," Get a free one ",o.a.createElement("a",{href:"https://tokens.arweave.org",target:"_blank"},"here")," with 1 AR so you can try it out")),o.a.createElement("li",null," Something you want to host permanently on the permaweb")),o.a.createElement("h4",null,"How do I do this?"),o.a.createElement("p",null," The Dapp will walk you through it but below are the steps"),o.a.createElement("ol",null,o.a.createElement("li",null," Pick an ENS domain/subdomain to register and execute the transactions needed to register",o.a.createElement("br",null),o.a.createElement("span",null,"You'll be prompted a couple of times during the domain registration process.  If registering a domain name,the second transaction will include the total ETH required to register the domain for 1 year.")),o.a.createElement("li",null," Provide your Arweave key file",o.a.createElement("br",null),o.a.createElement("span",null,"Note, this key file is never leaving your device.  The Dapp is just using it to talk to Arweave.")),o.a.createElement("li",null," Upload your text/html file to the permaweb"),o.a.createElement("li",null," Link your ENS domain to your permanently hosted file"),o.a.createElement("li",null," Share your newly hosted page with everyone")))),o.a.createElement("div",{className:"container text-center"},(t.active&&"Network"===t.connectorName||t.error&&t.connectorName)&&o.a.createElement(w.a,{onClick:function(){return t.unsetConnector()}},t.active?"Retry Metamask":"Reset")))},N=n(15),C=n.n(N),k=n(67),S=n(11),A=[{constant:!0,inputs:[{name:"node",type:"bytes32"}],name:"resolver",outputs:[{name:"",type:"address"}],payable:!1,type:"function"},{constant:!0,inputs:[{name:"node",type:"bytes32"}],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"node",type:"bytes32"},{name:"label",type:"bytes32"},{name:"owner",type:"address"}],name:"setSubnodeOwner",outputs:[],payable:!1,type:"function"},{constant:!1,inputs:[{name:"node",type:"bytes32"},{name:"ttl",type:"uint64"}],name:"setTTL",outputs:[],payable:!1,type:"function"},{constant:!0,inputs:[{name:"node",type:"bytes32"}],name:"ttl",outputs:[{name:"",type:"uint64"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"node",type:"bytes32"},{name:"resolver",type:"address"}],name:"setResolver",outputs:[],payable:!1,type:"function"},{constant:!1,inputs:[{name:"node",type:"bytes32"},{name:"owner",type:"address"}],name:"setOwner",outputs:[],payable:!1,type:"function"},{inputs:[],payable:!1,type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,name:"node",type:"bytes32"},{indexed:!1,name:"owner",type:"address"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"node",type:"bytes32"},{indexed:!0,name:"label",type:"bytes32"},{indexed:!1,name:"owner",type:"address"}],name:"NewOwner",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"node",type:"bytes32"},{indexed:!1,name:"resolver",type:"address"}],name:"NewResolver",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"node",type:"bytes32"},{indexed:!1,name:"ttl",type:"uint64"}],name:"NewTTL",type:"event"}],M=n(733),D=n(285),O=n(735),j=n(284),T=n(736),R=n(737),I=[{constant:!1,inputs:[],name:"renounceOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"bytes32"}],name:"commitments",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"MIN_REGISTRATION_DURATION",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"minCommitmentAge",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"isOwner",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"maxCommitmentAge",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[{name:"_base",type:"address"},{name:"_prices",type:"address"},{name:"_minCommitmentAge",type:"uint256"},{name:"_maxCommitmentAge",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,name:"name",type:"string"},{indexed:!0,name:"label",type:"bytes32"},{indexed:!0,name:"owner",type:"address"},{indexed:!1,name:"cost",type:"uint256"},{indexed:!1,name:"expires",type:"uint256"}],name:"NameRegistered",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"name",type:"string"},{indexed:!0,name:"label",type:"bytes32"},{indexed:!1,name:"cost",type:"uint256"},{indexed:!1,name:"expires",type:"uint256"}],name:"NameRenewed",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"oracle",type:"address"}],name:"NewPriceOracle",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"previousOwner",type:"address"},{indexed:!0,name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{constant:!0,inputs:[{name:"name",type:"string"},{name:"duration",type:"uint256"}],name:"rentPrice",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"name",type:"string"}],name:"valid",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"name",type:"string"}],name:"available",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"name",type:"string"},{name:"owner",type:"address"},{name:"secret",type:"bytes32"}],name:"makeCommitment",outputs:[{name:"",type:"bytes32"}],payable:!1,stateMutability:"pure",type:"function"},{constant:!1,inputs:[{name:"commitment",type:"bytes32"}],name:"commit",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"name",type:"string"},{name:"owner",type:"address"},{name:"duration",type:"uint256"},{name:"secret",type:"bytes32"}],name:"register",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"name",type:"string"},{name:"duration",type:"uint256"}],name:"renew",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"_prices",type:"address"}],name:"setPriceOracle",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_minCommitmentAge",type:"uint256"},{name:"_maxCommitmentAge",type:"uint256"}],name:"setCommitmentAges",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"withdraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"interfaceID",type:"bytes4"}],name:"supportsInterface",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"pure",type:"function"}],P=n(290),B=n(289),F=n(114),_=n.n(F);var W=function(e){var t=o.a.useState(""),n=Object(h.a)(t,2),a=n[0],r=n[1],s=_.a.init({host:"arweave.net",port:443,protocol:"https"});return console.log(e.arweaveHash),s.transactions.get(e.arweaveHash).then(function(e){e.get("tags").forEach(function(e){var t=e.get("name",{decode:!0,string:!0}),n=e.get("value",{decode:!0,string:!0});console.log("".concat(t," : ").concat(n))});var t=e.get("data",{decode:!0,string:!0});r(t),console.log(a)}).catch(function(e){console.log(e),r("error")}),"error"===a?o.a.createElement(o.a.Fragment,null,"error"===a&&o.a.createElement("p",null,"Still lost in the permaweb")):o.a.createElement("iframe",{width:"100%",height:"100%",frameborder:"0",srcdoc:a,src:"https://arweave.net/"+e.arweaveHash},">")},L=[{constant:!0,inputs:[{name:"interfaceID",type:"bytes4"}],name:"supportsInterface",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"pure",type:"function"},{constant:!1,inputs:[{name:"node",type:"bytes32"},{name:"data",type:"bytes"}],name:"setDNSRecords",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"node",type:"bytes32"},{name:"key",type:"string"},{name:"value",type:"string"}],name:"setText",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"node",type:"bytes32"},{name:"interfaceID",type:"bytes4"}],name:"interfaceImplementer",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"node",type:"bytes32"},{name:"contentTypes",type:"uint256"}],name:"ABI",outputs:[{name:"",type:"uint256"},{name:"",type:"bytes"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"node",type:"bytes32"},{name:"x",type:"bytes32"},{name:"y",type:"bytes32"}],name:"setPubkey",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"node",type:"bytes32"},{name:"hash",type:"bytes"}],name:"setContenthash",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"node",type:"bytes32"}],name:"addr",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"node",type:"bytes32"},{name:"name",type:"bytes32"}],name:"hasDNSRecords",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"node",type:"bytes32"},{name:"key",type:"string"}],name:"text",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"node",type:"bytes32"},{name:"contentType",type:"uint256"},{name:"data",type:"bytes"}],name:"setABI",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"node",type:"bytes32"}],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"node",type:"bytes32"},{name:"name",type:"string"}],name:"setName",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"node",type:"bytes32"},{name:"name",type:"bytes32"},{name:"resource",type:"uint16"}],name:"dnsRecord",outputs:[{name:"",type:"bytes"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"node",type:"bytes32"}],name:"clearDNSZone",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"node",type:"bytes32"}],name:"contenthash",outputs:[{name:"",type:"bytes"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"node",type:"bytes32"}],name:"pubkey",outputs:[{name:"x",type:"bytes32"},{name:"y",type:"bytes32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"node",type:"bytes32"},{name:"addr",type:"address"}],name:"setAddr",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"node",type:"bytes32"},{name:"interfaceID",type:"bytes4"},{name:"implementer",type:"address"}],name:"setInterface",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"bytes32"},{name:"",type:"address"},{name:"",type:"address"}],name:"authorisations",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[{name:"_ens",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,name:"node",type:"bytes32"},{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"target",type:"address"},{indexed:!1,name:"isAuthorised",type:"bool"}],name:"AuthorisationChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"node",type:"bytes32"},{indexed:!0,name:"indexedKey",type:"string"},{indexed:!1,name:"key",type:"string"}],name:"TextChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"node",type:"bytes32"},{indexed:!1,name:"x",type:"bytes32"},{indexed:!1,name:"y",type:"bytes32"}],name:"PubkeyChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"node",type:"bytes32"},{indexed:!1,name:"name",type:"string"}],name:"NameChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"node",type:"bytes32"},{indexed:!0,name:"interfaceID",type:"bytes4"},{indexed:!1,name:"implementer",type:"address"}],name:"InterfaceChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"node",type:"bytes32"},{indexed:!1,name:"name",type:"bytes"},{indexed:!1,name:"resource",type:"uint16"},{indexed:!1,name:"record",type:"bytes"}],name:"DNSRecordChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"node",type:"bytes32"},{indexed:!1,name:"name",type:"bytes"},{indexed:!1,name:"resource",type:"uint16"}],name:"DNSRecordDeleted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"node",type:"bytes32"}],name:"DNSZoneCleared",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"node",type:"bytes32"},{indexed:!1,name:"hash",type:"bytes"}],name:"ContenthashChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"node",type:"bytes32"},{indexed:!1,name:"a",type:"address"}],name:"AddrChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"node",type:"bytes32"},{indexed:!0,name:"contentType",type:"uint256"}],name:"ABIChanged",type:"event"},{constant:!1,inputs:[{name:"node",type:"bytes32"},{name:"target",type:"address"},{name:"isAuthorised",type:"bool"}],name:"setAuthorisation",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}];var H=function(e){var t=Object(c.useWeb3Context)(),n=o.a.useState(e.txid),a=Object(h.a)(n,2),r=a[0],s=a[1],i=o.a.useState(e.domainName),l=Object(h.a)(i,2),u=l[0],m=l[1],p=o.a.useState(!1),y=Object(h.a)(p,2),d=y[0],b=y[1];return t.active?o.a.createElement(o.a.Fragment,null,"Network"!==t.connectorName&&o.a.createElement("div",{className:"container mt-4 text-center"},o.a.createElement("h3",null,"Link ENS to hosted Arweave page")),"Network"!==t.connectorName&&o.a.createElement(O.a,{onSubmit:function(e){e.preventDefault(),function(e){var n=t.library.getSigner(),a=S.ethers.utils.namehash(u);console.log("Namehash of "+u+" is "+a),new S.ethers.Contract("0x5FfC014343cd971B7eb70732021E26C35B744cc4",L,n).setText(a,"url",e).then(function(e){console.log(e),b(!0)}).catch(function(e){console.log(e),m("error")})}(r)}},o.a.createElement(g.a,null,o.a.createElement(D.a,null,o.a.createElement(O.a.Group,{controlId:"ensDomain"},o.a.createElement(O.a.Label,null,"ENS Domain"),o.a.createElement(O.a.Control,{type:"text",defaultValue:e.domainName,placeholder:"alice.eth",onChange:function(e){m(e.target.value),console.log("Setting ensDomainName to "+u)}}),o.a.createElement(O.a.Text,{className:"text-muted"},"Enter the ENS domain or subdomain you wish to link to Arweave content"))),o.a.createElement(D.a,null,o.a.createElement(O.a.Group,{controlId:"arweaveId"},o.a.createElement(O.a.Label,null,"Arweave Transaction ID"),o.a.createElement(O.a.Control,{type:"text",defaultValue:e.txid,onChange:function(e){s(e.target.value),console.log("Setting URL to "+r)}}),o.a.createElement(O.a.Text,{className:"text-muted"},"Enter the Arweave transaction ID you want link to your ENS domain/subdomain")))),o.a.createElement(g.a,{className:"justify-content-md-center"},o.a.createElement(w.a,{variant:"primary",type:"submit"},"Link ENS to Arweave"),o.a.createElement(T.a,{show:"error"===u,key:"domainalert",variant:"danger"},"Something went wrong!  Please try again."))),o.a.createElement(g.a,null,o.a.createElement("div",{className:"container py-3 text-center"},o.a.createElement(w.a,{variant:"primary",type:"submit",onClick:function(e){e.preventDefault(),function(){var e=S.ethers.utils.namehash(u);new S.ethers.Contract("0x5FfC014343cd971B7eb70732021E26C35B744cc4",L,t.library).text(e,"url").then(function(e){console.log(e),s(e)}).catch(function(e){console.log(e),s("none")})}(),console.log("An ENS Domain name of "+u+"was entered")}},"Retrieve Arweave Resource"))),o.a.createElement(g.a,null,"none"!==r&&o.a.createElement("p",null,"The Arweave transction ID is: ",r),"none"!==r&&o.a.createElement(W,{arweaveHash:r,source:"app"})),o.a.createElement(g.a,null,d&&o.a.createElement("p",null,"Your page is now permanently hosted on the permaweb and can be accessed from anywhere by using the below URL.",window.location.href+e.domainName))):null},U={flex:1,display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",borderWidth:1,borderRadius:1,borderColor:"#eeeeee",borderStyle:"dashed",backgroundColor:"#fafafa",color:"#bdbdbd",outline:"none",transition:"border .24s ease-in-out"},G={borderColor:"#2196f3"},K={borderColor:"#00e676"},J={borderColor:"#ff1744"};var Y=function(e){var t=Object(c.useWeb3Context)(),n=o.a.useState(),r=Object(h.a)(n,2),s=r[0],i=r[1],l=o.a.useState(),u=Object(h.a)(l,2),m=u[0],p=u[1],y=o.a.useState(),d=Object(h.a)(y,2),b=d[0],f=d[1],v=o.a.useState(""),E=Object(h.a)(v,2),x=E[0],N=E[1];o.a.useEffect(function(){s&&function(e){return F.apply(this,arguments)}(s).then(function(e){return p(e)})});var S=_.a.init({host:"arweave.net",port:443,protocol:"https"}),A=Object(a.useCallback)(function(e){console.log(e);var t=new FileReader;t.onabort=function(){return console.log("file reading was aborted")},t.onerror=function(){return console.log("file reading has failed")},t.onload=function(t){if("application/json"===e[0].type){var n=JSON.parse(t.target.result);S.wallets.jwkToAddress(n).then(function(e){i({privateKey:n,address:e})})}else{var a=t.target.result;f(a),function(e,t,n){return W.apply(this,arguments)}(s.privateKey,a,{name:"Content-Type",value:e[0].type}).then(function(e){return N(e)})}},t.readAsText(e[0])},[s,b]),M=Object(B.a)({onDrop:A,accept:"application/json , text/html , text/plain"}),O=M.isDragActive,j=M.isDragAccept,T=M.getRootProps,R=M.getInputProps,I=M.isDragReject;function F(){return(F=Object(k.a)(C.a.mark(function e(t){var n;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.wallets.getBalance(t.address);case 2:return n=e.sent,console.log("Wallet balance is currently "+S.ar.winstonToAr(n)),e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function W(){return(W=Object(k.a)(C.a.mark(function e(t,n,a){var o;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),e.next=3,S.createTransaction({data:n},t);case 3:return(o=e.sent).addTag(a.name,a.value),console.log("This transaction will cost "+o.reward+" winston"),e.next=8,S.transactions.sign(o,s.privateKey);case 8:return console.log(o),e.abrupt("return",o);case 10:case"end":return e.stop()}},e)}))).apply(this,arguments)}function L(){return(L=Object(k.a)(C.a.mark(function e(t){var n;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,S.transactions.post(t);case 3:return n=e.sent,console.log(n),f(),e.abrupt("return",n.status);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}M.acceptedFiles;var Y=Object(a.useMemo)(function(){return Object(P.a)({},U,O?G:{},j?K:{},I?J:{})},[O,I]);return t.active&&"Network"!==t.connectorName?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container mt-3 text-center"},o.a.createElement("h3",null,"Arweave registration/file deployment")),!s&&o.a.createElement("div",{className:"container text-center mt-5"},o.a.createElement("div",T({style:Y}),o.a.createElement("input",R()),!O&&"Click here or drop your Arweave keyfile here to connect to Arweave",O&&!I&&"Drop keyfile here",I&&"Please only drop your keyfile ")),o.a.createElement("div",{className:"container text-left"},s&&o.a.createElement("p",null,"Arweave wallet address: ",s.address)),o.a.createElement("div",{className:"container text-left"},m&&o.a.createElement("p",null,"Arweave wallet balance: ",m," winston")),s&&m&&!b&&o.a.createElement("div",{className:"container text-center mt-5"},o.a.createElement("div",T({style:Y}),o.a.createElement("input",R()),!O&&"Click here or drop a file to deploy to Arweave.",O&&!I&&"Drop file here",I&&"Please only drop HTML or Text files here")),b&&o.a.createElement("p",null,"The contents of your file are below",o.a.createElement("p",null),o.a.createElement("p",null),b),x&&o.a.createElement("ul",null,o.a.createElement("li",null,"Transaction ID: ",o.a.createElement("a",{href:"https://arweave.net/tx/"+x.id,target:"_blank"},x.id)),o.a.createElement("li",null,"Transaction Cost: ",x.reward," winston")),o.a.createElement(g.a,null,x&&o.a.createElement(D.a,null,o.a.createElement("div",{className:"container pt-1"},o.a.createElement(w.a,{key:"submitTxn",onClick:function(){return function(e){return L.apply(this,arguments)}(x)}},"Submit Transaction"))),x&&o.a.createElement(D.a,null,o.a.createElement("div",{className:"container pt-1"},o.a.createElement(w.a,{key:"reset",onClick:function(){f(),N("")}},"Start Over")))),""!==x&&o.a.createElement(g.a,null,o.a.createElement(D.a,null,o.a.createElement(H,{domainName:e.domainName,txid:x.id})))):null};var q=function(){var e=Object(c.useWeb3Context)(),t=o.a.useState(),n=Object(h.a)(t,2),a=n[0],r=n[1],s=o.a.useState(),i=Object(h.a)(s,2),l=i[0],u=i[1],m=o.a.useState({state:"Not Started",per:0}),p=Object(h.a)(m,2),y=p[0],d=p[1],b=o.a.useState(!0),f=Object(h.a)(b,2),v=f[0],E=f[1],x=o.a.useState(),N=Object(h.a)(x,2),P=N[0],B=N[1];function F(){return(F=Object(k.a)(C.a.mark(function t(){var n,o,r,s,i,l;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.library.getSigner(),o=a.split("."),r=S.ethers.utils.keccak256(S.ethers.utils.toUtf8Bytes(o[0])),s=S.ethers.utils.namehash(o[1]+"."+o[2]),console.log(r),i=new S.ethers.Contract("0x112234455c3a32fd11230c42e7bccd4a84e02010",A,n),d({state:"Registering subdomain",per:33}),t.next=9,i.setSubnodeOwner(s,r,i.owner(s));case 9:return l=t.sent,console.log(l),t.next=13,l.wait();case 13:return d({state:"Setting Resolver",per:66}),t.next=16,i.setResolver(S.ethers.utils.namehash(a),"0x5FfC014343cd971B7eb70732021E26C35B744cc4");case 16:l=t.sent,console.log(l),d({state:"Domain Registered",per:100}),B(a);case 20:case"end":return t.stop()}},t)}))).apply(this,arguments)}function _(){return(_=Object(k.a)(C.a.mark(function t(){var n,a,o,r,s,i,c,u,m,p,y,b;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.library.getSigner(),a=S.ethers.getDefaultProvider(),console.log("ENS Domain Name Hash is "+l),o=new S.ethers.Contract("0x357DBd063BeA7F0713BF88A3e97B7436B0235979",I,n),r=l.split(".")[0],t.next=7,o.available(r);case 7:if(s=t.sent,console.log(s),!1!==s){t.next=12;break}return E(!1),t.abrupt("return",console.log("Domain name unavailable"));case 12:return i=S.ethers.utils.formatBytes32String(r),t.next=15,o.makeCommitment(r,n._address,i);case 15:return c=t.sent,console.log("The commit hash for this registration request is "+c+" and the commit secret is "+i),t.next=19,o.rentPrice(r,31535999);case 19:return u=t.sent,console.log("ENS Domain Name Rent Price: "+u),d({state:"Committing Domain",per:33}),t.next=24,o.commit(c);case 24:return s=t.sent,console.log(s),t.next=28,s.wait();case 28:return t.next=30,o.minCommitmentAge();case 30:return m=t.sent,p=m.toNumber(),t.next=34,new Promise(function(e){return setTimeout(e,1e3*p)});case 34:return console.log("Waited "+p+" seconds"),t.next=37,a.getGasPrice();case 37:return y=t.sent,d({state:"Registering Domain",per:66}),t.next=41,o.register(r,n._address,S.ethers.utils.bigNumberify(31535999),i,{value:u,gasLimit:3e5,gasPrice:y});case 41:return s=t.sent,t.next=44,s.wait();case 44:return console.log("Registered "+l+" with transaction "+s),b=new S.ethers.Contract("0x112234455c3a32fd11230c42e7bccd4a84e02010",A,n),d({state:"Setting Resolver",per:90}),t.next=49,b.setResolver(S.ethers.utils.namehash(l),"0x5FfC014343cd971B7eb70732021E26C35B744cc4");case 49:return s=t.sent,t.next=52,s.wait();case 52:console.log(s),d({state:"Domain Registered",per:100}),B(l);case 55:case"end":return t.stop()}},t)}))).apply(this,arguments)}return e.active&&"Network"!==e.connectorName?o.a.createElement(M.a,null,o.a.createElement(g.a,null,o.a.createElement(D.a,null,o.a.createElement(O.a,{onSubmit:function(e){e.preventDefault(),function(){return _.apply(this,arguments)}().catch(function(e){d({state:"",per:0}),console.log(e)})}},o.a.createElement(j.a,{placeholder:"alice.eth","aria-label":"ENSDomain",type:"text",value:l,onChange:function(e){u(e.target.value),E(!0),console.log("Setting ENS Domain Name to "+l)},"aria-describedby":"basic-addon1"}),o.a.createElement(O.a.Text,{className:"text-muted"},"3 Transactions - Commit; Register Domain; Set resolver"),o.a.createElement("div",{className:"container pt-2 text-center "},o.a.createElement(w.a,{type:"submit",disabled:y.per>0},y.per>0?"Registering Domain":"Register Domain"),o.a.createElement(T.a,{show:!v,key:"domainalert",variant:"danger"},"That ENS domain name is not available")))),o.a.createElement(D.a,null,o.a.createElement(O.a,{onSubmit:function(e){e.preventDefault(),function(){F.apply(this,arguments)}()}},o.a.createElement(j.a,{type:"text",value:a,onChange:function(e){r(e.target.value),console.log("Setting ENS Domain Name to "+a)},placeholder:"bob.alice.eth",className:" mr-sm-2"}),o.a.createElement(O.a.Text,{className:"text-muted"},"2 Transactions - Register Subdomain; Set resolver"),o.a.createElement("div",{className:"container pt-2 text-center "},o.a.createElement(w.a,{type:"submit",disabled:y.per>0},"Register Subdomain"))))),o.a.createElement(g.a,null,y.per>0&&o.a.createElement("div",{className:"container text-center"},o.a.createElement(R.a,{now:y.per,label:y.state}))),100===y.per&&o.a.createElement(g.a,null,o.a.createElement(D.a,null,o.a.createElement(Y,{domainName:P})))):null};var V=function(e){var t=Object(c.useWeb3Context)(),n=o.a.useState("none"),a=Object(h.a)(n,2),r=a[0],s=a[1],i=o.a.useState(e.domainName),l=Object(h.a)(i,2),u=l[0];return l[1],t.active?(function(){var e=S.ethers.utils.namehash(u);new S.ethers.Contract("0x5FfC014343cd971B7eb70732021E26C35B744cc4",L,t.library).text(e,"url").then(function(e){console.log(e),s(e)}).catch(function(e){console.log(e),s("none")})}(),o.a.createElement(o.a.Fragment,null,o.a.createElement(W,{arweaveHash:r,source:"router"}))):o.a.createElement("p",null,"No Web3 connection found")};var Z=function(){return o.a.createElement(i.a,null,o.a.createElement(l.c,null,o.a.createElement(l.a,{exact:!0,path:"/",render:function(){return o.a.createElement(u.a,{connectors:f,libraryName:"ethers.js"},o.a.createElement(M.a,{className:"App"},o.a.createElement(g.a,null,o.a.createElement("div",{className:"container text-center"},o.a.createElement("h1",null,"ArwENS"))),o.a.createElement(g.a,null,o.a.createElement("div",{className:"container text-center"},"A simple Dapp for registering ENS domains and linking to content hosted on Arweave")),o.a.createElement(g.a,null,o.a.createElement(D.a,null,o.a.createElement(x,null))),o.a.createElement(g.a,null,o.a.createElement(D.a,null,o.a.createElement(q,null)))))}}),o.a.createElement(l.a,{path:"/:id",render:function(e){return o.a.createElement(u.a,{connectors:f,libraryName:"ethers.js"},o.a.createElement(g.a,null,o.a.createElement(D.a,null,o.a.createElement(x,{source:"router"}),o.a.createElement(V,{domainName:e.match.params.id}))))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[291,1,2]]]);
//# sourceMappingURL=main.2e29f5ae.chunk.js.map