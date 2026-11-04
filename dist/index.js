"use strict";var m=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(o){throw (r=0, o)}};};var y=m(function(I,l){
var f=5;function h(e,r,o,d,v,q,s,a,p,g){var i,u,n,c,t;if(e<=0)return a;if(i=d,u=s,n=g,o===1&&q===1&&p===1){if(c=e%f,c>0)for(t=0;t<c;t++)a[n]=r[i]/v[u],i+=o,u+=q,n+=p;if(e<f)return a;for(t=c;t<e;t+=f)a[n]=r[i]/v[u],a[n+1]=r[i+1]/v[u+1],a[n+2]=r[i+2]/v[u+2],a[n+3]=r[i+3]/v[u+3],a[n+4]=r[i+4]/v[u+4],i+=f,u+=f,n+=f;return a}for(t=0;t<e;t++)a[n]=r[i]/v[u],i+=o,u+=q,n+=p;return a}l.exports=h
});var _=m(function(J,R){
var j=require('@stdlib/strided-base-stride2offset/dist'),k=y();function z(e,r,o,d,v,q,s){return k(e,r,o,j(e,o),d,v,j(e,v),q,s,j(e,s))}R.exports=z
});var O=m(function(K,M){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=_(),B=y();A(E,"ndarray",B);M.exports=E
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=O(),x,b=D(C(__dirname,"./native.js"));F(b)?x=G:x=b;module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
